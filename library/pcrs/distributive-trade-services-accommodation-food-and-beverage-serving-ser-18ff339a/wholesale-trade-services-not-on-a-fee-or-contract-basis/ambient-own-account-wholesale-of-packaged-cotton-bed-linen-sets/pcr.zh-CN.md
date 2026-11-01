---
pcr_id: pcr.ambient-own-account-wholesale-of-packaged-cotton-bed-linen-sets
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 已包装棉床品套装的常温自营批发服务

## 1. 范围与适用性

本 PCR 覆盖制造者放行已包装棉床品套装买入并自营转售企业客户的常温仓库物理服务。接收为真实放行整理缝制包装套装门槛，完成为有记录买方验收及确切部件状态限定。棉指声明真实纤维组成，不假通用纯度净质量。

排除填充枕芯被芯床垫、种植轧棉纺纱织造染整裁剪缝制成套制造、消费者使用洗涤零售佣金代理主动调控及主动洗熨修补换装重组。真实事故缺件退回如实记录，真实新增作业须有界审查，不假为零。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.ambient-own-account-wholesale-of-packaged-cotton-bed-linen-sets |
| classification_refs | CPC3.0:61032；narrower：已包装棉床品套装常温自营服务 |
| covered_products | 已验收成品包装棉床品套装真实物理企业批发货批 |
| excluded_products | 上游布品成套制造其他家用纺织品消费者洗涤使用零售代理主动处理换装 |
| representative_product | 一个商业验收货批，具真实套装部件单尺寸纤维组成净质量水分皮重包装状态 |
| production_route | 放行包装套装接收 -> 常温库存搬运拣货 -> 发出 -> 真实企业验收及例外 |
| market_state | 物理贸易服务，不变成品包装套装保持非交换商品 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的已包装棉床品套装常温自营批发货批服务 |
| How much | 1 Item(s)，一个唯一验收商业货批；不固定套件千克面积或利润换算 |
| How well | 真实制造者品号部件完整尺寸纤维包装状态及买方约定质量，记录例外 |
| How long or cycle | 真实接收持存拣货发出退回验收期间、归属待机清洁截止及资产全寿命使用 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的已包装棉床品套装常温自营批发货批服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | manufacturer_released_sewn_packed_cotton_bedlinen; actual_manufacturer_SKU_set_id; actual_required_components_and_parent_child_links; actual_set_piece_counts_and_component_dimensions; fibre_and_nonfibre_composition_basis; net_textile_mass_moisture_and_primary_tare; actual_package_condition_and_completeness; actual_receipt_holding_dispatch_acceptance_periods; ambient_temperature_humidity_observation_basis; ownership_resale_business_buyer; actual_quality_and_return_disposition; actual_provider_transport_treatment_scope |

N>0 为有据冲销后的唯一验收服务数。缺件失败隔离跨期活动保留责任集合归属，即使当期无服务完成。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_service | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 参考输出为 1 Item(s)，一个商业货批服务，不是一套床品。 |
| set_piece_dimension | merchandise | Count and actual Length/Area | sets; pieces; actual dimensions | 记录真实父套装部件类型数量尺寸单位方法来源；不固定件每套，不用标称矩形面积替代真实成品部件质量。 |
| textile_mass_state | merchandise/loss | Mass | kg | 分开真实包装毛重一层皮重净布纤维非纤维组成水分基准单位方法来源采样状态时间。实测状态换算为替代视图，不重复投入损失；水分差额不是棉损失。 |
| native_support | all exchanges | actual native property | actual native unit | 真实材料服务资产单位换算须自身核实身份支持。不价格转次数、不籽棉皮棉转成套或替代通用能源。 |


## 5. 系统边界

