---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-machinery-and-equipment-n-e-c
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 原装 NIBCO NL998X8 全通径球阀的非专门店零售服务

## 1. 范围与适用性

声明对象为一种特定球阀配置的增量实体零售服务。下列支持的规范规则固定适用条件、归属、补齐及缺失处理。本candidate明确含局部核心，实际现场值、供应方身份及独立科学审查仍待完成。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-machinery-and-equipment-n-e-c |
| classification_refs | CPC 3.0 62189; narrower; goods43240 |
| covered_products | 适用混合实体店内保持完整的实际单修订未用NL998X8原配置 |
| excluded_products | 其他阀型号/口径/驱动/材料状态、通用机械、批发/网购/配送、安装/测试/使用及改装拆解品 |
| representative_product | NIBCO NL998X8；T-FP-600A-LF；3/4英寸内NPT螺纹×内NPT螺纹；标准手柄 |
| production_route | 实际混合品类货架选货→有人收银/付款→完整实物取走；收退/截止对账 |
| market_state | 新完整未用阀；完整使用前核实实际供应原独立包装/BOM及批次 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 特定完整阀的实体店零售验收服务 |
| How much | 一个最终有效不同原件服务 |
| How well | b_route/b_channel精确批次/配置、完整未用状态、实体选择/收银/取走及签署验收 |
| How long or cycle | 事先定义同场址/配置批群至截止及以后验收/来源修订 |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 一只最终有效验收原装 NIBCO NL998X8 球阀的零售服务 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | 实际混合店选货/收银证据; 实际场址时间和池/截止; NL998X8批次修订; 实际单件/主箱包装BOM; 完整未用gate及排除; 最新有效验收; 原来源和S/F/T/O历史; 局部核心及补齐状态; 原单位/分母/供应边界; 不确定性及未绑定身份 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | service_output; failed_original; supplier_return; internal_transfer; external_retention | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 计实际单个完整原件，不计主箱、标称质量或额定水力功能；最终量仅每参考流及共同Q。 |
| m_energy | electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | c_electricity实际kWh按精确3.6MJ/kWh换算，无额定阀功率或阀运行能量。 |
| m_waste | intact_valve_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 实测同状态整运单净量，不以厂家标称质量或箱运输重量把实际件数换废物kg。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 店接收完整未用同批原配置，供应方发运W_j与运输I_j分离 |
| starting_condition_role | 零售保管入口，不证明上游零负担 |
| product_classification_scope | 62189中较窄特定43240阀零售服务，不等同整leaf |
| recursive_input_rule | failed_original仅实际F制造输入，具名保管输出为不表征卫星；成功S仅属下游GOODS，不再把整商品制造递归入零售。 |
| upstream_dataset_requirement | 精确原W_j/I_j、单件/主箱包装分离、实际供应阶段/分母及S/F/T/O延续 |
| disclosure | 局部增量核心，实际服务/商品/废物身份及现场来源未核实须持续明确至完成 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | retail; custody; residual | 仅实际单批次/修订的 NIBCO NL998X8、T-FP-600A-LF 3/4英寸内NPT×内NPT、标准手柄两片式全通径阀适用。保留完整原阀体/端盖、球体、阀座、阀杆/填料、螺母、手柄及实际独立原包装。采集供应方BOM、批号及实际单件/主箱配置；不得从照片推定单件厂封或材料组成。其他口径、锁定/加长手柄、带排水款NL999X8CL、焊接/压接阀、已用或拆解阀均不等同。标称0.660磅、0.30kg、箱装12及压力/温度宣称仅供身份识别，不是现场质量、包装数量、LCI或本文采纳的合规限值。 已保留规格将1/2至1英寸组的镀铬低铅黄铜球与更大口径的不锈钢316球区分，另有PTFE阀座/填料及镀层钢手柄/不锈钢螺母；实际批次证据须保留这些部位/状态差异，不能用纯黄铜或不锈钢球代理。 | nibco-item; nibco-spec |
| b_channel | retail | 起点为实际混合品类实体店接收该原配置保管责任，终点为具名客户选择该件、经有人收银台付款并签署有效验收后实际取走。须有带日期的实际品类/陈列、客户选择、收银/付款及交接证据。网购/邮购/批发、配送、安装、压力/泄漏/流量试验、启闭演示、螺纹密封剂/带施加、机加工、清洗、润滑及拆阀均排除。公开商品页不能证明具体分店库存或实际交易。原厂制造/试验仍在原供应方来源内，不推定不存在。 | un621; un62189 |
| b_source | retail; custody; residual | 本记录为增量零售服务核心。成功商品S的制造及入场运输不在服务内；独立声明的下游GOODS系统一次计入同一原S来源。F原商品制造通过failed_original计入，实际F入场运输另按c_transport补齐。逐实际原件来源j保留供应方发运门制造及原独立包装W_j，另列入场运输I_j；打包阶段须有据拆分，否则不完整。每不可分原阀来源S/F/T/O为互斥0/1最终责任标记，不是部件质量份额，合计1：S为最终有效服务，F为未由其他商品/资产系统承接的不可逆零售责任，T为签署具名后继承接同一W_j/I_j，O为开放/未解决责任。实际供应商退货不自动构成T或抵扣。失踪/损失商品保留F或明确O，不得消失。转示范资产仍沿同一原来源进入资产T，不重复全F或新购。重复收货/退回不再取得W_j/I_j。 | ghg2011 |
| b_facility | retail | 本有界干式路线须证明纳入的租赁/共用/房东服务区域在全期不存在现场燃料燃烧/备用机/燃油搬运、制冷剂设备及HVAC/购热购冷。设施主管按营业/闭店/空闲/维护期列实际设备、责任方、服务面积、临时装置和合同，签署适用/不存在/未知。外部燃油车停留在纳入现场gate之外。未知或实际存在时，须经具体已审扩展定义真实物种、活动、状态、实际外界介质及互斥卡/协议后方可使用本路线；阀门不通电不能证明设施不存在这些来源。 |  |
| b_completion | retail | 核心卡不等于完整零售清单。完整状态前须按固定c_transport/c_assets/c_digital/c_clean/c_material/c_merge方法补齐实际运输/搬运，建筑/货架、收银/照明/信息/安防及复用清洁工具资本，事件维修/终末载体，网络/支付/行政/相机采集和存储，设施水/清洁制剂/容器/耗材及处理，实际收据/额外包装来源。每个实际同质来源须有独立原子卡、精确原单位、单过程协议、供应方范围和双语同步才可完整。逐具名项记录实际发生、签署不存在或未知，不可用泛集合交换或自行另选分母/驱动。真实完整合同包仅在签署对象/组成/阶段/分母完整范围且不重复其已含水电、运输、维修或处理时保留。 | jrc-retail |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 完整球阀货架/收银服务 | required | 满足b_route及b_channel | core | service_output |
| custody | 原件实物保管及截止状态 | conditional | 实际退回/转交/外部留存发生，否则保留签署不存在 | satellite | supplier_return |
| residual | 完整原件废物外运 | conditional | 实际整件报废且接收认可外运，零/未知分别记录 | waste_handling | intact_valve_waste |

