---
pcr_id: pcr.own-account-finished-glazed-porcelain-plate-wholesale
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 成品施釉长石瓷盘自营批发服务

## 1. 范围与适用性

本PCR覆盖厂家完成烧成施釉长石瓷盘及继承包装放行后的商户自营批发，经普通常温库存搬运和真实商业买方验收。真实SKU尺寸釉批次、盘件堆箱关系、盘体釉净重、隔片纸箱支撑皮重及完整缺口破碎状态限定服务。网页包装量不证明盘净量。

排除原料坯料成形烧成施釉整理制造，商户洗消食品接触或强度测试、修补磨削重包、未审专用温控、其他餐具材料、代理零售独立物流。外包真实加工仍须范围审查。消费者首洗微波洗碗及耐用营销不是仓库操作或通用强度破损寿命安全保证。不强制破坏拆包装测试，可采用真实可追溯供方非侵入记录。

完整已烧施釉盘继承包装制造及损失上游在服务外。完整链条前须独立完整厂家商品系统，具实际归属源需求、全群组出口及相容一次损失调整责任既有覆盖。真实商户搬运清理接收处理一次。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-finished-glazed-porcelain-plate-wholesale |
| classification_refs | CPC 3.0:61045; 成品施釉长石瓷盘自营商户较窄子集，商品3722下37221 |
| covered_products | 真实厂家已烧施釉长石瓷盘SKU批次普通常温商业批发 |
| excluded_products | 原黏土长石坯料制造烧釉其他器材；洗消测试修磨重包未审温控；代理零售独立物流 |
| representative_product | 真实SKU尺寸釉盘件堆箱及净皮重状态从成品放行至唯一验收商业批次 |
| production_route | 完整烧釉成品包装放行→商户接收文档状态库存检查→普通常温搬运存放→买方验收 |
| market_state | 真实成品盘包状态门槛限定的已完成商业服务，不是一盘窑输出施工或消费者使用数据 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的成品施釉长石瓷盘自营批发服务 |
| How much | 1 Item(s) |
| How well | 实际SKU尺寸釉源批、盘包装数量净皮重状态及真实买方验收标准 |
| How long or cycle | 实际厂家放行商户接收存放发运买方验收及关联库存未完成资源期间，无通用盘使用寿命 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的成品施釉长石瓷盘自营批发批次 |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | manufacturer_id; product_sku; source_lot_id; finished_fired_glazed_gate; porcelain_glaze_state; actual_size; size_unit; plate_piece_count; stack_carton_membership; net_plate_mass; mass_unit; inherited_pack_tare; intact_chipped_broken_state; buyer_gate; merchant_id; reporting_period |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N为最终唯一验收商业批次，不是盘碎片堆箱发票kg或货币。 |
| plate_pack_native | 商品审计 | Mass; Count | kg; Item(s) | 实测隔片纸箱支撑皮重后盘体釉净量，真实盘件堆箱关系。厂家包装量不能自动作净盘。碎片谱系保留原盘等价，不将碎片当盘。 |
| component_views | 盘体釉整盘 | declared native property | declared native unit | 盘体釉保留碎片分析需真实数量单位基准来源方法相容状态，不重复整盘转移或证明物种。 |
| supply_outlet_native | 供给出口 | native property | native unit | 需真实单位单件量、密度单位温度单位来源、换算因子单位来源，整流单位不暗用于组分留存液。 |
| physical_equivalence | 外包资产 | Count | Item(s) | 匹配真实完整实体包或全资产等价原生范围，其他单位单独展开。 |
| freight_native | freight | mass*distance | kg*km | 真实运输总量加包支撑乘km互斥份额，无网页重量或标准堆叠默认。 |
| species_native | direct_species | Mass | kg | 真实物种介质粒径、实测或适用因子组成去向原生量独立支持，捕集碎片釉库存不证明释放。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 厂家真实完成烧施釉长石瓷盘SKU尺寸批次，继承包装隔片及数量状态可追溯 |
| starting_condition_role | 完整陶瓷产品放行后实体自营常温商户服务 |
| product_classification_scope | 日用器具批发较窄子集，37221成品盘商品独立关联 |
| recursive_input_rule | 不造黏土长石坯釉料或递归耗交易盘作服务投入。商品库存原需求为非交换审计，服务供给外包独立。 |
| upstream_dataset_requirement | 独立完整原成品盘系统覆盖实际原料坯料成形烧釉整理继承包装一次，原长石黏土不完整。真实相容需求损失全出口归属在服务外量化且唯一责任核既有覆盖。 |
| disclosure | 真实SKU尺寸釉放行盘数堆箱关系盘体釉净量皮重状态期间；原量状态单位来源，直接分配或完整群组原生全出口驱动含其他有用出口，换算损失责任既有覆盖；真实直接外包资产承运接收范围 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| finished_product_boundary | 全部商品 | 完整盘体釉制造继承包装及损失上游在服务外，不能仅原矿基线，不因转售烧釉。 |  |
| specific_plate_evidence | 真实产品包装记录 | IKEA特定商品标识长石瓷与釉，网页包装量未独立证明盘净量。采用真实SKU来源净皮重测量；消费者洗用耐久营销不设商户数量强度寿命破损安全限值。 | ikea-feldspar-plate-state |
| no_unreviewed_processing | 全部服务 | 无洗盘卫生测试修磨重包或额外温控，含外包，须另审路线模块。普通常温搬运继承釉不是新保鲜。 |  |
| stocks_and_attempts | 真实记录 | 追踪盘来源批堆箱ID接收库存退回拒收破碎期末内部转移接收事件期间。缺口不明件可留存或有用其他出口，观察质量差不等于废物物种或零。失败未完成资源保留，N只最终验收。 |  |
| physical_scope_once | 资源出口 | 公用供给外包承运全寿命资产接收处理唯一责任。整盘盘体釉碎片包混合清理液体物种为非叠加分析或互斥实体，无金融代理自动回收收益。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | 成品施釉瓷盘商户接收库存搬运与交接 | required | 真实自营成品已烧施釉长石瓷盘普通常温库存搬运至商业验收 | 唯一实体商户承担SKU盘包装数量状态库存期间，无制造保鲜节点 | `accepted_service` |

