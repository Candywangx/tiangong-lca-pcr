---
status: candidate
content_maturity: authored_methodology
translation_status: aligned
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-paper-and-paperboard
language: zh-CN
sync_with: pcr.en-US.md
---

# 混合店原封500张A4 80克每平方米白色复印纸令包零售服务

## 1. 范围与适用性

本PCR为一种同质原封复印纸令包配置定义实体混合店增量零售服务，须满足b_route和b_channel材料及渠道门。参考量为最终有效服务件数。已列前景是声明核心；c_complete规定声称完整经营之前的强制支持补全。制造商规格证明真实示例，不证明批次组成、实际库存、清单数量或法规符合性。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-paper-and-paperboard |
| classification_refs | CPC3.0 62194 — Non-specialized store retail trade services, of paper and paperboard；仅较窄产品及路线子集。 |
| covered_products | b_route及b_channel下经核实单一原A4 210×297毫米80克每平方米白色复印纸500张令包SKU的实体混合店服务。 |
| excluded_products | 目录其他克重、规格、张数，纸浆、纸板销售、壁纸、窗用透明覆盖物、涂布美术纸、热敏纸、不干胶纸，打印、裁切、重包服务及未准入渠道。 |
| representative_product | 制造商目录第2页单独列示的Double A Copy Paper 80 gsm Pack500 A4，不是同页100或40张、70或75克或90克纸种。实际地区、批次、涂层、物料清单仍须核实。 |
| production_route | 接收原令包；仅开运输箱；环境储存、陈列；现场货架选择；收银及电子凭证；顾客自行携走；追踪原退回、失败及指定残余。 |
| market_state | 原厂未开启、无损500张白色复印纸令包；声明实际涂层、水分及完整包装，不从品牌推定。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 混合店原封500张A4 80克每平方米白色复印纸令包零售服务 |
| How much | 一次最终有效原令包零售服务，池内Q为不同合格原始ID数。 |
| How well | 符合原未开启规格及消费者验收记录；适用b_gate排除和撤销。 |
| How long or cycle | 从接收到声明退货政策期限的最终去向，保留后续原池修订。 |
| reference_flow_link | paper_retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 混合店原封500张A4 80克每平方米白色复印纸令包零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际分店及混合品类; 实体货架与收银路线; 制造商及地区版本; SKU及批次; 纸纤维填料施胶涂层; A4尺寸及80克500张配置; 原包装完整物料清单; 纸及包装实测质量与湿基水分方法; 供应商发货及入场边界; 池及退货期限; 最终验收与原来源历史; 供应商边界及强制补全状态 |

全部必需限定信息须在实际数据集元数据、过程说明或等效字段声明；缺失则该数据集不完整。服务身份仍未核实；数量属性及单位组采用已保留原始官方响应的历史观察，不据此证明服务身份。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_count | paper_retail_service | 物品数量 | Item(s) | 参考输出为一次最终有效原服务Q/Q，采用cp_goods及c_goods，不能把服务件数等同纸千克。 |
| m_mass | carton_input; damaged_ream_waste; carton_waste | 质量 | kg | 仅实际同状态净千克，采用c_carton、c_waste。名义克重、张数、箱规格不能代替质量。 |
| selected_energy_identity | site_ac | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 所选交流电身份只有一个参考能量属性。实际归属量保留本行单位；其单位组中1kWh=3.6MJ。与另一能量单位来源合并或表达参考MJ交换前仅换算一次，同一分子不得重复换算，也不能推定供应组合。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 零售商接收成品原令包；供应商发货的纸与内包装同实际入场分开；运输箱有独立原来源。 |
| starting_condition_role | 接收门点的增量零售服务，含F背景耦合及强制支持补全。 |
| product_classification_scope | CPC62194较窄子集；321组排除32194不能建立全叶覆盖。 |
| recursive_input_rule | 只有supplier_return_ream与external_retained_ream是不作特征化的保管辅助行。failed_ream与carton_input保留各自强制原供应向量；不能向RETAIL递归添加全部成功商品制造。 |
| upstream_dataset_requirement | 核实供应商原门点、物料清单向量及独立入场、兼容属性单位、来源归属；规格本身不是清单数据集。 |
| disclosure | 披露核心、已补全RETAIL及另行扩展GOODS的区别，全部边界、来源、身份缺口及固定补全状态。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_route | all inventory rows | 每个池仅适用已核实同一制造商、地区、修订版本及原厂500张A4 210×297毫米80克每平方米白色复印纸SKU。实证示例为制造商目录第2页Double A Copy Paper 80 gsm Pack500。必须取得批次特定纤维、填料、施胶、涂层声明及原令包封闭件、衬层、标签、胶粘剂完整物料清单；包装图片或该目录不能证明这些事实。记录实际涂层状态及其不存在证据，不能从白度或适合复印推定无涂层。排除涂布美术纸、热敏纸、不干胶纸、预印文具、纸板销售、纸浆、壁纸及纸制窗用透明覆盖物（32194）。材料声明冲突或未知时不能适用。 | un-cpc62194; un-cpc32194; doublea-catalogue |
| b_channel | all inventory rows | 要求注明日期的现场品类登记，证明实质混合商品，并把纸品货架选择及普通消费者收银关联至实际分店、SKU、批次收货。Fairmart888仅为渠道线索，不证明现场选择、库存或零售而非批发。仅纳入实体货架选择、收银付款、电子凭证及顾客自行携走；排除专营、批发、线上下单、自提、店方配送及顾客旅程。整个观测期间，每个被服务的接收、储存、陈列、收银、管理、清洁区域均须有实际不存在证据，覆盖现场打印、裁切、重包、加湿、烘干、燃烧、燃气、外购热和冷、非制冷剂加热、制冷及制冷剂空调。覆盖房东、租赁、共用、场外供应调温以及临时、备用、维修来源，包含开店、关店、空闲时段。要求覆盖全期的公用设施账单、计量、服务记录，房东及供应商边界，设备和临时作业日志，并关联注明日期的检查及区域、时段覆盖；仅投运检查或变更检查不足。任何实际存在来源或未知时段、边界都会阻断本准入路线，直至另行评审适用路线；不能把未知记零。环境储存、电灯电扇及必要支持仍纳入。 | un-cpc62194; fairmart-888 |
| b_gate | retail | 起点为零售商接收成品原令包及独立运输箱。每个原始ID以最终有效顾客验收或有记录的非服务去向为终点。只有规格、张数吻合且完整未开封、无损，并有消费者验收记录的令包才合格；记录水分、破损、数量拒收原因。开封令包、按张拆售、测试打印或重新包装均不能成为本服务。预先固定同一配置池，保留全部尝试、拒收、退回、重复、丢失、报废及转移事件，包括无销售期间。按声明退货政策期限截账，并持续用迟到事件修订。Q为最终有效验收的不同原始ID数，每个仅计一次；无实物移动的验收撤销也移除该ID，单纯财务变化则不移除。同一原始ID再次出售不产生第二次服务。Q全为零的池保持不可归一化，不能转走无法解释的负担。 | doublea-catalogue |
| b_source | failed_ream | 为每种同质原令包建立原始来源父级台账：W_dispatch仅包含供应商发货时的制造及原内包装向量，排除外运输箱及全部接收、入场运输。原来源等价令数必须满足N_in=N_S+N_F+N_T+N_O。S随最终验收货物转移，排除在完整增量RETAIL零售服务之外；只有另行标明的GOODS商品系统才能添加一次W_S/Q。F包含不可逆失败、已确认丢失的原货物，以及未移交背景责任而留在外部的未验收货物；failed_ream是真实Product输入，以N_F/Q乘W_F/N_F展开一次，不能再加第二次W_F。F的入场运输另行强制纳入。T必须有相同门点制造与入场运输责任继续承担的签认，包括退供应商、内部转移；仅有实物移动不成立。O保留未结库存责任。退回后再售的原令包应替换原归属记录，不重复制造。 | ghg-product2011 |
| b_components | failed_ream; residual | 只有原纸与内令包整体环境向量具有同一S/F/T/O去向时，才使用一个完整原纸加内包装供应商向量。纸与包装的实物后代不能再次获得整个向量。组件归属不同时必须取得真实独立供应商组件向量及原始实测属性数量，新增匹配的Product输入卡，从整体来源中精确移除该组件，并逐向量独立守恒；不能按组件质量拆分环境向量。外运输箱始终采用独立制造、入场运输来源，不含在failed_ream中。纸的净千克数排除令包装、纸箱和托盘，但包含实际填料、施胶和涂层。 | doublea-catalogue |
| b_paper | retail; residual | 不得以名义张面积乘克重、目录包重或出厂水分替代收货、发运、废物称重。每个实际批次在收货、截账及每次破损或退回状态变化时采样：保留独立编号的牺牲性匹配令包，分别取得纸和包装净千克数，记录样品密封、时间、温度、相对湿度及经实际纸基质验证的烘箱气流转移库仑Karl Fischer水测定所得湿基比例w。采样消耗的原件若无有效服务即归F。m_dry=paper_wet_kg*(1-w)只作库存质控；不得按干质量归一化Q，也不能从湿重下降推定纸损失或环境水排放。未开封不证明w恒定。使用认证水标准、试剂及烘箱空白与基质加标回收，记录经验证的烘箱温度和提取时间。water_mass_kg为仪器已扣空白的水结果，不能再减同一空白。水分变化必须有实测终点样品的缩放、回收率和不确定度，不能虚构已销毁等分样的重复使用。实际发生漏水、冷凝或室内转移时记录路径；水去向未知时保留为受调查平衡缺口，在有经评审匹配转移或载体扩展前不能声称环境完整。 | doublea-catalogue; xerox-paper-storage |
| b_core | all inventory rows | 已列核心包括分配后的现场交流电、失败原令包制造、外纸箱首次使用、实测特定废物载体及服务输出。在c_complete按a_shared、a_digital、a_assets、a_transport及a_material恢复所有强制支持模块之前，它只是部分增量前景。必要支持包括接收、搬运、退回运输；建筑、货架、电灯电扇、手推车、收银及信息/摄像设备资产；支付、网络、安防、管理运行；清洁及实际店内耗用物资。数据集完整前，每个实际新增交换都须有原子双语卡、真实过程协议、身份、属性、单位、状态和供应商边界。不能把不同设备的Item数量相加，或把修理材料质量之和称作完整资产。 | ghg-product2011 |
| b_waste | damaged_ream_waste; carton_waste | 废物数量采用当前状态实际联单净千克，保留皮重、秤及实际组分证据，不能再从直接发运量扣除留存或重复使用库存。damaged_ream_waste只适用真实整包废纸加原包装载体，须有接收方对全部实际组分及状态的签认和匹配完整处理边界；carton_waste为独立压平的瓦楞运输纸箱，含实际胶和油墨。许可证或收集收据不等于完整处理。处理供应商耦合仅使用同一状态最终确已完整处理的唯一载体净千克；所有拒收、退回、部分处理的发运、搬运和运输仍保留。held_predicted_close_kg=opening_held_kg+generation_kg+physical_return_kg+measured_delta_held_state_kg-dispatch_kg-sample_final_removed_kg-confirmed_missing_held_kg；R_held_kg=held_predicted_close_kg-closing_held_kg=signed_residual_kg。正R为未解释短缺，负R为未解释盈余。期初、流入、流出及独立观测期末均保留实际千克类型，残差不能变成虚构发运或处理。报废仅作一次货物转待处理废物，废物发运时不能再次扣货。变更或部分处理载体及分离包装、纸张须先补充匹配原子卡，不能自动给予回收抵扣。  按c_held_state处理独立实测有符号水分、状态变化及未已计入发运的最终样品移出，未知状态变化不能记零。这些仅修正当前湿千克库存，不能修正冻结原参考纸箱G、m0。 | ghg-product2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 接收、储存及实体零售原令包 | required | 准入原配置及现场路线 | 增量零售前景及强制补全 | 一次参考服务 |
| residual | 管理指定原载体至最终处理 | required | 采集存在或不存在证据；仅输出实际指定载体 | 保留失败、退回运行的废物去向 | 一次参考服务 |

