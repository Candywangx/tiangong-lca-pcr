---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sanitary-towels-pads-and-tampons-napkins-and-napkin-liners-for-babies-and-similar-artic-fcbf250b
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: aligned
---

# 绒毛浆/SAP一次性胶贴式婴儿尿裤转换制造

## 1. 范围与适用性

本PCR适用于未使用、绒毛浆/聚丙烯酸钠芯体的一次性胶贴式婴儿尿裤转换厂门制造。代表性实际产品设计为美国无香型Pampers Swaddlers胶贴式尿裤4号；生产者构造及扣合说明支持组件边界，不代表已验证专有工厂配方。须应用于有实测数据及实际组件规格的具体批次。此设计包含PP/PE面层、聚酯导流层、无元素氯净化纤维素/SAP芯体、PE/PP外层、PP护围与扣合件、氨纶、聚合物胶、润肤膏及尿显剂。不规定每片质量、配方比例或吸收容量。[pampers-swaddlers-construction; pampers-diaper-components]

方法路线为外购组件、电力驱动干式解纤/成型、组装及包装出厂。湿法制浆、现场一体化制浆、现场燃烧、购热/蒸汽、溶剂涂布/印刷及现场废水处理须另有证据扩展路线。购入印花/预涂组件所含材料负荷保留在上游。卫生巾/卫生棉条、成人失禁品、布尿裤/可复用尿裤、游泳尿裤、拉拉裤及无绒毛浆芯体均不在此方法内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.sanitary-towels-pads-and-tampons-napkins-and-napkin-liners-for-babies-and-similar-artic-fcbf250b |
| classification_refs | CPC 3.0 32196; narrower |
| covered_products | 绒毛浆/SAP芯体一次性胶贴式婴儿尿裤；外购组件电力转换制造 |
| excluded_products | 卫生巾；卫生棉条；成人失禁品；可复用；游泳；拉拉裤；无绒毛浆设计 |
| representative_product | 美国无香型Pampers Swaddlers胶贴式婴儿尿裤4号设计；须有实际批次规格 |
| production_route | 购入ECF化学绒毛浆板及不同组件 → 干式解纤/SAP计量/芯体成型 → 组装及电热施胶/涂层 → 裁切/质检/包装；一个聚合前景单元，分阶段计量 |
| market_state | 转换厂出货门口未使用、完整、合格尿裤，实际含水状态；随货包装另记 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造用于容纳婴儿排泄物的指定完整胶贴式尿裤 |
| How much | 1 kg合格完整净尿裤；这是制造声明单位 |
| How well | 声明实际尺寸、组件规格和批次验收测试；不主张通用吸收或防漏等效 |
| How long or cycle | 一次制造至转换厂门的单次使用产品；使用时长不在此单位内 |
| reference_flow_link | `diaper_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 任何材料的卫生巾（护垫）和卫生棉条、婴儿餐巾和餐巾衬垫及类似物品 `aaedb37f-8a1a-4dea-aa96-3613fa13bb0e` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 胶贴式婴儿尿裤；尺寸及批次；完整BOM；浆及SAP身份；每个组件材料及供货状态；实际净制品含水率；香料/润肤/尿显状态；质检验收协议/结果；全电力转换路线及供电电压；包装排除；供应方数据集基准；场址/年份；外部废物及排放路线 |

广义参考记录包含婴儿尿布，并声明厂内已制造成品。其其他子类不定义本PCR。每个具体数据集须声明上述限定；质量相同不代表不同尺寸或产品功能相同。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | `diaper_output` | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 1 kg出货含水状态的完整净合格尿裤。所有清单和采集汇总统一此reference_flow基准；不以纯浆/SAP质量替代，不含包装。 |
| `net_batch_basis` | 全部清单行 | 质量 | kg | 按cp_output采集原始Q，并在同一完整池采集各外部期间原始总量A_i。清单卡的q_i=A_i/Q表示normalize_net_product这一次计算，不要求再次相除。片数只佐证实测净质量，不确立推定单片质量。 |
| `received_pulp_basis` | `fluff_pulp` | 质量 | kg | 实测到货质量和干固体分数s分别保存。供应方AD报告是声明的约定，不是实际到货含水率。连背景前核实换算及参考基准。 |
| `electric_energy_basis` | `grid_electricity` | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 交付kWh只按乘3.6换为MJ。保留供应电压/结构及损耗；厂界内降压损耗计入前景消耗，不额外记为第二次购电。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 转换厂收货的购入浆板和逐项声明组件；披露实际供应方牌号/状态/路线及入厂运输边界 |
| starting_condition_role | foreground_module |
| product_classification_scope | 仅CPC32196胶贴式婴儿尿裤子集；方法独立于分类标签 |
| recursive_input_rule | 购入成品尿裤不递归重建其制造；记录实际投入及兼容上游数据，披露整修/返工。内部返工仍为内部，不再次采购同一废品。 |
| upstream_dataset_requirement | 供应方组件制造及运输须匹配参考属性；浆包含实际木材来源、硫酸盐制浆/回收、ECF漂白、干燥和废水处理。BREF只支持相关制浆/报告上下文，不使用锯材数据或将其当尿裤配方。 |
| disclosure | 转换模块与完整摇篮到厂门汇总的区别；地理/年份；完整组件BOM；子组件供货状态；实际制品含水率；公用工程/处理边界；全部排除及缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_complete` | `conversion` | 包含收货/搬运、干式解纤、SAP计量/芯体成型、面布和膜组装、弹性/扣件、实际涂层、裁切、检验/废品、包装、集尘及归属电力辅助设施。每种投入保留上游负荷，不将转换模块称为完整生命周期结果。 | pampers-swaddlers-construction; ea-nappies-2008; pampers-manufacturing-traceability |
| `upstream_pulp_boundary` | `fluff_pulp` | 购入浆的制造位于上游，包含回收/锅炉及浆厂处理。供应方湿基/AD/绝干基须与到货质量协调；不将锯材证据移作制浆数量。即使某气候报告口径从小计中排除生物CO2，也须保留上游生物CO2交换及碳来源。 | jrc-pulp-paper-bref-2015 |
| `physical_network` | `conversion` | 将制造与包装聚合为一个前景单元，同一完整产品只输出一次。保留阶段表计及独立实物过程图/平衡。每个内部转移两端质量/身份相同；内部循环和集尘回用不作外部交换或给废物信用。 | ea-nappies-2008 |
| `actual_air_path` | `conversion` | 检查干式解纤/芯体成型/裁切排气及逸散路径。BREF7.1.10说明纸裁切粉尘可能性，不是尿裤/SAP因子。捕集和对外颗粒排放分别实测；核实粒径和组成，不用correction flow。实际额外挥发物种须在数据集完成前单列经验证的基本流。 | jrc-pulp-paper-bref-2015 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `conversion` | 外购组件尿裤转换制造与包装 | required | 声明的电力驱动干式路线 | foreground | 1 kg合格完整净尿裤 |

