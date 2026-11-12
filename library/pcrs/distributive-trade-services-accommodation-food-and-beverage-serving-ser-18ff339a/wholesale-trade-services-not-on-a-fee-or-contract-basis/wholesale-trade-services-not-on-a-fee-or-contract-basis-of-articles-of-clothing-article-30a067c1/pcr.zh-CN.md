---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-articles-of-clothing-article-30a067c1
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 厂家折叠包装羊毛针织套头衫自营批发服务

## 1. 范围与适用性

本PCR覆盖厂家完成折叠包装的含羊毛针织套头衫自营批发，含实际声明混纺，经普通常温接收、库存包装状态记录、电动搬运及真实商业买方验收。真实款式尺码件数、纤维组成及基准来源、含附属部件成衣净质量、包装皮重、水分方法样品基准与可见或供方有据状态定义实际案例。羊毛命名不等于100%羊毛。

排除油毛洗毛制条纱针织成衣制造整理，洗涤蒸汽整烫补修再染、成衣化学虫控处理、供方主包开启重包、作为加工路线的悬挂整形及未审专用温湿介入；也排除其他衣物皮草、零售代理独立仓储运输。家庭清洗真空袋硅胶雪松樟脑丸和检查频次不是必选操作。非侵入记录或有代表性的可追溯供方测量可支持数量状态，不强制破坏开包取样。

全部真实成衣混纺纤维继承包装阶段及损失上游负担属于独立厂家成品包装商品系统。完整链条前须在服务外量化相容原门槛归属需求及损失、唯一责任和既有覆盖。商户资源、真实拒收物搬运及接收处理一次。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-articles-of-clothing-article-30a067c1 |
| classification_refs | CPC 3.0:61033; 厂家折叠包装含羊毛针织套头衫商户服务较窄子集 |
| covered_products | 厂家完成折叠包装针织套头衫常温自营批发，实际羊毛混纺组成声明 |
| excluded_products | 原毛净毛纱织物成衣制造、其他服饰皮草、洗蒸修处理重包或未审温湿介入；零售代理独立仓储 |
| representative_product | 真实款式尺码SKU源批厂家折叠包至唯一商业验收批次，实际组成非固定纯羊毛 |
| production_route | 厂家成衣最终整理折叠包装放行→商户接收库存包装状态记录→普通常温搬运存放→买方验收 |
| market_state | 真实件数成衣净量附属部件组成水分状态交接限定的已完成商户服务，不新制造羊毛或衣物 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的厂家折叠包装羊毛针织套头衫自营批发服务 |
| How much | 1 Item(s) |
| How well | 真实款式尺码羊毛混纺组成来源、件数含附属部件净量、水分包装状态及买方实际标准限定验收 |
| How long or cycle | 实际厂家放行商户接收存放发运买方验收及关联未完成群组，无标准储衣寿命 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的厂家折叠包装羊毛针织套头衫自营批发批次 |
| reference_flow_property | 01846770-4cfe-4a25-8ad9-919d8d378345 |
| reference_unit_group | 5beb6eed-33a9-47b8-9ede-1dfe8f679159 |
| reference_unit | Item(s) |
| required_qualifiers | supplier_id; product_sku; style_id; size; source_lot_id; finished_garment_pack_gate; folded_pack_state; fibre_composition; composition_basis; composition_source; garment_piece_count; net_garment_mass; integral_trim_scope; mass_unit; moisture_value; moisture_basis; moisture_method; sample_time; moisture_source; inherited_pack_tare; merchant_id; buyer_gate; reporting_period; actual_storage_conditions |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| commercial_count | accepted_service | Count | Item(s) | N为最终唯一验收商业批次，不是衣件纸箱发票或羊毛kg。 |
| garment_pack_basis | 商品审计 | Mass; Count | kg; Item(s) | 成衣净量含真实附属部件内部标签，继承外包装内衬支撑皮重另记。衣件数为限定，无标准单件质量。 |
| fibre_moisture_basis | 分析审计 | declared native property | declared native unit | 真实混纺比例基准来源及水分组分方法样品时间状态明确。干纤维标签比例不盲用于含附属部件整件接收质量。仅代表性相容组分整衣测量支持换算，无100%羊毛或标准回潮。 |
| supply_receiver_native | 真实新供给出口 | native property | native unit | 需真实包装单位单件质量，或实测质量体积及密度温度换算来源。 |
| physical_equivalence | 供方资产 | Count | Item(s) | 匹配真实已完成实体包或完整整资产等价原生单位全范围，其他原生单位适当展开。 |
| freight_native | freight | mass*distance | kg*km | 用实际运输状态整衣包装支撑质量乘km及互斥份额，不用羊毛纤维质量。 |
| species_native | direct_species | Mass | kg | 真实物种介质粒径身份，实测或有据匹配活动因子组成去向；捕集纤维购入化学品不证明释放。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 厂家成品折叠包装含羊毛针织套头衫放行，真实款式尺码组成附属部件包装状态可追溯 |
| starting_condition_role | 完整成衣厂家放行后商户实体常温自营批发增量 |
| product_classification_scope | 服装批发较窄子集，真实成品商品系统独立 |
| recursive_input_rule | 服务内不耗用再纺原毛、重织成衣或递归制造商品。商品库存需求为非交换审计，实际供给外包另定范围。 |
| upstream_dataset_requirement | 独立原厂家成品包装系统覆盖真实羊毛混纺生产及适用剪后洗毛制条纺纱针织成衣整理折叠包装阶段一次。油毛农场门槛遗漏后续，全部缺失实际阶段须在服务外以相容归属需求损失覆盖补齐。 |
| disclosure | 真实款式尺码SKU混纺基准来源、件数含附属部件净量、包装皮重水分方法样品时间状态；厂家商户买方期间；原门槛归属量单位状态来源分配换算损失责任既有覆盖；实体资源供方全寿命资产承运接收范围 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| finished_garment_boundary | 全部成衣商品 | 全部成衣混纺制造整理继承包装及损失上游排除，独立基线须到真实厂家成品放行，不能仅油毛或纱。 |  |
| fold_condition_context | 真实产品包装记录 | 记录厂家折叠包、可见或供方有据形状水分虫霉状态及买方标准。Woolmark消费者资料仅定性背景，家庭洗真空袋硅胶雪松樟脑频次不成为批发操作投入排放。 | woolmark-wool-storage-context |
| no_unreviewed_treatment | 全部路线 | 无成衣洗蒸烫修再染产品接触虫控、开包重包或专用温湿介入，含外包加工；须另审路线模块，不隐藏于卫生外包。 |  |
| periods_and_attempts | 库存真实事件 | 保留来源批款码批次事件期间及期初接收发运退回拒收期末内部移动。失败未完成资源结转，只有最终唯一验收计N。状态分观察不等于物理毁损。 |  |
| physical_owners | 全部资源出口 | 直接公用供给外包承运全寿命资产接收处理各有实际唯一责任。金融利润自动家庭洗护或替代信用不代替证据。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `ambient_wholesale` | 厂家折叠包装套头衫商户库存搬运与交接 | required | 真实厂家放行折叠包装含羊毛针织套头衫商户拥有，普通常温库存搬运至真实商业验收 | 唯一实体商户服务承担成衣款码组成状态包装期间责任，无制造保鲜节点 | `accepted_service` |

