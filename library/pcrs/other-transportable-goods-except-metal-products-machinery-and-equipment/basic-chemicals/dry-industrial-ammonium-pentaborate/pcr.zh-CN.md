---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.dry-industrial-ammonium-pentaborate
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 干燥工业五硼酸铵生产


## 1. 范围与适用性

本PCR适用于由硼酸、氨和水生产，经实际固体回收与调理，在工厂首次验收的干燥工业晶体五硼酸铵颗粒或粉末。代表性交付化学态为NH4B5O8·4H2O，也可用八水合十硼酸二铵表示。完整商品含量应在有记录的商品质量基准上满足所选流≥99%的条件。来源SDS报告四水合物含量大于99.0%；仅有氧化物当量分析不能证明该含量。[borax-pentaborate-pds-2024; borax-pentaborate-sds-2025; borax-pentaborate-spec-v3]

原生流记录清单登记号CAS12007-89-5，而交付四水合物使用CAS12046-04-7。同一生产商SDS明确区分交付物组成与无水盐清单登记。按各自不同角色保留两个编号；这不声明两CAS可互换，也不声明水合物质量等于无水盐质量。不得将本PCR用于硬性限定无水物的流记录或未限定的其他水合物。其原生分类与请求的分类坐标不同；产品标识与映射接受需分别评估。

排除氨硼酸盐水溶液、复配阻燃剂、其他硼酸铵、硼酸、钠/钾硼酸盐、硅酸盐、过硼酸盐及氰化物家族商品。矿石/甲醇路线、三硼酸盐路线及下游处理或阻燃性能需另行判断适用性。不规定操作配方、温度、投料量、收率或排放因子。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.dry-industrial-ammonium-pentaborate |
| classification_refs | CPC 3.0 34270; narrower product and route boundary |
| covered_products | 干燥工业晶体五硼酸铵，经过限定的完整四水合物商品，在声明商品基准上含量≥99% |
| excluded_products | 溶液；复配品；其他硼酸盐；硬性限定无水物的商品；CPC家族内其他物种 |
| representative_product | 工业晶体四水合物粉末；参考净质量不含包装 |
| production_route | 硼酸+氨+水；实际固体回收、调理及包装 |
| market_state | 干燥粉末或颗粒，在工厂首次验收；声明实际场址和等级 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供作为工业化学原料的干燥工业五硼酸铵 |
| How much | 1 千克经验收的完整交付商品 |
| How well | 声明四水合态及含量、等级、颗粒形态及验收规格；不表示下游功能等效 |
| How long or cycle | 一个生产及首次验收周期；不假定使用寿命 |
| reference_flow_link | pentaborate |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 五硼酸铵 `540f5f8d-53a6-48a1-97f9-9376cf0f951a` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 完整四水合物商品质量; 实际水合式/CAS; 单独的清单登记CAS; ≥99%商品含量基准及方法; 残余水分; 颗粒形态; 等级/SKU; 路线; 场址/期间; 首次验收门; 批次标识; 排除包装; 上游数量约定; 公用工程接口/供给单元覆盖; 蒸汽冷凝水配对基准; 完整袋有向库存/交付/退回基准 |

