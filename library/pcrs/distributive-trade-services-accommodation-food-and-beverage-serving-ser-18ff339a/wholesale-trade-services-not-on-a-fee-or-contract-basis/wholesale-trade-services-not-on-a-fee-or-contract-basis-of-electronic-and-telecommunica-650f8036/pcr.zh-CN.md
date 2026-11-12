---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-electronic-and-telecommunica-650f8036
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原厂成品未装元器件双面刚性FR4印制电路自营批发服务

## 1. 范围与适用性

适用于实际原厂成品未装元器件双面刚性FR4印制电路自营企业批发，原供方单板或拼板形式，普通常温存放电动仓储搬运。裸板指无安装元器件，不是未完成覆铜板；不含装配卡柔性多层金属基电路或散原料。不默认批发装件焊接电测烘烤干燥湿控分板清洗维修重装使用；实际额外作业须路线复核。厂家菜单区分板拼板及处理选项，厂家质量记录支持材料批号放行追踪问题，其多层示例序列明确不全部适用双层板。不设通用几何铜箔FR4配方处理测试通过或UL-IPC-RoHS声明。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-electronic-and-telecommunica-650f8036 |
| classification_refs | CPC 3.0:61085较窄；所供商品471内47130 |
| covered_products | 实际成品未装元器件两导电层刚性FR4印制电路自营批发服务 |
| excluded_products | 原覆铜板已装件柔性多层金属基电路收费代理零售租赁制造批发测试烘烤分板装配重装使用 |
| representative_product | 真实设计版本批号凭证放行、单拼板净板工艺边测试券及实际图形镀层处理阻焊字符包装状态 |
| production_route | 完整原供方印制电路放行 -> 自有批发收货常温存放电动搬运 -> 撤销后最终企业接收 |
| market_state | 已完成商业服务；电路商品保持非交换商品身份，不是当前仓库ICT资产 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 实际原供方未装元器件双面刚性FR4印制电路已完成自营企业接收批次 |
| How much | 1 Item(s) |
| How well | 真实所有权转售买方最终门槛凭据撤销；设计材料双层未装件单拼板工艺边测试券包装限定原始来源关联，不统一批发测试 |
| How long or cycle | 真实放行收货存放发出接收撤销时点时区原生时长及库存计量全寿命资产期间，无统一存放寿命 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的原厂成品未装元器件双面刚性FR4印制电路自营批发批次 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; design_revision; batch_id; passport_or_release_record; unpopulated_evidence; two_conductive_layer_evidence; rigid_FR4_material_record; actual_copper_pattern_record; through_hole_plating_record; surface_finish_identity; soldermask_if_actual; legend_if_actual; supplier_single_or_panel_state; panel_board_rails_coupon_membership; original_pack_state; board_count; panel_count; net_board_area; net_board_mass; whole_panel_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | Count | Item(s) | 撤销后唯一最终真实自有转售企业接收，N>0；板拼板铜面积质量非服务计数。 |
| board_panel_geometry | cp_circuits | Area | m2 | 声明净平面面积与双面用途真实轮廓开孔收到单拼板工艺边测试券成员，只以匹配基准换算原生尺寸单位件数。 |
| retained_copper | cp_circuits; cp_outlets | Mass | kg | 真实实测设计保留图形铜及不重叠孔镀几何密度；无真实覆盖时整板面积*初始满铜箔厚度非蚀刻后保留质量。 |
| native_components | cp_circuits; cp_outlets; cp_environment | Mass | kg | 独立组成保留水流体处理物种单位基准方法状态来源取样时点密度温度单位；仅部件水湿干定义，不将其他挥发干燥失重作水。 |
| packed_freight | freight | Mass * Length | t*km | 真实货物含供方拼板成员包装支承，原生EACH乘件数一次TOTAL不变，仅非货物皮重，唯一装载区段本份额在SUM内后N一次。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际原厂成品未装元器件双面刚性FR4印制电路，处原供方放行单板或拼板状态，净板工艺边测试券及实际铜图形通孔镀层处理阻焊字符继承包装均声明。 |
| starting_condition_role | 批发附加的成品印制电路门槛，不是原始覆铜板或已装元器件装配使用状态。 |
| product_classification_scope | CPC 3.0:61085较窄印制电路批发服务；商品471内47130，不覆盖全部电子电信商品。 |
| recursive_input_rule | 购入转售印制电路商品退回为非交换库存通量，不递归为耗用仓库ICT资产原铜树脂玻纤制造化学品或另一批发服务。 |
| upstream_dataset_requirement | 关联实际完整材料制造及适用双层图形钻孔镀蚀阻焊处理成形放行原包装门槛，全部损失商品内含负担在服务外一次。仅原覆铜板或不匹配装配多层清单不完整。完整链使用前量化真实原始分配需求阶段损失基线新增覆盖原生换算唯一损失责任。 |
| disclosure | 真实设计批号放行材料层数未装件状态、单拼板工艺边测试券及铜处理阻焊成员、数量几何包装时间状态、所有权买方门槛、原生来源分配全部出口及未定证据。 |

