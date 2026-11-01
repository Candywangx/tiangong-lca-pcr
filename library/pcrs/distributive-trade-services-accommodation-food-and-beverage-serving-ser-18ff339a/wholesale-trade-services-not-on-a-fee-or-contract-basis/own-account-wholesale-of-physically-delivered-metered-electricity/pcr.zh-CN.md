---
pcr_id: pcr.own-account-wholesale-of-physically-delivered-metered-electricity
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 实际物理交付计量电力自营批发

## 1. 范围与适用性

实际自营企业物理交付计量电力批发商业服务，边界为商人商业交付管理物理计量数据核验验收及归属办公信息计量辅助。无新真实路线复核时排纯金融交易发电储能商人运营电网电厂调度消费者使用和零售收费代理。电力储能存在，排除为本方法边界，不是电不可储存宣称。不套仓库货车托盘货运或人为交易电库存。

一个交付单元为真实来源定义的最终验收案例，限一个企业买方、互斥物理计量点组、有商业证据非重叠交付时段。归一前以真实物理商业交付证据固定案例定义，不任意区间合同发票头寸结算行。一个案例可含多计量行版本，区间不自动一例。各点方向时间片跨案例仅属一次。核正真实物理交付与所有权购买转售撤销后买方最终验收，修订重跑替同案旧证据不新交付；未完成撤销取消案例资源保留在N外，N0不除。

交易电为非交换方向物理终端审计，不办公消耗电或服务kWh输出。匹配实际来源交接发电电网阶段损耗责任及来源归属基线新增需求在服务外一次。完整链就绪前缺阶段所需新增需求须真实完成在外集成，有原生量状态链接时区来源归属阶段损失覆盖。合同证书不唯一识别电子来源结构损耗，真实办公信息计量数据资源全资产服务商覆盖在内一次，来源发电电网损耗不自动商人直接排放。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-physically-delivered-metered-electricity |
| classification_refs | CPC3 61097仅171/17100，较窄物理交付计量企业商业单元服务 |
| covered_products | 实际所有权购买转售物理交付计量电力最终商业单元企业批发服务 |
| excluded_products | 纯金融交易发电储能商人电网运营消费者使用零售收费代理；仓库货物库存方法 |
| representative_product | 真实买方验收案例互斥点组非重叠时段物理计量方向原生版本所有权转售最终交接 |
| production_route | 实际来源交付电量物理计量证明 -> 商人商业交付核验数据资源 -> 最终企业验收案例 |
| market_state | 数量真实物理商业交付单元，交易kWh方向非交换账，自设施辅助独立 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成自营计量物理电力商业交付单元 |
| How much | 1 Item(s) |
| How well | 真实互斥案例物理交付计量方向量版本及企业最终验收有来源，不合同金额来源电子唯一性或供电可靠性保证 |
| How long or cycle | 真实商业交付时段核验最终验收及修订截止来源、报告期间完整资产阶段，N0资源保留 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成自营计量物理电力商业交付单元 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | physical_delivery_case_id; merchant_purchase_ownership_resale; one_actual_B2B_buyer; commercial_case_definition_source; disjoint_meterpoint_group; nonoverlap_delivery_window; point_direction_segment_case_mapping; actual_physical_positive_delivery_evidence; meter_register_interval_native_units; timezone_UTCoffset_DST_duration_source; multiplier_transformer_alreadyapplied_scope; actual_estimated_revision_provenance; FINAL_acceptance_source_reversals; generation_grid_gate_networkloss_coverage_owner; complete_all_physical_terminal_assignment; completed_baseline_additional_integration_owner |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_case | 参考 | 真实最终案例的数量 | Item(s) | 案例定义需真实买方互斥点方向时间映射有来源非重叠商业时段物理交付最终交接，不默认每区间合同发票一例，不重复修订重跑或计纯头寸。正物理量证据与最终验收兼容，估计未知证明不自动实际交付。 | elexon-physical-trading-context |
| directional_meter | 非交换电量 | 电能；实际寄存器区间原生属性 | 原生电量单位及使用时向kWh量纲换算 | 记点进口出口方向寄存器或区间起止翻转复位倍率变比已应用质量估计修订校准，选兼容最新有效互斥读数，不重复旧修订不净掉独立方向不二次倍率。时区UTC偏移夏令时真实时长由时间戳，不GB固定区间默认。 | elexon-metering-context |
| power_time | 条件非交换换算 | 实际平均功率×真实时间 -> 电能 | 原生功率时间电量量纲因子单位 | 仅真实区间平均功率E=P_average*actual_duration*power_time_energy_factor，保平均总体实际UTC夏令时时长单位来源及原生因子单位来源，瞬时铭牌功率假定期间非交付电量，已积分电量不再乘时长。 |  |
| source_service | 资源来源单位 | 各实际电量原生物理驱动；服务数量分母 | 实际来源交付自耗原生电量单位；服务Item(s) | 各量需点角色交接时间边界版本覆盖，交易电非交换自设施电输入独立。来源电网损耗因子仅适用有据原生定义方向覆盖，不燃料特定NCV/GCV换算系数替代结构影响价格默认或合同证书作电子身份。 经核实的电力流可按独立确认的电能基准及单位组使用ILCD名为净热值的参考属性；该属性名称不授权套用燃料热值系数。 | elexon-settlement-context |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 声明计量点方向时段交接真实所有权转售电力物理交付，有实际商业案例有效计量证据 |
| starting_condition_role | 非交换物理电量通过审计，商人商业交付数据核验服务，不发电储能电网运营 |
| product_classification_scope | 仅较窄61097/17100物理计量企业交付服务，不纯头寸零售收费代理 |
| recursive_input_rule | 交易来源交付输出其他物理终端电量非交换，不重复批发交换虚构仓库期末库存或合同取消作电退回。自设施电单独计服务输入。 |
| upstream_dataset_requirement | 匹配实际来源发电电网阶段交付门槛损耗责任在外一次，直接追溯或正完整兼容全部物理终端驱动、真实原生量版本互斥归属同基线阶段损耗范围。合同证书非唯一电子发电结构证明。链就绪前缺真实阶段所需新增电量真实已完成在外集成，原生量状态链接时区来源归属阶段损耗覆盖，待计划不足。 |
| disclosure | 实际案例买方互斥点组非重叠时段物理证明最终撤销、进口出口寄存器区间倍率质量修订时区夏令时原生单位、来源交接电网损耗基线完成集成和自设施信息计量服务商全资产废物归属未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_not_financial | metered_electricity_wholesale | 实际物理交付证据加所有权转售企业最终验收才建立案例，结算修订替证据不新物理交付；合同差额非电网损耗或服务排放。 | elexon-physical-trading-context; elexon-settlement-context |
| source_limits | 方法 | Elexon为GB定性物理与合同计量核对背景，不固定半小时关门日期法律角色损耗结构，不采用电不可储存概述。 | elexon-physical-trading-context; elexon-metering-context |
| separate_owners | 资源接口 | 来源发电电网资产损耗在匹配交易电上游一次，自办公信息计量资产服务投入在内一次，服务商已覆不二次。无仓库货车托盘库存或交易电直接排放。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| metered_electricity_wholesale | 计量物理电力商业交付服务 | required | 真实物理计量交付电力所有权转售企业最终案例 | 商业案例与物理表计证据核验、办公信息数据辅助及最终验收，非发电电网运营 | `accepted_service` |

