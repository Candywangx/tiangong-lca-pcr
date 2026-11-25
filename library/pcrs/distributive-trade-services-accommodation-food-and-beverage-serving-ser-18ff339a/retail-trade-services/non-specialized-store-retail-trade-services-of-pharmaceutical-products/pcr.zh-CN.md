---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-pharmaceutical-products
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 非专门混合门店原封 NDC 50580-378-06 对乙酰氨基酚包装的增量保管与结账服务

## 1. 范围与适用性

本PCR规定实际混合品类实体店一份泰诺特强原盒100片包装（NDC50580-378-06）的明确部分服务模块。方法针对保管、可追溯合格交付、原源责任及完整失败包装的实测，不是药品生产或用药建议。商品标签建立真实制剂/包装/储存区别，不提供实际LCI。药品批号/效期/召回及依赖封签的验收需要本范围特定方法，不能仅替换通用零售规则的商品名称。其他食品、工具或包装零售PCR不能建立原药品原源向量或退货包装放行资格的等价性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-pharmaceutical-products |
| classification_refs | CPC3.0:62173；药品非专门店零售服务；352组商品相关服务的较窄子范围 |
| covered_products | 精确完整未开封NDC50580-378-06零售配置的人工常温保管/结账；仅原载体保持完整时纳入过期/召回隔离 |
| excluded_products | 其他NDC、原料药、泡罩/袋/散装/散片或开封形式、无菌/注射/液态/冷链商品；调剂、临床/处方服务、专门药房渠道、网购/配送；成功商品上游及消费者阶段 |
| representative_product | Kenvue NDC50580-378-06：一原纸盒内塑料瓶100片对乙酰氨基酚薄膜衣片，每片标称500mg成分，实际批次/BOM/质量另核 |
| production_route | 混合门店收货→封签/批号/储存/效期核对→常温货架或分区隔离→人工柜台/POS验收或实际退供/废物交付；完整零售结果强制支持补齐 |
| market_state | 原未开封纸盒/瓶/铝箔封签内成品固体制剂；记录批号及剩余效期，不推断适用用药 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为实际同质原包装提供声明的部分保管与结账服务 |
| How much | 一项不同最终有效验收的原包装服务；预定池内共Q项服务 |
| How well | 实际SKU/批号/效期/封签/储存及最终验收有证据，无未经审查的召回/退货放行资格；不涉及调剂或安全批准 |
| How long or cycle | 声明收货至柜台保管池，含完整迟到事件与原源史；按披露截止时点修正最终验收服务 |
| reference_flow_link | service_out |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一份原封 NDC 50580-378-06 原包装的混合门店保管与结账服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际混合门店渠道; NDC50580-378-06; 实际供应商/批次/配置/BOM/原源向量版本; original_pack_id; 完整纸盒/瓶/铝箔封签; 实际储存及效期/召回状态; 收货门及入场边界; 池/截止时点/Q; 最终验收版本; S/F/T/O原源责任; 部分模块排除项及补齐状态 |

