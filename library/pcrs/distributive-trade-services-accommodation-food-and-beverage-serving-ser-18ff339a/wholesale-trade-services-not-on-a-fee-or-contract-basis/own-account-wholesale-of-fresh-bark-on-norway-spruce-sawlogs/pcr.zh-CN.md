---
pcr_id: pcr.own-account-wholesale-of-fresh-bark-on-norway-spruce-sawlogs
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 新鲜带皮挪威云杉锯材用原木自营批发

## 1. 范围与适用性

实际新伐带皮挪威云杉（Picea abies）锯材用原木，实际来源交接备妥并接收，经常温自营企业库存条件装卸最终商业验收。排锯材单板纸浆燃料其他树种等级、商人采伐集运去枝造材剥皮锯切窑干保护处理重包使用、零售收费代理纯仓储。新增真实操作需路线复核，来料原木与锯材不同，不套锯材水密度尺寸等级。

本服务附加排完整实际备妥原木上游含损失商品。独立匹配来源交接及真实接收运输覆盖须达实际接收状态无缺重；互斥终端归属同基线覆盖后所需新增需求缺阶段在链就绪前实际在外集成一次，有完成状态链接原生量时区来源归属阶段损失覆盖。03111路边生产方法仅实际树种等级状态交接覆盖匹配才可上游，其1m3皮内实积装车待运路边及有条件已完成进料入口不替代最终数量批发。不重复生长采伐备料或漏真实超交接接收运输。实际批发商场内装卸及服务边界内发运、接收方运输与处理各计一次；接收前来源至收货场址运输属于匹配商品上游，不在服务重复，木皮水非交换库存，不自动生长固碳腐解排放。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-fresh-bark-on-norway-spruce-sawlogs |
| classification_refs | CPC3 61093原木，仅较窄03111新鲜带皮Piceaabies锯材用原木 |
| covered_products | 实际新鲜带皮挪威云杉原木常温所有权转售最终企业货批服务 |
| excluded_products | 其他树种用途等级锯制品商人林木伐采备料剥皮锯干保护使用；零售代理纯仓储 |
| representative_product | 真实树种批木号锯用等级实积堆积皮内外原生尺寸检尺水密度净重支撑状态接收最终交接 |
| production_route | 实际备妥原木来源交接及匹配真实接收运输 -> 所有权接收常温库存条件装卸 -> 最终企业验收转售 |
| market_state | 物理商人数量，真实木皮水原木体重数非交换审计，不森林生长锯材输出 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成新鲜带皮挪威云杉锯材用原木自营批发货批 |
| How much | 1 Item(s) |
| How well | 真实新鲜带皮Piceaabies锯材用原木树种等级量状态检尺企业验收有来源，不木材性能未来干燥保证 |
| How long or cycle | 真实接收至最终验收、库存报告期间和完整资产阶段，无验收资源保留 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成新鲜带皮挪威云杉锯材用原木自营批发货批 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_purchase_ownership_resale; actual_B2B_buyer; FINAL_gate_time_source_reversals; Picea_abies_species_lot_log_ids; fresh_harvest_bark_on_sawlog_grade; actual_prepared_source_receiving_gate; solid_versus_stacked_volume_basis; underbark_overbark_wood_bark_denominator; native_dimensions_scaleformula_calibration; actual_barkcorrection_sample_source; water_wetdry_definitions_sample; representative_density_temperature_native_source; netmass_support_count_state_genealogy; actual_start_end_timezone_duration_source; source_terminal_baseline_completedintegration_receipthaul_owner |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| log_volume | 非交换原木审计 | 实际木实积体积；数量；长度 | 原生长径及有实积堆积皮内外基准m3 | 真实树种等级木号校准检尺公式及全部原生尺寸输入修约锥度样品来源证据，木实积不堆空体积，堆转实仅真实兼容堆积因子，不通用锥度尺寸表默认或损坏OCR公式。 | forest-research-sawlog-tables-1987 |
| bark_denominator | 木皮体积视图 | 体积及体积比，非质量分数 | 兼容m3皮内木m3皮m3皮外；比或百分数 | 同真实定义样品r_bark=V_bark/V_under，V_over=V_under*(1+r_bark)，V_under=V_over/(1+r_bark)。仅实际皮内木体积百分数才先除100，不皮/皮外质量或皮/皮外体积，不推皮重商人剥皮。需真实本地修正来源，不旧表皮率。 | forest-research-sawlog-tables-1987 |
| water_density_mass | 实际木皮水质量状态 | 质量；仅水分数比；匹配质量体积密度 | 原生质量体积密度温度单位样品基准 | 仅水同样品w_wet=m_water/m_as_received；m_nonwater=m_as_received*(1-w_wet)；兼容r_dry=m_water/m_nonwater则w_wet=r_dry/(1+r_dry)，百分比先转。其他挥发物干燥失重非水干木损失。密度换算仅真实树种组分皮体积水状态温度单位来源，锯材密度水非新原木默认。净重排真实货外支撑皮重保皮水。 | metsa-spruce-log-sawn-boundary |
| FINAL_reference | 服务清单 | 数量分母；各真实物理行属性 | Item(s)分母；各原生行单位每Item(s) | 真实商人购买所有权转售企业买方最终交接时间来源撤销确定唯一N，完整全部使用方事件期间原生物理归属后正N一次，N0资源保留不除，皮内m3生产非数量服务身份。 |  |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际新伐带皮Piceaabies锯材用原木备妥来源接收交接，树种等级木号检尺实积堆积皮内外原生水密度质量支撑状态 |
| starting_condition_role | 批发继承完整备妥新原木，不立木或锯干处理木 |
| product_classification_scope | 仅较窄61093/03111挪威云杉带皮锯用原木，不全原木单板纸浆燃料 |
| recursive_input_rule | 交易木皮水留存支撑退回期末为非交换库存，不消耗木材水或新增林木生长，不递归同批发出售。 |
| upstream_dataset_requirement | 完整实际备妥原木来源交接及匹配真实接收运输覆盖含损失商品在服务外一次。既有03111皮内实积m3装车待运路边生产仅树种等级状态交接来源覆盖真实匹配才可上游，有条件已完成进料跳过已做责任不丢上游。同基线覆盖互斥终端归属后真实超门槛运输缺阶段所需新增需求在外一次集成，链就绪前有已完成集成量状态链接时区来源归属覆盖。 |
| disclosure | 真实木批树种等级新鲜带皮来源交接检尺公式尺寸校准皮比基准样品水密度净重支撑时间最终、完整来源终端基线新增集成接收运输及资源服务商资产货运接收归属未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_once | 商品接口 | 备妥原木含损失上游与真实接收运输外部覆盖一次，商人服务接收处理一次。来源生产m3路边门槛不可替代最终数量，匹配后勿重复生长伐采备料或漏超门槛运输。 |  |
| source_limits | spruce_sawlog_wholesale | Metsa来料原木与剥皮锯干成品不同，不移锯材水密度。FR1987二版1998重印旧检尺背景不通用锥度长度表皮率，仅实际皮内木体积比定义换算，不引用OCR坏公式或体积百分数作质量百分数。 | metsa-spruce-log-sawn-boundary; forest-research-sawlog-tables-1987 |
| stock_not_growth | 状态去向 | 树皮留附非自动剥皮，水质量变化未知差额不干木损失腐解CO2尘零，不商人库存生长固碳。真实收集木皮与整木混废液物种互斥。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| spruce_sawlog_wholesale | 新鲜带皮挪威云杉原木商人接收及最终交接 | required | 实际新鲜带皮挪威云杉锯用原木自营最终企业验收 | 接收文件目视树种等级检尺状态库存装卸交接，无林木加工使用 | `accepted_service` |