真实节点承担接收文档非破坏状态记录库存电动搬运及表面卫生事故清理。交易盘体釉继承包装非交换审计，条件性供给外包资产接收流物种据实际展开，不假定破碎釉释放。

### 过程：成品施釉瓷盘商户接收库存搬运与交接 (`ambient_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属购入仓库电量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需真实源表充电设备范围全使用者因果期间，含待机卫生未完成；无窑耗洗碗周期或每箱默认搬运时数。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属表面清洁水量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需真实表事件来源归属，无消费者首洗、每盘漂洗比或购水等于出水。

###### 实际独立记录的合成洗涤剂投入 (`hygiene_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属新清洁围控供给质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实SKU配方单位原生接收库存使用未用退回组成去向来源；无清洁配方破损响应剂量或制剂排放比例。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的成品施釉长石瓷盘自营批发批次 (`accepted_service`)

一项商户拥有厂家成品施釉长石瓷盘、真实唯一商业买方验收服务。实际SKU尺寸釉批次、盘件与堆箱单位、盘体釉净量继承包装、完整缺口破碎状态买方期间来源限定服务。参考不是盘碎片箱kg或利润。

- 选定流：已完成的成品施釉长石瓷盘自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_plate`

数量范围证据需求：需真实成品放行件包净皮重状态和商业买方门槛，无固定SKU直径盘重堆件数强度破损容差或寿命。

##### 废物流

###### 废弃施釉瓷盘 (`plate_waste_atomic_case`)

仅在实际独立记录确认“废弃施釉瓷盘”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`plate_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃施釉瓷盘
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属完整缺口盘废物流质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_plate`

数量范围证据需求：需真实SKU母盘身份件状态净流包装覆盖接收处置，无状态分等损失、默认填埋回收或通用破损率。

###### 收集的施釉瓷碎片 (`fragment_waste_atomic_case`)

仅在实际独立记录确认“收集的施釉瓷碎片”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`fragment_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：收集的施釉瓷碎片
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属单独转移碎片质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实母源状态质量组成去向接收，不将质量差等于破损、缺口等于整损、碎片数等盘或默认可吸入释放份额。

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实组分原生净量残留内容物来源接收范围；无默认纸泡质量、全隔片丢弃或回收替代收益。


