---
pcr_id: pcr.own-account-manual-wood-deck-platform-handtruck-wholesale
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原厂成品手动四脚轮钢架木台面平台搬运车自营批发服务

## 1. 范围与适用性

仅适用实际原厂成品手动四脚轮固定平台车自营企业常温批发，钢架木台面、非机动非升降非液压，原始供方形式物料清单运输装配状态有来源。供方成品指实际供货配置完整，不假设已完成可使用最终装配。不规定批发装配载荷测试演示使用维修台面脚轮更换表面处理清洗重装。排除机动升降车容器婴儿车自行车散件代理零售及独立租赁仓储。厂家示例仅提出材质脚轮涂层运输重量定性问题，不提供统一载重尺寸钢规重量组成寿命或安全认证。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-manual-wood-deck-platform-handtruck-wholesale |
| classification_refs | CPC 3.0:61082较窄范围；所供商品499内49930，排除49921 |
| covered_products | 实际完整原供方手动钢架木固定台面四脚轮平台车批发服务 |
| excluded_products | 机动升降液压车自行车婴儿车容器散件制造批发装配测试使用维修清洗重装收费代理零售租赁 |
| representative_product | 真实型号序列批号钢木脚轮涂层附件物料清单装分离运输状态原包装，无固定型号数值规格 |
| production_route | 实际供方完整原形式门槛 -> 自有批发收货常温存放电动搬运 -> 撤销后最终企业接收 |
| market_state | 已完成批发服务；交易车保留非交换商品身份，不是当前仓库资产 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 实际限定原供方手动平台车自有转售企业已完成批次 |
| How much | 1 Item(s) |
| How well | 实际所有权转售撤销后最终买方门槛凭据，以物料运输装配包装状态及原始来源关联限定，不统一载荷试验或可用状态 |
| How long or cycle | 实际放行收货存放发出接收撤销日期及原生时长单位时区、库存计量全资产期间，无统一寿命存放期 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的原厂成品手动四脚轮钢架木台面平台搬运车自营批发批次 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; model; serial_or_lot; BOM_record; manual_nonmotor_evidence; fixed_deck_nonlifting_nonhydraulic_evidence; four_caster_configuration; frame_material; wood_deck_identity; caster_tread_hub_identity; finish_identity; included_accessory_ids; supplier_shipping_assembly_state; attached_detached_membership; original_supplier_presentation; cart_count; net_cart_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| final_service | accepted_service | Count | Item(s) | 撤销后唯一最终自有转售企业接收，N>0；不是车脚轮载重或kg。 |
| actual_config_mass | cp_carts; cp_outlets | Mass | kg | 实际同型号物料运输状态方法；发布运输重量不是净或部件质量。整车部件包装涂层流体视图非加和。 |
| native_component | cp_carts; cp_outlets | Mass | kg | 各部件水分流体涂层有独立原生单位基准方法状态来源取样时点；水湿干比例限同定义样品，不校正整车或将挥发失重作水。 |
| cargo_work | freight | Mass * Length | t*km | 空载交易车仍货物；EACH实际件数一次TOTAL不变，仅扣真非货物承运皮重；各装载区段份额在SUM内后/N一次。 |
| fate_species | cp_outlets; cp_environment | Mass | kg | 真实接收物种环境及相容原生组成系数去向证据；保留捕集部分不另加整股或自动排放。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际完整原厂成品手动四脚轮固定平台车，钢架木台面，原始供方形式运输装配状态物料清单附件及继承涂层内容物包装均有来源。 |
| starting_condition_role | 服务附加的收到成品商品门槛，不是假定已装好载荷测试使用状态或原料组合。 |
| product_classification_scope | CPC 3.0:61082较窄手动平台搬运车服务；真实商品为499内49930，不是自行车49921、容器49221或婴儿车38992。 |
| recursive_input_rule | 交易车原部件内容物包装及商品退回是非交换库存通量，不是耗用仓库资产或钢木橡胶服务输入及另一批发服务。 |
| upstream_dataset_requirement | 关联实际钢架木台面脚轮涂层附件制造、供方实际运输装配状态及原包装完整门槛，包括损失商品内含负担，在服务外计一次。仅钢木原料或不匹配可使用状态不足。在完整链使用前量化真实原始分配需求原生换算损失阶段基线新增覆盖及唯一责任。 |
| disclosure | 披露真实型号物料序列收到装配原包装涂层内容物、净与运输货物皮重及部件测量、买方所有权最终门槛时间、含全部竞争出口及缺口的来源分配，不设厂家尺寸载重重量寿命通用值。 |

### 边界规则