真实节点承担接收检查存放电动搬运及仓库表面卫生。成衣继承包装数量状态为非交换商品台账；条件性供给外包资产接收物种依实际记录展开。形变疑似虫霉、可用退回留存拒收、真实丢弃与直接释放状态不同。

### 过程：厂家折叠包装套头衫商户库存搬运与交接 (`ambient_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属购入电量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需实际源表充电事件范围及全使用者因果驱动期间，含待机卫生未完成；无每件标准电耗、制造负荷或默认除湿机使用。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属购入清洁水量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需真实表计清洁事件数量来源处理；无家庭羊毛洗涤、液衣比或购水等于出水。

###### 实际独立记录的合成洗涤剂投入 (`hygiene_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属新卫生供给质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需实际配方SKU产品质量库存未用退回接收组成去向；无家庭洗护套装或虫控化学剂量释放默认。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的厂家折叠包装羊毛针织套头衫自营批发批次 (`accepted_service`)

一项真实唯一商业买方验收服务，商品为厂家完成折叠包装并声明羊毛及实际混纺纤维的针织套头衫。真实款式尺码SKU批次、组成基准来源、件数含附属部件净质量、水分包装日期状态及买方门槛限定服务。羊毛命名不假定100%羊毛，参考不是一件衣或羊毛千克。

- 选定流：已完成的厂家折叠包装羊毛针织套头衫自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_garment`

数量范围证据需求：需真实商业验收及匹配款式尺码纤维标签来源净量皮重水分状态证据；无标准羊毛比例尺码衣重批件数或质量容差。

##### 废物流

###### 废弃羊毛针织套头衫 (`garment_waste_atomic_case`)

仅在实际独立记录确认“废弃羊毛针织套头衫”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`garment_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃羊毛针织套头衫
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属废弃成衣流质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_garment`

数量范围证据需求：需款式尺码组成状态件数质量包装覆盖和接收处置；无状态分等于损失、标签纤维百分比等于排放或默认填埋回收。

###### 实际单独收集的纸类包装废物 (`packaging_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属单独收集包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实组分净量状态剩余内容物接收方；无默认袋重、每包接收即移除或再生替代信用。


