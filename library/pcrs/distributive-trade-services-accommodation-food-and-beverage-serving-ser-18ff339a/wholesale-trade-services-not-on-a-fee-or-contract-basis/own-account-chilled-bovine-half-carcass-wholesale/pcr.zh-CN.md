---
pcr_id: pcr.own-account-chilled-bovine-half-carcass-wholesale
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷藏牛半胴体自营批发服务

## 1. 范围与适用性

本PCR覆盖商户购入并转售已检验、已屠宰且完成初次冷却的牛半胴体，通过运营的悬挂冷间和真实商业买方验收门槛交付。接收状态温度核验、主动制冷保持冷藏、轨道搬运、卫生、适当实体开销及约定冷链物流构成一项有界保鲜责任。胴体本体质量包含其声明的骨脂肪组织状态，参考输出是已完成商业批发服务，而不是肉的千克数。

排除活畜生产贸易、屠宰分割整理及初次冷却，切割去骨绞肉烹调冻结解冻和主动熟化计划，以及收费代理、零售和单独仓储运输。冷藏保持不代表自然宰后变化为零；实际屠宰初冷接收保持发运时间、状态变化及买方标准须记录。接收未完成初冷物料不得暗作普通保持冷负荷；实际排除加工即使外包也须另审路线。本服务增量模块不含牛生产屠宰胴体或初冷制造负担，包括商品损失隐含上游，须在独立兼容原门槛商品系统进行一次损失调整。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-chilled-bovine-half-carcass-wholesale |
| classification_refs | CPC 3.0:61023 非按收费或合同方式提供的肉禽肉及野味批发服务；仅已完成初冷悬挂牛半胴体较窄子集 |
| covered_products | 通过运营悬挂冷间保持已检验初冷牛半胴体的真实完整自营B2B批次服务 |
| excluded_products | 活畜；屠宰初冷；内脏去骨肉作为参考；主动熟化切割冻结解冻等肉加工；代理零售独立仓储运输 |
| representative_product | 冷藏牛半胴体自营批发服务 |
| production_route | 供方检验及完成初冷放行 -> 商户接收称量状态核验 -> 主动悬挂冷藏保鲜搬运 -> 实际商业批次买方验收 |
| market_state | 已完成按次服务；商品保留所声明带骨半胴体冷藏状态及实际自然宰后状态时间历史，不假定组织不变 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的冷藏牛半胴体自营批发批次服务 |
| How much | 1 Item(s) |
| How well | 真实供方检验初冷放行及商户保持冷藏记录满足已声明买方标准，含胴体ID本体质量皮重、实际时间条件；不作通用安全保质期保证 |
| How long or cycle | 实际接收到买方验收期间，附屠宰初冷历史、全部冷藏卫生拒收待机事件、库存未完期间及真实资产生命周期归属 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的冷藏牛半胴体自营批发批次 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | own_account_ownership_resale; site_room; consignment_id; carcass_source_ids; bovine_species_class; bone_in_half_state; inspection_release; completed_primary_chill_evidence; supplier_original_gate; actual_body_net_mass_and_tare; half_count; slaughter_receipt_hold_dispatch_acceptance_times; actual_core_surface_temperatures_and_units; natural_condition_change; adopted_buyer_criteria; rail_hook_space_and_load_scope; cold_provider_transport_boundaries; commodity_loss_state_quantity_owner_adjustment |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `commercial_count` | accepted_service | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N>0，计最终唯一已验收商业批次，不计半胴体、发票、轨道移动或千克。1仅作归一化，实际商品数量为比较限定。 |
| `carcass_mass_state` | 商品与carcass_waste; carcass_waste_atomic_case | Mass | kg并声明状态 | 真实胴体称量扣除挂钩吊架支撑原有包装皮重，骨脂肪组织按声明留在本体。不假定半胴体活体胴体或去骨换算。滴液蒸发及状态变化分别观测，不明缩水不自动是丢弃肉或污染排放。 |
| `thermal_history` | 接收及保持胴体 | 温度时间观测 | 实际温度时长单位 | 保留探头位置核心表面、真实单位时段、接收状态和实际门槛标准；历史手册温度时长密度不是当前法律阈值或固定工艺配方。 |
| `actual_native_once` | 全部流及驱动记录 | 实际交换驱动属性 | 实际原生单位 | 保留Count、Volume、Mass、货运及来源转换、全使用者驱动单位和真实服务完成范围。已归属批次总量归一化一次；电力属性单位组及其他原生支持须独立验证，不从Count或燃料热值推定。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际已检验屠宰并完成初次冷却的带骨牛半胴体，在供方放行及商户接收时有胴体ID净状态质量和真实时间温度条件记录 |
| starting_condition_role | 下游有界冷藏保鲜和商户自营服务的可用前状态，不是活畜或未冷屠宰输出 |
| product_classification_scope | CPC61023中211类肉的较窄悬挂冷藏牛半胴体批发服务 |
| recursive_input_rule | 商品胴体保留非交换库存审计，不递归制造或同一批发输入；供方服务转移范围门槛作为互异且仅一次关联 |
| upstream_dataset_requirement | 完整实际电力物资服务冷轨道资产寿命承运废物处理数据集；另行兼容实际供方门槛已屠宰检验完成初冷半胴体商品系统及量化一次损失调整 |
| disclosure | 供方检验初冷门槛，实际胴体本体皮重状态，时间温度自然变化验收，全使用者冷间轨道范围事件供方承运资产，制冷剂供给充注回收释放，真实废物滴液水及损失接口责任者 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `preserved_before_after` | chilled_wholesale | 可用前状态为有记录已检验完成初冷半胴体，保持后状态为有可追溯历史条件并在真实冷藏买方门槛验收的同批半胴体。纳入主动冷藏及服务投入；披露普通自然宰后变化，主动熟化首次冷却及其他排除加工须不同审定路线。 | fao-meat-cold-preservation |
| `merchandise_addon` | 全部商品范围 | 每项服务交换均排除牛生产、屠宰整理初冷及完整胴体商品制造，包括损失商品制造。量化实际兼容状态单位损失，并以唯一责任者来源既有覆盖检查关联原商品门槛上游调整，完整链最终使用前在服务外恰好一次。 |  |
| `physical_cold_scope` | chilled_wholesale | 包括实际接收轨道移动制冷保持除霜待机卫生验收及归属失败拒收事件，分开供方初冷完成与商户保持负荷。供方承运实际制冷资源覆盖一次，不将外包肉加工改名储存。 |  |
| `rail_hygiene_context` | 悬挂搬运 | 悬挂胴体搬运及卫生冷链责任不同于堆叠冻肉或箱装肉块，采集实际轨道挂钩间距载荷和采用的冷间运输程序；历史布局气候密度清洁配方不是默认或安全认证。 | fao-meat-coldstore-operations |
| `fluids_and_assets` | 制冷及直接范围 | 分开新供给、历史已装充注、内部回收重充、未用新退回、实际有用回收外送、已收集废物和真实物种释放。完整资产寿命及供方当前事件范围核对一次；本购电购水路线无场内燃烧或环境直接取水。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `chilled_wholesale` | 主动冷藏保鲜与悬挂半胴体商户交接 | required | 实际购入转售已检验完成初冷牛半胴体，并运营有界冷藏保持至买方验收 | 保鲜稳定责任，具有可用冷藏前后门槛，保留接收冷轨道搬运及卫生事件 | `accepted_service` |