### 过程：原装阀零售 (`retail`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

实测使用点零售用电；供电技术/供应方仍待实际数据。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: E_MJ/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_retail
- 来源:

###### 原独立零售配置的完整未用 NIBCO NL998X8 球阀 (`failed_original`)

c_goods归F的原完整阀制造/独立包装来源当量，排除另行补齐入场运输和共享主箱。

- 选定流: 原独立零售配置的完整未用 NIBCO NL998X8 球阀
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_F/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_retail
- 来源: nibco-item; nibco-spec

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 一只最终有效验收原装 NIBCO NL998X8 球阀的零售服务 (`service_output`)

最终有效实体零售验收服务，不是物质阀门生产输出。

- 选定流: 一只最终有效验收原装 NIBCO NL998X8 球阀的零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: fixed_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: method_formula
- 采集协议: cp_retail
- 来源: nibco-item; nibco-spec

##### 废物流

##### 基本流

### 过程：实物保管状态 (`custody`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 原独立零售配置的完整未用 NIBCO NL998X8 球阀 (`supplier_return`)

向具名供应方实际毛交回完整原件，仅表示保管。

- 选定流: 原独立零售配置的完整未用 NIBCO NL998X8 球阀
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_R/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_custody
- 来源: nibco-item; nibco-spec

###### 原独立零售配置的完整未用 NIBCO NL998X8 球阀 (`internal_transfer`)

向具名内部资产/其他保管方毛交完整原件，来源T须另有签署承接。

- 选定流: 原独立零售配置的完整未用 NIBCO NL998X8 球阀
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_T/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_custody
- 来源: nibco-item; nibco-spec

###### 原独立零售配置的完整未用 NIBCO NL998X8 球阀 (`external_retention`)

截止时已在店外且无最终有效验收的完整原件库存状态卫星，关联原毛取走，不新建移动或自动废物。

- 选定流: 原独立零售配置的完整未用 NIBCO NL998X8 球阀
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_X/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_custody
- 来源: nibco-item; nibco-spec

##### 废物流

##### 基本流

### 过程：整件废物 (`residual`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 经接收完整处理的报废完整 NIBCO NL998X8 球阀及其原独立包装 (`intact_valve_waste`)

一个此特定状态的完整原件实际整载体运单，全部材料须接收认可，不能用纯黄铜废料代理。 按c_stock，仅唯一最终接收且实际完整处理的净载体量套匹配完整处理provider；不成功的移动尝试保留原保管/运输记录。