###### 实际单独收集的金属包装废物 (`packaging_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属单独收集包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实组分净量状态剩余内容物接收方；无默认袋重、每包接收即移除或再生替代信用。


###### 实际单独收集的塑料包装废物 (`packaging_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属单独收集包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实组分净量状态剩余内容物接收方；无默认袋重、每包接收即移除或再生替代信用。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| original_gate_assignment | 成衣商品 | 以相容原生状态单位组成水分基准及来源分配换算，将厂家成品包装真实原投入归属验收群组。包含有据原材料及普通水分状态变化份额，不当作纤维损失；退回期末其他出口互斥。最终发运衣重加废物不自动等于原门槛需求。真实相容损失调整及既有覆盖在服务外唯一责任一次，不明质量件数差待解，不默认损失或零。 |  |
| all_user_attribution | 真实服务期间 | 用全部使用者源期间及搬运空间时间等有据原生因果驱动，附单位来源理由，含待机卫生失败未完成。不默认批次件数羊毛质量均分，未完成保留归属不造N。 |  |
| supply_return_convention | 新直接供给 | S=opening_supply+net_receipts-closing_supply。总输入S/N并单独记录实际匹配原生未用外退输出；或仅耗用(S-usable_outward_return)/N且省去匹配退回交换、不另抵扣。须同范围独立库存配对；回收留存属期末，继承成衣资产内容物不减少无关当期供给。 |  |
| complete_asset_life | shared_assets | asset_equivalent=(job_driver/life_driver)/N，相容完整资产及全部使用者期间。制造维护真实替换退役末端、观测历史有据剩余、不确定性敏感性更新明确。直接供方承运重叠仅在同负担已由他处唯一覆盖后移除，不每轮新造箱托或重复租金服务资产。 |  |
| actual_transfer_states | 真实退回废物 | 可用商业退回留存拒收仍是商品状态，废弃成衣流只含真实一起转移关联包装；单独包装混合卫生液体互斥。组分水分纤维分析不叠加，不重复实体物种输出。接收处理一次，无默认回收替代收益。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_garment` | ambient_wholesale | 参考及非交换成衣包装组成库存 | garment_acceptance_stock_record | site_id; merchant_id; warehouse_id; supplier_id; cohort_id; consignment_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; ownership_resale_record; product_sku; style_id; size; source_lot_id; finished_garment_pack_gate; factory_release_date_time; folded_pack_state; wool_species_identity; fibre_composition; composition_unit; composition_basis; composition_source; component_id; component_mass; component_mass_unit; integral_trim_scope; integral_trim_mass; trim_mass_unit; internal_label_scope; primary_pack_material; pack_integrity; care_label_record; buyer_criteria; receipt_date_time; hold_start; hold_end; duration; duration_unit; dispatch_date_time; buyer_acceptance_date_time; actual_storage_conditions; temperature; temperature_unit; humidity; humidity_unit; shape_condition; insect_observation; mould_observation; observation_method; supplier_condition_record; actual_condition_change; garment_piece_count; piece_unit; pieces_per_pack; pack_count; gross_quantity; primary_pack_tare; external_label_insert_tare; outer_pack_tare; pallet_support_tare; tare_unit; net_garment_mass; mass_unit; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_component_scope; moisture_source; sample_id; sample_time; sampling_representativeness; measurement_state; moisture_fraction; component_dry_mass; component_dry_mass_unit; component_fibre_fraction; fraction_basis; basis_conversion; conversion_source; opening_quantity; receipts; dispatch_quantity; supplier_return; buyer_return; closing_quantity; recovered_closing; stock_unit; stock_state; internal_transfer_id; retained_reject_quantity; actual_discard_piece_count; actual_discard_stream_mass; discard_mass_unit; transferred_pack_inclusion; actual_loss_fate; unknown_mass_difference; unknown_count_difference; discrepancy_investigation; receiver; transfer_id; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; commodity_dataset_id; original_commodity_gate; original_gate_state; source_gate_input_quantity; source_gate_input_unit; source_gate_quantity_source; assigned_source_gate_quantity; assigned_source_gate_unit; assigned_source_gate_state; assigned_moisture_state_change_share; state_share_unit; state_share_source; source_gate_allocation_basis; source_gate_allocation_source; source_gate_conversion; source_gate_conversion_source; exclusive_other_exit_coverage; loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; loss_owner; already_included_loss_coverage; commodity_overlap_check; buyer_signature; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 真实厂家整理折叠包装放行与商户产权关联SKU款码源批组成来源买方标准。以非侵入或代表性可追溯供方测量，核对整衣净量含附属部件内部标签，排除实测外包支撑皮重，不强制开包。水分组分取样状态方法时间基准代表性及组成基准明确，不统一换算干羊毛。记录真实可见供方状态、退回留存拒收丢弃及库存原生差额。完整成衣源需求和实际相容损失在服务外一次，其他出口互斥核既有覆盖。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 实际整衣kg/件及组分水分原生单位 | 每次真实接收检查移动拒收验收盘点或有据状态水分观察 | 厂家放行至商户验收及前后库存失败未完成群组 | 一个实际商户责任及独立厂家商品买方门槛 | per reference flow | 真实款码标签组成放行买方来源，校准皮重净量及代表性组分水分处置调查 |
| `cp_supplies` | ambient_wholesale | 新外包卫生供给及未用退回 | supply_stock_record | site_id; cohort_id; event_id; period_id; supply_id; product_sku; product_state; native_property; native_unit; unit_definition; opening_supply; gross_receipts; receipt_tare; net_receipts; closing_supply; recovered_closing; actual_use; usable_outward_return; outward_return_id; return_receiver; supply_return_pair_id; same_scope_supply_match; selected_supply_view; per_piece_mass; per_piece_mass_unit; density; density_unit; density_temperature; density_temperature_unit; density_source; conversion; conversion_source; composition; composition_basis; composition_source; actual_fate; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 记录真实独立新产品原生接收库存使用期末与匹配未用外退。新增外运输件与继承主包不同，不规定家庭洗护品。选总输入加退回或仅耗用省去退回视图，具真实单位材料换算组成来源。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; Item(s); 实际原生单位换算 | 每次真实接收使用退回库存事件 | 完整供给使用退回期间含未完成 | 具名直接服务供给范围排除供方内含资源 | per reference flow | SKU单位校准净库存退回配对和换算组成证据 |
| `cp_utilities` | ambient_wholesale | 真实源表全使用者归属 | utility_period_driver_record | site_id; cohort_id; period_id; meter_id; utility_source; provider; meter_unit; opening_reading; closing_reading; import_quantity; export_quantity; direct_submeter_quantity; conversion; conversion_source; all_consumers; all_periods; consumer_driver; total_driver; driver_unit; driver_basis; driver_source; allocation_rationale; handling_events; occupied_space; space_unit; start_time; end_time; duration; duration_unit; idle_quantity; hygiene_event_id; equipment_charging_scope; actual_water_source; recirculation; actual_makeup; provider_overlap; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 用真实进出口期间或匹配分表且范围互斥。按全部使用者搬运空间时间等因果驱动归属，含待机卫生失败未完成。无成衣洗蒸或未审温控负荷，真实供水独立有据。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh; m3; 真实表驱动单位 | 每个真实表使用者事件匹配期间 | 全部服务源期间使用者待机卫生未完成群组 | 真实直接公用供水处理范围排除外包重叠 | per reference flow | 校准真实源方向期间和完整因果使用者驱动 |
| `cp_provider` | ambient_wholesale | 实体仓库供方服务包 | physical_package_record | provider_id; package_id; native_quantity; native_unit; package_definition; equivalent_conversion; conversion_source; site_id; cohort_id; event_id; period_id; actual_start; actual_end; duration; duration_unit; included_energy; included_materials; included_assets; included_transport; included_treatment; non_product_contact_scope; excluded_resources; direct_overlap; other_provider_overlap; actual_completion; uncertainty | 采集真实已完成等价实体单位及完整资源结果。非产品接触监测卫生不同于真实成衣处理开包补修，后者须扩展路线。直接供方承运资产接收责任一次。 | Item(s)等价或真实适当展开原生单位 | 每次真实已完成外包事件 | 完整服务包来源运营处理期间 | 具名实体仓库外包及明确排除 | per reference flow | 真实完成原生换算合同资源重叠矩阵 |
| `cp_assets` | ambient_wholesale | 全寿命仓库循环搬运基础设施 | asset_lifetime_driver_record | asset_id; asset_type; asset_identity; asset_equivalent_unit; dataset_scope; manufacture_coverage; maintenance_coverage; replacements; replacement_unit; retirement; end_of_life; history_start; history_end; observed_driver; observed_driver_unit; remaining_driver; remaining_driver_unit; remainder_source; life_driver; life_driver_unit; job_driver; job_driver_unit; all_consumers; all_periods; driver_basis; driver_source; reuse_cycles; actual_turns; uncertainty; sensitivity; update_trigger; direct_event_scope; provider_asset_coverage; carrier_asset_coverage; overlap_owner; conversion; conversion_source | 识别真实仓库货架搬运循环箱托盘衡器监测资产，匹配全寿命制造维护真实替换退役末端。观测完整全使用者历史及有据剩余，作业寿命驱动单位相容，不确定性更新重叠明确，不每轮制造或重复租金。 | Item(s)等价; 实际相容寿命作业驱动原生单位 | 每个真实资产期间维护替换退役复核 | 完整制造至末端及全部使用者期间历史有据剩余 | 实际完整资产唯一责任，直接供方承运重叠一次 | per reference flow | 完整范围历史剩余来源原生驱动及不确定性敏感性 |
| `cp_freight` | ambient_wholesale | 完整运输状态成衣载荷 | shipment_work_record | shipment_id; carrier_id; mode; supplier_gate; destination_gate; cohort_id; consignment_id; period_id; actual_start; actual_end; garment_payload_mass; integral_trim_scope; primary_pack_mass; inherited_outer_mass; added_pack_mass; transported_support_mass; mass_unit; whole_payload_mass; route_distance; distance_unit; load_share; share_basis; share_source; multi_drop_coverage; empty_leg_coverage; return_coverage; native_work_unit; work_conversion; conversion_source; carrier_energy_scope; carrier_asset_scope; direct_overlap; uncertainty | 采集真实运输整衣含附属部件、互斥主包继承新增包装支撑、实际路线距离份额及空返多点退回范围。不用羊毛比例干纤维替载荷，不重复承运能源资产。 | kg*km; 实际载荷距离原生工作量单位 | 每次真实运输退回段 | 约定真实门槛及匹配空返退回期间 | 具名真实承运工作资源范围 | per reference flow | 实际相容载荷路线份额及原生换算 |
| `cp_outlets` | ambient_wholesale | 真实分离包装卫生液体接收 | outlet_receiver_record | site_id; cohort_id; event_id; period_id; stream_id; material_identity; stream_state; classification; gross_quantity; tare_quantity; net_quantity; quantity_unit; remaining_garment_inclusion; transferred_pack_exclusion; composition; composition_basis; composition_source; retained_fibre; retained_fibre_unit; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_source; density; density_unit; density_temperature; density_temperature_unit; density_source; volume; volume_unit; conversion; conversion_source; pollutant_load; pollutant_unit; load_source; collection_method; receiver; transfer_id; receiver_acceptance; treatment_route; treatment_scope; provider_coverage; direct_release_exclusion; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 测量真实单独受损移除外包、混合已用卫生固体捕集纤维或表面清洁液，声明原生流状态。组分保留纤维水分分析不叠加，排除随成衣已转移包装。接收分类验收处理资源一次，不推洗衣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; m3; 实际原生流单位 | 每次真实收集转移接收验收 | 真实残余清洁接收期间，留存库存另记 | 真实围控接收接口，排除直接环境释放 | per reference flow | 实测净流密度组成水分负荷及真实接收处理 |
| `cp_environment` | ambient_wholesale | 真实直接物种与接收介质 | direct_species_record | site_id; cohort_id; event_id; period_id; substance_identity; particle_size; receiving_medium; release_state; measured_mass; measured_mass_unit; activity; activity_unit; species_factor; factor_unit; factor_source; factor_scope; factor_complete; measured_whole_stream_release; whole_stream_unit; composition; composition_basis; composition_source; fate; fate_basis; fate_source; temperature; temperature_unit; pressure; pressure_unit; density; density_unit; density_source; conversion; conversion_source; retained_captured_quantity; receiver_treatment_coverage; applicability; calibration; uncertainty | 选交换身份前识别实际物种粒径介质。实测物种质量、适用活动因子或实测整流组成去向选一路，具原生换算适用性。完整因子不再乘组成去向。仅凭捕集围控物料、成衣混纺标签和水分状态观察不能确定发生释放或没有释放。仍须有真实物种、接收介质及释放证据，不得默认零。 | kg物种; 真实原生活动整流浓度单位 | 每次真实直接事件或有据匹配观察期间 | 真实释放期间来源适用性，无库存余差代理 | 具名真实直接环境接口排除围控接收处理 | per reference flow | 校准实测或匹配因子组成去向及换算证据 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| accepted_consignment | accepted_service | N为reference_gate_id最终唯一accepted_consignment_ids数量；accepted_service=1 Item(s)。 | cp_garment | 附成衣款码组成状态时间的真实完整商业服务 |  |
| garment_component_audit | 非交换成衣 | net_garment_mass=gross_quantity-primary_pack_tare-external_label_insert_tare-outer_pack_tare-pallet_support_tare，成衣净量保留真实附属部件内部标签。仅在确需且代表性实测时，以实际component_mass和相容组分moisture_fraction换算干量：湿基component_dry_mass=component_mass*(1-moisture_fraction)，干基component_mass/(1+moisture_fraction)。实际component_fibre_fraction仅应用于匹配fraction_basis，不将整件接收含附件质量乘标签羊毛比例。分析视图不叠加。 | cp_garment | 真实整衣皮重组分组成水分审计，不新增制造交换 |  |
| finished_gate_demand | 非交换商品 | assigned_source_gate_quantity为真实相容有据source_gate_input_quantity向验收群组分配换算，含有据assigned_moisture_state_change_share，排除互斥退回期末其他出口。commodity_source_gate_demand=assigned_source_gate_quantity/N在服务外。真实loss_adjustment_quantity/unit/basis/source/owner与already_included_loss_coverage核对一次。不明差额不是实际损失或物种。 | cp_garment; N | 独立厂家成品包装需求及定量相容上游损失接口 |  |
| new_supply_stock | 服务供给及未用退回 | S=opening_supply+net_receipts-closing_supply；net_receipts=gross_receipts-receipt_tare。总供给S/N并单独输出匹配usable_outward_return/N，或仅耗用(S-usable_outward_return)/N且省去该退回交换；回收留存计期末，原范围原生单位换算来源匹配。 | cp_supplies; N | 每参考流实际供给及唯一未用退回约定 |  |
| meter_attribution | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | actual_meter_quantity=closing_reading-opening_reading按真实进出口方向，或匹配direct_submeter_quantity；attributable_quantity=(actual_meter_quantity*consumer_driver/total_driver)/N，对应真实互斥全使用者期间，含待机卫生未完成资源。 | cp_utilities; N | 每参考流实际归属购入公用资源 |  |
| physical_provider | provider_packages | provider_quantity=native_quantity*equivalent_conversion/N，仅真实匹配实体完整包成立，资源责任一次。 | cp_provider; N | 每参考流实际已完成等价服务包 |  |
| asset_equivalent | shared_assets | asset_equivalent=(job_driver/life_driver)/N；life_driver=observed_driver+remaining_driver，原生单位相容、全部使用者完整历史剩余有据且寿命范围真实，单视图不重复归一化。 | cp_assets; N | 每参考流真实完整资产等价份额 |  |
| whole_load_freight | freight | whole_payload_mass=garment_payload_mass+primary_pack_mass+inherited_outer_mass+added_pack_mass+transported_support_mass，成衣已含附属部件且组分互斥；freight_work=whole_payload_mass*route_distance*load_share/N，先真实换算及退回空返互斥覆盖。 | cp_freight; N | 每参考流真实整载荷运输工作量 |  |
| contained_outlets | 真实废物出口 | garment_waste=actual_discard_stream_mass/N，采用真实一起转移时成衣关联包状态。其他outlet_quantity=(gross_quantity-tare_quantity)/N采用真实原生单位或实测体积/N，按需有据密度温度。排除已转移成衣包装及留存库存，组分不叠加，接收处理一次。 | cp_garment; cp_outlets; N | 每参考流声明状态真实互斥围控出口 |  |
| species_mass | direct_species | species_mass=measured_mass/N OR activity*species_factor/N OR measured_whole_stream_release*composition*fate/N，先相容有据原生换算，选一路。factor_complete禁止再乘组成去向，不重复整流物种实体出口。 | cp_environment; N | 每参考流真实直接物种质量及接收介质 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| finished_style_state | 接收验收套头衫 | 真实厂家成品折叠包款码源批组成来源洗护买方标准，实际件数净量皮重及非侵入或代表性供方记录，不默认纯羊毛家庭洗护。 | cp_garment厂家SKU标签买方状态证据 |
| composition_moisture_loss | 成衣库存实际去向 | 整衣含附件不同于纺织纤维组分分析，真实水分基准方法样品时间代表性及相容比例基准。形变虫霉质量差不自动丢弃损失物种。成品门槛实际需求损失责任状态单位来源覆盖在服务外一次。 | 真实数量状态库存去向及定量原门槛商品关联 |
| physical_completeness | 全部资源期间 | 实际全使用者原生驱动供方范围，全资产寿命历史剩余不确定性及来源承运处理责任，含待机卫生失败未完成事件一次。 | 源表供给供方资产运输接收记录 |
| concrete_identity_ranges | 真实展开交换 | 最终数据前解析真实SKU服务资产废物物种及原生属性单位，数值范围需可比独立证据，不编基准。 | 实际详情支持接收和经验范围适用证据 |

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
| garment_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_garment`识别`garment_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`garment_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_garment`; 实际来源关联原生记录 |
| packaging_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`packaging_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| hygiene_waste | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`hygiene_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| wastewater | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | ambient_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

实测真实电动搬运充电、照明、记录检验及普通通风或表面清洁设备。本常温路线无现场燃烧、专用温湿介入或成衣蒸汽整烫洗涤干燥。实际新增实体操作须复审范围模块。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：折叠套头衫仓库实际购入电力
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属购入电量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需实际源表充电事件范围及全使用者因果驱动期间，含待机卫生未完成；无每件标准电耗、制造负荷或默认除湿机使用。

#### cleaning_water

仅地面设备实际外部公用水，声明来源处理供方边界。无成衣洗漂蒸汽或由纺织品水分推用水，实际清理接收循环补水另记。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入仓库表面清洁水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属购入清洁水量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需真实表计清洁事件数量来源处理；无家庭羊毛洗涤、液衣比或购水等于出水。

#### hygiene_supplies

按SKU状态单位展开实际具名表面清洁剂擦拭物等质量计服务耗材。不规定樟脑丸雪松硅胶驱避剂或成衣化学处理。实际外包非产品接触虫害监测卫生须具资源边界；成衣处理另审路线。

本卡为独立身份分支`hygiene_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库清洁产品与卫生耗材
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属新卫生供给质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需实际配方SKU产品质量库存未用退回接收组成去向；无家庭洗护套装或虫控化学剂量释放默认。

