---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-beverages
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 密封PET瓶装非碳酸天然矿泉水自营批发服务

## 1. 范围与适用性

本PCR覆盖商户购入并转售供方已灌装、气密密封单程PET瓶装非碳酸天然矿泉水，通过普通常温仓库接收、库存包装检查、电动搬运及真实商业买方验收交付。继承密封和常温场所不构成新的有界保鲜操作；专用运营温控介入须重新审查路线模块。

排除取水矿源运营、水处理、瓶盖标签制造、灌装开瓶再密封、新增碳酸化脱气、散装水、循环瓶洗灌、气泡调味加糖水及其他饮料、零售代理和独立仓储运输。供方放行状态证据定义天然矿泉水产品，本PCR不作健康纯度保质期或法律合规保证。

全部水与继承容器包装生产灌装及损失的上游负担均在服务增量模块外。完整链条使用前须完成商品台账及原灌装密封门槛需求损失的一次接口；真实仓库资源溢漏处理及废物接收处理在服务中覆盖一次。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-beverages |
| classification_refs | CPC 3.0:61026; 密封PET非碳酸天然矿泉水自营批发较窄子集 |
| covered_products | 供方放行密封单程PET非碳酸天然矿泉水常温自营批发服务 |
| excluded_products | 散装气泡水其他饮料公用水；取水灌装制造循环瓶处理；独立仓储代理零售 |
| representative_product | 真实矿源SKU源批密封PET灌装包至验收商业批次，无标准瓶容或箱数 |
| production_route | 供方最终灌装密封放行→商户接收状态库存检查→普通常温存放电动搬运→约定商业验收 |
| market_state | 真实密封瓶装商品及商业门槛限定的已完成商户服务；水内容物不是服务输出本身 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的密封PET非碳酸天然矿泉水自营批发服务 |
| How much | 1 Item(s) |
| How well | 真实矿源产品状态、数量内容物皮重及包装完整性验收限定；买方实际采用标准与真实常温暴露记录 |
| How long or cycle | 真实供方放行接收存放发运验收期间及关联未完成库存，不采用默认仓储时长 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的密封PET瓶装矿泉水自营批发批次 |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | source_id; product_sku; supplier_release_gate; filled_sealed_pet_state; noncarbonated_state; source_lot_id; bottle_count; bottle_unit; labelled_volume; labelled_volume_unit; actual_contents_quantity; actual_contents_unit; density; density_temperature; density_source; inherited_pack_tare; merchant_id; buyer_gate; reporting_period; actual_storage_conditions |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| consignment_count | accepted_service | Count | Item(s) | 计唯一最终买方验收商业批次N>0，不计瓶箱托盘发票或吨；保留真实物理限定。 |
| contents_and_pack | 非交换商品 | Mass; Volume; Count | kg; m3; Item(s) | 实际水净质量与标示容量瓶数不同；仅据相容温度密度转换实测体积。记录PET盖标签外包托盘支撑皮重和整载荷，不设水密度默认。 |
| actual_supply_units | 实际新供给出口 | native property | native unit | Count包装须实际单位定义及需要时单件质量来源；质量体积用实测净量密度温度换算来源。 |
| provider_asset_units | provider_packages; shared_assets | Count | Item(s) | 实体服务包或完整资产等价须明确匹配原生数据；真实其他原生单位另适当展开。 |
| freight_units | freight | mass*distance | kg*km | 真实整载荷kg乘真实km乘有据互不重叠份额，显式记录t-km换算。 |
| species_units | direct_species | Mass | kg | 真实物种介质与实测或因子组成去向基准必须有据；原生浓度活动体积压温仅据匹配证据转换。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 供方最终放行已灌装密封单程PET非碳酸天然矿泉水，矿源SKU状态批次及主次包装明确 |
| starting_condition_role | 实体常温商户自营批发服务增量模块 |
| product_classification_scope | 饮料批发较窄子集，商品生产独立关联 |
| recursive_input_rule | 不把交易灌装包作为耗用公用水或在服务内递归制造；原门槛商品独立审计，真实服务供给供方另有实体范围投入。 |
| upstream_dataset_requirement | 独立原灌装密封商品系统覆盖矿源取水、适用真实上游处理、PET盖标签继承包装制造及灌装放行，兼容需求及损失调整一次。仅取水数据不完整。 |
| disclosure | 真实矿源批次包装商户买方状态期间；原门槛归属数量单位状态来源责任既有覆盖；完好破包去向；全部实体服务供方承运资产处理边界 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| commodity_separation | 全部商品 | 内容物水和继承包装制造灌装及损失上游均在服务外。记录原灌装包需求和实际损失接口，不因转售推购入公用水直接取水或新PET制造。 |  |
| ambient_handling | 接收验收密封包 | 记录真实常温条件和异常冷热冻结冷凝包装失效事件及供方买方标准。历史规范仅提示配送暴露，取水开放灌装不是批发步骤，不导入数字仓储限值。 | codex-packaged-water-hygiene |
| supplier_product_state | 密封天然矿泉水 | 核验供方矿源产品和继承非碳酸密封状态，历史标准区分该状态和气密容器，实际案例以供方证据及采用标准为准，不推纯度组成百分数。 | codex-mineral-water-state |
| period_and_reject | 库存及真实事件 | 保留跨期间全部群组接收发运退回拒收破包期末内部移动及失败未完成资源。仅最终真实买方验收计N；可用商业退回、完整灌装包废弃和真实破包清理不同。 |  |
| resource_ownership | 供方资产运输处理 | 真实实体供给电动搬运清洁外包全寿命资产运输接收处理仅一次。继承商品为审计，回收留存内部移动为库存，无金融替代或自动信用。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | 密封瓶装矿泉水常温商户存放与交接 | required | 商户真实自营接收普通常温存放电动搬运供方灌装密封PET矿泉水至商业验收 | 实体商业服务及状态库存包装责任，不新设取水灌装保鲜产品 | `accepted_service` |