在数据集元数据、过程说明或参考流描述中声明全部限定项。缺失使参考不完整。参考服务流UUID未解决；支持属性/单位UUID不绑定服务身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_basis | service_out; failed_pack; gross_handover; supplier_handover | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 计实际规定的服务/原完整包装对象；绝不能用片数、剂量质量、营收或未修正实物交付作Q。使用valid_count及one_reference。 |
| energy_basis | core_ac | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实测kWh并用1kWh=3.6MJ；电力不是kg，原源归属之前不能按最终销量分配。 |
| carrier_mass | sealed_waste | 质量 | kg | 实际完整载体直接净kg，仅排除独立实测外部皮重；标称活性成分不能替代载体质量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 门店收货门实际送达完整成品NDC50580-378-06包装，识别原源/批次/BOM及入场范围 |
| starting_condition_role | 声明服务门；原始保管事件与F背景输入分开保留 |
| product_classification_scope | CPC3.0:62173中实际完整常温混合门店服务的窄子范围，不是全部药品零售 |
| recursive_input_rule | 服务流不得递归为自身。仅明确gross_handover和supplier_handover卫星不表征。failed_pack须原F供应向量含收货门入场运输；补齐消费互斥真实原源向量 |
| upstream_dataset_requirement | 精确原始同质制剂/完整包装原源、实际供应商/时间/地域/技术及收货运输；公开标签不是该数据集 |
| disclosure | 部分核心范围、省略必要模块/状态、实测原始总量、Q/截止时点/修订、状态/原源/提供方缺口、分配版本及全部补齐重叠排除 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| scope_gate | all inventory rows | 仅适用于实际销售混合品类商品的非专门实体门店，人工常温收货、货架存放、隔离及柜台交付精确NDC50580-378-06。一池仅含供应商证据支持的同质完整配置与原源向量版本。商品为成品固体制剂，不是原料药。不含开封、数片、调剂、配制、处方审核、临床建议、网购或配送。实际储存与纸盒/铝箔封签记录必须符合该具体标签和批次；标签上下文不批准用药。即使同为100片，其他NDC也须另行评估适用性。 | un-cpc3-62173; dailymed-tylenol-37806 |
| partial_scope | all inventory rows | 这是明确的部分增量保管/结账模块。纳入core_ac及通过failed_pack连接的原始失败商品背景，以及gross_handover、supplier_handover实测实物卫星输出和sealed_waste实际原封药品废物外运。仅gross_handover和supplier_handover是不作特征化的保管卫星。原始收货和实物退货是原始质控事件。failed_pack是需表征的产品输入，绝不能作为卫星排除。成功商品S的生产不属于本服务；消费者使用/出行/使用后处置也不属于本服务。completion_gate及completion_sum通过之前禁止声称完整经营结果。 | ghg-product-2011 |
| lot_gate | service_out; failed_pack; gross_handover; supplier_handover; sealed_waste | 每份包装设不可变original_pack_id、source_id、批号、效期、实际NDC/纸盒/瓶/封签配置、收货日期与原源向量。读取实际标签及供应商批次/BOM；原片剂及辅料/包衣、瓶身/盖/衬垫/铝箔/标签/胶/纸盒及实际附带说明书构成完整原源。标称100片或500mg不能替代实测原包装总质量、内容物质量、包装BOM或收货背景。整包供应向量仅适用于相同完整对象。组件制造向量是互斥替代方案，须有供应商特定数量并守恒原ID，绝不能按质量分数拆分完整环境向量。 | dailymed-tylenol-37806 |
| state_gate | service_out; gross_handover; supplier_handover; sealed_waste | 每次收货/放行/退回/隔离事件记录实际未开纸盒和内铝箔封签、可见损坏、效期、召回通知及温度历史。最终服务须有该实际包装的有效交付验收记录；退货再放行须独立记录适用性及有权决策，绝不能凭退款或外观完整推定。召回、过期或其他失效可以在没有实物退回时撤销验收。验收仍有效的纯财务调整不撤销服务。未开封完整过期/召回包装只有获得实际接收方承接时才进入指定废物卡；破损/开封/浸湿/污染包装或散片必须先有状态特定的原子扩展、双语同步和匹配的接收方/提供方证据，才可完整。 | dailymed-tylenol-37806 |
| source_fates | failed_pack | 在同一原始收货门将每份原始完整商品原源划为唯一当前责任：S最终有效验收成功商品，F零售池负责的失败，T具名继续承责接收方/资产，或O未决/开放原源库存。S背景不进入增量服务；另行声明的GOODS系统仅加入一次原始S向量。F通过failed_pack恰好纳入一次原始制造及到该门的运输。T须有签署的原源延续及接收方/版本；向供应商实物交付本身不证明T。O阻止最终原源完整性，绝非零。最终失败可以仍由客户保留且无验收服务；记录真实接收方、完整状态、原源责任及处置延续，绝不能因撤销验收就虚构零售商废物。 | ghg-product-2011 |
| pool_gate | all inventory rows | 预先固定场址/配置/SKU/服务期间池，纳入闭店、闲置、拒绝、失败、丢失和零销量队列。在有证据支持的分母出现前，将成本和数量保留在相同配置池；Q=0不可归一化，必须连同原始分子报告。不得为改善结果删除或转移零产出队列。迟到退货、召回或撤销须按真实事件日期替换原池分子、Q、归宿和版本；不得在新的转售队列再次计入该背景。Q为不同最终有效原始ID数，每个原ID最多一项最终有效服务。 | ghg-product-2011 |
| utility_gate | core_ac | 核心电力仅测量明确识别的保管/结账回路及市电温度记录器，边界图排除外部补齐回路。允许的前景路线没有燃烧、制冷、制冷剂充注、压缩气体使用、商品通电测试或片剂释放。签署的设备/场址巡查、公用工程图和储存记录须证明缺席，包括共享支持；未知或实际出现须阻止本路线，直至有经审查的状态/物种/路径特定扩展。外部电网/提供方排放保留在其上游范围。禁止空泛气体模板、假定零泄漏或把室内空气等同室外环境。 | jrc-retail-2013 |
| completion_gate | all inventory rows | 任何完整零售服务声明之前，cp_completion必须提供签署的存在/缺席及边界/重叠矩阵，覆盖场所/建筑和固定照明/通风/电阻采暖设施、货架/隔离柜、结账/温度记录器、ICT/网络、支付后台、摄像/安防/存储、行政、清洁/水/材料、小票/袋/运输包装及全部废物/资产/运输阶段。每个实际同质型号或有界真实提供方包须有自身双语原子卡与单过程协议、实际合同/型号/BOM、实测原始单位及清单向量/原源版本；通用名称不是完整模块。只有合同证实精确组成、分母、安装/运行/维护/寿终及排除项的真实完整服务包，才可保持整包。缺席模块须有签署观察；数量、身份、接收方或范围缺失均阻止完整性。应用completion_drivers、asset_life、consumable_owner、transport_owner、liquid_carriers及completion_sum；下游建模者可补实测量，但不得另选分母/责任规则。 | jrc-retail-2013; ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| custody | 批号原封保管及柜台结账 | required | 实际范围及预定池 | 核心部分服务及原源责任 | service_out |
| quarantine | 完整药品隔离及实际外运 | conditional | 实际完整废物外运且接收方承接 | 独立实物载体，不复制制造背景 | service_out |
| support | 强制完整性补齐门槛 | required | 完整零售服务声明前；部分模块须披露缺口 | 接收真实原子模块及全历史责任，不是虚构组合流 | service_out |

