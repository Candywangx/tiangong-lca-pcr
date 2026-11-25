---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-solid-liquid-and-gaseous-fuels-and-relat-df647718
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 原袋米粒级无烟煤零售服务


## 1. 范围与适用性

本候选覆盖由顾客在实际混合品类实体店选择付款的原袋米粒级无烟煤。煤阶/粒级类别内任何供应商/品牌均可适用，须按实际工厂、批次、水分及完整包装配置分别建池。零售目录SKU及标称袋重仅为案例，不是现场库存证据、实测量或通用来源向量。参考为零售服务，不是燃料开采、燃烧或供热。部分核心纳入分开的失败煤及原袋来源责任、电力、保管交接、实际煤载体及实测外界转移。完整性须满足固定支持方法、真实原子供应卡、核验身份及前景证据，不声称已有实测或科学/发布批准。

## 2. 产品类别识别

| Field | Value |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-solid-liquid-and-gaseous-fuels-and-relat-df647718 |
| classification_refs | CPC3.0:62191; narrower |
| covered_products | 合格实体混合店内完整销售的原袋米粒级无烟煤；每池固定实际等级/粒径分布、水分、净重及完整包装BOM，偶发破袋/漏煤仍须记录。 |
| excluded_products | 其他煤阶/粒级及未核验供应商/批次配置；泥炭、原油气、LPG/成品油、核燃料、含蜡人造柴、散燃料零售、批发、专营燃料店、线上/邮购含线上自提、送货及现场为销售常规开袋/重装/分级/混配/加湿/干燥/燃烧；顾客交通、炉具使用和灰。 |
| representative_product | 原袋米粒级无烟煤零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 供应商发运→门店收货检查→遮护陈列储存→顾客自选收银付款→签署完整袋实物交接；纳入隔离、收集及原来源修订。 |
| market_state | 原厂未开封袋装预洗分级未燃固态无烟煤；不假定水汽密闭、纯碳、粉尘可忽略或上游影响为零。 |

## 3. 参考流

| Field | Value |
| --- | --- |
| What | 一袋合格原袋煤的收货、遮护储存陈列、收银验收及实物交接。 |
| How much | 一个最终有效不同原袋服务；Q为预先声明门店/批次/配置池此类件数。 |
| How well | 预先声明签署身份/封口及完整袋验收条件；实际净煤/水分/袋状态，绝不恒定名义40lb交换。 |
| How long or cycle | 预先声明区间/截止及追溯原池的全部后续退回/撤销/来源修订。 |
| reference_flow_link | service_output |

| Field | Value |
| --- | --- |
| Reference amount | 1 |
| Reference product flow | 一袋最终有效验收原装米粒级无烟煤的零售服务 |
| Reference flow property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| Reference unit group | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| Reference unit | Item(s) |
| Required qualifiers | 实体混合店自选/收银证据; 实际供应商/工厂/批次/米粒级配置; 原袋BOM/封口; 净湿煤及全水分方法; Q/历史; 干煤与完整袋来源责任; 实际粉尘/水/载体路径; 截止; 原分母/供应范围和局部补齐 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| m_count | service_output; original_bag; supplier_return; external_retained; internal_transfer | 物品数量 | Item(s) | 分别计实际服务、完整原空包装来源和实物填充袋交接；件数不替煤kg、能量或未定义活动。 |
| m_mass | original_coal; collected_coal; complete_bag_waste; empty_bag_waste; coal_air; water_air_out; water_air_in | 质量 | kg | 按c_mass/c_moisture/c_origin/c_dust/c_water使用实际同状态质量；供应原湿煤、原干煤来源份量、完整外运湿载体均不同，未知水分皮重不为零。 |
| m_energy | electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | c_electricity以3.6*实际归属kWh得MJ；煤名义40lb/BTU/燃时不是活动默认或合规安全限。 |

## 5. 系统边界

### 边界概化

| Field | Value |
| --- | --- |
| declared_starting_condition | 原煤与完整原袋供应商发运来源，随后实际门店收货和验收实体零售服务。 |
| starting_condition_role | foreground_boundary |
| product_classification_scope | 仅此有据无烟煤子集，不等同整分类。 |
| recursive_input_rule | 增量零售排成功S制造入场，保分开表征原F煤袋输入。仅具名保管输出不表征且物理QA；不将同零售服务递归自身。 |
| upstream_dataset_requirement | 实际供应煤装填和完整袋制造向量及核实边界属性单位原量；全入场支持处理模块具c_merge分母范围证据；未绑定不完整。 |
| disclosure | 原批规格、门店时期路线、Q、原煤袋S/F/T/O、全条件事故水分粉尘路径、局部范围、不确定性和未解身份。 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| b_route | retail | 以同期布局/照片、签署现场审计、库存及交易收据，核实具名实际实体店广泛混合品类、陈列自选、收银付款随后交接。线上/邮购含同柜台线上自提、批发、配送均不属此路线。网页库存/线上自提横幅不是现场证明。观测前须证实原袋状态和验收条件。 | un621; coles |
| b_sources | failure; residual; air | 煤与完整原袋须按c_origin独立供应向量。煤向量含开采/制备/洗选/分级和实际装填至供应商发运，排除另立账袋制造；袋向量含实际完整袋体/提手/封口/内衬/印刷/标签/胶黏剂，排煤。须核实供应阶段拆分，不得按质量拆整环境向量或假定聚合物/皮重。成功S背景仅归另声明GOODS系统；下列F输入仍表征。实际入场含F运输按c_transport另必计，供应包阶段须核实分离才完整。 | ghg2011 |
| b_incidents | retail; residual; air | 未开封不等于不漏粉或水分不变。收货、每次移动/自提及事故均查破袋、受潮、空气/排水路径、散煤/粉尘/取样。隔离损坏/未知态并排除完整验收Q。按c_mass/c_moisture/c_dust/c_water执行实际状态/路径，包括煤袋去向分化。转地面/托盘/滤器属内部库存，非外界空气排放。真实未列液体/回收Product/排放须在完整前新增具体状态/介质卡和协议，执行已固定原来源/直接载体/一次归一方法，不能假定零。 |  |
| b_facility | retail | 要求对全部纳入租赁/共用/房东区域及临时/备用设备签署全期无商品燃烧、现场化石燃料设备/搬运、制冷剂、HVAC/外购热冷证据。记录设备/责任/区域/区间/合同。未知或存在须等已审物种/状态/介质扩展才可适用；外部燃油车留设施门外并计运输。煤商品不是现场燃烧输入。 |  |
| b_support | retail | 完整服务须补齐实际运输搬运、收据/托盘/外包材料、建筑储存/货架/秤/推车/收银/照明/通风/信息/控尘资产、维修退役、网络支付行政安防和设施清洁/实验取样。执行c_transport/c_assets/c_digital/c_material/c_merge，各实际同质对象/供应方独立原子卡/协议及签署存在/不存在/未知登记。这些具体强制方法不是虚构合并服务流。实际组成/供应/数量未知阻止完整。 | ghg2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 实体零售验收及支持 | required | 实际路线及q_completion | 前景服务 | Q最终有效服务；各行每参考流 |
| failure | 原失败煤袋制造 | conditional | 实际存在；不存在须证据，未知未解 | 来源关联前景账 | Q最终有效服务；各行每参考流 |
| custody | 无新增制造的实物保管 | conditional | 实际存在；不存在须证据，未知未解 | 来源关联前景账 | Q最终有效服务；各行每参考流 |
| residual | 隔离煤及包装载体 | conditional | 实际存在；不存在须证据，未知未解 | 来源关联前景账 | Q最终有效服务；各行每参考流 |
| air | 实际外界煤尘水分转移 | conditional | 实际存在；不存在须证据，未知未解 | 来源关联前景账 | Q最终有效服务；各行每参考流 |

### 过程：实体零售验收及支持 (`retail`)

#### 输入

##### 产品流

###### 交流电 (`electricity`)

a_electricity归属实际使用点门店电力，不是煤热值。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6*E_h/Q MJ
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_energy`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 一袋最终有效验收原装米粒级无烟煤的零售服务 (`service_output`)

仅Q>0时一个服务；原身份经退回再售仍保持。

- 选定流：一袋最终有效验收原装米粒级无烟煤的零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：method_formula
- 采集协议：`cp_goods`
- 来源：ghg2011

##### 废物流

##### 基本流

### 过程：原失败煤袋制造 (`failure`)

#### 输入

##### 产品流

###### 原供应商发运原收货水分基准的米粒级无烟煤 (`original_coal`)

c_origin按原F干物质份量映回原供应湿kg，非当期废物kg或整袋kg。

- 选定流：原供应商发运原收货水分基准的米粒级无烟煤
- 流属性/单位：质量 / kg
- 数量规则：B_F_wet/Q kg
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_origin`
- 来源：

###### 某有据制造配置的完整原装米粒级无烟煤空手提袋 (`original_bag`)

实际完整袋体/提手/封口/内衬/印刷/标签/胶黏剂对象，阶段独立供应向量排煤。