### 边界规则

| rule_id | Rule |
| --- | --- |
| merchant_operation | 仅实际文件包装状态收货普通常温存放电动搬运最终企业交接。不默认装元件焊接烘烤干燥湿控、板测试清洗分板重装使用，含隐蔽承包工作；实际额外作业须复核。 |
| complete_commodity | 全部板拼板工艺边测试券继承组成处理包装制造上游含真实内含损失均在服务外。完整链使用前须量化相容原始门槛分配需求及互斥一次损失阶段覆盖关联；实际物理服务收集接收处理一次。 |
| geometry_pattern_gate | 裸板指未装元器件成品印制电路，不是满铜原覆铜板。实际双层路线不继承每个多层步骤。净板面积不因双面翻倍，除非声明表面面积用途；拼板工艺边测试券及蚀刻后铜图形重叠须有来源，不按满铜矩形推质量。 |
| period_reject | 记录实际群组库存计量来源资产阶段时区。未完成取消撤销拒收保留资源和期末退回有用真实损失出口，N排除未定接收；划伤氧化缺口本身不是损失废弃排放零。 |
| exclusive_owners | 实际整电路拼板独立碎片包装混合捕集液体、保留铜处理玻纤树脂水分流体物种有互斥成员接收环境证明。直接服务商承运接收公用工程资产运输处理各一次。所售电路非当前ICT资产，不自动金属回收抵扣。 |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| unpopulated_circuit_wholesale | 未装元器件双面FR4印制电路自营批发 | required | 真实限定自有转售企业批次 | foreground | accepted_service |

批发批次群组服务含真实收货包装状态常温存放电动搬运、条件性场址卫生捕集换批及最终接收交接事件。全部资源关联真实库存计量期间使用者含未完成拒收尝试，不推批发制造得率或继承技术。

### 过程：未装元器件双面FR4印制电路自营批发 (`unpopulated_circuit_wholesale`)

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

范围证据需求：需原生计量kWh区间真实全部使用者搬运空间驱动闲置未完成资源及供电支持，不设每板面积能耗。

###### 实际液态处理自来水供给 (`site_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实际相容公用工程体积*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需真实计量供方体积卫生事件匹配期间换算份额接收覆盖，不从板面积推洗板量。

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

范围证据需求：需真实材料身份配方原生件数质量密度换算库存及匹配未耗退回证据，不规定溶剂吸收剂量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的原厂成品未装元器件双面刚性FR4印制电路自营批发批次 (`accepted_service`)

一个实际撤销后最终自有转售企业接收商业批次，附真实设计批号材料图形处理及供方单板拼板工艺边测试券包装状态。计数为服务，不是净板拼板铜kg或m2。

