---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cb-carbonless-top-sheet-dry-conversion
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
translation_status: reviewed
---

# 购入CB无碳复写母卷干式裁切为未印刷小规格散张纸

## 1. 范围与适用性

本方法仅覆盖外购已完成背面微胶囊涂布的CB无碳复写母卷，在干式电动转换线上放卷、分切、裁张、检查、堆叠并以未涂布纸包装，交付未印刷、未配页、未胶订的非大规格上联散张纸。微胶囊涂布、基纸造纸及制浆属于供方上游；CF显色涂层、CFB双面功能纸、SC自显色纸、传统炭纸及其他转印纸具有不同产品边界，不能套用。本路线不包括现场涂布、湿洗、加湿喷淋、热干燥或燃烧设备。

CB上联纸单独不能构成完整复写系统。供方须提供牌号、涂层面、相容接收纸和使用条件；不将本质量参考视为各牌号等功能。生产者公开说明仅证明微胶囊含显色物质，不公开通用配方。不得推定染料、囊壁、囊内液体、粘结剂或显色剂的物种及用量。`koehler-reacto-cb`、`koehler-reacto-practical`。


本方法是该外购CB干式转换分支的代表性方法综合，不证明某真实工厂已经选定设备、供方或配方。裁切指导不提供完整复写功能或whole CB制造数据集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.pulp-paper-and-paper-products-printed-matter-and-related-articles.cb-carbonless-top-sheet-dry-conversion |
| classification_refs | CPC 3.0 32191; narrower |
| covered_products | 未印刷散张CB无碳复写上联纸；实际尺寸符合非大规格判据 |
| excluded_products | CF、CFB、SC；传统炭纸；转印纸；纸蜡纸及胶印纸版；母卷涂布产品；印刷配页胶订表单、便笺本及其他成品 |
| representative_product | 同一供方牌号、颜色和涂层面的客户指定小规格CB散张纸 |
| production_route | 外购已涂布母卷；干式电动分切裁张；检查和纸包装 |
| market_state | 转换厂门口验收合格未印刷散张纸，不含包装净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供后续配用相容接收纸的压力复写上联纸 |
| How much | 1 千克验收纸品净质量 |
| How well | 符合声明的尺寸、公差、牌号、颜色、涂层方向和供方特定复写质量；不存在不符合验收要求的微胶囊损伤 |
| How long or cycle | 一次转换批次；货架存储及复写使用寿命按具体供方声明，不设通用年限 |
| reference_flow_link | `cb_sheet_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 印刷书写纸（涂布）、包装纸（涂布） `faaae1a8-97af-4a26-bdb2-198abfc0d8e4` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CB类型及单面涂层；供方牌号和涂层证据；尺寸与非大规格判据；定量；含水率及基准；颜色；微胶囊完好性；复写质量及相容接收纸；包装排除；工厂、时期和电力供应点 |

构建数据包必须声明全部限定信息。选定UUID识别包含既有涂层的整件涂布纸大类。`cb_reel`限定为购入且背面已有微胶囊涂层的CB母卷；`cb_sheet_output`限定为转换厂门首次验收的未印刷、未配页、未胶合非大规格CB散张纸。两个行身份和实物状态保持不同，不能因共用大类UUID而合并。原生名称和厂门状态未指定尺寸、CB功能、微胶囊化学组成或相容制造供方。整件母卷上游须一次包含实际供方CB涂层；装饰／保护清漆或普通涂布纸数据集不能代替CB制造。通用身份说明中的涂层示例不提供配方、额外涂布工序或生产数量。`koehler-reacto-cb`。


下文全部批次总量的D = Q：Q仅为声明时期内新lot首次质量放行的纸品净千克，包含首次放行后仍在期末成品库存中的纸品。复检、历史返工、退货和再次交付均不再次产生Q。gross实物流转V与归属交换向量A分账；先完成原始单位及scope换算，最后各A/Q一次。实物量不乘负荷分配份额。Q = 0须保留并关联失败产出、闲置、清洁、启停负荷，不除零或删除。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 称量合格纸品净质量D，包含已有涂层，排除包装；各流按实际交付／采集状态测湿质量及水分，含已有涂层；跨状态比较须另列共同干固体及H2O账，不将入厂湿质量改成假定厂门水分，也不改湿态参考量。 |
| `electricity_conversion` | `electricity` | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 电表kWh乘3.6换算为MJ；这是能量单位换算，不是燃烧或发热量假设。保留供应点和背景电力的属性基准。 |
| `moisture_basis` | all inventory rows | Mass | kg | 分别实测纸品、边料和粉尘含水率；w须是实测H2O湿基分数；只有证明非水部分为该干物质时，干质量才为湿质量乘(1-w)。已有囊内液体／溶剂或其他非水挥发物须独立核验，不将烘干失重都当水。相对空气或相对纸湿度不是湿基含水率，不能据此扣水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入已经完成CB功能涂层的可追溯母卷；卷芯和运输包装单独核算 |
| starting_condition_role | intermediate_product |
| product_classification_scope | CPC 3.0 32191的小规格CB散张纸子集；尺寸判据和映射待独立裁定 |
| recursive_input_rule | 同类合格散张回用记录为实际实物输入，关联供方及前段数据；不无限递归、不删除输入也不将其计为新的成品输出 |
| upstream_dataset_requirement | 母卷背景须覆盖基纸及实际CB涂层的生产、相容配方及交付；仅UUID不能证明背景适配。入厂运输须单独以实际路线连接。 |
| disclosure | 声明转换厂门口的前景边界，上游数据及运输连接、物料状态、储存环境和辅助物料。只报转换负荷不得声称全生命周期。 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | convert | 购入涂层母卷生产留在上游；前景从收货到合格散张和外运残余物。集成涂布或印刷须另用适用方法。 | koehler-reacto-cb; jrc-paper-bref-2015 |
| `boundary_completeness` | convert | 纳入搬运、不合格批次、抽尘及环境控制电力、实际包装、废物去向和厂界排放。每种实际辅助物料、包装部件、水交换、维修耗材及制冷剂损失均须增加原子行；活动不存在须证明不适用，不能编造零值。 | jrc-paper-bref-2015 |
| `boundary_loops` | convert | 裁张和包装合并为一个前景单元，各阶段独立计量。实物账的内部交接两端同量，不增加第二个最终产品交换。逐项记录退卷、卷芯和拆除入厂包装的所有权、材质、数量／单位实重、收发、实际再次使用、破损／丢失／丢弃、期初末库存及真实接收方；现场复用不重复计新制造，循环次数不默认。实际清洁／维修／运输及耗用公用工程另计；消耗或丢弃组件须另列交换。 | jrc-paper-bref-2015 |
| `boundary_packaging_receipts` | convert | 包装每个实际组件及卷芯从首次外来实物收货追溯，独立记录采购和所有权。整包采购价已含组件时，即使没有单独发票仍保留采购输入归属。首次借入、租入、受托或其他非购随货包装须记录具体材质、形态、类型、方向、原始单位、收货量及时间、来源、所有权、cohort、既有负荷向量和provider；未知既有向量保持未决。外部返回须有此前真实外发历史。内部复用不算新的首次外来收货。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| convert | 干式裁张、检查与包装 | required | 所声明CB母卷转换路线 | foreground | 1 kg accepted net CB sheets |

实物阶段：收货核验→放卷分切→裁张→检查剔废→堆叠包装。阶段合并不豁免独立计量。边料、收集粉尘、空气释放和库存变化分别保留；现场内部回用不作为外排或新原料重复核算。

调查实际切刀／磨刀材料、压纸杆橡胶垫、保护纸、输送带、辊、润滑油脂和其他维护材料的材质、配方、领退／更换／库存／损耗、废物接收及维护电／水。生产者页的扩张橡胶垫／保护纸说明仅提示调查，不作为必用材料、默认频率或材质配方；每个真实正投入／外排须另列核验后的原子行，未调查不等于零。

### 过程：干式裁张、检查与包装（`convert`）

#### 输入

##### 产品流

###### 购入已涂布CB无碳复写母卷（`cb_reel`）

根据期初库存加收货减期末库存及退供方量，记录实际消耗的CB母卷纸净质量，包含已有涂层，排除卷芯和运输包装质量。记录供方、牌号、涂层面及上游数据集，不推定现场涂布原料。

- 选定流：印刷书写纸（涂布）、包装纸（涂布） `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_material` 记录得到每 1 kg 参考流实测数量；批次总量除以验收纸品净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`koehler-reacto-cb`

###### 交流电（`electricity`）

计量切纸、抽尘、搬运、包装和电控环境所用的可归属电力。本身份只适用于向用户交付的1–35 kV消费组合，须核实实际供电点和上游损耗；其他电压不能使用此UUID。 完整记录的locationOfSupply为CN。采集真实现场／供方地区、年份、发电组合、交付点及损失覆盖，并核对原生Net calorific value／MJ参考基准；电力材料UUID和kWh换算相容不单独证明这些背景条件。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 `cp_energy` 记录得到每 1 kg 参考流实测数量；批次总量除以验收纸品净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`jrc-paper-bref-2015`

###### 未涂布印刷书写纸和包装纸（`paper_wrapper`）

称量实际消耗的未涂布纸质令包包装纸，包含包装损耗，供方须确认材料未涂布。广义实物身份在本行限定为此包装纸，不假定通用牛皮纸牌号或阻隔处理。 核实实际单一未涂布／未浸渍且无层合、自黏背衬、涂层或增强的纸包装，采集牌号、纤维来源、固有填料／施胶、水分及供方质量基准；其他实际包装材料须各自核验并逐项列原子行。来源CPC 32129非机械印刷纸分类比包装纸名称窄，应披露此来源元数据限制并待来源／供方澄清，不声称实际包装纸分类精确相同或默认配方。

- 选定流：未涂布印刷书写纸和包装纸 `936bdcb2-06b6-4ee9-8e7c-2f7762aba298`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_material` 记录得到每 1 kg 参考流实测数量；批次总量除以验收纸品净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：`jrc-paper-bref-2015`

