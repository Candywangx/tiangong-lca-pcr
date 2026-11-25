---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-articles-of-clothing-articles-of-fur-and-aba3e1ef
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 全新白色棉针织T恤店内零售服务

## 1. 范围与适用性

本候选方法针对一个partial服装部门增量服务：从商店合格收货，经手动挂展、顾客重复试衣、结账，到一个实际同质全新白色细针织圆领棉T恤SKU/尺码/收货BOM的最终合格携走。一个同配置数据集不代表CPC62133全部服装。路线不改造成衣；以下覆盖专用电力、实际清洁、包装、完整可复用部门资产、失败商品责任及条件性零售商货车路线。公共建筑/暖通/IT/安防模块为具有固定方法的强制补全义务，不能默认零。每实际新增材料、维修、处理步骤或排放在完整前须有具体中英卡及协议。本方法不声称当前实际供应商数量、未绑定行的Tiangong身份、认证或完整标准符合。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-articles-of-clothing-articles-of-fur-and-aba3e1ef |
| classification_refs | CPC3.0:62133; narrower |
| covered_products | 仅同SKU/尺码全新白色棉细针织T恤部门服务 |
| excluded_products | 毛皮/人造毛皮；其他服装/配饰；成功销售商品生产；排除处理及补全前公共模块 |
| representative_product | 全新白色棉针织T恤店内零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 非专门到店商店；收货→手动挂展/补货→试衣/挂回→POS→合格携走 |
| market_state | 完整全新干燥可售成衣，记录实际调湿/标签；不是实测质量默认值 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一件特定全新白色棉针织T恤的到店零售服务 |
| How much | 截止日一个最终有效合格接受的唯一原始成衣；N为更正最终去重计数 |
| How well | 同实际SKU/尺码、完整全新/未改BOM、合格交付状态及标签正确；重复试衣非另一输出 |
| How long or cycle | 申报收货至最终裁定池及关联更正；记录实际持续时间，无默认 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一件特定全新白色棉针织T恤的到店零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际场址及时期; SKU尺码颜色面料构造; 完整成衣/辅料/标签/收货包装BOM及批次; 实际调湿净质量计量; 收货门及供应商背景范围; 接受及退货截止日; 成衣事件/来源ID; 实物计数与S/F/T/O责任; N及更正版本; 实际清洁配方及水/废液状态; 全部资产型号/暴露/寿命; 实际包装及残余接收方; 条件发生证据; partial补全矩阵; 未绑定身份 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_basis | retail_service; failed_background; rack; hanger; mirror; pos; luminaire; mop; supplier_return; internal_transfer; failed_retention; cleaner_container | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 计每个定义的完整对象/服务；N仅计合格服务。成衣计数不确定其质量；同批调湿成衣/标签及包装质量须独立实测。 |
| mass_state | failed_garment; water; cleaner; effluent; paper_bag; receipt; hangtag; corrugated_waste; paper_waste; sweepings; rack_waste; hanger_waste; mirror_waste; pos_waste; luminaire_waste; mop_waste; receipt_waste; bag_waste; cleaner_container_waste | 质量 | kg | 按申报含湿/组成/温度测实际完整载体/产品净kg；计数转kg须同批实测单件质量。面料g/m2不是整衣kg。体积换算须实际密度及状态。 |
| energy_basis | electricity | 净热值, 低位热值 | MJ | 1kWh=3.6MJ；原始使用点kWh归属后换算一次。 |
| one_denominator | all inventory rows |  |  | 所有行均每参考流；采用可归属原始池分子除N一次。投入分子单位可不同于计数参考单位。整个N=0无归一化结果。 |
| selected_freight_identity | truck_loaded | 货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | 所选公路货运身份采用官方货物运输属性及单位。1kg*km=0.001t*km；保留声明的原数量/归属模式，仅换算一次。实际车型、货物条件及供应阶段仍为独立适用门，不能假定背景或另乘载货份额。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 记录商店收货门接受的完整同SKU/尺码全新可售成衣 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC62133较窄子集；官方叶含282组、2832类及2833类 |
| recursive_input_rule | 不递归零售服务；仅一个同门点同质失败商品背景 |
| upstream_dataset_requirement | 同门点兼容完整成衣/收货包装/入境供应；本模块B_f与下游B_s互斥 |
| disclosure | partial增量部门范围；明确公共模块、原始/归一化基准、身份/活动/供应商缺口及更正 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope | all | 本候选模块覆盖非专门到店商店内一个实际同质全新白色圆领棉细针织T恤SKU、尺码及未改变的收货BOM；可行标本为厂家Original T0610820白色。面料标签不是完整成衣/包装BOM：记录缝线、领/品牌/洗护标签、印花/整理、吊牌和实际收货包装。厂家面料克重不是成衣净质量。毛皮、人造毛皮、其他服装/配饰、旧衣、线上配送、裁剪、改衣、印花、洗涤、蒸汽及整烫均在固定路线外。cp_completion要求明确发生/未发生证据；若发生任何排除处理或情况未知，未作明确中英原子卡/协议/背景扩展前不得称数据集完整。 | un-cpc-62133; fotl-original-t |
| gate | garment | 起点为有记录的商店收货门，随后检查/计数/称量、手动移动/补货、挂展、试衣/重新挂回、结账及顾客携走。合格接受要求SKU/尺码正确、成衣完整全新可售且无不可接受缺陷/污损、所需原始标签完整及完成买方自用交付，并在申报截止日裁定全部后续接受撤销。拒收、重复试衣和恢复同一可售状态消耗资源但不增加服务。顾客个人出行及最终合格接受后的成衣使用/处置仍在边界外。 | ghg-product-2011 |
| goods_responsibility | garment | 零售服务排除成功成衣生产/收货包装/入境运输B_s，但纳入同一门点的最终零售商负责失败商品背景B_f。calc_goods把每件原始成衣背景仅一次归于成功S、零售商失败F、继续供应商/内部转移T和未决开放O，与实物载体去向分账。退货库存保留来源ID；重售不新建生产。失败成衣外留须有接收方/状态及继续责任，不自动成为零售商废物交换。供应商退回不抹除背景或给予信用。 | ghg-product-2011 |
| partial_completion | all | 这是部门增量模块，不是完整商店LCA。已知排除的公共模块为建筑壳体/场地工程/固定布线、公共暖通和一般/安防照明、共享IT/支付网络/安防、公共卫生间/清洁、员工出行及公共搬运/运输资产。cp_completion和calc_completion对每项规定明确原始采集、责任、驱动、寿命及汇总。每项实际公共公用工程/材料/资产/废物/排放须有具名原子扩展及自身属性/单位和协议，或具体未发生证据；未知不是零。形成补全的零售加商品结果前必须提供公共模块负担和成功商品桥接B_s/N。 | jrc-retail-2013; ghg-product-2011 |
| carriers | all | 完整成衣/设备及真实混合清扫物/废液载体保持为可计量完整交换，不得机械重复其内部材料。成衣供应背景中的原包装、零售商添加袋/小票/吊牌、保留原标签、已移除吊牌和实际终端废物使用唯一来源组件ID及互斥范围。保留衣架为可复用资产；随售转出的衣架须单独计量实际转移及剩余寿命责任，不得对同一暴露同时计资产份额和新整件。 | ghg-product-2011 |
| air | clean | cp_completion筛查实际绒屑/清洁剂释放、溢漏及制冷。清扫物或污水中捕集绒屑不再作为另一基本空气输出；室内来源不是外部环境转移。实际物种排放须具名物质/接收介质卡及实测最终外排平衡、储存变化、捕集和载体输出；不得默认零、通用粉尘因子或无法解释的负输出。 | jrc-retail-2013 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| garment | 成衣接收、试衣、接受及保管 | required | 申报路线；每事件特定卡须发生/未发生证据 | delivery | retail_service |
| energy | 部门照明与结账电力 | required | 申报路线；每事件特定卡须发生/未发生证据 | support | per reference flow |
| clean | 部门和试衣区域清洁 | required | 申报路线；每事件特定卡须发生/未发生证据 | support | per reference flow |
| pack | 零售包装及实际纸类残余 | required | 申报路线；每事件特定卡须发生/未发生证据 | support | per reference flow |
| assets | 部门完整可复用资产与退役 | required | 申报路线；每事件特定卡须发生/未发生证据 | support | per reference flow |
| route | 条件性收货后零售商控制货车路线 | conditional | 申报路线；每事件特定卡须发生/未发生证据 | support | per reference flow |

### 过程：成衣接收、试衣、接受及保管（`garment`）

#### 输入

##### 产品流

###### 一件完整特定白色棉针织T恤生产并供应至商店收货门的服务（`failed_background`）

