---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.postage-or-revenue-stamps-stamp-postmarks-first-day-covers-postal-stationery-stamped-pa-275c1e5f
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 邮政运营方正式盖销纸质首日封的首次放行

## 1. 范围与适用性

本归因型从摇篮到首次放行方法覆盖：以合法采购的真实未使用邮票及其自带胶层、采购的已印刷纸质信封，经过邮政运营方授权首日盖销与质量验收，首次形成正式纸质首日封收藏品。产品是贴有已盖销邮票的完整封，不是新邮票、仿造邮戳、邮递权利或单独盖销服务。具体实例为 USPS 894516 “Putting a Stamp on the American Experience”：6 ¾ 号信封，贴有本杰明·富兰克林邮票和正式黑白首日戳，发行日为 2025 年 7 月 23 日，发行地为华盛顿特区。运营方说明其仅供收藏，不能用于邮寄。该产品规格不证明已测量的工厂工艺。[usps-fdc; canada-product]

排除未使用有效邮票、税票和印有邮资纸张的制造（32610）；普通空白文具；散枚旧票分拣；客户自有封的单独首日盖销服务；已完成首日封的再利用或再包装；数码彩色邮戳；带盒年度套装；艺术原作（38961）；其他收藏品和古董（38963）；修复、漂白、揭票或伪造盖销。UNSD 完整说明 PDF 第 152 页列出 32610，第 197 页列出 38961–38963，叶级没有进一步说明文字。38962 明确列出首日封；本限定产品仅提出 narrower 候选关系，不代表整叶获接受。[unsd-cpc3]

## 2. 产品类别身份

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.furniture-other-transportable-goods-n-e-c.postage-or-revenue-stamps-stamp-postmarks-first-day-covers-postal-stationery-stamped-pa-275c1e5f |
| classification_refs | CPC 3.0:38962，官方盖销纸质首日封的较窄映射已获接受 |
| covered_products | 新完成的真实邮政运营方正式纸质首日封；一种明确发行及配置 |
| excluded_products | 未使用邮票制造；客户自有封盖销服务；成品封再包装；数码彩戳及多封礼盒 |
| representative_product | USPS 894516; Putting a Stamp on the American Experience; 2025-07-23; Washington DC |
| production_route | 采购已印刷信封及真实邮票；使用邮票自带胶层粘贴；授权黑色盖销；检验及首次放行 |
| market_state | 完整裸封收藏品；所贴邮票已盖销；不可用于邮寄；处于首次质量放行门 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供同一发行及配置的完整实物正式首日封收藏品 |
| How much | 1 千克验收首日封净质量 |
| How well | 真实邮票粘贴牢固；授权日期和地点邮戳可辨；封体干燥完整；不声称仍可邮寄 |
| How long or cycle | 一个首次制成并放行周期；不假设收藏寿命 |
| reference_flow_link | reference_product_fdc |

| 字段 | 值 |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 正式盖销纸质首日封 |
| Reference flow property | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| Reference unit group | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| Reference unit | kg |
| Required qualifiers | 运营方；发行名称、日期、地点；邮票身份、枚数及胶层；信封尺寸及印刷；授权盖销方式与油墨；裸品放行门；批次；验收净质量 Q 及数量 N；部件供应状态；报废与返工；包装门；上游提供者；服务与运输拆分 |

