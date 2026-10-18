---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.heat-molded-butyl-bicycle-inner-tubes
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 热模丁基橡胶自行车内胎制造

## 1. 范围与适用性

本 PCR 覆盖以非卤化丁基橡胶（IIR）为主要弹性体、带气门的闭环自行车内胎：现场配料混炼、开炼与过滤、管坯挤出冷却、端部接合、气门装配、热模硫化、逐件验收及供货准备。内胎是在独立外胎内保持空气的部件，其管壁、接头及气门结合控制有别于胎体、胎圈、帘线和胎面制造。本方法对独立制造商证据作技术综合；并不声称各来源描述同一 SKU 或统一配方。

排除完整充气外胎、无内胎外胎的内衬、实心或缓冲胎、可更换胎面、胎衬、硫化胶囊、工业胶管、开口维修内胎、乳胶及 TPU 内胎、高压釜硫化内胎、以卤化丁基胶为基础的内胎、再生胶投料路线和只采购成品再包装的作业。不覆盖全部 CPC 36114 产品，也不证明轮胎使用性能等效。

`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.rubber-and-plastics-products.heat-molded-butyl-bicycle-inner-tubes |
| classification_refs | CPC 3.0 36114（更窄产品子集） |
| covered_products | 现场原生胶混炼的带气门热模 IIR 自行车内胎 |
| excluded_products | 排除完整充气外胎、无内胎外胎的内衬、实心或缓冲胎、可更换胎面、胎衬、硫化胶囊、工业胶管、开口维修内胎、乳胶及 TPU 内胎、高压釜硫化内胎、以卤化丁基胶为基础的内胎、再生胶投料路线和只采购成品再包装的作业。不覆盖全部 CPC 36114 产品，也不证明轮胎使用性能等效。 |
| representative_product | 一种声明尺寸壁厚和气门配置的完整供货内胎 |
| production_route | 配料混炼过滤 → 挤出冷却 → 接合装气门 → 热模硫化检验 → 仓储包装装载 |
| market_state | 全新已硫化验收内胎及声明气门附件；净交付门的产品干净质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供用于独立供货自行车外胎的保气内部组件 |
| How much | 一千克净验收交付完整内胎 |
| How well | 声明尺寸壁厚、气门兼容、接头完整及气密验收 |
| How long or cycle | 一次制造至交付周期；不声明骑行里程或寿命等效 |
| reference_flow_link | delivered_tube |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 橡胶制的内胎、实心轮胎或半实心轮胎、轮胎花纹、轮胎衬带 `362630fe-314f-443f-b191-f8bed8eec674` |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 内胎尺寸及适配外胎和轮辋尺寸; IIR 牌号及完整供应商和配方身份; 壁厚及热模路线; 气门型式及完整供货附件; 场址地理及实际公用工程供应; 验收试验及保压条件; 净交付门及报告期间; 排除包装与试验空气的净质量; 在制品与成品库存数量及结转负荷; 包装及仓储装载范围 |

原生 Product 身份为宽泛的已制造橡胶制品族、工厂生产混合；未指定地理、配方或尺寸，仅声明 Mass 属性。本卡将其限定为含所声明气门及附件的完整热模 IIR 自行车内胎。它不是件数身份，也不证明供应商或背景数据集匹配。须匹配声明配置和供货净质量，不得推断密度、单件重量或使用寿命。

终端参考门为制造场址完成所声明仓储、包装及装载后、外部出厂运输前的实际净验收交付。Q 为同一产品配置、路线、期间和供货状态的正净交付质量，排除包装与试验空气。生产放行量 P 单独记账。匹配退回及取消修正后，每次物理交付仅计一次；再检验或重新发运不产生新产量。未交付成品不计入 Q，其结转负荷继续留存。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_mass | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用包含声明气门附件、排除包装及试验空气的完整供货内胎净质量。保留原生 Mass 为参考；件数仅辅助质控，无实测配置特定净质量不能替代，不提供通用单件重量。 |
| delivery_basis | 所有清单行 | 质量 | kg | 采用实际正净交付 Q，不以生产放行 P 替代。保留未经归一原始记录、库存及负荷向量。normalize_delivery 是唯一报告除法；卡片与汇总字段描述同一次操作。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实名场址的单独外购干原生 IIR、声明的实际成分和整份供货制剂、气门总成及公用工程 |
| starting_condition_role | 前景制造，关联上游生产和进厂运输 |
| product_classification_scope | CPC 36114 中更窄的热模自行车内胎子集 |
| recursive_input_rule | 外购完整内胎不能替代现场生产。退回返工内胎保留已追踪原负荷，不递归新增成品采购；真正外来退回品及其结转负荷须单独声明。 |
| upstream_dataset_requirement | 匹配每项采购的物理形态、配方供应商、地理、供货状态及实际运输；通用身份不足以证明供应者匹配 |
| disclosure | 声明生产及交付门、实际公用工程技术、原始及库存期间、试验、包装、排除的下游运输使用报废和全部剩余数据供应者缺口 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| boundary_manufacture | 全部过程 | 通过关联上游数据集纳入材料生产和进厂运输，纳入实际现场混炼过滤、挤出冷却、接合装气门、热模硫化、检验、失败、返工、仓储、包装及装载，直至所声明净交付门。所列卡片是声明路线的最低要求，不是省略实际交换的许可；其他实际成分、供货制剂、燃料、制冷剂、包装组件、废物或基本物种均须单独建卡并关联协议。仅有缺席证据才能将条件行标为 not_applicable，未知不能为零。 | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008` |
| boundary_terminal | 全部过程 | 终端参考门为制造场址完成所声明仓储、包装及装载后、外部出厂运输前的实际净验收交付。Q 为同一产品配置、路线、期间和供货状态的正净交付质量，排除包装与试验空气。生产放行量 P 单独记账。匹配退回及取消修正后，每次物理交付仅计一次；再检验或重新发运不产生新产量。未交付成品不计入 Q，其结转负荷继续留存。 | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017` |
| boundary_internal | 全部过程 | compound_out/compound_in、green_out/green_in 及 released_tubes/released_in 按批次、物理数量与结转负荷匹配。合并数据集时每份内部交接抵消一次，包括内部蒸汽及边角料循环。在制品和成品期初末为带负荷向量的物理库存，不是采购中间品或额外终端产出。退回产品保留身份与原负荷。 |  |
| boundary_evidence | 全部过程 | Schwalbe 2015 支持自行车丁基内胎热模路线、过滤、气门结合与逐件检验，其七道过滤及二十四小时保压属于制造商案例条件，不是通用默认值。Innovative 2017 支持独立内胎混炼至发运路线，排除相邻的外胎专属配方文字。EPA 2008 是历史 DRAFT 通用过程资料，不是现行法律要求或内胎因子来源；不采用外胎胶囊、内衬配方及其因子。不规定通用配方、硫化温度时间、收率、使用寿命或排放因子。 | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008` |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_compound | 配料混炼与过滤 | required | 实际声明路线及供货配置 | 前景制造阶段 | 每参考流 |
| p_form | 管坯挤出冷却、接合及气门装配 | required | 实际声明路线及供货配置 | 前景制造阶段 | 每参考流 |
| p_cure | 热模硫化及验收检验 | required | 实际声明路线及供货配置 | 前景制造阶段 | 每参考流 |
| p_delivery | 成品仓储、包装及净交付 | required | 实际声明路线及供货配置 | 前景制造阶段 | 每参考流 |

