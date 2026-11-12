---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-sports-goods-incl-bicycles
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 厂家装箱部分组装非机动自行车套装自营批发服务

## 1. 范围与适用性

适用于厂家完整装箱、部分组装的非机动双轮自行车套装实际常温自营企业间批发。完整指真实供应商放行套装BOM与包装齐全，并非已组装或可骑行。保留实际车架型号序列尺寸、已装或分离轮脚踏附件工具、套装箱数及原生净量皮重状态。

厂家交付示例区分装箱部分交付和后续专业组装（`trek-delivery`），仅支持状态边界核查，不假设批发组装交车检查试骑、通用配置工具胎压扭矩时长或电动路线。普通常温存放不需强制保存模块。

全部制造、厂家部分组装、原厂轮胎润滑物包装及真实损失商品隐含上游在此服务外。完整链使用前，关联商品系统须匹配并量化真实原装箱部分状态门槛需求及唯一损失覆盖。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-sports-goods-incl-bicycles |
| classification_refs | CPC 3.0:61055（narrower）；实际商品49921非机动脚踏车 |
| covered_products | 厂家完整装箱部分组装非机动双轮自行车套装的实际常温自营批发服务。 |
| excluded_products | 机动电动自行车、其他体育用品船舶、售后散件贸易、原厂制造、批发最终组装交车检查调整试骑维修洗涤重包装、零售收费代理独立仓储。 |
| representative_product | 实际供给型号车架序列尺寸及装箱部分配置，含供给车轮脚踏附件BOM；不是假设可骑行整车。 |
| production_route | 厂家放行完整包装部分套装，批发接收核实记录外箱状态，常温存放电动搬运后由企业买方实际接收。 |
| market_state | 已完成服务；实际购销套装原厂包装内含物均为非交换商品审计，不是消耗性服务输入。 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 对声明装箱部分组装自行车套装货批进行接收、普通常温存放搬运及实际商业验收交接。 |
| How much | 1个完成企业买方验收的货批；实际套装箱件计数及相容净量包装质量另行声明。 |
| How well | 实际厂家部分组装放行BOM、箱配置记录、观察状态及真实买方标准；不统一规定开包、可骑行认证、交车检查或试骑。预期拆分待组装件不必是缺货。 |
| How long or cycle | 实际厂家放行收货存放发货验收时刻时区持续量及原生单位；跨期未完成拒收尝试保留资源归属。 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的厂家装箱部分组装非机动自行车套装自营批发货批服务 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; supplier_release_gate; manufacturer; model; frame_serial_or_lot; frame_size; nonmotorized_two_wheel_configuration; manufacturer_partial_assembly_state; kit_BOM_completeness; wheel_pedal_accessory_membership; actual_kit_count; net_kit_mass_basis; inherited_pack_tare; inherited_tire_lubricant_state; warehouse_site; receipt_dispatch_acceptance_times; buyer_acceptance; reporting_period |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N仅一次计数声明最终门槛下真实买方验收的唯一商业货批ID。套装车架车轮脚踏箱数及财务额是独立审计量。 |
| received_configuration | 商品审计 | Count; Mass; Length | Item(s);kg;实际原生尺寸单位 | 记录实际原厂部分组装和完整供给BOM、已装与预期拆分部件、附件工具及原箱皮重。保留车架型号序列尺寸来源；不使用统一可骑行或散件等价。 |
| mass_reporting_extent | 商品供给运输 | Mass; Count | kg;Item(s) | 区分机身套装部件包装支撑净量与整货载。保留EACH/TOTAL范围及相容件数：单件量只乘一次，已是总量不可再乘。车辆集装箱秤票皮重排除货载，除非明确为真实随货包装支撑。发布质量需同实际型号配置状态方法证据。 |
| native_conversion | 全部物理量 | 实际需要属性 | 原生及目标单位 | 每原生操作数需单位状态基准方法来源时刻；件数质量换算需实际单件边界来源，体积质量换算需密度单位温度单位来源及换算单位来源。润滑物保留液水分组分需独立单位基准及代表方法取样时刻。 |
| species_and_content | 条件内含释放 | Mass;实际原生内含量 | kg;明确原生单位 | 原厂轮胎润滑物涂层属于商品，包括实际整套部件废物中保留内含物。组成不等于释放；需物种颗粒介质及独立数量去向证据。未知差额不是零损失排放。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际原供应商放行的厂家完整装箱、部分组装非机动双轮套装，匹配型号车架序列尺寸及供给BOM包装附件轮胎润滑状态。 |
| starting_condition_role | 批发附加服务的原始供应商放行输入状态；完整制造套装不是已组装可骑行整车。 |
| product_classification_scope | CPC 3.0:61055较窄自行车自营批发服务；商品49921为背景，不是服务Count。 |
| recursive_input_rule | 购销套装是非交换商品库存。在服务外关联实际原装箱部分配置商品需求，不递归以另一批发服务或不同组装状态产品替代整套。 |
| upstream_dataset_requirement | 独立商品系统仅一次覆盖全部实际原料车架车轮轮胎传动附件制造、涂饰、厂家部分组装润滑及原厂包装直至实际收货原门槛。原散件篮或不匹配可骑行使用阶段数据集不足；服务外核对状态并补实际缺失阶段。 |
| disclosure | 声明原门槛配置BOM状态单位来源、原始分配量及相容换算全部出口分配、真实损失唯一责任调整已有覆盖与遗漏阶段。不可仅凭服务宣称完整产品链。 |

