---
pcr_id: pcr.own-account-wholesale-of-complete-finished-leather-handbags
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原厂完整成品皮革手袋自营批发

## 1. 范围与适用性

本规则覆盖原厂完整成品皮革手袋，含实际衬里五金扣具所含可拆背带附件及供方原包装，经常温商人所有转售物理企业批发。以实际完整成品供方交接为起点，纳入真实接收文件目视完整性条件记录库存装卸商业验收。原皮鞣革未成品裁片单独附件商品替代包材不能构成完整手袋交接。排除鞣制切缝整理剂施加维修洗包养护组装重包消费者携用零售收费代理纯仓储。

清单为服务附加。全部实际完整商品继承包装制造包括真实损失对应上游生产均在服务外。完整链就绪前需按原生单位状态换算互斥来源归属及相同基线阶段损失覆盖，单独量化关联原成品交接需求一次。真实物理装卸声明接收运输处理仍纳入一次。商业价格毛利包件数组分质量品牌价值不能替代参考服务数。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-complete-finished-leather-handbags |
| classification_refs | CPC3 61056皮具旅行附件批发；292组29220成品皮革手袋较窄范围 |
| covered_products | 实际完整成品皮革手袋常温自营企业货批服务 |
| excluded_products | 原皮皮革未成品裁片仅附件非皮革包；鞣制切缝涂层维修清洗组装重包消费者使用零售代理纯仓储 |
| representative_product | 实际完整供方型号批及原生包组分物料表所含单独销售背带五金衬里整理原包商业验收交接 |
| production_route | 完整成品供方手袋交接 -> 所有权接收常温库存完整性条件装卸 -> 最终企业验收转售 |
| market_state | 数量物理批发服务；真实包组分净皮重水分整理包装量仍非交换商品审计 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成原厂完整成品皮革手袋自营批发货批 |
| How much | 1 Item(s) |
| How well | 实际完整皮革手袋有来源物料表所含附件整理数量状态买方验收标准，不由示例商品保证鉴真未来携用寿命 |
| How long or cycle | 实际接收库存装卸最终验收区间，独立商品报告期间完整资产寿命阶段 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成原厂完整成品皮革手袋自营批发货批 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_ownership_resale; business_buyer_acceptance_gate; actual_model_SKU_lot_bag_ids; bag_component_genealogy; lining_hardware_closure_evidence; included_versus_separate_straps; actual_leather_material_finish_source; original_packaging_inclusions; complete_finished_supplier_gate; native_bag_component_counts; net_gross_tare_moisture_basis; component_method_state_sampletime_source; actual_start_end_duration_unit; site_campaign_reporting_period; source_gate_assignment_coverage_owner |

正N只计唯一真实最终企业验收商业货批并核撤销，不等包背带五金件数kg或货币。失败拒收闲置未完成跨期资源仍有归属。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| bag_component_native | 商品审计 | 原生包附件数的数量；声明成品重的质量 | 真实原生包组分数；声明净毛皮重的kg | 用真实包物料表包装标识原生数量实测成品重，明确所含单独销售组分和原包排除，真实有来源对应控制包部件换算，缺所含背带不自动为整包量损失。 | coach-finished-handbag |
| component_state | 独立组分测量 | 组分质量的质量；报告水分含量的质量分数 | kg；实际湿干基分数或% | 各独立测皮衬里五金水分整理量有自身原生单位基准方法状态取样时间来源代表范围，不以整包重标称皮比例假定化学替代组分证据。 |  |
| native_conversion | 全部原生量 | 真实所测原生属性和量纲兼容目标属性 | 原生单位 -> 有明确因子单位的兼容目标单位 | 记真实状态换算方法因子单位基准来源，质量体积换算需适用实测有据密度单位温度温度单位来源，不通用包尺寸标称kg每包整理配方背带数乘数。 |  |
| actual_reference | 全部服务资源量 | 服务分母的数量；各物理资源真实原生属性 | Item(s)分母；各物理行真实单位每Item(s) | 直接追真实事件或以兼容正完整全部使用方物理驱动，保留失败闲置拒收未完成，归属总量除N一次，数量支持识别计量链而非手袋批发服务身份。 |  |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际原厂完整成品皮革手袋及真实衬里五金扣具所含可拆背带原包，原生数净皮重材质整理水分状态证据 |
| starting_condition_role | 下游自营批发的继承完整成品商品，不是原皮皮革准备或新增整理 |
| product_classification_scope | 较窄61056仅覆盖所述292组29220成品手袋服务；61056另含2831和291等货物在此方法外 |
| recursive_input_rule | 交易完整包所含组分留存水分整理原包为非交换库存审计，不为服务消耗皮织物金属化学品水。 |
| upstream_dataset_requirement | 独立来源数据须至实际完整成品手袋供方交接，含相关材料供应皮加工切缝组装整理完整附件放行继承包装，原皮鞣革或组分篮本身缺成品阶段。 |
| disclosure | 实际包组分物料表所含材质整理原生量净皮重水分独立组分方法状态时间来源验收时间完整原生来源归属损失覆盖及服务资产服务商货运接收归属未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_commodity | 商品接口 | 全部完整包皮衬里五金背带整理原包生产包括损失上游在服务外，按实际原成品交接及相同基线阶段损失覆盖单独量化关联一次，实际物理服务和声明接收运输处理纳入一次。 |  |
| primary_limits | handbag_wholesale | 厂家实际混合皮衬里五金扣具可拆背带说明仅支持配置完整性问题，不将示例品牌尺寸价格背带数量表面光泽当化学配方净重寿命鉴真或商人保养测试规程。 | coach-finished-handbag |
| unknown_is_not_fate | 状态审计 | 缺附件破损擦痕湿重变化真实废弃释放不同，未知差额不是零、整包皮革损失或化学排放，需真实去向。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| handbag_wholesale | 成品皮革手袋商人接收库存及验收交接 | required | 实际原厂完整成品皮革手袋自营企业验收 | 物理接收库存条件完整性装卸交接，不制造维修清洗携用 | `accepted_service` |

