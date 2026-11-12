---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-photographic-optical-and-pre-fb6eef93
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 厂家包装被动光学双筒望远镜自营批发服务

## 1. 范围与适用性

适用于厂家包装被动、非电子光学双筒望远镜的实际常温自营企业间批发服务。记录真实型号序列批次倍率口径、供给附件套装及包装状态。普通收货核查、常温存放电动搬运后由买方实际接收，不强制开包或光学性能测试。

厂家实例表明玻璃镀层机身、镜头盖背带及可选附件角色不同；实际密封氮气属于继承商品，不是仓库购气充排操作。特定型号树脂状态可影响实际接收，但不自动产生维修或释放（`nikon_model`；`nikon_condition`）。厂家数值规格不作为本方法默认。

全部商品上游含真实损失商品隐含负荷均在服务外。完整链使用前，必须在关联商品系统量化原始完整原厂包装门槛需求和互斥损失覆盖。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-photographic-optical-and-pre-fb6eef93 |
| classification_refs | CPC 3.0: 61052（narrower）；商品48314属于483 |
| covered_products | 厂家包装被动、非电子光学双筒望远镜套装的常温自营企业间批发服务。 |
| excluded_products | 相机、激光测距或电子防抖及数字望远镜、单筒天文仪器显微镜、光学制造镀膜组装、通电演示、维修校准、充排气回收、安装、收费代理零售或独立仓储。 |
| representative_product | 声明实际成品型号和供给套装配置，不采用统一尼康规格。 |
| production_route | 厂家完整成品套装放行，批发商收货状态库存核查，常温存放电动搬运，企业买方实际接收。 |
| market_state | 已完成的商业服务；商品是独立审计的购销库存，并非消耗性服务输入。 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 对实际声明的被动望远镜套装货批进行商业批发接收、普通常温存放搬运及验收交接。 |
| How much | 1个实际完成验收的商业货批；独立声明实际套装或副数及净量包装质量。 |
| How well | 实际厂家放行包装记录、型号序列配置、包装观察状态和买方接收标准。不强制开包、通电演示、校准或统一防水检验。 |
| How long or cycle | 实际供应商放行、收货、存放、发货和最终接收时刻、时区、持续量及原生单位；未完成或拒收尝试保留跨期资源关联。 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的厂家包装被动光学双筒望远镜自营批发货批服务 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; source_release_gate; manufacturer; model; serial_or_lot_ids; passive_non_electronic_configuration; magnification; objective_diameter; optical_body_state; actual_accessory_scope; kit_count; net_kit_mass_basis; inherited_pack_tare; inherited_sealed_content_state; warehouse_site; receipt_dispatch_acceptance_times; buyer_acceptance; reporting_period |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N仅一次计数声明最终门槛下真实验收的唯一商业货批ID；不是望远镜副数、件数、镜片数、箱数或货币。 |
| configuration_mass | 商品非交换审计 | Mass; Count; Length | kg; Item(s); 声明原生长度 | 分别记录机身、实际整套净量、实际所含镜头盖背带箱和原厂包装皮重。发布质量仅在实际同型号配置及方法相容时使用；不得凭未注明质量差推定全部附件。实际倍率及物镜口径记录原生单位来源，无统一数值。 |
| content_and_state | 条件性原厂内含物审计 | Mass; 原生组成 | kg; 记录的原生单位 | 原厂密封气体或内含物属于商品。如量化，保留原生数量单位状态组成来源及独立去向证据；不由防水或起雾声明推定充注、泄漏、充排气或回收。未知保持未知，并非零。 |
| physical_conversion | 全部物料公用工程出口量 | 实际需要属性 | 原生及目标单位 | 保留来源数量单位方法状态时刻；件数换质量需实际单件质量配置来源，体积换质量需密度、密度单位、温度单位及来源。组分数量、水分和液体基准不可默认继承整流单位。 |
| factor_release | direct_species | Mass | kg | 身份绑定前确认物种或颗粒及介质。记录测量或活动系数单位来源，仅在系数边界需要时使用组成释放份额；SDS组成或库存缺口不等于释放量。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际已完成制造镀膜组装整理并经厂家包装放行的被动望远镜套装，含实际所供附件和实际存在的密封内含物。 |
| starting_condition_role | 此附加服务的supplier_release_gate；光学制造或充气不属于批发商实际操作。 |
| product_classification_scope | CPC 3.0 61052的较窄被动光学望远镜自营批发服务；商品48314是上下文，不是服务参考流。 |
| recursive_input_rule | 同类别购入转售商品在此记录为非交换库存。独立追溯原来源门槛及唯一分配量，不把整副望远镜递归替换为批发服务。 |
| upstream_dataset_requirement | 关联商品系统需覆盖实际原料玻璃机身生产、光学成形镀膜组装、附件、最终制造密封内含物及原厂包装直到实际放行。原玻璃树脂或未完成光学数据集不足；在服务外仅补入一次实际缺失阶段。 |
| disclosure | 声明实际原厂门槛状态单位来源、所分配原始需求与全部出口分配、真实损失调整责任及已含覆盖和排除阶段。服务单独不可宣称完整产品链。 |