### 边界规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| merchant_physical_scope | 含真实记录外箱状态核查、常温存放电动搬运、实际仓库卫生围控新增外部防护、共享基础设施、所属运输和真实接收废物搬运处理。原厂装箱部分组装内含物不产生批发保存或组装工艺。 |  |
| no_pdi_or_assembly | 不规定最终组装、装轮脚踏、扭矩压力调整、润滑、交车检查、安全认证、试骑、维修洗涤重包装及电池电机使用。真实此类工作包括外包需单独审查范围。 | trek-delivery |
| matched_partial_gate | 批发输入输出状态为实际厂家完整装箱部分套装；来源所述后续专业或消费者组装步骤不移动此供应商门槛。套装完整指真实供给BOM，不是所有部件已连接或可骑行。 | trek-delivery |
| commodity_outside_once | 全部商品原厂包装内含物上游及真实损失商品隐含上游在此服务外。完整链前需量化完整原部分状态门槛分配需求及互斥损失调整责任覆盖且仅关联一次；真实服务处置处理在此一次。未知损失阻断完成，非默认零。 |  |
| stream_content_exclusivity | 真实整套部件包装清理液体转移、保留轮胎润滑涂层组分视图及独立有据物种互斥。原厂油胎不是购入操作用品或自动释放；缺件库存余额压力差需证据确立身份数量去向，否则未定。 |  |


## 6. 过程清单结构

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ambient_wholesale | 常温装箱部分组装自行车套装批发 | required | 实际指定非机动双轮套装自营货批 | final_service | accepted_service |


### 过程：常温装箱部分组装自行车套装批发 (`ambient_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：native_interval_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有计量期间、全部使用者因果原生驱动及实际交付电力来源属性支持；不提供仓库功率或单车能耗默认。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：actual_utility_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有实际表计或有据密度换算、清洁区间和共享分配；不由套数推洗车水量。

###### 实际独立记录的合成洗涤剂投入 (`hygiene_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：设定数量范围前需有实际SKU配方、单件或总量原生数量、库存退回配对、组成及换算证据。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的厂家装箱部分组装非机动自行车套装自营批发货批服务 (`accepted_service`)

实际企业买方验收后完成的一次商业批发货批，商品为声明的厂家完整装箱部分组装非机动双轮套装。完整供给BOM不同于最终组装；供应商预期拆分的轮或脚踏不自动是缺件。服务数不是车辆件箱千克或利润。