在数据包中声明全部必需限定信息。商品标签、清单登记或氧化物当量分析不能代替完整交付状态定义。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_mass | reference product | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用完整交付四水合物净质量，包含结合结晶水及实测残余水分；排除包装。不归一化成无水盐。 |
| assay_basis | pentaborate | Mass fraction | kg/kg | 分别保留物理商品含量分数、水、氧化物当量及当量分析值。当量分析中大于100%的值不是物理质量分数。 |
| pool_basis | all inventory rows | Exchange-specific property | native unit | 在按一个正的独立实测批次Q归一化一次后，采用每1千克参考流。分别保留各分子单位、物理池及LCI负荷归属。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 购入合格硼酸、氨和处理水在场址接收，并携带其上游数据集；实际外部公用工程供给及完整连接的供给生产单元 |
| starting_condition_role | foreground_starting_condition |
| product_classification_scope | 仅一种干燥五硼酸铵子集；不推断整个家族覆盖 |
| recursive_input_rule | 购入同类商品作为单独计量的上游输入。内部循环保留原标识/批次及负荷；两者均不生成新的生产信用。 |
| upstream_dataset_requirement | 实际交付态、路线、地理、期间及数量基准；无支持换算时不得以无水数据集代表完整水合商品 |
| disclosure | 场址及阶段、投入状态、公用工程、内部连接、全部库存池、处理、验收门、包装及排除的下游用途 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| complete_boundary | manufacture | 纳入接收/储存、实际化学生产、固体回收和调理、包装、失败批次、清洗及实际环境控制直至首次验收，后续发运/退货服务追踪至原始批次。该过程仅按utility_interface规则接收实际外部电力或热服务；这不确定蒸汽、热量或干燥的正需求。声称完整前，逐项增加实际药剂及包装。 | borax-pentaborate-pds-2024; borax-pentaborate-sds-2025 |
| state_boundary | pentaborate | 分别保留交付四水合物、清单登记号及原生流条件。不得把分类匹配提升为化学标识，也不得默改无水/水合数量基准。 | borax-pentaborate-sds-2025 |
| treatment_boundary | residual outlets | 分别追踪处理转移与最终释放。纳入实际氨、硼及颗粒物控制；缺失或零结果需运行及检出证据，不能由SDS示例推出。 | borax-pentaborate-sds-2025 |
| utility_interface | utility supply and actual combustion | 本受限过程画像跨已标识接口接收实际电力、间接热或蒸汽。真实场内锅炉或燃烧公用工程必须作为单独连接且完整表征的生产单元保留，包含燃料、燃烧空气/O2、化学生成水、热/质量接口及实际污染物出口；其负荷在供给服务中保留一次。不得通过纸面移动验收门遗漏物理操作。化学单元内直接燃烧在建立来源支持的完整单元清单和实际接口前不符合本画像。不由干燥商品状态或PDS推断热/蒸汽正需求。匹配实际供给输出和消耗输入、所有权及状态。供给方内嵌负荷不重复作为新的前景燃烧；自有原料/在制品结转是单独继承库存，不是从无关供给方数据集扣除。 | ec-pef-multifunctionality-2021; borax-pentaborate-pds-2024 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| pentaborate_plant | 硼酸/氨路线至干燥验收商品 | required | 实际声明的场址、水合态及等级 | foreground | 1 千克经验收的完整商品 |

硼酸、实际氨供给及水→所声明的化学生产阶段→实际固体回收/调理→干燥商品搬运及包装→首次最终验收。保留阶段记录和数量相等的内部连接，包括母液及回收粉尘。该图标识环境清单阶段，不是操作配方。

### 过程：工业五硼酸铵生产（`pentaborate_plant`）

#### 输入

##### 产品流

###### 硼酸 (`boric_acid`)

记录实际原生生产正硼酸的到货投入量、含水率和含量。本标识不是三氧化二硼、矿石或硼酸溶液。保留到货质量及其上游生产负荷。

- 选定流：硼酸 `5afb91cd-b49f-481a-9364-ad3100c47f2a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_inputs
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_inputs`
- 来源：`borax-pentaborate-pds-2024`

###### 氨，无水，液体 (`ammonia`)

仅在前景边界实际接收无水液氨时使用本标识。计量供应质量及使用前损失。若供应氨水，应另增经确认标识、浓度和载体水的整份溶液交换；不得以本纯原料标识代替氨水。

- 选定流：氨，无水，液体 `6928be4f-282b-4448-8f2a-f8c746621303`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_inputs
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_inputs`
- 来源：`borax-pentaborate-pds-2024`

###### 工艺用水 (`process_water`)

仅用于经过处理的工艺用水产品输入。原始台账分别记录反应介质水、清洗水和补充水，采用质量；体积表需记录条件下的实测密度。内部母液不是新的购水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_inputs
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_inputs`
- 来源：`borax-pentaborate-pds-2024`

###### 外购电力 (`electricity`)

计量实际反应、固体回收、干燥/调理、搬运、废气控制及废水处理用电。记录地区、电压、供应商和损失边界。韩国土壤淋洗案例专属电力记录不适用；实际场址标识仍待确认。

- 选定流：外购电力
- 流属性/单位：能量 / kWh
- 数量规则：采集的归属交换数量；cp_energy
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`borax-pentaborate-pds-2024`

###### 供入工艺蒸汽 (`steam`)

