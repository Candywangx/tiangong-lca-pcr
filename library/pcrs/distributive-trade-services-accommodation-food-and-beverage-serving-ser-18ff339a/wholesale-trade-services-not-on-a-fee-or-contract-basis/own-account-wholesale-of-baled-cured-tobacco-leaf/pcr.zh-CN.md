---
pcr_id: pcr.own-account-wholesale-of-baled-cured-tobacco-leaf
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 成捆已调制烟叶的自营批发服务

## 1. 范围与适用性

本PCR适用于经营者在一个明确批发仓库内，以自营采购并转售方式提供的完整成捆已调制未加工烟叶实体服务，采用电动装卸。接收核验、库存跟踪、监测储存、实际发生的外包检验或不处理烟叶的虫害服务、不改变烟叶状态的订单集结，以及商业买方验收交接构成一项商业服务。实际质量规范和合法供方责任由经营者声明。

排除种植、采收、初次调制、复烤、回潮调制、主动加湿、以发酵陈化为独立加工目的的作业、打叶去梗、混合、烟草制品制造、零售和收费或合同代理服务。单独仓储或运输服务不是参考服务。完整烟捆可修补外包装或标签，但不处理烟叶。实际改变物料状态须另行审定路线。本服务作为增量模块，商品制造的全部负担（包括损失烟叶的上游隐含负担）留在另行关联的商品系统。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-baled-cured-tobacco-leaf |
| classification_refs | CPC 3.0:61013 非按收费或合同方式提供的未加工烟草批发贸易服务；本PCR仅覆盖较窄的成捆已调制烟叶服务子集 |
| covered_products | 在明确买方验收门槛交付的完整成捆已调制烟叶自营商业批发批次服务 |
| excluded_products | 烟叶商品生产、未调制烟叶、加工或调制处理、烟草制品、零售、代理及单独仓储运输服务 |
| representative_product | 成捆已调制烟叶的自营批发服务 |
| production_route | 自营接收核验 -> 批次及库存控制的监测储存和电动装卸 -> 实际辅助服务及商业买方验收 |
| market_state | 已完成的服务，而非烟叶商品本身；原有已调制烟叶及烟捆状态不变，实际等级、水分、条件及时间须声明 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 可追溯的完整成捆已调制烟叶批次的已完成自营批发服务 |
| How much | 1 Item(s) |
| How well | 实际采购转售责任和商业买方对烟草类型、已调制状态、等级、净质量与水分基准及烟捆状态的验收；不作通用等级保证 |
| How long or cycle | 从实际接收到最终买方交接的期间，加关联批次库存期间和归属的待机、卫生与拒收事件 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的成捆已调制烟叶自营批发批次 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | own_account_resale; operator_site; consignment_id; source_lot_ids; tobacco_type; curing_method; crop_year_origin; grade_scheme_and_grade; actual_net_mass; moisture_value_basis_method; bale_package_form; receipt_and_handover_time; actual_storage_conditions; buyer_acceptance_gate; provider_freight_scope; commodity_loss_owner_and_adjustment |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `service_reference` | accepted_service | Count `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 采用1个已完成自营批发批次。N>0，计最终唯一验收ID；重复发票、烟捆、抽样、拒收尝试和中间交接均不得增加N。不得把千克、价格或利润换算为Count。 |
| `merchandise_basis` | 商品审计与tobacco_waste; tobacco_waste_atomic_case | Mass | kg | 按实际水分基准测量总重、皮重和烟叶净重；水分变化不是干物质消失。用实际批次水分观测和不确定性核对干物质。公开等级伤损或废物容许值属于质量分类，不是损失率。 |
| `native_quantity` | 供给、公用工程、货运、供方及资产 | 实际交换属性 | 实际匹配单位 | 保留实际原生单位及转换来源；Count服务包与资产当量是不同对象。服务范围、电力属性、单位组或转换未明时，不得定稿实际交换。 |
| `single_normalization` | 全部清单 | 行专属属性 | 行专属单位 | 每项采集或计算的批次总量先归属本节点，再除N一次；每参考流结果不得再次除N。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 已购入的完整成捆已调制烟叶，附实际承接的水分、等级和包装身份；不虚构零负担商品输入 |
| starting_condition_role | 实体批发服务增量模块起点；既有商品制造保留在另行关联的产品系统 |
| product_classification_scope | CPC 61013内较窄的商业批发服务，不代表所有未加工烟草路线 |
| recursive_input_rule | 不得通过同一经营者将服务递归回自身，不得把交易烟叶当作批发服务耗用输入。明确供方边界可以引用不同服务一次。 |
| upstream_dataset_requirement | 完整匹配的电力、实际供给、供方、资产、货运及废物处理数据集；另行关联的兼容已调制烟叶商品数据集及实际一次性损失调整 |
| disclosure | 商业范围和门槛；实际批次库存期间；保留的烟叶状态、等级和水分；实际辅助作业；全部来源、供方、资产、运输段、出口和使用者；商品损失接口的责任者、数量及基准 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `service_addon` | 全部范围 | 本PCR是批发服务增量模块，不是烟叶从摇篮到门商品。全部服务交换均排除上游种植、调制和所有交易商品制造，包括损失商品的上游隐含负担。作完整链或最终数据包声明前，须在增量模块外关联一次且仅一次的商品系统损失调整。 |  |
| `starting_leaf` | 商品 | 起点为实际购入、已经调制且完整成捆的烟叶，以及既有等级、水分和包装记录。不含复烤、回潮调制、发酵、去梗、混合或烟草制造。商品流转仅进审计台账；服务输出是完成的商业批次，不是烟草千克。 |  |
| `operation_scope` | wholesale_operation | 包括实际接收核验、电动装卸、监测储存、不改变烟叶的订单集结、发运验收、归属的卫生和待机资源、拒收尝试及配对损失处理。排除供应商生产、零售、收费代理及独立仓储工作。 |  |
| `provider_scope` | 实际服务及交换 | 声明实际全使用者电表和资产范围、外包责任、实际货运段和污废水处理。上游缺项补齐一次，不重复直接与外包资源。本路线不含烟叶直接处理、场内燃烧或环境取水；实际发生须修订范围并展开对应具体交换。 |  |
| `period_and_reject` | 库存及拒收物料 | 列明从接收到买方的批次期间、期初期末库存及实际退回、拒收和降级，并关联批次、事件和转移。可用商业烟叶或碎烟退回或转售不自动成为废物、避免生产信用或第二次参考验收。商业验收或出口未定时不得定稿。 |  |


## 6. 过程清单结构

一个责任节点拥有实际实体批发服务及其全部记录；接收检验、库存控制和电动搬运不是独立生产节点。商品台账是非交换审计视图，不向服务增加购入转售商品的制造负担。实际场外完整供方服务包作为有明确范围的输入，不重复设置节点。条件卡仅根据实际前景事件展开。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `wholesale_operation` | 自营接收、库存批次控制与验收批发交接 | required | 一项明确自营完整已调制烟捆批发责任及已完成买方门槛 | 完整实体批发服务运营 | `accepted_service` |


### 过程：自营接收、库存批次控制与验收批发交接 (`wholesale_operation`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属的电力
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：建立能耗校验范围前，需匹配电表时段与账单，取得实际占用或装卸驱动量、完整期间覆盖及独立可比批次证据；不设每批电耗默认值。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的清洁和监测供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：建立范围前须有实际产品状态、浓度、库存和事件责任记录；贸易指导材料不提供用量、配方或耗用默认值。

###### 实际液态处理自来水供给 (`supplied_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属的购入供水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：使用实际供水计量与清洁事件分摊、水库存及去向和单位转换证据；不设每批耗水默认值，不推定环境取水。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的成捆已调制烟叶自营批发批次 (`accepted_service`)