### 过程：完整保管与结账 (`custody`)

#### 输入

##### 产品流

###### 收货门的一份原封 NDC 50580-378-06 对乙酰氨基酚片原塑料瓶及纸盒完整包装 (`failed_pack`)

声明收货门的原始失败制造及实际入场责任。实际完整配置/提供方向量与N_F须由前景提供。

- 选定流: 收货门的一份原封 NDC 50580-378-06 对乙酰氨基酚片原塑料瓶及纸盒完整包装
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_F / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_goods
- 来源: dailymed-tylenol-37806; ghg-product-2011

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`core_ac`)

仅实际保管/结账回路含市电记录器；补齐电力池保持互斥。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: E_core_MJ / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_meter
- 来源: jrc-retail-2013

#### 输出

##### 产品流

###### 一份原封 NDC 50580-378-06 原包装的混合门店保管与结账服务 (`service_out`)

一项不同最终有效包装ID的参考服务，含预定池内可归属的失败/闲置工作。

- 选定流: 一份原封 NDC 50580-378-06 原包装的混合门店保管与结账服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_goods
- 来源: un-cpc3-62173; dailymed-tylenol-37806

###### 实际交付客户的完整原封 NDC 50580-378-06 原包装 (`gross_handover`)

实物客户保管交付与修正服务和原源背景台账分开。原包装可有多次实物交付，但最多一项最终有效服务。

- 选定流: 实际交付客户的完整原封 NDC 50580-378-06 原包装
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_gross_customer_handover / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_goods
- 来源: dailymed-tylenol-37806

###### 实际退交供应商的完整原封 NDC 50580-378-06 原包装 (`supplier_handover`)

仅在实际完整退供且匹配商业/非废物接收状态时出现。若实为废物须匹配废物扩展，不能用本产品卫星。

- 选定流: 实际退交供应商的完整原封 NDC 50580-378-06 原包装
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_supplier_handover / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_goods
- 来源: dailymed-tylenol-37806

### 过程：完整药品隔离 (`quarantine`)

#### 输入

#### 输出

##### 废物流

###### 原瓶及纸盒中完整未开封 NDC 50580-378-06 药品废物 (`sealed_waste`)

仅实际原封过期/召回隔离外运且有签署的接收方状态/组成/处理承接时出现。在场址证据齐备前提供方绑定与实际质量未解决；不得推定危险类别或处置路线。

- 选定流: 原瓶及纸盒中完整未开封 NDC 50580-378-06 药品废物
- 流属性/单位: 质量 / kg
- 数量规则: W_dispatch_kg / Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: cp_waste
- 来源: dailymed-tylenol-37806; jrc-retail-2013

### 过程：支持补齐门槛 (`support`)

