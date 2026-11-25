---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-flowers-and-plants
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原育苗盆观赏植物零售交付服务

## 1. 范围与适用性

本候选方法适用于非专门商店按收货批群核算的原育苗盆观赏活植物零售服务。一个数据集选定一种物种/品种、SKU、育苗盆规格和等级，并由顾客到店提取。纳入收货、暂存、状态检查、人工浇水、结账、交付、撤销销售及零售商控制的残余物管理，不代表植物栽培。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-flowers-and-plants |
| classification_refs | CPC 3.0 62112；narrower：仅限原育苗盆观赏植物 |
| covered_products | 一盆原育苗盆内可售观赏活植物的零售交付服务；不作转化处理 |
| excluded_products | 切花、种子、药用植物、专门商店销售、网售/送货、栽培、换盆、施肥/施药、专用冷藏展示、分配零售区域内的燃烧供暖和制冷设备；合格售出植物生产依边界规则另行耦合 |
| representative_product | 原育苗盆观赏植物零售交付服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 原育苗盆验收入库 → 非专门商店暂存/人工浇水 → 顾客交付 → 退货窗口关闭；仅限电加热/通风或自然调温区域 |
| market_state | 原育苗盆内的可售活植物；声明物种、健康等级、盆容积、基质及实际暂存时长 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一盆原育苗盆观赏植物的店内零售交付服务 |
| How much | 为声明的同质SKU的一盆植物完成一次服务；多盆销售按盆数计服务数 |
| How well | 按合同验收物种、等级、盆器及健康状态；已撤销销售不计合格产出 |
| How long or cycle | 从收货到交付并纳入声明的合同退货窗口；不承诺顾客后续栽培寿命 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一盆原育苗盆观赏植物的店内零售交付服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 物种/品种; SKU; 植物尺寸/健康等级; 盆材质/容积; 基质; 接收gate; 商店/渠道; 批群/季节; 暂存日数; 浇水方法; 温控方式; 交付验收; 退货窗口; 损失背景边界; 包装; 分配驱动量 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_count | retail_service | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N为闭合收货批群内最终未撤销的已验收单盆交付数。取消或撤销销售、拒收、内部转移和处置均不增加N。N必须为正。 |
| m_normalize | 除retail_service外所有清单行 | 保留各行流属性 | row unit | Q_i为闭合批群归属的、采用原行单位且尚未归一化的交换总量。仅一次计算q_i = Q_i / N。内部搬运和浇水量实测，不得固定为N。 |
| m_convert | 电力；水；废物 | 能量；体积；质量 | MJ; m3; kg | 电表kWh按3.6 MJ/kWh换算为MJ；L按0.001换算为m3。无相同配置整盆实测质量，不得将盆数换为kg；不得由用水投入直接推定废水量。残余物按接收状态称量并记录含水状况/皮重。 |
| split_labour_time | cleaning | 时间 | h | 仅计已签认的实际外购人工工时；工单数、面积及资产件数不能直接替代h。材料、能耗、工具、差旅和废物独立计量。自营工时仅作核对，不虚构外购交换；归属后仅按原最终参考分母归一一次。 |
| selected_energy_identity | split_support_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 所选交流电身份只有一个参考能量属性。实际归属量保留本行单位；其单位组中1kWh=3.6MJ。与另一能量单位来源合并或表达参考MJ交换前仅换算一次，同一分子不得重复换算，也不能推定供应组合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 植物以原育苗盆状态在商店收货gate验收；外购公用工程和零售耗材自各自交付gate起 |
| starting_condition_role | 零售服务前景起点；不表示损失商品为零负荷 |
| product_classification_scope | CPC 62112的较窄子集；排除非盆栽/切花/种子及其他路线 |
| recursive_input_rule | 仅当外购同类零售服务对应独立且有记录的操作时，作为独立供应商投入；不得递归计入本服务输出，也不得把内部库存转移改列外购服务。 |
| upstream_dataset_requirement | 公用工程、耗材、设施/设备使用、废物去向和损失整盆植物使用供应/生产背景。损失植物背景必须到达实际商店接收gate，并含对应入店运输。 |
| disclosure | 部分零售服务数据集：合格售出植物及其收货前生产/运输须由下游商品加服务模型纳入；无合格最终销售植物（B=L+F）已在本服务中计入。披露闭合情况、覆盖范围与排除路线。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| b_goods | loss_plant | B = L + F为无最终合格销售的唯一植物数，其接收gate生产及入店运输经loss_plant计一次。L为实际场内损失；F为最终不合格外部转移控制，不自动作为废物。下游仅为最终随N售出的唯一植物加入接收gate背景；存活F植物进入其他模型时须携带生产已核算标记，避免相同生产重复声明。退供应商的生产负荷随退回库存保留，零售商控制的搬运和退货运输仍属本服务。最终去向未决阻止闭合。 | unsd-cpc62112; ghg-product-standard |
| b_closure | cp_cohort | 在实物去向及验收/退货窗口解决后闭合各原收货批群。顾客实物退回与POS财务撤销是关联原植物身份的独立事件，互不推定。单纯善意退款不取消仍保留的合格验收。取消且未退实物或未验收的外转植物为F，不是L。重复退回/重售保留同一身份历史：仅其最终验收且保留的销售贡献N，失败活动全部保留。纳入预先声明收货期间全部批群，含零销售/全损失批群。迟到实物退回须纠正/重开原闭合，不得作为无关的新零负荷收货。 迟到退回重开原批群时，保留实际活动日期，将后续运回、养护、结账/重售及处理全部加入原批群分子，并纠正N/L/F/S。各实际活动期间的表计/服务公共池中，即使原批群当期没有新收货，仍将重开的原批群列为明确受益者。通过版本化调整修订原批群数据集，同时核对当期总量；不得将相同活动再记到新收货批群。 | unsd-cpc62112; ghg-product-standard |
| b_scope | holding; sale; residual | 纳入卸货/搬运、暂存、浇水、季节电调温、结账、包装、失败销售、地面清洁、归属设施/设备生命周期使用及残余物处理。排除顾客出行/使用、栽培、化学处理和其他声明排除路线。发生排除路线时，本PCR不足以单独指导：停止完成声明并选择适当的补充方法，不得静默遗漏。 | unsd-cpc62112; ghg-product-standard |
| b_split | all inventory rows | 区域公用工程和实物耗材分为独立交换。定义的场地服务仅含建筑本体和固定设施的制造、维护及退役，排除公用工程、清洁、收银终端和移动货架。外购收银/清洁服务仅含合同明确操作；其已含公用工程/材料份额须从其他行扣除。 清洁人工和所有物理量按split_exchange_identity拆分，不能再在checkout或premises背景含清洁。premises和checkout仅保留一个真实同质使用服务；须有同属性服务量、完整供应背景及实际合同支持，所有未包含的实际资源均另建卡。 | unsd-cpc62112; ghg-product-standard |
| b_waste | residual | 植物/基质/原盆仍实际混合时，将完整弃置流计入一次；若分离，以实测独立流替代并保留质量对账。废水和固体流各连接实际接收方处理数据集一次，不得将载体及其已含成分重复计入。不得默认给予生物碳吸收、呼吸、避免处置或回收信用。 | ghg-product-standard |
| split_exchange_identity | all inventory rows | 每卡只允许一个准确交换身份及一个参考计量属性/单位；单位组不是第二属性，其他测量仅作换算证据。人工卡不再承接整包材料/能源/设备/废物。已列完整同质设备、原包装商品及真实混合废物可保留，但须有实际同范围背景/接收处理和完整组成，不得汇总异质物或选择项。同一原始交换只能计入一张核心卡或一个拆分来源；替换整包时撤销其全部旧表征，仅合并相同身份/属性/单位的互斥原始数量。实际额外物质、零件、燃料、制冷剂、排放及处理缺口必须具名新增双语卡和过程协议；未知不得置零或宣称完整。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| holding | 收货与暂存 | required | 全部选定闭合批群 | 零售前景 | retail_service |
| sale | 结账与交付 | required | 全部选定闭合批群 | 零售前景 | retail_service |
| residual | 残余物管理 | required | 全部选定闭合批群 | 零售前景 | retail_service |
| split_support | 清洁或维护的独立物理交换 | conditional | 实际发生；须逐项证明发生或不存在 | 互斥资源、设备与废物 | retail_service |