货批与木场批次连续辅助期间交叠。链接实际接收文件目视树种等级检尺记录条件及既有或实际代表量测、清理换批闲置取消失败拒收隔离未完成发运最终事件至批期间。无每木剥皮锯干试验。蓝变裂损失皮湿变降级按真实供方退回期末待决可用其他用途或接收废弃，不自动整木损失排放。新增含外包操作需复核，实际样品移除退回去向一次。N0保留事件期间资源有据群不除不删，正最终N归一一次。

### 过程：新鲜带皮挪威云杉原木商人接收及最终交接 (`spruce_sawlog_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_energy 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：真实计量区间全部使用方含闲置失败未完成服务商范围，不每原木森林轮伐耗电。

###### 实际液态处理自来水供给 (`facility_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：实际水源用途原生体积独立去向，购水非废水体积水分。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：真实使用事件净库存组成耗载体证据，不以皮木重作消耗输入。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：原生期初净收期末去向适用燃料身份密度温度换算，收货非实烧。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成新鲜带皮挪威云杉锯材用原木自营批发货批 (`accepted_service`)

一个真实唯一最终企业货批，商品为新伐带皮Piceaabies锯材用原木实际备妥接收交接，真实等级体积基准湿重状态时间限定，不原木件m3吨或生长木。

- 选定流：已完成新鲜带皮挪威云杉锯材用原木自营批发货批
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：购买所有权转售企业买方最终交接来源撤销、树种批木号等级实积堆积皮水检尺原生量时间来源，不锯材含水密度默认。

##### 废物流

###### 废弃完整新鲜带皮挪威云杉锯材原木 (`discarded_logs_atomic_case`)

仅在实际独立记录确认“废弃完整新鲜带皮挪威云杉锯材原木”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_logs`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整新鲜带皮挪威云杉锯材原木
- 流属性/单位：Mass / kg
- 数量规则：按 cp_logs 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_logs`