本过程承载补齐义务及cp_completion接收。不把虚构完整经营包作为清单交换。每个实际模块须在完整数据集之前按completion_gate扩为自身具体过程/卡/单过程协议，保留原源ID及固定计算。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| core_partition | core_ac | 优先细分/直接计量。将每个实际回路分子划为分别测得的活动、静止闲置和固定原源池，其kWh之和等于母表。专属包装扫描/搬运活动负荷用实测行级设备活动秒；共享多SKU动作使用真实行处理秒，每一唯一事件的份额合计为1。闲置结账/记录器/保管固定负荷按预先预约记录中的各受益方设备保留秒分配，纳入闭店/闲置/错误期间。不得把活动秒、面积小时和字节相加作一个驱动量。保留所有受益方及失败/无销量预约；非零原源对应未知/零总驱动量时阻止最终分配。分表只从实际含有它的母表扣除，不能再从已独立原源重复扣除。 | ghg-product-2011 |
| completion_drivers | all inventory rows | 补齐电力/材料/提供方分子的各原源类别，须先按原源单位实测互斥活动/闲置/固定池并核对完整母源。场所固定照明/通风/电阻采暖按所有受益方的实际受服务区m2*h预约分配；专属任务能耗按实测设备活动秒，闲置设备按保留秒。ICT活动处理及行政按真实行/任务处理秒；真实共享同质行政批次按实测源行处理秒除以全部真实受益方总秒分配，每个唯一批次份额合计为1，绝不能每SKU重计整批。闲置/固定后台按保留服务容量秒。一项多SKU购物篮支付尝试仅是一个事件，按实测源行处理秒/总秒分配，绝不能每SKU计整次；保留失败授权。网络包依据实际合同分母，互斥使用真实提供方流量GB（GB=10^9字节，GiB=2^30字节）或唯一预约带宽Mbps*h，不得与包内电力重叠。每个摄像拍摄期受益方图须由带时间戳的实际拍摄区/视场图，以及视场内实测受益方陈列/保管覆盖面积m2乘实际覆盖秒形成。每个采集字节原源按同一拍摄区间全部实际受益方的同单位m2*s覆盖量分配；受益方重叠仅通过有记录的互斥区域/时间划分保留，预约空置空间纳入其原受益方预约。冻结该原始拍摄期的原源ID、区间、区域几何、完整驱动量总数及图版本；覆盖未知阻止分配。摄像活动原源按该冻结图分配实测采集字节；存储按相同图的实际保留byte*h，纳入无销量期，不按后续销售分配。互联网接入不能替代支付/安防/行政服务。每个原源类别c及受益方h用q_c_h=x_c*d_c_h/sum_all_h(d_c_h)，仅用一种同单位驱动量；分配后仅汇总兼容数量。 | ghg-product-2011; jrc-retail-2013 |
| asset_life | all inventory rows | 每项实际同质资产/型号/BOM/范围须有持续的全受益方寿命台账。设备/柜体使用暴露预约运行小时e_a_h及预期寿命小时L_a；完整建筑使用受服务面积时间e_a_h及预期寿命面积时间L_a；可重复清洁布用清洁面积m2，不能复制不兼容单位。暂用f_old_h=e_a_h/L_a，累计份额<=1。最终退役时，将每一历史受益方份额替换为f_new_h=e_actual_a_h/E_a，其中E_a=sum_all_h(e_actual_a_h)；每个原池按delta_h=f_new_h*V_new-f_old_h*V_old更新，并记录所有中间版本替换。残余1-sum_old_f仅作质控，不能代替最终分配。分开制造/安装V、实测运行、实际维修事件与终端实物载体。有证据包含某阶段的完整寿命包排除对应独立阶段。实际独立资产/维修/退役运输先归属同一资产/事件，再遵循相同历史份额与替换，不能全计当前退役Q。整机直接净称重与完整BOM重建互斥；不得重复扣除已移除部件，不能把无关维修质量之和冒充完整设备。 | ghg-product-2011 |
| consumable_owner | all inventory rows | 新增实际小票纸、袋及运输包装须在完整性之前设具体型号/材料/组件或有证据的完整包装卡。制造与入场运输在首次实际使用时一次归属原池；未开封未用库存/退回/转移保留未归属原源。未用卷/纸与已打印在制品分开；重复使用包装不重复首次制造/入场。已打印在制品携带实际原纸与打印表原源及ID/版本替换，后续领用绝不再次收费。净纸排除实际纸芯及独立外包/纸箱，不排除热敏涂层。实际净称废物外运kg是交换；产生/期初/期末持有废物仅作质控。原源产生的丢弃物须由实测留存/客户交付或合同承接的真实混合载体覆盖；各独立载体互斥。 | jrc-retail-2013 |
| transport_owner | all inventory rows | 每个运输原源记录attribution_level：unallocated_trip、consignment、parent_owner或exact_pool，以及行程/区段、载重与距离、实际容量单位、静止闲置与空驶、全部受益方及提供方包含阶段。优先细分。共享行程原源X_j按本身单位，用包含空驶/闲置预约的实测保留容量时间d_j_s分配：X_j_s=X_j*d_j_s/sum_all_s(d_j_s)；d仅用一种真实容量单位乘小时，静止闲置时长为正。已到货托分配仅跳过行程分配。随后仍须按自身规则分配商品S/F/T/O、耗材首次使用或资产历史份额。只有证据表明已归属精确原责任/池/版本时才跳过责任乘数。载货t*km不能覆盖实际空驶km；须有提供方涵盖空驶/闲置证据或新增去重的实测vehicle-km/h卡。failed_pack仅含一次F入场运输；实际独立废物外运运输归属该废物原源，对已直接实测废物kg不再乘F。 | ghg-product-2011 |
| liquid_carriers | all inventory rows | 场址清洁补齐使用实际逐项识别的配方及设备卡，具供应商组成与实测购入/首次使用量。按最终状态与原ID，将配方原源kg互斥划为使用/洒漏/冲洗/容器留存/外运容器残留/未用/退回；使用转冲洗是替换而非两个归宿。新增冲洗水/污物不属于配方原源kg。入场供水用实际入口表体积，不能再扣内部回用。废液交换互斥使用直接净载体称重或实际排出V*rho，密度与温度须对应相同状态；不得用仅水量平衡冒充完整液体。整湿废液/擦布/容器kg不同于配方kg，不再乘原源组成。未知排放/蒸发/留存属于独立供水平衡，绝不能默认为零。实际混合废物须签署接收方对真实组成/状态承接及完整处理范围，不能只凭照片/许可证。 | jrc-retail-2013 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | custody | failed_pack; service_out; gross_handover; supplier_handover | 不可变包装/保管/原源台账 | original_pack_id; source_id; 批号; NDC; 配置; 封签; 效期; recall_id; 温度历史; 收货日期; event_id; event_date; event_type; 实物接收方; 实物状态; original_pool; acceptance_version; final_valid; cutoff; supplier_vector_id; V_s; N_original_s; N_S_s; N_F_s; N_T_s; N_O_s; G_close; G_open; N_receipt; N_customer_return; N_transfer_in; N_gross_customer_handover; N_supplier_handover; N_transfer_out; N_condemn; N_confirmed_missing; R_goods; measured_original_pack_mass_kg; measured_contents_mass_kg; actual_component_BOM; 接收方原源延续; method_mode |逐原包装扫描/读取实际SKU/批号/封签及供应商BOM/收货文件。用经校准秤称量可追溯完整原包装及组件核对，不用成分规格替代完整质量；不得为推断配方LCI开启服务库存。以相同不可变ID连接POS验收、召回/效期/退回/留存记录及签署延续。全盘点及全部移动，含无销量事件；未知保持开放。 保留原始件数/质量及有类型physical_stock；valid_count得Q；failure_source得N_F/B_F；one_reference每参考流仅除一次。cp_waste按报废认定事件ID连接，不重复采集原始件数。 | Item(s); kg | 每次移动/验收修订；每日库存核对；截止时复核 | 完整声明池及迟到事件修订史 | 一个声明混合门店SKU配置；全部原源及接收方 | 每参考流 | 原标签及批次照片；校准称重记录；POS事件版本；签署库存/接收方/原源核对 |
| cp_meter | custody | core_ac | 表计/原源类别驱动量台账 | source_meter_id; source_id; source_class; parent_boundary; 起表; 止表; K_c; d_c_h; all_beneficiary_id; active_seconds; reserved_seconds; closed_idle_seconds; event_id; line_processing_seconds; attribution_level; original_pool; version; 校准; 缺测区间 |逐回路核查边界，以校准区间/插座表覆盖营业/闭店/闲置/失败期。同步唯一行操作及全部受益方预约时钟。直接测量原源类别池，分配前核对kWh总和及驱动量单位。不得用铭牌理论能耗或无说明零值填缺测。 core_partition后electricity_total得原始可归属E_core_MJ；one_reference为每参考流E_core_MJ/Q。 | kWh; s | 连续区间计量；事件时钟；每账单/截止核对 | 全部相同配置池，含零产出 | 仅映射保管/结账及市电记录器回路 | 每参考流 | 表校准与回路图；实际运行日志；完整原源/驱动量核对 |
| cp_waste | quarantine | sealed_waste | 有类型隔离及实际外运台账 | event_id; original_pack_id; source_id; 废物状态; 过期召回原因; 封签; receiver_id; 承接合同; 组成范围; 提供方处理范围; tare_kg; gross_kg; W_dispatch_kg; W_open_kg; W_close_kg; W_condemn_kg; W_received_kg; W_other_exit_kg; W_missing_kg; R_waste_kg; transport_source_id; attribution_level; 实际接收方; 日期; 校准 |隔离不改变原源ID；取得实际接收方对完整制剂/瓶/盒及提供方范围的签署承接。以经校准秤直接称每次完整外运净载体（毛重减实际另测外部皮重）。独立称报废认定/期初/期末废物；连接cp_goods事件件数，不得件数=kg。不得从产生量推断外运。 直接W_dispatch_kg为分子；physical_stock质量平衡仅质控；one_reference每参考流仅除公共Q一次。 | kg | 每次报废认定及外运；每日持有库存；截止核对 | 声明池与修订的全部隔离及废物库存 | 实际分开的完整药品载体及真实接收方 | 每参考流 | 校准秤记录；签署托运/接收方承接；原包装及事件链接；处理/运输排除项 |
| cp_completion | support | completion extensions | 强制适用性/模块/资产/提供方台账 | module_id; source_id; 实际型号; complete_BOM; 真实合同; 签署存在缺席; 边界组成; process_id; flow_role; 实际属性单位; 原始分子; z_m_j; D_m; U_m_j; U_m_j_h; C_core_j_h; Q; source_class; x_c; d_c_h; 全部受益方; served_zone_m2_h; active_seconds; reserved_seconds; payment_event_id; line_processing_seconds; byte; byte_h; GB_GiB_mode; Mbps_h; capture_period_map; shooting_zone; field_of_view; covered_footprint_m2; covered_seconds; disjoint_zone_time_partition; capture_map_version; administration_batch_id; all_line_processing_seconds; asset_id; e_a_h; L_a; e_actual_a_h; E_a; f_old_a_h; f_new_a_h; V_old_a; V_new_a; A_old_h; original_pool; version; event_id; lifecycle_stage; first_use_id; 未用库存; printed_WIP; printing_source; formulation_origin_kg; dispatched_container_residue_kg; water_import_V; discharge_V; rho; 温度; wet_carrier_mass_kg; transport_source; attribution_level; trip_segment; actual_capacity; loaded_mass; distance; stationary_idle_h; empty_km; owner_fraction; receiver_acceptance; 测量校准; 缺失字段 | 检查整个实际门店/支持提供方并签署completion_gate精确模块矩阵。每个真实同质对象/服务包采集型号/BOM/合同、校准原源数量、完整全受益方驱动量、寿命史及直接托运证据。扩展成原子卡，新增携带相同原始记录/原源ID及精确flow_role清单的单过程协议视图；cp_completion为接收/门槛协议，不是虚构组合流。应用固定completion_drivers、asset_life、consumable_owner、transport_owner及liquid_carriers。未知存在/数量/合同或通用服务包阻止补齐。 | 分开的实际原源单位；绝不加不同量纲 | 每个原源事件；连续运行时钟；每期及寿命修订 | 完整模块史含闭店/失败/无销量及全部历史池 | 全部实际必要设施、ICT、支付、安防、行政及耗材 | 保留原始原源分子，实施一次固定责任分配，再用completion_sum加核心分子；同单位原源去重后每参考流仅除Q一次。 | 签署实际合同/范围矩阵、真实型号/BOM、校准、全原源/受益方核对、历史版本替换、扩展卡/协议解析审核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| valid_count | service_out | Q=count(在截止时点具有当前最终有效合格服务的不同original_pack_id)。退回/转售沿用原ID。已撤销验收不在该集合中，不能再次扣除。验收有效的财务调整仍留在集合。 | original_pack_id; acceptance_version; final_valid; cutoff; cp_goods | Q |  |
| physical_stock | gross_handover; supplier_handover; sealed_waste | 仅商品件数平衡：G_close=G_open+N_receipt+N_customer_return+N_transfer_in-N_gross_customer_handover-N_supplier_handover-N_transfer_out-N_condemn-N_confirmed_missing+R_goods。N_gross_customer_handover包括全部实物客户交付（含从未验收），不能再次扣除未验收交付。无移动撤销不产生库存出库。报废认定是商品转持有废物的内部变化。独立地W_close_kg=W_open_kg+W_condemn_kg+W_received_kg-W_dispatch_kg-W_other_exit_kg-W_missing_kg+R_waste_kg。按事件ID连接N_condemn与独立称重W_condemn_kg，绝不能把Item(s)等同kg。带符号未决R保留调查与不确定性；确认丢失须独立证据。 | G_close; G_open; N_receipt; N_customer_return; N_transfer_in; N_gross_customer_handover; N_supplier_handover; N_transfer_out; N_condemn; N_confirmed_missing; R_goods; W_close_kg; W_open_kg; W_condemn_kg; W_received_kg; W_dispatch_kg; W_other_exit_kg; W_missing_kg; R_waste_kg; event_id; cp_goods; cp_waste | typed_stock_checks |  |
| failure_source | failed_pack | 每个原始同质收货原源向量V_s，N_original_s=N_S_s+N_F_s+N_T_s+N_O_s，每份包装仅有唯一当前原源责任。failed_pack原始输入N_F=sum_s(N_F_s)，背景B_F=sum_s(N_F_s*V_s)，V_s以一份实际送达收货门的完整原包装为基准。不同向量须分行/分数据集，不能合用一个件数乘数。整包与组件向量模式互斥；组件责任不同时须设独立真实组件产品输入卡，含原始数量/单位/提供方，守恒原源并排除整包对应部分。下游GOODS系统单独加入一次B_S=sum_s(N_S_s*V_s)。禁止按任意组件质量分数划分环境向量。 | N_original_s; N_S_s; N_F_s; N_T_s; N_O_s; V_s; source_id; original_pack_id; cp_goods | N_F; B_F; B_S | ghg-product-2011 |
| electricity_total | core_ac | K_core_h=sum_c(K_c*d_c_h/sum_all_h(d_c_h))；各K_c为core_partition下互斥实测kWh，d_c_h为固定同单位原源类别驱动量。E_core_MJ=3.6*K_core_h。表读数为分配前原始量；已精确到池的提供方读数不得再次分配。 | K_c; d_c_h; source_class; source_meter_id; parent_boundary; attribution_level; cp_meter | E_core_MJ |  |
| asset_replace | all inventory rows | 暂定f_a_h=e_a_h/L_a；最终f_a_h=e_actual_a_h/E_a；E_a=sum_all_h(e_actual_a_h)。对每个原始历史池及每个版本替换A_new_h=f_new_a_h*V_new_a并记delta_h=A_new_h-A_old_h。终端载体及独立父资产运输只应用一次相同父资产份额；实际事件维护有互斥事件原源/受益方台账。 | e_a_h; L_a; e_actual_a_h; E_a; f_old_a_h; f_new_a_h; V_old_a; V_new_a; A_old_h; asset_id; original_pool; version; cp_completion | A_new_h; delta_h | ghg-product-2011 |
| completion_sum | all inventory rows | 逐交换j恢复各外部模块至证据支持的原始分子：仅当z_m_j已归一化时用U_m_j=z_m_j*D_m，否则直接保留原始U_m_j。仅一次应用固定类别/首次使用/资产/原源责任分配，得到可归属U_m_j_h。按实际原源/事件/时间/资产/生命周期组成去重，不仅比较提供方ID。随后对相同交换身份/属性/单位及兼容范围用q_final_j=(C_core_j_h+sum_disjoint_m(U_m_j_h))/Q。C_core在相应交换含E_core_MJ、带供应向量的N_F及直接外运kg；不得丢核心或再次加入F。不能把kg加MJ、原始加已归一化或把实物卫星件数加到服务产出。Q=0禁止除法。在全部实际原子卡/协议及本汇总核实前，部分模块须明确排除项/未完成义务。 | C_core_j_h; U_m_j; U_m_j_h; z_m_j; D_m; Q; source_id; event_id; asset_id; lifecycle_stage; attribution_level; original_pool; version; cp_completion | q_final_j | ghg-product-2011 |
| one_reference | all inventory rows | 各最终行数量=q_owned_row/Q，每参考流；q_owned_row保留自身分子单位且已完成全部分配。service_out=Q/Q=1 Item(s)。gross_handover=N_gross_customer_handover/Q及supplier_handover=N_supplier_handover/Q仅为不表征的实物卫星。sealed_waste=W_dispatch_kg/Q为实际直接净外运kg，库存仅质控，不重复乘F份额或库存修正。 | q_owned_row; Q; N_gross_customer_handover; N_supplier_handover; W_dispatch_kg; cp_goods; cp_meter; cp_waste | final_inventory_amount |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| lot_trace | service_out; failed_pack | 原SKU/批号/封签/储存/效期/召回状态及完整原源向量须追溯同一不可变ID；标称片数/成分规格不是质量或LCI。 | 实际标签、签署供应商批次/BOM/向量及完整事件史 |
| source_quality | all inventory rows | 使用实际地域/时间/技术/提供方范围及不确定性、校准、完整性披露。官方标签、历史UUID观察或一般方法都不是场址定量LCI。 | 提供方清单及原始活动记录；不确定性及缺失字段登记 |
| completeness_quality | all inventory rows | 即使有限计量通过，核心部分模块仍须标注部分。新实际状态/交换须先有原子双语卡及精确过程/协议/原始/计算链接，才可声称完整。 | 签署补齐矩阵及实际解析投影；未解决身份及全部省略模块 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| identity_complete | all inventory rows | 候选UUID缺口按精确row_id明确保留。在形成可用数值数据集之前，逐交换独立直读官方双语身份/类型/属性/单位/介质并匹配实际提供方；官方属性UUID不是流UUID。使用点交流电身份不证明电网/提供方性能。拒绝SKU/状态/BOM不匹配或由公开标签推得供应向量；保留实际数量/不确定性，禁止虚构系数或默认零。 | dailymed-tylenol-37806 |
| custody_integrity | service_out; failed_pack; gross_handover; supplier_handover; sealed_waste | 核对不同有效Q、完整原ID事件历史、有类型库存平衡、S/F/T/O原源守恒、整包/组件向量互斥、收货门及入场范围。分别调查确认丢失与带符号残差。每份从未验收或已撤销但客户留存的包装即使无实物退回，也须真实接收方/状态/背景延续。封签/效期/召回/温度不确定性阻止合格服务，绝不允许调剂或自动转售。 | dailymed-tylenol-37806 |
| waste_integrity | sealed_waste | 实际接收方承接须匹配整份未开封过期/召回药品制剂与原瓶/盖/封签/纸盒载体及其实测净kg。不默认危险类别、处理方式、回收抵扣或安全使用/法律批准。开封、泄漏、外部污染、混杂内容物、新处置容器或缺失载体须具体状态卡/提供方扩展。提供方已包含收集/处理/包装/运输时排除独立重复项。实物供应商退回与责任T保持独立。 | jrc-retail-2013 |
| module_integrity | all inventory rows | 核心计量完整性不建立完整零售经营。须实际补齐矩阵、真实卡/协议、原始字段覆盖、原源类别同单位驱动量核对、提供方分配层级、全历史资产修订、首次使用库存及精确一次补齐汇总后才可完整。未知支持电力、必要资本、支付/行政/安防范围或运输空驶/闲置覆盖是阻断缺口，不是零或通用服务名。 | ghg-product-2011; jrc-retail-2013 |
| bilingual_projection | all inventory rows | 两语言须保留参考分母、对象/状态/类型/方向、行/协议ID、条件门槛、原源ID、公式及义务。最终卡使用basis_kind reference_flow。通过正常同步生成结构投影；核对实际解析Inputs及每卡协议process_id/flow_role，含补齐扩展。有限计量检查不是科学、身份、翻译或药品安全批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset；强制支持补齐之前为明确部分增量服务 |
| downstream_use | 一指定原包装的仅清单部分模块；完整零售系统仅通过固定completion_sum，若要求则另声明GOODS背景S |
| allowed_use | 以实测匹配原源向量及明确补齐状态进行透明原源责任/批号受控服务研究 |
| excluded_use | 整个CPC叶、临床/调剂/疗效/安全用药/合法性声明；制剂等同原料药或其他包装/路线；以部分核心作完整经营比较；未核实提供方影响 |
| required_metadata | 全部限定项；精确原源/版本/属性/单位/状态；池及截止史；原始/Q区别；S/F/T/O及失败输入；原门运输；模块矩阵及全部排除项 |
| required_quality_disclosure | 实测与未决区别；实际校准/覆盖/不确定性；历史身份观察；部分支持缺口、不可归一化池及带符号残差；不推定批准 |
| update_trigger | 标签/SKU/制剂/包装/BOM/批次状态、渠道、储存/封签/召回验收、迟到事件、供应向量、模块范围、资产暴露/寿命/退役或提供方分配变化 |

