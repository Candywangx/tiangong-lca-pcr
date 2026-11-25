---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-industry-specific-machinery-and-eq-16e6a975
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 原厂整包商用食品切片机实体店零售与送达服务

## 1. 范围与适用性

本PCR定义实际同质商用切片机原包的较窄实体店最终零售并由零售商送达服务。它是有固定强制支持补全方法的局部增量核心，不是机器生产/使用、完整门店足迹或已验证实际门店活动。不提供经验数量/范围/默认值。以下强制方法均为待独立科学审查的PCR设计。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-industry-specific-machinery-and-eq-16e6a975 |
| classification_refs | CPC 3.0 62188；group445食品加工机械的较窄子集 |
| covered_products | 全新原厂整包商用皮带传动食品切片机，保留实际已装刀片、防护罩、滑架/推料器、电源连接、原配附件/手册及全部原包装；每个同质池固定实际地区、修订及BOM；由非专门实体混合店售给最终用户并由该零售商原封送达。 |
| excluded_products | 商用皮带传动食品切片机类别外产品、单售刀片/零件、二手/翻新/开封设备、批发/转售采购、网络/邮购、专门设备店、调试/切片/清洗/磨刀/润滑/维修及顾客使用/处置；额定瓦数、刀径或运输质量均不证明背景等价。 |
| representative_product | 原厂整包商用食品切片机实体店零售与送达服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 实体混合店陈列选购并收银付款→封装保管/储存及备货→零售商安排原封送达→具名最终用户交接及最终有效验收；保留全部失败/撤销尝试和关联退回。 |
| market_state | 全新完整原厂包装，所涉零售路线中从未开封或上电。原厂装配/测试/润滑可能已在原上游向量内，不推断其不存在。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 所定义切片机包的实体混合店最终零售及零售商安排原封送达 |
| How much | 1 Item(s) |
| How well | 精确实际批次/包、现场选购付款、完整原封状态及最新有效签署最终送达验收 |
| How long or cycle | 一个完整事前定义的原ID服务周期，含全部尝试、退回及后续修订 |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 一台最终验收合格原厂整包商用食品切片机的实体店零售与送达服务 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | 实际门店及实体混合陈列/收银证据; 最终零售顾客用途; 实际地区/版本/完整供应装箱BOM; 原封和original_ID历史; 送达/接收/验收状态; 事前池/截止/Q; S/F/T/O及来源阶段; 局部核心补全及供应重叠; 不确定性及版本 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | service_output; failed_original; supplier_return; external_retention; internal_transfer | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 按各规则数精确完整包/事件或最终服务，不能用净重或运输kg。 |
| m_energy | ac_retail | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实际kWh按3.6MJ/kWh一次换算，原量与Q独立。 |
| m_waste | sealed_slicer_waste | 质量 | kg | 实际同态完整运单净质量；原包件数及组成kg独立。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际完整原包进入零售保管，关联供应发运来源及独立入场运输 |
| starting_condition_role | foreground_boundary |
| product_classification_scope | CPC3.0 62188; narrower |
| recursive_input_rule | 实物保管输出不递归为新制造；按b_original/a_once保留实际failed_original制造输入及完整互斥支持供应。 |
| upstream_dataset_requirement | 实际W_j发运制造/包装与独立I_j及精确供应阶段/分母；最终流身份与现场量在采集前未验证 |
| disclosure | 增量服务排除S商品制造/入场及顾客后续机器使用；固定支持补齐前是局部核心。历史官方身份不是新鲜实时观测或科学批准。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| `b_route` | retail; failure; custody | 适用性须有实际非专门实体店混合商品陈列选购/收银证据、将现场选购付款关联到本唯一包的收据，以及最终使用而非批发/转售目的。记录store_ID、布局/陈列证据、purchase_channel、cashier_receipt_ID、customer_use及delivery_order_ID。同一品牌的网络/邮购、批发、专门店交易均排除。Costco送货页面仅为型号/渠道发现线索，不证明合格实体交易、分店库存或零售而非批发。渠道未知阻断适用，不由建模者选择。 | un621; un62188; costco-hbs |
| `b_machine` | retail; failure; custody | 核对单一实际商用食品地区/版本/铭牌及完整原装BOM。已装标准刀/防护/磨刀器及原包装保持同一完整来源；另售Teflon刀/替换刀排除。所链规格将10英寸图标为HBS-250JS而手册列商用食品；标称厚度、尺寸/净重和奶酪用途存在冲突，不能挑选方便的目录数字解决。须不拆零售包取得实际供应方版本/配置证明。本路线排除开封、刀片调节、通电试机、食品接触、清洗、上油、磨刀和安装；实际发生时，完整性前须有实态专属已审扩展及实际食品/油/清洁剂/水/能源/废物卡。厂家操作时长不是零售用电默认、整机防水、食品用途许可或安全批准。 | eurodib-hbs; eurodib-manual; eurodib-spec |
| `b_original` | failure; custody | 逐唯一原包j保留发运门制造/原包装向量W_j及独立实际入场运输向量I_j。真正新增原来源与期初携入来源互斥；退回/重试/再售不再取得制造。每一原来源一次分为S最终成功商品、F归本服务的失败/遗失商品、T具名后继/资产原责任方、O尚未确定/分配，逐原包S+F+T+O=1。本同质整包路线不接纳组件责任分割。零售排除S制造及I_S；独立下游GOODS系统可各加一次。W_F通过failed_original纳入，I_F通过强制运输补全纳入。供应商退回不自动产生抵扣，须签署具名T后继或明确未解O。原身份/背景缺失不能置零。 | ghg2011 |
| `b_delivery` | retail; failure | 纳入零售商安排的全部发运、失败尝试、再投递、空载返程、实际关联顾客/供应商退货运输及内部搬运，包含成功送达。商品入场运输仅按b_original纳入F。实际路段/event_ID和生命周期阶段互斥；商品、资产/材料运输按c_transport/a_assets保留独立原责任方。包送价标签不证明活动量、阶段覆盖或分配。顾客自提不能与本送达服务互换。 | ghg2011; costco-hbs |
| `b_support` | retail | 本记录明确为局部增量核心。完整零售服务另须实际设施/建筑/货架、搬运、收银、照明/风机/HVAC资产；设施热/冷/燃烧/制冷剂；网络/支付/收据/行政/安防；场地清洁和纸张/额外送货包装/处理。逐具名来源覆盖全部营业/关闭/空闲区间（含租赁/共用/房东服务）确定实际存在、不存在或未知。完整状态前执行固定c_transport/a_assets/c_digital/c_clean/c_material/c_species方法并补实际原子卡/协议/供应方。完整合同包仅在精确对象、组成/阶段、物理活动/分母及排除项均已核实时保留；供应方不同不证明无重叠。存在性、来源身份或范围未知均明确不完整。 | ghg2011 |
| `b_identity` | retail; failure; custody | 仅采用的AC身份及计数/质量/能量支持链有历史官方直读证据。AC为使用点且电压/供应方/供电组合未特指，不是已核电力过程。未验证服务/商品/废物流须经官方UUID/状态/名称/物态/类型/属性/单位/介质直读且与实际对象匹配后绑定。实际损失或气体转移须绑定真实外部接收方/介质，内部泄漏不推断室外排放。候选中的UUID缺失已披露，并阻断完整数据集身份，不得虚构UUID。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 实体门店、备货及送达服务 | required | 仅b_route/b_machine合格实际交易 | foreground | service_output |
| failure | 原失败商品制造责任 | conditional | 实际F原来源；b_original | foreground | failed_original |
| custody | 实物保管与完整原封废物 | conditional | 实际签署交接/截止状态或准入完整废物 | foreground | physical_custody_events |