- 选定流：已完成的原厂成品未装元器件双面刚性FR4印制电路自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_circuits`

范围证据需求：需真实批发所有权转售企业买方门槛凭据撤销唯一最终接收及真实双层未装件设计批号成员件数面积质量包装时间限定，不默认每批板数。

##### 废物流

###### 废弃完整未装配双面FR4电路板整板 (`whole_board_panel_waste_atomic_case`)

仅在实际独立记录确认“废弃完整未装配双面FR4电路板整板”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_board_panel_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整未装配双面FR4电路板整板
- 流属性/单位：Mass / kg
- 数量规则：实际整收到状态交接净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际丢弃决定设计批号拼板成员整股质量保留内容物及接收处理；划伤或文件问题不证明整拼板废物。

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

范围证据需求：需实际包装材质净皮重受污质量残留原生单位及接收分类处理，不推定干燥袋干燥剂数量。


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

范围证据需求：需实际包装材质净皮重受污质量残留原生单位及接收分类处理，不推定干燥袋干燥剂数量。


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

范围证据需求：需实际包装材质净皮重受污质量残留原生单位及接收分类处理，不推定干燥袋干燥剂数量。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule |
| --- | --- |
| causal_events | 真实事件关联可用时直接归属，否则有来源物理搬运占用空间时间或相容因果驱动覆盖全部使用者期间含未完成拒收闲置。不默认板面积拼板数铜质量价格收入驱动。 |
| source_assignment | 服务外用实际来源目标直接追踪，或仅正值完整相容全部末端记录含期末其他有用退回实际损失时用assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，每项原生数量单位基准方法状态来源关联责任。commodity_source_gate_demand=assigned_source_gate_quantity采用原始实际成品单拼板工艺边测试券包装状态含有证据状态变化份额。最终发出质量加废弃不是来源需求。量化基线新增损失原始量换算阶段损失覆盖互斥责任一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| supply_returns | S=opening+net_receipts-closing，含留存回收。总输入S/N并单列实际匹配可用未耗外送输出，或仅耗用(S-usable_outward_return)/N且省去配对退回交换。只抵同范围独立服务供应，不抵继承板铜处理包装或无关库存，不二次抵扣。 |
| asset_lifetime | 完整制造维护更换退役寿命终结按相容job_driver/lifetime_all_user_driver分配。寿命为全部使用者期间已观察使用加有来源剩余服务，原生等价不确定性敏感性更新，直接服务商承运唯一责任，求和后/N一次。交易电路非资产输入。 |
| freight_receiver | 每唯一装载区段本documented_service_share在SUM内后/N一次。货物保留实际收到板拼板工艺边测试券包装随货支承，EACH相容件数一次TOTAL不变，仅扣非货物承运皮重。互斥接收运输处理及整股组成视图一次，不默认回收抵扣。 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_circuits | unpopulated_circuit_wholesale | 本过程实际交换事件及非交换审计量 | 电路设计批号、收到单板或拼板状态、所有权来源库存台账 | board_count; board_count_unit; board_count_basis; board_count_method; board_count_state; board_count_source; board_count_sample_time; panel_count; panel_count_unit; panel_count_basis; panel_count_method; panel_count_state; panel_count_source; panel_count_sample_time; circuits_per_panel; circuits_per_panel_unit; circuits_per_panel_basis; circuits_per_panel_method; circuits_per_panel_state; circuits_per_panel_source; circuits_per_panel_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; net_board_mass; net_board_mass_unit; net_board_mass_basis; net_board_mass_method; net_board_mass_state; net_board_mass_source; net_board_mass_sample_time; whole_panel_mass; whole_panel_mass_unit; whole_panel_mass_basis; whole_panel_mass_method; whole_panel_mass_state; whole_panel_mass_source; whole_panel_mass_sample_time; rails_coupons_mass; rails_coupons_mass_unit; rails_coupons_mass_basis; rails_coupons_mass_method; rails_coupons_mass_state; rails_coupons_mass_source; rails_coupons_mass_sample_time; original_pack_tare; original_pack_tare_unit; original_pack_tare_basis; original_pack_tare_method; original_pack_tare_state; original_pack_tare_source; original_pack_tare_sample_time; whole_packed_cargo_mass; whole_packed_cargo_mass_unit; whole_packed_cargo_mass_basis; whole_packed_cargo_mass_method; whole_packed_cargo_mass_state; whole_packed_cargo_mass_source; whole_packed_cargo_mass_sample_time; board_length; board_length_unit; board_length_basis; board_length_method; board_length_state; board_length_source; board_length_sample_time; board_width; board_width_unit; board_width_basis; board_width_method; board_width_state; board_width_source; board_width_sample_time; board_thickness; board_thickness_unit; board_thickness_basis; board_thickness_method; board_thickness_state; board_thickness_source; board_thickness_sample_time; net_board_area; net_board_area_unit; net_board_area_basis; net_board_area_method; net_board_area_state; net_board_area_source; net_board_area_sample_time; panel_area; panel_area_unit; panel_area_basis; panel_area_method; panel_area_state; panel_area_source; panel_area_sample_time; rails_coupons_area; rails_coupons_area_unit; rails_coupons_area_basis; rails_coupons_area_method; rails_coupons_area_state; rails_coupons_area_source; rails_coupons_area_sample_time; retained_pattern_area; retained_pattern_area_unit; retained_pattern_area_basis; retained_pattern_area_method; retained_pattern_area_state; retained_pattern_area_source; retained_pattern_area_sample_time; retained_copper_thickness; retained_copper_thickness_unit; retained_copper_thickness_basis; retained_copper_thickness_method; retained_copper_thickness_state; retained_copper_thickness_source; retained_copper_thickness_sample_time; retained_copper_volume; retained_copper_volume_unit; retained_copper_volume_basis; retained_copper_volume_method; retained_copper_volume_state; retained_copper_volume_source; retained_copper_volume_sample_time; hole_plating_copper_volume; hole_plating_copper_volume_unit; hole_plating_copper_volume_basis; hole_plating_copper_volume_method; hole_plating_copper_volume_state; hole_plating_copper_volume_source; hole_plating_copper_volume_sample_time; copper_mass; copper_mass_unit; copper_mass_basis; copper_mass_method; copper_mass_state; copper_mass_source; copper_mass_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; component_wet_mass; component_wet_mass_unit; component_wet_mass_basis; component_wet_mass_method; component_wet_mass_state; component_wet_mass_source; component_wet_mass_sample_time; component_dry_mass; component_dry_mass_unit; component_dry_mass_basis; component_dry_mass_method; component_dry_mass_state; component_dry_mass_source; component_dry_mass_sample_time; water_wet_fraction; water_wet_fraction_unit; water_wet_fraction_basis; water_wet_fraction_method; water_wet_fraction_state; water_wet_fraction_source; water_wet_fraction_sample_time; water_dry_ratio; water_dry_ratio_unit; water_dry_ratio_basis; water_dry_ratio_method; water_dry_ratio_state; water_dry_ratio_source; water_dry_ratio_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; actual_loss_quantity; actual_loss_quantity_unit; actual_loss_quantity_basis; actual_loss_quantity_method; actual_loss_quantity_state; actual_loss_quantity_source; actual_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; target_exit_driver; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; design_revision; batch_id; passport_or_release_record; unpopulated_evidence; two_conductive_layer_evidence; rigid_FR4_material_record; glass_resin_identity; actual_copper_pattern_record; through_hole_plating_record; surface_finish_identity; soldermask_if_actual; legend_if_actual; supplier_single_or_panel_state; panel_board_rails_coupon_membership; original_pack_state; component_membership; copper_area_face_and_coverage_basis; no_full_foil_after_etch_assumption; plating_overlap_exclusion; moisture_component_identity; water_wet_or_dry_basis; LOD_other_volatiles_exclusion; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; source_gate_allocation_source; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 核验实际批发购入转售企业买方最终接收门槛凭据撤销，单凭收货不够。追踪设计版本批号实际放行、未装元器件两导电层刚性FR4材料、真实铜图形通孔镀铜及实际存在表面处理阻焊字符。先声明单电路或拼板及净板工艺边测试券成员，再做件数质量面积换算；预期工艺边不是缺失电路。由实测设计物料来源记录几何面覆盖基准、保留铜与初始铜箔区别、不重叠孔镀铜、玻纤树脂处理及包装。每原生量有单位基准方法状态来源取样时点。原始门槛需求用真实直接关联，或正值完整相容全部末端驱动含期末退回其他有用出口真实损失，每出口有原生量关联责任；保留完整制造放行原包装及阶段损失覆盖。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 真实原生数量单位及有来源相容换算，保留日期时区 | 每真实事件与库存计量资产区间 | 实际来源收发接收时点及跨期间留存资源 | 本真实过程场址及明确归属交接，全部相关使用者 | 每参考流 | 原始凭据校准方法、原生单位基准状态来源取样时点、互斥归属不确定性；未知不置零 |
| cp_supplies | unpopulated_circuit_wholesale | 本过程实际交换事件及非交换审计量 | 实际仓库卫生事故及新增防护用品记录 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; material_identity; standalone_stock_scope; matched_return_ids; unused_return_convention; owner; inherited_board_pack_exclusion; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 仅使用时采集真实用品抹布吸收材料滤材及额外外层防护。供方电路阻焊表面处理包装及继承干燥剂属商品，不是当前供应。不推定烘烤添加干燥剂湿度介入或清洗板。保留原生EACH/TOTAL组成库存退回换算证据；选总输入并单列可用未耗外送退回，或仅耗用输入且省去配对退回交换。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 真实原生数量单位及有来源相容换算，保留日期时区 | 每真实事件与库存计量资产区间 | 实际来源收发接收时点及跨期间留存资源 | 本真实过程场址及明确归属交接，全部相关使用者 | 每参考流 | 原始凭据校准方法、原生单位基准状态来源取样时点、互斥归属不确定性；未知不置零 |
| cp_utilities | unpopulated_circuit_wholesale | 本过程实际交换事件及非交换审计量 | 实际仓库及批发电动搬运公用工程 | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; driver_quantity; driver_quantity_unit; driver_quantity_basis; driver_quantity_method; driver_quantity_state; driver_quantity_source; driver_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; provider_overlap; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量真实仓库搬运需求及条件性场址卫生供应，匹配区间全部使用者物理驱动。不含PCB制造镀蚀焊接测试使用电力、冲板烘烤或推定气候负荷。区分实测分配数据真实服务商承运覆盖及原生换算。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 真实原生数量单位及有来源相容换算，保留日期时区 | 每真实事件与库存计量资产区间 | 实际来源收发接收时点及跨期间留存资源 | 本真实过程场址及明确归属交接，全部相关使用者 | 每参考流 | 原始凭据校准方法、原生单位基准状态来源取样时点、互斥归属不确定性；未知不置零 |
| cp_provider | unpopulated_circuit_wholesale | 本过程实际交换事件及非交换审计量 | 实际限定仓储服务商物理服务包 | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | 取得真实服务包数量原生物理等价份额及所含公用工程资产运输处理。外包分板检验测试烘烤装元件焊接重装仍是须扩展复核的真实额外作业，不能隐入制造服务包。不用金额或板面积替代。 | 真实原生数量单位及有来源相容换算，保留日期时区 | 每真实事件与库存计量资产区间 | 实际来源收发接收时点及跨期间留存资源 | 本真实过程场址及明确归属交接，全部相关使用者 | 每参考流 | 原始凭据校准方法、原生单位基准状态来源取样时点、互斥归属不确定性；未知不置零 |
| cp_assets | unpopulated_circuit_wholesale | 本过程实际交换事件及非交换审计量 | 完整寿命仓库搬运及可重复使用支承登记 | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; remaining_life_source; observed_boundary; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; traded_board_exclusion; period_id; time_zone; time_source | 独立于交易板识别真实仓库货架搬运支承资产；所售印制电路不是当前仓库ICT资产。包含完整制造维护更换退役寿命终结、实际作业已观察全部使用加有来源剩余服务、相容原生单位等价及全部期间使用者。记录不确定性敏感性更新并排除服务商承运重复资产。 | 真实原生数量单位及有来源相容换算，保留日期时区 | 每真实事件与库存计量资产区间 | 实际来源收发接收时点及跨期间留存资源 | 本真实过程场址及明确归属交接，全部相关使用者 | 每参考流 | 原始凭据校准方法、原生单位基准状态来源取样时点、互斥归属不确定性；未知不置零 |
| cp_freight | unpopulated_circuit_wholesale | 本过程实际交换事件及非交换审计量 | 唯一装载区段包装电路运输记录 | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; received_board_panel_mass; received_board_panel_mass_unit; received_board_panel_mass_basis; received_board_panel_mass_method; received_board_panel_mass_state; received_board_panel_mass_source; received_board_panel_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; share_numerator; share_numerator_unit; share_numerator_basis; share_numerator_method; share_numerator_state; share_numerator_source; share_numerator_sample_time; share_denominator; share_denominator_unit; share_denominator_basis; share_denominator_method; share_denominator_state; share_denominator_source; share_denominator_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_single_panel_membership; rails_coupons_included_coverage; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | 采用实际运输单板拼板配置及包装货物，含供方工艺边测试券原新增包装和实际随货支承，即使可重复使用。净电路面积或铜重不是整载荷。相容EACH质量乘实际件数一次TOTAL不变，仅扣非货物车辆容器皮重。每唯一装载区段的有来源物理份额在工作量求和内再/N一次，保留原生质量距离工作量换算及空返服务商接收覆盖。 | 真实原生数量单位及有来源相容换算，保留日期时区 | 每真实事件与库存计量资产区间 | 实际来源收发接收时点及跨期间留存资源 | 本真实过程场址及明确归属交接，全部相关使用者 | 每参考流 | 原始凭据校准方法、原生单位基准状态来源取样时点、互斥归属不确定性；未知不置零 |
| cp_outlets | unpopulated_circuit_wholesale | 本过程实际交换事件及非交换审计量 | 互斥电路拼板碎片包装及受控收集出口 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_copper; retained_copper_unit; retained_copper_basis; retained_copper_method; retained_copper_state; retained_copper_source; retained_copper_sample_time; retained_finish_mask; retained_finish_mask_unit; retained_finish_mask_basis; retained_finish_mask_method; retained_finish_mask_state; retained_finish_mask_source; retained_finish_mask_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; transfer_id; parent_design_batch_ids; board_panel_ids; rails_coupon_fragment_membership; whole_board_panel_exclusion; separate_fragment_exclusion; separate_pack_exclusion; mixed_cleanup_exclusion; contained_liquid_exclusion; component_identity; moisture_wet_or_dry_basis; retained_content_fate; receiver_id; receiver_classification; treatment_owner; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 记录实际翘曲划伤氧化破损或拒收决定及接收，不凭观察直接整废或金属释放。追踪原设计批号及收到拼板净板工艺边测试券谱系。整股含保留玻纤树脂铜镀层处理阻焊水分流体；实际独立碎片包装清理液体交接排除其成员。各组成保留量有自身原生单位基准方法状态来源取样时点。实际有用外送废物分类接收运输处理一次，区分库存外送和匹配供应退回口径，不自动分板金属回收或抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 真实原生数量单位及有来源相容换算，保留日期时区 | 每真实事件与库存计量资产区间 | 实际来源收发接收时点及跨期间留存资源 | 本真实过程场址及明确归属交接，全部相关使用者 | 每参考流 | 原始凭据校准方法、原生单位基准状态来源取样时点、互斥归属不确定性；未知不置零 |
| cp_environment | unpopulated_circuit_wholesale | 本过程实际交换事件及非交换审计量 | 实际物种颗粒及接收环境证据 | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | 须真实物种颗粒类别及接收环境、实测释放或适用活动系数且仅加必要组成去向。完整物种系数已覆盖比例时不再乘。须原生单位方法样品状态时点适用来源，排除捕集粉尘抹布保留铜处理树脂及受控液体。划伤氧化玻纤树脂存在库存差不等于铜颗粒VOC排放或零。 | 真实原生数量单位及有来源相容换算，保留日期时区 | 每真实事件与库存计量资产区间 | 实际来源收发接收时点及跨期间留存资源 | 本真实过程场址及明确归属交接，全部相关使用者 | 每参考流 | 原始凭据校准方法、原生单位基准状态来源取样时点、互斥归属不确定性；未知不置零 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_circuits | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals。须真实批发所有权转售企业买方最终门槛凭据撤销；仅N>0相除。取消未完成拒收撤销资源保留实际群组期间。 | 真实所有权买方最终门槛接收撤销记录 | 最终唯一服务N |  |
| board_panel_geometry | cp_circuits | 用真实实测设计net_board_area及收到单拼板成员。矩形长*宽计算仅适用于真实轮廓开孔基准；双面铜不使平面面积翻倍。仅实际相容成员下用拼板数*circuits_per_panel；工艺边测试券属于原供方拼板，不是额外净电路或可遗漏来源质量。EACH质量*actual_count一次TOTAL不变，包装质量保留真实原包装。 | 原生轮廓长宽面积厚度件数质量成员换算 | 限定净板及收到拼板几何质量审计 |  |
| retained_copper_components | cp_circuits | 优先真实实测或设计支持copper_mass。用几何法时copper_mass=sum(retained_copper_volume*density)，含独立有证据且不重叠孔镀铜体积及每面真实保留图形覆盖厚度。没有真实覆盖时整板面积*初始满铜箔厚度不是蚀刻后保留铜，不重复实测设计总量已含镀铜。玻纤树脂处理阻焊字符组成视图非加和，须真实身份比例。 | 实际保留几何覆盖孔镀排除及原生密度温度来源 | 无满铜默认的保留铜组成审计 |  |
| source_gate | cp_circuits | 直接来源追踪或正值完整全部末端原生记录下assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。commodity_source_gate_demand=assigned_source_gate_quantity采用实际原始成品未装件单拼板工艺边测试券包装门槛含有证据状态变化份额，不是发出加废弃。核对输入期末退回其他有用实际损失、baseline_quantity/additional_stage_quantity/loss_adjustment_quantity原生换算实际缺阶段阶段损失覆盖责任，服务外一次。未知阻断完整链使用，不置零。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 直接或完整原生末端驱动来源及基线新增损失证据 | 量化原始完整商品需求损失在外一次 |  |
| component_water | cp_circuits; cp_outlets | 仅需要且有证据时component_dry_mass=component_wet_mass*(1-water_wet_fraction)，为指定同部件样品实际水/收到湿质量分数。相容干基水/非水比例经原生百分数换算后water_wet_fraction=water_dry_ratio/(1+water_dry_ratio)。不由单一部件样品校正整FR4铜处理，含其他挥发物干燥失重不自动为水。保留流体量有自身原生身份基准来源去向。 | 实际部件水流体原生测量方法样品状态来源换算 | 限定部件水分流体审计不推产品损失 |  |
| utility_share | cp_utilities | 以实际原生区间换算匹配全部使用者因果驱动并排除服务商重叠计算utility_per_service=sum(actual_utility_quantity*documented_share)/N。不设制造装配测试使用烘烤气候系数。 | 原生公用计量驱动换算份额记录 | 每服务实际电力场址水 |  |
| supply_stock | cp_supplies | S=opening+net_receipts-closing含留存回收。总S/N并单列配对可用外送输出，或耗用(S-usable_outward_return)/N且省去配对退回交换。真实EACH件数换算一次TOTAL不变，支持单件质量密度温度，无继承材料抵扣。 | 独立原生库存材料换算及匹配未耗退回 | 互斥供应耗用材料口径 |  |
| provider_share | cp_provider | 用实际physical_equivalence及互斥覆盖计算provider_per_service=sum(actual_native_package_quantity*documented_share)/N。documented_share=share_numerator/share_denominator须相容原生因果单位，不用金额或无等价板数。 | 真实服务包等价份额原生覆盖 | 真实互斥服务商服务 |  |
| full_asset_share | cp_assets | 原生相容等价且剩余有来源后lifetime_all_user_driver=observed_all_user_driver+remaining_driver。job_driver/lifetime_all_user_driver应用完整制造维护更换退役寿命终结，全部使用者期间不确定性敏感性更新，求和后/N一次，不把交易PCB作当前ICT资产。 | 实际资产寿命事件作业观察剩余原生驱动等价 | 实际完整寿命全部使用者资产等价量 |  |
| unique_freight | cp_freight | 实际货物为互斥相容成员下收到板拼板含供方工艺边测试券+包装+随货支承；实际EACH质量*actual_count一次或TOTAL不变，仅扣非货物承运皮重。原生质量距离换算actual_transport_work。freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N，各记录份额在SUM内N一次，空返服务商接收范围互斥。 | 唯一装载区段原生配置货物件数距离换算份额 | 每服务真实限定运输t*km |  |
| actual_outlets_release | cp_outlets; cp_environment | 经支持EACH/TOTAL换算后outlet_per_service=actual_compatible_native_transfer_quantity/N。整供方拼板板独立碎片包装捕集液体及保留组成互斥。留存库存不是外送；仅耗用供应省配对退回。实际接收处理一次无自动回收抵扣。release_mass=measured_species_mass或相容activity*applicable_species_factor，仅加必要composition/release_fraction；完整物种系数已覆盖比例时不再乘。实际环境原生来源捕集排除后/N一次，不以材质存在库存差推排放。 | 真实原生交接组成接收或独立物种环境系数链 | 互斥实际接收及物种量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_design | cp_circuits | 真实材料设计版本批号放行成员处理包装原生测量来源，不统一厂家菜单数值配方。 | 真实供方放行设计物料原生测量 |
| complete_source | all | 原始完整成品门槛直接或完整正值末端分配损失及原生阶段基线新增覆盖在外一次；全部使用者全资产已观察有来源剩余。缺证据阻断完整链。 | 互斥来源损失责任期间不确定性审计 |
| source_limit | eurocircuits-pool; eurocircuits-quality | 仅定性板拼板选项及实际追踪问题；厂家多层示例非全部双层阶段或通用测试监管声明。 | 当前厂家正文及真实前景批号证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| site_water | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`site_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_materials | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`hygiene_materials`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_protection | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_protection`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_package | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_package`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| service_assets | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`service_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_supply_return | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`unused_supply_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| usable_material_export | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`usable_material_export`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| whole_board_panel_waste | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`whole_board_panel_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`whole_board_panel_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| separate_fragment_waste | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`separate_fragment_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| separate_pack_waste | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`separate_pack_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| mixed_capture_waste | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`mixed_capture_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| contained_liquid | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`contained_liquid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species_release | unpopulated_circuit_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species_release`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

仅实际归属收货存放发出供电，不默认板制造电测装配电路使用烘烤湿控。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库及批发电动搬运供电
- 流属性/单位：Energy / kWh
- 数量规则：sum(actual_utility_quantity*documented_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需原生计量kWh区间真实全部使用者搬运空间驱动闲置未完成资源及供电支持，不设每板面积能耗。

#### site_water

仅真实仓库卫生供水，不是电路制造冲洗或消费者使用，记录服务商处理范围。

本卡为独立身份分支`site_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际批发场址卫生供水
- 流属性/单位：Volume / m3
- 数量规则：实际相容公用工程体积*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需真实计量供方体积卫生事件匹配期间换算份额接收覆盖，不从板面积推洗板量。

