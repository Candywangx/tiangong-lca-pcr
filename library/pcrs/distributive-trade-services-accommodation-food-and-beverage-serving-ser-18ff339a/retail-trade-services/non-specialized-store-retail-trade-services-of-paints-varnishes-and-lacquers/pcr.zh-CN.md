---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-paints-varnishes-and-lacquers
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 非专门混合门店单件原装密闭白色水性丙烯酸内墙涂料零售服务

## 1. 范围与适用性

面向非专门混合品类门店一个实际同质工厂白色水性丙烯酸内墙涂料SKU/原装3.79 L罐型号的较窄增量零售服务PCR。sb_scope、sb_gates及sb_route_gate是强制适用性门槛。制造商规格不建立现场数量、完整LCI、安全使用或符合性结论。完整服务数据集声明前，所有支持模块须以实际源清单完成。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-paints-varnishes-and-lacquers |
| classification_refs | CPC3.0 62164；说明为group351；较窄范围提案。实际已接受边及接受决定以classifications/mappings/cpc-3.0-to-pcr.yaml及其持久ADR引用为权威 |
| covered_products | 一个白色水性丙烯酸内墙涂料SKU的密闭原装罐到店增量零售服务，实测原湿装量及包装配置 |
| excluded_products | 专门门店；group351其他商品；开启/调色/分装/振荡/泄漏涂料；配送；涂料制造或施工 |
| representative_product | F551工厂白色(01)半光水性丙烯酸树脂涂料原装名义3.79L罐；以实际供应批次及完整包装BOM为准 |
| production_route | 收货；密闭储存/陈列；电子结算/凭证；最终有效密闭验收；条件性完整退回及完整废物 |
| market_state | 完整密闭原包装内的湿态配方液体；不建立干膜服务等效 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 非专门混合门店单件原装密闭白色水性丙烯酸内墙涂料零售服务 |
| How much | 一个不同原装罐ID的一次最终有效服务；不按名义装量换算 |
| How well | 实际SKU、工厂颜色、光泽、密闭型号及批次正确；有完整状态及顾客验收证据 |
| How long or cycle | 事先声明的源池及退货观察截止，保留所有迟到源修订 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 非专门混合门店单件原装密闭白色水性丙烯酸内墙涂料零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 门店及混合品类; 实际SKU/批次; 工厂颜色/光泽/配方; 名义包装及实际湿装量; 完整原装罐BOM; 完整密封; 无调色/开启路线证据; 池窗口及最终验收标准; 源S/F/T/O; 支持型号及供应方阶段; 分母/历史版本; 不确定性及身份缺项 |

必需限定信息须在数据集元数据、过程说明或参考流备注中声明；缺项则数据集不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| mu_reference | service_output | 物品数量 | Item(s) | 使用一次最终有效不同服务；每参考流。Q_p是件数，与湿涂料实测净kg或名义L独立。 |
| mu_carrier | sealed_paint_waste; carton_waste | 质量 | kg | 使用实际完整载体批次净kg，不用名义容积、干固体或重复组件重量；cp_waste。 |
| mu_energy | electricity | 净热值, 低位热值 | MJ | 记录实际kWh并仅一次用1kWh=3.6MJ；能量为分子，服务件数为分母。 |
| split_labour_time | cleaning_service | 时间 | h | 仅计已签认的实际外购人工工时；工单数、面积及资产件数不能直接替代h。材料、能耗、工具、差旅和废物独立计量。自营工时仅作核对，不虚构外购交换；归属后仅按原最终参考分母归一一次。 |
| selected_energy_identity | split_support_electricity | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | kWh | 所选交流电身份只有一个参考能量属性。实际归属量保留本行单位；其单位组中1kWh=3.6MJ。与另一能量单位来源合并或表达参考MJ交换前仅换算一次，同一分子不得重复换算，也不能推定供应组合。 |
| selected_freight_identity | loaded_transport | 货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` | t*km | 所选公路货运身份采用官方货物运输属性及单位。1kg*km=0.001t*km；保留声明的原数量/归属模式，仅换算一次。实际车型、货物条件及供应阶段仍为独立适用门，不能假定背景或另乘载货份额。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 门店收货门的实际密闭原装涂料罐库存 |
| starting_condition_role | 增量零售服务；保留原门源谱系 |
| product_classification_scope | CPC3.0 62164的group351商品中较窄候选子范围 |
| recursive_input_rule | 仅排除成功原商品S；failed_original F及实际支持输入表征一次，sb_custody具名保管卫星输出 |
| upstream_dataset_requirement | 实际完整同门原罐、公用设施、资产、网络、清洁、纸箱及处理源清单；身份/供应方未解阻止完整使用 |
| disclosure | 源池及退货截止；排除；源责任；原始来源、历史修订、所有缺项及候选状态 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| sb_scope | all inventory rows | 仅适用有记录的非专门混合品类实体门店及一个实际SKU和原装包装型号：工厂白色水性丙烯酸分散体内墙涂料，一罐名义3.79 L密闭原装品，不在门店加色浆、稀释或振荡。F551白色(01)是真实规格锚点，不强制品牌。配方、光泽、包装或路线不同须另设源池并审查适用性。厂家100% acrylic描述成膜树脂类型，不是整桶湿配方或固含比例。记录实际批次身份与包装BOM；厂家名义重量不得代替现场数量。 | un-cpc3-62164; bm-f551-2025 |
| sb_gates | all inventory rows | 始于门店收货，终于顾客对仍密闭原装罐的最终有效验收。事先把同配置收货、储存、陈列、结算、失败、闭店及闲置期全部纳入源池p。不含顾客出行、送货到家、施工、干漆膜、消费者清洗或家庭处置。不得把混合品类非专门门店误认作品牌非独家授权。CPC说明涵盖group351；本PCR仅覆盖其中较窄的涂料子范围，不覆盖美术颜料、油墨、清漆或漆类（lacquers）。 | un-cpc3-62164 |
| sb_route_gate | all inventory rows | cp_route必须证明不存在开罐、泄漏、调色、分装、门店振荡、喷涂、溶剂清洗、燃烧、制冷剂设备、动力搬运、纸质小票、门店购物袋或顾客附加包装。电阻加热及通风可纳入电力及固定建筑资产。未经观察的条件为未知而非不存在。实际发生任何排除活动即阻断完整适用性，须独立增加并审查具体状态、物种或材料卡、原始协议、换算及双语投影；不得为密闭储存假设VOC排放因子、干膜固含换算或法规批准。 | bm-f551-2025 |
| sb_original_sources | failed_original | 服务排除成功商品源S。每个原装罐源s的q_s及完整供应方向量V_s包含实际湿涂料、完整罐体/封盖/内衬/标签/胶黏剂及到本收货门的上游运输。原源责任分为S_s+F_s+T_s+O_s=q_s；S为最终验收商品，F为通过failed_original计入的不可回收损失或失败商品，T为具名继续承担责任的接收者或内部资产，O为实际在库。确认遗失与有符号未解差额分别保留。同质完整原装罐可采用一个按件向量。若组件责任不同，应以实际分别计量的组件卡及经核供应方组件向量替代整罐输入，守恒原向量；不得按质量比例拆分环境影响。服务不含S的购入；另行声明的下游GOODS研究才可加S一次。 |  |
| sb_custody | supplier_handoff; external_retained; sealed_paint_waste | 仅supplier_handoff及external_retained是不表征的实物保管卫星；failed_original仍为表征的产品输入。供应方退货记录实际门店发出门/时间、具名供应方接收门/时间、运单及签署运输责任方。原商品源T由签收方继续承担；责任变化不得抹去退货移动。门店提供/委托退货时，按cp_transport计入从门店门到供应方签收门的互斥运输；供应方提供且已有证据纳入供应方包时，保留其源/边界/责任系统，不再重复添加。未覆盖或未知运输责任阻断完整性。外部留存但无有效验收须有实际具名接收者/状态及F/T责任，不能自动变成门店废物。实际作为废物出运的完整罐须实测完整湿载体kg并匹配已接受处理。责任转移不得创造新实物移动。 |  |
| sb_complete_support | operations; support_assets | 纳入实际本地照明/通风/电加热、结算/扫码、路由器、支付、安防及行政电力与七类完整实际支持资产型号。network_service默认仅为连接服务。只有精确服务清单、唯一连接小时分母、实际完整远端运行/电力/资本清单及源ID均有证据时，真实不可分的同合同连接小时包才可包含支付/行政/安防远端处理。否则实际远端活动分别用payment_processing_service、admin_ledger_service及security_retention_service，具备完整实际供应方清单及互斥源边界；仅本地活动须证明无远端服务。这些条件行仅在有签字证据已纳入网络包或实际不存在时才不激活，不得假设连接已覆盖。cleaning_service须有实际完整签署的水/洗涤剂/工具/运输/湿载体/处理服务清单。任何不受支持的阶段、组分、重叠或服务阻断完整服务使用。 cleaning_service现仅为外购人工h；上述完整清洁供应清单只能作拆分原始证据，必须按split_exchange_identity将实际水、配方、工具、差旅及载体等逐项展开，撤销旧整包表征。 | jrc-retail-2013 |
| sb_provider | all inventory rows | 每个背景记录对象/型号/BOM、地域、技术、原始源ID、生命周期阶段、期间及精确操作。供应方ID不同不能证明边界不重叠。运行服务包内已有电力不得再加；完整资产向量已含运输、维护或报废时不得在外部重复增加，废物合同已含收运处理亦同。供应方缺项须增加实际原子交换卡后方可完成。网络服务排除本地通电设备及其电力；cleaning_service排除门店建筑和门店表计电力。 |  |
| split_exchange_identity | all inventory rows | 每卡只允许一个准确交换身份及一个参考计量属性/单位；单位组不是第二属性，其他测量仅作换算证据。人工卡不再承接整包材料/能源/设备/废物。已列完整同质设备、原包装商品及真实混合废物可保留，但须有实际同范围背景/接收处理和完整组成，不得汇总异质物或选择项。同一原始交换只能计入一张核心卡或一个拆分来源；替换整包时撤销其全部旧表征，仅合并相同身份/属性/单位的互斥原始数量。实际额外物质、零件、燃料、制冷剂、排放及处理缺口必须具名新增双语卡和过程协议；未知不得置零或宣称完整。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 收货、保管及最终验收 | required | 所有池 | 收货、保管及最终验收 | 每参考流 |
| operations | 电力、网络及清洁支持 | required | 所有池 | 电力、网络及清洁支持 | 每参考流 |
| support_assets | 实际完整支持资产型号 | required | 所有池 | 实际完整支持资产型号 | 每参考流 |
| cartons | 原运输纸箱首次使用 | conditional | 实际核实纸箱或完整废弃载体发生；否则证明不存在 | 原运输纸箱首次使用 | 每参考流 |
| residual | 完整载体出运及处理 | conditional | 实际核实纸箱或完整废弃载体发生；否则证明不存在 | 完整载体出运及处理 | 每参考流 |
| transportation | 独立遗漏质量容量道路运输 | conditional | 实际互斥运输且未含于完整源/供应方包；否则有不存在/已含证据 | 按原责任历史计有载、空程及静止活动 | 每参考流 |
| split_support | 清洁或维护的独立物理交换 | conditional | 实际发生；须逐项证明发生或不存在 | 互斥资源、设备与废物 | service_output |

### 过程：收货、保管及最终验收 (`retail`)

#### 输入

##### 产品流

###### 原装密闭白色水性丙烯酸内墙涂料罐，实际同质3.79 L型号，失败源等效 (`failed_original`)

仅将实际完整原源计给F，包含责任未转移的遗失及从未验收商品。必须提供实际湿料净装量及完整罐BOM/向量。

- 选定流: 原装密闭白色水性丙烯酸内墙涂料罐，实际同质3.79 L型号，失败源等效
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_F/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_sales
- 来源: bm-f551-2025

#### 输出

##### 产品流

###### 非专门混合门店单件原装密闭白色水性丙烯酸内墙涂料零售服务 (`service_output`)

一个最终有效服务，不是涂料生产流或涂覆面积功能。

- 选定流: 非专门混合门店单件原装密闭白色水性丙烯酸内墙涂料零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_sales
- 来源:

###### 实际交还供应方的完整密闭原装白色水性丙烯酸涂料罐 (`supplier_handoff`)

有实际事件才存在的保管输出；签收方继续承担原源背景及运输责任。

- 选定流: 实际交还供应方的完整密闭原装白色水性丙烯酸涂料罐
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_supplier_physical/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_sales
- 来源:

###### 最终未验收且由外部留存的完整密闭原装白色水性丙烯酸涂料罐 (`external_retained`)

有实际事件才存在的未验收载体，具名接收者及F/T责任；不得自动当门店废物。

- 选定流: 最终未验收且由外部留存的完整密闭原装白色水性丙烯酸涂料罐
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_external_unaccepted_physical/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_sales
- 来源:

### 过程：电力、网络及清洁支持 (`operations`)

#### 输入

##### 产品流

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`electricity`)

历史核实的使用点产品身份；供应方、电压、地域、期间及完整源拆分仍须前景采集。含全部实际本地支持设备电力。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`；能量 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 3.6*E_p/Q_p MJ
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_operations
- 来源: jrc-retail-2013

