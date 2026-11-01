---
pcr_id: pcr.own-account-original-closed-aqueous-shampoo-wholesale
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原厂成品原封瓶装水性非药用洗发水自营批发服务

## 1. 范围与适用性

适用于批发商自有购入转售实际原厂成品、原封瓶装水性非药用洗发水，面向企业买方，在普通常温仓库存放并电动搬运收发。排除护发素、沐浴露、药用去屑用品、干粉或气雾洗发用品及补充装。不开列批发配制稀释开瓶补装重装泡沫测试、沙龙洗发或消费者使用。实际额外作业或受损商品须明确路线复核，不能假设零作业。厂家成分证据仅支持定性配方问题；实际水、表面活性剂、调理剂、香料、增稠及防腐成分不证明百分比密度功效或排放。厂家当前正文部分仍为模板；索引产品瓶装背景另列证据，不提供默认容量再生比例回收抵扣或批发寿命。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-original-closed-aqueous-shampoo-wholesale |
| classification_refs | CPC 3.0:61075；较窄范围；所供商品为3532内的35323 |
| covered_products | 实际成品原封瓶装水性非药用洗发水批发服务 |
| excluded_products | 护发素沐浴露药用去屑干粉气雾及补充装；收费代理零售配制灌装和消费者使用服务 |
| representative_product | 实际可追踪SKU变体批号配方原瓶封口，实际包含时才有泵，并有液体净量包装顶空状态 |
| production_route | 供方放行配制灌装原瓶封闭商品 -> 批发收货常温存放电动搬运 -> 真实自有转售企业最终接收 |
| market_state | 已完成的商业服务，洗发水商品保留为独立关联商品系统 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 最终接收的原封瓶装水性非药用洗发水自营企业批次 |
| How much | 1 Item(s) |
| How well | 撤销后有真实所有权转售及企业买方门槛凭据，附SKU配方封口包装液体状态及来源清单关联 |
| How long or cycle | 实际收货存放发出接收时点及库存计量资产报告期间，保留时区来源，无统一时长 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的原封瓶装水性非药用洗发水自营批发批次 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; SKU; variant; batch_id; formula_version; aqueous_nonmedicated_evidence; original_closed_state; bottle_count; net_shampoo_mass; net_shampoo_volume; density; density_temperature_unit; bottle_closure_label_pump_tare; headspace_quantity; source_gate_state; receiving_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 仅计撤销后真实自有转售企业唯一最终接收；归一化须N>0，不是瓶数或质量。 |
| liquid_mass | cp_shampoo; cp_outlets | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 匹配实际液体配方温度密度及原生体积单位；区分瓶封口实际泵顶空，不以泡沫或容量替代。 |
| water_composition | cp_shampoo; cp_outlets | Mass | kg | 明确水的湿质量分数与相容干基比例，体积组成及含其他挥发物的干燥失重不是水质量分数。 |
| packed_transport | freight | Mass * Length | t*km | 实际货物涵盖随货产品包装支承；原生EACH乘实际件数一次或TOTAL不变，仅扣非货物皮重，记录份额放唯一装载区段求和内再除一次N。 |
| native_component_fate | cp_outlets; cp_environment | Mass | kg | 各保留产品水流体组成物种数量具有独立单位基准方法状态来源取样时点，仅换算相容测量，整股组成不重复相加。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际供方已完成配制制造、原瓶封闭且带继承包装的水性非药用洗发水，处于声明的供方放行门槛。 |
| starting_condition_role | 服务附加部分的起始事实，不是用于删除缺失商品阶段的生产截断。 |
| product_classification_scope | CPC 3.0:61075；所供商品为3532内的35323；较窄范围为原封瓶装水性非药用洗发水 |
| recursive_input_rule | 购入转售洗发水及商品退回为非交换商品通量和库存，不递归为耗用服务供水、表面活性剂、制瓶或相同批发服务。 |
| upstream_dataset_requirement | 关联与真实供方放行状态相容的完整清单，覆盖原材料、配制制造、灌装封口及原瓶包装；仅原水或表面活性剂不完整。在完整链使用前，于服务外量化实际分配的原始出厂需求及互斥关联损失调整，保留原生单位状态来源责任与基线阶段损失覆盖，且计一次。 |
| disclosure | 披露真实配方SKU批号、原封及包装顶空、湿净质量与实际液体体积和密度温度、日期状态、所有权及买方接收、来源关联、全部竞争出口和不完整证据。 |

### 边界规则

| rule_id | Rule |
| --- | --- |
| commodity_boundary | 所有交易洗发水及原容器包装内含上游负担，包括损失产品，均排除于服务交换。外部保留量化原始出厂需求损失关联一次；实际批发搬运清理及限定接收处理计一次。 |
| merchant_route | 包括实际收货、不打开的封口包装状态核查、普通常温存放、电动搬运和最终企业交接。不含批发混合稀释补装重装开瓶泡沫测试、沙龙消费者使用或推定气候介入；真实额外作业须经路线扩展复核。 |
| period_reject | 按批次或群组记录实际计量库存期间与时区。漏液、过期、受损、拒收、未完成和撤销批次保留资源归属及实际退回期末接收出口，符合条件前不计最终接收。库存缺口不推定损失，未知不置零。 |
| outlet_boundary | 整瓶保留产品、独立包装残留、吸附清理物、单收洗发水、受控卫生液体和直接物种互斥。去向须有真实接收方或环境证据，不自动排空回收给处理抵扣或将成分转排放。 |
| shared_coverage | 按事件期间声明直接作业、服务商、承运方、接收方及全寿命资产责任，排除公用工程运输处理资产重复覆盖。继承配方及原封包装不是批发作业模块。 |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| bottled_shampoo_wholesale | 原封瓶装洗发水自营批发 | required | 实际自有转售企业批次 | foreground | accepted_service |