批发货批与仓库批次连续辅助区间交叠。链接真实接收文件目视完整性条件记录及实际代表性测量样品移除退回去向，含清理换批闲置失败拒收未完成发运验收事件至批期间。无强制开每包测试或磨耗鉴真活动。缺所含背带扣件破损污损包损实际隔离供方退回可用其他出口或废弃互斥，不默认拆修补带清洗重包。无验收区间的实际资源跨期保留核归属，才按N一次归一。

### 过程：成品皮革手袋商人接收库存及验收交接 (`handbag_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_energy 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需真实计量读数全部使用方事件分配含闲置失败未完成及到货服务商覆盖，不由皮革外观价格推每包电力。

###### 实际液态处理自来水供给 (`facility_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：按 cp_supplies 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需原生体积水源用途区间供方覆盖和独立有据去向，湿衬里收水不等废水量。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实品项用途净收期初期末退回组成及清理载体吸附内容来源，存在整理层不量化仓库化学品排放。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：按 cp_supplies 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需牌号原生库存互斥燃烧可用退回废损证据及适用密度温度单位来源换算，不假定购燃料全燃。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成原厂完整成品皮革手袋自营批发货批 (`accepted_service`)

一个真实商人所有转售企业验收商业货批，商品为供方完整成品皮革手袋及真实物料表所含附件原包装状态，真实数量完整性材质整理时间限定服务，不是制造包件品牌价值未来耐久。

- 选定流：已完成原厂完整成品皮革手袋自营批发货批
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：需真实所有权验收品项批物料表、包与所含单独销售背带五金身份、净皮重水分条件原生量时间，不定品牌尺寸背带数价格保养寿命要求。

##### 废物流

###### 废弃完整成品皮革手提包 (`discarded_handbags_atomic_case`)

仅在实际独立记录确认“废弃完整成品皮革手提包”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_handbags`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整成品皮革手提包
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handbags 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handbags`

范围证据要求：需真实去向物料对应原生量状态净皮重接收处理范围及互斥原交接对应，表面擦痕未知重量差不是废皮包kg。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`direct_species_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_releases 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需已识别物种介质实测或兼容实际活动因子原生单位因子覆盖及必要组成去向温压基准来源一次，不通用皮整理排放因子。


###### 实际有独立证据的向空气排放化石甲烷 (`direct_species_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_releases 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需已识别物种介质实测或兼容实际活动因子原生单位因子覆盖及必要组成去向温压基准来源一次，不通用皮整理排放因子。