连续计量数据任务与商业案例报告期间交叠。链接实际接收读数校验通信聚合复核修订争议无效数据重跑取消失败待决最终事件至案例点时段和报告期间。真实核验重作仍消耗资源但不是新交付；未知物理证明案例在N外，旧版本排重复，真实反向电流另记物理方向非合同撤销。无物理商品返仓回炉，缺失不作零。N0资源保留有据期间群不除不删，正最终N一次。

### 过程：计量物理电力商业交付服务 (`metered_electricity_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`service_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_operations 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_operations`

范围证据要求：实际自耗表分表或有据完整全部使用方分配、原生区间点角色服务商覆盖，交易总电量发票非办公自耗。

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

范围证据要求：实际水源用途原生体积期间独立去向，供水非废水不每交易kWh水。

###### 实际独立记录的合成洗涤剂投入 (`office_consumables_synthetic_detergent`)

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

范围证据要求：净实际材料库存使用退回来源真实清理，不每合同结算行材料或电网维护默认。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成自营计量物理电力商业交付单元 (`accepted_service`)

一个真实最终验收物理商业交付案例：一个企业买方、互斥计量点组、有商业证据非重叠交付时段。需物理计量证明所有权转售最终撤销，不kWh计量行合同发票头寸重跑。

- 选定流：已完成自营计量物理电力商业交付单元
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_deliveryunit`

范围证据要求：实际预定义验收案例点时段映射交付方向正物理量版本证明买方最终来源，不自动每区间1例或事后拆分降低影响。

##### 废物流

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| case_resources | 服务 | 直接真实案例任务追溯或物理量×兼容目标驱动/正完整全部使用方驱动，各原生六元数据全部客户案例期间闲置重跑无效失败待决责任。正唯一最终N仅撤销后实际互斥物理验收案例，归属总量/N一次N0保留，kWh合同发票结算行非默认案例资源驱动。 |  |
| physical_source_assignment | 非交换电量 | 直接实际实测核验物理来源归属原生量状态交接时间版本直接证据互斥链接，或source_energy×target_physical_driver/all_physical_terminal_driver。声明共同边界正完整兼容物理终端含真实已验收待决未验收其他买方交付、真实出口其他流出及仅同物理平衡范围内独立有据电网损耗自用，各记录自原生量单位基准方法状态时间来源链接归属。不金融头寸证书仅验收分母虚构期末库存直接驱动叠加。未知差额非损耗。真实来源电网损耗基线需求归属匹配后所需新增缺阶段真实在外集成一次，有完成状态原生量链接时区来源归属覆盖才链就绪。 |  |
| fullasset | 资产服务商 | 完整实际办公信息表计终端通信责任资产制造维护真实更换终结全部使用方期间，真实used_driver/正完整lifetime_driver兼容原生六元数据，observed_driver+有来源remaining_driver退役不确定性敏感性更新。资产当量或完整寿命服务商二选一N一次，不移发电电网寿命。 |  |
| supplies_fates | 实际材料 | 仅真实办公维护材料S=归属期初+净真实材料收货-含留存回收期末，收货排容器皮重。二选一：(1)毛S/N记输入、实际匹配未用外退量/N单列输出；(2)净耗用(S-退回)/N记输入且省略对应退回输出。不得把退回量加到输入或重复抵扣；内部回收期末，本库存式绝不用于交易电。实际耗材退役设备混载体吸液碎屑游离废水直接水物种不加，核资产服务商覆盖后接收运输处理一次，不负抵扣。 |  |
| physical_energy_link_scope | nonexchange energy interface | 实际方向性来源终端电量与已完成外部阶段需求集成保留原始量及计量点组、方向、时段、有效版本范围。声明source_assignment_scope_id、target_delivery_case_ids/target_case_group_id和source_assignment_quantity_basis，分single_case、target_case_group_total或already_per_reference。仅分配给目标案例群的原始总量，且正same_target_case_N在核撤销后准确覆盖这些已分配案例时，才按source_energy_link_per_service=assigned_source_energy_raw/same_target_case_N形成兼容电量状态交接单位的接口，与1个accepted_service关联一次。单案例N=1或已每参考电量不再除一次。外部实际集成不得按服务N缩量，也不得用全部来源市场N除较窄目标群。交易电不适用仓库期初期末库存或材料退回公式。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_deliveryunit | metered_electricity_wholesale | 物理商业交付案例与最终分母 | 验收事件 | physical_delivery_case_id; merchant_id; purchase_evidence; ownership_evidence; resale_evidence; business_buyer_id; case_definition_source; case_definition_time; case_definition_timezone; disjoint_meterpoint_group; delivery_window_start; delivery_window_end; delivery_window_timezone; UTC_offset; DST_resolution; segment_case_mapping; segment_overlap_check; physical_delivery_evidence; FINAL_gate; FINAL_time; FINAL_timezone; FINAL_source; acceptance_status; reversal_ids; reversal_source; revision_case_links; cutoff_time; cutoff_timezone; cutoff_source; unique_FINAL_ids; failed_pending_cancelled_ids; resource_cohort; N_source; positive_physical_quantity; positive_physical_quantity_unit; positive_physical_quantity_basis; positive_physical_quantity_method; positive_physical_quantity_state; positive_physical_quantity_sample_time; positive_physical_quantity_source; N; N_unit; N_basis; N_method; N_state; N_sample_time | 归一前据真实交付证据定义一个买方互斥点组非重叠商业时段，正物理计量证明加所有权购买转售撤销后买方最终验收。点方向时间片跨案例一次，计量行版本合同发票头寸重跑不新例，不事后拆分降影响。N仅唯一最终编号，零N失败待决取消资源保留真实期间群不除。 | 实际案例Item(s)与原生物理电量 | 每真实读数事件修订和商业案例 | 真实点时段报告期间与完整资产寿命 | 实际商人办公信息计量责任及声明服务商接收方 | per reference flow | 原生单位基准方法状态取样时间来源校准代表性覆盖不确定性 |
| cp_meter_energy | metered_electricity_wholesale | 非交换方向物理电量 | 计量修订记录 | meter_id; point_id; point_role; direction; import_export_sign_convention; cumulative_or_interval; interval_start; interval_end; timezone; UTC_offset_start; UTC_offset_end; DST_resolution; register_reset_event; rollover_event; replacement_event; reconstruction_source; calibration_id; calibration_time; calibration_source; transformer_ratio_scope; already_applied_multiplier_scope; actual_estimated_flag; estimate_method; estimate_source; estimate_uncertainty; read_version; supersedes_id; valid_revision_status; valid_revision_source; dedup_point_interval; segment_case_mapping; averaging_population; averaging_method; averaging_source; measured_or_loss_adjusted_scope; register_start; register_start_unit; register_start_basis; register_start_method; register_start_state; register_start_sample_time; register_start_source; register_end; register_end_unit; register_end_basis; register_end_method; register_end_state; register_end_sample_time; register_end_source; register_adjustment; register_adjustment_unit; register_adjustment_basis; register_adjustment_method; register_adjustment_state; register_adjustment_sample_time; register_adjustment_source; meter_multiplier; meter_multiplier_unit; meter_multiplier_basis; meter_multiplier_method; meter_multiplier_state; meter_multiplier_sample_time; meter_multiplier_source; transformer_ratio; transformer_ratio_unit; transformer_ratio_basis; transformer_ratio_method; transformer_ratio_state; transformer_ratio_sample_time; transformer_ratio_source; energy_unit_factor; energy_unit_factor_unit; energy_unit_factor_basis; energy_unit_factor_method; energy_unit_factor_state; energy_unit_factor_sample_time; energy_unit_factor_source; interval_energy; interval_energy_unit; interval_energy_basis; interval_energy_method; interval_energy_state; interval_energy_sample_time; interval_energy_source; P_average; P_average_unit; P_average_basis; P_average_method; P_average_state; P_average_sample_time; P_average_source; actual_duration; actual_duration_unit; actual_duration_basis; actual_duration_method; actual_duration_state; actual_duration_sample_time; actual_duration_source; power_time_energy_factor; power_time_energy_factor_unit; power_time_energy_factor_basis; power_time_energy_factor_method; power_time_energy_factor_state; power_time_energy_factor_sample_time; power_time_energy_factor_source | 各点方向时段进口出口分开且仅有效互斥版本，累计差仅兼容复位溢出换表真实重建调整。倍率互感比换算仅未含时一次，已积分区间电量不再差分乘时长。功率乘时长仅真实区间平均及UTC夏令时真实经过时间，不瞬时铭牌功率。估算标志方法来源不确定性明确，不悄作实测；物理终端核对不差额等损耗或零。 | 原生电能功率时间寄存器单位 | 每真实读数事件修订和商业案例 | 真实点时段报告期间与完整资产寿命 | 实际商人办公信息计量责任及声明服务商接收方 | per reference flow | 原生单位基准方法状态取样时间来源校准代表性覆盖不确定性 |
| cp_source_gate | metered_electricity_wholesale | 非交换来源需求电网损耗在外集成 | 物理来源集成账 | actual_source_id; source_dataset_link; source_gate_point; source_gate_direction; source_boundary; source_geography; source_window_start; source_window_end; source_timezone; source_version; mix_evidence; contract_certificate_limit; assignment_direct_or_driver; direct_assignment_evidence; exclusive_assignment_links; terminal_id; terminal_kind; terminal_point; terminal_direction; terminal_window; terminal_timezone; terminal_version; terminal_status; terminal_link; terminal_owner; all_terminal_completeness; compatible_boundary_evidence; network_loss_definition; network_loss_direction; network_loss_coverage; network_loss_owner; network_loss_source; baseline_stage_loss_coverage; additional_stage_loss_coverage; missing_stage_records; integration_completed_status; integration_link; integration_time; integration_timezone; integration_source; integration_exclusive_owner; integration_stage_loss_coverage; source_quantity_source; source_energy; source_energy_unit; source_energy_basis; source_energy_method; source_energy_state; source_energy_sample_time; source_energy_source; assigned_source_energy; assigned_source_energy_unit; assigned_source_energy_basis; assigned_source_energy_method; assigned_source_energy_state; assigned_source_energy_sample_time; assigned_source_energy_source; baseline_energy; baseline_energy_unit; baseline_energy_basis; baseline_energy_method; baseline_energy_state; baseline_energy_sample_time; baseline_energy_source; additional_energy; additional_energy_unit; additional_energy_basis; additional_energy_method; additional_energy_state; additional_energy_sample_time; additional_energy_source; integrated_energy; integrated_energy_unit; integrated_energy_basis; integrated_energy_method; integrated_energy_state; integrated_energy_sample_time; integrated_energy_source; target_physical_driver; target_physical_driver_unit; target_physical_driver_basis; target_physical_driver_method; target_physical_driver_state; target_physical_driver_sample_time; target_physical_driver_source; all_physical_terminal_driver; all_physical_terminal_driver_unit; all_physical_terminal_driver_basis; all_physical_terminal_driver_method; all_physical_terminal_driver_state; all_physical_terminal_driver_sample_time; all_physical_terminal_driver_source; terminal_energy; terminal_energy_unit; terminal_energy_basis; terminal_energy_method; terminal_energy_state; terminal_energy_sample_time; terminal_energy_source; terminal_driver; terminal_driver_unit; terminal_driver_basis; terminal_driver_method; terminal_driver_state; terminal_driver_sample_time; terminal_driver_source; network_loss_quantity; network_loss_quantity_unit; network_loss_quantity_basis; network_loss_quantity_method; network_loss_quantity_state; network_loss_quantity_sample_time; network_loss_quantity_source; network_loss_factor; network_loss_factor_unit; network_loss_factor_basis; network_loss_factor_method; network_loss_factor_state; network_loss_factor_sample_time; network_loss_factor_source; source_assignment_scope_id; target_delivery_case_ids; target_case_group_id; source_assignment_quantity_basis; source_energy_already_per_reference; raw_outside_integration_preserved; once_only_service_link_evidence; assigned_source_energy_raw; assigned_source_energy_raw_unit; assigned_source_energy_raw_basis; assigned_source_energy_raw_method; assigned_source_energy_raw_state; assigned_source_energy_raw_source; assigned_source_energy_raw_sample_time; same_target_case_N; same_target_case_N_unit; same_target_case_N_basis; same_target_case_N_method; same_target_case_N_state; same_target_case_N_source; same_target_case_N_sample_time; source_energy_link_per_service; source_energy_link_per_service_unit; source_energy_link_per_service_basis; source_energy_link_per_service_method; source_energy_link_per_service_state; source_energy_link_per_service_source; source_energy_link_per_service_sample_time | 直接核验真实来源量原生点交接时段版本互斥证明，或来源量乘目标物理驱动除正完整全部物理终端驱动，各竞争终端自量六元数据链接归属。含真实已验待决未验其他买方交付出口其他流出，仅同物理平衡范围独立有据损耗自用，不虚构期末库存仅验分母金融证书或直接驱动叠加。电网损耗真实方向边界责任基线覆盖，不合同差额作损耗；来源发电电网阶段交接地理时间真实结构证明匹配，证书不电子身份。缺阶段所需新增须真实在外集成一次，有完成状态链接时区来源归属原生量阶段损失覆盖才链就绪，不计划。  实际方向性来源终端电量与已完成外部阶段需求集成保留原始量及计量点组、方向、时段、有效版本范围。声明source_assignment_scope_id、target_delivery_case_ids/target_case_group_id和source_assignment_quantity_basis，分single_case、target_case_group_total或already_per_reference。仅分配给目标案例群的原始总量，且正same_target_case_N在核撤销后准确覆盖这些已分配案例时，才按source_energy_link_per_service=assigned_source_energy_raw/same_target_case_N形成兼容电量状态交接单位的接口，与1个accepted_service关联一次。单案例N=1或已每参考电量不再除一次。外部实际集成不得按服务N缩量，也不得用全部来源市场N除较窄目标群。交易电不适用仓库期初期末库存或材料退回公式。 | 原生电能兼容物理驱动单位 | 每真实读数事件修订和商业案例 | 真实点时段报告期间与完整资产寿命 | 实际商人办公信息计量责任及声明服务商接收方 | per reference flow | 原生单位基准方法状态取样时间来源校准代表性覆盖不确定性 |
| cp_operations | metered_electricity_wholesale | 自设施信息办公计量电力 | 自耗记录 | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; own_meter_id; own_point_role; own_meter_interval; own_meter_timezone; service_activity; dedup_id; complete_consumer_records; trade_meter_exclusion; provider_included_energy; own_energy; own_energy_unit; own_energy_basis; own_energy_method; own_energy_state; own_energy_sample_time; own_energy_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 仅实际自设施办公信息计量辅助消耗，独立计量或直接任务追溯正完整全部使用方原生驱动，含全部客户期间闲置重跑失败待决。真实电量原生换算不交易电账单，表计角色服务商所含能源互斥，归属总量正最终N一次零N保留。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 原生电能驱动单位 | 每真实读数事件修订和商业案例 | 真实点时段报告期间与完整资产寿命 | 实际商人办公信息计量责任及声明服务商接收方 | per reference flow | 原生单位基准方法状态取样时间来源校准代表性覆盖不确定性 |
| cp_supplies | metered_electricity_wholesale | 实际水办公耗材未用退回 | 材料库存收货 | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; SKU_id; material_identity; purpose; composition_source; net_receipt_definition; container_tare_exclusion; supply_provenance; matched_return_input; return_receiver; retained_recovery_scope; gross_or_consumed_view; complete_consumer_records; density_temperature; density_temperature_unit; density_temperature_source; opening; opening_unit; opening_basis; opening_method; opening_state; opening_sample_time; opening_source; net_external_receipts; net_external_receipts_unit; net_external_receipts_basis; net_external_receipts_method; net_external_receipts_state; net_external_receipts_sample_time; net_external_receipts_source; closing_including_recovery; closing_including_recovery_unit; closing_including_recovery_basis; closing_including_recovery_method; closing_including_recovery_state; closing_including_recovery_sample_time; closing_including_recovery_source; unused_external_return; unused_external_return_unit; unused_external_return_basis; unused_external_return_method; unused_external_return_state; unused_external_return_sample_time; unused_external_return_source; water_supplied; water_supplied_unit; water_supplied_basis; water_supplied_method; water_supplied_state; water_supplied_sample_time; water_supplied_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 实际品项兼容材料池S为归属期初加净外收减含留存回收期末，收货仅材料排容器皮。二选一：(1)毛S/N记输入、同范围实际匹配未用退回量/N单列输出；(2)净耗用(S-退回)/N记输入且省略对应退回输出。不得把退回量加到输入或重复抵扣；不不相关负扣减。真实水原生体积来源用途供水非废水，密度换算须真实组成状态温度单位来源，全部使用方驱动六元数据，库存式绝不交易电。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 原生体积质量实际用品单位 | 每真实读数事件修订和商业案例 | 真实点时段报告期间与完整资产寿命 | 实际商人办公信息计量责任及声明服务商接收方 | per reference flow | 原生单位基准方法状态取样时间来源校准代表性覆盖不确定性 |
| cp_providers | metered_electricity_wholesale | 真实物理计量数据设施辅助成果 | 已作服务商记录 | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; provider_id; task_id; physical_result_definition; native_property; performed_status; performance_source; point_period_scope; read_version_scope; dedup_id; rerun_invalid_case_links; material_energy_asset_waste_coverage; complete_consumer_records; performed_result; performed_result_unit; performed_result_basis; performed_result_method; performed_result_state; performed_result_sample_time; performed_result_source; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source | 实际已作物理成果证据原生属性单位，不费利润合同或计量行自动一项。追溯采集校验通信真实设施辅助及修订重跑，实际原生单位可能需配置展开。直接任务或正完整全使用方驱动一次，材料能源资产终结接收覆盖与他卡互斥，不暗含电网运营。 | 实际原生物理成果驱动单位 | 每真实读数事件修订和商业案例 | 真实点时段报告期间与完整资产寿命 | 实际商人办公信息计量责任及声明服务商接收方 | per reference flow | 原生单位基准方法状态取样时间来源校准代表性覆盖不确定性 |
| cp_assets | metered_electricity_wholesale | 全寿命责任匹配办公计量资产 | 寿命驱动账 | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; asset_id; responsibility_scope; full_manufacture_maintenance_replacement_EOL_coverage; all_user_period_records; observed_evidence; remaining_evidence; termination_basis; termination_source; lifetime_update_trigger; uncertainty; sensitivity; one_asset_or_provider; equivalence_method; equivalence_source; used_driver; used_driver_unit; used_driver_basis; used_driver_method; used_driver_state; used_driver_sample_time; used_driver_source; observed_driver; observed_driver_unit; observed_driver_basis; observed_driver_method; observed_driver_state; observed_driver_sample_time; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; remaining_driver_source; lifetime_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_method; lifetime_driver_state; lifetime_driver_sample_time; lifetime_driver_source; asset_equivalent; asset_equivalent_unit; asset_equivalent_basis; asset_equivalent_method; asset_equivalent_state; asset_equivalent_sample_time; asset_equivalent_source | 仅实际责任办公信息表计终端通信，完整制造维护更换终结。作业用除正完整寿命全部使用方驱动各兼容六元数据，寿命为观察加有据剩余真实退役假定，驱动当量换算原生单位来源不确定性敏感性更新。资产或完整寿命服务商二选一N一次，不继发电电网储能寿命，不资产终结废物重复。 | 原生资产当量兼容寿命驱动 | 每真实读数事件修订和商业案例 | 真实点时段报告期间与完整资产寿命 | 实际商人办公信息计量责任及声明服务商接收方 | per reference flow | 原生单位基准方法状态取样时间来源校准代表性覆盖不确定性 |
| cp_fates | metered_electricity_wholesale | 实际材料设备水接收去向 | 实测接收排口记录 | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; source_material_id; receiver_id; receiver_transport_scope; receiver_treatment_scope; receiver_source; contained_or_direct; direct_location; receiving_medium; composition_source; whole_or_component_view; asset_provider_EOL_coverage; density_temperature; density_temperature_unit; density_temperature_source; received_waste_mass; received_waste_mass_unit; received_waste_mass_basis; received_waste_mass_method; received_waste_mass_state; received_waste_mass_sample_time; received_waste_mass_source; contained_volume; contained_volume_unit; contained_volume_basis; contained_volume_method; contained_volume_state; contained_volume_sample_time; contained_volume_source; direct_outfall_volume; direct_outfall_volume_unit; direct_outfall_volume_basis; direct_outfall_volume_method; direct_outfall_volume_state; direct_outfall_volume_sample_time; direct_outfall_volume_source; carrier_mass; carrier_mass_unit; carrier_mass_basis; carrier_mass_method; carrier_mass_state; carrier_mass_sample_time; carrier_mass_source; absorbed_liquid_mass; absorbed_liquid_mass_unit; absorbed_liquid_mass_basis; absorbed_liquid_mass_method; absorbed_liquid_mass_state; absorbed_liquid_mass_sample_time; absorbed_liquid_mass_source; collected_fragment_mass; collected_fragment_mass_unit; collected_fragment_mass_basis; collected_fragment_mass_method; collected_fragment_mass_state; collected_fragment_mass_sample_time; collected_fragment_mass_source; density; density_unit; density_basis; density_method; density_state; density_sample_time; density_source; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_sample_time; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; complete_consumer_records; shared_case_links; actual_stream_id; stream_separate_or_true_mixture; actual_waste_identity_type; separate_stream_receiver_source; mixture_membership_evidence | 仅真实接收材料设备水原生量状态组成来源，整混合物或互斥载体吸液碎屑不可重复相加，各组分独立六元数据。容装水游离液废物接收范围分直接排口介质基本流，购水非废水。核资产服务商覆盖后接收运输处理一次真实退役对应，物种另列不默认电网废物回收抵扣。  直接真实案例追溯或兼容target_driver除正完整all_consumer_driver，真实使用方案例链接各原生六元数据，归属总量正最终N一次零N保留。 本条件性总括须按每个实际独立接收废物流分别展开交换，记录原生身份类型、组成状态、实测净量及接收运输处理归属。纸墨废物、擦拭混合物和退役信息设备不得固定合为一条混合交换；只有真实共同收集接收的混合物才使用混合质量，同一混合物组分视图仍不可相加。缺实际流证据时身份明确未解析。 | 原生实际质量体积单位 | 每真实读数事件修订和商业案例 | 真实点时段报告期间与完整资产寿命 | 实际商人办公信息计量责任及声明服务商接收方 | per reference flow | 原生单位基准方法状态取样时间来源校准代表性覆盖不确定性 |
| cp_releases | metered_electricity_wholesale | 实际服务设施物种介质释放 | 实测活动因子记录 | record_id; case_id; period_id; exclusive_owner; provider_coverage; already_per_reference; conversion_factor; conversion_unit; conversion_basis; conversion_method; conversion_state; conversion_time; conversion_source; event_id; species_id; chemical_identity; receiving_medium; direct_location; factor_covered_composition_fate; provider_covered_release; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; measurement; measurement_unit; measurement_basis; measurement_method; measurement_state; measurement_sample_time; measurement_source; activity; activity_unit; activity_basis; activity_method; activity_state; activity_sample_time; activity_source; factor; factor_unit; factor_basis; factor_method; factor_state; factor_sample_time; factor_source; composition_fraction; composition_fraction_unit; composition_fraction_basis; composition_fraction_method; composition_fraction_state; composition_fraction_sample_time; composition_fraction_source; fate_fraction; fate_fraction_unit; fate_fraction_basis; fate_fraction_method; fate_fraction_state; fate_fraction_sample_time; fate_fraction_source; gas_conversion; gas_conversion_unit; gas_conversion_basis; gas_conversion_method; gas_conversion_state; gas_conversion_sample_time; gas_conversion_source; temperature_basis; temperature_method; temperature_state; temperature_sample_time; pressure_basis; pressure_method; pressure_state; pressure_sample_time; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; all_consumer_driver_source; complete_consumer_records; shared_case_links | 真实自设施维护事件实测或兼容真实活动乘因子，化学物种介质各操作数六元数据。完整因子已含组成去向不再乘，所需比例换算一次实际温压单位来源，交易kWh电网损耗合同差额来源发电因子非商人直接释放或零，未知不证明无。  直接真实案例追溯或兼容target_driver除正完整all_consumer_driver，真实使用方案例链接各原生六元数据，归属总量正最终N一次零N保留。 | 原生物种质量活动因子单位 | 每真实读数事件修订和商业案例 | 真实点时段报告期间与完整资产寿命 | 实际商人办公信息计量责任及声明服务商接收方 | per reference flow | 原生单位基准方法状态取样时间来源校准代表性覆盖不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| physical_resources | 服务 | N为所有权转售撤销后唯一真实最终物理验收案例。直接任务追溯或实际物理量乘target_driver除正完整all_consumer_driver，各兼容六元数据全部客户期间闲置失败待决重跑。归属总量正N一次零N保留。 | cp_deliveryunit; cp_operations; cp_supplies; cp_providers; cp_assets; cp_fates; cp_releases | 实际每参考服务 |  |
| register_energy | 非交换电量 | E_register=(register_end-register_start+register_adjustment)*meter_multiplier*energy_unit_factor，仅兼容累计寄存器真实复位溢出换表重建。表计互感比按already_applied_multiplier_scope仅一次，不再乘已调整寄存器区间电量。真实原生换算量纲转声明电能，进口出口方向保留，旧版本排重复。 | cp_meter_energy | 原生物理电量审计非服务交换 |  |
| power_time | 非交换电量 | E=P_average*actual_duration*power_time_energy_factor，仅真实区间平均及由时区UTC偏移夏令时解析起止得真实经过时间，各操作数自原生单位基准方法状态时间来源。瞬时铭牌非平均，已积分电量不再乘时长，实测估算不确定性明确。 | cp_meter_energy | 条件原生电量审计 |  |
| completed_source | 非交换电量 | assigned_source_energy为直接核验真实原生物理量互斥证明，或source_energy*target_physical_driver/all_physical_terminal_driver。正完整兼容共同边界物理终端各量驱动六元数据链接归属，含已验待决未验他买方真实出口他流出及仅同平衡独立有据损耗自用，不虚构库存仅验收金融头寸叠视图。原生来源归属基线新增匹配交接阶段损失覆盖，缺阶段所需additional_energy须真实在外集成一次，有完成状态integrated原生量链接时区来源归属覆盖才链就绪。合同证书非电子身份结构损耗证明，差额非损耗。 | cp_source_gate | 独立完成上游来源电网需求损耗集成 |  |
| supplies_assets | 资源 | 实际材料S为归属期初加净外收减含留存回收期末；二选一：(1)毛S/N记输入、实际匹配未用外退量/N单列输出；(2)净耗用(S-return)/N记输入且省略对应退回输出。不得把退回量加到输入或重复抵扣；收货排容器皮，绝不交易电库存。完整资产当量为真实used_driver除正完整lifetime_driver即observed_driver加有据remaining_driver，各兼容六元数据全部使用方期间退役不确定性更新，资产或完整寿命服务商二选一N一次，不终结重复。 | cp_supplies; cp_assets; cp_providers | 实际原生材料资产当量 |  |
| actual_species | 直接物种 | 实际物种介质量为实测或兼容真实服务活动乘因子，各操作数六元数据完整因子组成去向已覆不再乘，必要比例气体换算一次兼容温压单位来源。交易电来源发电电网损耗合同差额不自动商人直接释放或零，混合物游离液直接物种互斥。 | cp_releases; cp_fates | 有据原生直接物种每参考 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity | 全部角色 | 完整最终物理商业案例身份与所有来源服务商接收物种原生支持核验，数量属性链不服务身份，电量非案例。 | 真实原生证明 |
| native_operands | 全部操作数 | 各寄存器倍率互感比换算平均功率时长来源终端损耗基线新增集成驱动N供应资产去向物种操作数各单位基准方法状态取样时间来源，校准代表性版本时区夏令时覆盖。未知不兼容阻算，估算不悄作实测。 | 各采集协议 |
| coverage | 全部接口 | 披露案例定义物理点方向非重叠时段最终撤销计量估算修订倍率损耗来源结构基线实际完成集成归属资源服务商全资产去向不确定性敏感性更新。无GB时间法律损耗结构默认，待完成非链就绪。 | 原生覆盖完成链接及各行范围证据需求 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| service_electricity | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_operations`识别`service_electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_operations`; 实际来源关联原生记录 |
| facility_water | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`facility_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| office_consumables | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`office_consumables`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| metering_data_services | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_providers`识别`metering_data_services`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_providers`; 实际来源关联原生记录 |
| facility_support_services | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_providers`识别`facility_support_services`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| unused_supply_returns | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_supply_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| spent_supplies_equipment | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`spent_supplies_equipment`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| contained_wastewater | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`contained_wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| direct_water_outfall | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`direct_water_outfall`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| direct_species | metered_electricity_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_releases`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_releases`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### service_electricity

仅实际办公信息数据计量辅助自耗，分交易电量服务商所含消耗，不交易kWh作服务输入避免能源。

本卡为独立身份分支`service_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际自用设施信息办公计量电力
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_operations 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_operations`

范围证据要求：实际自耗表分表或有据完整全部使用方分配、原生区间点角色服务商覆盖，交易总电量发票非办公自耗。

#### facility_water

仅真实卫生辅助水，不发电冷却水库电网水责任。

本卡为独立身份分支`facility_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入办公辅助水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：实际水源用途原生体积期间独立去向，供水非废水不每交易kWh水。