清单为物理批发附加服务，不是独立完整床品足迹。真实制造者包装套装买方门槛决定质量，SFERRA 消费指南仅定性背景。下列库存分配计算为声明 PCR 方法，不称制造者护理定量因子。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 制造者放行棉床品套装已按实际供应完成裁剪缝制整理配套包装 |
| starting_condition_role | 非交换商品库存流经量，含原成品布品一层包装 |
| product_classification_scope | 61032制成纺织品271内较窄包装棉床品套装自营子集 |
| recursive_input_rule | 真实上游物理服务须完整不重叠门槛，不递归同次贸易或重复已含物流资产 |
| upstream_dataset_requirement | 服务外完整兼容已放行缝制整理包装套装商品基线；籽棉皮棉布料单独缺实际纺纱织造染整裁剪缝制配套包装。缺失相关阶段各一次补齐。真实资源服务接收数据集须完整原生范围 |
| disclosure | 全部限定；套件尺寸纤维净量水分皮重库存期间证据；真实原门槛归属需求状态损失换算其他出口覆盖责任集成；完整资源资产服务承运接收 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | 全部商品布品一层包装制造含损失商品均排除服务交换。附加服务外须兼容已放行缝制整理包装套装基线，原门槛归属需求状态变化损失其他出口已有覆盖责任独立定量，全链完整前各一次集成。真实损失搬运接收处理仍属服务各一次。 |  |
| boundary_sets | set/component stock | 声明真实制造者部件单类型（如实际供应的床单枕套）尺寸纤维附件组成。选定商品层级一次计数，不整套加内含件，不套件等参考服务。缺件套装可留可用部件，无真实处置证据不作整套损失。 |  |
| boundary_care | ambient unchanged merchandise | SFERRA 消费护理文字仅支持真实标签水分光通风条件问题，不要求批发洗涤熨烫冻结拆换原厂包装，不引入库房数字制度洗剂用量产品寿命。 | sferra-care-public |
| boundary_extra | actual operations | 选定路线为常温电动搬运库存，不主动布品干燥湿度处理燃烧修补缝制重组换装。真实新增作业燃料工质须明确有界路线审查完整交换，不省略记零。承运调控重叠列实际承运范围。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| packaged_bedlinen_trade | 已包装棉床品套装常温库存与自营批发 | required | 真实放行包装套装买入转售所有权及物理企业验收 | 一个接收库存拣货发出责任，批次订单清洁共享库房期间资产 | `accepted_service` |

正常包装套装不变，状态观察新增订单外物资不创建布品制造保鲜独立分级节点。真实缺件退回废弃留本节点；展开条件性实际材料服务废物物质原生身份，不把缺证记零。

### 过程：已包装棉床品套装常温库存与自营批发 (`packaged_bedlinen_trade`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`warehouse_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：归属计量电力 / N；cp_power。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：需真实期间电表及因果占用搬运全部消费方驱动与范围，不从产品标签给定每套能耗。

###### 实际液态处理自来水供给 (`premises_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：归属实测供应体积 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需来源计量用途及实测容纳直接持留路径；布品水分观察不量化取水蒸发。

###### 实际独立记录的合成洗涤剂投入 (`housekeeping_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：归属原生制剂供应 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需真实收货使用稀释密度温度单位来源；制剂及内含活性视图不重复投入。

###### 实际独立记录的聚乙烯包装薄膜 (`additional_outer_packing_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：归属真实新增包装供应 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需原生数量面积长度质量材料库存皮重实测换算；不强制换原包装或每套固定袋。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的已包装棉床品套装常温自营批发货批服务 (`accepted_service`)

一个唯一已完成所有权转售商业企业货批，按声明包装套装及真实部件完整尺寸质量验收；商品套数部件件数另记。

- 选定流：已完成的已包装棉床品套装常温自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sets`

范围证据需求：需真实验收门槛制造者品号套装部件尺寸纤维组成净布质量水分皮重期间条件，不固定每套件数或套等于服务。

##### 废物流

###### 废弃已包装棉床上用品套装 (`discarded_packaged_sets_atomic_case`)

仅在实际独立记录确认“废弃已包装棉床上用品套装”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_packaged_sets`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃已包装棉床上用品套装
- 流属性/单位：Mass / kg
- 数量规则：归属实测整包装废物 / N；cp_sets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sets`

范围证据需求：需套件谱系真实布品包装皮重水分处置及原成品门槛损失换算责任；缺枕套不证明所有部件均损失。

###### 实际单独收集的纸类包装废物 (`separated_pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：归属实测分离废包材 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实移除污染皮重原生单位回收处理门槛，不因每套收货即废包或抵扣回收。