### 过程：配料混炼与过滤 (`p_compound`)

#### 输入

##### 产品流

###### 原生 IIR 投料 (`iir_feed`)

记录实际单独外购干 IIR 的牌号、批次、净质量及供应商证据。丁二烯与苯乙烯路线不兼容。聚合物为外购品，其聚合属上游；现场混炼全部在边界内。

- 选定流：异丁烯-异戊二烯橡胶，非卤化
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`schwalbe-tube-tech-2015`; `epa-rubber-process-2008`

###### 单独供应的补强炭黑 (`carbon_black`)

仅用于单独外购炭黑。原生 CAS 1333-86-4，为用于橡胶补强的商业固体碳；未固定牌号、路线或地理。原生 CPC 37950 石墨族归类是已披露分类瑕疵；一致的名称、CAS 和注释支持物理身份，但不证明供应商牌号或生产技术。已包含在外购制剂中的炭黑仅作为该制剂成分子账。

- 选定流：炭黑 `dee14a4f-c02b-4bf5-affc-9e66b1d9a8ce`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`epa-rubber-process-2008`

###### 单独供应的硫磺硫化剂 (`sulfur`)

仅纳入声明硫化体系实际单独外购的元素硫投入；保留纯度与商品形态。

- 选定流：硫磺
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`epa-rubber-process-2008`