以实际自营采购转售责任、明确交接门槛和商业买方验收记录定义一个批发批次。N仅计唯一已完成批次ID，不计烟捆数、抽样数、发票数、失败次数或单独产权转移。实际净质量、水分、等级、路线和期间均为必要限定信息，不设固定批重。

- 选定流：已完成的成捆已调制烟叶自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_merchandise`

数量范围证据需求：1是归一化常数，不是经验收率或标准批重。需签署商业验收、关联批次烟捆数量和实测水分及等级证据；不得以利润、烟捆数或千克替代N。

##### 废物流

###### 废弃调制烟叶 (`tobacco_waste_atomic_case`)

仅在实际独立记录确认“废弃调制烟叶”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`tobacco_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃调制烟叶
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的已收集烟叶废物
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_merchandise`

数量范围证据需求：需实际称量的接收态净废物、水分或干物质基准、分类和接收方证据；美国等级伤损或废物容许值及干物质量差均不是仓储损失或排放因子。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `commodity_interface` | 商品及损失 | 全部商品制造留在服务外。量化实际兼容基准下不可恢复的烟叶损失及去向，记录关联商品数据集与门槛、明确调整数量和基准以及唯一商品损失责任者。下游集成须在该商品系统供应一次且仅一次的损失上游烟叶负担；缺少调整或在本服务重复加入均不可接受。不默认零损失，不靠干质量差推定。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| `cohort_attribution` | 全部批发资源 | 仅有一种服务输出类型。用有证据的因果驱动量把共享运营归属到全部实际合同、批次和期间，不默认按批次数平均。记录选定驱动量、所有使用者和分子分母单位。拒收和重做保留实际负担，不自动给予碎烟或退回信用。 |  |
| `asset_lifecycle` | shared_assets | 采用asset_equivalent=(job_driver/life_driver)/N，对应完整匹配生命周期，包含制造、维护、替换和寿命末端。life_driver覆盖全部使用者和期间。使用观察到的完成寿命，或有记录历史及有证据剩余量，并覆盖实际替换、终止及不确定性、敏感性和更新。不得再叠加每驱动量服务口径或重复归一化。 |  |
| `returns` | 供给与商品 | 当前供给S=opening+net_receipts-closing，选择含外送总供给S/N加配对未用外送退回台账，或仅耗用(S-usable_outward_return)/N且必须省略本匹配外退输出交换。期末库存含回收到期末的数量；损失和已耗用物资保留上游负担。商品退回留在独立商品台账及其实际责任者与损失接口。 |  |

未完成批次的已归属资源保留在关联开放批次及期间记录，直至实际验收或最终拒收去向明确；不得形成已完成参考数量，也不得从期间核算消失，不得任意把其负担转给已验收批次。


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_merchandise` | wholesale_operation | 商业验收及非交换商品库存损失审计 | commercial_stock_record | site_id; operator_id; contract_id; cohort_id; lot_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; bale_id; tobacco_type; curing_method; crop_year; origin; grade_scheme; contract_specification; grade; package_form; gross_mass; tare_mass; net_mass; mass_unit; moisture_value; moisture_basis; moisture_method; moisture_wet_fraction; moisture_fraction_conversion; moisture_fraction_source; sample_id; sample_time; sampling_coverage; moisture_source; calibration; opening_quantity; external_receipts; internal_transfer_id; usable_supplier_return; customer_return; carried_closing; recovered_closing; accepted_dispatch; rejected_quantity; downgraded_quantity; commercial_scrap; waste_quantity; loss_fate; receiver; transfer_id; arrival_time; departure_time; storage_conditions; temperature; temperature_unit; humidity; humidity_unit; ownership_evidence; buyer_acceptance; commodity_dataset_id; commodity_upstream_gate; commodity_loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_basis; loss_adjustment_unit; loss_adjustment_source; commodity_loss_owner; commodity_overlap_check; uncertainty; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 核对实际采购产权、烟捆批次称量与水分抽样、仓库移动台账以及商业买方签署验收；抽样和等级规范按实际合同。N为reference_gate_id下最终唯一accepted_consignment_ids。未完成批次资源归属须保留在开放批次期间结转关联中，不得虚构验收或无故漏记负担。分别跟踪拒收尝试、买方退货、期末库存、可用供应商退回、商业降级出口及已收集废物。关联兼容干物质平衡以及服务外商品损失调整。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 指定水分基准下商品kg | 每次商业验收、接收、发运、拒收及期间盘点 | 所选批次从接收到实际买方门槛的全部期间及前后关联库存，包含全部尝试和归属清洁时段 | 明确的一个批发仓库及实际归属供方和运输范围 | per reference flow | 商业签署验收、校准抽样及干物质批次核对；明确商品损失责任者和上游门槛 |
| `cp_supplies` | wholesale_operation | 当前作业耗材与未用外送退回 | supply_stock_record | site_id; operator_id; contract_id; cohort_id; lot_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; sku; material_identity; material_state; native_property; native_unit; opening; gross_receipts; tare_receipts; net_receipts; closing; recovered_closing; usable_outward_return; receiver; return_transfer_id; internal_issue; consumed; waste; loss; chosen_return_view; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 按实际SKU和状态，用称量或经校准原生单位库存交付记录核对；期初加净接收减期末为S。含外送总供给口径用S/N并配对外送退回；仅耗用口径用(S-usable_outward_return)/N，并完全省略匹配外退输出交换。回收到期末的数量已含于期末，未退回废物和损失保留供给负担。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际供给原生单位；kg仅适用于实际按质量计量物资 | 每次接收、退回、领用及期间盘点 | 全部所选批次作业及归属前后库存期间 | 同一明确批发节点与供给边界 | per reference flow | 库存核对，相同输入与退回SKU状态单位，转换来源及退回接收证据 |
| `cp_utilities` | wholesale_operation | 购入电能与供水 | meter_record | site_id; operator_id; contract_id; cohort_id; lot_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; meter_id; source_id; utility_type; reading_start; reading_end; meter_factor; meter_register_role; metered_interval_quantity; gross_import; gross_export; water_supply; recirculation; contained_wastewater; evaporation; retained_water; conversion_factor; conversion_unit; conversion_source; driver; driver_unit; attributable_share; all_consumers; coverage_start; coverage_end; idle_use; provider_inclusion; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取匹配实际源电表水表和账单，保留不重叠使用者时段及包含待机卫生的实际驱动份额。不得用无关外送净扣，不把购入水直接当废水，不重复供方已含电力。电力是交付电能而非燃料热值。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh; m3 | 每个计量时段与清洁装卸事件 | 归属所选批次和期间份额的全部运营待机清洁时段 | 明确仓库及互不重复归属的公用工程使用者 | per reference flow | 校准、账单分表、全使用者驱动核对和实际公用工程范围 |
| `cp_provider` | wholesale_operation | 已完成外包检验监测与虫害服务包 | provider_completion_record | site_id; operator_id; contract_id; cohort_id; lot_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; provider_id; service_identity; native_property; native_unit; quantity; physical_result; completed_package_id; acceptance_id; covered_materials; covered_energy; covered_assets; covered_transport; covered_wastes; covered_releases; responsibility_limit; missing_scope; direct_overlap; upstream_dataset; upstream_unit; evidence; uncertainty | 取得实际供方完成结果、责任范围清单及匹配上游数据集。原生Count服务包需不可分割实体完成结果和实际服务包ID；不得将收费或工时转为Item(s)。其他原生单位需展开实际单位交换并验证支持身份。补齐缺项一次且无重叠。 | 实际供方原生单位；仅原生服务包可用Count | 每个实际已完成服务包 | 所选批次全部归属供方事件，含重复或拒收工作 | 实际供方与仓库责任接口 | per reference flow | 已签结果验收、完整范围矩阵及兼容单位上游证据 |
| `cp_assets` | wholesale_operation | 共享仓库电动装卸资产的全寿命驱动 | asset_lifecycle_driver_record | site_id; operator_id; contract_id; cohort_id; lot_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; asset_id; asset_identity; asset_lifecycle_dataset; driver_unit; job_driver; life_driver; life_driver_unit; all_consumers; all_periods; service_start; service_end; observed_life; observed_history; evidenced_remainder; remainder_source; manufacture_scope; maintenance_scope; replacement_events; replacement_scope; termination_event; eol_scope; lifecycle_sources; provider_inclusion; selected_view; uncertainty; sensitivity; update_trigger | 使用实际资产台账及覆盖全部合同、批次、节点和期间的兼容全寿命驱动量，含维护替换退役寿命末端以及有证据剩余使用量。每项只选完整匹配资产当量Count口径一次；不得将资产年、周转或小时换作整项物品，也不按批重复制造负担。 | 资产当量Item(s); 兼容实际驱动单位 | 每次使用、维护、替换及终止事件 | 完整资产制造及全部使用期间直至退役寿命末端；另行关联所选批次驱动量 | 明确仓库、货架、衡器、电动装卸与复用资产的全部实际使用者 | per reference flow | 完整生命周期清单数据集边界、有来源驱动和剩余量、敏感性及修订证据 |
| `cp_freight` | wholesale_operation | 实际外包货运段及退回 | shipment_record | site_id; operator_id; contract_id; cohort_id; lot_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; shipment_id; leg_id; carrier; load; load_unit; load_kg; load_conversion; load_conversion_source; distance; distance_unit; distance_km; distance_conversion; distance_source; attribution_share; all_loads; empty_return; empty_service_coverage; commodity_inclusion; provider_inclusion; direct_overlap; uncertainty | 按唯一运输段以承运人和烟捆记录核对实际装载质量与路线距离；保留责任及空返服务范围。不重复商品或供方已含运输段，不将库内装卸计货运。 | kg*km | 每个实际运输段及退返 | 所选批次责任内全部运输段，包括拒收退回段 | 明确自营作业及承运人接口 | per reference flow | 运单、实际距离及转换、互不重叠范围和空载服务证据 |
| `cp_outlets` | wholesale_operation | 已收集非商品固体废物与废水 | outlet_record | site_id; operator_id; contract_id; cohort_id; lot_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; outlet_id; origin_event; material_identity; material_state; native_property; native_unit; gross_quantity; tare; net_quantity; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; moisture; moisture_basis; temperature; temperature_unit; receiver; transfer_id; waste_classification; treatment_route; treatment_coverage; provider_inclusion; uncertainty | 测量实际净废物废水出口，按材料状态及接收方表征并关联处理供方范围一次。可用物资退回和商业商品退回或碎烟不是废物；直接环境排放不是已收集废水。 | 实际废物原生单位；相应使用kg或m3 | 每次出口与转移 | 所选作业全部归属丢弃和清洁排水 | 实际仓库边界与接收处理方 | per reference flow | 转移处理联单、校准、组成和接收状态及范围证据 |
| `cp_environment` | wholesale_operation | 实际直接物种与接收介质 | species_release_record | site_id; operator_id; contract_id; cohort_id; lot_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; exchange_id; resource_or_substance; species; particle_basis; receiving_medium; source_event; measured_mass; mass_unit; activity; activity_unit; species_factor; factor_unit; factor_scope; factor_source; factor_complete; whole_release; whole_release_unit; composition; composition_basis; composition_source; fate; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_source; temperature; temperature_unit; pressure; pressure_unit; capture_state; provider_inclusion; detection_limit; calibration; uncertainty | 量化前确认实际直接物质和接收介质。采用校准实测质量、兼容活动因子或实测整股释放及有来源组成去向，三者互斥；已捕集物料、整股流体和物种视图不可相加。化学库存差和安全数据表危险性不是释放证据。 | 实际物种和介质的kg | 每次实际释放及相关测量时段 | 所选作业全部直接释放事件及归属期间 | 实际排放仓库源，不含供方已纳入排放 | per reference flow | 物种环境介质证据、检出限校准以及因子组成去向兼容性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `completed_count` | accepted_service | N=明确最终reference_gate_id下唯一accepted_consignment_ids的数量；accepted_service=1 Item(s)。 | cp_merchandise | 一个实际商业批次参考，保留实际质量水分等级与时间限定 |  |
| `supply_stock` | packaging_supplies; cleaning_supplies; usable_supply_returns; cleaning_supplies_synthetic_detergent | net_receipts=gross_receipts-tare_receipts; S=opening+net_receipts-closing; gross_input=S/N OR consumed_input=(S-usable_outward_return)/N。仅选择一种口径；仅gross_input保留匹配外退输出，consumed_input必须省略该输出交换；recovered_closing归入closing，未退回废物和损失供给仍纳入。 | cp_supplies; N | 每参考流实际原生供给与单独记录的外送退回 |  |
| `merchandise_balance` | 商品审计; tobacco_waste; tobacco_waste_atomic_case | 按各批次核对兼容实测期初、接收、发运、实际外部退回、期末及全部出口去向。仅有匹配水分观测及有记录小数转换时才计算dry_matter=net_mass*(1-moisture_wet_fraction)；按实际批次累加干物质，不跨水分状态累加未调整湿重。调查未知差，不推定废物、蒸发或排放。成对内部转移不可重复相加。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | cp_merchandise | 非交换商品审计及实际商品系统损失调整证据，不增加烟叶制造交换 |  |
| `utilities` | electricity; supplied_water; electricity_ac; supplied_water_liquid_tap | 对相应来源的购入计量寄存器，metered_interval_quantity=(reading_end-reading_start)*meter_factor，或采用实际直接记录的兼容来源数量；utility_quantity=sum(metered_interval_quantity*conversion_factor*attributable_share)/N；使用不重叠源及使用者时段，并覆盖待机卫生的全使用者驱动。供水与实际水去向分别保留。 | cp_utilities; N | 每参考流实际交付公用工程数量 |  |
| `provider_complete` | provider_packages | provider_quantity=quantity/N；适用于实际完成且原生Count服务包并匹配上游单位和完整范围，否则最终数据前展开实际原生交换。缺项missing_scope补齐一次，消除direct_overlap。 | cp_provider; N | 每参考流实际完整外部服务 |  |
| `asset_equivalent` | shared_assets | asset_equivalent=(job_driver/life_driver)/N；每项资产需兼容驱动单位及完整生命周期匹配数据集。 | cp_assets; N | 每参考流归属的完整生命周期资产当量Item(s) |  |
| `freight_work` | freight | freight_work=sum(load_kg*distance_km*attribution_share)/N；保留实际转换和空载服务供方范围。 | cp_freight; N | 每参考流实际kg*km及独立覆盖的空载服务 |  |
| `outlets` | tobacco_waste; other_wastes; wastewater; usable_supply_returns; tobacco_waste_atomic_case | outlet_quantity=net_quantity/N，按实际材料状态与接收方区分。烟叶废物取cp_merchandise实际waste_quantity记录，不能取不明库存差。配对接收处理范围一次，不给避免产品信用。 | cp_merchandise; cp_outlets; cp_supplies; N | 每参考流实际物理出口 |  |
| `species_release` | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR whole_release*composition*fate/N，先作兼容基准单位转换。选择一种有效路径，factor_complete禁止再次乘组成去向。 | cp_environment; N | 每参考流实际物种kg及实际接收介质 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `commercial_gate` | accepted_service | 每个验收ID均有产权转售责任、实体批次和按实际等级水分包装时间规范的商业买方签署验收；不得全球强制使用美国等级。 | cp_merchandise验收和等级记录 |
| `stock_and_loss` | 商品、供给与出口 | 保留成对总重皮重净重、实测水分状态、库存期间、商业拒收退回碎烟决定；调查差异并量化实际损失。完整链准备度需关联一次商品损失调整。 | 校准称量抽样证据和商品损失责任台账 |
| `scope_completeness` | 公用工程供方资产运输 | 每个实际来源使用者和期间均有唯一负担责任者、兼容单位、完整寿命或供方范围及无重叠证据；有来源剩余量、替换终止和物理出口范围均必需。 | 范围矩阵、全使用者资产驱动和供方记录 |
| `identity_ranges` | 所有展开实际交换 | 最终过程和生命周期模型数据前验证具体身份、属性和单位支持；实际SKU、供方、物种仍须展开。经验范围需独立可比证据及明确基准，不使用等级容许量或来源案例代替。 | 具体UUID详情支持证据及独立数量证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| packaging_supplies | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`packaging_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| cleaning_supplies | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`cleaning_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| supplied_water | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`supplied_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| provider_packages | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_packages`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| usable_supply_returns | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_supply_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| tobacco_waste | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_merchandise`识别`tobacco_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`tobacco_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_merchandise`; 实际来源关联原生记录 |
| other_wastes | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`other_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| wastewater | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | wholesale_operation | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

实际计量的接收、电动装卸、照明、监测以及实际运行的通风或环境控制用外购电力；包含互不重复的待机和清洁时段。本路线不包含场内发电或燃烧。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：购入的仓库与电动装卸电力
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属的电力
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：建立能耗校验范围前，需匹配电表时段与账单，取得实际占用或装卸驱动量、完整期间覆盖及独立可比批次证据；不设每批电耗默认值。

#### packaging_supplies

仅记录不对烟叶调制处理的实际外包装修补或标签用品；按材料SKU及属性和单位展开。贸易烟捆内容及其原有包装保留在商品审计台账；可复用托盘和搬运设施归入资产服务，不按每次发运重复记作新耗材。

- 身份采集要求：按质量计量的新耗用捆包外覆材料、捆带及标签
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的按质量计量包装供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需同一兼容单位下的实际SKU收货、期初和期末库存、皮重及未用退回记录；需独立身份的材料和单位分别展开，不推定每捆外覆或捆带质量。

#### cleaning_supplies

按组成和状态记录实际按质量计量的清洁剂及一次性监测用品，不预设消毒剂、杀虫剂、熏蒸剂或处理频率。本边界排除场内烟叶直接熏蒸和化学处理，实际发生须修订范围；完整外包虫害服务另行覆盖。

本卡为独立身份分支`cleaning_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：按质量计量的实际仓库卫生耗材
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的清洁和监测供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：建立范围前须有实际产品状态、浓度、库存和事件责任记录；贸易指导材料不提供用量、配方或耗用默认值。