###### 实际单独收集的金属包装废物 (`separated_pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：归属实测分离废包材 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实移除污染皮重原生单位回收处理门槛，不因每套收货即废包或抵扣回收。


###### 实际单独收集的塑料包装废物 (`separated_pack_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：归属实测分离废包材 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实移除污染皮重原生单位回收处理门槛，不因每套收货即废包或抵扣回收。

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_accepted | all inventory | 真实归属量按正数唯一验收 N 一次归一化，采用有据物理集合期间驱动。含失败订单缺件隔离退回待机清洁未完成期间职责，当期 N=0 不删活动。不用售价利润作物理服务次数。 |  |
| allocation_merchandise | nonexchange stock | 按互斥套件状态闭合归属期初净收货买方退回期末验收转移退供其他外出废弃，缺件隔离为内部移动。损失部件布品与余下可用件原皮重水分状态变化分开，按真实原成套门槛量换算覆盖责任完成一次商品集成。籽棉皮棉或机织布单独遗漏成套阶段。 |  |
| allocation_materials | new supplies and return | 令 S=归属期初+真实外部净收货-含留存回收材料期末。采用总供应输入 S 并单独记录同范围匹配可用外退输出，或仅耗用输入 S-return 且省略该外退交换。不数值 S+退回输入、不双扣、不内部回收当新收货、不删未退废物溢漏上游供应负担。 |  |
| allocation_shared | resources/assets/providers | 兼容实测期间按集合物理驱动量/全部消费方驱动量分配完整资源。全寿命资产当量按兼容集合驱动量/全部用户期间完整寿命驱动量，含制造维护清洁更换终结。实测寿命或历史加有据剩余终止来源单位不确定性敏感性更新。完整服务视图替代重叠自有范围，不叠加。 |  |
| allocation_outlets | actual waste and direct releases | 真实互斥整包装或分离布品包材清洁量及接收运输处理各一次。湿流及水分纤维材料比例为组成视图，不另叠出口。不自动回收替代抵扣或废物扣供应。直接物种需真实介质有据去向，库存水分差额未解释则未决。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sets | packaged_bedlinen_trade | 完成货批及非交换套装部件库存 | 原始物理事件计量范围及来源记录 | consignment_id; lot_id; manufacturer; SKU; set_id; component_id; component_type; required_components; actual_component_count; set_count; piece_count; count_unit; parent_child_links; dimensions; dimension_unit; dimension_method; dimension_source; fibre_composition; composition_basis; composition_source; accessory_material; textile_net_mass; gross_pack_mass; primary_tare; mass_unit; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplier_evidence_date; temperature; temperature_unit; humidity; humidity_unit; observation_time; opening; gross_receipts; receipt_tare; net_receipts; buyer_returns; closing; accepted_transfer; supplier_returns; incomplete_internal; quarantine_internal; other_exits; actual_discard; disposition; actual_fate; receipt_time; dispatch_time; acceptance_time; ownership_gate; buyer_gate; original_gate_dataset_id; original_gate_reference; assigned_source_quantity; assigned_source_unit; source_gate_state; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_basis; loss_conversion; loss_conversion_unit; loss_conversion_source; state_change_evidence; burden_owner; already_included_loss_coverage; separate_pack_fate; integration_result; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 将真实验收货批与制造者部件单库存移动关联，实测尺寸纤维净量水分皮重，记录缺件可售退回废弃。真实整件部分损失匹配原缝制包装门槛，不假整套或皮棉损失。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); sets; pieces; kg; declared dimensions and condition units | 每次真实事件及相关计量期间 | 完整归属期间及截止与寿命证据 | 单节点真实职责及全部共享消费方 | 每参考流 | 原始记录校准、兼容单位换算状态来源及完整责任不确定性 |
| cp_power | packaged_bedlinen_trade | 真实用电及期间比例 | 原始物理事件计量范围及来源记录 | meter_id; start; end; opening_reading; closing_reading; energy_unit; device_scope; idle_cleanup; cohort_driver; cohort_driver_unit; all_consumer_driver; all_consumer_driver_unit; attribution_share; share_source; provider_coverage; source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量完整作业期间兼容集合全部消费方物理驱动，含待机清洁未完成责任。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 每次真实事件及相关计量期间 | 完整归属期间及截止与寿命证据 | 单节点真实职责及全部共享消费方 | 每参考流 | 原始记录校准、兼容单位换算状态来源及完整责任不确定性 |
| cp_water | packaged_bedlinen_trade | 真实水及物理出口 | 原始物理事件计量范围及来源记录 | source_id; period; supplied_volume; retained_volume; collected_volume; volume_unit; outlet; receiver; composition; composition_basis; composition_source; density; density_unit; temperature; temperature_unit; evaporation_evidence; fate_basis; fate_source; treatment_coverage; transport_coverage; source; attribution_share; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采集计量出口采样记录，分开供水收集液真实直接介质及有据持留蒸发，不推差额。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3; actual composition units | 每次真实事件及相关计量期间 | 完整归属期间及截止与寿命证据 | 单节点真实职责及全部共享消费方 | 每参考流 | 原始记录校准、兼容单位换算状态来源及完整责任不确定性 |
| cp_materials | packaged_bedlinen_trade | 新服务物资及匹配外退 | 原始物理事件计量范围及来源记录 | material_id; SKU; formulation; active_fraction; carrier_fraction; fraction_basis; fraction_source; opening; gross_receipts; receipt_tare; net_receipts; internal_issue; internal_recovery; closing_including_recovered; actual_use; matched_unused_external_return; source_scope_match; receiver; stock_representation; native_unit; conversion_factor; conversion_unit; density; density_unit; temperature; temperature_unit; conversion_source; fate; fate_basis; source; attribution_share; all_consumer_driver; driver_unit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 保留各真实原生供应库存及退回来源；采用总供应 S 独立匹配外退，或仅耗用匹配 S-return 并省对应外退交换。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual native supply units | 每次真实事件及相关计量期间 | 完整归属期间及截止与寿命证据 | 单节点真实职责及全部共享消费方 | 每参考流 | 原始记录校准、兼容单位换算状态来源及完整责任不确定性 |
| cp_provider | packaged_bedlinen_trade | 完成外部物理作业及重叠 | 原始物理事件计量范围及来源记录 | provider_id; job_id; native_quantity; native_unit; completion_gate; completion_time; operating_coverage; electricity_coverage; full_asset_coverage; maintenance_EOL_coverage; transport_empty_coverage; treatment_coverage; upstream_dataset; overlap_owner; cohort_driver; all_consumer_driver; driver_unit; attribution_share; source; N | 先核实真实物理完成原生量完整供应边界再去除自有重叠资源；发票成本不是数量。 | Item(s); actual provider units | 每次真实事件及相关计量期间 | 完整归属期间及截止与寿命证据 | 单节点真实职责及全部共享消费方 | 每参考流 | 原始记录校准、兼容单位换算状态来源及完整责任不确定性 |
| cp_assets | packaged_bedlinen_trade | 完整寿命共享周转资产责任 | 原始物理事件计量范围及来源记录 | asset_id; asset_native_unit; manufacture_scope; maintenance_cleaning_scope; replacement_scope; EOL_scope; owner; provider_overlap; cohort_driver_identity; cohort_driver; cohort_driver_unit; lifetime_driver_identity; lifetime_driver; lifetime_driver_unit; all_user_driver; all_period_scope; observed_history; observed_unit; evidenced_remaining_use; remainder_unit; remainder_source; termination_basis; uncertainty; sensitivity; update_evidence; source; N | 采用兼容完整寿命全部用户驱动归属，实测寿命或历史加有据剩余终止来源不确定性；保留真实周转退回库存。 | Item(s); actual compatible driver units | 每次真实事件及相关计量期间 | 完整归属期间及截止与寿命证据 | 单节点真实职责及全部共享消费方 | 每参考流 | 原始记录校准、兼容单位换算状态来源及完整责任不确定性 |
| cp_transport | packaged_bedlinen_trade | 真实路段载荷及完整承运范围 | 原始物理事件计量范围及来源记录 | leg_id; origin; destination; carrier; period; gross_load; load_tare; net_load; load_unit; distance; distance_unit; load_conversion_factor; load_conversion_unit; load_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; empty_run_coverage; carrier_conditioning_coverage; commodity_service_owner; cohort_driver; all_consumer_driver; driver_unit; attribution_share; share_source; source; N | 真实载荷距离换算全部用户比例匹配路段范围，含空返及真实承运调控，职责各一次。 | kg*km; actual native leg units | 每次真实事件及相关计量期间 | 完整归属期间及截止与寿命证据 | 单节点真实职责及全部共享消费方 | 每参考流 | 原始记录校准、兼容单位换算状态来源及完整责任不确定性 |
| cp_waste | packaged_bedlinen_trade | 互斥整件部分固体接收 | 原始物理事件计量范围及来源记录 | event_id; lot_id; set_id; component_id; material; whole_or_part; count; count_unit; wet_mass; dry_mass; mass_unit; fibre_fraction; nonfibre_fraction; fraction_basis; fraction_source; moisture; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplied_material_link; dry_cleaning_material_mass; retained_fluid_quantity; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; contaminant_composition_basis; stream_exclusion_ids; stream_exclusion_quantity; stream_exclusion_unit; contamination; gross; tare; net; origin; actual_fate; receiver; transfer_gate; transport_coverage; recovery_treatment_scope; commodity_loss_link; attribution_share; all_consumer_driver; driver_unit; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 称量真实分离布品包材清洁物及内含组成，不与整套重叠；证明物理接收完整运输处理。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual component/count units | 每次真实事件及相关计量期间 | 完整归属期间及截止与寿命证据 | 单节点真实职责及全部共享消费方 | 每参考流 | 原始记录校准、兼容单位换算状态来源及完整责任不确定性 |
| cp_species | packaged_bedlinen_trade | 真实直接物质介质 | 原始物理事件计量范围及来源记录 | event_id; source_process; substance; receiving_medium; measured_release; release_unit; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; component_fraction; fraction_basis; fraction_source; fate_fraction; fate_basis; fate_source; measurement_source; uncertainty; attribution_share; all_consumer_driver; driver_unit; N | 先识别真实直接来源物质介质再实测或一次用兼容活动因子组成去向证据，不用库存差额常规洗涤微纤维因子替代真实批发释放。 | kg; actual compatible activity units | 每次真实事件及相关计量期间 | 完整归属期间及截止与寿命证据 | 单节点真实职责及全部共享消费方 | 每参考流 | 原始记录校准、兼容单位换算状态来源及完整责任不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | 真实归属量除正数唯一 N 一次；accepted_service 为 1 Item(s)。 | 归属量; N; 关联协议 | 每参考流交换量 |  |
| supply_stock | materials and usable_material_return | 令 S=归属期初+真实外部净收货-含留存回收材料期末。采用总供应输入 S 并单独记录同范围匹配可用外退输出，或仅耗用输入 S-return 且省略该外退交换。不数值 S+退回输入、不双扣、不内部回收当新收货、不删未退废物溢漏上游供应负担。 | 期初; 外部净收货; 含回收期末; 同范围匹配退回; 口径; cp_materials | 不重复供应与外退量 |  |
| shared_lifetime | power/assets/providers/freight | 兼容实测期间按集合物理驱动量/全部消费方驱动量分配完整资源。全寿命资产当量按兼容集合驱动量/全部用户期间完整寿命驱动量，含制造维护清洁更换终结。实测寿命或历史加有据剩余终止来源单位不确定性敏感性更新。完整服务视图替代重叠自有范围，不叠加。 | 计量期间; 资源范围; 集合全部用户寿命驱动单位; 历史剩余终止来源; cp_assets | 归属资源全寿命资产当量 |  |
| original_set_demand_loss | commodity outside service | 全部商品布品一层包装制造含损失商品均排除服务交换。附加服务外须兼容已放行缝制整理包装套装基线，原门槛归属需求状态变化损失其他出口已有覆盖责任独立定量，全链完整前各一次集成。真实损失搬运接收处理仍属服务各一次。 按互斥套件状态闭合归属期初净收货买方退回期末验收转移退供其他外出废弃，缺件隔离为内部移动。损失部件布品与余下可用件原皮重水分状态变化分开，按真实原成套门槛量换算覆盖责任完成一次商品集成。籽棉皮棉或机织布单独遗漏成套阶段。 | 原成套数据集门槛; 归属需求; 套件状态数量; 尺寸纤维净量水分皮重; 损失单位换算来源; 其他出口覆盖责任集成结果; cp_sets | 服务外定量原成套归属需求损失负担 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_actual_identity | all inventory | 最终使用前核实真实具体流状态门槛属性单位介质，配置类别按真实身份展开。 | 完整详情支持证据 |
| quality_sets | merchandise | 真实套件完整尺寸组成实测净量水分皮重及互斥处置，不通用套装配方纤维得率。 | 制造者部件单实测批次及接收记录 |
| quality_scope | all responsibilities | 服务外完整商品集成，真实原生运行服务全寿命资产承运接收范围各一次，具不确定性更新。 | 原门槛换算覆盖计量寿命接收集成证明 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_electricity | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_power`识别`warehouse_electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_power`; 实际来源关联原生记录 |
| premises_water | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`premises_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| housekeeping_materials | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_materials`识别`housekeeping_materials`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_materials`; 实际来源关联原生记录 |
| additional_outer_packing | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_materials`识别`additional_outer_packing`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_materials`; 实际来源关联原生记录 |
| external_physical_jobs | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`external_physical_jobs`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| complete_life_assets | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`complete_life_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| assigned_freight | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_transport`识别`assigned_freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_transport`; 实际来源关联原生记录 |
| usable_material_return | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_materials`识别`usable_material_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_materials`; 实际来源关联原生记录 |
| discarded_packaged_sets | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_sets`识别`discarded_packaged_sets`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`discarded_packaged_sets_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_sets`; 实际来源关联原生记录 |
| separated_textile_waste | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`separated_textile_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| separated_pack_waste | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`separated_pack_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| contained_cleanup_liquid | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`contained_cleanup_liquid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| spent_housekeeping_solids | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`spent_housekeeping_solids`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| actual_direct_substances | packaged_bedlinen_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_species`识别`actual_direct_substances`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_species`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### warehouse_electricity

含真实电动起重拣货照明库存终端及归属待机清洁期间；普通常温储存不证明主动干燥温湿处理。

本卡为独立身份分支`warehouse_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：棉床品常温仓库作业计量电力
- 流属性/单位：Energy / kWh
- 数量规则：归属计量电力 / N；cp_power。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：需真实期间电表及因果占用搬运全部消费方驱动与范围，不从产品标签给定每套能耗。