实物阶段：收货 → 干式浆板解纤 → 计量浆/SAP芯体成型 → 面布/膜/扣件/弹性件/实际涂层组装 → 裁切 → 质检 → 零售和运输包装。集尘与内部返工连接到实际阶段。外部单元虽聚合，阶段数量仍须可审计。条件卡只用于实际批次，不存在须有不存在证据，不能以零掩盖缺数。配方产品及供货成品卷材是单个真实产品交换，不用组件包替代实际分别收货的材料。

### 过程：尿裤转换制造与包装 (`conversion`)

#### 输入

##### 产品流

###### 购入绒毛浆 (`fluff_pulp`)

购入用于干式解纤的无元素氯漂白、非溶解级化学绒毛浆板。记录实际牌号、硫酸盐制浆路线、生产者、到货含水率和质量。广义非溶解级木浆身份须有这些限定，不代表已选定供应方数据集或通用干物质系数。

- 选定流：化学木浆，溶解级除外 `fe36cb07-5527-4085-a80b-c8ef2cc7e0aa`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction; jrc-pulp-paper-bref-2015

###### 聚丙烯酸钠SAP颗粒 (`sap`)

交联聚丙烯酸钠高吸水颗粒，按购入配方质量记录，保留实际CAS、中和和交联状态及供应方牌号。不得以丙烯酸、聚丙烯酰胺或聚丙烯酸酯-2替代，不移植吸收倍数。

- 选定流：交联聚丙烯酸钠高吸水颗粒
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### PP/PE面层卷材 (`topsheet`)

一种购入PP/PE非织造面层牌号。从供应方记录纤维组成、固结路线、表面活性整理及润肤涂层状态。广义非织造布身份不意味着纺粘工艺。预涂层卷材的到货质量包含涂层，此时单列润肤配方输入不存在。

- 选定流：非织造布 `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### PP防漏护围卷材 (`cuff_web`)

一种PP非织造护围牌号，与面层和外层分别计量。保留实际涂层和颜料含量；已随卷材供货的整理剂不虚构为另外跨厂界的原料交换。

- 选定流：非织造布 `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### PP外层面布 (`outer_facing`)

购入PP非织造外层面布，实际供货牌号质量中包括印花和整理。此路线中它与PE底膜分别供货。若购入PE/PP复合层，应先按实际一件复合投入身份建行再使用数据集。

- 选定流：非织造布 `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### 聚酯导流层 (`acquisition_web`)

购入聚酯非织造导流/分散层。确认供货牌号是否含PE粘结纤维或其他组分；聚酯身份以实物确为聚酯卷材及供应方清单兼容为条件。

须有供方证据核实实际聚酯非织造构造及相容参考基准；实际为不同绗缝/复合构造时须重审身份。

- 选定流：纺织品，无纺聚酯 `5ac0c411-47ce-40ed-8ce1-9aaf9c351ca4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### 非织造芯体包覆层 (`core_wrap_nonwoven`)

条件纳入：实际存在的一种非织造芯体包覆卷材，声明聚合物牌号和固结工艺。并非每个Swaddlers批次均公开此细节，应通过供应方BOM/拆解确认；不得因其他产品存在包覆层而填入。

- 选定流：非织造布 `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### 纤维素薄页纸芯体包覆层 (`core_wrap_tissue`)

条件纳入：声明批次实际使用的购入纤维素薄页包覆纸。历史英国尿裤说明支持这种可能性，不是现行Swaddlers默认值。披露它替代或与非织造包覆层并存，各实物卷材只计一次。

- 选定流：卫生纸或面巾纸、纸巾或餐巾纸及类似的纸、纤维素填絮和纤维素纤维网 `3070a34a-8d40-426e-9299-7c367b0dca21`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：ea-nappies-2008

###### 印花PE阻隔底膜 (`backsheet`)

一种购入PE阻隔膜牌号，含随膜供货的填料、印花及整理剂。核实实物PE组成/CAS9002-88-4、薄膜状态、孔结构和供应方；该UUID的外部分级有冲突，仅条件保留实物身份。随膜供货的颜料固体属于此投入，不虚构第二次颜料采购。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### PP机械扣合扣片 (`hook_fastener`)

一种实际PP机械扣合扣片牌号，不含另行供货的PE载体。记录质量、到货状态和供应方制造过程；PP树脂或长丝不等于已成型扣片。

广义塑料制品身份仅定位这一实际已成型PP机械扣片，不是PP树脂、扣件集合或金属件。须核实实际钩形、PP/添加剂组成、供货子组件状态、制造过程及相容供方参考质量；不推定模塑路线或扣合性能。

- 选定流：日用塑料制品 `5b5f649d-db2b-426c-9bd2-aff11fce2e3a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### PP非织造扣合前腰贴 (`landing_web`)