此唯一真实节点承担保鲜介入与商户交接，仅一种服务输出。胴体本体状态库存记录为非交换商品审计，不另设制造输出。实际条件性流体SKU供方物种及原生单位仅据前景证据展开。真实残余商业退回拒收滴液及直接释放保持不同状态与责任者。

### 过程：主动冷藏保鲜与悬挂半胴体商户交接 (`chilled_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属的购入电力
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：建立可比能耗范围需实际来源计量、冷间开门除霜记录、接收温度和不重叠全使用者驱动证据；不取历史手册冷却时长、每千克电耗或压缩机容量作默认值。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属的购入卫生用水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需实际计量清洁记录和兼容数量去向证据；不从购水推胴体损失或污水量，不引入历史清洁频次。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_agents_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的按质量计量卫生药剂供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需实际SKU浓度状态组成、收货库存用量退回和程序来源；历史含氯浓度或危险分类不是当前耗用释放因子。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的冷藏牛半胴体自营批发批次 (`accepted_service`)

商业买方验收的唯一已完成商户购入转售批次，商品为实际已屠宰检验并完成初次冷却的牛半胴体，在有记录条件下保持冷藏。N是商业已验收批次数，不是半胴体头数、千克、发票或轨道移动；保留实际自然宰后变化及经过时间。