#### 输出

##### 产品流

###### 切成非大规格的未印刷散张CB无碳复写上联纸（`cb_sheet_output`）

1 千克验收合格纸品净输出，包含已有CB涂层，排除全部包装。称量最终裁切后验收批次，检查尺寸和微胶囊损伤，并保留牌号特定的复写性能证据。

- 选定流：印刷书写纸（涂布）、包装纸（涂布） `faaae1a8-97af-4a26-bdb2-198abfc0d8e4`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_output`
- 来源：`koehler-reacto-cb`; `koehler-reacto-practical`

##### 废物流

###### 废纸（未指定）（`coated_trim`）

称量交付接收方的单独收集CB涂层边料及不合格纸张。声明微胶囊及涂层污染、含水率、法定废物类别和接收路线，不自动假定回收或可无条件替代回收纸；包装纸边料在前景证据中单独保存。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_residue` 记录得到每 1 kg 参考流实测数量；批次总量除以验收纸品净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`jrc-paper-bref-2015`

###### 废纸（未指定）（`wrapper_trim`）

称量与CB涂层纸分开外运的未涂布包装纸边料和包装废品。记录实际组成、含水率和接收方；共用广义废纸UUID不意味着合并不同实物流。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_residue` 记录得到每 1 kg 参考流实测数量；批次总量除以验收纸品净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`jrc-paper-bref-2015`

###### 收集的CB涂层纸切割粉尘（`captured_dust`）

称量从干式CB纸裁切抽尘器实际移出并外运的颗粒，采集真实纤维、微胶囊／囊壁／囊内液体／粘结剂及其他已有涂层成分、水分、污染、捕集位置、库存／内部返回、废物状态及接收方／供方相容性。不由通用名称推定成分配方、CAS或危险类别。Waste Mass／kg为实际捕集整颗粒，不是大气PM交换、灰、木尘或处理服务。集尘库存及内部回用与外运分开，实测空气释放粒份不得重叠。来源英文注释支持工业收集器，中文泛化的不易分解和每周清扫内容不构成本材料生物降解或清运频率判断。

- 选定流：粉尘 `2a6c9b60-a075-45ec-b611-c3b4dd255935`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_residue` 记录得到每 1 kg 参考流实测数量；批次总量除以验收纸品净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residue`
- 来源：`jrc-paper-bref-2015`

##### 基本流

###### 颗粒物 (PM2.5)（`pm25_air`）

仅记录实际测得、越过厂界进入室外空气未特指子介质的粒径不大于2.5微米颗粒物。仅有质量浓度而无气体体积及时间积分，数量不完整。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_air` 记录得到每 1 kg 参考流实测数量；批次总量除以验收纸品净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-paper-bref-2015`

###### 颗粒物 (PM2.5 - PM10)（`pm25_10_air`）

仅记录排入室外空气未特指子介质的实测独占粒径区间：大于2.5且不大于10微米。不得将累计PM10与PM2.5相加；相减要求样本、时间和气体体积基准一致。

- 选定流：颗粒物 (PM2.5 - PM10) `08a91e70-3ddc-11dd-9501-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_air` 记录得到每 1 kg 参考流实测数量；批次总量除以验收纸品净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-paper-bref-2015`