仅在PP非织造前腰扣合贴单独供货时纳入。记录实际匹配扣合的卷材牌号及涂层；完整扣合组件整体供货时应作为一个真实投入并核验该组件身份。

- 选定流：非织造布 `6b35ed69-0eb9-4c4a-902e-bdc43eeef146`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### PE扣片载体薄膜 (`tab_carrier`)

仅在PE载体膜与PP扣片分别供货时纳入。记录PE牌号及已有胶层；完整扣片整体采购时不单列此投入。

核实实际PE薄膜牌号/组成、CAS9002-88-4及供方实物/参考状态；未决来源元数据不确立相容交付背景。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### 弹性氨纶丝 (`elastic_strand`)

用于腿围/腰围的实际氨纶弹性丝，非天然橡胶。向供应方核实所选记录描述的聚醚-聚脲共聚物身份和实物丝形态；不同弹性体组成需另选身份。

须核实实际连续弹性丝形态，并由供方/来源确认广义纤维身份适用、声明化学组成和交付质量；混杂的织物/短纤元数据不证明弹性丝制造。若来源仅适用于织物或短纤，须另有相容丝材身份。

- 选定流：氨纶 `b722c9ee-6aa7-46ec-ba55-bde79502aaca`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### 固体热塑性结构胶 (`construction_adhesive`)

一种购入无溶剂热塑性热熔结构胶牌号。必须由供应方证明此实物路线：生产者仅公开聚合物胶，未公开全部专用牌号。若实际胶为反应型或水性，此行不可用。分别计量领退胶、留在制品中的胶及排胶。

须核实实际完整供货的固体、无溶剂、可逆软化热塑性配方及相容供方质量基准；不推定硫化、橡胶制品或化学固化。

- 选定流：热熔胶 `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### 固体热塑性弹性件固定胶 (`elastic_adhesive`)

条件纳入：第二种单独供货、用于固定弹性件的热熔胶牌号。若同一牌号兼用两种用途，单次计量领用量按互不重叠用途拆分，不能重复。组成及供应方条件同construction_adhesive。

同样须有实际固体热塑性配方及供方状态证据；按用途拆分不得重复一笔实物购胶。

- 选定流：热熔胶 `3ec33f9f-92dd-487a-a0d9-b177c926b8f0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### 面层润肤涂层配方 (`emollient`)

一种在现场涂于面层的实际购入润肤/护肤配方。记录产品名、完整组成、固含量、批次及留在制品中的质量。生产者确认润肤膏存在，但未公开完整配方；不得假定凡士林、硬脂醇或芦荟。面层已预涂时，不作为现场投入。

广义功能涂层身份表示实际供货整润肤涂层，而非某纯成分。连接背景前记录交付相态、供方完整配方/SDS、水/挥发分/固体比例及交付与留存质量基准。分别实测施加领用、留存、库存/退料及排料；不默认化学配方或施涂温度。

- 选定流：涂层 `59808a77-a33c-493f-8e5f-c0eb3e837943`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### 尿显剂配方 (`wetness_indicator`)

一种实际购入、含水溶性色料的pH敏感尿显配方。由供应方记录产品/色料组成、载体、固含量及施加路线。它不等同普通结构胶，也不推定为纯染料；若已包含在购入薄膜中，仅在薄膜中计入。

广义功能涂层身份表示这一单独供货的完整pH敏感尿显涂层。须核实实际配方/SDS、相态、色料/载体化学组成、水/挥发分/固体、施涂及相容供方质量基准；原记录无CAS不证明具体色料。领用、留存涂层及独立排料保留实测分账，不强加热熔、水性或溶剂配方。

- 选定流：涂层 `59808a77-a33c-493f-8e5f-c0eb3e837943`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：pampers-swaddlers-construction

###### PE零售包装袋 (`pack_bag`)

实际包装片数对应的购入PE包装袋，含随袋供货的印花。分别记录包装净质量和损耗。包装随尿裤出货，但绝不增加净尿裤参考质量分母。

- 选定流：聚乙烯袋 `10647902-9822-4b06-bc95-f1f30f10c261`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：ea-nappies-2008

###### 瓦楞运输纸箱 (`pack_carton`)

一种真实瓦楞运输纸箱牌号。记录实际纤维配比、印花、供应方和质量；不强加候选数据库纸箱的16.6%原生/83.4%再生纤维配方。

广义包装记录明确包含瓦楞箱；仅用于这一真实交付纸箱，绝非袋/纸箱/缠绕膜组件包。须核实实际纤维组成、纸板构造、印花/胶、含水率、牌号及供方/厂门质量基准相容性。不采用16.6%/83.4%纤维配方或通用世界供方数据集。

原记录英文通用名为“Packaging materials, unspecified”；英文选定流显示名仅将这一已核验的广义身份限定为这一单独的瓦楞纸箱。下方保留官方中文名称；该通用名称不允许包装组件包，也不建立供应方匹配。