#### supplied_water

实际归属于运营的购入清洁或卫生用水，不包含烟叶调制、主动加湿及本路线外的直接环境取水。区分外部总供水、内部循环及废水。

本卡为独立身份分支`supplied_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：购入的仓库清洁用水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属的购入供水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：使用实际供水计量与清洁事件分摊、水库存及去向和单位转换证据；不设每批耗水默认值，不推定环境取水。

#### provider_packages

有实际完成记录和匹配原生数量单位数据集的条件性实体服务包；区分检验分析与化学处理。服务包应覆盖其实际材料、能源、设备寿命、运输和废物；缺项另行补齐一次。原生单位非Count时，最终数据前须展开实际原生单位交换并验证支持身份。 纳入的虫害服务仅限不处理交易烟叶的监测、卫生或建筑虫害作业。将烟叶直接熏蒸或改变物料状态的处理外包，并不会使该实体作业退出路线；实际发生均须另行审定范围扩展。

- 身份采集要求：已完成的外部检验、监测或虫害控制服务包
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的已完成外部服务包
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需实际服务包身份、实体完成结果、范围、原生单位、数量、纳入和重叠记录；收费金额和工时不等于一个服务包或物理等价量。

#### shared_assets

声明实际仓库、电动叉车、货架、衡器、复用托盘容器等资产，并完整覆盖制造、维护、替换、终止及寿命末端。Count当量分数对应匹配的一项完整资产生命周期，不是小时、周转、千克，也不是每订单一整座仓库。

- 身份采集要求：仓库与电动装卸资产当量的全生命周期服务
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的资产当量数量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：需覆盖全部使用者和服务期间的全寿命驱动量、已观察历史或寿命及有证据的剩余使用量、替换与寿命末端来源、不确定性和敏感性；不得任设使用寿命或资产份额。

#### freight

仅包括批发责任边界内且未在商品或服务供方上游数据集中覆盖的运输段。保留实际烟捆载重、距离、承运人、装载、单位和空返范围；库内搬运已计入电力及资产，不虚构货运周转量。

- 身份采集要求：实际外包的进货、退货与出货运输功
- 流属性/单位：mass*distance / kg*km
- 数量规则：每参考流实际归属的货物运输功
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需实际分段载重、测量或记录距离、质量及距离转换、混载分摊和空载服务处理；归属本边界的失败或拒收退运段须纳入，不默认地理平均运距。

#### usable_supply_returns

仅记录真正跨越边界退给接收方的可用未耗用当前作业物资，并与相同材料、状态和单位的输入配对。期末库存和回收到期末库存的数量不是外送退回。商品退回属于非交换商品台账，不归本卡。仅总输入S口径保留本外退输出交换；若采用仅耗用(S-usable_outward_return)输入，必须完全省略本匹配输出交换。

- 身份采集要求：当前作业按质量计量的实际未用供给退回
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的未用物资退回
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需配对SKU、状态、单位、输入及外送收据、实际净质量，以及选定的含外送总供给或仅耗用口径；不得负购入或再给一次避免产品信用。

#### tobacco_waste

仅包括实际丢弃商品或已收集烟尘，须有来源批次、水分、拒收决定及接收处理记录。商业可用的退回、降级或碎烟商品另行跟踪，不自动归为废物或服务信用。接收处理负担通过供方或直接范围覆盖一次。

- 身份采集要求：送处理的已收集拒收烟叶及仓库烟尘
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的已收集烟叶废物
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_merchandise`

