---
pcr_id: pcr.own-account-bulk-wholesale-of-preserved-natural-rubber-latex
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 已保藏天然橡胶胶乳的自营散装批发服务

## 1. 范围与适用性

本PCR定义一项针对已由供方完成浓缩保藏并放行的三叶橡胶树天然胶乳的自营商户批发服务，场址为一个明确散装储罐站点。商户购入并转售物料，记录实际接收质量及储罐保持，采用电动转移设备，并在不改变商业配方的前提下完成一个商业买方验收批次。实际同批转移循环及代表性抽样仅在发生时计量，不规定通用搅拌安排、储存时长或温度。

排除种植、割胶、收集、浓缩、添加保藏剂、主动熟化或质量调整、加水稀释、不同等级混合、配混、凝固回收制造、硫化及制品，以及收费合同代理、零售和单独仓储运输。供方放行的已保藏胶乳是承接状态，不是仓库化学配方。即使外包，实际改变物料状态也须另行审定路线和边界。全部交易胶乳制造（包括商品损失的上游隐含负担）留在本服务增量模块外，须在关联商品系统完成一次且仅一次的损失调整。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-bulk-wholesale-of-preserved-natural-rubber-latex |
| classification_refs | CPC 3.0:61019 非按收费或合同方式提供的其他未另列明农业原材料批发服务；本PCR仅覆盖0195天然橡胶胶乳的较窄子集 |
| covered_products | 供方已浓缩保藏放行、配方不变的三叶橡胶树胶乳实际自营散装批发批次服务 |
| excluded_products | 天然橡胶初级生产加工；需稳定浓缩的鲜胶乳；配混硫化或合成胶乳；改变物料状态的加工；零售代理；单独仓储运输 |
| representative_product | 已保藏天然橡胶胶乳的自营散装批发服务 |
| production_route | 供方最终放行 -> 商户储罐接收及实际代表性质量库存控制 -> 电动保持转移 -> 实际商业买方验收批次 |
| market_state | 已完成商业服务，而非湿胶乳或干橡胶商品；声明实际承接等级、DRC、TSC、保藏状态、期间及门槛 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一个实际已验收保藏天然胶乳批次的已完成自营散装批发服务 |
| How much | 1 Item(s) |
| How well | 按实际合同等级、保藏检测范围、整股胶乳数量、DRC、TSC及质量状态验收，不设通用浓度或氨要求 |
| How long or cycle | 实际供方放行、商户接收、储罐保持转移及最终买方门槛期间，加关联库存未完期间及归属的清洁待机事件 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的已保藏天然橡胶胶乳自营散装批发批次 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 物品数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | own_account_resale; merchant_site; source_lot_and_tank; supplier_release_gate; consignment_id; Hevea_latex_identity; concentration_route; inherited_grade_and_preservation; actual_whole_latex_net_mass; DRC_method_basis_result; TSC_method_basis_result; preservative_identity_concentration_basis; representative_sampling; receipt_holding_dispatch_times; actual_buyer_acceptance_gate; provider_freight_asset_scope; commodity_original_gate_loss_owner_adjustment |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| `service_count` | accepted_service | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | N为大于零的最终唯一完整已验收批次数。罐次、转移载次、样品、发票和湿干千克均不是N；1是参考归一化，不是标准批重。 |
| `latex_assays` | 商品与latex_residues; latex_residues_atomic_case | Mass | kg; 无量纲质量分数 | 整股胶乳实际净质量独立于DRC和TSC测定。保留质量分数百分数转换及实际抽样方法适用性；DRC不是总固体，TSC-DRC仅为兼容分析基准的非橡胶差量；存在其他挥发组分时，1-TSC不能证明是纯水。 |
| `preservative_basis` | 商品与direct_species; direct_species_ammonia_air | Mass | kg; 已声明组成基准 | 保留整股胶乳或水相浓度基准及有来源实际相分数转换；原有氨含量既不是新增化学供给，也不是氨释放量。不默认等级、保藏配方或排放比例。 |
| `native_once` | 全部实际交换 | 实际原生属性 | 实际原生单位 | 保留原生单位支持及实体服务资产身份。已归属批次实际量对N归一化一次。电力支持或供方原生单位未验证属于不完整，不可用燃料热值或Count代替。 经核实的电力流可按独立确认的电能基准及单位组使用ILCD名为净热值的参考属性；该属性名称不授权套用燃料热值系数。 |


## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际由供方放行的已浓缩保藏三叶橡胶树天然胶乳，附实测整股液体数量、可追溯等级、DRC、TSC、保藏状态及代表性抽样证据 |
| starting_condition_role | 下游商户实体批发服务起点，位于供方最终初级加工调整和放行之后 |
| product_classification_scope | 61019内与0195天然橡胶相关的较窄服务，不代表全部农业原材料或所有天然橡胶形态 |
| recursive_input_rule | 不递归批发服务，不把交易商品制造作输入。供方门槛、内部储罐转移及承接库存均明确关联一次。 |
| upstream_dataset_requirement | 完整实际电力、清洁取样供给、实验室服务包、储罐转移资产、货运及处理数据集；另行关联原门槛天然胶乳商品系统和兼容实测损失调整 |
| disclosure | 商户商业责任；实际供方买方门槛；储罐源批批次期间；实际DRC、TSC、化学状态抽样及单位；罐底存量、残余、泄漏和退回；来源供方资产运输段出口及商品损失唯一责任者 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `post_release_service` | 全部服务交换 | 完整供方种植、割胶、浓缩、保藏和熟化清单在增量模块外，包括全部商品损失隐含上游。完整链或最终包声明前须记录实际损失，并在原门槛兼容基准商品系统调整一次且仅一次；不得解释为零负担商品，也不得重复加入。 |  |
| `physical_route` | latex_wholesale | 包括实际商户接收质量核验、监测保持、同批物理转移抽样、买方验收及归属待机清洁和拒收尝试。不得用储存名义或外包隐藏主动浓缩保藏配混或回收加工，实际发生须另行审定路线扩展。 |  |
| `assay_applicability` | 胶乳质量 | DRC与TSC为分别适用的检测结果，须有样品状态、方法和不确定性。确认实际三叶橡胶树与保藏剂兼容性，不把标准适用范围外推到合成、配混、硫化、其他天然来源或氢氧化钾保藏胶乳。方法摘要不提供完整实验配方或通用质量限值。 | iso-latex-drc-126; iso-latex-tsc-124 |
| `source_quality_state` | 供方状态 | 供方销售资料区分干胶、总固体及保藏质量。其产品专属限值、运输尺寸及上游加药仅证明不同承接状态，不是商户强制默认值。 | thaitex-latex-specification; thaitex-latex-route |
| `providers_periods` | 实体资源 | 列明电力、储罐泵软管、实验室、承运和不重叠残余冲洗废水处理的实际全使用者期间场址范围；缺项补齐一次，不重复直接及供方负担。本路线无场内燃烧或环境取水。 |  |


## 6. 过程清单结构

一个商户责任节点涵盖同等级不改变物料状态的实际散装胶乳批发。罐间转移、抽样和清洁保留独立事件源批期间记录，不虚构商品生产节点。条件性要求仅在存在真实SKU、供方、物种及原生单位时展开。商品质量库存DRC、TSC及保藏台账为非交换审计，不向服务加入完整商品制造。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| `latex_wholesale` | 商户储罐接收、质量跟踪储存与散装买方验收 | required | 供方已放行保藏三叶橡胶树胶乳的实际商户购入转售及完整商业买方门槛 | 不改变物料状态的实体批发服务责任 | `accepted_service` |


### 过程：商户储罐接收、质量跟踪储存与散装买方验收 (`latex_wholesale`)

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

数量范围证据需求：需实际计量寄存器、泵循环日志及互不重叠的全部使用者时间驱动记录，才能建立可比批次能耗范围；不设储罐功率、运行小时或每吨电耗默认值。

###### 实际液态处理自来水供给 (`cleaning_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属的清洁用水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需实际来源计量、清洁事件、体积和转换证据及真实储罐周转；不设固定冲洗量或频次，不假定全部供水均成废水。

###### 实际独立记录的合成洗涤剂投入 (`cleaning_chemicals_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的清洁化学品供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需库存及实际配方、浓度、状态证据支持质量耗用和残余归属；供方胶乳保藏规格及安全数据表危险性不是清洗用量或释放量。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的已保藏天然橡胶胶乳自营散装批发批次 (`accepted_service`)

一个实际由商户自营购入转售、在明确门槛由商业买方验收的已浓缩已保藏三叶橡胶树天然胶乳批次。N仅计最终唯一已验收批次ID，不计罐车载次、储罐周转、发票、样品或标准湿干质量。实际浓缩保藏及质量历史仍须声明。

- 选定流：已完成的已保藏天然橡胶胶乳自营散装批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_latex`

数量范围证据需求：1仅为归一化。签署的实际商业验收、发运库存关联，以及批次DRC、TSC、保藏状态的代表性证据定义可比服务；不设固定湿吨干吨、氨等级或利润等价量。

##### 废物流

###### 废弃未稀释保藏天然胶乳 (`latex_residues_atomic_case`)

仅在实际独立记录确认“废弃未稀释保藏天然胶乳”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`latex_residues`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃未稀释保藏天然胶乳
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的已收集胶乳残余接收态质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_latex`

数量范围证据需求：需实际湿净质量、代表性样品DRC和TSC、状态和接收处理；不得把液态胶乳浓度赋给凝块，不靠罐质量差推定残余，不把1湿千克当1干千克。

##### 基本流

###### 实际独立举证的氨向空气排放 (`direct_species_ammonia_air`)

仅适用于实际直接排向空气的氨CAS7664-41-7，须有测量或独立支持的物种特定数量、来源及介质。原生质量为kgNH3，不是kgN或铵；不预设挥发率、剂量、粪污系数或整股液体排放。未细分空气身份不替代已知更细子介质；排除上游供应商已计排放及受控转移。