唯一真实服务节点承担实际接收搬运卫生及约定门槛资源。瓶装水包装为非交换商品台账。实际条件性包装SKU供方资产废物物种依前景记录展开，不编造标准投入环境出口。

### 过程：密封瓶装矿泉水常温商户存放与交接 (`ambient_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属购入电量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：实际源电表期间、设备充电范围及全部使用者驱动记录，含失败搬运待机；不设每瓶电耗、电机名义功率或环境温控默认。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属购入公用水量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需要清洁事件计量、供水来源处理及破包清理覆盖；不得以瓶标容量作为公用水量，或将购入量等于排污量。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_agents_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属新卫生制剂供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实SKU、净接收库存未用退回和使用记录；不设通用化学配方剂量组成或释放比例。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的密封PET瓶装矿泉水自营批发批次 (`accepted_service`)

一项真实唯一商业买方验收批次，商品为商户拥有的供方灌装密封单程PET非碳酸天然矿泉水。真实矿源产品放行、瓶箱数及单位、标示容量、实测内容物质量或有据体积密度温度、继承皮重状态期间及买方条件限定服务。不固定瓶数吨水或利润等价。

- 选定流：已完成的密封PET瓶装矿泉水自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waterpack`

数量范围证据需求：真实商业验收及矿源批次SKU包装状态证据用于可比服务；不设默认瓶规格批载荷纯度阈值服务时长或验收率。

##### 废物流

###### 废弃密封装满矿泉水的PET瓶整件 (`intact_pack_waste_atomic_case`)

仅在实际独立记录确认“废弃密封装满矿泉水的PET瓶整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`intact_pack_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃密封装满矿泉水的PET瓶整件
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属完整灌装包废物转移质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waterpack`

数量范围证据需求：需真实拒收批瓶数、完整状态、接收方实测总净量基准及处理范围；不假定拒收库存已开启泄漏或全部丢弃。

###### 实际单独收集的塑料包装废物 (`empty_pack_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离受损包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际组成流身份、残留内容物基准、净质量及接收分选处理；无标准PET皮重回收率或替代原生料信用。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| commodity_gate_demand | 商品 | 追踪真实原灌装密封供方投入与验收批次群组归属数量，使用兼容水包装状态单位来源和有据分配换算。真实破包原供给未回收水及匹配继承包装有证据时计入。退回期末其他出口互斥归属。不得用发运水净量加废PET替代原门槛灌装包需求。全部上游阶段及损失调整由服务外唯一责任者核对既有覆盖一次，库存差额不能确定损失水废物或释放。 |  |
| all_consumer_resources | 真实仓库期间 | 采用全部使用者真实源期间与搬运空间时间等有据因果驱动，带原生单位理由，含待机卫生失败重复及未完成群组。不默认均分批次或水质量比。未完成资源结转且不编造N。 |  |
| supply_return_convention | 服务新供给 | S=opening_supply+net_receipts-closing_supply。选择总输入S/N并单独记录匹配真实原生单位未用外退输出；或仅耗用输入(S-usable_outward_return)/N并省去该退回交换、不再次抵扣。扣减须同范围独立供给库存配对证据，回收留存属于期末。继承商品资产内容物不减少无关当期供给。 |  |
| full_asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N，对应一个相容完整资产及所有使用者期间。包括制造维护实际替换退役寿命末端、观测历史有据剩余及不确定性敏感性更新。当期事件供方重叠仅在其他范围真实唯一归属后移除。不每轮制造托盘，不重复租金资产视图。 |  |
| actual_outlet_once | 废物及真实退回 | 可用商业完整退回仍是商品；完好灌装包废物为一个完整状态实体出口。真实破包按实测状态接收方分别分配水、分离包装和混合清理库存输出。不重复整包及水包组分，不重复整流物种出口，无默认替代生产回收信用。接收处理在服务或接收服务包内仅一次。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_waterpack` | ambient_wholesale | 参考及非交换水包装库存 | sealed_pack_acceptance_stock_record | site_id; merchant_id; warehouse_id; cohort_id; consignment_id; event_id; period_id; accepted_consignment_ids; N; reference_gate_id; ownership_resale_record; source_id; supplier_id; product_sku; source_lot_id; supplier_release_gate; supplier_release_date_time; filled_sealed_pet_state; noncarbonated_state; primary_pack_material; one_way_state; source_product_evidence; applicable_acceptance_criteria; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; exposure_event; seal_integrity; label_condition; secondary_pack_condition; bottle_count; bottle_unit; bottles_per_case; case_count; labelled_volume; labelled_volume_unit; actual_volume; actual_volume_unit; contents_net_mass; mass_unit; density; density_unit; density_temperature; density_temperature_unit; density_source; contents_measurement_method; whole_pack_gross; pet_tare; closure_tare; label_tare; outer_pack_tare; pallet_support_tare; tare_unit; opening_quantity; receipts; dispatch_quantity; supplier_return; buyer_return; closing_quantity; recovered_closing; internal_transfer_id; stock_unit; stock_state; intact_reject_quantity; intact_waste_transfer_mass; intact_waste_unit; actual_breach_event; breached_bottle_count; actual_water_unrecovered; water_unrecovered_unit; water_fate; pack_fate; measured_cleanup_quantity; unknown_discrepancy; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 核对真实供方矿源SKU灌装密封放行、商户产权、包装群组实际完整状态标准及最终唯一买方验收。实测水与PET盖标签外包托盘支撑皮重，或用有据密度温度换算实测体积；瓶标容量数量另作非叠加视图。核对相同状态库存退回期末内部移动、完整拒收与真实破包去向及不明差额。追踪原灌装密封归属需求和实际相容损失及唯一外部责任既有覆盖，不从差额推损失。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 实际水kg/m3及包装状态原生单位 | 每次真实接收检查移动破包拒收验收盘点 | 供方放行接收至交接、前后库存及未完成失败重复期间 | 一个真实商户责任与关联商品放行买方门槛 | per reference flow | 真实供方矿源状态买方记录；校准质量体积密度皮重与条件去向调查 |
| `cp_supplies` | ambient_wholesale | 新卫生清理包装供给与未用退回 | supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; gross_receipts; receipt_tare; net_receipts; opening_supply; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; density; density_unit; density_temperature; density_source; conversion; conversion_source; composition; composition_basis; composition_source; fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 记录真实原生供给库存接收使用期末及匹配未用外退，换算来源独立支持。总供给加退回或仅耗用省去退回二选一。新增运输件及单件材料质量真实，继承瓶包排除。不推配方剂量。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; Item(s); 真实原生单位换算 | 每次真实接收使用退回盘点 | 完整供给使用退回期间含未完成群组 | 具名直接供给范围排除供方重叠 | per reference flow | 校准净量SKU单位配对期末证据及真实组成换算来源 |
| `cp_utilities` | ambient_wholesale | 真实源计量及全部使用者公用资源归属 | meter_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; breach_cleanup_event_id; electric_handling_coverage; utility_water_coverage; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用真实源进口期间或匹配直接分表且不重叠。按有据搬运空间时间等全部使用者驱动归属，含待机卫生失败未完成事件。商品矿泉水不是公用水表供给。实际专用温控介入触发路线复审。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh; m3; 实际表及驱动单位 | 每个匹配源表与使用者事件期间 | 全部服务期间使用者及待机清理未完成群组 | 直接计量与供水处理边界，排除供方重叠 | per reference flow | 表计校准实际源读数间隔及全使用者驱动理由 |
| `cp_provider` | ambient_wholesale | 实体供方服务包 | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_electricity; included_supplies; included_assets; included_freight; included_treatment; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | 取得真实完成服务包定义原生数量和完整资源结果范围，直接供方承运处理资产责任核对一次。发票不能定义无资源Count。水加工仍在范围外。 | Item(s)或实际展开原生单位 | 每个已完成真实合同事件 | 全部服务包源运营处理期间 | 具名实体供方责任与显式排除 | per reference flow | 真实签署完成及服务包原生单位证据和重叠矩阵 |
| `cp_assets` | ambient_wholesale | 完整寿命全部使用者资产 | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_source | 识别真实仓库货架叉车循环托盘监测称量全寿命，按相容全使用者寿命驱动和观测历史有据剩余归属完整资产，含替换终止寿命末端。实际轮数可作驱动不每轮制造。划分当期直接供方承运责任。 | Item(s)等价; 实际相容寿命作业驱动单位 | 每个资产期间维护替换退役复核 | 制造至寿命末端完整历史有据剩余及全部使用者 | 真实完整资产唯一责任，直接供方承运重叠一次 | per reference flow | 资产范围历史剩余来源驱动单位及不确定性敏感性 |
| `cp_freight` | ambient_wholesale | 真实整载荷运输 | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; water_payload_mass; pet_closure_label_mass; inherited_outer_mass; added_pack_mass; transported_pallet_support_mass; mass_unit; whole_payload_mass; route_distance; distance_unit; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | 核对约定真实门槛运输水加继承新增包装托盘支撑整载荷，以相容实际载荷距离和互斥运输批次份额计算。声明空返多点退回与承运能源资产覆盖。 | kg*km; 实际载荷距离原生工作量单位 | 每次真实运输退回段 | 约定实际门槛及关联空返退回期间 | 具名承运工作量含能源资产责任 | per reference flow | 实际载荷路线份额与有据单位换算 |
| `cp_outlets` | ambient_wholesale | 已收集破包清理固液体 | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; remaining_contents; remaining_contents_unit; composition; composition_basis; composition_source; water_merchandise_fraction; utility_water_fraction; retained_cleanup_fluid; inherited_pack_inclusion; separate_stream_exclusion; density; density_unit; density_temperature; density_source; volume; volume_unit; conversion; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 实测各真实分离包装、混合清理固体或已收集液体原生单位状态，明确剩余内容物和非叠加组分视图。核验接收处理及供方责任一次，排除已转移完整包和留存期末。组成污染负荷独立有据。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; m3; 实际流原生单位 | 每次真实收集转移接收验收 | 真实损失清理接收期间，留存库存另记 | 实际围控接收实体接口，无自动直接释放 | per reference flow | 实测净量密度状态、真实组成负荷基准和接收处理证据 |
| `cp_environment` | ambient_wholesale | 真实直接物种与接收介质 | direct_species_measurement_record | site_id; cohort_id; event_id; period_id; substance_identity; receiving_medium; release_state; measured_mass; measured_mass_unit; measured_volume; measured_volume_unit; activity; activity_unit; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_source; conversion; conversion_source; retained_captured_quantity; receiver_treatment_coverage; applicability; calibration; uncertainty | 选身份前明确真实物种接收介质。实测物种质量、适用活动因子、实测整流组成去向选一路。完整物种因子不再乘组成去向。已收集流留存与环境释放不同，未围控整液须另有适当原生身份，不假定纯水。 | kg物种及全部原生活动浓度整流单位 | 每次真实事件或有依据匹配监测期间 | 实际释放期间和来源适用性，不从期初期末余差推断 | 具名直接环境接口排除接收处理 | per reference flow | 实测校准或有据因子适用性组成去向来源及换算不确定性 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N为reference_gate_id上最终唯一accepted_consignment_ids数量；accepted_service=1 Item(s)。 | cp_waterpack | 一项真实完整商业服务，附内容物数量包装状态时间限定 |  |
| contents_pack_views | 非交换商品 | contents_net_mass=whole_pack_gross-pet_tare-closure_tare-label_tare-outer_pack_tare-pallet_support_tare，采用实际相容称量边界；或contents_net_mass=actual_volume*density，采用相容实测体积密度温度证据。标示容量瓶数与实际内容物分开记录，不叠加。 | cp_waterpack | 实际水包装皮重审计，无固定升千克因子 |  |
| source_gate_demand | 非交换商品 | assigned_source_gate_quantity为source_gate_input_quantity向验收群组的真实相容有据分配换算，包含有证据原供给未回收水及匹配包装，与退回期末其他出口互斥。commodity_source_gate_demand=assigned_source_gate_quantity/N，位于服务外；真实loss_adjustment_quantity/unit/basis/source/owner及already_included_loss_coverage核对一次。不明库存差不是损失。 | cp_waterpack; N | 独立原灌装密封需求及一次商品损失接口 |  |
| new_supply_stock | 服务新供给; 未用退回 | S=opening_supply+net_receipts-closing_supply；net_receipts=gross_receipts-receipt_tare。总输入S/N并单独记录匹配外退usable_outward_return/N，或仅耗用(S-usable_outward_return)/N并省去匹配退回交换。回收留存包含于期末，采用真实原生单位换算来源。 | cp_supplies; N | 每参考流实际服务供给及唯一退回处理约定 |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading，按真实进出口方向，或匹配direct_submeter_quantity；attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N，范围互不重叠且全使用者期间完整，保留待机卫生未完成作业。 | cp_utilities; N | 每参考流实际购入公用资源量 |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N，仅用于有据匹配实体服务包，并核对内含物理资源责任。 | cp_provider; N | 每参考流真实等价服务包数量 |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N；life_driver=observed_driver+remaining_driver，单位相容，完整寿命范围剩余有据且含全部使用者，不重复驱动服务视图。 | cp_assets; N | 每参考流相容真实完整资产等价份额 |  |
| whole_load_freight | freight | whole_payload_mass=water_payload_mass+pet_closure_label_mass+inherited_outer_mass+added_pack_mass+transported_pallet_support_mass，载荷组成真实互斥；freight_work=whole_payload_mass*route_distance*load_share/N，先实际单位换算并核对空返退回覆盖互斥。 | cp_freight; N | 每参考流真实整载荷运输工作量 |  |
| actual_contained_outlets | intact_pack_waste; empty_pack_waste; cleanup_waste; contained_wastewater; empty_pack_waste_plastic_pack; intact_pack_waste_atomic_case | intact_pack_waste=intact_waste_transfer_mass/N，仅实际完整包。其他outlet_quantity=(gross_quantity-tare_quantity)/N，或真实体积/N，必要时有相容密度温度换算。整流组分分开；接收处理一次，留存期末内部移动不是外送。 | cp_waterpack; cp_outlets; N | 每参考流真实互斥围控出口及原生状态 |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N，先相容有据换算并选一路。factor_complete禁止再乘组成去向；整流物种不可重复实体输出。 | cp_environment; N | 每参考流真实物种质量及接收介质 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| sealed_source_state | 接收验收灌装包 | 真实供方矿源SKU单程PET非碳酸灌装密封放行、买方标准、包装完整暴露历史及唯一验收；无历史数字质量健康法律保证。 | cp_waterpack真实放行条件买方记录 |
| quantity_and_loss | 水包装台账 | 真实瓶箱标示容量内容物质量密度温度皮重视图兼容分开。原灌装包需求、完好破包退回期末出口、外部损失责任覆盖真实，不默认差额损失。 | 实测库存状态去向及定量商品接口 |
| resource_completeness | 全部使用者供方资产运输 | 完整真实事件期间驱动单位、资产完整历史有据剩余寿命末端及实体资源责任，含卫生待机未完成失败运输处理。 | 源计量全使用者驱动供方范围寿命记录 |
| actual_identity_ranges | 真实展开交换 | 最终数据前验证具体产品废物物种原生属性单位，数值范围需独立可比证据，不编基准。 | 实际详情支持和范围适用性证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_water | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_agents | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`cleaning_agents`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| cleanup_consumables | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`cleanup_consumables`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_packing | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_packing`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_packages | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_packages`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_count_returns | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_count_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| unused_mass_returns | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_mass_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| intact_pack_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_waterpack`识别`intact_pack_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`intact_pack_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waterpack`; 实际来源关联原生记录 |
| empty_pack_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`empty_pack_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| cleanup_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`cleanup_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| contained_wastewater | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`contained_wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