#### premises_water

水仅用于有据场地设备清洁；正常已包装商品在此不洗涤润湿蒸汽处理。环境取水采用真实来源交换。

本卡为独立身份分支`premises_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库环境清洁供水
- 流属性/单位：Volume / m3
- 数量规则：归属实测供应体积 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需来源计量用途及实测容纳直接持留路径；布品水分观察不量化取水蒸发。

#### housekeeping_materials

记录真实商业材料品号活性载体基准及实际供应擦拭物吸附物过滤材料原生单位，不规定使用；不把消费者洗衣剂柔软剂漂白剂或护理用量带入未拆包床品贸易。

本卡为独立身份分支`housekeeping_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际供应的场地清洁制剂
- 流属性/单位：Mass / kg
- 数量规则：归属原生制剂供应 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需真实收货使用稀释密度温度单位来源；制剂及内含活性视图不重复投入。

#### additional_outer_packing

仅本服务真实供应的新增外箱保护片标签捆扎物。成套原包装衬页及缝制护理标签继承原厂，生产在服务外商品范围。

本卡为独立身份分支`additional_outer_packing_pe_film`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际新增订单集货包装材料
- 流属性/单位：Mass / kg
- 数量规则：归属真实新增包装供应 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需原生数量面积长度质量材料库存皮重实测换算；不强制换原包装或每套固定袋。