- 选定流：氨 `08a91e70-3ddc-11dd-a2a9-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的物种质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：需实际物种质量或有依据的活动因子，或已测整股释放及组成去向，并保留基准单位来源和不确定性。整股胶乳与水相氨浓度不可互换；完整因子不得再乘组成或去向。

## 7. 分配与联产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `commodity_loss_interface` | 胶乳商品 | 记录实际损失出口的湿质量状态和匹配DRC、TSC，不从库存余差推定损失。独立原门槛商品系统拥有一次性实测上游调整，附数量单位基准来源和已覆盖损失检查。干胶与整股胶乳基准须匹配该数据集；1湿千克不是1干千克。全部商品制造留在服务外。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| `actual_cohort` | 全部服务资源 | 用全部真实合同源批期间的实测物理因果驱动，不默认平均或利润分配。拒收重做保留资源。未完成批次保留实际开放批次期间资源，直至验收或最终拒收去向，不得增加N或消失。 |  |
| `shared_lifecycle` | shared_assets | asset_equivalent=(job_driver/life_driver)/N，匹配含制造维护实际替换退役寿命末端的完整生命周期。life_driver覆盖所有使用者和期间，使用观测寿命历史或有来源剩余量，并保留来源不确定性敏感性更新。不得同时加每驱动量服务，也不重复供方承运人资产。 |  |
| `supply_return_convention` | 供给与usable_returns | S=opening+net_receipts-closing；选择总供应输入S/N并单独记录实际配对未用退回输出；或选择仅耗用输入(S-usable_outward_return)/N并省去该退回交换，不再次抵扣。回收到期末的量已含期末。未退废物损失保留供给负担；胶乳商业退回留在商品台账，不给避免生产信用。 |  |
| `fluid_fates` | 胶乳残余废水及物种 | 配对内部转移并分开可用退回回收到期末、不重叠已收集流体残余废物及实际环境释放。总泄漏仅为这些互斥去向不可重复相加的审计值。湿液体、DRC干胶TSC表征和物种视图不可重复算物理出口，不自动给商业回收信用。 |  |

仅在全部实际相同原生单位可用退回交换均明确表示时才采用含外送总供给口径。按质量计量清洁化学品未用退回而未设对应Mass退回交换时，采用仅耗用供给并在审计保留配对外送，不得暗用Count退回卡代替；改用总供给口径前须展开真实额外退回交换。


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_latex` | latex_wholesale | 验收批次及非交换胶乳库存质量损失 | latex_stock_quality_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; unfinished_consignment_ids; unfinished_resource_attribution; carried_resource_link; supplier_release_gate; ownership_record; grade; Hevea_identity; concentration_route; preservation_state; preservative_identity; preservative_concentration; preservative_basis; preservative_assay_source; arrival_time; dispatch_time; duration; duration_unit; temperature; temperature_unit; tank_layer; circulation_record; sample_id; sample_time; sample_removed_quantity; sample_returned_quantity; sample_quantity_unit; sample_fate; sampling_method; sampling_coverage; assay_method; method_applicability; drc_value; drc_unit; drc_basis; drc_fraction; drc_conversion_source; tsc_value; tsc_unit; tsc_basis; tsc_fraction; tsc_conversion_source; assay_uncertainty; gross_mass; tare_mass; net_latex_mass; mass_unit; density; density_unit; density_temperature; density_temperature_unit; density_source; measured_volume; volume_unit; opening_heel; receipts; closing_heel; recovered_closing; internal_transfer_id; buyer_accepted_quantity; supplier_return; customer_return; usable_recovery; rejected_quantity; residue_wet_quantity; residue_drc; residue_drc_unit; residue_drc_basis; residue_tsc; residue_tsc_unit; residue_tsc_basis; residue_assay_source; loss_fate; receiver; transfer_id; stock_discrepancy; investigation; commodity_dataset_id; original_commodity_gate; commodity_basis; commodity_loss_owner; commodity_loss_adjustment_id; loss_adjustment_quantity; loss_adjustment_unit; loss_adjustment_basis; loss_adjustment_source; existing_loss_coverage; commodity_overlap_check; acceptance_specification; buyer_signature; calibration; uncertainty; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 核对实际产权采购转售、接收发运整股胶乳称量、罐底存量、代表性分层转移样及买方实际规范结果。记录承接保藏状态及拒收重复事件。N取最终唯一已验收批次ID；未完资源保留开放批次期间关联。配对内部转移与回收到期末，调查不明库存差，不推定液体物种损失。量化实际去向并在服务外关联原门槛商品损失调整一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | Item(s); 实际整股胶乳kg及检测专属分数 | 每次接收、罐或转移取样、发运、拒收、泄漏及期初期末测量 | 供方放行胶乳接收到买方验收的全部事件及前后库存未完成期间 | 具名商户储罐场址及实际合同供方接口 | per reference flow | 签署验收；质量体积校准；适用性不确定性代表性检测；完整库存去向和原门槛商品损失证据 |
| `cp_supplies` | latex_wholesale | 当前清洁化学品及离散取样耗材退回 | supply_stock_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; sku; material_identity; composition; composition_basis; composition_source; material_state; native_property; native_unit; opening; gross_receipts; tare_receipts; net_receipts; closing; recovered_closing; usable_outward_return; return_receiver; return_transfer_id; used; waste; uncontained_loss; chosen_return_view; conversion_factor; conversion_unit; conversion_source; piece_mass; piece_mass_unit; piece_mass_source; density; density_unit; density_source; temperature; temperature_unit; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 采用实际配方SKU原生库存与接收退回记录。S=opening+net_receipts-closing；选择S/N含外送总供给加配对退回台账，或(S-usable_outward_return)/N仅耗用且不再扣退回。回收到期末已含期末，未退废物损失保留供给负担。最终数据前展开其他实际原生交换。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际SKU原生单位；相应使用kg或Item(s) | 每次供给、使用、退回及盘点 | 全部所选作业及关联库存期间 | 同一商户节点及实际耗用边界 | per reference flow | 库存退回匹配、配方和实际单位转换证据 |
| `cp_utilities` | latex_wholesale | 购入电力及清洁供水 | utility_meter_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; meter_id; source_id; meter_register_role; reading_start; reading_end; meter_factor; metered_quantity; gross_import; gross_export; utility_unit; conversion_factor; conversion_unit; conversion_source; cleaning_event; rinse_stage; recirculation; retained_water; wastewater; measured_evaporation; driver; driver_unit; attributable_share; all_consumers; idle_intervals; provider_inclusion; coverage_start; coverage_end; calibration; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读取来源专属购入计量和账单及不重叠使用者时段，用兼容全使用者驱动归属实际泵循环清洁监测和待机，不默认主动工艺调制。外部供水与实际水去向分开，不自动水等于废水，不用无关外送净扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | kWh; m3 | 每计量时段及实际清洁转移事件 | 全部归属运行待机清洁期间 | 实际场址来源及所有互不重复使用者 | per reference flow | 计量校准账单和完整驱动来源覆盖 |
| `cp_provider` | latex_wholesale | 实际已完成外部质量检测包 | provider_quality_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; provider_id; sample_id; assay_method; applicability; physical_result; completed_package_id; completion_date; quantity; native_property; native_unit; upstream_dataset; upstream_unit; material_scope; utility_scope; asset_scope; transport_scope; waste_scope; missing_scope; direct_overlap; acceptance_id; uncertainty | 取得实际服务完成和样品检测结果及完整上游范围。Count仅表示实体明确的原生数量服务包，不是收费工时。其他单位需展开。实际试剂公用工程资产运输及废物覆盖一次；原供方质量证书是证据，不默认新增购入检测。 | 实际供方原生单位；仅原生服务包可用Count | 每个实际完成服务包 | 所选批次全部归属取样复检事件 | 实际供方与商户责任分界 | per reference flow | 签署结果、服务包原生单位及完整无重叠范围 |
| `cp_assets` | latex_wholesale | 共享储罐泵软管围护的完整生命周期 | asset_lifecycle_driver_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; asset_id; asset_identity; lifecycle_dataset; lifecycle_unit; all_consumers; all_periods; job_driver; driver_unit; life_driver; life_driver_unit; observed_life; observed_history; evidenced_remainder; remainder_source; manufacture_scope; maintenance_scope; replacement_events; replacement_scope; termination_event; eol_scope; lifecycle_sources; provider_inclusion; selected_view; uncertainty; sensitivity; update_trigger | 使用实际资产清单完整寿命负担，以及跨全部合同源批场址使用者和期间的兼容驱动。包括真实维护替换退役寿命末端，以及观测寿命或有证据剩余量。每项选完整资产当量Count口径，不同时叠加每驱动服务和重复制造。 | 资产当量Item(s); 兼容驱动单位 | 每次使用维护替换及终止事件 | 完整资产从制造至全部使用维护替换寿命末端，另行关联所选批次驱动 | 商户资产全部实际使用者；供方承运人纳入范围另界定 | per reference flow | 全寿命来源、兼容全使用者驱动、剩余使用量证据及敏感性 |
| `cp_freight` | latex_wholesale | 实际整股胶乳载荷及路线空返 | freight_leg_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; shipment_id; leg_id; carrier; load_quantity; load_unit; whole_latex_kg; load_conversion; load_conversion_source; route_distance; distance_unit; distance_km; distance_conversion; distance_source; attribution_share; all_loads; empty_return; empty_service_coverage; commodity_inclusion; provider_inclusion; responsibility; uncertainty | 按实际承运段和整股胶乳称重载荷核对路线距离及商品供方重叠。属于商户责任的失败退回段须保留，实际空载服务需覆盖但不虚构载荷。 | kg*km | 每个真实承运段及返程 | 全部所选商户责任运输段 | 商户承运人与商品数据集接口 | per reference flow | 称重运单、路线证据、载荷距离转换及空载范围 |
| `cp_outlets` | latex_wholesale | 已收集冲洗废水及其他非胶乳废物出口 | waste_receiver_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; outlet_id; stream_id; origin_event; material_identity; material_state; native_property; native_unit; gross_quantity; tare; net_quantity; measured_volume; density; density_unit; density_temperature; density_temperature_unit; density_source; sample_id; sampling_method; drc_value; drc_basis; tsc_value; tsc_basis; pollutant_identity; concentration; concentration_unit; composition_basis; composition_source; receiver; transfer_id; treatment_route; treatment_coverage; provider_inclusion; nonadditive_characterization; uncertainty | 按互不重复流股材料状态接收方测量真实废物水性出口，配对实际处理一次，并分开污染固体、胶乳残余及冲洗水。干胶固体或物种分析负荷仅表征同一流体，不增加第二份废物量。直接排口须另审基本流，不能当已收集废水。 | 实际废物原生单位；相应kg或m3 | 每次出口清洁排水和接收转移 | 全部真实归属废物清洁事件 | 具名场址出口和接收处理 | per reference flow | 真实数量抽样组成及不重叠处理边界接收证据 |
| `cp_environment` | latex_wholesale | 实际承接胶乳物种搬运及直接释放 | species_release_record | site_id; operator_id; contract_id; cohort_id; source_lot_id; consignment_id; tank_id; event_id; period_id; reference_gate_id; accepted_consignment_ids; N; exchange_id; substance; source_medium; receiving_medium; source_event; measured_mass; mass_unit; activity; activity_unit; species_factor; factor_unit; factor_scope; factor_source; factor_complete; whole_release; whole_release_unit; whole_fluid_identity; composition; composition_basis; composition_source; aqueous_phase_fraction; phase_fraction_source; fate; fate_basis; fate_source; capture_state; retained_spill; recovered_to_closing; contained_waste; uncontained_release; conversion_factor; conversion_unit; conversion_source; temperature; temperature_unit; pressure; pressure_unit; provider_inclusion; calibration; detection_limit; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 独立于商品身份确认实际物种和接收介质。采用实测质量、有效匹配活动因子，或实测整股流体及有证据组成去向，路径互斥；保留整股胶乳与水相基准和真实相分数转换。回收到期末泄漏、已收集废物与环境释放为互斥去向，总泄漏不可相加；无安全数据表或库存差因子。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际物种及接收介质的kg | 每次实际释放及有关观测时段 | 全部归属直接事件及期间 | 实际排放场址；不重复供方已含释放 | per reference flow | 物种介质和兼容实测因子组成去向来源及不确定性检出限 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `consignment_reference` | accepted_service | N=最终reference_gate_id下唯一accepted_consignment_ids的数量；accepted_service=1 Item(s)。 | cp_latex | 一个真实验收实体商业批次，附实际胶乳检测时间限定 |  |
| `latex_assay_views` | 商品; latex_residues; latex_residues_atomic_case | dry_rubber_kg=net_latex_mass*drc_fraction; total_solids_kg=net_latex_mass*tsc_fraction，仅适用于相同代表性样品状态及方法兼容质量分数。nonrubber_difference_kg=total_solids_kg-dry_rubber_kg为兼容分析差量，不是污染物种。不得将1-tsc_fraction推定为纯水或把湿残余当干胶。 | cp_latex; cp_outlets | 同一实际物理材料不可重复相加的检测视图 |  |
| `latex_stock_fates` | 商品及残余审计 | 在兼容整股胶乳和干胶视图下，核对opening_heel+receipts与closing_heel、实际买方发运、供方买方退回和完整实际去向。回收到期末已含期末，成对内部转移抵销。记录实际样品取出退回、代表性分层沉降物料和不确定性，调查stock_discrepancy而不虚构释放。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | cp_latex; cp_environment | 非交换库存审计及兼容商品损失调整证据 |  |
| `supply_native` | cleaning_chemicals; sampling_consumables; usable_returns; cleaning_chemicals_synthetic_detergent | net_receipts=gross_receipts-tare_receipts; S=opening+net_receipts-closing; gross_input=S/N OR consumed_input=(S-usable_outward_return)/N，仅选一种口径。按件退回台账仅配实际未用离散件，化学品及出口的其他原生数量须另行展开。 | cp_supplies; N | 每参考流实际原生供给及未用外送退回 |  |
| `utility_meter` | electricity; cleaning_water; electricity_ac; cleaning_water_liquid_tap | metered_quantity=(reading_end-reading_start)*meter_factor，取相应购入来源寄存器，或实际直接计量的兼容来源量；utility_quantity=sum(metered_quantity*conversion_factor*attributable_share)/N。使用不重叠来源使用者事件期间及全使用者驱动。 | cp_utilities; N | 每参考流实际购入电能或清洁供水 |  |
| `quality_package` | quality_packages | provider_quantity=quantity/N，实际原生Count已完成服务包须匹配结果单位及完整覆盖，其他原生供方单位需展开。missing_scope补齐一次，消除direct_overlap。 | cp_provider; N | 每参考流实际完整质量服务 |  |
| `asset_equivalent` | shared_assets | asset_equivalent=(job_driver/life_driver)/N，须兼容完整寿命驱动单位及匹配全生命周期资产数据集。 | cp_assets; N | 每参考流资产当量Item(s) |  |
| `freight_work` | freight | freight_work=sum(whole_latex_kg*distance_km*attribution_share)/N；whole_latex_kg为真实运输湿载荷，距离单位转换及空载范围明确。 | cp_freight; N | 每参考流实际kg*km及另行覆盖实际空载服务 |  |
| `physical_outlets` | latex_residues; other_wastes; wastewater; usable_returns; latex_residues_atomic_case | latex_residues采用residue_wet_quantity/N；other_wastes或wastewater按其实际原生单位采用net_quantity/N；usable_returns采用usable_outward_return/N。各出口材料状态接收方分别声明；分析DRC、TSC和物种视图仅作表征，不增加出口。配对接收处理一次，不给避免产品信用。 | cp_latex; cp_outlets; cp_supplies; N | 每参考流实际不重叠已收集出口 |  |
| `species_release` | direct_species; direct_species_ammonia_air | species_mass=measured_mass/N OR activity*species_factor/N OR whole_release*composition*fate/N，先兼容基准单位转换并选一路径。整股胶乳与水相组成需实际phase_fraction_source，不以1-TSC或1-DRC推定水。factor_complete禁止再次乘组成去向。 | cp_environment; N | 每参考流实际物种质量及接收介质 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| `accepted_gate` | accepted_service | 每个N条目须有商户产权转售责任、真实源批储罐及完整买方规范结果签署；供方放行与承接实体配方不同于仓库加工。 | cp_latex商业质量证据 |
| `representative_assays` | 实际胶乳库存去向 | 需代表性来源储罐转移样、真实检测方法适用性和质量分数基准转换及不确定性。DRC、TSC、保藏检测各异，方法状态不兼容或组成未知时拒绝外推，不填供应商默认值。 | 样品ID分层转移记录、实际证书及校准 |
| `commodity_interface` | 商品服务关联 | 完整链最终包使用前明确原门槛及实际损失湿干基准数量单位来源责任者和已覆盖损失；不漏损失商品上游，不在服务内重复负担。 | 商品调整和库存出口证据 |
| `complete_scope` | 全部来源供方资产运输段期间 | 每项资源须唯一实际责任者和兼容单位，供方资产寿命与全使用者范围完整，替换终止及剩余量有来源。量化真实已收集废物冲洗水和处理一次。 | 范围矩阵、实体供方结果和全寿命资产台账 |
| `identity_ranges` | 实际交换展开 | 最终数据前验证具体SKU供方资产物种属性单位身份。经验范围需独立可比来源基准及实际参考量，不用销售规格代替耗用损失或排放。 | 具体UUID详情支持及独立经验数量证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_water | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`cleaning_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| cleaning_chemicals | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`cleaning_chemicals`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| sampling_consumables | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`sampling_consumables`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| quality_packages | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`quality_packages`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| shared_assets | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| usable_returns | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| latex_residues | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_latex`识别`latex_residues`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`latex_residues_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_latex`; 实际来源关联原生记录 |
| other_wastes | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`other_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| wastewater | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species | latex_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

仅包括该全电动场址的泵、取样循环、监测、照明及实际运行环境控制用外购电力，包含归属的待机和清洁时段。同批循环属于物理搬运，不代表浓缩、主动熟化或配混工艺。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：购入的胶乳批发储罐及转移电能
- 流属性/单位：Energy / kWh
- 数量规则：每参考流实际归属的电力
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需实际计量寄存器、泵循环日志及互不重叠的全部使用者时间驱动记录，才能建立可比批次能耗范围；不设储罐功率、运行小时或每吨电耗默认值。

#### cleaning_water

记录实际外部清洁供水和范围；不得默认给交易胶乳补水，或把真实稀释工序改名为清洗。保留实际冲洗步骤、内部循环和互不重复的残余去向。本购入供水路线不含环境取水。

本卡为独立身份分支`cleaning_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：购入的空罐、软管及工作区清洁用水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属的清洁用水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