范围证据要求：真实去向接收原生重体数对应水皮来源交接处理，不残余损失等CO2回收抵扣。

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alluser_resources | 服务 | 直接真实追溯或量×兼容目标驱动/正完整全部使用方驱动原生单位基准方法状态时间来源，全部使用方期间闲置取消失败隔离未完成保留。所有权转售企业交接撤销后唯一最终N仅正值归属总量除一次，N0保留，不原木体积价格默认驱动。 |  |
| source_completed_once | 商品 | 直接真实实测追溯归属需求原生量状态直接证据互斥终端，或实际来源交接量×目标驱动/来源全终端驱动。正完整全终端最终验收可用其他退回期末有据损失各量单位基准方法状态时间来源链接归属，不仅验收不叠直接驱动未知不零。来源归属基线新增原生量换算互斥损失归属实际树种等级皮状态交接接收运输覆盖匹配。同基线阶段损失覆盖后所需新增缺阶段真实在外集成一次，已完成状态原生量链接时区来源归属覆盖，待办非链就绪。 |  |
| supply_stock | 用品 | S=归属期初+净真实材料收货-含留存回收期末，收货排用品容器皮重。二选一：(1)毛S/N记输入，实际匹配未用外退量/N单列输出；(2)净耗用(S-退回)/N记输入且省略对应退回输出。不得把退回量加到输入或重复抵扣；内部回收期末，不以木皮回收扣不相关用品负量抵扣。 |  |
| fullasset | 资产服务商 | 实际已用驱动/完整寿命全部使用方驱动原生单位基准方法状态时间来源，完整制造维护真实更换终结各使用方期间，观察有据剩余退役不确定性敏感性更新，资产或完整寿命服务商二选一N一次，不森林轮伐默认。 |  |
| exclusive_fates | 库存接收 | 整带皮湿原木与真实独立木皮支撑接收混载体吸液碎屑游离容装水直接物种互斥不可相加，核服务商范围后接收运输处理一次。可用其他降级不自动废物抵扣，失水非干木损失CO2。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | spruce_sawlog_wholesale | 最终验收服务 | 真实商人最终验收 | consignment_id; merchant_id; purchase_evidence; ownership_evidence; resale_evidence; business_buyer_id; acceptance_gate; acceptance_time; acceptance_source; reversal_ids; reversal_status_source; unique_FINAL_accepted_ids; N; N_period_cohort; model_SKU_lot_ids; log_component_support_genealogy; actual_BOM; completeness_condition_evidence; buyer_criteria_source; start_time; start_time_source; end_time; end_time_source; time_zone; time_unit; duration; duration_unit; duration_method; duration_source; site_id; campaign_id; reporting_period; cancelled_failed_rejected_unfinished_ids; no_acceptance_resource_owner; attribution_owner | 真实购买所有权转售企业买方最终交接时间来源已核撤销确期间群唯一最终N，不木件m3吨，供方收货不足。保留取消失败隔离未完成资源时区时长单位方法来源，N0不除。 | 真实数量Item(s)原生时间戳时长 | 每实际事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间及完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_logs | spruce_sawlog_wholesale | 非交换原木木皮水及实际废弃 | 真实树种检尺状态来源审计 | species; species_source; log_ids; source_lot_id; harvest_date; harvest_date_source; sawlog_grade; grade_source; fresh_bark_on_state; condition; condition_method; condition_time; condition_source; prepared_source_gate; receiving_gate; gate_match_evidence; upstream_stage_coverage; producer_reference_basis; roadside_to_receipt_transport_owner; roadside_to_receipt_transport_coverage; log_count; log_count_unit; log_count_basis; log_count_method; log_count_state; log_count_sample_time; log_count_source; actual_repeat_count; actual_repeat_count_unit; actual_repeat_count_basis; actual_repeat_count_method; actual_repeat_count_state; actual_repeat_count_sample_time; actual_repeat_count_source; quantity_each_or_total; volume_solid_or_stack; volume_under_or_overbark; length; length_unit; length_basis; length_method; length_state; length_sample_time; length_source; diameter; diameter_unit; diameter_basis; diameter_method; diameter_state; diameter_sample_time; diameter_source; diameter_position; rounding_method; actual_taper; actual_taper_unit; actual_taper_basis; actual_taper_method; actual_taper_state; actual_taper_sample_time; actual_taper_source; scale_formula_id; scale_formula_body; scale_formula_source; scale_formula_input_records; scale_input_id; scale_input_quantity; scale_input_quantity_unit; scale_input_quantity_basis; scale_input_quantity_method; scale_input_quantity_state; scale_input_quantity_sample_time; scale_input_quantity_source; scale_calibration; scale_calibration_time; scale_calibration_source; V_under; V_under_unit; V_under_basis; V_under_method; V_under_state; V_under_sample_time; V_under_source; V_bark; V_bark_unit; V_bark_basis; V_bark_method; V_bark_state; V_bark_sample_time; V_bark_source; V_over; V_over_unit; V_over_basis; V_over_method; V_over_state; V_over_sample_time; V_over_source; V_stack; V_stack_unit; V_stack_basis; V_stack_method; V_stack_state; V_stack_sample_time; V_stack_source; stacking_factor; stacking_factor_unit; stacking_factor_basis; stacking_factor_method; stacking_factor_state; stacking_factor_sample_time; stacking_factor_source; r_bark; r_bark_unit; r_bark_basis; r_bark_method; r_bark_state; r_bark_sample_time; r_bark_source; bark_percent; bark_percent_unit; bark_percent_basis; bark_percent_method; bark_percent_state; bark_percent_sample_time; bark_percent_source; bark_ratio_denominator; bark_correction_method; bark_correction_source; sample_ids; sample_representativeness; sample_definition_match; m_as_received; m_as_received_unit; m_as_received_basis; m_as_received_method; m_as_received_state; m_as_received_sample_time; m_as_received_source; m_water; m_water_unit; m_water_basis; m_water_method; m_water_state; m_water_sample_time; m_water_source; water_fraction; water_fraction_unit; water_fraction_basis; water_fraction_method; water_fraction_state; water_fraction_sample_time; water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; water_definition; nonwater_definition; percent_conversion_factor; percent_conversion_unit; percent_conversion_basis; percent_conversion_method; percent_conversion_state; percent_conversion_time; percent_conversion_source; LOD_value; LOD_value_unit; LOD_value_basis; LOD_value_method; LOD_value_state; LOD_value_sample_time; LOD_value_source; LOD_other_volatiles_evidence; density; density_unit; density_basis; density_component_bark_basis; density_method; density_state; density_sample_time; density_temperature; density_temperature_unit; density_temperature_source; density_source; native_conversion_factor; native_conversion_unit; native_conversion_basis; native_conversion_method; native_conversion_state; native_conversion_time; native_conversion_source; log_component_genealogy; wood_bark_water_view; support_tare_scope; receiver_disposition_decision; receiver_decision_source; actual_native_quantity; native_unit; quantity_basis; quantity_method; quantity_state; quantity_sample_time; quantity_source; gross_mass; gross_unit; gross_basis; gross_method; gross_state; gross_sample_time; gross_source; packaging_tare; packaging_unit; packaging_basis; packaging_method; packaging_state; packaging_sample_time; packaging_source; net_finished_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; temperature; temperature_unit; temperature_source; opening; supplier_external_receipts; buyer_returns; closing; business_buyer_dispatch; supplier_returns; useful_other_exits; actual_discard; net_sample_removal; unknown_residual; stock_unit; stock_basis; stock_method; stock_state; stock_sample_time; stock_source; disposition_ids; receiver; treatment_coverage; actual_source_gate_quantity; source_gate_unit; source_gate_basis; source_gate_method; source_gate_state; source_gate_sample_time; source_gate_quantity_source; source_complete_stage_evidence; assignment_view; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_basis; assigned_gate_demand_method; assigned_gate_demand_state; assigned_gate_demand_sample_time; assigned_gate_demand_source; direct_assignment_evidence; exclusive_terminal_links; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; source_all_terminal_driver; source_all_terminal_driver_unit; source_all_terminal_driver_basis; source_all_terminal_driver_method; source_all_terminal_driver_state; source_all_terminal_driver_sample_time; source_all_terminal_driver_source; competing_terminal_driver_records; terminal_record_quantity; terminal_record_unit; terminal_record_basis; terminal_record_method; terminal_record_state; terminal_record_sample_time; terminal_record_source; terminal_record_link; terminal_record_owner; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_state; original_gate_conversion_time; original_gate_conversion_source; baseline_demand; baseline_demand_unit; baseline_demand_basis; baseline_demand_method; baseline_demand_state; baseline_demand_sample_time; baseline_demand_source; baseline_stage_loss_coverage; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_basis; additional_gate_demand_method; additional_gate_demand_state; additional_gate_demand_sample_time; additional_gate_demand_source; exclusive_loss_assignment; commodity_adjustment_owner; required_stage_coverage_records; additional_integration_status; additional_integration_quantity; additional_integration_quantity_unit; additional_integration_quantity_basis; additional_integration_quantity_method; additional_integration_quantity_state; additional_integration_quantity_sample_time; additional_integration_quantity_source; additional_integration_link_id; integration_method; integration_time; integration_source; integration_owner; integration_time_zone; integration_time_source; integration_completed_status; integration_completed_link; integration_stage_loss_coverage; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 真实Piceaabies新伐带皮锯级木号来源接收交接。保各原生尺寸径位置修约检尺公式输入记录单位基准方法状态取样时间来源校准样品，实际本地锥度皮修正不表默认。V_under/V_bark/V_over/V_stack/堆积因子/r_bark/皮百分数各自原生六元数据定义总体，皮内木体积比非皮外质量或体积作质量。独立真实木皮水密度温度单位及湿干水定义百分比换算，其他干燥失重非水。完整湿净重仅排真实外支撑，不损失推物种强剥皮干燥。共享库存元数据用于兼容期初供方外收买方退回期末企业发运供方退回可用其他废弃净样品，收货排买方退回内部移动，发运排其他出口，内部移动消去。来源归属基线新增原生六元数据、直接真实追溯或正完整终端记录含期末退回可用其他有据损失各量单位基准方法状态时间来源链接归属互斥损失换算同基线覆盖匹配树种等级状态交接；生产1m3皮内路边仅匹配且真实超门槛接收运输一次可用。链就绪前所需新增缺阶段真实在外集成一次，有完成状态原生量链接时区来源归属阶段损失覆盖，未知差额不自动干木损失生长腐解排放零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 真实原生木数长径实积堆积皮体积水密度质量单位 | 每实际事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间及完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_energy | spruce_sawlog_wholesale | 电力实际燃烧 | 计量燃烧区间 | meter_id; energy_quantity; energy_unit; meter_start; meter_end; interval; source; operation_purpose; burn_quantity; burn_unit; burn_basis; burn_source; fuel_identity; conversion_factor; conversion_unit; conversion_basis; conversion_source; event_ids; period_ids; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 真实设施计量独立燃烧原生量单位基准方法状态时间来源换算完整全部使用方期间含闲置失败未完成，不由商品推林采锯厂能源。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际kWh原生燃烧单位 | 每实际事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间及完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_supplies | spruce_sawlog_wholesale | 服务用品匹配退回 | 净材料匹配退回 | supply_SKU; purpose; composition; composition_basis; composition_source; provenance_owner; period; opening; external_receipts_net; closing_including_retained_recovery; native_unit; quantity_basis; quantity_source; usable_external_return; return_unit; return_recipient; matched_input_id; matched_state_scope; internal_loop; retained_recovery; waste_quantity; waste_unit; burn_quantity; burn_unit; actual_fate_source; accounting_view; conversion_factor; conversion_unit; conversion_basis; conversion_source; density; density_unit; density_temperature; temperature_unit; density_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 净真实材料收货排用品容器皮重不毛包重，共享原生六元数据覆盖兼容期初收货期末回收退回去向，不同组分自单位。实际品项用途组成条件清理，S=期初+净收-含留存回收期末，毛输入与另记的匹配未用退回输出，或净消耗并省对应出口。原生换算密度温度完整全部使用方驱动来源接收，不商品木皮扣不相关用品负量抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 真实用品原生物理单位 | 每实际事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间及完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_assets | spruce_sawlog_wholesale | 共享资产 | 全部使用方完整资产寿命 | asset_id; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; provider_scope; consumers; periods; used_driver; used_driver_unit; used_driver_basis; used_driver_source; observed_life_driver; observed_driver_unit; observed_history_source; remaining_life_driver; remaining_driver_unit; remaining_evidence_source; termination_evidence; lifetime_all_consumer_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; conversion_factor; conversion_unit; conversion_source; uncertainty; sensitivity; update_trigger; attribution_owner; already_per_reference; observed_driver_basis; remaining_driver_basis; conversion_basis; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; used_driver_method; used_driver_state; used_driver_sample_time; observed_driver_method; observed_driver_state; observed_driver_sample_time; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; lifetime_driver_method; lifetime_driver_state; lifetime_driver_sample_time | 真实木场设施装卸计量周转用具每使用方节点期间完整制造维护更换终结。used_driver/observed_life_driver（observed_driver_*）/remaining_life_driver（remaining_driver_*）/lifetime_all_consumer_driver（lifetime_driver_*）自原生六元数据兼容换算，观察有据剩余退役不确定性敏感性更新，资产或完整寿命服务商二选一N一次，不轮伐捷径。 | 实际已用观察剩余寿命驱动单位；有支持资产当量Item(s) | 每实际事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间及完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_providers | spruce_sawlog_wholesale | 辅助成果 | 实际物理成果覆盖 | provider_id; event_id; native_result; result_unit; result_basis; result_source; service_scope; measurement_method; sample_ids; sample_representativeness; sample_removed; sample_return; sample_fate; material_coverage; energy_coverage; asset_coverage; freight_coverage; receiver_treatment_coverage; excluded_testing_scope; period; conversion_factor; conversion_unit; conversion_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_owner; target_driver_basis; all_consumer_driver_basis; attribution_share; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | 已执行成果自原生六元数据及材料能源资产货运接收范围，供方林木备料检尺记录非商人伐采加工。实际代表样品总体移除退回去向归属，真实新增外包操作复核。 | 实际服务商原生物理成果单位 | 每实际事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间及完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_freight | spruce_sawlog_wholesale | 货运 | 唯一载荷路段该记录份额 | load_id; leg_id; cargo_ids; load_quantity; load_unit; load_basis_each_or_total; load_source; repeated_load_count; repeated_load_count_unit; repeated_load_count_basis; repeated_load_count_method; repeated_load_count_state; repeated_load_count_sample_time; repeated_load_count_source; repetition_source; actual_packed_payload; payload_unit; payload_state; payload_source; vehicle_gross; vehicle_gross_unit; gross_source; vehicle_noncargo_tare; noncargo_tare_unit; tare_source; original_cargo_pack; added_cargo_pack; retained_moisture_finish; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_basis; distance_conversion_source; empty_return_coverage; delivered_provider_coverage; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; that_record_share; unique_scope_owner; already_per_reference; gross_conversion_factor; gross_conversion_unit; gross_conversion_basis; gross_conversion_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_basis; tare_conversion_source; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; payload_basis; payload_method; payload_sample_time; gross_method; gross_state; gross_sample_time; tare_basis; tare_method; tare_state; tare_sample_time; distance_basis; distance_method; distance_state; distance_sample_time; that_record_share_basis; that_record_share_source; gross_basis | 实际包装货载或同状态车辆毛重仅减车辆非货皮重，保湿木皮全部货支撑。毛皮原生基准与每件总量分开，各货载毛皮距换算份额自原生六元数据，repeated_load_count自六项，每件真实次数一次总量不变。sum(唯一载荷路段：包装kg×实际km×that_record_share)，该记录完整全部使用方份额置求和内再正最终N一次，已归一不再除N0保留。真实接收前来源至接收运输在匹配商品上游服务外，不在此重复。真实服务发运用品接收方路段空返服务商归属一次。 | 实际原生包装质量距离兼容换kg*km | 每实际事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间及完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_fates | spruce_sawlog_wholesale | 水源废物液体排口 | 实际水源接收混合游离液 | event_id; source_location; receiving_location; receiving_medium; flow_identity; native_quantity; native_unit; quantity_basis; quantity_source; interval; composition; composition_basis; composition_source; fate_basis; fate_source; mixed_receiver_mass; mixed_mass_unit; mixed_mass_basis; mixed_mass_source; carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; free_liquid_volume; liquid_volume_unit; liquid_volume_source; density; density_unit; density_temperature; temperature_unit; density_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; nonadditive_view; attribution_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; record_method; record_state; record_sample_time; record_source; carrier_method; carrier_state; carrier_sample_time; absorbed_liquid_method; absorbed_liquid_state; absorbed_liquid_sample_time; collected_fragment_method; collected_fragment_state; collected_fragment_sample_time; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | 独立真实水源水接收混固游离容装液直接排口，载体吸液木皮碎屑自原生六元数据整混合组分不可相加。各游离液身份状态体积组成接收运输处理原生证据，适用密度温度换算。木水变化雨供水非实测排水，不自动干木重。 | 实际原生混合质量游离液体积水单位 | 每实际事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间及完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |
| cp_releases | spruce_sawlog_wholesale | 直接物种 | 实际物种介质因子覆盖 | event_id; species_identity; particle_size; receiving_medium; measurement; measurement_unit; measurement_basis; measurement_source; activity; activity_unit; activity_basis; activity_source; factor; factor_unit; factor_basis; factor_source; factor_coverage; burn_fraction; burn_fraction_source; composition; composition_unit; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; time_interval; period; provider_coverage; nonadditive_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; measurement_method; measurement_state; measurement_sample_time; activity_method; activity_state; activity_sample_time; factor_method; factor_state; factor_reference_time; composition_method; composition_state; composition_sample_time; fate_method; fate_state; fate_time; conversion_method; conversion_state; conversion_time | 实际确切物种粒径介质实测或兼容真实服务活动×因子自原生六元数据覆盖，完整比例覆盖物种因子不得再乘，必要比例气体换算一次真实温压单位来源。不由水差残余或生产林业系数自动生长固碳腐解CO2尘零。 | 实际原生物种量兼容换kg | 每实际事件计量区间，原始记录可追溯 | 实际接收至最终验收、库存报告期间及完整资产阶段 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_resources | 服务 | N=核撤销后唯一真实最终企业所有权转售验收，直接追溯或量×兼容目标驱动/正完整全部使用方驱动保原生六元数据全部使用方期间闲置失败未完成。归属总量正N除一次，N0负担期间群保留。 | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 实际每参考物理服务 |  |
| log_stock | 商品 | 兼容期初+供方外收+买方退回-期末-企业发运-供方退回-可用其他出口-真实废弃-净样品移除=未知差额。收货排买方退回内部移动，发运排单列出口，内部移动消去。同实际木皮水原生体积质量状态池及真实木号计数对应每件重复一次总量不变。水变脱皮降级差额不自动干木损失CO2零。 | cp_logs | 原生库存互斥实际去向 |  |
| bark_volume | 非交换审计 | 同真实定义样品r_bark=V_bark/V_under，V_over=V_under*(1+r_bark)，V_under=V_over/(1+r_bark)。仅实际bark_percent为Vbark/Vunder×100时，r_bark=bark_percent/100，百分比先转；不旧表值皮外质量分母体积百分数转质量。Vsolid=V_stack*stacking_factor仅真实同皮状态批校准兼容因子，不通用；真实检尺公式输入记录校准代表性约束体积，不抄OCR坏公式。 | cp_logs | 独立皮内外堆实积视图 |  |
| water_mass | 非交换审计 | 仅同真实样品仅水w_wet=m_water/m_as_received：m_water=m_as_received*w_wet；m_nonwater=m_as_received*(1-w_wet)；兼容r_dry=m_water/m_nonwater则w_wet=r_dry/(1+r_dry)，百分比先转。整带皮质量m_as_received=V_over*density*native_conversion_factor仅真实带皮新鲜状态代表匹配密度单位温度来源，不皮内木密度锯材值。独立组分密度仅自身匹配体积。net_finished_mass=gross_mass-packaging_tare仅兼容真实外支撑范围保皮水。其他挥发物干燥失重非水木损失排放。 | cp_logs | 不可相加实际水密度质量视图 |  |
| completed_source | 商品 | 直接真实有来源assigned_gate_demand互斥证明，或actual_source_gate_quantity×target_driver/source_all_terminal_driver；正完整终端最终验收可用其他退回期末有据损失各量单位基准方法状态时间来源链接归属，不仅验收不叠直接驱动。原生来源归属基线新增状态换算互斥损失归属匹配备妥Piceaabies锯级皮交接真实接收运输覆盖。既有 03111 皮内路边生产仅实际匹配，不重复已完成生长伐采备料不缺超门槛运输。同基线阶段损失覆盖后所需新增缺阶段真实在外集成一次，有完成状态原生量链接时区来源归属覆盖，才链就绪。 | cp_logs; cp_consignment | 独立完成原来源需求损失接收运输集成 |  |
| record_freight | freight | 原生真实包装货载或同状态车辆毛重仅减车辆非货皮重，保湿木皮全部货支撑不重复组分，每件真实重复一次总量不变。kg*km=sum(唯一载荷路段：包装kg×实际km×that_record_share)，该记录完整全部使用方份额置求和内再正最终N一次，已归一不再除N0保留，不在此重复商品接收前运输，来源接收运输服务商覆盖一次。 | cp_freight; cp_consignment | 实际唯一每参考货运 |  |
| specific_species | direct_species | 实际物种粒径介质量=实测或兼容真实服务活动×因子原生六元数据覆盖。完整组成去向比例覆盖因子不得再乘，必要兼容比例气体换算一次真实温压单位来源。不库存水差额自动生长固碳腐解CO2尘零。 | cp_releases; cp_energy; cp_logs | 实际有据每参考物种 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_native | 全部角色 | 最终交换前实际树种新鲜带皮锯级批交接及各来源服务商接收物种身份支持，数量链不生产m3商人身份。 | 真实原生记录核验 |
| measurements | 全部操作数 | 各检尺输入尺寸体积皮比百分数堆积因子水密度组分库存来源归属基线新增集成终端驱动重复数资产寿命货运操作数原生单位基准方法状态时间来源校准样品换算温度单位，未知不兼容阻计算不套锯材表默认。 | cp_logs; cp_assets; cp_freight; cp_fates |
| coverage | 全部接口 | 披露来源年代本地适用最终撤销树种等级状态皮体积基准水密度库存接收运输基线完成集成损失去向资产寿命不确定性敏感性更新，N0保留，待集成非链就绪，不生长碳抵扣宣称。 | 原生覆盖来源寿命完成链接各行范围证据需求 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_energy`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_energy`; 实际来源关联原生记录 |
| facility_water | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`facility_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| new_outer_protection | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`new_outer_protection`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`operating_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| fuel_supply | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`fuel_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_providers`识别`provider_services`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`environmental_water`内每项实际inputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| usable_supply_returns | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_supply_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_logs | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_logs`识别`discarded_logs`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`discarded_logs_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_logs`; 实际来源关联原生记录 |
| other_wastes | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`other_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| contained_liquid_wastes | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`contained_liquid_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`water_outfalls`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| direct_species | spruce_sawlog_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_releases`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_releases`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

量实际照明装卸业务辅助，不采伐锯切窑干森林生长。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际原木批发设施电力
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_energy 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：真实计量区间全部使用方含闲置失败未完成服务商范围，不每原木森林轮伐耗电。

#### facility_water

实际卫生辅助水，不原木水或默认洒水保护清洗。

本卡为独立身份分支`facility_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入场所辅助水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：实际水源用途原生体积独立去向，购水非废水体积水分。