### 边界规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| service_operations | 纳入实际仓库电动搬运状态核查、真实仓库卫生、新增外部运输防护、分配基础设施、所属运输及实际废物搬运处理。原厂包装密封不是运行中的保存工艺。 |  |
| no_product_transformation | 不假定批发商洗涤镜片机身、光学校准维修镀膜组装、开包重包装、供给氮气充排回收、通电演示或电子使用。任何真实此类操作需审查扩展路线，外包不消除物理操作。 |  |
| commodity_outside_once | 全部商品套装制造原厂包装内含物上游，包括实际废弃商品的隐含上游，均在服务外。完整链使用前必须在关联商品系统量化原门槛分配需求及唯一损失调整一次；实际服务处置处理在此计入一次。未知损失是阻断项，不能默认为零。 |  |
| retained_content | 实际整机或部件废物保留其中实际所含密封内含物。内含审计、独立物料转移和直接物种释放互斥；本路线不引入独立气体转移、充排或回收。未知充注量或状态改变不是释放数量。 | nikon_model |
| qualitative_condition | 特定型号树脂发黏可作为实际接收拒收状态观察。厂家维修建议及性能声明不产生批发维修、化学释放、统一阈值寿命或必需剂量。 | nikon_condition |


## 6. 过程清单结构

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| ambient_wholesale | 常温包装望远镜批发 | required | 实际指定被动望远镜自营货批 | final_service | accepted_service |


### 过程：常温包装望远镜批发 (`ambient_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：metered_interval_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：设定每货批用电核查范围前，需取得计量时段、全部使用者搬运或空间时间驱动量、供电来源及交付电能属性支持。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：actual_water_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有实际水表或原生体积，或有据密度换算、清洁时段与全部使用者份额；不假设每套望远镜清洁水量。

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

数量范围证据需求：逐项需要实际SKU、配方、未用库存、整件擦拭物或吸附物数量、组成及原生换算证据。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的厂家包装被动光学双筒望远镜自营批发货批服务 (`accepted_service`)

在企业买方实际接收时完成的一次商业批发服务，附来源门槛、套装配置状态及期间限定。望远镜一副、零售一套、一个物镜或一千克均属于商品计量，不构成此服务计数。

