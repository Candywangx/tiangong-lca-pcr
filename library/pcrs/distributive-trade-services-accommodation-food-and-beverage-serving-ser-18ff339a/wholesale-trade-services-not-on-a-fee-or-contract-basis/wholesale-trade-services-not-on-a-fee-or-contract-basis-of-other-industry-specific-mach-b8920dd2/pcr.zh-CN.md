---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-other-industry-specific-mach-b8920dd2
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原厂充脂完整新品台式电动商用绞肉机自营批发服务

## 1. 范围与适用性

实际新品完整台式电动商用绞肉机自营企业批发，有不锈钢外壳原厂充脂传动及原供方SKU电气配置物料运输装配包装状态。完整指实际供货套件，不是假想已装调食品可用设备。真实机头盘推料棒刀孔板线附件材质须记录；不锈钢外壳不等全不锈钢。排除家用散件二手翻新机收费代理零售租赁，不默认批发通电绞肉测试清洗消毒磨刀补脂装配调试使用。真实额外作业须路线复核。厂家定性示例支持材质附件电气脂及净运输覆盖问题，不提供数值额定产能重量寿命NSF-UL食品安全声明。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-other-industry-specific-mach-b8920dd2 |
| classification_refs | CPC 3.0:61088较窄范围；商品445内44516 |
| covered_products | 实际新完整台式电动商用绞肉机原SKU套件批发服务，含不锈钢外壳原厂传动脂 |
| excluded_products | 家用二手翻新散件收费代理零售租赁制造批发通电绞肉测试清洗消毒磨刀补脂调试使用路线 |
| representative_product | 真实型号序列电压频率相数及包含时线、机头盘推料棒刀孔板附件物料收到装配原脂包装状态 |
| production_route | 真实完整原厂充脂放行 -> 自有批发收货常温存放电动搬运 -> 撤销后真实最终企业接收 |
| market_state | 已完成批发服务，全部交易机部件继承脂包装为独立关联非交换商品，非仓库资产服务润滑剂 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 声明新品完整原厂充脂台式电动商用绞肉机实际完成自有转售企业批次 |
| How much | 1 Item(s) |
| How well | 真实所有权转售最终企业买方门槛凭据撤销及完整套件电气物料脂净包装状态，不强制通电食品加工测试 |
| How long or cycle | 实际原厂放行收货存放发出接收撤销时点及原生时长时区来源库存计量全资产期间，无统一存放寿命 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的原厂充脂完整新品台式电动商用绞肉机自营批发批次 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; model; serial_or_lot; new_complete_commercial_evidence; actual_BOM_record; benchtop_configuration; stainless_housing_evidence; voltage_phase_variant; cord_plug_included_evidence; pan_stomper_included_scope; factory_grease_state_source; transmission_seal_condition; supplier_shipping_assembly_state; attached_detached_membership; base_head_pan_overlap_exclusion; net_ship_pack_coverage; original_supplier_presentation; machine_count; net_complete_machine_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| completed_service | accepted_service | Count | Item(s) | 撤销后唯一真实最终自有转售企业接收，N>0；非机器机头孔板数额定绞肉产能价格。 |
| whole_part_net_ship | cp_grinders; cp_freight; cp_outlets | Mass | kg | 真实完整SKU电气物料运输状态，整机与互斥底座机头盘附件净运输包装范围同方法，不用发布通用重或整机已含部件再加。 |
| native_grease_components | cp_grinders; cp_outlets; cp_environment | Mass | kg | 原厂脂继承非服务输入释放。各保留脂处理流体水分组成物种有原生单位基准方法状态来源取样时点密度温度单位；整股非加和。 |
| net_supply_share | cp_supplies | Mass | kg | 实际材料净收货排容器皮重并匹配库存退回范围；各分子分母驱动有独立单位证据且分母正相容。 |
| unique_packed_freight | freight | Mass * Length | t*km | 货物含供方套件保留内容物包装支承一次；EACH实际件数一次TOTAL不变，仅真非货物皮重，各装载区段份额在SUM内后N一次。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 新品完整台式电动商用绞肉机，真实不锈钢外壳原厂充脂传动、原供方SKU电气配置物料运输装配包装，实际随附机头盘推料棒线附件。 |
| starting_condition_role | 批发附加的实际完整原厂放行商品，不是仅底座原钢电机组合或调试接触食物设备。 |
| product_classification_scope | CPC 3.0:61088较窄商用绞肉机批发服务；实际商品445内44516，不是家用厨电或完整食品加工服务。 |
| recursive_input_rule | 购入转售机部件继承脂包装及商品退回为非交换商品库存通量，不是当前仓库资产服务润滑钢电机消耗或另一批发服务。 |
| upstream_dataset_requirement |关联实际完整材料成形处理电机电气电子组成齿轮轴轴承装配原厂充脂放行原包装，匹配真实完整SKU运输状态，含全部损失商品内含上游在服务外一次。仅原钢电机不足。完整链使用前量化真实原始分配需求原生换算基线新增阶段损失覆盖互斥损失责任。 任何实际缺失阶段及新增商品需求，在完整链使用前必须在此服务外实际集成至关联商品系统且仅一次；仅有记录或待办计划不够。须有已完成集成状态、实际集成数据集关联、时点时区、来源、互斥责任方、已集成原生数量基准以及覆盖和唯一计入证据。集成未完成或未核实均阻断完整链使用。 |
| disclosure | 真实电气配置线包含、材质物料套件装分离状态、完整净与底座机头盘运输皮重范围、脂保留状态时间状态、所有权最终买方门槛来源全部出口需求覆盖缺口。不设统一重量产能功率寿命安全食品合规声明。 |