一个同SKU完整供应服务包含实际成衣、有证据的收货包装及至同一门点的入境运输。这是未绑定的同质供应服务，不能以棉纤维替代。成功商品背景B_s在本增量模块外；原始母件背景沿全部后代仅归属一次。

- 选定流：一件完整特定白色棉针织T恤生产并供应至商店收货门的服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：B_f/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：ghg-product-2011

#### 输出

##### 产品流

###### 一件特定全新白色棉针织T恤的到店零售服务（`retail_service`）

仅逐件可识别、完整全新且规格未改变、最终被顾客合格接受的成衣计入。重复试衣、财务调整和内部移动不增加服务。

- 选定流：一件特定全新白色棉针织T恤的到店零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：ghg-product-2011

###### 实际退回供应商的完整特定白色棉针织T恤（`supplier_return`）

仅实物保管交接，记录原始成衣ID、实际缺陷/标签/包装状态、接收方及继续背景责任。不产生额外服务、不计负背景信用、不自动判废。超出本卡完整对象的已拆开/破损/缺件状态须先作自身具体扩展方可完整。

- 选定流：实际退回供应商的完整特定白色棉针织T恤
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：T_supplier_phys/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：ghg-product-2011

###### 实际内部转往零售商其他库存地点的完整特定白色棉针织T恤（`internal_transfer`）

仅实物保管交接，记录原始成衣ID、实际缺陷/标签/包装状态、接收方及继续背景责任。不产生额外服务、不计负背景信用、不自动判废。超出本卡完整对象的已拆开/破损/缺件状态须先作自身具体扩展方可完整。

- 选定流：实际内部转往零售商其他库存地点的完整特定白色棉针织T恤
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：T_internal_phys/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：ghg-product-2011

###### 未获合格接受而由外部接收方保留的缺陷完整特定白色棉针织T恤（`failed_retention`）

仅实物保管交接，记录原始成衣ID、实际缺陷/标签/包装状态、接收方及继续背景责任。不产生额外服务、不计负背景信用、不自动判废。超出本卡完整对象的已拆开/破损/缺件状态须先作自身具体扩展方可完整。

- 选定流：未获合格接受而由外部接收方保留的缺陷完整特定白色棉针织T恤
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_external_phys/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：ghg-product-2011

##### 废物流

###### 保留原始缝制标签的废弃完整白色棉针织T恤（`failed_garment`）

仅实际发往有记录纺织废物接收方的零售商废物。记录含湿/污损、保留吊牌及所有已移除部件。顾客保留的失败品及供应商退回品不属于此废物。称量完整载体，不再加其内部纤维、线或标签。

- 选定流：保留原始缝制标签的废弃完整白色棉针织T恤
- 流属性/单位：质量 / kg
- 数量规则：D_g/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：ghg-product-2011

### 过程：部门照明与结账电力（`energy`）

#### 输入

##### 产品流

###### 交流电（`electricity`）

本模块部门/试衣照明和POS运行的使用点电力；该流未指定供应方及电压。专用电路计量或按因果共享驱动分配并与全池核对；公共暖通/一般照明属补全模块。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6*E_att/N MJ
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：jrc-retail-2013; ghg-product-2011

### 过程：部门和试衣区域清洁（`clean`）

#### 输入

##### 产品流

###### 输送至服装部门清洁点的自来饮用水（`water`）

按供应状态在实际进口点计量的清洁补水。内部回用不是另一进口，也不得从进口水表再次扣除。体积换算记录密度和温度。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_att/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_clean`
- 来源：jrc-retail-2013

###### 十二烷基硫酸钠水性地面清洁制剂（`cleaner`）

一个实际申报的十二烷基硫酸钠清洁配方，含其中水和有证据的添加物；申报供应方、CAS、浓度及批次。仅经证实使用该产品时适用该路线；清洁剂成分未知则阻断完整性。不另加其活性成分或配方水投入。

- 选定流：十二烷基硫酸钠水性地面清洁制剂
- 流属性/单位：质量 / kg
- 数量规则：C_att/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_clean`
- 来源：jrc-retail-2013

###### 特定十二烷基硫酸钠水性清洁制剂的完整一次性原装供应商容器（`cleaner_container`）

一个实际供应商/型号/批次特定的完整原装容器，含原始闭合件、标签及分配部件，记录实际材质/BOM及净质量；不预设瓶型/材质。此固定供应路线采用有证据的一次性包装，不默认可复用容器寿命。本卡仅在可证明制剂供应背景排除的确切范围添加制造/初始运输。实际制剂仍为独立kg投入。

- 选定流：特定十二烷基硫酸钠水性清洁制剂的完整一次性原装供应商容器
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：Y_container_att/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_clean`
- 来源：ghg-product-2011

#### 输出

##### 废物流

###### 含所用清洁制剂的收集服装部门地面清洁废液（`effluent`）

实际交付有记录污水管网/处理接收方的完整液体载体，含溶解清洁剂及污物。为废物交换而非基本水排放。采用直接净称量或排放体积乘同期密度；不允许由供水量反推。

- 选定流：含所用清洁制剂的收集服装部门地面清洁废液
- 流属性/单位：质量 / kg
- 数量规则：L_att/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_clean`
- 来源：jrc-retail-2013

###### 收集的服装部门地面混合清扫物（`sweepings`）

实际收集混合地面清扫物，计量完整载体质量、含湿、来源份额及接收方。来自可识别成衣的绒屑独立核对成衣质量损失，但不再作为空气粉尘排放。外带污物不计丢失成衣质量。不重复输出内部组件废物。

- 选定流：收集的服装部门地面混合清扫物
- 流属性/单位：质量 / kg
- 数量规则：D_sweepings/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_clean`
- 来源：ghg-product-2011

###### 保留实际制剂残液及原始组件的排空原装供应商清洁制剂容器（`cleaner_container_waste`）

一个实际完整终端载体：已识别原装一次性供应商容器、实际保留闭合件/标签/分配部件及实测剩余清洁制剂。记录确切剩余组成、残液数量、状态、接收方及收集/处理合同。仅扣外部收集袋称完整载体净质量，不再扣其保留残液或再次作为废液/清洁剂废物输出。已移除原组件及冲洗液为互斥实际载体，完整前须有自身具体卡。

- 选定流：保留实际制剂残液及原始组件的排空原装供应商清洁制剂容器
- 流属性/单位：质量 / kg
- 数量规则：D_cleaner_container_att/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_clean`
- 来源：ghg-product-2011

### 过程：零售包装及实际纸类残余（`pack`）

#### 输入

##### 产品流

###### 未涂布牛皮纸顾客手提袋（`paper_bag`）

具有实际原始规格、实测单件净质量及库存/领用账的同质组件。记录是否零售商添加、顾客保留、退回或废弃；已在B_s/B_f中的原供应商组件不再购买计入。

- 选定流：未涂布牛皮纸顾客手提袋
- 流属性/单位：质量 / kg
- 数量规则：X_paper_bag/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：ghg-product-2011

###### 热敏纸结账小票（`receipt`）

具有实际原始规格、实测单件净质量及库存/领用账的同质组件。记录是否零售商添加、顾客保留、退回或废弃；已在B_s/B_f中的原供应商组件不再购买计入。

- 选定流：热敏纸结账小票
- 流属性/单位：质量 / kg
- 数量规则：X_receipt/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：ghg-product-2011

###### 带一体扣片的单片自锁纸板零售价格吊牌（`hangtag`）

具有实际原始规格、实测单件净质量及库存/领用账的同质组件。记录是否零售商添加、顾客保留、退回或废弃；已在B_s/B_f中的原供应商组件不再购买计入。 固定吊牌为单片纸板，通过自身一体自锁扣片/槽连接，无另加绳、塑料扣或胶粘剂。须核实实际构造；不同固定方式在完整前须有自身具名材料/组件卡及实测质量。

- 选定流：带一体扣片的单片自锁纸板零售价格吊牌
- 流属性/单位：质量 / kg
- 数量规则：X_hangtag/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：ghg-product-2011

#### 输出

##### 废物流

###### 废弃干燥瓦楞纸板收货箱（`corrugated_waste`）

仅实际取出商品后出运的干燥瓦楞收货箱，记录批次净kg、含湿/污染、来源ID及接收方。已在商品背景的原包装制造不再添加；本行仅加实际零售商处理。

- 选定流：废弃干燥瓦楞纸板收货箱
- 流属性/单位：质量 / kg
- 数量规则：D_corrugated_waste/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：ghg-product-2011

###### 废弃单片自锁纸板零售价格吊牌（`paper_waste`）