- 选定流：某有据制造配置的完整原装米粒级无烟煤空手提袋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F_bag/Q Item(s)
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_origin`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：无新增制造的实物保管 (`custody`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交给具名供应商的完整原装米粒级无烟煤袋 (`supplier_return`)

实际交接/接收方及签署T后继或未定O，不产生制造抵扣。

- 选定流：交给具名供应商的完整原装米粒级无烟煤袋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_supplier/Q Item(s)
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_custody`
- 来源：

###### 截止时外部留存且无最终有效验收的完整原装米粒级无烟煤袋 (`external_retained`)

不同原ID截止状态关联原毛交接，不是另次出库或自动废物。

- 选定流：截止时外部留存且无最终有效验收的完整原装米粒级无烟煤袋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_external/Q Item(s)
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_custody`
- 来源：

###### 转具名内部非燃烧保管的完整原装米粒级无烟煤袋 (`internal_transfer`)

保留相同原煤/袋来源与签T责任，后续燃烧属另路线，不再整购供应。

- 选定流：转具名内部非燃烧保管的完整原装米粒级无烟煤袋
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_internal/Q Item(s)
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_custody`
- 来源：

##### 废物流

##### 基本流

### 过程：隔离煤及包装载体 (`residual`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 实测水分下无袋单独外运的未燃米粒级无烟煤无烟煤收集煤屑 (`collected_coal`)

c_mass下唯一实际最终同态净煤屑载体，具核实完整匹配处理，不累加实物重试退回。原干煤另QA；改态或混土制剂载体须实际具体卡。

- 选定流：实测水分下无袋单独外运的未燃米粒级无烟煤无烟煤收集煤屑
- 流属性/单位：质量 / kg
- 数量规则：W_coal/Q kg
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：

###### 作为完整废物载体接纳的原装米粒级无烟煤报废袋及其剩余煤 (`complete_bag_waste`)

c_mass下唯一实际最终同态完整填充袋净载及核实全范围处理。拒返或仅部分处理不得套此全处理量供应，实际失败另来源保留。

- 选定流：作为完整废物载体接纳的原装米粒级无烟煤报废袋及其剩余煤
- 流属性/单位：质量 / kg
- 数量规则：W_full/Q kg
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：

###### 作为一个废物载体接纳的已倒空原装米粒级无烟煤手提袋及实测附着残煤 (`empty_bag_waste`)

事故倒空载体整称，仅c_mass下实际最终同态全处理一次计量。残煤干来源另立，不重作collected_coal或把退回尝试计全处理。

- 选定流：作为一个废物载体接纳的已倒空原装米粒级无烟煤手提袋及实测附着残煤
- 流属性/单位：质量 / kg
- 数量规则：W_empty/Q kg
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_waste`
- 来源：

##### 基本流

### 过程：实际外界煤尘水分转移 (`air`)

#### 输入

##### 产品流

##### 废物流

##### 基本流

###### 来自外界空气并实测归属煤控制体吸收的水蒸气 (`water_air_in`)

核实向内转移是环境输入，不是负排放或未知负观测截零。

- 选定流：来自外界空气并实测归属煤控制体吸收的水蒸气
- 流属性/单位：质量 / kg
- 数量规则：J_water_in/Q kg
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_air`
- 来源：

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### 至外界空气的米粒级无烟煤无烟煤源悬浮颗粒物，实测总粒径覆盖 (`coal_air`)

仅c_dust核实原煤干颗粒外转，室内扬尘/沉降/滤器库存不是排放，身份须匹配实际粒径覆盖/介质。

该所选身份不声明粒径分级或化学组成。保留本卡实测完整粒径覆盖及棉纤维/煤来源归属；这不是PM2.5或PM10数量。须另核精确UUID与所选影响评价方法的表征覆盖。