服务按批次群组及实际仓储期间记录，关联收货常温存放电动搬运实际卫生清理拒收交接事件。不把制造得率分配给服务。按全部真实使用者对期初未完成期末库存及事故换批作业记录一次，不默认每瓶清洁或使拒收批次资源消失。

### 过程：原封瓶装洗发水自营批发 (`bottled_shampoo_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：actual_utility_quantity*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需实际计量区间kWh、全部使用者分配驱动及搬运和闲置覆盖，不采用每瓶或每升基准。

###### 实际液态处理自来水供给 (`hygiene_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：sum(exclusive_per_record(raw: converted_water_m3*documented_share; already_attributed: attributed_water_m3))/positive_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需实际卫生用水计量或供方体积、区间、共享和去向记录，不能使用洗发水瓶装体积。

###### 实际独立记录的合成洗涤剂投入 (`service_consumables_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：总供应S/N并单列配对退回，或(S-usable_outward_return)/N并省去配对退回
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际材料身份及组成、期初收发期末库存、件数质量或密度基准和真实未耗退回，不设默认剂量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的原封瓶装水性非药用洗发水自营批发批次 (`accepted_service`)

一个已完成的自有购入转售、经企业买方最终接收且扣除撤销的原厂成品原封洗发水批次，带实际SKU批号、配方、瓶封口及实际泵、液体和包装限定信息。计数衡量已完成服务，不是一瓶、kg、升或货币毛利。

- 选定流：已完成的原封瓶装水性非药用洗发水自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_shampoo`

范围证据需求：需实际唯一最终接收、批发商所有权及转售证据、企业买方和门槛凭据撤销记录；以实际瓶数、湿质量、液体体积及密度温度和包装顶空状态限定服务。

##### 废物流

###### 废弃装有水性洗发水的闭口瓶整件 (`whole_bottle_waste_atomic_case`)

仅在实际独立记录确认“废弃装有水性洗发水的闭口瓶整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_bottle_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃装有水性洗发水的闭口瓶整件
- 流属性/单位：Mass / kg
- 数量规则：实际整瓶接收交接质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需原瓶标识、实测整瓶交接质量及保留内容物封口状态、处置决定和接收处理覆盖，不从过期推定通用丢弃比例。

###### 实际单独收集的纸类包装废物 (`separate_pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装物流质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际分离包装材质、保留洗发水自身单位及取样证据、交接质量和接收去向；标称空瓶皮重不足以表示受污废物。


###### 实际单独收集的金属包装废物 (`separate_pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装物流质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际分离包装材质、保留洗发水自身单位及取样证据、交接质量和接收去向；标称空瓶皮重不足以表示受污废物。