###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实组分原生净量残留内容物来源接收范围；无默认纸泡质量、全隔片丢弃或回收替代收益。


###### 实际单独收集的塑料包装废物 (`packaging_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实组分原生净量残留内容物来源接收范围；无默认纸泡质量、全隔片丢弃或回收替代收益。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| source_quantity_attribution | 盘商品 | 保留真实原成品烧釉包装源数量单位状态来源并映射每真实出口。采用有据源目标直接分配，或相容完整群组target_exit_driver/sum_exit_drivers，声明驱动原生单位基准来源及源状态换算。目标验收、其他有用出口商业退回期末及实际损失覆盖互斥，不仅验收分母、不把碎片作原盘。源归属需求和相容不可回收损失责任既有覆盖在服务外一次。不明数量状态非默认损失物种零。 |  |
| all_consumer_service | 实际服务期间 | 全使用者真实源期间及搬运空间时间等有据因果驱动，附单位来源理由，含待机卫生失败未完成。不默认均分批次或盘数质量，未完成不造N。 |  |
| new_supply_returns | 服务新供给 | S=opening_supply+net_receipts-closing_supply。总输入S/N并单独匹配原生未用外退，或仅耗用(S-usable_outward_return)/N并省该退回交换不再扣减。同范围独立库存配对，留存回收计期末。继承包商品资产组分不抵无关当期投入。 |  |
| full_asset_life | shared_assets | asset_equivalent=(job_driver/life_driver)/N对应相容完整资产全使用者期间。制造维护真实替换退役末端、观测历史有据剩余不确定性敏感性更新。直接供方承运当期重叠仅在同负担已由他处真实归属一次后移除，无每轮新支撑或重复租金服务整资产归一化。 |  |
| actual_transfer_views | 真实去向 | 可用商业退回留存或可售降级为独立商品出口。真实完整缺口盘关联包与分离碎片包混合卫生液体互斥，接收真实。盘体釉组分保留液分析不新增重复实体物种。服务搬运处理一次，无默认材料替代。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_plate` | ambient_wholesale | 参考及非交换成品盘包库存原门槛归属 | plate_acceptance_stock_record | site_id; merchant_id; warehouse_id; manufacturer_id; cohort_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; product_sku; source_lot_id; finished_fired_glazed_gate; factory_release_date_time; porcelain_glaze_state; glaze_identity_source; actual_size; size_unit; size_method; size_source; plate_piece_count; piece_unit; plate_id_or_group; parent_plate_id; stack_id; pieces_per_stack; carton_id; stacks_per_carton; pieces_per_carton; pack_count_source; pack_integrity; intact_chipped_broken_state; condition_method; condition_source; buyer_criteria; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; gross_quantity; gross_unit; separator_tare; primary_wrap_tare; carton_tare; transported_support_tare; tare_unit; tare_source; net_plate_mass; mass_unit; mass_basis; mass_method; mass_source; component_id; component_quantity; component_unit; component_basis; component_method; component_source; opening_quantity; receipts; dispatch_quantity; supplier_return; buyer_return; closing_quantity; recovered_closing; stock_unit; stock_state; internal_transfer_id; retained_reject_quantity; useful_other_exit_ids; useful_other_exit_quantity; useful_other_exit_unit; useful_other_exit_state; useful_other_exit_owner; actual_breakage_event; fragment_parent_link; actual_discard_piece_count; actual_discard_stream_mass; discard_mass_unit; transferred_pack_inclusion; actual_loss_fate; unknown_count_difference; unknown_mass_difference; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; source_gate_allocation_mode; direct_assignment_source_ids; direct_assignment_quantity; direct_assignment_unit; direct_assignment_source; allocation_cohort_id; cohort_source_quantity; cohort_source_unit; cohort_source_state; cohort_source_record; target_exit_driver; sum_exit_drivers; exit_driver_unit; exit_driver_basis; exit_driver_source; all_exit_ids; all_exit_driver_records; exit_original_plate_equivalent; exit_equivalence_unit; exit_equivalence_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 将真实厂家烧釉成品放行关联SKU尺寸源批、继承堆箱隔片关系、盘体釉净量皮重及买方状态标准，采用真实非侵入或代表性可追溯供方记录。N仅最终唯一商业服务，非盘碎片箱。核库存真实退回期末有用其他出口破碎接收及母盘谱系，调查不明差。源需求采用有据直接分配或完整群组相容全出口原生驱动，非仅验收或碎片分母。真实相容损失责任既有覆盖在服务外一次。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 实际盘件kg及相容源出口原生单位 | 每次真实接收检查移动拒收破碎验收盘点源分配复核 | 供方成品放行至验收及前后库存其他出口失败未完成群组 | 实际商户及独立完整商品买方全部出口责任门槛 | per reference flow | 真实SKU尺寸釉源净皮重校准买方状态及全出口分配等价处置证据 |
| `cp_supplies` | ambient_wholesale | 新卫生外包供给及未用退回 | supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; opening_supply; gross_receipts; receipt_tare; net_receipts; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; per_piece_mass_source; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion; conversion_unit; conversion_source; composition; composition_basis; composition_source; actual_fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 记录真实独立新产品单位源库存使用期末及匹配未用外退。新增外运输卫生与继承盘间隔片纸箱污染废物不同。总供给加输出或仅耗用省输出选一路，原生换算组成来源真实，无消费者洗盘默认。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; Item(s); 实际原生单位换算 | 每次真实接收使用退回库存事件 | 全部供给使用退回期间含未完成 | 具名直接服务供给排除外包内含资源 | per reference flow | 真实SKU原生单位校准净量配对单件密度换算组成来源 |
| `cp_utilities` | ambient_wholesale | 真实源表全使用者驱动 | utility_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_unit; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; breakage_cleanup_event_id; equipment_charging_scope; actual_water_source; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 真实进出口源期间或匹配分表范围互斥，全使用者搬运空间时间等因果驱动含待机卫生失败未完成。无陶瓷窑洗碗或未审加工温控负荷，实际表面水处理来源明确。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh; m3; 实际表驱动单位 | 每个真实源使用者事件匹配期间 | 全部服务源期间使用者待机卫生未完成 | 直接公用供水处理范围排除外包重叠 | per reference flow | 真实源方向校准期间全因果驱动证据 |
| `cp_provider` | ambient_wholesale | 实际完整仓库实体服务包 | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_unit; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_energy; included_materials; included_assets; included_transport; included_treatment; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | 采集真实已完成实体服务包原生等价和全资源结果，直接外包承运资产接收责任互斥。实际盘洗食品接触测试施釉修补重包须另审，不藏包内。 | Item(s)等价或真实适当展开原生单位 | 每个真实已完成服务包 | 真实外包源运营处理期间 | 具名实际实体仓库外包及明确排除 | per reference flow | 真实完成原生等价资源重叠证据 |
| `cp_assets` | ambient_wholesale | 完整仓库循环搬运寿命 | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_unit; conversion_source | 识别真实完整资产，匹配制造维护真实更换退役末端。全使用者观测历史有据剩余，作业寿命单位相容，不确定性敏感性更新及直接供方承运重叠一次。不每轮新支撑，不重复租金驱动整资产视图。 | Item(s)等价; 实际相容寿命作业驱动单位 | 每个真实资产期间维护更换退役复核 | 完整制造至末端全部使用者期间历史有据剩余 | 实际完整资产唯一责任与明确重叠 | per reference flow | 完整范围历史剩余来源原生单位不确定性敏感性 |
| `cp_freight` | ambient_wholesale | 真实完整包装盘载荷 | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; plate_payload_mass; inherited_separator_pack_mass; inherited_carton_mass; added_pack_mass; transported_support_mass; mass_unit; mass_source; whole_payload_mass; route_distance; distance_unit; distance_source; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; work_conversion_unit; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | 采集真实盘体釉载荷和互斥隔片纸箱新增外包支撑、实际路线份额空返多点退回。运输净盘基准和原生换算来源明确，承运内含能源资产一次。 | kg*km; 实际载荷距离原生工作量单位 | 每次真实运输退回段 | 约定真实门槛匹配空返退回期间 | 具名实际承运工作资源范围 | per reference flow | 真实载荷基准来源路线份额换算记录 |
| `cp_outlets` | ambient_wholesale | 分离碎片包装混合卫生液体接收 | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; source_lot_id; parent_plate_id; fragment_parent_link; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; quantity_source; whole_plate_exclusion; transferred_pack_exclusion; separate_fragment_exclusion; composition; composition_basis; composition_source; retained_component_quantity; retained_component_unit; retained_component_basis; retained_component_method; retained_component_source; retained_component_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; density; density_unit; density_temperature; density_temperature_unit; density_source; volume; volume_unit; conversion; conversion_unit; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 测量真实收集碎片分离包装混合卫生或清洁液原生状态，具有来源母盘转移身份。整盘盘体釉保留组分流体非叠加，排除已转移完整缺口盘或其他流。组分方法来源样品时间单位基准真实，接收分类验收处理一次，不由破碎推排放洗泥。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | kg; m3; 实际原生组分流单位 | 每次真实破碎收集转移接收验收 | 实际事故卫生接收期间，留存库存另记 | 真实围控接收接口排除直接释放 | per reference flow | 真实净量来源组分流体单位基准方法样品密度组成负荷接收证据 |
| `cp_environment` | ambient_wholesale | 真实直接物种介质 | direct_species_record | site_id; cohort_id; event_id; period_id; substance_identity; particle_size; receiving_medium; release_state; measured_mass; measured_mass_unit; measurement_source; activity; activity_unit; activity_source; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; whole_stream_source; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_unit; density_source; conversion; conversion_unit; conversion_source; retained_captured_quantity; retained_captured_unit; receiver_treatment_coverage; applicability; calibration; uncertainty | 识别真实物种粒径介质，选实测物种质量、匹配活动因子或实测整流组成去向并采用原生来源换算。完整因子不再乘组成去向。仅凭原料盘体釉组成、缺口破碎、库存差或捕集碎片，不能确定直接释放或没有释放。须有真实物种、接收介质和释放证据，不默认零。 | kg物种; 实际活动整流浓度原生单位 | 每次真实直接释放或有据匹配监测期间 | 实际直接期间证据适用性，无库存余差代理 | 具名真实直接环境接口排除围控接收处理 | per reference flow | 校准实测或适用因子组成去向原生换算来源 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N为reference_gate_id上最终唯一accepted_consignment_ids数量；accepted_service=1 Item(s)。 | cp_plate | 具成品盘包装状态门槛限定的真实完整商业服务 |  |
| plate_pack_audit | 非交换商品 | net_plate_mass=gross_quantity-separator_tare-primary_wrap_tare-carton_tare-transported_support_tare，实际原生边界匹配。盘件堆箱关系真实，不将碎片转盘数或厂家包装重等盘净重。盘体釉组分分析不再加于整盘。 | cp_plate | 真实盘体釉净量皮重件数状态审计 |  |
| original_gate_demand | 非交换原商品 | 仅具来源目标证据及相容源状态单位时assigned_source_gate_quantity=direct_assignment_quantity；或在原生换算有据且完整互斥all_exit_driver_records下采用cohort_source_quantity*target_exit_driver/sum_exit_drivers。分母含其他有用出口退回期末实际损失路线，不仅验收；原盘状态等价有据，绝非碎片数。commodity_source_gate_demand=assigned_source_gate_quantity/N在服务外；实际相容loss_adjustment_quantity/unit/basis/source/owner与already_included_loss_coverage核对一次不重复分配。 | cp_plate; N | 实际完整厂家门槛归属需求及相容上游损失一次 |  |
| new_supply_stock | 服务新供给未用退回 | S=opening_supply+net_receipts-closing_supply；net_receipts=gross_receipts-receipt_tare。总S/N并单独匹配输出usable_outward_return/N，或仅耗用(S-usable_outward_return)/N且省该退回交换。留存回收计期末，真实同范围原生换算来源必需。 | cp_supplies; N | 每参考流实际供给与所选未用退回约定 |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading按真实进出口方向，或匹配direct_submeter_quantity；attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N，互斥全使用者期间含待机卫生失败未完成资源。 | cp_utilities; N | 每参考流实际仓库购入公用资源 |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N，仅真实匹配已完成实体包和全资源责任一次时成立。 | cp_provider; N | 每参考流实际已完成等价包数量 |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N；life_driver=observed_driver+remaining_driver，原生单位相容、全使用者完整寿命历史有据剩余真实替换末端，单视图不重复归一化。 | cp_assets; N | 每参考流真实完整资产等价份额 |  |
| whole_load_freight | freight | whole_payload_mass=plate_payload_mass+inherited_separator_pack_mass+inherited_carton_mass+added_pack_mass+transported_support_mass，组分真实互斥；freight_work=whole_payload_mass*route_distance*load_share/N，先原生换算退回空返互斥覆盖。 | cp_freight; N | 每参考流实际包装盘整载荷运输工作量 |  |
| contained_outlets | 真实废物出口 | plate_waste=actual_discard_stream_mass/N，实际完整缺口盘加真实转移包范围。其他outlet_quantity=(gross_quantity-tare_quantity)/N按真实原生流单位，或volume/N并有据密度温度换算。整盘碎片包混合清理液体组分分析不重复，留存内部移动非外送，处理一次。 | cp_plate; cp_outlets; N | 每参考流真实互斥接收流状态数量 |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N，先相容有据原生换算并选一路。factor_complete防止再乘组成去向，整流物种输出不重复。 | cp_environment; N | 每参考流真实直接物种质量及接收介质 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| finished_plate_gate | 接收验收商品 | 真实成品已烧施釉长石瓷SKU尺寸批、源包装件数净皮重状态买方标准；无原矿基线、网页包装重当盘净重或消费者洗护安全默认。 | cp_plate真实来源SKU测量买方记录 |
| source_cohort_fates | 商品实际出口 | 真实源量状态单位、直接分配或相容群组全出口原生驱动含其他有用出口及互斥原状态等价。破口破碎整片谱系接收损失责任覆盖真实，不明余差非默认废物物种零。 | 真实完整源出口映射库存处置及定量商品关联 |
| complete_physical_scope | 服务资源期间 | 真实全使用者原生驱动源期间、完整外包全寿命资产观测有据剩余替换末端不确定性，直接承运接收范围含卫生失败未完成一次。 | 源表供给驱动供方资产承运处理记录 |
| concrete_identity_ranges | 真实展开行 | 最终数据前验证真实产品外包资产碎片废物物种原生属性单位；经验限值须可比证据，不用营销强度寿命。 | 实际详情支持接收范围适用证据 |

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
| plate_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_plate`识别`plate_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`plate_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_plate`; 实际来源关联原生记录 |
| fragment_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`fragment_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`fragment_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| packaging_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`packaging_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| hygiene_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`hygiene_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| wastewater | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

真实电动物流充电、照明记录、普通通风和表面清洁设备，用于常温批发。不含成形烧成釉窑、商户洗碗消毒或专用温控，新增加工须审。本声明路线无现场燃烧。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入瓷盘仓库搬运电力
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属购入仓库电量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需真实源表充电设备范围全使用者因果期间，含待机卫生未完成；无窑耗洗碗周期或每箱默认搬运时数。

#### cleaning_water

仅真实仓库地面设备事故清理外供水，声明来源处理范围。本路线不常规洗消盘件或测食品接触。实际收液循环补水独立记录。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入仓库表面清洁水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属表面清洁水量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需真实表事件来源归属，无消费者首洗、每盘漂洗比或购水等于出水。

#### hygiene_supplies

真实具名制剂擦拭吸附等质量计产品用于表面或真实破损事故，不规定釉料修补胶食品接触试剂、日常盘洗剂或通用清理包。清洁供给质量与污染已用流不同。

本卡为独立身份分支`hygiene_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库清洁及碎片围控耗材
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属新清洁围控供给质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实SKU配方单位原生接收库存使用未用退回组成去向来源；无清洁配方破损响应剂量或制剂排放比例。