### 过程：实体零售及送达服务 (`retail`)

#### 输入

##### 产品流

###### 门店与搬运用电 (`ac_retail`)

按a_power归属实际互斥场址计量来源；机器操作在本路线外。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: E_MJ/Q MJ
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_power`
- 来源:

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终验收的实体店零售与送达 (`service_output`)

按c_pool为一个最终验收原包提供的服务，含零售商安排送达；仅付款不是产出。

- 选定流: 一台最终验收合格原厂整包商用食品切片机的实体店零售与送达服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_pool`
- 来源: ghg2011

##### 废物流

##### 基本流

### 过程：原失败来源 (`failure`)

#### 输入

##### 产品流

###### 失败原包完整供应发运来源 (`failed_original`)

原同质完整来源一次承载W_F/N_F发运制造/包装；实际F入场独立。

- 选定流: 供应商发运门的完整原厂包装商用食品切片机
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_F/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_failure`
- 来源: ghg2011

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：实物保管及废物 (`custody`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实际原封退交供应商 (`supplier_return`)

接收方签署实际毛实物退交，不是制造抵扣或后继责任证明。

- 选定流: 原封完整商用食品切片机退交供应商
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_ret/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_custody`
- 来源:

###### 无有效验收的外部原包留存 (`external_retention`)

关联实际交接的不同原ID截止状态，既非新移动也非自动废物。

- 选定流: 具名外部接收方留存且无最终有效验收的原封完整商用食品切片机
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_ext/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_custody`
- 来源:

###### 原包转交具名内部保管 (`internal_transfer`)

实际签署实物转交，有据时同一原来源转T。演示开封/操作须另路线。

- 选定流: 原封完整商用食品切片机转交具名内部保管
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_transfer/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_custody`
- 来源:

##### 废物流

###### 完整原封判废原包 (`sealed_slicer_waste`)

仅实际原封完整包且签署接收全部实际设备/附件/包装组成，并按c_stock最终实际完整同范围处理时，逐唯一原ID一次称匹配终端运单净量；拒收/返运或仅收未处理尝试不进入该完整处理量。已开封、泄漏或拆解设备须不同实态卡/供应范围才完整。