###### 实际单独收集的塑料包装废物 (`separate_pack_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装物流质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际分离包装材质、保留洗发水自身单位及取样证据、交接质量和接收去向；标称空瓶皮重不足以表示受污废物。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule |
| --- | --- |
| physical_attribution | 可追踪事件直接归批次；否则用有记录的物理搬运、占用空间时间或其他因果原生驱动覆盖全部使用者群组期间。无实际等价证据不按瓶数、毛利或液体质量分配。 |
| source_gate_assignment | 服务外优先用真实来源至目标的直接追踪。否则仅在正值、完整、可比的全部末端驱动下用assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，包含期末、退回、其他有用出口和真实损失，每项有数量单位基准方法状态来源关联责任。commodity_source_gate_demand=assigned_source_gate_quantity采用原始放行状态，并涵盖有证据的普通状态变化份额；最终出货质量加废弃量不能替代。原生记录基线新增数量、换算、缺阶段、损失责任和已有覆盖一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| supply_return_convention | S=opening+net_receipts-closing，包含留存回收。选择总供应输入S/N并单独记录实际配对可用未耗退回输出；或仅耗用输入(S-usable_outward_return)/N且省去该配对退回交换。只扣同范围匹配独立供应，不扣继承洗发水瓶或无关输入，也不二次抵扣。 |
| asset_lifetime | 各完整资产寿命按可比job_driver/lifetime_all_user_driver分配；寿命驱动由已观察全部使用量与有来源剩余服务组成，并披露不确定性敏感性更新。包含全部期间使用者及制造维护更换寿命终结，与服务商承运覆盖互斥。服务总量仅除一次N。 |
| freight_and_fates | 各唯一装载区段工作量在求和内部乘本记录documented_service_share，之后仅/N一次。载荷包括真实瓶封口泵顶空包装支承，不能仅用液体；EACH乘实际件数一次，TOTAL不再乘，仅扣非货物皮重。实际退回回收处置分类、接收运输处理各有一个责任方；整股混合物流的组成不可重复相加，不自动抵扣。 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_shampoo | bottled_shampoo_wholesale | 本过程实际输入、输出或解释性审计量 | 批发批次、瓶装状态、库存及原始出厂台账 | bottle_count; bottle_count_unit; bottle_count_basis; bottle_count_method; bottle_count_state; bottle_count_source; bottle_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; net_shampoo_mass; net_shampoo_mass_unit; net_shampoo_mass_basis; net_shampoo_mass_method; net_shampoo_mass_state; net_shampoo_mass_source; net_shampoo_mass_sample_time; net_shampoo_volume; net_shampoo_volume_unit; net_shampoo_volume_basis; net_shampoo_volume_method; net_shampoo_volume_state; net_shampoo_volume_source; net_shampoo_volume_sample_time; bottle_closure_label_pump_tare; bottle_closure_label_pump_tare_unit; bottle_closure_label_pump_tare_basis; bottle_closure_label_pump_tare_method; bottle_closure_label_pump_tare_state; bottle_closure_label_pump_tare_source; bottle_closure_label_pump_tare_sample_time; whole_bottle_cargo_mass; whole_bottle_cargo_mass_unit; whole_bottle_cargo_mass_basis; whole_bottle_cargo_mass_method; whole_bottle_cargo_mass_state; whole_bottle_cargo_mass_source; whole_bottle_cargo_mass_sample_time; headspace_quantity; headspace_quantity_unit; headspace_quantity_basis; headspace_quantity_method; headspace_quantity_state; headspace_quantity_source; headspace_quantity_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; water_mass_fraction; water_mass_fraction_unit; water_mass_fraction_basis; water_mass_fraction_method; water_mass_fraction_state; water_mass_fraction_source; water_mass_fraction_sample_time; dry_matter_mass; dry_matter_mass_unit; dry_matter_mass_basis; dry_matter_mass_method; dry_matter_mass_state; dry_matter_mass_source; dry_matter_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; actual_loss_quantity; actual_loss_quantity_unit; actual_loss_quantity_basis; actual_loss_quantity_method; actual_loss_quantity_state; actual_loss_quantity_source; actual_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; SKU; variant; batch_id; formula_version; formulation_record; aqueous_nonmedicated_evidence; original_closed_state; bottle_material; closure_type; pump_if_actual; headspace_composition_source; actual_fill_not_capacity; foam_exclusion; component_mass_or_volume_basis; water_wet_or_dry_basis; water_definition_source; LOD_other_volatiles_exclusion; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; target_exit_driver; sum_exit_drivers; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; source_gate_allocation_source; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; receiving_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; wet_mass; wet_mass_unit; wet_mass_basis; wet_mass_method; wet_mass_state; wet_mass_source; wet_mass_sample_time; w_wet; w_wet_unit; w_wet_basis; w_wet_method; w_wet_state; w_wet_source; w_wet_sample_time; w_dry; w_dry_unit; w_dry_basis; w_dry_method; w_dry_state; w_dry_source; w_dry_sample_time; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 追踪实际批发商购入转售所有权、企业买方、最终接收门槛及凭据与撤销记录；供货收货单本身不能证明所有权或已完成转售。核对实际SKU、变体、批号、配方、原封状态、瓶及实际瓶盖或泵。分别保留液体净质量、实际灌装液体量与标称容量或泡沫量、相匹配的体积与密度温度、皮重和顶空边界。成分排序不是百分比。原厂归属使用真实直接关联，或完整且可比的所有末端出口驱动，包括期末留存、退回、其他有用出口及有证据的损失；每项记录原生数量、单位、基准、方法、状态、来源、关联及责任方。保留原始出厂状态下的数量及有证据状态变化的份额，核查完整制造、灌装、封口和包装阶段及基线已覆盖损失。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 原生记录单位及有来源的相容换算；保留日期时区 | 每真实事件及计量库存区间 | 实际收发接收时点与跨期间归属，含未完成资源 | 实际本过程场址及有明确责任边界的交接，不合成全部过程 | 每参考流 | 原始凭据、方法校准、单位基准状态来源取样时点、互斥责任及不确定性；缺失不得置零 |
| cp_supplies | bottled_shampoo_wholesale | 本过程实际输入、输出或解释性审计量 | 实际服务耗材与新增外层防护台账 | composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; material_identity; supply_stock_scope; matched_return_ids; allocation_owner; unused_return_convention; inherited_product_exclusion; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按材料和事件称量或计数实际抹布、卫生用品、吸收材料、过滤用品和新增外层防护；不计入随商品继承的洗发水、瓶、盖、泵及原厂包装。保留原生EACH/TOTAL、换算、密度和取样证据。关联独立耗材库存和实际外送可用未耗退回；选择总供应输入并单列退回，或仅耗用输入并省去配对退回交换，不二次抵扣。仅分配有证据的服务份额。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 原生记录单位及有来源的相容换算；保留日期时区 | 每真实事件及计量库存区间 | 实际收发接收时点与跨期间归属，含未完成资源 | 实际本过程场址及有明确责任边界的交接，不合成全部过程 | 每参考流 | 原始凭据、方法校准、单位基准状态来源取样时点、互斥责任及不确定性；缺失不得置零 |
| cp_utilities | bottled_shampoo_wholesale | 本过程实际输入、输出或解释性审计量 | 电力搬运及实际场址供水计量记录 | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; interval_start; interval_end; time_zone; time_source; all_consumers; share_numerator; share_denominator; overlap_exclusion; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; utility_quantity_scope_raw_or_attributed; utility_quantity_scope_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取区间计量或核对供方凭据，并按实际搬运或空间时间驱动分配至全部使用者。区分批发卫生作业使用的供水与洗发水配方中的水。保留实际能源或供水身份、单位换算、计量区间和责任归属；排除已由服务商或承运方覆盖的公用工程。不因常温观察推定制冷或气候控制。  使用各区间记录实际有据份额。仅确属本目标群组的直接计量量可在范围证据支持下使用share=1；已归属量不得再次乘份额。记录utility_quantity_scope_raw_or_attributed及来源，并核对兼容的分子分母单位、完整全部使用者范围及份额基准。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 原生记录单位及有来源的相容换算；保留日期时区 | 每真实事件及计量库存区间 | 实际收发接收时点与跨期间归属，含未完成资源 | 实际本过程场址及有明确责任边界的交接，不合成全部过程 | 每参考流 | 原始凭据、方法校准、单位基准状态来源取样时点、互斥责任及不确定性；缺失不得置零 |
| cp_provider | bottled_shampoo_wholesale | 本过程实际输入、输出或解释性审计量 | 实际承包批发作业服务包 | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; share_driver_quantity; share_driver_quantity_unit; share_driver_quantity_basis; share_driver_quantity_method; share_driver_quantity_state; share_driver_quantity_source; share_driver_quantity_sample_time; provider_id; contract_id; included_operations; excluded_operations; asset_utility_transport_treatment_coverage; owner; allocation_evidence; period_id; time_zone; time_source; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time | 取得实际服务商的搬运或场址卫生工作说明、物理数量及单位和覆盖范围。供方配制灌装、消费者洗发及批发商开瓶补装均不属于本路线作业。将公用工程、资产、运输和废物处理覆盖与直接记录逐项核对一次；金额本身不构成物理等价量。 | 原生记录单位及有来源的相容换算；保留日期时区 | 每真实事件及计量库存区间 | 实际收发接收时点与跨期间归属，含未完成资源 | 实际本过程场址及有明确责任边界的交接，不合成全部过程 | 每参考流 | 原始凭据、方法校准、单位基准状态来源取样时点、互斥责任及不确定性；缺失不得置零 |
| cp_assets | bottled_shampoo_wholesale | 本过程实际输入、输出或解释性审计量 | 仓库、搬运与可重复使用支承物全寿命记录 | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; asset_type; manufacture; maintenance; replacement; end_of_life; all_consumers; all_periods; observed_boundary; remaining_life_evidence; uncertainty; sensitivity; update_trigger; provider_overlap; period_id; time_zone; time_source | 识别实际仓库、货架、电动搬运设备及可重复使用支承物，采集制造、维护、更换及寿命终结的完整范围。以可比单位将本项作业使用量除以已观察全部使用者的使用量与有证据的剩余服务量之和；保留等价换算、不确定性、敏感性和更新触发条件。涵盖全部使用者和期间，包括未完成或拒收批次，排除已建模的承运方或服务商资产覆盖。 | 原生记录单位及有来源的相容换算；保留日期时区 | 每真实事件及计量库存区间 | 实际收发接收时点与跨期间归属，含未完成资源 | 实际本过程场址及有明确责任边界的交接，不合成全部过程 | 每参考流 | 原始凭据、方法校准、单位基准状态来源取样时点、互斥责任及不确定性；缺失不得置零 |
| cp_freight | bottled_shampoo_wholesale | 本过程实际输入、输出或解释性审计量 | 唯一实际装载运输区段记录 | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; shampoo_mass; shampoo_mass_unit; shampoo_mass_basis; shampoo_mass_method; shampoo_mass_state; shampoo_mass_source; shampoo_mass_sample_time; bottle_cap_pump_label_mass; bottle_cap_pump_label_mass_unit; bottle_cap_pump_label_mass_basis; bottle_cap_pump_label_mass_method; bottle_cap_pump_label_mass_state; bottle_cap_pump_label_mass_source; bottle_cap_pump_label_mass_sample_time; headspace_contents_mass; headspace_contents_mass_unit; headspace_contents_mass_basis; headspace_contents_mass_method; headspace_contents_mass_state; headspace_contents_mass_source; headspace_contents_mass_sample_time; actual_carried_outer_pack_support_mass; actual_carried_outer_pack_support_mass_unit; actual_carried_outer_pack_support_mass_basis; actual_carried_outer_pack_support_mass_method; actual_carried_outer_pack_support_mass_state; actual_carried_outer_pack_support_mass_source; actual_carried_outer_pack_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; share_driver_quantity; share_driver_quantity_unit; share_driver_quantity_basis; share_driver_quantity_method; share_driver_quantity_state; share_driver_quantity_source; share_driver_quantity_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; documented_service_share; share_numerator; share_denominator; record_allocation_owner; empty_return_coverage; provider_overlap; N; time_zone; time_source; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time | 关联每一装载和运输区段至实测整包装载荷或有证据的可加货物组成。保留洗发水、瓶盖及实际泵、标签、实际顶空内容物、包装和随货支承物，即使其可重复使用；只扣除有证据的非货物车辆或容器皮重。记录原生质量为EACH还是TOTAL，仅对EACH乘一次实际可比件数。各唯一装载区段的份额放在运输工作量求和内部，再除一次N。保留距离换算、空返及承运或服务商覆盖。 | 原生记录单位及有来源的相容换算；保留日期时区 | 每真实事件及计量库存区间 | 实际收发接收时点与跨期间归属，含未完成资源 | 实际本过程场址及有明确责任边界的交接，不合成全部过程 | 每参考流 | 原始凭据、方法校准、单位基准状态来源取样时点、互斥责任及不确定性；缺失不得置零 |
| cp_outlets | bottled_shampoo_wholesale | 本过程实际输入、输出或解释性审计量 | 整瓶、残余物、回收材料与废物流互斥出口记录 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; retained_shampoo_quantity; retained_shampoo_quantity_unit; retained_shampoo_quantity_basis; retained_shampoo_quantity_method; retained_shampoo_quantity_state; retained_shampoo_quantity_source; retained_shampoo_quantity_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_water; retained_water_unit; retained_water_basis; retained_water_method; retained_water_state; retained_water_source; retained_water_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; original_bottle_ids; whole_bottle_exclusion; separate_pack_exclusion; absorbed_solids_exclusion; free_shampoo_exclusion; hygiene_liquid_exclusion; component_mass_or_volume_basis; water_wet_or_dry_basis; retained_content_fate; receiver_classification; receiver_id; transfer_id; treatment_owner; usable_return_supply_link; actual_export_not_closing_stock; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 记录实际完整拒收瓶、过期、漏液或溢漏状态和接收方。整瓶废物包含保留的产品、包装和顶空；独立包装残留、吸附清理固体、单独收集的洗发水及受控卫生液体必须有不同的实测交接和成员排除关系。组成部分、保留水分和流体各有自身单位、基准、方法、状态、来源及取样时点；它们是整股物流的解释性部分，不另加整股交换。回收外送不同于期末留存；可用未耗耗材退回须匹配独立供应记录，仅耗用口径下省去其交换。实际接收及处理只记录一次，不自动给回收或避免生产抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 原生记录单位及有来源的相容换算；保留日期时区 | 每真实事件及计量库存区间 | 实际收发接收时点与跨期间归属，含未完成资源 | 实际本过程场址及有明确责任边界的交接，不合成全部过程 | 每参考流 | 原始凭据、方法校准、单位基准状态来源取样时点、互斥责任及不确定性；缺失不得置零 |
| cp_environment | bottled_shampoo_wholesale | 本过程实际输入、输出或解释性审计量 | 实际物种及接收环境排放证据 | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; receiving_medium; factor_scope_complete; composition_mass_or_volume_basis; contained_transfer_exclusion; measurement_location; sampling_start; sampling_end; time_zone; time_source; release_owner | 先确定实际物种和接收环境，再选择基本流。采用实测排放，或适用活动量和系数，并仅加入该系数确需的组成与去向比例，各项均保留原生单位及来源。完整物种系数若已覆盖组成或释放比例，不再重复乘该比例。成分表、香味、泡沫、库存差额或洗发水VOC/COD标签既不能证明排放，也不能证明零排放。区分交给接收方的受控产品和卫生液体与有证据的直接排放，记录捕集或保留部分而不重复计算。 | 原生记录单位及有来源的相容换算；保留日期时区 | 每真实事件及计量库存区间 | 实际收发接收时点与跨期间归属，含未完成资源 | 实际本过程场址及有明确责任边界的交接，不合成全部过程 | 每参考流 | 原始凭据、方法校准、单位基准状态来源取样时点、互斥责任及不确定性；缺失不得置零 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_shampoo | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals。核对实际批发商所有权、企业买方和接收门槛凭据；仅在N>0时相除。未完成取消拒收或撤销资源保留至实际群组期间，不虚构已完成服务。 | 批发商买方身份；接收撤销标识；日期 | 最终唯一已完成服务分母N |  |
| liquid_and_pack_basis | cp_shampoo | 仅在实际液体体积、配方、温度和单位相容时，net_shampoo_mass=net_shampoo_volume*density。泡沫量或标称瓶容量不是液体灌装量；毛净换算须实际瓶封口标签泵皮重及独立有证据的顶空内容物，不默认其为零。质量与体积分数不可互换。 | 原生体积密度温度换算及包装记录 | 可比实际液体净质量及独立包装顶空状态 |  |
| water_and_dry_basis | cp_shampoo | 仅在需要且有证据时用dry_matter_mass=wet_mass*(1-w_wet)，其中w_wet为实际水/收到态湿质量分数，不是体积固含量或含其他挥发物的干燥失重。相容同一样品的干基水/非水比例，在实际百分数转比例后用w_wet=w_dry/(1+w_dry)换算。成分表不提供分数。水分变化不推定污染物或干产品损失。 | 实际水定义、原生湿干样品单位方法状态来源时点 | 限定水及非水质量视图，不虚构组成 |  |
| commodity_source | cp_shampoo | 使用有真实来源关联的direct_assignment_quantity，或以完整正值全部末端记录用assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。commodity_source_gate_demand=assigned_source_gate_quantity采用相容原始配制灌装封口包装状态，不用最终质量加废弃量。核对原始输入、期末退回其他有用出口真实损失、状态变化及来源互斥使用。服务外量化baseline_quantity、additional_stage_quantity及loss_adjustment_quantity，保留换算责任阶段损失覆盖一次。未知缺口阻断完整链就绪。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 直接关联或完整原生来源末端记录；基线新增损失记录 | 可审计关联原始商品需求及服务外唯一损失责任 |  |
| utilities | cp_utilities | 原生换算及完整全部使用者驱动核对后，utility_per_service=sum(actual_utility_quantity*documented_share)/N。计量服务供水不是洗发水配方水，不设消费者使用或气候控制默认。  使用各区间记录实际有据份额。仅确属本目标群组的直接计量量可在范围证据支持下使用share=1；已归属量不得再次乘份额。记录utility_quantity_scope_raw_or_attributed及来源，并核对兼容的分子分母单位、完整全部使用者范围及份额基准。 | 原生区间、公用工程数量换算、全部使用者份额 | 每服务实际归属kWh及m3 |  |
| supplies | cp_supplies | S=opening+net_receipts-closing，包含留存回收。gross_input=S/N并单列配对未耗外送输出，或consumed_input=(S-usable_outward_return)/N且省去配对退回交换。EACH乘实际件数一次，或用实测质量相容密度换算；无关库存不相抵，也不二次抵扣。 | 同范围期初收发期末回收退回；真实单位换算 | 实际耗用或总供应材料及互斥退回 |  |
| provider_package | cp_provider | 以物理等价及互斥公用工程资产运输处理覆盖计算actual_package_per_service=sum(actual_native_package_quantity*documented_share)/N，不用金额或瓶数替代。 | 实际合同作业、原生服务包及覆盖 | 每服务实际限定服务商份额 |  |
| asset_equivalents | cp_assets | 仅在原生单位及等价关系相容核对后用lifetime_all_user_driver=observed_all_user_driver+remaining_driver；full_asset_share=job_driver/lifetime_all_user_driver。应用于完整制造维护更换寿命终结，求和后仅/N一次。包含全部使用者期间及有来源剩余寿命不确定性敏感性更新。 | 资产事件及作业观察剩余寿命等价量单位来源 | 全寿命服务资产等价量 |  |
| freight_work | cp_freight | 货物质量为实际整包装TOTAL或相容EACH*actual_count一次，包含液体瓶封口实际泵顶空包装及随货支承；仅扣实际非货物车辆容器皮重。由原生记录换算t及km。freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N；各记录份额在SUM内且仅除一次N，空返接收及服务商覆盖互斥。 | 唯一装载区段原生整包质量件数距离换算及份额 | 每服务实际限定t*km |  |
| exclusive_outlets | cp_outlets | outlet_per_service=actual_compatible_native_transfer_quantity/N，并匹配接收分类。整瓶包含保留内容物；整瓶、独立包装、吸附固体、单收洗发水及卫生液体中的保留部分不可重复相加。各组成和保留水流体有独立原生单位基准方法状态来源取样时点。留存库存不是外送；仅耗用供应口径省去配对退回。接收运输处理一次，不自动抵扣。 | 实际交接原生数量换算、组成成员及接收方 | 接收责任明确的互斥实际产品废物出口 |  |
| species_release | cp_environment | release_mass=measured_species_mass，或相容activity*applicable_species_factor，并仅在该系数需要时使用composition和release_fraction。完整物种系数已覆盖这些比例时，不再重复乘。原生单位换算后仅/N一次，保留实际接收环境、捕集受控排除及责任。香味成分库存差泡沫不推定VOC-COD，也不置零。 | 实际物种环境、原生测量或有依据系数链 | 每服务实际互斥物种排放质量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_records | all | 使用真实SKU配方封口原生单位及相关测量状态取样时点来源，不设统一百分比密度容量或再生比例。 | 原始记录校准不确定性及范围 |
| complete_ownership | all | 保留全部期间群组来源资产运输接收使用者和排除；缺完整门槛损失去向证据阻断完整链就绪，不隐藏为零。 | 互斥审计及敏感性 |
| source_limits | palmolive_ingredients | 厂家当前成分正文为定性且其他位置部分模板化；索引瓶装背景另列，不使用医疗功效组成百分比消费者洗发密度VOC/COD或处置默认。 | 实际成分正文与索引背景及真实前景SKU证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_water | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`hygiene_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| service_consumables | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`service_consumables`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_protection | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_protection`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_operations | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_operations`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| full_life_assets | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`full_life_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_supply_return | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`unused_supply_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| recovered_material | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`recovered_material`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| whole_bottle_waste | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`whole_bottle_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`whole_bottle_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| separate_pack_waste | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`separate_pack_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| absorbed_cleanup_waste | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`absorbed_cleanup_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| free_collected_shampoo | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`free_collected_shampoo`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| contained_hygiene_liquid | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`contained_hygiene_liquid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species_release | bottled_shampoo_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species_release`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

仅包括实际电动搬运和可归属仓储需求；不包括制造、消费者洗发、测试或推定气候介入。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际批发搬运与仓储供电
- 流属性/单位：Energy / kWh
- 数量规则：actual_utility_quantity*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需实际计量区间kWh、全部使用者分配驱动及搬运和闲置覆盖，不采用每瓶或每升基准。

#### hygiene_water

仅在确有场址卫生供水时计入；配方水留在商品系统，不推定沙龙洗发或冲瓶。

本卡为独立身份分支`hygiene_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际批发卫生作业供水
- 流属性/单位：Volume / m3
- 数量规则：sum(exclusive_per_record(raw: converted_water_m3*documented_share; already_attributed: attributed_water_m3))/positive_N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需实际卫生用水计量或供方体积、区间、共享和去向记录，不能使用洗发水瓶装体积。