#### external_physical_jobs

仅真实合同门槛完成且物理定义的计数作业，资源资产完整。按质量时间面积时间货运计量服务须相应原生身份。

- 身份采集要求：实际完整计数的外包床品搬运作业
- 流属性/单位：Count / Item(s)
- 数量规则：归属已完成原生作业 / N；cp_provider。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需服务资源资产运输处理覆盖完成单位，不用采购价格或自动把一订单等作一作业。

#### complete_life_assets

覆盖全部消费方真实建筑货架搬运信息设备周转托盘容器，制造维护清洁更换终结责任唯一。

- 身份采集要求：全寿命仓库搬运及周转容器当量
- 流属性/单位：Count / Item(s)
- 数量规则：分配完整资产当量 / N；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需兼容全部用户集合寿命驱动身份单位、实测历史有据剩余终止来源敏感性更新；真实返程不新增另一资产。

#### assigned_freight

采用真实路段完整承运载荷空返范围及承运调控，指明进出路段商品服务责任以免物流重复。

- 身份采集要求：床品物资废物实际归属货运
- 流属性/单位：Mass * distance / kg*km
- 数量规则：归属真实载荷距离 / N；cp_transport。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

范围证据需求：需实测毛皮重净载荷路线距离换算因子单位来源及真实比例全部用户驱动，不用额定能力假定公里。