仅纳入从已标识外部或另行连接的场内公用工程生产单元，经计量接口进入的实际蒸汽。记录完整供汽质量、压力、温度、品质、焓参考、计量表/事件及供给端发送质量。实际冷凝水返回应与condensate_return及供给单元接收记录配对。直接接触蒸汽中留在商品或在此释放的水保留在本单元水账户中。不得根据商品数据表或默认焓构造蒸汽正需求。

- 选定流：供入工艺蒸汽
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_energy
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`borax-pentaborate-pds-2024`

###### 供入工艺热 (`supplied_heat`)

仅在实际有计量的间接热穿过化学单元边界、且载热物料不穿过该边界时纳入。标识发送和接收单元、热量表、区间及输送损失。真实载热流体质量转移需单独命名的输入及返回卡和配对计量；本仅能量卡不得隐去载体水或燃料燃烧。本卡必须代表不同的供入热服务；不得把同一蒸汽服务再次计为供入热。不假定热量正需求或供热技术。

- 选定流：供入工艺热
- 流属性/单位：能量 / MJ
- 数量规则：采集的归属交换数量；cp_energy
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`borax-pentaborate-pds-2024`

###### 高密度聚乙烯商品袋 (`hdpe_bag`)

记录实际新接收的完整HDPE袋，包括采购或可识别供应商寄入、供应方发送数量、空袋质量及完整袋供给方负荷，其中包含已经表征的成型。不得再次加计供给方内嵌的树脂/成型负荷；自有空袋/已包装袋库存向量保持单独。该接收与returned_hdpe_bag、自有空袋/已包装袋库存及内部领用分开。袋随货交付、退供给方及处置分别与明确输出卡和接收端记录配对。商品标称装量不是袋质量；树脂或空气吹脱填料不标识完整袋。其他实际包装组件需单独原子卡。

- 选定流：高密度聚乙烯商品袋
- 流属性/单位：质量 / kg
- 数量规则：采集的归属交换数量；cp_packaging
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`dmcc-pentaborate-product`

###### 返回的高密度聚乙烯商品袋 (`returned_hdpe_bag`)

记录从客户或接收方实际返回的完整袋，保留发送/接收记录、状态、空质量和原交付/批次。退回或重装不是新购袋或新的商品验收事件。归属于已验收商品的后续清洗、维修或重包装服务归该原商品批次及其锁定原Q；不得重复计入继承的原袋制造负荷。若有记录地随后服务于另一商品批次，应另行归属实际服务并保留相同袋历史；这不产生再次制袋。

- 选定流：返回的高密度聚乙烯商品袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_packaging
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`dmcc-pentaborate-product`

#### 输出

##### 产品流

###### 五硼酸铵 (`pentaborate`)

参考输出为首次最终验收的完整干燥工业晶体四水合物商品，包含化学结合水及实测残余水分。排除运输包装。实际水合态CAS12046-04-7与流记录清单登记号CAS12007-89-5分开保留；不得换算成纯无水盐质量。