#### service_consumables

按组成和供应范围展开实际抹布、吸收材料、过滤用品或卫生用品；继承的洗发水成分不是该输入。

本卡为独立身份分支`service_consumables_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际批发卫生与事故清理耗材
- 流属性/单位：Mass / kg
- 数量规则：总供应S/N并单列配对退回，或(S-usable_outward_return)/N并省去配对退回
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际材料身份及组成、期初收发期末库存、件数质量或密度基准和真实未耗退回，不设默认剂量。

#### added_protection

仅计实际新增且不打开或重装原瓶的外层防护；继承瓶、封口及原厂包装仍归商品负担。

- 身份采集要求：批发商实际新增外层运输防护
- 流属性/单位：Mass / kg
- 数量规则：实际分配原生材料质量/N，遵循供应退回口径
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际材质、数量、原生单件或总质量、重复使用归属和供应退回证据，不从瓶装状态推定额外缠包。

#### provider_operations

仅有实际物理搬运或场址卫生服务时使用，并列明排除项和覆盖；不包括批发配制或灌装，按真实服务商展开。

- 身份采集要求：实际限定范围的承包批发作业服务包
- 流属性/单位：Count / Item(s)
- 数量规则：actual_native_package_quantity*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需服务商、物理服务包数量单位、范围及重复覆盖说明；合同价格或洗发水瓶数不能定义服务包。

#### full_life_assets

实际资产等价量涵盖全部使用者和期间的制造、维护、更换及寿命终结，不按每批新造托盘或货架。

- 身份采集要求：归属的全寿命仓储搬运与可重复使用支承服务
- 流属性/单位：Count / Item(s)
- 数量规则：sum_full_life_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需真实资产清单、作业使用量、已观察总使用及有来源的剩余量、可比驱动单位和完整寿命终结范围，并披露不确定性与敏感性。

#### freight

仅计自有服务边界内的实际商品及服务或废物交接运输；保留整包货物、实际顶空内容物和随货支承，与服务商及接收方运输互斥。

- 身份采集要求：包装洗发水及限定出口的实际唯一装载区段运输
- 流属性/单位：Mass * Length / t*km
- 数量规则：sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据需求：需唯一装载区段、实际包装质量、EACH/TOTAL范围、非货物皮重、实际件数、距离及每记录份额和空返覆盖，不能仅用液体净重作载荷。

#### unused_supply_return

仅在总供应口径下，计入实际外送且匹配独立供应记录的可用未耗服务耗材。仅耗用口径省去该交换。商品退回为非交换库存变动，继承瓶内容物不能抵扣无关服务用品。

- 身份采集要求：实际外送可用未耗独立服务耗材退回
- 流属性/单位：Mass / kg
- 数量规则：仅总供应口径下的实际配对未耗外送质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需同范围供应身份、实际退回质量、可用性、接收交接及非期末库存证据；仅耗用输入必须省去配对出口。

#### recovered_material

仅有证据的可用材料外送时使用，与含保留产品的整瓶及废物分别分类；记录接收方、组成、保留内容物和责任归属，不自动给回收或避免生产抵扣。

- 身份采集要求：实际独立回收可用服务或包装材料外送
- 流属性/单位：Mass / kg
- 数量规则：实际可用材料外送质量/N，排除其他出口成员
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需交接接收方、实际可用等级、质量、水分流体及互斥成员证据，收集本身不证明回收。

#### whole_bottle_waste

实际丢弃的封闭、受损或过期整瓶包含保留洗发水、瓶盖泵标签及实际顶空内容物，不把其组成产品或包装再次计作整股废物。商品内含损失在服务外以原始出厂关联调整计一次；实际服务处理计一次。

- 身份采集要求：交接接收方处理的实际拒收整瓶洗发水及保留内容物
- 流属性/单位：Mass / kg
- 数量规则：实际整瓶接收交接质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需原瓶标识、实测整瓶交接质量及保留内容物封口状态、处置决定和接收处理覆盖，不从过期推定通用丢弃比例。

#### separate_pack_waste

仅计实际独立分离的外包装或瓶部件，附着洗发水和液体在该股物流内记录；排除整瓶成员及另行计量的游离洗发水，不默认排空或回收作业。

本卡为独立身份分支`separate_pack_waste_paper_pack`; `separate_pack_waste_metal_pack`; `separate_pack_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际单独交接的含附着残留包装废物
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装物流质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际分离包装材质、保留洗发水自身单位及取样证据、交接质量和接收去向；标称空瓶皮重不足以表示受污废物。