#### hygiene_materials

仅使用时列真实用品抹布吸收材料滤材。板玻纤树脂铜阻焊表面处理及继承包装干燥剂不是新增服务材料。

本卡为独立身份分支`hygiene_materials_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际服务卫生及事故捕集耗材
- 流属性/单位：Mass / kg
- 数量规则：所选实际总供应或耗用材料质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需真实材料身份配方原生件数质量密度换算库存及匹配未耗退回证据，不规定溶剂吸收剂量。

#### added_protection

仅真实新增防护，不推定打开重装干燥。继承供方包装属商品，批发重复支承用全寿命分配。

- 身份采集要求：实际额外外层运输防护
- 流属性/单位：Mass / kg
- 数量规则：所选实际新增总供应或耗用材料质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际材质数量EACH/TOTAL原生质量库存及重复使用退回归属，不默认每板拼板一个干燥袋或干燥剂。

#### provider_package

仅真实物理限定搬运场址服务并声明覆盖；外包分板测试烘烤装件焊接重装须路线复核，不隐入服务商范围。

- 身份采集要求：实际互斥承包仓储作业服务包
- 流属性/单位：Count / Item(s)
- 数量规则：sum(actual_native_package_quantity*documented_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需服务商单位物理等价事件份额及公用工程资产运输处理排除，不用价格净板面积服务包系数。

#### service_assets

全部使用者期间的真实建筑货架搬运支承单列，交易电路不是当前ICT资产，含全部制造维护更换退役寿命终结。

- 身份采集要求：实际全寿命仓库搬运及重复支承资产
- 流属性/单位：Count / Item(s)
- 数量规则：sum_full_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需真实资产范围事件已观察全部使用加有来源剩余相容驱动等价不确定性敏感性，不设寿命或每拼板新支承系数。

#### freight

实际单电路或拼板含收到工艺边测试券包装随货支承；货物范围独立于净板面积铜重。

- 身份采集要求：实际收到电路形式的唯一装载区段运输
- 流属性/单位：Mass * Length / t*km
- 数量规则：sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据需求：需真实包装质量单板拼板成员件数EACH/TOTAL非货物皮重距离换算各装载区段份额空返覆盖，不默认仅净板载荷。

#### unused_supply_return

仅总输入口径下真实外送未耗服务用品。仅耗用输入省去该交换。电路商品退回继承包装材料是非交换商品记录。

- 身份采集要求：实际配对可用未耗独立供应外送退回
- 流属性/单位：Mass / kg
- 数量规则：仅总输入下实际配对未耗外送质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需同范围供应身份原生量实际可用接收交接非期末证明，不以继承铜处理干燥剂退回抵无关输入。

#### usable_material_export

仅实际有用材料外送且有真实等级状态接收，库存废物互斥。不推定铜回收或通用回收避免生产抵扣。

- 身份采集要求：实际独立接收可用服务材料外送
- 流属性/单位：Mass / kg
- 数量规则：实际互斥可用外送质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实可用材料身份原生质量组成内容物及接收互斥成员，收集本身不证明回收产品。

#### whole_board_panel_waste

仅实际丢弃收到单板拼板，含属成员的工艺边测试券玻纤树脂铜镀层处理阻焊内容物。组成不再相加。内含原始商品损失服务外一次，实际接收处理此处一次。

- 身份采集要求：实际拒收整供货板或拼板及保留组成废物
- 流属性/单位：Mass / kg
- 数量规则：实际整收到状态交接净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际丢弃决定设计批号拼板成员整股质量保留内容物及接收处理；划伤或文件问题不证明整拼板废物。

#### separate_fragment_waste

仅真实独立交接碎片工艺边测试券且有原谱系和整板拼板排除时使用，不推定批发分板分离。铜玻纤树脂阻焊视图仅解释，除非另有真实出口。

- 身份采集要求：实际独立交接电路碎片或分离材料废物
- 流属性/单位：Mass / kg
- 数量规则：实际互斥独立碎片材料质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实碎片母体成员材质原生净质量保留组成原因接收，不假定碎片皆铜废料或空气玻纤。

#### separate_pack_waste

实际独立包装记录保留残留水分流体，与整供货包其他出口互斥，不自动开包重装或包装抵扣。

本卡为独立身份分支`separate_pack_waste_paper_pack`; `separate_pack_waste_metal_pack`; `separate_pack_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际单独交接电路包装废物及残留
- 流属性/单位：Mass / kg
- 数量规则：实际独立包装接收质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际包装材质净皮重受污质量残留原生单位及接收分类处理，不推定干燥袋干燥剂数量。