#### usable_material_return

仅真实未用同范围服务物资转给外部所有者。可售床品买方退供货方退回留在商品库存，回收留存物及周转资产不作本外送。

- 身份采集要求：实际匹配未用新增物资外退
- 流属性/单位：Mass / kg
- 数量规则：归属实测可用外退 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需原生同范围来源数量状态接收方；总供应 S 并单独外退，或匹配净供应 S-return 省略退回交换，不再抵扣。

#### discarded_packaged_sets

仅真实记录废弃决定接收处理。缺件污渍包装损坏退货隔离不自动整套废弃。整包装废物不重复相同已分离布品包材。

- 身份采集要求：废物交接处真实废弃的包装套装
- 流属性/单位：Mass / kg
- 数量规则：归属实测整包装废物 / N；cp_sets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sets`

范围证据需求：需套件谱系真实布品包装皮重水分处置及原成品门槛损失换算责任；缺枕套不证明所有部件均损失。

#### separated_textile_waste

仅真实分离损坏部件或事故撕破收集残余，不假常规裁剪修补重组纤维脱落；按真实纤维材料状态接收方展开，排除已计整套。

- 身份采集要求：真实分离废床品布料及事故收集残余
- 流属性/单位：Mass / kg
- 数量规则：归属实测分离废布品 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需部件数量净质量纤维比例水分方法状态及真实接收路线；干质量变化不自动是干棉损失或空气纤维。

#### separated_pack_waste

仅本边界实际移除包材及材料皮重接收方。继承一层包装制造在商品上游，真实服务搬运处理在此一次。

本卡为独立身份分支`separated_pack_waste_paper_pack`; `separated_pack_waste_metal_pack`; `separated_pack_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：真实分离原包装及新增包装废物
- 流属性/单位：Mass / kg
- 数量规则：归属实测分离废包材 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实移除污染皮重原生单位回收处理门槛，不因每套收货即废包或抵扣回收。

