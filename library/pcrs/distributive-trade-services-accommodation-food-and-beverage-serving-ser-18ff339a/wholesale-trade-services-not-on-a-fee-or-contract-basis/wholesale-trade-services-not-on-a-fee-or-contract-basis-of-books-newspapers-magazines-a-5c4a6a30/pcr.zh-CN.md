---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-books-newspapers-magazines-a-5c4a6a30
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 已装订印刷教材的常温自营批发服务

## 1. 范围与适用性

本 PCR 覆盖成品已装订印刷教材的真实普通常温自营企业批发物理服务。来源为放行印刷装订成品册或真实多分册套，版本ISBN语言物理格式原包声明；不变接收持存拣货发出后有记录买方验收为完成。不固定册数书重定义一个商业服务。

排除电子书数字权利报纸文具造纸印刷装订数字化修复修补脱酸熏蒸制浆碎纸档案调控保管零售佣金代理。真实损坏未售退回书保留真实状态去向；额外真实加工调控须另审完整清单。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-books-newspapers-magazines-a-5c4a6a30 |
| classification_refs | CPC3.0:61051；narrower：32210成品装订印刷教材常温自营服务 |
| covered_products | 成品装订印刷教材真实完成商业企业物理批发货批 |
| excluded_products | 电子书权利报纸文具纸书制造修复档案处理制浆零售代理 |
| representative_product | 具版本ISBN语言格式装订页码真实册套分册箱量净水分皮重的验收商业货批 |
| production_route | 放行成品装订印刷册接收 -> 普通常温库存订单作业 -> 发出 -> 真实企业验收及例外 |
| market_state | 完成物理贸易服务，不变特定版本书为非交换商品库存 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的已装订印刷教材常温自营批发货批服务 |
| How much | 1 Item(s)，一个唯一验收商业货批，不是一册套分册箱千克页金额 |
| How well | 真实物理版本来源等价、册套完整装订纸包状态及买方约定门槛记录例外 |
| How long or cycle | 真实接收库存拣货发出退回验收期间及归属待机清洁截止共享资产完整寿命 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的已装订印刷教材常温自营批发货批服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | finished_bound_printed_educational_textbook; actual_publisher_ISBN_edition_revision; actual_language_print_format_print_run_binding_pagination; actual_copy_set_volume_definition_and_source_equivalence; actual_carton_copy_volume_hierarchy_completeness; net_finished_book_mass_and_external_pack_tare; actual_moisture_measurement_state_and_condition; unsold_usable_return_damaged_retained_and_discard_distinction; actual_receipt_stock_dispatch_acceptance_periods; ownership_resale_business_buyer; actual_quality_exceptions_and_receiver_fates; actual_provider_asset_carrier_treatment_scope |

N>0 为记录冲销后唯一真实验收服务完成数。未售库存失败交接隔离退回未完成期间作业保留真实资源责任集合归属，即使期间 N 为零。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_service | accepted_service | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 参考输出为 1 Item(s)，一个商业验收服务，不是印刷册或ISBN。 |
| copy_hierarchy | book stock | Count | copies; sets; volumes; cartons | 记录真实来源单位定义版本等价、应含分册附件范围原生嵌套因子单位来源。页叶数页码不证明册数书得率净质量。 |
| book_mass_state | merchandise/loss | Mass | kg | 测运输包装毛重外包皮重成品净书含封面装订墨。水分单位基准方法来源采样状态时间代表抽样决定真实湿干换算，不档案目标或仅纸质量。 |
| native_support | all exchanges | actual native property | actual native unit | 核实真实材料服务资产原生换算属性支持，不金额转次数页转千克原纸转装订册捷径。通用电不能套用燃料热值系数。 经核实的电力流可按独立确认的电能基准及单位组使用ILCD名为净热值的参考属性；该属性名称不授权套用燃料热值系数。 |


## 5. 系统边界