#### absorbed_cleanup_waste

仅有实际混合清理固体时计入，包含基材及保留洗发水水分用品；组成视图作解释而不增加整股质量。排除单独收集液体、整瓶或包装成员。

- 身份采集要求：实际含洗发水及卫生液体的废吸收材料抹布或滤材
- 流属性/单位：Mass / kg
- 数量规则：实际混合清理固体接收质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需废材料质量、基材及保留产品流体原生单位基准方法取样时点、事故关联及接收方，不设固定吸收比例。

#### free_collected_shampoo

实际独立收集的液体产品，记录配方及混入状态；不自动视为纯水、COD、VOC或直接基本流排放，排除已在瓶、包装或清理固体内保留的部分。

- 身份采集要求：实际收集并以受控液体交接的漏出或溢出洗发水
- 流属性/单位：Mass / kg
- 数量规则：实际单独收集液体质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际收集质量或可比体积密度温度换算、来源批号、混入状态及接收处理，库存差额不充分。

#### contained_hygiene_liquid

仅计有实际水、洗发水、卫生用品及固体状态记录的卫生废液；不含消费者洗发水。受控交接按实际接收方分类，不是直接水或物种排放。

- 身份采集要求：实际交接接收方的受控批发卫生废液
- 流属性/单位：Mass / kg
- 数量规则：实际受控卫生废液接收质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际受控质量、独立组成及换算时取样密度证据、接收及处理范围，与游离产品和吸附固体互斥；不设默认废水系数。