- 选定流：已完成的厂家装箱部分组装非机动自行车套装自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_bicycle`

数量范围证据需求：需以实际验收货批、车架型号序列尺寸、厂家装箱部分状态BOM、真实套数净量皮重及期间限定；不规定每批车数或箱数。

##### 废物流

###### 废弃完整盒装不完整自行车套件 (`whole_kit_waste_atomic_case`)

仅在实际独立记录确认“废弃完整盒装不完整自行车套件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_kit_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整盒装不完整自行车套件
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有原车架套装身份、整流边界原生质量状态、所含附件包装内含物及接收处理证据；不假设整套废物率。

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际分离材质净质量状态、污染或保留组分、接收方及原包装责任；原箱损伤不等于假设新购箱。


###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际分离材质净质量状态、污染或保留组分、接收方及原包装责任；原箱损伤不等于假设新购箱。


###### 实际单独收集的塑料包装废物 (`packaging_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际分离材质净质量状态、污染或保留组分、接收方及原包装责任；原箱损伤不等于假设新购箱。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| stocks_and_attempts | 按实际期间核对型号车架套装部件BOM箱记录：期初收货期末、可用商业退回其他出口、保留拒收及真实接收废弃。预期拆分件不等于缺件；内部移动保留回收不为外送。未完成拒收尝试跨期保留真实资源，N仅计验收服务。 |  |
| original_source_assignment | 原门槛输入到目标用有据直接分配，或完整相容群组：assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。原生全部竞争出口记录单位基准来源等价含其他可用出口期末退回真实损失。不可仅用验收目标套装货批分配整来源库存，不能由部件数推原套数。 |  |
| linked_commodity_demand | commodity_source_gate_demand=assigned_source_gate_quantity，对应实际厂家装箱部分配置并含其有证据状态变化份额。原数量单位状态来源分配换算及真实损失调整原生基准来源责任已含覆盖必需。最终发货质量加废弃不是原需求；服务外一次调整前先查来源已有覆盖。  记录assignment_scope_ids、quantity_basis=raw_target_cohort或per_reference、same_target_scope_N及来源。原门槛库存和实际服务外阶段损失集成在其实际实体范围保留原始量一次。仅在与1 Item(s)服务组合时才派生q_per_reference=raw_assigned_to_that_same_scope/正数same_target_scope_N。已按每参考流记录的量不再除；单货批原始范围N=1，N=0无归一结果。不得用派生归一视图闭合原始群组库存或集成实际缺阶段损失。 |  |
| supply_return_convention | S=opening+net_receipts-closing含保留回收未用品。选择总供给输入S/N并单独记录真实配对未用外送输出，或仅耗用输入(S-usable_outward_return)/N且省该退回交换。配对同一独立负担供给身份边界；不将原厂套装油包装或循环资产冲减无关供给，不再加避免生产抵扣。 |  |
| all_consumer_resources | 真实直接表计或有据同单位因果空间时间搬运原生驱动覆盖全部用户期间与所属空闲卫生未完成资源。声明实际份额分子分母单位基准来源不确定性；质量套数均分需有据，价格利润不是物理驱动。 |  |
| complete_asset_life | 一个匹配资产完整周期含制造实际维护更换退役寿命终结。寿命分母含相容全部用户已观测历史及有来源剩余驱动、原生单位等价来源不确定性敏感性更新；仅一次job_driver/lifetime_all_user_driver分配再除N。不重复计租赁承包承运资产，不每次周转购入支撑。 |  |
| one_physical_owner | 维护直接承包承运资产接收处理事件矩阵和唯一负担方。运输货载含真实随货包装支撑，但不把其变成新耗用物；车集装箱非货物皮重不是货载。整流组分内含视图不增加重复交换处理，可用转移无自动替代抵扣。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_bicycle | ambient_wholesale | 商品套装及验收服务 | 厂家BOM库存买方记录 | consignment_id; supplier_release_gate; manufacturer; model; frame_serial_or_lot; frame_size; frame_size_unit; frame_size_source; nonmotorized_two_wheel_configuration; supplier_partial_assembly_state; state_source; kit_BOM_id; kit_BOM_source; attached_parts; expected_detached_parts; wheel_pedal_accessory_membership; included_tool_scope; part_parent_ids; part_count; part_count_unit; part_count_source; actual_kit_count; kit_count_unit; kit_count_source; carton_count; carton_count_unit; carton_count_source; body_mass; net_kit_mass; mass_unit; mass_basis; mass_method; mass_source; mass_reporting_extent; mass_count_multiplier; count_multiplier_unit; count_multiplier_source; inherited_pack_tare; pack_tare_unit; pack_tare_source; whole_pack_mass; whole_pack_mass_unit; whole_pack_mass_source; tire_lubricant_state; content_identity; content_quantity; content_unit; content_basis; content_method; content_source; content_sample_time; content_conversion_factor; content_conversion_unit; content_conversion_source; content_density; content_density_unit; content_density_temperature; content_density_temperature_unit; content_density_source; composition; composition_unit; composition_basis; composition_method; composition_source; composition_sample_time; content_fate; content_unknowns; condition_observation; actual_shortage_evidence; acceptance_criterion_source; buyer_acceptance_id; supplier_release_time; receipt_time; dispatch_time; acceptance_time; time_zone; duration; duration_unit; duration_source; opening_stock; receipts; closing_stock; stock_unit; stock_state; stock_source; return_ids; return_quantity; return_unit; return_state; return_owner; return_method; return_source; useful_other_exit_ids; useful_other_exit_quantity; useful_other_exit_unit; useful_other_exit_state; useful_other_exit_owner; useful_other_exit_method; useful_other_exit_source; actual_loss_quantity; actual_loss_unit; actual_loss_state; actual_loss_basis; actual_loss_method; actual_loss_source; actual_loss_fate; unfinished_resource_attribution; carried_resource_link; source_gate_input_quantity; source_gate_input_unit; source_gate_input_state; source_gate_quantity_source; source_gate_allocation_mode; direct_assignment_source_ids; direct_assignment_quantity; direct_assignment_unit; direct_assignment_source; allocation_cohort_id; cohort_source_quantity; cohort_source_unit; cohort_source_state; cohort_source_record; target_exit_driver; sum_exit_drivers; exit_driver_unit; exit_driver_basis; exit_driver_source; all_exit_ids; all_exit_driver_records; exit_original_partial_kit_equivalent; exit_equivalence_unit; exit_equivalence_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; upstream_missing_stages; upstream_stage_owner; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 匹配真实厂家完整装箱部分门槛、车架型号序列尺寸及BOM预期拆分件。实际记录套装箱况，不规定最终组装交车检查试骑。计量原生净量皮重单件总量；核对跨期出口及直接分配或全部相容出口群组损失覆盖。  记录assignment_scope_ids、quantity_basis=raw_target_cohort或per_reference、same_target_scope_N及来源。原门槛库存和实际服务外阶段损失集成在其实际实体范围保留原始量一次。仅在与1 Item(s)服务组合时才派生q_per_reference=raw_assigned_to_that_same_scope/正数same_target_scope_N。已按每参考流记录的量不再除；单货批原始范围N=1，N=0无归一结果。不得用派生归一视图闭合原始群组库存或集成实际缺阶段损失。 | Item(s)、kg及声明尺寸内含驱动时间原生单位 | 逐收货状态移动发货验收及期间关账 | 原装箱部分放行至全部出口及跨期未完成期间 | 实际批发供应买方门槛，一个真实节点 | 每参考流 | 厂家BOM放行、校准测量边界、可追溯库存全部出口分配及真实买方验收 仅记录一次N；完整原生证据分配来源，状态短缺内含未知保留，非余额等于损失。 |
| cp_supplies | ambient_wholesale | 真实新物料及未用退回 | 独立库存外送转移 | supply_id; material_SKU; formulation; composition; composition_unit; composition_basis; composition_source; opening; net_receipts; closing; stock_unit; stock_source; retained_recovery; unused_outward_return; return_unit; return_receiver; same_supply_pairing; supply_convention; native_quantity; quantity_unit; quantity_source; reporting_extent; count_multiplier; count_multiplier_unit; count_multiplier_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; service_driver; all_user_driver; driver_unit; driver_basis; driver_source; service_driver_share; period; owner; embedded_provider_coverage; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采集真实SKU配方期初收货期末、EACH/TOTAL范围单位及同源配对可用外送。总S输入加实际配对输出，或仅耗用扣同退回且省退回交换。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 支持目标换算的原生物料单位 | 逐真实收货使用外送及期间关账 | 实际供给区间及保留回收期末 | 批发新增供给及真实外部接收方 | 每参考流 | 原生库存收据方法换算密度温度来源及同边界配对 实际物理份额及原生量仅换算一次，无原厂件箱油或资产抵扣。 |
| cp_utilities | ambient_wholesale | 实际分配仓库公用工程 | 表计及全部用户因果记录 | utility_id; provider; geography; meter_id; native_interval_quantity; quantity_unit; quantity_source; interval_start; interval_end; time_zone; service_driver; all_user_driver; driver_unit; driver_basis; driver_source; service_driver_share; actual_utility_quantity; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; included_provider_scope; overlap_exclusions; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 获取原生计量时段及实际服务全部用户同单位驱动，明确换算再除N；区分实测分配，排除承包已含资源。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh、m3及原生时间驱动换算单位 | 逐计量驱动时段 | 完整实际区间含所属空闲未完成资源 | 真实仓库搬运计量及全部用户 | 每参考流 | 计量来源单位及真实全部用户因果分配基准 仅匹配时段资源及有据服务份额，无消费者组装骑行公用工程。 |
| cp_provider | ambient_wholesale | 实际互斥承包服务包 | 物理服务等价覆盖记录 | package_id; provider; physical_scope; actual_native_package_quantity; package_unit; quantity_source; physical_equivalence; equivalence_unit; equivalence_source; documented_share; share_numerator; share_denominator; share_driver_unit; share_driver_basis; share_driver_source; covered_events; covered_energy; covered_materials; covered_assets; covered_transport; covered_treatment; excluded_scope; direct_resource_owner; service_period; all_users; evidence_record; N | 取得真实物理单位等价事件、份额分子分母和完整能源物料资产承运处理排除，无隐含最终组装交车检查。 | 原生物理等价及相容份额单位 | 每实际承包服务事件及范围变更 | 实际服务方事件期间 | 实际批发关联承包范围 | 每参考流 | 服务方原生等价、覆盖事件资源矩阵来源 数量乘真实同基准份额/N，不费用换算或重复直接资源。 |
| cp_assets | ambient_wholesale | 完整周期共享资产 | 资产及全部用户历史登记 | asset_id; asset_dataset_scope; manufacture_coverage; maintenance; replacement_events; retirement; end_of_life; event_quantity; event_unit; event_source; job_driver; job_driver_unit; job_driver_basis; job_driver_source; observed_all_user_driver; observed_driver_unit; observed_driver_basis; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_basis; remaining_source; lifetime_all_user_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; driver_equivalence; equivalence_unit; equivalence_source; all_consumers; all_periods; idle_and_open_use; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; N | 追溯匹配制造实际维护更换退役寿命终结、全部用户历史与有来源剩余驱动原生等价不确定性敏感性更新。实际工作寿命比再除N，与承包承运唯一责任。 | 原生资产等价及相容工作寿命驱动 | 每资产事件及期间更新 | 全部用户已观测寿命与有据剩余寿命终结 | 实际共享建筑设备随货支撑使用者 | 每参考流 | 完整数据集边界、真实历史剩余来源单位不确定性 完整寿命负担份额，非每用新支撑；记录实际空闲未完成使用者。 |
| cp_freight | ambient_wholesale | 真实承运货载工作量 | 载荷路线秤票边界记录 | segment_id; mode; carrier; origin; destination; route_scope; actual_kit_count; count_unit; count_source; cargo_mass_quantity; cargo_mass_unit; cargo_mass_reporting_extent; cargo_mass_count_multiplier; multiplier_unit; multiplier_source; kit_BOM_configuration; inherited_packing_mass; inherited_packing_mass_unit; inherited_packing_mass_basis; inherited_packing_mass_method; inherited_packing_mass_source; added_packing_mass; added_packing_mass_unit; added_packing_mass_basis; added_packing_mass_method; added_packing_mass_source; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_source; noncargo_vehicle_container_tare; tare_unit; tare_source; payload_scope_source; whole_pack_payload; payload_unit; payload_source; payload_conversion; payload_conversion_unit; payload_conversion_source; distance; distance_unit; distance_source; distance_conversion; distance_conversion_unit; distance_conversion_source; actual_transport_work; work_unit; work_source; documented_service_share; share_numerator; share_denominator; share_driver_unit; share_driver_basis; share_driver_source; empty_return_coverage; carrier_fuel_assets; warehouse_overlap; N | 采用套装随货包装支撑货载质量，排除车辆集装箱非货物秤票皮重。EACH相容质量乘实际数一次，或TOTAL质量保持总量。换算载荷路程为真实工作量，应用有据原生服务份额再除N一次；承运空返燃料资产互斥。 | 原生货载质量计数距离工作量及换算t*km | 逐实际运输段及相关返程 | 实际纳入路线区间 | 真实承运路线，排除仓库重叠 | 每参考流 | 秤票包装单BOM边界、路线换算原生份额及承运数据集范围 声明EACH/TOTAL范围、真实货载支撑皮重纳入；运输工作量与份额/N分开，避免载荷重复乘数。 |
| cp_outlets | ambient_wholesale | 真实接收转移 | 接收整流内含量计量 | transfer_id; receiver; receiver_classification; treatment_boundary; treatment_owner; source_frame_kit_ids; parent_part_ids; kit_BOM_state; stream_identity; physical_state; native_quantity; quantity_unit; quantity_basis; quantity_method; quantity_source; reporting_extent; count_multiplier; multiplier_unit; multiplier_source; transfer_time; whole_kit_exclusion; separate_part_exclusion; separate_pack_exclusion; retained_content_identity; retained_content_quantity; retained_content_unit; retained_content_state; retained_content_basis; retained_content_method; retained_content_source; retained_content_sample_time; retained_content_fate; component_identity; component_quantity; component_unit; component_basis; component_method; component_source; component_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; usable_transfer_record; waste_acceptance_record; source_stock_pairing; no_double_credit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 接收门槛计量真实整套独立件包装混合清理液体；保留原车架BOM谱系及EACH/TOTAL范围。轮胎润滑组分水分液体原生内含审计含方法来源时刻及相容密度换算。净转移/N一次，内含不另加废物释放。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 原生整流Item(s)、kg、m3及独立组分内含单位 | 逐外部接收转移及事故 | 真实转移区间；保留期末库存独立 | 真实批发出口及接收处理边界 | 每参考流 | 真实接收验收净量皮重范围状态与原生内含去向责任证据 物理视图互斥，真实可用退回废物分类；无自动替代抵扣。 |
| cp_environment | ambient_wholesale | 条件性真实直接释放 | 物种介质测量或有据系数 | event_id; species_identity; particle_basis; receiving_medium; direct_measurement; measurement_unit; measurement_method; measurement_source; sample_time; activity; activity_unit; activity_source; factor; factor_unit; factor_basis; factor_source; factor_scope_complete; composition; composition_unit; composition_basis; composition_source; release_fraction; fate_basis; fate_source; whole_stream_quantity; whole_stream_unit; whole_stream_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; retained_captured_quantity; retained_captured_unit; retained_captured_basis; retained_captured_source; contained_transfer_exclusion; inherited_content_provenance; stock_unknowns; provider_overlap; N | 识别真实物种颗粒介质、实际测量或适用活动系数及必要组成去向原生换算；排除捕集收集保留内含，完整系数不可再乘。 | kg物种及真实原生活动系数组成温度单位 | 逐真实测量或有据释放 | 实际事件取样期间代表性 | 批发外真实接收介质 | 每参考流 | 测量分析或系数适用来源、真实活动独立介质去向 实际实测物种/N或相容活动系数乘必要组成去向/N，无胎耗骑行库存差默认。 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | accepted_service | N为声明门槛下有真实买方验收的唯一商业货批ID数，不是套装车架箱部件计数。 | cp_bicycle货批验收时刻状态记录 | N与1 Item(s)服务参考 |  |
| kit_and_pack_mass | 商品非交换 | whole_pack_mass=actual_net_partial_kit_mass+actual_included_pack_tare，要求同状态配置方法。机身车轮脚踏附件内含分解套装不可重复相加，不是额外当前服务输入。 | cp_bicycle BOM配置原生质量计数范围来源 | 实际部分套装包装审计，无假设组装整车质量 |  |
| source_gate_demand | 服务外商品 | commodity_source_gate_demand=assigned_source_gate_quantity；用有据直接映射，或assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，含全部竞争相容出口记录单位等价。包含有据状态变化份额，在服务外核对真实损失责任已有覆盖一次。  记录assignment_scope_ids、quantity_basis=raw_target_cohort或per_reference、same_target_scope_N及来源。原门槛库存和实际服务外阶段损失集成在其实际实体范围保留原始量一次。仅在与1 Item(s)服务组合时才派生q_per_reference=raw_assigned_to_that_same_scope/正数same_target_scope_N。已按每参考流记录的量不再除；单货批原始范围N=1，N=0无归一结果。不得用派生归一视图闭合原始群组库存或集成实际缺阶段损失。 | cp_bicycle来源门槛数量全部原生出口驱动覆盖 | 量化原完整装箱部分套装门槛需求损失接口 |  |
| supply_stocks | 实际新增供给 | S=opening+net_receipts-closing；选择总S/N输入加真实同源usable_outward_return/N输出，或仅耗用(S-usable_outward_return)/N且省配对退回交换。 | cp_supplies原生库存范围数量换算配对 | 互斥供给真实外送退回约定 |  |
| utility_allocation | 公用工程 | 匹配原生因果基准下service_driver_share=service_driver/all_user_driver；相容换算后allocated_utility=native_interval_quantity*service_driver_share/N。 | cp_utilities原生区间表计驱动单位来源 | 每服务实际实测或分配公用工程 |  |
| provider_allocation | provider_packages | 真实物理等价及互斥资源覆盖后provider_quantity=actual_native_package_quantity*documented_share/N；同单位基准documented_share=share_numerator/share_denominator。 | cp_provider原生物理等价份额驱动责任 | 每货批互斥真实承包服务 |  |
| full_asset_share | shared_assets | asset_equivalent=job_driver/lifetime_all_user_driver/N；lifetime_all_user_driver=compatible_observed_all_user_driver+compatible_sourced_remaining_driver。实际完整周期含维护更换退役寿命终结及不确定性敏感性更新。 | cp_assets匹配生命周期工作寿命原生单位历史剩余来源 | 每服务全部消费者完整寿命资产负担 |  |
| cargo_transport_work | freight | EACH时cargo_total=actual_each_compatible_cargo_mass*actual_compatible_count；TOTAL时cargo_total=actual_total_compatible_cargo_mass，不乘件数。actual_transport_work=cargo_total_tonnes*actual_distance_km，或有据等价承运原生工作量；freight_quantity=actual_transport_work*documented_service_share/N。排除车辆集装箱非货物皮重；真实随货包装支撑仍为货载。 | cp_freight原生范围货载计数路程换算份额覆盖 | 每服务真实运输工作量，范围计数份额N各一次 |  |
| outlet_transfers | 真实出口 | outlet_quantity=actual_compatible_net_quantity/N；EACH计量仅乘一次相容件数，TOTAL保持总量。整流含保留内含；独立组分部件包装液体物种视图互斥。 | cp_outlets原生整流净量皮重范围内含去向接收 | 实际相容接收转移量，无重复内含 |  |
| actual_release | direct_species | release_quantity=actual_measured_species_quantity/N或compatible_activity*applicable_factor*required_composition*required_release_fraction/N。完整物种释放系数已含组成去向时省去重复因子。 | cp_environment原生测量活动系数组成去向介质来源 | 实际物种介质量，无原厂润滑物轮胎默认 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| native_operands | 全部实际记录 | 保留数量单位状态范围基准方法来源取样时刻、密度温度单位来源及换算单位来源。库存状态内含未知是未定，非假设零。 | 节点专属CP原始记录与可追溯换算 |
| representative_gate | 实际配置 | 厂家装箱部分组装完整BOM须匹配原始基线；不采用可骑行散件替代、通用胎压扭矩质量或消费者最终组装系数。 | 实际厂家放行BOM车架型号序列状态 |
| complete_chain | 关联商品 | 实际收货部分状态门槛制造原厂包装内含及原生分配需求真实损失覆盖在服务外一次后方可宣称完整链。 | cp_bicycle来源全部出口责任系统读回 |
| final_actual_exchange | 每展开行 | 最终数据交换前核实实际SKU服务资产出口物种及支持属性单位；语义候选不是绑定TIDAS交换。 | 实际详情支持及前景数量证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_water | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_supplies | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`hygiene_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_outer_packing | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_outer_packing`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_packages | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_packages`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_count_returns | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_count_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| unused_mass_returns | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_mass_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| whole_kit_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`whole_kit_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`whole_kit_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| part_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`part_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| packaging_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`packaging_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| hygiene_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`hygiene_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| contained_liquid | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`contained_liquid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

记录实际仓库照明搬运用电边界及因果份额。不规定自行车电机、电池充电、商品演示、组装交车检查或试骑能耗；排除承包或承运已承担电力。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际常温仓库与电动搬运用电
- 流属性/单位：Energy / kWh
- 数量规则：native_interval_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有计量期间、全部使用者因果原生驱动及实际交付电力来源属性支持；不提供仓库功率或单车能耗默认。

#### cleaning_water

仅在实际使用时纳入仓库表面卫生公用水，不代表自行车洗涤、轮胎处理、原厂液体或规定维护。明确原生来源表计处理及承包覆盖。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库表面卫生用水
- 流属性/单位：Volume / m3
- 数量规则：actual_utility_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有实际表计或有据密度换算、清洁区间和共享分配；不由套数推洗车水量。

#### hygiene_supplies

依据真实配方和独立库存展开实际清洁剂擦拭物吸附物过滤物。原厂轮胎橡胶润滑物涂层及消费者组装工具属于商品，并非当前用品。不规定润滑剂量、干燥剂或溶剂。

本卡为独立身份分支`hygiene_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库卫生和事故围控物料
- 流属性/单位：Mass / kg
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：设定数量范围前需有实际SKU配方、单件或总量原生数量、库存退回配对、组成及换算证据。