### 边界规则

| rule_id | Rule |
| --- | --- |
| merchant_scope | 实际文件包装状态收货普通常温存放电动搬运及最终真实企业交接。不规定通电绞肉测试清洗消毒磨刀排补脂装配调试维修重装使用湿度介入；外包额外作业须扩展复核。 |
| complete_commodity_outside | 真实完整机部件脂处理包装全部上游含内含损失商品留在服务交换外。完整链使用前须量化相容原完整SKU需求及互斥一次原生阶段损失覆盖关联；真实批发收集接收处理此处一次。 |
| BOM_grease_gate | 不锈钢外壳不是全不锈钢；真实镀锡钢塑料橡胶线电气配置及包含可选附件须记录。完整收到套件可有预期分离部件，不是缺件。原厂脂是继承受控商品，非新服务供应或默认释放；整机底座机头盘不重复。 |
| period_reject | 声明真实群组库存计量来源资产阶段时区。未完成取消撤销拒收保留资源及期末退回有用实际损失出口，无合格接收不计最终N。未知库存损伤密封变化不自动为废弃损失物种零。 |
| fate_ownership | 整机实际独立部件包装混合捕集单收游离脂流体受控卫生液直接物种有互斥成员原生内容物记录真实接收环境证据。直接服务商承运接收公用工程资产运输处理唯一归属。所售机非仓库资产，不默认排脂金属回收避免生产抵扣。 |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| commercial_grinder_wholesale | 原厂充脂完整商用绞肉机自营批发 | required | 实际限定完整新品自有转售企业批次 | foreground | accepted_service |

批次群组批发服务将实际收货状态存放电动搬运条件性卫生事故换批交接接收事件关联真实期间全部使用者。未完成拒收资源保留。商品制造原厂充脂电机能量转换或绞肉得率均非批发作业。

### 过程：原厂充脂完整商用绞肉机自营批发 (`commercial_grinder_wholesale`)

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

范围证据需求：需真实计量kWh区间全部使用者原生因果驱动闲置未完成资源服务商排除，不用电机HP系数或每机功率。

###### 实际液态处理自来水供给 (`site_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：实际相容actual_utility_quantity换算为m3*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需真实供方计量体积卫生事件期间换算全部使用者份额接收覆盖，不由料盘容量推洗水。

###### 实际独立记录的合成洗涤剂投入 (`service_consumables_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：所选实际总供应或耗用净服务材料质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需真实材质组成净库存收货EACH/TOTAL件数单件质量密度及匹配未耗退回，不设脂补充配方或抹布比例。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的原厂充脂完整新品台式电动商用绞肉机自营批发批次 (`accepted_service`)

一个真实撤销后最终自有转售企业接收批次，附实际SKU电气配置原完整物料运输装配包装原厂脂随附机头盘线附件状态。计数为服务，不是机器件数额定产能或kg。

- 选定流：已完成的原厂充脂完整新品台式电动商用绞肉机自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grinders`

范围证据需求：需真实批发所有权转售企业买方门槛凭据撤销唯一最终接收及完整套件数电压相数线成员净包装状态时间，不固定每批机器数。

##### 废物流

###### 废弃完整出厂涂脂商用绞肉机套件 (`whole_machine_waste_atomic_case`)

仅在实际独立记录确认“废弃完整出厂涂脂商用绞肉机套件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_machine_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整出厂涂脂商用绞肉机套件
- 流属性/单位：Mass / kg
- 数量规则：实际整收到套件接收净物流质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际丢弃决定序列物料净交接皮重保留脂机头盘包装成员接收处理，不因划伤文件不全整废。

###### 实际单独收集的纸类包装废物 (`pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：实际互斥包装接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实包装材质原生净皮重污染内容物接收处理，不用任意发布底座机头运输质量差。


###### 实际单独收集的金属包装废物 (`pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：实际互斥包装接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实包装材质原生净皮重污染内容物接收处理，不用任意发布底座机头运输质量差。