###### 单独供应的氧化锌活化剂 (`zinc_oxide`)

仅在实际配方使用时纳入单独外购氧化锌；若为供应商分散制品，应改为记录整份供货制剂。

- 选定流：氧化锌
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`epa-rubber-process-2008`

###### 单独供应的硬脂酸 (`stearic_acid`)

实际配方单独采购硬脂酸时适用；不规定通用生胶百份配方。

- 选定流：硬脂酸
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`epa-rubber-process-2008`

###### 单独供应的 MBTS 促进剂 (`mbts`)

仅当实际配方确认 MBTS 时适用的具体促进剂行。须确认商品形态，不能作为其他促进剂的选择占位行。

- 选定流：二硫化二苯并噻唑
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`epa-rubber-process-2008`

###### 单独供应的石蜡基工艺油 (`process_oil`)

实际使用时纳入，以整份商品油计量，不把芳烃或烃类分量另算采购。

- 选定流：石蜡基橡胶工艺油
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`epa-rubber-process-2008`

###### 外购硫磺水分散制剂 (`curative_dispersion`)

仅对应一份实际供货硫磺分散制剂，不是硫化剂集合。记录供货湿净质量、供应商组成、活性硫及载水非加和子账；同一成分不能再按单独采购硫磺或水计入。其他实际商品制剂须各建原子卡。

- 选定流：硫磺水分散制剂
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`epa-rubber-process-2008`

###### 滑石防粘粉 (`talc`)

计量实际领用防粘滑石及其残留、捕集和排放去向；循环粉尘不算新采购。

- 选定流：滑石粉
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`innovative-tube-process-2017`

###### 过程计量用电 (`compound_electricity`)

原生身份限定中国（CN）供应、1–35千伏交流电、交付用户的电网平均消费组合，以净热值属性及 MJ 为基准。仅在供应匹配时使用此 UUID。其他地理、电压或专用供应须在数据包交付前解析匹配身份，保留其实测电量。使用精确单位链系数 3.6 将电表千瓦时一次换成 MJ；能量系数不是密度。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`epa-rubber-process-2008`

#### 输出

##### 产品流

###### 内部未硫化内胎胶料 (`compound_out`)

计量完成全部终炼和过滤后转出胶料。与 compound_in 对应并在合并时抵消内部交接；不是成品内胎 Q。

- 选定流：未硫化丁基内胎胶料
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

##### 废物流

###### 废弃橡胶过滤残渣 (`filter_residue`)

计量废弃过滤残渣，保留含胶与填料组成及实际处理。返回的洁净未硫化胶是内部循环，不是本废物或新原生投入。

- 选定流：橡胶过滤残渣
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

##### 基本流

###### 未捕集炭黑向空气排放 (`carbon_black_air`)

仅计量实际未捕集炭黑空气排放；捕集粉尘为另列物料或废物去向。无组成证据不得把总粉尘认作纯炭黑，滑石等实际粉尘物种分别另建卡。

- 选定流：炭黑颗粒向空气排放
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_compound`
- 来源：`epa-rubber-process-2008`

### 过程：管坯挤出冷却、接合及气门装配 (`p_form`)

#### 输入

##### 产品流

###### 内部接收内胎胶料 (`compound_in`)

按质量、批次及结转负荷匹配 compound_out，不再新增上游采购。

- 选定流：未硫化丁基内胎胶料
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_form`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 完整供货自行车内胎气门 (`valve`)

记录包含实际基座、气门芯、螺母及帽配置的一份完整供货气门总成；独立供应附件另行建卡。内含金属或橡胶质量不得再算采购，须保留供应商成分用于物理质量账。

- 选定流：自行车内胎气门总成
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_form`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 冷却新水补充 (`cooling_water`)

仅记录跨边界冷却补水及实际排污；内部循环另行计量，不重复采购。供货制剂载水不在此再次计入。

- 选定流：新鲜工艺水
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_form`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 过程计量用电 (`form_electricity`)