#### added_outer_packing

仅纳入实际跨入服务边界的新运输外防护或封口物。原厂箱、车轮隔件、工具附件袋和套装支撑属于原商品；循环批发支撑属于完整寿命资产。不假设开包重包装。

- 身份采集要求：实际新增外部运输防护
- 流属性/单位：Count / Item(s)
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有真实新增外防护单位材质单件质量及数量范围标识；不假设一车一箱或固定包装系数。

#### provider_packages

采用真实物理原生等价和资源资产运输处理覆盖，不采用货币。外包组装调整交车检查维修试骑仍为实际路线扩展，不能成为隐形服务。

- 身份采集要求：实际物理边界互斥的仓储承包包
- 流属性/单位：Count / Item(s)
- 数量规则：actual_native_package_quantity*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需有实际服务方单位、等价物理事件、原生份额基准及互斥覆盖；不固定通用物流包或价格因子。

#### shared_assets

将真实建筑货架电动搬运设备循环托盘笼秤监测器的完整制造维护更换退役寿命终结分配全部用户期间。原厂部件包装不是每服务新购资产。

- 身份采集要求：共享仓储搬运资产的完整寿命服务
- 流属性/单位：Count / Item(s)
- 数量规则：job_driver/lifetime_all_user_driver/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：需有匹配完整资产数据集、工作与寿命驱动原生单位、全部用户观测用量及有来源剩余服务和敏感性；不虚构寿命或每周转资产数。