#### added_packing

仅商户实际新增外运输箱捆带保护件，定义材料单位及需换算时单件质量。厂家主包装折叠密封标签衣架内衬属于继承商品审计，本路线不开包重包。循环箱托盘属资产。

- 身份采集要求：实际新增外层运输包装件
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属新外运输包装件数
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需真实新增单位材料原生库存退回记录；无默认家庭储衣袋真空雪松干燥剂、每箱标准件数或每衣新主袋。

#### provider_packages

真实供方定义、资源完整原生单位匹配的包装状态核验、仓库卫生非产品接触虫害监测、搬运维护实体包。费用利润发票不能替代资源。外包洗涤蒸汽补修再染产品处理重包仍是实际排除加工，须审扩展。

- 身份采集要求：已完成的实体仓库检验卫生或搬运服务包
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属已完成实体服务包等价量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需真实合同完成单位换算及能源材料资产处理覆盖排除；无标准检验频次家庭洗护程序或价格定义无资源Count。

#### shared_assets

真实仓库货架电动搬运循环箱托盘监测衡器，匹配完整整资产等价。制造维护真实更换退役寿命末端覆盖全部使用者期间。不每轮新造载具，不重复供方租金和整资产。

- 身份采集要求：实际完整寿命仓库及循环折叠成衣搬运资产
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属完整资产等价量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：需真实身份寿命范围、相容原生全使用者作业寿命驱动、观测历史有据剩余及不确定性敏感性；无通用货架寿命箱托轮数。