所有必需限定信息须在数据集元数据、过程说明或参考流备注中声明。质量属性支持仅识别单位，不验证产品 UUID 或邮政服务功能。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| mass_basis | reference product | Mass | kg | 使用经校准的秤测量同一封闭批次合格裸封总净质量 Q；排除保护套、盒及寄送封。失败或未关闭批次留存记录中 Q 可以为零；仅归一化放行输出要求 Q 为正。独立记录合格数量 N 进行核对，不采用默认单封重量换算。 |
| same_basis | all inventory rows | row-specific | row-specific | 放行数据集交换以每 1 kg 参考流为基准；原始记录和在制向量保留原单位，直至满足关闭条件。采集批次数量，将分配后的每项数量除以相同合格质量 Q 一次。不合格封不进入 Q，其投入及处理负荷保留在批次分子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实自带胶层邮票和已印刷信封在贴票及正式盖销前接收 |
| starting_condition_role | foreground_collection_start |
| product_classification_scope | 盖销后的正式首日封收藏品；未使用邮票制造属于上游投入供应 |
| recursive_input_rule | 已完成首日封不能当作首次形成的空白投入。已盖销封须采用带继承负荷的单独再利用模型，不重置其历史。 |
| upstream_dataset_requirement | 兼容的实物邮票及印刷信封生产提供者，包括胶层、印刷和供应状态负荷；不使用面值代理或零负荷假设 |
| disclosure | 声明部件所有权、交付状态、盖销授权、原始批次及门；区分首次形成、外包操作和寄送 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_gate | whole system | 纳入上游实物部件及进场运输、贴票、授权盖销、实际存在的干燥、检验、可归属的放行前暂存及不合格品处理，终点为合格裸封首次放行门。门后的包装、客户寄送、零售、收藏使用及报废处置不在本数据集内，须下游建模。 | usps-fdc |
| b_service | stamp_input | 将实物邮票供应与附带邮递权利拆分。盖销不意味着发生邮寄旅程，不从面值、收费或售价推算吨公里。实际跨场移动按真实路线和运输质量计量一次。客户自有封的盖销及寄回服务被排除；Canada Post 描述的是这些独立操作，并非本 USPS 实例的工艺。 | usps-fdc; canada-service |
| b_complete | p_fdc | 每项实际新增化学品、公用工程、包装部件、废物及基本流排放须单列原子交换。未指明的余项不等于零。新增成分流前核对采购油墨完整配方及上游边界。实际存在但未测量的溶剂损失、加热、清洗及包装废物保留为数据缺口。 |  |
| b_supply_once | p_fdc | 逐个提供者及运输段声明已包含操作及交付点。部件提供者若已包含送达接收场址的运输，不再次添加该段服务。仅对未被覆盖且实际另购的公路运输段使用 road_freight 和 cp_freight；实际其他方式须另设具体原子交换及协议。运费及面值均不证明运输功。 | canada-service |
| b_cancel_once | p_fdc | 若授权承包方在首次形成过程中对运营方所有的组件封实施盖销，cancellation_service 仅代表采购的该项操作，不是第二个成品封，也不是客户自有封的纯盖销数据集。以 cp_service 记录提供者包含项台账。提供者已含的油墨、电力、干燥、运输及报废处理，通过服务清单计量一次，不重复作为前景采购。单独提供的墨或电仅就未被覆盖部分保留直接卡。提供者包含项不明时为未决，不当作零。 | canada-service |
| b_cohort | p_fdc | 加工前记录原批次及单件身份。批次未关闭时，以各交换原单位保留原始活动量、失败盖销尝试、返工及继承负荷，不归一化。Q = 0 时不得输出每千克结果，保留完整报废批次记录及终止负荷向量。同一可追溯批次后来形成合格输出时须继承此前失败及返工负荷。全批报废仅可通过完整负荷向量的显式可追溯转移纳入预先定义并记录的生产期，报废状态不变；不得静默丢弃或转给无关成功批次。 |  |
| b_wip | p_fdc | 期末按相同单件及批次谱系，将实物在制品数量、质量及其累积的逐交换负荷向量结转。首次验收前，在制品不计入 Q。每次转移均有一条转出及对应转入记录，使用相同转移 ID、实物状态和负荷向量；合并范围内转移抵销，继承向量不再次作为新采购添加。已放行库存保留原放行历史，出售、退回或再包装时不再次成为首次输出。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| p_fdc | 接收、贴票、正式盖销及首次放行 | required | 明确发行的首次形成 | foreground | 1 千克验收裸封净质量 |