###### 实际单独收集的塑料包装废物 (`pack_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：实际互斥包装接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实包装材质原生净皮重污染内容物接收处理，不用任意发布底座机头运输质量差。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule |
| --- | --- |
| causal_resource_assignment | 用真实事件批次追踪，否则有支持物理搬运空间时间因果驱动覆盖全部使用者期间含闲置未完成拒收。各documented_share=numerator_driver/denominator_driver须相容原生驱动基准且分母正值。不默认机器数铭牌功率产能售价分配。 |
| original_source_assignment | 服务外真实直接来源追踪，或仅正值完整相容全部末端记录含期末退回其他有用出口真实损失时用assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，每项原生数量单位基准方法状态来源关联责任。commodity_source_gate_demand=assigned_source_gate_quantity采用原完整SKU物料脂运输包装门槛含有证据状态变化份额。最终发出加废弃非来源需求。原生基线新增损失量实际缺阶段换算互斥覆盖责任一次，未知损失不置零。 任何实际缺失阶段及新增商品需求，在完整链使用前必须在此服务外实际集成至关联商品系统且仅一次；仅有记录或待办计划不够。须有已完成集成状态、实际集成数据集关联、时点时区、来源、互斥责任方、已集成原生数量基准以及覆盖和唯一计入证据。集成未完成或未核实均阻断完整链使用。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| net_supply_return | S=opening+net_receipts-closing含留存回收，各材料均净量排容器皮重。总S/N并单列匹配可用未耗外送输出，或仅耗用(S-usable_outward_return)/N且省去配对退回交换。仅同范围独立供应，不抵继承原厂脂机器部件包装或无关库存，不二次抵扣。 |
| asset_full_lifetime | 完整制造维护更换退役寿命终结按相容job_driver/lifetime_all_user_driver，寿命含已观察全部使用加有来源剩余服务、全部使用者期间原生等价不确定性敏感性更新。唯一服务商承运责任，求和后/N一次。交易机产品保修非设施资产寿命。 |
| freight_and_receiver | 各唯一装载区段本documented_service_share=numerator_driver/denominator_driver放SUM内后/N一次。保留真实包装SKU部件脂附件支承成员，相容EACH乘件数一次或TOTAL不变，仅扣非货物承运皮重。真实整机部件脂捕集液体视图接收运输处理互斥一次，无自动抵扣。 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_grinders | commercial_grinder_wholesale | 本过程真实交换、事件及非交换商品审计量 | 实际完整绞肉机SKU电气配置、物料润滑脂所有权库存来源记录 | machine_count; machine_count_unit; machine_count_basis; machine_count_method; machine_count_state; machine_count_source; machine_count_sample_time; package_count; package_count_unit; package_count_basis; package_count_method; package_count_state; package_count_source; package_count_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; net_complete_machine_mass; net_complete_machine_mass_unit; net_complete_machine_mass_basis; net_complete_machine_mass_method; net_complete_machine_mass_state; net_complete_machine_mass_source; net_complete_machine_mass_sample_time; base_net_mass; base_net_mass_unit; base_net_mass_basis; base_net_mass_method; base_net_mass_state; base_net_mass_source; base_net_mass_sample_time; head_net_mass; head_net_mass_unit; head_net_mass_basis; head_net_mass_method; head_net_mass_state; head_net_mass_source; head_net_mass_sample_time; pan_net_mass; pan_net_mass_unit; pan_net_mass_basis; pan_net_mass_method; pan_net_mass_state; pan_net_mass_source; pan_net_mass_sample_time; accessory_mass; accessory_mass_unit; accessory_mass_basis; accessory_mass_method; accessory_mass_state; accessory_mass_source; accessory_mass_sample_time; shipping_mass; shipping_mass_unit; shipping_mass_basis; shipping_mass_method; shipping_mass_state; shipping_mass_source; shipping_mass_sample_time; original_pack_tare; original_pack_tare_unit; original_pack_tare_basis; original_pack_tare_method; original_pack_tare_state; original_pack_tare_source; original_pack_tare_sample_time; whole_packed_cargo_mass; whole_packed_cargo_mass_unit; whole_packed_cargo_mass_basis; whole_packed_cargo_mass_method; whole_packed_cargo_mass_state; whole_packed_cargo_mass_source; whole_packed_cargo_mass_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; factory_grease_quantity; factory_grease_quantity_unit; factory_grease_quantity_basis; factory_grease_quantity_method; factory_grease_quantity_state; factory_grease_quantity_source; factory_grease_quantity_sample_time; retained_finish; retained_finish_unit; retained_finish_basis; retained_finish_method; retained_finish_state; retained_finish_source; retained_finish_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; nameplate_voltage; nameplate_voltage_unit; nameplate_voltage_basis; nameplate_voltage_method; nameplate_voltage_state; nameplate_voltage_source; nameplate_voltage_sample_time; nameplate_frequency; nameplate_frequency_unit; nameplate_frequency_basis; nameplate_frequency_method; nameplate_frequency_state; nameplate_frequency_source; nameplate_frequency_sample_time; phase_count; phase_count_unit; phase_count_basis; phase_count_method; phase_count_state; phase_count_source; phase_count_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; actual_loss_quantity; actual_loss_quantity_unit; actual_loss_quantity_basis; actual_loss_quantity_method; actual_loss_quantity_state; actual_loss_quantity_source; actual_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; target_exit_driver; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; model; serial_or_lot; new_complete_commercial_evidence; benchtop_configuration; actual_BOM_record; stainless_housing_evidence; tinned_part_identity; knife_plate_identity; pan_stomper_included_scope; cord_plug_included_evidence; voltage_phase_variant; factory_grease_state_source; transmission_seal_condition; supplier_shipping_assembly_state; attached_detached_membership; base_head_pan_overlap_exclusion; net_ship_pack_coverage; component_membership; original_supplier_presentation; original_pack_state; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; source_gate_allocation_source; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; integrated_additional_stage_quantity; integrated_additional_stage_quantity_unit; integrated_additional_stage_quantity_basis; integrated_additional_stage_quantity_method; integrated_additional_stage_quantity_state; integrated_additional_stage_quantity_source; integrated_additional_stage_quantity_sample_time; actual_missing_stage_ids; additional_stage_integration_status; additional_stage_integration_dataset_link; additional_stage_integration_time; additional_stage_integration_time_zone; additional_stage_integration_source; additional_stage_integration_owner; additional_stage_integration_coverage; additional_stage_integration_once_evidence; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 确认真实批发购入转售企业买方最终接收门槛凭据撤销；收货本身不证明已完成自有转售。追踪型号序列电压频率相数及实际线插是否随附、机头盘刀孔板推料棒及附件成员、供方成品运输装配原包装。不锈钢外壳不使内部镀锡件塑料橡胶均变不锈钢。优先实测完整机净质量；仅同SKU状态方法且互斥末级组成时才加底座机头盘部件，不加已含于整机的部件。运输质量不是净质量或各材质质量。实际原厂脂状态数量来源留在商品内；密封状态本身不是释放。各量有原生单位基准方法状态来源取样时点。来源门槛用真实目标直接关联，或正值完整相容末端驱动含期末退回其他有用出口实际损失，每项数量单位基准方法状态来源关联责任及已有覆盖。 任何实际缺失阶段及新增商品需求，在完整链使用前必须在此服务外实际集成至关联商品系统且仅一次；仅有记录或待办计划不够。须有已完成集成状态、实际集成数据集关联、时点时区、来源、互斥责任方、已集成原生数量基准以及覆盖和唯一计入证据。集成未完成或未核实均阻断完整链使用。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 实际原生数量单位及有来源相容换算，日期时区保留 | 每真实事件及库存计量资产区间 | 真实来源收发接收与跨期间保留资源 | 本真实过程场址及明确归属交接，涵盖全部相关使用者 | 每参考流 | 原始凭据校准方法原生单位基准状态来源取样时点、互斥责任及不确定性；未知不置零 |
| cp_supplies | commercial_grinder_wholesale | 本过程真实交换、事件及非交换商品审计量 | 实际服务净用品及匹配未耗退回台账 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; material_identity; net_material_receipt_excluding_container_tare; standalone_stock_scope; matched_return_ids; unused_return_convention; inherited_grease_component_exclusion; owner; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 仅使用时记录真实卫生用品抹布吸收材料滤材额外外层防护，供应收货是排除容器皮重的实际净材料。原厂传动脂继承处理部件包装是商品，不是润滑卫生供应。保留原生EACH/TOTAL组成件数质量密度证据；核对期初加净收货减期末含留存回收。总供应并单列同库存可用未耗外送退回，或仅耗用供应且省去配对交换，不给无关抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际原生数量单位及有来源相容换算，日期时区保留 | 每真实事件及库存计量资产区间 | 真实来源收发接收与跨期间保留资源 | 本真实过程场址及明确归属交接，涵盖全部相关使用者 | 每参考流 | 原始凭据校准方法原生单位基准状态来源取样时点、互斥责任及不确定性；未知不置零 |
| cp_utilities | commercial_grinder_wholesale | 本过程真实交换、事件及非交换商品审计量 | 实际仓库电动搬运及条件性场址卫生计量 | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; provider_carrier_overlap; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采集真实仓库搬运计量区间及全部使用者物理分子分母驱动，区分实测分配公用工程与服务商承运重叠。不通电绞肉电机、不磨肉测试调试、不以铭牌功率乘小时推需求；不含食物清洗消毒或冲洗产品。真实额外作业须路线复核。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际原生数量单位及有来源相容换算，日期时区保留 | 每真实事件及库存计量资产区间 | 真实来源收发接收与跨期间保留资源 | 本真实过程场址及明确归属交接，涵盖全部相关使用者 | 每参考流 | 原始凭据校准方法原生单位基准状态来源取样时点、互斥责任及不确定性；未知不置零 |
| cp_provider | commercial_grinder_wholesale | 本过程真实交换、事件及非交换商品审计量 | 实际物理限定承包批发服务包 | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | 取得真实物理服务包等价期间原生份额操作数及所含材料公用工程资产运输处理覆盖。承包通电测试绞肉清洗磨刀补脂调试装配仍是真实额外作业，不能隐于普通物流。不把设备产能电气额定值费用当服务包量，除非有真实物理等价。 | 实际原生数量单位及有来源相容换算，日期时区保留 | 每真实事件及库存计量资产区间 | 真实来源收发接收与跨期间保留资源 | 本真实过程场址及明确归属交接，涵盖全部相关使用者 | 每参考流 | 原始凭据校准方法原生单位基准状态来源取样时点、互斥责任及不确定性；未知不置零 |
| cp_assets | commercial_grinder_wholesale | 本过程真实交换、事件及非交换商品审计量 | 独立于商品的仓库搬运重复支承全寿命记录 | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; remaining_life_source; observed_boundary; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; traded_grinder_exclusion; period_id; time_zone; time_source | 识别真实建筑货架电动搬运支承资产，不是所售绞肉机。完整制造实际维护更换退役寿命终结、相容原生单位等价的全部使用者已观察使用加有来源剩余服务、全部使用者期间含闲置未完成拒收。记录不确定性敏感性更新及唯一服务商承运责任。产品保修原厂充脂或客户预期绞肉机寿命不是仓库资产寿命。 | 实际原生数量单位及有来源相容换算，日期时区保留 | 每真实事件及库存计量资产区间 | 真实来源收发接收与跨期间保留资源 | 本真实过程场址及明确归属交接，涵盖全部相关使用者 | 每参考流 | 原始凭据校准方法原生单位基准状态来源取样时点、互斥责任及不确定性；未知不置零 |
| cp_freight | commercial_grinder_wholesale | 本过程真实交换、事件及非交换商品审计量 | 唯一实际包装设备装载区段运输 | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; complete_machine_kit_mass; complete_machine_kit_mass_unit; complete_machine_kit_mass_basis; complete_machine_kit_mass_method; complete_machine_kit_mass_state; complete_machine_kit_mass_source; complete_machine_kit_mass_sample_time; included_accessory_mass; included_accessory_mass_unit; included_accessory_mass_basis; included_accessory_mass_method; included_accessory_mass_state; included_accessory_mass_source; included_accessory_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_SKU_shipping_assembly_BOM; base_head_pan_overlap_exclusion; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | 采用实际运输完整SKU套件装配状态，包装质量含供方机头盘线附件脂原新增包装随货支承。整机已含部件，不再加底座机头盘或脂。EACH相容单件质量乘实际件数一次，TOTAL不变；仅扣真实非货物承运车辆容器皮重。每唯一装载区段本原生记录份额在工作量求和内后/N一次，记录距离质量工作换算空返服务商接收覆盖。 | 实际原生数量单位及有来源相容换算，日期时区保留 | 每真实事件及库存计量资产区间 | 真实来源收发接收与跨期间保留资源 | 本真实过程场址及明确归属交接，涵盖全部相关使用者 | 每参考流 | 原始凭据校准方法原生单位基准状态来源取样时点、互斥责任及不确定性；未知不置零 |
| cp_outlets | commercial_grinder_wholesale | 本过程真实交换、事件及非交换商品审计量 | 互斥整机部件包装捕集废物游离脂流体卫生液体出口 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_grease; retained_grease_unit; retained_grease_basis; retained_grease_method; retained_grease_state; retained_grease_source; retained_grease_sample_time; retained_finish; retained_finish_unit; retained_finish_basis; retained_finish_method; retained_finish_state; retained_finish_source; retained_finish_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; transfer_id; parent_machine_serials; part_ids; BOM_membership; whole_machine_exclusion; separate_part_exclusion; separate_pack_exclusion; mixed_capture_exclusion; free_grease_fluid_exclusion; hygiene_liquid_exclusion; component_identity; retained_content_fate; receiver_id; receiver_classification; treatment_owner; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 记录真实损伤、缺件与预期分离套件状态、密封漏脂及实际决定接收；划伤库存差不推整废脂释放或零。母序列物料谱系区分含保留脂处理部件整机、实际独立部件包装、混合捕集、单收脂流体及卫生废水。各组成保留脂流体水分有自身单位基准方法状态来源取样时点，不默认整股单位。库存留存非外送。实际可用退回材料外送废物分类接收运输处理一次，不自动排脂食物污染金属回收或抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 实际原生数量单位及有来源相容换算，日期时区保留 | 每真实事件及库存计量资产区间 | 真实来源收发接收与跨期间保留资源 | 本真实过程场址及明确归属交接，涵盖全部相关使用者 | 每参考流 | 原始凭据校准方法原生单位基准状态来源取样时点、互斥责任及不确定性；未知不置零 |
| cp_environment | commercial_grinder_wholesale | 本过程真实交换、事件及非交换商品审计量 | 实际物种颗粒及接收环境释放证据 | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | 须实际物种颗粒身份环境、实测释放或适用原生活动系数，且只加系数所需组成去向比例。完整物种系数已覆盖比例时不再乘。脂存在气味金属锡处理或未知库存密封变化不是排放或零。排除捕集保留受控部分。不将绞肉机运行磨损食物产品排放或原厂充填系数作批发释放。 | 实际原生数量单位及有来源相容换算，日期时区保留 | 每真实事件及库存计量资产区间 | 真实来源收发接收与跨期间保留资源 | 本真实过程场址及明确归属交接，涵盖全部相关使用者 | 每参考流 | 原始凭据校准方法原生单位基准状态来源取样时点、互斥责任及不确定性；未知不置零 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_grinders | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals，须真实批发所有权转售企业买方最终门槛凭据撤销证据。仅N>0归一化。取消未完成拒收撤销资源留实际期间群组，不虚构接收。 | 实际所有权买方最终接收撤销时间记录 | 唯一完成服务分母N |  |
| complete_machine_mass | cp_grinders | 优先实际实测net_complete_machine_mass。base_net_mass+head_net_mass+pan_net_mass+accessory_mass相加须同实际型号配置运输状态且互斥包含末级成员，不加另一整股已含部件；数量件数原生单位有来源。运输质量非净量，发布底座机头盘值非通用套件重。线包含预期分离套件按实际电压物料证据，不自动缺件。 | 实际SKU物料电气运输状态原生整部件净运输包装测量 | 审计完整套件互斥组成质量包装 |  |
| retained_factory_grease | cp_grinders; cp_outlets | factory_grease_quantity留于关联原始商品及实际整机部件保留内容物。不作服务润滑剂、不抵无关服务供应、不由密封库存变化推漏出量。整股组成视图非加和。实际单收游离脂流体区别保留捕集卫生液，各有原生数量单位基准方法状态来源取样时点，仅需要时用相容密度温度换算。 | 真实原厂充填来源量保留成员及独立收集接收证据 | 互斥保留与实际游离捕集脂流体审计 |  |
| source_gate_demand | cp_grinders | 真实直接来源追踪，或正值完整相容全部末端原生记录含期末其他有用退回真实损失时assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。commodity_source_gate_demand=assigned_source_gate_quantity采用完整原SKU脂运输包装门槛含有证据状态变化份额，不用最终发出质量加废弃。核对原输入互斥出口baseline_quantity/additional_stage_quantity/loss_adjustment_quantity原生换算实际缺阶段损失覆盖责任，服务外一次。未知阻断完整链就绪不置零。 任何实际缺失阶段及新增商品需求，在完整链使用前必须在此服务外实际集成至关联商品系统且仅一次；仅有记录或待办计划不够。须有已完成集成状态、实际集成数据集关联、时点时区、来源、互斥责任方、已集成原生数量基准以及覆盖和唯一计入证据。集成未完成或未核实均阻断完整链使用。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 直接追踪或完整全部末端驱动原生来源门槛基线新增损失证据 | 量化关联完整原始商品需求损失外部一次 |  |
| utility_allocation | cp_utilities | documented_share=numerator_driver/denominator_driver，分母正且全部使用者原生因果单位相容。原生换算区间覆盖核对后utility_per_service=sum(actual_utility_quantity*documented_share)/N。不以电机铭牌产能乘使用或洗机测试推需求。 | 原生计量量区间换算及各真实分子分母驱动 | 每服务真实归属kWh及条件性水m3 |  |
| NET_supply_stocks | cp_supplies | S=opening+net_receipts-closing含留存回收；net_receipts为实际材料净量排供应容器皮重。总S/N并单列配对未耗外送输出，或耗用(S-usable_outward_return)/N且省配对退回交换。EACH相容件数一次TOTAL不变，有来源单件密度温度换算，documented_share=numerator_driver/denominator_driver仅匹配正值驱动基准。无继承脂部件抵扣。 | 实际净材料库存EACH-TOTAL换算匹配退回份额驱动 | 互斥真实供应输入退回口径 |  |
| provider_package_share | cp_provider | provider_per_service=sum(actual_native_package_quantity*documented_share)/N，真实physical_equivalence及互斥覆盖作业资源。documented_share=numerator_driver/denominator_driver有原生单位基准方法状态来源时点且分母正值相容。费用额定绞肉产能非等价证据。 | 真实服务包等价原生驱动量完整覆盖矩阵 | 真实互斥服务商物理服务 |  |
| asset_lifetime_share | cp_assets | 仅原生等价相容且剩余有来源后lifetime_all_user_driver=observed_all_user_driver+remaining_driver。job_driver/lifetime_all_user_driver用于完整制造维护更换退役寿命终结全部使用者期间不确定性敏感性更新，求和后/N一次。排真实服务商承运已含资产；交易绞肉机产品保修非当前资产寿命。 | 真实全寿命事件作业观察剩余寿命驱动原生等价 | 真实全部使用者完整寿命服务资产等价量 |  |
| unique_freight_sum | cp_freight | 货物保留实际完整SKU套件脂部件附件包装随货支承一次。相容EACH质量*actual_count一次或TOTAL不变，仅扣实际非货物承运皮重。原生载荷距离换算actual_transport_work，各documented_service_share=numerator_driver/denominator_driver原生相容正值。freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N，各份额在SUM内部后N一次；空返服务商接收范围互斥。 | 实际唯一装载区段货物EACH-TOTAL件数皮重距离工作换算原生份额驱动 | 每服务实际包装运输t*km |  |
| actual_receiver_outlets | cp_outlets | 经支持EACH/TOTAL净皮重密度换算后outlet_per_service=actual_compatible_native_transfer_quantity/N。整机含保留脂处理部件；真实独立部件包装混合捕集单收脂流体卫生液及解释组成互斥。留存库存非外送，仅耗用供应省配对退回交换。实际接收分类运输处理唯一责任，无默认排脂回收替代抵扣。 | 实际交接原生内容物成员母体接收处理记录 | 互斥实际产品废物及保留内容物交接 |  |
| actual_species_release | cp_environment | release_mass=measured_species_mass或相容activity*applicable_species_factor，仅加系数所需composition/release_fraction。完整物种系数已覆盖比例不再乘。真实环境原生单位方法来源样品状态时点捕集受控排除后/N一次。不从脂存在气味金属锡处理未知密封库存或电机使用系数给默认。 | 实际独立物种环境实测量或有依据原生系数链 | 每服务真实互斥物种释放 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_complete_SKU | cp_grinders | 真实SKU电气线物料机头盘推料棒脂运输状态整部件测量，不用厂家全系列或全不锈钢假设。 | 真实放行物料序列配置原生测量 |
| complete_chain | all | 完整原始成品充脂门槛阶段损失来源分配及全部末端原生覆盖在外一次，全寿命资产全部使用者已观察有来源剩余。缺口阻断完整链就绪。 | 原始来源责任期间不确定性复核 |
| qualified_manufacturer | hobart-grinders; hobart-4822-f7515 | 2023厂家规格为限定示例，详细条件性线物料净运输证据，不统一数值额定重量寿命或NSF-UL食品安全使用声明。 | 真实厂家正文PDF及真实目标批号记录 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| site_water | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`site_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| service_consumables | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`service_consumables`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_protection | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_protection`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_package | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_package`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| service_assets | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`service_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_supply_return | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`unused_supply_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| usable_material_export | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`usable_material_export`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| whole_machine_waste | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`whole_machine_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`whole_machine_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| separate_part_waste | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`separate_part_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| pack_waste | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`pack_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| mixed_capture_waste | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`mixed_capture_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| free_grease_fluid_waste | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`free_grease_fluid_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| hygiene_liquid_waste | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`hygiene_liquid_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species_release | commercial_grinder_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species_release`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

仅实际归属仓库搬运区间，不给所售电机通电绞肉测试调试或铭牌功率乘时长推需求。

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

范围证据需求：需真实计量kWh区间全部使用者原生因果驱动闲置未完成资源服务商排除，不用电机HP系数或每机功率。

#### site_water

仅条件性真实场址表面卫生供水，不是绞肉机清洗消毒肉类准备消费者使用。

本卡为独立身份分支`site_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库卫生公用供水
- 流属性/单位：Volume / m3
- 数量规则：实际相容actual_utility_quantity换算为m3*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需真实供方计量体积卫生事件期间换算全部使用者份额接收覆盖，不由料盘容量推洗水。