- 选定流：包装材料，未指定 `7336a8ee-9e4d-49a6-9fe5-ce285f613245`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_material`
- 来源：ea-nappies-2008

###### 购入中压电力 (`grid_electricity`)

仅用于实际1–35 kV电网平均用户端供电。计量交付点电量，包含范围内电动解纤、成型、粘结/加热、压缩空气、空调、检验和包装。保留记录的净热值属性名/MJ；kWh乘3.6不代表已选择地理发电结构或证明另一电压。记录供应方、年份及损耗边界，实际交付电压不同时另核验身份。

原记录CN供给地域及中压电网平均消费组合不默认实际场址国家或背景；连接前核实实际场址/国家/年份/供方、电压及损耗边界相容性。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：pampers-manufacturing-traceability

###### 清洁用购入自来水 (`cleaning_water`)

条件纳入：转换厂清洁及相关辅助设施实际外购的自来水。此干式转换路线没有制浆或湿法成型用水。计量供水kg，或用现场测得密度换算表计m3；广义实物身份不代表已确定当地水厂数据集。

- 选定流：自来水 `6a8b6455-e9bb-4cb9-81ea-5e83413d5fe1`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning`
- 来源：ea-nappies-2008

###### 水性中性清洁剂配方 (`cleaning_detergent`)

仅在实际使用此种具名水性中性清洁剂时纳入；记录购入配方质量、完整供应方组成、稀释和使用路线。每种额外清洁产品另增原子行；不假定纺织皂洗配方兼容。

广义硬表面清洁剂身份有条件定位这一完整中性水性供货配方。核实实际清洁用途、牌号/SDS完整组成、供货浓度及实测pH、水比例、另加稀释水、相态和相容供方质量基准。不由此确定洗衣/皂洗配方、纯表活质量或供方背景。

- 选定流：洗涤剂 `1ee04905-0d1a-453e-9d3a-9ce612d79be0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning`
- 来源：ea-nappies-2008

#### 输出

##### 产品流

###### 合格完整净尿裤 (`diaper_output`)

唯一参考产品输出为1 kg实际出货含水状态的完整、未使用、合格胶贴式尿裤，包含浆、SAP、所有面布/薄膜、扣片、弹性件、留存胶、颜料、润肤膏及尿显剂。净制品质量排除零售/运输包装、不合格品和已取走试样。另行记录随货包装。

- 选定流：任何材料的卫生巾（护垫）和卫生棉条、婴儿餐巾和餐巾衬垫及类似物品 `aaedb37f-8a1a-4dea-aa96-3613fa13bb0e`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg
- 数值来源模式：固定数值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_output`
- 来源：pampers-swaddlers-construction; ea-nappies-2008

##### 废物流

###### 收集绒毛浆粉尘 (`captured_pulp_dust`)

条件纳入：SAP混合前单独收集并送至具名接收方、离开厂界的绒毛浆粉尘。确认组成、含水率和无危险污染；广义工业粉尘实物身份仅条件使用，不是空气排放。内部回用只记录实测内部转移，不作为此对外废物。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 收集吸收芯体粉尘 (`captured_core_dust`)

条件纳入：浆/SAP混合后实际独立的集尘物流，测量纤维素/SAP比例及接收条件。不可称纯SAP；若两名称指同一容器，不与混合前粉尘总量重复相加。复用广义粉尘身份仅限实际已收集颗粒废物。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 未使用尿裤生产不合格品 (`mixed_rejects`)

作为一个接收物流离厂的真实复合不合格品/边角料，记录组分、胶污染和含水率。排除排泄物及消费后尿裤。拆解或分选回收组分不能再作为整片废品重复计量。

广义工业固废身份仅用于这一独立收集的实际固体物流。保留具名阶段、材料/胶/涂层组成、含水率、称量整质量、库存及实际接收方接受/处理条件；不合并物流，不推定危险属性、清洗/再生等级或信用，不将组分与其复合废物重复计量。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 分选PP非织造布边角料 (`pp_trim`)

条件纳入：独立收集、出货的PP非织造边角料，记录涂层和接收路线。强制机械回收的UUID不是未指定清运的默认值。若已计入mixed_rejects，此单列数量不存在。

广义工业固废身份仅用于这一独立收集的实际固体物流。保留具名阶段、材料/胶/涂层组成、含水率、称量整质量、库存及实际接收方接受/处理条件；不合并物流，不推定危险属性、清洗/再生等级或信用，不将组分与其复合废物重复计量。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 分选PE阻隔膜边角料 (`pe_trim`)

条件纳入：分选PE膜边角料，记录实际填料/印花/胶状态及接收方；不能连到PET废物，也不能无处理状态证明连到已清洗再生PE。

广义工业固废身份仅用于这一独立收集的实际固体物流。保留具名阶段、材料/胶/涂层组成、含水率、称量整质量、库存及实际接收方接受/处理条件；不合并物流，不推定危险属性、清洗/再生等级或信用，不将组分与其复合废物重复计量。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 分选聚酯导流层边角料 (`pet_trim`)

条件纳入：一种单独收集的聚酯非织造边角料，记录粘结剂、整理剂和接收方；排除已计入复合不合格品的数量。

广义工业固废身份仅用于这一独立收集的实际固体物流。保留具名阶段、材料/胶/涂层组成、含水率、称量整质量、库存及实际接收方接受/处理条件；不合并物流，不推定危险属性、清洗/再生等级或信用，不将组分与其复合废物重复计量。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 分选纤维素包覆纸边角料 (`tissue_trim`)

仅在实际使用薄页包覆纸且单独收集时纳入，记录胶污染和接收等级；不因材料名便推定纸回收处理。

广义工业固废身份仅用于这一独立收集的实际固体物流。保留具名阶段、材料/胶/涂层组成、含水率、称量整质量、库存及实际接收方接受/处理条件；不合并物流，不推定危险属性、清洗/再生等级或信用，不将组分与其复合废物重复计量。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 分选氨纶丝边角料 (`elastic_trim`)

条件纳入：独立氨纶边角料物流，保留聚合物牌号、胶污染和接收条件，不称为天然橡胶废物。

广义工业固废身份仅用于这一独立收集的实际固体物流。保留具名阶段、材料/胶/涂层组成、含水率、称量整质量、库存及实际接收方接受/处理条件；不合并物流，不推定危险属性、清洗/再生等级或信用，不将组分与其复合废物重复计量。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 固体热塑性胶排胶废物 (`adhesive_purge`)

条件纳入：单独移除、某一已识别牌号的固体热塑性排胶废物。另有不兼容排胶牌号时另增行；不采用晶圆生产残胶身份。

广义工业固废身份仅用于这一独立收集的实际固体物流。保留具名阶段、材料/胶/涂层组成、含水率、称量整质量、库存及实际接收方接受/处理条件；不合并物流，不推定危险属性、清洗/再生等级或信用，不将组分与其复合废物重复计量。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 尿裤润肤涂层排料废物 (`emollient_purge`)

现场涂润肤膏且实际配方排料独立移除时纳入，保留组成和接收方。污染清洁擦拭布是另一种废物，需独立行。

实测交接相态、完整润肤配方、水/固体及整质量；从体积换算须有具代表性的密度。施涂设备不确定交接相态：核实实际相容固体、半固体或液体身份及接收基准前，保留UUID缺口。

- 选定流：尿裤润肤涂层排料废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### 尿裤尿显剂排料废物 (`indicator_purge`)

现场施加尿显剂且实际配方排料独立移除时纳入，记录载体、色料和接收方；不能仅因都用加热施加器便与胶排料合并。

实测交接相态、完整尿显配方、水/固体及整质量，体积换算须有具代表性的密度。相态及接收相容性未知时保留UUID缺口；不强塞入固体胶废物或液体废水。

- 选定流：尿裤尿显剂排料废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：pampers-swaddlers-construction

###### PE零售袋包装边角料 (`pack_bag_trim`)

条件纳入：实际独立包装袋废料，与随制品出货的袋分别计量，记录印花和接收状态；不重复计量已记作pe_trim的容器。

广义工业固废身份仅用于这一独立收集的实际固体物流。保留具名阶段、材料/胶/涂层组成、含水率、称量整质量、库存及实际接收方接受/处理条件；不合并物流，不推定危险属性、清洗/再生等级或信用，不将组分与其复合废物重复计量。

- 选定流：固体废物 `851fd235-5a89-4cf9-b7da-5c278ed1dcbb`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：ea-nappies-2008

###### 瓦楞纸箱包装边角料 (`pack_board_trim`)

条件纳入：声明牌号的实际纸板包装边角料/废箱，记录胶、涂层和接收方。记录中的示例损耗百分比不是数量规则。

- 选定流：纸和纸板包装废弃物 `a318022d-c960-4eb5-a81c-04a9c4dda7e4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：ea-nappies-2008