#### mixed_capture_waste

仅真实混合清理基材及捕集粉尘处理流体水分在一股物流内；捕集材料不是直接物种释放或额外整股。

- 身份采集要求：实际含捕集电路相关材料的废抹布吸收材料滤材
- 流属性/单位：Mass / kg
- 数量规则：实际混合捕集接收质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实基材及捕集保留组成独立原生单位基准方法来源取样时点事故接收，不设默认粉尘比例。

#### contained_liquid

实际独立收集服务液体有原生水用品固体流体组成，不推定制造蚀刻液或冲板水。受控接收交接不是直接排口。

- 身份采集要求：实际受控批发卫生或事故液体交接
- 流属性/单位：Mass / kg
- 数量规则：实际相容受控液体质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实收集净量换算时相容密度温度混入状态保留排除接收处理，不设水中铜默认。

#### direct_species_release

仅独立有证据批发作业释放；铜树脂玻纤存在划伤氧化库存差不能提供物种环境或零值。

- 身份采集要求：实际已识别物种颗粒释放至有证据环境
- 流属性/单位：Mass / kg
- 数量规则：实际相容实测或有依据物种质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：需物种颗粒真实环境实测量或适用原生活动系数及必要组成去向来源捕集受控排除，不用PCB制造系数。

## 9. 验证规则

