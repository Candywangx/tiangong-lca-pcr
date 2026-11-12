---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-tobacco-products
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封有过滤嘴卷烟的常温自营批发服务

## 1. 范围与适用性

本 PCR 覆盖原厂放行制造者密封的有过滤嘴可燃卷烟，在普通常温电动仓库买入并自营转售企业客户的物理服务。从已放行密封包可用接收到实际企业买方验收，库存聚合搬运真实异常处置均可追溯。

排除原烟固化烟草手卷烟料雪茄加热电子雾化电池产品、卷烟过滤嘴卷纸制造、开封换装再加工吸食零售佣金代理及纯财务转移。不假定库房主动温湿处理燃烧；真实新增物理作业须明确有界审查完整清单。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-tobacco-products |
| classification_refs | CPC3.0:61028；narrower：密封有过滤嘴卷烟常温自营批发 |
| covered_products | 已验收原厂密封有过滤嘴卷烟物理批发商业批次 |
| excluded_products | 原叶制造其他尼古丁装置零售代理主动调控换装 |
| representative_product | 具真实品号类型支包条净质量水分皮重及层级门槛限定的商业验收批次 |
| production_route | 放行密封包接收 -> 常温库存物理搬运真实聚合 -> 企业发出买方验收 |
| market_state | 已完成物理贸易服务；不变密封成品卷烟为非交换商品 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的密封有过滤嘴卷烟常温自营批发批次服务 |
| How much | 1 Item(s)：一个唯一验收商业批次，不固定支包千克货币 |
| How well | 真实制造者品号密封状态物理条件及约定追溯买方要求，记录例外 |
| How long or cycle | 真实接收持存拣货发出退回验收期间，加归属待机清洁截止资产完整寿命 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的密封有过滤嘴卷烟常温自营批发批次服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | manufacturer_released_finished_filtered_cigarettes; actual_manufacturer_SKU_style; sealed_unit_pack_and_primary_presentation; actual_sticks_packs_cartons_and_hierarchy_factors; actual_parent_child_ID_levels_and_events; net_cigarette_tobacco_filter_paper_mass; moisture_basis_and_primary_pack_tare; actual_ambient_conditions_and_periods; actual_receipt_departure_return_acceptance_gates; ownership_resale_business_buyer; condition_and_traceability_acceptance; actual_scope_provider_transport_responsibility |

N>0 为记录冲销后的完成验收服务数；未完成拒收跨期职责须有据责任集合，不因当期无成交删除。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 参考输出为 1 Item(s)，一个商业服务，不是支包条扫描税额。 |
| hierarchy_count | merchandise | Count | actual native count | 用真实品号支每包包每条及父子关系因子来源，选定层级每份物理库存一次；不假定通用包装数或每支标识。 |
| component_mass | merchandise and exits | Mass | kg | 分开整支质量烟草过滤嘴卷纸水分基准及继承一层皮重，换算状态来源实测；干烟草视图不等整成品，也不叠加流。 |
| native_units | all exchanges | actual native property | actual native unit | 保留材料服务资产单位及真实属性支持，不利润税额转服务、不叶转成品或替代通用能源。 |


## 5. 系统边界

