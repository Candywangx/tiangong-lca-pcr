---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-sports-goods-incl-bicycles
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 成对包胶六角哑铃柜台零售服务

## 1. 范围与适用性

本候选规则覆盖声明完整匹配成对包胶六角哑铃配置的柜台零售服务：两只未使用的黑色橡胶包覆铸铁六角头哑铃，配镀铬钢手柄，以一个原始成对商品交付。保留案例的标称重量指每只哑铃；标称重量和两个组件都不定义服务分母。路线为常温、顾客到店的非专营非食品商店，电子凭证、不加零售购物袋、不演示、不组装、不维修、不对外送货。记录供应商原包装配置及实际净质量；产品网页是规格证据，不是生命周期清单，也不证明非专营渠道。须实际门店商品结构及交易记录证明渠道；网页退货及保修期不定义验收截止或资产寿命。本规则明确为部分增量服务模型，必须执行下述补全方法；补全前不得用作完整零售业务足迹。联合国 CPC 3.0 62155 包括体育用品、游乐运动船及非机动自行车；本成对哑铃只是较窄的体育用品子集，并不覆盖整个分类叶。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-sports-goods-incl-bicycles |
| classification_refs | CPC 3.0 62155; narrower |
| covered_products | 完整原装未用匹配成对包胶六角哑铃；每个同质池固定实际质量及来源/BOM配置。 |
| excluded_products | 单只哑铃、混对、船、自行车、租赁、二手、演示、维修及声明完整成对状态以外的缺件组件。 |
| representative_product | 成对包胶六角哑铃柜台零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 收货；检验；常温保管；柜台交接；验收更正；实际退供或废物发运 |
| market_state | 未使用完整一对；两只各标称 5 LB 哑铃；铸铁头、橡胶包覆、镀铬钢手柄；记录实际原包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供指定未使用完整一对，并在柜台交付取得合格最终验收 |
| How much | 一个最终验收有效的唯一原始成对商品；两只哑铃合计构成一次服务 |
| How well | 两只符合 SKU 且完整；检查包覆和手柄状态；连接验收身份与实物交接 |
| How long or cycle | 一个预先声明的同配置商店池及更正窗口；全部后续更正保留原池和版本 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一对 成对包胶六角哑铃的柜台零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | SKU及双组件配置; 供应商 original_id 与 source_ids; 原包装物料清单和实测质量; 商店渠道及池日期; 原验收事件和更正日期; final_valid 标志; 毛保管事件ID; S/F/O/T责任; 实际包覆及手柄状态; 电表层级及全部受益方; 补全模块版本; 不确定性和未解决身份 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_service | service_output; failed_original; customer_pair; supplier_pair; external_damaged | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 一个计数按具体行定义为完整一对或一对服务，不是其中两只；商品及服务账分开。 |
| electric_units | ac_input | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实测kWh乘3.6=MJ；不推效率或发电因子。 |
| waste_mass | damaged_pair_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 实际完整一对发运净kg排除原包装；标称LB仅识别。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原始未使用完整成对商品跨越到店收货门，已识别原制造、完整原包装及到该门的全部运输 |
| starting_condition_role | retail_service_increment |
| product_classification_scope | CPC 62155 内较窄体育用品柜台服务；不是商品制造 |
| recursive_input_rule | 不得递归输入本零售服务；同一 original_id 的退货再售保留最初背景来源和收货门 |
| upstream_dataset_requirement | 每个 original_id 必须有实际供应商向量，恰好覆盖一个完整成对商品、全部原包装及到门运输一次；不以标称重量代理 |
| disclosure | 部分核心：点用交流电、F原始背景输入及实测完整成对商品去向。完整服务声明之前须按固定规则补全场址支持、包装去向、清洁、到门后运输和资本 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope_gate | retail; custody | 仅适用单一有据完整成对配置及柜台路线。出现零售加袋、纸凭证、组装、演示、维修、对外销售配送、缺件成对商品、组件脱落或需要尚未表征流的实际配置，须在完整性成立之前修订具体原子卡、对齐协议和双语；未知为阻断，不等于不存在。 | xprt-spec |
| ownership | failed_original; customer_pair; supplier_pair; external_damaged; damaged_pair_waste | 每个 original_id 恰好归入一次 S最终有效售出责任、F不可恢复零售商责任（含丢失）、O原始期末库存或T具名转移责任。原向量一次包含制造、完整原包装和到收货门运输。S由售出商品生命周期承担，O结转，T将同一来源及书面持续责任移交具名供应商或接收方；仅F进入 failed_original。再售不得重新计费，每个失败后代也不得另算原件。去向或责任人未知阻断完整性。单独退款不改变验收。 | ghg-product |
| satellites | customer_pair; supplier_pair; external_damaged | 仅 customer_pair、supplier_pair、external_damaged 是无第二次制造或背景供应商的实物保管卫星输出。其次数为毛移动，不能成为服务或背景乘数。该排除不适用于 failed_original、交流电、service_output 或废物处理。实物退供不产生第二次T分配。 | ghg-product |
| support_gate | retail | 完整服务资格要求设备现场核查、房东公用工程边界图、账单及每项场内或房东燃烧燃料、含制冷剂空调或冰箱、外购热或外购冷路线的当前签署缺席证据。本PCR仅接纳有据不存在固定燃烧、制冷剂、外购热和外购冷的路线。未知或存在即本路线不合格，须另行审查原子方法修订；不得根据租户电费单假设为零。即便仅用电，照明、风扇和收银运行及资本仍必需。 | jrc-retail |
| completion | retail; custody | 在 support_gate、complete_packaging、complete_cleaning、complete_transport、complete_assets、complete_digital、merge_modules 全部满足前，结果标记部分核心；不得作完整业务或比较声明。每个新增实际交换必须有具名状态、方向、类型、单位的原子卡、已验证身份或明确候选缺口、协议及双语同步。缺席需有日期记录；未知不得省略。以下方法固定数量及责任，下游不得自选分母或分配。 | jrc-retail |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 柜台服务及来源归属 | required | 准确路线 | service | 每参考流1 Item(s) |
| custody | 实物保管及实际发运 | required | 全部实测原件历史 | satellite_and_waste | 每参考流 |