###### 颗粒物（> PM10）（`pmover10_air`）

记录排入室外空气未特指子介质的实测独占区间：粒径大于10微米。不得使用总粉尘或校正流替代；不设默认正排放量。

- 选定流：颗粒物（> PM10） `fe0acd60-3ddc-11dd-a70a-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按 `cp_air` 记录得到每 1 kg 参考流实测数量；批次总量除以验收纸品净质量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_air`
- 来源：`jrc-paper-bref-2015`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_hierarchy` | convert | 先调查通过细分或系统扩展避免分配；批次独立计量和直接归属用于细分。扩展须有真实共功能、实证替代及代表性边界，按扩展系统整体报告，不默认废料抵扣。两者均不适用时，记录具有因果意义的实物分配基准；其他基准须论证及敏感性分析。可销售性或质量本身均不足以建立共产品抵扣。 | eu-pef-2021 |
| `allocation_physical` | convert | 未分配的实物质量、水、碳账与分配后的环境负荷账分别保留，不将实物共产品输出或内部转移量乘负荷分配份额。废物按实际外运量记录；回收抵扣须有适用末端方法和接收方核实，避免重复避免生产抵扣。 | eu-pef-2021; jrc-paper-bref-2015 |
| `allocation_row_cause` | all inventory rows | 保留原始数量，真实rate仅积分一次并先换算记录scope；然后细分独立计量阶段，按每个交换实测物理因果归属。仅同阶段真实共功能中有证的剩余共享部分，在因果实物归属不可用后才可按同期同阶段相对价值分配，须有真实量价、论证及敏感性分析。最后A/Q一次，不将全部交换一律按收入比例分配，也不编替代抵扣。 | eu-pef-2021 |
| `allocation_history` | convert | 原料／未用料、在制品、成品的期初末库存保留真实逐flow继承负荷向量，新增负荷另记。历史返工、客户退货、再次交付继承原向量，仅增加实际处理或转换增量。期初FG的继承制造负荷不得再次计入新lot的Q，保留各原cohort已有首次合格净数量Q_original，只有真实增量服务负荷归属至受服务cohort。其每千克更正为新增A_service / Q_original，不除以新lot的Q或实际服务／复检数量；原合格数量未知时保留原始更正量且保持未决。转换／检验服务数量及搬运次数不产生新的合格产品分母。失败lot、Q为零运行、闲置、清洁及启停负荷均保留，记录因果归属及时期链接。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_output | convert | cb_sheet_output | weighing | batch; grade; coating side; dimensions; moisture basis; accepted mass D; packaging tare | 使用经校准秤称量合格净纸品，尺寸检验并记录微胶囊损伤及供方相容性质量证据；复核包装皮重。 | kg | 每批 | 声明完整活动时期 | 本转换线 | 每 1 kg 参考流 | 秤校准、验收记录、供方规格 |
| cp_material | convert | cb_reel; paper_wrapper | material balance | opening; receipts; closing; returns; tare; supplier; grade; batch; moisture; validated H2O/non-water volatile fractions; coating/capsule composition; actual packaging/core custody | 逐项称量并核对库存，分开涂层母卷纸和包装。卷芯及拆除包装另核算；现用其他物料单独加行。 | kg | 每批及库存期末 | 与合格产出同一时期 | 本转换线 | 每 1 kg 参考流 | 收货、库存、退货和供方基准 |
| cp_energy | convert | electricity | meter | meter start/end; submeter; voltage; CN source versus actual site/provider geography/year/mix; supply point/loss coverage; line time; auxiliary loads; D | 校准电表读取，同步切纸、抽尘及包装辅助设备；用可验证驱动分摊共享负荷；现场供应点与背景消费组合相容。 | kWh; MJ | 每批 | 与合格产出同一时期 | 实际供电边界 | 每 1 kg 参考流 | 电表校准、接线图、供方及损耗边界 |
| cp_residue | convert | coated_trim; wrapper_trim; captured_dust | weighing | stream id; wet mass; moisture; fibre/coating composition; microcapsules and encapsulated non-water liquids; H2O; contamination; stock/internal return; waste status; destination; receiver; D | 边料和集尘分别称量，保留组成与污染状态；核对外运单及实际接收条件，内部回用两端同量。 | kg | 每次收集与发运 | 与合格产出同一时期 | 排出转换线的各流 | 每 1 kg 参考流 | 秤、废物联单、接收方核准 |
| cp_air | convert | pm25_air; pm25_10_air; pmover10_air | measurement | outlet; sample time; size fraction; concentration; dry/wet gas volume basis; gas T/P/conditioning; total sampled volume versus volumetric rate; duration; capture; fugitive escape; detection limit; D | 使用适合排口和粒径的经校准采样测量，并记录采样性能、检出限和气体体积状态；覆盖排口及实际逸散边界。采用一致浓度／气体T/P／湿干及采样调理基准：C(t)乘体积流率积分，或一致平均浓度乘完整时期总气体体积；已积分体积不再乘时长。未知粒径不得捏造分配。 | kg | 代表性工况采样及活动期积分 | 与合格产出同一时期 | 室外空气厂界释放 | 每 1 kg 参考流 | 原始采样、流量计校准、气体状态及代表性证据 |
| cp_campaign | convert | all inventory rows | lot and burden ledger | lot/cohort; first-release time; Q; opening/closing raw/unused/WIP/FG; gross V by direction; inherited per-flow vector; incremental A; rate/time and original unit; stage/cause; failure/idle/cleanup/start-stop; service/handling quantity; original cohort first-accepted net quantity Q_original; incremental A_service; actual residual co-functions and contemporaneous prices | 校准原始记录关联首次质量放行与库存流转，实物量和负荷向量分账，逐交换按因果归属，保留失败时期负荷。 | 原始单位；kg；kWh；MJ | 每次流转及首次放行；期末 | 同一完整批次及关联历史cohort | 本线及实测共享阶段 | 每 1 kg 参考流 | lot验收、库存核对、原始表计、因果驱动及继承向量来源 |
| cp_packaging | convert | actual wrapper; cores; incoming and reusable packaging components | receipt and custody ledger | component/material/form/type/direction; raw unit; count and unit mass; receipt/time/origin/ownership/cohort; purchase inclusion; provider; prior vector; prior outward record; opening/closing empty/raw/WIP/FG/reusable; dispatch/returnout/waste; cleaning/repair | 首次外来实物收货与采购／所有权分立，逐腿闭合；整物provider只计一次，组成分析留在子账。内部复用不产生新的首次收货。 | 实际原始单位；件数；kg | 每次收货、流转及期末 | 同批次及有证返回历史 | 转换厂界各包装状态 | 每 1 kg 参考流 | 收货单、整包价格范围、权属合同、库存盘点、provider覆盖及真实外发／返回记录 |
| cp_transport | convert | actual inbound/outbound packaging, materials and residues | route records | stream and cohort; gross leg/direction; actual loaded mass; distance; vehicle/mode/load; empty return; fuel/service basis; provider coverage | 保留各实物发运与返回腿，不净额抵消。质量距离服务按实测kg换算吨一次、乘实际km一次；provider运输服务与重复自有车辆燃料分开。完成数据集前，为每个真实服务或燃料增加已核验原子交换。 | kg; km; tkm; 实际provider单位 | 每腿 | 同批次及关联返回腿 | 实际运输边界 | 每 1 kg 参考流 | 运单、地磅、路线证据及provider运输边界 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_records` | all inventory rows | 同一时期各行归属总量除以D，得到每 1 kg 参考流数量；成品参考行固定1 kg。 | row total; D; cp_output | exchange amount per 1 kg reference flow |  |
| `electricity_units` | `electricity` | MJ = kWh × 3.6；按同一D归一化。 | meter kWh; D; cp_energy | MJ per 1 kg reference flow |  |
| `physical_balance` | convert | 保留未分配实物账：纸及涂层净输入 + 初始在制品 = 合格纸输出 + 边料 + 集尘 + 空气颗粒 + 期末在制品 + 经测定的其他释放。含水状态不同须先做干固体及水的分立平衡；包装单独平衡。残差报告，不强制编零。 | cp_material; cp_output; cp_residue; cp_air | physical balance and residual | jrc-paper-bref-2015 |
| `pm_exclusive` | pm25_air; pm25_10_air; pmover10_air | 同基准累计测量时，2.5–10区间 = PM10 - PM2.5；>10区间 = 总颗粒 - PM10。相减为负或基准不一致必须核查。未测得区间保持未决，不设粒径因子。 | matched cp_air samples | exclusive particle amounts |  |
| `pm_mass_basis` | 各空气颗粒行 | m_kg = 10^-6 * integral(C_mg_per_m3(t) * Vdot_m3_per_time(t) dt)，或经证明可比的平均C乘匹配时期总V再乘10^-6；只换算一次mg到kg、除D一次。浓度与气体T/P／湿干／调理基准一致，累计气量不再乘时长，不预设气体状态或粒级份额。 | cp_air; cp_output | 各互斥颗粒kg每1kg参考流 |  |
| `campaign_stock_vectors` | convert | Q为新lot首次放行净kg，含期末FG。各库存状态：期初 + gross入 = gross出 + 期末 + 实测损失，内部交接两端同量。physical_balance的合格纸指首次放行Q；另列FG账：期初FG + Q + 实际退回 = gross发运 + 期末FG + 实际返工／弃置，不从Q再减期末FG。真实逐flow历史向量与实物V及新增A分立，最后各A除Q一次。Q为零的负荷保留并关联，在归属完成前保持数量未决。 | cp_campaign; cp_output; cp_material; cp_residue | 每1kg参考流的闭合实物库存及继承／新增负荷向量 |  |
| `packaging_legs` | convert | 逐组件／cohort／状态核对：期初 + gross收货 + 内部入 = gross发运 + 退外 + 废物 + 内部出 + 期末 + 实测损失。采购首次收货、非购首次外来收货、有证外部返回分开，内部腿仅在聚合时相消。运输实物腿不净掉，整容器制造与同一组件制造不重计。 | cp_packaging; cp_campaign; cp_residue | 完整组件库存、权属、首次收货及provider归属 |  |
| `transport_basis` | convert | provider原生tkm时，各腿实物服务 = 实际载货kg / 1000 * 实际km；rate仅按真实时间积分一次。先换算原始单位及provider scope，再作因果归属，最后A除Q一次。空返活动按实际服务或车辆基准保留，不为其编造载货。 | cp_transport; cp_campaign; cp_output | 每1kg参考流的实际运输服务及归属量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_supplier | cb_reel; cb_sheet_output | 母卷及成品状态可追溯；上游已包含实际涂层，不能用未涂布纸或普通复印纸替代。 | supplier declaration and upstream compatibility |
| dq_time | all inventory rows | 清单、产出、库存与负荷分摊采用同一工厂及活动时期；覆盖停机、废品、换批和辅助设备。 | complete primary campaign records |
| dq_completeness | all inventory rows | 未知配方、排放或供应方基准为未决，不是零。未测的碳形态不能等同缺省生物CO2为零；若后续路线发生燃烧或降解，分别增加实际生物/化石CO2物种行和碳平衡，完整记录LCI。 | route audit, mass/water/carbon reconciliation |
| dq_stock_provider | all inventory rows | 每个whole CB母卷的制造provider一次包含纸、真实囊壁、囊内液、粘结剂及其他已有涂层。组成化学／分析为子账，不增加第二次制造交换。未知组成、密度、水分／固含、物种／相态、retention、yield、价格或provider scope须真实证据；纯纸、木或聚合物不代整个涂层成品。原料／WIP／FG中的成品组件及全部实物损失保留库存及净量基检查。 | 供方整物覆盖、配方／SDS或分析、阶段库存、真实rate／单位及provider交换账 |
| dq_packaging | convert | 包装每次首次外来收货与实际外发／返回／废物腿、所有权和采购包含关系分别记录。完成数据集前核实未知既有负荷向量及provider覆盖；无单独组件发票不等于未采购。 | cp_packaging闭合及cp_transport各gross腿证据 |