原生身份限定中国（CN）供应、1–35千伏交流电、交付用户的电网平均消费组合，以净热值属性及 MJ 为基准。仅在供应匹配时使用此 UUID。其他地理、电压或专用供应须在数据包交付前解析匹配身份，保留其实测电量。使用精确单位链系数 3.6 将电表千瓦时一次换成 MJ；能量系数不是密度。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_form`
- 来源：`epa-rubber-process-2008`

#### 输出

##### 产品流

###### 内部带气门已接合生内胎 (`green_out`)

冷却、裁切及装配后匹配尺寸、挤出长度与管壁、接头及气门批次；合并时与 green_in 抵消。

- 选定流：带气门闭环未硫化丁基内胎
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_form`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

##### 废物流

###### 废弃未硫化管坯边角料 (`uncured_scrap`)

仅实际送处理的物料作为废物转出。内部返回边角料按质量及结转负荷另记，保留挤出和接合失败的全部能源。

- 选定流：未硫化丁基胶边角料
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_form`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 冷却排污水 (`cooling_purge`)

记录排出水质量及实测污染物，与新水及蒸发分开。处理服务投入不是第二份质量出口。

- 选定流：冷却回路废水
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_form`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

### 过程：热模硫化及验收检验 (`p_cure`)

#### 输入

##### 产品流

###### 内部接收生内胎 (`green_in`)

匹配 green_out 并保留其结转负荷；不得以采购成品内胎替代成型和硫化清单。

- 选定流：带气门闭环未硫化丁基内胎
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cure`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 外购硫化蒸汽 (`steam`)

实际外供时纳入，并声明压力、温度、干度及凝结水返回约定。使用实际计量的供汽及回汽焓。现场制汽时展开锅炉的每种实际燃料、水、化学品及排放，抵消内部蒸汽；不能外购蒸汽又计其对应锅炉燃料。

- 选定流：蒸汽
- 流属性/单位：能量 / MJ
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cure`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 外购硅油水性脱模分散制剂 (`release_dispersion`)

仅为一份实际外购制剂，按供货湿质量计量。硅油、载水及添加剂列供应商子账，不新增采购。其他实际脱模产品分别建卡。

- 选定流：硅油水性脱模分散制剂
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cure`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 过程计量用电 (`cure_electricity`)

原生身份限定中国（CN）供应、1–35千伏交流电、交付用户的电网平均消费组合，以净热值属性及 MJ 为基准。仅在供应匹配时使用此 UUID。其他地理、电压或专用供应须在数据包交付前解析匹配身份，保留其实测电量。使用精确单位链系数 3.6 将电表千瓦时一次换成 MJ；能量系数不是密度。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cure`
- 来源：`epa-rubber-process-2008`

#### 输出

##### 产品流

###### 质量放行内胎入成品库 (`released_tubes`)

这是生产放行质量 P，不是交付 Q。原生 Product 身份为宽泛的已制造橡胶制品族、工厂生产混合；未指定地理、配方或尺寸，仅声明 Mass 属性。本卡将其限定为含所声明气门及附件的完整热模 IIR 自行车内胎。它不是件数身份，也不证明供应商或背景数据集匹配。须匹配声明配置和供货净质量，不得推断密度、单件重量或使用寿命。 匹配 released_in 并在合并时抵消内部交接；保留生产检验、废品及破坏性样品。

- 选定流：橡胶制的内胎、实心轮胎或半实心轮胎、轮胎花纹、轮胎衬带 `362630fe-314f-443f-b191-f8bed8eec674`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cure`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

###### 转出蒸汽凝结水 (`condensate`)

实际回汽或排放时记录凝结水，保留热量及水去向，不重复计蒸汽供应方返回抵扣。闭路模具水不是外购产出。

- 选定流：蒸汽凝结水
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cure`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

##### 废物流

###### 报废已硫化内胎 (`cured_reject`)

计量完整废品质量；气门仍在时须包含气门。仅在实际分离节点按守恒质量拆气门回收与余胶，默认不作销售抵扣。

- 选定流：带气门报废硫化丁基内胎
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cure`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

##### 基本流

###### 实测蒸发工艺水 (`water_vapour`)

仅为空气介质；凭状态和测量证据独立计量水分或蒸汽蒸发。不对橡胶交联强加通用化学反应水系数。

- 选定流：排向空气的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cure`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

###### 分析确认时的甲苯排放 (`toluene_air`)