- 选定流：已完成的冷藏牛半胴体自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carcass`

数量范围证据需求：1仅为服务归一化，不假定批重，也不保证食品安全。需真实胴体ID本体质量皮重、屠宰初冷放行及接收保持验收时间条件和买方决定，才可比较。

##### 废物流

###### 废弃冷却牛半胴体 (`carcass_waste_atomic_case`)

仅在实际独立记录确认“废弃冷却牛半胴体”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`carcass_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃冷却牛半胴体
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的已收集胴体相关废物
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carcass`

数量范围证据需求：需称量真实不同状态材料及接收方，必要时保留用于损失调整处理的组成状态证据；不设肉损、骨比例、滴液率或库存差量默认值。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `commodity_loss_once` | 胴体商品 | 全部商品制造负担留在增量模块外。真实不可恢复丢弃物料、观测状态去向及兼容原门槛数量基准单位来源责任者，连同既有损失覆盖，关联服务外一次商品上游调整。不把全部胴体减重或水性滴液千克当同量丢弃肉；未知损失或水分成分基准是须解决缺口，不是默认零。 |  |
| `cold_shared_driver` | 冷间负荷及全部使用者 | 采用真实因果全使用者事件期间证据，比较挂钩占用空间时间与有依据热负荷质量或其他驱动，并记录兼容性。真实待机开门除霜清洁拒收负担纳入，不默认简单质量比例或按批平均。未完成订单资源保留开放批次关联至实际验拒，不虚构N。 |  |
| `asset_full_life` | shared_assets | asset_equivalent=(job_driver/life_driver)/N，驱动兼容，并对应跨全部使用者期间的一项完整生命周期。包括真实制造初装充注维护替换退役寿命末端，观测寿命历史或有来源剩余量及不确定性敏感性更新。仅在相同负担于其他位置覆盖一次后，才从对应资产范围移除直接供方当前事件重叠。 |  |
| `native_unused_return` | 新供给 | S=opening_supply+net_receipts-closing_supply。选择总供应输入S/N并单独表示真实匹配原生单位未用外送退回输出；或仅耗用输入(S-usable_outward_return)/N，并省去该退回交换且不再次抵扣。回收到期末的新供给已属期末。未用新制冷剂与回收历史安装流体不混合；未退废物损失保留供给负担。 |  |
| `recovery_and_outlets` | 全部真实出口 | 商业胴体退回为商品移动，不负计服务或自动信用。有用已装流体回收仅在真实外送被验收时为物理出口，留存回收仍是库存。不可用工质进入废物出口。实际滴液胴体丢弃混合废水及直接物种是互不重复状态视图，不给避免生产信用，不重复整股与物种出口。 |  |

另行关联的原门槛胴体商品数据集必须覆盖牛生产、屠宰整理及完成初冷直至实际供方放行；仅活牛农场数据不能补齐缺少的屠宰冷却阶段。兼容阶段在该商品系统纳入恰好一次，不暗漏，也不加入本服务。

回收已装流体须辨明来源是资产生命周期数据集已拥有的原厂初装充注，还是特定独立运营供给。真实有用回收外送不减少无关当前补充供给，也不产生负输入。仅有证据匹配同范围独立供给库存的未用退回才可作仅耗用扣减；其他情况保留初装充注负担责任，记录实际回收产品转移而不自动给信用。

追踪真实供方原门槛投入数量及分配给验收批次或群组的原门槛数量，包含有证据的普通水分与状态变化份额。不得仅以最终发运本体质量加丢弃质量确定上游商品需求，否则会遗漏原先生产胴体内水分所承担的上游负担。采用兼容原门槛状态单位及真实分配换算来源；退回、期末库存及其他出口互斥归属，并核对既有损失覆盖。此数量归属不从质量差额推断可食肉损失或污染物物种。


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_carcass` | chilled_wholesale | 商业参考及非交换冷藏胴体库存损失状态 | carcass_acceptance_stock_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; species_class; slaughter_date_time; primary_chill_release_id; primary_chill_completion_evidence; inspection_release_id; inspection_authority; applicable_acceptance_criteria; supplier_original_gate; receipt_date_time; receipt_core_temperature; receipt_surface_temperature; probe_location; temperature_unit; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; product_state; postmortem_history; deliberate_ageing_status; actual_condition_changes; core_surface_measurement_method; gross_weight; hook_gambrel_tare; other_support_tare; inherited_pack_tare; carcass_body_net_mass; mass_unit; opening_quantity; receipts; closing_quantity; recovered_closing; internal_transfer_id; buyer_dispatch; supplier_return; buyer_return; rejected_quantity; half_count; bone_in_state; actual_drip_quantity; drip_unit; drip_state; measured_evaporation; evaporation_unit; shrink_difference; discrepancy_investigation; actual_waste_mass; waste_state; loss_fate; loss_composition; loss_composition_basis; loss_composition_source; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_input_state; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_source; assigned_moisture_state_change_share; moisture_state_share_unit; moisture_state_share_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 核对真实产权、供方检验初冷放行与接收半胴体ID，实测扣挂钩支撑包装皮重后本体质量、时间和核心表面状态。N仅计最终唯一买方已验收商业批次，不计半胴体或重复文件。分别跟踪自然宰后状态、真实退拒滴液蒸发及不明缩水并调查。未完资源保留开放批次关联。实际损失须在独立商品系统以兼容原门槛状态单位来源及唯一责任者调整一次。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 实际胴体本体kg及状态专属损失单位 | 每次接收、温度状态观测、移动验收退回盘点 | 全部供方放行接收到买方实际期间，及前后库存失败重复尝试和未完结转 | 一个具名商户冷间责任及实际商业接口 | per reference flow | 真实检验初冷放行买方决定、称量皮重探头校准及已调查状态损失记录 |
| `cp_supplies` | chilled_wholesale | 新供给及未用当前输入外送退回 | supply_stock_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; sku; substance_material_identity; composition; composition_basis; composition_source; state; native_property; native_unit; opening_supply; gross_receipts; tare_receipts; net_receipts; closing_supply; recovered_closing_supply; actual_charge_to_circuit; circuit_event_id; usable_outward_return; return_receiver; return_transfer_id; used_quantity; waste_quantity; uncontained_loss; selected_return_view; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; temperature; temperature_unit; piece_mass; piece_mass_unit; piece_mass_source; provider_asset_inclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按实际SKU状态采用原生库存交付及总重皮重记录，区分未用供给与回路充注历史回收。S=opening_supply+net_receipts-closing_supply。总输入S/N加单独匹配真实外送退回，或仅耗用(S-usable_outward_return)/N并省去退回交换且不再扣。回收到期末新供给已含期末；未退废物损失保留上游，供方资产已含事件不重复。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际供给原生单位，相应kg或Item(s) | 每次供给充注使用退回盘点 | 全部所选作业及关联供给库存期间 | 同一冷藏保鲜批发节点和真实责任边界 | per reference flow | SKU状态单位与输入退回身份、数量校准和有来源转换证据 |
| `cp_utilities` | chilled_wholesale | 冷藏保持及卫生水计量 | cold_utility_meter_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; source_id; meter_id; meter_register_role; reading_start; reading_end; meter_factor; metered_quantity; native_unit; conversion_factor; conversion_unit; conversion_source; incoming_temperature_load; all_room_consumers; hook_occupancy; hook_occupancy_unit; rail_length; rail_length_unit; occupied_space; space_unit; occupancy_start; occupancy_end; occupancy_duration; occupancy_duration_unit; mass_driver; mass_driver_unit; thermal_driver; thermal_driver_unit; selected_driver; driver_unit; attribution_share; driver_rationale; baseline_idle_load; defrost_event; door_event; fan_event; cleaning_event; supplied_water; recirculated_water; cleaning_outflow; carcass_drip; condensate; defrost_water; measured_evaporation; fate_overlap_check; provider_inclusion; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取实际来源购入计量和不重叠冷间事件期间，纳入接收保持负荷、开门除霜风机卫生及基线待机。用全部实际使用者和兼容单位说明挂钩空间时间或适当热质量驱动，千克比不自动成立。归属一次，购水滴液冷凝除霜冲洗实际出口分开，不推损失污染。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh; m3; 实际驱动单位 | 每计量时段及冷间开门除霜清洁事件 | 归属所选批次全部冷藏保持装载空闲待机卫生期间 | 具名冷间来源及全部实际互不重复使用者 | per reference flow | 计量日志校准、完整全使用者驱动依据及不重叠水去向 |
| `cp_provider` | chilled_wholesale | 第三方实际已完成实体服务包 | physical_service_completion | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; provider_id; package_id; physical_result; acceptance_id; completion_date_time; quantity; native_property; native_unit; upstream_dataset; upstream_unit; included_materials; included_utilities; included_assets; included_refrigerant; included_releases; included_transport; included_wastes; included_treatment; missing_scope; direct_overlap; uncertainty | 取得真实已完成检验卫生维护实体结果及供方原生数量和完整上游范围。Count仅是真实原生按次数服务包，不能转价格小时；其他单位展开。直接供方制冷剂运输废物处理范围只分配一次，排除加工即使外包也不属普通批发。 | 实际供方原生单位；仅真实服务包可用Count | 每个真实完成服务包及重复事件 | 全部所选批次真实服务事件 | 供方原有检验与商户责任分界 | per reference flow | 签署实体完成结果、匹配原生单位及覆盖无重叠矩阵 |
| `cp_assets` | chilled_wholesale | 共享冷间轨道挂钩制冷全寿命负担 | cold_asset_lifecycle_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; asset_id; asset_identity; full_lifecycle_dataset; lifecycle_unit; manufacture_scope; initial_charge_scope; maintenance_scope; replacement_events; replacement_scope; retirement_event; eol_scope; all_consumers; all_periods; job_driver; driver_unit; life_driver; life_driver_unit; observed_life; observed_history; evidenced_remainder; remainder_source; lifecycle_sources; current_direct_event_scope; provider_overlap; selected_view; uncertainty; sensitivity; update_trigger | 建立实际资产清单及完整制造初装充注维护替换退役寿命末端范围。采用跨全部房间合同期间使用者的兼容观测全寿命驱动，或真实历史加有来源剩余。仅选匹配整项资产当量Count口径；当前另行核算供给释放事件从相应资产维护部分排除重复，但总体不漏。 | 资产当量Item(s); 实际兼容全寿命驱动单位 | 每次使用维护替换退役事件 | 完整制造至全部使用期间替换寿命末端，另行关联所选批次窗口 | 设施制冷轨道挂钩资产全部真实使用者 | per reference flow | 全寿命来源、一致全使用者驱动、剩余量和不确定性敏感性证据 |
| `cp_freight` | chilled_wholesale | 实际胴体承运段及冷链范围 | chilled_shipment_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; shipment_id; leg_id; carrier; responsibility; carcass_net_load; load_unit; support_pack_load; total_payload; payload_kg; payload_conversion; payload_conversion_source; distance; distance_unit; distance_km; distance_conversion; distance_source; attribution_share; all_loads; empty_return; empty_service_coverage; carrier_refrigeration_scope; carrier_refrigerant_scope; carrier_asset_scope; source_commodity_inclusion; other_provider_inclusion; load_time; unload_time; carrier_condition_evidence; uncertainty | 按承运记录核对实际载荷、支撑包装范围和真实运输段、温度搬运门槛及空返完整车辆制冷边界。不作活重去骨或每半胴体重量假定，不重复供方服务已含货运车辆制冷剂。 | kg*km | 每实际出入库或退回运输段 | 所选商户责任全部运输，含归属拒收退运 | 商户承运供方服务接口 | per reference flow | 运单、真实路线转换及完整空返冷藏承运范围 |
| `cp_refrigeration` | chilled_wholesale | 已装流体充注回收及有用外送审计 | circuit_charge_recovery_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; circuit_id; fluid_identity; fluid_state; initial_factory_charge_or_operating_supply; initial_charge_dataset_id; initial_charge_burden_owner; standalone_supply_event_id; matched_supply_scope; supply_match_evidence; composition; composition_basis; composition_source; installed_charge_opening; installed_charge_closing; charge_unit; supply_charge_event; provider_charge_event; actual_charged_quantity; recovered_removed_quantity; recovery_cylinder_gross; recovery_cylinder_tare; recovery_net_quantity; recovery_retained_stock; recovery_recharged; useful_export_quantity; useful_receiver; useful_acceptance_id; waste_transfer_quantity; waste_receiver; waste_transfer_id; waste_material_state; waste_classification; waste_treatment_route; waste_treatment_scope; measured_whole_fluid_release; unaccounted_charge_difference; discrepancy_investigation; provider_asset_coverage; calibration; uncertainty | 使用实际回路维护充注回收和校准气瓶称量，区分新供给、历史已装流体、回收留存重充、真实有用外送、不可用废物及实测释放。内部回收重充不作外购外送；调查充注差，不把补充等于排放，不负购入或给避免产品信用。真实物种量独立见cp_environment。 | 实际整股流体kg并保留组成基准 | 每真实充注维护回收外送废物及期初期末事件 | 所选事件关联回路服务期间及初装历史库存 | 具名真实回路及供方商户责任分界 | per reference flow | 气瓶回路记录校准、去向验收、完整去向范围和未解差证据 |
| `cp_outlets` | chilled_wholesale | 已收集卫生维护废物及废水 | waste_stream_receiver_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; stream_id; origin_event; material_identity; composition; composition_basis; composition_source; physical_state; native_property; native_unit; gross_quantity; tare; net_quantity; measured_volume; density; density_unit; density_temperature; density_temperature_unit; density_source; carcass_drip_inclusion; condensate_inclusion; defrost_inclusion; rinse_inclusion; stream_overlap_check; pollution_load; pollution_unit; load_method; load_source; receiver; transfer_id; waste_classification; treatment_route; treatment_scope; provider_inclusion; uncertainty | 按真实状态计量互不重复废物流及接收处理。不可用回收流体、已耗供给、胴体废物滴液及清洁水混合物各明；废水组成仅表征同一流体，不增物种交换。实际直接排口须另审基本流，不能标为已收集废水。 | 实际原生出口单位，相应kg或m3 | 每真实废物出水转移及取样 | 全部所选归属卫生维护丢弃期间 | 具名场址出口和实际接收处理边界 | per reference flow | 称量计量流股表征及接收处理无重叠证据 |
| `cp_environment` | chilled_wholesale | 有独立释放证据的实际直接物种 | species_release_record | site_id; merchant_id; room_id; cohort_id; consignment_id; carcass_id; source_lot_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; circuit_event_id; source_event; substance_identity; receiving_medium; particle_basis; measured_mass; mass_unit; activity; activity_unit; species_factor; factor_unit; factor_scope; factor_source; factor_complete; measured_whole_fluid_release; whole_release_unit; composition; composition_basis; composition_source; fate; fate_basis; fate_source; captured_or_contained_quantity; recovered_stock_quantity; conversion_factor; conversion_unit; conversion_source; temperature; temperature_unit; pressure; pressure_unit; provider_asset_inclusion; calibration; detection_limit; uncertainty | 确认真实排放物种介质，采用实测物种质量、有效匹配活动因子或实测整股释放及兼容组成去向，路径互斥。捕集废物回收库存及整股视图分开不可叠加；完整因子已含组成去向。制冷剂补充、胴体质量差、气味或产品危险性均非释放因子。 | 实际物种介质的kg | 每真实释放及关联观测时段 | 全部真实归属直接来源事件期间 | 具名实际商户源，避开供方承运资产重复释放 | per reference flow | 真实物种介质和测量因子组成去向来源兼容及不确定性检出限 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `accepted_consignment` | accepted_service | N=reference_gate_id下最终唯一accepted_consignment_ids的数量；accepted_service=1 Item(s)。 | cp_carcass | 一个真实完整商业服务，附胴体状态时间条件限定 |  |
| `carcass_stock` | 商品审计; carcass_waste; carcass_waste_atomic_case | carcass_body_net_mass=gross_weight-hook_gambrel_tare-other_support_tare-inherited_pack_tare。核对匹配状态的期初接收、买方发运、实际外退、包含回收量的期末及观测去向，配对内部转移。assigned_source_gate_quantity为真实source_gate_input_quantity按有证据的原门槛兼容状态单位和分配换算归属给本批次群组，包含assigned_moisture_state_change_share，并排除互斥分配至退回、期末及其他出口数量；commodity_source_gate_demand=assigned_source_gate_quantity/N，在独立商品系统核对既有损失覆盖，不能以最终本体质量加丢弃质量替代。actual_waste_mass/N为真实已收集胴体废物量。用实际滴液蒸发状态证据调查shrink_difference，不以余差推损失排放。 | cp_carcass; N | 非交换胴体库存损失接口及每参考流真实状态专属已收集出口 |  |
| `new_supply_stock` | refrigerant_supply; cleaning_agents; added_covers; unused_count_returns; unused_mass_returns; cleaning_agents_synthetic_detergent | net_receipts=gross_receipts-tare_receipts; S=opening_supply+net_receipts-closing_supply; gross_input=S/N OR consumed_input=(S-usable_outward_return)/N，按SKU原生口径仅选一路。已装历史充注与回收流体独立于本新供给库存。 | cp_supplies; N | 每参考流真实新原生供给未用退回，不重复扣退回 |  |
| `cold_utilities` | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | metered_quantity=(reading_end-reading_start)*meter_factor，适用来源购入寄存器或实际直接兼容测量；utility_quantity=sum(metered_quantity*conversion_factor*attribution_share)/N，采用含待机的真实完整全使用者驱动事件期间。保留不重叠供水去向审计。 | cp_utilities; N | 每参考流实际电力或水购入 |  |
| `physical_provider` | provider_packages | provider_quantity=quantity/N，适用于实际匹配原生Count完整实体包；其他单位需真实展开。missing_scope补齐一次，消除与供给资产承运处理的direct_overlap。 | cp_provider; N | 每参考流完整生命周期实际外部服务 |  |
| `asset_equivalent` | shared_assets | asset_equivalent=(job_driver/life_driver)/N，需兼容全寿命驱动单位和一份匹配整项生命周期资产清单。 | cp_assets; N | 每参考流真实全生命周期资产当量Item(s) |  |
| `freight_work` | freight | freight_work=sum(payload_kg*distance_km*attribution_share)/N。保留真实载荷支撑范围和转换来源；空返制冷承运范围独立，不假定空返也为有载运输。 | cp_freight; N | 每参考流真实kg*km及完整冷藏空返承运边界 |  |
| `refrigerant_fates` | recovered_refrigerant; unusable_refrigerant; 制冷剂审计 | recovery_net_quantity=recovery_cylinder_gross-recovery_cylinder_tare；useful_export=useful_export_quantity/N，仅实际外送且接收验收时成立；unusable_refrigerant=waste_transfer_quantity/N，仅指独立送具名处理方的真实不可用废物转移。核对安装期初期末、真实充注、实际回收留存重充外送废物及独立确认释放和不确定性。调查unaccounted_charge_difference，供给补充均不自动估算泄漏。 | cp_refrigeration; cp_supplies; cp_environment; N | 真实回路去向审计及每参考流有用回收流体外送 |  |
| `contained_outlets` | other_wastes; wastewater; unused_count_returns; unused_mass_returns | outlet_quantity=net_quantity/N，用于各真实原生单位的独立已耗材料水流；未用退回按匹配供给单位采用usable_outward_return/N。真实接收处理配对一次，不增已收集废物物种视图。 | cp_outlets; cp_supplies; N | 每参考流真实互不重复已收集出口 |  |
| `species_mass` | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_fluid_release*composition*fate/N，先兼容基准单位转换并选一路。factor_complete禁止再乘组成去向，整股流体和物种不可相加。 | cp_environment; cp_refrigeration; N | 每参考流真实释放物种质量及接收介质 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `chilled_gate` | 接收验收半胴体 | 需真实供方检验初冷完成证据、胴体身份、温度称量皮重校准、实际采用标准、自然状态时间历史和买方验收；历史手册不能替代当下场址合规或保质期。 | cp_carcass来源条件及实际买方记录 |
| `loss_state` | 胴体滴液水及商品关联 | 分开胴体本体、骨脂肪组织、实测滴液蒸发、已收集废物、商业退回及不明缩水。原门槛上游损失调整需真实兼容状态单位来源及唯一责任和既有覆盖检查，组成未定不得暗等于肉。 | 状态专属库存去向及独立商品损失证据 |
| `complete_resources` | 冷间供方资产期间 | 覆盖全部实际使用者、待机卫生开门除霜退回事件、实体供方范围、原生数量和完整资产寿命，含直接事件重叠、初装充注回收替换寿命末端及有证据剩余量。 | 范围矩阵计量驱动依据、实体供方结果及资产回路记录 |
| `identity_and_ranges` | 真实展开交换 | 最终数据前验证具体产品废物物种属性单位支持，原生条件卡仍须展开。经验限值须独立可比证据适用性，不在本PCR编造阈值泄漏或损失因子。 | 具体详情支持证据及独立数量范围 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| refrigerant_supply | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`refrigerant_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| cleaning_water | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_agents | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`cleaning_agents`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_covers | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_covers`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_packages | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_packages`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_count_returns | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_count_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| unused_mass_returns | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`unused_mass_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| recovered_refrigerant | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigeration`识别`recovered_refrigerant`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigeration`; 实际来源关联原生记录 |
| carcass_waste | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_carcass`识别`carcass_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`carcass_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_carcass`; 实际来源关联原生记录 |
| unusable_refrigerant | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_refrigeration`识别`unusable_refrigerant`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_refrigeration`; 实际来源关联原生记录 |
| other_wastes | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`other_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| wastewater | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | chilled_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

计量真实制冷压缩机、风机、除霜、轨道搬运、照明及卫生用电，并纳入归属待机。场址采用购入电力，不含场内燃烧。保持已接收冷藏胴体不同于补做未完成初次冷却；记录实际接收保持热负荷及温控偏离。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：胴体冷藏保持的实际购入电能
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属的购入电力
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：建立可比能耗范围需实际来源计量、冷间开门除霜记录、接收温度和不重叠全使用者驱动证据；不取历史手册冷却时长、每千克电耗或压缩机容量作默认值。

#### refrigerant_supply

按完整物质混合物身份组成状态记录真实外部供给，区别于已安装回路充注及历史回收流体。供给购入和补充不等于空气排放。维护实际供给与供方资产范围只纳入一次。

- 身份采集要求：冷间回路实际供给的新制冷剂流体
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的新制冷剂供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实流体SKU、气瓶总重皮重净重、库存充注及未用退回和回路供方范围，附组成基准来源；不默认制冷剂种类、充注量、泄漏率或补充量等于排放。

#### cleaning_water

仅记录本路线实际外购房间轨道设备卫生水，附来源处理和清洁期间归属，不含直接环境取水。产品滴液、除霜冷凝水、外购冲洗水、循环及实际废水分别辨识。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入的胴体冷间及轨道卫生用水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属的购入卫生用水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需实际计量清洁记录和兼容数量去向证据；不从购水推胴体损失或污水量，不引入历史清洁频次。

#### cleaning_agents

按经营者实际采用程序记录设备房间表面的真实名称配方产品及用量，附接收去向。不将历史指导中的消毒化学、配方、稀释或剂量设为强制。直接对肉表面去污处理在本路线外。

本卡为独立身份分支`cleaning_agents_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际按质量计量的房间轨道卫生药剂
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的按质量计量卫生药剂供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需实际SKU浓度状态组成、收货库存用量退回和程序来源；历史含氯浓度或危险分类不是当前耗用释放因子。