#### freight

实际约定进出退回运输，包含真实成衣附属部件及继承新增包装运输支撑。声明羊毛比例或干纤维分析不是载荷质量。承运内含能源车辆资产和空返多点退回覆盖唯一归属。

- 身份采集要求：实际折叠套头衫整载荷运输工作量
- 流属性/单位：mass*distance / kg*km
- 数量规则：每参考流实际归属整载荷运输工作量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需真实总净载荷组成路线距离互斥份额原生换算；无标准衣重箱托数、羊毛比转载荷或默认路程。

#### unused_count_returns

仅匹配同范围原供给库存单位并获接收验收的真实未用Count包装外退，内部移动留存不是输出。选总输入加该退回，或仅耗用并省去匹配退回交换，不重复抵扣。

- 身份采集要求：实际外送未用新增运输包装退回
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属未用包装外退件数
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需实际配对ID单位件数接收方及库存视图；无未用比例、厂家包装信用或替代生产收益默认。

#### unused_mass_returns

实际质量计服务产品未用外退，精确状态净量和同范围独立供给配对。成衣商业退回为商品移动，不是负服务或未用耗材。已用擦拭制剂为废物。

- 身份采集要求：实际外送未用卫生供给退回
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属未用卫生供给外退质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需实际产品状态原范围退回配对及校准净量；不抵扣无关当期供给或厂家继承商品资产。