###### 送外部处理的清洁废水 (`cleaning_wastewater`)

条件纳入：一种实际转换厂清洁废水，排入下水道或交外部处理方，记录体积、密度、清洁剂/固体组成及接收条件。它既非淡水取水，也非直接环境排放；不复用锰渣洗涤废水，不暗示现场处理。

广义工业废液身份仅定位这一送至实际具名外部接收方的独立整湿水性物流。称量整湿kg，或用具代表性的实测密度换算实际体积；记录水、固体、清洁剂及其他污染、收集阶段和接收/处理条件。H2O及污染物作组分分账，不另列第二次对外废物/水交换；不推定危险类别、通用处置路线、信用或淡水排放。

- 选定流：废液 `bdfc32cf-8028-40a8-a2e4-2d73422ece34`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning`
- 来源：ea-nappies-2008

##### 基本流

###### 细颗粒空气排放 (`pm_fine`)

仅在干式解纤/成型/裁切实际有实测PM2.5颗粒排向室外空气、未特指子介质时纳入。只用此不重叠粒径区间；保留采样方法、排气流量、控制设施、逸散覆盖及场址组分。集尘或内部回用不视为排放，数据库命中不代表正排放量。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：jrc-pulp-paper-bref-2015; ea-nappies-2008

###### 粗颗粒空气排放 (`pm_coarse`)

仅在干式解纤/成型/裁切实际有实测PM2.5–PM10颗粒排向室外空气、未特指子介质时纳入。只用此不重叠粒径区间；保留采样方法、排气流量、控制设施、逸散覆盖及场址组分。集尘或内部回用不视为排放，数据库命中不代表正排放量。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：jrc-pulp-paper-bref-2015; ea-nappies-2008

###### 大颗粒空气排放 (`pm_large`)

仅在干式解纤/成型/裁切实际有实测>PM10颗粒排向室外空气、未特指子介质时纳入。只用此不重叠粒径区间；保留采样方法、排气流量、控制设施、逸散覆盖及场址组分。集尘或内部回用不视为排放，数据库命中不代表正排放量。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：q_i=A_i/Q；从关联协议取得实际外部批次总量与净合格批次质量；条件不存在须有证据
- 数值来源模式：计算数值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_air`
- 来源：jrc-pulp-paper-bref-2015; ea-nappies-2008

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | `conversion` | 先考察分割或系统扩展以避免分配；可分割时用独立表计隔离实际批次/产线。有依据采用系统扩展时，纳入新增功能并报告整个扩展系统。记录上述方法均不可行的原因后，才对不可避免的共享能源/服务按相关实测物理关系分配；若无，须用真实经济记录和敏感性分析论证其他关系。无通用质量或价格份额。选择替代法前须审查，不自动给废料信用。 | ec-pef-allocation-2021 |
| `physical_vs_burden` | `conversion` | 未分配实物质量/水/碳账及过程图与归属环境负荷账分开保存。实物联产品/废物输出及内部转移保留实测数量，不机械乘尿裤分配份额。只归属有理由的共享负荷，不改变守恒。 | ec-pef-allocation-2021 |
| `waste_rework` | `conversion` | 不合格品默认不是可售联产品。分配前须记录真实外部联产品功能/接收方。内部返工仍是实物回收，不给替代信用；外部废物处理连接到真实物流及接收方。 | ec-pef-allocation-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | `conversion` | diaper_output | 校准出货及质检记录 | 批次；尺寸；日期；合格批量；毛重及包装皮重；取走试样；废品质量；净Q；实际含水率；质检方法/结果 | 用校准秤称量完整净合格尿裤，并独立核实包装皮重；不从宣传尺码或年龄推定片重。保留完整匹配场址/SKU/状态/路线期间的原始生产、出货、质检、退回及期初/期末原料、在制品和成品库存记录；包括失败、零产出、不合格品、返工、换批、开停机、清洁和可归属待机的实际负荷。Q为此池中唯一新生成且验收合格的完整净尿裤产量，排除包装、不合格品和取走试样。使用校准合格生产称量，或用出货加期末减期初合格库存并按实际转移/退回对账；已称得的生产量不再重复库存修正。退回并再次验收的同一净批次只计一次；内部返工不作新产出。期初/期末在制品和库存须连同内含材料及结转生产负荷跟踪，只作转移，不重复或遗漏；期初成品出货不是本期新生产。在此保留原始正值Q及各原始期间总量A_i，不作除法；normalize_net_product是唯一归一化步骤。Q<=0或池/负荷匹配未建立时，保留原始记录，归一化交换不可用。 | kg | 每批次及出货 | 完整代表性运行期，含换批、开机及损耗 | 声明产线和SKU | 每 1 kg 参考流 | 秤校准；皮重样本；批次质检及库存对账 |
| `cp_material` | `conversion` | 每种材料输入 | 供应方/BOM及领用记录 | 流行；牌号；CAS/组成；供应方；收货/领用/退料库存；含水/固含；留存制品量；内部返工；颜料/整理；涂层状态；换算时的密度或幅面面积/面密度 |称量领用减未用退料，或按期初+收货-期末库存并修正转移对账。从维护/领用/退料/库存记录筛查实际可归属的油/脂、滤材、擦拭物及更换消耗件。记录排除或有依据的不存在；数据集使用前须按实际化学组成/形态/数量/接收方补独立原子投入及对外用后物流，绝不默认每台机器用量。保留逐行阶段记录；供货子组件及内含组分不得重复。另核实供应方参考基准。 A_i=对应批次互不重叠的外部消耗之和；留存、损耗、库存变化另记 各A_i保留为声明分子单位的匹配期间原始总量，不预先除以Q；仅由normalize_net_product使用cp_output的Q归一化一次。| kg | 每次收货/批次/班次 | 与Q相同期次/批次 | 声明的产品牌号与产线 | 每 1 kg 参考流 | 供应方规格；校准秤/卷材表计；BOM/拆解与库存平衡 |
| `cp_energy` | `conversion` | grid_electricity | 购电/分表及运行记录 | 交付kWh；电压；供应方；结构/年份；表计边界；阶段kWh；设备工时/负载；空调/压缩机范围；分配驱动；损耗 |读取校准购电表及阶段分表，核对账单和损耗边界。采集电热及压缩空气/空调能耗，含归属本批次的待机/开机能耗，避免表计重叠。 A_e=有依据归属的交付kWh乘3.6；阶段及辅助能耗与同一购电表对账 各A_i保留为声明分子单位的匹配期间原始总量，不预先除以Q；仅由normalize_net_product使用cp_output的Q归一化一次。| kWh; MJ | 分时表计及每次生产期 | 与Q相同完整时期 | 工厂交付点与声明阶段 | 每 1 kg 参考流 | 表计校准、发票、供电合同、驱动依据 |
| `cp_waste` | `conversion` | 每种独立对外生产/材料废物 | 集料与接收记录 | 行/容器ID；阶段；实际交接相态；整净kg称量；体积换算时具代表性密度；含水；纤维素/SAP/聚合物/胶比例；污染；内部回用；接收/处理；废物库存 |逐个称量真实独立接收物流并检查组成。对账产生、内部回用、库存和清运票据。复合废品与单独分选组分分开。 A_i=经库存对账的净对外数量之和；排除内部回用料 各A_i保留为声明分子单位的匹配期间原始总量，不预先除以Q；仅由normalize_net_product使用cp_output的Q归一化一次。| kg | 每次集料及清运 | 同期并修正废物库存 | 实际具名集料点和接收方 | 每 1 kg 参考流 | 磅单；废物组成；接收合同；回用记录 |
| `cp_cleaning` | `conversion` | 供水、清洁剂与废水分别记录 | 清洁表计和接收记录 | 水体积/质量；实际密度；清洁剂牌号/组成/质量/稀释；废水体积/密度；污染物；留存水；接收方；蒸气或其他去向；库存 |计量每种实际投入及废水，用有记录实验室方法取样水密度及废水组成。下水道交接与直接排放区别，数据集使用前补齐实际蒸发/直接排放行。 逐物流分别汇总，用实际密度换算m3为kg；保留完整实物水平衡，不混同废水与供水 各A_i保留为声明分子单位的匹配期间原始总量，不预先除以Q；仅由normalize_net_product使用cp_output的Q归一化一次。| kg; m3 | 每次清洁及排放 | 匹配批次及相关辅助期 | 声明产线清洁/辅助设施 | 每 1 kg 参考流 | 表计；实验室密度/分析；清洁记录；接收条件 |
| `cp_air` | `conversion` | 每个实际不重叠颗粒区间 | 排口/逸散监测 | 源/排口ID；控制；采样方法/时间；粒径切割；浓度及基准；干湿/参考气体积；时期排气量；运行/负载；逸散路径；低于检出限界；组成 |使用代表实际路线与控制设施的校准排气流量及浓度/粒径实测，统一气体基准。清点全部相关排口与逸散路径。只知总尘时保留粒径缺口，不虚构比例。 A_j=各concentration_j乘匹配exhaust volume乘10^-6之和，加独立测得逸散kg；粒径箱互斥，不将PM10总量再加到子区间 各A_i保留为声明分子单位的匹配期间原始总量，不预先除以Q；仅由normalize_net_product使用cp_output的Q归一化一次。| mg/m3; m3; kg | 验证采样期及运行记录 | 匹配运行条件及Q时期 | 跨转换厂界室外空气 | 每 1 kg 参考流 | 实验室方法/校准；粒径切割定义；排口图；覆盖与检出限 |