#### service_consumables

仅使用时计真实用品抹布吸收材料滤材，净材料排除容器皮重。原厂脂继承金属处理橡胶塑料包装属商品，不是服务润滑。

本卡为独立身份分支`service_consumables_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际批发卫生及事故捕集耗材
- 流属性/单位：Mass / kg
- 数量规则：所选实际总供应或耗用净服务材料质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需真实材质组成净库存收货EACH/TOTAL件数单件质量密度及匹配未耗退回，不设脂补充配方或抹布比例。

#### added_protection

仅实际新增外层防护，不推打开重装安装部件。继承原包装属商品；真实重复批发支承属全寿命资产。

- 身份采集要求：实际新增外层运输防护
- 流属性/单位：Mass / kg
- 数量规则：所选实际总供应或耗用净防护质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际材质净供量EACHTOTAL及退回复用责任，不默认底座机头盘各新箱或缠包重量。

#### provider_package

实际仓库搬运服务物理量明确覆盖，不隐藏通电测试绞肉清洗磨刀补脂调试服务。

- 身份采集要求：实际物理互斥承包仓储服务包
- 流属性/单位：Count / Item(s)
- 数量规则：sum(actual_native_package_quantity*documented_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需实际服务商等价作业时间原生分子分母份额及公用工程资产运输处理排除，不用费用或绞肉产能。

#### service_assets

真实建筑货架搬运重复支承独立于转售绞肉机，涵盖完整制造维护更换退役寿命终结全部使用者期间。

- 身份采集要求：实际完整寿命仓库搬运基础设施
- 流属性/单位：Count / Item(s)
- 数量规则：sum_full_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需真实资产范围作业已观察全部使用及有来源剩余原生驱动等价不确定性，产品保修密封脂不决定设施寿命。

#### freight

实际运输SKU套件净量包装支承，实际随附机头盘线附件保留脂各一次。完整套件质量已含部件不另增载荷。

- 身份采集要求：实际完整供货绞肉机套件唯一装载区段运输
- 流属性/单位：Mass * Length / t*km
- 数量规则：sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据需求：需真实型号配置装配整机与底座机头盘净运输包装覆盖、整包装载EACH/TOTAL件数非货物皮重距离换算逐记录份额空返覆盖。

#### unused_supply_return

仅总输入口径下真实未耗服务材料外送匹配同净供应库存。仅耗用输入省去退回交换。原厂脂整机退回是商品审计，不扣服务库存。

- 身份采集要求：实际匹配可用未耗独立服务供应外送退回
- 流属性/单位：Mass / kg
- 数量规则：仅总供应口径实际配对净未耗外送质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实供应身份原生净质量可用性接收交接非期末配对，不以继承脂部件抵无关供应。

#### usable_material_export

条件性有用材料交接有真实等级状态内容物接收互斥。收集本身非回收，不自动给避免生产或金属回收抵扣。

- 身份采集要求：实际独立接收可用服务材料外送
- 流属性/单位：Mass / kg
- 数量规则：实际互斥可用外送质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实材料原生质量保留脂流体处理组成接收证明，区别留存库存整废机废物流。

#### whole_machine_waste

实际整废收到配置包含保留部件脂处理及属真实成员的包装。不自动拆解排脂；商品内含损失外部一次，物理接收处理此处一次。

- 身份采集要求：实际丢弃整收到绞肉机套件及保留脂部件
- 流属性/单位：Mass / kg
- 数量规则：实际整收到套件接收净物流质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际丢弃决定序列物料净交接皮重保留脂机头盘包装成员接收处理，不因划伤文件不全整废。

#### separate_part_waste

真实独立机头底座刀孔板盘线等部件交接有母体关联并排除整机成员；部件保留脂处理不另加整股。不推定批发拆解。

- 身份采集要求：实际独立交接绞肉机部件及保留内容物废物
- 流属性/单位：Mass / kg
- 数量规则：实际互斥独立部件接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实母体部件身份材质状态而非全不锈钢、原生量保留内容物单位来源取样时点接收，不设标准部件重量。

#### pack_waste

实际独立原新增包装及保留脂液在物流内计量，不把整套件已含包装再计。不推开包重装清洁回收。

本卡为独立身份分支`pack_waste_paper_pack`; `pack_waste_metal_pack`; `pack_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际单独交接含残留包装废物
- 流属性/单位：Mass / kg
- 数量规则：实际互斥包装接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实包装材质原生净皮重污染内容物接收处理，不用任意发布底座机头运输质量差。