### 过程：收货与暂存（`holding`）

#### 输入

##### 产品流

###### 归属零售区域用电（`electricity`）

3.6 * E_kWh / N；E_kWh为扣除服务已含公用工程后，直接和分配的暂存/结账用电。记录自然/电供暖、风机、湿度控制运行及季节覆盖；专用制冷/燃烧不属本路线。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6 * E_kWh / N；E_kWh为扣除服务已含公用工程后，直接和分配的暂存/结账用电。记录自然/电供暖、风机、湿度控制运行及季节覆盖；专用制冷/燃烧不属本路线。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：`isu-houseplant-care`

###### 人工养护供水（`water`）

W_m3 / N；W_m3为跨零售边界的市政新水，仅采用声明的新水计算方法之一确定。外部供水表量已经不含内部回用，不得再扣回用量。排水D独立计量。

- 选定流：供至零售暂存区域的市政自来水
- 流属性/单位：体积 / m3
- 数量规则：W_m3 / N；W_m3为跨零售边界的市政新水，仅采用声明的新水计算方法之一确定。外部供水表量已经不含内部回用，不得再扣回用量。排水D独立计量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water`
- 来源：`isu-houseplant-care`

###### 无合格最终销售植物的接收gate背景（`loss_plant`）

B / N；B = L + F。L为场内不可逆损失的唯一原盆数；F为最终脱离控制且无合格验收销售的唯一原盆数，含退款但未退实物、未验收外部交付及赠送。其接收gate生产及入店运输计一次。不得把F推定为废物或死亡植物。退供应商S的生产负荷随退回商品保留。

- 选定流：声明SKU在商店接收时的原育苗盆观赏活植物
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：B / N；B = L + F。L为场内不可逆损失的唯一原盆数；F为最终脱离控制且无合格验收销售的唯一原盆数，含退款但未退实物、未验收外部交付及赠送。其接收gate生产及入店运输计一次。不得把F推定为废物或死亡植物。退供应商S的生产负荷随退回商品保留。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_cohort`
- 来源：

###### 归属零售场地生命周期服务（`premises`）

A_year / N；按共享池分配的实测占用面积时间，建筑/固定设施生命周期边界依b_split；1 a为声明的核算年时长。

- 选定流：零售场地占用服务
- 流属性/单位：面积乘时间 / m2*a
- 数量规则：A_year / N；按共享池分配的实测占用面积时间，建筑/固定设施生命周期边界依b_split；1 a为声明的核算年时长。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-standard`

###### 分摊移动钢展示货架（`rack`）

R_kg / N；R_kg为制造gate完整货架实测质量，乘批群归属占用面积小时，除以货架实际服务寿命全部占用面积小时。背景止于制造gate。维修和退役为a_maintenance及cp_assets下独立实际事件；不得把维修质量加到完整货架制造质量中。

- 选定流：钢制零售展示货架
- 流属性/单位：质量 / kg
- 数量规则：R_kg / N；R_kg为制造gate完整货架实测质量，乘批群归属占用面积小时，除以货架实际服务寿命全部占用面积小时。背景止于制造gate。维修和退役为a_maintenance及cp_assets下独立实际事件；不得把维修质量加到完整货架制造质量中。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-standard`

###### 分摊高密度聚乙烯浇水壶（`watering_can`）

K_kg / N；K_kg为制造gate完整高密度聚乙烯水壶实测质量，乘批群浇水体积，除以其记录寿命期浇水体积。背景不含维修和退役。每次维修独立记录，完整水壶退役仅一次；不得以维修质量冒充新增完整水壶质量。

- 选定流：高密度聚乙烯浇水壶
- 流属性/单位：质量 / kg
- 数量规则：K_kg / N；K_kg为制造gate完整高密度聚乙烯水壶实测质量，乘批群浇水体积，除以其记录寿命期浇水体积。背景不含维修和退役。每次维修独立记录，完整水壶退役仅一次；不得以维修质量冒充新增完整水壶质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-standard`

### 过程：结账与交付（`sale`）

#### 输入

##### 产品流

###### 收银终端生命周期使用（`checkout`）

T_h / N；记录含撤销操作的终端使用时间。背景含终端制造、维护和退役；电力保留于electricity，除非明确已含并扣除。

- 选定流：收银终端使用服务
- 流属性/单位：时间 / h
- 数量规则：T_h / N；记录含撤销操作的终端使用时间。背景含终端制造、维护和退役；电力保留于electricity，除非明确已含并扣除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_checkout`
- 来源：`ghg-product-standard`

###### 牛皮纸盆栽包材（`kraft_wrap`）

Q_kraft_wrap / N；实际消耗质量含包装失败量，并扣除未开封退回及库存变化；记录规格及去向。仅发生时适用。

- 选定流：牛皮纸盆栽包材
- 流属性/单位：质量 / kg
- 数量规则：Q_kraft_wrap / N；实际消耗质量含包装失败量，并扣除未开封退回及库存变化；记录规格及去向。仅发生时适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 聚丙烯盆栽套袋（`pp_sleeve`）

Q_pp_sleeve / N；实际消耗质量含包装失败量，并扣除未开封退回及库存变化；记录规格及去向。仅发生时适用。