边界为仓储搬运追溯附加服务，不是单独完整卷烟足迹。英国 HMRC 记录仅提供物理事件聚合责任的原始例子，不是全球法定方案。下列分配数学库存口径为声明方法，不归称 HMRC 定量结论。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 真实已放行原厂密封有过滤嘴成品卷烟，原包装品号明确 |
| starting_condition_role | 非交换商品库存流经量，不作耗用烟草过滤嘴卷纸一层包装投入 |
| product_classification_scope | 61028烟草批发内较窄常温密封卷烟物理自营服务 |
| recursive_input_rule | 真实上游服务须完整不重叠物理门槛，不递归购入同批次或重复已含信息运输资产 |
| upstream_dataset_requirement | 服务外商品基线须匹配已放行密封成品，含烟草加工卷烟过滤嘴卷纸一层包装制造，缺失阶段各一次补齐。已调制的未加工烟叶单独不完整。真实资源服务接收处理须兼容门槛 |
| disclosure | 全部限定、真实数量组分水分皮重库存验收期间、损失需求原门槛换算覆盖责任集成结果及完整资产服务承运接收范围 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all exchanges | 全部商品制造含烟草过滤嘴卷纸原厂一层包装，不论可售损失均在本附加服务外。全链完整前，服务外须匹配已放行密封成品基线，原门槛归属需求损失定量、已有覆盖责任各一次集成。真实损失搬运接收处理在服务内仅一次。 |  |
| boundary_events | stock and identifiers | 采用实际品号物理数量及追踪父子聚合事件。包条托盘标识、场所经营者身份、商业文件与完成服务次数不同。不强制每支标识默认包数，也不因继承标识新增标签制造。 | hmrc-selling-storing |
| boundary_status | returns and losses | 退回隔离遗失被盗销毁须互斥数量责任记录。未知去向保持未决，不假为空气废物焚烧或回收产品。不从毛重库存水分差额推干烟草损失。 | hmrc-selling-storing |
| boundary_operations | ambient warehouse | 本路线为真实常温电动搬运仓储信息作业，无主动温湿保鲜场内燃烧开烟换装或制造。真实额外调控燃料工质再加工须有界路线审查并补全交换，不可省略或记零；承运温控设备在服务范围声明。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sealed_cigarette_trade | 密封卷烟常温仓储与自营批发 | required | 真实自营常温物理仓储服务及企业验收 | 一个接收库存搬运聚合发出责任；批次作业共享连续期间库房信息基础设施 | `accepted_service` |

真实聚合拆聚合是记录搬运事件，不是新卷烟制造或保鲜过程。条件性材料服务原生单位废物物种按具体身份接收方展开；未决不是零。

### 过程：密封卷烟常温仓储与自营批发 (`sealed_cigarette_trade`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`warehouse_power_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：分配实测电量 / N；cp_power。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：需真实电表期间设备职责及全部消费方物理驱动量；标识符或交易次数本身不是能耗因子。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实测归属供应量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需真实供应持留容纳废液及直接排口蒸发证据，不把水量差额自动归向空气。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_preparations_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：归属真实制剂供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需购入使用记录、活性载体基准稀释密度温度单位换算来源；危险分类不是释放质量。

###### 实际独立记录的聚乙烯包装薄膜 (`added_outer_material_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：归属真实新增物资供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需物理品号原生库存皮重材料组成实测换算，不默认每支每包标签，也不用税额作材料。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的密封有过滤嘴卷烟常温自营批发批次服务 (`accepted_service`)

一个真实唯一买入转售所有权并经企业买方验收的批次，具物理追溯限定；支包条数为独立商品量。

- 选定流：已完成的密封有过滤嘴卷烟常温自营批发批次服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：需真实商业完成门槛及品号数量净质量水分皮重期间验收记录；不固定每服务支数千克价格利润税额。

##### 废物流

###### 废弃密封过滤嘴卷烟包装整件 (`discarded_sealed_units_atomic_case`)

