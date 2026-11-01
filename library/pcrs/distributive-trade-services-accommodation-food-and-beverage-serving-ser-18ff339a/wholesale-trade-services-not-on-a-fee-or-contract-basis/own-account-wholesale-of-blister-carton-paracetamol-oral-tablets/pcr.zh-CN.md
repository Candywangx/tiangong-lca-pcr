---
pcr_id: pcr.own-account-wholesale-of-blister-carton-paracetamol-oral-tablets
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原厂泡罩纸盒装单活性成分对乙酰氨基酚口服片剂自营批发

## 1. 范围与适用性

适用于原厂已放行单活性成分对乙酰氨基酚口服片剂，实际完整原泡罩及纸盒包装，经商人所有转售常温物理企业批发。记真实品项批号标签规格或实测含量及基准、包片对应整片净毛皮质量辅料包装证据、封装效期实际标示储存验收条件。排除原料活性成分复方药液体其他剂型、配制混配压片、商人开泡罩分片调配重包新增检测冷藏、临床治疗使用零售收费代理纯仓储。既有来源批记录不创造新增商人检测。

本服务排除全部实际完整活性成分辅料供应配制压片成品放行原泡罩纸盒制造，包括真实损失对应上游。完整链就绪前需以匹配原生数量单位状态换算互斥终端归属和相同基线阶段损失覆盖，单独量化完整原成品交接需求调整，在外关联一次。真实商人物理资源声明接收运输处理计一次。活性剂量片数包数治疗疗效货币均非参考服务。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.own-account-wholesale-of-blister-carton-paracetamol-oral-tablets |
| classification_refs | CPC3 61073药品批发，352组内35260成品单活性成分对乙酰氨基酚口服片剂较窄范围 |
| covered_products | 实际原泡罩纸盒已放行单活性成分对乙酰氨基酚口服片剂常温自营企业货批服务 |
| excluded_products | 原料活性成分复方其他剂型；制造开封分片调配重包新增检测冷链临床使用零售代理纯仓储 |
| representative_product | 实际已放行品项批及原生每片活性成分含量基准整片辅料水包装量、封装效期条件至最终商业交接 |
| production_route | 完整已放行原泡罩纸盒供方交接 -> 商人所有权接收常温库存条件装卸 -> 最终企业验收转售 |
| market_state | 物理服务数量，包片活性成分辅料水包装层量为独立非交换商品审计，不按剂量输出 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成原厂泡罩纸盒装单活性成分对乙酰氨基酚口服片剂自营批发货批 |
| How much | 1 Item(s) |
| How well | 实际已放行单活性成分对乙酰氨基酚口服片剂品项每片活性成分含量基准封装效期数量条件最终企业验收，不保证临床疗效治疗监管或剩余寿命 |
| How long or cycle | 真实接收到最终验收、独立库存报告期间完整资产阶段，无验收资源保留 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成原厂泡罩纸盒装单活性成分对乙酰氨基酚口服片剂自营批发货批 |
| reference_flow_property | Count `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | Count unit group `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; merchant_purchase_ownership_resale; actual_business_buyer; FINAL_gate_time_source_reversals; actual_SKU_batch_release_evidence; single_active_paracetamol_oral_tablet; label_analytical_strength_unit_basis_source; actual_pack_tablet_genealogy; whole_tablet_net_gross_tare_basis; excipient_water_pack_component_evidence; original_blister_carton_seal_state; expiry_label_date_source_conditions; independent_component_method_state_time_source; complete_released_finished_supplier_gate; actual_start_end_timezone_duration_unit_source; site_period_source_assignment_coverage_owner |

N为核撤销后唯一真实最终企业验收货批，不是供方收货发票剂片包数。N>0才除一次，N=0保留取消失败隔离未完成资源期间群证据，不除零不删负担。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule | source_ids |
| --- | --- | --- | --- | --- | --- |
| pack_tablet_strength | 商品量 | 原生包片单位的数量；真实活性成分整片组分量的质量 | 真实包片数；原生每片活性成分质量；声明质量kg | 用实际品项批包片对应及原生每片活性成分含量身份单位基准来源，每片活性成分含量×兼容真实片数经有来源单位换算可量化所定义活性成分视图，不为整片辅料包装重；仅来源方法需要且未已覆盖时应用含量校正，不固定每片活性成分含量片数或商人开封检测。 | zentiva-paracetamol-original-pack |
| component_water_basis | 独立组分水分记录 | 质量；实际无量纲水分数或水非水比 | 实际质量单位；明确湿干基的水分数比 | 各独立活性成分辅料整片水包装层值需原生单位基准方法状态取样时间来源代表范围。仅水w_wet=m_water/m_as_received时，m_dry=m_as_received*(1-w_wet)。若同一样品定义r_dry=m_water/m_nonwater，则w_wet=r_dry/(1+r_dry)；报告百分比先以明确原生因子转比。含其他挥发物的干燥失重不自动为水，不兼容未知定义阻止此换算，不默认零。 |  |
| native_conversion | 全部物理测量 | 真实原生属性和量纲兼容目标属性 | 原生 -> 有明确因子单位的兼容目标单位 | 实际换算需因子单位基准方法状态时间来源匹配品项批数量覆盖，密度体积需真实密度单位温度温度单位来源，片剂规格不为毛货载重，来源包装层构造效期不为通用数量因子。 |  |
| FINAL_service_denominator | 参考及清单 | 最终服务分母的数量；各真实行原生物理属性 | Item(s)分母；各行物理单位每Item(s) | 核商人购买所有转售企业买方最终交接来源撤销唯一验收N，完整直接全部使用方期间归属保留取消失败未完成资源，再归属总量除正最终N一次，N=0资源保留不除，数量支持非片剂活性成分服务身份。 |  |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 实际供方已放行单活性成分对乙酰氨基酚口服片剂批、完整原厂家泡罩纸盒，真实每片活性成分含量基准整质量对应封装效期条件证据 |
| starting_condition_role | 物理批发继承完整成品药品商品，不是原料活性成分新配调剂或临床消耗材料 |
| product_classification_scope | 较窄61073仅所述35260口服片形式，不覆盖全部352药品剂型路线 |
| recursive_input_rule | 交易片剂活性成分辅料水原泡罩纸盒及真实退回隔离期末库存为非交换商品审计，不为服务消耗配方化学品新包装。 |
| upstream_dataset_requirement | 独立完整匹配供方交接含真实活性成分辅料制造配制压片相关整理成品批放行原泡罩纸盒制造等，仅原对乙酰氨基酚活性成分或成分篮不完整。 |
| disclosure | 实际批品项每片活性成分含量身份单位基准来源整片组分水定义包装对应封装效期条件最终交接时间、原生来源终端需求基线覆盖和服务资产服务商货运接收归属未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_gate_once | 商品接口 | 全部完整药品活性成分辅料配制压片放行原泡罩纸盒制造包括实际损失上游在服务外，完整原交接需求及相同基线阶段损失覆盖单独量化关联一次，真实服务接收运输处理一次。 |  |
| source_example_limits | tablet_wholesale | 厂家SmPC仅支持实际单活性口服片身份、辅料原包泡罩纸盒和储存效期核对问题，示例每片活性成分含量不提供整片重，不套用包装数量层构造效期，不引入临床剂量疗效用药或监管保证。 | zentiva-paracetamol-original-pack |
| actual_status_fate | 商品状态 | 隔离效期破损封装退回样品整包废弃、组分水变化未知差额和直接物种不同，过期不自动处置、活性含量不证明排放或零释放。新增开封检测分片重包冷链需显式路线复核。 |  |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| tablet_wholesale | 原厂泡罩纸盒片剂商人接收与最终交接 | required | 实际已放行原泡罩纸盒单活性成分对乙酰氨基酚口服片自营最终企业交接 | 物理接收批封装效期条件库存装卸商业验收，无开封检测调配临床使用 | `accepted_service` |