- 选定流：五硼酸铵 `540f5f8d-53a6-48a1-97f9-9376cf0f951a`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_acceptance`
- 来源：`borax-pentaborate-sds-2025`; `borax-pentaborate-spec-v3`

###### 返回公用工程生产单元的蒸汽冷凝水 (`condensate_return`)

仅记录一股实际完整冷凝水返回流。在本过程出口及已标识生产单元接收端计量发送质量、状态/焓，核对区间和损失。不假定全部蒸汽回收比例：进入商品、残余物流或水蒸气的水留在实测化学单元账户中。返回冷凝水是公用工程接口，不是另一个产品参考流或避免生产信用。

- 选定流：返回公用工程生产单元的蒸汽冷凝水
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_energy
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`borax-pentaborate-pds-2024`

###### 随商品交付的高密度聚乙烯商品袋 (`delivered_hdpe_bag`)

逐次交付记录随商品离开的实际完整袋质量及客户/接收方匹配数量。该物理包装转移不计入化学品参考净质量，不是新的定量参考流、共功能或出售共产品，也不产生袋制造信用。留在场内的经验收已包装成品保留袋物理库存及继承向量；后续发运是可追踪转移，不是再次制造或新Q。物理数量不得按环境分配份额缩减。

- 选定流：随商品交付的高密度聚乙烯商品袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_packaging
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`dmcc-pentaborate-product`

###### 退回供应商的高密度聚乙烯商品袋 (`hdpe_bag_return_to_supplier`)

记录实际向供应商或所有者外部退回的完整空袋，保留来源批次、状态、发出质量及接收确认。该向外流动与随货袋、内部重复使用、客户退回及处置分开。保留继承的所有权/服务记录，不自动产生避免制袋信用。

- 选定流：退回供应商的高密度聚乙烯商品袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_packaging
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`dmcc-pentaborate-product`

##### 废物流

###### 送场外处理的硼酸铵母液排放液 (`purged_mother_liquor`)

仅在送外处理时记录这一项水性废物流。计量整股物流、溶解态硼/氮、水分及去向。内部循环母液保留物理库存和继承负荷，不是本外部废物交换。

- 选定流：送场外处理的硼酸铵母液排放液
- 流属性/单位：质量 / kg
- 数量规则：采集的归属交换数量；cp_residues
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`borax-pentaborate-sds-2025`

###### 送处置的不合格五硼酸铵固体 (`offspec_solid`)

仅记录实际送处置的固体及其含量和水合态。返工或退回物料按原始批次追踪一次，不生成新验收产量或避免产品信用。

- 选定流：送处置的不合格五硼酸铵固体
- 流属性/单位：质量 / kg
- 数量规则：采集的归属交换数量；cp_residues
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`borax-pentaborate-sds-2025`

###### 送场外处理的捕集五硼酸铵粉尘 (`captured_dust`)

计量实际送处理的捕集固体。返回生产的粉尘是发送/接收数量一致并保留继承负荷的内部连接。返回粉尘和捕集粉尘都不是烟囱排放。

- 选定流：送场外处理的捕集五硼酸铵粉尘
- 流属性/单位：质量 / kg
- 数量规则：采集的归属交换数量；cp_residues
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`borax-pentaborate-sds-2025`

###### 送场外处理的设备清洗废水 (`wash_effluent`)

该清洗来源废水与母液排放液分别记录。记录水、硼、氮负荷及接收方；不得另将所含物质计为直接环境排放。任何场内处理药剂均需单独原子输入。

- 选定流：送场外处理的设备清洗废水
- 流属性/单位：质量 / kg
- 数量规则：采集的归属交换数量；cp_residues
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residues`
- 来源：`borax-pentaborate-sds-2025`

###### 废弃高密度聚乙烯商品袋 (`hdpe_bag_waste`)

记录实际送回收/处理/处置的完整报废袋或损坏袋，包含接收方及相关污染。不得把同一质量另计为随货交付或退供给方。未回收损失在实际去向查明前作为单独调查的库存残差；真实环境释放需另有明确原子出口，不得虚构处置去向。