###### 实际有独立证据的向空气排放氧化亚氮 (`direct_species_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_releases 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需已识别物种介质实测或兼容实际活动因子原生单位因子覆盖及必要组成去向温压基准来源一次，不通用皮整理排放因子。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| resource_attribution | 全部服务资源 | 用真实直接事件证据，或数量×兼容目标驱动/正完整全部使用方驱动及单位基准来源互斥归属，纳闲置换批失败拒收未完成其他客户期间，核结转后归属验收群总量除N一次，价格毛利非物理驱动。 |  |
| original_gate_assignment | 商品接口 | 每实际完整来源批状态选直接追溯实测归属交接需求及原生单位状态来源直接证据互斥出口，或归属需求=实际来源交接量×目标驱动/来源全出口驱动。正来源全出口驱动等完整兼容竞争验收可用其他出口退回期末结转有证据真实损失记录，每个量单位基准来源链接归属。不仅验收、不缺失损失为零、不叠直接驱动视图；明确真实损失归属防重复分配。保留原生归属新增基线需求单位状态来源有来源换算，核相同基线阶段损失覆盖后所需新增需求在服务外仅关联一次。 |  |
| operating_stock_returns | 服务用品 | 令S=归属期初+净外收-含留存回收的期末。用毛S/N和匹配真实未用外退，或净消耗(S-退回)/N并省对应退回交换。内部循环回收留存为库存，真实废弃消耗保留供应负担，继承包组分整理不扣不相关当期服务用品不负量自动抵扣。 |  |
| asset_lifecycle | 资产服务商 | 以实际已用驱动/完整全寿命全部使用方驱动兼容单位及观察有来源剩余退役归属完整资产制造维护真实更换寿命终结，明确不确定性敏感性更新全部使用方期间，资产当量或完整寿命服务商二选一不叠加，未按参考时才用N一次。 |  |
| fate_ownership | 全部真实材料去向 | 整手袋单组分包装及皮衬里金属水整理审计不可相加，耗混载体吸液收集碎屑游离废水真实直接物种保持互斥流接收处理范围，拒收未完成仍负担且不计N，不自动残值抵扣重复接收运输处理。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | handbag_wholesale | 验收服务 | 商业交接 | consignment_id; merchant_id; ownership_resale_evidence; business_buyer_id; acceptance_gate; acceptance_time; acceptance_source; reversal_ids; unique_accepted_count; N; model_SKU_lot_ids; bag_component_genealogy; completeness_record; material_finish_evidence; buyer_criteria_source; start_time; start_time_source; end_time; end_time_source; time_zone; time_unit; duration; duration_unit; duration_source; site_id; campaign_id; reporting_period; failed_rejected_unfinished_ids; attribution_owner | 匹配实际所有转售买方验收撤销至唯一完成货批及真实型号批组分完整性条件，记录原时间戳时区时长单位来源地点批期间无验收事件，包数未来保养均不是服务成果。 | 真实验收数量Item(s)日期时间原生时长 | 每实际事件或计量区间，原记录可追溯 | 真实服务库存报告期间及适用完整资产寿命 | 真实商人设施全部相关使用方及声明服务商接收方 | per reference flow | 原始数量单位基准来源计量校准方法样本状态覆盖及不确定性 |
| cp_handbags | handbag_wholesale | 非交换手袋库存及真实废弃 | 成品部件包装审计 | source_lot_id; model_SKU; bag_ids; component_ids; component_role; component_counts; component_count_unit; component_count_source; bag_component_genealogy; genealogy_source; actual_BOM; included_accessory_ids; separately_sold_accessories; strap_material_evidence; hardware_closure_evidence; lining_material_evidence; leather_material_evidence; material_source; factory_finish_identity; finish_source; completeness_state; original_pack_inclusions; buyer_criteria_source; actual_native_quantity; native_unit; quantity_basis; quantity_source; gross_mass; gross_unit; gross_source; packaging_tare; packaging_unit; packaging_source; net_finished_mass; net_mass_unit; net_mass_basis; net_mass_source; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; sample_representativeness; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_source; conditioning_state; sample_time; temperature; temperature_unit; temperature_source; opening; supplier_external_receipts; buyer_returns; closing; dispatch; supplier_returns; useful_other_exits; actual_discard; net_sample_removal; unknown_residual; stock_unit; stock_state; stock_source; disposition_ids; receiver; treatment_coverage; actual_source_gate_quantity; source_gate_unit; source_gate_state; source_gate_quantity_source; source_complete_stage_evidence; assignment_view; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_state; assigned_gate_demand_source; direct_assignment_evidence; exclusive_exit_links; target_driver; target_driver_unit; target_driver_basis; target_driver_source; source_all_exit_driver; source_all_exit_driver_unit; source_all_exit_driver_basis; source_all_exit_driver_source; competing_exit_driver_records; exit_record_quantity; exit_record_unit; exit_record_basis; exit_record_source; exit_record_link; exit_record_owner; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_source; baseline_demand; baseline_demand_unit; baseline_demand_state; baseline_demand_source; baseline_stage_loss_coverage; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_state; additional_gate_demand_source; exclusive_loss_assignment; commodity_adjustment_owner; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 实测追溯含实际衬里五金背带原包的完整成品，保留物料表所含与单独附件对应、原生毛净皮重及独立组分水分单位基准方法状态取样时间来源，追全部互斥库存样品退回可用其他期末废弃出口未知差额。选有证据直接实际归属来源量或原来源实际量×目标驱动/正完整全出口驱动，保存每竞争出口记录量单位基准来源链接归属，不仅验收不叠直接驱动。记兼容原状态换算归属新增基线原生单位状态来源完整阶段损失相同覆盖，服务外一次。  商品收货仅供方外收，买方退回另列，内部移动成对消去；发运仅向业务买方的真实实物发运，不再含供方退回或可用其他出口。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 真实原生包组分包装数kg及声明组分水分基准 | 每实际事件或计量区间，原记录可追溯 | 真实服务库存报告期间及适用完整资产寿命 | 真实商人设施全部相关使用方及声明服务商接收方 | per reference flow | 原始数量单位基准来源计量校准方法样本状态覆盖及不确定性 |
| cp_energy | handbag_wholesale | 电力燃烧活动 | 计量燃烧区间 | meter_id; energy_quantity; energy_unit; meter_start; meter_end; interval; source; operation_purpose; burn_quantity; burn_unit; burn_basis; burn_source; fuel_identity; conversion_factor; conversion_unit; conversion_basis; conversion_source; event_ids; period_ids; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读真实计量区间独立燃烧证据及原生因子来源，将照明装卸辅助换批闲置失败未完成使用方期间纳完整物理驱动归属后N一次，燃料到货继承整理不量化燃烧。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 真实kWh和原生燃烧量单位 | 每实际事件或计量区间，原记录可追溯 | 真实服务库存报告期间及适用完整资产寿命 | 真实商人设施全部相关使用方及声明服务商接收方 | per reference flow | 原始数量单位基准来源计量校准方法样本状态覆盖及不确定性 |
| cp_supplies | handbag_wholesale | 服务用品匹配外退 | 供应库存原生去向 | supply_SKU; purpose; composition; composition_basis; composition_source; provenance_owner; period; opening; external_receipts_net; closing_including_retained_recovery; native_unit; quantity_basis; quantity_source; usable_external_return; return_unit; return_recipient; matched_input_id; matched_state_scope; internal_loop; retained_recovery; waste_quantity; waste_unit; burn_quantity; burn_unit; actual_fate_source; accounting_view; conversion_factor; conversion_unit; conversion_basis; conversion_source; density; density_unit; density_temperature; temperature_unit; density_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 外收为排容器皮重的净供应量，以证据记真实品项用途配方库存退回去向含条件擦布吸附滤材及原生密度温度换算完整全部使用方驱动单位基准来源，S=期初+净收-期末含留存回收，用毛加匹配未用退回或净消耗省对应出口，不把继承包整理当当期供应。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 实际供应原生kg/m3/L或有支持物理单位 | 每实际事件或计量区间，原记录可追溯 | 真实服务库存报告期间及适用完整资产寿命 | 真实商人设施全部相关使用方及声明服务商接收方 | per reference flow | 原始数量单位基准来源计量校准方法样本状态覆盖及不确定性 |
| cp_assets | handbag_wholesale | 共享资产 | 完整寿命服务 | asset_id; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; provider_scope; consumers; periods; used_driver; used_driver_unit; used_driver_basis; used_driver_source; observed_life_driver; observed_driver_unit; observed_history_source; remaining_life_driver; remaining_driver_unit; remaining_evidence_source; termination_evidence; lifetime_all_consumer_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; conversion_factor; conversion_unit; conversion_source; uncertainty; sensitivity; update_trigger; attribution_owner; already_per_reference; observed_driver_basis; remaining_driver_basis; conversion_basis; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share | 记录实际共享资产全部使用方期间完整制造维护真实更换寿命终结观察历史有来源剩余退役，实际已用寿命驱动单位基准及换算兼容，披露不确定性敏感性更新证据，资产当量或完整寿命服务商二选一，按N视图一次。 | 真实兼容寿命驱动单位及有支持时资产当量Item(s) | 每实际事件或计量区间，原记录可追溯 | 真实服务库存报告期间及适用完整资产寿命 | 真实商人设施全部相关使用方及声明服务商接收方 | per reference flow | 原始数量单位基准来源计量校准方法样本状态覆盖及不确定性 |
| cp_providers | handbag_wholesale | 服务商成果 | 真实成果覆盖 | provider_id; event_id; native_result; result_unit; result_basis; result_source; service_scope; measurement_method; sample_ids; sample_representativeness; sample_removed; sample_return; sample_fate; material_coverage; energy_coverage; asset_coverage; freight_coverage; receiver_treatment_coverage; excluded_testing_scope; period; conversion_factor; conversion_unit; conversion_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_owner; target_driver_basis; all_consumer_driver_basis; attribution_share | 确立已执行物理辅助成果单位来源和服务商材料能源资产货运处理覆盖，区分文件目视完整性或真实代表性条件测量与此处排除的修洗包磨耗鉴真测试，记样品移除退回去向不假定每包测试。 | 真实服务商原生物理成果单位 | 每实际事件或计量区间，原记录可追溯 | 真实服务库存报告期间及适用完整资产寿命 | 真实商人设施全部相关使用方及声明服务商接收方 | per reference flow | 原始数量单位基准来源计量校准方法样本状态覆盖及不确定性 |
| cp_freight | handbag_wholesale | 货运 | 唯一真实包装载荷路段 | load_id; leg_id; cargo_ids; load_quantity; load_unit; load_basis_each_or_total; load_source; repeated_load_count; repetition_source; actual_packed_payload; payload_unit; payload_state; payload_source; vehicle_gross; vehicle_gross_unit; gross_source; vehicle_noncargo_tare; noncargo_tare_unit; tare_source; original_cargo_pack; added_cargo_pack; retained_moisture_finish; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_basis; distance_conversion_source; empty_return_coverage; delivered_provider_coverage; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; unique_scope_owner; already_per_reference; gross_conversion_factor; gross_conversion_unit; gross_conversion_basis; gross_conversion_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_basis; tare_conversion_source; target_driver_basis; all_consumer_driver_basis; attribution_owner | 每唯一载荷路段用实测包装货载或同状态车辆毛重仅减车辆非货皮重，保留全部原新增货包所含包组分留存水整理，不重复加组分。毛皮载距原生换算有因子单位基准来源，每载可乘有据重复次数，总量不再乘，完整全部使用方物理份额一次，汇总唯一归属kg*km后未按参考才除N一次，核空返退回到货服务商覆盖。 | 原生货物距离兼容换kg*km | 每实际事件或计量区间，原记录可追溯 | 真实服务库存报告期间及适用完整资产寿命 | 真实商人设施全部相关使用方及声明服务商接收方 | per reference flow | 原始数量单位基准来源计量校准方法样本状态覆盖及不确定性 |
| cp_fates | handbag_wholesale | 取水废物排口 | 真实取水接收排口状态 | event_id; source_location; receiving_location; receiving_medium; flow_identity; native_quantity; native_unit; quantity_basis; quantity_source; interval; composition; composition_basis; composition_source; fate_basis; fate_source; mixed_receiver_mass; mixed_mass_unit; mixed_mass_basis; mixed_mass_source; carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; free_liquid_volume; liquid_volume_unit; liquid_volume_source; density; density_unit; density_temperature; temperature_unit; density_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; nonadditive_view; attribution_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share | 分别量实际取水接收混固容装游离液直接排口，保留真实载体吸液碎屑原生单位基准来源组成去向接收运输处理覆盖密度温度换算证据，整混流组分审计不相加于商品废弃或彼此，收水不确立废水。 | 实际原生质量体积兼容换kg/m3 | 每实际事件或计量区间，原记录可追溯 | 真实服务库存报告期间及适用完整资产寿命 | 真实商人设施全部相关使用方及声明服务商接收方 | per reference flow | 原始数量单位基准来源计量校准方法样本状态覆盖及不确定性 |
| cp_releases | handbag_wholesale | 直接物种 | 真实物种接收介质 | event_id; species_identity; particle_size; receiving_medium; measurement; measurement_unit; measurement_basis; measurement_source; activity; activity_unit; activity_basis; activity_source; factor; factor_unit; factor_basis; factor_source; factor_coverage; burn_fraction; burn_fraction_source; composition; composition_unit; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; time_interval; period; provider_coverage; nonadditive_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; attribution_owner; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 需真实化学物种粒径身份接收介质证据及实测或兼容活动因子单位基准来源覆盖，仅需要时应用组成去向气体浓度换算一次并有温压单位来源，不由皮镀层化学光泽气味时间缺质量推释放。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际物种原生量兼容换kg | 每实际事件或计量区间，原记录可追溯 | 真实服务库存报告期间及适用完整资产寿命 | 真实商人设施全部相关使用方及声明服务商接收方 | per reference flow | 原始数量单位基准来源计量校准方法样本状态覆盖及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_normalization | 全部服务行 | 追真实直接事件或实际量×兼容目标驱动/正完整全部使用方驱动及原生单位基准来源，保留闲置失败拒收未完成其他使用方期间负担，然后唯一归属群总量除验收N一次，不再除已归一值。 | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 实际每参考物理服务清单 |  |
| bag_stock_state | 商品审计 | 兼容原生库存状态：期初+供方外收+买方退回-期末-发运-供方退回-可用其他出口-真实废弃-净样品移除=未知差额，匹配真实包组分包装对应及独立材料水分整理测量单位基准方法状态取样时间来源。缺附件不确立整包损失，差额不为释放废物零。 | cp_handbags | 明确完整库存出口未知状态 |  |
| source_finished_demand | 商品接口 | 选直接追溯实测归属量单位状态来源证据互斥出口，或原来源实际量×目标驱动/全出口驱动，全出口驱动>0且等完整兼容竞争验收可用其他退回期末结转有证据损失记录之和，每个量单位基准来源链接归属。不仅验收不叠直接驱动。真实原交接换算有方法因子单位基准来源，归属新增基线需求各保留单位状态来源，核相同既有基线覆盖后所需完整成品阶段损失需求在外关联一次，不通用损失乘数。 | cp_handbags; cp_consignment | 单独完整原成品来源需求损失接口 |  |
| unique_packed_freight | freight | 实测包装货载或同状态车辆毛重仅减车辆非货皮重，保留货包手袋组分水整理、组分审计不可相加。唯一每载仅乘有据次数，总量不再乘。以因子单位基准来源将原生量距换kg*km，兼容完整全部使用方份额一次，汇总唯一归属路段后未归一时才除N一次。 | cp_freight | 真实每参考物理货运 |  |
| actual_species | direct_species; direct_species_co2_fossil_air; direct_species_methane_fossil_air; direct_species_nitrous_oxide_air | 用真实已识别物种介质实测或兼容真实活动×因子及原生单位基准来源完整因子覆盖，组成去向温压浓度换算按方法需要一次，材料镀层整理含量缺质量本身不提供排放量。 | cp_releases; cp_energy; cp_handbags | 实际有据每参考物种 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_identity_support | 全部行 | 最终交换前核真实完整包组分材质整理及每服务服务商接收水源物种身份兼容原生计量支持，数量支持与商人服务身份不同。 | 实际供方物料表批商业记录已核详情原生支持 |
| native_components | 商品清理组分 | 皮衬里五金水整理或清理载体液碎屑需独立组分量单位基准方法状态取样时间来源代表范围，不以整包重标称组成包重替代。 | cp_handbags; cp_fates; cp_releases |
| coverage_life_unknown | 全部接口 | 披露真实对应完整性状态来源归属基线覆盖缺口未知库存损失去向服务商接收范围、全部使用方完整资产剩余寿命证据不确定性及逐行范围证据需求，已编写候选不为最终数据就绪。 | 实际来源覆盖矩阵前景记录寿命证明 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_energy`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_energy`; 实际来源关联原生记录 |
| facility_water | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`facility_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| new_outer_protection | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`new_outer_protection`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`operating_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| fuel_supply | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`fuel_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_providers`识别`provider_services`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`environmental_water`内每项实际inputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| usable_supply_returns | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_supply_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_handbags | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_handbags`识别`discarded_handbags`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`discarded_handbags_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_handbags`; 实际来源关联原生记录 |
| other_wastes | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`other_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| contained_wastewater | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`contained_wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`water_outfalls`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| direct_species | handbag_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_releases`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_releases`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

采真实计量期间运营仓库照明装卸业务辅助耗电，不含鞣制缝制整理剂施加干燥维修消费者使用。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际手袋批发电力
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_energy 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需真实计量读数全部使用方事件分配含闲置失败未完成及到货服务商覆盖，不由皮革外观价格推每包电力。

#### facility_water

此处仅真实仓库卫生辅助购水，皮革衬里水分继承整理原包装属商品状态，不假定手袋清洗养护。

本卡为独立身份分支`facility_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入设施辅助用水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_supplies 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需原生体积水源用途区间供方覆盖和独立有据去向，湿衬里收水不等废水量。

