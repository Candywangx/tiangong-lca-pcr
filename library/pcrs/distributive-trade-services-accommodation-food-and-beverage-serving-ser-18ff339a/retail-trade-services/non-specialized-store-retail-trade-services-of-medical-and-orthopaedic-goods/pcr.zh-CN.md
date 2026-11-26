---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-medical-and-orthopaedic-goods
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原包装成人铝制腋拐成对柜台零售服务

## 1. 范围与适用性

本方法处理真实混合非专门门店销售未开封完整成对矫形用品时的身份及责任问题。现有实质零售方法可借鉴细分/库存原则，但不能确立本路线的成对器械身份、组件向量守恒、不调节交付验收或完整支持覆盖。现有医疗设备制造 PCR 的生产功能不同。保留原 ID 不变，宽分类名称不授予全叶范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-medical-and-orthopaedic-goods |
| classification_refs | CPC3.0:62174，建议窄范围关系；本候选不产生已接受映射。 |
| covered_products | 有证据的混合非专门商店渠道内原装未开封完整成对成人铝制腋拐；每个同质池固定实际尺寸范围、供应商及完整套装BOM。 |
| excluded_products | 单根腋拐、青少年型号、独立替换附件、左右特定变体、已开封/调节/用过/定制产品、医疗专门店、临床/配适/租赁服务及其他医疗用品。 |
| representative_product | 原包装成人铝制腋拐成对柜台零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 零售收货→未开封常温储存/展示→无纸柜台交付→最终有效验收/命运核对；支持来源依 complete_support 补齐。 |
| market_state | 原厂未开封非无菌成人对包装；须外包装/批次证据；零售方不试用或调节。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一份有记录的原成人腋拐对包装柜台零售交付服务。 |
| How much | 1 Item(s) 服务对应一份未开封完整对包装；两根拐不能算两份服务。 |
| How well | 实际成人 SKU 正确、原包装完整、两根完整拐及附件、商业验收最终有效；不声称临床功能/适配。 |
| How long or cycle | 一段事前固定的同配置池，自收货至截止日，持续修订命运/晚退货。 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一份未开封 成人铝制腋拐 成人腋拐对包装的柜台零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际混合门店品类/渠道; 成人铝制腋拐 成人型号; 原批/ID; 每零售包装两根完整腋拐; 实际附件/外包装 BOM; 尺寸及左右配置; 实际非无菌声明; 未开封/不试用/不调节; 收货门; Q/截止日/版本; S/F/T/O; 完整包装/组件模式; 供应方范围; 部分核心/补齐状态; 地域/时间 |