#### new_outer_protection

仅真实服务新增带垫木标签，继承支撑属来源商品，周转者全寿命。

- 身份采集要求：实际新增发运支撑标签
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：实际新增继承品项净量数换算库存，不每木货批默认托盘。

#### operating_supplies

实际设备润滑清洁擦布吸附滤材，不商人剥皮锯链保护剂配方。

本卡为独立身份分支`operating_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际维护条件性清理耗材
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：真实使用事件净库存组成耗载体证据，不以皮木重作消耗输入。

#### fuel_supply

真实装卸燃料分燃烧退回废物服务商覆盖，不森林采伐燃木。

本卡为独立身份分支`fuel_supply_diesel_supply`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际自有装卸燃料库存
- 流属性/单位：Volume / L
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：原生期初净收期末去向适用燃料身份密度温度换算，收货非实烧。

#### provider_services

已作仓储装卸文件目视树种等级检尺记录条件业务辅助，不商人伐采造材剥皮锯干。

- 身份采集要求：实际物理云杉原木批发辅助成果
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_providers 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据要求：实际成果原生单位方法来源材料能源资产货运处理范围，真实新增工作复核样品一次。

#### shared_assets

实际木场仓库货架装卸计量信息周转用具跨全部使用方完整制造维护更换终结，原木非商人资本生长林分。

- 身份采集要求：全寿命共享木场装卸资产
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_assets 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据要求：原生已用观察剩余寿命驱动来源、观察有据剩余退役不确定性更新，资产或完整寿命服务商二选一。

#### freight

货物含真实湿木皮全部货支撑，同状态车辆毛仅减车辆非货皮，接收运输来源覆盖一次。 接收前来源至接收运输属匹配接收状态商品上游在服务外，不在此重复；此行仅实际发运服务用品接收方或其他声明服务边界路段。

- 身份采集要求：实际带皮原木及服务货运
- 流属性/单位：Mass*distance / kg*km
- 数量规则：按 cp_freight 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据要求：唯一载荷路段真实包装kg毛非货皮km每件总量该记录份额置求和内，不皮内m3等吨锯材密度。

#### environmental_water

仅实际商人环境取水，不原木水森林蒸散保护默认。

- 身份采集要求：实际直接木场取水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：真实水源地点区间原生体积方法边界，不木水作取水。

#### usable_supply_returns

仅同范围独立未用用品，净消耗省对应出口，内部回收期末、原木皮退回非交换库存。

- 身份采集要求：实际匹配未用服务用品外退
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：实际接收原生量匹配输入来源，不商品回收扣不相关用品负量抵扣。

#### discarded_logs

真实接收整木留皮水与单独木皮支撑分开，不假定商人剥切，整物组分不加，降级未知重非废弃。

- 身份采集要求：实际废弃原木或单独收集木皮残余
- 流属性/单位：Mass / kg
- 数量规则：按 cp_logs 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_logs`