仅在实际独立记录确认“废弃密封过滤嘴卷烟包装整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_sealed_units`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃密封过滤嘴卷烟包装整件
- 流属性/单位：Mass / kg
- 数量规则：归属实测整件废物量 / N；cp_lots。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：需真实支包条、卷烟烟草过滤嘴卷纸净质量水分一层皮重状态及原成品门槛损失换算责任；不假定焚烧吸食或叶等价损失。

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_cohort | all inventory | 采用真实唯一正数验收 N 及因果物理期间集合比例，含失败取消隔离退回订单待机清洁未完成跨期责任，期间 N 为零不删除活动。税费利润货币不是物理分母。 |  |
| allocation_stock | merchandise nonexchange ledger | 按互斥状态核对归属期初净收货买方退回期末验收转移退供已知废弃其他外出；隔离聚合为内部移动。归属成品需求损失用实测组分水分一层皮重换算及单位基准来源责任已有覆盖匹配原门槛。单独的已调制未加工烟叶不是成品卷烟基线。 |  |
| allocation_supply | actual supplies and usable_supply_return | S=归属期初+真实外部净收货-含留存回收物资期末。采用总供应输入 S 并单独记录同范围匹配可用外退输出，或仅耗用输入 S-return 且省去匹配外退交换。内部回收不是新收货，不作 S+退回输入二次扣减或去除废物溢漏上游负担。 |  |
| allocation_shared | power/providers/assets/freight | 兼容实测期间资源比例=集合物理驱动量/全部消费方驱动量。完整寿命资产当量=兼容集合驱动量/全部用户期间完整寿命驱动量，制造维护清洁更换终结各一次。采用实测寿命或历史加有据剩余终止驱动单位来源敏感性更新。完整服务视图替代已覆盖自有负担。 |  |
| allocation_outlets | actual waste and releases | 真实整件或分离组分互斥，接收处理运输各一次。湿流与其内含组分是替代组成视图，不叠加物理出口。废物不自动回收替代抵扣或扣上游供应；直接物质须真实接收介质有据去向。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_lots | sealed_cigarette_trade | 验收批次及非交换卷烟库存 | 原始事件计量范围及来源记录 | consignment_id; lot_id; manufacturer; SKU; cigarette_style; sticks_per_pack; packs_per_carton; aggregate_level; parent_id; child_ids; count_unit; hierarchy_factor; hierarchy_factor_source; facility_id; arrival_time; departure_time; return_flag; acceptance_time; ownership_gate; buyer_gate; opening; gross_receipts; tare; net_receipts; buyer_returns; closing; accepted_quantity; supplier_returns; quarantine_internal; other_exits; lost_status; stolen_status; destroyed_status; actual_fate; gross_mass; net_cigarette_mass; tobacco_mass; filter_mass; paper_mass; primary_pack_tare; moisture_value; moisture_basis; moisture_unit; moisture_method; moisture_source; sample_id; sample_time; supplier_moisture_evidence_date; mass_unit; measurement_state; conversion_factor; conversion_unit; conversion_source; original_gate_dataset_id; original_gate_reference; assigned_source_quantity; assigned_source_unit; source_gate_state; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_basis; loss_conversion; loss_conversion_unit; loss_conversion_source; burden_owner; already_included_loss_coverage; separate_pack_fate; integration_result; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 将实际完成买方验收与物理库存及实际包条托盘父子标识相连，核对数量及实测组分水分，不强制每支标识或默认包装因子；服务外定量原放行成品卷烟归属需求损失。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); sticks; packs; cartons; kg; declared moisture units | 每次真实事件验收 | 实际归属期间及截止 | 实际单节点职责与全部共享消费方 | 每参考流 | 原始记录、兼容单位基准换算来源、完整责任及不确定性 |
| cp_power | sealed_cigarette_trade | 仓库用电 | 原始事件计量范围及来源记录 | meter_id; period_start; period_end; meter_opening; meter_closing; energy_unit; device_scope; idle_cleaning; cohort_driver; cohort_driver_unit; all_consumer_driver; all_consumer_driver_unit; attribution_share; share_source; provider_included_scope; source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按兼容期间全部消费方物理比例计量完整真实用电，含待机清洁未完成归属。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 每个实测期间 | 实际归属期间及截止 | 实际单节点职责与全部共享消费方 | 每参考流 | 原始记录、兼容单位基准换算来源、完整责任及不确定性 |
| cp_water | sealed_cigarette_trade | 供水及真实液相去向 | 原始事件计量范围及来源记录 | source_id; period; supplied_volume; volume_unit; retained_volume; contained_volume; outfall_id; receiver; density; density_unit; temperature; temperature_unit; composition; composition_basis; composition_source; evaporation_evidence; source; fate_basis; fate_source; treatment_scope; transport_scope; attribution_share; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量真实供应出口，区分容纳接收液、直接物质持留有据蒸发，不以差额推断。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3; actual composition units | 每次使用收集 | 实际归属期间及截止 | 实际单节点职责与全部共享消费方 | 每参考流 | 原始记录、兼容单位基准换算来源、完整责任及不确定性 |
| cp_supplies | sealed_cigarette_trade | 实际新物资及匹配未用外退 | 原始事件计量范围及来源记录 | material_id; SKU; formulation; active_fraction; carrier_fraction; fraction_basis; fraction_source; period; opening; gross_receipts; receipt_tare; net_receipts; internal_issue; internal_recovery; closing_including_recovered; actual_use; matched_unused_external_return; receiver; source_scope_match; stock_representation; native_unit; conversion_factor; conversion_unit; density; density_unit; temperature; temperature_unit; conversion_source; fate; fate_basis; source; attribution_share; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 各真实新物资按原生单位记录及匹配退回来源；总供应独立退回或匹配仅耗用省略退回出口二选一。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual native material units | 每次收货使用退回截止 | 实际归属期间及截止 | 实际单节点职责与全部共享消费方 | 每参考流 | 原始记录、兼容单位基准换算来源、完整责任及不确定性 |
| cp_provider | sealed_cigarette_trade | 真实外部物理作业 | 原始事件计量范围及来源记录 | provider_id; job_id; actual_gate; native_quantity; native_unit; completion_time; energy_coverage; IT_asset_coverage; maintenance_EOL_coverage; transport_empty_coverage; treatment_coverage; included_direct_release; overlap_owner; upstream_dataset; source; cohort_driver; all_consumer_driver; driver_unit; attribution_share; N | 核实真实完成原生服务及完整资源资产边界；税费金额与物理量分开，去除自有范围重叠。 | Item(s); actual provider units | 每次完成作业期间 | 实际归属期间及截止 | 实际单节点职责与全部共享消费方 | 每参考流 | 原始记录、兼容单位基准换算来源、完整责任及不确定性 |
| cp_assets | sealed_cigarette_trade | 完整寿命共享周转资产 | 原始事件计量范围及来源记录 | asset_id; asset_native_unit; manufacture_scope; maintenance_cleaning; replacements; EOL_scope; burden_owner; provider_overlap; cohort_driver_identity; cohort_driver; cohort_driver_unit; lifetime_driver_identity; lifetime_driver; lifetime_driver_unit; all_user_driver; all_period_scope; observed_history; observed_unit; evidenced_remaining_use; remainder_unit; remainder_source; termination_basis; uncertainty; sensitivity; update_evidence; source; N | 按兼容全部用户寿命驱动分配完整生命周期，采用实测寿命或历史加有据剩余终止；保留库存退回移动，不每趟新造资产。 | Item(s); actual compatible driver units | 每次购置使用更换截止 | 实际归属期间及截止 | 实际单节点职责与全部共享消费方 | 每参考流 | 原始记录、兼容单位基准换算来源、完整责任及不确定性 |
| cp_transport | sealed_cigarette_trade | 真实归属货运 | 原始事件计量范围及来源记录 | leg_id; origin; destination; carrier; period; gross_load; load_tare; net_load; load_unit; distance; distance_unit; load_conversion_factor; load_conversion_unit; load_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; empty_run_coverage; temperature_equipment_coverage; commodity_provider_owner; cohort_driver; all_consumer_driver; driver_unit; attribution_share; share_source; source; N | 采用真实载荷距离有据换算分配比例，承运空返完整，路段责任唯一。 | kg*km; actual leg native units | 每条真实路段 | 实际归属期间及截止 | 实际单节点职责与全部共享消费方 | 每参考流 | 原始记录、兼容单位基准换算来源、完整责任及不确定性 |
| cp_waste | sealed_cigarette_trade | 实际分离固体接收处理 | 原始事件计量范围及来源记录 | event_id; lot_id; origin; whole_or_part; material; wet_mass; dry_mass; mass_unit; moisture; moisture_basis; moisture_unit; moisture_method; moisture_source; sample_id; sample_state; sample_time; tobacco_fraction; filter_fraction; paper_fraction; packing_fraction; fraction_basis; fraction_source; contamination; gross; tare; net; actual_fate; receiver; transfer_gate; transport_coverage; treatment_recovery_scope; upstream_loss_link; source; attribution_share; all_consumer_driver; driver_unit; N | 称量真实互斥整件部分材料，记录接收处理；已知处置与被盗遗失状态及商品损失基线分开。 | kg; actual component basis | 每次真实事故分离转移 | 实际归属期间及截止 | 实际单节点职责与全部共享消费方 | 每参考流 | 原始记录、兼容单位基准换算来源、完整责任及不确定性 |
| cp_species | sealed_cigarette_trade | 真实直接物质介质 | 原始事件计量范围及来源记录 | event_id; source_process; substance; receiving_medium; measured_release; release_unit; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; component_fraction; fraction_basis; fraction_source; fate_fraction; fate_basis; fate_source; measurement_source; uncertainty; attribution_share; all_consumer_driver; driver_unit; N | 先确定真实物质介质，再实测或使用兼容活动因子组成去向证据；完整物种因子不重复相乘。 | kg; actual compatible activity units | 每次真实释放来源事件 | 实际归属期间及截止 | 实际单节点职责与全部共享消费方 | 每参考流 | 原始记录、兼容单位基准换算来源、完整责任及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | 归属物理量除正数 N 一次；accepted_service 为 1 Item(s)。 | 归属量; N; 关联协议 | 每参考流交换量 |  |
| supply_stock | supplies and usable_supply_return | S=归属期初+真实外部净收货-含留存回收物资期末。采用总供应输入 S 并单独记录同范围匹配可用外退输出，或仅耗用输入 S-return 且省去匹配外退交换。内部回收不是新收货，不作 S+退回输入二次扣减或去除废物溢漏上游负担。 | 期初; 外部净收货; 期末; 同范围匹配外退; 口径; cp_supplies | 不重复供应外退量 |  |
| period_asset_share | shared resources | 兼容实测期间资源比例=集合物理驱动量/全部消费方驱动量。完整寿命资产当量=兼容集合驱动量/全部用户期间完整寿命驱动量，制造维护清洁更换终结各一次。采用实测寿命或历史加有据剩余终止驱动单位来源敏感性更新。完整服务视图替代已覆盖自有负担。 | 实测资源; 集合全部消费方寿命驱动量及单位; 历史剩余来源; cp_power; cp_assets | 归属资源完整资产当量 |  |
| original_finished_gate | commodity only outside service | 全部商品制造含烟草过滤嘴卷纸原厂一层包装，不论可售损失均在本附加服务外。全链完整前，服务外须匹配已放行密封成品基线，原门槛归属需求损失定量、已有覆盖责任各一次集成。真实损失搬运接收处理在服务内仅一次。 按互斥状态核对归属期初净收货买方退回期末验收转移退供已知废弃其他外出；隔离聚合为内部移动。归属成品需求损失用实测组分水分一层皮重换算及单位基准来源责任已有覆盖匹配原门槛。单独的已调制未加工烟叶不是成品卷烟基线。 | 原成品数据集门槛; 归属需求; 损失量单位状态组分水分皮重换算来源; 其他出口; 已含覆盖责任; 集成结果; cp_lots | 服务外定量原成品需求损失负担 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | all exchanges | 最终使用前核实具体流状态门槛属性单位介质，各类别按真实身份展开。 | 完整详情及支持证据 |
| quality_stock | cigarette stock | 真实数量层级组分水分皮重互斥出口去向账，来源换算完整成品门槛。 | 原始批次事件称量处置及集成记录 |
| quality_coverage | all responsibilities | 原生物理资源服务全部用户全寿命资产承运接收处理完整各一次，具不确定性更新。 | 计量范围驱动寿命及接收来源 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_power | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_power`识别`warehouse_power`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_power`; 实际来源关联原生记录 |
| cleaning_water | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| cleaning_preparations | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`cleaning_preparations`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_outer_material | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_outer_material`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| external_jobs | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`external_jobs`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_transport`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_transport`; 实际来源关联原生记录 |
| usable_supply_return | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_supply_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_sealed_units | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_lots`识别`discarded_sealed_units`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`discarded_sealed_units_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_lots`; 实际来源关联原生记录 |
| separated_solid_waste | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`separated_solid_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| contained_effluent | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`contained_effluent`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| actual_direct_species | sealed_cigarette_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_species`识别`actual_direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_species`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### warehouse_power

实际电动搬运照明扫描打印及归属信息系统运行，含待机清洁；不假定调温负载。完整外部服务已含电力不再叠加。

本卡为独立身份分支`warehouse_power_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际常温仓库搬运及信息系统用电
- 流属性/单位：Energy / kWh
- 数量规则：分配实测电量 / N；cp_power。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：需真实电表期间设备职责及全部消费方物理驱动量；标识符或交易次数本身不是能耗因子。