本服务为附加物理贸易模块，不独立教材足迹或藏书保管保证。国会图书馆藏书建议仅支持定性状态问题；下列来源归属库存全寿命运输计算为声明 PCR 方法，不称藏书指南定量因子。

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 真实放行成品装订印刷教材册或声明完整分册套，版本ISBN语言格式原产品包装定义明确 |
| starting_condition_role | 非交换商品库存流经量，含纸墨封面装订胶继承原包 |
| product_classification_scope | 61051书籍322内较窄32210印刷教材常温自营路径 |
| recursive_input_rule | 真实外部物理服务须完整不重叠门槛，不递归同次销售或重复服务运输资产范围 |
| upstream_dataset_requirement | 完整真实放行装订印刷册基线匹配出版版本ISBN语言格式，含相关纸印刷墨封面装订胶附件原包，缺制造服务外一次补齐。纸张浆印刷单独不完整。真实资源服务接收处理须兼容原生范围 |
| disclosure | 全部限定；来源版本等价数量层级净水分皮重库存期间去向；原门槛归属需求状态损失换算出口覆盖责任集成；完整资源资产服务承运接收 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_addon | all inventory | 全部交易书生产原包装含纸封面墨装订胶及售出损失书内含上游负担均排服务交换。附加服务外须完整兼容成品装订印刷册基线及真实原门槛归属需求状态损失其他出口覆盖责任一次集成，全链才完整。真实服务损失搬运接收处理在内一次。 |  |
| boundary_edition | copy/set/volume equivalence | 按实际出版者ISBN范围版本修订语言格式印次装订页码匹配原物理来源。同书名页数不证明等价，套分册箱嵌套及真实来源单位换算须有据。原成品册归属经退回损坏留存最终废物各一次，不父套子册相加。 |  |
| boundary_ordinary | merchant route | 普通常温接收库存拣货发出不是档案保管印刷装订数字化修复脱酸熏蒸制浆。真实新增调控加工修补须明确有界审查完整资源，不省略假零。 |  |
| boundary_source | qualitative guidance | 国会图书馆藏书指南仅支持定性结构支撑搬运光水分状态问题。不对普通批发强加档案温湿数字清洁方法收藏材料图书寿命或通用废率。真实出版买方库房条件控制。 | loc-book-storage |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| printed_textbook_trade | 印刷教材常温库存与自营贸易 | required | 真实自营物理普通常温印刷教材贸易企业验收 | 一个接收库存拣货发出责任，订单清洁批次跨报告期间共享库房设施 | `accepted_service` |

图书储存标签不创建印刷装订保管节点。正常书保持成品不变；真实缺套退回损坏废弃状态及清洁接收留有界贸易责任。按条件展开真实材料服务废物物质身份，不缺数记零。

### 过程：印刷教材常温库存与自营贸易 (`printed_textbook_trade`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`warehouse_electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：归属真实计量电量 / N；cp_power。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：需实测期间设备范围兼容因果全部用户驱动，不从纸标签档案建议给每ISBN页册功率。

###### 实际液态处理自来水供给 (`premises_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：归属真实实测供应 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需来源用途真实持留收集直接出口证据；潮湿水损书不量化服务供水废水蒸发。

###### 实际独立记录的合成洗涤剂投入 (`actual_housekeeping_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：归属真实原生物资供应 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需真实品号干材活性载体配方库存使用退回原生密度温度换算来源，制剂内含为替代视图不双供应。

###### 实际独立记录的聚乙烯包装薄膜 (`added_order_materials_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：归属真实新增物资 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需真实原生数量面积长度质量库存皮重材料换算来源，不通用规定每册无酸夹档案盒新包装。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的已装订印刷教材常温自营批发货批服务 (`accepted_service`)

一个真实唯一所有权买入转售商业货批，企业买方按声明版本ISBN语言格式装订册或真实分册套配置状态验收。印刷册套分册箱数为独立库存量。