范围证据要求：真实去向接收原生重体数对应水皮来源交接处理，不残余损失等CO2回收抵扣。

#### other_wastes

实际耗擦布吸附滤材服务包混捕木皮碎屑，载体吸液碎屑属接收混合物，不重复或假定锯屑生成。

- 身份采集要求：实际耗用品混合木场清理固体
- 流属性/单位：Mass / kg
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：接收混合及各组分原生单位基准方法状态时间来源组成接收，扫集不自动干木。

#### contained_liquid_wastes

实际收集游离液废水自身份状态体积接收，分湿木吸附混合直接排口，不洒水清洗默认。

- 身份采集要求：实际容装设施废水游离液
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：实际收集接收原生体积组成方法状态时间来源处理，不木水变化购水。

#### water_outfalls

仅实际直接水已知接收介质，容装转移废物真实物种单独。

- 身份采集要求：实际直接木场水向环境排口
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：地点介质区间原生体积组成去向换算证据，雨湿木本身非排口量。

#### direct_species

实际化学物种粒径介质实测或兼容真实服务事件方法，不由差额生库存生长固碳自动腐解CO2尘。

- 身份采集要求：实际已识别物种向有记录介质释放
- 流属性/单位：Mass / kg
- 数量规则：按 cp_releases 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：确切物种介质原生实测或实际活动因子单位基准方法状态时间来源覆盖，完整覆盖比例因子不得再乘。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| FINAL_actual | accepted_service | 真实购买所有权转售企业买方最终交接时间来源撤销唯一N全部16限定，收货木件m3吨不足，N0失败取消隔离未完成保留不除。 |  |
| actual_log_scope | 商品 | 新鲜带皮Piceaabies锯级木号备妥接收交接，不商人伐采剥锯干保护使用，不锯材水密度生长固碳自动腐解。 | metsa-spruce-log-sawn-boundary |
| native_bark_water | 商品 | 实积堆积皮内外真实公式校准全部原生输入样品来源，r_bark皮/皮内木及百分数先转非质量分数表默认。仅水湿干同真实定义百分比先转其他挥发物干燥失重防误；真实匹配整带皮组分密度温度单位，完整湿净重保皮水仅排外支撑皮。 | forest-research-sawlog-tables-1987 |
| source_integration | 商品 | 原生直接真实追溯或正完整终端含期末可用退回有据损失各六元数据链接归属，不仅验收不叠直接驱动。实际树种等级状态交接生产皮内路边匹配超门槛接收运输一次；同基线阶段损失覆盖互斥损失归属后缺阶段所需新增真实完成在外集成量状态链接时区来源归属覆盖，才链就绪，不待办。 |  |
| resources_fates | 全部 | 净用品排容器皮，毛S/N记输入且匹配未用退回量/N另记输出，或净消耗并省对应出口，全使用方资产观察有据剩余退役原生驱动不确定性更新资产或服务商二选一N。货运保湿木皮全部货支撑仅减车辆非货皮、原生每件总量重复数该份额置求和内后正最终N一次N0保留。整木单独木皮混清理游离液直接物种互斥真实接收处理一次，不差额等木损失CO2零默认抵扣，完整因子比例不得再乘。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际身份完整性审核后secondary_dataset；background_dataset |
| downstream_use | 物理云杉原木批发附加，独立备妥来源接收运输需求损失已完成在外集成一次 |
| allowed_use | 实际新鲜带皮Piceaabies锯材用原木备妥来源接收状态所有权转售最终企业货批，有原生体积皮水质量证据 |
| excluded_use | 其他树种等级锯制品商人伐采备料剥锯干保护使用、独立森林生长碳抵扣、零售代理纯仓储 |
| required_metadata | 商人购买所有权转售企业买方最终交接来源撤销N，树种木批等级新鲜带皮来源接收交接实积堆积皮内外检尺公式输入校准样品皮比分母原生水密度温度单位净重支撑时间期间、完整来源终端基线新增已完成集成量状态链接时区来源归属覆盖接收运输及资源服务商资产货运接收归属 |
| required_quality_disclosure | 身份支持测量本地旧来源适用最终撤销体积皮水密度库存来源交接接收运输基线完成集成损失去向资产寿命不确定性各行证据需求 |
| update_trigger | 实际树种等级原木状态皮体积检尺水密度交接商人加工验收来源归属覆盖集成接收运输服务商资产货运接收变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-spruce-log-wholesale | official_guidance | UNSD CPC3 explanatorynotes30June2025,03111/61093. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类，所选新鲜云杉锯用原木较窄原木批发。 |
| metsa-spruce-log-sawn-boundary | official_guidance | Metsä Fibre Spruce sawn timber manufacturerpage. https://www.metsagroup.com/metsafibre/products-and-services/sawn-timber/spruce-sawn-timber/ | 仅Piceaabies来料原木在剥皮锯干前与锯材区别，不移锯材含水密度等级尺寸至新原木。 |
| forest-research-sawlog-tables-1987 | official_guidance | ForestryCommission FieldBook1 TopDiameterSawlogTables,2nded1987/reprinted1998,introductionandbarktableprinted24. https://cdn.forestresearch.gov.uk/1987/03/fcfb001.pdf | 旧定性检尺本地变化皮内体积分母背景，不默认锥度长度表皮率尺寸或坏OCR公式，真实皮比定义样品实测，不体积分数作质量。 |