- 选定流：聚丙烯盆栽套袋
- 流属性/单位：质量 / kg
- 数量规则：Q_pp_sleeve / N；实际消耗质量含包装失败量，并扣除未开封退回及库存变化；记录规格及去向。仅发生时适用。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

###### 纸质植物标牌（`paper_tag`）

Q_paper_tag / N；称量实际发给植物的零售新增识别标牌，含误印/更换标牌，并扣除未用库存及退回。植物背景已含育苗场附带标牌，不再作本新增投入。

- 选定流：纸质植物标牌
- 流属性/单位：质量 / kg
- 数量规则：Q_paper_tag / N；称量实际发给植物的零售新增识别标牌，含误印/更换标牌，并扣除未用库存及退回。植物背景已含育苗场附带标牌，不再作本新增投入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging`
- 来源：

#### 输出

##### 产品流

###### 一盆原育苗盆观赏植物的店内零售交付服务（`retail_service`）

1 Item(s)

- 选定流：一盆原育苗盆观赏植物的店内零售交付服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_cohort_sale`
- 来源：

### 过程：残余物管理（`residual`）

#### 输入

##### 产品流

###### 零售地面清洁人工服务 (`cleaning`)

仅为实际外购人工工时，不包含材料、设备生命周期、电力、差旅、废物或处理。自营人工须记录工时用于核对，但不虚构外购服务交换。其他物理交换分别计入split_support，或具名扩展并与已有卡去重。

- 选定流：零售地面清洁人工服务
- 流属性/单位：时间 / h
- 数量规则：实测独占或一次归属的外购人工工时 / N；cp_split_labour_residual。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_labour_residual`
- 来源：

#### 输出

##### 废物流

###### 收集的植物养护排水（`drainage`）

D_m3 / N；独立计量收集排水并识别接收管网/处理。不把供水等同排水；滞留、蒸发及回流水单独对账。

- 选定流：排入污水管网的盆栽浇水排水
- 流属性/单位：体积 / m3
- 数量规则：D_m3 / N；独立计量收集排水并识别接收管网/处理。不把供水等同排水；滞留、蒸发及回流水单独对账。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_residual`
- 来源：`isu-houseplant-care`

###### 弃置完整原育苗盆观赏植物（`dead_pot`）

Q_dead_pot / N；单独称量此实际废物流并记录皮重、弃置含水/状态、接收方、运输及处理。仅共同弃置时整盆质量含植物、基质和盆，不得再次加其组分。

- 选定流：弃置完整原育苗盆观赏植物
- 流属性/单位：质量 / kg
- 数量规则：Q_dead_pot / N；单独称量此实际废物流并记录皮重、弃置含水/状态、接收方、运输及处理。仅共同弃置时整盆质量含植物、基质和盆，不得再次加其组分。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 移除的观赏植物叶片修剪物（`plant_trim`）

Q_plant_trim / N；单独称量此实际废物流并记录皮重、弃置含水/状态、接收方、运输及处理。不得由最终服务数推定废物量。

- 选定流：移除的观赏植物叶片修剪物
- 流属性/单位：质量 / kg
- 数量规则：Q_plant_trim / N；单独称量此实际废物流并记录皮重、弃置含水/状态、接收方、运输及处理。不得由最终服务数推定废物量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 废牛皮纸包材（`waste_paper`）

Q_waste_paper / N；单独称量此实际废物流并记录皮重、弃置含水/状态、接收方、运输及处理。不得由最终服务数推定废物量。

- 选定流：废牛皮纸包材
- 流属性/单位：质量 / kg
- 数量规则：Q_waste_paper / N；单独称量此实际废物流并记录皮重、弃置含水/状态、接收方、运输及处理。不得由最终服务数推定废物量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 废聚丙烯盆栽套袋（`waste_pp`）

Q_waste_pp / N；单独称量此实际废物流并记录皮重、弃置含水/状态、接收方、运输及处理。不得由最终服务数推定废物量。

- 选定流：废聚丙烯盆栽套袋
- 流属性/单位：质量 / kg
- 数量规则：Q_waste_pp / N；单独称量此实际废物流并记录皮重、弃置含水/状态、接收方、运输及处理。不得由最终服务数推定废物量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 废零售新增纸质标牌（`waste_tag`）

Q_waste_tag / N；弃置时单独称量失败/移除的零售新增纸标牌；整盆废物内育苗场附带标牌已在该流计入。

- 选定流：废纸质植物标牌
- 流属性/单位：质量 / kg
- 数量规则：Q_waste_tag / N；弃置时单独称量失败/移除的零售新增纸标牌；整盆废物内育苗场附带标牌已在该流计入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 弃置完整钢制零售展示货架（`rack_retirement`）

Q_rack_retirement / N；实际完整资产退役时称量一次，扣除维修时已移除组件。退役运输/处理按与制造投入相同的记录寿命期受益份额归属；制造背景不得已包含本退役。

- 选定流：弃置完整钢制零售展示货架
- 流属性/单位：质量 / kg
- 数量规则：Q_rack_retirement / N；实际完整资产退役时称量一次，扣除维修时已移除组件。退役运输/处理按与制造投入相同的记录寿命期受益份额归属；制造背景不得已包含本退役。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets_residual`
- 来源：

###### 弃置完整高密度聚乙烯浇水壶（`can_retirement`）

Q_can_retirement / N；实际完整资产退役时称量一次，扣除维修时已移除组件。退役运输/处理按与制造投入相同的记录寿命期受益份额归属；制造背景不得已包含本退役。

- 选定流：弃置完整高密度聚乙烯浇水壶
- 流属性/单位：质量 / kg
- 数量规则：Q_can_retirement / N；实际完整资产退役时称量一次，扣除维修时已移除组件。退役运输/处理按与制造投入相同的记录寿命期受益份额归属；制造背景不得已包含本退役。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets_residual`
- 来源：

### 过程：支持作业独立物理交换 (`split_support`)

仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

#### 输入

##### 产品流

###### 未浸渍的干燥纤维素清洁擦巾 (`split_cleaning_wipe`)

仅计实际首次使用的此组成干擦巾；不得按地面面积推定耗量，也不得把使用后湿擦巾质量当作投入。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：未浸渍的干燥纤维素清洁擦巾
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整手动聚丙烯刷毛扫帚 (`split_cleaning_broom`)

一个同质完整扫帚型号，排除可替换耗材和运行能耗；仅应用一次持续寿命台账受益份额。维修属于独立事件交换。 仅含制造/初始安装，排除另行实际计量的维护和终端处理。包装首次使用数量不再乘工具暴露份额。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整手动聚丙烯刷毛扫帚
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实测同质完整型号数量乘其持续寿命受益份额，仅一次 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 供应地面清洁的饮用自来水 (`split_cleaning_water`)