#### cleaning_water

仅真实清洁用水，不作卷烟成分或规定加湿；环境取水须实际独立来源及支持。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入的场地清洁水
- 流属性/单位：Volume / m3
- 数量规则：实测归属供应量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需真实供应持留容纳废液及直接排口蒸发证据，不把水量差额自动归向空气。

#### cleaning_preparations

明确真实品号组成及原生供应单位，稀释商业混合物活性物质载体视图不重复作为供应。

本卡为独立身份分支`cleaning_preparations_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库清洁制剂
- 流属性/单位：Mass / kg
- 数量规则：归属真实制剂供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需购入使用记录、活性载体基准稀释密度温度单位换算来源；危险分类不是释放质量。

#### added_outer_material

仅本服务真实新增外裹标签纸墨等。原厂一层包装烟条印记标识注册记录属继承商品记录，不每扫描再制造。真实数量面积长度变体按原生单位展开。

本卡为独立身份分支`added_outer_material_pe_film`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际新增外包装聚合标签与打印物资
- 流属性/单位：Mass / kg
- 数量规则：归属真实新增物资供应量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需物理品号原生库存皮重材料组成实测换算，不默认每支每包标签，也不用税额作材料。

#### external_jobs

仅按真实合同完成的物理服务作业计数，含完整电力信息设备资产运行范围。其他服务原生单位须对应具体交换，不把金额费用换算次数。

- 身份采集要求：实际完整计数的外部仓储追溯作业
- 流属性/单位：Count / Item(s)
- 数量规则：归属已完成作业数 / N；cp_provider。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需服务门槛数量单位资源信息资产运输覆盖重叠责任；注册号或缴税本身不证明物理作业。

#### shared_assets

真实建筑货架电动搬运扫描打印信息设备及周转托盘箱按全部用户期间，制造维护清洁更换寿命终结各仅一次。

- 身份采集要求：仓库搬运扫描及周转资产完整寿命当量
- 流属性/单位：Count / Item(s)
- 数量规则：归属完整资产当量 / N；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需兼容集合完整寿命驱动身份单位、实测历史及有据剩余终止来源不确定性敏感性更新，不每次移动再制造托盘。

#### freight

声明真实路段承运边界，含空返及服务商温控设备；不重复商品入程或完整服务已含运输。

- 身份采集要求：批次物资废物实际归属运输
- 流属性/单位：Mass * distance / kg*km
- 数量规则：归属真实载荷距离量 / N；cp_transport。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

范围证据需求：需真实毛皮重净载荷距离因子单位来源及分配全部用户驱动量；额定能力费用假定路线不足。

#### usable_supply_return

仅真实未用物资同范围来源接收方；继承卷烟一层包装、留存库存及周转资产不是本物资外退，不自动替代抵扣。

- 身份采集要求：实际匹配未用服务物资外退
- 流属性/单位：Mass / kg
- 数量规则：归属实测可用外退量 / N；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需同范围匹配原生量：总供应输入 S 并单独退回输出，或仅耗用输入 S-return 且省去该输出；输入不作 S+退回，不负扣无关供应或二次抵扣。

#### discarded_sealed_units

仅有记录的真实废弃单元及接收处理路线；隔离到期缺标被盗遗失状态本身不是废物。整卷烟加一层包装废物不重复已分离部分。

- 身份采集要求：废物接收门槛处实际废弃的密封卷烟单元
- 流属性/单位：Mass / kg
- 数量规则：归属实测整件废物量 / N；cp_lots。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_lots`

