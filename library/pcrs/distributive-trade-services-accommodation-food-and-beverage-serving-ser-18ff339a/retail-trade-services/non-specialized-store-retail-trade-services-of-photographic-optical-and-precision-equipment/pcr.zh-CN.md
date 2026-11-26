---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-photographic-optical-and-precision-equipment
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原厂封装完整无源屋脊棱镜双筒望远镜套装柜台零售服务

## 1. 范围与适用性

本部分增量方法适用于非专门店内原厂封装完整无源屋脊棱镜双筒望远镜套装。类别内任何品牌、放大倍数及物镜直径均可适用，须匹配各自经核验的原供应商/配置/附件/包装BOM；光学规格不证明负荷等价。排除电子、电池供电或防抖光学仪器及下述其他未准入状态/路线。厂家案例说明真实光学对象，不证明实际完整套装质量、无电池、来源清单或零售绩效。不表示完整CPC覆盖、商品制造或整店运行。边界、失败商品责任及补全方法是待审候选设计选择，不声称通用GHG来源规定此精确方法或授予符合性批准。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-photographic-optical-and-precision-equipment |
| classification_refs | CPC 3.0 62152; narrower; goods group 483 / 商品组483 |
| covered_products | 原厂封装完整无源屋脊棱镜双筒望远镜套装，原配附件及完整原包装保持同套；每个同质池固定实际光学规格及供应商配置。 |
| excluded_products | 电子、电池供电或防抖光学仪器、照相机、单售镜头/组件、二手/开封套装，以及测试、校准、适配、充氮、维修、演示、商品清洁、配送及线上履约。 |
| representative_product | 原厂封装完整无源屋脊棱镜双筒望远镜套装柜台零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 供应商收货→干燥常温保管→外包装封口/型号检查和无纸收银→柜台实物交付→最终验收/退货核对。不拆包、不对商品通电测试、不加购物袋。 |
| market_state | 全新原封完整套装；实际地区版本的器身、镜盖、背带、携带包、说明书，以及包装主体、封口、内衬、标签、胶黏剂由供应商BOM确定，不从器件规格推定。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 对一件未开封完整双筒望远镜套装提供柜台零售处理。 |
| How much | 一个不同原套装ID的一次最终有效验收服务。 |
| How well | 完全匹配选定SKU/版本、封口完整、完整套装正确交付及按声明政策最终验收有效。不声称完成光学或校准测试。 |
| How long or cycle | 一个声明池P，从收货/保管/柜台处理至验收期限，并对后续事件更正原池。 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 非专门店厂封被动式8×42双筒望远镜套装柜台零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 店址及非专门店渠道; 供应商SKU及套装版本; 原ID及封口; 被动无电池确认; 实际完整套装/包装BOM; P日期及验收期限; 最终有效Q集合; S/F/O/T来源归属; 实际电表边界; 部分模块及来源版本 |