### 计算规则

| rule_id | 适用对象 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_net_product` | 每个外部清单行 | 仅在Q>0且cp_output已建立完整匹配池及结转负荷时，从各外部行原始总量按其原生分子单位计算q_i=A_i/Q一次。采集协议保留原始总量；清单卡相同表达式只引用此计算。原生单位换算在此之前完成，不再次除以已归一化数值。完整实物交换量及库存转移与有依据的归属环境负荷分别保存。Q<=0或匹配未解决时保留原始记录，q_i不可用。 | A_i实际行总量；Q实测完整净合格kg；cp_output及行关联协议 | 行单位/1 kg净合格尿裤 | pampers-manufacturing-traceability |
| `pulp_reference_conversion` | `fluff_pulp` | m_dry=m_received*s; m_provider=m_dry/s_provider | 实测到货质量及固体分数s；另声明供应方参考固体分数s_provider>0 | 与所连清单一致的供应方参考kg。仅供方明确采用BREF AD约定时用0.90，绝不默认到货s。 | jrc-pulp-paper-bref-2015 |
| `electricity_conversion` | `grid_electricity` | A_e=3.6*E_kWh；保留原始生产期间MJ总量，仅交normalize_net_product归一化 | cp_energy; cp_output | 原始生产期间MJ；只在normalize_net_product得到归一化MJ/kg | pampers-manufacturing-traceability |
| `mass_water_carbon_ledgers` | `conversion` | 在生产验收边界，投入+期初原料/在制品库存=新增合格净尿裤Q+另行识别的其他产品/物料外转+随货包装+废物/排放+未使用材料退回+期末原料/在制品库存；实际转入生产的物料须纳入，交接两端数量匹配。同批已合格尿裤的成品库存不得再加入该生产账。实际纳入成品贮存/发运时，保留关联的成品库存账：期初成品库存+新增合格生产转入+其他实际退货/转入=实际发运+其他实际撤回/转出+期末成品库存。退回再验收的批次转移不创造新Q。合并实物边界时抵消验收/返工交接，以实际对外产品发运与期末成品库存对账，绝不再把Q加作额外实物输出。全部实际纳入的搬运、包装、贮存和发运作业及完整负荷仍须保留并归属匹配批次/产出群；本澄清不改变Q或作业范围。按实测干/湿基逐材料对账，水及碳另平衡。内部转移数量相消。保留实测残差和不确定性，不强制凑产率。每份账按其声明边界一致使用收货与实际交接，不把库存调整后的消耗量与同一库存变动再加一次。全部实际组件、配方、辅助及包装的水/碳比例和来源逐材料实测或有供方依据；未知比例/来源保持未知。水包括材料/配方带水、制品留存、随货包装、独立整湿废物及库存；实际净蒸气须扣除对应进气湿度，另有经审查的室外水基本流才能使用。H2O/污染物仅为组分分账，不重复对外废水交换。包装收货+期初库存另与实测随货皮重、对外边角/退料及期末库存核对，全部置于Q之外。 | cp_material; cp_output; cp_waste; cp_cleaning; cp_air | 未分配实物账，纤维/聚合物碳保留在制品中并标识来源 | ea-nappies-2008 |
| `exclusive_particle_bins` | pm_fine; pm_coarse; pm_large | 仅在相同采样基准下同时有累计PM10和PM2.5时，PM2.5–10=PM10-PM2.5；同一基准另有总尘时，>PM10=总尘-PM10。负差或基准不匹配差值无效。否则逐区间实测，不推定缺失区间，不把累计总量加到子区间。 | cp_air | kg/kg; outdoor-air unspecified | jrc-pulp-paper-bref-2015 |
| `shared_burden` | 不可避免共享公用工程 | 仅有证据证明相关驱动d时使用B_lot=B_common*d_lot/sum(d_k)；独立表计批次负荷另加。来源账中的实物数量保持不变。 | cp_energy; measured driver and other coproduct records | attributed burden | ec-pef-allocation-2021 |

### 数据质量要求

| requirement_id | 适用对象 | requirement | evidence |
| --- | --- | --- | --- |
| `dq_identity` | 全部行及参考 | 实际物种/形态/路线、UUID正式中文名、参考属性/单位及供方参考基准分别核实。空身份或未决供方换算阻塞相关数据集交换，不证明为零。 | 供应方规格；原始身份字段；基准记录 |
| `dq_quantities` | 全部数量 | 不设配方、单片质量、吸收倍数或默认排放。保留校准、不确定性、库存变动、实际组件质量及对应批次分配依据。 | cp_output; cp_material; cp_energy; cp_waste; cp_cleaning; cp_air |
| `dq_scope` | 完整数据集 | 列出全部实际组件、公用工程、损失和排放路径，含内嵌颜料/整理剂、配方固体及实际可归属维护消耗/用后物流。实际相态、维护及水去向未知时，须有证据或经审查的原子扩展才能声称数据集完整，不捏造零或猜测配方。实际出现未列材料、燃料、蒸汽、挥发物种、水去向或废物时，须先扩展原子清单再用。缺时期/粒径仍明确为不确定。 | 工厂过程图；批次BOM/拆解；监测及接收方图 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `diaper_output` | 须有恰一个连到参考的完整产品输出，Q>0，净质量包含所有实际留存组件；全部行/协议/公式及双语的1 kg分母一致。拒绝Q含包装、虚构片重、不同尺寸无批次隔离的混合及重复中间参考输出。 | pampers-swaddlers-construction |
| `validate_boundary_identity` | `conversion` | 校验路线、BOM、组件供货状态、上游制浆边界及供方属性/基准兼容。未决SAP/配方/扣件/废物UUID及未知牌号换算，须解决或证明不存在才解除数据集阻塞。不默用近名化学品或无关废水。 | jrc-pulp-paper-bref-2015; pampers-swaddlers-construction |
| `validate_conservation` | `conversion` | 须有独立实物/负荷账、守恒内部链接、包装/废品库存对账及完整水/碳平衡并报告残差/不确定性。无自动废物/联产品信用，不机械分配实物输出。 | ec-pef-allocation-2021; ea-nappies-2008 |
| `validate_air_completeness` | pm_fine; pm_coarse; pm_large | 须匹配室外空气介质、互斥粒径区间、真实排口/逸散覆盖及气体基准。集尘不得计为空气排放。无监测为未知，不是零；仅总量实测不能证明三个分量已解决。其他真实排放须逐物种/介质核验。 | jrc-pulp-paper-bref-2015 |
| `validate_claims` | 比较及完整性 | 没有另行证据支持的片数、测试功能、使用及报废情景，不将千克制造单位与排泄物容纳服务比较。检查已做/跳过、错误、未知覆盖及未决供方身份与PCR成熟度分别报告；已编写候选不等于独立科学批准。 | ea-nappies-2008 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 定义设计与实测路线的透明转换清单；与核实上游和运输数据汇总 |
| excluded_use | 完整CPC覆盖、服务等效比较、使用/报废结论、其他尿裤路线或未决交换数量 |
| required_metadata | 产品尺寸/批次/BOM及质检；供方/牌号/数量基准；实际场址/年份；净质量/含水及排除包装；所有组件/废物/空气条件；前景/上游/运输边界；完整来源及流引用 |
| required_quality_disclosure | 未决身份/换算、监测及期次覆盖、条件不存在、共享负荷驱动、平衡残差/不确定性、参考实物子集及来源限定 |
| update_trigger | 配方、面布/膜/扣件状态、浆路线、公用工程交付、质检规格、废物/排放路线变化或新证据解决缺口 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| pampers-swaddlers-construction | literature | https://www.pampers.com/en-us/products/pampers-swaddlers-diapers | 生产者产品/Ingredients及How to use栏目；Swaddlers胶贴构造和无香状态。生产者证据，非独立批准。不采用宣传性能、重量、配方或未公开工厂细节。 |
| pampers-diaper-components | literature | https://www.pampers.com/en-us/about-us/quality-and-safety/article/whats-in-a-pampers-diaper | 生产者组件功能说明；支持材料类别及用途，不作为定量性能或通用配方。 |
| pampers-manufacturing-traceability | literature | https://www.pampers.com/en-us/about-us/quality-and-safety/article/manufacturing-process | 生产者连续组装/检验/包装及批次/材料溯源。采集协议和归一化是本PCR明确要求，不是网页提供的数量。 |
| ea-nappies-2008 | official_guidance | https://assets.publishing.service.gov.uk/media/5a7c4054e5274a1b00422810/scho0808boir-e-e.pdf | 英国环境署SC010018/SR2（2008），1.2–1.3节印刷3/PDF7及图1.1印刷5/PDF9。只支持历史英国2006组件和生命周期结构，不以表1.2重量/比例、使用频率或研究影响为默认值。 |
| jrc-pulp-paper-bref-2015 | official_guidance | https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | JRC2015：净产量及AD约定印刷49/PDF87；硫酸盐浆厂3.1节印刷196/PDF234；纸裁切粉尘7.1.10节印刷670/PDF708。支持浆供方报告/工艺上下文及纸裁切产生粉尘的定性可能性，不声称尿裤/SAP BAT，不采用排放因子或原厂默认量。 |
| ec-pef-allocation-2021 | official_guidance | https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 欧委会建议(EU)2021/2279附件I4.5节，PDF63–64。通用多功能分配顺序，不给通用驱动/份额、替代信用或完整PEF/CFF符合性声称。 |