#### added_covers

仅记录批发阶段实际新增的离散保护罩或标识耗材并按SKU展开，不强制悬挂冷藏半胴体必须包装。原有包装留在商品审计；挂钩吊架轨道及可复用支撑按寿命资产归属，不按每次发货购新罩。

- 身份采集要求：实际按件新增的胴体保护罩封签或标签
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的按件新罩及标签
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：使用实际件数库存和产品身份；独立实测质量视图不可和同一物理件数重复相加。不默认每半胴体罩数或罩质量。

#### provider_packages

有实体结果和范围的实际已完成原生Count服务包；其他实际原生单位需展开交换并验证支持。供方实际投入资产废物运输覆盖一次，供方原有检验证据不自动成为新增购入服务。外包排除加工不等于普通储存。

- 身份采集要求：已完成的外部实体卫生检验或维护服务包
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的已完成供方服务包
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需服务包ID、实体结果、原生单位、已完成数量及上游纳入重叠矩阵；价格、人工小时或食品证书名义不能证明一个清单服务包。

#### shared_assets

以匹配完整生命周期份额表示真实冷间结构、制冷设备、轨道挂钩吊架、衡器和复用搬运支撑。完整范围包括制造、适用时初装充注、维护替换退役寿命末端，当前直接事件资源须辨识且只计一次。