- 选定流：颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：D_air/Q kg
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_air`
- 来源：

###### 水蒸气，实测煤相关向外界空气转移 (`water_air_out`)

c_water核实向外区间，湿煤减重本身不是排放。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：J_water_out/Q kg
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：`cp_air`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_electricity | electricity | 将互斥实测运行、设备预留空闲、固定设施原kWh细分并与总表对账。秤/收银/搬运/通风任务按实设备处理秒，预留带电设备灯风扇按预留设备秒，固定设施按受服务预留面积*时间。每来源N_h=E_source*d_h/sum_all_driver，同单位单驱动及全部实际受益含失败闭店空闲预留，仅合兼容kWh。总表含子表才扣。正来源驱动零/未知不完整，不改归未来销量。 | ghg2011 |
| a_once | retail; failure; custody; residual; air | 不授替代/回收信用或负排放收益。supplier_return/external_retained/internal_transfer仅物理QA不新增商品需求；original_coal/original_bag是表征F输入，不能按保管旁账排除。实际废物处理仍纳入。按c_origin/c_transport/c_assets/c_digital/c_material/c_merge保全原来源责任，不同供应ID本身不证明无重叠。 | ghg2011 |

## 8. 前景数据采集计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | service_output | 原袋验收及件数台账 | original_bag_ID; pool_ID; event_ID; event_date; final_valid_acceptance; acceptance_version; cutoff; Q; open_n; new_receipts_n; customer_returns_n; supplier_returns_n; transfer_in_n; gross_customer_handover_n; gross_supplier_handover_n; transfer_out_n; condemned_n; confirmed_missing_n; observed_close_n; predicted_close_n; signed_residual_n; open_w; generated_w; returned_waste_kg; documented_state_mass_change_w; dispatched_w; confirmed_missing_w; observed_close_w; predicted_close_w; signed_residual_w; original_carrier_ID; original_portion_ID; original_dispatch_ID; current_carrier_ID; parent_carrier_ID; dispatch_attempt_ID; return_event_ID; return_gross_kg; return_tare_kg; return_state; return_time; original_receipt; state_transition_ID; final_original_portion_ID; net_whole_load_kg; full_scope_provider_ID; treatment_scope; full_treatment_completed; pending_treatment_kg; unknown_treatment_kg; partial_processing_event_ID; actual_partial_activity; failed_transport_source_ID; gross; tare; W_coal; W_full; W_empty; ledger_ID; record_ID; source_ID; original_denominator; source_version; condition_status; absence_evidence; measurement_calibration; responsible_person | 门店收货/收银扫描持续原袋ID及实际批次封口，按真实时间记每移动及签最终验收撤销。截止和每迟到消息分别核商品件数与Q；保留实际实体自选付款，不用线上订单状态。校准计数/秤及独立盘点控制台账。 归属汇总方法：执行c_q; c_mass；保原来源归属，最后仅除一次Q。 | Item(s)；kg对账 | 每收货移动尝试退回；每日截止对账；后续修订 | 完整预先声明原门店批次配置池，含失败零销售历史 | 实际混合店收货陈列收银交接门 | 每参考流 | 签收据现场审计、原包装批次影像及盘点差异调查 |
| cp_origin | failure | original_coal; original_bag | 原煤及完整袋来源视图 | coal_state_ID; original_source_ID; original_bag_ID; gross_k; actual_package_and_noncoal_tare_k; coal_wet_kg_k; water_kg_k; w_k; u; coal_dry_kg_k; sample_ID; stratum_ID; sampling_seed; sample_time; sample_seal; laboratory_ID; licensed_method_version; stage_weights; inert_atmosphere; evolved_water; matrix_spike_recovery; blank; initial_sample_wet_kg; final_dry_residue_kg; detector_water_kg; detector_calibration; water_certified_reference; method_temperature; method_time; endpoint_criterion; volatile_oxidation_test; replicate_results; heterogeneity; combined_uncertainty; sample_fate; assay_matrix_ID; assay_matrix_type; split_plan_ID; filter_batch_ID; conditioning_T_RH_time; represented_sample_mass_or_area; water_scaling_factor; water_sample_representativeness; assay_water_kg; filter_material_interference; retained_dry_solid_ID; initial_water_reference_ID; final_water_sample_ID; initial_water_reference_filter_ID; deployed_filter_ID; final_water_KF_sample_ID; elemental_ICP_sample_ID; source_reference_KF_sample_ID; source_reference_ICP_sample_ID; water_element_sample_pair_ID; destructive_assay_sequence; aliquot_recovery_mass_or_area; water_whole_filter_recovery_factor; element_whole_filter_recovery_factor; paired_split_validation_ID; assay_correction_state; package_ID; dry_portion_ID; m0wet_s; w0_s; m0dry_s; cumulative_final_exports_dry; current_exclusive_dry_states; known_missing_dry; signed_dry_residual; Sdry_s; Fdry_s; Tdry_s; Odry_s; Sbag; Fbag; Tbag; Obag; B_F_wet; N_F_bag; coal_supplier_vector; bag_supplier_vector; original_unit; filling_stage_scope; manufacture_dispatch_boundary; original_owner; original_pool; version; old_numerator; new_numerator; trip_ID; source_ID; mode_ID; loaded_vehiclekm; empty_vehiclekm; stationary_idle_vehicleh; odometer_GPS; idle_start_end; provider_scope; binding_capacity; consignment_kg; occupied_m3; source_carried_kg; sum_all_constituent_carried_kg; constituent_source_ID; constituent_attribution_mode; reserved_capacity; capacity_unit; d_h; sum_all_driver; A_mode; attribution_level; E_h; Q; N_supplier; N_external; N_internal; W_coal; W_full; W_empty; D_air; J_water_out; J_water_in; N_core_r; module_ID; raw_or_normalized; N_jr; z_jr; D_j; event_ID; object_ID; time_interval; stage; exchange_UUID; property_UUID; unit; state; medium; ledger_ID; record_ID; source_ID; original_denominator; source_version; condition_status; absence_evidence; measurement_calibration; responsible_person | 供应方和实验室留实际发运湿重全水分、原包装ID/BOM、独立制造装填/袋向量和来源单位。按c_moisture在收货各条件分层事故取样检查，须校准皮重秤、密封链及合格实验室重复/基质验证。按c_origin逐最终来源责任和原池追溯，含样本及失煤。本failure视图与retail支持运输合并视图共享ledger_ID/record_ID/source_ID/分母/版本，一次测量不重复观测归一。 归属汇总方法：执行c_moisture; c_origin; c_transport; c_merge；保原来源归属，最后仅除一次Q。 | 湿煤kg；干煤kg；水分份额；完整Item(s)；原向量单位 | 每供应批来源、状态取样去向变化及历史修订 | 全部原供应来源和历史责任，含对照失败 | 原供应发运门及实际隔离实验/现场状态 | 每参考流 | 供应阶段独立清单、称重水分原记录、完整袋BOM及签后继来源对账 |
| cp_custody | custody | supplier_return; external_retained; internal_transfer | 实物保管状态事件 | original_bag_ID; event_ID; recipient; state; final_valid_acceptance; original_owner; original_pool; N_supplier; N_internal; N_external; cutoff; open_n; new_receipts_n; customer_returns_n; supplier_returns_n; transfer_in_n; gross_customer_handover_n; gross_supplier_handover_n; transfer_out_n; condemned_n; confirmed_missing_n; observed_close_n; predicted_close_n; signed_residual_n; open_w; generated_w; returned_waste_kg; documented_state_mass_change_w; dispatched_w; confirmed_missing_w; observed_close_w; predicted_close_w; signed_residual_w; original_carrier_ID; original_portion_ID; original_dispatch_ID; current_carrier_ID; parent_carrier_ID; dispatch_attempt_ID; return_event_ID; return_gross_kg; return_tare_kg; return_state; return_time; original_receipt; state_transition_ID; final_original_portion_ID; net_whole_load_kg; full_scope_provider_ID; treatment_scope; full_treatment_completed; pending_treatment_kg; unknown_treatment_kg; partial_processing_event_ID; actual_partial_activity; failed_transport_source_ID; gross; tare; W_coal; W_full; W_empty; ledger_ID; record_ID; source_ID; original_denominator; source_version; condition_status; absence_evidence; measurement_calibration; responsible_person | 保管方实交接扫描原袋事件接收方，不开袋查实际完整原态，取得签供应内部收据及截止外接收状态确认。毛事件联原来源账。未知损坏态未解，不另完整流或自动废物。 c_mass的kg字段仅读原cp_waste的ledger_ID/record_ID/source_ID/分母/版本，不新增废物称重/外运/退回或归一。 归属汇总方法：执行c_custody; c_mass；保原来源归属，最后仅除一次Q。 | Item(s)；状态；时间戳；kg对账仅读cp_waste视图 | 每实交接、截止确认及后续修订 | 完整原保管历史 | 实际具名供应内部外部保管门 | 每参考流 | 签接收状态文件、事件去重和独立件数对账 |
| cp_energy | retail | electricity | 互斥线路及驱动计量 | E_source; d_h; sum_all_driver; meter_ID; meter_boundary; source_mode; driver_unit; E_h; Q; ledger_ID; record_ID; source_ID; original_denominator; source_version; condition_status; absence_evidence; measurement_calibration; responsible_person | 区间首尾读校准互斥线路表，追总子表包含关系、实际任务设备预留秒或服务面积时间，按a_electricity将运行空闲固定来源与账单/全受益含闭店失败对账。期前及换表查零负荷时间漂移，不用煤标称热值。 归属汇总方法：执行c_electricity；保原来源归属，最后仅除一次Q。 | kWh；秒；m2*时间；MJ | 每来源区间；每日账单驱动对账 | 全池含空闲闭店失败期 | 实际互斥纳入用电线路 | 每参考流 | 表校准负荷检查、线路图、时间及总表对账 |
| cp_waste | residual | collected_coal; complete_bag_waste; empty_bag_waste | 实际完整废载体外运与来源账 | open_n; new_receipts_n; customer_returns_n; supplier_returns_n; transfer_in_n; gross_customer_handover_n; gross_supplier_handover_n; transfer_out_n; condemned_n; confirmed_missing_n; observed_close_n; predicted_close_n; signed_residual_n; open_w; generated_w; returned_waste_kg; documented_state_mass_change_w; dispatched_w; confirmed_missing_w; observed_close_w; predicted_close_w; signed_residual_w; original_carrier_ID; original_portion_ID; original_dispatch_ID; current_carrier_ID; parent_carrier_ID; event_ID; dispatch_attempt_ID; return_event_ID; return_gross_kg; return_tare_kg; return_state; return_time; original_receipt; state_transition_ID; final_original_portion_ID; net_whole_load_kg; full_scope_provider_ID; treatment_scope; full_treatment_completed; pending_treatment_kg; unknown_treatment_kg; partial_processing_event_ID; actual_partial_activity; failed_transport_source_ID; gross; tare; W_coal; W_full; W_empty; coal_state_ID; original_source_ID; original_bag_ID; gross_k; actual_package_and_noncoal_tare_k; coal_wet_kg_k; water_kg_k; w_k; u; coal_dry_kg_k; sample_ID; stratum_ID; sampling_seed; sample_time; sample_seal; laboratory_ID; licensed_method_version; stage_weights; inert_atmosphere; evolved_water; matrix_spike_recovery; blank; initial_sample_wet_kg; final_dry_residue_kg; detector_water_kg; detector_calibration; water_certified_reference; method_temperature; method_time; endpoint_criterion; volatile_oxidation_test; replicate_results; heterogeneity; combined_uncertainty; sample_fate; assay_matrix_ID; assay_matrix_type; split_plan_ID; filter_batch_ID; conditioning_T_RH_time; represented_sample_mass_or_area; water_scaling_factor; water_sample_representativeness; assay_water_kg; filter_material_interference; retained_dry_solid_ID; initial_water_reference_ID; final_water_sample_ID; initial_water_reference_filter_ID; deployed_filter_ID; final_water_KF_sample_ID; elemental_ICP_sample_ID; source_reference_KF_sample_ID; source_reference_ICP_sample_ID; water_element_sample_pair_ID; destructive_assay_sequence; aliquot_recovery_mass_or_area; water_whole_filter_recovery_factor; element_whole_filter_recovery_factor; paired_split_validation_ID; assay_correction_state; package_ID; dry_portion_ID; m0wet_s; w0_s; m0dry_s; cumulative_final_exports_dry; current_exclusive_dry_states; known_missing_dry; signed_dry_residual; Sdry_s; Fdry_s; Tdry_s; Odry_s; Sbag; Fbag; Tbag; Obag; B_F_wet; N_F_bag; coal_supplier_vector; bag_supplier_vector; original_unit; filling_stage_scope; manufacture_dispatch_boundary; original_owner; original_pool; version; old_numerator; new_numerator; ledger_ID; record_ID; source_ID; original_denominator; source_version; condition_status; absence_evidence; measurement_calibration; responsible_person | 每产生暂存实物外运退回改态均用核查校准秤称互斥实际载体毛皮重，保c_mass精确原载体份量/外运尝试/退回ID及实际时间状态。退回恢复实待运kg，不新报废制造。记录接收全范围、实际部分失败处理活动及最终full_treatment_completed。全部实物尝试进库存QA，W_coal/W_full/W_empty仅绑定唯一同态实际最终全处理净载及匹配完整供应。未处理拒返待定改态不为零或全处理替代。c_moisture/c_origin干煤份量袋ID另追，载体组成仅QA不再改直接整净kg。未知改态未列载体须实际具体卡并阻完整。 归属汇总方法：执行c_mass; c_moisture; c_origin；保原来源归属，最后仅除一次Q。 | 实际湿载体kg；来源干煤kg；完整袋ID | 每产生转态外运；每接收来源修订 | 联原来源的全载体产生暂存外运历史 | 实际隔离收集及签接收门 | 每参考流 | 秤单皮重查、实测来源链、签全组成处理及互斥载体审计 |
| cp_air | air | coal_air; water_air_out; water_air_in | 来源区分的煤尘水分外界控制体 | interval_ID; path_ID; measurement_pool_ID; actual_original_source_membership; isolated_pool_gate; outside_boundary; sampler_size_coverage; V_t; temperature; pressure; gas_wet_dry_basis; concentration_mode; conditioned_filter_final_kg; filter_initial_kg; M_raw; matched_filter_blank_kg; M_corr; raw_element_mass_e; blank_element_mass_e; y_e; reference_ID; reference_source_lot; reference_dry_mass; reference_particle_preparation; reference_path_time; noncoal_reference_members; element_panel_ID; eligible_elements; quantification_limits; digestion_protocol; digestion_recovery; internal_standard; analytical_calibration; replicate_results; A_ej; Sigma; f_j; f_coal; solver_version; fit_residual; reference_rank; blind_mixture_ID; known_mixture_dry_masses; coal_recovery; combined_uncertainty; source_identifiability; report_absolute_C_coal_kg_m3; report_blank_source_steps; report_not_inlet_or_background_differenced; C_coal_out; C_coal_in; J_dust_t; D_air; delta_air_stock; delta_deposited_stock; delta_filter_stock; actual_collected_exports; internal_G; original_source_ID; calibration; uncertainty; blank_filter_final_kg; blank_filter_initial_kg; M_net_as_is; loaded_filter_final_water_kg; loaded_filter_initial_water_kg; blank_filter_final_water_kg; blank_filter_initial_water_kg; delta_W_loaded; delta_W_blank; W_net; assay_matrix_ID; assay_matrix_type; split_plan_ID; filter_batch_ID; conditioning_T_RH_time; represented_sample_mass_or_area; water_scaling_factor; water_sample_representativeness; assay_water_kg; filter_material_interference; retained_dry_solid_ID; initial_water_reference_ID; final_water_sample_ID; elemental_report_units; elemental_unit_conversion; reference_dry_mass_basis; report_dry_basis_water_steps; initial_water_reference_filter_ID; deployed_filter_ID; final_water_KF_sample_ID; elemental_ICP_sample_ID; source_reference_KF_sample_ID; source_reference_ICP_sample_ID; water_element_sample_pair_ID; destructive_assay_sequence; aliquot_recovery_mass_or_area; water_whole_filter_recovery_factor; element_whole_filter_recovery_factor; paired_split_validation_ID; assay_correction_state; actual_control_volume; matched_background_ID; humidity_mode; sensor_raw_readings; calibration_ID; correction_state; m_dryair_actual_out; m_dryair_actual_in; m_dryair_background_out; m_dryair_background_in; x_actual_out; x_actual_in; x_background_out; x_background_in; A_t; B_t; actual_background_path_time_matching; ventilation_source_storage_matching; J_water_t; J_water_out; J_water_in; coal_water_kg; package_water_kg; delta_air_water; delta_surface_water; condensate_kg; liquid_export_kg; other_occupants; unmatched_conditions; unresolved_water_kg; coal_state_ID; original_bag_ID; gross_k; actual_package_and_noncoal_tare_k; coal_wet_kg_k; water_kg_k; w_k; u; coal_dry_kg_k; sample_ID; stratum_ID; sampling_seed; sample_time; sample_seal; laboratory_ID; licensed_method_version; stage_weights; inert_atmosphere; evolved_water; matrix_spike_recovery; blank; initial_sample_wet_kg; final_dry_residue_kg; detector_water_kg; detector_calibration; water_certified_reference; method_temperature; method_time; endpoint_criterion; volatile_oxidation_test; heterogeneity; sample_fate; ledger_ID; record_ID; source_ID; original_denominator; source_version; condition_status; absence_evidence; measurement_calibration; responsible_person | 环境负责人记全部实际外界路径及隔离原来源池成员。粉尘先执行c_moisture水专属滤器颗粒参比基质分支及c_dust精确匹配实质量/水量差以建立干M_corr，再执行冻结粒径匹配煤非煤背景参比、定量ICP-MS、协方差约束混合、空白模式及盲回收可识别协议，留raw及已煤源报告原证据，不重复施加。水仅接c_water raw_absolute校准绝对入出湿度及积分干空气量，实际与匹配背景独立实测，校准修正一次，记A_t/B_t/J_water_t及完整库存液体闭合。保全部新增精确原字段、来源路径时点不确定性和失败未测覆盖，不从室内尘或湿亏重推外转。 归属汇总方法：执行c_dust; c_water; c_moisture；保原来源归属，最后仅除一次Q。 | kg；实温压基准m3；干空气kg；kg水/kg干空气；时间戳 | 每观测条件区间连续时间测量；每事故来源修订 | 全煤控制体暴露含闭店空闲及实际匹配背景 | 实际纳入煤区域外界边界，不将室内空气自动当外界 | 每参考流 | 采样流量湿度校准、粒径路径覆盖、空白来源指纹、库存对账及签不确定性审查 |
| cp_support | retail | service_output; electricity | 强制实际支持来源登记 | trip_ID; source_ID; mode_ID; loaded_vehiclekm; empty_vehiclekm; stationary_idle_vehicleh; odometer_GPS; idle_start_end; provider_scope; binding_capacity; consignment_kg; occupied_m3; source_carried_kg; sum_all_constituent_carried_kg; constituent_source_ID; constituent_attribution_mode; reserved_capacity; capacity_unit; d_h; sum_all_driver; A_mode; attribution_level; original_source_ID; original_owner; original_pool; version; asset_ID; model_BOM; V; included_stages; e_recorded_h; exposure_unit; cumulative_exposure; cumulative_f; L_expected; lifetime_evidence; E_actual; e_actual_h; all_historical_owners; f_old; f_new; V_old; V_new; delta_h; repair_event_ID; freight_source_ID; terminal_carrier_ID; gross; tare; network_source_hours; reserved_endpoint_seconds_h; sum_all_endpoint_seconds; interval_ID; unique_attempt_ID; event_source; line_processing_seconds_h; sum_all_event_line_seconds; capture_ID; footprint_m2_i_h; coverage_seconds_i_h; all_capture_area_seconds_i; f_i_h; frozen_map_version; source_i; capture_source_ID; capture_unit; capture_vector; capture_original_denominator; storage_provider_raw_p; storage_mode; actual_retained_bytes_i; actual_retention_seconds_i; b_p_i; sum_packet_b_p_i; packet_membership; GB_GiB; raw_or_normalized; original_denominator; owner; source_portion_ID; m0_s; unit; cumulative_final_exports; current_exclusive_states; known_missing; signed_residual; first_use_event_ID; q_first_event_s; cleaning_pass_ID; actual_cleaned_m2_h; exclusive_failed_reserved_cleaned_m2_h; d_clean_h; sum_all_cleaned_driver_m2; G_first_sh; print_job_ID; layout_version; source_line_ID; printed_line_rectangle_m2_h; exclusive_blank_cut_m2_h; shared_blank_cut_m2; sum_all_line_rectangle_m2; d_paper_h; sum_all_paper_driver_m2; pre_use_loss_event_ID; q_pre_loss_s; reserved_quantity_s_h; sum_all_reserved_quantity_s; G_pre_sh; G_sh; V_mfg_s; V_in_s; old_fraction_vector; new_fraction_vector; printed_WIP; printing_energy_source; X_event; source_unit; event_member_ID; resource_ID; homogeneous_stage_ID; sample_ID; sample_original_source_pool; processing_interval_start_end; actual_resource_processing_seconds_h; sum_all_resource_processing_seconds; N_event_h; event_membership_version; container_ID; open_or_loss_event; opening_event_type; full_container_BOM; n_open; d_event_h; sum_all_event_driver; reserved_container_count_h; sum_all_reserved_container_count; actual_complete_container_count; allocated_container_count_h; cleaned_m2; lifetime_exposure; measured_m3; same_state_density; quantity_mode; added_water; dirt; coal_origin_kg; receiver; actual_constituents; treatment_scope; lab_activity; actual_job_used_paper_m2; measured_web_width_m; measured_paper_advance_m; paper_partition_membership_version; paper_partition_area_uncertainty; E_h; B_F_wet; N_F_bag; Q; N_supplier; N_external; N_internal; W_coal; W_full; W_empty; D_air; J_water_out; J_water_in; N_core_r; module_ID; N_jr; z_jr; D_j; event_ID; object_ID; time_interval; stage; exchange_UUID; property_UUID; state; medium; ledger_ID; record_ID; source_ID; original_denominator; source_version; condition_status; absence_evidence; measurement_calibration; responsible_person | 生产者/供应/资产/设施/信息负责人按固定规则收实际同质来源合同BOM、事件时间责任记录、校准活动及寿命历史。记存在不存在未知及含房东共用设备的全期b_facility签gate。完整前逐真实供应材料载体新增具体原子卡和单过程协议视图；本登记不是合并交换。原运输合并与cp_origin共享ledger_ID/record_ID/source_ID/分母/版本，先去视图重复再一次归一。 归属汇总方法：执行c_transport; c_assets; c_digital; c_material; c_merge；保原来源归属，最后仅除一次Q。 | 各实来源单位；kg；Item(s)；m3；vehiclekm；vehicleh；秒；m2*时间；字节*秒 | 每实来源事件条件修订；资产全历史受益 | 全池和持续全受益来源资产历史 | 实际运输资产材料后台实验设施范围和具名责任 | 每参考流 | 签范围、校准、原量分母及来源阶段去重证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_q | service_output | Q为预先声明门店/批次/配置池最新final_valid_acceptance=true的不同original_bag_ID数；退回再售仅一次，已不在集合的撤销不再扣。纯财务调整不撤验收。保留失败/零销售原池及实际日期；Q=0不可归一且不删除。 | original_bag_ID; pool_ID; event_ID; event_date; final_valid_acceptance; acceptance_version; cutoff; Q | 最终有效服务件数 |  |
| c_custody | supplier_return; external_retained; internal_transfer | N_supplier计实际毛签署供应商交接，N_internal计实际毛签署内部交接。N_external计截止外部留存无最终有效验收不同原袋，关联早先毛交接，不是新移动。记录最终接收/状态和持续煤袋背景责任。损坏/开封态不属完整卡，完整前须具体实际状态卡。 | original_bag_ID; event_ID; recipient; state; final_valid_acceptance; original_owner; original_pool; N_supplier; N_internal; N_external; cutoff | 原分子 |  |
| c_mass | service_output; collected_coal; complete_bag_waste; empty_bag_waste | 仅商品袋数：predicted_close_n=open_n+new_receipts_n+customer_returns_n+supplier_returns_n+transfer_in_n-gross_customer_handover_n-gross_supplier_handover_n-transfer_out_n-condemned_n-confirmed_missing_n；signed_residual_n=observed_close_n-predicted_close_n，正为未释超额、负为短少。毛顾客交接含已接受与从未接受出库，撤销/外留不再扣。报废是商品转待运废物，不是外运。独立实物废载体kg：predicted_close_w=open_w+generated_w+returned_waste_kg+documented_state_mass_change_w-dispatched_w-confirmed_missing_w；signed_residual_w=observed_close_w-predicted_close_w。每退回保original_carrier_ID/original_portion_ID/original_dispatch_ID/dispatch_attempt_ID/return_event_ID，按实际状态时间称退回毛皮重，记留存/改态份量及原接收，不新增报废或制造。documented_state_mass_change_w仅为另实测同载体水分/状态质量变，不是推定修正或空气排放。整袋煤屑空袋互斥状态分账，改态转移替换旧态。全部实物外运退回尝试进此库存QA，不自动进处理分子。各载体类x，W_x仅累加不同final_original_portion_ID的net_whole_load_kg，且须实际最终同态外运、具名full_scope_provider_ID、完整匹配treatment_scope及核实full_treatment_completed证据。跨每拒收退回重试按原份量去重，直接净kg不再扣退回/留存或乘煤组成。仅接收或拒返未处理不等于全处理；显式保待处理未知kg并阻完整。实际失败运输及部分处理活动按c_merge保为独立事件/来源/阶段实际量，不能零或重标全处理供应。部分处理若改载体状态或移除组成，记录实际阶段活动、余物新载体及具体状态卡/供应，不能用未变整袋卡或完整原处理量覆盖。 | open_n; new_receipts_n; customer_returns_n; supplier_returns_n; transfer_in_n; gross_customer_handover_n; gross_supplier_handover_n; transfer_out_n; condemned_n; confirmed_missing_n; observed_close_n; predicted_close_n; signed_residual_n; open_w; generated_w; returned_waste_kg; documented_state_mass_change_w; dispatched_w; confirmed_missing_w; observed_close_w; predicted_close_w; signed_residual_w; original_carrier_ID; original_portion_ID; original_dispatch_ID; current_carrier_ID; parent_carrier_ID; event_ID; dispatch_attempt_ID; return_event_ID; return_gross_kg; return_tare_kg; return_state; return_time; original_receipt; state_transition_ID; final_original_portion_ID; net_whole_load_kg; full_scope_provider_ID; treatment_scope; full_treatment_completed; pending_treatment_kg; unknown_treatment_kg; partial_processing_event_ID; actual_partial_activity; failed_transport_source_ID; gross; tare; W_coal; W_full; W_empty | 独立袋数和完整载体kg平衡 |  |
| c_moisture | original_coal; collected_coal; complete_bag_waste; empty_bag_waste; coal_air | 煤状态k用coal_wet_kg_k=gross_k-actual_package_and_noncoal_tare_k；湿基w_k=water_kg_k/coal_wet_kg_k，coal_dry_kg_k=coal_wet_kg_k*(1-w_k)。干煤含原有有机及矿物成灰物，不是纯碳，不再乘灰碳组成；所扣皮重仅含实际包装和新增非煤异物，不含原煤矿物/成灰物。粗煤全水分固定由合格实验室使用完整许可程序的ASTM D3302/D3302M-22a仲裁法。保留密封取样时间、原批/储存/条件分层、各阶段原重和方法版；此处仅读公开目录范围，完整SOP核验/实际结果仍为完成条件，不是以后任选方法。该范围排泥浆/污泥及小于0.5mm粉煤。此类收集细屑固定另用惰性气氛炉提取并连接库仑卡尔费休水专属检测器：测校准检测器水质量且仅扣一次空白、基质加标回收及样本初湿重/终干残渣重，将提取水与固体失重对账，拒绝未释挥发损失/氧化。温时终点和回收率须实际已验证仪器记录，不编设置或把总失重当水。每原生产批收货、每储存条件分层及每事故/外运状态取样；预先声明随机留样对照袋选择/种子、分样重复、实测异质性和声明不确定性支持的代表性。对照袋是不同原袋，不计Q，原封送合格实验室破坏性测试，普通销售库存不打开。隔离事故倒空另记，不能制备另一合格零售袋。失密封、无效回收、超记录合成计量不确定性的不一致或分层无代表性阻止采用；对受影响层重采并保留失败。干基u=水/干量仅一次转w=u/(1+u)。样煤/包装去向及实验投入废物均实际F或具名T，不消失或虚构重复售出。 coal_air滤器/颗粒及来源参比水测量仅用此水专属惰性炉/库仑卡尔费休分支，不能套粗煤ASTM程序或将coal_wet_kg毛皮重式套整滤器。分别验证实际原煤、每非煤参比、滤材基质的专属水回收、空白、挥发氧化干扰及保留干固体。按c_dust要求在同一代表完整滤器范围测初终水量。破坏性配对滤器/分样须冻结split_plan_ID，匹配来源滤材批/调理/路径/时点，实测代表质量面积、water_scaling_factor及重复证据，证明实际非均匀沉积的代表性；不能因等面积假定等水或均匀负载。保实际完整滤器当量assay_water_kg及不确定性、全部固体水样去向。匹配、基质回收或代表放大不能建立可靠干量时保未解并阻采用完整。 预先指定不同初水参比滤器与实际布设采样滤器，破坏性初始KF耗掉的滤器不能随后用于实际现场采样。采样后按冻结代表计划使用不同且可追配对/分样的终水KF样与元素ICP样，不能假定KF耗掉分样仍供ICP。实际煤非煤参比及现场滤器空白同此要求。记录实际取样回收质量或面积、水和元素各自完整滤器恢复因子；须验证实际非均匀沉积及配对变异，不能假等样或因子1。各水结果及校准元素结果先恢复同一代表完整滤器/参比质量时点范围，再用于M_corr/y_e，保原实验样ID及材料去向。KF检测器空白在各报告水质量内仅校一次，另实测滤器实物水增量仅通过W_net中的delta_W_blank一次使用。元素滤器消解匹配空白仅在y_e去一次，证明其raw/已校正状态。不能取得同范围可追水量及元素干基量时阻采用完整。 | coal_state_ID; original_source_ID; original_bag_ID; gross_k; actual_package_and_noncoal_tare_k; coal_wet_kg_k; water_kg_k; w_k; u; coal_dry_kg_k; sample_ID; stratum_ID; sampling_seed; sample_time; sample_seal; laboratory_ID; licensed_method_version; stage_weights; inert_atmosphere; evolved_water; matrix_spike_recovery; blank; initial_sample_wet_kg; final_dry_residue_kg; detector_water_kg; detector_calibration; water_certified_reference; method_temperature; method_time; endpoint_criterion; volatile_oxidation_test; replicate_results; heterogeneity; combined_uncertainty; sample_fate; assay_matrix_ID; assay_matrix_type; split_plan_ID; filter_batch_ID; conditioning_T_RH_time; represented_sample_mass_or_area; water_scaling_factor; water_sample_representativeness; assay_water_kg; filter_material_interference; retained_dry_solid_ID; initial_water_reference_ID; final_water_sample_ID; initial_water_reference_filter_ID; deployed_filter_ID; final_water_KF_sample_ID; elemental_ICP_sample_ID; source_reference_KF_sample_ID; source_reference_ICP_sample_ID; water_element_sample_pair_ID; destructive_assay_sequence; aliquot_recovery_mass_or_area; water_whole_filter_recovery_factor; element_whole_filter_recovery_factor; paired_split_validation_ID; assay_correction_state | 状态专属湿干煤kg | astm-moisture |
| c_origin | original_coal; original_bag | 各原供应煤s在发运有实际m0wet_s/w0_s、m0dry_s=m0wet_s*(1-w0_s)>0。实物守恒将m0dry_s分为累计最终实际干煤外送、当前互斥完整/散煤/空气/沉降/滤器/待运废物煤、已知缺失和带符号残差；转态替换旧量。另将每dry_portion_ID一次归S最终有效验收商品、F服务失败损失/测试处理或实际外界粉尘、T具名签署后继或O开放：m0dry_s=Sdry_s+Fdry_s+Tdry_s+Odry_s。水变不创造干煤或整袋。B_F_wet=sum_s(Fdry_s/(1-w0_s))，以此实际原湿kg当量乘各匹配供应制造装填每湿kg向量，仅计F一次；已展示F输入不再乘F。来源分开，不同向量仅可在有据原量加权下汇总。完整原包装另按package_ID二元Sbag/Fbag/Tbag/Obag归属合计1，N_F_bag=sum Fbag。Sbag须完整原袋最终有效验收；验收前包装失效整制造归F，除非签T后继或留O。原验收有效时之后空袋退回不重制造或移除S，其实际零售废物处理仍计。煤袋来源责任可不同，实际碎片/载体另测；破袋片不各得整袋制造。实际以部件来源替代须核实供应部件向量及独立实际部件量/卡，并从整向量排该来源，不能质量拆分。保留原责任/池/版本；后续去向/向量修订以delta=新-旧替换每一受影响历史原分子，不新采购。 | original_source_ID; package_ID; dry_portion_ID; m0wet_s; w0_s; m0dry_s; cumulative_final_exports_dry; current_exclusive_dry_states; known_missing_dry; signed_dry_residual; Sdry_s; Fdry_s; Tdry_s; Odry_s; Sbag; Fbag; Tbag; Obag; B_F_wet; N_F_bag; coal_supplier_vector; bag_supplier_vector; original_unit; filling_stage_scope; manufacture_dispatch_boundary; original_owner; original_pool; version; old_numerator; new_numerator | 原F煤湿kg及完整袋件数 | ghg2011 |
| c_electricity | electricity | E_h为a_electricity归属原kWh之和，electricity=3.6*E_h/Q MJ。保留表边界/来源模式/驱动单位及全受益。煤标称BTU/炉具额定值绝非用电计量。 | E_source; d_h; sum_all_driver; meter_ID; meter_boundary; source_mode; driver_unit; E_h; Q | 归属原kWh和每服务MJ |  |
| c_dust | coal_air; collected_coal | 对具已知原池成员的隔离煤控制体，按时间区间覆盖全部实际外界路径；记原来源池成员，混池责任无法区分时须实际物理细分，不能猜分配。校准气溶胶/滤器采样保实际粒径覆盖及同温压干湿基准V_t空气m3。 滤膜调理本身不能证明干颗粒质量。按c_moisture具基质验证的水专属分支，记录实际载样滤器和匹配空白滤器初终实质量kg、独立完整滤器当量水kg及其真实配对分样证据。M_raw=conditioned_filter_final_kg-filter_initial_kg，matched_filter_blank_kg=blank_filter_final_kg-blank_filter_initial_kg，二者均实测原状态增量而非干量。M_net_as_is=M_raw-matched_filter_blank_kg；delta_W_loaded=loaded_filter_final_water_kg-loaded_filter_initial_water_kg；delta_W_blank=blank_filter_final_water_kg-blank_filter_initial_water_kg；W_net=delta_W_loaded-delta_W_blank；M_corr=M_net_as_is-W_net，单位干颗粒kg；等价于载样干质量增量减匹配空白干质量增量。净实质量已扣空白增量，所以仅再扣净水差W_net，不能只扣载样水或第二次扣空白水。全部质量水量须同一代表滤器沉积时点范围，初水配对参比和终样分样须c_moisture的基质回收代表放大证据，不能假定含水零或用总失重。未释负水修正或不确定水修正保未解，不截零。ICP元素y_e及每煤非煤参比A_ej均以独立建立无水分母表示kg元素/kg实际干颗粒或干参比，保原检测单位换算及不确定性。载样、空白或参比不能可靠干化修正时，来源份额和完整清单不可用。原煤判别固定为预先声明干元素端元混合协议：从各实际原煤批制备粒径匹配粉尘参比，并纳入每实际非煤来源（现场土/道路尘、包装清洁源及入流背景尘）。记录参比ID/来源批/干质量/粒径制备/现场路径时点；块煤组成不能直接当细尘端元。采用具基质验证的完全消解定量ICP-MS测元素质量份额，具可追溯标物、消解分析空白、内标、回收及重复不确定性。期前据先导参比/定量限冻结element_panel_ID及合格校准元素清单，不能为预期现场结果挑元素。以已扣空白滤器干颗粒M_corr、实测元素份额y_e、实际参比矩阵A_ej及实测协方差Sigma，解f=argmin((y-A*f)^T*inverse(Sigma)*(y-A*f))，约束f_j>=0且sum_j(f_j)=1；合实际原煤端元份额得f_coal。保求解器版本、全部端元和拟合残差。仅在已知干质量煤/非煤盲混样证明煤回收处于记录合成测量不确定性内、基质元素回收、参比可识别满列秩且现场粒径浓度可分源后采用。端元遗漏、来源同征、元素不可定量、份额不可识别或拟合回收失败均阻采用和完整，绝不默认f_coal=1、强归未解余量给煤或仅归一已知来源。每路径滤器记录只选一个浓度模式：raw_total_particulate用上述已校水的干M_corr，y_e=(raw_element_mass_e-blank_element_mass_e)/M_corr、C_coal=(M_corr/V_t)*f_coal，单位干煤kg/m3。称重滤器水空白仅按上述匹配干差式处理，匹配元素分析空白仅在y_e扣一次。正样须正已知M_corr和V_t，未解未检出/负修正保不确定覆盖问题，不零排。already_coal_specific仅在保留原滤器模型证据证明同水分干基/空白/来源份额步骤已完成时，直接用报告绝对路径C_coal_kg_m3；报告不得已减入流或环境背景，不再扣空白或乘f。然后J_dust_t=sum_out(V_t*C_coal_out)-sum_in(V_t*C_coal_in)仅扣一次实际入流转移，不再扣采样空白或来源比例。核实向外原煤通量进D_air，未释负/未知通量阻完整，不信用截零。内部扬起G=J_dust+delta_air_stock+delta_deposited_stock+delta_filter_stock+actual_collected_exports同原源时点对账，不从实测J再扣捕集或排已捕煤。外界干尘一次归Fdry，实废物所含干煤仍另来源QA，直接湿载体kg独立。 执行c_moisture不同初参比/布设/KF/ICP配对分样序列及实际水元素完整滤器因子，禁止破坏性样复用、假相等或缺同范围干基证据。 | interval_ID; path_ID; measurement_pool_ID; actual_original_source_membership; isolated_pool_gate; outside_boundary; sampler_size_coverage; V_t; temperature; pressure; gas_wet_dry_basis; concentration_mode; conditioned_filter_final_kg; filter_initial_kg; M_raw; matched_filter_blank_kg; M_corr; raw_element_mass_e; blank_element_mass_e; y_e; reference_ID; reference_source_lot; reference_dry_mass; reference_particle_preparation; reference_path_time; noncoal_reference_members; element_panel_ID; eligible_elements; quantification_limits; digestion_protocol; digestion_recovery; internal_standard; analytical_calibration; replicate_results; A_ej; Sigma; f_j; f_coal; solver_version; fit_residual; reference_rank; blind_mixture_ID; known_mixture_dry_masses; coal_recovery; combined_uncertainty; source_identifiability; report_absolute_C_coal_kg_m3; report_blank_source_steps; report_not_inlet_or_background_differenced; C_coal_out; C_coal_in; J_dust_t; D_air; delta_air_stock; delta_deposited_stock; delta_filter_stock; actual_collected_exports; internal_G; original_source_ID; calibration; uncertainty; blank_filter_final_kg; blank_filter_initial_kg; M_net_as_is; loaded_filter_final_water_kg; loaded_filter_initial_water_kg; blank_filter_final_water_kg; blank_filter_initial_water_kg; delta_W_loaded; delta_W_blank; W_net; assay_matrix_ID; assay_matrix_type; split_plan_ID; filter_batch_ID; conditioning_T_RH_time; represented_sample_mass_or_area; water_scaling_factor; water_sample_representativeness; assay_water_kg; filter_material_interference; retained_dry_solid_ID; initial_water_reference_ID; final_water_sample_ID; elemental_report_units; elemental_unit_conversion; reference_dry_mass_basis; report_dry_basis_water_steps; initial_water_reference_filter_ID; deployed_filter_ID; final_water_KF_sample_ID; elemental_ICP_sample_ID; source_reference_KF_sample_ID; source_reference_ICP_sample_ID; water_element_sample_pair_ID; destructive_assay_sequence; aliquot_recovery_mass_or_area; water_whole_filter_recovery_factor; element_whole_filter_recovery_factor; paired_split_validation_ID; assay_correction_state | 核实外界干煤kg |  |
| c_water | water_air_out; water_air_in | 煤水kg=coal_wet_kg-coal_dry_kg；水变本身非干煤失败或外界空气排放。固定唯一输入模式raw_absolute：对隔离已知原池控制体区间全部实际入出路径，用积分干空气kg m_dryair及校准绝对湿度x（kg水/kg干空气），匹配实温压基准。数值须是减入流或煤/环境背景前的绝对路径观测，已差分或已背景校正报告不适用。仪器校准零点漂移修正有记录且仅一次施于报告校准绝对x和干空气量，PCR计算不另扣传感/分析空白。保原传感读数、calibration_ID、修正绝对值及correction_state。实际煤暴露A_t=sum_out(m_dryair_actual_out*x_actual_out)-sum_in(m_dryair_actual_in*x_actual_in)；另独立实测匹配空煤背景B_t=sum_out(m_dryair_background_out*x_background_out)-sum_in(m_dryair_background_in*x_background_in)。J_water_t=A_t-B_t kg，各独立测量条件入流一次、背景一次；积分干空气量已含区间，不再乘时长。记录实际背景路径时点通风来源储存精确匹配、其他占用、煤袋表面水分、delta_air_water/delta_surface_water、冷凝和液体外运。背景不匹配、路径缺失或混池责任不可分均未解，须实际物理细分和匹配原测，不猜驱动或零。原煤水变与已归外通量、内部库存及另实测液体对账，不从直接J再扣库存捕集。含来源区分和不确定性，逐互斥区间判核实向外/向内，J_water_out累加核实外kg、J_water_in累加核实内绝对kg。未释符号/未检出/方向或来源不确定保unresolved_water_kg并阻完整，不负排放信用或未知截零。实际冷凝渗液须具体完整液载体卡和直接净kg，不再作水汽。 | interval_ID; path_ID; measurement_pool_ID; actual_original_source_membership; isolated_pool_gate; actual_control_volume; matched_background_ID; humidity_mode; sensor_raw_readings; calibration_ID; correction_state; m_dryair_actual_out; m_dryair_actual_in; m_dryair_background_out; m_dryair_background_in; x_actual_out; x_actual_in; x_background_out; x_background_in; A_t; B_t; temperature; pressure; gas_wet_dry_basis; actual_background_path_time_matching; ventilation_source_storage_matching; J_water_t; J_water_out; J_water_in; coal_water_kg; package_water_kg; delta_air_water; delta_surface_water; condensate_kg; liquid_export_kg; other_occupants; unmatched_conditions; uncertainty; unresolved_water_kg | 互斥核实向外向内水kg |  |
| c_transport | original_coal; original_bag; service_output | 各原行程来源用互斥实测loaded_vehiclekm/empty_vehiclekm/stationary_idle_vehicleh及匹配完整能源尾气供应范围。有据质量约束用实际运单kg，容积约束用实占m3。载货驱动=运单量*载货km，空驶驱动=预留运力*实际空驶km，怠速驱动=预留运力*实际静止有动力怠速时长h；各模式N_h=A_mode*d_h/sum_all_driver，含全失败空闲受益，正来源须正已知分母。来源→运单→原煤袋→最终责任池各一次。各实测运单已归原运输量，按装载状态实测source_carried_kg/sum_all_constituent_carried_kg分给每原煤/袋/外包/托盘来源，覆盖全部实际组成；此固定运单内实物质量分配在有据行程质量/容积驱动之后，不是制造向量拆分。整运单与已归组成模式互斥，保原实测质量不确定性，正分母未知阻止完整；供应仅运单层归属不能跳过尚缺煤干来源/袋原责任份额。须供应煤袋入场来源细分，不按当前废物kg拆环境向量。资产维修退役运载先归资产再c_assets历史份额；内部人工电搬运按实际任务/预留设备秒及匹配来源。 | trip_ID; source_ID; mode_ID; loaded_vehiclekm; empty_vehiclekm; stationary_idle_vehicleh; odometer_GPS; idle_start_end; provider_scope; binding_capacity; consignment_kg; occupied_m3; source_carried_kg; sum_all_constituent_carried_kg; constituent_source_ID; constituent_attribution_mode; reserved_capacity; capacity_unit; d_h; sum_all_driver; A_mode; attribution_level; original_source_ID; original_owner; original_pool; version | 原分子 | ghg2011 |
| c_assets | service_output | 各实际同质资产型号/BOM/阶段V用原f_h*V，f_h=e_recorded_h/L_expected。建筑货架用实测预留面积*时间；秤/推车/收银/灯风扇/信息/控尘设备用实测预留设备时间；清洁布拖按实际每遍cleaned_m2；复用托盘按预留托盘位*时间，寿命分母同单位。跨全责任方保cumulative_exposure/cumulative_f，sum f不得超1；超出须有据修L并在完整前替换全部旧记录，不能暗截或再整购。最终退役E_actual=sum_all_h(e_actual_h)>0、f_final_h=e_actual_h/E_actual。退役或寿命/向量修订以delta_h=f_new_h*V_new-f_old_h*V_old替换每一历史责任池记录，不再整购。互斥制造安装、运行、实际事件维修和终端处理运输各计一次，除非已核完整包包含。维修退役运输先归资产再沿同历史份额；直接终端毛皮重已排拆件，不再扣或再乘份额。整资产与内含部件互斥。 | asset_ID; model_BOM; V; included_stages; e_recorded_h; exposure_unit; cumulative_exposure; cumulative_f; L_expected; lifetime_evidence; E_actual; e_actual_h; all_historical_owners; original_pool; f_old; f_new; V_old; V_new; delta_h; repair_event_ID; freight_source_ID; terminal_carrier_ID; gross; tare; version | 原分子 | ghg2011 |
| c_digital | service_output | 每唯一区间网络原source小时按reserved_endpoint_seconds_h/sum_all_endpoint_seconds归属。唯一支付行政尝试原event_source按实测line_processing_seconds_h/sum_all_event_line_seconds分配，保留失败。各原capture i按footprint_m2_i_h*coverage_seconds_i_h/all_capture_area_seconds_i冻结f_i_h，覆盖全实际受益含空闲失败预留。采集生产用已核原raw source_i*f_i_h及source_ID/单位/vector/原分母；不可分生产总量不完整，不按未来留存分。仅存储：各固定字节区间b_p_i=实际留存字节*实际留存秒；N_storage_h=storage_provider_raw_p*sum_i((b_p_i/sum_packet_b_p_i)*f_i_h)，全实际包成员及正已知分母。每来源逐capture直接存储与汇总包存储互斥。保留GB=10^9字节/GiB=2^30字节、raw/归一状态及冻结图/来源/责任池版本，归一来源按原分母恢复。仅跳过已证明完成的精确归属层；去已含现场电力资产网络，不移除真实必需后台源。 | network_source_hours; reserved_endpoint_seconds_h; sum_all_endpoint_seconds; interval_ID; unique_attempt_ID; event_source; line_processing_seconds_h; sum_all_event_line_seconds; capture_ID; footprint_m2_i_h; coverage_seconds_i_h; all_capture_area_seconds_i; f_i_h; frozen_map_version; source_i; capture_source_ID; capture_unit; capture_vector; capture_original_denominator; storage_provider_raw_p; storage_mode; actual_retained_bytes_i; actual_retention_seconds_i; b_p_i; sum_packet_b_p_i; packet_membership; GB_GiB; raw_or_normalized; original_denominator; attribution_level; owner; original_pool; version | 原分子 |  |
| c_material | service_output | 每实际制剂/收据/标签/外包来源s保留实际来源单位的原净m0_s，排独立芯/容器。持续守恒为原收货=累计最终外送+当前互斥未用/开封/WIP/溶液/薄膜/工具/待运废物来源状态+已知缺失+符号残差，转态替换且来源kg排新增冲水污物。每共享首用事件先固定q_first_event_s为该原来源实际实测领出量，联first_use_event_ID/source_portion_ID。清洁每遍d_clean_h=actual_cleaned_m2_h+exclusive_failed_reserved_cleaned_m2_h，须同一唯一遍次跨全受益含零销售失败预留区的互斥实测足迹；失败预留仅可计该遍实际清洁面积，不新增重叠足迹。正已知总量下G_first_sh=q_first_event_s*d_clean_h/sum_all_cleaned_driver_m2。收据标签纸用实际printed_line_rectangle_m2_h，即分给该来源行/尝试的实物纸矩形，含失败空白行，不是着墨像素。实际作业布局面积须完整互斥分区：行矩形、专属空白裁边、共享空白裁边彼此不重叠；空白裁边仅含全部行矩形之外的实测剩余面积。失败空白行已在行矩形内的不能再加空白裁边。全部行矩形加专属空白裁边加共享空白裁边，须等同一原来源作业actual_job_used_paper_m2，保实测卷宽进纸长度及布局分区成员版本；超记录面积不确定性的差异阻完整，不能强行重归一。专属空白裁边直接归，实际shared_blank_cut_m2按各行矩形分：d_paper_h=printed_line_rectangle_m2_h+exclusive_blank_cut_m2_h+shared_blank_cut_m2*printed_line_rectangle_m2_h/sum_all_line_rectangle_m2；G_first_sh=q_first_event_s*d_paper_h/sum_all_paper_driver_m2。冻结实际作业布局行责任，含全尝试空白裁边，分母正已知；不每行整卷或仅归一已知成员。对单具名责任直接实测材料是实际事件单受益特例，不可虚构共享驱动。互斥用前损失q_pre_loss_s按事故前记录全部受益同来源单位reserved_quantity_s_h：G_pre_sh=q_pre_loss_s*reserved_quantity_s_h/sum_all_reserved_quantity_s；预留责任不存在/未知阻完整，不未来销量或均分。G_sh为原来源全历史首用分配+互斥用前损失分配；各source_portion_ID首领仅一次，复用冲洗再用不新增制造需求。原制造/独立入场向量分别(G_sh/m0_s)*V_mfg_s及(G_sh/m0_s)*V_in_s，每原责任池版本修订替换旧历史分子。净纸排实际芯外包，已印WIP保原纸及印刷用电责任。共享印刷/实验供应或运行原量X_event保实际原单位，N_event_h=X_event*actual_resource_processing_seconds_h/sum_all_resource_processing_seconds。处理秒是同一同质资源阶段各实际来源行/实验样品实测占用处理区间，含失败尝试及真实预留处理时间，覆盖全事件成员工位。实验sample_ID保实际原煤来源池，后续复用结果不再买实验。冻结事件成员资源阶段时序版本原分母。异质资源阶段须先有互斥实测原来源量才用公式；成员未知、来源未拆或正源分母零未知均不完整，不另选计数菜单。每完整一次性容器在首开或互斥开前损失独立计数；共享首开n_open按同一具名开封事件驱动n_open*d_event_h/sum_all_event_driver分完整件，事件类型固定映射：清洁用d_clean_h，收据标签纸用d_paper_h，印刷实验用actual_resource_processing_seconds_h；保opening_event_type及匹配同单位分母，不任选驱动或混单位求和，不能G_sh/m0_s或制剂kg拆容器制造。开前损失完整容器按实际reserved_container_count_h/sum_all_reserved_container_count。保唯一container_ID/open_or_loss_event、全BOM和原责任历史，分配件数和等实际件数；制造和独立入场同此件数一次。实际复用容器布拖按c_assets匹配暴露寿命，不在暴露外追加整件需求。实际洗水制剂处理独立。完整液体外运互斥直接毛皮重或实排m3*同态实测密度，不再扣复用留存。明确完整混载须签实际组成状态接纳和全处理，煤来源QA不是另整量废物。实际实验取样材料处理保原责任及互斥供应范围。 | original_source_ID; source_portion_ID; original_owner; m0_s; unit; cumulative_final_exports; current_exclusive_states; known_missing; signed_residual; first_use_event_ID; q_first_event_s; cleaning_pass_ID; actual_cleaned_m2_h; exclusive_failed_reserved_cleaned_m2_h; d_clean_h; sum_all_cleaned_driver_m2; G_first_sh; print_job_ID; layout_version; source_line_ID; printed_line_rectangle_m2_h; exclusive_blank_cut_m2_h; shared_blank_cut_m2; sum_all_line_rectangle_m2; d_paper_h; sum_all_paper_driver_m2; pre_use_loss_event_ID; q_pre_loss_s; reserved_quantity_s_h; sum_all_reserved_quantity_s; G_pre_sh; G_sh; V_mfg_s; V_in_s; old_fraction_vector; new_fraction_vector; printed_WIP; printing_energy_source; X_event; source_unit; event_member_ID; resource_ID; homogeneous_stage_ID; sample_ID; sample_original_source_pool; processing_interval_start_end; actual_resource_processing_seconds_h; sum_all_resource_processing_seconds; N_event_h; event_membership_version; original_denominator; container_ID; open_or_loss_event; opening_event_type; full_container_BOM; n_open; d_event_h; sum_all_event_driver; reserved_container_count_h; sum_all_reserved_container_count; actual_complete_container_count; allocated_container_count_h; cleaned_m2; lifetime_exposure; measured_m3; same_state_density; gross; tare; quantity_mode; added_water; dirt; coal_origin_kg; receiver; actual_constituents; treatment_scope; lab_activity; original_pool; version; actual_job_used_paper_m2; measured_web_width_m; measured_paper_advance_m; paper_partition_membership_version; paper_partition_area_uncertainty | 原分子 |  |
| c_merge | service_output; original_coal; original_bag | 核心原分子为3.6*E_h MJ、B_F_wet kg、N_F_bag Item(s)、Q服务Item(s)、实际保管件数、W_coal/W_full/W_empty kg及D_air/J_water_out/J_water_in kg。外模块raw N_jr直接保留，归一z_jr按精确原分母/池/版本恢复N_jr=z_jr*D_j，仅乘尚缺原责任份额。核对事件/对象/时间/阶段重叠。逐同交换/属性/单位/状态/介质和兼容边界r，N_total_r=N_core_r+sum_j N_jr、amount_r=N_total_r/Q一次。不加异单位或raw与归一量。排S商品制造入场；另声明GOODS系统可加实际S原煤袋向量一次，不默认名义1袋/40lb。保管输出仅物理QA，实际F输入和废物处理仍表征。完整须全部真实支持/载体/身份/供应绑定及来源/库存/空气水对账，不止schema/fingerprint。 | E_h; B_F_wet; N_F_bag; Q; N_supplier; N_external; N_internal; W_coal; W_full; W_empty; D_air; J_water_out; J_water_in; N_core_r; module_ID; raw_or_normalized; N_jr; z_jr; D_j; source_ID; event_ID; object_ID; time_interval; stage; exchange_UUID; property_UUID; unit; state; medium; original_owner; original_pool; version | 兼容完整每服务清单或明确局部核心 | ghg2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_route | retail | 适用前核b_route/b_facility；原批封口BOM及Q不可从泛库存页或无烟营销推定。 | 签现场路线审计及实际来源交易证据 |
| q_moisture | failure; residual | 执行c_moisture方法状态适用、密封来源链、合格SOP、水专属回收及重复异质不确定性，保失败结果，不编温时限默认。 | 原实验协议称重、空白回收及不确定性重采记录 |
| q_sources | failure; custody; residual | 煤干物质来源、完整袋二元责任、商品袋数、完整湿载体账分开对账；已知缺失与符号残差不同。接收来源向量细分未知阻止完整，不为零或质量拆分。 | 原来源版本及互斥当前终态对账 |
| q_air | air | 空气路径粒径覆盖、来源区分和匹配湿度背景须完整，含不确定性及实际储存捕集液路。未知负或未测条件不确定，不零排或信用。 | 校准原控制体数据、来源空白模式及独立载体来源闭合 |
| q_completion | retail; failure; custody; residual; air | 每实际条件过程记存在、有据不存在或未解及原因责任覆盖。完整须真实身份、支持原子卡协议、全处理运输范围和c_merge来源去重。不采用默认因子范围或未知零。 | 签实际来源清单、原供应范围及可复现原量到Q审计 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | retail; failure; custody; residual; air | 各实际flowUUID须官方直读/公开状态/原件哈希证据及精确官方双语名type状态属性单位介质；候选未绑定在逐行完成前未验证。历史AC/count支持非新在线核验或供电组合。 |  |
| v_quantity | retail; failure; custody; residual; air | 执行全部固定支持规则、来源驱动单位、共同Q及原分母；拒重复原来源、重叠载体、未释负通量库存、遗漏F输入、二次归一或丢零销售池。 |  |
| v_scope | retail; failure; custody; residual; air | q_completion满足前仍局部增量零售核心；强制方法执行/现场身份未知即不完整，即使投影检查marker通过，保候选及独立科学/翻译发布审查要求。 |  |

## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 增量前景零售服务候选方法；未提供已完成数据集。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 全部适用支持补齐规则及实际流供应绑定后，仅匹配实体门店批次配置服务。 |
| excluded_use | 整CPC分类、商品制造、供热燃烧、线上自提、批发，或由局部核心声称完整业务。 |
| required_metadata | 全部参考限定、实际来源责任池版本、原分母、路线和完整性登记。 |
| required_quality_disclosure | 历史UUID观测、未绑定行、水分SOP及来源向量核验、实测覆盖校准不确定性、库存残差及待科学翻译发布审查。 |
| update_trigger | 实际来源批次BOM路线变化、后续验收去向、水分粉尘方法/不确定性、资产寿命供应范围或身份修正。 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un62191 | official_guidance | UNSD CPC Version3.0 subclass62191, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62191 | 明确含煤110组，不使全部燃料或全部木燃料等价。 |
| un621 | official_guidance | UNSD CPC Version3.0 group621, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/621 | 实体非专门店渠道，仍须实际现场gate。 |
| blaschak | handbook | Blaschak Anthracite, Residential Uses, https://www.blaschakanthracite.com/residential-uses/ ; web snapshot2026-10-30 | 实际预洗分级无烟煤原40lb手提袋身份；无烟排放营销非零排、实测LCI或安全证明。 |
| coles | handbook | Cole’s Hardware, 40 LB RICE COAL, SKU7788700/MPN RICE, https://www.coleshardware.com/40-lb-rice-coal-7788700 ; web snapshot2026-10-30 | 具体米粒级商品及混合品类线索；线上自提库存横幅不证明实际合格门店库存交易。 |
| astm-moisture | standard | ASTM D3302/D3302M-22a, Standard Test Method for Total Moisture in Coal, DOI10.1520/D3302_D3302M-22A, https://store.astm.org/d3302_d3302m-22a.html ; public catalog Scope1.1–1.4 and Significance5.1–5.2 inspected2026-10-30 | 粗煤方法适用及仲裁法选定；此处未取得核验完整许可程序。其排煤浆污泥及小于0.5mm粉煤；细态水专属方法为另声明PCR协议，不宣称ASTM符合。 |
| ghg2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011, chapter9 PDFpage65/printed63, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅一般细分和物理分配一致性。具体煤袋来源责任、驱动、支持范围、空气水协议及公式为声明PCR设计，不声称全标准符合。 |