- 选定流：已完成的厂家包装被动光学双筒望远镜自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_binocular`

数量范围证据需求：需由真实验收货批、实际套装数量配置及净量皮重计量基准限定；不规定每货批固定套数、质量或利润。

##### 废物流

###### 废弃完整无源光学双筒望远镜套件 (`whole_goods_waste_atomic_case`)

仅在实际独立记录确认“废弃完整无源光学双筒望远镜套件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_goods_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整无源光学双筒望远镜套件
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际整机套装边界、质量基准、所含包装附件和保留内含物，以及接收分类处理覆盖；不得假设拒收或未知状态即为废物。

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

数量范围证据需求：需有独立包装身份、净质量、污染或保留碎片液体及转移接收证据；原厂包装质量不代表转售时再次购入新包装。


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

数量范围证据需求：需有独立包装身份、净质量、污染或保留碎片液体及转移接收证据；原厂包装质量不代表转售时再次购入新包装。


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

数量范围证据需求：需有独立包装身份、净质量、污染或保留碎片液体及转移接收证据；原厂包装质量不代表转售时再次购入新包装。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| stock_and_attempts | 按序列批次配置和期间核对期初收货期末、实际可用商业退回、其他可用出口、保留拒收和真实废弃。内部移动及回收期末库存不是外送。N仅计最终验收商业服务；未完成和拒收尝试保留真实资源及跨期归属。 |  |
| source_quantity_attribution | 原始商品需求采用有据来源到目标直接分配，或完整相容来源群组：assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。原生全部出口驱动记录含其他可用出口、退回、期末和实际损失，采用相容原套装等价状态及有据换算。不得仅用验收目标服务分配整群组来源，不由碎片数推原套装数。 |  |
| original_gate_demand | 保留真实原门槛需求及阶段损失集成在其实际归属范围的原始物量。记录assignment_scope_ids、quantity_basis=raw_target_cohort或per_reference、same_target_scope_N及来源。有据直接追踪，或assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，须使用完整相容互斥全部出口、有据状态变化份额及原状态等价。若是原始目标群组量，commodity_source_gate_demand=assigned_source_gate_quantity仍为未归一实体台账量；实际服务外阶段损失集成及库存闭合使用该原始量一次。仅在与1 Item(s)服务组合时，才计算q_per_reference=raw_assigned_to_that_same_scope/正数same_target_scope_N。已按每参考流记录的量保留归一状态且不再除；单货批原始范围N=1。N=0不生成归一值。数量单位状态来源分配换算唯一责任和既有损失覆盖必须明确；最终发运加废物或库存余差不确定原需求损失。 |  |
| new_supply_returns | S=opening+net_receipts-closing含实际保留回收。或记录总供给输入S/N并单独记录实际配对未用外送输出；或仅耗用输入(S-usable_outward_return)/N并省去该退回交换。配对同一独立供给身份边界；不可用原厂附件包装内含物冲减无关当前供给或再加抵扣。 |  |
| all_consumer_service | 采用直接实测资源或全部用户期间真实因果空间时间搬运等原生物理驱动；含归属空闲卫生及未完成尝试资源。声明驱动单位来源和分配不确定性。质量、套数或每货批均分需有据，利润不是物理驱动。 |  |
| full_asset_life | 一个匹配完整资产生命周期含制造、实际维护更换、退役和寿命终结。lifetime_all_user_driver含全部用户已观测历史及有来源的剩余驱动、单位等价基准来源不确定性敏感性更新。仅一次分配job_driver/lifetime_all_user_driver，非每周转新购；租赁服务或承运方可能已承担。 |  |
| physical_scope_once | 服务方、直接资源、承运、资产和处理责任矩阵互斥。整套、部件、保留内含组分、独立包装、混合清理量不可相加。实际接收分类与处理数据集边界决定交换，不自动赋予避免生产抵扣。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_binocular | ambient_wholesale | 商品与验收服务审计 | 供应商批发库存及买方事件记录 | consignment_id; source_lot; source_release_gate; source_gate_state; manufacturer; model; serial_ids; passive_non_electronic_configuration; magnification; magnification_unit; magnification_source; objective_diameter; objective_unit; objective_source; body_material_record; coating_state_source; actual_accessory_scope; accessory_count; accessory_count_unit; accessory_source; kit_count; kit_count_unit; count_method; count_source; body_mass; net_kit_mass; mass_unit; mass_basis; mass_method; mass_source; inherited_pack_tare; tare_unit; tare_source; whole_pack_mass; whole_pack_mass_unit; whole_pack_mass_source; condition_observation; observation_time; acceptance_criterion_source; buyer_acceptance_id; supplier_release_time; receipt_time; dispatch_time; acceptance_time; time_zone; duration; duration_unit; duration_source; opening_stock; receipts; closing_stock; stock_unit; stock_state; stock_source; return_ids; return_quantity; return_unit; return_state; return_owner; useful_other_exit_ids; useful_other_exit_quantity; useful_other_exit_unit; useful_other_exit_state; useful_other_exit_owner; actual_loss_quantity; actual_loss_unit; actual_loss_state; actual_loss_source; actual_loss_fate; unfinished_resource_attribution; carried_resource_link; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; source_gate_allocation_mode; direct_assignment_source_ids; direct_assignment_quantity; direct_assignment_unit; direct_assignment_source; allocation_cohort_id; cohort_source_quantity; cohort_source_unit; cohort_source_state; cohort_source_record; target_exit_driver; sum_exit_drivers; exit_driver_unit; exit_driver_basis; exit_driver_source; all_exit_ids; all_exit_driver_records; exit_original_kit_equivalent; exit_equivalence_unit; exit_equivalence_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; upstream_missing_stages; upstream_stage_owner; sealed_content_present; sealed_content_identity; sealed_content_quantity; sealed_content_unit; sealed_content_state; sealed_content_basis; sealed_content_method; sealed_content_source; sealed_content_sample_time; sealed_content_conversion_factor; sealed_content_conversion_unit; sealed_content_conversion_source; sealed_content_density; sealed_content_density_unit; sealed_content_density_temperature; sealed_content_density_temperature_unit; sealed_content_density_source; content_composition; composition_unit; composition_basis; composition_method; composition_source; composition_sample_time; content_unknowns; content_fate_record; N; source_quantity_normalization_state; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 匹配厂家套装放行、序列批次及真实配置，称量追溯原生净量皮重边界；实际有据接收核查不强制开包测试。原来源需求、全部出口及继承内含物独立于服务交换追溯。 汇总细则：N仅计一次；核对原生套装包装库存，按有据直接映射或完整相容群组全部出口驱动分配来源。余额不可推定损失排放。 记录真实原始归属范围、quantity_basis（raw_target_cohort或per_reference）及相同目标范围same_target_scope_N和来源。实际外部阶段损失集成与库存闭合保留原始物量；仅与1 Item(s)服务组合时按相同目标范围正数验收数派生每参考量，已归一量不再除。 | Item(s)、kg及明确声明的配置内含物驱动时间原生单位 | 逐次收货状态移动发货验收及期间关账 | 原放行至全部目标其他出口及跨期未完成库存 | 实际批发场址及供应买方门槛，事件ID互斥 | 每参考流 | 厂家记录、校准称量、库存对账、买方验收、来源分配换算覆盖及内含物未知披露 |
| cp_supplies | ambient_wholesale | 实际新增供给及配对未用退回 | 物料库存与外送记录 | supply_id; material_SKU; formulation; composition; composition_unit; composition_basis; composition_source; opening; net_receipts; closing; stock_unit; stock_source; retained_recovery; unused_outward_return; return_unit; return_receiver; same_supply_pairing; supply_convention; native_quantity; quantity_unit; quantity_source; per_piece_mass; per_piece_mass_unit; per_piece_mass_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; service_driver_share; driver_unit; driver_basis; driver_source; period; owner; embedded_provider_coverage; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采集实际SKU收货期初期末原生单位和真实未用外送接收方；区分新外防护与原厂套装包装附件。 汇总细则：总供给S输入并单独配对输出，或仅耗用输入且省去退回交换；记录同源配对及物理份额。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 原生Item(s)、kg、L或其他声明供给单位及换算 | 每次库存使用真实外送及期间关账 | 实际供给区间及回收期末库存 | 批发供给边界与实际接收方 | 每参考流 | 发票原生库存计量、真实配对换算及承包覆盖 |
| cp_utilities | ambient_wholesale | 实际分配仓库公用工程 | 计量与因果驱动日志 | utility_id; provider; geography; meter_id; native_interval_quantity; quantity_unit; quantity_source; interval_start; interval_end; time_zone; service_driver; all_user_driver; driver_unit; driver_basis; driver_source; service_driver_share; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; included_provider_scope; overlap_exclusions; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用水电计量原生账单、时段边界和全部用户实际空间时间搬运份额；不采用商品消费者用电。 汇总细则：时段量乘实际因果服务份额/N，明确直接实测与分配及承包重叠。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh、m3及原生驱动时间换算单位 | 每个计量驱动时段 | 完整采集期间，含空闲未完成资源 | 实际共享仓库搬运表计 | 每参考流 | 表计边界、全部用户原生驱动记录方法来源 |
| cp_provider | ambient_wholesale | 真实无重叠承包服务包 | 服务方物理边界记录 | package_id; provider; physical_scope; native_package_quantity; package_unit; quantity_source; physical_equivalence; equivalence_unit; equivalence_source; documented_share; share_driver_unit; share_driver_basis; share_driver_source; covered_events; covered_energy; covered_materials; covered_assets; covered_transport; covered_treatment; excluded_scope; direct_resource_owner; service_period; all_users; evidence_record; N | 取得原生物理等价、覆盖资源资产承运处理和事件责任矩阵；不隐藏排除工艺。 汇总细则：排除直接承运资产处理重复后，原生数量乘有据份额/N。 | 原生物理服务单位及份额驱动单位 | 逐合同服务事件及变更 | 实际承包服务时段 | 实际服务方事件关联本节点 | 每参考流 | 服务方边界等价声明及互斥事件矩阵 |
| cp_assets | ambient_wholesale | 完整资产生命周期份额 | 资产及完整寿命驱动登记 | asset_id; asset_dataset_scope; manufacture_coverage; maintenance; replacement_events; retirement; end_of_life; event_quantity; event_unit; event_source; job_driver; job_driver_unit; job_driver_source; observed_all_user_driver; observed_driver_unit; observed_driver_source; remaining_driver; remaining_driver_unit; remaining_basis; remaining_source; lifetime_all_user_driver; lifetime_driver_unit; driver_equivalence; equivalence_unit; equivalence_source; all_consumers; all_periods; idle_and_open_use; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; N | 采集匹配制造维护更换退役寿命终结覆盖、全部用户已观测用量及有来源未来剩余，含单位等价不确定性。 汇总细则：job_driver/lifetime_all_user_driver/N；含全部用户历史剩余、更新敏感性，排除承包服务已含资产。 | 原生资产等价及相容工作寿命驱动单位 | 逐资产事件及期间更新 | 全部用户已观测及有证据剩余完整寿命 | 批发基础设施及互斥承包责任 | 每参考流 | 资产数据集边界、服务日志、剩余来源、原生单位不确定性 |
| cp_freight | ambient_wholesale | 实际承运工作量 | 分段载荷路线记录 | segment_id; mode; carrier; origin; destination; route_scope; whole_pack_payload; payload_unit; payload_source; payload_conversion; payload_conversion_unit; payload_conversion_source; distance; distance_unit; distance_source; distance_conversion; distance_conversion_unit; distance_conversion_source; actual_transport_work; work_unit; work_source; service_share; share_driver_unit; share_driver_basis; share_driver_source; empty_return_coverage; carrier_fuel_assets; warehouse_overlap; N | 取得实际整包套装载荷、路程及承运原生工作量、空返和燃料资产覆盖。 汇总细则：相容换算后按真实物理服务份额/N；不可重复承运或仓库已含资源。 | 原生载荷路程工作量及换算t*km | 每个真实运输段 | 全部纳入进出返程及实际期间 | 实际路线承运边界 | 每参考流 | 称重包装单、路线单位换算及承运数据集边界 |
| cp_outlets | ambient_wholesale | 实际可用与废物物理转移 | 接收转移及物流计量 | transfer_id; receiver; receiver_classification; treatment_boundary; treatment_owner; source_kit_ids; parent_part_ids; stream_identity; physical_state; native_quantity; quantity_unit; quantity_basis; quantity_method; quantity_source; transfer_time; whole_kit_exclusion; separate_part_exclusion; separate_pack_exclusion; retained_content_identity; retained_content_quantity; retained_content_unit; retained_content_state; retained_content_basis; retained_content_method; retained_content_source; retained_content_sample_time; retained_content_fate; component_identity; component_quantity; component_unit; component_basis; component_method; component_source; component_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; usable_transfer_record; waste_acceptance_record; source_stock_pairing; no_double_credit; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 识别整套、实际脱离部件、包装、混合清理及液体；计量原生整流并独立审计保留组分内含物单位基准来源去向。 汇总细则：actual_compatible_net_quantity/N；内含物包含于整流，除非真实独立转移且互斥分配。可用退回与废物分开，不推定释放抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 原生整流Item(s)、kg、m3及独立声明组分内含物单位 | 每个实际对外转移及事故 | 转移时段与保留期末库存明确分开 | 实际批发出口及有据接收处理边界 | 每参考流 | 接收分类验收、实测净量皮重状态、原件关联及互斥内含处理 |
| cp_environment | ambient_wholesale | 条件性真实直接释放 | 物种接收介质测量或有据系数记录 | event_id; species_identity; particle_basis; receiving_medium; direct_measurement; measurement_unit; measurement_method; measurement_source; sample_time; activity; activity_unit; activity_source; factor; factor_unit; factor_basis; factor_source; factor_scope_complete; composition; composition_unit; composition_basis; composition_source; release_fraction; fate_basis; fate_source; whole_stream_quantity; whole_stream_unit; whole_stream_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion_factor; conversion_unit; conversion_source; retained_captured_quantity; retained_captured_unit; retained_captured_basis; retained_captured_source; contained_transfer_exclusion; inherited_content_provenance; stock_unknowns; provider_overlap; N | 识别真实物种介质，追溯测量或适用活动系数与必要组成去向；排除保留捕集收集流和未知原厂内含物。 汇总细则：实测物种/N或适用活动系数乘必要组成去向换算/N；完整系数不再次相乘。 | kg物种及原生活动系数组成温度单位 | 每个实测或有据释放事件 | 实际事件取样区间及代表性 | 批发边界外实际接收介质 | 每参考流 | 取样分析方法或适用系数来源、真实活动状态及独立介质证据 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | accepted_service | N为声明最终门槛下实际买方验收的唯一商业货批ID数；实际套数或副数不作为服务输出。 | cp_binocular buyer_acceptance_id/consignment_id/state/time | N与1 Item(s)服务参考 |  |
| kit_mass_audit | 商品非交换 | whole_pack_mass=actual_net_kit_mass+actual_included_pack_tare仅适用于同边界状态方法；机身及所含附件是不可相加重复的套装分解，不是另一服务供给。 | cp_binocular原生数量配置单位方法来源 | 原生套装及实际包装数量审计，无型号质量默认 |  |
| original_gate_demand | 服务外商品 | 保留真实原门槛需求及阶段损失集成在其实际归属范围的原始物量。记录assignment_scope_ids、quantity_basis=raw_target_cohort或per_reference、same_target_scope_N及来源。有据直接追踪，或assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，须使用完整相容互斥全部出口、有据状态变化份额及原状态等价。若是原始目标群组量，commodity_source_gate_demand=assigned_source_gate_quantity仍为未归一实体台账量；实际服务外阶段损失集成及库存闭合使用该原始量一次。仅在与1 Item(s)服务组合时，才计算q_per_reference=raw_assigned_to_that_same_scope/正数same_target_scope_N。已按每参考流记录的量保留归一状态且不再除；单货批原始范围N=1。N=0不生成归一值。数量单位状态来源分配换算唯一责任和既有损失覆盖必须明确；最终发运加废物或库存余差不确定原需求损失。 | cp_binocular原来源数量、全部出口原生驱动等价责任覆盖 | 量化完整供应商门槛商品需求及服务外唯一一次关联损失调整 |  |
| supply_convention | 实际供给 | S=opening+net_receipts-closing；选择总输入S/N并单独记录配对usable_outward_return/N，或仅耗用输入(S-usable_outward_return)/N且省去配对输出。 | cp_supplies来源库存配对单位换算 | 互斥输入未用外送约定，无二次抵扣 |  |
| utilities | 实际公用工程 | 相容换算后allocated_utility=native_interval_quantity*service_driver_share/N；有据同单位因果基准下service_driver_share=service_driver/all_user_driver。 | cp_utilities时段与全部用户原生驱动记录来源 | 每服务实际公用工程，区分实测与分配 |  |
| provider_scope | 实际服务包 | provider_quantity=actual_native_package_quantity*documented_share/N，仅在核对物理边界等价及互斥事件后计算。 | cp_provider原生等价、份额单位来源覆盖 | 每服务无重叠真实承包包量 |  |
| asset_equivalent | shared_assets | asset_equivalent=job_driver/lifetime_all_user_driver/N；lifetime_all_user_driver=compatible_observed_all_user_driver+compatible_sourced_remaining_driver。匹配完整寿命中记录实际更换及寿命终结，评估不确定性敏感性更新。 | cp_assets完整生命周期与原生驱动换算来源 | 每服务全部用户完整寿命资产归属 |  |
| transport_work | freight | 实际质量距离运输服务采用actual_transport_work=compatible_whole_pack_payload_tonnes*compatible_distance_km，再乘实际service_share/N；等价时优先采用承运方原生工作量。 | cp_freight原生载荷路程换算份额空返边界 | 每服务无重叠实际运输工作量 |  |
| outlets | 实际转移 | outlet_quantity=actual_compatible_net_quantity/N，含保留内含物的整流。原套装部件包装组分审计不可重复相加；保留内含物不是独立释放或回收。 | cp_outlets整流原生组分内含物状态接收记录 | 唯一实际接收转移数量；保留库存未知另行披露 |  |
| release | direct_species | release_quantity=actual_measured_species_quantity/N或compatible_activity*applicable_factor*required_composition*required_release_fraction/N；完整物种释放系数已含的额外因子应省略。 | cp_environment原生活动系数组成去向换算介质证据 | 实际物种接收介质量，无密封充注或泄漏默认 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| native_operands | 全部卡片计算 | 每个实际操作数保留原生单位状态基准方法来源，相关取样时刻及换算因子单位来源；缺失保持未定，不是零。 | 节点专属CP和实际底层记录 |
| representativeness | 型号配置服务方 | 不使用统一尼康质量性能附件气体维修寿命湿度阈值；采用实际来源SKU场址时间及全部用户原生份额。 | 厂家型号套装包装、实际状态验收方法来源 |
| linked_chain | 服务外商品 | 完整原厂包装光学套装门槛、量化原需求损失责任与互斥覆盖是完整链前提；披露缺阶段并仅补一次。 | cp_binocular关联商品系统读回 |
| final_package | 实际交换 | 每个实际展开物料服务资产废物物种必须绑定核实具体身份及支持属性单位；语义候选卡不是最终TIDAS交换UUID。 | 真实详情支持证据及原生前景包 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_water | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| hygiene_supplies | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`hygiene_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_packing | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_packing`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_packages | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_packages`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_count_returns | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_count_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| unused_mass_returns | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_mass_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| whole_goods_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`whole_goods_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`whole_goods_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| part_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`part_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| packaging_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`packaging_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| hygiene_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`hygiene_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| contained_liquid | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`contained_liquid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