- 身份采集要求：冷间制冷及悬挂轨道资产当量的全生命周期
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的资产当量数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：证据覆盖全部使用者期间及观测寿命或历史加有来源剩余量、维护替换寿命末端。评估实际挂钩空间时间或有依据的热负荷质量驱动兼容性；不默认寿命、密度、每钩千克或按批平均分。

#### freight

仅计商户责任且未在供方商品或服务数据集覆盖的真实承运段。载荷为称重胴体本体及适用包装运输范围，支撑皮重另明，不是去骨可食肉或活重。冷藏车能源资产制冷剂和空返须由承运完整覆盖一次。

- 身份采集要求：实际冷藏半胴体货运及退回运输功
- 流属性/单位：mass*distance / kg*km
- 数量规则：每参考流实际归属的冷藏运输功
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需实际分段距离、净载荷状态、转换、载荷归属及空返制冷范围；不设标准胴体质量、旅程或车辆制冷因子。

#### unused_count_returns

真正向具名接收方外送的可用未耗用新罩标签或其他原生Count耗材，与同一输入SKU状态配对。结存或回收到期末的量不算外送。商品退回另记商品记录。

- 身份采集要求：当前作业实际未用按件耗材退回
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的未用按件耗材退回
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实输入退回SKU件数状态及外送证据，并选择总输入加独立退回输出，或仅耗用且省去退回交换口径；不重复扣退回，不自动给避免产品信用。