#### direct_species_release

仅计服务边界内实测或有依据的物种排放。香味、成分存在、液体损失或泡沫不能提供物种身份、介质、释放比例或零值，不设默认VOC/COD或表面活性剂去向。

- 身份采集要求：实际释放至有证据接收环境的已识别物种
- 流属性/单位：Mass / kg
- 数量规则：实际可比物种释放质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：需物种环境、实测质量或原生活动系数组成去向的单位及适用性来源、捕集份额和互斥排放责任，证据缺失保留为缺口。

## 9. 验证规则

| rule_id | Rule |
| --- | --- |
| identity_and_N | 须有批发商所有权转售证据企业买方实际最终接收门槛凭据撤销；参考输出名称关联一致。仅N>0归一化；未完成拒收撤销资源仍归属群组。 |
| source_completeness | 核验完整配制制造灌装封口原瓶包装门槛，以直接或正值完整全部末端驱动分配原始需求，服务外原生换算阶段损失责任覆盖一次。未知来源损失不能通过完整链使用。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| measurement_state | 核对质量体积密度温度单位、液体非泡沫容量、皮重顶空及水湿干组成基准；含其他挥发物干燥失重不是水，标签组成不是排放。 |
| allocation_and_returns | 核对逐事件共享期间使用者及全寿命已观察加剩余资产、供应总量加配对输出或仅耗用并省去输出、唯一装载区段EACH/TOTAL货物份额在SUM内再除一次N，无服务商承运接收重叠。 |
| rejected_fate | 拒收漏液过期未知差异不是接收服务或自动废物物种零值。核验整瓶包装吸附物单收洗发水卫生液体直接物种的互斥成员、实际交接接收处理且无自动抵扣。 |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 每已完成接收批次的前景批发服务附加清单 |
| downstream_use | 关联一次至相容完整原始供方出厂洗发水商品需求及真实买方交接系统 |
| allowed_use | 有真实记录且解决最终数据包缺口的原封瓶装水性非药用洗发水路线 |
| excluded_use | 独立洗发水足迹消费者使用临床声明；开瓶补装配制药用干粉气雾沐浴露路线；将未知来源损失置零 |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; SKU; variant; batch_id; formula_version; aqueous_nonmedicated_evidence; original_closed_state; bottle_count; net_shampoo_mass; net_shampoo_volume; density; density_temperature_unit; bottle_closure_label_pump_tare; headspace_quantity; source_gate_state; receiving_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | 实际流身份范围、来源基线损失阶段覆盖、原生基准换算、全部末端及资产剩余寿命证据、重复覆盖去向不确定性 |
| update_trigger | 真实配方SKU封口包装作业来源门槛买方条件损失去向资产寿命服务商或换算证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| palmolive_ingredients | literature | https://www.palmolive.com.au/products-range/hair-care/active-nourishment-shampoo | 厂家当前实际成分正文：水表面活性剂调理香料增稠防腐；其他标题部分模板化。支持定性配方区别，不提供百分比密度排放。 |
| palmolive_indexed_bottle_context | literature | https://www.palmolive.com.au/products-range/hair-care/active-nourishment-shampoo?bvstate=pg%3A7%2Fct%3Ar | 官方索引产品瓶装背景，与未填充当前标题区分；不设容量再生百分比功效消费者使用默认。 |