数据包必须声明全部必需限定信息；缺失即参考定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| service_count | retail_service; failed_kit; gross_handover; continuing_transfer | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅对各行指定的完整原套装对象或服务计数，不换算千克/器件质量。Q为不同最终有效原ID，不是交易次数。 |
| electricity_unit | pos_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实测kWh乘3.6换为MJ；流身份为未特指供应/电压的使用点交流电。 |
| whole_carrier_mass | kit_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 实际完整未开封套装载体净千克；不得用器件目录质量默认值，不得重复扣部件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原厂封实际供应商套装入店；验收前无再加工。 |
| starting_condition_role | foreground service gate / 前景服务门 |
| product_classification_scope | 仅较窄的483组光学完整套装；482组精密/控制商品不在本路线。 |
| recursive_input_rule | 不得递归另一零售服务；保留有证据的实际来源边界并按completion_sum排除重叠。 |
| upstream_dataset_requirement | 实际完整供应套装供应含原入店运输，按S/F/O/T划分；核实电力及处理供应方。 |
| disclosure | 部分增量边界、实际来源/接收状态、零产出池及全部必需补全缺口。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| boundary_route | all processes | 仅在供应商规格/BOM与全店及房东调查确认以下事实后适用：无电池/电子元件的非防抖被动光学仪器、器内封存氮气，无光学工作台/校准灯/靶标、无演示机、无镜片清洁介质、无打印收据/标签或零售商加包装。本路线仅允许全电、无温控的干燥场所：分配现场/房东边界内任何位置均无燃烧燃料、制冷剂设备、冷藏商品、热网或燃气服务。记录设备清册、公用合同及注明日期的巡检；排除来源存在或未知即阻止本路线，不能据此记零。器内封存氮气不是基本排放。 | nikon-p3-spec |
| boundary_gate | failed_kit; gross_handover; continuing_transfer; kit_waste | 每件原套装ID及供应商批号贯穿每次收货、交付和退货。完整原制造及供应商至入店运输在首次入店收货处共同确定，每个原ID仅一次守恒分为S/F/O/T责任：S为最终有效客户商品，F为零售商丢失/报废或外部保留的未验收商品，O为未决库存，T为签署接续责任的供应商/其他系统。转售只改变同一原件归属，不再产生制造。failed_kit投入是实际F供应份额，含原附件/包装和一次原入店运输，不得作为保管附属流排除。S背景留在下游客户商品系统，O随原来源递延，T携签署背景继续传递；退供应商不能抹除背景。按来源ID保留完整原向量；组件拆分须有守恒该边界的已核实供应商向量，禁止任意质量比例。 |  |
| boundary_physical | gross_handover; continuing_transfer; kit_waste | 采用仅商品的保管数量平衡：C_close = C_open + R_supplier + R_customer - H_gross - X_continue - D_condemn - L_missing。各项均为实际事件件数；供应商收货与客户退回是独立毛流入。H_gross含所有客户实物交付，包括未验收和重复交付，故不得再减external_nonaccepted。X_continue仅含互斥的实际退供应商/转其他内部系统出库事件，不含仅背景所有者改变。报废在内部将商品转为待运废物；待运废物期末=期初+D_condemn-W_dispatch_count，实际废物外运不得再从商品扣除。分别核对原ID、件数及实测完整套装千克。仅gross_handover及continuing_transfer两个实物产品输出为保管附属流并排除共产品表征；服务及failed_kit投入仍须表征。丢失及外部未验收商品须注明最终接收人/状态和责任，两者均不自动产生废物外运。 |  |
| boundary_complete | all processes | 本数据集是柜台服务的部分增量边界。声明完整零售结果前必须补全：全场照明/风扇/IT公用余量，建筑/固定装置/货架/安防/收银/网络资本，清洁卫生，实际退回/转移/废物运输，以及废物处理。所有实际必需设备、清洁剂、介质、载体及维护必须先进入有名称的中英原子卡、协议及同步投影后才可完整。禁止泛称其他投入。固定计算规则completion_energy、completion_assets、completion_cleaning、completion_transport及completion_sum约束这些模块；缺项须有覆盖现场/房东/供应方的签署无此项证据。未知模块保持不完整。已计量收银电力与公用余量互斥；仅有接线/电表证据证明父表包含时才从父表排除，不得从独立互斥表再扣。 | ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| counter_retail | 厂封套装保管及无纸收银 | required | 适用路线及全部P事件 | service | Q最终有效原ID |
| residual | 完整未开封套装废物外运 | conditional | 实际外运至有证据处理；未知不完整 | residual | 实际W_kit千克 |
| support_completion | 必需固定下游模块 | excluded_by_default | 完整零售声明前必须补全；新增实际卡前不在部分核心内 | completion | 兼容原始汇总后同一Q |

### 过程：厂封套装保管及无纸收银 (`counter_retail`)

#### 输入

##### 产品流

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca` (`pos_electricity`)

实际供至已计量收银电路的交流电，含待机；本路线商品无通电测试。供应方/电压/地域仍需数据包证据。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 3.6 * E_POS / Q
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_energy`

###### 厂封无源屋脊棱镜双筒望远镜完整零售套装 (`failed_kit`)

归属F的实际制造完整套装投入；不得漏掉丢失、报废或最终外部未验收的制造/包装/入店运输。此负担投入不是第二次实物供应商收货，也不是排除表征的附属流。要求原完整套装供应证据；BOM/背景未知阻止完整。

- 选定流: 厂封无源屋脊棱镜双筒望远镜完整零售套装
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_F/Q
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_custody`
- 来源: nikon-p3-spec

#### 输出

##### 产品流

###### 非专门店厂封被动式8×42双筒望远镜套装柜台零售服务 (`retail_service`)

每个不同原厂封套装ID的一次最终有效服务。服务身份仍未绑定；不得以商品流UUID替代。

- 选定流: 非专门店厂封被动式8×42双筒望远镜套装柜台零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_custody`