计量声明常温仓储服务实际使用的电动叉车充电、输送、照明、普通通风及清洁设备用电，含适当待机归属。本路线无现场燃烧和专用制冷加热介入。若实际运营温控介入，须重新审查路线模块。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：常温瓶装水搬运实际购入电力
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属购入电量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：实际源电表期间、设备充电范围及全部使用者驱动记录，含失败搬运待机；不设每瓶电耗、电机名义功率或环境温控默认。

#### cleaning_water

仅计实际外购的地面设备卫生或破包清理用水。矿泉水商品另记商品台账，不作购入清洁供水或直接取水。分开循环使用及真实外购补水。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：仓库及溢漏清理实际购入公用水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属购入公用水量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需要清洁事件计量、供水来源处理及破包清理覆盖；不得以瓶标容量作为公用水量，或将购入量等于排污量。

#### cleaning_agents

按真实具名配方产品、原生产品质量、组成基准和使用去向展开，仅用于仓库表面或清理。不含开瓶、冲洗消毒瓶体、重新密封或处理矿泉水内容物。

本卡为独立身份分支`cleaning_agents_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库卫生制剂产品
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属新卫生制剂供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实SKU、净接收库存未用退回和使用记录；不设通用化学配方剂量组成或释放比例。

#### cleanup_consumables

实际破包围控、隔离受损商品或维护搬运设备时使用的吸附物擦拭物等质量计耗材。清洁产品质量与废材所含水化学污染分开记录。条件性零用量也须事件证据。

- 身份采集要求：实际溢漏围控及搬运耗材
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属新清理耗材供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实耗材身份原生数量库存和相容废材组成；不设标准清理包、吸水比或不明损失容差。

#### added_packing

仅计商户实际新增的运输支撑捆带膜外箱，按各真实单位材料展开，必要时记录实测单件质量。供方PET瓶盖标签及继承外包装为商品，不在此作为新制造或新购包装。循环托盘为资产，不每次流转计新件。

- 身份采集要求：实际新增可计数次级运输包装
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属新增运输包装件数
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实包装单位定义库存未用退回、单件材料质量及运输作用；不设每箱瓶数、每托盘膜克数或自动新增外包。

#### provider_packages

仅计实际外包的实体仓库检验卫生维护或搬运服务，供方须定义匹配完成单位并包含完整物理资源。无利润保险金融或发票等价替代。商品维持灌装密封；外包水处理灌装再密封仍是本路线外真实加工。

- 身份采集要求：已完成的实体检验卫生或搬运服务包
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属等价实体服务包
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需服务包定义原生单位换算、实际完成数量、范围及直接供方重叠矩阵；无标准价格时长或无资源Count替代。

#### shared_assets

采用真实仓库货架叉车电动搬运、循环托盘监测称量设备，匹配整资产等价及唯一负担责任。完整制造维护更换退役寿命末端覆盖全部实际使用者期间；租金或每轮托盘流转不自动等于整件新资产。

- 身份采集要求：实际完整寿命仓库及循环搬运资产
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属完整资产等价份额
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：需实际资产ID类型全寿命范围、驱动单位、观测历史及全部使用者有据剩余寿命；无默认仓库寿命托盘次数或零寿命末端。

#### freight

按约定进出退回门槛及承运方记录整载荷：水内容物、PET瓶盖标签、继承新增外包和实际运输托盘支撑。商品水净质量不是整载荷。不得重复承运数据已含电燃料车辆基础设施。

- 身份采集要求：实际整载瓶装水及退回运输工作量
- 流属性/单位：mass*distance / kg*km
- 数量规则：每参考流实际归属运输工作量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需实际载荷组成路线距离多点份额及空返覆盖原生换算；不默认标示升等于千克或标准路线装载率。

#### unused_count_returns

仅计匹配同一供给库存单位并获接收方验收的实际外部未用新增Count包装退回。留存内部移动不作外部交换。选总供给加该外送退回，或仅耗用供给且省去该退回交换，不可双重扣减。

- 身份采集要求：实际外送未用新增包装退回
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属未用包装外退件数
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需原供给ID配对真实外送数量单位接收记录；无默认退回率、继承瓶押金或回收信用。

#### unused_mass_returns

真实外退未用卫生清理供给，精确产品状态与原独立投入库存范围匹配。商业灌装瓶退回属于非交换商品台账；已用污染擦拭物为废物。

- 身份采集要求：实际外送未用质量计服务供给退回
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属未用供给外退质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实同范围供给外退配对与净质量；无负公用水需求或商品退回自动信用。

#### intact_pack_waste

实际由具名废物接收方接收的完整密封灌装包，测量水加主包装质量状态。可用商业供方买方退回不是该废物。整包为一个整体状态实体出口，不再同时将内含水和PET作为额外实体出口。商品损失需求在服务外，实际处理责任在服务内一次。

- 身份采集要求：实际整包废弃的完好灌装矿泉水
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属完整灌装包废物转移质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waterpack`