- 选定流：已完成的已装订印刷教材常温自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_books`

范围证据需求：需真实验收出版者ISBN版本印刷格式装订页码物理数量层级净书质量水分皮重期间质量，不册等服务或页转千克默认。

##### 废物流

###### 废弃完整装订印刷教科书 (`actual_whole_book_waste_atomic_case`)

仅在实际独立记录确认“废弃完整装订印刷教科书”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`actual_whole_book_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整装订印刷教科书
- 流属性/单位：Mass / kg
- 数量规则：归属实测真实整书废物 / N；cp_books。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_books`

范围证据需求：需确切版本册套分册范围数量净书包装皮重水分状态真实接收原门槛损失映射；分册套缺一本不证明余书均废。

###### 实际独立收集的非包装废纸 (`separated_book_material_waste_paper`)

仅适用于接收门实际独立收集、纸或纸板身份及收集组成已确认的废纸流。非纸层压材料、复合碎屑、铁丝塑料混合物及污染清理固体保留各自余项身份。整书整卷、包装与本独立废纸出口物理互斥，仍留在整体流中的纸组分仅作不可相加审计。不预设制浆、粉碎、分选、回收信用或发生。

- 选定流：废纸（未指定） `f140a5a2-5318-4d06-956f-a87b9c6fda25`
- 流属性/单位：Mass / kg
- 数量规则：归属实测真实分离材料 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需实测湿干复合比例来源版本真实接收处理；碎片浆质量页码不是册数或通用原门槛书得率。

###### 实际单独收集的纸类包装废物 (`actual_pack_waste_paper_pack`)

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

范围证据需求：需真实产品包装范围皮重材料污染整件部分排除接收运输处理；回收标记收集不证明避免造纸。


###### 实际单独收集的金属包装废物 (`actual_pack_waste_metal_pack`)

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

范围证据需求：需真实产品包装范围皮重材料污染整件部分排除接收运输处理；回收标记收集不证明避免造纸。


###### 实际单独收集的塑料包装废物 (`actual_pack_waste_plastic_pack`)

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

范围证据需求：需真实产品包装范围皮重材料污染整件部分排除接收运输处理；回收标记收集不证明避免造纸。

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_service | all duties | 采用真实唯一正数验收商业 N 及因果物理集合期间驱动比例。失败取消隔离退回订单待机清洁未完成期间仍有职责，即使无当期服务完成；册箱数利润本身非 N。 |  |
| allocation_goods | nonexchange book stock | 按互斥来源版本数量层级核对归属期初净收货买方退回期末未售损坏留存验收转移出版供货退回其他出口真实整书碎片废弃余下可用分册。内部隔离缺套非出口。采用来源分配时，保留 source_all_exit_driver_records 覆盖每个竞争验收转移、外部退回、期末结转未售或损坏留存库存、可用其他出口及真实整书碎片损失。各互斥终态出口驱动记录须有数量单位基准来源、原货源版本链接、集合期间及互斥键；中间退回移动核对到最终状态，不两者相加。分子完整分母须指同一兼容原货源集合及驱动基准。分母=这些完整互斥记录之和，含未售期末结转及有用出口，绝非仅验收；缺去向覆盖阻来源分配。按匹配来源单位状态真实换算责任已含损失覆盖在服务外定量原成品册需求状态整件部分损失一次集成，不假碎片湿干变化变册数。 |  |
| allocation_supplies | independent supply and unused_supply_return | S=归属期初+真实外部净收货-含回收留存独立供应期末。总输入 S 并独立同范围匹配可用输出，或仅耗用输入 S-return 省该输出。内部回收非收货，不数值 S+退回双扣或删未退废物溢漏上游负担。图书商品退回原封面非服务供应抵扣。 |  |
| allocation_life_scope | resources/assets/providers | 兼容期间完整资源归属=集合物理驱动/全部用户驱动。全寿命资产当量=兼容集合驱动/全部用户期间完整寿命驱动，含制造维护清洁更换终结。证明实测寿命或历史有据剩余终止驱动单位不确定性敏感性更新。完整服务范围替代已含自有资源资产，不叠加。 |  |
| allocation_outlets | actual book/fragment/pack/cleanup flows | 真实整书碎片包材吸附液清洁固体独立容纳液为互斥物理流。纸墨胶封面水分比例为非叠加内含，具转移排除链接。真实接收运输处理一次，不自动制浆回收替代抵扣或废物扣供应。仅真实已识别直接物质介质用有据测量去向，接收排放在接收范围一次。 |  |



| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| source_scope_normalization | 非交换商品与服务组合 | 原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_books | printed_textbook_trade | 验收商业服务及互斥册分册库存 | 原始物理事件计量范围来源去向账 | consignment_id; publisher; title; ISBN; ISBN_scope; edition; revision; language; print_format; print_run; binding; pagination; page_or_leaf_definition; pagination_source; copy_or_set_definition; parent_set_id; volume_id; volume_count; copy_count; count_unit; carton_id; carton_count; copies_per_carton; nested_count_factor; nested_count_factor_unit; nested_count_factor_source; original_source_edition_equivalence; equivalence_evidence; required_volume_accessory_list; actual_completeness; condition; unique_stock_record; gross_pack_mass; external_pack_tare; net_finished_book_mass; mass_unit; each_or_total_mass_record; mass_conversion_factor; mass_conversion_unit; mass_conversion_source; sample_id; sample_representativeness; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_state; sample_time; supplier_evidence_date; temperature; temperature_unit; humidity; humidity_unit; observation_time; opening; gross_receipts; receipt_tare; net_receipts; buyer_returns; closing_unsold; damaged_retained; accepted_transfer; publisher_supplier_returns; incomplete_internal; quarantine_internal; other_exits; actual_whole_discard; actual_fragment_exit; retained_usable_volumes; disposition; physical_fate; receipt_time; dispatch_time; acceptance_time; ownership_gate; buyer_gate; original_gate_dataset_id; original_gate_reference; original_gate_quantity; original_gate_unit; original_gate_state; original_gate_quantity_source; allocation_method; allocation_source; direct_assignment_evidence; source_cohort_driver; source_cohort_driver_unit; source_cohort_driver_basis; source_cohort_driver_source; source_cohort_driver_record_ids; source_all_exit_driver; source_all_exit_driver_unit; source_all_exit_driver_basis; source_all_exit_driver_source; source_all_exit_driver_records; driver_record_id; driver_exit_state; driver_quantity; driver_quantity_unit; driver_basis; driver_source; driver_original_source_link; driver_source_edition_link; driver_source_cohort_id; driver_period; driver_exclusivity_key; driver_conversion_factor; driver_conversion_unit; driver_conversion_source; driver_coverage_reconciliation; assigned_source_quantity; assigned_source_unit; assigned_source_quantity_source; original_gate_loss_quantity; original_gate_loss_unit; original_gate_loss_basis; loss_conversion; loss_conversion_unit; loss_conversion_source; state_change_evidence; burden_owner; already_included_loss_coverage; product_package_fate_links; integration_result; N; source_assignment_scope_id; source_assignment_scope_kind; source_quantity_basis; source_target_scope_id; source_same_scope_N; source_same_scope_N_unit; source_same_scope_N_basis; source_same_scope_N_method; source_same_scope_N_state; source_same_scope_N_sample_time; source_same_scope_N_source; source_same_scope_acceptance_ids; source_already_per_reference; raw_integration_scope_link; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 真实商业验收匹配出版者ISBN版本语言物理格式及来源等价证据。核对册套分册箱层级真实质量水分皮重，不父子重计或页推册。可售退回未售损坏留存真实废物分开；服务外归属兼容原成品册需求损失。采用来源分配时，保留 source_all_exit_driver_records 覆盖每个竞争验收转移、外部退回、期末结转未售或损坏留存库存、可用其他出口及真实整书碎片损失。各互斥终态出口驱动记录须有数量单位基准来源、原货源版本链接、集合期间及互斥键；中间退回移动核对到最终状态，不两者相加。分子完整分母须指同一兼容原货源集合及驱动基准。分母=这些完整互斥记录之和，含未售期末结转及有用出口，绝非仅验收；缺去向覆盖阻来源分配。  原始外部商品库存、来源归属损失及缺阶段新增上游集成量均保留有证据的实际原始作用域。逐量识别一个实际货批、目标服务集合或已经每参考流，并记录来源目标作用域编号与数量口径。来源集合全部出口分母仅把原始量归属该目标范围，不自动等于目标验收服务N。仅与1 Item(s)服务组合时，以同目标范围原始归属量除正数唯一验收source_same_scope_N，记录验收编号时间冲销证据，取得每参考量。有证单货批source_same_scope_N=1，已每参考量不再除。保留实际原始集成量来源链接，不缩小真实上游补阶段量，不用无关N除整个来源集合；N0责任披露不除。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); copies; sets; volumes; cartons; kg; actual condition units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点真实全部职责及共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源及完整责任不确定性 |
| cp_power | printed_textbook_trade | 真实库房电量期间驱动 | 原始物理事件计量范围来源去向账 | meter_id; period_start; period_end; opening_reading; closing_reading; energy_unit; equipment_scope; idle_cleanup; cohort_driver; cohort_driver_unit; all_user_driver; all_user_driver_unit; attribution_share; share_source; provider_included_scope; source; uncertainty; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量完整真实设备期间范围因果全部用户物理驱动，含待机清洁未完成职责。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点真实全部职责及共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源及完整责任不确定性 |
| cp_water | printed_textbook_trade | 真实水来源出口容纳流 | 原始物理事件计量范围来源去向账 | source_id; period; supplied_volume; retained_volume; collected_volume; volume_unit; actual_outfall; receiver; composition; composition_basis; composition_source; density; density_unit; density_source; temperature; temperature_unit; wet_book_or_solid_retained_exclusion; stream_exclusion_ids; evaporation_evidence; fate_basis; fate_source; transport_scope; treatment_scope; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 实测真实来源用途物理出口持留组成接收及湿书固体排除，不余额归液空气。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | m3; actual composition units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点真实全部职责及共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源及完整责任不确定性 |
| cp_materials | printed_textbook_trade | 真实独立服务物资未用退回 | 原始物理事件计量范围来源去向账 | material_id; SKU; native_quantity; native_unit; formulation; active_fraction; carrier_fraction; fraction_basis; fraction_source; opening; gross_receipts; receipt_tare; net_receipts; internal_issue; internal_recovery; closing_including_recovered; actual_use; matched_unused_external_return; source_scope_match; external_receiver; stock_representation; conversion_factor; conversion_unit; conversion_source; density; density_unit; density_source; temperature; temperature_unit; actual_fate; fate_basis; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 闭合真实原生供应库存退回；总输入 S 独立同范围可用外出输出，或仅耗用 S-return 省匹配输出。继承书材不新服务供应。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual native supply units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点真实全部职责及共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源及完整责任不确定性 |
| cp_provider | printed_textbook_trade | 完成外部物理作业重叠 | 原始物理事件计量范围来源去向账 | provider_id; job_id; native_quantity; native_unit; completed_gate; completion_time; actual_operation; resource_scope; electricity_coverage; full_asset_coverage; maintenance_EOL_coverage; carrier_empty_scope; treatment_scope; upstream_dataset; overlap_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | 核实真实原生作业完成完整资源资产承运接收范围，仅去有证自有重叠。印刷修复制浆干预在正常路线外，须另有界审查。 | Item(s); actual provider units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点真实全部职责及共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源及完整责任不确定性 |
| cp_assets | printed_textbook_trade | 全寿命共享库存搬运资产 | 原始物理事件计量范围来源去向账 | asset_id; asset_native_unit; manufacture_scope; maintenance_cleaning_scope; replacement_scope; EOL_scope; burden_owner; provider_overlap; cohort_driver_identity; cohort_driver; cohort_driver_unit; lifetime_driver_identity; lifetime_driver; lifetime_driver_unit; all_user_driver; all_period_scope; observed_history; observed_unit; evidenced_remaining_use; remainder_unit; remainder_source; termination_basis; uncertainty; sensitivity; update_evidence; source; N | 采用真实完整资产周期兼容全部用户期间寿命驱动，实测寿命或历史加有据剩余终止敏感性更新。不藏书寿命代资产寿命。 | Item(s); actual compatible driver units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点真实全部职责及共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源及完整责任不确定性 |
| cp_transport | printed_textbook_trade | 真实包装货物路段承运比例 | 原始物理事件计量范围来源去向账 | leg_id; origin; destination; carrier; period; stock_records_in_load; gross_load; gross_load_source; load_tare; load_tare_role; load_tare_source; packed_payload_state; net_packed_load; load_unit; distance; distance_unit; distance_source; load_conversion_factor; load_conversion_unit; load_conversion_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_source; empty_scope; carrier_resource_scope; commodity_service_owner; cohort_driver; all_user_driver; driver_unit; attribution_share; share_source; source; N | 实测真实包装载荷路线原生换算物理全部用户比例，仅减声明车辆非货物皮重，不书封面货包装。不纸箱内书叠载荷。 | kg*km; actual native leg units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点真实全部职责及共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源及完整责任不确定性 |
| cp_waste | printed_textbook_trade | 真实整件碎片包材清洁排除 | 原始物理事件计量范围来源去向账 | event_id; publisher; ISBN; edition; language_format; set_id; volume_id; stock_record; material; product_or_package_scope; whole_or_fragment; native_count; count_unit; wet_mass; dry_mass; mass_unit; paper_ink_glue_cover_fraction; fraction_basis; fraction_source; moisture; moisture_unit; moisture_basis; moisture_method; moisture_source; sample_id; sample_state; sample_time; supplied_material_link; dry_cleanup_material_mass; retained_fluid_quantity; retained_fluid_unit; retained_fluid_state; retained_fluid_basis; retained_fluid_source; contaminant_composition_basis; stream_exclusion_ids; stream_exclusion_quantity; stream_exclusion_unit; contamination; gross; tare; net; origin; actual_fate; receiver; transfer_gate; transport_scope; treatment_recovery_scope; actual_pulping_owner_if_any; commodity_loss_link; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 称真实互斥整书碎片包材废清洁物，持留液作链接物理出口组成审计。真实接收制浆回收如有须覆盖，不假定自动抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kg; actual component/count units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点真实全部职责及共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源及完整责任不确定性 |
| cp_species | printed_textbook_trade | 真实直接物质接收介质 | 原始物理事件计量范围来源去向账 | event_id; source_process; substance; receiving_medium; measured_release; release_unit; activity; activity_unit; factor; factor_unit; factor_basis; factor_source; factor_complete; component_fraction; fraction_basis; fraction_source; fate_fraction; fate_basis; fate_source; measurement_source; uncertainty; cohort_driver; all_user_driver; driver_unit; attribution_share; source; N | 先识真实直接来源物质介质再实测或有据兼容活动因子组成去向一次。变色潮湿含量差额本身不证释放。 | kg; actual compatible activity units | 每真实事件及匹配计量期间 | 完整归属期间截止及寿命证据 | 本节点真实全部职责及共享用户 | 每参考流 | 原始校准、兼容单位状态基准换算来源及完整责任不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize | all inventory | 归属真实物理量除正数唯一 N 一次；accepted_service 为 1 Item(s)。 | 归属量; N; 协议 | 每参考流量 |  |
| supply_stock | materials and unused_supply_return | S=归属期初+真实外部净收货-含回收留存独立供应期末。总输入 S 并独立同范围匹配可用输出，或仅耗用输入 S-return 省该输出。内部回收非收货，不数值 S+退回双扣或删未退废物溢漏上游负担。图书商品退回原封面非服务供应抵扣。 | 期初; 真实净外部收货; 含留存回收期末; 同范围匹配未用外出; 口径; cp_materials | 不重复供应退回物资 |  |
| shared_life_share | resources/assets/providers | 兼容期间完整资源归属=集合物理驱动/全部用户驱动。全寿命资产当量=兼容集合驱动/全部用户期间完整寿命驱动，含制造维护清洁更换终结。证明实测寿命或历史有据剩余终止驱动单位不确定性敏感性更新。完整服务范围替代已含自有资源资产，不叠加。 | 真实期间资源范围; 集合全部用户寿命驱动单位; 实测历史剩余终止来源; cp_assets | 归属完整资源资产当量 |  |
| finished_book_net_mass | nonexchange copy stock | 成品净书质量=真实唯一库存包装读数求和（毛重-外包装皮重），以原生因子单位来源版本抽样代表性一次换算。封面装订墨为产品，不外皮重。逐实例或有据总量二选一，不总量再乘册箱数；父套装订分册为替代视图。页数标称单纸重单独不提供净册质量。 | 版本来源单位等价; 唯一库存记录; 毛外皮重; 每件总量; 原生质量因子单位来源; 抽样代表性; cp_books | 成品册净质量，非交换审核 |  |
| original_gate_assignment | commodity outside service | 采用真实直接计量追溯归属来源量单位状态来源直接证据；否则归属来源量=真实原门槛量*兼容来源集合驱动/来源全部出口驱动，具正数完整分母单位分配方法来源。不叠直接分配视图。采用来源分配时，保留 source_all_exit_driver_records 覆盖每个竞争验收转移、外部退回、期末结转未售或损坏留存库存、可用其他出口及真实整书碎片损失。各互斥终态出口驱动记录须有数量单位基准来源、原货源版本链接、集合期间及互斥键；中间退回移动核对到最终状态，不两者相加。分子完整分母须指同一兼容原货源集合及驱动基准。分母=这些完整互斥记录之和，含未售期末结转及有用出口，绝非仅验收；缺去向覆盖阻来源分配。真实版本来源单位及整书碎片损失状态换算匹配覆盖责任互斥出口，服务外集成一次；无真实证据不碎片浆页变册因子。 | 原门槛量单位状态来源; 直接证据或分配方法来源集合全部出口驱动单位; 归属来源; 版本等价; 损失换算责任覆盖出口集成; cp_books | 可重复归属成品册需求损失量 |  |
| packed_load_freight | packed_freight | 真实路段求和[(真实包装载荷原生量*转kg因子)*(真实距离*转km因子)*真实归属比例]/正数 N。货物含真实书封面装订原新增货包装，仅减有据车辆非货物皮重。因子比例具兼容单位基准来源及分配时全部用户驱动。不叠同父箱内册或净纸完整装订书。 | 真实包装载荷状态或毛非货物皮重; 原生距离; 载荷距离因子单位来源; 真实比例全部用户驱动; N; cp_transport | 每服务参考kg*km |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_actual_identity | all exchanges | 最终使用前核实真实具体流状态门槛属性单位介质，真实配置分开。 | 完整详情支持证明 |
| quality_source_copy | commodity stock | 真实出版ISBN版本语言格式来源等价、数量嵌套净水分皮重互斥未售退回损坏留存废物记录，不书名页码等价。 | 原始出版来源库存称量状态去向记录 |
| quality_complete | all duties | 服务外原装订册商品需求损失集成完整，真实资源服务承运全寿命资产接收处理范围各一次，具不确定性更新。 | 原门槛换算覆盖集成及计量寿命接收证明 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| warehouse_electricity | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_power`识别`warehouse_electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_power`; 实际来源关联原生记录 |
| premises_water | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`premises_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| actual_housekeeping_supplies | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_materials`识别`actual_housekeeping_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_materials`; 实际来源关联原生记录 |
| added_order_materials | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_materials`识别`added_order_materials`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_materials`; 实际来源关联原生记录 |
| external_physical_jobs | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`external_physical_jobs`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| full_life_assets | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`full_life_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| packed_freight | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_transport`识别`packed_freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_transport`; 实际来源关联原生记录 |
| unused_supply_return | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_materials`识别`unused_supply_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_materials`; 实际来源关联原生记录 |
| actual_whole_book_waste | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_books`识别`actual_whole_book_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`actual_whole_book_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_books`; 实际来源关联原生记录 |
| separated_book_material_waste | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`separated_book_material_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| actual_pack_waste | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`actual_pack_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| spent_housekeeping_solids | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_waste`识别`spent_housekeeping_solids`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_waste`; 实际来源关联原生记录 |
| contained_cleanup_liquid | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_water`识别`contained_cleanup_liquid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_water`; 实际来源关联原生记录 |
| actual_direct_substances | printed_textbook_trade | 本条是强制完成记录，不是虚构清单交换。须按`cp_species`识别`actual_direct_substances`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_species`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### warehouse_electricity

计量真实照明起重拣货记录设备及归属待机清洁。保管指南不证明运行调控库房印刷机器修复负荷。

本卡为独立身份分支`warehouse_electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：教材仓库订单职责真实用电
- 流属性/单位：Energy / kWh
- 数量规则：归属真实计量电量 / N；cp_power。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_power`

范围证据需求：需实测期间设备范围兼容因果全部用户驱动，不从纸标签档案建议给每ISBN页册功率。

#### premises_water

仅真实场地设备清洁，不洗书脱酸加湿造纸。真实环境取水须保留来源身份。

本卡为独立身份分支`premises_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：真实场地清洁供应水
- 流属性/单位：Volume / m3
- 数量规则：归属真实实测供应 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需来源用途真实持留收集直接出口证据；潮湿水损书不量化服务供水废水蒸发。

