---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-waste-and-scrap-and-material-d3bd17a6
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 已分选打包消费后旧瓦楞纸箱自营批发服务

## 1. 范围与适用性

已分选打包消费后旧瓦楞纸箱OCC原供方包自营企业批发，普通常温存放电动搬运至真实工业回收买方接收。排除新纸未分选收集物及批发收集分选开包打包重包制浆回收干燥调理使用。真实额外作业须范围复核。消费后来源须真实证据；旧箱标签或2019买方示例本身不证明每批来源。买方示例引2016规格，仅定性提出等级捆绑水分非纸接收问题，不提供统一数值门槛包重载荷包装禁用现行法律通用配方。交易OCC为非交换二次商品审计，区别最终Count批发服务。实际Product/Waste交接证据独立于价格。前序收集分选打包包装及声明前系统继承截断在此服务外一次，不自动全部原生箱负担或零负担回收抵扣。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.wholesale-trade-services-not-on-a-fee-or-contract-basis.wholesale-trade-services-not-on-a-fee-or-contract-basis-of-waste-and-scrap-and-material-d3bd17a6 |
| classification_refs | CPC 3.0:61095较窄；商品392内39241 |
| covered_products | 实际原包已分选打包消费后OCC至工业回收买方批发服务 |
| excluded_products | 新纸未分选收集批发开包分选打包重包制浆回收调理使用、收费代理零售独立废物收集 |
| representative_product | 实际原包来源批次等级消费后交接复核前负担决定、铁丝订书钉非纸水分毛净口径接收状态 |
| production_route | 实际已分选打包来源门槛 -> 自有批发收货状态常温存放电动搬运 -> 撤销后实际最终工业企业接收 |
| market_state | 已完成商业服务，二次OCC库存通量继承捆绑材料独立审计为非交换商品 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 实际已完成自有转售工业回收买方原分选打包消费后OCC批次 |
| How much | 1 Item(s) |
| How well | 实际所有权转售企业买方最终门槛凭据撤销、消费后来源回收交接复核前负担决定、真实等级包收到状态法律身份，不设统一污染湿度门槛 |
| How long or cycle | 实际来源交接收货存放发出最终接收撤销时点时区来源及库存计量全资产期间。同库存期末至期初延续不新增来源需求或N。 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的已分选打包消费后旧瓦楞纸箱自营批发批次 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_grade; source_batch; bale_ids; postconsumer_origin_evidence; already_sorted_baled_evidence; recovery_handoff_id; recovery_handoff_gate; cutoff_or_inheritance_decision; prior_burden_method; prior_burden_dataset_link; receiver_legal_Product_Waste_status; legal_status_evidence; original_bale_membership; wire_staple_membership; bale_count; bale_gross_mass; net_received_OCC_mass; water_sample_component_scope; water_wet_or_dry_basis; original_bale_pack_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |


## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| final_count | accepted_service | Count | Item(s) | 撤销后唯一真实最终自有转售工业企业接收，N>0；包kg纤维产率价格非服务计数。 |
| bale_component_mass | cp_occ; cp_outlets | Mass | kg | 实际毛净口径、外捆绑包装皮重与保留订书钉非纸水分原成员。整股组成非加和，无通用包重。 |
| water_dry_basis | cp_occ | Mass | kg | 实际水专属湿分数与同样品干基水非水比例，先换算百分数。干非水含非纸并非干纤维或回收产率；含糊买方湿度非实际水分数。 |
| NET_supply_shares | cp_supplies | Mass | kg | 净材料收货排容器皮重；同库存退回口径，各分子分母独立原生基准来源且分母正相容。 |
| actual_cargo_work | freight | Mass * Length | t*km | 货物为实际收到包水铁丝订书钉非纸包装支承一次；EACH件数一次TOTAL不变，仅非货物皮重，各唯一装载区段份额在SUM内后N一次。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际已分选打包消费后OCC原供方包，处声明回收准备交接门槛，真实等级来源捆绑非纸水包装及有证据Product/Waste法律状态。 |
| starting_condition_role | 批发服务附加的收到二次材料门槛，不是新瓦楞箱生产或当前收集分选打包制浆回收。 |
| product_classification_scope | CPC 3.0:61095较窄原消费后OCC包批发服务；商品39241。商品法律状态与最终Count服务身份分开。 |
| recursive_input_rule | 购入转售OCC原铁丝订书钉非纸水及商品退回为非交换库存通量。不把另一批发服务当前回收或完整原生箱生产递归为耗用服务输入。 |
| upstream_dataset_requirement | 关联完整实际收到分选打包门槛：已实际发生可归属收集分选打包原包装，以及与真实消费后来源回收交接相连的已复核明确前系统负担继承截断分配决定。不自动全部原生箱负担或零回收抵扣。原始分配需求互斥来源阶段损失覆盖量化在服务外一次；未定前处理阻断完整链使用。 |
| disclosure | 声明真实来源回收交接前产品系统关联及复核负担方法决定来源责任时间覆盖、接收法律状态、原包等级毛净铁丝订书钉非纸水定义、所有权最终买方门槛、全部末端延续来源集成证据缺口。 |

### 边界规则

| rule_id | Rule |
| --- | --- |
| actual_merchant_route | 实际记录包装状态收货普通常温库存电动搬运最终企业交接。不推批发收集开包分选打包重包制浆回收干燥调理使用；外包额外须范围复核。继承准备不激活当前回收技术。 |
| secondary_origin_treatment | 消费后OCC因源自已用包装而为二次材料，须实际来源证据。关联前产品系统回收交接，不引入统一前产品配方。本PCR要求在该交接有已复核已记录继承截断分配决定，真实包含排除阶段及前当前买方重复核对；待办决定不完整。关联二次商品保留于服务交换外。 |
| completed_source_integration | 实际缺准备阶段或新增原始二次商品需求，在完整链使用前必须实际集成至服务外关联商品系统且仅一次。须已完成状态实际数据集关联时点时区来源互斥责任已集成原生量基准阶段损失覆盖唯一计入证据。待办计划或仅记录数量不够。 |
| stock_carry_horizon | 同库存前期期末至下期期初以一次配对交接承继原数量状态来源责任。不形成新来源采购需求服务接收N或两个竞争末端出口。使用一个声明来源群组范围：内部延续不是两个末端驱动，该范围最终未发期末仅计一次。未完成拒收撤销资源仍归属。 |
| native_fate_scope | OCC湿质量不是干纤维或实际回收产率。水分须实际水专属定义样品基准；含糊湿度及含其他挥发物干燥失重非水分数。实际铁丝订书钉非纸包装组成与整包捕集液体物种非加和。须实际接收Product/Waste状态分类去向证据，不凭价格；不自动原生纸替代或回收抵扣。 |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| sorted_baled_occ_wholesale | 原分选打包消费后OCC自营批发 | required | 实际已分选原消费后包自有转售工业企业批次 | foreground | accepted_service |

实际批次群组记录状态收货常温存放电动搬运、条件性场址卫生事故换批及最终买方接收事件，将每资源关联真实期间全部使用者。未完成拒收资源保留。不因二次材料身份建立当前批发回收技术制浆产率。原OCC准备及复核前负担截断关联在服务外一次。