#### garment_waste

实际转移废物接收方的拒收成衣，记录含附属部件质量及仅在同一实测流中一起转移的包装。形变虫霉观察或退回本身不证明丢弃质量损失。不得在另一出口重复关联包装。商品损失上游在服务外，实际搬运处理一次。

- 身份采集要求：按真实转移包装状态丢弃的套头衫
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属废弃成衣流质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_garment`

数量范围证据需求：需款式尺码组成状态件数质量包装覆盖和接收处置；无状态分等于损失、标签纤维百分比等于排放或默认填埋回收。

#### packaging_waste

仅真实事故外层搬运导致已分离损坏包装，具材料状态剩余成衣覆盖及接收记录。不常规开主包换袋或制造新零售包装；排除随成衣或混合清理废物已转移的包装。

本卡为独立身份分支`packaging_waste_paper_pack`; `packaging_waste_metal_pack`; `packaging_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际单独移除的受损外层或继承包装
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属单独收集包装废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实组分净量状态剩余内容物接收方；无默认袋重、每包接收即移除或再生替代信用。

#### hygiene_waste

真实表面清洁擦拭吸附物监测耗材或捕集混合固体，仅在实测流状态中计实际留存纤维水分制剂。清洁供给组分分析为非叠加视图。捕集纤维非空气排放，不编织物裁切洗衣残余。