#### actual_housekeeping_supplies

仅真实使用原生制剂擦拭吸附过滤耗材。不因藏书指南规定防腐熏蒸脱酸剂吸书尘修复溶剂。

本卡为独立身份分支`actual_housekeeping_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：真实供应清洁制剂及场地清洁耗材
- 流属性/单位：Mass / kg
- 数量规则：归属真实原生物资供应 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需真实品号干材活性载体配方库存使用退回原生密度温度换算来源，制剂内含为替代视图不双供应。

#### added_order_materials

仅批发真实新增箱裹护边标签扎带。印刷封面装订纸板胶墨衬页护封原厂包装随书继承，其生产在服务外商品范围。

本卡为独立身份分支`added_order_materials_pe_film`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：真实新增订单外包装物资
- 流属性/单位：Mass / kg
- 数量规则：归属真实新增物资 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需真实原生数量面积长度质量库存皮重材料换算来源，不通用规定每册无酸夹档案盒新包装。

#### external_physical_jobs

仅物理完成合同原生作业计数，资源资产门槛完整。真实工时质量面积时间货运服务须对应原生交换；许可ISBN登记价格利润不是物理作业量。

- 身份采集要求：真实完成计数的外部教材搬运作业
- 流属性/单位：Count / Item(s)
- 数量规则：归属真实完成作业 / N；cp_provider。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需真实完成单位完整资源资产承运接收覆盖重叠责任，采购订单扫描本身不完成。

#### full_life_assets

真实货架支撑建筑起重信息托盘箱按全部用户期间涵盖制造维护清洁更换终结。图书保存期限档案寿命不是库房资产驱动。

- 身份采集要求：完整寿命仓库搬运周转运输资产当量
- 流属性/单位：Count / Item(s)
- 数量规则：归属完整资产当量 / N；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需兼容集合寿命驱动身份单位、实测寿命或历史加有据剩余终止来源不确定性敏感性更新；周转箱退回非新制造。

#### packed_freight

用真实包装货物路段承运空返范围及互斥商品服务责任。版本箱层级描述货物，不把相同书重复倍增载荷。

- 身份采集要求：印刷书籍物资废物真实归属货运
- 流属性/单位：Mass * distance / kg*km
- 数量规则：归属真实包装载荷距离 / N；cp_transport。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_transport`