范围证据需求：需真实支包条、卷烟烟草过滤嘴卷纸净质量水分一层皮重状态及原成品门槛损失换算责任；不假定焚烧吸食或叶等价损失。

#### separated_solid_waste

仅意外破损及真实清洁外包装废物，不主动开烟再加工。按实际烟草过滤嘴卷纸原新增包材污染清洁组分接收身份展开，不重复整件出口。

- 身份采集要求：实际分离卷烟包材及清洁固体废物
- 流属性/单位：Mass / kg
- 数量规则：归属真实分离废物量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需实测湿干组分基准互斥整件部分账、来源真实运输处理覆盖；收集不是回收利用或避免生产。

#### contained_effluent

仅实测收集液流及有据尼古丁烟草清洁剂污染，交接接收处理。湿固体整件及液相视图不作为叠加出口。

- 身份采集要求：实际容纳态仓库清洁液废
- 流属性/单位：Volume / m3
- 数量规则：归属实测容纳废液量 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需来源体积密度温度组成基准接收处理，不从商品遗失假定烟草浸出液废水。

#### actual_direct_species

仅按实测或有据真实物质介质来源展开，如真实清洁溢漏释放。正常密封贸易无吸食燃烧；被盗气味水分差额及商品尼古丁含量不是释放物种量。