数量范围证据需求：需实际称量的接收态净废物、水分或干物质基准、分类和接收方证据；美国等级伤损或废物容许值及干物质量差均不是仓储损失或排放因子。

#### other_wastes

实际废外覆材料、捆带、清洁残留、污染一次性用品及监测废物，按材料、状态和实际处理展开。可用物资退回与已耗用废物分开，不凭商品名称推断危险性。

- 身份采集要求：实际已收集的包装与卫生废物
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的其他已收集废物
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需接收联单、实际净质量或原生单位、材料组成状态、处理覆盖和不确定性；不设处置比例，不默认零损失。

#### wastewater

有接收处理身份和实测体积及必要组成的实际收集或排入污水系统废水。直接环境排水不属于本已收集废物交换；实际发生需展开明确基本流并复核路线证据。

- 身份采集要求：送处理的仓库清洁废水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属的废水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：使用实际排水、罐或污水计量和接收处理范围；购入水不等于废水或环境水排放；记录循环、留存和蒸发，不靠假定闭合水量。

#### direct_species

仅在实际发生时，按物质和接收介质记录直接运营排放，包括有证据的颗粒粒径烟尘或制冷剂物种；已捕集烟尘属于已收集废物。展开具体物种和介质并验证身份；库存差、化学危险性和气味均不是排放数量，外包已含排放不重复。