仅实际移除/废弃的一体扣片单片纸板价格吊牌；记录批次净kg及接收方。吊牌不属于移除后称量的成衣载体。热敏小票及牛皮纸袋为不同废物卡，不隐含在此载体。

- 选定流：废弃单片自锁纸板零售价格吊牌
- 流属性/单位：质量 / kg
- 数量规则：D_paper_waste/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：ghg-product-2011

###### 废弃热敏纸结账小票（`receipt_waste`）

实际由零售商出运的损坏、退回或未用但废弃的特定载体，采用calc_dispatch批次净质量。排除最终接受后顾客保留的小票/袋；同一废弃投入不得输出两次。记录确切涂层/组成/含湿及接收方；不同实物载体须具体扩展。

- 选定流：废弃热敏纸结账小票
- 流属性/单位：质量 / kg
- 数量规则：D_receipt_waste/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：ghg-product-2011

###### 废弃未涂布牛皮纸顾客手提袋（`bag_waste`）

实际由零售商出运的损坏、退回或未用但废弃的特定载体，采用calc_dispatch批次净质量。排除最终接受后顾客保留的小票/袋；同一废弃投入不得输出两次。记录确切涂层/组成/含湿及接收方；不同实物载体须具体扩展。

- 选定流：废弃未涂布牛皮纸顾客手提袋
- 流属性/单位：质量 / kg
- 数量规则：D_bag_waste/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：ghg-product-2011

### 过程：部门完整可复用资产与退役（`assets`）

#### 输入

##### 产品流

###### 完整独立式粉末涂层钢制成衣架（`rack`）

一个完整实物型号/配置，其供应商/BOM证明原始供应组件及安装/运输范围。寿命账覆盖全部历史/当前/未来受益者及闲置暴露。运行、实际后续更换及终端处理另计；不再把原始部件作为另一资产添加。

- 选定流：完整独立式粉末涂层钢制成衣架
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_rack/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 完整可重复使用聚丙烯衣架（`hanger`）

一个完整实物型号/配置，其供应商/BOM证明原始供应组件及安装/运输范围。寿命账覆盖全部历史/当前/未来受益者及闲置暴露。运行、实际后续更换及终端处理另计；不再把原始部件作为另一资产添加。

- 选定流：完整可重复使用聚丙烯衣架
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_hanger/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 完整带框独立式玻璃试衣镜（`mirror`）

一个完整实物型号/配置，其供应商/BOM证明原始供应组件及安装/运输范围。寿命账覆盖全部历史/当前/未来受益者及闲置暴露。运行、实际后续更换及终端处理另计；不再把原始部件作为另一资产添加。

- 选定流：完整带框独立式玻璃试衣镜
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_mirror/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 带原始外设的完整电子销售点终端（`pos`）

一个完整实物型号/配置，其供应商/BOM证明原始供应组件及安装/运输范围。寿命账覆盖全部历史/当前/未来受益者及闲置暴露。运行、实际后续更换及终端处理另计；不再把原始部件作为另一资产添加。

- 选定流：带原始外设的完整电子销售点终端
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_pos/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 带原始驱动器的完整部门LED灯具（`luminaire`）

一个完整实物型号/配置，其供应商/BOM证明原始供应组件及安装/运输范围。寿命账覆盖全部历史/当前/未来受益者及闲置暴露。运行、实际后续更换及终端处理另计；不再把原始部件作为另一资产添加。

- 选定流：带原始驱动器的完整部门LED灯具
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_luminaire/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 带原始柄及拖头的完整可重复使用手动地拖（`mop`）

一个完整实物型号/配置，其供应商/BOM证明原始供应组件及安装/运输范围。寿命账覆盖全部历史/当前/未来受益者及闲置暴露。运行、实际后续更换及终端处理另计；不再把原始部件作为另一资产添加。

- 选定流：带原始柄及拖头的完整可重复使用手动地拖
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_mop/N Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

#### 输出

##### 废物流

###### 记录移除部件后特定钢制成衣架的剩余终端载体（`rack_waste`）

任何有证据部件移除后的实际完整终端载体。直接净称量已排除移除件；BOM重建为互斥替代。核对实际/预测供应商处理并于实际退役更新；不得再乘制造份额或重复计内部部件废物。

- 选定流：记录移除部件后特定钢制成衣架的剩余终端载体
- 流属性/单位：质量 / kg
- 数量规则：Z_rack/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 记录移除部件后特定聚丙烯衣架的剩余终端载体（`hanger_waste`）

任何有证据部件移除后的实际完整终端载体。直接净称量已排除移除件；BOM重建为互斥替代。核对实际/预测供应商处理并于实际退役更新；不得再乘制造份额或重复计内部部件废物。

- 选定流：记录移除部件后特定聚丙烯衣架的剩余终端载体
- 流属性/单位：质量 / kg
- 数量规则：Z_hanger/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 记录移除部件后特定带框试衣镜的剩余终端载体（`mirror_waste`）

任何有证据部件移除后的实际完整终端载体。直接净称量已排除移除件；BOM重建为互斥替代。核对实际/预测供应商处理并于实际退役更新；不得再乘制造份额或重复计内部部件废物。

- 选定流：记录移除部件后特定带框试衣镜的剩余终端载体
- 流属性/单位：质量 / kg
- 数量规则：Z_mirror/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 记录移除部件后特定销售点设备的剩余终端载体（`pos_waste`）

任何有证据部件移除后的实际完整终端载体。直接净称量已排除移除件；BOM重建为互斥替代。核对实际/预测供应商处理并于实际退役更新；不得再乘制造份额或重复计内部部件废物。

- 选定流：记录移除部件后特定销售点设备的剩余终端载体
- 流属性/单位：质量 / kg
- 数量规则：Z_pos/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 记录移除部件后特定LED灯具的剩余终端载体（`luminaire_waste`）

任何有证据部件移除后的实际完整终端载体。直接净称量已排除移除件；BOM重建为互斥替代。核对实际/预测供应商处理并于实际退役更新；不得再乘制造份额或重复计内部部件废物。

- 选定流：记录移除部件后特定LED灯具的剩余终端载体
- 流属性/单位：质量 / kg
- 数量规则：Z_luminaire/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 记录移除部件后特定手动地拖的剩余终端载体（`mop_waste`）

任何有证据部件移除后的实际完整终端载体。直接净称量已排除移除件；BOM重建为互斥替代。核对实际/预测供应商处理并于实际退役更新；不得再乘制造份额或重复计内部部件废物。

- 选定流：记录移除部件后特定手动地拖的剩余终端载体
- 流属性/单位：质量 / kg
- 数量规则：Z_mop/N kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

### 过程：条件性收货后零售商控制货车路线（`route`）

#### 输入

##### 产品流

###### 封闭式柴油刚性货车载货公路货运服务（`truck_loaded`）

条件性零售商控制的收货后供应商退回或废物转运路线。记录实际载货段质量与距离、合同及所含车辆制造/运行/空驶。成衣背景已含入境运输及废物处理供应商已含运输不计此行。

所选身份表示公路货运活动，不代表实际车辆或LCI供应方。保留本卡货物/车型、原质量基准及完整互斥载货阶段要求。官方单位组支持1t*km=1000kg*km；需要时仅换算一次，不再乘已完成运单/责任份额。空驶与有动力怠速仍保留独立实际车公里/车小时身份。