实际商业货批交叠仓库批次连续辅助期间。链接真实接收文件目视批号品项封装效期条件核对、既有测量来源记录、设施清理换批闲置取消失败拒收隔离未完成发运最终验收至批期间。不要求开每泡罩或新增检测。真实破包破片状态偏差效期退回需唯一实际隔离供方退回期末待决可用其他出口或废弃接收决定；样品移除退回必须保留数量去向范围归属，不能隐藏新增开封检测分片调配重包。N=0资源仍归属期间有据群，不除零不删，正最终N才一次归一。

### 过程：原厂泡罩纸盒片剂商人接收与最终交接 (`tablet_wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_energy 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需真实计量区间原生来源完整全部使用方事件归属含闲置失败期间服务商覆盖，不用压片能源每剂冷库默认。

###### 实际液态处理自来水供给 (`facility_water_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实用途水源原生体积区间独立有据去向，商品水分收水不量化废水。

###### 实际独立记录的聚乙烯包装薄膜 (`new_outer_protection_pe_film`)

仅适用于实际独立供应、供本服务新增包裹或衬垫使用的聚乙烯薄膜，须确认实际聚合物配方与薄膜净量。该身份为工厂门通用生产组合，仍须记录实际供给门、供应方及另负责任的交付负荷。不预设LDPE/HDPE牌号、再生比例、厚度或用量。PVC、PET、PP、多层复合材料、胶黏标签、填充包装及继承商品包装仍按余项独立身份处理；整体供应与组分不得重复计量，不预设发生。

- 选定流：聚乙烯薄膜 `e64eb06c-6dc9-45f1-b003-3dc6c44b27e2`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需新增原包层级实际品项净重或有来源原生数面积换算库存，不通用箔聚合物纸层质量或全新零售纸盒。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实品项用途净库存组成及事件时耗载体吸液捕集片包残余证据，商品成分表不是清理排放量。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需原生期初净收期末互斥实测去向及必要真实密度温度换算来源，收货本身不是燃烧。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成原厂泡罩纸盒装单活性成分对乙酰氨基酚口服片剂自营批发货批 (`accepted_service`)

一个唯一最终真实所有转售企业验收商业货批，商品为供方已放行单活性成分对乙酰氨基酚口服片剂及实际原泡罩纸盒，真实品项每片活性成分含量基准批包装对应封装效期条件时间限定服务，不是活性成分剂量整片数治疗疗效价格。

- 选定流：已完成原厂泡罩纸盒装单活性成分对乙酰氨基酚口服片剂自营批发货批
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：需真实商人购买所有转售买方最终交接来源撤销及批品项、与整质量分开的实际标签规格与实测含量基准、原生包片数封装效期储存条件来源，不通用每片活性成分含量包装数效期层构造。

##### 废物流

###### 废弃完整泡罩纸盒装对乙酰氨基酚口服片包装整件 (`discarded_tablet_packs_atomic_case`)