| rule_id | Rule |
| --- | --- |
| service_route | 包括实际收货文件状态检查而不强制开包、常温存放电动仓储搬运至企业最终交接。不含批发装配安装载荷测试滚动演示使用清洗维修换台面打磨涂层重装；外包额外作业亦须扩展复核。 |
| commodity_outside | 购入转售车继承部件涂层流体包装的全部上游含真实内含损失均在服务交换外。完整链使用前必须有量化相容原始门槛需求损失关联一次；实际服务收集接收处理一次。未知库存状态缺口不是损失或零。 |
| cart_cargo_not_asset | 所售车是商品而非当前批发设施。运输时即使空载仍为货物，车辆身份不使其成为承运皮重。额定载重不是实际载荷，发布运输重量不证明车净重或部件质量。 |
| period_and_reject | 记录真实批次群组库存计量来源资产期间及时区。未完成取消撤销拒收尝试保留资源及期末退回其他接收出口，同时N不计未定接收。状态观察不规定保藏或缺陷率。 |
| exclusive_fate_owner | 追踪整车实际独立部件包装混合清理受控液体直接物种，保留涂层水分流体成员互斥。实际接收环境证据证明去向，不能用锈迹碎片材质名替代。直接作业服务商承运接收公用工程资产运输处理各一责任方，不自动回收抵扣。 |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| platform_handtruck_wholesale | 手动钢架木台面平台车自营批发 | required | 实际限定自有转售企业批次 | foreground | accepted_service |

按批次群组及实际仓库期间记录收货存放电动搬运、条件性场址卫生事故换批接收事件。输入输出关联真实期间使用者，拒收未完成作业不消失。成品车制造装配涂层在外部，不是批发批次技术。

### 过程：手动钢架木台面平台车自营批发 (`platform_handtruck_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：sum(actual_utility_quantity*documented_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需实际计量区间kWh、全部使用者物理驱动、闲置未完成群组覆盖及供电支持，不设每车能耗基准。

###### 实际液态处理自来水供给 (`site_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实际相容供水体积*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需原生计量供方体积、实际卫生事件换算共享记录，不按台面面积给洗水额度。

###### 实际独立记录的合成洗涤剂投入 (`hygiene_materials_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：所选实际总供应或耗用材料质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际材料配方原生数量件数单件质量或密度、库存及同范围可用未耗退回证据，不设溶剂润滑配方。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的原厂成品手动四脚轮钢架木台面平台搬运车自营批发批次 (`accepted_service`)

撤销后的实际最终自有转售企业接收批次，以真实型号物料清单原始运输装配供货形式净皮重状态限定。服务计数不是车件数脚轮数额定载重或商品kg。

- 选定流：已完成的原厂成品手动四脚轮钢架木台面平台搬运车自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carts`

范围证据需求：需真实唯一最终接收、批发所有权转售、企业买方门槛凭据撤销、实际车辆数物料清单运输状态及相容净包装质量时间限定，不固定每批车数。

##### 废物流

###### 废弃完整手动木台面平台手推车 (`whole_cart_waste_atomic_case`)

仅在实际独立记录确认“废弃完整手动木台面平台手推车”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_cart_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整手动木台面平台手推车
- 流属性/单位：Mass / kg
- 数量规则：实际整车接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际丢弃决定母体标识收到配置整股交接净皮重保留份额接收去向；锈迹松轮不证明整车丢弃。

###### 实际单独收集的纸类包装废物 (`separate_pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装接收质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需包装材质实际皮重或受污物流质量、残留原生证据独立交接接收处理；包装质量不是车净重。


###### 实际单独收集的金属包装废物 (`separate_pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装接收质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需包装材质实际皮重或受污物流质量、残留原生证据独立交接接收处理；包装质量不是车净重。