## 11. 数据源

| source_id | 标题 | Type | Reference | Use |
| --- | --- | --- | --- | --- |
| un-cpc3-62173 | 联合国统计司，CPC 3.0 子类62173解释性说明 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62173 | 仅作分类上下文：涉及352组商品的零售服务；本原封包装混合门店子范围较窄。 |
| dailymed-tylenol-37806 | Kenvue Brands LLC，泰诺特强对乙酰氨基酚薄膜衣片，DailyMed SPL组17cfa99d-abb2-4d77-9e0e-e77109fbb61a，2026年1月21日更新 | official_guidance | https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=17cfa99d-abb2-4d77-9e0e-e77109fbb61a | 仅支持商品身份及储存/封签上下文：06包装为一纸盒内一塑料瓶、标称100片；500mg是成分规格。不建立完整BOM/LCI、实际批次数量、用药建议、合法性或安全批准。 |
| ghg-product-2011 | WRI/WBCSD，产品生命周期核算与报告标准2011，第6、7、9章 | standard | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 服务单位、透明边界以及物理分配之前先细分。该来源不规定本PCR的损失/资产/补齐公式，也不证明整项标准符合性。 |
| jrc-retail-2013 | 欧盟委员会JRC，零售业最佳环境管理实践，EUR25998EN2013 | handbook | https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售公用工程、照明、运输、材料及废物的定性上下文；不采用标杆数量或药品监管结论。 |