仅在实际独立记录确认“废弃完整泡罩纸盒装对乙酰氨基酚口服片包装整件”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`discarded_tablet_packs`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃完整泡罩纸盒装对乙酰氨基酚口服片包装整件
- 流属性/单位：Mass / kg
- 数量规则：按 cp_tablets 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tablets`

范围证据要求：需真实状态事件接收决定原生量净皮重批对应处理覆盖原成品交接当量，整废包保留片剂不额外计活性成分包装废物交换。

##### 基本流

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| physical_all_user_events | 全部服务资源 | 用真实直接事件或量×兼容目标驱动/正完整全部使用方驱动及原生单位基准方法状态时间来源，全部客户期间互斥归属。保留闲置换批取消失败拒收隔离未完成资源，最终N为核撤销后唯一真实企业验收，N>0才归属总量/N一次，N=0保留负担期间群证据不除，不默认剂量价格分配。 |  |
| complete_original_terminal | 商品接口 | 各完整实际供方批状态选真实直接实测追溯归属交接需求及原生量单位基准方法状态时间来源直接证明互斥终端链接，或真实来源交接量×目标驱动/来源全终端驱动。正完整分母汇总兼容竞争最终验收可用其他退回期末结转有证据真实损失记录，各量单位基准方法状态时间来源链接归属。不仅验收不未知损失零不叠直接驱动，来源归属基线新增量原交接换算匹配实际完整已放行片包状态，明确互斥损失归属同基线阶段损失覆盖后所需新增需求在外关联一次。 |  |
| service_supply_stock | 服务用品 | S=归属期初+净外收-含留存回收期末，二选一：(1)毛S/N记输入，实际匹配未用外退量/N单列输出；(2)净耗用(S-退回)/N记输入，省略对应退回输出。不得把退回量加到输入或重复抵扣。内部循环回收留存为库存，真实废弃消耗输入保留负担，不以继承活性成分片包扣不相关当期用品负输入自动抵扣。 |  |
| complete_life_assets | 资产服务商 | 以实际已用驱动/完整全寿命全部使用方驱动及兼容原生单位基准方法状态时间来源分配完整制造维护真实更换寿命终结，观察历史有来源剩余退役不确定性敏感性更新全部使用方期间明确，资产当量或完整寿命服务商二选一不叠不重复N。 |  |
| nonadditive_actual_fates | 商品服务去向 | 保留片剂整包、整片碎片活性成分辅料水泡罩层纸盒和混清理载体液颗粒与游离液直接物种为不可相加互斥视图，核服务商覆盖后真实接收运输处理一归属。隔离过期退回在有据真实接收去向前仍状态，不自动废弃排放，不回收抵扣，无验收资源仍在最终N外。 |  |
| commodity_link_scope | nonexchange commodity interface | 原交接库存及已完成外部集成保留实际记录的原始数量。声明source_assignment_scope_id、实际target_consignment_ids/target_cohort_id及source_assignment_quantity_basis，分为single_consignment_case、target_cohort_total或already_per_reference。仅当正same_target_scope_N准确覆盖已分配目标范围时，目标群原始总量才按source_link_per_service_quantity=source_link_assigned_raw_quantity/same_target_scope_N形成与1个accepted_service组合且仅用一次的接口，须原生单位状态来源及接收撤销证据。单货批N=1与已每参考量不再除一次。外部实际库存或阶段集成记录不得按服务N缩量，也不得以整个来源群N去除较窄目标已分配量；保留原始量与明确仅一次关联。 |  |


## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | tablet_wholesale | 最终验收服务 | 真实商人最终验收 | consignment_id; merchant_id; purchase_evidence; ownership_evidence; resale_evidence; business_buyer_id; acceptance_gate; acceptance_time; acceptance_source; reversal_ids; reversal_status_source; unique_FINAL_accepted_ids; N; N_period_cohort; model_SKU_lot_ids; pack_tablet_component_genealogy; actual_BOM; completeness_condition_evidence; buyer_criteria_source; start_time; start_time_source; end_time; end_time_source; time_zone; time_unit; duration; duration_unit; duration_method; duration_source; site_id; campaign_id; reporting_period; cancelled_failed_rejected_unfinished_ids; no_acceptance_resource_owner; attribution_owner | 追真实商人购买所有转售企业买方最终交接时间来源已核撤销标识，仅计指定期间群唯一真实最终商业货批，不收货发票包片剂数。保留取消失败隔离未完成资源归属及原生时间戳时区时长方法单位来源，N=0保留证据负担不除。 | 真实最终数量Item(s)、时间戳原生时长 | 每真实事件或计量区间，原记录可追溯 | 真实接收至最终验收、库存报告期间及适用完整资产寿命 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖和不确定性 |
| cp_tablets | tablet_wholesale | 非交换片包库存真实废弃 | 已放行片剂规格含量组分包装审计 | source_lot_id; model_SKU; batch_id; batch_release_evidence; single_active_identity; oral_tablet_form_evidence; pack_ids; blister_ids; tablet_ids; pack_tablet_genealogy; genealogy_method; genealogy_source; actual_BOM; API_identity; API_label_strength; API_label_strength_unit; API_label_strength_basis; API_label_strength_source; API_analytical_strength; API_analytical_strength_unit; API_analytical_strength_basis; API_analytical_strength_method; API_analytical_strength_state; API_analytical_strength_sample_time; API_analytical_strength_source; API_assay_scope; API_assay_coverage; strength_unit_conversion_factor; strength_conversion_unit; strength_conversion_basis; strength_conversion_method; strength_conversion_state; strength_conversion_time; strength_conversion_source; tablet_count; tablet_count_unit; tablet_count_basis; tablet_count_method; tablet_count_state; tablet_count_time; tablet_count_source; pack_count; pack_count_unit; pack_count_basis; pack_count_method; pack_count_state; pack_count_time; pack_count_source; tablets_per_actual_pack; pack_tablet_conversion_unit; pack_tablet_conversion_basis; pack_tablet_conversion_method; pack_tablet_conversion_state; pack_tablet_conversion_time; pack_tablet_conversion_source; excipient_identity; excipient_source; original_blister_layer_identity; original_carton_inclusions; seal_state; seal_state_source; expiry_label_date; expiry_date_source; actual_condition_record; condition_unit; condition_method; condition_time; condition_source; stated_storage_condition_source; receiver_disposition_decision; receiver_decision_source; buyer_criteria_source; m_as_received; m_as_received_unit; m_as_received_basis; m_as_received_method; m_as_received_state; m_as_received_sample_time; m_as_received_source; water_definition; nonwater_definition; water_fraction; water_fraction_unit; water_fraction_basis; water_fraction_method; water_fraction_state; water_fraction_sample_time; water_fraction_source; dry_water_ratio; dry_water_ratio_unit; dry_water_ratio_basis; dry_water_ratio_method; dry_water_ratio_state; dry_water_ratio_sample_time; dry_water_ratio_source; percent_conversion_factor; percent_conversion_unit; percent_conversion_basis; percent_conversion_method; percent_conversion_state; percent_conversion_time; percent_conversion_source; LOD_value; LOD_unit; LOD_basis; LOD_method; LOD_state; LOD_sample_time; LOD_source; LOD_other_volatiles_evidence; actual_native_quantity; native_unit; quantity_basis; quantity_method; quantity_state; quantity_sample_time; quantity_source; gross_mass; gross_unit; gross_basis; gross_method; gross_state; gross_sample_time; gross_source; packaging_tare; packaging_unit; packaging_basis; packaging_method; packaging_state; packaging_sample_time; packaging_source; net_finished_mass; net_mass_unit; net_mass_basis; net_mass_method; net_mass_state; net_mass_sample_time; net_mass_source; component_identity; component_quantity; component_unit; component_basis; component_method; component_state; component_sample_time; component_source; sample_representativeness; moisture_value; moisture_unit; moisture_basis; moisture_method; moisture_state; moisture_sample_time; moisture_source; conditioning_state; temperature; temperature_unit; temperature_source; opening; supplier_external_receipts; buyer_returns; closing; business_buyer_dispatch; supplier_returns; useful_other_exits; actual_discard; net_sample_removal; unknown_residual; stock_unit; stock_basis; stock_method; stock_state; stock_sample_time; stock_source; disposition_ids; receiver; treatment_coverage; actual_source_gate_quantity; source_gate_unit; source_gate_basis; source_gate_method; source_gate_state; source_gate_sample_time; source_gate_quantity_source; source_complete_stage_evidence; assignment_view; assigned_gate_demand; assigned_gate_demand_unit; assigned_gate_demand_basis; assigned_gate_demand_method; assigned_gate_demand_state; assigned_gate_demand_sample_time; assigned_gate_demand_source; direct_assignment_evidence; exclusive_terminal_links; target_driver; target_driver_unit; target_driver_basis; target_driver_method; target_driver_state; target_driver_sample_time; target_driver_source; source_all_terminal_driver; source_all_terminal_driver_unit; source_all_terminal_driver_basis; source_all_terminal_driver_method; source_all_terminal_driver_state; source_all_terminal_driver_sample_time; source_all_terminal_driver_source; competing_terminal_driver_records; terminal_record_quantity; terminal_record_unit; terminal_record_basis; terminal_record_method; terminal_record_state; terminal_record_sample_time; terminal_record_source; terminal_record_link; terminal_record_owner; original_gate_conversion_method; original_gate_conversion_factor; original_gate_conversion_unit; original_gate_conversion_basis; original_gate_conversion_state; original_gate_conversion_time; original_gate_conversion_source; baseline_demand; baseline_demand_unit; baseline_demand_basis; baseline_demand_method; baseline_demand_state; baseline_demand_sample_time; baseline_demand_source; baseline_stage_loss_coverage; additional_gate_demand; additional_gate_demand_unit; additional_gate_demand_basis; additional_gate_demand_method; additional_gate_demand_state; additional_gate_demand_sample_time; additional_gate_demand_source; exclusive_loss_assignment; commodity_adjustment_owner; selected_API_view; n_tablets; n_tablets_unit; n_tablets_basis; n_tablets_method; n_tablets_state; n_tablets_sample_time; n_tablets_source; q_API_per_tablet; q_API_per_tablet_unit; q_API_per_tablet_basis; q_API_per_tablet_method; q_API_per_tablet_state; q_API_per_tablet_sample_time; q_API_per_tablet_source; matched_measurement_population; water_nonwater_sample_scope; source_assignment_scope_id; source_assignment_quantity_basis; target_consignment_ids; target_cohort_id; source_quantity_already_per_reference; external_raw_integration_quantity_preserved; once_only_service_link_evidence; source_link_assigned_raw_quantity; source_link_assigned_raw_quantity_unit; source_link_assigned_raw_quantity_basis; source_link_assigned_raw_quantity_method; source_link_assigned_raw_quantity_state; source_link_assigned_raw_quantity_source; source_link_assigned_raw_quantity_sample_time; same_target_scope_N; same_target_scope_N_unit; same_target_scope_N_basis; same_target_scope_N_method; same_target_scope_N_state; same_target_scope_N_source; same_target_scope_N_sample_time; source_link_per_service_quantity; source_link_per_service_quantity_unit; source_link_per_service_quantity_basis; source_link_per_service_quantity_method; source_link_per_service_quantity_state; source_link_per_service_quantity_source; source_link_per_service_quantity_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 追真实品项批单活性口服形式放行、原泡罩纸盒物料表包片对应封装效期标示实况条件。标签规格与实测活性成分含量身份单位基准方法状态时间来源与整片辅料水包装重、检测范围已覆盖部分分开。用既有兼容来源测量，不新增商人开封检测；各原生组分毛皮净水值保留单位基准方法状态取样时间来源代表性，仅同定义样品用水湿基分数或干基水非水比，百分比先转比，含其他挥发物干燥失重不自动水。共享库存元数据适用每兼容期初收发退回期末状态废弃样品操作数，供方收货排买方退回内部循环，买方发运排其他出口，内部移动消去。隔离效期破损接收决定实际量与处置释放分开。来源归属基线新增原生量状态单位元数据、直接真实追溯或正完整竞争全终端记录含期末退回可用其他有据损失各量单位基准方法状态时间来源链接归属、有来源换算互斥损失及同基线阶段损失覆盖在外一次。  selected_API_view明确选标签或分析来源；n_tablets为该批匹配群tablet_count，q_API_per_tablet为选定每片活性成分含量，二者各有原生单位基准方法状态取样时间来源。w_wet对应仅水water_fraction，r_dry对应dry_water_ratio；m_as_received为同实际样本材料、不含包装的原接收质量，m_dry仅为扣水后的非水质量，不把其他挥发物干燥残重视为同一量。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | 真实原生包片数、每片活性成分含量整片组分质量单位、明确水基准 | 每真实事件或计量区间，原记录可追溯 | 真实接收至最终验收、库存报告期间及适用完整资产寿命 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖和不确定性 |
| cp_energy | tablet_wholesale | 电力真实燃烧 | 计量燃烧期间 | meter_id; energy_quantity; energy_unit; meter_start; meter_end; interval; source; operation_purpose; burn_quantity; burn_unit; burn_basis; burn_source; fuel_identity; conversion_factor; conversion_unit; conversion_basis; conversion_source; event_ids; period_ids; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 读真实仓库计量区间独立燃烧证据原生单位基准方法状态时间来源换算，纳照明装卸辅助闲置换批失败隔离未完成使用方期间完整全部使用方物理驱动，不暗加制造压片冷链。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 真实kWh原生燃烧量 | 每真实事件或计量区间，原记录可追溯 | 真实接收至最终验收、库存报告期间及适用完整资产寿命 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖和不确定性 |
| cp_supplies | tablet_wholesale | 服务用品匹配退回 | 原生库存来源真实去向 | supply_SKU; purpose; composition; composition_basis; composition_source; provenance_owner; period; opening; external_receipts_net; closing_including_retained_recovery; native_unit; quantity_basis; quantity_source; usable_external_return; return_unit; return_recipient; matched_input_id; matched_state_scope; internal_loop; retained_recovery; waste_quantity; waste_unit; burn_quantity; burn_unit; actual_fate_source; accounting_view; conversion_factor; conversion_unit; conversion_basis; conversion_source; density; density_unit; density_temperature; temperature_unit; density_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_share; provider_coverage; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 外收为排容器皮重净用品，共享原生单位基准方法状态时间来源约束各兼容期初收货期末回收退回去向操作数，不同组分自带单位。仅展开真实品项用途组成条件清理用品，S=期初+净收-含留存回收期末，毛输入与另记匹配未用退回输出，或净消耗并省对应出口，保留来源接收适用密度温度换算完整全部使用方驱动，继承活性成分片泡罩非服务输入。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 真实供应原生质量体积或有支持物理单位 | 每真实事件或计量区间，原记录可追溯 | 真实接收至最终验收、库存报告期间及适用完整资产寿命 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖和不确定性 |
| cp_assets | tablet_wholesale | 完整共享资产 | 完整全部使用方资产寿命 | asset_id; manufacture_scope; maintenance_scope; replacement_events; end_of_life_scope; provider_scope; consumers; periods; used_driver; used_driver_unit; used_driver_basis; used_driver_source; observed_life_driver; observed_driver_unit; observed_history_source; remaining_life_driver; remaining_driver_unit; remaining_evidence_source; termination_evidence; lifetime_all_consumer_driver; lifetime_driver_unit; lifetime_driver_basis; lifetime_driver_source; conversion_factor; conversion_unit; conversion_source; uncertainty; sensitivity; update_trigger; attribution_owner; already_per_reference; observed_driver_basis; remaining_driver_basis; conversion_basis; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; used_driver_method; used_driver_state; used_driver_sample_time; observed_driver_method; observed_driver_state; observed_driver_sample_time; remaining_driver_method; remaining_driver_state; remaining_driver_sample_time; lifetime_driver_method; lifetime_driver_state; lifetime_driver_sample_time | 记实际共享资产每使用方客户节点期间制造维护更换寿命终结，已用观察剩余寿命驱动各保留原生单位基准方法状态时间来源兼容换算、观察历史有来源剩余退役不确定性敏感性更新，资产当量或完整寿命服务商二选一N一次，不定寿命。 | 真实兼容已用观察剩余寿命单位；有支持资产当量Item(s) | 每真实事件或计量区间，原记录可追溯 | 真实接收至最终验收、库存报告期间及适用完整资产寿命 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖和不确定性 |
| cp_providers | tablet_wholesale | 物理辅助成果 | 执行物理成果覆盖 | provider_id; event_id; native_result; result_unit; result_basis; result_source; service_scope; measurement_method; sample_ids; sample_representativeness; sample_removed; sample_return; sample_fate; material_coverage; energy_coverage; asset_coverage; freight_coverage; receiver_treatment_coverage; excluded_testing_scope; period; conversion_factor; conversion_unit; conversion_source; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; attribution_owner; target_driver_basis; all_consumer_driver_basis; attribution_share; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | 核真实原生物理成果单位基准方法状态时间来源及所含材料能源资产货运接收处理，文件目视批封装效期条件或读供方放行记录不是已作新增检测开封调配，不以服务商隐藏新增测试重包临床工作，实际移除库存样品保留量退回去向范围归属，排除的操作需路线复核。 | 真实服务商原生物理成果单位 | 每真实事件或计量区间，原记录可追溯 | 真实接收至最终验收、库存报告期间及适用完整资产寿命 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖和不确定性 |
| cp_freight | tablet_wholesale | 货运 | 唯一载荷路段及该记录份额 | load_id; leg_id; cargo_ids; load_quantity; load_unit; load_basis_each_or_total; load_source; repeated_load_count; repetition_source; actual_packed_payload; payload_unit; payload_state; payload_source; vehicle_gross; vehicle_gross_unit; gross_source; vehicle_noncargo_tare; noncargo_tare_unit; tare_source; original_cargo_pack; added_cargo_pack; retained_moisture_finish; load_conversion_factor; load_conversion_unit; load_conversion_basis; load_conversion_source; distance; distance_unit; distance_source; distance_conversion_factor; distance_conversion_unit; distance_conversion_basis; distance_conversion_source; empty_return_coverage; delivered_provider_coverage; target_driver; target_driver_unit; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_source; that_record_share; unique_scope_owner; already_per_reference; gross_conversion_factor; gross_conversion_unit; gross_conversion_basis; gross_conversion_source; tare_conversion_factor; tare_conversion_unit; tare_conversion_basis; tare_conversion_source; target_driver_basis; all_consumer_driver_basis; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; payload_basis; payload_method; payload_sample_time; gross_method; gross_state; gross_sample_time; tare_basis; tare_method; tare_state; tare_sample_time; distance_basis; distance_method; distance_state; distance_sample_time; that_record_share_basis; that_record_share_source; gross_basis | 用真实包装货物或同状态车辆毛重仅减车辆非货皮重，保留整片活性成分辅料水全部原新增货包，不加组分审计。货物毛皮距换算操作数保留原生单位基准方法状态时间来源，每载乘有据次数一次，总量不变。汇总唯一载荷路段(实际包装货载kg×实际距离km×that_record_share)，该记录完整兼容全部使用方份额置求和内，再正最终N除一次，已归一不再除；核空返退回到货服务商范围，N=0货运保留不除。  gross_basis为该记录车辆加实际货物的原生实测质量范围状态，tare_basis和tare_source为仅车辆非货部分的真实范围来源，与载荷EACH/TOTAL次数基准分开；货包不作车辆皮重扣。 | 真实原生包装质量距离兼容换kg*km | 每真实事件或计量区间，原记录可追溯 | 真实接收至最终验收、库存报告期间及适用完整资产寿命 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖和不确定性 |
| cp_fates | tablet_wholesale | 取水废物排口 | 真实取水接收排口状态 | event_id; source_location; receiving_location; receiving_medium; flow_identity; native_quantity; native_unit; quantity_basis; quantity_source; interval; composition; composition_basis; composition_source; fate_basis; fate_source; mixed_receiver_mass; mixed_mass_unit; mixed_mass_basis; mixed_mass_source; carrier_mass; carrier_unit; carrier_basis; carrier_source; absorbed_liquid_mass; absorbed_liquid_unit; absorbed_liquid_basis; absorbed_liquid_source; collected_fragment_mass; collected_fragment_unit; collected_fragment_basis; collected_fragment_source; free_liquid_volume; liquid_volume_unit; liquid_volume_source; density; density_unit; density_temperature; temperature_unit; density_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; receiver; receiver_transport_scope; receiver_treatment_scope; provider_coverage; nonadditive_view; attribution_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; record_method; record_state; record_sample_time; record_source; carrier_method; carrier_state; carrier_sample_time; absorbed_liquid_method; absorbed_liquid_state; absorbed_liquid_sample_time; collected_fragment_method; collected_fragment_state; collected_fragment_sample_time; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time | 独立量真实水源取水接收混固容装游离液直接排口，载体吸液捕集片包颗粒各有原生单位基准方法状态时间来源，整混流组分商品视图不可相加。真实体积组成去向接收运输处理和适用密度温度换算需来源，共享元数据仅兼容量，购水片成分非废水。 | 真实原生质量体积兼容换kg/m3 | 每真实事件或计量区间，原记录可追溯 | 真实接收至最终验收、库存报告期间及适用完整资产寿命 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖和不确定性 |
| cp_releases | tablet_wholesale | 直接物种 | 真实物种接收介质证据 | event_id; species_identity; particle_size; receiving_medium; measurement; measurement_unit; measurement_basis; measurement_source; activity; activity_unit; activity_basis; activity_source; factor; factor_unit; factor_basis; factor_source; factor_coverage; burn_fraction; burn_fraction_source; composition; composition_unit; composition_basis; composition_source; fate_fraction; fate_basis; fate_source; conversion_factor; conversion_unit; conversion_basis; conversion_source; temperature; temperature_unit; temperature_source; pressure; pressure_unit; pressure_source; time_interval; period; provider_coverage; nonadditive_owner; target_driver; target_driver_unit; target_driver_basis; target_driver_source; all_consumer_driver; all_consumer_driver_unit; all_consumer_driver_basis; all_consumer_driver_source; attribution_share; attribution_owner; record_method; record_state; record_sample_time; record_source; target_driver_method; target_driver_state; target_driver_sample_time; all_consumer_driver_method; all_consumer_driver_state; all_consumer_driver_sample_time; measurement_method; measurement_state; measurement_sample_time; activity_method; activity_state; activity_sample_time; factor_method; factor_state; factor_reference_time; composition_method; composition_state; composition_sample_time; fate_method; fate_state; fate_time; conversion_method; conversion_state; conversion_time | 以实测或兼容真实活动因子方法识别实际化学物种粒径介质及原生单位基准方法状态时间来源、明确系数覆盖。完整物种系数已含组成去向比例不得再乘，仅必要兼容比例气体浓度换算一次含温压单位来源，标签规格成分效期干燥失重不是释放量零证据。 | 真实物种原生量兼容换kg | 每真实事件或计量区间，原记录可追溯 | 真实接收至最终验收、库存报告期间及适用完整资产寿命 | 实际商人设施全部使用方及声明服务商接收方 | per reference flow | 原始量单位基准方法状态取样时间来源、校准代表性覆盖和不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| FINAL_resource_normalization | 全部服务行 | N=真实商人购买所有转售且核撤销后唯一真实最终企业验收数。直接追溯或真实量×兼容目标驱动/正完整全部使用方驱动保留全部取消失败隔离未完成闲置其他客户期间负担及原生单位基准方法状态时间来源。仅N>0才归属总量/N一次，N=0保留真实负担期间群证据不除。 | cp_consignment; cp_energy; cp_supplies; cp_assets; cp_providers; cp_freight; cp_fates; cp_releases | 实际每参考物理服务清单 |  |
| pack_tablet_stock | 商品审计 | 兼容原生库存期初+供方外收+买方退回-期末-企业买方发运-供方退回-可用其他出口-真实废弃-净样品移除=未知差额。供方收货排买方退回内部移动、买方发运排其他出口、内部移动消去，匹配批包片组分对应真实状态接收决定。保留片剂整包与整片活性成分辅料水层材不可相加，过期隔离破损库存差额不自动废物活性成分释放零。 | cp_tablets | 真实库存状态互斥出口未知状态 |  |
| API_water_views | 非交换组分审计 | 仅匹配真实活性成分身份每片活性成分含量单位基准检测覆盖和片群时，m_API=n_tablets×q_API_per_tablet×strength_unit_conversion_factor，不为整片重。仅水w_wet=m_water/m_as_received时，m_dry=m_as_received*(1-w_wet)。同定义样品r_dry=m_water/m_nonwater转w_wet=r_dry/(1+r_dry)，报告百分比先按记录原生因子转比。已含检测校正不再乘，含其他挥发物干燥失重不自动水，未知不兼容基准阻止换算。 | cp_tablets | 独立真实活性成分和水非水审计视图，不再加整质量 |  |
| complete_original_demand | 商品接口 | 选实际有来源直接实测追溯原交接归属量互斥终端证明，或原来源实际量×目标驱动/全终端驱动。全终端驱动>0且等完整兼容竞争最终验收可用其他退回期末结转有据损失记录，各量单位基准方法状态时间来源链接归属，不仅验收不叠直接驱动。来源归属基线新增原生数量单位状态元数据有来源换算须匹配实际已放行片包，互斥损失归属同已覆盖基线阶段损失需求明确后在外关联所需新增完整成品需求一次。 | cp_tablets; cp_consignment | 单独量化完整已放行原交接需求损失 |  |
| unique_record_freight | freight | 用唯一载荷路段实测包装货物或同状态毛重仅减车辆非货皮重，保留整片活性成分辅料水全部货包不重复组分。每载乘真实有据次数一次，总量不变，原生换算后归属kg*km=sum(唯一载荷路段：实际包装货载kg×实际距离km×that_record_share)，该记录完整兼容全部使用方份额放求和内，正最终N除一次、已归一不再除，N=0货运保留不除。 | cp_freight; cp_consignment | 实际唯一每参考货运 |  |
| actual_species_method | direct_species | 真实物种粒径介质量=实测或兼容真实活动×因子及原生单位基准方法状态时间来源覆盖。完整物种系数已含组成去向比例不得再乘，仅必要兼容比例气体浓度换算一次并有温压单位来源，每片活性成分含量含量效期干燥失重不为排放或零证据。 | cp_releases; cp_energy; cp_tablets | 真实有据每参考物种 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| identity_strength_scope | 全部身份 | 最终交换前核真实已放行片剂每片活性成分含量基准包装对应及各物理服务材料服务商水源接收物种身份支持，数量支持与商品已完成商人服务身份独立。 | 真实批品项放行商人记录及已核原生支持详情 |
| native_component_definitions | 全部实测操作数 | 来源归属基线新增需求、每片活性成分含量数量检测范围、整片辅料水包、资产已用观察剩余寿命及货运毛皮货物距离份额各需兼容原生单位基准方法状态时间来源。仅水湿干定义同样本、百分比换算其他挥发物干燥失重证据明确，缺记录不合理化新增检测默认零。 | cp_tablets; cp_assets; cp_supplies; cp_freight; cp_fates; cp_releases |
| coverage_actual_status | 全部接口 | 披露真实最终撤销群和批封装效期条件不确定性、未知库存损失去向来源当量终端基线缺口服务商接收完整资产寿命假设逐行证据需求，隔离过期需真实去向，N=0资源保留；候选方法非临床监管最终链就绪。 | 真实覆盖原生记录来源寿命证据敏感性更新 |

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_energy`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_energy`; 实际来源关联原生记录 |
| facility_water | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`facility_water`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| new_outer_protection | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`new_outer_protection`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`operating_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| fuel_supply | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`fuel_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_providers`识别`provider_services`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`environmental_water`内每项实际inputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| usable_supply_returns | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_supply_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| discarded_tablet_packs | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_tablets`识别`discarded_tablet_packs`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`discarded_tablet_packs_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_tablets`; 实际来源关联原生记录 |
| other_wastes | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`other_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| contained_wastewater | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`contained_wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| water_outfalls | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_fates`识别`water_outfalls`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_fates`; 实际来源关联原生记录 |
| direct_species | tablet_wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_releases`识别`direct_species`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_releases`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

用实际仓库照明装卸业务辅助计量，活性成分辅料制造配制压片放行泡罩包装新增检测冷藏患者治疗不是此常温商人作业。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际片剂批发仓库电力
- 流属性/单位：Energy / kWh
- 数量规则：按 cp_energy 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需真实计量区间原生来源完整全部使用方事件归属含闲置失败期间服务商覆盖，不用压片能源每剂冷库默认。

#### facility_water

记真实设施卫生辅助供应，与片内水分继承泡罩纸盒水分下游使用分开，不假定商人配制洗片开封器具冲洗。

本卡为独立身份分支`facility_water_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际购入仓库辅助水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实用途水源原生体积区间独立有据去向，商品水分收水不量化废水。