#### added_packing

仅商户真实新增外箱捆带保护支撑，定义单位材料并按需实测单件质量。厂家纸箱盘间隔片套标签为继承商品，不因转售新增供给。不常规拆盘重包，循环托盘箱为寿命资产。

- 身份采集要求：实际新增外运输支撑包装件
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属新外运输件数
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实新增单位材料库存未用退回；无每箱盘数隔片重、每盘新袋或通用保护包装制度。

#### provider_packages

真实完整外包装文档状态检查、仓库卫生事故搬运维护服务，匹配原生完成单位资源。金融费用利润不是无资源实体单位。外包盘洗食品接触测试釉烧修补重包仍是真实另审加工。

- 身份采集要求：已完成的实体瓷盘仓库检查卫生或搬运服务包
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属已完成实体包等价量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需真实完成合同原生单位换算能源材料资产运输处理范围；无标准检验频次消毒任务或价格转Count。

#### shared_assets

真实仓库货架电动搬运循环箱托盘衡器监测匹配完整资产等价，制造维护真实更换退役末端覆盖全部使用者期间。不每轮新托盘，不重复租金驱动服务整资产。

- 身份采集要求：实际完整寿命仓库及循环瓷盘搬运资产
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属完整资产等价份额
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：需真实身份原生作业寿命驱动全部使用者、历史有据剩余不确定性敏感性更新；无通用架寿命或支撑轮数。