- 身份采集要求：实际已识别直接物质及接收介质
- 流属性/单位：Mass / kg
- 数量规则：归属有据真实物种释放量 / N；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`

范围证据需求：需物质介质活动因子单位基准来源组成实际去向证据；完整物种因子不再重复乘组成去向。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_completion | accepted_service | 需真实自营商业企业验收全部限定及正数唯一 N；仓库扫描包数付款缴税本身不完成参考服务。 |  |
| validate_hierarchy | stock and traceability | 核对实际追踪父子身份及原生支包条数量实测因子，不重复父子商品量或虚构每支标识。HMRC仅为地区记录例子，不作全球法律发行人时限税则。 | hmrc-selling-storing; hmrc-id-issuer |
| validate_loss | commodity linkage | 需兼容已放行密封成品生产一层包装基线，缺失阶段服务外各一次补齐，原门槛归属损失数量单位状态换算来源已有覆盖责任集成结果完整。被盗差额不证明物理去向或干烟草排放。 |  |
| validate_resources | physical coverage | 核实原生单位支持、资产完整寿命全部用户兼容驱动及自有外部承运接收边界各一次。真实新增调控燃料工质触发扩展，不替代通用能源、不费用转次数或统记零。 |  |
| validate_fates | actual outputs | 需实测互斥整件部分废物及实际接收处理；特定直接物种活动因子组成去向来源兼容。尼古丁含量气味缺标水分差额不是释放量。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际数量身份核实后可用作 secondary_dataset; background_dataset |
| downstream_use | 完整已放行密封有过滤嘴卷烟商品链的常温自营批发物理附加服务 |
| allowed_use | 真实声明品号类型包装层级净质量水分皮重期间条件及企业验收路径 |
| excluded_use | 单独完整卷烟足迹制造原叶其他尼古丁装置吸食零售代理主动调控再加工或金额税额替代 |
| required_metadata | 全部参考限定；真实物理库存层级期间；原门槛归属需求损失换算责任覆盖集成；完整服务承运资产接收范围 |
| required_quality_disclosure | 未决真实身份支持数量范围证据物理去向；来源地区限制及寿命换算不确定性 |
| update_trigger | 品号类型包装层级库房作业服务资产运输处理验收损失去向证据或原门槛范围变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale | official_guidance | UNSD.CPC3.0 explanatory notes,division61; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 61028含250烟草制品，仅分类，不作过程数量。 |
| hmrc-selling-storing | official_guidance | HMRC.Selling and storing tobacco products,last updated1July2022; https://www.gov.uk/guidance/selling-and-storing-tobacco-products | 英国到达发出退回聚合身份及遗失被盗销毁分类记录例子；不作全球义务时限税费或物理损失因子。 |
| hmrc-id-issuer | official_guidance | HMRC.Register with the ID issuer if you are in the tobacco product supply chain; https://www.gov.uk/guidance/register-with-the-id-issuer-if-youre-in-the-tobacco-product-supply-chain | 该地区真实经营者场所及产品聚合标识的区别；不规定全球发行人或物理耗材。 |