#### freight

仅纳入实际分配承运段。货载为实际部分组装套装、随运附件、原厂新增包装及实际随货支撑；车辆集装箱非货物皮重单列。EACH质量仅乘一次相容实际数量，TOTAL总质量不再乘套数。燃料资产空返明确唯一责任。

- 身份采集要求：装箱部分组装自行车套装的实际运输
- 流属性/单位：Freight transport / t*km
- 数量规则：actual_transport_work*documented_service_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需有实际货载毛净皮重票据边界、套数与EACH/TOTAL质量范围、路程换算份额空返覆盖；不默认可骑行整车质量载荷或路程。

#### unused_count_returns

仅纳入同一独立新供给库存实际外送的可用未用物料单位；保留回收期末库存不是外送。退回供应商的原箱套装为商品台账事件。若同源配对退回已从仅耗用输入扣除，则省去此交换。

- 身份采集要求：实际配对未用新增外包装外送退回
- 流属性/单位：Count / Item(s)
- 数量规则：actual_matched_unused_outward_units/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有原供给单位状态及实际外送接收配对；原厂箱、可用自行车退回或循环托盘不自动产生抵扣。

#### unused_mass_returns

同一独立负担库存实际外送的可用未用仓库物料，记录原身份净质量。采用总输入加此输出，或仅耗用输入且省输出，不作双重扣减或默认避免生产抵扣。