#### new_outer_protection

仅真实服务新增外箱膜隔材绑带发运标签为输入，原泡罩层说明书纸盒仍继承成品交接，不每批新主包装，周转托盘箱用寿命服务。

本卡为独立身份分支`new_outer_protection_pe_film`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际新增发运保护标签
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需新增原包层级实际品项净重或有来源原生数面积换算库存，不通用箔聚合物纸层质量或全新零售纸盒。

#### operating_supplies

按原生身份使用展开真实设备润滑设施清洁擦布吸附滤材办公耗材，继承活性成分辅料泡罩材不是当期服务化学输入，不规定片剂加工检测重包。

本卡为独立身份分支`operating_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际设施维护及条件性事件清理用品
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实品项用途净库存组成及事件时耗载体吸液捕集片包残余证据，商品成分表不是清理排放量。

#### fuel_supply

实际牌号供应库存与燃烧可用退回未燃废物分开，核雇用装卸货运所含，厂家合成压片燃料在服务外。

本卡为独立身份分支`fuel_supply_diesel_supply`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际自有仓库装卸燃料库存
- 流属性/单位：Volume / L
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需原生期初净收期末互斥实测去向及必要真实密度温度换算来源，收货本身不是燃烧。

#### provider_services

以原生物理成果用已作装卸仓储文件目视批号封装效期条件核对和设施业务辅助，读取批放行记录不是新增活性成分检测开片检测调配临床服务。

- 身份采集要求：实际物理片剂批发辅助成果
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_providers 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据要求：需真实成果单位方法来源及所含材料能源资产货运处理范围，追既有测量记录不以通用服务商引入开封检测，新增此操作需明确路线复核。

#### shared_assets

跨全部使用方期间完整制造维护更换寿命终结纳真实设施货架装卸计量信息周转箱托盘，药品商品原泡罩不是仓库资产。

- 身份采集要求：全寿命共享仓库周转装卸资产
- 流属性/单位：Count / Item(s)
- 数量规则：按 cp_assets 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据要求：需任务已用观察剩余寿命驱动各原生单位基准方法状态时间来源、观察有据剩余退役不确定性敏感性更新，不定寿命每发运全新托盘。

#### freight

货物含实际整片活性成分辅料水及原新增货包留存状态，同状态实测车辆毛重仅减车辆非货皮重，核供方到货服务商空返覆盖。

- 身份采集要求：实际原包装片剂及服务货运
- 流属性/单位：Mass*distance / kg*km
- 数量规则：按 cp_freight 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据要求：需唯一载荷路段货载毛皮距每载总量原生因子及该记录份额置求和内，仅活性成分每片活性成分含量不供整片货载kg。

#### environmental_water

仅真实商人运营环境提取列此，与购水实测商品水分厂家加工水分开。

- 身份采集要求：实际直接分水源仓库取水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需真实水源地点区间原生测量换算边界，含水片剂湿纸盒不确立取水。

#### usable_supply_returns

仅真实同范围独立供应品项状态退回为服务出口，净消耗输入省对应退回交换，内部循环回收留存材料为期末，药品泡罩纸盒退回仍非交换商品库存。

- 身份采集要求：实际未用匹配作业用品外退
- 流属性/单位：Mass / kg
- 数量规则：按 cp_supplies 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需真实接收原生转移匹配供应来源，不以继承活性成分商品包退回扣不相关当期用品负输入自动抵扣。

#### discarded_tablet_packs

以真实接收去向量状态记保留片剂整废包、真实单片碎片原包残余，整包整片活性成分辅料水层材视图不可相加。隔离过期破泡罩本身不确立处置量活性成分释放或默认替换库存。

- 身份采集要求：实际废弃片剂包整片碎片或原包装
- 流属性/单位：Mass / kg
- 数量规则：按 cp_tablets 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_tablets`