#### unused_mass_returns

仅包括同一流体化学品SKU状态的当前新供给实际未用外送，附匹配质量基准；与回路回收历史制冷剂及已耗用污染废物分开，不净扣无关化学品或物种。

- 身份采集要求：实际未用新制冷剂或卫生物资的按质量退回
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的未用当前按质量供给退回
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需实测净退回、真实接收转移和准确输入兼容；期末库存不是外送，回路回收流体不能默认是未用新供给。

#### recovered_refrigerant

实际从回路移出且在明确门槛被接收方接受再利用或再生的有用流体，保留来源组成状态接收方。回收留存场内仍为库存充注，不是外送。不能用的流体按送处理废物状态记录。

- 身份采集要求：实际外送再用的有用回路回收制冷剂
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的有用回路回收制冷剂外送
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigeration`

数量范围证据需求：需真实回收气瓶总重皮重净重、去向验收及回路历史；不由补充推回收，不负购入，不给避免新制冷剂信用。

#### carcass_waste

仅计真实物理收集并送具名接收方的拒收胴体材料或单独辨识滴液，附各自状态数量去向。商业可接受的供方买方退回属于商品流转。滴液不全等于可食肉；蒸发或不明称量差不自动成为本废物。稀释冲洗液归互不重复废水流。

- 身份采集要求：实际已收集的拒收胴体材料及单独滴液
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的已收集胴体相关废物
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_carcass`