#### mixed_capture_waste

条件性真实基材保留脂流体碎屑水分在一股混合物流内。保留组成是部分，不另加废物或物种释放。

- 身份采集要求：实际事故捕集废抹布吸收材料滤材
- 流属性/单位：Mass / kg
- 数量规则：实际混合捕集接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需基材各保留组成原生量单位基准方法来源取样时点事故谱系接收去向，不设吸收比例。

#### free_grease_fluid_waste

仅真实独立收集漏出原厂脂流体，记录物理状态混合并与整机部件包装捕集固体保留内容物互斥。不默认排脂补脂，收集不等直接基本流释放。

- 身份采集要求：实际单独收集游离漏出脂流体接收交接
- 流属性/单位：Mass / kg
- 数量规则：实际独立收集游离脂流体净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实收集量脂身份混合、原生质量或相容体积密度温度、母事件接收处理；仅密封变化库存差不足。

#### hygiene_liquid_waste

真实独立服务卫生液有水用品脂固体组成，不假定接触肉或洗机水。区别单收游离脂保留固体；接收交接非排口。

- 身份采集要求：实际受控批发卫生废液接收交接
- 流属性/单位：Mass / kg
- 数量规则：实际相容受控卫生液净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际收集净量换算时密度温度组成来源保留排除接收处理，不设水中油COD默认。