### 过程：首日封制成 (`p_fdc`)

#### 输入

##### 产品流

###### 真实自带胶层未使用纸质邮票 (`stamp_input`)

实物邮票耗用质量 / Q；核对枚数、报废及库存。含供应胶层；本过程不再次制造邮票。

- 选定流：真实自带胶层未使用纸质邮票
- 流属性/单位：Mass / kg
- 数量规则：实物邮票耗用质量 / Q；核对枚数、报废及库存。含供应胶层；本过程不再次制造邮票。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_components`
- 来源：usps-fdc

###### 已印刷纸质信封 (`envelope_input`)

已印刷信封耗用质量 / Q；印刷图案及自带接缝胶包含在上游提供者内。

- 选定流：已印刷纸质信封
- 流属性/单位：Mass / kg
- 数量规则：已印刷信封耗用质量 / Q；印刷图案及自带接缝胶包含在上游提供者内。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_components`
- 来源：usps-fdc

###### 黑色邮政盖销油墨 (`cancel_ink`)

测量完整黑色配方油墨耗用量 / Q；记录批次、安全数据表及固体含量；区分留存墨与废墨，不重复加入配方已有成分。

- 选定流：黑色邮政盖销油墨
- 流属性/单位：Mass / kg
- 数量规则：测量完整黑色配方油墨耗用量 / Q；记录批次、安全数据表及固体含量；区分留存墨与废墨，不重复加入配方已有成分。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_ink`
- 来源：usps-fdc

###### 首日封制成场址电力 (`electricity`)

可归属贴票、盖销、检验及暂存的计量电量 / Q；不因手工盖销即假定为零。

- 选定流：首日封制成场址电力
- 流属性/单位：Energy / kWh
- 数量规则：可归属贴票、盖销、检验及暂存的计量电量 / Q；不因手工盖销即假定为零。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_energy`
- 来源：

###### 自来水 (`water`)

仅当确认胶层需水活化时，实际测量活化用水 / Q；压敏粘贴须记录该项缺席证据。不作清洗用水默认量。

- 选定流：自来水
- 流属性/单位：Mass / kg
- 数量规则：仅当确认胶层需水活化时，实际测量活化用水 / Q；压敏粘贴须记录该项缺席证据。不作清洗用水默认量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_water`
- 来源：

###### 另购投入部件公路货运服务 (`road_freight`)

仅实际未覆盖的公路运输段：分配的运输毛载荷 kg / 1000 × 公路 km / Q；核对提供者交付范围及 cp_freight。不将未知路线默认作公路。

- 选定流：另购投入部件公路货运服务
- 流属性/单位：Transport work / tkm
- 数量规则：仅实际未覆盖的公路运输段：分配的运输毛载荷 kg / 1000 × 公路 km / Q；核对提供者交付范围及 cp_freight。不将未知路线默认作公路。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_freight`
- 来源：canada-service

###### 授权黑色首日盖销服务 (`cancellation_service`)

仅对运营方自有组件封另购的授权盖销：可归属的实际服务封数 / Q。cp_service 标明已含油墨及电力；直接 cancel_ink 和 electricity 卡仅保留该提供者边界以外数量。

- 选定流：授权黑色首日盖销服务
- 流属性/单位：Service count / item
- 数量规则：仅对运营方自有组件封另购的授权盖销：可归属的实际服务封数 / Q。cp_service 标明已含油墨及电力；直接 cancel_ink 和 electricity 卡仅保留该提供者边界以外数量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_service`
- 来源：canada-service

#### 输出

##### 产品流

###### 正式盖销纸质首日封 (`reference_product_fdc`)

1 千克合格净封；批次实测 Q / Q。

- 选定流：正式盖销纸质首日封
- 流属性/单位：Mass / kg
- 数量规则：1 千克
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_release`
- 来源：usps-fdc; canada-product

##### 废物流

###### 废弃硅涂层纸质离型底纸 (`liner_waste`)