- 身份采集要求：实际已收集混合仓库卫生残余
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属混合卫生废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际净转移状态组成保留液体、成衣包装排除及接收证据；不将清洁供给等于废重或默认虫霉纤维释放量。

#### wastewater

真实表面清洁事故液体至接收方，以实测体积或相容质量密度温度及真实负荷来源。无成衣洗涤蒸汽干洗水，不由成衣水分推废水。已收集液体不同于直接物种介质释放。

- 身份采集要求：实际已收集的仓库表面清洁废水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属已收集清洁液体体积
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需真实收集接收、密度温度换算处理负荷范围；无家庭洗水比默认污染系数或排水比例。

#### direct_species

仅对实测或有据匹配实际物种介质建模，必要时声明粒径。成衣混纺标签、水分变化、虫霉气味观察、捕集纤维或家庭防虫建议不证明化学生物水汽微纤维释放。整流组成去向与释放证据独立。

- 身份采集要求：实际独立识别的仓库直接释放物种
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属直接释放物种质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：需真实身份介质粒径、数量原生换算及因子组成去向适用证据；无假定樟脑雪松化学物、混纺比例转微塑料或水分余差排气。

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_check | accepted_service | N>0唯一最终商业验收服务，真实厂家款码羊毛混纺件数含附件净量皮重水分来源状态时间，不是一件衣或羊毛kg。 |  |
| processing_check | 全部路线 | 无成衣制造洗蒸烫修再染虫控主包开启重包或未审专用温湿操作，含实际外包；不强制家庭洗护。 |  |
| commodity_gate_check | 非交换成衣 | 完整厂家包装基线在服务外补齐真实油毛后及混纺制造阶段一次；原门槛归属数量状态变化互斥出口及相容损失单位基准来源责任既有覆盖必需。标签羊毛比例不等于整衣纤维kg，质量差不等于损失物种。 |  |
| resource_owner_check | 全部服务资源 | 全部使用者期间驱动原生单位待机卫生未完成，选总供给加退回或仅耗用省退回，全寿命观测有据剩余末端和直接供方承运处理范围一次。 |  |
| fate_species_check | 实际出口 | 可用商业退回留存拒收不同于真实丢弃；成衣一起转移包与单独外包混合卫生液体互斥。真实物种介质独立，不由家庭化学品状态捕集纤维推释放或自动信用。 |  |
| bilingual_raw_contract | 全部内容 | 原始七身份五功能六边界六参考七画像、八协议各十二字段和十公式正文输出非空；有序ID属性单位证据原操作数来源URL及确定性投影不预处理对齐，检查不证明实际质量或最终UUID。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际前景完成且具体身份验证后作为secondary_dataset或background_dataset |
| downstream_use | 常温折叠羊毛针织套头衫商户实体增量，关联完整厂家成品包装商品需求及相容实际损失一次，不是总交付衣物足迹 |
| allowed_use | 实际声明厂家成品折叠包装含羊毛针织套头衫款码SKU源批及商业验收群组，附组成附件水分状态期间 |
| excluded_use | 油毛纱成衣制造其他衣物皮草、洗蒸修处理重包或未审温湿介入、零售代理独立仓储；家庭洗护强制或耐用安全保证 |
| required_metadata | 供方款码SKU源批厂家放行商户买方；羊毛混纺组成基准来源；真实衣件含附件净量外包皮重、组分水分方法基准来源样品时间代表性；状态库存去向期间；全使用者服务供方资产承运接收范围；原门槛归属量状态单位来源分配换算损失责任既有覆盖 |
| required_quality_disclosure | 真实测量校准及整衣附件组分组成水分相容；可见供方状态真实处置不明差额；完整成品阶段损失覆盖；全使用者驱动全寿命有据剩余不确定性；原生支持身份经验范围缺口 |
| update_trigger | 款码纤维混纺附件厂家包装状态或验收改变；新增成衣洗护产品处理重包温湿；仓库供方资产承运接收范围改变；真实损坏丢弃释放或实质来源证据 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| woolmark-wool-storage-context | literature | Woolmark，《羊毛衣物如何存放》。https://www.woolmark.com/care/how-to-store-wool-clothes/ | 羊毛行业消费者折叠形状水分虫害定性存放背景；不将家庭先洗真空新袋硅胶雪松樟脑频次、数字仓储条件或化学生物释放作为操作默认。 |