- 身份采集要求：实际分别确认的仓库物质排放
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的物种质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：使用实际物种质量测量、有效匹配的活动专属因子，或实际释放整股流体质量及有证据的组成和去向。保留来源、基准和不确定性，完整因子不再乘组成或去向；不默认尼古丁、熏蒸剂或制冷剂排放。

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `reference_gate` | accepted_service | 检查N>0的最终唯一已验收批次ID和全部限定信息，1 Item(s)仅为归一化。禁止千克、烟捆、发票、费用等价换算，未定拒收不得算验收。 |  |
| `stock_moisture` | 商品与供给 | 检查单位状态专属库存和配对水分干物质平衡、内部转移、含回收量的期末库存、实际外部退回、商业碎烟和已收集废物。不得以不明差推定排放损失，不重复扣外送退回，不默认零损失。 |  |
| `commodity_interface_check` | 服务及关联商品系统 | 要求明确排除全部商品上游负担，并把实际损失去向数量基准关联到具名商品数据集门槛及一个责任者；完整链或最终包声明前，验证损失上游调整在服务外恰好一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| `scope_and_asset` | 全部作业与期间 | 检查实际全电动及完整烟捆不变路线、期间事件覆盖、完整供方资产寿命范围、全部使用者、精确原生单位和实体结果，包含货运拒收退回待机清洁及废物处理；缺项视为不完整而不是零。 |  |
| `species_and_water` | direct_species; supplied_water; wastewater; supplied_water_liquid_tap | 分开购入水、已收集废水和实际直接环境交换。验证实际物种介质粒径基准以及测量因子组成去向证据，不重复路径；化学危险性或水分差不能作释放量。 |  |
| `bilingual_projection` | 全部规则与卡 | 对照两种语言及生成投影的有序ID、实际原生属性单位、数量基准、节点专属协议原始操作数、来源URL及参考卡关联；最终UUID和有来源数量范围须另行验证。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 完成前景采集并验证具体交换后，可作为secondary_dataset或background_dataset |
| downstream_use | 仅服务批发增量模块，关联一次独立兼容已调制烟叶商品系统及其测量损失调整。 |
| allowed_use | 一个已声明电动装卸完整已调制烟捆自营批发批次、场址和门槛，以及实际已验收批次和全部限定信息；仅在范围和实体数量可比时比较。 |
| excluded_use | 完整交付烟草商品足迹；种植调制加工制造；零售代理独立仓储；未跟踪商品损失负担或通用批重等级阈值。 |
| required_metadata | 经营者和场址；批次发运与源批ID；产权转售与买方门槛；烟草类型调制方法等级作物年度和产地；净质量、水分抽样和基准；完整烟捆包装；到发时间和储存条件；实际供方货运资产及期间边界；关联商品数据集损失调整及唯一责任者 |
| required_quality_disclosure | 校准与水分等级抽样覆盖；差异损失调查；全部范围原生单位缺口；全寿命资产驱动和剩余量不确定性；供方覆盖；实际损失处理及商品系统一次性接口；具体UUID和数量范围证据限制 |
| update_trigger | 产品状态、调制处理路线、商业门槛、来源场址货运供方资产寿命、水分等级方法、库存损失模式或实质证据改变；直接燃烧处理取水须复核边界和交换 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| inrae-tobacco-storage | extension_guidance | INRAE ePhytia，调制与储存建议。https://ephytia.inrae.fr/en/C/11065/Tobacco-Recommendations-for-curing-and-storage | 仅支持干燥、避光、离地烟捆储存和碎屑卫生的定性背景；调制建议在本服务外。不提供批发能耗、寿命、水分或损失因子。 |
| usda-tobacco-grades | official_guidance | 美国农业部AMS，烟草等级与标准。https://www.ams.usda.gov/grades-standards/tobacco | 实际声明烟叶类别类型和等级的商业质量背景；选择适用合同规范，不全球强制美国分类。 |
| usda-tobacco-scrap | official_guidance | 美国农业部AMS，烤烟杂类与碎烟等级。https://www.ams.usda.gov/grades-standards/flue-cured-tobacco-us-types-11-12-13-14-foreign-type-92-nondescript-n-group-and | 仓库搬运可产生有商业定义的碎烟。等级伤损和废物容许值不是仓储物理损失率，也不证明全部碎烟均为废物。 |