#### direct_species_release

仅独立真实有证据批发边界释放，脂金属锡塑料存在或气味库存差不提供物种环境释放比例或零。

- 身份采集要求：实际已识别物种颗粒释放至有证据环境
- 流属性/单位：Mass / kg
- 数量规则：实际实测或有依据相容物种质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：需真实物种颗粒环境原生实测量或适用活动系数及仅必要组成去向来源捕集排除，不用绞肉机运行磨损系数。

## 9. 验证规则

| rule_id | Rule |
| --- | --- |
| actual_final_reference | 参考输出名称关联计数匹配真实自有转售企业最终门槛凭据撤销N>0及完整SKU脂物料电气包装限定，未完成拒收资源保留。 |
| complete_original_gate | 完整真实材料处理电机电子齿轮装配原厂充填放行原包装来源，非原钢电机仅底座替代。原生直接或完整正值全部末端含期末其他有用退回损失及互斥基线新增阶段损失责任在外一次。 任何实际缺失阶段及新增商品需求，在完整链使用前必须在此服务外实际集成至关联商品系统且仅一次；仅有记录或待办计划不够。须有已完成集成状态、实际集成数据集关联、时点时区、来源、互斥责任方、已集成原生数量基准以及覆盖和唯一计入证据。集成未完成或未核实均阻断完整链使用。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| no_hidden_operation | 无批发承包通电绞肉测试清洗消毒磨刀补脂调试装配使用默认，真实额外须复核。不锈钢外壳非全不锈钢，须电压线包含可选分离套件来源脂记录。 |
| native_net_resources | 核净材料收货排容器皮重真实原生分子分母单位来源正值相容，全寿命全使用者资产服务商排除，总供应加输出或仅耗用省输出、唯一装载区段份额在SUM内/N一次及整部件包装质量重叠。 |
| exclusive_grease_fates | 整机部件包装混合捕集游离脂流体卫生液物种保留内容物互斥，真实接收环境原生系数证据一次。不从脂存在气味密封变化库存差默认排脂回收金属释放零。 |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 每最终已完成商业批次前景自营批发服务附加清单 |
| downstream_use | 关联一次相容完整原厂充脂绞肉机SKU物料运输包装商品需求损失接口及真实买方交接 |
| allowed_use | 真实新完整台式商用电动绞肉机含不锈钢外壳原厂传动脂、实际电气套件来源状态记录及常温批发路线 |
| excluded_use | 独立完整机足迹仅底座家用二手翻新、电动绞肉食品服务、批发通电测试清洗补脂调试或未复核作业 |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; manufacturer; model; serial_or_lot; new_complete_commercial_evidence; actual_BOM_record; benchtop_configuration; stainless_housing_evidence; voltage_phase_variant; cord_plug_included_evidence; pan_stomper_included_scope; factory_grease_state_source; transmission_seal_condition; supplier_shipping_assembly_state; attached_detached_membership; base_head_pan_overlap_exclusion; net_ship_pack_coverage; original_supplier_presentation; machine_count; net_complete_machine_mass; original_pack_tare; source_gate_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | 真实流身份范围原生量整部件净运输包装覆盖、原始来源全部末端阶段损失责任、脂内容物去向不确定性、原生份额全寿命观察剩余服务商接收排除 |
| update_trigger | 真实SKU电气线机头盘脂物料运输包装状态、批发作业来源损失资产寿命服务商承运接收物种换算证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| hobart-grinders | literature | https://www.hobartcorp.com/products/food-prep/meat-room/choppers-grinders | 仅定性商用系列附件材质区别，不作全系列不锈钢额定功率产能使用功效默认。 |
| hobart-4822-f7515 | literature | https://www.hobartcorp.com/sites/default/files/webdam-assets/4822%20Meat%20Chopper%20Spec%20Sheet%20F7515%20(02-23).pdf | Hobart F7515(02/23)限定示例：不锈钢外壳与镀锡绞肉件钢塑料橡胶区别，真实条件性线电气配置、原厂受控传动脂及底座机头盘净运输覆盖。不作数值重量额定寿命NSF-UL食品安全或批发清洗测试补脂默认。 |