全部必需限定信息须在数据集元数据、过程说明或参考流备注声明；缺失即定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_reference | retail_service; failed_original; supplier_pack; external_retained_pack | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 服务计数与完整对包装计数分别维护类型台账。一箱不等于一对，一对含两根完整腋拐。每最终交换每参考流仅最终除 Q 一次。 |
| mass_state | outer_carton; rejected_pack; carton_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用实际同状态经校准净 kg，不用目录标称重；整载体 kg 与原来源等价 Item(s) 分开。 |
| ac_conversion | retail_ac | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 1 kWh=3.6 MJ；仅供应原件使用点交流电链，不推断影响因子。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接收未开封原完整对包装及互斥支持来源门；S 商品制造仍在外部。 |
| starting_condition_role | 零售保管/来源责任门，不是材料生产参考输出。 |
| product_classification_scope | CPC62174 的腋拐对包装非专门贸易窄子集，不是整个医疗/外科481组。 |
| recursive_input_rule | 不得由保管或实物卫星输出递归加入 S 制造。明确 failed_original 的 F 产品背景必需且不受该排除；支持投入采用精确独立范围。 |
| upstream_dataset_requirement | F 须有实际完整原对包装供应向量及入场来源清单，另须匹配交流电/运输/支持/处理供应方；规格本身不足。 |
| disclosure | 候选部分增量核心，强制 complete_support；明确未绑定流身份及全部不完整；不授予方法、安全或合规批准。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope_gate | retail; reverse; support | 仅适用于实际步入式、混合品类的非专门商店：在常温条件销售声明成人铝制腋拐配置，每个原厂零售包装内有完整一对。由批次标签及供货方声明核对实际非无菌供货和原厂未开封状态；制造商规格页本身不证明无菌状态。不纳入开包、试用、手柄/高度调节、组装、安装、处方、配适、租赁、维修、消毒、临床使用或送货上门。青少年型号、单根拐、左右特定部件、定制器械、已开封退货或不完整套装均属不同配置，须先增加状态特定方法/卡片并审查，方可声明完整。不得由规格页推断临床适用性、安全、法律批准或完整 BOM/LCI。 | un-cpc-62174; drive-rtl10400 |
| goods_ownership | retail; failed_original; goods_inbound | 在零售方实际收货门，对每个原始供应向量仅一次分配至互斥的 S（最终有效售出）、F（零售方负责的失败/丢失原商品）、T（有名称的继续接收方/内部资产责任方）或 O（仍在库或未解决）。每个原始向量的份额之和为1，不能按废物后代载体重复分配。S 的制造及原始入场运输排除在本增量服务之外，仅可由另行声明的下游 GOODS 系统一次加入；failed_original 和 goods_inbound 明确纳入 F 的制造/包装及原始入场运输。T 将相同原始来源延续至有名称的责任方，包括退供；单纯移动或退款并不转移责任。O 必须保留，不能置零或暗中归 F/S。命运明确后关闭/修订原队列。仅当两根拐、全部原厂附件及整个零售包装同属一个责任时，才允许原完整包装标量；若不同，须取得保留来源 ID 的供应方组件清单向量及实际组件量，新增对应原子投入卡并从完整包装投入排除相应部分；材料质量比例不能拆分环境向量。 | ghg-product-standard; drive-rtl10400 |
| physical_states | retail; reverse | 分别维护仅商品的保管台账与待运废物台账。所有客户实物交付总量只计一次，包括从未验收的交付。无实物移动的后续验收撤销仅重分类原事件，不是新增实物出库。判废是商品向待运废物的内部转态，不是外运。逐项记录未开封退供、客户外部保留的未验收包装、已确认丢失商品和有签字的未决残差；均不自动视为废物。已开封、损坏、破碎或不完整载体须在完整前具备独立状态卡、接收方及匹配处理/背景；即使窄范围服务分母不变，也须保留实际测量。仅 supplier_pack 和 external_retained_pack 是不表征的保管实物卫星，不递归加入原始制造。rejected_pack 和 carton_waste 为实际废物输出，须匹配完整处理及互斥运输，不能以卫星名义排除。failed_original 仍是承载原 F 制造的表征产品投入。 | ghg-product-standard |
| route_evidence | retail; reverse; support | 事前固定商店/配置/报告池与观察截止日。同池纳入闲置、闭店、拒收、撤销、重复及零销售期间和对应资源使用，不得只选成功日期。Q=截止时柜台验收最终有效的不同原始对包装 ID 数；无退货的验收撤销也移除该 ID，不能再从最终有效计数重复减撤销数。验收有效的纯价格折让/退款不移除 ID。同一原商品退货后再售仅计一次最终服务，但所有重复处理资源均保留。晚到证据按实际事件日替换原分子、分母版本，不得仅因调整晚到就转嫁新队列。Q=0 时保留不可归一化池，不能给零清单。 | ghg-product-standard |
| core_limits | retail; reverse; support | 已列核心为部分增量服务清单，不能代表完整门店经营。complete_support 强制补齐所有实际支持设施、清洁/卫生、员工福利、资本、ICT/网络、支付、安防和行政来源。核心电力覆盖已审计门店边界内全部实际现场交流电路，外部模块排除相同交流电。路线准入须有签字的资产/场址/公用工程调查，证明无现场燃烧、燃气/蒸汽/购热、含制冷剂设备、电池、商品演示、打印或新增顾客袋。若存在，完整性即阻断，直至经审查的明确来源方法和双语卡/协议予以覆盖；不得置零或虚构排放因子。顾客出行、交付后临床使用/清洁及 S 商品报废在零售服务边界之外，须单独披露。 | jrc-retail-bemp; ghg-product-standard |
| intact_waste | rejected_pack | 不合格未开封原包装废物是一项真实完整混合产品载体：两根铝合金腋拐及实际脚垫/腋垫/手柄/紧固件和保留的原零售外包装。不能仅凭名称当作纯铝废料或感染性医疗废物。须取得接收方对实际整载体组成及未污染状态的签字接收，匹配完整运输/处理范围及原始运单 ID。用外运批次直接称得的净 kg，不能既计组件 kg 又计相同整包装。待运废物单独称量；外运 kg 不能再按期初/期末存量重复修正。不设默认回收抵扣。 | drive-rtl10400; jrc-retail-bemp |
| support_scope | support | 强制支持调查必须定位实际建筑主体、照明/风扇/固定设施、储架、收银/扫描器、网络设备、门禁/安防设备、远程支付/安防/存储/行政后台、清洁服务及员工福利。每型号分开制造/安装、运行、维修事件及末端载体/报废范围；完整建筑整包须明确包含实际照明/风扇/固定设施，否则另建寿命模块。场所和清洁运行来源为实测交流电（核心已含则排除）、入场供水、每种明确配方清洁剂、可复用布/工具型号及每种实际固/液载体。入场供水为实际入口表体积*记录温度下密度，不扣内部回用。废液采用互斥直接模式：实际排放表体积*实测同流密度，或对相同实际整废液载体作经校准净称重；不扣蒸发/存量/回用。水和配方原来源衡算仍是独立核对，不能重建或加入直接实测整废液。清洁剂配方原来源 kg 在未用存量、实际使用/排出、洒漏、保留残留及外运容器残留间仅一次分区；回用/中间状态替换前态，不是新增使用。湿布/容器/冲洗液整 kg 不同于配方原来源 kg。工具/布依 asset_lifetime 以清洁面积 m2 暴露，建筑用 m2*h，货架用 m3*h，电子设备用 h；实际维修和末端载体按事件及历史份额。实际混合废物须有组成/状态签字接收及匹配处理。购入/使用/退役库存核对不能在寿命整包旁再加制造。各来源运输仍按 transport_ownership。逐一采实际具体流；未知或未绑定身份/数量/供应方范围均阻断，不能用公用工程/废物选择器卡代替。 | jrc-retail-bemp; ghg-product-standard |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 收货、储存及柜台服务 | required | 依 scope_gate | 增量零售核心 | Q |
| reverse | 实物退供及不合格载体交接 | conditional | 实际退供/保留/废物或相关运输；否则签字不存在 | 逆向保管/处理关联 | Q |
| support | 强制互斥支持模块 | required | complete_support | 部分核心固定补齐 | Q |