独立计量清洁入口新鲜供水；直接称重，或实测体积乘相应实测密度。排除内部循环水及购入配方已含水。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 十二烷基硫酸钠水性地面清洁配方 (`split_cleaning_sds`)

仅在实际供应商/SDS证实此单一配方时采用的条件性候选。实测供应态湿配方质量、浓度及来源批次；不指定必用化学品，不默认使用或虚构比例。其他实际配方须在完整性前另建具名卡。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：十二烷基硫酸钠水性地面清洁配方
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整可重复使用手动棉头地拖 (`split_cleaning_mop`)

一个固定完整型号及原配拖头/手柄，仅应用一次持续寿命分配；另行安装的替换拖头须有独立具名事件输入/输出卡。 仅含制造/初始安装，排除另行实际计量的维护和终端处理。包装首次使用数量不再乘工具暴露份额。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整可重复使用手动棉头地拖
- 流属性/单位：物品数量 / Item(s)
- 数量规则：实测同质完整型号数量乘其持续寿命受益份额，仅一次 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 完整空HDPE瓶身及聚丙烯瓶盖清洁剂瓶 (`split_cleaner_bottle`)

仅为实际匹配包装配置的条件性候选。制造/首次使用与配方净湿质量分开；加此瓶前须从配方背景排除其制造或记录来源级撤销。重复使用须有实际寿命台账。其他实际包装须具名另建卡。 仅含制造/初始安装，排除另行实际计量的维护和终端处理。包装首次使用数量不再乘工具暴露份额。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：完整空HDPE瓶身及聚丙烯瓶盖清洁剂瓶
- 流属性/单位：物品数量 / Item(s)
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 已识别支持作业使用的交流电 (`split_support_electricity`)

仅计任何门店/资产/供应流尚未表征的实测支持用电。将上级电表划分成互斥区间/来源，同一kWh不得再加。记录电压/供应方，不推定电网组合。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

所选流使用单一净热值能量属性。清单保留声明的实测能量单位；能量单位组支持1kWh=3.6MJ。将kWh记录表达为参考MJ（含兼容来源合并）时仅换算一次，保留原kWh表计分子及来源归属，不能另加一次电力需求。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / kWh
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 已识别支持访问的柴油轻型商用车运行服务 (`split_support_travel`)

仅适用于有实际记录的柴油轻型商用车访问，实测vehicle-km包括实际空驶调位。匹配完整车辆运行背景及全部受益方，其他动力/车型须另建卡。不得再加背景已含燃料或现有运输/资产供应已含行驶。此背景未含的静止怠速能耗须另立具名交换。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：已识别支持访问的柴油轻型商用车运行服务
- 流属性/单位：车辆行驶距离 / vehicle*km
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

#### 输出

##### 废物流

###### 带有零售地面污物的使用后纤维素擦巾 (`split_used_wipe`)

实测实际外运完整载体，包括所含液体和污物；记录状态及接收方接纳。排除单独外运的游离液体。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：带有零售地面污物的使用后纤维素擦巾
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 实际废物交接时的干燥零售地面清扫物 (`split_sweepings`)

一种实际共同收集、组成有记录且处理相容的混合固体载体；不得汇总不同废物类别。排除独立外运的擦巾和退役工具。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：实际废物交接时的干燥零售地面清扫物
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 退役完整手动聚丙烯刷毛扫帚 (`split_broom_waste`)

扣除此前已拆出部件后的完整剩余扫帚；实测终端净质量采用与购置相同的持续寿命受益历史，不重复列组分废物。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：退役完整手动聚丙烯刷毛扫帚
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 处理交接时收集的水性零售地面清洁废液 (`split_cleaning_effluent`)

直接实测实际外运全液体净kg，或采用相应温度/组成下V_discharge*rho_discharge；不得从直接实测排液再扣蒸发、回用或库存。溶解清洁剂是载体组成，不另列重复废物流。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：处理交接时收集的水性零售地面清洁废液
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 带残留污物的退役完整手动棉头地拖 (`split_mop_waste`)

实测此前拆件后的实际完整剩余载体，保留湿度/状态和完整接收处理范围；按同一资产历史归属退役，不仅归给退役期销量。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：带残留污物的退役完整手动棉头地拖
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

###### 带残留配方的使用后HDPE瓶身及聚丙烯瓶盖清洁剂瓶 (`split_cleaner_bottle_waste`)