#### new_outer_protection

按品项层级记真实新增发运外箱保护标签绑带，原厂若附防尘袋纸盒保护套属实际成品商品交接，周转运输器具用寿命服务。

- 身份采集要求：实际服务新增外部保护
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际新增继承量净质量或有据原生数面积换算库存来源，不默认每包货批全新零售包托盘。

#### operating_supplies

以实测原生配方使用展开实际设备润滑清洁擦布吸附滤材行政用品，原厂皮革整理胶衬里金属镀层属继承商品，不是当期服务化学输入，不引入擦亮洗包重整理。

本卡为独立身份分支`operating_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际维护及条件性设施清理用品
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实品项用途净收期初期末退回组成及清理载体吸附内容来源，存在整理层不量化仓库化学品排放。

#### fuel_supply

将原生供应库存与实测燃烧未燃废物退回分开，核雇用装卸货运是否含燃料。

本卡为独立身份分支`fuel_supply_diesel_supply`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际自有装卸燃料库存供应
- 流属性/单位：Volume / L
- 数量规则：按 cp_supplies 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需牌号原生库存互斥燃烧可用退回废损证据及适用密度温度单位来源换算，不假定购燃料全燃。

#### provider_services

按真实原生单位用实际装卸仓储目视文件完整性条件核对设施维护业务辅助成果，厂家描述证书不证明商人已作检测鉴真磨耗测试。

- 身份采集要求：实际物理批发辅助成果
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_providers 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据要求：需真实执行成果及材料能源资产货运接收处理范围，代表性条件测量需方法样品移除退回去向，不隐藏维修清洗或消费者使用测试。

#### shared_assets

跨全部使用方期间完整寿命阶段覆盖真实设施货架装卸计量信息周转箱托盘，售出手袋不是仓库资产。

- 身份采集要求：全寿命共享仓储装卸周转资产
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_assets 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据要求：需制造维护真实更换寿命终结兼容已用寿命驱动观察历史有来源剩余退役及不确定性敏感性更新，不通用年限每程新资产。

#### freight

运输货载含实际包及所含背带衬里五金留存水整理、原新增货包，实测毛重仅减车辆非货皮重，核服务商到货空返范围。

- 身份采集要求：实际包装手袋及作业货运
- 流属性/单位：Mass*distance / kg*km
- 数量规则：按 cp_freight 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据要求：需唯一载荷路段标识每载总量约定实测货物或同状态毛皮重换算单位基准来源全部使用方份额，不标称包重或仅皮货载。

#### environmental_water

仅纳入真实商人运营环境提取，与购水商品水分交换分开。

- 身份采集要求：实际直接仓库水源取水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需真实水源地点计量区间原生单位换算提取边界，潮湿皮革衬里不量化取水。

#### usable_supply_returns

识别真实同范围独立服务用品品项状态对接收方外退，净消耗输入省去对应退回交换，回收留存内部循环为期末，手袋背带衬里包材退回为商品审计。

- 身份采集要求：实际未用匹配作业用品外退
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需原生转移接收输入来源匹配范围，继承整理附件出口不能扣不相关维护供应或创造负输入自动抵扣。

#### discarded_handbags

用真实有据废完整包、单独废背带部件碎片混合原包接收状态，整包皮织物五金水整理组分视图不可相加，缺背带损扣本身不证明整包处置上游损失。

- 身份采集要求：实际废弃手袋所含组分或原包装
- 流属性/单位：Mass / kg
- 数量规则：按 cp_handbags 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_handbags`