#### freight

约定真实进出退回包括已烧施釉盘、继承隔片纸箱、新增包运输支撑。商品页包装重量不证明净盘，实际组成边界防重复。承运能源资产空返多点退回一次。

- 身份采集要求：实际完整包装瓷盘运输工作量
- 流属性/单位：mass*distance / kg*km
- 数量规则：每参考流实际归属整载运输工作量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需真实运输状态组成质量距离互斥份额原生换算，不用网页质量当通用净盘或标准堆叠路程。

#### unused_count_returns

真实未用新Count包装外退匹配同范围原库存单位接收验收。留存内部移动为库存。总输入加匹配退回或仅耗用省退回交换选一路，不重复扣。

- 身份采集要求：实际外送未用新增运输包装退回
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属未用包装外退件数
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需实际配对原生件数接收视图，不将厂家隔片回收当新供给退回，无默认比例或替代生产信用。

#### unused_mass_returns

真实未耗服务产品外退，精确产品状态净量原独立投入范围。商业完整缺口盘退回属商品台账，不是负清洁供给或服务；已用污染物为废物。

- 身份采集要求：实际外送未用清洁供给退回
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属未用质量供给外退量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需产品原生数量原供给配对接收证据，不抵无关供给继承商品包装。

#### plate_waste

接收方真实验收已弃盘，完整或缺口但可识别，记录盘体釉及仅真实同送关联包装。缺口拒收留存本身非丢弃质量损失。不重复流中碎片釉包装，商品损失上游在服务外，搬运处理一次。