数量范围证据需求：需实际来源计量、清洁事件、体积和转换证据及真实储罐周转；不设固定冲洗量或频次，不假定全部供水均成废水。

#### cleaning_chemicals

按实际名称配方记录在隔离或空设备上使用的清洁化学品，并记录残余去向和供方边界。本范围不默认向商品加入保藏剂、氨、稳定剂或凝固剂。任何主动胶乳化学调整须另行审定路线扩展。

本卡为独立身份分支`cleaning_chemicals_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际按质量计量的储罐及软管清洁化学品
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的清洁化学品供给
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需库存及实际配方、浓度、状态证据支持质量耗用和残余归属；供方胶乳保藏规格及安全数据表危险性不是清洗用量或释放量。

#### sampling_consumables

按SKU和状态记录实际一次性取样瓶、封签或其他离散转移耗材；不能按件计量的物资须展开实际原生单位交换。可复用软管、泵和容器属于生命周期资产；商品原有容器归商品或运输范围，不按订单重复增加新物资。

- 身份采集要求：实际按件计量的取样容器及转移耗材
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的按件取样及转移耗材
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需实际SKU件数、期初接收期末和未用退回；仅为独立且不可重复相加的质量视图取得真实单件质量，不假定瓶或封签质量。

#### quality_packages

按实际样品批次与结果关联原生Count的实体完成检测检验包，区分DRC、TSC以及保藏碱度或其他指定试验；不得假定任一方法适合全部胶乳。完整服务包覆盖实际试剂、公用工程、设备、废物及运输，另行供给部分仅补齐一次。

- 身份采集要求：已完成的外部胶乳检测与质量检验服务包
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的已完成检测包
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

数量范围证据需求：需实际服务包ID、试验项目、实体结果、原生单位、完成及完整数据集范围；收费和分析员工时不得转为一个Count服务包，非服务包原生单位须展开。

#### shared_assets

实际商户储罐、泵、软管、衡器、取样工具及围护设施，按全部合同、使用者和期间分摊匹配的完整生命周期份额，含制造、维护、替换和寿命末端。不得每批计整个场址或把储罐升数当作资产件数。

- 身份采集要求：储罐、泵、软管及围护设施的资产当量生命周期
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的完整生命周期资产当量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

数量范围证据需求：使用实际兼容全寿命驱动总量、观测历史或有证据剩余量，以及替换终止寿命末端来源、不确定性和敏感性；列明全部使用者并排除供方承运人资产重叠。

#### freight

商户责任内且未在商品或其他供方数据集覆盖的实际承运段。罐车载荷使用称量的整股胶乳净质量，不用干胶质量替代；混载和实际空罐容器返程范围单独归属，不虚构载重。

- 身份采集要求：责任边界内实际散装胶乳及退回货物运输功
- 流属性/单位：mass*distance / kg*km
- 数量规则：每参考流实际归属的散装胶乳运输功
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

数量范围证据需求：需实际运输段载重距离单位转换、承运人及责任和空返记录；不得用干胶质量代替运输湿胶乳，不默认罐车容量或运距。

#### usable_returns

仅包括真正跨边界退给具名接收方的未用离散取样转移耗材，与相同输入SKU和件数基准配对。结存或回收到期末的物资不是外送退回。供应商或买方胶乳退回属于商品审计，不归本耗材退回。

- 身份采集要求：当前作业实际未用按件耗材退回
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流实际归属的未用按件耗材退回
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

数量范围证据需求：需匹配SKU状态及Count、签署外送转移和已选含外送总供给或仅耗用口径；不得虚构负供给或再次给予避免产品信用。

#### latex_residues

按不同状态和接收方称量实际丢弃湿胶乳、已收集未稀释泄漏、凝块表皮或罐底残余，必要时测DRC和TSC。退回可用胶乳不是废物。冲洗水使用独立废水台账；干胶含量是同一残余的分析视图，不另加一次废物交换。

- 身份采集要求：送处理的实际已收集未稀释胶乳、凝块或储罐残余
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的已收集胶乳残余接收态质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_latex`