仅在接收方接纳实测组成/状态时计实际带盖和残留外运完整载体，不重复列残留或瓶盖废物。直接净kg独立于原湿配方kg。可重复使用返还须有独立保管路线，不自动成为废物。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：带残留配方的使用后HDPE瓶身及聚丙烯瓶盖清洁剂瓶
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / N; cp_split_support.
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_support`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_direct | all inventory rows | 优先拆分/分表计量SKU暂存区域及结账操作。实测SKU专用浇水、包装和损失直接归属。腐损库存和失败销售负荷保留在SKU批群，不得分配给虚构可售共产品。 | ghg-product-standard |
| a_shared | electricity; premises; rack; checkout; cleaning | 优先拆分/分表。剩余暂存/场地/货架公共池采用同池同期间所有实际受益者占用面积小时，d_all为实际全部受益驱动量之和，不是全场地理论容量。空置、停业和空展示负荷保留于公共池，按该期间受益者份额分配。结账池采用全部受益者交易秒数，含失败和撤销；清洁采用实际受益清洁面积次。零驱动时段的不可避免待用/待机负荷并入同一资产/区域有记录的营业周期公共池，按完整周期分配，含淡季和零销售批群。预先声明周期日期，保留全部时段，全部分配份额须对账至完整实测公共池。若完整周期仍无受益驱动量，或记录驱动量不具因果代表性，不得虚构分母或丢弃负荷：该池记录未决并阻止完整数据集状态。 本公共池归属不得再乘完整货架/水壶制造或退役数量；这些数量仅按a_asset_ledger采用一次寿命期份额。资产协议汇总与卡片公式描述相同的单次归属，不是再次相乘。 | ghg-product-standard |
| a_assets | rack; watering_can; premises; checkout | 完整钢货架和高密度聚乙烯水壶投入仅采用制造gate实测完整资产质量及其记录实际寿命期受益份额。制造投入/背景不含维修质量和退役。完整资产退役是独立实测废物输出，采用相同寿命期份额归属。资产质量/寿命/服务数量缺失阻止完成，不得虚构默认值。场地与收银服务生命周期边界保持明确，不得已含这些移动资产。 | ghg-product-standard |
| a_maintenance | rack; watering_can; rack_retirement; can_retirement | 每次实际维修为独立日期事件，记录实际替换组件/材料、作业、能源及拆下废件身份、数量和供应gate。完成受影响数据集前，将各具体交换独立加入，并排除完整外购维修服务已含量。该事件按修复资产驱动量及空置/零驱动规则，向记录的维修核算周期全部受益者归属一次，不摊到原资产整个寿命，也不并入完整资产质量。多次维修保持多个可追溯事件。 | ghg-product-standard |
| a_asset_ledger | rack; watering_can; rack_retirement; can_retirement | 每个实物资产id须跨全部期间、全部受益者及重开批群维护唯一持久台账。货架采用寿命期占用面积小时，水壶采用寿命期浇水体积。每批群取得完整制造质量的一次份额f_asset,cohort，以及实际完整资产退役的一次对应份额。过账按已记数量的差额进行；期间或寿命估计变化不得重启完整制造/退役负荷。全部受益者累计份额必须在0..1内；最终退役资产对账至1。保留分子、寿命分母、原/新寿命版本、累计已记份额、纠正差额及接收批群。寿命修订须显式冲回/重记受影响旧批群，守恒完整资产质量。更换采用新实物资产id；退役扣除此前拆下部件并保留实际运输/处理。未来/寿命依据未知时仍属未决，不得重设分配基线。cp_assets汇总和货架/水壶卡公式是该台账单次计算的不同视图，不得再应用c_shared。 | ghg-product-standard |
| split_attribution | cleaning; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | 优先直接独占计量；共用清洁事件按实际全受益清洁面积次归属每种原始物理数量，维修按实际工单支持周期全部受益方的原设备物理驱动分配。保留闲置、失败、关闭及零驱动负荷并按原规则结转，不能用销量删减。每项新工具的制造/退役使用持续资产寿命台账及历史修订差额；替换件属于其实际维修事件，不再当作原完整资产重复购置，新增替换件在事件时入账一次。已归属来源不再乘第二份额，工具终端不只归给退役期。背景已含某物理量则从旧背景中撤销该量或以本拆分替换整包，严禁两边同时表征。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | holding | loss_plant | 批群台账 | 原植物/批次id；接收gate/批群；SKU/物种/盆；实物收货/退回/外转时间；毛实物交付；POS销售/撤销/退款事件id及金额；最终验收保留销售N；场内不可逆损失L；最终不合格外部去向F；退供应商S；库存/转移计数；最终接收方/去向；生产已核算标记；退货窗口日期；重开原批群；迟到退回实际活动日期；养护/运输/重售/处理调整id；原及修订数据集版本 | 对同一原植物分别追踪每次实物和财务事件；核对控制权、合同验收、POS/退款及去向证据。退款不是实物退回或死亡的证据。取得L和F的接收gate背景，记录接收方背景是否已核算。 | Item(s) | 每次事件及批群闭合 | 收货至最终去向及退货窗口关闭；代表性完整营业季节 | 一个SKU、实际商店gate及其纳入批群 | 每参考流 | 盘点、POS凭证、退款、损失照片、供应商gate及交付植物背景 共用底层记录组：cp_cohort。本过程作用域视图不是新增实物数量或负荷。 |
| cp_cohort_sale | sale | retail_service | 批群台账 | 原植物/批次id；接收gate/批群；SKU/物种/盆；实物收货/退回/外转时间；毛实物交付；POS销售/撤销/退款事件id及金额；最终验收保留销售N；场内不可逆损失L；最终不合格外部去向F；退供应商S；库存/转移计数；最终接收方/去向；生产已核算标记；退货窗口日期；重开原批群；迟到退回实际活动日期；养护/运输/重售/处理调整id；原及修订数据集版本 | 对同一原植物分别追踪每次实物和财务事件；核对控制权、合同验收、POS/退款及去向证据。退款不是实物退回或死亡的证据。取得L和F的接收gate背景，记录接收方背景是否已核算。 | Item(s) | 每次事件及批群闭合 | 收货至最终去向及退货窗口关闭；代表性完整营业季节 | 一个SKU、实际商店gate及其纳入批群 | 每参考流 | 盘点、POS凭证、退款、损失照片、供应商gate及交付植物背景 共用底层记录组：cp_cohort。本过程作用域视图不是新增实物数量或负荷。 |
| cp_energy | holding | electricity | 电表与活动日志 | 表号；起止kWh；电路；供暖/风机/湿控运行；各SKU及全部用户面积小时；季节；服务已含kWh；完整全部受益驱动量；空置/停业时段；零驱动结转池/周期id | 读取校准分表；共享时核对总表及分配驱动；现场确认设备与燃料/制冷剂缺席 | kWh | 每日电表/活动记录；每月对账 | 全部纳入批群及完整季节运行 | 声明零售区域；不得有排除温控路线 | 每参考流 | 校准、账单、电路图、设备检查及完整用户份额 共用底层记录组：cp_energy。本过程作用域视图不是新增实物数量或负荷。 |
| cp_water | holding | water | 供排水记录 | SKU；物种；土壤状态；浇水时间；校准容器/表计体积；水源；收集排水；滞留水；回用；季节条件；接收方；选定方法（external_meter或application_reconstruction）；市政外部供水表起止；按水源区分的总施用/内部回用施用；新水净储量变化；施用前新水溢漏；供水表与施用表边界 water_source_id；parent_meter_id；event_id；row_owner；plant_water_m3；other_nonclean_water_m3；cleaning_water_m3；actual_supply_density；final_dispatch_direct_or_pre_diversion_reconstruction；measurement_plane；pre_diversion_quantity；reuse_diversion；direct_final_discharge | 同一计量边界/期间仅选一种新水方法。external_meter：读取归属的外部市政新水投入，不扣内部回用。application_reconstruction：按水源计量全部施用，记录内部回用施用量并仅剔除一次，同时对账新水净储量变化及施用前溢漏；无依据纠正项阻止完成。不得合并两种供水总量。检查物种/湿度并记录实际浇水，收集排水独立计量。 按c_fresh_water来源至流卡分区一次，保留原总表及子量和密度。按c_waste最终排放实测量不再扣回用，须明确区分上游重建模式。 | L; m3 | 每次浇水/排水事件 | 全部批群暂存日，含未售与退回植物 | 暂存区域及实际污水去向 | 每参考流 | 容器校准、水费账单、湿度观察、排水去向 共用底层记录组：cp_water。本过程作用域视图不是新增实物数量或负荷。 |
| cp_water_residual | residual | drainage | 供排水记录 | SKU；物种；土壤状态；浇水时间；校准容器/表计体积；水源；收集排水；滞留水；回用；季节条件；接收方；选定方法（external_meter或application_reconstruction）；市政外部供水表起止；按水源区分的总施用/内部回用施用；新水净储量变化；施用前新水溢漏；供水表与施用表边界 water_source_id；parent_meter_id；event_id；row_owner；plant_water_m3；other_nonclean_water_m3；cleaning_water_m3；actual_supply_density；final_dispatch_direct_or_pre_diversion_reconstruction；measurement_plane；pre_diversion_quantity；reuse_diversion；direct_final_discharge | 同一计量边界/期间仅选一种新水方法。external_meter：读取归属的外部市政新水投入，不扣内部回用。application_reconstruction：按水源计量全部施用，记录内部回用施用量并仅剔除一次，同时对账新水净储量变化及施用前溢漏；无依据纠正项阻止完成。不得合并两种供水总量。检查物种/湿度并记录实际浇水，收集排水独立计量。 按c_fresh_water来源至流卡分区一次，保留原总表及子量和密度。按c_waste最终排放实测量不再扣回用，须明确区分上游重建模式。 | L; m3 | 每次浇水/排水事件 | 全部批群暂存日，含未售与退回植物 | 暂存区域及实际污水去向 | 每参考流 | 容器校准、水费账单、湿度观察、排水去向 共用底层记录组：cp_water。本过程作用域视图不是新增实物数量或负荷。 |
| cp_assets | holding | premises; rack; watering_can | 资产生命周期与占用日志 | 资产id；制造gate完整资产质量；全部受益者占用面积小时；水壶寿命期/批群浇水体积；实际服务寿命；固定/移动覆盖；每次维修事件/日期/组件/材料/作业/拆下废物；维修周期受益者；空置/停业时段；退役质量/皮重；接收方/运输/处理；持久资产id；跨全部期间/全部受益者台账；寿命版本；原/新已记份额；纠正差额；被更换资产id；实际退役 | 测量资产质量和实际服务历史，区分制造gate、维修和退役。每次维修独立记录实际组件/材料身份；完整退役资产称量时扣除已拆下部件。保留空置时段和完整受益营业周期证据。 | m2*a; kg | 资产变更时；每日占用 | 完整批群及适用资产寿命 | 完整设施用户池 | 每参考流 | 平面图、供应商生命周期报告、秤证书、维修与退役记录 共用底层记录组：cp_assets。本过程作用域视图不是新增实物数量或负荷。 |
| cp_assets_residual | residual | rack_retirement; can_retirement | 资产生命周期与占用日志 | 资产id；制造gate完整资产质量；全部受益者占用面积小时；水壶寿命期/批群浇水体积；实际服务寿命；固定/移动覆盖；每次维修事件/日期/组件/材料/作业/拆下废物；维修周期受益者；空置/停业时段；退役质量/皮重；接收方/运输/处理；持久资产id；跨全部期间/全部受益者台账；寿命版本；原/新已记份额；纠正差额；被更换资产id；实际退役 | 测量资产质量和实际服务历史，区分制造gate、维修和退役。每次维修独立记录实际组件/材料身份；完整退役资产称量时扣除已拆下部件。保留空置时段和完整受益营业周期证据。 | m2*a; kg | 资产变更时；每日占用 | 完整批群及适用资产寿命 | 完整设施用户池 | 每参考流 | 平面图、供应商生命周期报告、秤证书、维修与退役记录 共用底层记录组：cp_assets。本过程作用域视图不是新增实物数量或负荷。 |
| cp_checkout | sale | checkout | 终端事件日志 | 终端；SKU交易；起止；取消/退款时间；全部用户总时间；生命周期合同；电力覆盖；完整全部受益驱动量；空置/停业时段；零驱动结转池/周期id | 记录结账和撤销操作时间；取得终端生命周期服务范围 | s; h | 每次交易/撤销 | 全部批群销售及退货窗口 | 服务声明SKU的终端 | 每参考流 | POS时间戳、服务合同及全部用户对账 共用底层记录组：cp_checkout。本过程作用域视图不是新增实物数量或负荷。 |
| cp_packaging | sale | kraft_wrap; pp_sleeve; paper_tag | 材料库存与使用日志 | 各材料规格；期初；购入；未开封退回；期末；包装失败；产品附带物；质量；回收去向 | 分别称量各具体材料；区分育苗场附带标牌/盆与新增零售投入 | kg | 每SKU批及每月盘点 | 相同闭合批群 | 仅零售新增包装 | 每参考流 | 秤、发票、盘点及育苗场材料清单 共用底层记录组：cp_packaging。本过程作用域视图不是新增实物数量或负荷。 |
| cp_cleaning | residual | cleaning | 清洁原始来源核对台账 | 清洁面积；次数；合同；已含公用工程/材料/废物；分配面积次；如有自行清洁化学品身份；完整全部受益驱动量；空置/停业时段；零驱动结转池/周期id | 核对原合同和实际事件；人工h采用cp_split_labour_residual，独立物理量采用cp_split_support。清洁面积次仅为全受益分配驱动，不是流数量。 | h；面积次仅作驱动 | 每次清洁及合同变更 | 全部批群暂存与闭合作业 | 仅受影响商店区域 | 每参考流 | 清洁日志、提供方边界和公用工程扣除 共用底层记录组：cp_cleaning。本过程作用域视图不是新增实物数量或负荷。 |
| cp_residual | residual | dead_pot; plant_trim; waste_paper; waste_pp; waste_tag | 残余物转移记录 | 废物流；批群；件数；毛/皮重；组成；含水；分离；接收方；路线/距离；处理；销售/再用状态；唯一转移单 | 发运时逐流称量，拍照记录整盆/分离状态，取得接收方技术与运输证据 | kg | 每次弃置/转移 | 全部批群去向含闭合 | 零售边界至实际残余物处理 | 每参考流 | 磅单、接收方许可/记录、转移单及废物背景边界 共用底层记录组：cp_residual。本过程作用域视图不是新增实物数量或负荷。 |
| cp_split_labour_residual | residual | cleaning | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |
| cp_split_support | split_support | split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 water_source_id；parent_meter_id；event_id；row_owner；plant_water_m3；other_nonclean_water_m3；cleaning_water_m3；actual_supply_density；final_dispatch_direct_or_pre_diversion_reconstruction；measurement_plane；pre_diversion_quantity；reuse_diversion；direct_final_discharge | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 按c_fresh_water来源至流卡分区一次，保留原总表及子量和密度。按c_waste最终排放实测量不再扣回用，须明确区分上游重建模式。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_can | watering_can | K_kg = 实测完整水壶制造gate质量 * 批群浇水体积 / 记录寿命期浇水体积。维修和退役依a_maintenance及cp_assets保持独立实际交换。 | cp_assets; cp_water | K_kg | ghg-product-standard |
| c_normalize | all inventory rows except retail_service | q_i = Q_i / N；Q_i为本行单位的最终归属批群总量，N由cp_cohort确定。已归一化背景因子不得再除N。 | Q_i; N; cp_cohort | q_i | ghg-product-standard |
| c_energy | electricity | Q_electricity = 3.6 * E_kWh；总表量等于直接量、全部用户分配量及记录差额之和；须调查差额，不得抹除。 | E_kWh; cp_energy | Q_electricity | ghg-product-standard |
| c_losses | loss_plant; retail_service | B = L + F；Q_loss_plant = B；Q_retail_service = N；q_retail_service = 1 Item(s)。N、L、F、S为cp_cohort下唯一原收货身份互斥最终状态；不得通过仅POS减法产生N或L。 | B; L; F; N; S; cp_cohort | q_loss_plant; retail_service | ghg-product-standard |
| c_shared | premises; checkout; cleaning; electricity | Q_i = Q_direct_i + Q_complete_pool_i * d_SKU / sum(d_all_actual_beneficiaries)。依a_shared将空置/淡季负荷纳入同周期完整公共池。零驱动时段结转至该记录完整周期；完整分母仍为零时状态未决并阻止完成。全部受益者分配须合计完整实测池，再仅除N一次。 | Q_direct_i; Q_pool_i; d_SKU; d_all; cp_assets; cp_checkout; cp_cleaning | Q_i | ghg-product-standard |
| c_waste | drainage; dead_pot; plant_trim; waste_paper; waste_pp | 对各实际废物流记录measurement_mode、表计平面和互斥事件ID。final_dispatch_direct模式使用最终排放口实际质量/体积，扣实际外部容器皮重时仅扣一次，绝不再扣内部回用、蒸发或库存。pre_diversion_reconstruction模式仅对分流前实测原量，按同一控制体减已证实实际回用分流及其他不外排部分一次；不能同时录最终排口量。只有前者缺席且分流/存量证据完整才允许该重建。直接和重建模式每来源/期间互斥；质量流使用实际整载体kg，体积流保持匹配处理单位或以同状态实测整载体密度换算。排放、水组分和供水账分别核对；未知不置零。归属后按最终参考量归一一次，匹配处理背景，不再乘已含组成/路线份额。 | cp_water; cp_residual; measurement_mode; measurement_plane; pre_diversion_quantity; reuse_diversion; direct_final_discharge; whole_carrier_density | Q_stream | ghg-product-standard |
| c_fresh_water | water | 同一边界和期间在两种互斥模式中选一种。external_meter：W_m3 = 归属外部市政表计新水投入，不扣内部回用。application_reconstruction：W_m3 = 记录总施用体积 - 按水源识别的内部回用施用体积 + 实测新水净储量增加 + 实测施用前新水损失。仅在本重建模式扣回用一次，不从外部投入水表再扣。独立实测非浇水新水用途纳入一次。来源/库存/溢漏未对账时阻止完成，不推定为零。不得合计两种模式。D_m3为独立实测实际排水，W_m3不等同D_m3。 直接或重建得到的总源量尚未分配至流卡。按原来源/表计/事件拆成互斥植物用水、其他非清洁用水和清洁水，所有份额核对至总表。water卡的W_m3只含植物及其他非清洁部分；清洁部分仅在split_cleaning_water记kg=其实际m3*实测供水密度。共享事件实测全受益归属只作一次，已归属部分不再分配。混合用途未知部分保留待决，不能复制到两卡或删除；同来源用m3和kg表示不构成互不重叠。 | cp_water; method; external_meter; application_volumes; internal_reuse; storage_change; spills; water_source_id; parent_meter_id; row_owner; plant_water_m3; other_nonclean_water_m3; cleaning_water_m3; actual_supply_density | W_m3 | ghg-product-standard |
| c_aggregate_cp_cohort | loss_plant | 实物平衡：期初+收货+顾客实物退回+调入=毛顾客实物交付+退供应商+场内损失+其他实物外转+调出+期末。POS撤销不进入实物平衡。消除内部转移后，闭合原植物批群须满足唯一收货植物数=N+L+F+S，期末=0，且每个原身份仅一个最终状态。N来自最终保留验收，不是毛交付减财务撤销。B=L+F。重复实物退回/重售不新增原生产。 迟到退回同时修订原批群去向计数及全部后续实际分子活动；保留实际期间及当期池受益者对账，不创建重复新批群。 最终归属量按c_normalize每参考流归一化一次。 | cp_cohort; N | q_i | ghg-product-standard |
| c_aggregate_cp_cohort_sale | retail_service | 实物平衡：期初+收货+顾客实物退回+调入=毛顾客实物交付+退供应商+场内损失+其他实物外转+调出+期末。POS撤销不进入实物平衡。消除内部转移后，闭合原植物批群须满足唯一收货植物数=N+L+F+S，期末=0，且每个原身份仅一个最终状态。N来自最终保留验收，不是毛交付减财务撤销。B=L+F。重复实物退回/重售不新增原生产。 迟到退回同时修订原批群去向计数及全部后续实际分子活动；保留实际期间及当期池受益者对账，不创建重复新批群。 最终归属量按c_normalize每参考流归一化一次。 | cp_cohort_sale; N | q_i | ghg-product-standard |
| c_aggregate_cp_energy | electricity | 直接kWh加共享池乘面积小时份额，扣除服务重复电力，再换算一次 依a_shared纳入空置和零驱动时段并对账完整公共池，不采用理论空容量份额。 最终归属量按c_normalize每参考流归一化一次。 | cp_energy; N | q_i | ghg-product-standard |
| c_aggregate_cp_water | water | 仅按c_fresh_water确定W_m3；外部供水表总量不扣回用。D_m3按实际排放独立汇总。对账外部投入、回用环路、储量、植物/基质滞留、蒸发、溢漏及排水，不将W等同D，也不把未知项作零。 最终归属量按c_normalize每参考流归一化一次。 | cp_water; N | q_i | ghg-product-standard |
| c_aggregate_cp_water_residual | drainage | 仅按c_fresh_water确定W_m3；外部供水表总量不扣回用。D_m3按实际排放独立汇总。对账外部投入、回用环路、储量、植物/基质滞留、蒸发、溢漏及排水，不将W等同D，也不把未知项作零。 最终归属量按c_normalize每参考流归一化一次。 | cp_water_residual; N | q_i | ghg-product-standard |
| c_aggregate_cp_assets | premises; rack; watering_can | premises仅为保留的m2*a场地占用服务：实测面积时间仅按c_shared归属一次，不得对premises套用货架/水壶制造质量或寿命期质量份额。货架和水壶制造质量及其独立实测完整资产退役，仅采用a_asset_ledger下各自持久寿命期受益份额。按既有台账过账差额；本协议汇总与卡公式描述同一次分配，不是第二次相乘。维修仍为记录维修周期内独立实际事件。保留质量/处理身份以及全部空置/零驱动规则。 最终归属量按c_normalize每参考流归一化一次。 | cp_assets; N | q_i | ghg-product-standard |
| c_aggregate_cp_assets_residual | rack_retirement; can_retirement | premises仅为保留的m2*a场地占用服务：实测面积时间仅按c_shared归属一次，不得对premises套用货架/水壶制造质量或寿命期质量份额。货架和水壶制造质量及其独立实测完整资产退役，仅采用a_asset_ledger下各自持久寿命期受益份额。按既有台账过账差额；本协议汇总与卡公式描述同一次分配，不是第二次相乘。维修仍为记录维修周期内独立实际事件。保留质量/处理身份以及全部空置/零驱动规则。 最终归属量按c_normalize每参考流归一化一次。 | cp_assets_residual; N | q_i | ghg-product-standard |
| c_aggregate_cp_checkout | checkout | 汇总含失败的归属秒数；除以3600；N归一化前核对全部用户 依a_shared纳入空置和零驱动时段并对账完整公共池，不采用理论空容量份额。 最终归属量按c_normalize每参考流归一化一次。 | cp_checkout; N | q_i | ghg-product-standard |
| c_aggregate_cp_packaging | kraft_wrap; pp_sleeve; paper_tag | 期初+购入-未开封退回-期末；直接领用归属SKU；植物背景已含附带物不再作新购 最终归属量按c_normalize每参考流归一化一次。 | cp_packaging; N | q_i | ghg-product-standard |
| c_aggregate_cp_cleaning | cleaning | 清洁卡只计外购人工h：逐事件对实测人工按全部受益清洁面积次归属一次，然后仅除N一次。实物按cp_split_support及c_split_quantity独立计量；不再计完整清洁包。 | cp_cleaning; N | q_i | ghg-product-standard |
| c_aggregate_cp_residual | dead_pot; plant_trim; waste_paper; waste_pp; waste_tag | 各实物流计一次；每转移单连接处理和运输一次；继续销售/使用材料是转移库存，不自动作为废物 最终归属量按c_normalize每参考流归一化一次。 | cp_residual; N | q_i | ghg-product-standard |
| c_split_quantity | cleaning; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | 对每个准确身份r及其单一单位，先以原始来源分母D_source还原已归一来源q_source，得到x_raw=q_source*D_source；已是原始量则不再还原。按split_attribution仅作一次尚未完成的归属，按来源ID/事件/版本去重，撤销旧整包和旧历史版本。合计互斥原始量为X_r；q_r=X_r/N，只除最终参考分母一次。人工只计实测外购h，不计原工单数/面积为人工量；自营工时仅核对。资产数量、物料kg、电力kWh、车辆vehicle*km及载体kg分别计算，禁止跨属性相加或用人工工时乘已实测物理量。未知量/身份/背景阻止完整性。 | X_r; D_source; q_source; N; cp_split_labour_residual; cp_split_support | q_r |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_identity | all inventory rows | 声明可用完整数据集前须明确具体供应/接收方/流身份、状态、属性及单位。未绑定身份保留显式记录；不得作零或虚构UUID。 | 直读记录、关联背景边界及身份检查 |
| dq_conditions | holding; residual | 检查虫害、修剪、加湿、电供暖、浇水和包装等条件操作。缺席须有日志/检查；选定路线外操作发生时，补充适用方法前禁止完成。 | 设备/操作登记及未发生记录 |
| dq_missing | all inventory rows | 表计、寿命、库存闭合、接收方身份或背景覆盖缺失属于未解决数据需求，不是零。披露不确定性、代表性及纠正行动；重大交换未解决时不得发布完整足迹。 | 缺口登记、完整性审查及纠正日志 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | retail_service | 要求声明同质SKU及全部参考限定信息、正N、闭合批群平衡和退货窗口关闭；最终服务量必须为1 Item(s)。 | ghg-product-standard |
| v_loss | loss_plant | 将唯一原植物按N+L+F+S对账，实物移动与财务事件分开，L与实际废物分开。要求F最终接收方/去向及含入店运输的接收gate背景证据；F不自动成为整盆废物。检查重复退回/重售及下游背景中的生产重复或遗漏。 | ghg-product-standard |
| v_cards | all inventory rows | 每个选定交换须保留过程、方向、类型、状态、单位、数量、协议及实际条件发生情况。完成数据集前将新增实际材料/废物流逐一记录为独立交换，不得隐藏于集合名称。 | ghg-product-standard |
| v_double | all inventory rows | 检查服务背景公用工程、固定与移动资产、育苗附带物、整盆组分、废物运输/处理及归一化重复计入。不得假定碳或回收信用。 | ghg-product-standard |
| v_quality | all inventory rows | 要求校准、库存/公用工程对账、季节覆盖、完整分配分母、接收方证据及有依据背景边界。分别报告未知身份、未闭合批群和缺席路线；重大范围未解决阻止完整结果。 | ghg-product-standard |
| v_asset_ledger | rack; watering_can; rack_retirement; can_retirement | 检查持久实物资产身份、跨全部期间/全部受益台账、累计份额<=1、最终退役闭合=1、寿命修订差额过账、更换id及无第二次c_shared乘数。重开批群活动调整须同时核对旧数据集版本及实际活动期间公共池。 | ghg-product-standard |
| split_completeness | all inventory rows | 核查每条准确身份和单一参考属性、全部实际工单组成、互斥计量、旧整包撤销、无重复来源/设备终端、全受益历史归属及最终分母一次归一。来源未验证、额外真实交换未建卡、数量未知或只写“合同包含”均不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分零售服务前景数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 与相同SKU最终售出植物的接收gate背景及后续顾客使用组合，保留损失核算边界 |
| excluded_use | 独立植物全生命周期足迹、全CPC62112覆盖、跨SKU/等级/批群或排除路线比较、方法批准 |
| required_metadata | 物种/品种；SKU；植物尺寸/健康等级；盆材质/容积；基质；接收gate；商店/渠道；批群/季节；暂存日数；浇水方法；温控方式；交付验收；退货窗口；损失背景边界；包装；分配驱动量 |
| required_quality_disclosure | 批群闭合、N/L/F/S/B、损失背景耦合、参考配置、条件路线登记、公用工程/服务重叠、分配、不确定性和未绑定身份 |
| update_trigger | SKU/物种/盆器、服务gate/退货政策、温控路线、浇水/包装、供应/接收方、资产、损失去向或重大数据质量变化 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc62112 | official_guidance | UNSD CPC 3.0 subclass 62112 — https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62112 | 官方较宽贸易服务范围；本PCR有意仅覆盖盆栽观赏活植物 |
| isu-houseplant-care | extension_guidance | Iowa State University Extension and Outreach, How to Care for Houseplants — https://yardandgarden.extension.iastate.edu/how-to/how-care-houseplants | 定性养护过程筛查：需水取决于条件/物种/季节，及排水、光照和温度；不采用数值剂量或通用养护限值 |
| ghg-product-standard | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–9 — https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 功能/参考流定义、透明部分边界及过程拆分/分配。本零售服务边界/驱动量是由声明采集支持的PCR操作选择，不声称整个标准合规。 |