- 身份采集要求：按真实转移包装状态丢弃的完整或缺口盘
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属完整缺口盘废物流质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_plate`

数量范围证据需求：需真实SKU母盘身份件状态净流包装覆盖接收处置，无状态分等损失、默认填埋回收或通用破损率。

#### fragment_waste

仅真实破损事件单独收集碎片细料，具源批母盘关系、实测盘体釉混合状态。碎片数不是原盘数。捕集碎片细料为围控废物，不自动空气硅尘釽物种或纯干物。排除整盘转移和已含混合清理固体。

- 身份采集要求：实际单独收集的破碎瓷片
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属单独转移碎片质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实母源状态质量组成去向接收，不将质量差等于破损、缺口等于整损、碎片数等盘或默认可吸入释放份额。

#### packaging_waste

真实分离受损纸箱隔片套新增外包，具有材料状态残留碎片接收。不是常规开包重包或新制造。排除随整盘碎片或混合清理流已转移包装。

本卡为独立身份分支`packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际单独移除的受损瓷盘包装
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属分离包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实组分原生净量残留内容物来源接收范围；无默认纸泡质量、全隔片丢弃或回收替代收益。

#### hygiene_waste

真实已用擦拭吸附清洁残余或捕集混合物，按实测状态计保留碎片釉液体制剂。清洁供给组分不叠加，分离碎片包装排除。不创设切磨陶瓷粉尘或默认洗盘泥。