#### office_consumables

按品项用途真实纸墨清洁擦布吸附滤用品，不证书作物理电或假定电网油备件。

本卡为独立身份分支`office_consumables_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际办公条件性维护耗材
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：净实际材料库存使用退回来源真实清理，不每合同结算行材料或电网维护默认。

#### metering_data_services

实际已作读数校验数据集传输核对成果原生单位覆盖，计量记录重跑不自生新物理交付数量，不商人电网运营。

- 身份采集要求：实际计量数据采集校验通信成果
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_providers 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据要求：已执行成果原生属性单位服务商能源资产覆盖、版本去重点期间证明，条件角色按实际成果展开不强每记录1Item。

#### facility_support_services

声明原生单位实际设施清洁空调辅助维护成果，不金融费利润或自动重复发电电网服务。

- 身份采集要求：实际物理办公辅助维护服务成果
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_providers 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据要求：实际任务成果来源原生单位材料能源资产废物覆盖，实际全部使用方一次归一，不价格转物理服务。

#### shared_assets

实际办公信息表计终端通信自有责任组分完整制造维护更换终结全部使用方，发电电网储能资产无真实复核在外，服务商覆盖资产不重复。

- 身份采集要求：全寿命共享办公信息及责任匹配计量资产
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_assets 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据要求：作业已用观察剩余寿命驱动各原生六元数据、观察有据剩余退役不确定性更新，资产或完整寿命服务商二选一N一次。

#### unused_supply_returns

仅同范围独立未用材料，净消耗输入省匹配出口，不电输出合同撤销价格抵扣作材料退回。

- 身份采集要求：实际匹配未用办公用品外退
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：真实接收原生量匹配用品来源，内部回收期末，不不相关负输入回收抵扣。

#### spent_supplies_equipment

仅实际纸墨擦布滤维护混合物及退役办公计量信息设备服务自有接收范围，全资产服务商已覆终结不二次负担，不交易电废物。

本条件性总括须按每个实际独立接收废物流分别展开交换，记录原生身份类型、组成状态、实测净量及接收运输处理归属。纸墨废物、擦拭混合物和退役信息设备不得固定合为一条混合交换；只有真实共同收集接收的混合物才使用混合质量，同一混合物组分视图仍不可相加。缺实际流证据时身份明确未解析。

- 身份采集要求：实际耗材及责任匹配退役设备
- 流属性/单位：Mass / kg
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：实际接收重组分状态接收运输处理资产服务商覆盖，混载体吸液碎屑不加，空合同非物理废物。

#### contained_wastewater

实际收集设施废水游离液自身份状态体积接收，不电网损耗电厂冷却。

- 身份采集要求：实际送接收方容装办公设施废水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：实际收集接收体积组成原生六元数据接收覆盖，购水非废体积。

#### direct_water_outfall

仅真实直接水跨记录介质，容装接收废物分开，不电网水假定。

- 身份采集要求：实际直接服务设施水排口
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：地点介质原生区间体积组成去向来源，不供水交易电量。

#### direct_species

仅实际自设施维护事件物质介质证据，交易kWh电网损耗合同差额来源发电因子非商人直接排放或零，不假定自发电。

- 身份采集要求：实际服务设施物种向有记录介质释放
- 流属性/单位：Mass / kg
- 数量规则：按 cp_releases 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：确切物种介质原生实测或真实活动因子单位基准方法状态时间来源，完整比例覆盖因子不得再乘。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_FINAL | accepted_service | 正真实物理交付所有权购买转售企业买方预定义案例点组时段最终交接来源撤销唯一N，不kWh计量行合同发票头寸重跑，零N失败待决取消保留不除。 |  |
| meter_native | 非交换电量 | 方向原生点时寄存器区间UTC夏令时倍率互感比已含校准实测估算修订去重。累计式仅真实兼容重建，平均功率真实时长量纲一次，不铭牌瞬时已积分再乘。 | elexon-metering-context |
| source_completed | 非交换电量 | 直接真实追溯或正完整兼容全部物理终端各六元数据链接归属，不仅验收证书虚构库存。实际发电电网交接损耗责任基线覆盖后所需缺阶段新增须真实在外完成一次，有原生量状态链接时区来源归属阶段损失覆盖才链就绪，不计划。 |  |
| resource_owners | 全部 | 交易电非交换非自设施服务电直接释放，真实办公信息计量资源完整寿命服务商资产互斥全使用方观察有据剩余驱动N一次。净用品排容器皮，毛S/N记输入且匹配未用退回量/N另记输出，或净耗用(S-退回)/N记输入且省略对应退回输出，绝不交易库存。实际混合材料设备游离水直接物种互斥，资产服务商覆盖后接收运输处理一次，不自动抵扣差额物种零。 |  |
| scope_limits | 方法 | 不移商人发电储能电网运营仓库货车托盘模板，电力储能存在。Elexon为GB定性背景非通用区间法律结构损耗因子，未支持身份原生覆盖明确缺口。 | elexon-physical-trading-context; elexon-settlement-context |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际身份完整性复核后secondary_dataset；background_dataset |
| downstream_use | 计量物理电力商业交付服务附加，真实匹配发电电网来源损耗需求已完成在外一次 |
| allowed_use | 实际所有权转售企业最终物理商业案例，一个买方互斥点组非重叠时段原生版本计量证明 |
| excluded_use | 纯金融发电储能商人电网运营消费者使用零售代理、仓库库存货物模型 |
| required_metadata | 案例预定义物理交付所有权购买转售企业买方最终交接来源撤销N；点方向原生单位寄存器区间倍率互感比已含校准UTC夏令时实测估算版本去重；真实发电电网交接损耗基线来源归属全部物理终端已完成在外集成量状态链接时区来源归属覆盖，自设施信息计量服务商全资产用品去向归属 |
| required_quality_disclosure | 真实案例物理计量来源电网损耗估算修订结构覆盖基线完成集成原生身份支持资源服务商全资产去向不确定性敏感性各行证据需求 |
| update_trigger | 案例物理点组时段所有权最终计量角色寄存器倍率方向版本时区来源电网损耗覆盖集成自资源服务商资产去向变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-physical-electricity-wholesale | official_guidance | UNSD CPC3 explanatorynotes30June2025,17100/61097 printed309. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类，物理交付计量商业服务较窄电力批发。 |
| elexon-physical-trading-context | official_guidance | Elexon Tradingelectricityinthemarket. https://www.elexon.co.uk/bsc/about/trading-electricty-market/ | 仅GB物理交付与非物理交易计量合同核对定性背景，拒不可储存简化，不时间法律角色默认。 |
| elexon-metering-context | official_guidance | Elexon Metering. https://www.elexon.co.uk/bsc/operational/metering/ | 仅GB进口出口计量互感数据聚合定性背景，不默认商人电网运营或强制表计配置。 |
| elexon-settlement-context | official_guidance | Elexon Settlement. https://www.elexon.co.uk/bsc/settlement/ | 仅GB计量合同核对修订时区电网损耗责任问题，不通用结算区间期限结构损耗因子。 |