### 过程：原分选打包消费后OCC自营批发 (`sorted_baled_occ_wholesale`)

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

范围证据需求：需真实计量kWh区间全部使用者因果驱动闲置未完成覆盖服务商支持，不用纸厂打包机每包能耗。

###### 实际液态处理自来水供给 (`site_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：actual_utility_quantity换算为m3*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需真实计量供方体积事件期间原生换算份额接收，不从含糊湿度标签推供水量。

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

范围证据需求：需实际材质组成净库存收货EACH/TOTAL件数质量密度匹配未耗退回，不设默认捕尘比例。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的已分选打包消费后旧瓦楞纸箱自营批发批次 (`accepted_service`)

一个真实撤销后最终自有转售工业回收买方接收批次，附实际原OCC包等级来源前负担决定收到水非纸包装法律交接限定。服务计数非包件湿kg干纤维回收产率。

- 选定流：已完成的已分选打包消费后旧瓦楞纸箱自营批发批次
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_occ`

范围证据需求：需真实所有权转售企业买方最终门槛凭据撤销及来源回收交接声明负担法律状态，真实包数毛净样品水非纸期间，不固定包重包数。

##### 废物流

###### 废弃完整来货分选消费后旧瓦楞纸箱纸捆 (`whole_bale_waste_atomic_case`)

仅在实际独立记录确认“废弃完整来货分选消费后旧瓦楞纸箱纸捆”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`whole_bale_waste`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整来货分选消费后旧瓦楞纸箱纸捆
- 流属性/单位：Mass / kg
- 数量规则：实际整包接收净物流质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际决定包来源母体成员接收状态交接净皮重组成样品来源处理，不自动将拒收包回收。

###### 实际单独收集的纸类包装废物 (`pack_waste_paper_pack`)

仅适用于本节点实际独立废弃、单独收集的纸类包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass / kg
- 数量规则：实际独立捆绑包装接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需原铁丝与订书钉内部非纸成员区别实际原生净皮重残留接收，买方示例禁托盘规则非统一清单。


###### 实际单独收集的金属包装废物 (`pack_waste_metal_pack`)

仅适用于本节点实际独立废弃、单独收集的金属包装，保留实际湿态或收集状态、组成、接收方及处理运输责任。污染或混收形成的混合流须使用其自身经核实的身份，材料组分仅作不可相加审计。仍在用的周转包装不是本废物，不预设组成、数量、回收或处理。

- 选定流：金属包装废物 `cdda6013-c0c5-4c72-990a-f5668fe71069`
- 流属性/单位：Mass / kg
- 数量规则：实际独立捆绑包装接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需原铁丝与订书钉内部非纸成员区别实际原生净皮重残留接收，买方示例禁托盘规则非统一清单。


###### 实际单独收集的塑料包装废物 (`pack_waste_plastic_pack`)

仅适用于实际独立废弃、单独收集的空塑料包装，保留实际组成、含水状态及接收方。含残留商品的混合包装、污染混合流、设备内保温泡沫、一次性抹布及复合包装不使用本分支；整体混合流中的组分仅作不可相加审计，运输处理责任计入一次。不预设排空、回收、发生或数量。

- 选定流：塑料包装废物 `919351c4-3e25-4092-9934-73ecec021a3b`
- 流属性/单位：Mass / kg
- 数量规则：实际独立捆绑包装接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需原铁丝与订书钉内部非纸成员区别实际原生净皮重残留接收，买方示例禁托盘规则非统一清单。

##### 基本流

## 7. 分配与联产品处理

| rule_id | Rule |
| --- | --- |
| causal_service_share | 真实事件直接追踪批次，否则有支持物理搬运空间时间因果驱动覆盖全部使用者期间含闲置未完成拒收。documented_share=numerator_driver/denominator_driver须原生相容基准分母正。不自动包数湿重价格或假定纤维产率份额。 |
| prior_secondary_burden | 记录真实回收交接的已复核前系统处理：方法决定来源责任时间、包含排除前产品和收集准备阶段、burden_transfer_quantity原生基准及prior_burden_dataset_link覆盖。该处理随库存延续和最终交付保留。已归前产品或买方的前负担抵扣不得再进服务或来源关联。无统一全部原生或零负担默认。 |
| original_source_assignment | 实际来源目标直接追踪，或仅正值完整相容全部末端记录含最终期末其他有用退回证明损失时assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers，每原生数量单位基准方法状态时间来源关联责任。commodity_source_gate_demand=assigned_source_gate_quantity采用原分选打包包装状态含有证据状态变化份额，不是最终发出加废弃。内部期末期初配对保留原来源数量状态责任，绝非新来源需求重复末端驱动。原生基线新增损失覆盖在外一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| NET_supply_returns | S=opening+net_receipts-closing含留存回收；收货为实际净材料排供应容器皮重。总输入S/N并单列匹配实际可用未耗输出，或仅耗用(S-usable_outward_return)/N且省去匹配退回交换。仅同范围独立供应，不抵继承OCC铁丝包装，不二次抵扣。 |
| complete_life_assets | 完整制造维护更换退役寿命终结按相容job_driver/lifetime_all_user_driver。寿命为已观察全部使用加有来源剩余服务，全部使用者期间原生等价不确定性敏感性更新；服务商承运唯一责任总量/N一次。不按每包新支承。 |
| unique_freight_receiver | 每唯一装载区段本documented_service_share=numerator_driver/denominator_driver在SUM内部后/N一次。货物为互斥实测成员下实际湿包铁丝订书钉非纸包装支承；EACH相容件数一次TOTAL不变，仅排真非货物皮重。接收运输处理整股组成视图唯一责任一次，不自动回收或避免生产抵扣。 |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_occ | sorted_baled_occ_wholesale | 本过程真实交换事件及非交换二次商品审计 | 原包消费后来源前负担水分所有权跨期间来源台账 | bale_count; bale_count_unit; bale_count_basis; bale_count_method; bale_count_state; bale_count_source; bale_count_sample_time; actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; bale_gross_mass; bale_gross_mass_unit; bale_gross_mass_basis; bale_gross_mass_method; bale_gross_mass_state; bale_gross_mass_source; bale_gross_mass_sample_time; net_received_OCC_mass; net_received_OCC_mass_unit; net_received_OCC_mass_basis; net_received_OCC_mass_method; net_received_OCC_mass_state; net_received_OCC_mass_source; net_received_OCC_mass_sample_time; external_pack_tare; external_pack_tare_unit; external_pack_tare_basis; external_pack_tare_method; external_pack_tare_state; external_pack_tare_source; external_pack_tare_sample_time; wire_staple_quantity; wire_staple_quantity_unit; wire_staple_quantity_basis; wire_staple_quantity_method; wire_staple_quantity_state; wire_staple_quantity_source; wire_staple_quantity_sample_time; paper_component_quantity; paper_component_quantity_unit; paper_component_quantity_basis; paper_component_quantity_method; paper_component_quantity_state; paper_component_quantity_source; paper_component_quantity_sample_time; nonpaper_quantity; nonpaper_quantity_unit; nonpaper_quantity_basis; nonpaper_quantity_method; nonpaper_quantity_state; nonpaper_quantity_source; nonpaper_quantity_sample_time; wet_sample_mass; wet_sample_mass_unit; wet_sample_mass_basis; wet_sample_mass_method; wet_sample_mass_state; wet_sample_mass_source; wet_sample_mass_sample_time; water_quantity; water_quantity_unit; water_quantity_basis; water_quantity_method; water_quantity_state; water_quantity_source; water_quantity_sample_time; dry_nonwater_mass; dry_nonwater_mass_unit; dry_nonwater_mass_basis; dry_nonwater_mass_method; dry_nonwater_mass_state; dry_nonwater_mass_source; dry_nonwater_mass_sample_time; dry_paper_mass; dry_paper_mass_unit; dry_paper_mass_basis; dry_paper_mass_method; dry_paper_mass_state; dry_paper_mass_source; dry_paper_mass_sample_time; w_wet; w_wet_unit; w_wet_basis; w_wet_method; w_wet_state; w_wet_source; w_wet_sample_time; w_dry; w_dry_unit; w_dry_basis; w_dry_method; w_dry_state; w_dry_source; w_dry_sample_time; percent_to_ratio_factor; percent_to_ratio_factor_unit; percent_to_ratio_factor_basis; percent_to_ratio_factor_method; percent_to_ratio_factor_state; percent_to_ratio_factor_source; percent_to_ratio_factor_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; duration; duration_unit; duration_basis; duration_method; duration_state; duration_source; duration_sample_time; ambient_temperature; ambient_temperature_unit; ambient_temperature_basis; ambient_temperature_method; ambient_temperature_state; ambient_temperature_source; ambient_temperature_sample_time; opening_stock; opening_stock_unit; opening_stock_basis; opening_stock_method; opening_stock_state; opening_stock_source; opening_stock_sample_time; receipts; receipts_unit; receipts_basis; receipts_method; receipts_state; receipts_source; receipts_sample_time; closing_stock; closing_stock_unit; closing_stock_basis; closing_stock_method; closing_stock_state; closing_stock_source; closing_stock_sample_time; return_quantity; return_quantity_unit; return_quantity_basis; return_quantity_method; return_quantity_state; return_quantity_source; return_quantity_sample_time; useful_other_exit_quantity; useful_other_exit_quantity_unit; useful_other_exit_quantity_basis; useful_other_exit_quantity_method; useful_other_exit_quantity_state; useful_other_exit_quantity_source; useful_other_exit_quantity_sample_time; proven_loss_quantity; proven_loss_quantity_unit; proven_loss_quantity_basis; proven_loss_quantity_method; proven_loss_quantity_state; proven_loss_quantity_source; proven_loss_quantity_sample_time; source_gate_input_quantity; source_gate_input_quantity_unit; source_gate_input_quantity_basis; source_gate_input_quantity_method; source_gate_input_quantity_state; source_gate_input_quantity_source; source_gate_input_quantity_sample_time; direct_assignment_quantity; direct_assignment_quantity_unit; direct_assignment_quantity_basis; direct_assignment_quantity_method; direct_assignment_quantity_state; direct_assignment_quantity_source; direct_assignment_quantity_sample_time; cohort_source_quantity; cohort_source_quantity_unit; cohort_source_quantity_basis; cohort_source_quantity_method; cohort_source_quantity_state; cohort_source_quantity_source; cohort_source_quantity_sample_time; target_exit_driver; target_exit_driver_unit; target_exit_driver_basis; target_exit_driver_method; target_exit_driver_state; target_exit_driver_source; target_exit_driver_sample_time; sum_exit_drivers; sum_exit_drivers_unit; sum_exit_drivers_basis; sum_exit_drivers_method; sum_exit_drivers_state; sum_exit_drivers_source; sum_exit_drivers_sample_time; exit_driver_quantity; exit_driver_quantity_unit; exit_driver_quantity_basis; exit_driver_quantity_method; exit_driver_quantity_state; exit_driver_quantity_source; exit_driver_quantity_sample_time; assigned_source_gate_quantity; assigned_source_gate_quantity_unit; assigned_source_gate_quantity_basis; assigned_source_gate_quantity_method; assigned_source_gate_quantity_state; assigned_source_gate_quantity_source; assigned_source_gate_quantity_sample_time; source_gate_conversion; source_gate_conversion_unit; source_gate_conversion_basis; source_gate_conversion_method; source_gate_conversion_state; source_gate_conversion_source; source_gate_conversion_sample_time; baseline_quantity; baseline_quantity_unit; baseline_quantity_basis; baseline_quantity_method; baseline_quantity_state; baseline_quantity_source; baseline_quantity_sample_time; additional_stage_quantity; additional_stage_quantity_unit; additional_stage_quantity_basis; additional_stage_quantity_method; additional_stage_quantity_state; additional_stage_quantity_source; additional_stage_quantity_sample_time; loss_adjustment_quantity; loss_adjustment_quantity_unit; loss_adjustment_quantity_basis; loss_adjustment_quantity_method; loss_adjustment_quantity_state; loss_adjustment_quantity_source; loss_adjustment_quantity_sample_time; integrated_additional_stage_quantity; integrated_additional_stage_quantity_unit; integrated_additional_stage_quantity_basis; integrated_additional_stage_quantity_method; integrated_additional_stage_quantity_state; integrated_additional_stage_quantity_source; integrated_additional_stage_quantity_sample_time; carry_original_source_quantity; carry_original_source_quantity_unit; carry_original_source_quantity_basis; carry_original_source_quantity_method; carry_original_source_quantity_state; carry_original_source_quantity_source; carry_original_source_quantity_sample_time; burden_transfer_quantity; burden_transfer_quantity_unit; burden_transfer_quantity_basis; burden_transfer_quantity_method; burden_transfer_quantity_state; burden_transfer_quantity_source; burden_transfer_quantity_sample_time; merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_grade; source_batch; bale_ids; postconsumer_origin_evidence; already_sorted_baled_evidence; original_bale_membership; wire_staple_membership; external_tare_vs_retained_nonpaper_basis; water_sample_component_scope; water_definition_source; water_wet_or_dry_basis; LOD_other_volatiles_exclusion; dry_nonwater_not_fibre_yield; no_new_open_sort_assay; receiver_legal_Product_Waste_status; legal_status_evidence; legal_status_owner; legal_status_place_time; prior_product_system_ids; recovery_handoff_id; recovery_handoff_gate; recovery_handoff_time_timezone_source; prior_burden_method; cutoff_or_inheritance_decision; burden_decision_source; burden_decision_owner; burden_decision_time; prior_burden_dataset_link; prior_burden_coverage; prior_current_buyer_duplicate_exclusion; original_bale_pack_state; source_gate_state; source_gate_allocation_mode; direct_assignment_source_ids; all_terminal_exit_ids; all_terminal_exit_driver_records; terminal_exit_link; terminal_exit_owner; terminal_horizon_id; cohort_horizon_start_end; carry_transfer_id; carry_original_state; carry_original_source_owner; closing_opening_pair_source; carry_not_new_source_demand; carry_not_new_service_acceptance; carry_not_two_terminal_exits; exclusive_other_exit_coverage; baseline_stage_coverage; baseline_loss_coverage; additional_stage_owner; loss_owner; already_included_loss_coverage; actual_missing_stage_ids; additional_stage_integration_status; additional_stage_integration_dataset_link; additional_stage_integration_time; additional_stage_integration_time_zone; additional_stage_integration_source; additional_stage_integration_owner; additional_stage_integration_coverage; additional_stage_integration_once_evidence; receipt_time; dispatch_time; acceptance_time; period_id; cohort_id; time_zone; time_source; assignment_scope_ids; quantity_basis; same_target_scope_N; same_scope_N_source | 追踪真实批发自有购入转售工业回收买方最终接收门槛凭据撤销，不凭收货价格。须已分选打包消费后来源真实原等级包标识；利用已有供方样品记录，不规定开包分选新化验。声明毛净口径及外部铁丝包装皮重与保留订书钉非纸组成，各原生量单位基准方法状态来源取样时点。水分限明确样品部件及水专属湿干定义，非含糊买方湿度或纤维产率。实际Product/Waste交接证据责任地点时间独立于价格。关联前产品来源回收交接至复核继承负担截断决定方法来源责任时间数据集覆盖，不自动原生箱负担或零抵扣。来源分配真实直接追踪或完整正值相容全部末端原生记录含最终期末其他有用退回证明损失。前期末至期初以一次交接承继原数量状态来源责任，非新来源需求新N或两个末端出口。实际缺失收到门槛阶段或新增原始二次商品需求，在完整链使用前必须在此服务外实际集成至关联商品系统且仅一次。须已完成状态实际数据集关联时点时区来源互斥责任已集成原生量基准阶段损失覆盖唯一计入证据；仅记录数量待办计划不够。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 真实原生量单位有来源相容换算、日期时区保留 | 每真实事件及库存计量全资产区间 | 真实来源收货发出接收及跨期间留存资源 | 本真实过程场址明确归属交接全部相关使用者 | 每参考流 | 原始凭据方法校准、原生单位基准状态来源取样时点互斥责任不确定性，未知不置零 |
| cp_supplies | sorted_baled_occ_wholesale | 本过程真实交换事件及非交换二次商品审计 | 实际净服务用品额外外层防护 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; per_piece_mass; per_piece_mass_unit; per_piece_mass_basis; per_piece_mass_method; per_piece_mass_state; per_piece_mass_source; per_piece_mass_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; opening; opening_unit; opening_basis; opening_method; opening_state; opening_source; opening_sample_time; net_receipts; net_receipts_unit; net_receipts_basis; net_receipts_method; net_receipts_state; net_receipts_source; net_receipts_sample_time; closing; closing_unit; closing_basis; closing_method; closing_state; closing_source; closing_sample_time; retained_recovery; retained_recovery_unit; retained_recovery_basis; retained_recovery_method; retained_recovery_state; retained_recovery_source; retained_recovery_sample_time; unused_outward_return; unused_outward_return_unit; unused_outward_return_basis; unused_outward_return_method; unused_outward_return_state; unused_outward_return_source; unused_outward_return_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; material_identity; net_material_receipt_excluding_container_tare; standalone_stock_scope; matched_return_ids; unused_return_convention; inherited_bale_wire_exclusion; owner; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 仅真实使用卫生抹布吸收材料滤材新增外防护；原OCC铁丝订书钉包装是商品。净材料收货排容器。保留EACH/TOTAL组成件数质量密度及同独立库存未耗退回证据。总供应单列配对未耗外送输出或仅耗用省退回交换，不推重打包铁丝或继承材料抵扣。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 真实原生量单位有来源相容换算、日期时区保留 | 每真实事件及库存计量全资产区间 | 真实来源收货发出接收及跨期间留存资源 | 本真实过程场址明确归属交接全部相关使用者 | 每参考流 | 原始凭据方法校准、原生单位基准状态来源取样时点互斥责任不确定性，未知不置零 |
| cp_utilities | sorted_baled_occ_wholesale | 本过程真实交换事件及非交换二次商品审计 | 实际常温仓库电动搬运场址卫生公用工程 | native_interval_quantity; native_interval_quantity_unit; native_interval_quantity_basis; native_interval_quantity_method; native_interval_quantity_state; native_interval_quantity_source; native_interval_quantity_sample_time; actual_utility_quantity; actual_utility_quantity_unit; actual_utility_quantity_basis; actual_utility_quantity_method; actual_utility_quantity_state; actual_utility_quantity_source; actual_utility_quantity_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; meter_id; utility_identity; provider; all_consumers; interval_start; interval_end; provider_carrier_overlap; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 真实计量区间供方量全部使用者原生因果分子分母，区分实测分配覆盖。不含批发收集分选打包重包制浆回收干燥湿控能耗，不用纸厂产率系数。排实际服务商承运重叠。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 真实原生量单位有来源相容换算、日期时区保留 | 每真实事件及库存计量全资产区间 | 真实来源收货发出接收及跨期间留存资源 | 本真实过程场址明确归属交接全部相关使用者 | 每参考流 | 原始凭据方法校准、原生单位基准状态来源取样时点互斥责任不确定性，未知不置零 |
| cp_provider | sorted_baled_occ_wholesale | 本过程真实交换事件及非交换二次商品审计 | 实际物理限定仓储服务商包 | actual_native_package_quantity; actual_native_package_quantity_unit; actual_native_package_quantity_basis; actual_native_package_quantity_method; actual_native_package_quantity_state; actual_native_package_quantity_source; actual_native_package_quantity_sample_time; physical_equivalence; physical_equivalence_unit; physical_equivalence_basis; physical_equivalence_method; physical_equivalence_state; physical_equivalence_source; physical_equivalence_sample_time; documented_share; documented_share_unit; documented_share_basis; documented_share_method; documented_share_state; documented_share_source; documented_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; provider_id; contract_id; operation_scope; excluded_operations; utility_asset_freight_treatment_coverage; event_ids; owner; period_id; time_zone; time_source | 实际物理等价作业份额期间及材料公用资产运输处理覆盖。承包开包分选重包干燥制浆回收仍为须范围复核额外作业。不用普通回收包金额转质量价格终废或纤维产率等价。 | 真实原生量单位有来源相容换算、日期时区保留 | 每真实事件及库存计量全资产区间 | 真实来源收货发出接收及跨期间留存资源 | 本真实过程场址明确归属交接全部相关使用者 | 每参考流 | 原始凭据方法校准、原生单位基准状态来源取样时点互斥责任不确定性，未知不置零 |
| cp_assets | sorted_baled_occ_wholesale | 本过程真实交换事件及非交换二次商品审计 | 完整寿命真实仓库搬运重复支承登记 | event_quantity; event_quantity_unit; event_quantity_basis; event_quantity_method; event_quantity_state; event_quantity_source; event_quantity_sample_time; job_driver; job_driver_unit; job_driver_basis; job_driver_method; job_driver_state; job_driver_source; job_driver_sample_time; observed_all_user_driver; observed_all_user_driver_unit; observed_all_user_driver_basis; observed_all_user_driver_method; observed_all_user_driver_state; observed_all_user_driver_source; observed_all_user_driver_sample_time; remaining_driver; remaining_driver_unit; remaining_driver_basis; remaining_driver_method; remaining_driver_state; remaining_driver_source; remaining_driver_sample_time; lifetime_all_user_driver; lifetime_all_user_driver_unit; lifetime_all_user_driver_basis; lifetime_all_user_driver_method; lifetime_all_user_driver_state; lifetime_all_user_driver_source; lifetime_all_user_driver_sample_time; driver_equivalence; driver_equivalence_unit; driver_equivalence_basis; driver_equivalence_method; driver_equivalence_state; driver_equivalence_source; driver_equivalence_sample_time; asset_id; manufacture; maintenance; replacement; retirement; end_of_life; all_consumers; all_periods; remaining_life_source; observed_boundary; uncertainty; sensitivity; update_trigger; provider_carrier_overlap; inherited_bale_pack_exclusion; period_id; time_zone; time_source | 真实仓库货架电动搬运支承完整制造维护更换退役寿命终结，全部使用者期间及作业已观察全部使用加有来源剩余原生相容等价驱动。含闲置未完成拒收不确定性敏感性更新及唯一服务商承运责任。继承铁丝包装非新当前资产，不按每包新托盘。 | 真实原生量单位有来源相容换算、日期时区保留 | 每真实事件及库存计量全资产区间 | 真实来源收货发出接收及跨期间留存资源 | 本真实过程场址明确归属交接全部相关使用者 | 每参考流 | 原始凭据方法校准、原生单位基准状态来源取样时点互斥责任不确定性，未知不置零 |
| cp_freight | sorted_baled_occ_wholesale | 本过程真实交换事件及非交换二次商品审计 | 实际唯一装载区段原包运输记录 | actual_count; actual_count_unit; actual_count_basis; actual_count_method; actual_count_state; actual_count_source; actual_count_sample_time; cargo_mass_quantity; cargo_mass_quantity_unit; cargo_mass_quantity_basis; cargo_mass_quantity_method; cargo_mass_quantity_state; cargo_mass_quantity_source; cargo_mass_quantity_sample_time; cargo_mass_count_multiplier; cargo_mass_count_multiplier_unit; cargo_mass_count_multiplier_basis; cargo_mass_count_multiplier_method; cargo_mass_count_multiplier_state; cargo_mass_count_multiplier_source; cargo_mass_count_multiplier_sample_time; received_bale_mass; received_bale_mass_unit; received_bale_mass_basis; received_bale_mass_method; received_bale_mass_state; received_bale_mass_source; received_bale_mass_sample_time; retained_wire_staple_nonpaper_mass; retained_wire_staple_nonpaper_mass_unit; retained_wire_staple_nonpaper_mass_basis; retained_wire_staple_nonpaper_mass_method; retained_wire_staple_nonpaper_mass_state; retained_wire_staple_nonpaper_mass_source; retained_wire_staple_nonpaper_mass_sample_time; inherited_added_pack_mass; inherited_added_pack_mass_unit; inherited_added_pack_mass_basis; inherited_added_pack_mass_method; inherited_added_pack_mass_state; inherited_added_pack_mass_source; inherited_added_pack_mass_sample_time; actual_carried_support_mass; actual_carried_support_mass_unit; actual_carried_support_mass_basis; actual_carried_support_mass_method; actual_carried_support_mass_state; actual_carried_support_mass_source; actual_carried_support_mass_sample_time; noncargo_vehicle_container_tare; noncargo_vehicle_container_tare_unit; noncargo_vehicle_container_tare_basis; noncargo_vehicle_container_tare_method; noncargo_vehicle_container_tare_state; noncargo_vehicle_container_tare_source; noncargo_vehicle_container_tare_sample_time; whole_pack_payload; whole_pack_payload_unit; whole_pack_payload_basis; whole_pack_payload_method; whole_pack_payload_state; whole_pack_payload_source; whole_pack_payload_sample_time; payload_conversion; payload_conversion_unit; payload_conversion_basis; payload_conversion_method; payload_conversion_state; payload_conversion_source; payload_conversion_sample_time; distance; distance_unit; distance_basis; distance_method; distance_state; distance_source; distance_sample_time; distance_conversion; distance_conversion_unit; distance_conversion_basis; distance_conversion_method; distance_conversion_state; distance_conversion_source; distance_conversion_sample_time; actual_transport_work; actual_transport_work_unit; actual_transport_work_basis; actual_transport_work_method; actual_transport_work_state; actual_transport_work_source; actual_transport_work_sample_time; documented_service_share; documented_service_share_unit; documented_service_share_basis; documented_service_share_method; documented_service_share_state; documented_service_share_source; documented_service_share_sample_time; numerator_driver; numerator_driver_unit; numerator_driver_basis; numerator_driver_method; numerator_driver_state; numerator_driver_source; numerator_driver_sample_time; denominator_driver; denominator_driver_unit; denominator_driver_basis; denominator_driver_method; denominator_driver_state; denominator_driver_source; denominator_driver_sample_time; load_id; leg_id; unique_load_leg_key; cargo_mass_reporting_extent; actual_bale_component_membership; water_nonpaper_pack_coverage; record_owner; empty_return_coverage; carrier_asset_fuel_coverage; N; time_zone; time_source | 货物为真实收到包及实测范围保留水铁丝订书钉非纸、原新增包装随货支承，即使重复使用。干纤维重或买方示例禁托盘非载荷。EACH相容质量乘实际件数一次TOTAL不变，仅排真非货物承运皮重。各装载区段本原生份额在工作求和内后/N一次，保留真实换算空返服务商接收范围。 | 真实原生量单位有来源相容换算、日期时区保留 | 每真实事件及库存计量全资产区间 | 真实来源收货发出接收及跨期间留存资源 | 本真实过程场址明确归属交接全部相关使用者 | 每参考流 | 原始凭据方法校准、原生单位基准状态来源取样时点互斥责任不确定性，未知不置零 |
| cp_outlets | sorted_baled_occ_wholesale | 本过程真实交换事件及非交换二次商品审计 | 互斥真实整包材料包装受控收集出口 | native_quantity; native_quantity_unit; native_quantity_basis; native_quantity_method; native_quantity_state; native_quantity_source; native_quantity_sample_time; count_multiplier; count_multiplier_unit; count_multiplier_basis; count_multiplier_method; count_multiplier_state; count_multiplier_source; count_multiplier_sample_time; component_quantity; component_quantity_unit; component_quantity_basis; component_quantity_method; component_quantity_state; component_quantity_source; component_quantity_sample_time; retained_paper; retained_paper_unit; retained_paper_basis; retained_paper_method; retained_paper_state; retained_paper_source; retained_paper_sample_time; retained_nonpaper; retained_nonpaper_unit; retained_nonpaper_basis; retained_nonpaper_method; retained_nonpaper_state; retained_nonpaper_source; retained_nonpaper_sample_time; retained_wire_staples; retained_wire_staples_unit; retained_wire_staples_basis; retained_wire_staples_method; retained_wire_staples_state; retained_wire_staples_source; retained_wire_staples_sample_time; retained_moisture; retained_moisture_unit; retained_moisture_basis; retained_moisture_method; retained_moisture_state; retained_moisture_source; retained_moisture_sample_time; retained_fluid; retained_fluid_unit; retained_fluid_basis; retained_fluid_method; retained_fluid_state; retained_fluid_source; retained_fluid_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; event_id; transfer_id; parent_bale_source_ids; fragment_material_ids; whole_bale_exclusion; separate_material_exclusion; separate_pack_exclusion; mixed_capture_exclusion; free_fluid_exclusion; component_identity; water_sample_component_scope; water_definition_source; receiver_id; receiver_legal_Product_Waste_status; receiver_status_evidence; receiver_classification; treatment_owner; retained_content_fate; usable_supply_return_link; actual_export_not_closing; no_automatic_credit; period_id; time_zone; time_source; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 真实拒收退回期末丢弃接收决定，不因污染潮湿自动作废物。商品有用OCC退回出口留非交换商品审计并匹配来源负担关联。整废包含保留纸铁丝订书钉非纸水分；独立真实松散材料包装混合捕集受控液排其成员。各保留组成量有原生单位基准方法状态来源取样时点。真实接收法律状态分类及物理处理运输唯一责任，不推开包回收产率或避免原生纸抵扣。仅耗用供应省配对未耗输出，期末非外部退回。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 真实原生量单位有来源相容换算、日期时区保留 | 每真实事件及库存计量全资产区间 | 真实来源收货发出接收及跨期间留存资源 | 本真实过程场址明确归属交接全部相关使用者 | 每参考流 | 原始凭据方法校准、原生单位基准状态来源取样时点互斥责任不确定性，未知不置零 |
| cp_environment | sorted_baled_occ_wholesale | 本过程真实交换事件及非交换二次商品审计 | 实际粉尘物种及接收环境证据 | direct_measurement; direct_measurement_unit; direct_measurement_basis; direct_measurement_method; direct_measurement_state; direct_measurement_source; direct_measurement_sample_time; activity; activity_unit; activity_basis; activity_method; activity_state; activity_source; activity_sample_time; factor; factor_unit; factor_basis; factor_method; factor_state; factor_source; factor_sample_time; composition; composition_unit; composition_basis; composition_method; composition_state; composition_source; composition_sample_time; release_fraction; release_fraction_unit; release_fraction_basis; release_fraction_method; release_fraction_state; release_fraction_source; release_fraction_sample_time; fate_quantity; fate_quantity_unit; fate_quantity_basis; fate_quantity_method; fate_quantity_state; fate_quantity_source; fate_quantity_sample_time; whole_stream_quantity; whole_stream_quantity_unit; whole_stream_quantity_basis; whole_stream_quantity_method; whole_stream_quantity_state; whole_stream_quantity_source; whole_stream_quantity_sample_time; density; density_unit; density_basis; density_method; density_state; density_source; density_sample_time; density_temperature; density_temperature_unit; density_temperature_basis; density_temperature_method; density_temperature_state; density_temperature_source; density_temperature_sample_time; conversion_factor; conversion_factor_unit; conversion_factor_basis; conversion_factor_method; conversion_factor_state; conversion_factor_source; conversion_factor_sample_time; retained_captured_quantity; retained_captured_quantity_unit; retained_captured_quantity_basis; retained_captured_quantity_method; retained_captured_quantity_state; retained_captured_quantity_source; retained_captured_quantity_sample_time; species_identity; particle_basis; receiving_medium; factor_scope_complete; composition_basis_source; contained_transfer_exclusion; release_owner; measurement_location; time_zone; time_source | 须真实物种颗粒类别接收环境、实测释放或适用原生活动系数且只加必要组成去向比例。完整物种系数已含比例不再乘。捕集纤维粉尘铁丝保留水分库存差非空气排放腐解零；受控接收液非直接排口。不以制浆回收产率原生生物固碳或原生纸系数作批发排放。 | 真实原生量单位有来源相容换算、日期时区保留 | 每真实事件及库存计量全资产区间 | 真实来源收货发出接收及跨期间留存资源 | 本真实过程场址明确归属交接全部相关使用者 | 每参考流 | 原始凭据方法校准、原生单位基准状态来源取样时点互斥责任不确定性，未知不置零 |

### 计算规则

| rule_id | Applies to | Rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| completed_count | cp_occ | N=count_unique_final_owned_resold_B2B_acceptances_after_reversals。须真实批发所有权转售工业企业买方最终门槛凭据撤销，N>0才相除。期初期末延续不形成新N；未完成拒收撤销资源留真实期间群组。 | 实际所有权买方接收撤销时间包记录 | 唯一已完成服务分母N |  |
| wet_bale_components | cp_occ | 采用真实bale_gross_mass/net_received_OCC_mass/external_pack_tare并声明铁丝订书钉非纸水范围。EACH相容质量*actual_count一次TOTAL不变，真实原生单位换算。不重复扣铁丝或假设毛重减捆绑等于干纸。商品有用OCC出口留非交换库存来源记录，不增服务产品交换。 | 实际包件数原生毛净成员包装测量 | 限定收到OCC及组成台账 |  |
| water_nonwater | cp_occ | dry_nonwater_mass=wet_sample_mass*(1-w_wet)，仅指定同样品部件实际水/收到湿质量分数。相容同定义干基水非水比例，在实际percent_to_ratio_factor后用w_wet=w_dry/(1+w_dry)。含糊湿度或含其他挥发物干燥失重非水分数。干非水仍含样品中非纸铁丝；dry_paper_mass须独立组成证据，不推纤维产率或批发开包分选。 | 实际样品部件水定义原生量方法状态来源时点 | 水及干非水审计，区别实际干纸产率 |  |
| original_source_demand | cp_occ | 实际直接追踪或正值完整相容最终末端原生记录含最终期末其他有用退回证明损失时assigned_source_gate_quantity=cohort_source_quantity*target_exit_driver/sum_exit_drivers。commodity_source_gate_demand=assigned_source_gate_quantity采用原分选打包包装状态含有证据状态变化份额，不是发出加废弃。一个群组范围，内部期末期初配对承继carry_original_source_quantity状态来源责任不变，非新来源需求N或两个末端驱动。baseline_quantity/additional_stage_quantity/loss_adjustment_quantity以原基准覆盖责任量化在服务外一次。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 | 实际原来源全部末端延续原生基线新增损失记录 | 互斥原分选打包商品需求损失 |  |
| secondary_integration | cp_occ | 实际来源回收交接及已复核cutoff_or_inheritance_decision决定prior_burden_dataset_link覆盖与burden_transfer_quantity，不自动全部原生箱或零抵扣。实际缺收集分选打包包装阶段新增需求，在完整链使用前必须实际集成至服务外一次；须已完成状态数据集关联时区来源责任已集成原生量阶段损失唯一计入证据，待办计划不够。保留前当前买方重复排除。 | 实际前系统决定交接及已完成集成记录 | 已完成关联二次来源处理，无重复负担 |  |
| utility_share | cp_utilities | documented_share=numerator_driver/denominator_driver采用正值相容原生全部使用者因果基准。真实区间换算服务商排除后utility_per_service=sum(actual_utility_quantity*documented_share)/N，不用打包机制浆回收系数。 | 实际计量原生份额换算覆盖 | 每服务实际仓库kWh条件性场址水m3 |  |
| NET_supply_stock | cp_supplies | S=opening+net_receipts-closing含留存回收，收货为实际净材料排容器。总S/N输入并单列配对可用未耗输出，或耗用(S-usable_outward_return)/N输入且省去配对退回交换。EACH件数一次TOTAL不变，有来源单件密度换算documented_share=numerator_driver/denominator_driver，无继承铁丝纸抵扣。 | 实际净供应库存原生换算配对退回份额驱动 | 互斥实际供应耗用材料口径 |  |
| provider_share | cp_provider | provider_per_service=sum(actual_native_package_quantity*documented_share)/N，实际physical_equivalence覆盖。documented_share=numerator_driver/denominator_driver，各有原生单位基准方法状态来源时点且分母正相容，不用价格或假定浆产率。 | 实际服务包等价覆盖原生份额 | 实际互斥物理承包服务 |  |
| asset_lifetime_share | cp_assets | 原生相容等价且剩余有来源后lifetime_all_user_driver=observed_all_user_driver+remaining_driver。job_driver/lifetime_all_user_driver用于完整制造维护更换退役寿命终结全部使用者期间不确定性敏感性更新服务商承运排除；求和后/N一次。 | 实际完整寿命事件原生作业观察剩余等价 | 全部使用者全寿命资产等价量 |  |
| unique_freight_sum | cp_freight | 实际整货含收到水铁丝订书钉非纸包装随货支承一次。EACH相容质量*actual_count一次TOTAL不变，仅非货物皮重。原生质量距离换算actual_transport_work及documented_service_share=numerator_driver/denominator_driver。freight_per_service=sum_unique_load_leg(actual_transport_work*documented_service_share)/N，各份额在SUM内后N一次，真实空返服务商接收范围互斥。 | 实际唯一装载区段净毛货物件数距离换算份额记录 | 每服务实际运输t*km |  |
| actual_outlets_release | cp_outlets; cp_environment | 有来源EACH/TOTAL净皮重密度换算后outlet_per_service=actual_compatible_native_transfer_quantity/N。整包独立材料包装捕集液体保留组成互斥；实际接收状态处理一次，期末非外送，仅耗用供应省配对退回。release_mass=measured_species_mass或相容activity*applicable_species_factor且仅必要composition/release_fraction；完整物种系数已含比例不再乘。实际环境原生来源样品捕集排除后/N一次，不自动粉尘腐解固碳原生纸抵扣。 | 实际原生交接内容物状态接收或独立物种环境系数链 | 互斥实际接收物种量 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_grade_origin | cp_occ | 实际消费后来源回收交接已分选打包等级捆绑非纸水原生净记录，不凭旧箱标题或通用测试箱板配方。 | 实际供方来源样品接收记录 |
| secondary_decision | cp_occ | 已复核继承截断分配及前当前买方重复核对，完整实际准备来源门槛。待办负担决定或未完成缺阶段集成阻断完整链使用。 | 实际方法来源责任时间数据集覆盖已完成集成 |
| qualified_buyer_example | kruger-occ-2019 | 两页2019买方规格引用2016行业通告，仅定性问题，无统一法律等级门槛载荷禁托盘政策。湿度基准未指明，非实际水质量分数。 | 真实日期PDF及实际前景合同样品证据 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| site_water | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_utilities`识别`site_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_utilities`; 实际来源关联原生记录 |
| service_consumables | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`service_consumables`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| added_protection | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`added_protection`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_package | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_provider`识别`provider_package`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_provider`; 实际来源关联原生记录 |
| service_assets | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`service_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| unused_supply_return | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`unused_supply_return`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| usable_service_material_export | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`usable_service_material_export`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| whole_bale_waste | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`whole_bale_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`whole_bale_waste_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| separate_material_waste | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`separate_material_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| pack_waste | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`pack_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| mixed_capture_waste | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`mixed_capture_waste`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| free_contained_fluid | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_outlets`识别`free_contained_fluid`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_outlets`; 实际来源关联原生记录 |
| direct_species_release | sorted_baled_occ_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`direct_species_release`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

仅真实归属仓库搬运；不因二次商品推当前收集分选打包重包开包制浆回收干燥湿控。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际常温仓库批发电动搬运供电
- 流属性/单位：Energy / kWh
- 数量规则：sum(actual_utility_quantity*documented_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需真实计量kWh区间全部使用者因果驱动闲置未完成覆盖服务商支持，不用纸厂打包机每包能耗。

#### site_water

条件性实际场址卫生，不是洗纸制浆或加湿OCC；交易包保留水属商品。

本卡为独立身份分支`site_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际仓库场址卫生供水
- 流属性/单位：Volume / m3
- 数量规则：actual_utility_quantity换算为m3*documented_share/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`

范围证据需求：需真实计量供方体积事件期间原生换算份额接收，不从含糊湿度标签推供水量。

#### service_consumables

仅实际用品抹布吸收材料滤材，净量排供应容器皮重。原纸铁丝订书钉非纸包装属商品，非批发分选重包用品。

本卡为独立身份分支`service_consumables_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际净卫生事故捕集服务材料
- 流属性/单位：Mass / kg
- 数量规则：所选实际总供应或耗用净服务材料质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需实际材质组成净库存收货EACH/TOTAL件数质量密度匹配未耗退回，不设默认捕尘比例。