数量范围证据需求：需真实拒收批瓶数、完整状态、接收方实测总净量基准及处理范围；不假定拒收库存已开启泄漏或全部丢弃。

#### empty_pack_waste

真实分离并转移的破损PET瓶盖标签废物，按实测流状态声明剩余附着内容物。不是新瓶制造。损坏继承次级包装按实际材料接收方另展开。不得重复整包转移或已计混合清理固体。

本卡为独立身份分支`empty_pack_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际单独收集的破损或排空主包装废物
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离受损包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际组成流身份、残留内容物基准、净质量及接收分选处理；无标准PET皮重回收率或替代原生料信用。

#### cleanup_waste

真实已用吸附物擦拭物和搬运卫生残余，记录耗材干量与保留的矿泉水公用水化学物状态，整股混合流至实际接收方。内容物和原清洁耗材是分析视图，不是额外重复出口。

- 身份采集要求：实际收集的混合溢漏清理固体
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属混合清理固体转移质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际净转移质量组成状态来源、保留流体及排除的包装流；不从购入吸附量或库存差额推废物。

#### contained_wastewater

真实单独记录已收集的泄漏商品水或清洁液，具有真实混合组成、相容体积密度温度或净质量换算及污染负荷证据。公用水、商品溢漏、外部冷凝水及耗材保留流体不同。已收集流不是直接环境水排放或污染物物种。

- 身份采集要求：实际收集送处理的矿泉水破包及清洁液体
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属已收集液体转移体积
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实收集接收体积或质量密度基准及处理范围；不默认纯水、不把瓶标升数等于排口或默认排污比例。

#### direct_species

仅对真实直接释放的具名物质及接收介质建模，以实测质量或适用活动因子、实测整股流组成去向为依据。矿泉水商品不自动等于纯水、取水或污染物排放。真实未围控液体须另有合适原生整股流身份单位及独立物种证据；不由库存差额推释放，已收集废物不提前算接收方处理释放。非碳酸不表示化学上溶解二氧化碳为零；破瓶或标签本身不能确定碳酸盐或二氧化碳是否释放及释放多少；须有真实释放证据，不默认零释放，也不默认发生释放。

- 身份采集要求：实际独立证实的直接释放物种
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属直接释放物种质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：需物种介质、数量单位换算、组成因子适用性及去向来源；不以SDS等于释放，不设默认矿物物种蒸发损失或全化学品释放。

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_check | accepted_service | N>0为最终唯一商业买方验收批次，具有真实矿源状态包装件数内容物皮重密度温度时间条件；不是瓶箱或千克参考。 |  |
| no_hidden_processing | 全部路线 | 无取水处理灌装开瓶再密封碳酸化循环瓶加工或未审专用温控介入；外包实体加工仍是真实路线。 |  |
| commodity_stock_gate | 商品实际出口 | 核验原灌装密封基线覆盖水容器灌装，原门槛归属需求及实际损失单位状态来源责任既有覆盖在服务外一次，退回期末其他出口互斥，不由库存余差推释放。 |  |
| physical_resource_owners | 全部资源 | 真实全使用者期间驱动单位、待机卫生未完成尝试、供给退回及完整资产寿命剩余末端；供方承运处理一次，无每轮制造托盘或重复归一化。 |  |
| intact_breach_release | 真实出口 | 可用商业退回不同于整包废物、真实破包分离包装混合清理液体及环境物种。不同时输出整包和组分，不假定商品水为取水公用水或纯水排放。 |  |
| bilingual_projection | 全部卡规则 | 真实输出参考名称关联、原始六字段限定七画像字段、卡证据属性单位协议操作数来源URL及有序规则双语投影对齐；检查不验证场址质量或最终UUID。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 完成真实前景采集和具体交换验证后作为secondary_dataset或background_dataset |
| downstream_use | 常温商户实体服务增量模块，关联独立原放行灌装密封矿泉水商品及真实相容需求损失一次；不是完整交付瓶装水足迹 |
| allowed_use | 声明单程PET供方密封非碳酸天然矿泉水常温自营群组及真实商业验收门槛 |
| excluded_use | 散装气泡调味水其他饮料，取水灌装容器生产，未审温控路线循环瓶加工代理零售独立仓储；健康安全保质期保证 |
| required_metadata | 商户矿源SKU批次包装放行买方门槛；真实瓶箱标容内容物数量密度温度及PET盖标签外包支撑皮重；常温暴露期间；全使用者资源供方承运完整资产寿命接收方；原门槛归属数量状态单位来源分配换算损失责任既有覆盖 |
| required_quality_disclosure | 真实计量校准及数量容量质量皮重相容性；完好破包清理不明差额；全使用者因果驱动和完整寿命有据剩余；实体服务处理重叠；原门槛商品需求损失调整；实际身份支持范围缺口 |
| update_trigger | 供方矿源非碳酸包装状态标准改变；新开瓶重灌再密封温控介入；仓库搬运资产供方承运处理路线改变；破包拒收损失释放或实质证据更新 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| codex-packaged-water-hygiene | official_guidance | Codex，《天然矿泉水收集加工销售卫生操作规范》，CAC/RCP33-1985，2011修订，第8节。https://www.fao.org/input/download/standards/224/CXP_033e.pdf | 历史包装配送暴露背景：冻结容器失效、冷凝标签次包损坏、过热过冷关注。不采用数字默认、现行法律保证、化学配方或上游生产步骤。 |
| codex-mineral-water-state | standard | Codex，《天然矿泉水标准》，CODEXSTAN108-1981，2011修订，第2.2.2及5节。https://www.fao.org/input/download/standards/223/CXS_108e.pdf | 历史非碳酸矿泉水与气密包装状态区分；仍需真实矿源供方证据，不推纯度密度组成健康阈值或现行法律。 |