###### 实际单独收集的塑料包装废物 (`separate_pack_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装接收质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需包装材质实际皮重或受污物流质量、残留原生证据独立交接接收处理；包装质量不是车净重。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule |
| --- | --- |
| physical_events | 真实事件直接追踪群组批次；否则用有证据因果搬运或空间时间原生驱动覆盖全部使用者期间含闲置未完成拒收作业。不自动按等车数载重钢重售价分配。 |
| original_source_assignment | 服务外用真实来源目标直接量，或仅在每末端驱动含期末其他有用出口退回真实损失的完整正值相容记录下用assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，每项有原生数量单位基准方法状态来源关联责任。commodity_source_gate_demand=assigned_source_gate_quantity采用原始成品运输状态门槛，含有证据状态变化份额。最终发出加废弃不是原始需求；真实记录基线新增损失原生量换算阶段损失覆盖互斥责任一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| supply_return_choice | S=opening+net_receipts-closing，含留存回收。选择总输入S/N并单列真实配对可用未耗外送输出；或仅耗用(S-usable_outward_return)/N且省去配对退回交换。仅同范围独立供应可相抵，不抵继承车部件流体或无关库存，不二次抵扣。 |
| full_life_assets | 以相容job_driver/lifetime_all_user_driver分配完整制造维护更换退役寿命终结，寿命为全部使用者期间已观察使用加有来源剩余服务。保留原生等价不确定性敏感性更新及服务商承运排除；服务总量仅除一次N。交易车不是资产等价量。 |
| freight_outlets | 各唯一装载区段的documented_service_share放SUM内部，之后仅/N一次。EACH实际相容件数一次，TOTAL不变；空载交易车及包装支承仍为货物，只扣非货物承运皮重。整车部件包装清理液体组成视图互斥，真实接收运输处理一次，无自动抵扣。 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_carts | platform_handtruck_wholesale | 本过程真实物流、事件及解释性审计量 | 搬运车型号物料清单、收到状态、所有权库存及来源台账 | cart_count; cart_count_unit; cart_count_basis; cart_count_method; cart_count_state; cart_count_source; cart_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; net_cart_mass; net_cart_mass_unit; net_cart_mass_basis; net_cart_mass_method; net_cart_mass_state; net_cart_mass_source; net_cart_mass_sample_time; supplier_ship_weight; supplier_ship_weight_unit; supplier_ship_weight_basis; supplier_ship_weight_method; supplier_ship_weight_state; supplier_ship_weight_source; supplier_ship_weight_sample_time; original_pack_tare; original_pack_tare_unit; original_pack_tare_basis; original_pack_tare_method; original_pack_tare_state; original_pack_tare_source; original_pack_tare_sample_time; whole_cart_cargo_mass; whole_cart_cargo_mass_unit; whole_cart_cargo_mass_basis; whole_cart_cargo_mass_method; whole_cart_cargo_mass_state; whole_cart_cargo_mass_source; whole_cart_cargo_mass_sample_time; frame_mass; frame_mass_unit; frame_mass_basis; frame_mass_method; frame_mass_state; frame_mass_source; frame_mass_sample_time; deck_mass; deck_mass_unit; deck_mass_basis; deck_mass_method; deck_mass_state; deck_mass_source; deck_mass_sample_time; caster_mass; caster_mass_unit; caster_mass_basis; caster_mass_method; caster_mass_state; caster_mass_source; caster_mass_sample_time; finish_mass; finish_mass_unit; finish_mass_basis; finish_mass_method; finish_mass_state; finish_mass_source; finish_mass_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; water_wet_fraction; water_wet_fraction_unit; water_wet_fraction_basis; water_wet_fraction_method; water_wet_fraction_state; water_wet_fraction_source; water_wet_fraction_sample_time; water_dry_ratio; water_dry_ratio_unit; water_dry_ratio_basis; water_dry_ratio_method; water_dry_ratio_state; water_dry_ratio_source; water_dry_ratio_sample_time; component_wet_mass; component_wet_mass_unit; component_wet_mass_basis; component_wet_mass_method; component_wet_mass_state; component_wet_mass_source; component_wet_mass_sample_time; component_dry_mass; component_dry_mass_unit; component_dry_mass_basis; component_dry_mass_method; component_dry_mass_state; component_dry_mass_source; component_dry_mass_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; size_quantity; size_quantity_unit; size_quantity_basis; size_quantity_method; size_quantity_state; size_quantity_source; size_quantity_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; actual_loss_quantity; actual_loss_quantity_unit; actual_loss_quantity_basis; actual_loss_quantity_method; actual_loss_quantity_state; actual_loss_quantity_source; actual_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; model; serial_or_lot; BOM_record; manual_nonmotor_evidence; fixed_deck_nonlifting_nonhydraulic_evidence; four_caster_configuration; frame_material; wood_deck_identity; caster_tread_hub_identity; finish_identity; included_accessory_ids; supplier_shipping_assembly_state; attached_detached_membership; original_supplier_presentation; capacity_not_payload_evidence; shipweight_net_tare_coverage; component_membership; moisture_component_identity; water_wet_or_dry_basis; LOD_other_volatiles_exclusion; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; target_exit_driver; sum_exit_drivers; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; source_gate_allocation_source; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 核验实际购入转售所有权、企业买方、最终接收门槛凭据及撤销，单凭收货不足。追踪真实型号序列或批号、固定木台面钢架四脚轮、实际胎面轮毂涂层附件、已装与供方预期分离的部件及原始供货形式。收到装配状态须有来源，不假设已装好或缺件。区分车净重、发布运输重量、包装支承皮重及相容实际部件数量；额定载重不是实际载荷。部件水分流体密度尺寸各有原生单位方法状态来源取样时点。原始门槛归属用真实直接关联，或正值完整相容的末端出口驱动记录，含期末退回其他有用出口真实损失，每项有数量单位基准方法状态来源关联责任。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 实际原生数量单位及有来源相容换算；日期时区保留 | 每真实事件和库存计量资产区间 | 真实来源收发接收及跨期间留存资源 | 本实际过程场址与明确归属交接，含全部相关使用者 | 每参考流 | 原凭据校准方法及原生单位基准状态来源取样时点；实际责任排除不确定性，未知不置零 |
| cp_supplies | platform_handtruck_wholesale | 本过程真实物流、事件及解释性审计量 | 批发新增用品及外送未耗配对 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; supply_identity; standalone_stock_scope; matched_return_ids; unused_return_convention; allocation_owner; inherited_component_exclusion; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 仅在使用时采集实际表面卫生用品抹布吸收材料滤材及新增外层防护。交易车及继承钢木橡胶涂层流体包装不是服务耗材。核对原生EACH/TOTAL、组成、件数质量或实际密度及独立库存。选总供应并单列匹配可用未耗外送输出，或仅耗用输入且省去配对输出；留存库存不是外部退回。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际原生数量单位及有来源相容换算；日期时区保留 | 每真实事件和库存计量资产区间 | 真实来源收发接收及跨期间留存资源 | 本实际过程场址与明确归属交接，含全部相关使用者 | 每参考流 | 原凭据校准方法及原生单位基准状态来源取样时点；实际责任排除不确定性，未知不置零 |
| cp_utilities | platform_handtruck_wholesale | 本过程真实物流、事件及解释性审计量 | 实际仓库及批发电动搬运公用工程 | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; overlap_exclusion; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 使用真实计量区间或有记录供方数量和相匹配全部使用者因果驱动，覆盖照明实际搬运或条件性场址卫生。不推定交易车运行能耗、载荷试验、洗车装配涂层或气候控制需求。区分真实服务商承运覆盖、原生换算及实测和分配证据。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际原生数量单位及有来源相容换算；日期时区保留 | 每真实事件和库存计量资产区间 | 真实来源收发接收及跨期间留存资源 | 本实际过程场址与明确归属交接，含全部相关使用者 | 每参考流 | 原凭据校准方法及原生单位基准状态来源取样时点；实际责任排除不确定性，未知不置零 |
| cp_provider | platform_handtruck_wholesale | 本过程真实物流、事件及解释性审计量 | 实际物理限定承包仓储服务包 | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | 取得真实物理工作数量及等价单位期间份额基准，所含公用工程资产运输处理和排除。外包装配维修载荷测试或使用车不能隐藏额外物理路线；此类作业须经扩展复核。不按价格或车额定载重等价服务量。 | 实际原生数量单位及有来源相容换算；日期时区保留 | 每真实事件和库存计量资产区间 | 真实来源收发接收及跨期间留存资源 | 本实际过程场址与明确归属交接，含全部相关使用者 | 每参考流 | 原凭据校准方法及原生单位基准状态来源取样时点；实际责任排除不确定性，未知不置零 |
| cp_assets | platform_handtruck_wholesale | 本过程真实物流、事件及解释性审计量 | 批发基础设施全寿命及实际全部使用记录 | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; asset_role; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; observed_boundary; remaining_life_source; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; traded_cart_exclusion; period_id; time_zone; time_source | 独立于转售车识别实际仓库货架搬运设备及可重复使用支承物，采集完整制造维护更换退役寿命终结。以相容原生单位等价关系，用已观察全部使用量加有来源剩余使用量构成寿命，涵盖全部期间使用者和未完成拒收批次并披露不确定性敏感性更新。不把所售车计当前仓库资产，不重复服务商承运资产。 | 实际原生数量单位及有来源相容换算；日期时区保留 | 每真实事件和库存计量资产区间 | 真实来源收发接收及跨期间留存资源 | 本实际过程场址与明确归属交接，含全部相关使用者 | 每参考流 | 原凭据校准方法及原生单位基准状态来源取样时点；实际责任排除不确定性，未知不置零 |
| cp_freight | platform_handtruck_wholesale | 本过程真实物流、事件及解释性审计量 | 实际货物装载区段、装配状态及唯一运输归属 | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; cart_mass; cart_mass_unit; cart_mass_basis; cart_mass_method; cart_mass_state; cart_mass_source; cart_mass_sample_time; actual_parts_accessories_mass; actual_parts_accessories_mass_unit; actual_parts_accessories_mass_basis; actual_parts_accessories_mass_method; actual_parts_accessories_mass_state; actual_parts_accessories_mass_source; actual_parts_accessories_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_shipping_assembly_state; traded_cart_is_cargo_even_empty; capacity_not_payload; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | 采用实际收发形式和整包货物或互斥相容组成，包括车及供方分离部件附件包装随货可重复使用支承物。所交易手推车即使空载仍为货物；车辆身份不使其成为非货物皮重。仅扣实际非货物承运车辆容器皮重。相容EACH质量乘实际件数一次，TOTAL不变；额定载重及发布运输重量不证明实际装载。实际质量距离工作量按来源换算，各记录份额在唯一装载区段求和内，再/N一次。核对空返及服务商接收范围。 | 实际原生数量单位及有来源相容换算；日期时区保留 | 每真实事件和库存计量资产区间 | 真实来源收发接收及跨期间留存资源 | 本实际过程场址与明确归属交接，含全部相关使用者 | 每参考流 | 原凭据校准方法及原生单位基准状态来源取样时点；实际责任排除不确定性，未知不置零 |
| cp_outlets | platform_handtruck_wholesale | 本过程真实物流、事件及解释性审计量 | 实际整车部件包装与受控收集互斥出口 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_coating; retained_coating_unit; retained_coating_basis; retained_coating_method; retained_coating_state; retained_coating_source; retained_coating_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; transfer_id; event_id; parent_cart_ids; part_ids; BOM_membership; whole_cart_exclusion; separate_part_exclusion; separate_pack_exclusion; mixed_cleanup_exclusion; contained_liquid_exclusion; component_identity; moisture_wet_or_dry_basis; retained_content_fate; receiver_id; receiver_classification; treatment_owner; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 记录实际损伤锈迹污迹台面脚轮状态及决定，不推定整车废弃。追踪母车物料清单原包装谱系。整车流包含钢架木台面脚轮涂层和保留流体水分；独立部件包装混合清理或受控液体交接有互斥成员。组成涂层水分流体各有独立单位基准方法状态来源取样时点，不默认沿用整股单位。实际有用外送或废物分类接收处理一次，区分库存外送和匹配未耗用品口径，不自动回收或替代抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 实际原生数量单位及有来源相容换算；日期时区保留 | 每真实事件和库存计量资产区间 | 真实来源收发接收及跨期间留存资源 | 本实际过程场址与明确归属交接，含全部相关使用者 | 每参考流 | 原凭据校准方法及原生单位基准状态来源取样时点；实际责任排除不确定性，未知不置零 |
| cp_environment | platform_handtruck_wholesale | 本过程真实物流、事件及解释性审计量 | 有证据的物种颗粒与接收环境证据 | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | 确定实际物种或颗粒类别及接收环境。用实测释放或有依据适用活动系数，且仅按系数需求使用组成去向，保留原生单位完整来源。完整物种系数已覆盖组成释放比例时不重复乘。磨损气味锈迹缺口库存差、保留涂层或橡胶存在不等于空气土壤水排放或零值。区分捕集材料保留内容物及受控接收交接，不规定用车滚动磨损或涂层排放系数。 | 实际原生数量单位及有来源相容换算；日期时区保留 | 每真实事件和库存计量资产区间 | 真实来源收发接收及跨期间留存资源 | 本实际过程场址与明确归属交接，含全部相关使用者 | 每参考流 | 原凭据校准方法及原生单位基准状态来源取样时点；实际责任排除不确定性，未知不置零 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_carts | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals。核查真实批发所有权转售企业买方门槛凭据撤销标识；仅N>0归一化；未完成取消拒收撤销资源在真实群组期间保留。 | 所有权实际买方门槛及接收撤销时间记录 | 最终唯一服务分母N |  |
| cart_pack_components | cp_carts | 采用实测相容net_cart_mass和实际original_pack_tare货物状态。发布supplier_ship_weight仅在真实型号装配物料包装方法覆盖相符时可用；不假定等于净重或每钢木橡胶部件。整车钢架台面脚轮涂层内容物为非加和成员视图。供方预期分离部件不自动算缺件；额定载重不是实际载荷。 | 真实物料形式EACH/TOTAL净包装部件来源记录 | 实际收到状态车包装组成审计 |  |
| component_water_fluid | cp_carts; cp_outlets | 仅有证据的部件特定水测量支持component_dry_mass=component_wet_mass*(1-water_wet_fraction)，其中为实际水/收到湿质量分数。相容同一样品干基水/非水比例，在原生百分数转比例后用water_wet_fraction=water_dry_ratio/(1+water_dry_ratio)。不以一份木样对整辆钢木橡胶涂层车干燥校正；含其他挥发物干燥失重不是水。保留流体涂层有自身身份单位来源，不默认释放。 | 部件身份成员及原生水流体方法样品状态单位来源 | 限定部件视图，不推定整车或排放 |  |
| source_gate_demand | cp_carts | 真实来源目标直接追踪，或用正值完整相容全部末端记录计算assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。commodity_source_gate_demand=assigned_source_gate_quantity采用实际原始成品运输物料包装状态，含有证据状态变化份额。核对来源输入和互斥期末其他有用退回真实损失出口，baseline_quantity/additional_stage_quantity/loss_adjustment_quantity及原生换算阶段损失责任覆盖在服务外一次。未知损失阶段阻断完整链就绪而非零。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 原始来源、直接或完整全部末端原生记录及基线新增损失覆盖 | 服务外一次关联实际原始成品需求 |  |
| utility_share | cp_utilities | 原生换算且匹配全部使用者因果驱动后用utility_per_service=sum(actual_utility_quantity*documented_share)/N。采用真实计量期间，排除服务商承运覆盖；不设交易车运行清洗载荷测试系数。 | 实际原生区间数量换算及原生记录份额 | 每服务实际kWh及条件性场址水m3 |  |
| supply_stock | cp_supplies | S=opening+net_receipts-closing，含留存回收。总S/N并单列配对可用外送输出，或耗用(S-usable_outward_return)/N且省去配对退回交换。EACH乘实际相容件数一次，TOTAL不变；质量换算采用真实单件或相容密度温度证据。不抵继承部件流体。 | 独立用品库存退回原生数量组成换算份额 | 互斥实际总供应或耗用及匹配退回口径 |  |
| provider_equivalent | cp_provider | 采用有证据physical_equivalence及互斥覆盖计算provider_per_service=sum(actual_native_package_quantity*documented_share)/N。documented_share=share_numerator/share_denominator须匹配原生因果单位，不用费用或额定载重。 | 实际物理服务包原生等价及覆盖份额证据 | 实际互斥承包服务量 |  |
| asset_life_share | cp_assets | 仅在原生单位等价相容且剩余量有来源时用lifetime_all_user_driver=observed_all_user_driver+remaining_driver。job_driver/lifetime_all_user_driver应用于完整制造维护更换退役寿命终结；服务资产求和后仅/N一次。全部使用者期间不确定性敏感性更新和服务商承运排除必需；所售车不是服务资产。 | 全寿命事件作业观察剩余寿命等价原生记录 | 实际全部使用者全寿命资产等价量 |  |
| unique_freight_sum | cp_freight | 实际货物包含即使空载的运输车、供方部件附件包装随货支承。EACH质量*actual_count一次或TOTAL不变；仅扣真正非货物承运车辆容器皮重。原生载荷距离换算actual_transport_work后用freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N。每记录份额在SUM内且N一次，保留实际空返服务商接收覆盖。发布载重运输重量不替代实测相容货物。 | 唯一装载区段原生EACH/TOTAL货物件数皮重距离换算份额 | 每服务实际限定运输t*km |  |
| receiver_outlets | cp_outlets | 以EACH实际件数一次或TOTAL不变及有支持换算后计算outlet_per_service=actual_compatible_native_transfer_quantity/N。整车独立部件包装混合清理液体和解释涂层水分流体组成互斥非加和。留存库存非外送；仅耗用用品省配对退回。真实接收分类运输处理责任一次；无自动抵扣或推定拆解。 | 原生实测物流组成去向接收母体成员换算 | 实际互斥交接量及处理覆盖 |  |
| actual_species | cp_environment | release_mass=measured_species_mass，或相容activity*applicable_species_factor，仅按系数需要加入composition/release_fraction。完整物种系数已覆盖比例时不再乘。保留原生单位真实环境捕集受控排除后仅/N一次；不设滚动磨损涂层木锈材质存在库存差默认。 | 真实物种颗粒环境原生测量或适用系数链 | 独立有证据的实际物种释放 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_configuration | cp_carts | 真实型号物料运输状态包装及原生净运输部件来源须代表实际，不以发布型号数值作统一默认。 | 实际放行物料测量校准 |
| full_chain | all | 原生完整原始来源分配损失阶段覆盖及全部使用者全资产服务期间须真实记录；缺信息阻断完整链就绪。 | 互斥来源责任期间及不确定性复核 |
| source_limits | durham-platform-truck | 厂家型号正文支持定性钢木脚轮涂层运输问题，不提供通用载重尺寸重量寿命或装配使用测试义务。 | 真实厂家正文及实际批号证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| site_water | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`site_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_materials | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`hygiene_materials`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_outer_protection | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_outer_protection`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_package | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_package`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| service_assets | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`service_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_supply_return | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`unused_supply_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| usable_material_export | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`usable_material_export`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| whole_cart_waste | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`whole_cart_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`whole_cart_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| separate_parts_waste | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`separate_parts_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| separate_pack_waste | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`separate_pack_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| mixed_cleanup_solids | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`mixed_cleanup_solids`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| contained_liquid | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`contained_liquid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species_release | platform_handtruck_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species_release`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

归属收货存放发出的实际场址供电；手动车不推定能耗，不含装配测试使用。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际批发仓库及电动搬运供电
- 流属性/单位：Energy / kWh
- 数量规则：sum(actual_utility_quantity*documented_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需实际计量区间kWh、全部使用者物理驱动、闲置未完成群组覆盖及供电支持，不设每车能耗基准。

#### site_water

仅实际仓库表面卫生供水，不是交易车清洗或使用阶段清洁。

本卡为独立身份分支`site_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际场址卫生供水
- 流属性/单位：Volume / m3
- 数量规则：实际相容供水体积*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需原生计量供方体积、实际卫生事件换算共享记录，不按台面面积给洗水额度。