###### 实际合同固定线路连接小时服务，仅含已证实同合同远端服务 (`network_service`)

实际签署连接及支付/行政数据服务边界，仅在明确证实时包含远端基础设施；费用不得代理LCI。

- 选定流: 实际合同固定线路连接小时服务，仅含已证实同合同远端服务
- 流属性/单位: 连接时长 / h
- 数量规则: N_net_p/Q_p h
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_operations
- 来源:

###### 湿式地面清洁人工服务 (`cleaning_service`)

仅为实际外购人工工时，不包含材料、设备生命周期、电力、差旅、废物或处理。自营人工须记录工时用于核对，但不虚构外购服务交换。其他物理交换分别计入split_support，或具名扩展并与已有卡去重。

- 选定流：湿式地面清洁人工服务
- 流属性/单位：时间 / h
- 数量规则：实测独占或一次归属的外购人工工时 / Q_p；cp_split_labour_operations。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_split_labour_operations`
- 来源：

###### 实际远端支付授权请求处理服务 (`payment_processing_service`)

条件性实际后台处理事件服务；排除本地支付终端/电力及同合同网络包已含服务。

- 选定流: 实际远端支付授权请求处理服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_pay_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_backend
- 来源:

###### 实际远端零售库存账本事件处理服务 (`admin_ledger_service`)

条件性实际同质库存账本事件处理服务，具备完整供应方运行及资本清单。

- 选定流: 实际远端零售库存账本事件处理服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_admin_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_backend
- 来源:

###### 实际远端安防摄像视频留存服务 (`security_retention_service`)

条件性实际视频留存服务；源字节及留存时间与本地摄像运行及网络连接分别计量。

- 选定流: 实际远端安防摄像视频留存服务
- 流属性/单位: 数据存储时长 / GB*h
- 数量规则: N_video_p/Q_p GB*h
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_backend
- 来源:

### 过程：实际完整支持资产型号 (`support_assets`)

#### 输入

##### 产品流

###### 实际门店建筑及固定照明/通风设施完整型号生命周期包 (`building_asset`)

一个实际完整同质型号生命周期源；暴露单位m2*h。提供实际型号/BOM/阶段清单及历史。排除表计运行和其他资产卡；内部固定设施/组件须明确源ID归属。

- 选定流: 实际门店建筑及固定照明/通风设施完整型号生命周期包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_asset_a_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_assets
- 来源:

###### 实际钢制涂料货架完整型号生命周期包 (`shelf_asset`)

一个实际完整同质型号生命周期源；暴露单位m3*h。提供实际型号/BOM/阶段清单及历史。排除表计运行和其他资产卡；内部固定设施/组件须明确源ID归属。

- 选定流: 实际钢制涂料货架完整型号生命周期包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_asset_a_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_assets
- 来源:

###### 实际收银及扫码总成完整型号生命周期包 (`checkout_asset`)

一个实际完整同质型号生命周期源；暴露单位h。提供实际型号/BOM/阶段清单及历史。排除表计运行和其他资产卡；内部固定设施/组件须明确源ID归属。

- 选定流: 实际收银及扫码总成完整型号生命周期包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_asset_a_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_assets
- 来源:

###### 实际网络路由器完整型号生命周期包 (`router_asset`)

一个实际完整同质型号生命周期源；暴露单位h。提供实际型号/BOM/阶段清单及历史。排除表计运行和其他资产卡；内部固定设施/组件须明确源ID归属。

- 选定流: 实际网络路由器完整型号生命周期包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_asset_a_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_assets
- 来源:

###### 实际支付终端完整型号生命周期包 (`payment_asset`)

一个实际完整同质型号生命周期源；暴露单位h。提供实际型号/BOM/阶段清单及历史。排除表计运行和其他资产卡；内部固定设施/组件须明确源ID归属。

- 选定流: 实际支付终端完整型号生命周期包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_asset_a_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_assets
- 来源:

###### 实际安防摄像机完整型号生命周期包 (`camera_asset`)

一个实际完整同质型号生命周期源；暴露单位h。提供实际型号/BOM/阶段清单及历史。排除表计运行和其他资产卡；内部固定设施/组件须明确源ID归属。

- 选定流: 实际安防摄像机完整型号生命周期包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_asset_a_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_assets
- 来源:

###### 实际行政计算机完整型号生命周期包 (`admin_asset`)

一个实际完整同质型号生命周期源；暴露单位h。提供实际型号/BOM/阶段清单及历史。排除表计运行和其他资产卡；内部固定设施/组件须明确源ID归属。

- 选定流: 实际行政计算机完整型号生命周期包
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_asset_a_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_assets
- 来源:

### 过程：原运输纸箱首次使用 (`cartons`)

#### 输入

##### 产品流

###### 首次使用的实际完整瓦楞运输纸箱型号 (`carton_input`)

条件性原运输纸箱源，按实测完整对象/BOM而非纯纸板kg；不纳入门店新增顾客包装。

- 选定流: 首次使用的实际完整瓦楞运输纸箱型号
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`；数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则: N_carton_p/Q_p Item(s)
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_carton
- 来源:

### 过程：完整载体出运及处理 (`residual`)

#### 输出

##### 废物流

###### 含湿态白色水性丙烯酸涂料的完整密闭原装罐，接收方已接受的处理载体 (`sealed_paint_waste`)

有实际废弃才存在的完整整罐，不是干金属罐或散装涂料；必须直接称量出运批次并具备完整接收处理。

- 选定流: 含湿态白色水性丙烯酸涂料的完整密闭原装罐，接收方已接受的处理载体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: N_waste_r_p/Q_p kg
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_waste
- 来源: bm-f551-2025

###### 已用瓦楞运输纸箱，实际完整出运载体 (`carton_waste`)

条件性实际纸箱直接出运；签收方接受其附着封口/胶黏剂状态；不得与涂料罐废物或组件出运重叠。

- 选定流: 已用瓦楞运输纸箱，实际完整出运载体
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66`；质量 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则: N_waste_r_p/Q_p kg
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_waste
- 来源: jrc-retail-2013

### 过程：独立遗漏质量容量道路运输 (`transportation`)

#### 输入

##### 产品流

###### 实际质量容量货车型号有载货运服务，互斥阶段 (`loaded_transport`)

条件性实际仅有载供应方向量；以所载源毛质量和分段距离计，不假设覆盖空程/闲置。

所选身份表示公路货运活动，不代表实际车辆或LCI供应方。保留本卡货物/车型、原质量基准及完整互斥载货阶段要求。官方单位组支持1t*km=1000kg*km；需要时仅换算一次，不再乘已完成运单/责任份额。空驶与有动力怠速仍保留独立实际车公里/车小时身份。

- 选定流: 货物运输 `4f1a3f30-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：货物运输（质量×距离） `838aaa20-0117-11db-92e3-0800200c9a66` / t*km
- 数量规则: N_loaded_p/Q_p t*km
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_transport
- 来源:

###### 实际同货车型号空程车辆距离服务，互斥阶段 (`empty_transport`)

条件性实际仅空程源；非零实际车辆距离以已知正的同kg容量预留分配。

- 选定流: 实际同货车型号空程车辆距离服务，互斥阶段
- 流属性/单位: 车辆距离 / vehicle*km
- 数量规则: N_empty_p/Q_p vehicle*km
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_transport
- 来源:

###### 实际同货车型号静止闲置车辆时长服务，互斥阶段 (`idle_transport`)

条件性实际仅静止闲置源，按匹配供应方边界含燃料/能量及资本；距离零不能删除闲置h。

- 选定流: 实际同货车型号静止闲置车辆时长服务，互斥阶段
- 流属性/单位: 车辆时长 / vehicle*h
- 数量规则: N_idle_p/Q_p vehicle*h
- 数值来源模式: 采集后计算值（`calculated_value`）
- 适用范围: 场址特定（`site_specific`）
- 归一化基准: 每参考流
- 基准类型: 参考流（`reference_flow`）
- 证据类型: 由采集计算（`calculated_from_collection`）
- 采集协议: cp_transport
- 来源:

### 过程：支持作业独立物理交换 (`split_support`)

仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

#### 输入

##### 产品流

###### 未浸渍的干燥纤维素清洁擦巾 (`split_cleaning_wipe`)

仅计实际首次使用的此组成干擦巾；不得按地面面积推定耗量，也不得把使用后湿擦巾质量当作投入。 仅激活实际已识别物理交换。本候选不证明发生、化学组成、供应范围或UUID。完整性前须核查实际工单、采购、设备和外运记录；证明不存在，或绑定此准确身份，并为其他每种实际物质、部件、燃料、制冷剂、载体或排放新增独立双语卡。不得以聚合标签替代未知交换。