只含实际分配的仓库照明、搬运和对应计量边界；不含望远镜操作或演示用电。明确独立计量电力与已包含电力的承包服务。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库与电动搬运用电
- 流属性/单位：Energy / kWh
- 数量规则：metered_interval_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：设定每货批用电核查范围前，需取得计量时段、全部使用者搬运或空间时间驱动量、供电来源及交付电能属性支持。

#### cleaning_water

仅在实际供给时记录仓库表面卫生用水；不代表光学器件洗涤、镜片清洁或商品内含水。依据记录确定水源与接收处理边界。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库卫生清洁用水
- 流属性/单位：Volume / m3
- 数量规则：actual_water_quantity*service_driver_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需有实际水表或原生体积，或有据密度换算、清洁时段与全部使用者份额；不假设每套望远镜清洁水量。

#### hygiene_supplies

仅展开实际仓库卫生或事故使用的清洁剂、擦拭物、吸附物及独立物料库存记录。不规定消费者光学清洁剂、溶剂、干燥剂或剂量。

本卡为独立身份分支`hygiene_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库清洁与事故围控用品
- 流属性/单位：Mass / kg
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：逐项需要实际SKU、配方、未用库存、整件擦拭物或吸附物数量、组成及原生换算证据。

#### added_packing

仅含实际跨入服务边界的新运输外箱、缓冲物或封口物；原厂套装箱、镜头盖、背带和包装属于商品。套装重包装或组装不在本路线内。

- 身份采集要求：实际新增外部运输防护包装
- 流属性/单位：Count / Item(s)
- 数量规则：selected_supply_input/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需确认实际新增外包装单位、单件质量、材质与新增或循环角色；不规定每套外箱数或防护材料用量。

#### provider_packages

仅以实际物理服务包及原生等价单位建模，明确资源、搬运、资产及处理覆盖。费用不是数量；外包光学维修、校准、充排气、镀膜或通电测试仍然超出范围。

- 身份采集要求：实际无重叠的仓储承包服务包
- 流属性/单位：Count / Item(s)
- 数量规则：actual_native_package_quantity*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需获得服务方单位、物理等价和覆盖事件资源矩阵；不得使用通用外包系数或隐含商品转化。

#### shared_assets

将实际仓库、货架、电动搬运机、循环托盘容器、秤及监测器的制造、实际维护更换、退役和寿命终结分配至全部用户和期间。原厂套装附件不是服务基础设施。

- 身份采集要求：仓库与搬运资产的完整寿命服务
- 流属性/单位：Count / Item(s)
- 数量规则：job_driver/lifetime_all_user_driver/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：需要匹配完整资产生命周期、原生驱动单位、观测历史及有来源的剩余使用量和不确定性；不假设每货批新增托盘货架或资产寿命。

#### freight

仅含实际承担且未由其他环节覆盖的运输段。载荷是实际整套望远镜、附件与包装，不可仅以光学机身净质量代替；承运资产、燃料和空返明确唯一责任方。

- 身份采集要求：包装望远镜商品的实际分配运输
- 流属性/单位：Freight transport / t*km
- 数量规则：actual_transport_work*documented_service_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需要具体方式、整包载荷、路程与单位换算、空返覆盖和承运服务边界；不推定装载率、路程或单套质量。

#### unused_count_returns

仅含来自同一独立新增用品库存、实际对外转移的可用未用单位。期末回收库存不是外送；退回供应商的商品及附件在此作为非交换库存事件。若耗用输入已扣除同一退回，省去此交换。

- 身份采集要求：实际配对未用新增包装外送退回
- 流属性/单位：Count / Item(s)
- 数量规则：actual_matched_unused_outward_units/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有实际单位身份状态、外送接收方及来源库存配对；不得由循环商品箱、包装回收库存或商品退货推定抵扣。

#### unused_mass_returns

同一独立用品库存中的实际卫生材料可用未用外送，以身份和原生净质量记录。总供给输入约定保留配对输出；仅耗用输入约定省去该输出。不自动赋予避免生产抵扣。

- 身份采集要求：实际配对未用仓库用品外送退回
- 流属性/单位：Mass / kg
- 数量规则：actual_matched_unused_outward_mass/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需有实际未开封或可用产品、数量单位、必要时密度以及同源库存接收配对；商品退货质量不可冲减清洁用品。

#### whole_goods_waste

仅含接收方实际接收的整副望远镜或套装废弃物，依实际边界包含附件、包装及密封内含物。匹配序列或批次及状态；镜片缺损、起雾、外壳发黏或商业退货本身不等于处置。整流内含审计不另加物料交换。

- 身份采集要求：实际废弃整副望远镜套装流
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际整机套装边界、质量基准、所含包装附件和保留内含物，以及接收分类处理覆盖；不得假设拒收或未知状态即为废物。

#### part_waste

仅含已接收或事故脱离且实际独立收集并合法转移的损伤部件或碎片，关联原望远镜或套装；不规定日常拆解维修。排除整机废物中已含部件，另审计实际保留物料或内含物。

- 身份采集要求：实际独立转移的望远镜部件或碎片流
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有原套装谱系、实际镜片机身包胶镜头盖材质、原生数量单位组成及唯一接收去向；碎片数不是原望远镜数或空气释放。

#### packaging_waste

实际物理分离的外箱、缓冲物、薄膜等，区分原厂商品包装、新增用品和保留循环库存。不得重复计入整套或部件废物、混合围控废物已含的包装。

本卡为独立身份分支`packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际独立转移的包装废物
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有独立包装身份、净质量、污染或保留碎片液体及转移接收证据；原厂包装质量不代表转售时再次购入新包装。