| rule_id | Rule |
| --- | --- |
| reference_gate | 核查输出名称关联计数真实批发所有权企业最终来源门槛撤销，N>0；未完成拒收资源保留。 |
| original_gate | 须完整真实成品双层未装件单拼板工艺边测试券包装来源，不用原覆铜板装件多层替代；原生直接或完整正值全部末端驱动含期末其他有用退回损失及互斥阶段损失覆盖在外一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| copper_geometry | 核查平面表面面积轮廓开孔板拼板工艺边测试券件数质量成员、真实保留铜图形覆盖镀铜重叠原生密度；无满铜蚀刻后或通用处理FR4配方。 |
| physical_resources | 不隐藏批发测试烘烤干燥分板装件焊接清洗重装使用气候路线。全使用者寿命资产服务商接收排除，总供应加退回或仅耗用省退回及唯一装载区段记录份额在SUM内/N一次。 |
| actual_fate | 整板拼板碎片包装捕集液体组成视图非加和，有真实接收及物种颗粒环境原生系数证据。不从氧化划伤库存材质存在推废金属空气玻纤VOC回收抵扣零。 |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 每最终接收批次前景自营批发服务附加清单 |
| downstream_use | 关联一次相容完整原始成品未装元件印制电路门槛需求损失及真实交接系统 |
| allowed_use | 有完整原生记录的真实原供方单拼板双层刚性FR4未装件路线 |
| excluded_use | 独立完整PCB足迹原覆铜板装件柔性多层路线、制造加工消费者使用或未复核批发测试烘烤分板装配重装 |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; design_revision; batch_id; passport_or_release_record; unpopulated_evidence; two_conductive_layer_evidence; rigid_FR4_material_record; actual_copper_pattern_record; through_hole_plating_record; surface_finish_identity; soldermask_if_actual; legend_if_actual; supplier_single_or_panel_state; panel_board_rails_coupon_membership; original_pack_state; board_count; panel_count; net_board_area; net_board_mass; whole_panel_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | 真实身份范围原生量平面表面图形镀铜拼板成员证据、原始完整来源损失阶段覆盖、全使用者资产剩余不确定性运输接收排除 |
| update_trigger | 真实设计材料层处理拼板成员包装、批发作业来源分配损失寿命服务商承运接收物种换算证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| eurocircuits-pool | literature | https://www.eurocircuits.com/services/standard-pool/ | 定性区分裸板装配供货单电路拼板FR4及层铜箔处理阻焊字符选项，不给数值菜单默认配方测试监管声明。 |
| eurocircuits-quality | literature | https://www.eurocircuits.com/technical-guidelines/quality/during-production/ | 实际材料批号作业放行测量所选处理追踪问题。来源明确示例为多层且非每步适用单双面板；不强制批发测试或厂家通过系数。 |