- 选定流: 经接收完整处理的报废完整 NIBCO NL998X8 球阀及其原独立包装
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_out/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_waste
- 来源: nibco-item; nibco-spec

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_once | retail; custody; residual | 优先直接实测分区；剩余逐同单位来源池k按N_k_h=N_k*d_k_h/sum_all_h(d_k_h)分配。保留所有实际受益方、失败/零销量/空闲预留及闭店期。正N_k须实测已知正分母，未知不是零，也不重归一已知份额。分开不同量纲驱动类别并将原来源池对账至父总量；电量、面积时、事件秒不可相加为一个驱动。保管或废物转移不授予替代/回收抵扣。 | ghg2011 |
| a_power | electricity | 采用互斥经校准线路/来源区间。收银/标签打印活动kWh按事件内实际单件行处理秒分配；收银机、路由器、相机、灯/风扇的空闲/固定用电按含空闲/失败期的预留设备秒分配。设施共用固定线路按服务面积m2*覆盖h。各类原kWh分开并对账父总量；仅父表实际包含子表时才扣子表。E_h为兼容已归属kWh之和，排除b_channel禁止的商品运行。 | ghg2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_retail | retail | electricity; service_output; failed_original | 实际收银、原来源及支持台账 | original_ID; pool_ID; site_ID; configuration; acceptance_version; final_valid_acceptance; cutoff; event_date; gross_pickup_count; refund_only; Q; source_ID; W_j; I_j; S_j; F_j; T_j; O_j; successor_ID; signed_source_handoff; carried_in_source_IDs; genuinely_new_source_IDs; N_F; W_F; I_F; N_R; N_T; N_X; gross_pickup_event_ID; cutoff_state; recipient_ID; meter_ID; parent_includes_submeter; interval_start; interval_end; opening_kWh; closing_kWh; active_kWh; idle_fixed_kWh; facility_kWh; line_processing_seconds; all_line_seconds; reserved_device_seconds; all_device_seconds; area_m2; covered_h; all_area_hours; E_h; E_MJ; trip_ID; segment_ID; provider_scope; original_unit; raw_or_normalized; original_denominator; loaded_vehiclekm; empty_vehiclekm; stationary_idle_vehicleh; loaded_km; empty_km; idle_h; consignment_kg_h; occupied_m3_h; binding_capacity_evidence; reserved_capacity_h; all_reservation_map; A_mode; d_h; all_mode_driver; N_mode_h; attribution_level; final_owner; original_pool; version; asset_ID; material_source_ID; model_BOM; stage_scope; V_v; V_old; V_new; vector_version; e_h; exposure_unit; L_v; lifetime_evidence; all_historical_exposures; e_actual_h; E; f_old_h; f_new_h; delta_h; event_repair_ID; replacement_ID; terminal_carrier_ID; measured_terminal_kg; asset_freight_source; source_quantity; source_unit; component_carrier_model; component_carrier_state; network_source_ID; source_hours; reserved_endpoint_seconds; all_endpoint_seconds; attempt_ID; event_source_raw; line_seconds_h; all_event_line_seconds; capture_ID; footprint_m2_i_h; covered_seconds_i_h; all_capture_area_seconds_i; f_i_h; capture_map_version; actual_capture_raw_i; capture_z_i; D_capture_i; capture_source_ID; capture_original_unit; capture_vector; capture_source_version; storage_source_ID; storage_mode; raw_storage_p; storage_original_unit; storage_D_p; storage_vector; retention_interval; retained_bytes_i; retention_seconds_i; b_i; b_p_i; packet_members; packet_time_scope; all_packet_byte_seconds_p; GB_GiB_mode; exact_owner_pool_version; source_portion_ID; m0_s; cumulative_final_export_s; current_factorysealed_unused_s; current_opened_unused_s; current_solution_s; current_surface_film_s; current_tool_bound_s; current_held_waste_s; known_missing_s; signed_residual_s; source_state_location; state_transition_ID; first_use_s_h; pre_use_loss_s_h; G_s_h; V_mfg_s; V_in_s; G_new; G_old; m0_new; m0_old; unused_transfer_s; current_unassigned_s; signed_unassigned_s; original_owner; all_historical_records; container_ID; container_count; complete_container_BOM; first_open_ID; preopen_loss_ID; reuse_absence; tool_ID; cleaned_m2; washing_source_ID; inlet_m3; discharged_m3; same_state_measured_density_kg_m3; temperature_C; wet_carrier_gross_kg; wet_carrier_tare_kg; receiver_acceptance; complete_treatment_scope; source_vector_version; cleaning_pass_ID; cleaned_m2_h; sum_all_cleaned_m2; individual_pack_BOM; master_carton_ID; actual_unit_IDs; carton_configuration; homogeneous_service_evidence; carton_vector_mfg; carton_vector_inlet; first_carton_open_ID; actual_unit_count; carton_S; carton_F; carton_T; carton_O; net_receipt_quantity; core_quantity; separate_wrap_quantity; first_use_quantity; pre_use_loss_quantity; cumulative_final_exports; current_unused; current_printed_WIP; current_used_retained; current_held; confirmed_missing_material; signed_material_residual; printed_WIP_source_IDs; print_meter_ID; material_original_unit; material_event_ID; G_e_h; source_receipt_quantity; original_source_vector; printed_line_area_h; all_printed_line_area; blank_cut_margin; responsible_pool; module_ID; z_j_r; D_j; N_j_r; N_core_r; N_r; W_out; exchange_identity; property; unit; state; medium; event_ID; object_ID; time_interval; stage; constituent_scope; ledger_ID; record_ID; supplier_BOM; lot_ID; revision_ID; instrument_ID; calibration_evidence; uncertainty; source_ID; event_date | 库存主管不启闭/拆包原阀，扫描或赋予防篡改original_ID；供应方签署精确配置、单件/主箱包装及发运制造边界。收银员记录实际选货/付款/交接/验收及以后修订。计量员每日记录经校准线路起止读数和a_power驱动，检验表漂/负载并对账父账单。运输、资产、信息及设施负责人在补模块前取得实际原合同、版本活动导出、全部受益分母及c_transport/c_assets/c_digital/c_clean/c_material字段。保留原ledger_ID/record_ID/source_ID，每来源仅一次观测；每项实际新增卡须有本过程协议。 归属汇总方法：对原数据应用c_q/c_goods/c_electricity及固定支持方法；按c_merge恢复zD、去重并仅除一次最终Q；每参考流 | Item(s)；kWh；MJ；实际来源单位；kg；m3；m2；秒；小时；字节*秒 | 每次保管/付款/验收、每日表计、每次来源/寿命修订 | 整个预定核算池、闭店/空闲/失败期及完整资产/来源历史 | 实际混合实体店及具名供应/服务来源 | 每参考流 | 带日期陈列/付款/验收、供应BOM签字、校准表秤、来源边界及版本/驱动对账 |
| cp_custody | custody | supplier_return; internal_transfer; external_retention | 原实物事件及截止状态 | original_ID; source_ID; W_j; I_j; S_j; F_j; T_j; O_j; successor_ID; signed_source_handoff; carried_in_source_IDs; genuinely_new_source_IDs; N_F; W_F; I_F; N_R; N_T; N_X; gross_pickup_event_ID; cutoff_state; recipient_ID; Q; opening; new_receipts; physical_customer_returns; physical_supplier_returns; transfer_in; gross_pickups; gross_supplier_returns; transfer_out; confirmed_missing; condemned_count; observed_close; predicted_close; signed_count_residual; condemnation_event_ID; opening_waste_kg; condemned_kg; dispatched_waste_kg; known_missing_waste_kg; observed_waste_close_kg; predicted_waste_close; signed_waste_residual; gross_consignment_kg; tare_kg; W_out; ledger_ID; record_ID; supplier_BOM; lot_ID; revision_ID; instrument_ID; calibration_evidence; uncertainty; event_date; waste_attempt_ID; original_consignment_ID; physical_dispatch_event_ID; return_event_ID; returned_original_ID; returned_gross_kg; returned_tare_kg; returned_waste_kg; treatment_receipt_ID; final_treatment_status; final_processed_gross_kg; final_processed_tare_kg; final_processed_net_kg; processed_original_IDs; treatment_scope; receipt_version; no_movement_revision | 库存人员记录每次实际签署供应方/内部交接及当前外部留存接收方/状态。按标记原件计数，每日/截止依c_stock对账商品专属毛实物库存。共享原ledger/record/source ID与cp_retail匹配，保管视图不新建来源/观测；外部截止状态仅原毛取走QA，不是新移动。 归属汇总方法：c_goods实物量/Q一次，c_stock保留原量；每参考流 废物kg字段仅QA读取同一cp_waste原ledger_ID/record_ID/source_ID，cp_custody不二次称重、归属或归一废物账。 | Item(s)；kg仅取原cp_waste账作QA；时间戳 | 每次实物事件及截止/后续修正 | 原配置核算池及全部退回历史 | 具名实际供应方、内部资产保管方及外部接收gate | 每参考流 | 唯一ID、签署交接/当前状态、实盘及未解决残差调查；原运单/退回ID及实际最终处理对账 |
| cp_waste | residual | intact_valve_waste | 完整原件废物运单 | opening; new_receipts; physical_customer_returns; physical_supplier_returns; transfer_in; gross_pickups; gross_supplier_returns; transfer_out; confirmed_missing; condemned_count; observed_close; predicted_close; signed_count_residual; condemnation_event_ID; opening_waste_kg; condemned_kg; dispatched_waste_kg; known_missing_waste_kg; observed_waste_close_kg; predicted_waste_close; signed_waste_residual; gross_consignment_kg; tare_kg; W_out; Q; module_ID; raw_or_normalized; z_j_r; D_j; N_j_r; N_core_r; N_r; E_h; N_F; exchange_identity; property; unit; state; medium; source_ID; event_ID; object_ID; time_interval; stage; constituent_scope; attribution_level; original_pool; version; ledger_ID; record_ID; supplier_BOM; lot_ID; revision_ID; instrument_ID; calibration_evidence; uncertainty; event_date; original_ID; waste_attempt_ID; original_consignment_ID; physical_dispatch_event_ID; return_event_ID; returned_original_ID; returned_gross_kg; returned_tare_kg; returned_waste_kg; treatment_receipt_ID; final_treatment_status; final_processed_gross_kg; final_processed_tare_kg; final_processed_net_kg; processed_original_IDs; treatment_scope; receipt_version; no_movement_revision | 每次报废记original_ID/event_ID，件数与实际整载体kg分开。实际外运用校准秤称毛皮重，保留接收方对完整阀、全部阀座/填料/镀层及原包装的签署接收和兼容完整处理范围。每日/截止对账待运废物，已知失踪和有符号残差分开；不以标称件重换kg，不二次扣库存。共享台账ID保留一个原来源。开封/拆解/混合污染载体须具体已审状态扩展。 归属汇总方法：c_stock实际W_out/Q一次，件数平衡独立；每参考流 每次实际拒收/实物退回均称实际退回毛皮重并关联original_ID、原运单、尝试及退回事件；按c_stock记录最终实际已处理原ID、完整处理证据、最终毛皮重和最新状态/接收版本。全部失败/返运来源仍按c_transport保留；重复尝试不新计报废/制造，无移动状态修订替换原记录。部分处理/状态变化须实际状态专属原子扩展及匹配接收范围后才完整。 | kg；Item(s)仅QA；时间戳 | 每次报废/外运/退回及每日/截止库存 | 完整原池，含待运废物至最终签收；实际最终处理状态及每次退回/修订 | 实际报废/暂存/外运及具名接收gate | 每参考流 | 校准皮重秤、组成接收、签署处理合同及待运/失踪对账；原运单/退回ID及实际最终处理对账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_q | service_output | Q为事先定义同场址/配置核算池截止时最新签署final_valid_acceptance=true的不同original_ID数量。仅Q>0时服务输出固定1 Item(s)。撤销ID已不在集合，不得再扣。毛取走及每次失败/重复/拒收尝试独立保留。验收仍有效的纯退款不移除Q。迟到撤销按实际日期替换原Q及全部原池分子，不移至新盈利池；Q=0保留原来源且不可归一。 | original_ID; pool_ID; site_ID; configuration; acceptance_version; final_valid_acceptance; cutoff; event_date; gross_pickup_count; refund_only; Q | Q; service_output | ghg2011 |
| c_goods | failed_original; supplier_return; internal_transfer; external_retention | 逐原来源j仅一次应用b_source。N_F=sum_j(F_j) Item(s)，W_F=sum_j(W_j*F_j)。实际failed_original交换为N_F/Q，N_F>0时每原来源当量制造专属provider为W_F/N_F，展开仅得W_F/Q，不再另加W_F。N_F=0不作provider除法。I_F=sum_j(I_j*F_j)为独立实际入场补全。carried_in_source_IDs与genuinely_new_source_IDs集合互斥。物理输出按实际供应商毛交回N_R/Q、内部转交N_T/Q。外部留存N_X/Q为截止时实际在外且无有效验收的不同原ID，是原取走的状态QA视图，不是新移动或再次扣库存。各项需具名接收者/当前完整状态及S/F/T/O责任，不从移动推定T。 | original_ID; source_ID; W_j; I_j; S_j; F_j; T_j; O_j; successor_ID; signed_source_handoff; carried_in_source_IDs; genuinely_new_source_IDs; N_F; W_F; I_F; N_R; N_T; N_X; gross_pickup_event_ID; cutoff_state; recipient_ID; Q | N_F/Q; N_R/Q; N_T/Q; N_X/Q | ghg2011 |
| c_stock | supplier_return; internal_transfer; external_retention; intact_valve_waste | 商品专属predicted_close=opening+new_receipts+physical_customer_returns+physical_supplier_returns+transfer_in-gross_pickups-gross_supplier_returns-transfer_out-confirmed_missing-condemned_count。signed_count_residual=observed_close-predicted_close，正超出、负短缺。gross_pickups仅一次含已验收和从未验收出库；external_retention/无新移动的撤销不再出库。报废仅内部商品转待运废物。独立kg账predicted_waste_close=opening_waste_kg+condemned_kg+returned_waste_kg-dispatched_waste_kg-known_missing_waste_kg；signed_waste_residual=observed_waste_close_kg-predicted_waste_close。以condemnation_event_ID关联件数和实测kg，绝不等同。每次实际拒收/退回废物移动记录original_ID、original_consignment_ID、waste_attempt_ID及return_event_ID；returned_waste_kg=sum实际退回gate的returned_gross_kg-returned_tare_kg，计入待运废物，不新计报废或制造来源。dispatched_waste_kg=sum每个唯一physical_dispatch_event_ID的实际(gross_consignment_kg-tare_kg)，用于库存对账，含拒收尝试，与处理量不同。逐唯一最终已处理原件，从匹配的实际接收/处理证据记录final_processed_net_kg=final_processed_gross_kg-final_processed_tare_kg，W_out为具备经核完整匹配处理的唯一processed_original_IDs之final_processed_net_kg合计。仅外运、仅接收未实际处理、拒收/退回尝试或最终处理状态未解决，不套完整处理provider。无新移动的验收/状态修订替换原treatment_receipt_ID/receipt_version，不新增库存移动。实际部分处理或改变物态，完整性前须有实际状态专属原子卡、匹配接收方/阶段范围及原来源守恒，不默认零，也不将整次尝试按部分工作套完整处理。即使最终W_out=0，所有实际失败/拒收/返运及搬运活动仍按c_transport纳入。W_out是最终实际处理载体的直接净量，不二次作库存/复用/组成/去向修正；W_out/Q和完整处理provider仅一次采用该相同实际质量及边界。 | opening; new_receipts; physical_customer_returns; physical_supplier_returns; transfer_in; gross_pickups; gross_supplier_returns; transfer_out; confirmed_missing; condemned_count; observed_close; predicted_close; signed_count_residual; condemnation_event_ID; opening_waste_kg; condemned_kg; dispatched_waste_kg; known_missing_waste_kg; observed_waste_close_kg; predicted_waste_close; signed_waste_residual; gross_consignment_kg; tare_kg; W_out; Q; original_ID; waste_attempt_ID; original_consignment_ID; physical_dispatch_event_ID; return_event_ID; returned_original_ID; returned_gross_kg; returned_tare_kg; returned_waste_kg; treatment_receipt_ID; final_treatment_status; final_processed_gross_kg; final_processed_tare_kg; final_processed_net_kg; processed_original_IDs; treatment_scope; receipt_version; no_movement_revision | 分单位实物库存对账；W_out/Q |  |
| c_electricity | electricity | E_MJ=3.6*E_h；electricity=E_MJ/Q。E_h为a_power的原归属kWh，不是已归一kWh/服务。保留实际使用点电压/供应方和时间/地点，通用交流电身份不确定供电mix。 | meter_ID; parent_includes_submeter; interval_start; interval_end; opening_kWh; closing_kWh; active_kWh; idle_fixed_kWh; facility_kWh; line_processing_seconds; all_line_seconds; reserved_device_seconds; all_device_seconds; area_m2; covered_h; all_area_hours; E_h; E_MJ; Q | E_MJ/Q |  |
| c_transport | service_output; failed_original | 逐实际行程/段分别采集原loaded_vehiclekm、empty_vehiclekm、stationary_idle_vehicleh及匹配供应方原单位和能耗/尾气范围。载货d_h仅在有据质量约束时用consignment_kg_h*loaded_km，或体积约束时occupied_m3_h*loaded_km，不合并kg与m3。空驶driver=reserved_capacity_h*empty_km，怠速driver=reserved_capacity_h*idle_h，沿同一行程有据kg或m3预留图及实际带动力怠速时长。N_mode_h=A_mode*d_h/sum_all_h(d_h)，含全部受益者及失败/空闲预留。实际正模式须独立正供应来源及已知正驱动总量。原source→运单→最终原F/资产/材料责任各层一次；供应方运单总量仅跳过行程分配，不跳过最终责任份额。资产/维修/退役运载先归资产，再沿c_assets历史份额。搬运用实际任务/预留秒，不因零吨公里消失。 | trip_ID; segment_ID; source_ID; provider_scope; original_unit; raw_or_normalized; original_denominator; loaded_vehiclekm; empty_vehiclekm; stationary_idle_vehicleh; loaded_km; empty_km; idle_h; consignment_kg_h; occupied_m3_h; binding_capacity_evidence; reserved_capacity_h; all_reservation_map; A_mode; d_h; all_mode_driver; N_mode_h; attribution_level; final_owner; original_pool; version; F_j; asset_ID; material_source_ID | 已归属运输原分子 | ghg2011 |
| c_assets | service_output | 逐实际同质model/BOM/阶段向量V_v，原受益实测暴露e_h与有据预期寿命L_v必须同单位。建筑/货架用预留服务m2*h；收银、灯/风扇、搬运及信息/安防设备用预留设备秒；复用抹布/拖把用唯一清洁遍次实际m2。暂定f_h=e_h/L_v，持续保留所有历史来源/池，累计份额<=1，超量调查。最终报废E=sum_all_h(e_actual_h)>0，f_final_h=e_actual_h/E；每次寿命/向量修订以delta_h=f_new_h*V_new-f_old_h*V_old替换每一历史fV，不新计整件采购。实际事件维修/更换、完整终末载体/运输先归该资产并沿同一历史份额，已证实V含者排除。直接完整报废毛皮重已排移除部件，不再扣。完整包与部件向量互斥，采购/报废件数仅保管对账，不另计当期耗用。 每次维修/更换/处理事件记录实测同质source_quantity及source_unit、实际部件/载体型号状态和签署范围，不将维修材料质量改名成另一整机。 | asset_ID; model_BOM; stage_scope; V_v; V_old; V_new; vector_version; e_h; exposure_unit; L_v; lifetime_evidence; original_pool; all_historical_exposures; e_actual_h; E; f_old_h; f_new_h; delta_h; event_repair_ID; replacement_ID; terminal_carrier_ID; measured_terminal_kg; asset_freight_source; attribution_level; version; source_quantity; source_unit; component_carrier_model; component_carrier_state | 版本化资产原责任量 | ghg2011 |
| c_digital | service_output | 网络每一唯一来源区间的原source_hours按受益reserved_endpoint_seconds/all_endpoint_seconds分配，含失败/空闲预留。支付/行政唯一尝试按event_source_raw*line_seconds_h/all_event_line_seconds分配，含失败尝试。正来源须全部受益已知正分母。逐原capture i以实际互斥足迹/时间及每个受益者冻结f_i_h=(footprint_m2_i_h*covered_seconds_i_h)/all_capture_area_seconds_i。采集生产N_capture_i_h=actual_capture_raw_i*f_i_h，采用经核实原单位/向量/分母；归一量先capture_z_i*D_capture_i还原。未分解采集生产总量保持不完整，直至各原capture来源可核验；未来留存不能重分生产。存储固定字节区间b_i=retained_bytes_i*retention_seconds_i，实际字节变化按时间戳拆区间。逐存储来源p精确选一个模式：直接逐capture raw_storage_p*f_i_h，或实际存储总量raw_storage_p*sum_i((b_p_i/all_packet_byte_seconds_p)*f_i_h)。全部包成员/时间范围及正sum b_p_i须对账。冻结原图不随后续销售/删除改变。直接原字节秒与供应活动是同一存储交换的替代表达，不相加；保留供应方原单位/D/向量及分开采集/存储ID。1GB=10^9字节，1GiB=2^30字节。仅精确最终责任/原池/版本已应用层可跳过，未知份额阻断、不重归一。排除已含现场电/网络/资产重叠。 | network_source_ID; source_hours; reserved_endpoint_seconds; all_endpoint_seconds; attempt_ID; event_source_raw; line_seconds_h; all_event_line_seconds; capture_ID; footprint_m2_i_h; covered_seconds_i_h; all_capture_area_seconds_i; f_i_h; capture_map_version; actual_capture_raw_i; capture_z_i; D_capture_i; capture_source_ID; capture_original_unit; capture_vector; capture_source_version; storage_source_ID; storage_mode; raw_storage_p; storage_original_unit; storage_D_p; storage_vector; retention_interval; retained_bytes_i; retention_seconds_i; b_i; b_p_i; packet_members; packet_time_scope; all_packet_byte_seconds_p; GB_GiB_mode; attribution_level; exact_owner_pool_version | 独立数字服务原分子 | ghg2011 |
| c_clean | service_output | 设施清洁不得清洗/溶剂处理商品。逐制剂原来源s实测收货净m0_s，不含独立容器。持续实物平衡m0_s=cumulative_final_export_s+current_factorysealed_unused_s+current_opened_unused_s+current_solution_s+current_surface_film_s+current_tool_bound_s+current_held_waste_s+known_missing_s+signed_residual_s。各项均原制剂kg，不含新增水/污物；最终外送为互斥具名实际终态。状态变化替换旧库存，薄膜冲洗不再新增原份量。责任另按唯一source_portion_ID首次使用first_use_s_h与互斥使用前损失pre_use_loss_s_h：G_s_h=first_use_s_h+pre_use_loss_s_h，原制造=G_s_h/m0_s*V_mfg_s，原入场=G_s_h/m0_s*V_in_s。m0_s=sum_all_h(G_s_h)+unused_transfer_s+current_unassigned_s+signed_unassigned_s。保留全部历史原责任方/池/版本；制造/入场分别以delta=(G_new/m0_new)*V_new-(G_old/m0_old)*V_old修订每条记录。原阶段拆分未知为不完整。含封口/内衬/标签/胶的一次性完整容器按实际同质件数一次归首次开封或互斥开封前损失，不按制剂kg份额；实际补充/复用须已审寿命扩展。复用布拖按c_assets清洁m2暴露，另记实际工具洗涤来源。入场供水取实际入口m3，内部循环不另输入也不再扣。直接整废液kg=actual discharged_m3*同状态实测density_kg_m3，不作供水平衡扣除。实际整湿废物载体净kg独立按毛皮重实测，与其中原制剂kg不同，不再乘组成/去向份额。真实混合载体须签署全组成接收及完整处理边界，未匹配物种/路径须具体扩展后才完整。 一次首次使用清洁事件服务多池时，该唯一事件领用量及完整首次开容器来源按所有受益实际cleaned_m2_h/sum_all_cleaned_m2分配，含互斥实测失败预留区域清洁遍次。记录实际遍次/份量ID，责任在该事件冻结，不按未来销量；正领用须已知正全面积，原份量后续复用仍沿首次责任。 | source_ID; source_portion_ID; m0_s; cumulative_final_export_s; current_factorysealed_unused_s; current_opened_unused_s; current_solution_s; current_surface_film_s; current_tool_bound_s; current_held_waste_s; known_missing_s; signed_residual_s; source_state_location; state_transition_ID; first_use_s_h; pre_use_loss_s_h; G_s_h; V_mfg_s; V_in_s; G_new; G_old; m0_new; m0_old; V_new; V_old; unused_transfer_s; current_unassigned_s; signed_unassigned_s; original_owner; original_pool; all_historical_records; container_ID; container_count; complete_container_BOM; first_open_ID; preopen_loss_ID; reuse_absence; tool_ID; cleaned_m2; washing_source_ID; inlet_m3; discharged_m3; same_state_measured_density_kg_m3; temperature_C; wet_carrier_gross_kg; wet_carrier_tare_kg; receiver_acceptance; complete_treatment_scope; source_vector_version; cleaning_pass_ID; cleaned_m2_h; sum_all_cleaned_m2 | 分开的原来源与整载体原量 | jrc-retail |
| c_material | service_output | 原独立包装随完整商品W_j/I_j，不另作输入。多只阀的主箱为独立实际同质原来源，记录实际内装unit_ID及经核包装制造/入场来源向量。实际首次开箱时仅当全部件为同实际配置、同包装服务时按实际件数等分完整箱向量；否则本有界路线须待具体已审因果方法后才完整。保留原箱S/F/T/O份额和以后全部单件去向/版本，F份额归零售、S归GOODS各一次，不以估计纸板质量拆环境向量。实际额外收据纸/零售包材逐来源实测净量排芯/外包，记录累计最终外送及互斥当前未用/已印WIP/用后留存/待运库存、失踪及有符号残差。首次使用/使用前损失一次归原制造和入场；未用转交保留未分配来源，复用不再取得。已印WIP带原纸及实际打印source_ID跨期并修订旧版本。直接外运载体质量独立。完整状态前每项实际额外材料卡须明确组成/状态及实际载体/接收方。 各同质材料收货和首次使用/使用前损失量须同实测原单位。逐事件e实际材料量G_e_h追溯至服务原件/池；共享同质打印/标签任务按实际printed line area_h/all_printed_line_area分其实测耗用来源量，不按购物篮价值或未来销售，并将空白/裁边保留在同任务。使用前损失有具名实际责任池，否则明确未分配。来源贡献=(G_e_h/source_receipt_quantity)*original_source_vector，制造和入场分开；保留全部历史分配，量/来源份额修订沿c_clean同delta方法替换。仅当前未分配库存转交可携未分配制造来源，已首次使用库存不可重置。 | individual_pack_BOM; master_carton_ID; actual_unit_IDs; carton_configuration; homogeneous_service_evidence; carton_vector_mfg; carton_vector_inlet; first_carton_open_ID; actual_unit_count; carton_S; carton_F; carton_T; carton_O; material_source_ID; net_receipt_quantity; core_quantity; separate_wrap_quantity; first_use_quantity; pre_use_loss_quantity; cumulative_final_exports; current_unused; current_printed_WIP; current_used_retained; current_held; confirmed_missing_material; signed_material_residual; printed_WIP_source_IDs; print_meter_ID; original_owner; original_pool; version; material_original_unit; material_event_ID; G_e_h; source_receipt_quantity; original_source_vector; printed_line_area_h; all_printed_line_area; blank_cut_margin; responsible_pool | 包装/纸的原分子 | ghg2011 |
| c_merge | service_output; failed_original; intact_valve_waste | 逐实际外来源j保留原N_j_r，或用真实原分母/单位/池/版本将归一z_j_r恢复N_j_r=z_j_r*D_j。仅补尚缺source→运单→最终责任份额。逐相同实际交换身份/属性/单位/状态/介质及兼容边界r，先解决事件/对象/时间/阶段/组成重叠，再N_r=N_core_r+sum_j(N_j_r)。核心原量为3.6*E_h MJ、N_F Item(s)、W_out kg及服务Q，绝非展示的/Q值。排除仅保管卫星输出和S商品背景，F制造一次纳入。最终amount_r=N_r/Q仅一次。不混加原量与归一量、kg与MJ或字节秒与已归属provider活动。原D、单位、重叠、实际身份或必需原子模块未知均不完整。 | module_ID; raw_or_normalized; z_j_r; D_j; N_j_r; N_core_r; N_r; E_h; N_F; W_out; Q; exchange_identity; property; unit; state; medium; source_ID; event_ID; object_ID; time_interval; stage; constituent_scope; attribution_level; original_pool; version | 完整兼容逐交换清单 | ghg2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | retail; custody; residual | 核实原NL998X8批次/标准手柄/独立包装及实际621店内选择/收银路线，不以网页或近名型号代替。BOM未知、开封/返工或来源状态未明阻止完整性。 | cp_retail；供应批号/BOM、陈列及签署实物交易 |
| q_measurement | all inventory rows | 保留原量/单位/分母、校准方法、覆盖、责任/池/版本及不确定性。调查有符号残差和缺失/未知，不填零、截断或编默认。本文无经经验核实区间，敏感性情景须明确标记且不能填补实际来源缺口。 | 仪器检查、原来源台账、差异调查及明确不完整登记 |
| q_complete | retail | 数据生产者须把b_completion每具名来源与实际同质卡/协议/供应身份及精确阶段重叠对账，含零销量/失败/空闲活动。主管签署仅证明其覆盖地点/时间的实际不存在。历史官方身份不是新观测，科学审查、实际测量及供应绑定分别处理。 | 完整发生/不存在/未知矩阵、来源合同及c_merge逐交换审核 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_reference | service_output | 须Q>0、最新验收、精确参考显示/link/计数单位及每个限定，否则无归一服务。 |  |
| v_sources | failed_original; intact_valve_waste | 须原来源S/F/T/O守恒、F制造/入场分离及实际完整载体provider。仅保管行无环境供应者；实际Waste处理必需，不能以保管豁免。 |  |
| v_projection | all inventory rows | 须双语对象/方向/type/UUID/单位/公式/基准/义务对齐、每协议真实过程/作用行、正常生成的当前投影及原证据匹配。schema/fingerprint通过或localized/atomic标记不构成科学/发布批准。 |  |
| v_completion | retail | 执行b_facility、b_completion及c_merge；缺实际身份、具名支持来源、原分母、路线不存在、处理范围或独立审查须披露。绝不把局部核心称完整商品生命周期或全CPC覆盖。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 全部实际身份/来源/模块及审查条件满足后：特定实体零售服务及互斥下游GOODS关联 |
| excluded_use | 整阀制造/使用、运行供水供气、安装/测试、全62189或从本局部核心声称完整服务 |
| required_metadata | 全部参考限定、来源/责任/池/版本、实际场址/配置/路线及供应/模块范围 |
| required_quality_disclosure | 实际数据缺口、未绑定身份、历史身份观测、残差/不确定性、局部范围及待独立科学审查 |
| update_trigger | 实际配置/路线变化、迟到验收/来源/寿命修订、新供应边界或核实身份 |