当接收的邮票形式带该底纸时，实际分离底纸质量 / Q；不再计入留存邮票质量。供应方去除的底纸属于上游。

- 选定流：废弃硅涂层纸质离型底纸
- 流属性/单位：Mass / kg
- 数量规则：当接收的邮票形式带该底纸时，实际分离底纸质量 / Q；不再计入留存邮票质量。供应方去除的底纸属于上游。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_waste`
- 来源：

###### 报废已组装纸质首日封 (`reject_cover`)

称量不可恢复的已组装封质量 / Q；记录安全销毁及实际处理。返工封不再重复作废物计量。

- 选定流：报废已组装纸质首日封
- 流属性/单位：Mass / kg
- 数量规则：称量不可恢复的已组装封质量 / Q；记录安全销毁及实际处理。返工封不再重复作废物计量。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_waste`
- 来源：

###### 废黑色邮政盖销油墨 (`ink_waste`)

称量废墨质量 / Q，记录去向及组成；无自动回收抵扣。

- 选定流：废黑色邮政盖销油墨
- 流属性/单位：Mass / kg
- 数量规则：称量废墨质量 / Q，记录去向及组成；无自动回收抵扣。
- 数值来源模式：foreground_record
- 适用范围：site_specific
- 归一化基准：每 1 kg 参考流
- 基准类型：reference_flow
- 证据类型：collected_record
- 采集协议：`cp_waste`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_direct | p_fdc | 归因型研究先将生产与邮递、零售及其他发行批次细分；直接归属邮票、信封及实际盖销工作量。仅对真实共享负荷进行分配。使用计量耗用或具有因果依据的实测机器时间，分母覆盖全部使用者；逐项论证驱动量，保证分配比例合计为一。若不能支持因果拆分，共享负荷须保留未决并提交研究审查，不默认采用邮票面值或收藏品售价。 | ilcd-allocation |
| a_reject | p_fdc | 盖销、失效邮资及不合格品不产生共产品或替代抵扣。同批返工保留原始投入及新增操作；退回未用邮票保留实物库存历史。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_release | p_fdc | release | weighing | 发行；批次；Q；N；合格及报废数量；首次放行日期 | 经校准的秤称量干燥合格封净质量，排除保护及运输包装；首次放行只核对一次 | kg | 每封闭批次 | 同一发行生产期 | 运营方及合同场址 | 每 1 kg 参考流 | 校准；批次记录；发票；授权及核对 |
| cp_components | p_fdc | components | stock record | 发行；供应方；所有权；邮票枚数及质量；信封质量；期初期末库存；收货；退货；胶层及底纸状态 | 用可追溯批次抽样称量部件，结合库存移动核对真实耗用；不虚构单封重量 | kg | 每封闭批次 | 同一发行生产期 | 运营方及合同场址 | 每 1 kg 参考流 | 校准；批次记录；发票；授权及核对 |
| cp_ink | p_fdc | ink | stock record | 油墨批次；安全数据表；期初；采购；期末；退货；留存墨及废墨；水分损失 | 称量完整配方实际耗用，核对容器皮重及库存；独立调查水或溶剂损失 | kg | 每封闭批次 | 同一发行生产期 | 运营方及合同场址 | 每 1 kg 参考流 | 校准；批次记录；发票；授权及核对 |
| cp_energy | p_fdc | electricity | meter record | 电表；场址；批次工时；其他使用者；分配驱动；校准 | 分表计量或以实测场址电量作有因果依据的分配；含放行前操作及暂存 | kWh | 每封闭批次 | 同一发行生产期 | 运营方及合同场址 | 每 1 kg 参考流 | 校准；批次记录；发票；授权及核对 |
| cp_water | p_fdc | water | meter record | 胶层路线；活化计量用水；损失；留存水；批次 | 确认活化路线后测量用水，否则保留缺席证据 | kg | 每封闭批次 | 同一发行生产期 | 运营方及合同场址 | 每 1 kg 参考流 | 校准；批次记录；发票；授权及核对 |
| cp_waste | p_fdc | waste | weighing record | 独立废物流；质量；批次；返工；去向；处理；组成 | 各流分别称量，核对转移单及安全销毁；不把未知排放拟合为残差 | kg | 每封闭批次 | 同一发行生产期 | 运营方及合同场址 | 每 1 kg 参考流 | 校准；批次记录；发票；授权及核对 |
| cp_freight | p_fdc | road_freight | carrier record | 运输段 ID；供应方；交付点；已含运输；方式；毛质量 kg；km；运单；其他载荷；分配 | 根据部件交付条款核对真实公路段及承运服务；称量毛载荷并取实际路线距离，不用直线距离或价格；记录另购及已含运输段之别 | tkm | 每运单 | 相同批次及生产期 | 实际发出及接收场址 | 每 1 kg 参考流 | 承运单；距离依据；载荷；提供者范围台账 |
| cp_service | p_fdc | cancellation_service | contract record | 运营方；承包方；授权；批次及单件 ID；服务及报废数；已含墨、电、干燥、货运及废物；单独供应项 | 核对实际授权服务数及提供者清单边界；每项已含活动对应一个提供者，每项未含实际供应对应一张前景卡；不明包含项保留未决 | item | 每服务批 | 相同批次及生产期 | 运营方及授权承包方 | 每 1 kg 参考流 | 合同；授权；验收及提供者清单 |
| cp_cohort | p_fdc | WIP and failed lots | lineage ledger | 原批次；单件 ID；期间；期初期末在制数量及 kg；期初继承向量；新增活动；失败尝试；转移 ID；来源去向；终止损失；首次放行 ID；Q | 每个截止点保留未归一原始活动及逐交换负荷向量；关闭正 Q 批次或预定义生产期前核对成对转移及单件历史 | kg 及各交换原单位 | 每期间截止及转移 | 原批次全部期间 | 明确合并范围内全部场址 | 每 1 kg 参考流 | 不可覆盖原始台账；配对转移 ID；库存及放行核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| batch_normalize | all inventory rows | x_ref = X_alloc / Q；X_alloc 是以各自单位表示的可归属批次交换数量；Q 是合格裸封净质量，单位 kg。参考输出 = Q / Q = 1 千克。只除一次，不同时除 N 及 Q。 | X_alloc; Q; cp_release | x_ref |  |
| component_reconcile | stamp_input; envelope_input; cancel_ink | 耗用 = 期初库存 + 收货 - 期末库存 - 未用退回 - 转出其他批次。内部返工仅计新增操作。分别保留部件质量平衡，包含合格品、报废品、库存及实测物种损失。完整封质量不等于仅干纸质量。 | cp_components; cp_ink; cp_waste; cp_release | batch consumption |  |
| transport | p_fdc | 每个实际货运段 tkm = 实际运输毛质量 kg / 1000 × km；对共享载荷作因果分配，再将可归属吨公里除以 Q。货运质量包含进场包装，Q 排除该包装；每种实物包装废物单列。不从已盖销面值推断寄运。 | carrier records; measured gross mass; Q | tkm per kg | canada-service |
| cohort_balance | all inventory rows | 逐交换分别核对 B_close = B_open + B_new + B_transfer_in - B_transfer_out - B_first_release - B_terminal。实物在制数量及质量独立核对，不以 kg 代替能源或运输单位。内部转移在合并时抵销。保留期初期末实物库存及负荷向量，不把本期全部采购分配给本期发运。 | cp_cohort; cp_release | reconciled physical stock and burden ledger |  |
| zero_and_release | all inventory rows | 仅在明确批次或生产期关闭且首次放行总 Q > 0 后输出 x_ref。分子包含可追溯的完整继承及新增可归属负荷，包括其失败尝试和预定义生产期终止损失，并消除全部内部转移重复项。Q = 0 时保留完整未归一记录，不输出单位结果。同一件仅向首次放行 Q 贡献一次净质量；此前已放行库存的发运不新增 Q。 | cp_cohort; cp_release | unit result or retained unnormalized ledger |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | p_fdc | 追溯合法邮票采购、发行日期地点、盖销授权及首次实物放行。记录照片及运营方凭证；不将替代仿戳作为真实盖销。 | usps-fdc; operator records |
| dq_complete | all inventory rows | 采用同一封闭批次、时间及场址基准。缺失计量、提供者交换、油墨化学及排放、上游包装及暂存负荷须显式保留；不以零或虚构区间代替未知量。 | 库存核对；不确定性记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | reference_product_fdc | 要求实测 Q 为正、有合格数量 N、唯一参考输出、批次及发行一致；全部清单行及协议按 1 kg 归一。质量属性支持不等于批准未决产品 UUID。 |  |
| v_state | p_fdc | 首次放行前核验真实贴票、授权盖销日期地点、可辨且干燥完整的可售封及报废记录。排除新邮票生产与已有封再包装。 | usps-fdc; unsd-cpc3 |
| v_boundary | whole system | 核对上游提供者、自营及外包操作，不重复计量邮票、信封、自带胶层、盖销服务、邮递权利、运输或包装。显式保留未决物种及历史库存。方法检查不赋予科学批准、分类接受或发布资格。 | canada-service |
| v_lineage | p_fdc | 归一前审计 Q = 0 记录、全部跨期在制向量、成对转移、生产期成员及唯一首次放行 ID。要求每项实际货运及盖销活动只有一个提供者或直接归属；包含项未决时不能声称数据集完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 相同裸封首次放行门的实物正式纸质首日封供应 |
| allowed_use | 经提供者及质量审查的相同发行及配置 |
| excluded_use | 邮递、新邮票制造、历史封转售、客户盖销服务、全生命周期足迹或全 38962 覆盖 |
| required_metadata | 全部参考限定信息；运营方及场址；批次 Q/N；提供者边界；胶层及油墨供应状态；分配；报废及返工；运输及包装门 |
| required_quality_disclosure | 实际采集覆盖、身份及化学缺口、证据局限、不确定性及独立科学和翻译审查状态 |
| update_trigger | 发行、运营方、信封、邮票或胶层、盖销方式或油墨、供应状态、门、分配或提供者变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3 | official_guidance | UNSD, CPC Version 3.0 explanatory notes, 30 June 2025, complete PDF pp152,197; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/38962 | 仅用于分类边界；未使用邮票与明列的首日封之别；不提供制造定量证据。 |
| usps-fdc | official_guidance | USPS, Putting a Stamp on the American Experience First Day Cover, product 894516, issue 2025-07-23, product description/details/specifications; https://store.usps.com/store/product/putting-a-stamp-on-the-american-experience-first-day-cover-S_894516 | 真实已完成收藏品、贴附已盖销邮票、正式黑白戳及不能邮寄；无工厂实测或默认质量。 |
| canada-product | official_guidance | Canada Post, Standing orders, Official First Day Covers section; https://www.canadapost-postescanada.ca/cpc/en/support/kb/sending/stamps-packaging/create-a-philatelic-standing-order.page | 独立佐证产品状态；正式封贴有发行日期及地点盖销邮票；不是 USPS 工艺实测。 |
| canada-service | official_guidance | Canada Post, Official First Day Covers, complete support article; https://www.canadapost-postescanada.ca/cpc/en/support/articles/philatelic-products/official-first-day-covers.page | 区分客户自有封贴票、盖销及实际寄回；不形成 USPS 与加拿大产品拼接实例，不假定运输。 |
| ilcd-allocation | official_guidance | European Commission JRC, ILCD Handbook General guide for LCA, Detailed guidance, March 2010, §7.9.1–7.9.2 printed p255/PDF275; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf | 归因型多功能及分配前细分；不移用分配因子或价格规则。 |