### 过程：收货、储存及柜台服务（`retail`）

#### 输入

##### 产品流

###### 未开封原厂 成人铝制腋拐对零售包装（`failed_original`）

一份原完整对包装等价量提供 F 制造/零售包装背景；此为来源等价负荷投入，不是新增实物收货。保留实际完整供应向量及来源门边界。

- 选定流：未开封原厂 成人铝制腋拐对零售包装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_F/Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`product_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_original`
- 来源：drive-rtl10400; ghg-product-standard

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`（`retail_ac`）

使用点交流电身份未指定供应方/电压/组合。须另绑定实际交付/供电地域和上游损耗，不能推断电网强度。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：sum_c(X_c*d_c_h/D_c)/Q MJ
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ac`
- 来源：jrc-retail-bemp; ghg-product-standard

###### 成人铝制腋拐 对包装的道路货车完整运行运输（`goods_inbound`）

仅含与 failed_original 同一收货门原供货至零售方运输的 F 责任。供应向量已含运输须逐事件从此排除；S/T/O 实际原入场运输保留其责任台账。

- 选定流：成人铝制腋拐 对包装的道路货车完整运行运输
- 流属性/单位：车辆距离 / vehicle*km
- 数量规则：sum_j(T_original_j*f_F_j)/Q vehicle*km
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport_in`
- 来源：ghg-product-standard

###### 上游箱装瓦楞纸板包装（`outer_carton`）

仅在实际另拆瓦楞外箱时纳入；排除 V_j 已含零售包装。封箱/标签/胶粘须纳入经核实完整箱背景，或新增具体卡；纯纸板不能覆盖未测附件材料。

- 选定流：上游箱装瓦楞纸板包装
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：first_use_carton_kg/Q kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_carton`
- 来源：jrc-retail-bemp

#### 输出

##### 产品流

###### 一份未开封 成人铝制腋拐 成人腋拐对包装的柜台零售服务（`retail_service`）

一份服务对应未开封成人对包装，不是一根拐或一箱八对。核对精确型号、实际包装 BOM 及两根完整腋拐和原附件；不声称临床结果或使用时长等价。

- 选定流：一份未开封 成人铝制腋拐 成人腋拐对包装的柜台零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`product_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_service`
- 来源：un-cpc-62174; drive-rtl10400

### 过程：退供及不合格载体（`reverse`）

#### 输入

##### 产品流

###### 成人铝制腋拐 对包装的道路货车完整运行运输（`service_transport`）

实际零售方安排退供/失败交付回收运输，含零销售/重复事件。不含顾客出行或重复原 F 入场；匹配处理已含废物运输从此排除。

- 选定流：成人铝制腋拐 对包装的道路货车完整运行运输
- 流属性/单位：车辆距离 / vehicle*km
- 数量规则：T_service_original_pool/Q vehicle*km
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_transport_reverse`
- 来源：ghg-product-standard

#### 输出

##### 产品流

###### 未开封原厂 成人铝制腋拐对零售包装（`supplier_pack`）

实际完整未开封退供实物输出。须有接收方/状态签字及继续的 S/F/T/O 来源责任；仅赋 T 不形成新实物移动或制造抵扣。

- 选定流：未开封原厂 成人铝制腋拐对零售包装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：actual_unopened_supplier_handoff_count/Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_reverse`
- 来源：ghg-product-standard

###### 未开封原厂 成人铝制腋拐对零售包装（`external_retained_pack`）

无最终有效验收而由有名称外部客户实际保留的未开封整包装，含无实物退回的验收撤销。原交付总事件仅计一次，记录实际接收方/状态及继续来源责任；不能当服务输出或自动废物。

- 选定流：未开封原厂 成人铝制腋拐对零售包装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：actual_unaccepted_unopened_external_retention_count/Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_reverse`
- 来源：ghg-product-standard

##### 废物流

###### 不合格未开封 成人铝制腋拐 成人腋拐对包装废物（`rejected_pack`）

实际原混合产品整载体交给已核实接收方；不拆为重复铝/乙烯基/包装流。intact_waste 确定组成/状态/处理准入。

- 选定流：不合格未开封 成人铝制腋拐 成人腋拐对包装废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：direct_dispatched_net_kg/Q kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`
- 来源：drive-rtl10400; jrc-retail-bemp

###### 已用瓦楞纸板外箱废物（`carton_waste`）

有条件纳入实际外运已用外箱：外运批净 kg 直接称量；留存/复用库存仅独立核对，不能从已称外运量再次扣减。接收方须接受实际封箱/标签/胶粘，不与原零售 rejected_pack 或退供外箱重叠。