数量范围证据需求：需实际湿净质量、代表性样品DRC和TSC、状态和接收处理；不得把液态胶乳浓度赋给凝块，不靠罐质量差推定残余，不把1湿千克当1干千克。

#### other_wastes

按材料污染状态和接收处理记录实际吸附物、确实存在的过滤耗材、清洁残余和取样转移一次性用品。与保留复用设备、未用退回和商品残余分开；危险性须有实际证据。

- 身份采集要求：送处理的实际已耗用清洁及取样材料
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的其他已收集废物质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际称量皮重及材料状态接收记录、处理范围和污染证据；不设每罐废物比例、不默认过滤器，不把原胶乳化学浓度赋给全部一次性材料。

#### wastewater

分别计量实际送往具名处理方的水性冲洗清洁废水，按该真实流股取得适用的污染负荷或DRC、TSC证据。与未稀释胶乳残余、内部循环、回收商品和直接环境排口分开。胶料或物种分析负荷是同一流体不可重复相加的表征。

- 身份采集要求：送处理的实际已收集胶乳冲洗及清洁废水
- 流属性/单位：Volume / m3
- 数量规则：每参考流实际归属的已收集废水
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

数量范围证据需求：需实际体积、如需质量转换时的密度、抽样组成时间和处理范围；废水体积不是损失干胶，购入清洁水不自动成为出水。