#### hygiene_waste

记录实际转移的整股已用擦拭物、吸附物或过滤物及所含碎片液体审计。区分购入干用品与实测使用后整流；保留组分不可再次计为废物或释放。

- 身份采集要求：实际使用后的仓库卫生或围控固体
- 流属性/单位：Mass / kg
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际使用后湿量净量、保留液体组分的原生数量单位基准来源及接收证据；用品供给或镜片损伤不确立废物数量。

#### contained_liquid

实际送至接收方的仓库表面清洁液或事故收集液；不规定光学洗涤或充排气。数量、组成、密度温度及处理覆盖须与实际物理流一致。

- 身份采集要求：实际收集的仓库卫生液体
- 流属性/单位：Volume / m3
- 数量规则：actual_compatible_outlet_net_quantity/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需有实际收集体积或相容质量密度换算、保留固体及接收处理记录；自来水输入或可见冷凝不自动等于此液流或直接排水。

#### direct_species

仅展开有独立证据的物种颗粒身份和接收介质。原厂氮气或防水声明、起雾、树脂发黏、玻璃破损及库存缺口均不确立物种数量或排放。已捕集碎片和收集清理液不是空气颗粒。

- 身份采集要求：实际已识别物种或颗粒的直接释放
- 流属性/单位：Mass / kg
- 数量规则：actual_measured_species_quantity/N OR actual_activity*applicable_factor*required_composition*required_release_fraction/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：需有物种介质、实际取样或适用活动系数基准，以及原生组成、去向和换算证据。完整物种释放系数不得再次乘组成或释放份额；不虚构密封充注量或泄漏系数。