数量范围证据需求：需称量真实不同状态材料及接收方，必要时保留用于损失调整处理的组成状态证据；不设肉损、骨比例、滴液率或库存差量默认值。

#### unusable_refrigerant

实际从已安装回路回收但不能使用，并按已测质量组成状态送往具名处理方的已收集废物流。它不是有用产品回收、留存期末库存、普通清洁废水、未用新供给退回或空气释放。接收处理和供方责任只覆盖一次。

- 身份采集要求：实际已收集送处理的不可用回收制冷剂
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的不可用回收制冷剂废物
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigeration`

数量范围证据需求：需真实回收废物气瓶总重皮重净重、化学组成状态、外送转移及接收处理证据；不从补充或可回收充注量差推定不可用废物。

#### other_wastes

按材料组成和接收处理展开实际废保护罩、清洁残余和吸附物。每股流与未用物资、专门的有用或不可用回收制冷剂卡及胴体废物分开，实际危险性和处理须有证据。

- 身份采集要求：实际已收集的废包装及卫生材料
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的其他已收集废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：使用真实称量皮重状态接收及处理证据；不默认危险性、处置率，不重复胴体制冷剂废水流。

#### wastewater

实际计量并送具名处理方的清洁水性出流，混合前辨明是否包含胴体滴液、除霜或冷凝来源。单独收集滴液及循环水不得再次相加。直接环境排口不是已收集废物状态，实际发生须另审基本流展开。

- 身份采集要求：送处理的实际已收集冷间清洁及相关水性废水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属的已收集废水体积
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实体积、转换所需密度状态、实测污染特征及接收范围；不得将自来水购入、胴体缩水或冷凝水直接作污染负荷。

#### direct_species

仅在有适当证据时记录实际释放物种和接收介质，包括制冷剂物种。整股流体损失组成去向、真实回路充注回收及其他直接事件与供给独立可审计；补充量不是直接释放量。普通宰后变化、滴液、气味或消毒剂危险性不等于具名空气污染物。

- 身份采集要求：实际逐一确认的冷间直接物质释放
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的直接物种质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：采用实测物种质量、有效匹配活动因子或实测整股释放及兼容组成去向。保留分子物种介质、整股不可叠加及完整因子信息；不自动给CO2、制冷剂或消毒剂排放因子。

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `preservation_gate_check` | accepted_service | N>0最终唯一商户验收批次，真实已检验完成初冷前状态和保持冷藏买方门槛，真实本体净量皮重ID及完整温度时间条件。半胴体数千克发票轨道转移均不是服务参考。 |  |
| `excluded_processing` | 全部范围 | 核对无隐藏补做初冷、切割去骨冻结解冻主动熟化等加工，不宣称自然宰后变化不存在，以真实历史验收标准为准。外包加工须另审路线。 |  |
| `carcass_and_loss` | 商品出口 | 核对真实本体皮重状态及匹配库存退回期末内部转移、真实滴液蒸发丢弃及不明缩水；兼容原门槛损失调整在服务外一次。不默认零损失，不把缩水等于废肉污染物。 |  |
| `cold_and_lifecycle` | 全使用者期间供方资产 | 核对真实挂钩空间时间或有依据热质量驱动单位，全部使用者待机清洁覆盖，直接供方运输处理唯一责任。资产制造充注维护替换寿命末端完整，剩余来源不确定性明确，不重复归一化或新供给退回扣减。 |  |
| `refrigerant_and_water` | 全部流体与direct_species | 分开新供给、已装充注、未用新退回、回收留存重充有用外送、专门不可用回收制冷剂废物及其他真实废物释放。补充不等于排放；清洁出水滴液冷凝除霜和直接排口分开，物种介质因子组成去向独立有证据且不相加。 |  |
| `bilingual_projection` | 全部卡规则协议 | 原始双语六参考字段、真实输出卡关联名称、属性单位证据协议原始操作数、来源URL和有序规则与规范投影对齐；自动一致性不验证真实食品质量或最终交换身份。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 完整真实前景采集及具体交换验证后，作为secondary_dataset或background_dataset |
| downstream_use | 冷藏保鲜自营批发服务增量模块，关联独立原门槛胴体商品系统和兼容实测损失调整一次；不是完整交付牛肉足迹。 |
| allowed_use | 已声明检验完成初冷牛半胴体商户冷间轨道批次及真实买方门槛，附本体数量皮重条件时间和实体资源范围。 |
| excluded_use | 活牛或屠宰初冷制造；去骨肉内脏参考；主动熟化切割冻结解冻；代理零售独立仓储；安全保质期保证或未跟踪损失接口。 |
| required_metadata | 商户产权场址冷间；胴体源批批次期间；检验及完成初冷放行；总皮本体质量带骨状态及半胴体数；真实屠宰接收保持发运验收时间及核心表面状态；全使用者冷轨道供方承运资产制冷剂水废物范围；原门槛损失数量状态单位来源唯一责任及既有覆盖 |
| required_quality_disclosure | 探头衡器校准及真实验收标准；自然状态变化偏离和不明缩水调查；全使用者物理驱动依据和完整资产供方期间范围；真实回路供给充注回收去向及物种证据；实际出水滴液处理和兼容商品损失关联；身份及数值范围缺口 |
| update_trigger | 接收胴体冷却状态、买方标准条件或产品历史改变；新增加工熟化；冷间冷却回路轨道资产寿命供方承运水卫生路线改变；实际损失温控偏离释放或实质来源证据更新 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| fao-meat-cold-preservation | official_guidance | FAO，《肉类冷库运营管理手册》，肉类产品冷藏保鲜。https://www.fao.org/4/t0098e/t0098e02.htm | 历史原始资料，用于区分初次冷却与冷藏保持、自然宰后活动及质量状态变化；不采用任何数字温度时长密度熟化方案损失率作默认或现行法律要求。 |
| fao-meat-coldstore-operations | official_guidance | FAO，《肉类冷库运营管理手册》，冷库规划。https://www.fao.org/4/t0098e/t0098e03.htm | 历史悬挂胴体轨道搬运、接收已冷胴体储存、卫生运输背景。采集实际资源程序，手册清洁配方、固定布局装载和运营案例不作为PCR数量或当下法律。 |