- 选定流: 由接收方接受整包处理的判废原封完整商用食品切片机包
- 流属性/单位: 质量 / kg
- 数量规则: W_dispatch_kg/Q kg
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_custody`
- 来源:

##### 基本流

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `a_power` | retail | 优先采用互斥校准分表。将每一实测电源拆成不重叠的设备活跃、设备预留空闲、设施固定池，kWh合计与父表对账。活跃收银/搬运用实测事件设备秒；空闲设备/灯/风机用预留设备秒并保留零销量/关闭受益方；固定设施池（含HVAC用电）按c_species用实际服务预留m2*秒。逐同质池k，E_k_h=E_k*d_k_h/sum_all_h(d_k_h)，E_k>0时分母须正且已知。仅相加相容的归属kWh，E_h=sum_k E_k_h。不能把秒与面积时间相加为同一驱动。分表仅在确在父表内时扣除，不从独立互斥来源再扣。 | ghg2011 |
| `a_assets` | retail | 逐实际同质资产/型号/BOM/阶段向量V_v保留持久台账。建筑/货架用实测预留服务面积秒；电动搬运/收银/ICT/灯/风机/HVAC设备用实测预留设备秒；复用清洁工具用实际每遍清洁m2。当期原N_asset_h=(e_recorded_h/L_expected_v)*V_v，实测e与有据预计寿命L同单位，并保留全部受益方。L/V/来源修订均以delta=f_new_h*V_new-f_old_h*V_old替换每一历史原责任方/池记录，不重启采购。报废时E_actual=sum_all_h(e_actual_h)>0，以f_final_h=e_actual_h/E_actual替换全部历史fV。采购/退役件数仅对账库存。实际维修/替换、资产运载及终端载体先归资产，再沿同一历史f一次；完整生命周期包已含组成不再加。寿命/BOM/阶段分离未知阻断完整性。 | ghg2011 |
| `a_once` | retail; failure; custody | 模块合并前以原source/event/object/time/stage查重。成功GOODS背景在增量零售之外；F制造为实际failed_original输入，不是被排除的保管旁账。仅supplier_return、external_retention、internal_transfer三个Product输出是实物保管QA，不产生替代抵扣或新增制造需求。实际废物须完整处理，不能一概按旁账排除。未知份额不得重归到已知部分，不假定避免产品抵扣。 | ghg2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_pool | retail | service_output | 实体选购付款及最终送达验收台账 | store_ID; pool_ID; original_ID; configuration; cutoff; cashier_receipt_ID; delivery_order_ID; handover_event_ID; recipient_ID; final_valid_acceptance; acceptance_version; revocation_event_ID; event_date; Q; display_evidence; purchase_channel; customer_use; package_seal; nameplate_revision; complete_packing_BOM; return_event_ID; latest_notice_date | 门店与送货负责人将收银收据关联实际陈列选购、原封标签及签署供应装箱记录，不拆包。逐尝试/实际交接记接收人、验收/撤销/实物退回与时间戳。执行b_route/b_machine及c_pool，保留原ID/历史和每日截止对账。 归属汇总方法：按最新最终有效原ID计数；Q固定后方归一 | Item(s)；时间戳；签署记录 | 每次收据/尝试/通知；每日对账 | 事前全批次，含失败及零产出 | 实际实体混合店及具名送达接收方 | 每参考流 | 收据/渠道证明、封装照片、供应BOM、签署送达和修订历史 |
| cp_power | retail | ac_retail | 校准互斥用电来源账 | E_h; E_MJ; source_meter_ID; source_event_ID; provider_included_charging; Q; E_k; pool_kind; d_k_h; all_beneficiary_drivers; parent_meter_ID; contained_submeter_ID; calibration_check; drift; source_interval; device_reserved_seconds; served_area_seconds | 区间起止读互斥分表，每日与父账对账，含空闲/关闭及送货供应方已含充电。逐实际活跃/空闲/固定驱动分别记录全部受益方。批次首尾及仪器更换后查可溯源负载/零点/时钟漂移。执行a_power和c_power。 归属汇总方法：原量归属后换算3.6并仅除一次最终Q | kWh；秒；m2*秒；MJ | 每计量区间/事件；每日总量 | 全部营业、关闭、空闲及退回区间 | 实际门店、搬运及发运线路及覆盖图 | 每参考流 | 校准表记录、账单及来源/驱动对账 |
| cp_failure | failure | failed_original | 原制造及责任登记 | original_ID; original_source_ID; carried_in_sources; new_sources; W_j; I_j; S_j; F_j; T_j; O_j; N_F; W_F; I_F; source_version; successor_ID; Q; complete_packing_BOM; dispatch_gate; inbound_scope; signed_T_successor; open_O_reason; loss_event_ID; original_ledger_ID | 供应方及库存负责人识别每一期初/新增原向量、发运制造/包装范围及独立入场来源，保留唯一原分配和后续修订。以收货/退回/遗失ID核S/F/T/O及具名后继证据。按ID复用原账，不二次计量。执行b_original及c_failure。 归属汇总方法：N_F/Q按W_F/N_F展开一次；I_F独立 | Item(s)；原向量单位 | 每一原来源及去向/版本变更 | 跨退回/再售/未解情形的全部原历史 | 供应发运门与实际入场门分开 | 每参考流 | 签署供应阶段/BOM、原来源守恒及后继证据 |
| cp_custody | custody | supplier_return; external_retention; internal_transfer; sealed_slicer_waste | 实物保管件数及实测完整废物登记 | opening_count; new_receipts; customer_returns; supplier_returns; transfer_in; gross_customer_handovers; gross_supplier_handovers; transfer_out; condemnation_count; confirmed_missing_count; observed_closing_count; predicted_closing_count; signed_residual_count; event_ID; opening_held_kg; condemned_kg; returned_waste_kg; dispatched_kg; known_missing_waste_kg; observed_held_kg; predicted_held_kg; signed_residual_kg; gross_kg; tare_kg; W_dispatch_kg; treatment_receipt_ID; terminal_original_ID; final_treatment_gross_kg; final_treatment_tare_kg; actual_treatment_status; actual_treatment_scope; complete_treatment_evidence; same_scope_provider; waste_attempt_ID; waste_return_ID; treatment_status_version; N_ext; N_ret; N_transfer; original_ID; seal_state; configuration; custody_event_ID; recipient_ID; recipient_signature; successor_ID; receiver_acceptance; actual_constituents; treatment_scope; scale_ID; calibration; external_at_cutoff; final_valid_acceptance | 逐实际保管门扫描原ID，以外部证据核完整原封。实物事件独立于验收和背景责任计数。校准并核皮重的秤称实际完整废物运单和待运库存；接收方须签实际组成/状态接收及完整处理。依c_stock分记每次尝试外运/退回及最终唯一原ID完整处理门、实测终端净kg、处理状态/版本和同范围供应方，不能仅由发运推得完整处理量。按c_stock调查件数/kg缺失与残差，财务事件不虚构外运。 归属汇总方法：原独立平衡；N/Q或直接净kg/Q一次 | Item(s)；kg；时间戳 | 每次移动/状态转换/外运；每日及截止库存 | 全部供应商/顾客/内部保管及待运废物区间 | 实际实物门及具名供应/接收/处理方 | 每参考流 | 原封/BOM证据、签署接收/处理、秤校准及运单 |
| cp_support | retail | service_output | 强制实际支持补全来源登记 | trip_ID; leg_ID; source_ID; A_k; original_unit; mode; loaded_km; empty_km; idle_h; c_k_h; consignment_kg; occupied_m3; reserved_capacity_k_h; capacity_unit; capacity_evidence; d_k_h; all_beneficiary_reservations; source_energy_exhaust_scope; attribution_level; final_owner; original_pool; source_version; F_j; material_source_ID; asset_ID; network_source_hours; reserved_endpoint_seconds_h; sum_all_endpoint_seconds; event_source_quantity; unique_event_ID; line_processing_seconds_h; sum_all_line_processing_seconds; capture_ID; footprint_m2_i_h; coverage_seconds_i_h; f_i_h; capture_map_version; actual_capture_source_i; capture_source_ID; capture_unit; capture_vector; z_i; D_i; actual_retained_bytes_i; actual_retention_h_i; storage_packet_ID; storage_mode; P_p; bytehours_p_i; storage_packet_members; storage_packet_time; storage_unit; storage_vector; storage_denominator; version; portion_ID; m0_s; cumulative_final_exports_source_kg; current_sealed_unused_source_kg; current_opened_unused_source_kg; current_solution_source_kg; current_film_source_kg; current_toolbound_source_kg; current_heldwaste_source_kg; confirmed_missing_source_kg; signed_residual_source_kg; first_use_kg_s_h; disjoint_preuse_loss_kg_s_h; G_s_h; V_manufacture_s; V_inbound_s; original_owner; unused_transfer_source_kg; unassigned_source_kg; all_historical_owner_records; G_old; G_new; m0_old; m0_new; V_old; V_new; container_ID; complete_container_BOM; first_open_event_ID; preopening_loss_event_ID; cleaned_m2; reserved_failed_cleaning_m2; all_cleaning_area; tool_ID; lifetime_cleaned_m2; water_import_m3; actual_discharge_m3; same_state_measured_density_kg_m3; temperature; gross_kg; tare_kg; receiver_ID; treatment_scope; model_BOM; source_unit; q0_s; first_use_quantity_s_h; preuse_loss_quantity_s_h; unused_transfer; current_unused; printed_WIP; used_retained; held_waste; cumulative_final_exports; confirmed_missing; signed_residual; print_job_ID; print_source_ID; print_processing_seconds_h; all_print_processing_seconds; print_energy; final_customer_handover; equipment_ID; equipment_owner; served_zone; interval; presence_state; source_stage; source_quantity; served_reserved_m2_seconds_z_t_h; all_served_reserved_m2_seconds_z_t; w_z_t_h; delivered_MJ; fuel_species; fuel_quantity; fuel_unit; fuel_state; V_fuel_m3; rho_same_state_kg_m3; m_fuel_kg; NCV_actual_MJ_kg; E_fuel_MJ; fuel_temperature; fuel_pressure; fuel_moisture; fuel_composition; fuel_reference_state; provider_combustion_scope; combustion_event_ID; combustion_mode; species_g; C_raw_g_out_i; C_raw_g_in_i; B_g_out_i; B_g_in_i; C_corr_g_out_i; C_corr_g_in_i; V_out_dry_ref_i; V_in_dry_ref_i; T_ref; P_ref; V_wet_actual; P_actual; T_actual; y_H2O; Z_ref; Z_actual; volume_state_mode; concentration_state; oxygen_normalization_absence; sampling_interval; synchronized_flow_concentration; duct_ID; all_external_inlet_outlet_inventory; retained_capture_change; N_comb_g; refrigerant_flux_mode; refrigerant_C_raw_g_out_i; refrigerant_C_raw_g_in_i; refrigerant_B_g_out_i; refrigerant_B_g_in_i; refrigerant_V_out_dry_ref_i; refrigerant_V_in_dry_ref_i; refrigerant_sampling_interval; all_refrigerant_external_openings; F_external_measured_g; opening_control_stock_g; imports_g; closing_control_stock_g; nonair_external_exports_g; R_g; recovery_ID; whole_equipment_transfer_ID; external_medium; vent_flux_measurement; capture_stock; calibration; absence_evidence; module_ID; raw_or_normalized; z_j_r; D_j; N_j_r; N_core_r; E_h; N_F; W_F; I_F; event_ID; object_ID; time_interval; lifecycle_stage; exchange_UUID; property_UUID; unit; state; medium; Q; asset_ID; model_BOM; V_v; vector_stages; e_recorded_h; L_expected_v; lifetime_unit; lifetime_evidence; e_actual_h; all_historical_records; f_old_h; f_new_h; V_old; V_new; repair_event_ID; terminal_carrier_ID; asset_freight_source_ID; measured_terminal_net_kg | 各实际物流/设施/资产/ICT/清洁/材料负责人记录固定方法原字段、唯一source/event ID、实际门物理计量、仪器/校准、全受益方、原单位/分母及供应范围。盘点全期存在/不存在/未知，含房东/共用服务。执行b_support、c_transport、a_assets、c_digital、c_clean、c_material、c_species及c_complete。完整前补实际单过程原子卡协议；本登记是台账视图，不是一个合并交换。 归属汇总方法：恢复原量、仅补尚缺责任层、去重并除Q一次 | 各实际来源单位分开；kg；m3；MJ；秒；vehiclekm；vehicleh；字节*h；清洁m2 | 每来源/事件/修订及区间；每日对账；最终退役 | 全原批次及全部历史资产/材料/采集受益方 | 具名实际供应方/资产/清洁区/来源接收方及原池 | 每参考流 | 实际合同/阶段、校准/原记录、历史版本替换、全受益对账和不存在证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_pool` | service_output | 事前在结果出现前固定单一场址/配置的批次池和观察截止。Q为最新签署验收/撤销历史下final_valid_acceptance=true的不同original_ID数。合格送达须精确未开包/铭牌关联身份、具名最终用户实际收货、完整原态验收且无未解不符。仅收银付款不构成Q。验收仍有效的纯财务退款不改Q；撤销即使无实物退回也移除原ID，计数中已不存在，不得再减。重复送达/退回/再售该原ID仅计一次。保留事件日期及全部失败/零销量池；后续事实按版本delta替换原池分子/分母/去向。Q=0不能归一化，不删除。仅Q>0时声明服务交换为1 Item(s)。 | store_ID; pool_ID; original_ID; configuration; cutoff; cashier_receipt_ID; delivery_order_ID; handover_event_ID; recipient_ID; final_valid_acceptance; acceptance_version; revocation_event_ID; event_date; Q | 最终服务分母Q；固定服务1 | ghg2011 |
| `c_stock` | supplier_return; external_retention; internal_transfer; sealed_slicer_waste | 仅商品件数账predicted_closing_count=opening_count+new_receipts+customer_returns+supplier_returns+transfer_in-gross_customer_handovers-gross_supplier_handovers-transfer_out-condemnation_count-confirmed_missing_count。gross交接对每一实际交出的已验/未验事件各计一次；无移动验收撤销不构成新出库。signed_residual_count=observed_closing_count-predicted_closing_count，正为未解超额、负为未解短缺。判废为商品转待运废物的内部状态转换，不是外运。独立kg账predicted_held_kg=opening_held_kg+condemned_kg+returned_waste_kg-dispatched_kg-known_missing_waste_kg；signed_residual_kg=observed_held_kg-predicted_held_kg，同一正负含义。以event_ID关联件数和实称kg，不将二者相等。dispatched_kg及returned_waste_kg对全部实际废物出入记实物库存QA，不取决于接收或处理状态。W_dispatch_kg=sum_unique_terminal_originals(final_treatment_gross_kg-final_treatment_tare_kg)，仅包含最终实际完成整包完整处理的唯一原包份量，在匹配终端门直接实测，并有treatment_receipt_ID、original_ID、完整处理证据及同范围供应方。它不是全部尝试发运质量，不再扣库存/回用。拒收/返运尝试、仅收未处理及部分处理不得套完整处理供应方或作为已完整处理进入W_dispatch_kg。其实际运输、搬运和处理活动仍须按c_transport/c_complete的实际范围涵盖；部分处理或改态/开封须具体匹配原子扩展才完整，不得置零。无实物移动的接收/状态修订替换原处理/责任记录及全部受影响版本，不新增库存出口或重复终端原ID。外部留存N_ext为截止时在外且无有效验收的不同原包数，不是第二次毛移动。供应商N_ret、内部N_transfer为实际签署交接事件数，仅责任变更不生成实物流。 | opening_count; new_receipts; customer_returns; supplier_returns; transfer_in; gross_customer_handovers; gross_supplier_handovers; transfer_out; condemnation_count; confirmed_missing_count; observed_closing_count; predicted_closing_count; signed_residual_count; event_ID; opening_held_kg; condemned_kg; returned_waste_kg; dispatched_kg; known_missing_waste_kg; observed_held_kg; predicted_held_kg; signed_residual_kg; gross_kg; tare_kg; W_dispatch_kg; treatment_receipt_ID; terminal_original_ID; final_treatment_gross_kg; final_treatment_tare_kg; actual_treatment_status; actual_treatment_scope; complete_treatment_evidence; same_scope_provider; waste_attempt_ID; waste_return_ID; treatment_status_version; N_ext; N_ret; N_transfer | 独立原保管件数及待运废物kg账；归一保管N/Q及废物W_dispatch_kg/Q |  |
| `c_failure` | failed_original | 逐唯一原包j执行b_original，W_j严格为供应商发运门制造/原包装，不含I_j入场运载。N_F为归F的原包数；W_F=sum_j F_j*W_j、I_F=sum_j F_j*I_j，覆盖期初/新增来源及每一原历史修订。failed_original=N_F/Q Item(s)，仅N_F>0时按精确汇总来源当量W_F/N_F展开一次。N_F=0不除法且无制造来源。不能在已展开输入旁再加W_F；互斥I_F通过c_transport/c_complete加一次。正W_F/I_F的原来源/类型/配置/分母未知阻断完整。供应商若将制造和入场打包，须有据拆阶段，不能漏掉或重复该路段。 | original_ID; original_source_ID; carried_in_sources; new_sources; W_j; I_j; S_j; F_j; T_j; O_j; N_F; W_F; I_F; source_version; successor_ID; Q | 来源当量失败原包输入N_F/Q及独立原I_F | ghg2011 |
| `c_power` | ac_retail | 按a_power得原归属E_h kWh，含实际互斥门店收货/储存/备货/收银/发运/退回搬运电源。E_MJ=3.6*E_h，ac_retail=E_MJ/Q MJ。送货供应方服务若已含车辆充电，则新增设施用电排除该充电，并保留source-meter/event证据。不得用标称150W乘假定运行时间，本路线无机器操作。供应方/地域/组合/电压、线损或重叠房东账未知仍是明确待补供应信息，AC流身份不提供发电数据集。 | E_h; E_MJ; source_meter_ID; source_event_ID; provider_included_charging; Q | 每参考服务归属电量MJ |  |
| `c_transport` | service_output | 逐实际车辆来源/路段k分三个互斥实测模式：载货vehiclekm、空载vehiclekm、静止有动力idle vehicleh。各模式匹配相同原活动单位且完整覆盖实际能源/尾气的真实供应方。有据质量约束路段令c_k_h=实测运单kg；有据体积约束用占用m3，不能两者并用或留无据选择菜单。载货d_k_h=c_k_h*loaded_km；空载d_k_h=reserved_capacity_k_h*empty_km；怠速d_k_h=reserved_capacity_k_h*idle_h。同一有据kg或m3运能单位贯穿全部实际受益方，含失败/空闲预约；正原活动A_k须正已知sum_all_h(d_k_h)。原N_k_h=A_k*d_k_h/sum_all_h(d_k_h)。实际运单分配后仅补尚缺原责任份额：商品入场用F_j，本零售池全部实际送达/退回活动，材料按c_material/c_clean首次使用责任，资产按a_assets历史f。精确已归最终owner/pool/version仅跳过有据已完成层；仅已分到运单不能跳最终责任。内部电动/人工搬运用含空闲预留的实际任务秒，不用车辆tkm。模式/供应方/约束/责任覆盖未知均不完整。 | trip_ID; leg_ID; source_ID; A_k; original_unit; mode; loaded_km; empty_km; idle_h; c_k_h; consignment_kg; occupied_m3; reserved_capacity_k_h; capacity_unit; capacity_evidence; d_k_h; all_beneficiary_reservations; source_energy_exhaust_scope; attribution_level; final_owner; original_pool; source_version; F_j; material_source_ID; asset_ID | 单次原责任归属的原实测运输/搬运来源 | ghg2011 |
| `c_digital` | service_output | 每一唯一实际网络来源小时按reserved_endpoint_seconds_h/sum_all_endpoint_seconds分配；每一唯一支付/行政来源事件按实际line_processing_seconds_h/sum_all_line_processing_seconds分配，保留失败事件、空闲预约和全部受益方。逐原相机capture i以互斥实际区域/时间冻结f_i_h=(footprint_m2_i_h*coverage_seconds_i_h)/sum_all_h(footprint_m2_i_h*coverage_seconds_i_h)，保留原责任映射/版本。采集生产原N_capture_i_h=actual_capture_source_i*f_i_h，使用自身原source_ID/单位/分母/向量；归一采集z_i先恢复原量z_i*D_i。不可分多capture生产总量在逐实际原采集来源可核验前保持不完整，不得用后续留存驱动。存储原bytehours_i=actual_retained_bytes_i*actual_retention_h_i，变化库存先拆固定字节区间。单capture存储供应原总量P_p分为P_p*f_i_h；多capture仅存储包按N_storage_p_h=P_p*sum_i((bytehours_p_i/sum_all_i(bytehours_p_i))*f_i_h)，保留实际完整成员/时间及原单位/向量/分母。同一来源单独/汇总存储模式互斥。bytehours为驱动，不是供应活动旁第二个交换。正来源须正已知分母；成员/映射缺失保持不完整，不重归已知份额。GB=10^9字节、GiB=2^30字节。仅跳有据精确已归最终owner/pool/version的层，合并前去掉已含现场用电/资产/网络。 | network_source_hours; reserved_endpoint_seconds_h; sum_all_endpoint_seconds; event_source_quantity; unique_event_ID; line_processing_seconds_h; sum_all_line_processing_seconds; capture_ID; footprint_m2_i_h; coverage_seconds_i_h; f_i_h; capture_map_version; actual_capture_source_i; capture_source_ID; capture_unit; capture_vector; z_i; D_i; actual_retained_bytes_i; actual_retention_h_i; storage_packet_ID; storage_mode; P_p; bytehours_p_i; storage_packet_members; storage_packet_time; storage_unit; storage_vector; storage_denominator; final_owner; original_pool; version | 实际供应单位的独立原网络/事件/采集/存储活动 |  |
| `c_clean` | service_output | 设施清洁与被排除机器清洁独立。逐原制剂来源实测不含容器净m0_s。持久实物平衡：m0_s=cumulative_final_exports_source_kg+current_sealed_unused_source_kg+current_opened_unused_source_kg+current_solution_source_kg+current_film_source_kg+current_toolbound_source_kg+current_heldwaste_source_kg+confirmed_missing_source_kg+signed_residual_source_kg。来源份量不含新增水/污物；每一状态转换替换旧态，最终外送与当前库存互斥，并保留全历史。每一原portion_ID仅一次进入first_use_kg_s_h，再施用/冲洗/回收不新增首次使用。G_s_h=first_use_kg_s_h+disjoint_preuse_loss_kg_s_h。原制造和入场分别为(G_s_h/m0_s)*V_manufacture_s及(G_s_h/m0_s)*V_inbound_s，全部历史责任、未用转出、尚未分配来源库存/残差合计须守恒原来源。每一历史责任以delta=(G_new/m0_new)*V_new-(G_old/m0_old)*V_old替换。独立完整一次性容器含瓶体/封口/内衬/标签/胶黏剂，按实际件数一次归首次开封或互斥开封前损失，不用G/m0；实际复用容器须有已审a_assets暴露方法。清洁事件共享来源按每遍实际清洁m2加互斥失败/空闲预留清洁面积分配，分母含同单位全部受益方。抹布/拖把用a_assets清洁m2寿命，洗涤事件独立。入场供水独立计量；直接全废液kg=actual_discharge_m3*same_state_measured_density_kg_m3，不再扣回用/库存。实际废物载体净kg直接毛重减皮重；原制剂份量与完整湿载体是不同量，不重复组成份额。缺真实完整载体/供应证据的实际来源损失/物种/接收方，在原子补齐前不完整。 | source_ID; portion_ID; m0_s; cumulative_final_exports_source_kg; current_sealed_unused_source_kg; current_opened_unused_source_kg; current_solution_source_kg; current_film_source_kg; current_toolbound_source_kg; current_heldwaste_source_kg; confirmed_missing_source_kg; signed_residual_source_kg; first_use_kg_s_h; disjoint_preuse_loss_kg_s_h; G_s_h; V_manufacture_s; V_inbound_s; original_owner; original_pool; unused_transfer_source_kg; unassigned_source_kg; all_historical_owner_records; G_old; G_new; m0_old; m0_new; V_old; V_new; source_version; container_ID; complete_container_BOM; first_open_event_ID; preopening_loss_event_ID; cleaned_m2; reserved_failed_cleaning_m2; all_cleaning_area; tool_ID; lifetime_cleaned_m2; water_import_m3; actual_discharge_m3; same_state_measured_density_kg_m3; temperature; gross_kg; tare_kg; receiver_ID; treatment_scope | 各实际单位的原制剂/容器/工具/水/载体分子 |  |
| `c_material` | service_output | 实际收据纸或额外送货包装逐同质完整材料/BOM原来源s保留实际kg或件数。收据纸净量排实测纸芯及独立外包，涂层仍属纸。发运制造/入场原向量按首次使用first_use_quantity_s_h加互斥预用损失相对于原收q0_s一次归属；未用转出/库存保留相同未分配来源。完整包装件数不能用内装物kg。累计最终外送+当前互斥未印未用/已印WIP/已用留存/待运废物+已知缺失+带符号残差=q0_s，以不含新增水/污物的原来源当量单位计。已印WIP保留原纸和实际打印能量来源/责任历史；后续领出替换旧分配，不重复。回用不新增制造。实际最终顾客交付或签署完整混合载体处理，与另运组件互斥；直接载体净kg不再修正。实际共享打印任务按全行/失败打印处理秒份额合计1；固定打印空闲/设备资本用a_power/a_assets。每个需要不同身份的材料/组件/接收方须有实际卡方完整。 | material_source_ID; model_BOM; source_unit; q0_s; first_use_quantity_s_h; preuse_loss_quantity_s_h; unused_transfer; current_unused; printed_WIP; used_retained; held_waste; cumulative_final_exports; confirmed_missing; signed_residual; original_owner; print_job_ID; print_source_ID; print_processing_seconds_h; all_print_processing_seconds; print_energy; final_customer_handover; receiver_ID; gross_kg; tare_kg; source_version | 持续责任的独立原材料及打印来源分子 |  |
| `c_species` | service_output | 逐实际同质服务区z及实测区间t，将设施热/冷/HVAC运营来源与活跃搬运/收银设备来源分开。全部互斥设施HVAC电、燃料、外购热冷及实际设施物种原量均用同一实测w_z_t_h=served_reserved_m2_seconds_z_t_h/sum_all_h(served_reserved_m2_seconds_z_t_h)，含失败/零销量/关闭受益方。正来源须正已知分母，保留原来源/区域/区间/责任/版本。a_power对HVAC线路用此设施驱动，活跃设备和预留设备驱动仍独立。不能将交付热能与供应方已含电/燃料并加，或运行重叠第二能源模块。逐实际燃料先保留实测原物理量/单位/状态。匹配供应方需要质量时，m_fuel_kg=V_fuel_m3*rho_same_state_kg_m3；液体密度/体积须同实测温度/组成，气体体积/密度须同绝对温度/压力/水分/组成及参考状态。供应方需要能量时，E_fuel_MJ=m_fuel_kg*NCV_actual_MJ_kg，质量与热值同实测水分/组成基准。已质量量不再乘密度、已能量量不再乘NCV，不能用HHV代NCV；仅实测质量不强制换能量。外购热量为实际供应交付MJ及精确阶段范围，不按通用效率从燃料反推。各燃料/上游供应与燃烧运营阶段互斥。 直接燃烧物种仅采用实测绝对进/出口质量通量模式，不用排放因子模式或已差分输出。逐实际外排口和匹配入口，同步记录区间绝对原物种浓度C_raw_g_out_i/C_raw_g_in_i（mg/干参考m3）、独立仪器空白B_g_out_i/B_g_in_i及积分体积V_out_dry_ref_i/V_in_dry_ref_i。逐通道仅一次C_corr=C_raw-B，再减一次实际进气背景。同一实测体积区间各仪器须同一声明T_ref/P_ref、干基、组成且浓度无氧归一。仪表若输出实际湿m3，仅一次换V_dry_ref=V_wet_actual*(P_actual/P_ref)*(T_ref/T_actual)*(1-y_H2O)*(Z_ref/Z_actual)，绝对K/Pa、实际实测水摩尔分率及有据压缩因子；已干参考体积不再修正。积分对外净物种kg为N_comb_g=sum_i(C_corr_g_out_i*V_out_dry_ref_i-C_corr_g_in_i*V_in_dry_ref_i)*1e-6。变化流量/浓度须按同步增量分时积分，不乘无关平均状态。控制边界覆盖全部实际进出口及留存/捕集物种变化；任一出口、捕集/库存变化未测，或出现未解负值，本窄直接模式在具体匹配测量扩展前不完整。负值保留不确定性，不截零或作吸收抵扣。燃料供应方已覆盖同原事件/物种/阶段燃烧物种时，不得再加此直接模式；须实际分离上游/运营覆盖。绝对原量、已空白校正量、已背景差分量不能混用；已处理且不能恢复原量/空白记录的数据在本模式下不完整。 逐实际制冷剂物种g采用一个固定独立对外通量测量模式refrigerant_flux_mode=absolute_inlet_outlet_massflux。在每一实际控制体对外通风/围护出口及匹配外部入口，同步实测原绝对制冷剂浓度refrigerant_C_raw_g_out_i/refrigerant_C_raw_g_in_i及独立仪器空白refrigerant_B_g_out_i/refrigerant_B_g_in_i（均mg/干参考m3），并测同区间积分refrigerant_V_out_dry_ref_i/refrigerant_V_in_dry_ref_i。精确采用前述干参考状态、仅必要时湿体积换算、无氧归一，各通道空白/背景各扣一次。F_external_measured_g=sum_i((refrigerant_C_raw_g_out_i-refrigerant_B_g_out_i)*refrigerant_V_out_dry_ref_i-(refrigerant_C_raw_g_in_i-refrigerant_B_g_in_i)*refrigerant_V_in_dry_ref_i)*1e-6 kg。变化浓度/流量须拆同步增量，不用无关平均状态、建模者另选速率/因子模式或残差推算通量。须覆盖全部实际外部开口及采样区间；通量、状态或进出口覆盖未知即不完整。保留实际外部介质及实测留存/捕集库存；设备向室内泄漏为内部，不是该对外通量。对账R_g=opening_control_stock_g+imports_g-closing_control_stock_g-nonair_external_exports_g-F_external_measured_g，均同区间物种kg。R_g>0为未解缺失、R_g<0为未解超额，二者都不能自动作空气排放或抵扣。回收和整机内含出口仅在实际外部门作为非空气外送，逐来源份量一次；内部回收/转移仅替换内部位置。同一回收不能又作另一捕集外送扣除。实测F_external_measured_g及准入直接N_comb_g按设施w_z_t_h归属一次，精确已归最终责任的量仅跳过有据先前层。每一实际燃料/制冷剂/排放/载体须具名原子卡、属性/单位/实际介质及协议/供应方才完整。全期实际设备/服务存在/不存在/未知含租赁/共用/房东设备，不存在须签署证据，未知不是零。 | equipment_ID; equipment_owner; served_zone; interval; presence_state; source_ID; source_stage; source_version; original_owner; original_pool; source_unit; source_quantity; served_reserved_m2_seconds_z_t_h; all_served_reserved_m2_seconds_z_t; w_z_t_h; delivered_MJ; fuel_species; fuel_quantity; fuel_unit; fuel_state; V_fuel_m3; rho_same_state_kg_m3; m_fuel_kg; NCV_actual_MJ_kg; E_fuel_MJ; fuel_temperature; fuel_pressure; fuel_moisture; fuel_composition; fuel_reference_state; provider_combustion_scope; combustion_event_ID; combustion_mode; species_g; C_raw_g_out_i; C_raw_g_in_i; B_g_out_i; B_g_in_i; C_corr_g_out_i; C_corr_g_in_i; V_out_dry_ref_i; V_in_dry_ref_i; T_ref; P_ref; V_wet_actual; P_actual; T_actual; y_H2O; Z_ref; Z_actual; volume_state_mode; concentration_state; oxygen_normalization_absence; sampling_interval; synchronized_flow_concentration; duct_ID; all_external_inlet_outlet_inventory; retained_capture_change; N_comb_g; refrigerant_flux_mode; refrigerant_C_raw_g_out_i; refrigerant_C_raw_g_in_i; refrigerant_B_g_out_i; refrigerant_B_g_in_i; refrigerant_V_out_dry_ref_i; refrigerant_V_in_dry_ref_i; refrigerant_sampling_interval; all_refrigerant_external_openings; F_external_measured_g; opening_control_stock_g; imports_g; closing_control_stock_g; nonair_external_exports_g; R_g; recovery_ID; whole_equipment_transfer_ID; external_medium; vent_flux_measurement; capture_stock; calibration; absence_evidence | 实际归属设施热/电/燃料来源及直接实测对外物种，含独立带符号残差 |  |
| `c_complete` | service_output | 仅在b_support各条件及实际流/供应方身份满足后，将每个外部归一交换z_j_r按精确原分母/核算池/版本恢复自身原分子N_j_r=z_j_r*D_j；原量模块直接保留N_j_r。按固定方法仅补尚缺source→运单→原责任份额。对逐相容精确exchange UUID/属性/单位/物态/介质及生命周期边界r，在source/event/object/time/stage去重后，原N_r=N_core_r+sum_j N_j_r，再amount_r=N_r/Q一次。核心原量含3.6*E_h及failed_original N_F一次展开的W_F，不用已除Q的卡值；排除S制造/入场、三个具名保管Product旁账及供应方已含能源/资产/维修/处理。不能把kg加MJ、件数加质量、归一量加原量、或完整包与其展开组成并加。实际来源/分母/身份/阶段/卡/存在证据缺失即保持局部/不完整。 | module_ID; raw_or_normalized; z_j_r; D_j; N_j_r; N_core_r; E_h; N_F; W_F; I_F; source_ID; event_ID; object_ID; time_interval; lifecycle_stage; exchange_UUID; property_UUID; unit; state; medium; original_owner; original_pool; version; Q | 实际补齐后方可形成相容完整归一交换清单 | ghg2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_route | retail; failure; custody | 须实际实体混合店最终零售选购付款、未开封单批身份及签署最终送达；渠道/型号/版本/BOM冲突保持阻断。 | cp_pool；签署门店/供应/接收证据 |
| q_balance | retail; failure; custody | 保留每一失败/零销量/未解原包及全来源历史。对账分型件数/待运kg和S/F/T/O、正驱动份额、精确原量/归一模式及全历史替换；调查带符号残差与不确定性，不得缺失=0。 | cp_failure；cp_custody；cp_power；cp_support及版本守恒/重叠审计 |
| q_complete | retail; failure; custody | 每一具名支持来源有实际存在判定、原子身份/数量/供应方及固定方法采集前，不得称完整服务数据集；完整混合处理须实际全组成/状态接收。本PCR不提供经验范围/默认值或科学/合规批准。 | 具来源补全登记、原官方绑定记录及负责人签署供应覆盖 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `v_applicability` | retail; failure; custody | b_route/b_machine gate或必需限定缺证即拒用；排除网络/批发、不同硬件及已开/上电路线；仅目录相似不足。 |  |
| `v_measure` | retail; failure; custody | 须Q>0、单一归一参考分母、逐卡正确属性/单位及协议过程/行链接。查原F一次展开、实际直接废物kg和分型库存平衡；不得用净重/运输重量替代件数。 |  |
| `v_provider` | retail; failure; custody | 实际流/供应/介质未解、来源/分母缺失、正来源驱动总量未知/零、去向未知、载体不支持或来源阶段重叠时拒绝完整状态，保留局部核心披露及不确定性。 |  |
| `v_updates` | retail; failure; custody | 后续验收、实物退回、来源去向、包装/版本、供应范围或资产寿命变化均替换全部受影响原记录并再生成双语guidance/投影，不得静默另建独立池。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 仅实际支持补齐后的精确合格送达零售服务；GOODS+service系统另加S上游一次 |
| allowed_use | 全部具名补全/身份/现场条件通过前，仅作为须审查的局部核心情景 |
| excluded_use | 完整门店足迹、机器生命周期/使用、网络/批发/专门店服务、声明类别外配置、避免产品主张或安全/合规认证 |
| required_metadata | 全部参考限定、实际原来源/接收/渠道/阶段、单位/分母、方法/版本及完整存在/供应登记 |
| required_quality_disclosure | 候选方法、局部核心、每一未验流/供应/量及冲突、原数据期间/不确定性、历史身份观测及科学审查状态 |
| update_trigger | 按v_updates处理后续验收/退回/去向、原配置/BOM、供应范围、方法、寿命或边界变化 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un621 | official_guidance | UNSD CPC3.0 subclass-group621 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/621 | 实体非专门店渠道；不能以未经证明的网上送货代替该渠道证据 |
| un62188 | official_guidance | UNSD CPC3.0 62188 and group445, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62188 ; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/445 | group445实际商用食品加工机械子集；不称整leaf覆盖 |
| eurodib-hbs | handbook | Eurodib HBS-250L manufacturer product and regional locking-system pages, https://eurodib.com/product/hbs-250l/ ; https://eurodib.com/en-us/product/hbs-250l-can-en-us/ | 实际商用型号/功能及另售刀；地区信息冲突须实际批次证据 |
| eurodib-manual | handbook | Eurodib Operation Instructions for Meat Slicer,2020, PDFpages3–7 and8–12, https://eurodibproductimages.blob.core.windows.net/eurodib-product-images/Eurodib/HBS250L/EURODB_HBS250L_UserManual_Bilingual_2020.pdf | 原HBS-250L身份/组件及排除的下游操作/清洗/上油/磨刀；奶酪/防水冲突未解，不作零售运行默认 |
| eurodib-spec | handbook | Eurodib HBS Slicers sheet linked as2020, actual PDFmetadata2018 and 10in image labelledHBS-250JS, https://eurodibproductimages.blob.core.windows.net/eurodib-product-images/Eurodib/HBS250L/EURODIB_HBS250L_SpecSheet_EN_2020.pdf | 防止自动等同型号/规格/净重与运重的反证；非实际BOM、LCI或实测质量 |
| costco-hbs | handbook | Costco Business Delivery, Eurodib10in slicer Item294577/modelHBS-250L, https://www.costcobusinessdelivery.com/p/-/eurodib-commercial-10-electric-meat-slicer/4201068265 | 仅真实型号页面及零售商送达/退回条款；不证明实际合格实体店零售交易或分店可售 |
| ghg2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, chapter6 PDFpage30 and chapter9 PDFpage65, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般功能服务单位、过程细分及实物关系原则；具体服务/来源/寿命公式为PCR设计，不称来源强制或整标准符合 |