## 9. 验证规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| reference_gate_check | 核对参考名链接对应真实完成服务输出、N与一次买方验收，及实际非电子型号配置套装包装计数时刻限定。 |  |
| commodity_gate_check | 核对原门槛实际缺失光学制造附件整理密封内含物原厂包装在服务外仅一次，来源分配量全部出口分配及损失覆盖责任相容；缺失证据阻断完整链声明。  核对原始归属范围quantity_basis及same_target_scope_N；不得用归一视图闭合真实群组库存或集成实际缺阶段损失。 原始归属范围须记录assignment_scope_ids。 |  |
| scope_check | 确认无隐含批发通电演示维修校准开包充排回收或规定干燥清洁剂操作。继承氮气标签不是新增服务输入。 |  |
| stock_receptor_check | 整套部件包装内含物库存退回真实接收出口互斥。未知损失状态充注不是零、真实废弃、避免生产或直接物种；捕集碎片收集清理液不可重复为空气水体释放。 |  |
| resource_owner_check | 核对全部用户因果时段、完整寿命已观测及有来源剩余资产单位等价不确定性、服务承运处理责任，以及总输入加退回或耗用输入省退回约定。 |  |
| identity_evidence_check | 最终每交换需实际数量换算来源支持及核实具体UUID；候选身份未定和证据缺口明确保留，不断言可发布。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际完成被动光学望远镜自营批发货批的附加服务前景。 |
| downstream_use | 将互斥服务操作与量化关联完整供应商门槛商品系统仅组合一次，保留来源状态损失覆盖。 |
| allowed_use | 实际声明被动非电子成品包装望远镜套装常温批发路线及观测原生资源接收。 |
| excluded_use | 独立完整望远镜产品足迹、相机电子望远镜或操作使用、统一消费者性能维修寿命声明或收费代理。 |
| required_metadata | 实际型号序列配置附件包装内含状态、原供应商门槛分配需求全部出口损失责任、计数净量皮重单位、场址期间时刻验收、承包资产运输处理边界。 |
| required_quality_disclosure | 未定流及支持身份、真实来源单位换算、库存内含物未知、全部用户资产剩余不确定性、实测分配区别及经验范围缺口。 |
| update_trigger | 真实路线配置来源门槛服务方介质变化、新工艺、计量分配来源修订、完整寿命剩余改变或核实实际身份。 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| nikon_model | literature | Nikon，MONARCH M7厂家发布，2021-09-22。 https://www.nikon.com/company/news/2021/0922_monarch_m7_01/ | 仅支持特定型号成品被动光学配置、继承密封内含及实际与可选附件区别；不作为数值规格操作寿命或气量默认。 |
| nikon_condition | literature | Nikon Japan FAQ000056389，2019-04-04发布，2026-10-08更新。 https://nij.nikon.com/support/faq/products/article?articleNo=000056389 | 仅支持实际树脂外观状态老化存放的定性背景；非统一损坏储存限值化学释放维修操作或系数。 |