- 身份采集要求：实际配对未用卫生用品外送退回
- 流属性/单位：Mass / kg
- 数量规则：actual_matched_unused_outward_mass/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有实际物料状态接收方及同源库存数量单位密度配对；自行车原含润滑物不是当前供给退回。

#### whole_kit_waste

仅含接收方真实接收的实际原供给部分配置整套废弃物，按实际包含部件附件包装及保留润滑物或轮胎内含物。预期拆分部件本身不是损失；损伤短缺商业拒收退回本身不是实际废弃。

- 身份采集要求：实际废弃的整套部分组装自行车流
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有原车架套装身份、整流边界原生质量状态、所含附件包装内含物及接收处理证据；不假设整套废物率。

#### part_waste

记录实际独立转移的损伤、事故脱离或独立接收部件，关联原套装车架BOM。不规定日常拆解更换维修。排除整套废物中已含部件轮胎润滑物；可用独立部件不自动为废物。

- 身份采集要求：实际独立转移的自行车部件流
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有部件身份材质原件谱系原生数量单位状态及实际接收分类去向；预期件缺失或碎片计数不能变成整辆原车。

#### packaging_waste

实际独立转移的箱膜隔件防护物，区分原厂包装、新增外物料和保留循环支撑。整套部件或混合卫生流已含物理材料不再计入此卡。