#### direct_species

按实际直接物种和接收介质记录，仅在监测或有效匹配的活动组成去向路径证明时才包括氨。原有保藏剂可能需要搬运释放核算，而仓库并未添加氨。已收集泄漏与捕集不是空气释放；整股流体、干胶差额和安全数据表危险性均不是物种身份或释放量。

本卡为独立身份分支`direct_species_ammonia_air`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际逐一确认的胶乳搬运直接物质释放
- 流属性/单位：Mass / kg
- 数量规则：每参考流实际归属的物种质量
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

数量范围证据需求：需实际物种质量或有依据的活动因子，或已测整股释放及组成去向，并保留基准单位来源和不确定性。整股胶乳与水相氨浓度不可互换；完整因子不得再乘组成或去向。

## 9. 验证规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `service_reference_check` | accepted_service | N>0且为最终唯一已验收ID，附实际整股胶乳净重、分别DRC与TSC、保藏抽样等级期间买方门槛限定；1 Item(s)不等于载次干吨、标准浓度或货币。 |  |
| `quality_boundary` | 全部路线 | 核对商户作业前供方最终放行，无隐藏保藏剂添加、主动熟化、浓缩稀释配混硫化；真实改变物料路线即使外包也须另审。 |  |
| `stock_and_assay` | 全部商品残余去向 | 检查整液体、干胶TSC、挥发物和物种基准，样品沉降代表性、方法适用性、罐底回收到期末内部转移、真实商业退拒废决定及不明差调查；不得以余差或安全数据表推纯水氨或空气释放。 |  |
| `upstream_loss_once` | 服务及商品系统 | 每项实际不可恢复商品损失需兼容原商品门槛、实测基准来源及唯一责任者和既有损失覆盖检查，完整链使用前上游调整在服务外恰好一次。不把1湿千克当1干千克，不默认零损失。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |  |
| `resources_scope` | 供方资产期间 | 核对实际因果全使用者驱动、供方原生完成单位和范围、完整资产寿命剩余证据替换寿命末端，以及计量清洁待机货运空载拒收和未完资源结转。不重复归一化或物资退回。 |  |
| `fluid_species_treatment` | 残余; wastewater; direct_species; direct_species_ammonia_air | 真实已收集泄漏残余、冲洗水、回收商品和物种介质释放须有不重叠流股去向责任及一次处理。核对真实相基准的兼容组成因子去向，不叠加同流体干胶物种表征，不重复供方已含释放。 |  |
| `languages_projection` | 全部规则卡协议 | 原始双语参考字段、卡名ID单位证据协议原始操作数来源URL及有序规则与规范投影对齐；具体身份和最终数量证据另行验证。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 仅在实际完整前景采集并验证具体交换后可作为secondary_dataset或background_dataset |
| downstream_use | 一个不改变物料的商户批发服务增量模块，关联独立兼容原门槛天然胶乳商品系统及其一次实测损失调整。 |
| allowed_use | 已声明供方放行保藏三叶橡胶树胶乳等级、储罐场址批次和买方门槛，附实际整液体质量、DRC、TSC、保藏抽样及实体范围限定。 |
| excluded_use | 完整交付胶乳商品足迹；种植初级加工或任何商户主动改变物料工序；配混硫化合成胶乳；代理零售；未知商品损失责任或通用罐次浓度值。 |
| required_metadata | 自营责任者场址；供方放行买方门槛；实际源批储罐批次期间ID；承接等级保藏状态；实际湿净质量、DRC和TSC方法基准结果及抽样；实际保持转移时间、供方资产货运清洁范围；罐底去向和原门槛商品损失调整唯一责任者 |
| required_quality_disclosure | 质量体积校准及需要时密度状态；代表性分层转移检测适用性不确定性；库存差与实际泄漏残余处理；全部使用者资产全寿命剩余供方期间范围；一次商品损失关联；未决实际身份与数量范围证据限制 |
| update_trigger | 来源、胶乳等级化学状态、储罐转移储存或质量方法改变，主动浓缩保藏配混活动，门槛责任者、资源供方资产寿命或实际库存损失出水释放证据改变 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| iso-latex-sampling-123 | standard | ISO 123:2001，胶乳取样，公开范围。https://www.iso.org/standard/23281.html | 确认储罐运输容器胶乳代表性取样的适用对象。摘要不提供完整方法步骤或次数，不作此类声明。 |
| iso-latex-drc-126 | standard | ISO 126:2005，天然胶乳浓缩液干胶含量测定，公开摘要。https://www.iso.org/standard/35176.html | DRC检测身份适用性及其不同于总固体；需真实合适方法，不声称未读程序或通用DRC限值。 |
| iso-latex-tsc-124 | standard | ISO 124:2014，橡胶胶乳总固体含量测定，公开摘要。https://www.iso.org/standard/61884.html | 独立TSC检测范围和方法适用性，不是橡胶物种、纯水或氨排放证据。 |
| thaitex-latex-specification | handbook | THAITEX，天然胶乳浓缩液销售规格。https://www.thaitexgroup.com/latex/latex_specification.php | 生产商原始资料区分DRC、TSC、非橡胶及整胶乳氨。数值属于特定产品销售条件，不作为本PCR默认数量等级或化学配方。 |
| thaitex-latex-route | handbook | THAITEX，制造流程与质量控制。https://www.thaitexgroup.com/latex/latex_manufacturing_flow.php | 生产商浓缩保藏和熟化最终调整位于检测发运之前，用于区分上游物料制造与后续商户接收储存；不复用数字工艺案例。 |