### 过程：柜台零售服务 (`retail`)

#### 输入

##### 产品流

###### 使用点电力 (`ac_input`)

实际归属的商店电力运行；另须补供电方、地域、电压和组合。流身份不提供排放因子。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: 3.6*E_target_kWh/Q MJ
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: jrc-retail

###### F原始收货门背景 (`failed_original`)

一个物品为一个原始成对商品及其全部原包装和到门责任，不是一只哑铃。实际供应商制造、包装、到门来源绑定一次，包含没有废物发运的丢失。本卡是须表征的背景输入，不是实物卫星。

- 选定流: 到店收货门带完整供应包装的原始完整 成对包胶六角哑铃
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_F/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_ownership`
- 来源: ghg-product; xprt-spec

#### 输出

##### 产品流

###### 最终验收成对服务 (`service_output`)

计最终有效唯一原始成对商品的服务，不能将两只组成哑铃计为两次服务。验收未知不合格。

- 选定流: 一对 成对包胶六角哑铃的柜台零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_service`
- 来源: ghg-product; xprt-spec

### 过程：保管及发运 (`custody`)

#### 输出

##### 产品流

###### 毛完整顾客交接 (`customer_pair`)

逐次实际完整成对交接，含从未验收和后续撤销事件。H_intact与H_damaged仅按实际过门event_id时观察的完整成对状态互斥分类，每事件恰属一个集合。后续外部损坏或无移动撤销只更改最终外部状态或验收，不新增H_damaged过门。毛实物移动独立于Q。仅实际在场供应包装随行并另记实测去向账，不在此新增包装制造。

- 选定流: 交给顾客的完整未使用 成对包胶六角哑铃
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: H_intact/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_custody`
- 来源: xprt-spec

###### 实际完整原件退供 (`supplier_pair`)

要求实际签收方及原包装实物状态；该实物退回本身不证明T背景责任。开包或损坏退供须另加具体状态扩展。

- 选定流: 完整原供应包装内退给供应商的完整未使用 成对包胶六角哑铃
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: H_supplier/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_custody`
- 来源: xprt-spec

###### 外部留置未验收完整损坏一对 (`external_damaged`)

两只哑铃及手柄保持完整；H_damaged只计实际向外event_id且过门实测已包覆开裂，与H_intact互斥。后续无移动损坏或验收撤销是终态观测，不是第二次出库。识别实际接收方、状态及F或书面T责任；不是零售商废物。缺组件或包覆脱落不属于该明确状态。