### 过程：原令包零售（`retail`）

#### 输入

##### 产品流

###### 零售计量点交流电（`site_ac`）

实际接收、储存、收银及共享支持电路购入的交流电，排除已含在核实供应商包内的公用能耗；不能从设备铭牌推定耗电。

所选流使用单一净热值能量属性。清单保留声明的实测能量单位；能量单位组支持1kWh=3.6MJ。将kWh记录表达为参考MJ（含兼容来源合并）时仅换算一次，保留原kWh表计分子及来源归属，不能另加一次电力需求。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：E_h/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_power`
- 来源：`ghg-product2011`

###### 供应商发货时原封500张A4 80克每平方米白色复印纸令包（`failed_ream`）

归属不可逆F的原来源等价完整原纸及内包装制造；排除外运输箱和入场运输。成功S商品的原制造不作为RETAIL投入。

- 选定流：供应商发货时原封500张A4 80克每平方米白色复印纸令包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：`doublea-catalogue`; `ghg-product2011`

###### 供应商发货时复印纸令包完整瓦楞运输纸箱（`carton_input`）

首次开箱或不可逆使用前损失的实际完整纸箱材料，含真实胶和油墨、排除箱内令包；使用相同完整构造的供应商质量向量。

- 选定流：供应商发货时复印纸令包完整瓦楞运输纸箱
- 流属性/单位：质量 / kg
- 数量规则：G_carton_h/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carton`
- 来源：`doublea-catalogue`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 混合店原封500张A4 80克每平方米白色复印纸令包零售服务（`paper_retail_service`）

同一原令包ID从接收到实体店最终有效验收的一次合格增量零售服务。这是服务计数，非纸制造或名义包重。

- 选定流：混合店原封500张A4 80克每平方米白色复印纸令包零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_goods`
- 来源：`un-cpc62194`; `doublea-catalogue`

###### 交回供应商的完整未开封原复印纸令包（`supplier_return_ream`）

实物保管辅助行按同SKU完整令包唯一签认实际(original_ream_ID, supplier_handover_event_ID)对计量：多令联单中每个实际原令移动均计1；不同事件ID的真实重复向外移动可计，重复记录、仅状态变更不计。N_return不是背景T、截账最终保管状态或新的成功服务，采用c_goods。只有本输出与external_retained_ream是不作特征化的保管辅助行。损坏或开封退回须新增状态特定原子扩展。

- 选定流：交回供应商的完整未开封原复印纸令包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_return/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：`ghg-product2011`

###### 未获最终有效验收而留在外部的完整未开封原复印纸令包（`external_retained_ream`）

实物保管辅助行计截账时留在外部、完整未开封且无最终有效验收的不同原始ID，保留实际接收者及状态；N_external是截账库存状态，不是另一次实物移动，也不自动为废物，采用c_goods。背景按b_source保留F或签认T。外部留存开封、破损货物须有匹配原子扩展，并继续原来源归属。

- 选定流：未获最终有效验收而留在外部的完整未开封原复印纸令包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_external/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_goods`
- 来源：`ghg-product2011`

##### 废物流

##### 基本流

### 过程：原载体残余管理（`residual`）

#### 输入

##### 产品流

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 按实际收集状态的废弃复印纸令包及原内包装（`damaged_ream_waste`）

实测当前状态完整纸加包装载体，含实际水分，并获匹配完整处理接收。排除另行分离的纸、包装、外来垃圾及运输箱。供应商边界内部转移不另生处理。