- 选定流：货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则：K_att/N t*km
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_route`
- 来源：ghg-product-2011

###### 封闭式柴油刚性货车空驶运行服务（`truck_empty`）

实际空驶虽载重吨公里为零，仍有正车辆距离。仅在载货服务供应商未包含时使用兼容车辆公里服务，含实际运行和申报车辆资产范围。覆盖未知阻断完整性。

- 选定流：封闭式柴油刚性货车空驶运行服务
- 流属性/单位：长度 / km
- 数量规则：J_att/N km
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_route`
- 来源：ghg-product-2011

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| pool | all | 事先申报一个场址/SKU/尺码/BOM/路线配置、起止日期、期初库存、最终退货裁定截止日及修订计划。失败、停业/闲置及零销量时段保留在同配置池。整个N=0池仍报告原始总量且不可归一化。迟到退货及接受撤销按实际事件日期替换原池N、背景归属及全部受影响原始分子，不再分配到新池。接受有效的纯退款/折扣不改变N。 | ghg-product-2011 |
| shared | all | 优先专用计量/细分。共享电力用实测设备kW×时间含待机；清洁用实际处理面积×频次；架/衣架用占位数×时间；试衣镜/试衣用观察试衣占用×时间；POS用实测任务活动时间及有证据预留待机容量。保留闲置/停业容量，按正且已知的容量小时分到全部实际预留受益者。分配原始量之和等于完整母表总量；仅子表确在母表内时才扣除。收入、默认比例及零驱动不能替代。 | ghg-product-2011 |
| asset_lifetime | assets | 使用calc_asset覆盖资产全寿命及每个受益者，包括历史分配、剩余暴露、闲置和终端余量。制造/初始安装/初始交付为一个明确定义投入范围；运行、实际后续维修及退役互斥。寿命改变以带符号更正替换历史分配版本，不能重新开始制造。整体资产转移时未分配余量随下一所有者转移；累计份额不得超过1。终端余量须向实际寿命受益者分配一次。 | ghg-product-2011 |
| no_credit | all | 不对成衣、吊牌、纸板、清扫物或回收设备赋予共产品替代或避免原生生产信用。记录实际处理及转移责任。加入废物处理时不扣除失败商品生产B_f；单独后果型研究的信用不得进入本归因模块。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | garment | 成衣保管；接受；背景；废物 | 实测前景账及支持记录 | original_id; event_id; SKU; size; supplier_lot; complete_BOM; 标签及吊牌状态; 实际净质量; 质量状态; 收货; 期初; 期末; 毛交付; 顾客实物退回; 供应商交接; 内部转移; 接收方; 事件日期; 接受状态; 缺陷; 试衣事件; 失败外留; 实际废物毛质量; 容器皮重; 含湿; B_s; B_f; B_t; B_open; 收货背景范围; 入境路线; 退货截止日; 更正版本; final_valid_acceptance; ordered_event_history; goods_to_residue_event; goods_to_residue_parent_count; closing_goods; source_garment_kg; signed_environmental_moisture_kg; removed_source_component_kg; captured_source_lint_kg; opening_residue; generated_source_portions; measured_external_added_material; actual_dispatch; closing_residue; T_supplier_phys; T_internal_phys; F_external_phys; opening_goods_kg; receipts_kg; physical_returns_kg; internal_in_kg; gross_handoffs_kg; supplier_handoffs_kg; internal_out_kg; goods_to_residue_source_kg; closing_goods_kg; investigated_mass_difference | 收货、每次试衣/补货、结账、退回及最终去向扫描唯一成衣/来源批次ID；计完整件数，并以校准秤称量可追溯同批样本净质量（不含包装），记录实际含湿/调湿及抽样不确定性。供应商BOM/收据独立识别标签/辅料/包装组件；将POS与实物计数及顾客接受/退回记录审计。称量出运废物并记录接收清单及范围。 在产生时记录商品转残余母件、实际来源kg及时标；转移前期末商品含隔离品，待出运残余库存另盘点。以校准配对状态/称量记录测移除来源组件/绒屑及实际水分/环境质量变化；记录观察带符号kg及不确定性，不用默认干物修正。先按原ID完整有序历史确定最终有效接受，再去重计数。 汇总义务：calc_goods、calc_transfers和calc_dispatch；原始计数/kg及S/F/T/O分账；归属分子除N一次 | Item(s); kg | 每次收货/事件；两端及截止日库存盘点；每次迟到更正 | 完整申报池加关联历史来源及池后退货裁定 | 一个实际商店/SKU/尺码/BOM；全部失败及零销量批次 | 每参考流 | 带时标扫描；秤校准/皮重/抽样记录；厂家及实际供应商BOM；POS/接受审计；签署接收/退回责任；计数及kg库存核对；未知缺口阻断完整性 |
| cp_energy | energy | 电力 | 实测前景账及支持记录 | meter_id; 电表边界; 起始kWh; 结束kWh; 时标; 专用或共享; 设备kW; 运行小时; 待机小时; 电路重叠; 目标驱动; 全受益者驱动; 停电; 校准; N | 在电路边界读取封印校准母表/子表；用校准功率记录仪记录照明/试衣/POS负荷及待机。将每个子表映射到母表布线；预留容量/时间观察含停业小时。设备负荷覆盖不完整须用实测剩余量核对，不得仅铭牌外推。 汇总义务：calc_energy；原始驱动份额之和核对母表，再MJ/N一次 | kWh; kW; h | 连续记录或每电表周期、边界读数及停电事件 | 全池含闲置/停业时段 | 部门照明/POS电路及完整共享母表受益者 | 每参考流 | 电表校准；布线/电路图；周期账单；记录仪校准；驱动观察；不把缺测周期记零 |
| cp_clean | clean | 水；清洁剂；废液；清扫物 | 实测前景账及支持记录 | event_id; 位置; 处理面积; 频次; 全受益者; 进口模式; 进口kg或m3; rho_water; 温度; 清洁剂供应商; 组成CAS; 浓度; 制剂期初采购期末; 废液模式; 排放kg或m3; rho_effluent; 废液组成; 废液温度; 蒸发; 储存变化; 布夹带液; 外来固体; 清扫物毛皮重; 接收方; source_ID; N; container_id; supplier; batch; exact_model; actual_BOM; single_use_evidence; net_container_mass; closure_label_dispensing_state; formulation_source_kg; used_kg; spill_kg; rinsate_kg; terminal_retained_kg; unused_closing_or_returned_kg; provider_manufacturing_inclusion; included_transport_scope; source_beneficiaries; remaining_stock_responsibility; Y_container_att; dispatch_gross; outside_sack_tare; D_cleaner_container_att; generation; opening_terminal_stock; closing_terminal_stock; recipient; treatment_scope; uncertainty; N; original_formulation_source_kg; paired_weighing; actual_rinsate_composition; source_component_ledger; source_fraction_uncertainty; new_rinse_water_kg; foreign_dirt_kg; source_destination_reclassification; whole_actual_rinsate_kg | 在部门边界计量每清洁批：校准进水/排放表或净称量、实际状态密度样、按供应状态称量制剂并保留供应商规格。记录实际处理表面、溢漏及可复用拖把回收。出运计量实际完整废液及清扫物；独立核对进口/制剂/库存/载体液。不得由供水推排水。 检查拍照每实际制剂容器/闭合/标签/分配型号及供应商批次/BOM；使用/期末/出运以校准秤称净制剂及完整空/带残液载体。保留完整载体出运净质量，同时以可追溯配对空容器或分析物料平衡测保留残液。明确记录供应商制造/运输包含范围、来源受益者分配、实际残液/冲洗液分开、封存终端库存盘点及签署收集/处理合同。不由制剂kg推断容器材质/形状或未发生。 明确采用calc_clean_container处理容器计数/制造覆盖及原制剂来源份额。逐原容器以Item(s)计数；原制剂冲洗来源kg由配对实际称量/组成或已核来源组件记录取得，排除新冲洗水及外来污物。使用/溢漏/冲洗/保留/未用来源份额按原来源ID互斥，后续去向改变仅重分类，不重复计已使用制剂。实际整冲洗液另作直接计量废液一次，不再乘来源份额。 汇总义务：calc_clean及calc_dispatch，逐行原始状态单位与归属后除N一次 | kg; m3; kg/m3; m2; h; Item(s) | 每次清洁/溢漏及排放；池边界库存 | 池内全部部门/试衣清洁，含未售成衣尝试 | 仅部门及实际共享清洁受益者；公共设施用cp_completion | 每参考流 | 秤/表/密度校准；制剂批次/安全数据表组成；清洁日志；接收清单；每项条件交换的未发生证据或未解决未知 |
| cp_pack | pack | 袋；小票；吊牌；纸箱及纸废物 | 实测前景账及支持记录 | source_component_id; SKU; 材质; 尺寸; 涂层; 组成; 供应商; 批次; 期初; 采购; 回收退回; 未用期末; 已印期末; 转移; 原供应或零售添加; 同批单件质量; 毛重; 皮重; 保留或移除; 含湿; 接收方; 处理运输范围; N; opening_unprinted_net_paper; new_net_paper; returned_unused_net_paper; closing_unprinted_net_paper; unused_returns_out; unused_transfers_out; printed_WIP_source_ID; printed_WIP_net_paper; original_printing_energy; final_beneficiary_pool; signed_revision; actual_core_present; core_material; core_net_mass; core_original_BOM; core_provider_inclusion; core_final_carrier; core_recipient | 将采购/领用/库存记录追至每组件来源ID及实际成衣。用校准秤称同批组件或实测库存净质量；记录打印/复用历史及全受益者。依接收记录称实际废物批次及含湿/污染。厂家无塑料/零废物声明不替代实际收货BOM或残余计量。 分开盘点未打印未用纸卷与已打印WIP，称净纸并排除实际纸芯/包装。按WIP来源ID跨期追踪原小票纸及打印电力责任；期初WIP不重复原纸投入或打印电力。检查实际供应商纸卷BOM并称每纸芯/管/载体；不假定有芯或无芯。存在纸芯时绑定实际组成及来源背景包含范围，制造责任计一次（若供应商纸背景未含则另具名原子产品卡），并按calc_dispatch量化实际完整出运载体/净质量/接收方；其他材质/状态在完整前须实际具名卡。 汇总义务：calc_material/calc_dispatch；组件归属一次；实测kg/N | kg; Item(s) | 每次采购/领用/退回/废物批次；期初期末盘点 | 进入池的全部库存历史及其退回 | 按组件ID映射的部门及公共包装受益者 | 每参考流 | 供应商组成及BOM；校准批次质量样；库存核对；原始与零售添加去重；出运清单 |
| cp_assets | assets | 整资产；终端载体；维修事件 | 实测前景账及支持记录 | asset_id; 实际型号; 完整原BOM; 购置; 原安装交付范围; 运行排除; 全历史受益者暴露; 旧分配; 剩余预计暴露; 闲置暴露; 驱动单位; 版本; 当前受益者暴露; 转移; 实际或预测退役; 终端模式; 直接净质量; 重建BOM质量; 移除部件; f_life; 接收方; 供应商范围; 实际维修事件; N | 检查识别每实际架/衣架/镜/POS/灯/拖把型号、原部件及供应商范围。观察使用及闲置期间件位/面积/占用/预留暴露，保留寿命历史及剩余寿命估计证据。实际移除后称完整终端设备净质量或互斥采用经核BOM重建。记录每后续维修/更换事件、真实部件、购置及移除载体用于具名卡扩展。 汇总义务：calc_asset及calc_asset_terminal；版本更正核对完整负担；除N一次 | Item(s); kg; position*h; m2*h; capacity*h | 购置；代表性连续暴露日志；每维修/转移/退役；每寿命修订 | 完整历史寿命加剩余及最终余量，不仅本销售期 | 跨所有者/场址/时期的全部受益者含预留闲置容量 | 每参考流 | 资产账/BOM/供应商收据；校准秤；寿命估计依据及观察日志；旧分配版本；退役清单；份额总和<=1；历史未知阻断完整分配 |
| cp_route | route | 载货及空驶货车段 | 实测前景账及支持记录 | trip_id; leg_id; 承运方; 车型; 段质量; 载货距离; 空驶距离; GPS; 实际怠速小时; 实际燃料; 容量; 全受益者预留容量; 供应商运行资产空驶怠速范围; source_ID; 接收方; N loaded_attribution_mode；target_gross_kg；vehicle_total_gross_kg；target_payload_kg；all_other_payload_kg；provider_reference_unit；provider_attribution_level | 读取收货后供应商退回及残余的实际批次质量、GPS/里程段日志、发动机怠速/燃料及签署承运范围。匹配实际货车状态及容量；核验入境/背景及废物供应商排除。未发生须有路线/合同审计，不得以零销量判断。 汇总义务：calc_route；原始K_att与J_att除N一次；不重复供应商已含段 计算前将每个称重读数标为全车或目标货物，核对同一完整货单、供应方基准及实际路段。已归属目标的kg/t*km不再乘第二份额。 | kg; km; t*km; h | 每路线段/怠速时段及承运合同修订 | 完整池加关联更正行程和空驶回程 | 每实际路线受益者及预留容量 | 每参考流 | 称量/GPS校准；日志/收据；车辆制造、燃料、空驶及怠速签署范围；缺覆盖仍未解决 |
| cp_completion | garment | 公共模块补全；路线适用性及排放筛查 | 实测前景账及支持记录 | module_id; original_source_ID; 原始单位; 原始总量; 实际表边界; 实际资产BOM; 供应商范围; 全受益者驱动; 预留闲置; 历史寿命; N; 外归一化值; 原分母; 原版本; 接收状态; 实际处理发生; 蒸汽整烫改衣印洗证据; 绒屑清洁剂物种; 室内外捕集储存载体; 数量缺口; 绑定缺口; 更正版本; species_measurement_group; species_measurement_group; species_measurement_group; 全部物种/回路/瓶储/出厂/补充/回收/含气转移量; 绝对或差分或已扣空白速率; 捕集; 来源载体输出; 室内储存; 实测状态; 全历史及剩余受益者; module_id; actual_building_BOM; historical_area_h; remaining_area_h; complete_device_ID; capacity_h; carrier_meter; equipment_load; standby; actual_fuel_kg; composition; NCV; heat_MJ; treated_area; cleaning_frequency; employee_journey_id; travel_mode; vehicle_occupancy; passenger_km; idle_hours; employee_working_reserved_hours; all_beneficiaries; provider_scope; N; species; circuit_id; mode_A_or_B; opening_charge; closing_charge; opening_bottle_store; closing_bottle_store; factory_charge; makeup_import; contained_device_import_export; recovered_import_export; internal_recovery_reuse; capture_destruction_export; direct_exterior_release; actual_release_pathway; uncertainty; provider_boundary; HVAC_load_standby; all_beneficiaries; lifetime_exposures; N; species; particle_fraction; physical_state; indoor_volume; exterior_medium; exclusive_measurement_mode; inlet_kg_h; outlet_kg_h; differential_kg_h; blank_corrected_kg_h; duration_h; concentration; actual_airflow; wet_dry_basis; temperature; pressure; laboratory_conversion; matched_background_control; already_removed_background; source_attribution; internal_generation; capture; source_carrier_export; indoor_storage_change; uncertainty; N; module_id; actual_building_BOM; historical_area_h; remaining_area_h; complete_device_ID; capacity_h; carrier_meter; equipment_load; standby; actual_fuel_kg; composition; NCV; heat_MJ; treated_area; cleaning_frequency; employee_journey_id; travel_mode; vehicle_occupancy; passenger_km; idle_hours; employee_working_reserved_hours; all_beneficiaries; provider_scope; N; species; circuit_id; exclusive_mode_A_or_B; circuit_open; circuit_close; bottle_open; bottle_close; air_open; air_close; capture_open; capture_close; I_factory_newdevice; I_other_contained_device; I_external_cylinder; I_external_recovered; original_source_ID; internal_makeup_recovery_reuse; contained_device_export; recovered_export; captured_export; other_disjoint_species_export; transformed_species; direct_exterior_flux; actual_exterior_path; uncertainty; residual; opening_external_source_stock; external_purchases; closing_external_source_stock; unused_external_returns; transfers_to_other_beneficiaries; all_beneficiary_HVAC_load_standby; asset_lifetime; N; species; particle_fraction; state; indoor_air_control_volume; exterior_medium; exclusive_sublot_mode; absolute_inlet_kg_h; absolute_outlet_kg_h; differential_kg_h; blank_corrected_kg_h; already_removed_inlet_background; duration_h; concentration; actual_airflow; wet_dry_basis; temperature; pressure; laboratory_conversion; independent_control; source_attribution; internal_source_generation; contained_species_import; captured_export; other_disjoint_contained_export; transformed_species; A_open; A_close; K_open; K_close; source_carrier_portions; uncertainty; N | 走查收货/展示/试衣/POS/清洁并检查设备、电表、维修及供应商合同；对每路线/过程保留时标发生/未发生证据。每公共模块按calc_completion固定方法采原始记录及全受益者驱动；核验完整边界与共享资产历史。适用时独立抽样/审计实际外排物种路径；记录未知而不声称未发生。 强制原始字段扩展恰为calc_common_services、calc_common_refrigerant及calc_exterior_flux所列Inputs。逐实际回路/物种在进出及池边界按校准称量/维修回收日志、出厂充注文件及实物库存盘点采集；直接释放/通量用校准仪器、匹配进出口/对照抽样时段、实验室物种/状态换算及实际时长。保留全部互斥模式标记及已校正状态。逐旅程计员工方式/载客/GPS及员工小时受益日志。记录及全部公共模块事件覆盖每时段和全部寿命受益者；缺数量/供应商覆盖仍不完整。 采用配对边界室内空气物种抽样及校准捕集库存/净载体称量取得A/K期初期末，回路/瓶储秤库存盘点及来源ID进出日志。捕集内部转移及后续载体出口保留同物种/来源ID，不得都作外部扣项。直接/差分/已扣空白仪器证书注明已施加校正。外源制冷剂库存含未用退回及受益者转移；核验无新设备出厂/进口重复。 汇总义务：calc_completion恢复原始分母并按确切来源ID汇总兼容互斥分子后除N一次 | original row-specific units; Item(s); kg; MJ; h | 首次场址路线审计、全池时段/事件及每次变化 | 完整池及N所需全部原始来源/资产历史 | 全部已知商店公共模块及实际未覆盖路线增项 | 每参考流 | 签署补全矩阵；原始表/BOM/合同/版本；抽样/校准记录；定量不确定性；完整声明前具名中英卡/协议及实际匹配UUID证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_goods | garment | N = count_distinct(截止日具有一个有效最终合格顾客接受的original_id)。先解决完整有序接受/撤销/实物退回/重售历史；撤销后重售且最终接受有效的一件贡献1而非2，已最终确定N不再重复扣撤销。实物商品计数：opening_goods + receipts + customer_physical_returns + internal_in = gross_customer_handoffs + supplier_physical_handoffs + internal_out + goods_to_residue_parent_count + closing_goods + investigated_count_difference。closing_goods包括仍在商品保管中的全部可售、拒收/损坏及隔离商品，不含已在有记录goods_to_residue事件转入残余者。独立来源成衣kg平衡加入实测带符号环境/水分吸收或损失，并扣除转入残余、移除组件及捕集绒屑的来源成衣份额；外来污物/清洁剂/容器整体不是成衣kg。残余库存另账：opening_residue + generated_source_portions + measured_external_added_material = actual_dispatch + closing_residue + investigated_difference。产生事件同一时标从商品移除并进入残余库存；出运不再次移除商品。B_total=B_s+B_f+B_t+B_open按每原始收货门背景仅归属一次，与这些实物去向独立；failed_background=B_f/N，成功商品下游背景=B_s/N。 明确来源成衣质量式：opening_goods_kg + receipts_kg + physical_returns_kg + internal_in_kg + signed_environmental_moisture_kg = gross_handoffs_kg + supplier_handoffs_kg + internal_out_kg + goods_to_residue_source_kg + removed_source_component_kg + captured_source_lint_kg + closing_goods_kg + investigated_mass_difference。每来源份额仅入右侧一项；已仍在转移完整载体内的移除组件不得再加。 | original_id; event_id; SKU; size; BOM; event_time; opening; received; returns; transfers_in; gross_handovers; supplier_handoffs; transfers_out; waste_dispatch; closing; discrepancy; acceptance_status; revocations; recipient; responsibility; B_total; B_s; B_f; B_t; B_open; N; final_valid_acceptance; ordered_event_history; goods_to_residue_event; goods_to_residue_parent_count; closing_goods; source_garment_kg; signed_environmental_moisture_kg; removed_source_component_kg; captured_source_lint_kg; opening_residue; generated_source_portions; measured_external_added_material; actual_dispatch; closing_residue; opening_goods_kg; receipts_kg; physical_returns_kg; internal_in_kg; signed_environmental_moisture_kg; gross_handoffs_kg; supplier_handoffs_kg; internal_out_kg; goods_to_residue_source_kg; removed_source_component_kg; captured_source_lint_kg; closing_goods_kg; investigated_mass_difference | N及原始责任账；每参考流一个服务 | ghg-product-2011 |
| calc_energy | electricity | E_att = sum(E_dedicated + E_shared*d_target/sum(d_all))；E为原始kWh，驱动覆盖全部实际受益者及待机/闲置预留容量；目标份额之和等于各原始共享母表总量。电力=3.6*E_att/N MJ。不得从另一个表扣除本不包含的独立部门电路。 | E_dedicated; E_shared; meter_boundary; d_target; d_all; kW; operating_hours; standby_hours; calibration; N | 每参考流电力MJ | ghg-product-2011 |
| calc_material | paper_bag; receipt; hangtag | 仅paper_bag和hangtag，X_r = opening_r + purchases_r + recovered_returns_r - closing_r - unused_supplier_returns_r - transfers_out_r，采用组件净kg；与领用/损坏/保留记录核对。购买计数按同批实测单件净质量换算，不用名义面料克重。已打印中间品在以下独立小票WIP账中追踪。分配到全部受益者后，行数量=X_r_att/N。 对receipt，投入特指未打印热敏纸净纸，不含实际纸芯/管/外包装。未用卷平衡：R_new = opening_unprinted_net_paper + new_net_paper + returned_unused_net_paper - closing_unprinted_net_paper - unused_returns_out - unused_transfers_out。已打印小票/中间库存不是未用纸卷，不在该平衡中扣除。已打印WIP另设计数/净纸/来源ID及内含打印电力账。来源纸和打印电力仅一次归最终受益池；新打印WIP把尚未分配原责任留给后期，期初WIP领用带入同一原纸/电力责任，不新消耗纸或新打印电力。打印废损/失败仍归同配置池。当前池份额从这些原始批次历史及带符号更正取得，不将原始纸卷消耗归一化后重复添加。 | component_id; batch; opening_r; purchases_r; recovered_returns_r; closing_r; unused_supplier_returns_r; transfers_out_r; unit_mass; attribution_driver; N; opening_unprinted_net_paper; new_net_paper; returned_unused_net_paper; closing_unprinted_net_paper; unused_returns_out; unused_transfers_out; R_new; printed_WIP_source_ID; printed_WIP_net_paper; original_printing_energy; final_beneficiary_pool; signed_revision; core_BOM; core_net_mass; core_provider_inclusion | 每参考流X_r_att/N kg | ghg-product-2011 |
| calc_clean | water; cleaner; effluent; sweepings | W_att = sum(实际进口水kg × 清洁归属份额一次)，采用实测kg或进口m3*rho_water(T)；C_att为实际消耗制剂kg归属一次。L_att采用直接排放净称量或实际排放m3*rho_effluent(T,composition)，二者互斥；直接计量液体不再扣蒸发/储存/清洁剂。进口水、制剂内水、蒸发、布上夹带液、外来固体及储存为独立供水平衡检查，不是排放第二次更正。进口不再扣计量回用。清扫物采用calc_dispatch。 | water_mode; imported_kg; imported_m3; rho_water; water_temperature; formulation_consumption; composition; concentration; cleaning_area; cleaning_frequency; all_beneficiaries; discharge_mode; discharge_kg; discharge_m3; rho_effluent; effluent_temperature; storage_change; evaporation; captured_liquid; foreign_solids; N | 每参考流W_att/N；C_att/N；L_att/N kg | ghg-product-2011 |
| calc_dispatch | failed_garment; corrugated_waste; paper_waste; sweepings; receipt_waste; bag_waste | D_r = sum(实际出运毛质量 - 实际批次容器皮重)，按原始来源ID及受益者归属一次；行=D_r_att/N。产生量+期初废库存-期末废库存是独立出运核对，不得从实测出运再扣。记录实际交接时含湿及污染状态与接收方处理边界。 | source_id; consignment_id; dispatch_date; gross_kg; tare_kg; moisture; contamination; recipient; treatment_scope; generated_kg; opening_waste_kg; closing_waste_kg; attribution; N | 每参考流D_r_att/N kg | ghg-product-2011 |
| calc_asset | rack; hanger; mirror; pos; luminaire; mop | 对资产a，H_a = sum(全部历史受益者暴露)+剩余预计全部受益者暴露（含闲置）；当前F_a,b = e_a,b/H_a。架/衣架暴露为件位×h，灯具为预留面积×h，镜/拖把/POS为观察占用×h加预留闲置。每个实际资产版本对所有受益者使用同一固定驱动。制造投入=sum(F_a,b)/N完整Item(s)。H改变时用e/H_new替换各旧e/H_old并给出带符号差额，不再加入整资产。退役时采用实际总H_final并按实际受益者暴露分配余量1-sum(F_history)，更正旧版本。库存计数验证购置/退役，不是第二次消耗资产投入。 退役时按各历史受益者/池实际暴露除H_final重算全部份额，以带符号差额替换所有旧版本，并在完整实际寿命受益者间核对总和为1。仅该替换完成后，按同一全部实际寿命受益者的实际暴露分配任何舍入/未分配余量，绝不只给当前期；历史暴露未知则不能闭合。 | asset_id; model; original_BOM; installation_scope; acquisition_date; historical_e; historical_F; remaining_expected_e; idle_e; beneficiary_id; current_e; H_old; H_new; version; retirement_date; H_final; N | 每参考流F_a/N完整Item(s) | ghg-product-2011 |
| calc_asset_terminal | rack_waste; hanger_waste; mirror_waste; pos_waste; luminaire_waste; mop_waste | Z_a = terminal_net_mass_a * f_life_a,b；f_life_a,b为本池占同一已更正全受益者资产寿命暴露的份额。责任份额仅乘一次，不再乘另一制造份额。移除后直接净质量与原BOM减有证据移除组件质量为互斥模式；直接净称量不得再次扣这些组件。中期预测质量/处理须明确并以实际退役证据替换。实际更换件及其制造和废弃载体在完整前须另设按事件具名原子卡；不重复原始已含部件。 | asset_id; terminal_mode; direct_net_mass; BOM_mass; removed_component_ids; removed_component_masses; f_life; beneficiary_exposures; forecast_status; recipient; treatment_scope; N | 每参考流Z_a/N kg | ghg-product-2011 |
| calc_route | truck_loaded; truck_empty | 每来源/路段选择且只选一个载货归属模式。target_consignment模式：K_att=sum(target_gross_kg/1000*actual_km)，target_gross_kg已是该目标货物实际毛载重，绝不再乘shared-load share或allocation_once。unassigned_vehicle模式：K_att=sum(vehicle_total_gross_kg/1000*actual_km*target_payload_kg/vehicle_total_gross_kg)，仅限全车未分配活动和实际质量基准兼容的t*km供应方；同段目标及其他货物毛kg合计核对全车毛kg且分母正已知。已按目标供方归属量直接保留，原始路段计算只作QA。量均先保留原始、目标归属级别和provider参考单位，不用占容积比例再缩减已经按目标kg计算的t*km；需体积容量分担的整车环境向量另用匹配实际供应方及独立原子活动卡，不当作目标kg的修正。实际空返保留未被供应方包含的vehicle*km，按全受益实际路线容量预留份额一次；静止开机保留实际闲置h及燃料，需匹配具名补齐卡，绝不以零载荷/零距离删除。原入门货物运输及处理已含相同实际路段仅一次；未知覆盖阻止完成。按最终参考分母N仅归一一次。 | leg_id; vehicle_model; loaded_mass_kg; actual_km; empty_leg_km; capacity; all_beneficiary_capacity_distance; idle_hours; fuel_logs; reserved_capacity_hours; provider_coverage; allocation_once; N; loaded_attribution_mode; target_gross_kg; vehicle_total_gross_kg; target_payload_kg; all_other_payload_kg; provider_reference_unit; provider_attribution_level | 每参考流K_att/N t*km；J_att/N km | ghg-product-2011 |
| calc_completion | all | 对每个缺失公共模块固定同一场址/SKU/池/版本及N。采集原始活动：逐载体母表含暖通/一般/安防照明；实际化学品/水/废液和固体载体；实际共享路线/燃料/怠速时间；完整建筑/IT/安防/搬运资产ID、原BOM、安装和全寿命暴露。先直接计量；共享能源/清洁/路线用指定calc_energy/calc_clean/calc_route驱动；建筑按全部历史及剩余受益者的占用+预留面积×h；共享IT/安防/搬运按预留容量×h并保留闲置，再用calc_asset及calc_asset_terminal。单独物种/介质排放按实测终端通量并核对捕集/储存/载体。已有归一化外部结果v_r按有证据原分母D_old恢复原始量v_r*D_old，再按因果驱动归本池一次，仅对相同兼容流/属性/单位/边界的原始分子逐卡求和，并按原始来源ID去重。全部模块统一到N后除一次。不得kg加MJ或归一化值加原始总量。外部分母、范围、原ID或数量不可得则总量仍不完整，不是零。 | module_id; source_ID; site; SKU; pool; version; N; raw_activity; all_beneficiary_drivers; asset_history; lifetime; idle_hours; provider_scope; v_r; D_old; flow_identity; property; unit; boundary; duplicate_IDs | 逐行兼容补全原始分子；除N一次 | ghg-product-2011 |
| calc_transfers | supplier_return; internal_transfer; failed_retention | 按原成衣/事件/接收方ID计实际实物交接T_supplier_phys、T_internal_phys、F_external_phys；各原始计数除N报告。这不是B_t/B_f责任数量：背景重新归属不产生实物流。无实物退回的接受撤销改变N及S/F归属，但不产生第二次对外交接。退回后重售成衣保留原ID及生产历史。 | original_id; event_id; recipient_id; handoff_time; garment_state; T_supplier_phys; T_internal_phys; F_external_phys; acceptance_revocation; physical_return; ownership; N | 每参考流实物转移Item(s) | ghg-product-2011 |
| calc_common_services | all | 公共建筑制造/安装及终端载体采用完整实际建筑/BOM，排除单独清单的部门资产，并按全部历史+剩余占用/预留面积×h使用calc_asset。公共暖通/一般/安防照明按实际逐载体电表和实测设备负荷/待机采用calc_energy；实际燃料按实测组成/低位热值的净kg、购买热按实测MJ各具名原子卡。公共水/清洁按实际表面积×频次及calc_clean直接完整废液质量。共享IT/安防/支付设备用实际完整设备型号、预留容量×h寿命calc_asset，运行另表，维修事件互斥。员工出行逐实际方式、车辆/载客、实测客公里及怠速日志；每员工旅程依记录工作+预留闲置小时归全部实际受益工作一次后除N。实际共享搬运/车辆资产采用容量×h寿命及事件燃料/怠速，不以吨公里0处理。增加任何行前核验供应商车辆/运行/怠速/制造/处理范围。仅列模块名不构成补全。 | module_id; actual_building_BOM; historical_area_h; remaining_area_h; complete_device_ID; capacity_h; carrier_meter; equipment_load; standby; actual_fuel_kg; composition; NCV; heat_MJ; treated_area; cleaning_frequency; employee_journey_id; travel_mode; vehicle_occupancy; passenger_km; idle_hours; employee_working_reserved_hours; all_beneficiaries; provider_scope; N | 公共模块原始量归属一次，兼容行汇总后除N | ghg-product-2011 |
| calc_common_refrigerant | all | 定义覆盖实际回路、瓶储、室内空气和捕集库存的完整物种控制体：S_open = circuit_open+bottle_open+air_open+capture_open，S_close同理。外界进口为互斥I_factory_newdevice、I_other_contained_device（不含同一新设备出厂充注）、I_external_cylinder和I_external_recovered；每来源ID仅一次。已在S_open的原出厂充注不是本期进口。回路、瓶储、捕集间补充/回收/再用为内部转移，不是另一外界投入或出口。回收气体出口、出口设备保留含气、捕集载体出口及转化物种互斥；回收气体出口不再作为设备含气扣除。选择互斥外排模式：A经校准直接实测外界物种通量，以完整物种库存平衡独立核对；B经验证闭合平衡release = S_open+sum(disjoint imports)-S_close-contained_device_export-recovered_export-captured_export-other_disjoint_species_export-transformed_species，任何空气排放行前须有实际外排路径且解决不确定性/余差。捕集为转入捕集库存的内部转移，不第二次扣除；空气/捕集期初期末须测量，不假定0。负/未解决平衡须调查并阻断完整性。外购补充产品分子为由原来源库存得出的本池实际外源制冷剂消耗/损失：opening_external_source_stock+external_purchases-closing_external_source_stock-unused_external_returns-transfers_to_other_beneficiaries，依来源ID/库存历史并向全受益者归属一次；不得用全部采购或重复添加初充制造/内部再用。外界回收/再生供应保持不同实际产品身份。完整设备背景已含出厂充注生产时不再作为另一制冷剂生产投入；其终端物种责任遵资产寿命，而实际运行补充/释放依全受益者实测暖通负荷/待机归属。 | species; circuit_id; exclusive_mode_A_or_B; circuit_open; circuit_close; bottle_open; bottle_close; air_open; air_close; capture_open; capture_close; I_factory_newdevice; I_other_contained_device; I_external_cylinder; I_external_recovered; original_source_ID; internal_makeup_recovery_reuse; contained_device_export; recovered_export; captured_export; other_disjoint_species_export; transformed_species; direct_exterior_flux; actual_exterior_path; uncertainty; residual; opening_external_source_stock; external_purchases; closing_external_source_stock; unused_external_returns; transfers_to_other_beneficiaries; all_beneficiary_HVAC_load_standby; asset_lifetime; N | 物种特定补充产品投入/空气释放/含气转移原始kg，按互斥寿命或运行归属 | ghg-product-2011 |
| calc_exterior_flux | all | 逐实际绒屑粒级/清洁剂挥发物种固定物质/状态、室内空气A加已捕集材料物种库存K为联合控制体，及实际外界接收介质。互斥实测子批模式为匹配入口/出口绝对物种kg/h（净=出口-入口）、已差分物种kg/h或已扣空白物种kg/h。已差分/扣空白值直接用，不再扣其已移除入口/背景。按实际速率×时长积分；浓度/流量换算须匹配实际干湿、T、P及实验室物种换算。仅模式尚未校正时才额外扣同期独立对照一次。完整物种核对：internal_source_generation + inlet + contained_species_import = outlet + captured_export + other_disjoint_contained_export + transformed_species + (A_close-A_open) + (K_close-K_open)。室内空气转入K的捕集为内部转移，不是右侧另一扣项；捕集物后续输出仅作captured_export一次，不再扣捕集。逐输出废液/清扫物/滤材载体记录来源份额，不另作基本物种输出。外来污物/水不是成衣来源kg。真实成衣/清洁贡献由来源特定匹配观察确定，不用通风排放因子。室内来源不自动为环境释放。带符号负值或未闭结果连同不确定性须调查并阻断完整性，不夹零/不给信用。实际吸收须单独经审匹配投入身份。 | species; particle_fraction; state; indoor_air_control_volume; exterior_medium; exclusive_sublot_mode; absolute_inlet_kg_h; absolute_outlet_kg_h; differential_kg_h; blank_corrected_kg_h; already_removed_inlet_background; duration_h; concentration; actual_airflow; wet_dry_basis; temperature; pressure; laboratory_conversion; independent_control; source_attribution; internal_source_generation; contained_species_import; captured_export; other_disjoint_contained_export; transformed_species; A_open; A_close; K_open; K_close; source_carrier_portions; uncertainty; N | 经审物种特定外排原始kg及独立来源成衣质量核对，除N一次 | ghg-product-2011 |
| calc_clean_container | cleaner; cleaner_container; cleaner_container_waste; effluent | 固定实际制剂供应商/批次及一个确切原装一次性容器型号/BOM；按供应商收据及实物检查核验实际一次性状态、闭合/标签/分配组件、材质及净质量。未知包装不是未发生；实际可归还/复用路线须既定全寿命资产方法及具体中英容器/转移卡，不沿用本一次性假设。逐原容器j记录供应制剂净量、未用库存/退回、实际分配使用、溢漏、冲洗及终端容器保留制剂。以实测不确定性及互斥来源ID核对formulation_source_kg = used_kg + spill_kg + rinsate_kg + terminal_retained_kg + unused_closing_or_returned_kg。按来源制剂kg向全部实际制剂受益者及剩余未用库存归每j制造责任一次；失败/溢漏/残液保留在负责的同配置池而不抹除。Y_container_att仅汇总供应商排除范围的可归属完整容器制造等价件数；有记录供应商背景已含制造时本卡不再加制造，但不删除实际终端处理。供应商包含范围未知则阻断数量/背景补全。D_cleaner_container_att按calc_dispatch实际完整净出运载体kg及来源受益者归属一次；产生及待运库存独立核对。终端保留制剂不再计入effluent。仅实际另排冲洗液进入直接计量废液，其来源份额不再保留于终端容器。不得从直接称量完整容器或废液再扣残液；不把帽/标签内含物机械重复输出为废物。 formulation_source_kg平衡中的used_kg、spill_kg、rinsate_kg、terminal_retained_kg及unused_closing_or_returned_kg各项，均仅为来自同一原始供应制剂的kg，不是整批稀释冲洗液或新加水/外来污物。冲洗液中的原制剂来源kg由实际配对称量/组成测量或可验证的原来源组件分账取得，保留不确定性及来源ID。各来源份额为互斥最终责任去向：已归used_kg的同一原份额后来洗出时，不再加为rinsate_kg；需要时仅重分类原来源账去向而不增加来源总量。实际完整冲洗液载体（含新加水及实际污物）仅进入直接计量effluent一次，其实测完整kg不再乘来源组成比例。 | container_id; supplier; batch; exact_model; actual_BOM; single_use_evidence; net_container_mass; closure_label_dispensing_state; formulation_source_kg; used_kg; spill_kg; rinsate_kg; terminal_retained_kg; unused_closing_or_returned_kg; provider_manufacturing_inclusion; included_transport_scope; source_beneficiaries; remaining_stock_responsibility; Y_container_att; dispatch_gross; outside_sack_tare; D_cleaner_container_att; generation; opening_terminal_stock; closing_terminal_stock; recipient; treatment_scope; uncertainty; N; original_formulation_source_kg; paired_weighing; actual_rinsate_composition; source_component_ledger; source_fraction_uncertainty; new_rinse_water_kg; foreign_dirt_kg; source_destination_reclassification; whole_actual_rinsate_kg | 仅未覆盖容器制造Item(s)/N；实际完整带残液容器废物kg/N；制剂/废液来源份额互斥 | ghg-product-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity | all | 每未绑定卡是具体候选，不是已采用Tiangong身份。以官方原响应及匹配完整性凭据绑定其确切中英名、类型/方向、状态/介质、限定信息、参考属性/单位及一个兼容背景；仅有数量不能解决身份。正式释放前须独立绑定参考服务输出。 | 原响应hash及数据集/属性/单位直读，加供应商范围及前景协议记录 |
| bilingual | all | 中英须逐对象、方向、类型、单位、公式、分母、条件未发生、责任及强制义务一致；稳定ID及数组字段对齐。新增维修/过程/公共模块行在完整前须有两语及重生成结构化输出。 | 双语行/规则/协议/计算字段审计及解析数组 |
| balance | garment | 独立解决实物计数/kg及原背景S/F/T/O。以证据调查损耗、移除标签、损坏外留及差异，不强制为零或把所有未售判废。事先固定抽样/盘点覆盖和测量不确定性；报告实际限值及校准，不用无依据容差默认值。 | 校准库存/质量账及接收/责任审计和差异解决 |
| coverage | all | 每实际条件卡有发生证据及数量，或有场址特定未发生记录。缺表、未知组成/供应商边界、未查维修/蒸汽/改衣或缺公共模块均为未解决并阻断完整性。解决前保留partial范围和原始负担；本PCR不规定数值默认。 | 签署发生/补全矩阵、数量及绑定缺口、更正版本 |
| source_limits | all | 厂家单页证明可行白色细针织棉T恤并区分面料标签与成衣质量。其无塑料、认证、零填埋及装箱数量声明不是已核批次数据、当前认证、LCA因子或实测质量。JRC识别零售能源/水/化学品/运输/废物方面；GHG指南支持明确单位/分配，但不构成对本设计选择的批准或完整标准符合。 | 实际供应商批次/BOM及前景记录；限定外部来源表述 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference | retail_service | 归一化须最终N>0且每参考流恰为1 Item(s)服务输出。核对同配置、申报池及最终接受/撤销关联。整个N=0仍为原始量且不可归一化。 | ghg-product-2011 |
| raw_once | all | 每清单分子须有原始数量、状态/单位、归属驱动且仅除N一次；外部归一化值须先按有证据D_old恢复。核验全部卡ID、真实单过程协议及计算适用ID存在；不得有孤立归一化ID或重复来源ID。 | ghg-product-2011 |
| asset_check | assets | 每实际资产历史/当前/余量份额之和<=1，并核对完整制造/安装负担及更正终端载体。带符号历史寿命更正替换旧分配；终端质量乘寿命责任一次。资产历史或供应商范围缺失阻断完整补全。 | ghg-product-2011 |
| fates | garment | 实物转移及责任数量分账；供应商退回/内部转移/失败外留不产生服务或负生产信用。拒绝重售或多个废后代重复背景。独立核对收货计数及实际质量；假设面料比例不能填平缺失成衣质量。 | ghg-product-2011 |
| completeness | all | 分别报告身份、活动、供应商及partial公共模块覆盖。候选未绑定身份或未知条件发生/数量不是零或完整。成品数据集须有全部实际具名原子卡及未发生记录、兼容背景、来源ID去重和双语结构核验；附公共补全前模块保留partial标签。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | partial_incremental_retail_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同特定成衣部门增量归因清单，明确partial范围及有记录补全桥接 |
| excluded_use | 完整成衣生命周期、全部服装/毛皮、改造/线上路线、当前认证/合规、替代信用、无公共模块的完整商店声明 |
| required_metadata | 场址/路线/SKU/尺码/全BOM/批次；实际质量状态；门点/N/池/截止日；原账及来源ID；供应商/身份绑定；partial补全矩阵及更正 |
| required_quality_disclosure | 抽样/校准/不确定性；未解决UUID/活动/供应商/公共模块；全受益者寿命/闲置及来源限制；未知不作零 |
| update_trigger | SKU/BOM/路线/配方/资产/供应商/寿命估计、退货裁定、实测状态或新来源证据改变 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62133 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62133 | 仅CPC3.0分类范围；较窄关系而非方法等同 |
| fotl-original-t | handbook | https://www.fruitoftheloom.eu/shop/ecom_PrintableSellSheet?lang=en_GB&style=0610820 | 厂家Original T0610820产品单：可行白色棉细针织圆领成衣；不将实际批次/BOM/净质量及营销声明作为计量 |
| jrc-retail-2013 | official_guidance | JRC EUR25998EN (2013), Best Environmental Management Practice in the Retail Trade Sector; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售投入产出方面及照明/清洁/运输/废物筛查；不采用基准因子/默认值 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters6,7,9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 明确功能/参考流、边界及细分/物理分配原则；详细协议/公式为PCR设计义务，不声称完整符合 |