#### contained_cleanup_liquid

真实收集场地清洁流，不是消费者洗涤废水。记录真实布品清洁剂污染接收方，湿固体及内含液组分视图不重复出口。

- 身份采集要求：实际收集送处理的仓库清洁液
- 流属性/单位：Volume / m3
- 数量规则：归属实测收集液 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需体积密度温度单位组成基准及接收处理运输范围；布品水分差额不证明废水。

#### spent_housekeeping_solids

仅真实使用收集的非商品清洁物过滤材料混合固体。真实持留液布纤维包材化学污染作为组成视图，排除已计匹配整件部分固体及收集液出口。真实接收运输处理各一次，不假定回收抵扣。

- 身份采集要求：实际废清洁擦拭物吸附材料及其他收集固体
- 流属性/单位：Mass / kg
- 数量规则：归属实测废清洁固体质量 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需原生供应材料来源、干材料持留液污染基准、真实整流毛皮重净量互斥流排除接收处理；不默认擦拭物过滤更换或从水分差额产生本废物。

#### actual_direct_substances

仅真实实测有据直接来源如清洁释放，物质介质明确。不从布品所有权磨损洗涤文献库存差额推尘微纤维水蒸气化学释放。

- 身份采集要求：实际已识别直接物质及接收介质
- 流属性/单位：Mass / kg
- 数量规则：归属有据真实物质释放 / N；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`

范围证据需求：需实测或兼容活动因子组成去向量单位基准来源；完整物种因子不再重复乘组成去向。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_service | 需唯一真实商业企业验收全部限定正数 N。套数件数托盘移动隔离取消订单不自动完成一个参考服务。 |  |
| validate_set_identity | merchandise | 核实真实套装部件单尺寸数量纤维非纤维净质量水分皮重包装门槛，不固定二件四件套、不通用面积转质量或皮棉转套装。 |  |
| validate_scope | all duties | 消费者预洗熨烫冻结包裹说明不转作业投入。真实新增处理修补换装须审查扩展路线，自有服务承运全寿命资产接收范围须完整不重叠。 | sferra-care-public |
| validate_chain | commodity outside service | 原放行缝制整理包装套装基线，实际相关缺失纺纱织造染整裁剪缝制配套一层包装阶段在服务外各一次补齐。匹配归属需求状态变化原门槛整件部分损失量单位换算来源其他出口责任已含损失及真实集成结果。 |  |
| validate_native_fates | all exchanges | 核实原生流属性单位支持数量来源。需真实废物接收处理及直接物质介质因子组成去向证据；不从质量状态虚构纤维脱落蒸发整套废弃。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 真实数量具体身份审查后可用作 secondary_dataset; background_dataset |
| downstream_use | 完整已放行包装棉床品商品链的常温自营批发物理附加服务 |
| allowed_use | 真实声明套件尺寸纤维净量水分皮重包装状态期间及企业验收路径 |
| excluded_use | 独立完整床品足迹棉布品成套制造消费者护理使用其他家纺主动处理修补换装零售代理套等服务或价格替代 |
| required_metadata | 全部限定真实套件库存损失原成套门槛归属需求状态换算覆盖责任集成完整资源资产服务承运接收边界 |
| required_quality_disclosure | 未决具体身份支持前景数量范围证据部件水分状态去向限制、来源消费者背景寿命换算不确定性 |
| update_trigger | 套装部件单尺寸纤维包装库房作业真实处理服务资产承运接收范围验收或需求损失换算证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-household | official_guidance | UNSD.CPC3.0 explanatory notes,division61,61032; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 271制成纺织品在家用床品自营批发中，仅分类。 |
| sferra-care-public | handbook | SFERRA.Linen Care Guide,public manufacturer consumer text; https://www.sferra.com/a/page/linen-care-guide | 仅真实标签干燥通风光条件问题；消费者洗涤熨烫冻结重包用量寿命建议不是批发作业默认或定量因子。 |