#### added_protection

仅真实额外外层防护，不推开包重包重装；原包铁丝包装属商品，重复支承属完整寿命资产。

- 身份采集要求：实际批发新增外层运输防护
- 流属性/单位：Mass / kg
- 数量规则：所选实际总供应或耗用净新增防护质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据需求：需真实材质原生量库存退回责任货物包含，买方示例禁用不作统一零或规定缠包。

#### provider_package

仅实际物理仓库搬运等价所含资源；服务商分选重包制浆回收为须复核真实额外路线。

- 身份采集要求：实际互斥承包仓库搬运服务包
- 流属性/单位：Count / Item(s)
- 数量规则：sum(actual_native_package_quantity*documented_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_provider`

范围证据需求：需服务商作业原生等价期间驱动份额公用资产运输处理排除，OCC售价假定纤维产率不定义服务包。

#### service_assets

真实建筑货架搬运支承独立于继承包铁丝包装；完整制造维护更换退役寿命终结覆盖全部使用者期间。

- 身份采集要求：实际完整寿命仓库搬运重复支承
- 流属性/单位：Count / Item(s)
- 数量规则：sum_full_asset_equivalents(job_driver/lifetime_all_user_driver)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据需求：需真实资产范围作业已观察全部使用加有来源剩余原生相容驱动等价不确定性，不按每包新托盘或统一寿命。

#### freight

实际收到整货含实测成员保留水铁丝订书钉非纸包装支承，非干纤维重。

- 身份采集要求：实际原分选OCC包唯一装载区段运输
- 流属性/单位：Mass * Length / t*km
- 数量规则：sum_unique_load_leg(actual_transport_work*documented_service_share)/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据需求：需真实包装包质量件数EACH/TOTAL铁丝包装成员真非货物皮重距离换算各记录份额空返覆盖，不用示例18吨载荷规则。

#### unused_supply_return

仅总输入口径下真实匹配净库存外送。仅耗用省配对交换；商品OCC退回继承铁丝是非交换商品记录。

- 身份采集要求：实际配对可用未耗独立服务供应外送退回
- 流属性/单位：Mass / kg
- 数量规则：仅总供应口径实际配对净未耗外送质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实同库存材料净量可用性接收，非期末或以继承纸铁丝抵无关供应。

#### usable_service_material_export

条件性真实独立有用服务包装材料有等级状态接收证明，不自动原生纸替代抵扣。商品有用OCC出口留非交换来源库存台账，非重复服务产品。

- 身份采集要求：实际接收有用服务或包装材料外送
- 流属性/单位：Mass / kg
- 数量规则：实际互斥有用服务材料外送质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实材料原生量保留纸非纸水内容物接收，并明确区别交易OCC期末废物成员。

#### whole_bale_waste

仅真实丢弃接收分类，整包含实测保留纸铁丝订书钉非纸水包装成员。潮湿买方拒收不自动丢弃；商品前负担损失关联在外一次，真实物理处理此处一次。

- 身份采集要求：实际丢弃整收到OCC包及保留组成
- 流属性/单位：Mass / kg
- 数量规则：实际整包接收净物流质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需实际决定包来源母体成员接收状态交接净皮重组成样品来源处理，不自动将拒收包回收。

#### separate_material_waste

仅真实独立收集交接丢弃材料有母包及整包捕集互斥成员，不推批发开包分选。纸金属塑料等按真实接收证据展开，不用单一通用回收流。

- 身份采集要求：实际独立交接松散事故纸或非纸废物
- 流属性/单位：Mass / kg
- 数量规则：实际互斥独立材料接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实材质水分非纸原生质量母事件接收分类，松纤维保留捕集非自动空气粉尘制浆产率。

#### pack_waste

仅真实外部交接独立铁丝包装流，实测流内保留纸水污染物；排整包松散材料捕集。不自动除铁丝重包。

本卡为独立身份分支`pack_waste_paper_pack`; `pack_waste_metal_pack`; `pack_waste_plastic_pack`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际单独交接含残留包装捆绑废物
- 流属性/单位：Mass / kg
- 数量规则：实际独立捆绑包装接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需原铁丝与订书钉内部非纸成员区别实际原生净皮重残留接收，买方示例禁托盘规则非统一清单。

#### mixed_capture_waste

条件性真实基材捕集纤维非纸流体水在一混合流；捕集内容物非额外整股废物或直接颗粒。

- 身份采集要求：实际含捕集OCC相关材料的废抹布吸收材料滤材
- 流属性/单位：Mass / kg
- 数量规则：实际混合捕集接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需基材各保留组成自身原生单位基准方法状态来源取样时点事故谱系接收，不设粉尘抹布吸收系数。

#### free_contained_fluid

实际收集流体有水用品纸非纸混合，区别包捕集保留水；不推包水排放纸浆废水纯水释放。

- 身份采集要求：实际独立收集受控卫生事故液体
- 流属性/单位：Mass / kg
- 数量规则：实际相容受控流体接收净质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_outlets`

范围证据需求：需真实收集原生净量换算时密度温度混合保留排除接收处理；水分降低本身非流体出口。

#### direct_species_release

仅真实独立批发边界物种颗粒环境；保留捕集纤维湿库存差生物来源不证明排放腐解固碳零。

- 身份采集要求：实际已识别物种颗粒释放至有证据环境
- 流属性/单位：Mass / kg
- 数量规则：实际相容实测或有依据物种质量/N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据需求：需实际物种颗粒环境原生实测释放或适用活动系数及仅必要组成去向来源捕集排除，非回收原生纸默认。

## 9. 验证规则

| rule_id | Rule |
| --- | --- |
| final_reference | 参考输出名称关联计数匹配真实自有转售工业企业最终门槛凭据撤销N>0；来源等级包净状态法律身份来源决定限定。未完成隔离拒收资源保留。 |
| secondary_source_treatment | 须真实消费后来源回收交接已复核前系统继承截断分配决定来源责任时间覆盖、完整实际收集分选打包包装门槛及前当前买方重复排除。不自动全部原生箱负担或零抵扣。 |
| completed_integration | 原直接或正值完整相容最终末端原生驱动含期末其他有用退回证明损失及基线新增损失覆盖责任在外一次。实际缺阶段新增需求必须已集成至服务外一次，有已完成状态关联时区来源责任集成原生量覆盖唯一计入证据，待办计划不够。  每项关联原门槛需求或损失量须记录assignment_scope_ids、quantity_basis（raw_target_cohort或per_reference）、same_target_scope_N及来源。真实外部库存阶段损失集成使用原始实体量一次。仅与1 Item(s)服务组合时派生q_per_reference=q_raw_of_that_same_scope/正数same_target_scope_N；已归一量不再除，单货批原始范围N=1，N=0无归一值。 |
| carry_and_water | 同库存期末期初承继原数量状态来源责任，不新增来源需求N或两个末端出口；一个范围最终期末一次。实际水专属湿干定义样品百分数系数；含糊湿度或干燥失重非水。干非水非纤维产率，整股组成成员互斥。 |
| resources_and_actual_fate | 不隐藏批发收集分选开包打包重包制浆回收使用气候路线。净材料收货排皮重，各原生分子分母、总输入配对输出或仅耗用省输出、完整全部使用者资产观察有来源剩余、各唯一运输份额在SUM内/N一次。实际接收法律状态分类环境原生物种证据，不自动回收抵扣或库存差转排放零。 |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 每最终接收工业企业批次前景自营批发服务附加清单 |
| downstream_use | 关联一次相容原分选打包消费后OCC商品及复核前负担截断、服务外已完成真实来源阶段损失集成，再至真实回收买方门槛 |
| allowed_use | 真实已分选原消费后OCC包有来源交接等级法律状态原生水非纸捆绑库存记录及常温批发作业 |
| excluded_use | 独立完整回收纤维或原生箱足迹、新纸未分选收集当前分选打包重包开包制浆回收使用、将待办前负担缺阶段集成当完成 |
| required_metadata | merchant_id; ownership_purchase_resale_evidence; business_buyer_id; acceptance_gate; acceptance_source; acceptance_reversal_ids; supplier; actual_grade; source_batch; bale_ids; postconsumer_origin_evidence; already_sorted_baled_evidence; recovery_handoff_id; recovery_handoff_gate; cutoff_or_inheritance_decision; prior_burden_method; prior_burden_dataset_link; receiver_legal_Product_Waste_status; legal_status_evidence; original_bale_membership; wire_staple_membership; bale_count; bale_gross_mass; net_received_OCC_mass; water_sample_component_scope; water_wet_or_dry_basis; original_bale_pack_state; receipt_time; dispatch_time; acceptance_time; period_id; time_zone |
| required_quality_disclosure | 实际身份范围原生量水湿干部件样品定义非纸铁丝覆盖、前系统决定交接重复排除、原始末端延续来源集成覆盖、全部使用者资产剩余原生份额运输接收不确定性 |
| update_trigger | 实际来源等级包捆绑水分非纸法律状态前负担决定延续来源阶段、批发作业服务商资产接收物种原生换算证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| kruger-occ-2019 | literature | https://recycling.kruger.com/wp-content/uploads/sites/9/2019/04/Kruger_Recyclage_Specifications_Old_Corrugated_Containers_OCC11_Mars_2019_EN_v1.pdf | 2019两页买方OCC示例引用2016行业通告：仅定性包捆绑订书钉非纸水分接收问题。不统一测试箱板配方数值接收湿度载荷包重禁托盘规则或现行EN643法律。实际消费后批来源水分数基准须记录。 |