- 选定流：按实际收集状态的废弃复印纸令包及原内包装
- 流属性/单位：质量 / kg
- 数量规则：D_ream_net/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_ream_waste`
- 来源：`ghg-product2011`

###### 废弃压平复印纸运输瓦楞纸箱（`carton_waste`）

实际完整纸箱构造（含胶及油墨）的直接联单净质量；不能以名义箱数转千克，不能重复扣除库存。

- 选定流：废弃压平复印纸运输瓦楞纸箱
- 流属性/单位：质量 / kg
- 数量规则：D_carton_net/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_carton_waste`
- 来源：`ghg-product2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_shared | site_ac; retail | 先按来源分表，再分配。每个来源s把实测E_active_s、E_idle_s、E_fixed_s按相同能量单位拆分，连同关店、失败期间与父表总量核对。收银、搬运、设备的主动能耗按所有受益者实际占用设备秒分配；收银、信息设备、电灯、电扇的空闲及固定设备来源按实测预留设备秒分配，包括空预留。物理房间、设施固定来源按不重叠区域、时段实测服务面积平方米乘小时分配，包括预留空库存空间。e_s_h=E_s*d_s_h/sum_all_h(d_s_h)，随后E_h=sum_s(e_s_h)；不能相加不同维度驱动量，不能在来源内按成功销量分摊。驱动量未知、未分配或全体驱动量和为零时阻断完整性，不能计作零能耗。只有电路证据证明父表包含子表时才允许减去子表。千瓦时乘3.6转兆焦仅做一次。 | ghg-product2011 |
| a_digital | retail | 网络、支付、管理、摄像采集生产及留存储存分别采用经核实的来源向量和单位。每个唯一时段的网络来源连接小时按全体受益者实测预留终端连接秒分配；联单或来源标签不等于最终池归属。支付授权和管理批次均为唯一事件：用实测行项目或任务处理秒形成事件内全体受益者份额，和为1，包含失败尝试。采集生产数量须按每项真实来源单位及原始采集分母实测；用实际时间戳视场内受益者占地平方米乘覆盖秒固定每个采集来源映射，区域时段互斥，含空预留。留存不得重新分配采集生产。储存直接归属模式使用按原始采集ID核实的字节乘秒；供应商汇总模式先按字节秒分配完整匹配储存包，再应用该采集冻结的原始映射一次。两种模式互斥。GB=10^9字节，GiB=2^30字节。核实原始供应商边界，网络接入不能代替支付、安防、管理；供应商已含的本地电力、资本、运输须按真实来源组分、时间、资产、阶段排除外部重复，不能只比较供应商ID。 | ghg-product2011 |
| a_assets | retail | 逐个实际同质建筑、货架、电灯、电扇、手推车、收银、信息或摄像型号及物料向量V保留发货制造、安装、运输、事件修理、退役的互斥边界，核实完整包证据。建筑与货架采用实测服务平方米乘小时暴露量；有动力设备及手推车采用实测预留设备小时，不猜寿命。f_expected_h=e_recorded_h/L_expected，L为有证据的相同单位预期终身总暴露量。每次寿命或向量修订都对每个历史受益者以f_new_h*V_new替换f_old_h*V_old并记录差额；最终退役时在全部持久历史上设f_final_h=e_actual_h/sum_all_h(e_actual_h)。残余1-sum_old_f只是质控，不是分配捷径。独立维修、采购、退役运输先归属该资产，再采用同一历史份额；已归属最终原池的数量不再乘第二次份额。终端载体千克乘f一次，不再乘制造份额；供应商已含退役处理不另作前景废物。边界或暴露量未知时不能完整。 | ghg-product2011 |
| a_transport | retail; residual | 逐接收、F入场、退供应商、废物、资产、物资保留实际货车、来源、车次、路段、载荷及预留原联单映射。本窄路线要求有证据的质量容量约束，并分清同车载货吨公里、正空驶车公里和静止有动力怠速车小时来源边界；供应商已含的燃料、公用能耗不能在外重复。c_transport固定车次至联单独立份额：载货用实际载荷千克，空驶用预先预留千克乘实际空驶公里，静止有动力怠速用同车次预留千克乘实际有动力怠速小时。纳入失败及未用预留，逐项要求已知正的全受益者分母。零载荷不能抹去空驶或怠速来源。核实供应商已归属联单时仅跳车次份额层；供应商覆盖本身不证明分配。精确归属原最终责任、池、版本时仅跳其已完成责任层。未分解车次包若缺所需运行模式分子或份额仍不完整。联单归属后再应用F、首次使用或来源责任份额；独立资产货运先归实际资产，再按同一a_assets全部历史份额及替换版本应用一次。成功S制造及入场仍归GOODS，T和O保留实际原来源。每次失败、退回运输及搬运仍纳入。 | ghg-product2011 |
| a_material | carton_input; retail | 来源责任持久台账必须与实物状态台账分开。逐完整构造来源s及每个纸箱、source_portion_ID，保留匹配供应商向量的实际原发货或参考数量m0_source_ref_kg及参考状态；整纸箱制造仍保留一个完整构造来源。当前湿千克仅作实物质控，不能成为新的制造数量：首次开箱查回每件原实测参考量，不能取当时湿称。原数量或状态缺失会阻断来源耦合；不能采用名义箱重或假设水分恒定。c_material_event固定纸箱、清洁每遍、任务、使用前损失及完整容器的事件至受益者细分和份额。G_source_h只计首次使用及互斥不可逆使用前损失中归属h的部分一次；已用、再用库存不再获得制造或入场来源。已计G的确认丢失不能再次加作未归属丢失；责任未知的缺失部分继续保留未归属原责任。c_source_history独立守恒两类台账，修订时替换全部历史G、m0、向量分配。实际制造与独立入场向量分开，各仅乘一次G_source_h/m0_source_ref_kg。完整原一次性容器制造及入场按c_material_event独立互斥首开或首开前不可逆破损、丢失件数及固定真实事件份额归属，不能按配方千克拆分。真实可重复用容器须采用a_assets经评审寿命来源。真实完整平方米清洁合同只有在签认全部组分、设备、水、公用设施、运输、处理边界，实际原分母及固定逐遍实清面积份额时才可完整保留；否则添加真实物资、水、排液原子卡。按c_support_material保留互斥配方来源状态、当前完整湿载体千克及直接水与排液方法；额外顾客袋只有实际无袋证明才可排除。 | ghg-product2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | failed_ream; paper_retail_service; supplier_return_ream; external_retained_ream | 原货物事件台账 | pool_ID; version; source_parent_ID; original_ream_ID; SKU; manufacturer; region; revision; lot; paper_fibre_filler_sizing_coating; wrapper_full_BOM; carton_source_ID; received_count; gross_customer_handover_count; physical_customer_return_count; supplier_handover_count; internal_transfer_count; condemnation_count; goods_open_count; goods_close_count; confirmed_missing_count; signed_residual_count; final_acceptance_status; acceptance_date; revocation_date; reason; recipient; current_state; N_in; N_S; N_F; N_T; N_O; N_return; N_external; W_dispatch; W_F; responsibility_signoff; return_horizon; late_event_ID; goods_predicted_close; R_goods_count; supplier_handover_event_ID; supplier_handover_signed; supplier_handover_state; duplicate_document_ID; external_custody_cutoff; external_custody_original_ID; external_custody_state; transfer_ID | 逐原令包扫描，按c_goods分别保留实物事件ID、实际签认供应商交接及截账保管、验收快照。重复真实移动按事件计，重复单据及无移动修订不计。独立盘点货物，待处理废物千克在自身过程视图。按b_channel采集全期实际渠道、区域、公用设施、供应商及临时来源不存在证据，不能仅用投运检查。  N_return按唯一原令及交接事件对计，不能按整联单ID计；严格采用c_goods的供应接收、内部调入、顾客退回、内部调出方向及汇总相消规则。 | 件；来源向量声明单位 | 每次收货及事件；每日盘点；截账及迟到修订 | 贯穿声明退货期限的全部原历史，含零销售期间 | 实际店、供应商门点及具名外部接收者 | 每参考流 | 注明日期的标签、物料清单、收货、收银、退回、盘点及T签认证据；未解身份不能以替代UUID充数。 |
| cp_power | retail | site_ac | 电路及受益者时长记录 | source_ID; parent_meter_ID; submeter_ID; circuit_scope; timestamp; meter_start; meter_end; kWh; E_active_s; E_idle_s; E_fixed_s; d_s_h; all_beneficiary_driver; engaged_device_seconds; reserved_device_seconds; served_area_m2; served_hours; empty_reservations; closure_failure_intervals; calibration; E_h; Q; version | 在时段起止读来源表，保留已校准主动、空闲、固定电路测量及全体受益者设备预留、服务区域映射，含关店期间。执行a_shared；投运检查证明减表是否位于父表内。 | 千瓦时；兆焦；秒；平方米乘小时 | 每个计量时段；电路或配置改变 | 整个声明池，含失败及关店 | 实际接收、储存、收银及共享电路边界 | 每参考流 | 校准证书、时段完整性、电路图及预留审计。 |
| cp_carton | retail | carton_input | 纸箱原来源及首次使用台账 | carton_source_ID; source_portion_ID; original_BOM; supplier_vector_units; m_source_received; reused_event; confirmed_missing_source_kg; signed_source_residual_kg; inbound_source_ID; owner_pool_version; G_carton_h; Q; material_event_ID; q_event_source_ref_kg; q_direct_e_h; q_shared_e; q_e_h; a_event_h; n_enclosed_original_ream_e_h; all_enclosed_original_ream_e; enclosed_original_ID_map; preloss_event_ID; q_preloss_source_ref_kg; a_preloss_h; direct_preloss_owner_evidence; reserved_source_units_e_h; all_reserved_source_units_e; pre_event_reservation_map; G_source_h; original_denominator_D; normalized_z; raw_or_normalized_mode; m0_source_ref_kg; source_reference_state; source_export_net_ref_kg; source_confirmed_missing_ref_kg; source_current_ref_kg; predicted_current_ref_kg; R_source_physical_kg; unassigned_neverused_ref_kg; unassigned_transfer_ref_kg; unassigned_missing_ref_kg; R_source_owner_kg; V_manufacture_s; V_inbound_s; G_new_s_h; m0_new_s; V_manufacture_new_s; V_inbound_new_s; G_old_s_h; m0_old_s; V_manufacture_old_s; V_inbound_old_s; original_owner; original_pool; version; original_carton_ID; original_reference_quantity_record; current_carton_wet_kg; predicted_owner_unassigned_kg; source_current_neverused_ref_kg; source_current_used_ref_kg; source_current_held_waste_ref_kg; source_gross_export_ref_kg; source_actual_return_ref_kg; reservation_unit; reservation_source_portion_ID | 按original_carton_ID、source_portion_ID查回原实测完整纸箱发货或参考量及状态，保留供应商或参考量签认证据。用已校准秤独立称当前湿纸箱作实物质控，首次开箱不能覆盖原参考千克。每次开箱、取用、使用前损失保留实际直接细分、全部同配置内装原令包ID、事件前预留及归属、池、版本。执行c_material_event、c_source_history；实际实物状态、已知丢失及未解责任分开，修订替换旧记录。 | 有记录原参考状态千克；当前湿千克另列；事件及容器件数 | 每次收货、开箱、损失、转移；截账 | 截至截账及修订的持久来源历史 | 仅实际运输箱 | 每参考流 | 称重、皮重、校准及供应商构造、向量、入场运输证据。 |
| cp_ream_waste | residual | damaged_ream_waste | 整失败令包载体台账 | ledger_ID; source_parent_ID; original_ream_ID; carrier_ID; consignment_ID; attempt_ID; return_ID; state; constituent_BOM; gross_kg; tare_kg; net_kg; opening_held_kg; generation_kg; physical_return_kg; dispatch_kg; closing_held_kg; confirmed_missing_held_kg; signed_residual_kg; receiver_acceptance; final_complete_treatment_kg; treatment_scope; all_failed_transport_ID; D_ream_net; Q; version; held_predicted_close_kg; R_held_kg; state_interval_ID; retained_portion_ID; held_state_before_gross_kg; held_state_before_tare_kg; held_state_after_gross_kg; held_state_after_tare_kg; endpoint_constituent_trace; disjoint_known_physical_flow_kg; measured_delta_held_state_kg; state_change_water_kg; state_change_uncertainty; state_change_status; matched_initial_sample_ID; matched_terminal_sample_ID; sample_recovery; scaling_factor; KF_oven_temperature_C; KF_extraction_time_s; KF_water_standard; KF_reagent_oven_blank; KF_matrix_spike_recovery; KF_blank_correction_status; sample_ID; sample_final_removed_kg; sample_in_dispatch_flag; sample_final_exit_ID; sample_recipient; temporary_held_sample_kg; sample_physical_return_ID; original_carrier_ID; state_version; state_before_time; state_after_time; state_before_temperature_C; state_after_temperature_C; state_before_RH_percent; state_after_RH_percent; initial_sample_water_kg; terminal_sample_water_kg; initial_sample_wet_kg; terminal_sample_wet_kg; initial_retained_matrix_wet_kg; terminal_retained_matrix_wet_kg; initial_scaling_factor; terminal_scaling_factor; initial_scaled_water_kg; terminal_scaled_water_kg; excluded_physical_event_IDs; matrix_ID; matrix_construction; matched_matrix_sample_scope; sample_return_kind; prior_sample_final_exit_ID | 产生、发运、实物退回时独立记录千克及相同载体ID，逐实际联单净称。接收方验收及最终完整处理与收集分开记录，保留拒收、部分处理状态。执行b_waste；此过程视图读取共享货物事件，不重复计数或测量。  按c_held_state进行同载体全状态端点称重、水专属性匹配破坏性样品及实测有符号状态变化；实际最终样品移出只有未计发运时才单列，追踪临时待处理样品期末库存和退回，已报废原件不能再报废。未知状态变化阻断完整性，原参考来源责任保持冻结。 | 当前完整载体千克 | 每次产生、联单、退回、状态修订及截账 | 从原报废到最终处理，含退回 | 实际指定纸加包装载体及最终供应商 | 每参考流 | 已校准净重联单、实际组分接收签认、完整处理证据及失败尝试追踪。 |
| cp_carton_waste | residual | carton_waste | 运输纸箱载体台账 | ledger_ID; carton_source_ID; carrier_ID; consignment_ID; attempt_ID; return_ID; state; actual_BOM; gross_kg; tare_kg; net_kg; opening_held_kg; generation_kg; physical_return_kg; dispatch_kg; closing_held_kg; confirmed_missing_held_kg; signed_residual_kg; receiver_acceptance; final_complete_treatment_kg; treatment_scope; all_failed_transport_ID; D_carton_net; Q; version; held_predicted_close_kg; R_held_kg; state_interval_ID; retained_portion_ID; held_state_before_gross_kg; held_state_before_tare_kg; held_state_after_gross_kg; held_state_after_tare_kg; endpoint_constituent_trace; disjoint_known_physical_flow_kg; measured_delta_held_state_kg; state_change_water_kg; state_change_uncertainty; state_change_status; matched_initial_sample_ID; matched_terminal_sample_ID; sample_recovery; scaling_factor; KF_oven_temperature_C; KF_extraction_time_s; KF_water_standard; KF_reagent_oven_blank; KF_matrix_spike_recovery; KF_blank_correction_status; sample_ID; sample_final_removed_kg; sample_in_dispatch_flag; sample_final_exit_ID; sample_recipient; temporary_held_sample_kg; sample_physical_return_ID; original_carrier_ID; state_version; state_before_time; state_after_time; state_before_temperature_C; state_after_temperature_C; state_before_RH_percent; state_after_RH_percent; initial_sample_water_kg; terminal_sample_water_kg; initial_sample_wet_kg; terminal_sample_wet_kg; initial_retained_matrix_wet_kg; terminal_retained_matrix_wet_kg; initial_scaling_factor; terminal_scaling_factor; initial_scaled_water_kg; terminal_scaled_water_kg; excluded_physical_event_IDs; matrix_ID; matrix_construction; matched_matrix_sample_scope; sample_return_kind; prior_sample_final_exit_ID | 独立对纸箱载体采用b_waste直接联单法；排除仍在使用或留存的纸箱，以及已在别处记录的纸加包装载体。供应商包已含处理时不能再加第二次处理投入。  按c_held_state进行同载体全状态端点称重、水专属性匹配破坏性样品及实测有符号状态变化；实际最终样品移出只有未计发运时才单列，追踪临时待处理样品期末库存和退回，已报废原件不能再报废。未知状态变化阻断完整性，原参考来源责任保持冻结。 | 当前纸箱载体千克 | 每次产生、联单、退回、状态修订及截账 | 全部原载体历史，含失败收集 | 实际纸箱载体及最终供应商 | 每参考流 | 同状态称重单、实际构造接收证据、最终处理及尝试ID。 |
| cp_paper_state | retail | failed_ream; paper_retail_service | 批次及匹配破坏性水分样品 | sample_ID; original_ream_ID; lot; sampling_event; sample_seal; sample_time; temperature_C; RH_percent; gross_pack_kg; wrapper_net_kg; paper_wet_kg; paired_sample_ID; water_specific_assay; KF_oven_temperature_C; KF_extraction_time_s; KF_water_standard; KF_reagent_oven_blank; KF_matrix_spike_recovery; KF_blank_correction_status; water_mass_kg; wet_sample_kg; w; sample_recovery; scaling_factor; uncertainty; m_dry; damage; water_path; coating_declaration; Q | 在收货、截账及状态变化按b_paper执行。采用独立编号牺牲性代表匹配样品、按b_paper作烘箱气流转移库仑Karl Fischer基质回收验证及实际同状态净称，保留秤和测定校准、实际提取温度时间及空白校正状态。未经水专属性验证不能把烘干调理质量称作干固体。 | 千克；水湿基比例；摄氏度；相对湿度百分比 | 每批收货、截账及每次相关状态改变 | 匹配原收货及去向终点 | 相同原纸和包装配置；牺牲性样品纳入货物追踪 | 每参考流 | 批次声明、样品谱系、回收、校准及不确定度，不设默认水分。 |
| cp_support | retail | site_ac; failed_ream; carton_input | 强制支持补全来源登记 | module_ID; source_ID; source_units; source_vector; original_denominator_D; raw_numerator_x; normalized_z; raw_or_normalized_mode; source_event_time; constituent_scope; stage; asset_ID; model; full_BOM; e_recorded_h; L_expected; all_h_actual_exposure; f_old_h; V_old; f_new_h; V_new; version; original_owner; original_pool; attribution_level; trip_ID; segment_ID; consignment_ID; route_km; mass_capacity_evidence; empty_vehicle_km; fuel; source_connection_hours; reserved_endpoint_connection_seconds; all_reserved_endpoint_connection_seconds; unique_payment_event; task_line_seconds; all_task_line_seconds; capture_source_ID; capture_source_quantity; capture_original_denominator; capture_vector; frozen_FOV_m2_seconds; all_FOV_m2_seconds; storage_source_ID; storage_mode; stored_bytes; retention_seconds; all_byte_seconds; cleaning_scope; source_portion_ID; original_formulation_kg; cumulative_exports_source_kg; current_exclusive_source_kg; container_first_open_count; container_dispatched_residue_kg; water_import_m3; effluent_V_m3; effluent_density_kg_m3; no_plant_no_print_no_bag_evidence; mandatory_module_status; missing_uncertainty; Q; source_event_quantity; capture_byte_seconds; confirmed_missing_source_kg; signed_source_residual_kg; e_actual_h; storage_source_quantity; current_never_opened_source_kg; current_open_container_source_kg; current_solution_source_kg; current_film_source_kg; current_tool_source_kg; current_held_waste_source_kg; cumulative_dispatched_container_residue_source_kg; material_event_ID; q_event_source_ref_kg; q_direct_e_h; q_shared_e; q_e_h; a_event_h; n_enclosed_original_ream_e_h; all_enclosed_original_ream_e; enclosed_original_ID_map; cleaned_m2_e_h; all_cleaned_m2_e; cleaning_pass_ID; cleaning_failed_zone_ID; task_seconds_e_h; all_task_seconds_e; preloss_event_ID; q_preloss_source_ref_kg; a_preloss_h; direct_preloss_owner_evidence; reserved_source_units_e_h; all_reserved_source_units_e; pre_event_reservation_map; G_source_h; container_ID; container_first_open_count_e; a_container_e_h; C_container_h; cleaning_service_raw_m2; m0_source_ref_kg; source_reference_state; source_export_net_ref_kg; source_confirmed_missing_ref_kg; source_current_ref_kg; predicted_current_ref_kg; R_source_physical_kg; unassigned_neverused_ref_kg; unassigned_transfer_ref_kg; unassigned_missing_ref_kg; R_source_owner_kg; V_manufacture_s; V_inbound_s; G_new_s_h; m0_new_s; V_manufacture_new_s; V_inbound_new_s; G_old_s_h; m0_old_s; V_manufacture_old_s; V_inbound_old_s; C0_container_count; original_carton_ID; original_reference_quantity_record; current_carton_wet_kg; G_carton_h; net_final_exports_source_kg; predicted_current_source_kg; R_formulation_kg; original_source_return_kg; source_mode; mode_provider_scope; X_loaded; X_empty; X_idle; X_m_i; payload_kg_i; all_payload_kg; reserved_kg_i; reserved_consignment_map; stationary_powered_idle_h; d_empty_i; all_empty_reserved_kg_km; d_idle_i; all_idle_reserved_kg_h; owner_fraction_i_h; source_coverage_evidence; allocation_evidence; observation_start; observation_end; served_zone_ID; interval_start; interval_end; open_closed_idle_maintenance_status; landlord_shared_leased_scope; purchased_heat_cold_billing_meter_records; nonrefrigerant_heating_records; temporary_backup_source_log; period_zone_absence_coverage; dated_inspection_ID; unknown_interval_scope; route_gate_status; predicted_owner_unassigned_kg; source_current_neverused_ref_kg; source_current_used_ref_kg; source_current_held_waste_ref_kg; source_gross_export_ref_kg; source_actual_return_ref_kg; reservation_unit; reservation_source_portion_ID; container_assignment_event_ID; container_assignment_state; container_preopen_loss_count_e; a_container_loss_e_h; exclusive_container_loss_owner_evidence; reserved_container_count_e_h; all_reserved_container_count_e; preloss_container_reservation_map; C_unopened_count; C_transfer_unassigned_count; C_unassigned_missing_count; R_container_owner_count; C_new_s_h; C_old_s_h; C0_new_s; C0_old_s | 采集实际供应商来源数量、边界，事件直接细分、每遍实测互斥清洁平方米（含失败已清区）、同配置内装原令包ID、实际任务处理秒及事件前冻结来源预留。按c_material_event、c_source_history记录原来源m0、参考状态、独立完整容器件数、制造与入场向量及全部历史替换。运输按c_transport保留实际载货、空驶、静止有动力怠速模式分子，同车次全部载荷、预留千克映射及分开的来源覆盖、分配层。全观测时段及被服务区域须取得账单、计量、房东、共用、租赁和临时备用、维修来源记录及注明日期检查，证明b_channel排除条件覆盖开店、关店、空闲全期；未知时段阻断路线。现有核心关联视图仅读原件一次，真实原子扩展采用单过程视图，不重复测量或归一化。  逐完整一次性container_ID追踪未开封状态到首次开启或互斥首开前不可逆破损、确认丢失，按c_material_event、c_source_history记录签认独占责任或冻结同单位预留容器件数映射，以及全部历史C、C0、向量替换。使用后破损不是另一原来源。 | 各来源实际声明单位；秒；小时；平方米乘小时；千克；吨公里；字节秒 | 每次来源事件、时段及全部历史替换；全观测期不存在证据覆盖 | 全部池及受影响的所有历史受益者 | 准入路线所有必要运行、资产及供应商 | 每参考流 | 原始签认完整边界、校准、全体受益者分母、历史替换及不存在记录；未知不等于零。 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_goods | paper_retail_service; supplier_return_ream; external_retained_ream | Q=count(最终有效验收的不同original_ream_ID)。goods_predicted_close=goods_open_count+received_count+physical_customer_return_count-gross_customer_handover_count-supplier_handover_count-internal_transfer_count-condemnation_count-confirmed_missing_count；R_goods_count=goods_predicted_close-goods_close_count=signed_residual_count。R>0为未解释短缺，R<0为未解释盈余。顾客总交付已包含全部未验收实物交付一次，不能再减N_external。无移动撤销仅替换最终状态。N_return计期间内唯一签认实际(original_ream_ID, supplier_handover_event_ID)对：每个真实移动的完整原令计1，同一签收联单含多令时按实际不同原令与事件对计，不能把整联单只计1。同一原令真实重复向外移动须有不同实物交接事件ID，可逐次计；重复单据或无移动状态变更不能计。N_return是supplier_handover_count中实际合格完整未开封子集，不是N_T，也不是制造或服务。N_external计截账时在外部保管、完整未开封且无最终有效验收的不同原始ID，是截账状态，不是新流出或移动次数。supplier_return_ream=N_return/Q，external_retained_ream=N_external/Q；服务量=Q/Q=1 Item(s)。原始实物事件与最终保管、验收状态独立保留。  received_count仅含本式未另计的实际供应接收（含供应商真实实物退回门店）及内部调入；physical_customer_return_count仅含顾客退回；internal_transfer_count仅含内部调出。移动数量按实际原令单位计，事件类别互斥并保留original_ream_ID及transfer_ID；验收撤销、仅状态变更或报废不能进入这些接收、退回、调拨量。报废只列自身一项。汇总包含门店两侧时，同一transfer_ID调出与调入相消；保留相同原来源，不能新造制造或来源。 | original_ream_ID; final_acceptance_status; goods_open_count; received_count; physical_customer_return_count; gross_customer_handover_count; supplier_handover_count; internal_transfer_count; condemnation_count; goods_close_count; confirmed_missing_count; goods_predicted_close; R_goods_count; signed_residual_count; supplier_handover_event_ID; supplier_handover_signed; supplier_handover_state; duplicate_document_ID; external_custody_cutoff; external_custody_original_ID; external_custody_state; N_return; N_external; Q; cp_goods; transfer_ID | 最终有效服务件数及独立仅货物实物库存质控 | un-cpc62194 |
| c_source | failed_ream | 逐同质原来源向量满足N_in=N_S+N_F+N_T+N_O，全部份额采用原来源等价令数。failed_ream=N_F/Q；N_F>0时供应商单位向量=W_F/N_F，因此背景贡献仅一次W_F/Q；有不存在证据的N_F=0不展开来源，不能除零。W_F为实际归属F的原发货制造及内包装向量之和，排除入场运输和外箱。另按a_transport添加互斥F入场运输，保留S、T、O向量及替换。不得用干湿千克或组件质量份额拆分环境向量。 | N_in; N_S; N_F; N_T; N_O; W_dispatch; W_F; responsibility_signoff; Q; cp_goods; cp_support | N_F/Q产品投入及一次原背景展开 | ghg-product2011 |
| c_paper | failed_ream; paper_retail_service | water_mass_kg为按b_paper仅扣一次试剂、烘箱空白的仪器结果；w=water_mass_kg/wet_sample_kg；m_dry=paper_wet_kg*(1-w)。仅在直接匹配同状态完整样品时，实际纸净湿千克=gross_pack_kg-wrapper_net_kg，并排除外箱。按实际匹配回收率、scaling_factor缩放独立测得水及样品部分并传播不确定度；不设出厂数值默认，不把名义克重转废物。这些是独立质控字段，不能替代Q或直接废物净千克。 | water_mass_kg; wet_sample_kg; paper_wet_kg; gross_pack_kg; wrapper_net_kg; sample_recovery; scaling_factor; uncertainty; w; KF_oven_temperature_C; KF_extraction_time_s; KF_water_standard; KF_reagent_oven_blank; KF_matrix_spike_recovery; KF_blank_correction_status; cp_paper_state | 服务分母不变的纸干湿及水分质控 | doublea-catalogue |
| c_power | site_ac | 逐兼容能量来源按a_shared：e_s_h=E_s*d_s_h/all_beneficiary_driver；E_h=sum_s(e_s_h)，单位MJ，千瓦时转化3.6仅一次；site_ac=E_h/Q。核心原始分子为E_h，非已显示的E_h/Q。 | E_active_s; E_idle_s; E_fixed_s; d_s_h; all_beneficiary_driver; kWh; E_h; Q; cp_power | 归属原始兆焦及一次归一化电量 | ghg-product2011 |
| c_carton | carton_input | 原参考数量事件份额采用c_material_event，分开的实物及责任平衡采用c_source_history。G_carton_h=sum_unique_event(q_e_h)+sum_disjoint_known_owner_preloss(q_preloss_source_ref_kg*a_preloss_h)；carton_input=G_carton_h/Q。q_event_source_ref_kg按original_carton_ID、source_portion_ID查回实际原发货或参考完整纸箱数量及状态，不能取首次开箱时当前湿称。当前m_source_received、current_carton_wet_kg为独立实物质控。原参考质量、状态未知时阻断制造耦合，不能以名义千克或水分恒定替代。已归属首次使用或使用前损失的缺失在G中只计一次；责任未知的确认使用前损失仅列unassigned_missing_ref_kg。再用不重复原制造、入场。  q_e_h是c_material_event已完成直接加共享归属的数量，不能再把直接部分或整事件乘a_event_h。有实证独占使用前损失责任时，仅该责任者a_preloss_h=1，其他为0；否则采用固定预留单位份额，未知责任保持未归属。 | original_carton_ID; source_portion_ID; m0_source_ref_kg; source_reference_state; original_reference_quantity_record; q_event_source_ref_kg; a_event_h; q_preloss_source_ref_kg; a_preloss_h; G_carton_h; current_carton_wet_kg; m_source_received; unassigned_missing_ref_kg; Q; cp_carton; cp_support; q_direct_e_h; q_shared_e; q_e_h | 原首次使用来源归属及纸箱投入千克/Q | ghg-product2011 |
| c_waste | damaged_ream_waste; carton_waste | 逐指定载体直接测得同状态联单净千克=gross_kg-tare_kg。D_ream_net和D_carton_net分别汇总获证实最终在该状态完整处理的唯一原最终交接净千克，不能把重复失败发运当新产生。全部实物发运及退回千克保留在独立b_waste库存质控中，全部失败运输、搬运、部分处理负担仍须作为互斥支持纳入。无移动状态修订替换原记录。变更状态输出须有独立实际原子卡，不能为零。选定最终交接量仅除Q一次。 | gross_kg; tare_kg; net_kg; opening_held_kg; generation_kg; physical_return_kg; dispatch_kg; closing_held_kg; confirmed_missing_held_kg; signed_residual_kg; final_complete_treatment_kg; D_ream_net; D_carton_net; Q; cp_ream_waste; cp_carton_waste; held_predicted_close_kg; R_held_kg; measured_delta_held_state_kg; sample_final_removed_kg; state_change_status; sample_in_dispatch_flag | 唯一最终同状态废物输出千克/Q及互斥实物、处理记录 | ghg-product2011 |
| c_assets | retail | 按a_assets采用实际实测e_recorded_h：f_expected_h=e_recorded_h/L_expected；最终f_new_h=e_actual_h/sum_all_h(e_actual_h)。逐历史记录替换旧贡献并登记delta=f_new_h*V_new-f_old_h*V_old，包括归资产的运输、维修、退役向量。c_complete前保持原单位及来源历史。 | e_recorded_h; L_expected; all_h_actual_exposure; f_old_h; V_old; f_new_h; V_new; asset_ID; original_owner; original_pool; version; cp_support; e_actual_h | 按原池替换历史原始资产分子 | ghg-product2011 |
| c_digital | retail | 网络归属量_h=source_connection_hours*reserved_endpoint_connection_seconds/all_reserved_endpoint_connection_seconds。支付、管理事件归属量_h=source_event_quantity*task_line_seconds/all_task_line_seconds。采集生产采用原始模式capture_raw=capture_source_quantity，或归一化模式capture_raw=capture_source_quantity*capture_original_denominator，再计算capture_h=capture_raw*frozen_FOV_m2_seconds/all_FOV_m2_seconds；原分母及真实来源单位必填，两模式互斥。储存按a_digital采用直接归属字节秒，或完整匹配储存包乘capture_byte_seconds/all_byte_seconds再乘冻结原采集映射一次。不能把储存归属用于采集生产。 | source_connection_hours; reserved_endpoint_connection_seconds; all_reserved_endpoint_connection_seconds; source_event_quantity; task_line_seconds; all_task_line_seconds; capture_source_quantity; capture_original_denominator; raw_or_normalized_mode; frozen_FOV_m2_seconds; all_FOV_m2_seconds; stored_bytes; retention_seconds; all_byte_seconds; storage_mode; cp_support; capture_byte_seconds; storage_source_quantity | 独立原始归属网络、支付、管理、采集、储存分子 | ghg-product2011 |
| c_complete | all inventory rows | 对每个交换、属性、单位、状态、供应商边界相同的j，原始模式X_j=raw_core_j+sum_disjoint_module_m(x_m_j)，归一化模式X_j=raw_core_j+sum_disjoint_module_m(z_m_j*D_m)，随后final_j=X_j/Q。原核心包含E_h、G_carton_h、以W_F/N_F展开一次的N_F及实际互斥核心废物、其他分子，不能丢失F或交流电，也不能添加第二次W_F。N_F保留为一个附W_F/N_F供应商的Product输入；只有比较已完整展开的匹配j向量时才把该供应商展开一次，不能在已附该Product输入之外另加W_F。x_m_j=raw_numerator_x、z_m_j=normalized_z、D_m=original_denominator_D，均来自同一来源登记；D_m为各原模块分母，不是Q。先按固定规则应用原来源归属、受益者份额并替换旧版本；一个来源不能混用原始与归一化模式，不能加不同单位。比较组分、事件、时间、资产、阶段、来源ID去重。完整RETAIL仍排除S制造及入场；GOODS可添加一次保留的S。要求全部mandatory_module_status已完成或有不存在证明，原子扩展卡双语同步，且全部来源、身份、覆盖门通过。否则须披露部分前景，不能称完整零售经营。 | raw_core_j; x_m_j; z_m_j; D_m; E_h; G_carton_h; N_F; W_F; D_ream_net; D_carton_net; source_ID; original_owner; original_pool; attribution_level; version; mandatory_module_status; Q; cp_support | 兼容原始分子完整汇总后一次除Q | ghg-product2011 |
| c_transport | retail; residual | 逐同车次来源模式m及原联单i，X_loaded为实际原始载货吨公里，X_empty为正的实际车公里，X_idle为实际静止有动力车小时，三者供应商边界互斥。载货f_loaded_i=payload_kg_i/all_payload_kg。空驶d_empty_i=reserved_kg_i*empty_vehicle_km，f_empty_i=d_empty_i/all_empty_reserved_kg_km。怠速d_idle_i=reserved_kg_i*stationary_powered_idle_h，f_idle_i=d_idle_i/all_idle_reserved_kg_h。预留映射覆盖同车次全部原联单、失败或未用预留；和包含全部实际受益者，保留原池，并对每个实际发生模式要求已知正值。原车次模式取X_m_i=X_m*f_m_i；已核实归属联单模式直接用其实际X_m_i。最终责任量X_m_i_h=X_m_i*owner_fraction_i_h，只有已核实精确归属原最终责任、池、版本时才跳此层。来源覆盖与分配证据分开；不得跳过未完成层，也不得把已知份额归一化以掩盖未知预留。资产货运owner_fraction_i_h采用该资产实际a_assets全部历史f_h，修订时替换所有旧记录，不能全记当前退役Q。供应商完整包含空驶、怠速时，只有运行模式数量和分配有证据才避免再加重复来源；否则保留缺模式的不完整，不能记零。 | trip_ID; segment_ID; source_mode; mode_provider_scope; X_loaded; X_empty; X_idle; X_m_i; payload_kg_i; all_payload_kg; reserved_kg_i; reserved_consignment_map; empty_vehicle_km; stationary_powered_idle_h; d_empty_i; all_empty_reserved_kg_km; d_idle_i; all_idle_reserved_kg_h; owner_fraction_i_h; attribution_level; source_coverage_evidence; allocation_evidence; mass_capacity_evidence; original_owner; original_pool; version; cp_support | 按原归属、池、版本的原始归属运输分子 | ghg-product2011 |
| c_support_material | retail | 各实际原物资来源采用c_material_event及c_source_history。配方实物状态采用predicted_current_source_kg=original_formulation_kg-net_final_exports_source_kg-confirmed_missing_source_kg；R_formulation_kg=predicted_current_source_kg-current_exclusive_source_kg。net_final_exports_source_kg=cumulative_exports_source_kg-original_source_return_kg，累计输出仅含一次发运容器来源残留。current_exclusive_source_kg=current_never_opened_source_kg+current_open_container_source_kg+current_solution_source_kg+current_film_source_kg+current_tool_source_kg+current_held_waste_source_kg，各配方来源状态互斥。R>0为未解释短缺，R<0为盈余；等价式original_formulation_kg=net_final_exports_source_kg+current_exclusive_source_kg+confirmed_missing_source_kg+R_formulation_kg。最终输出包含互斥发运容器来源残留一次，并扣实际原来源退回；状态变化替换旧状态。配方来源千克排除新增冲洗水、污物，完整湿载体独立实测。该实物损失不构成第二次责任G归属。完整原一次性容器首开或互斥首开前损失件数按c_material_event独立于配方千克处理。直接排液千克=effluent_V_m3*effluent_density_kg_m3，密度匹配实测且不扣库存或蒸发；water_import_m3已排除回用。 | source_portion_ID; original_formulation_kg; net_final_exports_source_kg; confirmed_missing_source_kg; predicted_current_source_kg; current_exclusive_source_kg; R_formulation_kg; current_never_opened_source_kg; current_open_container_source_kg; current_solution_source_kg; current_film_source_kg; current_tool_source_kg; current_held_waste_source_kg; cumulative_dispatched_container_residue_source_kg; original_source_return_kg; container_first_open_count; container_dispatched_residue_kg; water_import_m3; effluent_V_m3; effluent_density_kg_m3; cp_support; cumulative_exports_source_kg | 持久支持来源归属及独立载体数量 | ghg-product2011 |
| c_material_event | carton_input; retail | 逐原来源s及真实取用、首次开启事件e，在受益者归属前测得q_event_source_ref_kg。直接细分优先：q_e_h=q_direct_e_h+q_shared_e*a_event_h，且sum_all_h(q_direct_e_h)+q_shared_e=q_event_source_ref_kg。同配置运输箱的a_event_h=n_enclosed_original_ream_e_h/all_enclosed_original_ream_e，取首次开箱实际内装原令包ID及原接收池，含失败货物，不用未来销量。每次真实清洁遍次采用a_event_h=cleaned_m2_e_h/all_cleaned_m2_e，实际已清洁区域互斥，含清洁失败区；真实重复清洁另有事件ID。任务、管理耗材采用实际事件内处理秒task_seconds_e_h/all_task_seconds_e。不能把这些不同驱动量相加。使用前损失先用直接有证据的责任者，否则a_preloss_h=reserved_source_units_e_h/all_reserved_source_units_e，取事件前冻结原来源预留映射，含失败、未用预留；纸箱损失用实际预留完整原箱件数，配方损失用实际预留原参考千克，各关联自身source_portion_ID及同单位全受益者分母，不能混合单位求和；全体分母缺失、零或未知时责任保持未分配并阻断完整性。G_source_h为唯一q_e_h加互斥使用前损失原参考量乘a_preloss_h，仅一次。逐唯一原完整一次性container_ID，首次开启与不可逆首开前破损、确认丢失是互斥来源归属事件。C_container_h=sum_unique_open_event(container_first_open_count_e*a_container_e_h)+sum_disjoint_preopen_loss(container_preopen_loss_count_e*a_container_loss_e_h)。首开采用固定实际清洁遍次、任务或直接细分份额；首开前损失采用实证独占责任（仅该责任方份额1），否则a_container_loss_e_h=reserved_container_count_e_h/all_reserved_container_count_e，取损失前冻结实际同单位原容器预留映射，含失败、未用预留。实际共享损失事件的全体件数分母必须已知为正；责任或件数未知时保持C_unassigned_missing_count，不能记零或对已知份额重新归一化。每个container_ID仅归属首开或首开前损失之一一次；使用后破损、再用不新增制造、入场。容器制造及独立入场各仅应用一次C_container_h/C0_container_count，独立于配方千克；每次C、C0或向量修订均按c_source_history替换全部历史原责任、池记录。完整清洁服务按每遍实际平方米服务分子采用同一份额；供应商归一化z先按实际原D恢复，再仅除最终Q一次，完整边界及去重必需。 | source_portion_ID; material_event_ID; q_event_source_ref_kg; q_direct_e_h; q_shared_e; q_e_h; a_event_h; n_enclosed_original_ream_e_h; all_enclosed_original_ream_e; enclosed_original_ID_map; cleaned_m2_e_h; all_cleaned_m2_e; cleaning_pass_ID; cleaning_failed_zone_ID; task_seconds_e_h; all_task_seconds_e; preloss_event_ID; q_preloss_source_ref_kg; a_preloss_h; direct_preloss_owner_evidence; reserved_source_units_e_h; all_reserved_source_units_e; pre_event_reservation_map; G_source_h; container_ID; container_first_open_count_e; a_container_e_h; C_container_h; cleaning_service_raw_m2; original_denominator_D; normalized_z; raw_or_normalized_mode; cp_carton; cp_support; reservation_unit; reservation_source_portion_ID; container_assignment_event_ID; container_assignment_state; container_preopen_loss_count_e; a_container_loss_e_h; exclusive_container_loss_owner_evidence; reserved_container_count_e_h; all_reserved_container_count_e; preloss_container_reservation_map; C0_container_count; C_unopened_count; C_transfer_unassigned_count; C_unassigned_missing_count; R_container_owner_count; C_new_s_h; C_old_s_h; C0_new_s; C0_old_s | 按真实事件仅归属一次的原参考来源量及独立容器件数 | ghg-product2011 |
| c_source_history | carton_input; retail | 实物来源追踪与责任独立。实物predicted_current_ref_kg=m0_source_ref_kg-source_export_net_ref_kg-source_confirmed_missing_ref_kg；source_export_net_ref_kg=source_gross_export_ref_kg-source_actual_return_ref_kg；source_current_ref_kg=source_current_neverused_ref_kg+source_current_used_ref_kg+source_current_held_waste_ref_kg；R_source_physical_kg=predicted_current_ref_kg-source_current_ref_kg，其中当前为从未用、已用、待处理废物互斥来源参考部分，净输出仅扣一次实际原来源退回。这些是按来源部分及状态可追溯的原参考量，不是当前湿称或新清单制造；当前纸箱湿千克单独质控。责任predicted_owner_unassigned_kg=m0_source_ref_kg-sum_all_h(G_source_h)-unassigned_transfer_ref_kg-unassigned_missing_ref_kg；R_source_owner_kg=predicted_owner_unassigned_kg-unassigned_neverused_ref_kg，其中后者为独立观测的从未使用未归属余量。正R为未解释短缺或未定位责任，负R为盈余或过分配。G累计唯一首次使用及已归属使用前损失，包含已归属已知丢失；责任未知的确认使用前损失只列unassigned_missing_ref_kg，不能同时列G。已用物实物丢失仍在实物账，但不再次产生G。重新分类须原子替换原状态或归属记录，不能为掩盖未知部分而把已知份额重新归一化。逐原来源采用B_manufacture_s_h=(G_source_h/m0_source_ref_kg)*V_manufacture_s及B_inbound_s_h=(G_source_h/m0_source_ref_kg)*V_inbound_s，经核实独立阶段向量各一次。V_inbound_s须先有实际车次、联单来源边界，最终责任分配仅应用一次。每次来源数量、状态、归属或向量修订均替换每个历史受益者贡献：delta_man_s_h=(G_new_s_h/m0_new_s)*V_manufacture_new_s-(G_old_s_h/m0_old_s)*V_manufacture_old_s；delta_inbound_s_h=(G_new_s_h/m0_new_s)*V_inbound_new_s-(G_old_s_h/m0_old_s)*V_inbound_old_s。保留全部原池及版本，不能把新完整来源全记当前Q。完整原一次性容器向量独立采用C_container_h/C0_container_count并执行同一全部历史替换，不能采用配方质量份额。  对完整一次性容器，C_container_h包含c_material_event互斥首次开启及首开前不可逆破损、确认丢失，使用后破损不新增件数。R_container_owner_count=C0_container_count-sum_all_h(C_container_h)-C_transfer_unassigned_count-C_unassigned_missing_count-C_unopened_count，即预测减独立观测的未开启未归属件数；正值为短缺、未定位责任，负值为盈余、过分配。首开前损失责任未知时保持未归属。每次C、C0或向量修订均替换全部历史贡献：delta_container_man_s_h=(C_new_s_h/C0_new_s)*V_manufacture_new_s-(C_old_s_h/C0_old_s)*V_manufacture_old_s；delta_container_inbound_s_h=(C_new_s_h/C0_new_s)*V_inbound_new_s-(C_old_s_h/C0_old_s)*V_inbound_old_s，采用原完整容器来源向量，独立于配方千克。 | m0_source_ref_kg; source_reference_state; source_export_net_ref_kg; source_confirmed_missing_ref_kg; source_current_ref_kg; predicted_current_ref_kg; R_source_physical_kg; G_source_h; unassigned_neverused_ref_kg; unassigned_transfer_ref_kg; unassigned_missing_ref_kg; R_source_owner_kg; V_manufacture_s; V_inbound_s; G_new_s_h; m0_new_s; V_manufacture_new_s; V_inbound_new_s; G_old_s_h; m0_old_s; V_manufacture_old_s; V_inbound_old_s; C_container_h; C0_container_count; original_owner; original_pool; version; cp_carton; cp_support; predicted_owner_unassigned_kg; source_current_neverused_ref_kg; source_current_used_ref_kg; source_current_held_waste_ref_kg; source_gross_export_ref_kg; source_actual_return_ref_kg; reservation_unit; reservation_source_portion_ID; container_ID; container_assignment_event_ID; container_assignment_state; container_first_open_count_e; a_container_e_h; container_preopen_loss_count_e; a_container_loss_e_h; exclusive_container_loss_owner_evidence; reserved_container_count_e_h; all_reserved_container_count_e; preloss_container_reservation_map; C_unopened_count; C_transfer_unassigned_count; C_unassigned_missing_count; R_container_owner_count; C_new_s_h; C_old_s_h; C0_new_s; C0_old_s | 独立实物、责任守恒及全部历史制造、入场替换 | ghg-product2011 |
| c_held_state | damaged_ream_waste; carton_waste | 逐原待处理carrier_ID及状态时段，measured_delta_held_state_kg为同一已识别留存部分的实测有符号净质量变化：增重为正、减重为负。在每次实物发运、退回、取样事件处分段。各段比较同一已识别留存部分，所追踪固体组分不变且无实物流入流出：delta_k=(held_state_after_gross_kg-held_state_after_tare_kg)-(held_state_before_gross_kg-held_state_before_tare_kg)；measured_delta_held_state_kg=sum_k(delta_k)。实际变为部分载体时，物理事件后新增retained_portion_ID及实测基线。发运、退回、样品移出不能计为状态变化。用b_paper、c_paper固定烘箱气流转移库仑Karl Fischer方法独立核实水贡献，并对实际纸、包装及纸箱构造分别验证基质：匹配独立牺牲性初末样品，实测回收、缩放，仅扣一次试剂及烘箱空白，记录端点时间、温度、相对湿度及不确定度。逐真实代表性匹配基质，initial_scaling_factor=initial_retained_matrix_wet_kg/initial_sample_wet_kg，terminal_scaling_factor=terminal_retained_matrix_wet_kg/terminal_sample_wet_kg；initial_scaled_water_kg=initial_sample_water_kg*initial_scaling_factor，terminal_scaled_water_kg=terminal_sample_water_kg*terminal_scaling_factor，采用已扣空白实测水及经验证回收、代表性。state_change_water_kg=sum_matrix(terminal_scaled_water_kg-initial_scaled_water_kg)，在记录传播不确定度内与独立称重delta比较。不能重复使用已破坏样品，不能仅从湿重变化推水，未测变化不能记零。毛重与水测结果不吻合时保留受调查未知状态变化并阻断完整库存、环境声明，不能推定空气排放或虚构水路径。sample_final_removed_kg为从本待处理库存实际称得的分析样品最终移出，保留唯一sample_ID、原carrier_ID、接收者，只有未已计入dispatch_kg时才计。临时取出样品保留在单独追踪的待处理样品库存及期末千克中，直到实际最终不可逆消耗、输出或有记录实物退回；状态版本替换不产生第二次移出。临时样品位置退回属于本待处理库存内部，不能计physical_return_kg；已记录最终移出后真实再入库则按实际状态及先前最终移出ID独立称得physical_return_kg事件，不能取消真实移动。从已报废待处理废物取样不能再次增加报废、产生或F；对货物取样只作一次原货物报废，产生量仅记真实进入待处理库存的材料。实际样品处理、运输及变更部分载体须完成匹配实际补全，不能再做第二次整载体处理。这些湿状态、样品质控修正不能改变冻结原参考纸箱G_source_h、m0_source_ref_kg，也不能重复原制造责任。 | carrier_ID; state_interval_ID; retained_portion_ID; held_state_before_gross_kg; held_state_before_tare_kg; held_state_after_gross_kg; held_state_after_tare_kg; endpoint_constituent_trace; disjoint_known_physical_flow_kg; measured_delta_held_state_kg; state_change_water_kg; state_change_uncertainty; state_change_status; matched_initial_sample_ID; matched_terminal_sample_ID; sample_recovery; scaling_factor; KF_oven_temperature_C; KF_extraction_time_s; KF_water_standard; KF_reagent_oven_blank; KF_matrix_spike_recovery; KF_blank_correction_status; sample_ID; sample_final_removed_kg; sample_in_dispatch_flag; sample_final_exit_ID; sample_recipient; temporary_held_sample_kg; sample_physical_return_ID; original_carrier_ID; state_version; cp_ream_waste; cp_carton_waste; cp_paper_state; state_before_time; state_after_time; state_before_temperature_C; state_after_temperature_C; state_before_RH_percent; state_after_RH_percent; initial_sample_water_kg; terminal_sample_water_kg; initial_sample_wet_kg; terminal_sample_wet_kg; initial_retained_matrix_wet_kg; terminal_retained_matrix_wet_kg; initial_scaling_factor; terminal_scaling_factor; initial_scaled_water_kg; terminal_scaled_water_kg; excluded_physical_event_IDs; matrix_ID; matrix_construction; matched_matrix_sample_scope; sample_return_kind; prior_sample_final_exit_ID; physical_return_kg | 实测有符号湿状态变化及互斥真实样品最终移出，原参考责任不变 | xerox-paper-storage |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_identity | all inventory rows | 所有行名都是具体语义候选，尚无核实的天工UUID。只有本地原始直读响应和精确哈希收据证明公开状态、正式中英名、类型、状态、介质、属性、单位链后才绑定。不能以标准标识、搜索片段或另一作者结论替代。每个实际扩展同样适用。 | 逐行原始直读及支持行完整性证据；未解清单保留在manifest。 |
| q_measure | all inventory rows | 记录操作者、时间、原仪器、分辨率、校准漂移、皮重、样品回收、单位、原始覆盖和不确定度。核对实测父总量、实际原来源平衡、独立货物件数、待处理废物千克及最终有效Q；不能把报废件数转作千克。缺失数据保留明确不确定缺口并阻断完整性。 | 仪器及分类型台账审计；R=预测期末或当前量减独立观测期末或当前量。正R为未解释短缺，负R为未解释盈余，统一按b_waste、c_goods、c_source_history、c_support_material执行。单位及实物、责任台账分开，保留调查和修订历史。 |
| q_completion | retail; residual | 每项必要运行、资产、物资、处理均须有存在或不存在证据、精确供应商来源边界及固定规则补全。未知不等于不存在；实际不支持状态须有匹配原子扩展后数据集才能完整。不同供应商ID不能证明边界独立。 | 签认模块登记关联cp_support及所有实际新增单过程协议、卡。 |
| q_bilingual | all inventory rows | 逐完整双语比较对象、方向类型、限定信息、公式变量、单位、参考分母、条件门、排除及去重。结构相同、aligned状态本身不足。科学适用性保持可独立评审。 | 实际双语阅读及针对来源的解析数组、卡、协议、规则比较。 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | all inventory rows | 使用前须用实际材料、物料清单、分店、现场交易及排除证据通过b_route、b_channel；目录与解析列表是规格和线索，不是量化清单、批次证明或完整符合性证明。 | un-cpc62194; doublea-catalogue; fairmart-888 |
| v_quantity | all inventory rows | 要求Q>0，各最终卡为reference_flow基准，原始、归属、最终阶段独立，守恒及有符号残差经过调查，公式单位兼容。禁止名义令重、水分恒定推断、缺失等于零、重复原服务或来源展开。 | ghg-product2011 |
| v_source | failed_ream; carton_input; retail; residual | 核实逐来源S/F/T/O及首次使用义务、独立入场运输、整体向量与组件互斥、直接废物称重、真实最终处理和全部历史资产、数字来源替换。供应商阶段分离、空驶运输、采集基准未知时不能完整。 | ghg-product2011 |
| v_delivery | all inventory rows | 同步候选可在披露未核实身份的情况下指导采集；它不批准方法学，也不建立完整经营清单。完整数据集必须满足c_complete、q_identity、q_completion，包含实际原子扩展并经独立范围评审。 | ghg-product2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 原令包增量零售服务；强制补全前为声明核心。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 实际同配置准入路线，明确不确定度并通过来源、身份、覆盖门。 |
| excluded_use | 全CPC叶；打印裁切；名义千克估算；从未完整RETAIL核心声称完整经营或GOODS。 |
| required_metadata | 全部参考限定信息；原来源、分母；材料及物料清单；池、版本；归属、阶段、供应商及补全登记。 |
| required_quality_disclosure | 未核实身份；实际未完整模块；原始覆盖、校准、不确定度；有符号平衡及全部迟到、历史替换版本。 |
| update_trigger | SKU、物料清单、涂层、地区、路线、设备、供应商、退货政策变化；迟到退回；资产寿命、向量或原归属修订。 |

## 11. 数据源

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un-cpc62194 | official_guidance | UNSD CPC Version3.0 subclass62194, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62194 | 分类范围为321组排除32194，不自动证明路线适用。 |
| un-cpc32194 | official_guidance | UNSD CPC Version3.0 subclass32194, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/32194 | 仅支持壁纸及窗用透明覆盖物排除。 |
| doublea-catalogue | handbook | Double A product catalogue, PDF p2 Copy Paper80gsm Pack500, https://eu.doubleapaper.com/application/files/3717/1812/8629/Double_A_Catalogue_Eng_version__1_compressed_1.pdf | 真实A4、80克、500张、每箱5令示例，与其他纸种分开；不证明涂层、物料清单、质量、水分或清单。 |
| fairmart-888 | handbook | Fairmart, 888 Minimart King Albert Park MRT Station, Double A Premium A4 Office Paper, https://www.fairmart.app/store/888-minimart-king-albert-park-mrt-station/double-a-premium-4-office-paper-55891 | 仅解析商品及渠道线索；原始应用壳不是商品证据。不采用其列表质量；现场混合店选择、收银及实际批次须另证。 |
| xerox-paper-storage | handbook | Xerox Phaser3150 User Guide, printed9.7/PDF146, https://www.office.xerox.com/userdoc/P3150/3150_Web/pdfs/en/User_Manual.pdf | 仅支持纸吸湿性及储存、包装敏感性；打印机特定环境值和时间建议不是零售限值或实际批次水分。 |
| ghg-product2011 | official_guidance | WRI/WBCSD (2011), Product Life Cycle Accounting and Reporting Standard, chapter9 p63, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般过程细分、物理分配及一致性原则；具体驱动量和边界为本PCR声明方法及前景协议，不声称全标准符合。 |