- 身份采集要求：实际已收集卫生及混合碎片清理固体
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属混合卫生清理固体质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实测净流、保留组分流体数量单位基准来源接收，不用供给等废重或默认吸收釉释放。

#### wastewater

真实表面事故清洁液至接收方，原生体积或有据净量密度温度换算、实际组成负荷处理。无强制洗盘或食品浸出测试。保留清理液分离固体直接物种为不同非叠加状态。

- 身份采集要求：实际已收集仓库表面清洁废水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属已收集表面清洁液体积
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需收集接收密度单位温度单位来源负荷范围，无洗碗周期默认陶瓷悬浮含量或购水排污比。

#### direct_species

仅实测或适用活动因子、实测整流组成去向支持的具名物种粒径介质。已烧盘体釉库存、缺口破碎捕集碎片细料围控废水不证明空气硅尘金属浸出等直接释放。

- 身份采集要求：实际独立识别的仓库直接释放物种
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属直接释放物种质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：需真实身份粒径介质原生量及适用换算因子组成去向来源，无原黏土粉尘因子、釉比例转金属释放或库存余差等排放。

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_gate_check | accepted_service | N>0唯一最终验收商业服务，实际成品SKU尺寸釉盘件堆箱净皮重状态源期间，不是盘碎片箱Count。 |  |
| no_processing | 全部路线 | 无成形烧施釉商户盘洗消食品接触强度试验修磨重包或未审温控，含实际外包。 |  |
| commodity_source_check | 非交换源出口台账 | 完整实际厂家盘继承包基线、原源量单位状态来源直接关联或完整相容群组全出口驱动含其他有用出口、归属互斥出口损失责任换算既有覆盖在服务外一次，无验收独占分母碎片计数库存余差损失。 |  |
| resource_owner_check | 全部服务资源 | 全部使用者期间原生因果驱动待机卫生未完成，选总供给匹配退回或仅耗用省退回，全资产寿命观测有据剩余末端不确定性，直接外包承运接收范围一次。 |  |
| outlet_species_check | 真实去向 | 完整缺口盘关联包与分离碎片包混合卫生围控液互斥且接收真实。盘体釉组分保留液体非叠加，破碎捕集细料不是化学颗粒释放或回收信用。 |  |
| bilingual_raw_contract | 全部内容 | 原始七身份五功能六边界六参考七画像、八协议各十二字段和十公式正文输出非空，精确ID原操作数属性单位证据来源URL有序规则确定性投影无预处理对齐；检查不证明实际强度食品安全或最终UUID。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 真实前景完成及具体身份验证后作为secondary_dataset或background_dataset |
| downstream_use | 常温成品盘商户实体增量，关联独立完整烧釉厂家盘包源需求及真实相容损失一次，不是总交付盘制造使用生命周期 |
| allowed_use | 真实成品施釉长石瓷盘SKU尺寸批及商户商业验收群组，具盘件堆箱净皮重状态期间限定 |
| excluded_use | 其他器材原矿陶瓷制造、洗消测试修磨重包未审温控、代理零售独立物流；强度破损寿命食品安全保证 |
| required_metadata | 厂家SKU尺寸釉源门槛批商户买方；真实盘件堆箱母片谱系盘体釉净量包皮重状态来源；实际条件库存去向期间；全使用者资源外包全寿命资产承运接收；原量状态单位来源直接分配或相容群组全出口驱动单位基准来源有用其他出口等价、换算互斥覆盖损失责任既有覆盖 |
| required_quality_disclosure | 真实网页来源适用性净盘包装证据；整盘缺口碎片组分保留液量不叠加；真实源全出口归属损失覆盖不明状态；完整全使用者原生驱动资产剩余不确定性；具体流支持经验范围缺口 |
| update_trigger | SKU瓷釉尺寸包来源验收改变；新加工洗测试修重包温控；仓库外包资产承运接收范围改变；真实破损丢弃释放或实质来源证据 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| ikea-feldspar-plate-state | literature | IKEA，IKEA365+白瓷盘，货号502.589.45，产品材料尺寸包装。https://www.ikea.com/sg/en/p/ikea-365-plate-white-50258945/ | 特定成品长石瓷釉盘及包装状态案例。包装所列质量未证明净盘。不采用消费者首洗微波洗碗、营销耐久、尺寸质量或通用破损强度寿命食品安全声明。 |