仅在实际制剂或辅助剂及监测确认时记录具体物种空气排放；不能代表通用 VOC 残差。其他识别物种各自建卡。显著未识别有机物须明确为测量缺口，不作零值或闭合拟合。

- 选定流：排向空气的甲苯
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_cure`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008`

### 过程：成品仓储、包装及净交付 (`p_delivery`)

#### 输入

##### 产品流

###### 接收质量放行内胎 (`released_in`)

匹配 released_tubes 及期初成品批次与结转负荷。原生 Product 身份为宽泛的已制造橡胶制品族、工厂生产混合；未指定地理、配方或尺寸，仅声明 Mass 属性。本卡将其限定为含所声明气门及附件的完整热模 IIR 自行车内胎。它不是件数身份，也不证明供应商或背景数据集匹配。须匹配声明配置和供货净质量，不得推断密度、单件重量或使用寿命。 退回内胎复验合格不得重新生成 P。

- 选定流：橡胶制的内胎、实心轮胎或半实心轮胎、轮胎花纹、轮胎衬带 `362630fe-314f-443f-b191-f8bed8eec674`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 瓦楞运输纸箱 (`carton`)

实际单独供货的一种纸箱质量、组成与复用次数；从内胎净质量 Q 排除，包装损失及退回更换纸箱留在本账。

- 选定流：瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 聚乙烯内胎袋 (`pe_bag`)

实际使用时纳入一种独立供应聚乙烯袋；不得代表其他聚合物、标签或混合包装。

- 选定流：聚乙烯包装袋
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 纸质产品标签 (`label`)

使用时纳入一种供货印刷纸标签；自带胶列供应商组成，仅实际独立施胶时另列原料。

- 选定流：印刷纸标签
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

###### 过程计量用电 (`delivery_electricity`)

原生身份限定中国（CN）供应、1–35千伏交流电、交付用户的电网平均消费组合，以净热值属性及 MJ 为基准。仅在供应匹配时使用此 UUID。其他地理、电压或专用供应须在数据包交付前解析匹配身份，保留其实测电量。使用精确单位链系数 3.6 将电表千瓦时一次换成 MJ；能量系数不是密度。

- 选定流：交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`epa-rubber-process-2008`

#### 输出

##### 产品流

###### 净验收交付内胎 (`delivered_tube`)

原生 Product 身份为宽泛的已制造橡胶制品族、工厂生产混合；未指定地理、配方或尺寸，仅声明 Mass 属性。本卡将其限定为含所声明气门及附件的完整热模 IIR 自行车内胎。它不是件数身份，也不证明供应商或背景数据集匹配。须匹配声明配置和供货净质量，不得推断密度、单件重量或使用寿命。 终端参考门为制造场址完成所声明仓储、包装及装载后、外部出厂运输前的实际净验收交付。Q 为同一产品配置、路线、期间和供货状态的正净交付质量，排除包装与试验空气。生产放行量 P 单独记账。匹配退回及取消修正后，每次物理交付仅计一次；再检验或重新发运不产生新产量。未交付成品不计入 Q，其结转负荷继续留存。