- 选定流：已用瓦楞纸板外箱废物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：carton_dispatch_net_kg/Q kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_carton_reverse`
- 来源：jrc-retail-bemp

### 过程：强制支持来源补齐（`support`）

以 cp_support 执行 complete_support；完整服务数据集前必须增加实际原子扩展行及单过程协议视图。本必需过程不虚构通用完整整包流卡。

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| electricity_pools | retail_ac | 先把实际电路 MJ 来源细分为互斥的活动、闲置和固定池，其和与门店入口电表核对。仅在母表包含子表时才扣子表；独立不重叠电表无需扣减。活动收银/处理 MJ 按实测 SKU 行员工/设备活动秒数分配，含失败；闲置预留收银 MJ 按实测预留终端秒数；照明/通风/固定 MJ 按所有受益对象实际专属展示/储存/支持面积时间 m2*h 分配，公共通行区按各对象专属 m2*h 份额分配。不能把秒和 m2*h 相加成一个分配驱动量。每来源池 c 内以 X_c*d_c_h/sum_all_h(d_c_h) 分配，再仅对相容 MJ 求和。保留闭店/闲置期间，全部受益对象驱动量覆盖须已知且为正，否则归属未解决。不采用营业额、铭牌功率或成功销售默认量。 | ghg-product-standard; jrc-retail-bemp |
| asset_lifetime | support | 每个实际同构资产/型号/BOM/范围向量 V_a，按自身单位采受益对象暴露量 e_a_h，并以相同单位预计全寿命暴露 L_a：f_a_h=e_a_h/L_a。跨期、跨全部受益对象维持唯一台账，暂定累计份额<=1，含闲置预留和闭店。实际退役时用 f_final_a_h=e_actual_a_h/E_a 替换每一个历史份额，E_a=sum_all_h(e_actual_a_h) 必须已知为正，不能只把残额压给最后一池。每次来源与历史受益对象修订均有 delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a，替换旧记录并保留两个版本。实际型号特定制造/安装、独立维修事件及独立末端载体/运输均按该资产历史暴露同式归属，末端载体不能再乘另一个制造份额。整机实际净退役称重已排除拆件，组件 BOM 重建为互斥替代。经证据证明完整包含维修/运输/报废的整包，须排除相应外部模块。不得把异构型号合并为一个 Item(s)，寿命预计修订不能重新全额购入。 | ghg-product-standard |
| transport_ownership | goods_inbound; service_transport; support | 把行程/路段来源→实际货运批次/资产/材料→原始责任及受益池划为不同分配层级。本路线采用实际道路货车完整运行的车公里供应方；须有签字范围覆盖实际燃料/车辆运行并声明上游/车辆资本，识别已含空驶及原地怠速事件。本体积驱动路线须有实际货车装载受体积约束证据，或与实际货厢核对的预留体积容量合同才准入；未知或受质量约束的行程须在完整前审查匹配驱动量方法。载货车公里来源按所有实际货批实测占用货厢 m3*路段 km 分配；空驶调位车公里按造成该行程的货批实测预留 m3*空驶 km 分配；原地怠速运行来源按预留 m3*怠速小时在自身时间来源内分配，不能与距离相加。若车公里供应方未含实际静止耗油，另加实测具体燃料/怠速时间运行模块并去除重叠。空驶/怠速范围未知即阻断完整。收货来源之后按 S/F/T/O 归属，goods_inbound 仅含 F。逆向服务行程归于原始服务池，不能再次乘 F。独立资本/维修/报废运输先属相应资产，再按 asset_lifetime 历史份额归属。供应方若已分至货批，仅免重复行程分配；只有已分至精确原责任/池/版本的量才免责任份额。不同供应方 ID 不证明实际活动互斥。 | ghg-product-standard |
| support_drivers | support | complete_support 对各实际外部服务来源分别分配：场所/固定设施用 m2*h；货架用实测预留货架包络 m3*h；收银终端/扫描器分别用活动秒及预留闲置秒；员工行政/福利用记录的任务员工小时，含失败工作；门禁用保护区 m2*h；安防拍摄/存储先按拍摄原时点保护区 m2*h 分配实际摄像秒，后续保留 GB*h 沿用原受益对象图。GB=10^9 字节，GiB=2^30 字节，使用实际字节时间积分。网络唯一连接区间来源小时按全部受益对象记录的预留端点连接秒分配，活动数据包处理以实际字节量另池分配，两者均不重复现场交流电。支付的真实唯一尝试以实测购物篮行处理秒的份额分配，每尝试份额和为1，含拒付/撤销；一笔多 SKU 授权不能给每 SKU 各记全额。远程行政以实际处理任务秒分配，独立固定后台容量按预留处理秒另池分配。所有总量与全部受益对象的实际完整服务来源核对，识别原来源/池/版本并保留闲置/零销售期间。清洁运行来源作业按同次作业各实际受益对象实测清洁面积 m2 分配，全部作业驱动量须实测并合计为供应方原作业面积，不能按后期销售分配。不得虚构 SKU 专属摄像字节、重复网络区间或相加不同量纲的驱动量。 | ghg-product-standard; jrc-retail-bemp |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | retail | retail_service | acceptance_ledger | 原商品 ID; SKU; 型号; 对内根数; 实际包装 BOM; 原封状态; 无菌状态声明; 尺寸; 左右配置; event_id; 事件时间; 实物交付总量; 实物退回; acceptance_status; final_valid_original_ids; cut_off; original_pool_id; version | 关联 POS 交付与供应收货 ID；不开包检查外标签；逐事件核对原对包装/配置及验收/退回历史。按最终有效不同 ID 计数，不按交易数；失败与撤销也记录。 | Item(s) | 每事件及截止时点 | 全部原队列含晚到退回 | 同一混合门店/配置 | 每参考流 | 验收/命运签字；供应标签/BOM；审计轨迹 |
| cp_original | retail | failed_original | original_source_ledger | N_j; f_F_j; V_j; original_id; source_id; S; F; T; O; 组件向量模式; 完整 BOM; 零售外包装; 供应门; 来源版本; G_open; receipt_count; customer_return_count; gross_customer_handover_count; supplier_handoff_count; internal_transfer_count; condemnation_count; confirmed_missing_count; signed_goods_residual | 逐收货批清点实际完整对包装并审计供应方完整包装来源清单；维护原来源向量责任及有类型商品保管方程。标称净重、材料比例或规格页不能替代实际来源向量。 | Item(s) | 每收货/命运变更 | 完整来源历史 | 同一收货门 | 每参考流 | 供应一手 LCI/BOM 及接收责任签字 |
| cp_ac | retail | retail_ac | meter_and_activity_ledger | X_c; d_c_h; D_c; source_class; meter_topology; meter_unit; 电表 ID; 区间始; 区间末; 起读数; 止读数; 校准; 活动秒; 预留闲置秒; 专属面积 m2; 区间 h; 全部受益对象 ID; original_source_id; pool_id; version | 逐区间读经校准入口/子表并映射电路嵌套；同步 POS/任务秒与全部门店商品实测占用面积时间。积分实际闭店/闲置区间，按 electricity_pools 形成互斥 MJ 来源及分别同单位驱动量。 | MJ | 每计量区间 | 全池含闭店/闲置 | 审计场址门全部交流电 | 每参考流 | 校准/拓扑；供应交付地域/电压/组合 |
| cp_transport_in | retail | goods_inbound | trip_source_ledger | 行程 ID; 路段 ID; source_id; 实际车公里; volume_limited_evidence; reserved_volume_contract; actual_capacity_m3; 占用货厢 m3; 路段 km; 预留空驶 m3; 空驶 km; 预留怠速 m3; 怠速小时; 实际怠速燃料; 供应方范围; attribution_level; T_original_j; f_F_j; T_service_original_pool; 货运批次 ID; 责任方 ID; original_pool_id; version | 实测全部货批实际路线/路段距离、货物尺寸及怠速预留；核实供应方原分母、空驶/怠速及生命周期范围。两个协议视图共享原行程 ID，但分区事件/责任范围，不得重复行程或责任分配。 | vehicle*km | 每行程/路段 | 全部相关入场/逆向及零销售事件 | 实际道路路线 | 每参考流 | 路线日志；供应方范围签字；全部受益对象容量/时间核对 |
| cp_transport_reverse | reverse | service_transport | trip_source_ledger | 行程 ID; 路段 ID; source_id; 实际车公里; volume_limited_evidence; reserved_volume_contract; actual_capacity_m3; 占用货厢 m3; 路段 km; 预留空驶 m3; 空驶 km; 预留怠速 m3; 怠速小时; 实际怠速燃料; 供应方范围; attribution_level; T_original_j; f_F_j; T_service_original_pool; 货运批次 ID; 责任方 ID; original_pool_id; version | 实测全部货批实际路线/路段距离、货物尺寸及怠速预留；核实供应方原分母、空驶/怠速及生命周期范围。两个协议视图共享原行程 ID，但分区事件/责任范围，不得重复行程或责任分配。 | vehicle*km | 每行程/路段 | 全部相关入场/逆向及零销售事件 | 实际道路路线 | 每参考流 | 路线日志；供应方范围签字；全部受益对象容量/时间核对 |
| cp_reverse | reverse | supplier_pack; external_retained_pack | custody_event_view | event_id; original_id; 事件时间; original_pool_id; 接收方 ID; 完整未开封状态; actual_unopened_supplier_handoff_count; actual_unaccepted_unopened_external_retention_count; acceptance_status; S; F; T; O; 实际责任方; G_open; receipt_count; customer_return_count; gross_customer_handover_count; supplier_handoff_count; internal_transfer_count; condemnation_count; confirmed_missing_count; signed_goods_residual; version | 使用与 cp_original 相同原保管记录，取得接收签字及实际未开封/状态证据，不重复记录交付。商品个数与最终有效 Q、待运废物 kg 分别核对。 | Item(s) | 每事件及期末 | 全部退回/保留历史 | 门店及有名称外部接收方 | 每参考流 | 接收签字及命运责任；无未解释残差 |
| cp_waste | reverse | rejected_pack | whole_carrier_dispatch | event_id; original_id; 运单 ID; 接收方 ID; 整载体 BOM; 未污染状态; 校准; 毛 kg; 皮 kg; direct_dispatched_net_kg; dispatched_net_kg; W_open; condemned_kg; condemnation_count; other_actual_waste_receipt_kg; confirmed_missing_waste_kg; signed_waste_residual_kg; W_close; 运输处理范围; version | 用校准秤在外运时逐批称实际未开封完整包装皮/毛重；独立称待运废物并按事件 ID 关联判废个数/kg。核实实际完整组成/状态接收和供应方处理，不推断感染性分类。 | kg | 每判废/外运及期末 | 全部待运及后续外运 | 门店至接收门 | 每参考流 | 秤校准；实际接收签字；完整处理清单 |
| cp_carton | retail | outer_carton | case_first_use_dispatch_ledger | carton_source_id（外箱来源 ID）; 原包装 ID; 实际外箱 BOM; first_use_carton_kg; packing_volume_share; unused_carton_stock_kg; used_carton_stock_kg; carton_dispatch_net_kg; carton_handover_kg; carton_missing_kg; 带符号纸箱残差 kg; 校准; 实际封箱标签胶粘; 运输范围; 接收方认可; original_pool_id; version | 首次拆外箱时称实际独立完整箱并核供应 BOM/来源边界，记录真实原包装体积份额及入场运输。分别跟踪未用/已用库存，直接称实际废物外运批次；各视图共享外箱 ID，不重复来源归属。 | kg | 每首次使用/外运及期末 | 全部外箱周期及保留复用库存 | 收货/门店/逆向门 | 每参考流 | 秤/BOM；运输排除；接收签字；存量核对 |
| cp_carton_reverse | reverse | carton_waste | case_first_use_dispatch_ledger | carton_source_id（外箱来源 ID）; 原包装 ID; 实际外箱 BOM; first_use_carton_kg; packing_volume_share; unused_carton_stock_kg; used_carton_stock_kg; carton_dispatch_net_kg; carton_handover_kg; carton_missing_kg; 带符号纸箱残差 kg; 校准; 实际封箱标签胶粘; 运输范围; 接收方认可; original_pool_id; version | 首次拆外箱时称实际独立完整箱并核供应 BOM/来源边界，记录真实原包装体积份额及入场运输。分别跟踪未用/已用库存，直接称实际废物外运批次；各视图共享外箱 ID，不重复来源归属。 | kg | 每首次使用/外运及期末 | 全部外箱周期及保留复用库存 | 收货/门店/逆向门 | 每参考流 | 秤/BOM；运输排除；接收签字；存量核对 |
| cp_support | support | complete_support | mandatory_source_register | 模块 ID; 实际组成清单; original_source_id; original_pool_id; version; 供应方边界; attribution_level; b_m; z_m; X_m; d_c_h; D_c; e_a_h; L_a; E_a; f_old_a_h; f_new_a_h; V_old_a; V_new_a; core_raw_k; disjoint_attributed_raw_m_k; exchange_key_k; 任务员工小时; 专属面积 m2*h; 货架包络 m3*h; 活动秒; 预留闲置秒; 支付尝试 ID; 购物篮行处理秒; 保护区 m2*h; 摄像秒; 原拍摄期映射; 保留字节小时; 唯一连接区间; 连接小时; 处理字节; 远程任务秒; water_import_m3（入场供水 m3）; water_density（供水密度）; water_temperature（供水温度）; discharge_m3（排放 m3）; discharge_density（排放密度）; effluent_mode; effluent_direct_net_kg; formulation_received_kg; formulation_history_start; formulation_history_end; formulation_open_unused_kg; formulation_close_unused_kg; formulation_actual_discharge_kg; formulation_spill_kg; formulation_retained_residue_kg; formulation_dispatched_container_residue_kg; formulation_signed_residual_kg; wet_carrier_kg; 清洁面积 m2; 实际型号 BOM; 维修事件 ID; 末端净 kg; 生命周期排除; Q | 在场址和供应方逐项调查实际支持资源及签字不存在项，于真实门采来源量，校准表秤并同步完整区间日志。执行 support_scope、support_drivers、asset_lifetime 及 transport_ownership；还原原分母前按去重登记逐项审计实际合同组成。每实际原子行须有本台账的单过程协议视图，避免重复测量/归一化。 | 各原来源单位分别保留 | 每来源事件/区间及历史修订 | 全池及完整资产历史 | 全部实际支持场址/供应方 | 每参考流 | 精确范围/不存在签字；校准读数；完整来源 ID 及历史核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance | retail_service | Q=count_distinct(final_valid_original_ids)。最终验收状态与所有实物交付/退回事件分开。Q>0 时服务输出恰为1 Item(s)；Q=0 时保留原始池并阻断归一化。 | final_valid_original_ids; acceptance_status; cut_off; original_pool_id; event_id | Q; retail_service | ghg-product-standard |
| custody | retail; reverse | 商品计数：G_close=G_open+receipt_count+customer_return_count-gross_customer_handover_count-supplier_handoff_count-internal_transfer_count-condemnation_count-confirmed_missing_count+signed_goods_residual。交付总量对从未验收事件仅计一次。待运废物 kg：W_close=W_open+condemned_kg+other_actual_waste_receipt_kg-dispatched_net_kg-confirmed_missing_waste_kg+signed_waste_residual_kg。用事件 ID 关联实测 condemned_kg 和 condemnation_count，不能以标称重量把个数换 kg。残差保留带符号未解决量并调查，不默认确认为损失。 | G_open; receipt_count; customer_return_count; gross_customer_handover_count; supplier_handoff_count; internal_transfer_count; condemnation_count; confirmed_missing_count; signed_goods_residual; W_open; condemned_kg; other_actual_waste_receipt_kg; dispatched_net_kg; confirmed_missing_waste_kg; signed_waste_residual_kg; event_id | G_close; W_close | ghg-product-standard |
| original_f | failed_original; goods_inbound | 每原来源 j 保留实际完整包装收货数 N_j 及匹配的完整供应方制造/零售包装向量 V_j。N_F=sum_j(N_j*f_F_j)，保持来源 S/F/T/O 分区守恒。failed_original=N_F/Q Item(s)，每个同构原向量仅关联一次，不能把一手目录规格当 V_j。goods_inbound=sum_j(T_original_j*f_F_j)/Q 车公里，先按 transport_ownership 由行程分至货批；原制造和原入场运输保持相同责任。完整退货再售不新增原始负荷。完整包装和组件向量模式按 goods_ownership 互斥。 | N_j; f_F_j; V_j; T_original_j; source_id; original_id; attribution_level; Q | N_F; failed_original; goods_inbound | ghg-product-standard |
| ac_total | retail_ac | retail_ac=sum_c(X_c*d_c_h/D_c)/Q MJ；D_c=sum_all_h(d_c_h)，每 c 按 electricity_pools 为同单位电力来源/驱动量类。实测 kWh 仅一次乘3.6 转 MJ。母/子表拓扑及活动/闲置/固定来源和须核对；铭牌容量不能当实测用量。 | X_c; d_c_h; D_c; meter_topology; source_class; meter_unit; Q | retail_ac | ghg-product-standard |
| reverse_totals | supplier_pack; external_retained_pack; rejected_pack; service_transport; outer_carton; carton_waste | supplier_pack=actual_unopened_supplier_handoff_count/Q 和 external_retained_pack=actual_unaccepted_unopened_external_retention_count/Q 是互斥实物卫星。rejected_pack=direct_dispatched_net_kg/Q kg，接收方称重外运为直接量，存量仅作核对。service_transport=T_service_original_pool/Q 车公里，依 transport_ownership。outer_carton=first_use_carton_kg/Q；每实际上游瓦楞纸箱制造/入场来源按实测占用装箱体积份额分至所装原包装，再于首次拆箱归至原服务池；实际未用纸箱保留未分配来源，已用纸箱再次使用不得重获制造。已用/未用纸箱库存及实际交接/废弃/丢失输出分别核对。carton_waste 为直接实测净外运 kg/Q，不能再作一次制造分配。 | actual_unopened_supplier_handoff_count; actual_unaccepted_unopened_external_retention_count; direct_dispatched_net_kg; T_service_original_pool; first_use_carton_kg; packing_volume_share; carton_source_id; unused_carton_stock_kg; used_carton_stock_kg; carton_dispatch_net_kg; carton_handover_kg; carton_missing_kg; Q | supplier_pack; external_retained_pack; rejected_pack; service_transport; outer_carton; carton_waste | ghg-product-standard |
| complete_support | support | 在任何完整服务声明前建立互斥实测来源登记。每个实际支持模块须返回原子交换分子、精确原分母 b_m、原池/场址/时间/版本、来源 ID、完整实际组成/活动清单、同属性/单位数量及供应方生命周期排除。已归一化模块 z_m 还原为 X_m=z_m*b_m；原始数据 X_m 已是原始量。只在缺失的分配层级应用 support_drivers 和 asset_lifetime 一次。对每个相容交换键 k=(流身份、方向/类型、状态/介质、属性、单位、供应方边界)，full_amount_k=(core_raw_k+sum_m(disjoint_attributed_raw_m_k))/Q。core_raw 包括实际 F 原商品、F 入场、交流电、逆向及纸箱来源各一次。仅相容分子可相加，不能 kg+MJ、Item(s)+kg 或原始量+归一化量。按实际来源事件/资产/时间/生命周期组成去重，不能仅凭供应方 ID。同合同整包只有在实际完整组成、一个真实计量分母及签字排除可证明全包覆盖且无重叠时才保留；否则细分，完整前增加具体原子双语卡/协议；互联网接入账单不覆盖支付/安防/行政后台。缺失原分母、未知资源、重叠或不完整模块均阻断完整服务状态。 | b_m; z_m; X_m; d_c_h; D_c; e_a_h; L_a; E_a; f_old_a_h; f_new_a_h; V_old_a; V_new_a; core_raw_k; disjoint_attributed_raw_m_k; exchange_key_k; original_source_id; original_pool_id; version; Q | full_amount_k; delta_a_h | ghg-product-standard; jrc-retail-bemp |
| support_quantity_modes | support | 供水 kg=water_import_m3*water_density，采用实际 water_temperature。废液 kg=discharge_m3*discharge_density 或 effluent_direct_net_kg，由一个声明的 effluent_mode 决定，不能相加模式。清洁剂原来源守恒为 formulation_open_unused_kg+formulation_received_kg=formulation_close_unused_kg+formulation_actual_discharge_kg+formulation_spill_kg+formulation_retained_residue_kg+formulation_dispatched_container_residue_kg+formulation_signed_residual_kg。此式自各配方原来源收货门累计，不能作为新期间消耗式；已有已用/残留库存携带完整原历史，复用替换其命运。各命运是互斥原配方 kg，排除新增冲洗水/污物并保留原 ID；wet_carrier_kg 为另行直接实测量，不能当原配方 kg 或再次扣减。实测整载体处理仅一次纳入，保留容器残留不同于外运容器残留。原始支持来源分子随后依 complete_support。 | water_import_m3; water_density; water_temperature; discharge_m3; discharge_density; effluent_mode; effluent_direct_net_kg; formulation_open_unused_kg; formulation_received_kg; formulation_close_unused_kg; formulation_actual_discharge_kg; formulation_spill_kg; formulation_retained_residue_kg; formulation_dispatched_container_residue_kg; formulation_signed_residual_kg; wet_carrier_kg; original_source_id | actual_water_kg; actual_effluent_kg; formulation_balance | jrc-retail-bemp; ghg-product-standard |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| primary_identity | retail_service; failed_original | 核实际成人型号、未开封一对、完整附件/外包装及实际非无菌供货。保留制造商版本与原批冲突，不用目录重量默认值或材料向量拆分。 | 批标签；供应 BOM/LCI 签字；实际门/数量 |
| measurement_coverage | all inventory rows | 校准实际表秤并保留时钟同步、精度/不确定性、全时段及全部受益对象总量。直接和重建模式仅作独立核对，不能两种相加。 | 校准；拓扑；未经改写区间/事件原始记录 |
| complete_provider_scope | support; reverse | 实际来源整包及接收认可须签字列完整组成、一个分母、门/生命周期纳入排除及分配层级，供应方 ID 本身不证明互斥。披露全部未解决身份/数量及部分核心状态。 | 来源登记；实际合同/型号/BOM；接收清单；互斥审计 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| identity_gate | all inventory rows | 未解决 UUID 逐行保留，不能用属性 UUID 替代。数据集完整前核官方直读原件/receipt、精确观察状态/日期/哈希、双语名、类型、状态/介质、属性/单位链及实际供应匹配。历史核验不冒充实时读取。retail_service 必须绑定真实服务身份，不能绑定商品生产。 | ghg-product-standard |
| finite_quantity | all inventory rows | 须 Q>0、完整原事件/来源历史、所有适用卡数量、独立商品/废物/外箱衡算及残差签字说明。未知数量/接收方/供应范围不能当零。每个已归一化交换最终卡基准类型均为 reference_flow，不能把个数和 kg 相加或重复归一化。 | ghg-product-standard |
| coverage_gate | support; retail; reverse | 完整服务数据集须通过 scope_gate/core_limits 并完整执行 complete_support，含实际设施、ICT/支付/安防/行政、清洁/福利及全部必要资本/运输范围。每新增实际来源须在完整前有具体原子双语卡、真实过程/协议角色、原始输入及匹配供应方。不存在证据仅用于实际不存在来源，不能用于缺测。部分核心输出必须保留部分披露，不能作为完整零售服务。全部强制双语方法/卡条件须进入支持的投影字段并实质一致。 | jrc-retail-bemp; ghg-product-standard |
| source_conservation | failed_original; goods_inbound; support; reverse | 核对 S/F/T/O 守恒及实际 F 产品投入与原制造/入场来源、互斥完整包装/组件模式、来源/事件/资产/时间/生命周期去重。实物卫星输出不带第二次制造或自动抵扣。资产退役/寿命/供应变更替换每一个历史 f*V 分配；原队列晚退货替换旧分子/Q，保留原日期/调整日期。失败/零销售池和所有 Q=0 不可归一化记录均可见。 | ghg-product-standard |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 未开封成人腋拐对包装柜台增量零售服务；GOODS 系统可按责任/来源关联一次加入 S 原制造/入场。 |
| allowed_use | 适用性审查后用于相同实际同构配置、渠道及明确部分/补齐边界。 |
| excluded_use | 临床护理/配适建议、安全/合规批准、全医疗叶、专门零售、已售商品使用/报废，或以部分核心声称完整服务。 |
| required_metadata | 必需限定信息；原来源/池/版本/门；Q；S/F/T/O；供应向量；实际支持组成/分母；供应方；分配层级；资产历史。 |
| required_quality_disclosure | 全部未绑定身份、不确定性、部分核心状态、缺失模块/接收方/BOM及不可归一化池；未知不能当零。 |
| update_trigger | 型号/包装/状态/渠道变更；实际退货/命运/来源修订；资产寿命/退役；供应范围或支持来源变更；新一手证据。 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62174 | official_guidance | UN Statistics Division, CPC Version3.0, subclass62174 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62174 | 非专门商店对481组医疗/外科设备及矫形器具的贸易；仅分类语境，不授予全叶方法范围。 |
| drive-rtl10400 | handbook | Drive DeVilbiss Healthcare, Retail Packaged Aluminum Crutches with Accessories, RTL10400 manufacturer specification, https://shop.drivemedical.com/us/en/products/mobility/crutches/underarm/retail-packaged-aluminum-crutches-with-accessories/p/RTL10400/downloadPdf | 实际成人对产品身份及原完整器械路线；不提供实际批净重、完整材料 BOM、LCI、无菌证明、临床建议或法规/安全批准。排除高个 RTL10402。 |
| ghg-product-standard | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), chapters6-9, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 分析单位、边界/过程细分及实物分配原则。具体方程和部分服务责任为本 PCR 方法选择，不声称完整标准符合或数值默认。 |
| jrc-retail-bemp | official_guidance | European Commission JRC, Best Environmental Management Practice in the Retail Trade Sector (2013), executive summary and retail energy sections, https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 支持检查实际零售能源、运输、包装、清洁/用水及废物；不提供腋拐特定实测清单或基准因子。 |