保存独立的未分配水和碳账：按实测含水量记录输入、合格纸、边料、集尘、空气颗粒及库存中的水；按供方或实际分析记录各流总碳及其生物/化石来源。声明未知涂层碳组成和未测释放的平衡残差，不套用纯纤维素碳比例。涂层损伤可能释放的物种须由实际SDS、配方披露和采样筛查；有实际释放时按每个已知物种增加原子行。无证据不能声称零释放。

筛查干式纸材与环境空气的自然水分交换及电控室内湿度装置：用实测纸品／残余／库存H2O和匹配进出气湿度核实过程净蒸发、吸湿或收集凝水，不假定干裁切必有正蒸发，也不因无湿洗而认定水交换为零。实际成立的环境H2O释放／吸收或其他供水／回收／外送流须分别核验真实身份、介质与原生单位后补原子行；背景空气湿度不归为过程排放，凝水不记负水蒸气。无现场热干燥／湿洗路线不因此扩张。

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | reference product | 本方法拒绝CF、CFB、SC、炭纸转印、母卷、印刷或装订表单数据集。须有实际纸张尺寸、非大规格分类证据、CB牌号及供方特定性能，并核实参考身份。 | koehler-reacto-cb; koehler-reacto-practical |
| `validate_measurement` | all inventory rows | 恰有一个产品输出作为1 kg参考。双语的采集与计算须使用同一D，核对净质量、包装排除、含水基准分立及能量换算。 |  |
| `validate_environment` | convert | 要求PM区间不重叠及废物接收条件相容，不将集尘计作空气释放。来源测量须证明向室外空气越界释放；采样缺失为证据不完整，不是校验通过。出现湿式或燃烧路线须重审边界及原子行。 | jrc-paper-bref-2015 |
| `validate_quality` | convert | 检查微胶囊损伤、牌号、涂层方向及复写质量验收，不将生产者刀刃角度、相对湿度或寿命数值移作通用LCI默认量。UUID仅证明身份，供方、数量基准及背景边界须另核。 | koehler-reacto-practical |
| `validate_campaign` | convert | 核对Q首次放行唯一性、期末FG纳入、各库存状态及实物腿、逐flow继承向量、实际新增因果和失败／闲置负荷。每个整物及独立供给交换的实际provider覆盖只计一次，组成分析不重复整物制造。其他ordinary投入未决须具体采集，不证明另一physical分支，也不能据此强绑虚假参考身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground production dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 经身份、现场采集与审查后，用于同牌号CB小规格散张转换及已声明上游链接的建模 |
| excluded_use | 不得代替纸浆、涂层生产或完整表单印刷胶订数据；不得声称牌号等功能；大类身份不证明CB供方或背景相容性 |
| required_metadata | 牌号、涂层面、尺寸判据、净质量含水基准、包装、工厂与时期、供方及运输、各UUID和背景基准 |
| required_quality_disclosure | 实测覆盖、未决身份和数量、粒径采样、负荷分配及单独实物账、非大规格分类证据 |
| update_trigger | 涂层牌号/路线改变；终端加工纳入；供方/电压/包装/回收条件改变；新采样或身份修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| koehler-reacto-cb | handbook | Koehler reacto® CB, dated official website snapshot: https://www.koehlerpaper.com/en/products/Carbonless-paper/Top-sheet-reacto-CB.php | CB背面微胶囊及母卷/散张形态；不提供配方或LCI数量 |
| koehler-reacto-practical | handbook | Koehler reacto® Practical notes, 11.25, PDF page 2, Cutting: https://www.koehlerpaper.com/media/docs/en/product-information/reacto/reacto_Verarbeitungshinweise_GB.pdf | 牌号特定的压力敏感裁切；角度/堆高/相对湿度/寿命数值不作通用量 |
| jrc-paper-bref-2015 | official_guidance | JRC Production of Pulp, Paper and Board BREF, 2015, section 7.1.10, printed page 670 / PDF page 708: https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/PP_revised_BREF_2015.pdf | 一般裁切、包装、电耗、边料及粉尘筛查；不预设转换厂损纸回用或排放因子 |
| eu-pef-2021 | official_guidance | Commission Recommendation (EU) 2021/2279, Annex I section 4.5, PDF pages 63–64: https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 细分／系统扩展、可论证实物及其他关系的分配优先级；不声称完整PEF符合性 |
| un-cpc-3-2025 | official_guidance | UNSD, CPC3.0 Explanatory Notes,30June2025, printed147, subclass32191; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 官方非大规格复写纸类别通过 HS2022 品目4816定义。实际尺寸/形态及该冻结版本资格仍须有证据，不从通用原生涂布纸名称推断。 |