范围证据需求：需毛皮重包装载荷角色真实距离兼容因子单位来源比例全部用户证据；页数额定能力价格非货载质量距离。

#### unused_supply_return

仅真实未用独立服务供应同范围来源外部接收。未售书可用出版买方退回留存周转箱各属商品资产库存，不本物资外退输出。

- 身份采集要求：真实匹配未用服务物资外退
- 流属性/单位：Mass / kg
- 数量规则：归属实测同范围外退物资 / N；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`

范围证据需求：需原生匹配状态数量：总输入 S 并独立匹配可用输出，或仅耗用 S-return 输入省该输出，不数值 S+退回双抵扣或删废物供应负担。

#### actual_whole_book_waste

仅真实废弃决策废物接收门槛。未售旧版损坏留存册退回隔离不自动制浆或物理书损失。整书含封面装订墨及实测包含包材，不重复分离纸出口。

- 身份采集要求：真实废弃完整装订书或分册集合
- 流属性/单位：Mass / kg
- 数量规则：归属实测真实整书废物 / N；cp_books。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_books`

范围证据需求：需确切版本册套分册范围数量净书包装皮重水分状态真实接收原门槛损失映射；分册套缺一本不证明余书均废。

#### separated_book_material_waste

仅真实事故散页封面装订残件收集碎片交有记录接收，不计划制浆碎纸修复。按真实纸墨胶覆膜材料状态展开，与同整书湿清洁出口互斥。