范围证据要求：需真实去向物料对应原生量状态净皮重接收处理范围及互斥原交接对应，表面擦痕未知重量差不是废皮包kg。

#### other_wastes

纳入真实耗擦布吸附滤材服务新增包收集碎片，接收混合流含实际载体吸液捕集材不重复加组分，不假定鞣制污泥缝切边角。

- 身份采集要求：实际耗作业用品及混合清理固体
- 流属性/单位：Mass / kg
- 数量规则：按 cp_fates 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实测接收重载体液碎片原生单位基准来源真实组成处理归属，用品采购继承整理含量不量化耗废物。

#### contained_wastewater

计真实设施作业向接收方转移游离液，与皮衬里水分清理固体吸液分开，不假定洗包鞣制整理废水。

- 身份采集要求：实际容装设施作业废水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需实际接收收集体积组成事件来源运输处理覆盖，购水湿包擦布不为废水体积代理。

#### water_outfalls

仅记真实直接跨已识别环境接收介质，容装接收转移为废物，商品水分变化不证明排口。

- 身份采集要求：实际服务水直接环境排口
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需真实地点介质原生体积区间组成去向来源换算，污渍清理事件不够作排水证据。

#### direct_species

仅按真实燃烧维护事件实测方法支持的物质物种粒径接收介质展开，皮化学整理光泽金属镀层气味老化缺失质量不量化铬挥发有机物粉尘二氧化碳。