范围证据要求：需真实状态事件接收决定原生量净皮重批对应处理覆盖原成品交接当量，整废包保留片剂不额外计活性成分包装废物交换。

#### other_wastes

记真实耗擦布吸附滤材服务新增包事件残余，载体吸液捕集片包颗粒在同一接收混流内，不虚构配制污泥检测废物制造粉尘。

- 身份采集要求：实际耗用品及混合仓库清理残余
- 流属性/单位：Mass / kg
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需接收混重各载体液碎屑原生单位基准方法状态时间来源组成处理范围，新擦布收货成分存在不量化耗残余。

#### contained_wastewater

计真实设施作业收集转移游离液，与清理固体吸液片水继承包装分开，不假定片制造清洗检测废水。

- 身份采集要求：实际容装设施作业废水
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需真实收集接收原生体积组成事件来源接收运输处理，不以供水湿擦布重药品水分代理。

#### water_outfalls

仅表示真实直接向已识别环境介质排放，容装接收转移为废物，患者使用排泄厂家排水在商人作业外。

- 身份采集要求：实际直接环境仓库水排口
- 流属性/单位：Volume / m3
- 数量规则：按 cp_fates 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_fates`

范围证据要求：需真实地点区间介质原生体积组成去向证据换算，收水废泡罩不证明直接排口。

#### direct_species

仅以实测兼容方法按真实用燃维护事件化学物种粒径接收介质展开，每片活性成分含量辅料表水分过期干燥失重未知质量差既非活性成分排放因子也非零释放证据。

- 身份采集要求：实际有证据服务事件的分物种释放
- 流属性/单位：Mass / kg
- 数量规则：按 cp_releases 实际互斥归属物理量 / N
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_releases`