#### hygiene_materials

仅实际使用的用品抹布吸收材料滤材；继承台面脚轮橡胶涂层润滑物属商品。

本卡为独立身份分支`hygiene_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际服务卫生及事故收集用品
- 流属性/单位：Mass / kg
- 数量规则：所选实际总供应或耗用材料质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际材料配方原生数量件数单件质量或密度、库存及同范围可用未耗退回证据，不设溶剂润滑配方。

#### added_outer_protection

仅真实新增外层防护，不推定打开重装装配。继承原厂包装属商品，批发可重复使用支承属全寿命资产。

- 身份采集要求：实际新增外层运输防护
- 流属性/单位：Mass / kg
- 数量规则：所选实际总供应或耗用新增材料质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际防护材质供应量EACH/TOTAL质量及库存退回归属，不按车尺寸默认箱或缠包数。

#### provider_package

实际物理搬运场址作业服务包及明确范围，不隐藏装配载荷测试维修或采购车资产。

- 身份采集要求：实际互斥承包批发作业服务包
- 流属性/单位：Count / Item(s)
- 数量规则：sum(actual_native_package_quantity*documented_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需实际服务商物理等价范围期间及同基准份额资源排除；费用或额定载重不能定义服务包数量。

#### service_assets

全部使用者期间的全寿命基础设施搬运支承等价量；所售车不是当前仓库资产或每批耗用新支承。

- 身份采集要求：实际完整寿命仓库及批发搬运资产
- 流属性/单位：Count / Item(s)
- 数量规则：sum_full_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需真实资产边界制造维护更换寿命终结、已观察全部使用及有来源剩余原生驱动等价和敏感性，不设寿命或每用资产系数。

#### freight

实际车即使空载仍是货物，包含供方分离部件包装随货支承，仅扣真正非货物承运皮重。额定载重不是实际载荷。

- 身份采集要求：将搬运车作为货物的实际唯一装载区段运输
- 流属性/单位：Mass * Length / t*km
- 数量规则：sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据需求：需实际整包载荷与发布运输重量的区别、EACH/TOTAL件数、装配包装状态、距离换算逐记录份额空返接收覆盖，不因车辆身份设零载荷。

#### unused_supply_return

仅总供应口径下实际外送且匹配独立库存的可用材料。仅耗用输入省去该交换；所售车继承部件退回为商品台账事件。

- 身份采集要求：实际配对可用未耗独立用品外送退回
- 流属性/单位：Mass / kg
- 数量规则：仅总供应口径的实际配对可用未耗外送质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需原供应身份原生质量同范围配对实际接收可用性及非期末库存，不以继承涂层流体抵无关用品。

#### usable_material_export

仅有证据的有用材料外送，不推定每辆损伤车回收。保留实际分类内容物及接收证明，不自动给避免生产抵扣。

- 身份采集要求：实际独立接收的可用服务材料外送
- 流属性/单位：Mass / kg
- 数量规则：实际独立可用外送质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实材料身份状态质量组成水分流体交接接收及废物期末整车视图排除，收集不证明回收。

#### whole_cart_waste

仅真实丢弃收到状态整车，含保留钢架木台面脚轮涂层流体及存在包装。组成解释不另增整股废物；商品内含损失服务外一次，物理处理一次。

- 身份采集要求：实际拒收整车及保留组成废物流
- 流属性/单位：Mass / kg
- 数量规则：实际整车接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际丢弃决定母体标识收到配置整股交接净皮重保留份额接收去向；锈迹松轮不证明整车丢弃。

#### separate_parts_waste

仅有谱系及整车互斥成员的实际独立台面钢架脚轮附件物流，不推定拆解。保留涂层橡胶润滑物在部件内，除非有独立真实交接。

- 身份采集要求：实际独立交接车部件及保留涂层内容物废物
- 流属性/单位：Mass / kg
- 数量规则：实际互斥部件物流净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实分离部件身份原生质量物料清单关联保留涂层流体水分单位及接收，不从运输重量推材质比例或涂层损失。

#### separate_pack_waste

实际独立原包装或新增包装物流含附着材料流体，与整车部件其他出口互斥，不推定普遍开包重装回收。

本卡为独立身份分支`separate_pack_waste_paper_pack`; `separate_pack_waste_metal_pack`; `separate_pack_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际独立交接包装废物及残留
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装接收质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需包装材质实际皮重或受污物流质量、残留原生证据独立交接接收处理；包装质量不是车净重。