- 选定流：橡胶制的内胎、实心轮胎或半实心轮胎、轮胎花纹、轮胎衬带 `362630fe-314f-443f-b191-f8bed8eec674`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery_gate`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

##### 废物流

###### 废弃瓦楞纸箱 (`waste_carton`)

记录终端门前实际破损纸箱废物及去向，不把已交付包装当作厂内废物。

- 选定流：废瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：n_i，即第八节定义的、原始单位换算和库存负荷归属后唯一归一交换量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`process_output`
- 证据类型：`collected_record`
- 采集协议：`cp_delivery`
- 来源：`schwalbe-tube-tech-2015`; `innovative-tube-process-2017`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_trace | 全部过程 | 先分场址、产品、气门配置、路线与期间。优先直接计量或批次追踪，再以有因果依据的设备或占用记录分配共享电力、蒸汽、通风、冷却、仓储及装载负荷。声明分配因子、单位、范围及共享总负荷守恒。不得以内胎为参考群而用全部轮胎产量作分母。 | jrc-ilcd-2010-allocation |
| allocation_stock | 全部过程 | 同产品交付账结入期初在制品与成品负荷向量，结出期末向量，保留失败或零产出、退回、重复试验和返工的全部实际负荷。不自动给予废料或回收替代信用。真正独立交付的共产品须另记质量、去向与有依据的分配，未硫化胶内部回用不是共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_compound | p_compound | 原子交换及批次作业 | 前景原始期间账 | 批次号; 配方及供货形态; 成分湿干质量; 成分含量及水子账; 计量起止读数; 运行时间; 阶段交接号及质量; 失败与零产出批次; 边角料返回与返工; 期初末在制品和成品批次; 结转负荷向量; 废物及物种结果 | 负责人：该过程实名生产工程师，计量与质量人员签认。保留未经归一的完整期间原始分子、失败或零产出、退回返工增量及期初末结转负荷向量。核对校准秤、配方领退料、公用工程表计和内部交接，保留时间戳与实际单位。采集端不执行 A_i/Q。 | 千克; MJ; 千瓦时; 立方米; 小时; 物种千克 | 每批及每表计时段 | 完整声明期间，包括启停与失败 | 实名场址及同内胎配置路线批群 | 每参考流 | 校准; 配方领退料表; 批次谱系; 表计边界; 库存及负荷核对; 签认处置 |
| cp_form | p_form | 原子交换及批次作业 | 前景原始期间账 | 批次号; 配方及供货形态; 成分湿干质量; 成分含量及水子账; 计量起止读数; 运行时间; 阶段交接号及质量; 失败与零产出批次; 边角料返回与返工; 期初末在制品和成品批次; 结转负荷向量; 废物及物种结果 | 负责人：该过程实名生产工程师，计量与质量人员签认。保留未经归一的完整期间原始分子、失败或零产出、退回返工增量及期初末结转负荷向量。核对校准秤、配方领退料、公用工程表计和内部交接，保留时间戳与实际单位。采集端不执行 A_i/Q。 | 千克; MJ; 千瓦时; 立方米; 小时; 物种千克 | 每批及每表计时段 | 完整声明期间，包括启停与失败 | 实名场址及同内胎配置路线批群 | 每参考流 | 校准; 配方领退料表; 批次谱系; 表计边界; 库存及负荷核对; 签认处置 |
| cp_cure | p_cure | 原子交换及批次作业 | 前景原始期间账 | 批次号; 配方及供货形态; 成分湿干质量; 成分含量及水子账; 计量起止读数; 运行时间; 阶段交接号及质量; 失败与零产出批次; 边角料返回与返工; 期初末在制品和成品批次; 结转负荷向量; 废物及物种结果 | 负责人：该过程实名生产工程师，计量与质量人员签认。保留未经归一的完整期间原始分子、失败或零产出、退回返工增量及期初末结转负荷向量。核对校准秤、配方领退料、公用工程表计和内部交接，保留时间戳与实际单位。采集端不执行 A_i/Q。 | 千克; MJ; 千瓦时; 立方米; 小时; 物种千克 | 每批及每表计时段 | 完整声明期间，包括启停与失败 | 实名场址及同内胎配置路线批群 | 每参考流 | 校准; 配方领退料表; 批次谱系; 表计边界; 库存及负荷核对; 签认处置 |
| cp_delivery | p_delivery | 原子交换及批次作业 | 前景原始期间账 | 批次号; 配方及供货形态; 成分湿干质量; 成分含量及水子账; 计量起止读数; 运行时间; 阶段交接号及质量; 失败与零产出批次; 边角料返回与返工; 期初末在制品和成品批次; 结转负荷向量; 废物及物种结果 | 负责人：该过程实名生产工程师，计量与质量人员签认。保留未经归一的完整期间原始分子、失败或零产出、退回返工增量及期初末结转负荷向量。核对校准秤、配方领退料、公用工程表计和内部交接，保留时间戳与实际单位。采集端不执行 A_i/Q。 | 千克; MJ; 千瓦时; 立方米; 小时; 物种千克 | 每批及每表计时段 | 完整声明期间，包括启停与失败 | 实名场址及同内胎配置路线批群 | 每参考流 | 校准; 配方领退料表; 批次谱系; 表计边界; 库存及负荷核对; 签认处置 |
| cp_delivery_gate | p_delivery | 参考产品及库存核对 | 净验收交付账 | 批次与配置; 内胎净质量; 包含气门附件; 包装皮重; 发运及接收号和时间; 取消退回重发; P; 期初末成品质量及负荷向量; 唯一净交付 Q | 负责人：发运保管员及质量经理。用校准秤称量验收供货内胎，扣除实测包装皮重并排除试验空气。按身份核对净验收交付与匹配取消退回，不假设 P=Q。保留原始交付及库存记录与结转负荷，不归一投入。 | 千克 | 每次交付及期间结账 | 与生产库存相同完整期间和批群 | 声明的制造场址净交付门 | 每参考流 | 签认交付验收; 校准皮净称重; 库存谱系; 退回修正 |
| cp_acceptance | p_cure | 模具内胎及气门验收 | 质量与处置记录 | 模具及批次; 实际时间温度压力; 管壁与接头结果; 气门结合; 气密试验压力保压温度; 合格不合格; 复验; 样品损失; 最终处置 | 负责人：质量经理。保留模具周期、冷却与逐件外观气密验收记录，包括失败、重复及破坏试验。试验条件依据实际产品规范。试验空气列内部公用工程平衡，不计交付产品质量。 | 千克; 实际试验单位 | 每周期及逐件内胎试验 | 完整匹配期间 | 同一声明自行车内胎与气门配置 | 每参考流 | 试验规范; 仪器校准; 签认验收及废品追踪 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| convert_raw | 所有清单行 | 各原始量在负荷归属前一次换成本行单位。电力 MJ = 实测千瓦时 × 3.6。流率须匹配持续时间；已积分气液体积不得再乘时间。体积转质量须独立的流体状态特定密度及校准。制剂湿质量与成分含量不是加和采购。 | raw_readings; calibration; supplied_form | converted_raw |  |
| delivery_attribution | 所有清单行 | 对每项交换 i，A_i = 期初在制品成品结转负荷_i + 换算后原始期间负荷_i + 追踪的外来退回负荷_i - 期末在制品成品结转负荷_i - 单独论证的非参考负荷_i。内部交接仅抵消一次。保留实际失败、零产出、退回、返工、仓储、包装与装载增量。库存负荷向量须依批次谱系，不能仅依库存质量或假定生产交付比；不得把 P 和期末成品质量当作两份交付产出。原始期间项仅含本期新增负荷；外来退回项仅一次结入既有结转负荷，不含已记在原始期间增量中的新增复验返工。重新交付前，先冲回匹配原交付并恢复其追踪结转负荷，不能把冲回与同一退回负荷再加两次。物理库存平衡与负荷账分开追踪。 | converted_raw; opening_burden; closing_burden; return_burden; non_reference_burden; cp_delivery_gate | A_i |  |
| normalize_delivery | 所有清单行 | n_i = A_i / Q。Q 为同产品配置、路线、期间与供货状态，在匹配退回和取消修正后的严格正净验收交付内胎质量，单位千克。本规则是唯一归一操作，在原始换算及负荷归属后仅执行一次。数量卡与协议汇总指向同一报告操作，不得顺序重复除法。Q 为零时保留未决生产批群及负荷，不生成归一结果。 | A_i; Q; cp_delivery_gate | n_i |  |
| physical_balance | 所有清单行 | 物理平衡使用完整供货质量及独立成分元素账，包括气门附件、填料、水分、蒸汽凝结水、废物、实测物种与期初末库存。交联不能作为编造反应水数量的依据。任何实际化学产水耗水须由独立反应物种证据链确定；蒸发属于独立相转移，不能拟合作反应水。 | raw_mass; composition; opening_stock; closing_stock; measured_species | mass_and_element_reconciliation | `epa-rubber-process-2008` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | 参考及所有原生流 | 保留原生名称、路线、地理、介质、全部属性及精确参考单位链。参考制品族以配置限定。炭黑分类债务不授权换物料；中国中压电身份受供应范围限制。 | 原生身份及供应商规范 |
| quality_complete | 全部原始及结转负荷 | 覆盖完整声明期间、失败、在制品、成品库存、退回及返工。保留独立负责人和校准证据，披露缺失数量、供应者匹配及显著物种，不能假设为零。 | 签认库存批次公用工程及交付核对 |
| quality_evidence | 工业来源适用性 | 独立制造商证据建立兼容过程模块，不构成单厂配方。实际质量、配方、能源、硫化周期及验收条件须前景实测；记录每项替代条件及时空局限。 | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017`; `epa-rubber-process-2008` |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_identity | 全部过程 | 要求精确参考 Product UUID、原生 Mass/kg 链及终端链接 delivered_tube，并与双语一致。遵守清单描述内全部原生适用限制。拒绝固定为丁二烯与苯乙烯路线的 IIR 候选；不得将件数流改标为质量或由次级属性推密度。 |  |
| validate_inventory | 全部过程 | 核对全部原子行、原始期间批次与计量记录、实际配方及供货制剂子账、内部交接抵消、库存与负荷结转、正净交付 Q，以及恰好一次归一。若 Q 为零或负荷归属未解决，保留记录而不交付归一数据集。不得删除失败生产批次来改善比值。 |  |
| validate_mass_species | 全部过程 | 物理总质量及相关元素账分别闭合：实际整份采购投入加期初库存等于净交付产品、随发运货物带出的包装、其他实际外部产品流出口、期末库存、实际废物或回收及实测排放，内部交接抵消。另保留完整包装实物子账，记录实际接收、外带、损失及期初期末库存，包装质量仍在Q之外，不将其加进Q或重复采购。保留气门金属、填料、硫化体系成分、制剂载水、凝结水、水分及空气账。实际排放物种须由独立分析与期间积分监测确认。不得以同一残差拟合未知反应水和未知出口，不得把全部粉尘作炭黑、以 COD 代替物种质量或编造交联产水系数。未解释差额须调查。 | `epa-rubber-process-2008` |
| validate_quality | 全部过程 | 要求逐件内胎验收关联管壁、接头及气门完整性、声明的气密试验条件与废品去向，并保留实际模具硫化和冷却记录。纳入取样及破坏性检验负荷。无适用性证据不得套用制造商案例保压时间或过滤次数。显式记录缺失数据和试验方法不确定性；身份或 Schema 检查不证明科学批准。 | `schwalbe-tube-tech-2015`; `innovative-tube-process-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_dataset |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 声明内胎配置及净交付门的上游供货建模 |
| excluded_use | 完整轮胎服务比较、全部 CPC 覆盖、使用阶段漏气、骑行寿命或未知配置替代 |
| required_metadata | 全部必需限定信息; 来源标识; 原始期间; 参考门; 分配因子; 精确供应者及公用工程匹配; 配方与商品形态身份 |
| required_quality_disclosure | 实际前景覆盖; 库存结转; 缺失交换物种; 原生适用范围及分类债务; 证据适用性与科学审查状态 |
| update_trigger | 配方路线、模具气门配置、公用工程、实测损失、交付门、供应者身份或来源适用性变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| schwalbe-tube-tech-2015 | handbook | Schwalbe Technical Information Bicycle Tires, Edition 3, 2015, p.28. https://www.schwalbe.com/media/32/85/58/1694006374/Schwalbe-TechInfo-2015_GB.pdf | 自行车丁基内胎身份、热模路线、过滤、气门结合及逐件检验；七道过滤及二十四小时为制造商案例条件，不作通用值。 |
| innovative-tube-process-2017 | literature | Innovative Tyres & Tubes Limited, Prospectus, September 2017, printed pp.157–158 (PDF 158–159), tube process only. https://www.sebi.gov.in/sebi_data/attachdocs/oct-2017/1509101010348.pdf | 工业内胎混炼过滤、挤出冷却、接合装气门、模具硫化及检验至包装路线，与相邻外胎路线区分；不转用外胎专属配方，不声称同一 SKU。 |
| epa-rubber-process-2008 | official_guidance | US EPA AP-42, section 4.12 Manufacture of Rubber Products, November 2008 DRAFT Final, pp.4.12-1–2. https://www.epa.gov/sites/default/files/2020-10/documents/d04s12.pdf | 仅采用历史定性橡胶混炼阶段及添加剂角色。不采用数值配方、温度或排放因子；胶囊内衬案例及未含溶剂辅助剂不能建立内胎因子；存在较新的二〇二六年草案。 |
| jrc-ilcd-2010-allocation | handbook | 欧盟委员会JRC，ILCD Handbook General guide Detailed guidance，2010年3月第一版，第7.9.3节，PDF第277–278页／印刷第257–258页；https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 仅支持实际共用制造、仓储及装载服务负荷的归属型直接归集、虚拟拆分及决定性物理因果。不提供产品特定配方、数量、收率、强度、固定分配份额、回收信用或完整PEF符合性；库存与归一化规则属于本PCR一致性推理。 |