本卡为独立身份分支`separated_book_material_waste_paper`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：真实分离损坏书材或收集碎片
- 流属性/单位：Mass / kg
- 数量规则：归属实测真实分离材料 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需实测湿干复合比例来源版本真实接收处理；碎片浆质量页码不是册数或通用原门槛书得率。

#### actual_pack_waste

仅真实移除交接包材。封面装订板护封整体书套按真实产品定义，不自动把书组成叫外纸箱废物。留存原箱随商品继续。

本卡为独立身份分支`actual_pack_waste_paper_pack`; `actual_pack_waste_metal_pack`; `actual_pack_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：真实移除继承或新增运输废包装
- 流属性/单位：Mass / kg
- 数量规则：归属实测分离废包材 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实产品包装范围皮重材料污染整件部分排除接收运输处理；回收标记收集不证明避免造纸。

#### spent_housekeeping_solids

仅真实收集服务清洁固体及持留液书尘包材化学污染。内含为非叠加组成审计，相同书片湿固液包材比例不物理双输出。

- 身份采集要求：真实废擦拭吸附过滤材料混合清洁固体
- 流属性/单位：Mass / kg
- 数量规则：归属实测真实废固体 / N；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`

范围证据需求：需真实原生供应链接干材持留液量单位状态来源毛皮重净量流排除接收处理，不规定吸书尘过滤用量尘得率。