#### mixed_cleanup_solids

仅真实抹布吸收材料滤材保留碎屑涂层流体水分时使用，基材及保留部分在同一物流内；捕集碎屑不是空气排放。

- 身份采集要求：实际废混合事故清理固体
- 流属性/单位：Mass / kg
- 数量规则：实际混合清理接收质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际基材保留内容物各自单位基准方法来源取样时点数量、事故及互斥接收成员，不设固定清理比例。

#### contained_liquid

仅独立实际收集液体且有水用品颗粒流体组成时使用，与整车部件包装固体保留部分互斥；接收交接不是直接排口或纯水排放。

- 身份采集要求：实际受控服务卫生或事故液体接收交接
- 流属性/单位：Mass / kg
- 数量规则：实际受控相容液体质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际收集接收液体净量及换算时密度温度、原生组成去向处理边界，不设洗车废水默认。

#### direct_species_release

仅真实批发边界物种颗粒及接收环境；不从橡胶涂层木材磨损锈迹库存差推排放，无证据不置零。

- 身份采集要求：实际释放至有证据环境的已识别物种颗粒
- 流属性/单位：Mass / kg
- 数量规则：实际相容实测或有依据物种释放质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：需实际物种颗粒环境、实测质量或原生适用活动系数及必要组成去向来源、保留捕集排除责任，不用设备使用系数。