本卡为独立身份分支`packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际独立包装废物
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际分离材质净质量状态、污染或保留组分、接收方及原包装责任；原箱损伤不等于假设新购箱。

#### hygiene_waste

实际收集的已用擦拭物吸附物过滤物及保留事故物料液体，按整流计量。购入干物料、保留轮胎润滑物组分和使用后湿整流是不同不可重复相加视图，不是独立重复废物或排放。

- 身份采集要求：实际使用后的仓库卫生或围控固体
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际已用湿净量、保留液固组分原生数量单位基准方法来源取样时刻及接收证据，不能仅以物料收货量支持。

#### contained_liquid

送至有据接收处理边界的实际仓库表面卫生或事故收集液，不是洗车或自动直接排水。保留润滑物固体组成需真实相容来源去向证据。

- 身份采集要求：实际收集的仓库卫生液体
- 流属性/单位：Volume / m3
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际收集体积或相容质量密度温度换算，以及接收负荷组成；取水、轮胎压力变化或可见湿痕本身不能确定是否排液及其数量；须有真实收集接收证据，不默认排液或零排液。

#### direct_species

仅展开有独立数量证据的物种颗粒和真实接收介质。原厂润滑物轮胎涂层、SDS、可见损伤或库存压力差不确立排放。捕集残物收集清理仍是转移，不假设消费者胎耗骑行维护释放。

- 身份采集要求：实际已识别物种或颗粒的直接释放
- 流属性/单位：Mass / kg
- 数量规则：actual_measured_species_quantity/N OR actual_activity*applicable_factor*required_composition*required_release_fraction/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：需有实际物种介质及测量，或相容活动系数与必要组成去向来源原生换算；完整释放系数不可再乘重复组成去向。

## 9. 验证规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| reference_check | 核对输出参考名链接Count量、真实唯一N及实际买方门槛，包含部分套装BOM状态车架型号尺寸序列计数净量皮重期间限定。 |  |
| original_gate_check | 需实际厂家完整装箱部分门槛及全部真实缺失商品阶段在服务外一次；原生直接分配或完整相容竞争出口含期末其他可用退回损失及唯一损失责任覆盖。无可骑行散件代理或未知损失等于零。  记录assignment_scope_ids、quantity_basis=raw_target_cohort或per_reference、same_target_scope_N及来源。原门槛库存和实际服务外阶段损失集成在其实际实体范围保留原始量一次。仅在与1 Item(s)服务组合时才派生q_per_reference=raw_assigned_to_that_same_scope/正数same_target_scope_N。已按每参考流记录的量不再除；单货批原始范围N=1，N=0无归一结果。不得用派生归一视图闭合原始群组库存或集成实际缺阶段损失。 |  |
| physical_scope_check | 无隐含最终组装交车检查调整骑行维修洗涤重包装电机电池润滑操作，外包同样；真实新增操作需审查扩展。 |  |
| extent_content_check | 核对EACH/TOTAL单位计数相容、货载与非货物皮重、真实整套部件包装内含清理接收物种互斥。未知短缺损伤压力库存差不是真实损失废弃释放。 |  |
| resource_owner_check | 核对原生同基准全部用户份额及除N一次、完整寿命全部用户历史有来源剩余寿命终结单位不确定性、承包承运处理互斥和总供给加退回或净耗用省退回。 |  |
| actual_identity_check | 最终交换需真实原生数量证据、核实具体身份及属性单位支持；身份经验范围未定为候选缺口，非可发布。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际验收装箱部分组装自行车套装商业自营批发货批的附加服务前景。 |
| downstream_use | 与匹配原厂家完整装箱部分套装商品系统及量化互斥分配需求损失在服务外仅组合一次。 |
| allowed_use | 真实声明非机动双轮供给包装部分套装常温批发，含可追溯BOM状态资源接收。 |
| excluded_use | 独立完整自行车足迹；可骑行消费者组装交车检查试骑使用阶段、机动电动路线、未审工艺或收费代理。 |
| required_metadata | 实际原供应商部分门槛BOM车架型号序列尺寸车轮脚踏附件谱系净量皮重范围计数内含，验收货批时刻场址期间，原生来源分配损失覆盖，因果资源寿命承包承运处理责任。 |
| required_quality_disclosure | 真实身份支持数量范围未定、同状态换算单件总量皮重证据、来源竞争出口对账、内含未知、实测分配公用工程及完整寿命剩余不确定性。 |
| update_trigger | 真实收货配置BOM门槛、批发操作、来源分配损失覆盖、服务资产承运接收物种变化或修订核实身份来源。 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| trek-delivery | literature | Trek Bicycle客户服务，Shipping & pickup / Direct to home shipping及零售商组装。 https://www.trekbikes.com/us/en_US/customer_service/ | 仅定性支持厂家装箱部分组装交付门槛与后续专业或消费者最终组装区别。真实非机动配置需另证；不采用价格时间退货政策工具步骤胎压扭矩能耗或默认批发因子。 |