本卡为独立身份分支`direct_species_co2_fossil_air`; `direct_species_methane_fossil_air`; `direct_species_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际有证据化学物种向接收介质释放
- 流属性/单位：Mass / kg
- 数量规则：按 cp_releases 实际唯一归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需已识别物种介质实测或兼容实际活动因子原生单位因子覆盖及必要组成去向温压基准来源一次，不通用皮整理排放因子。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| accepted_commercial_count | accepted_service | 核真实所有转售唯一最终企业验收货批N>0撤销全部十六限定，包背带kg品牌价证书不替代物理服务数。 |  |
| complete_native_bag | 商品 | 核真实型号批物料表所含单独附件衬里五金扣具皮整理原包内容原生净毛皮重水分组分单位基准方法状态取样时间来源，不通用背带数品牌规格保养寿命假设。 | coach-finished-handbag |
| actual_route_exits | handbag_wholesale | 索引真实接收条件完整性核对清理换批闲置失败拒收未完成发运验收事件至批期间，缺损污包附件需实际互斥隔离退回可用其他废弃样品路径，不默认维修清洗拆解重包磨耗测试。 |  |
| source_all_exit | 商品接口 | 核完整成品手袋供方阶段原生来源证据直接实际归属或正完整竞争全出口驱动记录量单位基准来源链接归属，含期末退回可用其他有证据损失。不仅验收不叠直接驱动不未知损失零不附件等整包损失，原换算同基线阶段损失覆盖在外关联所需新增需求一次。 |  |
| asset_all_users | 全部物理资源 | 核全部使用方期间真实兼容驱动完整资产制造维护更换寿命终结观察有来源剩余退役及不确定性敏感性更新，失败无验收资源仍归属，资产服务商N视图不重叠。 |  |
| stock_fate_freight_views | 全部物理去向 | 核供应S匹配来源、毛加未用退回或净消耗省匹配退回，不作不相关或负量扣减、不自动抵扣；整组分混清理游离液直接物种视图不可相加接收运输处理一次。货运保留货包组分水整理仅减车辆非货皮重，唯一每载总量原生换算份额N一次。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际身份完整性审核后secondary_dataset；background_dataset |
| downstream_use | 单独关联完整原成品商品来源需求损失覆盖的成品皮革手袋商人物理服务附加 |
| allowed_use | 实际原厂完整成品皮革手袋及真实物料表所含附件原包经常温自营企业验收交接 |
| excluded_use | 独立手袋足迹原皮鞣革不完整仅附件其他包材；鞣制切缝涂层维修清洗重包使用；零售代理纯仓储 |
| required_metadata | 实际型号品项批包组分物料表所含单独背带五金衬里皮整理原包原生数净皮重水分组分方法状态取样时间来源、买方标准验收时间地点期间、完整原交接归属换算基线覆盖及全部服务资产服务商货运接收归属 |
| required_quality_disclosure | 身份支持物料表完整性计量状态采样不确定性未知库存损失去向、原成品交接归属基线范围缺口全部使用方完整资产寿命假设各行证据限制 |
| update_trigger | 包材质物料表所含附件整理包装状态测量验收变化、真实维修清洗组装重包使用路线、来源交接归属覆盖服务商资产货运处理换算法变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-handbag-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025),29220 handbags and61056 leather-goods wholesale including2831/291/292. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类支持，所述成品皮革手袋批发比全部61056皮毛旅行货物范围较窄。 |
| coach-finished-handbag | official_guidance | Coach Tabby Shoulder Bag26 CH857, actual public manufacturer Product Details. https://www.coach.com/products/tabby-shoulder-bag-26/CH857-B4/HA.html?COHNA=true | 仅实际成品皮衬里五金扣具可拆背带配置完整性问题，不通用品牌型号尺寸价格背带数皮种合金整理化学包装净质量携用寿命保养鉴真默认。 |