###### 厂封无源屋脊棱镜双筒望远镜完整零售套装 (`gross_handover`)

实际完整原套装的保管附属输出；含全部已验收、未验收及重复出库事件。件数不决定Q，也不是共产品生产。

- 选定流: 厂封无源屋脊棱镜双筒望远镜完整零售套装
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: H_gross/Q
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_custody`

###### 厂封无源屋脊棱镜双筒望远镜完整零售套装 (`continuing_transfer`)

具有接收方签署的保管附属实物输出；仅背景责任重新分配在此无数量。同一原套装来源随T继续。

- 选定流: 厂封无源屋脊棱镜双筒望远镜完整零售套装
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: X_continue/Q
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_custody`

### 过程：完整未开封套装废物外运 (`residual`)

#### 输出

##### 废物流

###### 废弃未开封无源屋脊棱镜双筒望远镜完整零售套装 (`kit_waste`)

一个实际完整物件载体，含原器件/附件/包装，仅接收处理合同接受该完整未开封状态时适用。不得再拆玻璃、壳体树脂或封存氮气重复计量。丢失商品没有虚构载体。实际开封内容须先作状态特定扩展才可完整。

- 选定流: 废弃未开封无源屋脊棱镜双筒望远镜完整零售套装
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_kit/Q
- 数值来源模式: foreground_record (`foreground_record`)
- 适用范围: site_specific (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: reference_flow (`reference_flow`)
- 证据类型: collected_record (`collected_record`)
- 采集协议: `cp_waste`
- 来源: nikon-p3-spec

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_pool | all processes | 按店址、相同SKU/套装版本、厂封路线、日历区间及验收期限预先声明池P。营业关闭、闲置、拒绝、撤销、失败及零销量期间均留在同配置池内，禁止只选成功期间。Q为截止时点P中最终验收有效的不同原套装ID数量；即使无实物退回也须撤销失效验收，纯财务退款/折扣仍保留有效验收。不得再从此不同最终有效集合扣除撤销。每件原套装转售最多形成一次最终服务。后续事件按实际日期替换原池Q、分子及S/F/O/T历史，不在转售新池再收费。Q=0时整个原始池不可归一化，仍须报告。 |  |
| allocation_direct | pos_electricity; all completion modules | 先细分及直接计量，再分配。共用来源先分为实测活动、闲置及固定部件分子池，其同单位之和须与父项核对。各池分别按覆盖所有实际受益者的自身同单位因果驱动分配：活动收银秒、预留闲置秒、场所占用面积×小时，或IT设备预留小时。记录因果性及已知正的驱动总量；禁止不同维度相加或丢弃零驱动时段。固定/闲置池按含关闭期间的实测预留时长分配；缺受益者/预留证据则不能完整。仅相加兼容归属交换量，再除Q一次。不得用营业额/收入分配或给避免生产信用。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | counter_retail | retail_service; failed_kit; gross_handover; continuing_transfer | 事件台账 | pool_ID; store; SKU; kit_version; supplier_BOM; passive_no_cell_confirmation; original_ID; serial_or_seal_ID; original_receipt_date; event_ID; event_type; event_date; physical_recipient; state; acceptance_cutoff; final_valid_original_ID; acceptance_revocation_date; financial_only_flag; C_open; R_supplier; R_customer; H_gross; X_continue; D_condemn; L_missing; C_close; held_waste_open; held_waste_close; W_dispatch_count; responsibility_S_F_O_T; source_vector_ID; original_inbound_ID; original_owner_version; N_F; Q | 在店收货口和柜台逐件扫描实际供应套装/封口ID，独立记录每次客户实物退回及实物出库；保留关联原ID的签署验收及撤销记录。仅查外包装；供应BOM/规格确认实际完整套装、无电池/电子元件、不拆分内容。保留拒绝/无退回撤销/失败/丢失的每个事件。双人盘点独立核对件数。ID扫描不适用质量校准；用留存标签验证扫描及可读性。保留装箱单、签署供应商/接收方所有权、来源向量、实际入店运输范围及丢失调查。 | Item(s) | 每个事件及期初/期末盘点 | 完整声明池P及关联P的全部后续更正 | 单一声明SKU/店址；全部原ID及最终接收人 | 每参考流 | 供应商BOM；扫描审计；签署验收/所有权；来源ID守恒 |
| cp_energy | counter_retail | pos_electricity | 表计记录 | meter_ID; meter_boundary; meter_open; meter_close; meter_multiplier; source_pool_ID; source_pool_kWh; beneficiary_ID; active_seconds; reserved_seconds; all_beneficiary_driver_seconds; interval_dates; calibration_certificate; Q | 在收银电源处使用专用插座表/子表，区间起止读数包括待机、拒绝交易及关闭期间。记录实际kWh、表倍率、断电、UTC时间、经校准电表溯源及接线图。共用收银设备采集所有受益者活动/预留秒并将分配kWh与全池实测量核对；采用实测，不用额定功率。只有boundary_route证据支持时才确认无光学电池/测试能耗。 | kWh | 区间读数及事件/时间日志 | 全部P，含闲置/关闭/失败期间 | 实际收银电路及每个共用受益者 | 每参考流 | 校准证书；电路包含证据；父项核对 |
| cp_waste | residual | kit_waste | 联单称量 | consignment_ID; original_ID; dispatch_date; gross_kg; external_container_tare_kg; W_kit; W_dispatch_count; held_waste_open; held_waste_close; D_condemn; destination; carrier_state; provider_scope; scale_ID; calibration_certificate; Q | 在实际废物外运联单处，用经校准秤称量同型号完整未开封套装及原附件、原包装，仅扣外加可复用收集容器皮重。关联每个原ID及废物库存；接收方确认未拆分内容及实际处理接收。丢失或外部保留商品不属于此流。开封/拆解套装须先新增状态特定卡才可完整。保留毛/皮重单、秤检验砝码、日期和处理/运输合同；独立核对产生量及待运库存。 | kg | 每次实际外运联单 | 池P外运日期及原来源/历史 | 店废物外运及实际接收处理边界 | 每参考流 | 可溯源秤；毛/皮重；载体状态及去向回执 |
| cp_completion | support_completion | mandatory partial-boundary completion | 模块台账 | parent_meter_kWh; wiring_boundary; included_submeters_kWh; disjoint_meter_kWh; source_pool_ID; E_k; d_bk; all_beneficiaries; reserved_idle_seconds; occupied_m2_hours; device_reserved_hours; asset_ID; model; complete_BOM; provider_scope; source_vector_ID; B_j; installation_ID; e_jbt; L_j_v; lifetime_version; all_prior_allocations; retirement_date; terminal_net_kg; final_beneficiaries; maintenance_event_ID; formulation_source_ID; formulation_kg; concentration; source_origin_kg_by_final_destination; original_container_closing_residual_source_kg; dispatched_container_residual_source_kg; container_plus_residual_net_kg; imported_water_kg; imported_water_m3; actual_density_kg_m3; water_temperature; internal_reuse_record; retained_stock_open_close; liquid_gross_kg; liquid_external_tare_kg; wet_wipe_net_kg; cleaner_container_net_kg; consignment_ID; cleaned_m2; scale_calibration; trip_ID; segment_ID; provider_attribution_scope; actual_loaded_km; actual_empty_km; actual_active_h; actual_empty_h; actual_idle_h; full_vehicle_payload_capacity_kg; reserved_payload_kg_bi; actual_reserved_h_bi; d_bi; A_i; A_bi; all_beneficiaries; unused_operational_responsibility_ID; fuel_or_electricity_amount; source_pool_split; q_mr; D_m; original_pool_ID; original_version; raw_A_mr; source_exchange_ID; source_overlap_register; A_core_r; Q; absence_register; site_landlord_equipment_register | 在现场/房东公用设施、资产位置、清洁剂库/排液外运及实际路线/供应方边界，采集原始电表/秤/时间/路线/供应方来源记录和全部驱动单位。池P之前调查有无项，每区间复核变化。采集完整运行P及全部历史资产受益者；保留正式/供应商来源文件和独立表计/库存校核。对各相关表计/秤、时间同步及容量量度留存注明日期的校准证书/检查。completion_energy; completion_assets; completion_cleaning; completion_transport; completion_sum固定模块计算；原始字段保留原来源ID及替换版本。汇总前新增实际中英原子卡；有无项/身份/数量/来源覆盖未知均阻止完整性。 | 各独立来源池原单位 | 每个来源区间/事件及每次寿命修订 | 全部P及完整资产/来源分配历史 | 全部受益者、现场、房东及供应方纳入边界 | 每参考流 | 校准；原边界/BOM；签署无项证据；全受益者核对；旧版本更正 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_q | retail_service | Q = count(distinct final_valid_original_ID)；服务数量=Q/Q=每参考流1 Item(s)；若Q=0则无归一化结果。 | final_valid_original_ID; acceptance_cutoff; pool_ID; cp_custody | Q; retail_service |  |
| energy_mj | pos_electricity | E_POS = sum(池P归属实测kWh)；数量=3.6 * E_POS / Q MJ每参考流。按allocation_direct归属；不得用设备额定功率或光学放大倍数替代电量。 | meter_open; meter_close; meter_multiplier; source_pool_kWh; active_seconds; reserved_seconds; all_beneficiary_driver_seconds; Q; cp_energy | pos_electricity MJ每参考流 |  |
| failure_supply | failed_kit | N_F = count(承担F责任的不同原ID)；数量=N_F/Q Item(s)每参考流。每件原F供应向量在首次收货处展开一次；实际丢失不要求实物废物。S/F/O/T划分包括期初库存的全部原供应。 | original_ID; source_vector_ID; original_inbound_ID; responsibility_S_F_O_T; original_owner_version; N_F; Q; cp_custody | failed_kit Item(s)每参考流 |  |
| physical_outputs | gross_handover; continuing_transfer | H_gross/Q和X_continue/Q Item(s)每参考流是独立实际出库事件总量；cp_custody同时维持商品及待运废物平衡。仅责任变化的T不计入X_continue。 | event_ID; event_type; original_ID; H_gross; X_continue; C_open; R_supplier; R_customer; D_condemn; L_missing; C_close; held_waste_open; held_waste_close; W_dispatch_count; Q; cp_custody | gross_handover; continuing_transfer |  |
| waste_dispatch | kit_waste | W_kit = sum(实际联单毛千克-实际外加可复用容器皮重千克)；数量=W_kit/Q kg每参考流。净称量保留完整未开封器件/附件/原包装载体；不得扣除已经不在其中的部件，不得用575克器件规格替代或再乘组成比例。产生/库存为独立校核，不用于再次修正外运千克。 | consignment_ID; original_ID; gross_kg; external_container_tare_kg; dispatch_date; destination; W_kit; Q; cp_waste | kit_waste kg每参考流 | nikon-p3-spec |
| completion_energy | all completion modules | 对各电力分子池k及受益者b，E_bk = E_k*d_bk/sum_b(d_bk)；每个k仅按allocation_direct使用一个同单位因果驱动。电表覆盖证据决定E_k采用互斥读数还是父表减已证实包含的收银子表。保留闲置/关闭期间并完整核对父表。E_bk为kWh；原始公用MJ=3.6*sum_k(E_bk)，completion_sum前不除Q。电力组合、电压、地域及上游交付损耗须有实际供应方证据；使用点流身份不提供这些信息。 | parent_meter_kWh; wiring_boundary; included_submeters_kWh; disjoint_meter_kWh; source_pool_ID; E_k; d_bk; all_beneficiaries; reserved_idle_seconds; occupied_m2_hours; device_reserved_hours; cp_completion | 除Q前按来源池归属的原始公用MJ | ghg-product-2011 |
| completion_assets | all completion modules | 对每件真实完整资产j及全部历史受益者b,t维持持久台账。各版本v中a_jbt(v)=e_jbt/L_j(v)，sum_b,t(e_jbt)<=L_j(v)；设备h、建筑占用m2*h、货架占用m3*h和可复用布清洁m2须分别建同单位台账。L为有证据且为正的预计总寿命暴露，不得各池重新开始寿命；L未知阻止完整，暴露超过L时须先替换寿命版本才可分配。来源向量B_j乘a_jbt为制造/安装责任；每次修订替换全部旧历史分配并记差额。退役时L设为实际总暴露、替换所有版本，向有记录的最终受益者补记舍入/剩余，使总和=1。完整终端资产载体实测净千克仅乘同一个a_jbt一次，不再乘制造比例。完整净称量与已核实组件重建互斥；已拆部件不得扣两次。运行及实际事件维护/更换使用独立向量，除非签署完整生命周期包明确已含，届时删除重复项。纳入资本须注明建筑壳体、照明/风扇固定装置、货架、安防、收银及网络硬件、基础/安装和终端范围。库存套装变演示机时将同一原来源转至T及本台账，不能既记F又新购；改变路线须先修订卡片。 | asset_ID; model; complete_BOM; provider_scope; source_vector_ID; B_j; installation_ID; e_jbt; L_j_v; lifetime_version; all_prior_allocations; retirement_date; terminal_net_kg; final_beneficiaries; maintenance_event_ID; cp_completion | 除Q前的原始资产制造/安装/终端及实际维护责任 | ghg-product-2011 |
| completion_cleaning | all completion modules | 逐一采集实际配方来源批次s投入千克及其最终互斥的来源千克去向：未用退回、留存库存、干残渣、湿布、自由液体及外运原容器残液。原容器期末残液属于留存库存；实际外运残液为独立最终来源去向，仅分至容器来源份额，不能再记自由液体或湿布。完整原容器连同外运残液是另一直接称量终端载体净千克，不得再乘来源比例。已用转入冲洗是状态替换，不是另一去向；最终来源千克之和等于来源千克。新增水/污垢/容器不属于来源千克。进水千克采用实际称重或质量表；体积读数仅按imported_water_kg=imported_water_m3*actual_density_kg_m3换算，并记录实际温度。进水表已排除内部回用，不得再减回用。完整液体终端载体仅采用直接净千克称量（毛重减实际外加容器皮重），不用水体积平衡或来源千克替代。湿布与原清洁剂容器分别使用实际完整载体净千克和互斥联单，不得与液体重复输出。记录精确配方/浓度、状态、来源、质量秤/校准、水表边界、日期、留存期初/期末库存和去向。可复用布制造按自身清洁m2的e/L资产台账分配；实测退役载体沿用同一比例一次。补全前须对每种实际清洁剂、水、布、容器及终端流新增独立命名卡；组成/去向未知则不完整，不能记零。 | formulation_source_ID; formulation_kg; concentration; source_origin_kg_by_final_destination; original_container_closing_residual_source_kg; dispatched_container_residual_source_kg; container_plus_residual_net_kg; imported_water_kg; imported_water_m3; actual_density_kg_m3; water_temperature; internal_reuse_record; retained_stock_open_close; liquid_gross_kg; liquid_external_tare_kg; wet_wipe_net_kg; cleaner_container_net_kg; consignment_ID; cleaned_m2; scale_calibration; cp_completion | 除Q前的原始原子清洁投入及互斥完整终端载体千克 |  |
| completion_transport | all completion modules | 原首次入店运输仅在原S/F/O/T供应来源中计一次。逐个实际独立退货/转移/废物段i及受益者b，实测reserved_payload_kg_bi及actual_reserved_h_bi，对全部受益者固定d_bi=reserved_payload_kg_bi*actual_reserved_h_bi，单位kg*h。分开实测满载、空返及原地闲置来源分子池；各池按A_bi=A_i*d_bi/sum_b(d_bi)分配。未利用运营责任也作为具名受益者，须有载荷容量千克及实际预留小时证据；空返载荷0不使预留容量为0，闲置小时不能用距离0。记录完整车辆载荷容量、有日期预留、实际满载/空返公里及活动/空返/闲置小时；不得默认容量或另选容量单位。各池须有已知正的同单位驱动总和及完整受益者、来源核对；预留/容量/覆盖未知阻止完整。供应方已归属联单向量采用一次；路线段及kg*h证据仅做校核，绝不再乘。核实实际供应范围的空返/闲置覆盖；缺覆盖时须有另实测vehicle-km或vehicle-h服务来源，去重后仍用同一kg*h归属。 | trip_ID; segment_ID; consignment_ID; source_vector_ID; provider_attribution_scope; actual_loaded_km; actual_empty_km; actual_active_h; actual_empty_h; actual_idle_h; full_vehicle_payload_capacity_kg; reserved_payload_kg_bi; actual_reserved_h_bi; d_bi; A_i; A_bi; all_beneficiaries; unused_operational_responsibility_ID; fuel_or_electricity_amount; source_pool_split; cp_completion | 除Q前逐来源归属的原始运输交换数量 | ghg-product-2011 |
| completion_sum | all inventory rows | 对每个外部模块m，按有证据的原分母D_m、原池/版本及来源/交换身份，将已归一化交换q_mr恢复为原始分子A_mr=q_mr*D_m。供应方已提供原始A_mr时不再乘。先核对全部受益者；替换过期寿命/后续退货版本。仅合并相同交换身份+属性+单位+边界的分子，排除精确来源ID重叠；禁止千克加MJ、保管输出加制造负担、原始量加已归一化量。每个兼容行r最终q_r=(A_core_r+sum_m A_mr)/Q。含原入店运输的failed_kit F来源已在A_core_r内，不得再作为缺失补全模块加入。客户商品系统按sum(原S供应向量)/Q及实际原来源/入店运输ID在本服务之外另行纳入，不与F/O/T重叠；不得对来源向量重复用服务分母。完整零售须有全部具名模块、绑定、来源边界及核对证据。 | q_mr; D_m; original_pool_ID; original_version; raw_A_mr; source_exchange_ID; source_overlap_register; A_core_r; Q; cp_completion | 每参考流完整兼容行数量；明确未解决模块清单 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 逐个已绑定流核实正式原响应及匹配哈希回执、观察状态、中英名称、流类型、限定信息、属性/单位链及载体状态。未绑定服务、套装和废物身份仍未经核实；数据集完整前须取得逐行绑定以及实际完整BOM、数量及供应/处理边界。通用数量属性不代表服务身份。 | 正式响应及回执；供应商BOM；来源/去向范围 |
| quality_pool | all processes | 保留原记录、实际事件日期及全部后续替换版本；记录不确定度、排除及结账延迟。每个Q须有可审计的不同最终有效ID集合；每个池和来源分子均核对，含Q=0。本PCR不提供损失率、包装质量、分配因子、寿命或合规阈值数值。 | 事件/库存核对；版本日志；不确定度表 |
| quality_scope | support_completion | 全部固定补全模块及对应双语卡有证据前披露为部分覆盖。有无项调查须覆盖实际全店/房东边界，不只是所选商品。无电池须有供应商确认及实际型号/BOM核对，不得从公开规格未写电池推定。实际封存氮气为器内产品存量，不推定空气排放。 | 现场/房东签署调查；供应商确认；完整模块/来源审计 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | retail_service | 要求完全相同SKU/套装版本及厂封状态、Q的最终有效原ID集合、日期/期限和供应商被动无电池配置证据。参考显示须与retail_service选定名称相等；其身份是服务，不是望远镜制造。 | nikon-p3-spec |
| validate_responsibility | all processes | 要求商品及待运废物平衡、接续接收方签署、守恒的原来源S/F/O/T、原F投入及一次原入店运输。外部保留的未验收商品不构成已验收服务，也不是自动零售商废物。后续验收撤销即使无退货也更正原分子及Q。毛客户交付不得再扣已包含的未验收。 |  |
| validate_modules | all inventory rows | 核查每个最终basis.kind均为reference_flow、数量采用共同Q、过程/协议范围为一个实际存在的ID、来源可解析。完整声明须完成兼容来源恢复、无重复来源ID、全历史资产更正、空返/闲置运输及清洁来源/完整载体核对。未知或开封/内容损坏状态须具体双语原子扩展并复检，不能假定零或默默扩展套装卡。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量零售服务单元过程，明确F供应责任。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 同一有证据的被动厂封套装路线，执行固定必需补全并另纳客户商品S供应。 |
| excluded_use | 完整叶覆盖；开封/电子/经校准商品；仍缺模块时的完整零售商足迹；商品制造身份；无支持比较或合规声明。 |
| required_metadata | 全部限定信息、原来源/接收边界、P/Q版本、毛保管平衡、S/F/O/T、供应方范围及模块完整性。 |
| required_quality_disclosure | 未绑定身份；缺失的实际BOM/数量/背景；部分边界、未知有无项及零Q池；校准及全部历史替换更正。 |
| update_trigger | SKU/BOM/封口/路线/来源改变、新增通电测试或电池、新模块证据、后续验收/退货或资产寿命修订。 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62152 | official_guidance | UNSD CPC Version 3.0, code62152 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62152 | 分类包含482及483组；本范围仅选择483组子集。 |
| nikon-p3-spec | handbook | Nikon, PROSTAFF P3 8x42/10x42 official specification. https://imaging.nikon.com/sport-optics/lineup/binoculars/prostaff/prostaff_p3_x42/index.html | 实际8×42屋脊棱镜中央调焦型号锚定及封存氮气区别；不推定完整套装质量、BOM、无电池证据、零售因子或处理能力。 |
| ghg-product-2011 | standard | WRI/WBCSD, GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed p63 / PDF p65. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅一般细分及物理分配原则；固定服务/资产/运输/清洁公式是明确PCR设计要求，不声称为标准原话或完整标准符合性。 |