范围证据要求：需真实物质介质实测或兼容活动因子身份原生单位基准方法状态时间来源覆盖，完整物种系数已覆盖比例不得再乘，真实组成去向换算仅需要时一次。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_FINAL_merchant | accepted_service | 需真实merchant_id购买所有转售明确企业买方最终交接时间来源已核撤销唯一最终N及全部十六限定，收货发票剂片包数不足，N>0才归一，N=0取消失败隔离未完成资源保留期间群证据。 |  |
| released_native_presentation | 商品 | 核真实单活性成分对乙酰氨基酚口服片放行品项批、标签规格与实测含量单位基准检测覆盖与整片辅料水包分开，原生数对应封装效期标示实况条件来源。不默认示例每片活性成分含量效期包装数层质量剂量治疗或新增开封检测冷链。 | zentiva-paracetamol-original-pack |
| water_definition_match | 水非水审计 | dry=m_as_received*(1-w_wet)中w_wet仅水/原接收质量，干基水非水比仅匹配实际定义样本且百分比先转比时用r_dry/(1+r_dry)。其他挥发物干燥失重非水证据，不兼容未知基准阻换算不零，活性成分或整片检测覆盖不重复乘。 |  |
| actual_stock_routes | tablet_wholesale | 链接真实批期间接收核对清理换批闲置取消失败拒收隔离未完成发运最终事件，效期破封退回样品待决废弃需唯一真实决定接收去向范围，不自动整包损失活性成分排放、不隐藏开封测试分片调配重包。 |  |
| complete_terminal_source | 商品接口 | 核来源归属基线新增原生量单位基准方法状态时间来源、有来源包片组分当量和直接追溯或正完整全终端竞争记录含期末退回可用其他有据损失，各量单位基准方法状态时间来源链接归属。不仅验收不叠直接驱动、互斥损失归属同基线阶段损失覆盖，所需完整已放行片包需求在外一次。 |  |
| assets_stock_freight_fates | 全部资源 | 核全部使用方期间完整资产及各已用观察剩余寿命原生驱动、观察有据剩余退役不确定性更新、服务商资产N范围一归属。用品毛S/N记输入且匹配未用退回量/N另记输出，或净消耗并省对应出口，不作不相关或负量抵扣；保留片整包组分混清理游离液物种不可相加接收运输处理一次。包装货运保留整片全部包，仅减车辆非货皮重，唯一每载总量原生因子、该记录份额置求和内后正最终N一次。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 实际身份完整性审核后secondary_dataset；background_dataset |
| downstream_use | 单独关联完整已放行成品来源需求损失覆盖的原泡罩纸盒单活性成分对乙酰氨基酚口服片物理批发附加 |
| allowed_use | 实际已放行单活性成分对乙酰氨基酚口服片及完整原厂家泡罩纸盒常温自营最终企业交接，兼容批每片活性成分含量整片组分封装效期状态证据 |
| excluded_use | 独立药品足迹剂量治疗疗效监管宣称；原料活性成分复方其他剂型；商人开封分片调配重包配制新增测试冷链临床使用；零售代理纯仓储 |
| required_metadata | 真实商人购买所有转售企业买方最终交接来源撤销N、品项批放行每片活性成分含量身份单位基准检测覆盖包片对应整片活性成分辅料水定义原泡罩纸盒封装效期条件原生测量方法状态时间来源、地点期间完整终端来源需求基线覆盖和服务资产服务商货运接收归属 |
| required_quality_disclosure | 身份支持最终撤销批每片活性成分含量检测水定义整片重包装封装效期条件不确定性、未知库存损失去向或来源当量终端基线缺口全部使用方寿命假设逐记录货运份额各行证据限制 |
| update_trigger | 活性成分配方每片活性成分含量基准检测水方法包装放行封装效期条件验收或真实开封测试重包调配冷链路线变化；来源归属覆盖服务商资产货运接收原生换算 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-pharmaceutical-wholesale | official_guidance | UNSD CPC3 explanatory notes (30 June2025),35260 medicaments and61073/group352 pharmaceutical wholesale. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类，所述已放行单活性成分对乙酰氨基酚口服片服务比全部61073药品范围窄。 |
| zentiva-paracetamol-original-pack | official_guidance | Zentiva Paracetamol500mg Tablets(P) SmPC, revision7February2025, manufacturer information on emc. https://www.medicines.org.uk/emc/product/9128/smpc | 仅实际单活性口服形式辅料原泡罩纸盒储存效期身份问题，标签每片活性成分含量不为整片重，不通用每片活性成分含量包装数层重效期临床剂量疗效使用或监管商人测试冷链默认。 |