- 选定流：未浸渍的干燥纤维素清洁擦巾
- 流属性/单位：质量 / kg
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：实测同质完整型号数量乘其持续寿命受益份额，仅一次 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：实测同质完整型号数量乘其持续寿命受益份额，仅一次 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
- 数量规则：此准确交换的实测独占或一次归属原始数量 / Q_p; cp_split_support.
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
| al_pool | all inventory rows | 在观察销售前定义p池：同门店、SKU/包装配置、路线及固定测量窗。保留零销售、失败、闭店和闲置时段；Q_p=0的池仍不可归一化，按事先记录的同配置合池规则保留原始源，不得删除。不按销售金额或退款分配。直接表计及源拆分优先于共用分配。 |  |
| al_drivers | electricity; cleaning_service | 每个互斥源子池c仅用固定的同量纲驱动量分配：照明/通风/电加热和场所固定待机使用占用及预留地面m2*h，含闭店预留；收银/支付活动使用实测服务秒；其闲置及固定/闭店持续子池各用预留终端h；本地路由器活动电力用实测数据bytes；其闲置及固定/闭店持续子池各用预留本地设备h；摄像及行政活动池用实测受支持任务秒，其闲置及固定/闭店持续子池各用预留设备h。禁止相加这些量纲。连接小时数量仅用calc_network。清洁用实际清洁m2而非销售。A_c_p=A_c_total*d_c_p/sum_all_b(d_c_b)，含所有实际商品及其他受益方。必须有已知正的全受益者分母并与父表闭合；非零源遇未知或零驱动量须调查及拆分，不得静默归零。 |  |
| al_assets | support_assets | 每个同质实际资产/型号/BOM/边界源a保留完整且互斥的生命周期向量V_a：制造、安装、实际修理、资产相关运输及报废；排除已有表计的运行电力。初始份额f_a_h=e_a_h/L_a采用同量纲暴露量：建筑/固定设施m2*h；货架预留货架容积m3*h；收银/支付/行政/摄像/路由器预留设备h。L为有证据的全受益方预期总寿命量；保留未使用预留及闲置服务。退役时f_final_a_h=e_actual_a_h/sum_all_h(e_actual_a_h)。每次寿命、暴露、修理或向量修订均以delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a替换每一历史受益方分子。不得把最终修理/运输全计给退役期销售，或用1-sum_old_f作为分配捷径。追踪累计份额<=1并校核最终总和=1。先按型号分卡再汇总；不得将不同设备以Item(s)相加。 |  |
| al_carton | carton_input; carton_waste | 完整实际运输纸箱型号包含纸板、接缝/胶黏剂、印刷及附着封口。供应方整包装向量与核实组件向量互斥。制造及收货运输按首次使用承担：未用纸箱及退供应方品携带未分配源；首次开启时按所装全部原罐实际毛质量分配完整源；复用纸箱不得重复制造/入场运输。未用、已用可复用、退回及丢弃纸箱分别库存。carton_waste为直接称重的出运kg，不是输入件数乘目录皮重。 |  |
| al_complete | all inventory rows | 任何必需供应方模块仅接受具有源ID、模块版本、原分母D_m、受益方账本及完整阶段覆盖的实际清单。仅当已归一化时还原原分子N_m_r=q_m_r*D_m，否则保留提供的原始N_m_r；仍未分配的受益份额仅应用一次，已有归属的模块保持不变。按实物源/事件/期间/资产/阶段去重而非供应方名称；仅交换身份/属性/单位相同时合加核心N_core_r及互斥N_m_r，再除以Q_p一次，即(N_core_r+sum_m N_m_r)/Q_p。不同kg/MJ/m2交换分别保留。包括failed_original；不得遗漏或重复F。缺实际卡、协议、源字段或阶段即阻断完整服务声明。 |  |
| al_transport | transportation | 实际独立遗漏道路运输阶段每卡仅允许一个经核质量容量受限货车/型号/供应方向量。逐有载段i、真实空程段i及静止闲置间隔j记录实际起终门、km/h及kg载荷容量预留。有载tkm L_s=sum_i actual_source_gross_kg_s_i*distance_km_i/1000。空程车辆km U_s=sum_i empty_distance_km_i*reserved_capacity_kg_s_i/sum_all_b(reserved_capacity_kg_b_i)；静止车辆h I_s=sum_j idle_h_j*reserved_capacity_kg_s_j/sum_all_b(reserved_capacity_kg_b_j)。实测各源毛载荷须与actual_payload_kg_i闭合且不超过actual_available_payload_capacity_kg；预留总和不得超过该实际同阶段可用kg容量。全部受益者预留分母须已知为正，保留零载及闲置源。不得以闲置distance0作分母、以空程tkm0删除活动或代替容积受限路线。逐阶段按calc_transport区分attribution_level：unassigned_vehicle、source_only及final_owner_pool。仅归原源数量跳过车辆分配但仍须原源owner_fraction；只有有证据已归精确最终责任者/池的数量才跳过责任份额步骤；仅有载、仅空程、仅闲置向量须有互斥证据。完整供应方向量已覆盖这些阶段时，凭实际包含证据不激活外部阶段卡。包含范围未知或不同容量限制路线阻断完整性，直至有实际审查卡。责任规则：原商品入场运输源沿原收货门S/F/T/O分配，服务承担F_s/q_s，S排除；原纸箱入场运输沿与制造相同的首次使用源份额，未用源仍在库存；资产购入/修理/报废运输属于实际资产V，按al_assets跟随每个历史f_a_h及delta_a_h，绝不能全部计给当前/退役期Q。废物/退货运输属于原事件/源池，迟到事件替换历史；供应方退货起终门/责任方依sb_custody。已归精确最终责任者数量不得再乘owner_fraction；仅归原源不等于最终服务/F/资产历史责任。已在原V或供应方包内的阶段不得另加。 |  |
| al_backend | payment_processing_service; admin_ledger_service; security_retention_service | 每个纳入服务类别使用一个同质完整实际供应方服务/向量，排除本地资产/电力及网络包已含源。支付request_id标识一次真实授权尝试，含每次真实拒绝/重试尝试；仅专属单源尝试直接获count1。多SKU共同尝试按calc_backend以实测商品行处理秒占全部实际行秒分配这一个count；仅源标签不建立整次件数。一个专属同质库存账本单记录事件可直接归属；真实多源批处理事件以完整批次实测记录行处理秒分配这一个event，不同处理类别/向量分开。专门保护一个已证实来源的视频可直接归属；共用捕获按实际保护区域及原捕获间隔一次固定源责任，含闲置/预留及全部其他受益者。后续各储存间隔留存字节继承该原捕获/源/历史映射，不按当前销售重分。供应方已归精确最终责任者/池的数量不再乘份额。未知行计时、区域映射、源分母或完整远端运行/电力/资本清单阻断完整性；额外服务须有实际具名卡/协议。 |  |
| split_attribution | cleaning_service; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | 优先直接独占计量；共用清洁事件按实际全受益清洁面积次归属每种原始物理数量，维修按实际工单支持周期全部受益方的原设备物理驱动分配。保留闲置、失败、关闭及零驱动负荷并按原规则结转，不能用销量删减。每项新工具的制造/退役使用持续资产寿命台账及历史修订差额；替换件属于其实际维修事件，不再当作原完整资产重复购置，新增替换件在事件时入账一次。已归属来源不再乘第二份额，工具终端不只归给退役期。背景已含某物理量则从旧背景中撤销该量或以本拆分替换整包，严禁两边同时表征。 |  |
## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_route | retail | service_output; failed_original; supplier_handoff; external_retained | 前景账本 | store_id; mixed_assortment_evidence; pool_id; window; SKU; batch; formulation_id; binder_type; sheen; colour; nominal_pack; seal_state; actual_BOM; receiving_net_wet_kg; actual_L; gross_kg; tare_kg; density_kg_L; temperature; actual_solids_method; excluded_activity_presence; absence_records; support_scope | 入池前及每班检查sb_route_gate，保留门店品类及路线证据。每实际批次或可追溯的同质装量/皮重代表样本用经校准秤称重并保留不确定性；供应方批次净装量记录仅在可追溯同一实际批次时可用。销售ID保持密闭；破坏性皮重/固含测试采用独立代表质检样本，排除销售ID且记录其自身去向/源。若采用实测容积，net_wet_kg=actual_L*density_kg_L，密度须匹配批次/温度；名义3.79L仅是SKU标识。固含/密度可描述可比性，但不得把服务换成干膜质量或推导释放。 | Item(s); kg; L; kg/L; degC | 入池及每班；每批次/配置变化 | 完整事先定义源池，含退货及所有历史修订 | 指定门店及全部纳入库存 | 每参考流 | 签字观察；秤校准记录；批次装量/BOM证据；路线及不存在记录 |
| cp_sales | retail | service_output; failed_original; supplier_handoff; external_retained | 前景账本 | pool_id; original_can_id; source_id; q_s; V_s; S_s; F_s; T_s; O_s; receipt_id; receipts; physical_customer_returns; all_gross_customer_handovers; supplier_handoffs; internal_transfers; event_id; actual_event_date; gross_handover; physical_return; final_valid; refusal; revocation; financial_adjustment; recipient_id; seal_state; supplier_handoff; store_dispatch_gate; store_dispatch_time; supplier_receiving_gate; supplier_receipt_time; return_consignment_id; transport_responsibility_party; signed_return_contract; N_supplier_physical; N_external_unaccepted_physical; opening_goods; closing_goods; internal_transfer; condemnation_event_id; condemnation_count; confirmed_missing_count; signed_unresolved_count; old_version; new_version; numerator_correction; Q_p | 逐保管/验收事件扫描原装罐ID；记录收货批次及有证据的同收货门整源供应方向量。申明退货观察截止后审查最终状态，并保留后续重开。执行vr_acceptance、vr_balance及sb_original_sources；不得由退款推断实物退回或由折扣推断失败。源状态替换保留原ID及历史日期。 | Item(s); kg | 逐事件；池关闭及每次迟到修订 | 完整事先定义源池，含退货及所有历史修订 | 全部实际罐源和外部接收者；不限于成功销售 | 每参考流 | 结算验收证据；接收者签字记录；盘点；供应方实际完整源清单 |
| cp_operations | operations | electricity; network_service | 前景账本 | source_id; module_version; period; meter_id; parent_meter_id; submeter_id; E_kWh_c_total; d_c_p; d_c_b; driver_unit; active_idle_fixed; reserved_area_m2; reserved_h; task_seconds; bytes; connection_id; interval_id; start_i; end_i; h_i; reserved_connection_h_i_p; reserved_connection_h_i_b; h_i_p; provider_attributed_connection_h; network_mode; same_contract_id; remote_service_list; remote_inventory_source_ids; remote_capital_scope; provider_attributed; area_m2_event; cleaned_area_event_p; cleaned_area_event_b; share_event_p; water_kg; V_discharge; rho_discharge; water_meter_id; detergent_formulation_id; detergent_origin_kg; tool_model; wet_carrier_kg; receiver; treatment_scope; cleaning_provider_inventory; network_provider_inventory; Q_p | 读经校准表计起止数及电路包含图；按al_drivers分别实测活动/闲置/固定源子池及所有受益者，含闭店预留。连接服务记录唯一连接ID及互斥真实起止间隔，含闲置/固定预留；采集同间隔全部受益者预留并仅执行calc_network一次。不得依电力活动模式重建小时。检查实际签署同合同服务清单、唯一共同连接小时分母及完整远端运行/电力/资本清单。仅网络接入/费用不证明后台覆盖；未覆盖实际远端服务执行sb_complete_support及cp_backend。逐实际清洁事件核签字清洁面积及完整供应方原清单：入口水表/实际密度、精确洗涤剂湿态原源质量、工具、互斥湿载体出运及处理。供应方方法须按互斥最终已用/已冲洗/留存/已出运容器残留去向守恒洗涤剂原源kg：中间已用到已冲洗/留存仅替换状态，不得两次相加。原配方源kg与完整湿载体kg分开；入口表计已排除内部复用。直接废水=实测V_discharge*rho_discharge，不再扣库存/蒸发。未知化学物/排放不得静默省略。供应方不能提供完整经核数量时，vr_completeness要求增加实际原子交换。 | kWh; h; s; bytes; m2; kg | 逐表计间隔及服务事件；池校核 | 完整事先定义源池，含退货及所有历史修订 | 全部场址用电及实际网络/清洁供应方边界 | 每参考流 | 表计校准；完整源闭合；签字完整供应方清单；精确洗涤剂身份及载体接受 |
| cp_assets | support_assets | building_asset; shelf_asset; checkout_asset; router_asset; payment_asset; camera_asset; admin_asset | 前景账本 | asset_id; source_id; model; BOM; scope; period; beneficiary_id; exposure_unit; e_a_h; L_a; e_actual_a_h; f_a_h; f_old_a_h; f_new_a_h; V_old_a; V_new_a; N_asset_a_p; delta_a_h; manufacture; installation; repair_event_id; transport_event_id; retirement_event_id; provider_inclusions; original_history_version; Q_p | 逐实际建筑/固定设施及型号/序列设备盘点。以签字型号/BOM/阶段清单核完整源V，含修理/运输/报废且排除运行电力。几何测量及预留时长日志对每个实际受益方量化al_assets暴露量。记录有证据L，并在每次修订及实际退役时更新完整历史。其独立运输/修理/报废采用同一历史资产份额，不按退役期Q分配。已含完整组件不得再计输入或终端废物。未知缺型号或阶段阻断完整性；使用前重建实际原子阶段卡并投影。 | Item(s); m2*h; m3*h; h | 逐预留间隔、资产事件及寿命修订 | 完整事先定义源池，含退货及所有历史修订 | 七类实际支持资产型号源及全部历史受益者 | 每参考流 | 资产/源台账；签字完整型号清单；实测几何；暴露及最终寿命闭合 |
| cp_carton | cartons | carton_input | 前景账本 | source_id; carton_model; actual_BOM; n_carton_source; first_use_id; paint_gross_kg_contents; gross_kg_contents; unused_open; unused_close; used_open; used_close; supplier_return; transfer; discard; inbound_source; Q_p | 计数实际完整纸箱型号，供应方整包装向量与核实组件向量互斥。首次使用时用经校准秤称原内容物；跨复用/退回保留源归属及未用/已用库存。分别核对实际纸箱及不存在证据；原装罐包装不属于此运输纸箱。 | Item(s); kg | 逐收货、首次使用、复用及退回 | 完整事先定义源池，含退货及所有历史修订 | 实际纸箱源及原内容物全部受益者 | 每参考流 | 完整包装BOM；内容物校准称重；首次使用谱系及库存闭合 |
| cp_waste | residual | sealed_paint_waste; carton_waste | 前景账本 | waste_mode; dispatch_id; source_id; original_can_id; condemnation_event_id; carrier_state; receiver_id; accepted_constituents; treatment_scope; collection_transport_included; current_gross_kg; current_tare_kg; condemned_kg; direct_source_net_kg_w_p; gross_kg_w; tare_kg_w; carrier_net_kg_w; current_carrier_net_kg_w_p; current_carrier_net_kg_w_b; share_w_p; provider_attributed_net_kg; opening_waste_kg; closing_waste_kg; actual_dispatch_kg; confirmed_missing_waste_kg; signed_unresolved_waste_kg; Q_p | 逐实际判废扫描original_can_id/condemnation_event_id，用经校准秤称当前完整湿罐，仅扣外部称重容器皮重；保留逐件current_gross_kg/current_tare_kg并求condemned_kg，与condemnation_count独立。期初/末分别数商品和称暂存废物。出运时逐源/运单记录一种calc_waste模式：优先直接分源净称重；否则实测当前同质完整载体的源kg并与全部源闭合；已归属净kg不变。保留校准、接收净重凭证、废物遗失调查及有符号差额。取得精确湿配方/完整包装或纸箱状态接受及处理清单。不同状态/组成不得合成同一流。实际处理包已有收运仅作核查；独立遗漏运输须在完整声明前执行al_transport/calc_transport及cp_transport。不推断回收抵扣或二次扣库存。 | kg | 逐实际出运及池盘点 | 完整事先定义源池，含退货及所有历史修订 | 实际暂存废物及接受处理边界 | 每参考流 | 地磅/秤校准；签字接收批次及处理清单；实际状态照片仅辅助不得代替接受 |
| cp_completion | retail | service_output; failed_original; supplier_handoff; external_retained | 前景账本 | source_id; module_version; exchange_id; flow_type; property; unit; N_core_r; N_m_r; q_m_r; D_m; delta_a_h; all_beneficiary_driver; attributed_status; stage; period; overlap_event_ids; Q_p | 读取各实际模块原清单及源绑定，按源级执行al_complete/calc_complete。此零售协议是同一运行/资产/纸箱/废物源记录的集成视图，不二次采集或新增过程。每张新增模块卡须有自身真实过程协议。完整声明前核对sb_complete_support全部必需范围，含远端支付/安防/行政支持。 | row-specific original units | 逐模块版本、池关闭及历史替换 | 完整事先定义源池，含退货及所有历史修订 | 全部实际供应方及核心源 | 每参考流 | 原清单；完整来源链；重叠图；实际解析卡/协议覆盖 |
| cp_backend | operations | payment_processing_service; admin_ledger_service; security_retention_service | 前景账本 | request_id; request_source_id; request_owner_mode; pay_line_start; pay_line_end; pay_line_id; pay_line_original_pool_id; pay_line_seconds_r_p; pay_line_seconds_r_b; pay_share_r_p; event_id; event_source_id; ledger_owner_mode; ledger_line_start; ledger_line_end; ledger_record_id; ledger_line_original_pool_id; ledger_line_seconds_e_p; ledger_line_seconds_e_b; admin_share_e_p; processing_class; capture_owner_mode; capture_source_evidence; capture_cohort_id; capture_start_k; capture_end_k; capture_h_k; protected_polygon_id; protected_area_m2_k_p; protected_area_m2_k_b; exclusive_protected_area_m2_k_p; common_protected_area_m2_k; reserved_protected_footprint_m2_k_p; reserved_protected_footprint_m2_k_b; capture_share_k_p; source_id; origin_pool_id; capture_history_version; retained_bytes_i_k; retention_interval_id; retention_h_i; provider_attributed_request_count; provider_attributed_event_count; provider_attributed_GBh; provider_final_owner_pool_id; network_contained; Q_p; module_version; provider_id; service_class; same_contract_id; absence_evidence; request_time; request_result; event_time; retention_start_i; retention_end_i; remote_operation_inventory; remote_electricity_inventory; remote_capital_inventory; original_denominator; excluded_local_scope; overlap_source_ids | 逐实际远端合同保留完整运行/电力/资本清单、同质处理类别及原分母。逐真实支付尝试检查专属或共用；以秒实测每商品行处理起止，保留行ID及原池ID，全部分配份额与该一个尝试闭合，含拒绝/重试。库存账本单记录事件须证明唯一归属；真实同质批处理事件须实测每实际记录行处理秒，保留完整批次成员，并依calc_backend分配一个event，不得每标签count1。共享计时为零或缺失阻断完整性。测绘摄像保护多边形及原捕获期受益方占地/预留，含共享区、其他受益者及闲置预留；互斥映射面积须与完整多边形闭合。留存前固定捕获队列/源/原池份额及历史。每状态变化按捕获队列测实际留存字节及精确互斥留存小时；删除/重编码及后续间隔保留源谱系。不使用已传未存字节，不按当前销售重算责任者。供应方已归最终责任者数量须有精确池/源/分配版本证据且不再相乘。修正替换原历史源分配。签署同网络包包含或真实路线不存在证据可停用一行；否则缺远端LCI/身份/边界阻断完整性。 | Item(s); s; m2; bytes; h; GB*h | 逐实际请求/事件及每个留存状态间隔 | 完整池及远端源寿命/期间覆盖 | 实际远端供应方及全部源标记受益事件 | 每参考流 | 签字完整供应方清单；源标记日志；重叠图及原分母 |
| cp_transport | transportation | loaded_transport; empty_transport; idle_transport | 前景账本 | transport_source_id; provider_id; truck_model; mass_capacity_limited_evidence; actual_available_payload_capacity_kg; source_id; source_owner_mode; origin_pool_id; stage_mode; attribution_level; attribution_evidence; original_source_id; owner_pool_id; owner_responsibility_class; owner_allocation_version; final_owner_loaded_p; final_owner_empty_p; final_owner_idle_p; provider_attributed_loaded_tkm; provider_attributed_empty_vehicle_km; provider_attributed_idle_vehicle_h; segment_id; actual_origin_gate; actual_destination_gate; dispatch_time; signed_receipt_time; responsibility_party; actual_source_gross_kg_s_i; actual_payload_kg_i; distance_km_i; empty_distance_km_i; reserved_capacity_kg_s_i; reserved_capacity_kg_b_i; idle_interval_id; idle_h_j; reserved_capacity_kg_s_j; reserved_capacity_kg_b_j; included_stage_source_ids; original_source_q_s; F_s; carton_first_use_fraction_s_p; unused_source_stock; asset_id; e_a_h; L_a; f_a_h; f_old_a_h; f_new_a_h; V_old_a; V_new_a; delta_a_h; event_source_fraction_s_p; owner_fraction_s_p; L_s; U_s; I_s; N_loaded_p; N_empty_p; N_idle_p; history_version; Q_p | 取得实际互斥供应方阶段清单及真实起终门/运单/遥测记录。按al_transport采集校准源/载荷kg、核实分段km、含燃料/能量的静止闲置h及全部受益方同kg容量预留。逐源/阶段读取供应方归属证据：unassigned_vehicle须做车辆分配；source_only明确实际original_source_id并跳过该分配，但仍沿其F/纸箱/资产历史/事件责任份额；final_owner_pool须有精确original_source_id、owner_pool_id、责任类别及分配版本证据，跳过两个已完成步骤。不得仅由运单或原源ID推断最终责任状态。保留阶段单位及原责任/历史并执行calc_transport。每次寿命/向量修订或退役重核/替换全部资产最终责任历史凭证，或重建原源级历史；不再乘第二次f，也不全计退役期。完整供应方/V已含阶段仅校核。供应方退货保留实际门店发出/供应方接收门及签约运输责任方。资产阶段构建不得与已含该阶段V并行相加。未知容量、边界或归属阻断完整性。 | kg; km; h; t*km; vehicle*km; vehicle*h | 逐路段、空程、静止间隔及源/历史修订 | 全部原源/事件池及资产历史受益者 | 实际起终门、货车型号及所有受益者 | 每参考流 | 校准称重；核实路线/时间日志；签字门交接及责任；精确阶段/供应方清单 |
| cp_split_labour_operations | operations | cleaning_service | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |
| cp_split_support | split_support | split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | 独立原始交换台账 | event_id; source_id; 发生/不存在证据; 准确物质或型号; 实际组成/SDS; 参考属性; 单位; 原始数量; 原始分母; 工时起止; 电表区间及上下级关系; 密度及温度; 完整载体净质量; 接收方及处理范围; 工具资产ID; 原配/替换件; 寿命及全部历史受益方; 历史修订差额; 全受益驱动; 直接/已归属状态; 旧整包撤销; 重叠来源 | 逐事件核实实际投入和外运；工时按签认起止记录，物料/废物称重，电力读取互斥电表，车辆记录实际路线公里。补齐来源分母、组成、背景、接收处理和全受益方，执行split_attribution与c_split_quantity。实际不同配方/型号或额外排放须新增准确卡；本候选不得被默认套用。 | 逐卡一个属性/单位 | 每事件及来源修订 | 原完整来源周期及全部受益历史 | 实际工单及互斥现场/供应门 | 每参考流 | 签认工时、校准、组成、去重和接收凭证 |
### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | service_output | Q_p=count(distinct final_valid original_can_id)；Q_p>0时service_output=Q_p/Q_p=1 Item(s)。 | original_can_id; final_valid; pool_id; cp_sales | service_output |  |
| calc_source | failed_original | N_F=sum_s F_s；failed_original=N_F/Q_p。每个F_s原装罐仅携带其自身完整原源V_s一次；保留S_s/F_s/T_s/O_s及实际源等效件数，不得用件数乘包装名义质量。 | q_s; S_s; F_s; T_s; O_s; V_s; Q_p; cp_sales | failed_original |  |
| calc_custody | supplier_handoff; external_retained | supplier_handoff=N_supplier_physical/Q_p；external_retained=N_external_unaccepted_physical/Q_p。这些是互斥实际状态/事件ID，而不是T或F责任件数。 | N_supplier_physical; N_external_unaccepted_physical; Q_p; cp_sales | 保管卫星交换数量 |  |
| calc_energy | electricity | E_p=sum_c E_kWh_c_total*d_c_p/sum_all_b(d_c_b)；electricity=3.6*E_p/Q_p MJ。仅当父表实际包含子表时才减去子表；独立互斥表计不再相减。 | E_kWh_c_total; d_c_p; d_c_b; parent_meter_id; submeter_id; Q_p; cp_operations | electricity |  |
| calc_network | network_service | 对一个实际同质连接小时供应方向量，按connection_id及互斥间隔i去重：h_i=(end_i-start_i)，单位h。每真实连接间隔仅出现一次，含闲置/固定预留。h_i_p=h_i*reserved_connection_h_i_p/sum_all_b(reserved_connection_h_i_b)；N_net_p=sum_i h_i_p；network_service=N_net_p/Q_p。预留覆盖同间隔所有实际受益者且分母已知为正。活动/闲置/固定电力子池不得创造额外连接小时；bytes/任务驱动量不用于分配此h数量。已归属连接h直接使用，预留证据仅作校核。不同向量/合同或重叠但不同服务须另设实际卡；不得相加不同完整服务h向量。 | connection_id; interval_id; start_i; end_i; h_i; reserved_connection_h_i_p; reserved_connection_h_i_b; h_i_p; provider_attributed_connection_h; network_mode; Q_p; cp_operations | network_service |  |
| calc_cleaning | cleaning_service | 逐事件记录实际外购人工h，以原cleaned_area_event_p/sum_all_b(cleaned_area_event_b)分配驱动归属一次；面积不是人工量。每项原始物理量独立按cp_split_support归属，撤销旧完整清洁包；cleaning_service=归属人工h/Q_p。仅按c_split_quantity归一一次，不得再加整包背景或重复门店用电。 | measured_purchased_labour_h_event; cleaned_area_event_p; cleaned_area_event_b; Q_p; cp_split_labour_operations | cleaning_service h per reference flow |  |
| calc_asset | building_asset; shelf_asset; checkout_asset; router_asset; payment_asset; camera_asset; admin_asset | 每个a及原受益方h：f_a_h=e_a_h/L_a；一个同质完整资产源的N_asset_a_p=sum_h_in_p f_a_h。退役时用e_actual_a_h/sum_all_h(e_actual_a_h)；所有历史向量分配以delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a替换。每张资产卡=N_asset_a_p/Q_p Item(s)；保留实际向量差额供calc_complete使用。 | asset_id; model; BOM; scope; e_a_h; L_a; e_actual_a_h; f_a_h; f_new_a_h; f_old_a_h; V_a; V_new_a; V_old_a; N_asset_a_p; Q_p; cp_assets | 资产份额及历史替换分子 |  |
| calc_carton | carton_input | N_carton_p=sum_first_use n_carton_source*paint_gross_kg_contents/sum_all_contents(gross_kg_contents)；carton_input=N_carton_p/Q_p。保留首次使用源归属及期初/末未用和已用库存；未用退回携带源继续流转。 | n_carton_source; paint_gross_kg_contents; gross_kg_contents; first_use_id; unused_open; unused_close; used_open; used_close; Q_p; cp_carton | carton_input |  |
| calc_waste | sealed_paint_waste; carton_waste | 对每实际运单w及一个相同的已接受载体/状态r，优先直接分源校准净称重：N_waste_r_p=sum_w direct_source_net_kg_w_p。仅当同一真实同质载体共享且未归属时：carrier_net_kg_w=gross_kg_w-tare_kg_w；share_w_p=current_carrier_net_kg_w_p/sum_all_b(current_carrier_net_kg_w_b)；N_waste_r_p=sum_w carrier_net_kg_w*share_w_p。current_carrier_net_kg为同运单/时刻逐原源部分在当前完整湿载体状态的实测量，总和须等于carrier_net_kg_w。供应方已归属净kg保持不变，分配证据仅作校核。这三种模式对每源/事件互斥，waste_r=N_waste_r_p/Q_p。原罐件数、干固分及旧状态质量不得代替当前载体份额。不同组成/状态须另设匹配卡/运单。vr_balance库存平衡为独立校核，不再次修正直接实测出运。 | waste_mode; dispatch_id; receiver_id; direct_source_net_kg_w_p; gross_kg_w; tare_kg_w; carrier_net_kg_w; current_carrier_net_kg_w_p; current_carrier_net_kg_w_b; share_w_p; provider_attributed_net_kg; Q_p; cp_waste | 废物数量 |  |
| calc_complete | all inventory rows | N_final_r=N_core_r+sum_disjoint_m N_m_r；仅已归一化模块用N_m_r=q_m_r*D_m；q_final_r=N_final_r/Q_p。保留源ID、模块版本及资产历史delta_a_h；仅合并相同交换/属性/单位，未归属份额仅应用一次。 | N_core_r; N_m_r; q_m_r; D_m; source_id; module_version; delta_a_h; Q_p; cp_completion | q_final_r |  |
| calc_backend | payment_processing_service; admin_ledger_service; security_retention_service | 每个不同请求尝试r，专属单源的pay_share_r_p=1且归其唯一原池；否则pay_share_r_p=pay_line_seconds_r_p/sum_all_b(pay_line_seconds_r_b)，每行秒数=pay_line_end-pay_line_start并按原池求和；每实测商品行仅映射一次且包括全部行。N_pay_p=sum_r pay_share_r_p。每个不同实际账本事件e，专属单记录的admin_share_e_p=1；同质多源批处理事件用admin_share_e_p=ledger_line_seconds_e_p/sum_all_b(ledger_line_seconds_e_b)，每实际记录行秒数=ledger_line_end-ledger_line_start并按原池求和，N_admin_p=sum_e admin_share_e_p。共享分母须已知为正，sum_all_p(pay_share_r_p)=1及sum_all_p(admin_share_e_p)=1；全池件数与真实请求/事件数闭合，而非源标签数。不同处理类别/向量分开。原捕获队列k专属保护时capture_share_k_p=1；共享保护用capture_share_k_p=protected_area_m2_k_p*capture_h_k/sum_all_b(protected_area_m2_k_b*capture_h_k)。测绘实际摄像保护多边形及原受益方占地/预留映射：互斥专属区用实际面积；共同保护区仅一次按这些原受益方可测的预留受保护占地m2拆分，含其他商品、运行及闲置预留；采用protected_area_m2_k_p=exclusive_protected_area_m2_k_p+common_protected_area_m2_k*reserved_protected_footprint_m2_k_p/sum_all_b(reserved_protected_footprint_m2_k_b)，共同区分母须已知为正。所得面积份额与实际完整保护多边形闭合，不重复重叠区。capture_share_k_p随原source_id/origin_pool_id及capture_history_version固定；后续字节变化继承该份额。互斥实际留存间隔的N_video_p=sum_i sum_k(retained_bytes_i_k/1e9)*retention_h_i*capture_share_k_p，单位GB*h。不得再次按当前销售或当前保护面积分配后续留存GB*h。有证据已归最终责任者的供应方请求/事件件数或GB*h保持不变；其分配日志仅作校核。修订替换原历史池/源映射，不计给新池。网络包内源不追加。各服务数量仅除Q_p一次。 | request_id; request_source_id; request_owner_mode; pay_line_start; pay_line_end; pay_line_id; pay_line_original_pool_id; pay_line_seconds_r_p; pay_line_seconds_r_b; pay_share_r_p; event_id; event_source_id; ledger_owner_mode; ledger_line_start; ledger_line_end; ledger_record_id; ledger_line_original_pool_id; ledger_line_seconds_e_p; ledger_line_seconds_e_b; admin_share_e_p; processing_class; capture_owner_mode; capture_source_evidence; capture_cohort_id; capture_start_k; capture_end_k; capture_h_k; protected_polygon_id; protected_area_m2_k_p; protected_area_m2_k_b; exclusive_protected_area_m2_k_p; common_protected_area_m2_k; reserved_protected_footprint_m2_k_p; reserved_protected_footprint_m2_k_b; capture_share_k_p; source_id; origin_pool_id; capture_history_version; retained_bytes_i_k; retention_interval_id; retention_h_i; provider_attributed_request_count; provider_attributed_event_count; provider_attributed_GBh; provider_final_owner_pool_id; network_contained; Q_p; cp_backend | 远端服务数量 |  |
| calc_transport | loaded_transport; empty_transport; idle_transport | 每个互斥transport_source_id/阶段记录须有attribution_level及证据。unassigned_vehicle：严格依al_transport计算L_s/U_s/I_s后应用owner_fraction_s_p。source_only：把供应方provider_attributed_loaded_tkm/empty_vehicle_km/idle_vehicle_h作为已归original_source_id s的L_s/U_s/I_s；不再做车辆质量/容量分配，但仍必须乘匹配的owner_fraction_s_p。final_owner_pool：仅供应方记录精确original_source_id、owner_pool_id p、F/纸箱/资产历史/事件责任类别及owner_allocation_version时，才把其数量作为final_owner_loaded_p/final_owner_empty_p/final_owner_idle_p原样使用；不再乘车辆份额或owner_fraction。缺最终责任证据绝不能设final_owner_pool。owner_fraction_s_p由source_owner_mode固定：original_goods=F_s/original_source_q_s且排除S；carton=carton_first_use_fraction_s_p且未用源留库存；asset=sum_h_in_p f_a_h并替换每个历史分配，delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a；retail_waste_or_return=原事件账本的event_source_fraction_s_p。N_loaded_p=sum_source_records L_s*owner_fraction_s_p+sum_final_owner_records final_owner_loaded_p；同理N_empty_p=sum_source_records U_s*owner_fraction_s_p+sum_final_owner_records final_owner_empty_p，N_idle_p=sum_source_records I_s*owner_fraction_s_p+sum_final_owner_records final_owner_idle_p。单位分开，每源/阶段只用一种归属模式。资产每次寿命/向量修订或退役均重核/替换全部原历史池的供应方最终责任凭证，或重建原源级历史；不得冻结旧f或全部计给退役/当前Q。V/供应方已含阶段不追加。每最终数量仅除Q_p一次；al_complete下资产阶段构建与整资产展开仍为互斥视图。 | source_owner_mode; stage_mode; attribution_level; attribution_evidence; original_source_id; owner_pool_id; owner_responsibility_class; owner_allocation_version; final_owner_loaded_p; final_owner_empty_p; final_owner_idle_p; actual_source_gross_kg_s_i; distance_km_i; empty_distance_km_i; reserved_capacity_kg_s_i; reserved_capacity_kg_b_i; idle_h_j; reserved_capacity_kg_s_j; reserved_capacity_kg_b_j; L_s; U_s; I_s; F_s; original_source_q_s; carton_first_use_fraction_s_p; unused_source_stock; event_source_fraction_s_p; owner_fraction_s_p; f_a_h; f_new_a_h; f_old_a_h; V_new_a; V_old_a; delta_a_h; provider_attributed_loaded_tkm; provider_attributed_empty_vehicle_km; provider_attributed_idle_vehicle_h; N_loaded_p; N_empty_p; N_idle_p; Q_p; cp_transport | 分别有载空程闲置数量及历史源替换 |  |
| c_split_quantity | cleaning_service; split_cleaning_wipe; split_cleaning_broom; split_used_wipe; split_sweepings; split_broom_waste; split_cleaning_water; split_cleaning_sds; split_cleaning_mop; split_cleaning_effluent; split_mop_waste; split_cleaner_bottle; split_cleaner_bottle_waste; split_support_electricity; split_support_travel | 对每个准确身份r及其单一单位，先以原始来源分母D_source还原已归一来源q_source，得到x_raw=q_source*D_source；已是原始量则不再还原。按split_attribution仅作一次尚未完成的归属，按来源ID/事件/版本去重，撤销旧整包和旧历史版本。合计互斥原始量为X_r；q_r=X_r/Q_p，只除最终参考分母一次。人工只计实测外购h，不计原工单数/面积为人工量；自营工时仅核对。资产数量、物料kg、电力kWh、车辆vehicle*km及载体kg分别计算，禁止跨属性相加或用人工工时乘已实测物理量。未知量/身份/背景阻止完整性。 | X_r; D_source; q_source; Q_p; cp_split_labour_operations; cp_split_support | q_r |  |
### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_measurement | all inventory rows | 校准秤/表计并记录单位、时间覆盖、不确定性、缺记录及实际源边界；未知数量仍待核。不编装量、寿命、排放或零默认。 | 校准证书；完整原始间隔/源记录 |
| dq_translation | all inventory rows | 两种语言保持相同顺序的行/规则/协议ID、方向/类型、UUID、单位、公式变量、条件及义务强度；全部必需公式输入及协议process/flow_role须可解析。 | 双语语义对读及真实解析报告 |
| dq_scope | all inventory rows | 披露候选状态、较窄适用性及每个待核身份/供应方/阶段与实测完整性。不声明覆盖全小类、安全、法律或完整标准符合性。 | 实际路线记录及源/模块覆盖台账 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| vr_acceptance | service_output | Q_p为p池内最终有效密闭罐验收的不同original_can_id数。分别记录毛实物交付、实物退回、拒收、重复尝试及验收撤销。即使无实物退回也撤销失败验收；仍有效验收的财务退款/折扣不撤销。统计最终有效ID后不得再减撤销次数。退回再售保留原ID及源；迟到事件以有日期的版本替换原分母和分子/去向归属，不在新队列再收费。 |  |
| vr_balance | failed_original; supplier_handoff; external_retained; sealed_paint_waste | 使用以condemnation_event_id和original_can_id联接的两种量纲账本。纯商品件数Item(s)：opening_goods+receipts+physical_customer_returns=closing_goods+all_gross_customer_handovers+supplier_handoffs+internal_transfers+condemnation_count+confirmed_missing_count+signed_unresolved_count。全部毛实物交付已含从未验收移动，不得再减。判废仅为商品到暂存废物的内部状态变化。在该事件独立称完整当前载体：condemned_kg=sum_event(current_gross_kg-current_tare_kg)，包含罐体/封盖及湿内容物，排除外部称重容器。暂存废物kg：opening_waste_kg+condemned_kg=closing_waste_kg+actual_dispatch_kg+confirmed_missing_waste_kg+signed_unresolved_waste_kg。各项须同载体边界、时间及kg单位；纸箱废物用独立载体平衡。不得件数加kg，不得默认名义件重，废物出运不再从商品件数扣减。湿涂料净kg与完整载体kg独立。有符号未解差额及缺失证据阻断完整性。 |  |
| vr_identity | all inventory rows | 每个未绑定行在定量使用前须匹配实际精确双语流身份、产品/废物/基本流类型、属性/单位及适用介质/供应方。历史核实的交流电产品流未指定供应方/电压，不建立供电组合。空UUID为待核，不得编造或把属性UUID用作流。完整湿原装罐输入需要实际涂料净质量及完整包装BOM/向量，而非名义升数或SDS成分。 |  |
| vr_waste | sealed_paint_waste; carton_waste | 以经校准秤及接收凭证计量实际批次净完整载体kg。完整湿涂料罐及封盖仅在接收方签字接受精确湿配方和完整包装状态、且处理确实覆盖时作为一个真实混合载体；照片/许可本身不能证明。不得再把其中涂料及金属质量重复作为废物。出运纸箱排除另行出运的组分及涂料罐。实际已用、未用、顾客持有、留存和出运状态须闭合；未知路线不是零、抵扣或无害处置。 | bm-f551-2025; jrc-retail-2013 |
| vr_completeness | all inventory rows | 只有cp_route、每张实际存在的卡、支持供应方边界、原始至最终公式及原源责任全部闭合后数据集才完整。必需支持资产型号须独立绑定，或有证据已包含于另一个核实型号并按源ID去重。实际额外型号、修理、耗材或废物必须先有独立双语卡及协议才可完成。保留不确定性及候选待审状态；不推断安全/法律/VOC限值符合性。 |  |
| split_completeness | all inventory rows | 核查每条准确身份和单一参考属性、全部实际工单组成、互斥计量、旧整包撤销、无重复来源/设备终端、全受益历史归属及最终分母一次归一。来源未验证、额外真实交换未建卡、数量未知或只写“合同包含”均不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 实际源完成后的一次增量零售服务；可选另立GOODS系统加S一次 |
| allowed_use | 相同实测商品/包装/路线服务研究，明确边界及不确定性 |
| excluded_use | 全group351或全门店比较；涂料制造/施工等效；安全/法律/VOC符合性；不完整支持冒充完整业务 |
| required_metadata | 必需限定信息；池及最终Q；全部原源及模块版本；供应方/阶段边界；每个待核身份 |
| required_quality_disclosure | 实际完整性及未知项；原现场方法；实测库存/责任闭合；寿命及迟到退货修订 |
| update_trigger | SKU/配方/包装/渠道变化；任何开启/泄漏；新支持型号/组分；迟到退货；资产退役或源修订 |