## 11. 数据源

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un621 | official_guidance | UN CPC Version3.0 group621, explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/621 | 混合实体陈列/客户选择/收银路线，不证明具体分店交易 |
| un62189 | official_guidance | UN CPC Version3.0 subclass62189 and goods43240, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62189 ; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/43240 | 较窄机械阀子集，不覆盖全leaf |
| nibco-item | handbook | NIBCO material NL998X8, T-FP-600A-LF catalog, https://catalog.nibco.com/item/ball-valves-7/t-fp-600a-lf-ball-valve---lead-free--brass--two-pi/nl998x8 | 实际型号/标准手柄/尺寸/NPT身份，标称质量非现场测量 |
| nibco-spec | handbook | NIBCO Lead-Free Brass Ball Valves - Threaded, revised11/16/2021, printedpage46, https://media.nibco.com/m/236dcc33001a944c/original/T-FP-600A-LF-LL-Spec-Sheet.pdf | 完整多材料阀及手柄/口径差异，仍须实际批次/BOM，不采运行默认或批准 |
| ghg2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, chapter9 PDFpage65, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般分区/实物分配一致性，本文自行固定服务边界及具体方法，不宣称完整标准符合 |
| jrc-retail | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector,2013 EUR25998EN, PDFpage18, https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 仅零售来源完整性背景，不采数值基准 |