- 选定流: 外部顾客留置橡胶包覆开裂的完整 成对包胶六角哑铃
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: H_damaged/Q Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_custody`
- 来源: xprt-spec

##### 废物流

###### 完整损坏一对发往处理 (`damaged_pair_waste`)

实际发运批次中两只完整损坏哑铃的直接净质量，排除全部包装容器；称量实际完整物，不相加无关维修料。处理接收及运输边界只绑定一次，不假设抵扣。丢失不是废物发运。

- 选定流: 完整 成对包胶六角哑铃 橡胶包覆铸铁和钢成对哑铃废物
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则: W_pair_kg/Q kg
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_waste`
- 来源: jrc-retail

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| service_pool | service_output | Q为版本日期时原池中 final_valid=1 的不同 original_id 数。撤销验收即便无实物退货也置 final_valid=0；集合只计一次，不再减撤销次数。验收仍有效的纯退款或折扣保留在Q。同一原件重复尝试或再售不再增加Q。后续更正按实际事件日和替换版本重算原池分子、责任、去向和Q，不得在新池重复收费。预先固定的同配置池须保留失败、闲置和零售出日。Q=0不可归一化，仍需报告。 | ghg-product |
| electric_allocation | ac_input | 优先使用互不重叠的直接线路计量。每个完整活动来源池按全部实际受益方实测任务活动秒分配；闲置固定池的共享照明风扇按预留面积乘对应小时、收银按预留终端小时分配。先分开实测活动、闲置、固定来源分子并核对总和等于父表kWh，不相加不相容驱动。各子池 p，alpha_p=d_target_p/sum_all_beneficiaries(d_b_p)；E_target_kWh=sum_p(E_p_kWh*alpha_p)。闭店、失败、闲置及未用容量仍归运营方，不删除。总驱动为零或未知阻断完成，不能仅摊给成功销售。仅从实际包含子表的父表减子表，不从独立表减。 | ghg-product; jrc-retail |
| background_once | failed_original | N_F计唯一F原始成对商品。每个实际来源等效完整原始成对向量只应用一次；若来源单位不同，恢复供应商原分母并匹配完整成对、包装和到门边界。仅在有据且来源守恒时使用供应商组件清单向量，不按钢或橡胶质量分数拆环境向量。每个 original_id 的S/F/O/T来源份额合计1。内部留作演示不在本路线内，不得同时收F和新资产制造。不得假设替代产品或回收抵扣。 | ghg-product |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | retail | service_output | acceptance_ledger | original_id; SKU; pair_members; pool_id; event_id; actual_date; acceptance_date; rescission_date; final_valid; refund_only; version; correction_source_ids | 逐日核对电子销售、柜台签署验收和退货；保留撤销无退回事件，区分财务调整。必须预先定池日期并连接后续更正。 汇总方法：Q=不同最终有效 original_id 数；先原账再按 calc_core 每参考流归一化一次 | Item(s) | 每日及每次更正 | 全部池日期及全部后续更正 | 单店及准确成对配置 | 每参考流 | 可审计事件ID；双件匹配；版本替代 |
| cp_energy | retail | ac_input | meter_allocation | source_id; parent_meter_id; included_submeters; disjoint_meter_ids; start_kWh; end_kWh; E_p_kWh; active_idle_fixed; all_beneficiary_ids; d_b_p; d_target_p; task_seconds; reserved_m2h; reserved_terminal_h; closure_hours; unused_operator; calibration; alpha_p; E_target_kWh | 完整池内读取经校准有映射电表；活动池用任务日志，固定池按面积时间或终端时间预留。全部受益方及子池总和与账单核对；electric_allocation 按来源类型固定驱动。 汇总方法：先归属 E_target_kWh，kWh乘3.6转MJ，再除Q一次；每参考流 | kWh; s; m2*h; terminal*h | 分时及每日核对 | 池内全部活动、闲置、闭店、失败日期 | 完整映射来源及全部受益方 | 每参考流 | 电表校准；拓扑；账单；时间记录；残差调查 |
| cp_ownership | retail | failed_original | original_source_ledger | original_id; supplier_lot; original_pair_BOM; actual_pair_net_kg; package_component_kg; source_id; source_version; original_source_denominator; source_unit; manufacture_boundary; inbound_segment_ids; S; F; O; T; N_F; continuing_owner; responsibility_evidence; correction_version | 收货检查双件，记录经校准的成对净质量、包装质量及供应商物料清单。读实际供应清单及到收货门运输记录；按唯一原件绑定来源和责任；不从网页规格推清单。 汇总方法：恢复完整原来源分母；S/F/O/T守恒；N_F/Q每参考流 | Item(s); kg | 每次收货及去向更正 | 全部原件历史及后续撤销 | 原供应商到店收货门 | 每参考流 | 实际来源模型和物料清单；包装覆盖；路段去重；责任签署证据 |
| cp_custody | custody | customer_pair; supplier_pair; external_damaged | gross_movement_ledger | original_id; event_id; actual_date; opening_goods; receipt_ids; physical_return_ids; H_intact; H_damaged; H_supplier; handover_state; recipient; original_package_present; held_waste_open; condemnation_ids; dispatch_ids; loss_ids; closing_goods; held_waste_close; original_acceptance_id; initial_handover_state; final_external_state; final_recipient; final_owner | 每次实物过门扫描原始成对及双件；拍照完整状态、原包装和接收签名。H_intact与H_damaged为互斥毛顾客交接事件，含从未验收。无移动撤销只改验收账；保留初始交接状态，另记实测最终外部状态、接收方和责任人。交接后状态观测不增加毛过门。实际状态超出明确完整成对状态时，须具体扩展后才可完整。 汇总方法：calc_custody平衡毛实物库存；各实际输出/Q每参考流；Q独立 | Item(s) | 每次移动；每日结存 | 期初至期末及更正历史 | 商店商品及独立待运废物；全部接收方 | 每参考流 | 扫描审计；状态照片；接收证据；差异调查 |
| cp_waste | custody | damaged_pair_waste | dispatch_weighing | consignment_id; original_id; condemnation_id; gross_kg; tare_kg; W_pair_kg; complete_members; container_kg; package_kg; actual_dispatch_date; receiver; treatment_source_id; transport_source_ids; held_waste_open; held_waste_close | 实际发运时用校准秤称完整损坏一对净质量，排除全部容器包装皮重。取得处理接收与运输覆盖。报废判定是商品转待运废物的内部转移，不是发运。 汇总方法：W_pair_kg=实际发运净kg总和；不再次以期初期末修正直接发运；W_pair_kg/Q每参考流 | kg | 每批发运 | 完整池及待运废物库存 | 店门到实际处理接收方 | 每参考流 | 秤校准；皮重；照片；签署联单；运输无重叠 |
| cp_completion | retail | support modules | completion_source_ledger | module_id; module_version; source_id; source_version; original_denominator; original_unit; source_unit; original_pool; boundary; exchange_id; property; unit; event_id; q_raw; q_normalized; attributed_raw; Q; equipment_register; landlord_map; absence_proof; package_origin_id; cleaner_source_id; destination_state; whole_carrier_kg; reserved_payload_kg; reserved_h; segment_id; all_beneficiaries; provider_already_allocated; e_history; L_version; prior_allocations; retirement; residual; E_target_kWh; N_F; H_intact; H_supplier; H_damaged; W_pair_kg; opening_goods; receipt_ids; physical_return_ids; condemnation_ids; dispatch_ids; loss_ids; held_waste_open; closing_goods; held_waste_close; component_BOM; actual_component_kg; opening_kg; receipt_kg; closing_kg; customer_kg; supplier_kg; dispatched_net_kg; loss_kg; treatment_source_id; transport_source_ids; origin_kg_c; w_c_s; component_content_kg_c_s; opening_unused_kg; closing_unused_kg; dispatched_liquid_origin_kg; dispatched_wipe_origin_kg; dispatched_container_origin_kg; exterior_origin_kg; retained_used_origin_kg; closing_container_origin_kg; loss_origin_kg; inlet_m3; inlet_density_kg_m3; effluent_m3; effluent_density_kg_m3; whole_wipe_kg; whole_container_kg; cleaned_area_m2; A_t; A_unit; reserved_payload_kg_b_t; actual_reserved_h_b_t; d_b_t; d_target_t; alpha_t; operator_unused_capacity; empty_route; idle_duration; provider_boundary; provider_stage_coverage; asset_id; e_a_b; L_a; driver_unit; all_history; lifetime_version; operator_unused_exposure; retirement_date; whole_net_kg; removed_part_ids; measurement_mode; maintenance_event_ids; species_id; mode; subinterval_id; R_out_abs_s_h; R_in_abs_s_h; R_diff_s_h; R_blank_s_h; R_bc_s_h; dt_h; calibration_id; g_ext_s; source_fraction_target_s; g_target_s; air_stock_kg; capture_export_kg; condensate_kg; storage_change_kg; provider_id; D_provider; active_source_numerator; idle_source_numerator; processing_seconds; reserved_bandwidth_Mbps_h; unused_operator; target_event_ids; stage_coverage; excluded_point_of_use_ids; D_module; initial_handover_state; final_external_state; final_recipient; final_owner; inlet_temperature_C; effluent_temperature_C; density_calibration_id; volume_calibration_id; actual_retry_event_ids | 执行固定 complete_packaging、complete_cleaning、complete_transport、complete_assets、complete_digital、merge_modules 方法。保留原始来源单位、全部受益方及历史、签署边界覆盖；新增过程须新增单过程协议视图，不得使用多过程 process_id。 汇总方法：恢复原始来源分子；按原sourceID和边界去重；每参考流只除Q一次 | kg; MJ; m2*h; m3*h; terminal*h; kg*h | 每次事件及来源版本 | 完整池及全部寿命和更正历史 | 全部实际受益方及支持边界 | 每参考流 | 实际来源活动记录；校准测量；签署缺席及覆盖；完整寿命账 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_core | ac_input; failed_original; service_output; customer_pair; supplier_pair; external_damaged; damaged_pair_waste | Q>0时依次为3.6*E_target_kWh/Q MJ；N_F/Q Item(s)；Q/Q=1 Item(s)；H_intact/Q Item(s)；H_supplier/Q Item(s)；H_damaged/Q Item(s)；W_pair_kg/Q kg。原量是未归一化池总量，归属一次后除Q一次。 | Q; E_target_kWh; N_F; H_intact; H_supplier; H_damaged; W_pair_kg; cp_service; cp_energy; cp_ownership; cp_custody; cp_waste | 每参考流、各行对应单位数量 | ghg-product |
| calc_custody | customer_pair; supplier_pair; external_damaged; damaged_pair_waste | 商品期末=商品期初+收货+顾客实物退回-H_intact-H_damaged-H_supplier-内部报废转移-商品丢失；待运废物期末=待运废物期初+内部报废转移-实际废物发运-待运废物丢失。两式按原事件ID计完整成对商品。报废转移只减商品，发运只减待运废物。无实物移动的验收撤销不再作库存流出。调查全部残差；次数不替代废物实测kg。 | opening_goods; receipt_ids; physical_return_ids; H_intact; H_damaged; H_supplier; condemnation_ids; dispatch_ids; loss_ids; held_waste_open; closing_goods; held_waste_close; cp_custody; cp_waste | 独立毛商品及待运废物核对；不调整Q | ghg-product |
| complete_packaging | retail; custody | 每个原包装组件保留原来源及物料清单ID、实际kg，期初+收货=期末+顾客交接+退供+发运+丢失。存在时须覆盖完整主体、闭合件、衬层、标签、胶及运输隔件，明确实际材料与状态；未知物料清单阻断补全。原包装制造仅在原S/F/O/T向量，不另加零售输入。实际拆下包装在发运时建立具名材料状态废物卡、净kg，处理和运输一次。scope_gate不允许加袋、纸凭证或重包装。 | package_origin_id; source_id; component_BOM; actual_component_kg; opening_kg; receipt_kg; closing_kg; customer_kg; supplier_kg; dispatched_net_kg; loss_kg; treatment_source_id; transport_source_ids; cp_completion | 互斥包装去向原始kg及归属处理分子 | jrc-retail |
| complete_cleaning | retail | 在进口表测自来水（m3乘density_kg_m3）；用校准密度及体积仪器在记录的计量或采样温度下测各实际液体载体密度，不用纯水密度替代整股废水密度；不得从该进口表再减内部回用。对每个实际已识别清洁配方来源c称量期初+收货-期末未用，得到领用来源kg；期末未用排除另记的不可用容器残液。本清洁路线要求来源组成守恒且无未量化反应产物；反应存在或未知时，须具体审查组分质量平衡扩展后才可完整。原配方来源kg互斥分为最终发运液体、最终发运擦布、最终发运容器残液、示踪原配方来源外部转移、留存已用液体擦布、期末容器残液及调查丢失。已用中间状态被最终冲洗或留存状态替代，不相加。容器残液只能期末留存或已发运，不能两者兼有。配方组分s按component_content_kg_c_s=origin_kg_c*w_c_s实测原配方组成仅乘一次：这是来源组分含量，不是实际外界组分排放。原来源组分核算排除外部空气、冲洗水、污物提供的原子；其互斥去向用实测示踪或来源份额，不能用外界分子kg。新加冲洗水、污物、新擦布和容器不属于原配方来源kg。直接排水=实测整股废水m3乘density_kg_m3，不减储存或蒸发；本规则强制直接模式。另称整件湿擦布、湿容器（整件kg包含实际载体和残液），分别建立具名废物卡和实际处理。已含于整载体中的组分kg不得再加。实际外界分子组分kg独立于组分含量，采用calc_exterior_flux。内部产生不等于基本流排放；空气捕集储存闭合仅QA，不再从已实测外界通量扣减。未知化学、去向、通量阻断补全，不默认零。各原始清洁来源按全部受益方实际清洁面积m2分配，含闭店区域，再除Q一次。 | cleaner_source_id; origin_kg_c; w_c_s; component_content_kg_c_s; opening_unused_kg; receipt_kg; closing_unused_kg; dispatched_liquid_origin_kg; dispatched_wipe_origin_kg; dispatched_container_origin_kg; exterior_origin_kg; retained_used_origin_kg; closing_container_origin_kg; loss_origin_kg; inlet_m3; inlet_density_kg_m3; effluent_m3; effluent_density_kg_m3; whole_wipe_kg; whole_container_kg; cleaned_area_m2; all_beneficiaries; source_id; cp_completion | 互斥来源kg、组分kg、整载体kg及归属模块分子；仅合并后每参考流 | jrc-retail |
| complete_transport | custody | 制造到收货门运输已在原S/F/O/T来源，不再添加。各实际到门后退供、废物提运及来源路段t保留来源活动量A_t及实际验证的完整供应商LCI边界：车辆制造安装、含燃料和空驶静止怠速的运行、事件维护替换、末端处理。取得签署来源阶段覆盖矩阵；缺任何阶段阻断完整性。供应商已含资本维护末端载体和原收货门来源全部去重，完整供应商向量只用一次。对未分配来源池，每个实际路段用d_b_t=reserved_payload_kg_b_t*actual_reserved_h_b_t；alpha_t=d_target_t/sum_all_beneficiaries(d_b_t)；归属分子=sum_t(A_t*alpha_t)，分别保留A单位。未用和空载容量列运营方受益；空载怠速用实际预留载荷容量和实际怠速时长，不用零吨或零距离。全部路段受益方与完整供应商容量时间核对。供应商已按托运分配时原量不变，路段记录仅QA，不能再乘alpha。缺空驶怠速覆盖阻断完整性。绑定载体运输及处理范围，避免重复提运。 | segment_id; source_id; A_t; A_unit; reserved_payload_kg_b_t; actual_reserved_h_b_t; d_b_t; d_target_t; alpha_t; all_beneficiaries; operator_unused_capacity; empty_route; idle_duration; provider_already_allocated; provider_boundary; cp_completion | 含空驶怠速的原单位运输来源归属分子 | ghg-product; jrc-retail |
| complete_assets | retail | 必需资本模块为完整建筑和装修（含固定照明风扇）、承重哑铃货架、收银终端、实际网络路由交换及通信柜、安全摄像报警包、搬运手推车。核对实际设备登记；确实不存在的项目必须有日期缺席证据，存在状态未知阻断完整性。有据完整建筑终端或供应商包已含其中项目时，定位准确原sourceID，不再加第二模块。使用验证完整供应商生命周期向量，精确列安装、运行、维护、退役排除。建筑e/L用预留面积m2*h；货架用预留存储容积m3*h；终端用预留terminal*h；网络设备用预留port*h，安防用覆盖面积m2*h，搬运手推车用预留载荷kg*h。各自有同单位全部受益方e和L，含空闲未用预留。对各资产a及全部历史受益方时期b，f_a_b=e_a_b/L_a，L_a为有据预计全寿命同单位总暴露，含运营方未用及闭店暴露。永久保留原资产来源ID及全历史，sum f<=1。寿命修改替换全部历史f，将差额记原池，不重新开始制造。退役按全部实际历史e占比分配残余1-sum f，替换旧版本并令最终合计1。整件退役载体净质量只乘最终寿命责任份额一次，不再乘制造份额。直接整件净称重已排除拆除件；组件重建是有据互斥替代。除完整有据包已包含外，替换维修按事件实际部件称量、日期来源ID另记，不相加无关维修料作一个完整资产输入，不重复供应商已含载体。仅分配无演示范围，不允许商品转资产。 | asset_id; source_id; original_denominator; e_a_b; L_a; driver_unit; all_history; all_beneficiaries; prior_allocations; lifetime_version; operator_unused_exposure; retirement_date; whole_net_kg; removed_part_ids; measurement_mode; maintenance_event_ids; residual; cp_completion | 永久资产来源份额及归属资本和退役分子 | ghg-product; jrc-retail |
| calc_exterior_flux | retail | 每个组分及匹配子时段h恰选一种实测外界控制体模式：绝对模式g_ext_s=sum_h((R_out_abs_s_h-R_in_abs_s_h)*dt_h)，R_out_abs_s_h与R_in_abs_s_h均为原始绝对组分分子kg/h速率，仅作有据仪器零点校准；两者均未扣除环境背景。公式以原始出口减原始入口恰好去除环境背景一次；绝对模式不另减环境背景；差分模式g_ext_s=sum_h((R_diff_s_h-R_blank_s_h)*dt_h)，原差分已去入口背景，匹配空白仅去一次；已空白校正模式g_ext_s=sum_h(R_bc_s_h*dt_h)，入口背景及空白已去，不再减。各速率为实际组分分子kg/h，dt_h为匹配实际小时；不将子批速率再乘库存kg或停留时间。模式互斥，保留速率定义及校准证据。来源已解析至目标清洁时g_target_s=g_ext_s；否则必须有实测source_fraction_target_s，g_target_s=g_ext_s*source_fraction_target_s仅一次，该份额已含目标受益方归属。不再对g_target_s乘清洁面积归属。不用原配方component_content_kg替代外界分子kg，也不将外部反应物原子列来源组分账。空气、捕集输出、冷凝及储存独立闭合仅QA；不从已测外界通量再扣捕集储存。内部回收气体不能既计外通量又另减；实际对外输出捕集载体只建一个实际产品或废物卡及处理。负值或不确定观测须调查，不截零或声称抵扣；真实吸收须经审查匹配输入身份。模式、匹配时间、来源份额、外界边界未知均阻断完整性。最终实际分子输出为g_target_s/Q每参考流。 | species_id; mode; subinterval_id; R_out_abs_s_h; R_in_abs_s_h; R_diff_s_h; R_blank_s_h; R_bc_s_h; dt_h; calibration_id; boundary; g_ext_s; source_fraction_target_s; g_target_s; air_stock_kg; capture_export_kg; condensate_kg; storage_change_kg; Q; cp_completion | 实际外界分子kg及每参考流量 | jrc-retail |
| complete_digital | retail | 纯电子交易仍须实际网络及支付运行模块。各实际供应商须绑定准确服务、来源ID版本、原参考单位及实际来源池原分母D_provider。供应商归一化向量乘D_provider一次恢复。未分配活动来源子池按全部实际受益方实测处理秒分配，闲置固定子池按全部受益方预留带宽Mbps*h分配，含运营方未用容量。先分来源分子，不相加秒与容量时间。供应商向量已按交易分配时保留原分配，上述记录仅QA。记录实际目标支付网络事件ID；同一事件重复记录去重，真实重试须保留不同ID及全部实际活动；含失败的原始实测活动仍在原池。准确来源范围须声明供应商电力、网络服务器资本、维护和末端覆盖。缺来源阶段覆盖阻断完整性。ac_input已含商户终端路由运行电力，供应商模块须在相同使用点边界排除。商户网络安防搬运资本执行complete_assets；供应商建筑终端已含对象按准确sourceID覆盖仅排除一次。仅通过merge_modules恢复合并，再除同一更正Q一次。 | provider_id; source_id; source_version; D_provider; source_unit; original_pool; active_source_numerator; idle_source_numerator; processing_seconds; reserved_bandwidth_Mbps_h; all_beneficiaries; unused_operator; target_event_ids; provider_already_allocated; stage_coverage; excluded_point_of_use_ids; cp_completion | 网络支付归属原始分子 | ghg-product; jrc-retail |
| merge_modules | retail; custody | 每模块交换将归一化量q_normalized恢复为有据原池版本原分母D_module：q_raw=q_normalized*D_module，或直接用原始总量，不能两者并用。需要时固定驱动归属一次。核心及全部模块按原source_id、交换边界、事件和替换版本去重；S/F/O/T原背景及点用电不得重现。仅对身份、属性、单位相同相容的归属原始分子逐行相加，再除同一个更正后Q一次。不把kg与MJ、寿命份额与材料kg、原总量与归一化值相加。供应商已分配运输保持原分配。省略、不支持、缺席模块分开记录；完整性需全部必需模块和凭证，不是意向列表。 | module_id; source_id; exchange_id; property; unit; boundary; event_id; source_version; original_pool; D_module; q_normalized; q_raw; attributed_raw; Q; cp_completion | 每参考流一个更正后的归一化交换向量 | ghg-product |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_quality | all inventory rows | 具体未绑定身份仅为候选。绑定需官方原始直读UUID、公开状态、准确双语名、产品废物类型、完整成对包装状态及属性单位链；不得以标称质量或泛钢材代理。服务参考身份独立于数量属性，仍未解决。 | 原始响应及匹配完整性凭证；实际供应商背景及边界证据 |
| measurement_quality | all inventory rows | 记录对象地点时间、完整时间覆盖、校准不确定性、原单位、全部来源受益事件ID及替换版本。未知量或无证据不变零。按测量不确定性调查残差，不虚构通过容差。 | 校准；发票；保管验收责任核对；完整原账 |
| completion_quality | retail; custody | 以原始输入、来源ID和原分母执行全部固定补全计算。cp_completion仅为retail过程账本视图；新增custody或其他过程需同一原始记录的单过程视图，不重复测量或二次归一化。设备燃料制冷剂存在状态未知即support_gate失败。 | 签署设备房东调查；来源覆盖；完整包装清洁路线资产记录；逐行合并审计 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| reference_check | service_output | 要求准确原始成对配置、最终有效不同Q>0和一个Item(s)服务。Q=0报告不可归一化。检查全部最终amount.basis.kind=reference_flow及每参考流文本，仅应用各行对应单位。 | ghg-product |
| reconciliation_check | all inventory rows | 核查来源S/F/O/T守恒、实际F输入背景、独立毛商品及待运废物平衡、互斥顾客状态、后续更正和完整来源ID去重。实物外部失败需接收方状态责任；不从验收失败推废物。 | ghg-product |
| completeness_check | retail; custody | 仅核心结果保持部分。必需流或背景未绑定、缺原物料包装到门证据、未知量、禁用支持路线存在或未知、模块未完成时，阻断完整服务使用。核实真实来源类型单位边界及双语必需原子卡协议。候选机械检查通过不代表科学批准。 | jrc-retail |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | partial_incremental_retail_service |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 披露缺口的明确部分核心筛查；仅必需来源绑定补全和审查后可作完整服务 |
| excluded_use | 整个CPC叶；商品制造；由核心作完整业务声明；按商品质量归一化影响；未审查比较声明 |
| required_metadata | SKU及双组件配置; 供应商 original_id 与 source_ids; 原包装物料清单和实测质量; 商店渠道及池日期; 原验收事件和更正日期; final_valid 标志; 毛保管事件ID; S/F/O/T责任; 实际包覆及手柄状态; 电表层级及全部受益方; 补全模块版本; 不确定性和未解决身份 |
| required_quality_disclosure | 候选及未绑定服务和五项实物背景身份；来源日期；部分模块；不确定性；零输出池；全部更正版本 |
| update_trigger | SKU物料包装状态渠道变化；新燃料制冷剂；新资产路线；来源寿命修改；后续验收或去向更正 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| source_id | type | title | reference | use |
| --- | --- | --- | --- | --- |
| un-cpc62155 | official_guidance | 联合国统计司CPC3.0子类62155解释说明 | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62155 | 分类边界：384体育用品、494船、49921非机动自行车；非产品清单 |
| xprt-spec | handbook | XPRT橡胶六角哑铃厂家产品规格；有日期网页快照 | https://xprtfitness.com/products/rubber-hex-dumbbells | 5 LB成对配置；仅材料及完整物身份；无清单或包装物料清单 |
| ghg-product | standard | WRI/WBCSD产品生命周期核算报告标准2011；第6、7、9章 | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅服务参考及物理分配原则；PCR公式为声明的前景方法，不声称标准符合性 |
| jrc-retail | official_guidance | JRC零售业最佳环境管理实践2013；执行摘要及零售照明废物章节 | https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售支持及废物过程筛查，不提供清单默认数值；须实际路线证据 |