- 选定流：废弃高密度聚乙烯商品袋
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_packaging
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_packaging`
- 来源：`dmcc-pentaborate-product`

##### 基本流

###### 排入室外空气的氨 (`ammonia_air`)

计量所含控制后的最终排气及无组织氨，包括储存和调理环节。采用NH3质量，不是NH3-N；换算需明确原子量及分析物基准。原料氨输入不是排放流标识。

- 选定流：排入室外空气的氨
- 流属性/单位：质量 / kg
- 数量规则：采集的归属交换数量；cp_emissions
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`borax-pentaborate-sds-2025`

###### 排入室外空气的五硼酸铵颗粒物 (`pentaborate_air`)

按来源及粒径定义计量最终排出的颗粒商品质量。采用总颗粒物或互不重叠粒级，不得把总量与重叠PM粒级叠加。若样品仅报告硼，在真实组成支持换算前保留该分析物基准。

- 选定流：排入室外空气的五硼酸铵颗粒物
- 流属性/单位：质量 / kg
- 数量规则：采集的归属交换数量；cp_emissions
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`borax-pentaborate-sds-2025`

###### 排入实际受纳水体的硼 (`boron_water`)

仅计所含处理后的实际直接排放。声明受纳水体、总硼/溶解硼约定及分析不确定性。不得把总硼质量标识为分子五硼酸铵流，或从闭合残差推断硼酸盐物种。本行不包括送外废水。

- 选定流：排入实际受纳水体的硼
- 流属性/单位：质量 / kg
- 数量规则：采集的归属交换数量；cp_emissions
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`borax-pentaborate-sds-2025`

###### 水蒸气 (`water_vapour`)

记录实际从本化学单元排入室外空气的水蒸气物种，不论来自供入工艺水、直接接触蒸汽或有支持的化学产水。在独立物种/水账户中确定来源；仅有排水蒸气测量不能证明反应产水。留在商品中的结合结晶水及实测返回冷凝水不是本排放。燃烧生成水属于完整表征的连接公用工程生产单元。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采集的归属交换数量；cp_emissions
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_emissions`
- 来源：`borax-pentaborate-pds-2024`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| avoid_allocation | shared operations | 分开场址、等级、水合态、期间及专用阶段。先研究细分或扩展系统报告；仍需分配时，先证明因果物理关系，再采用有记录的其他依据及敏感性分析。不提供默认质量/经济百分比。 | ec-pef-multifunctionality-2021 |
| physical_not_allocated | all physical flows | 实测商品、残余物及排放数量保持未分配。分配只划分LCI负荷向量。内部循环既不是共产品信用，也不是新购原料；可出售残余物需声明功能、去向及相同分配账户。 | ec-pef-multifunctionality-2021 |
| stock_burden | raw WIP FG and original cohorts | 原料、在制品和成品按批次同时追踪物理库存/组成及继承LCI向量。期初原料/在制品负荷随消耗转入，未消耗原料/在制品负荷结转。首次验收的期末成品携带已归属生产向量；不得从Q已包括同一成品的首次验收批次分子中扣除该成品向量。内部连接两端数量一致且不抹除既有负荷。后续储存、复检、重包装和退货服务归原始批次及其锁定原Q；不得除以本期新Q。 | ec-pef-multifunctionality-2021 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_acceptance | pentaborate_plant | 五硼酸铵 | foreground_record | 验收事件标识；原始批次；首次验收时间；独立称得净质量；毛重/皮重；化学式/CAS；清单号；含量方法/基准；水分；期初/末成品；发运；其他退出；退货/转级 | 采用校准称重及实际质量放行记录；对每个首次验收事件去重并锁定总Q。先独立计量Q，再核对所有互斥成品流动；旧成品发运、退货和复检不产生新Q。 | kg | 逐事件及核对后的报告期间 | 完整声明期间，包括启停、失败批次和库存 | 一个声明场址、路线、等级及原始批次 | 每 1 kg 参考流 | 校准；原始记录；样品；接收证据；不确定性；批次台账 |
| cp_inputs | pentaborate_plant | 化学品及水输入 | foreground_record | 收料/领料批次；供应商；供给态；质量；含量；水；密度条件；原料/在制品期初/末组成及继承向量；内部连接 | 采用收料、校准计量表、实际领料及库存记录；区分接收、消耗及内部转移量，保留失败批次消耗。 | kg | 逐事件及核对后的报告期间 | 完整声明期间，包括启停、失败批次和库存 | 一个声明场址、路线、等级及原始批次 | 每 1 kg 参考流 | 校准；原始记录；样品；接收证据；不确定性；批次台账 |
| cp_energy | pentaborate_plant | 一项外部公用工程接口 | foreground_record | 供给及消耗单元标识；所有权；配对表号/事件；发送/接收供给；电力地区/电压/损失边界；实际间接热；蒸汽质量/压力/温度/品质/焓参考；冷凝水发送/接收质量/状态；区间；接口损失；保留/排出的蒸汽水；供给单元清单覆盖；共享驱动量 | 分别计量每项实际载能流，按相同区间/状态匹配供给单元发送量与消耗单元接收量，并记录实测运输/接口损失。将实际蒸汽入口和冷凝水出口与供给端双端配对；核对保留于商品、残余物、库存或水蒸气中的蒸汽水。净热能仅由实际供给/返回质量及同一参考基准上有效状态专属焓计算，或由合适实际热量表取得；保留焓来源证据，不设通用系数。若无热/蒸汽供给，记录不存在，不产生正流。真实场内公用工程按完整连接单元纳入，不得采用未核算燃气/CO2行或遗漏实际锅炉。 | kWh; MJ; kg | 逐匹配接口/库存事件及核对后的报告期间 | 完整声明期间，包括启停、失败批次和库存 | 实际生产/消耗单元及原始商品/包装批次 | 每 1 kg 参考流 | 校准；配对发送/接收记录；原始库存台账；不确定性；批次向量 |
| cp_packaging | pentaborate_plant | 完整HDPE袋接收库存交付及退回 | foreground_record | 袋批号/序列；原始及实际服务商品批次/Q；各方向袋件数及称得空质量；匹配发送/接收空皮重；供应商/所有者；带发送配对的采购或寄入接收；带发送配对的客户退回接收；期初末空袋及已包装袋库存；内部领用/重装；随货袋及接收配对；退供给方袋及接收配对；报废/处置及接收方；未回收损失及调查；继承制造/服务向量；后续储存/重包装 | 逐方向计件并称量完整空袋，保留发送及接收空皮重/状态记录，核对全部外部方向和空袋/已包装袋双库存。新购/寄入、客户退回、内部再用、随货交付、退供给方及最终废物以互斥事件和配对对方记录分开；装填不产生新的外部袋接收。完整物理袋量独立于分配份额保留。原制造负荷仅继承一次；后续储存、退回、清洗或重包装增量归原商品批次及其锁定原Q，不作为新的商品验收。 | kg | 逐匹配接口/库存事件及核对后的报告期间 | 完整声明期间，包括启停、失败批次和库存 | 实际生产/消耗单元及原始商品/包装批次 | 每 1 kg 参考流 | 校准；配对发送/接收记录；原始库存台账；不确定性；批次向量 |
| cp_residues | pentaborate_plant | 一项外部废物流 | foreground_record | 来源；整股质量；水/固体；硼/氮分析；接收者；路线；事件；内部循环量；零产出事件 | 采用称重转移、接收记录及代表性取样。分别核对母液、粉尘、固体不合格品和清洗废水，区分内部回收及最终直接释放。 | kg | 逐事件及核对后的报告期间 | 完整声明期间，包括启停、失败批次和库存 | 一个声明场址、路线、等级及原始批次 | 每 1 kg 参考流 | 校准；原始记录；样品；接收证据；不确定性；批次台账 |
| cp_emissions | pentaborate_plant | 一种实际物种或颗粒物粒级 | foreground_record | 源/排口；受纳介质；分析物；质量或浓度；积分流量或流率/时间；气体干/湿温压；水分；治理；检出限；组成/粒径 | 采用实际有代表性源监测及所含处理后匹配物理流量。保留NH3与N、总/溶解硼、颗粒物及水物种定义；逐项监测其他实际排放。 | kg | 逐事件及核对后的报告期间 | 完整声明期间，包括启停、失败批次和库存 | 一个声明场址、路线、等级及原始批次 | 每 1 kg 参考流 | 校准；原始记录；样品；接收证据；不确定性；批次台账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| cohort_normalization | all inventory rows | 首次验收门归属交换=批次关联实测新增交换加消耗的期初原料/在制品继承向量，减未消耗期末原料/在制品向量及分配给其他输出/批次的负荷，采用有记录且互不重叠的归属台账。首次验收后留在期末成品中的生产负荷保留在本原始批次分子中，因为该成品已计入Q；成品保留已归属向量用于后续追踪，发运时不再重复计入生产负荷。仅以同一原始批次独立实测的正首次验收Q对该归属分子归一化一次。保留分配前全部物理总量及失败/零产出事件。Q=0不产生归一化结果；保留其负荷用于可追踪后续去向，不得默删该事件。 | actual exchanges; Q; raw/WIP/FG vectors; cp_acceptance | per 1 kg reference flow | ec-pef-multifunctionality-2021 |
| gate_reconciliation | pentaborate | Q是唯一标识、实测首次验收事件的锁定总和，不是由发运或库存闭合推算的数值。逐报告期及批次核对期初成品+该期内实测首次验收量+外部退货/调入/转级入=期末成品+发运+单独分类的其他验收后退出+转级出。已验收旧批次在后续期间的首次验收量为零；其锁定原始Q不得再加入该期平衡。其他验收后退出包括单独计量的处置/破坏性检测、样品/捐赠及跨厂转移；这些类别与发运/转级出必须互斥。定义不同的有向流入对应类别，防止退货/发运重复。仅当新批次无期初成品、退货、调入、转级及其他验收后退出时，Q=新批次发运+新批次期末成品才是条件桥接；它始终不是Q的定义。 | first-acceptance events; all FG movements; cp_acceptance | independent Q and reconciliation residual | borax-pentaborate-sds-2025 |
| chemistry_accounts | pentaborate_plant | 分别保持本化学品/商品单元未分配的总质量、硼/氮/氢/氧元素、分子物种/水及能量账户，包含原料/在制品/成品和空袋/已包装袋期初末库存、完整外部物流及相等内部连接。蒸汽输入与冷凝水返回采用实际双端质量和状态记录；保留或排出的蒸汽水仍属于本单元水账户。仅在实际反应/形态证据支持账户时，某物种净生成/消耗=输出+期末库存−输入−期初库存；不得对化学转化的硼酸、氨或分子水强制为零。元素守恒不标识反应产物。分别追踪结晶水、游离水分、化学生成/消耗的分子水、释放水蒸气及冷凝水；不得把化学结合羟基计为供入水，也不得编造反应水强行闭合。燃料/燃烧空气/反应水/排放/能量账户属于实际连接的公用工程生产单元，不能遗漏锅炉或采用无支持的单行燃烧分支。 | whole streams; assays; reaction evidence; all stocks; paired utility interfaces; cp_energy; cp_packaging | separate physical balance accounts | borax-pentaborate-pds-2024; borax-pentaborate-sds-2025 |
| measured_release | ammonia_air, pentaborate_air, boron_water, water_vapour | 逐匹配区间，将实测浓度与已积分且相容的气体/排水体积相乘并明确单位换算。只有流率才按时间积分；已积分体积不得再乘时间。分析物/物种及干湿/参考气体基准保持一致。报告检出不确定性、实际受纳介质和互斥颗粒物粒级。 | matched monitoring; volume or rate/time; cp_emissions | actual emitted mass | borax-pentaborate-sds-2025 |
| utility_pairs | steam, condensate_return, supplied_heat | 保留实际供入蒸汽质量及实际返回冷凝水质量两项物理交换，配对供给/消耗双端。净蒸汽热转移为供给质量乘有支持的供给态比焓，减返回质量乘有支持的返回态比焓，采用同一焓参考及明确单位换算；另行核算实测接口损失及保留/释放水。间接热量表数量不是额外蒸汽质量。不得强行令入口/返回质量相等、编造补水/生成水或假定正热负荷。 | actual paired mass and state; validated enthalpies; cp_energy | actual utility mass/energy interface | ec-pef-multifunctionality-2021 |
| bag_reconciliation | hdpe_bag, returned_hdpe_bag, delivered_hdpe_bag, hdpe_bag_return_to_supplier, hdpe_bag_waste | 逐实际期间/批次核对：期初空袋质量+期初已包装袋质量+新购/寄入接收+外部客户退回=期末空袋质量+期末已包装袋质量+随商品交付完整袋+退供给方完整袋+实测废袋+单独调查的实际未回收损失。采用互斥有向事件、匹配对方数量及相互抵消的内部装填/重复使用转移。不得将实测袋出口乘环境分配份额。首次验收期末已包装成品保留原Q内的袋向量；后续发运仅转移该继承物理/负荷库存，不再次计入制造负荷，后续增量服务使用原Q。 | actual whole-bag movements; empty/packed stocks; original Q; cp_packaging | full physical packaging bridge and cohort service attribution | dmcc-pentaborate-product; ec-pef-multifunctionality-2021 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | pentaborate | 要求完整交付态、≥99%整商品含量方法、实际水合态/CAS、单独的清单号、路线及供给方质量相容性。仅有当量分析及理论氧化物含量不足。 | cp_acceptance; borax-pentaborate-sds-2025 |
| denominator | all inventory rows | 要求独立称重的唯一首次验收、完整有向成品退出和旧批次服务；不得由库存或发运推定新生产。 | cp_acceptance |
| balance | pentaborate_plant | 由实际计量不确定性确定容差。分别调查质量、元素、物种/水及能量残差。不使用经验闭合因子或假定未测收率。 | cp_inputs; cp_residues; cp_energy; cp_emissions |
| coverage | pentaborate_plant | 逐项报告未解决流标识、缺失计量、缺失阶段及额外实际物质。不得将生产商规格、溶解度图或工人接触建议转换为场址清单因子。 | borax-pentaborate-spec-v3; borax-pentaborate-sds-2025 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| check_identity | pentaborate | 要求一项完整干燥整商品输出，符合所选流条件并声明化学标识与清单登记标识。硬性相反的化学式、水合态、纯度分母或路线在解决前使连接不可用。不得通过解释修改原生记录。 | borax-pentaborate-sds-2025 |
| check_q | all inventory rows | 要求1千克参考输出、共同的正原始批次Q及一次归一化。旧成品、再次验收、退货和复检不得增大Q。任何发运/期末库存桥接前检查其他验收后退出。 | borax-pentaborate-sds-2025 |
| check_conservation | pentaborate_plant | 核对本化学单元总量/元素守恒、有支持的物种生成/消耗及独立热/能量账户，并带有原料/在制品/成品及包装物理和继承负荷向量。核对完整实际连接的公用工程生产单元和匹配蒸汽/冷凝水接口。核对外部包装双端，不得按环境负荷份额缩放物理退出。 | ec-pef-multifunctionality-2021; borax-pentaborate-sds-2025 |
| check_releases | all residuals and emissions | 要求最终去向、实际物种/分析物基准、相容单位及不同捕集/回收/排放路径。公用工程燃烧由明确连接且完整表征的生产单元供给；本化学单元内直接燃烧在建立有支持的完整单元清单前不符合该受限接口画像。将实际药剂、包装及污染物作为原子行补充；不得用未测零或通用集合流。 | borax-pentaborate-sds-2025 |
| check_limits | data package | 结构、计量及投影核验不批准科学适用性，也不补齐未解决UUID/供给方证据。披露剩余缺口，并在实际数据集完整前限制使用。 | borax-pentaborate-pds-2024 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际限定的工业干燥四水合物商品，来自声明硼酸/氨场址路线及交付质量基准 |
| excluded_use | 整个CPC家族等效；水性复配品；无水盐替代；通用配方；性能或安全批准 |
| required_metadata | 场址/期间；路线/阶段；化学式/水合态及CAS不同角色；含量方法；水分；等级/形态；验收门/批次/Q；库存/向量；包装；上游基准；分配；接收方 |
| required_quality_disclosure | 未解决标识；原生分类差异；来源专属限制；实际计量不确定性；未测阶段；残差及跳过的核验 |
| update_trigger | 水合态/含量方法、路线、供应商、能源地区、包装、验收门、处理或受纳介质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| borax-pentaborate-pds-2024 | handbook | U.S. Borax, Ammonium Pentaborate Product Data Sheet, September 2024. https://www.borax.com/BoraxCorp/media/Borax-Main/Resources/Data-Sheets/ammonium-pentaborate.pdf?ext=.pdf | 第1–3页：完整四水合物商品、氨/水/硼酸反应、晶体交付状态、吸湿性、分解与容器示例。理论氧化物组成、溶解度及生产商示例不是清单因子或操作说明。 |
| borax-pentaborate-spec-v3 | handbook | Borax Français S.A.S., Ammonium Pentaborate Technical Powder, BFC31-v.3, undated. https://www.borax.com/BoraxCorp/media/Borax-Main/Resources/Specifications-Sheets/ammonium-pentaborate-technical-powder.pdf?ext=.pdf | 完整单页：工业晶体四水合物及生产商分析规格。当量四水合物分析值可超过100%；它不是物理组分质量分数、收率、无水盐分数或通用等级。 |
| borax-pentaborate-sds-2025 | handbook | Rio Tinto Borates / Borax Français S.A.S., Ammonium Pentaborate SDS AP-BF-AP-EN, January 2025. https://sds.riotinto.com/display/rtm/FileName-502775 | 完整7页SDS：第1、3、9、15节连接同名完整四水合物商品、CAS12046-04-7、大于99.0%的含量以及单独的无水盐清单登记号12007-89-5。第6–13节支持粉尘、受潮、氨与水体释放识别。职业限值、毒性终点和理论换算均不是清单默认值。 |
| dmcc-pentaborate-product | handbook | DMCC Speciality Chemicals, Ammonium Pentaborate product page, undated. https://dmcc.com/product/boron-chemicals/ammonium-pentaborate | 独立生产商商品背景：CAS12046-04-7、八水合十硼酸二铵表达式及HDPE袋交付。双倍式表达相同水合组成；不得把商品质量翻倍。网页氧化铵标签含Na4笔误，不作定量采用。未据此确定工厂配方、收率或燃料结构。 |
| ec-pef-multifunctionality-2021 | official_guidance | European Commission, Recommendation C(2021) 9332 final, Annexes 1–2, 2021. https://environment.ec.europa.eu/system/files/2021-12/Annexes%201%20to%202.pdf | 第4.5节，PDF第63–64页：先研究细分/系统扩展，再采用相关物理关系及有理由的其他分配依据。仅作为通用方法，不提供硼酸盐专属分配百分比或替代信用。 |