## 9. 验证规则

| rule_id | Rule |
| --- | --- |
| final_identity | 参考输出关联名称计数匹配实际所有权企业最终门槛凭据撤销限定；仅N>0，全部未完成拒收资源保留。 |
| complete_gate | 须实际完整钢架台面脚轮涂层附件制造运输装配原包装门槛，直接或正值完整全部末端来源损失覆盖在服务外一次。不用原钢木或不匹配可使用状态替代。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| actual_operation | 不隐藏批发或承包装配载荷测试使用维修清洗重装涂层路线，实际额外作业须复核。真实装配物料预期分离状态不证明缺件。 |
| cargo_resource | 所售车非当前资产，运输空车仍货物。核查EACH/TOTAL净运输部件边界、仅非货物皮重、唯一装载区段记录份额在SUM内/N一次；全使用者寿命资产服务商接收排除及总供应或仅耗用省退回。 |
| exclusive_fate | 整车部件包装清理液体及保留涂层水分流体组成物种视图互斥；真实接收环境系数原生证据，不从损伤库存默认破损回收磨损物种或零。 |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 每已完成接收批次的前景自营批发服务附加清单 |
| downstream_use | 关联一次至完整相容原始成品车物料运输状态包装商品需求及量化原生损失阶段覆盖 |
| allowed_use | 有记录实际手动非机动非升降非液压四脚轮钢架木固定台面原供方形式批发路线 |
| excluded_use | 独立完整车足迹用户滚动载荷使用测试、推定装配维修涂层清洗重装及机动升降容器婴儿车自行车散件路线 |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; model; serial_or_lot; BOM_record; manual_nonmotor_evidence; fixed_deck_nonlifting_nonhydraulic_evidence; four_caster_configuration; frame_material; wood_deck_identity; caster_tread_hub_identity; finish_identity; included_accessory_ids; supplier_shipping_assembly_state; attached_detached_membership; original_supplier_presentation; cart_count; net_cart_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | 实际身份范围原生量运输物料净运输皮重组成证据、原始全部末端来源损失阶段责任覆盖、资产观察剩余不确定性及运输接收排除 |
| update_trigger | 真实型号物料运输装配涂层包装状态、批发作业来源分配损失资产寿命服务商承运接收物种或换算证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| durham-platform-truck | literature | https://www.durhammfg.com/products/material-handling/platform-trucks/platform-truck-work-height-wood-deck-1800-lbs-capacity-24-x-48/ | Durham WHPT-WD-2448-8MR-95实际厂家示例：定性钢架木台面脚轮涂层区别及发布运输重量覆盖问题；不提供统一数值规格、实际目标批号运输状态、批发装配测试使用寿命功效系数。 |