#### contained_cleanup_liquid

仅真实收集流及真实组成接收，不假制纸浆洗书修复。湿整书材料吸附固体废物内液不本第二物理出口。

- 身份采集要求：接收门槛处真实收集场地清洁液
- 流属性/单位：Volume / m3
- 数量规则：归属实测真实收集液 / N；cp_water。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`

范围证据需求：需真实体积密度温度单位组成状态来源排除接收处理运输证据，水分湿质量差额不提供废水量。

#### actual_direct_substances

仅真实实测或有据直接事件具名物质介质。纸泛黄霉斑观察墨胶含量气味湿干库存差额不证明孢子尘挥发物水蒸气碳释放质量。

- 身份采集要求：真实已识别服务直接物质介质
- 流属性/单位：Mass / kg
- 数量规则：归属有据真实物质释放 / N；cp_species。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_species`

范围证据需求：需兼容实测或真实活动因子组成去向量单位基准来源，完整物种因子不重复乘比例。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_service | 需真实自营商业企业验收全部限定正数唯一 N。书册套分册箱数或登记付款非服务完成。 |  |
| validate_physical_identity | edition and stock | 核实真实ISBN范围版本修订语言格式印次装订页码物理来源等价、册套分册箱层级真实完整质量水分皮重。不书名页数等价或每箱固定册通用因子。 |  |
| validate_ordinary | actual operation | 不档案环境数字收藏清洁修复规定图书寿命主张转普通商户活动。真实新增调控印刷装订修复制浆须审查独立范围完整清单。 | loc-book-storage |
| validate_chain | commodity outside addon | 需真实完整放行成品装订印刷教材册基线，含纸印刷墨封面装订胶真实附件原包，缺制造服务外一次补齐。原门槛量单位状态来源、直接或分配归属、真实状态整件部分损失换算出口责任已含损失集成须匹配版本物理来源。采用来源分配时，保留 source_all_exit_driver_records 覆盖每个竞争验收转移、外部退回、期末结转未售或损坏留存库存、可用其他出口及真实整书碎片损失。各互斥终态出口驱动记录须有数量单位基准来源、原货源版本链接、集合期间及互斥键；中间退回移动核对到最终状态，不两者相加。分子完整分母须指同一兼容原货源集合及驱动基准。分母=这些完整互斥记录之和，含未售期末结转及有用出口，绝非仅验收；缺去向覆盖阻来源分配。 |  |
| validate_fates_scope | all inventory | 真实未售可售退回损坏留存册非纸浆废物；真实废弃碎片接收完整处理须有据。整书碎片包材持留液流来源归属互斥。核实原生身份支持换算单位来源全部用户全寿命资产服务承运范围真实直接物种，不纸含量气味水分差额作释放。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 真实具体身份数量审查后可作 secondary_dataset; background_dataset |
| downstream_use | 完整放行装订册商品链的物理普通常温印刷教材自营批发附加服务 |
| allowed_use | 真实出版ISBN版本语言格式装订来源册分层及数量净水分皮重状态期间验收路径 |
| excluded_use | 独立教材足迹电子书权利报纸文具纸印刷装订制造修复档案处理制浆零售代理页册转服务或金额替代 |
| required_metadata | 全部限定，真实来源版本等价册分册箱库存去向；原门槛归属需求状态损失换算出口覆盖责任集成；完整资源服务资产承运接收范围 |
| required_quality_disclosure | 未决真实身份支持前景数量范围证据版本数量水分去向来源限制寿命换算不确定性 |
| update_trigger | 版本ISBN语言格式装订物理来源箱册配置库房作业服务资产承运接收范围验收损失去向证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-books | official_guidance | UNSD.CPC3.0 explanatory notes,division61,61051; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 322印刷书含32210教材在61051内，仅分类。 |
| loc-book-storage | official_guidance | Library of Congress.Storing Your Books,Preserving Your Books,last updated2026-07-23; https://guides.loc.gov/preserving-your-books/storing | 藏书结构支撑搬运光水分状态定性背景。档案温湿收藏清洁数字规定不施普通批发，不推通用寿命损失率。 |