## 11. 数据源

| Source id | Type | Title | Reference | Used for |
| --- | --- | --- | --- | --- |
| un-cpc3-62164 | official_guidance | 联合国统计司CPC3.0小类62164说明 | 联合国统计司CPC3.0小类62164说明; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62164 | 分类范围：实际说明关联group351；不提供数量或全小类适用性 |
| bm-f551-2025 | handbook | Benjamin Moore Regal Select优质内墙涂料及底漆半光F551，F551 CE040225 | Benjamin Moore Regal Select优质内墙涂料及底漆半光F551，F551 CE040225; https://media.benjaminmoore.com/WebServices/prod/assets/production/datasheets/TDS_0551/F551_TDS_CE.pdf | 第1–2页：真实白色水性丙烯酸树脂产品及名义3.79L规格；区别开启、稀释及施工。不采用实际装量/BOM/LCI、排放因子或法规结论。 |
| jrc-retail-2013 | official_guidance | 欧盟JRC零售业最佳环境管理实践，EUR25998EN，2013 | 欧盟JRC零售业最佳环境管理实践，EUR25998EN，2013; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | PDF第18、149–150、351、361–362页：仅支持零售公用设施、照明、包装和废物过程覆盖。PCR公式为有现场采集的声明方法，不是JRC数值基准或完整标准符合性。 |
