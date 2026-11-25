---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-watches-clocks-and-jewellery
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 原装盒无宝石标准银素圈戒指安全柜台零售服务

## 1. 范围与适用性

本部分增量规则针对原盒标准银素圈戒指类别（每个数据池固定一个实际同质配置）的安全保管及最终有效柜台零售交付。参考服务不是戒指本身，也不覆盖全部珠宝/腕表/钟表。在提出完整店面声明前，固定补全责任仍属强制。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-watches-clocks-and-jewellery |
| classification_refs | CPC 3.0 62154 — Non-specialized store retail trade services, of watches, clocks and jewellery; narrower / 较窄 |
| covered_products | 原装闭盒、无宝石及个性化加工的标准银素圈戒指，采用非专门到店安全柜台路线；每池分别固定实际尺寸、合金、表面处理及包装修订。 |
| excluded_products | 其他合金或镶宝石首饰、腕表/钟表/零件、品牌专卖店、开盒/试戴/抛光/改圈、二手/修复品、配送/顾客出行及改变包装。 |
| representative_product | 原装盒无宝石标准银素圈戒指安全柜台零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 收货门界；原ID闭合包件安全存储；有线展示柜；有人柜台验收；电子收据；不新增包装 |
| market_state | 全新、干态常温、闭合原盒配置；核验实际批次/状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 增量安全柜台零售服务，不是原戒指制造 |
| How much | 一个不同原包ID的一次最终有效服务 |
| How well | 正确SKU/尺寸/完整原包在柜台验收，具有可追溯合格证据和最终状态 |
| How long or cycle | 声明池从收货至观察截止日，并关联迟发返退替换修订 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 原盒装 声明实际圈号的标准银素圈戒指的增量安全柜台零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 非专卖商品组合/渠道; 场址/柜台; 实际SKU; 实际圈号; 无宝石; 无个性化加工; 实际合金/镀层/焊料; 原装完整包装修订/BOM; 常温干态; 观察截止日; 最终有效验收规则; S/F/O/T来源责任方; 部分核心/模块; 供应商收货门界; 最初入货; 柜台型号; 全电支持门槛; 电表/供应方地域/电压 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| measure_count | retail_service; failed_original_packet; cabinet_manufacture; packet_receipt; packet_customer_return; packet_customer_handover; packet_supplier_return; packet_successor | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 分别计数具名完整原包、完整安装柜台单位份额或服务；三者为不同台账。不作质量/数量替换；各最终数量均为每参考流。 |
| measure_energy | cabinet_electricity | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实际kWh乘3.6得MJ；仅除共同Q一次。不指定供应方的电力身份不表示供电组合。 |
| measure_carrier | packet_waste; cabinet_retirement | 质量 | kg | 按 cp_dispatch/cp_terminal 取得实际干态完整载体净kg；不用目录皮重，不新增组成乘法。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 指定完整原包在门店收货门界，具备U_i来源及入货边界 |
| starting_condition_role | incremental_service |
| product_classification_scope | CPC62154较窄子集；仅珠宝组382；不等同组484 |
| recursive_input_rule | 不将本零售服务递归投入自身；原商品U_i为不同产品，仅F进入本增量服务 |
| upstream_dataset_requirement | 完整批次/包装特定收货门界U_i，最初入货仅一次；不用通用纯银替代 |
| disclosure | 部分柜台核心、强制准确补全、来源责任方、排除顾客阶段及未核验身份 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| b_scope | all inventory rows | 接纳有证据的非专门混合品类门店，不接纳首饰/品牌专卖店。产品类别为原装闭盒、无宝石或个性化加工的标准银素圈戒指；不同品牌和圈号分别建同质池，均可适用。核验实际批次、圈号、合金纯度、镀层、焊料及盒/袋/衬里/标签/胶每个组件；标准银名称不证明完整Ag925配方或包装BOM。保留的官方商业案例说明真实产品，不提供定量LCI或全类别默认值。 | un-cpc-62154; tiffany-ring-spec |
| b_gates | counter | 从门店收货门界按个体原ID清点的完整原包装开始，到该原ID在柜台最终有效的顾客验收结束。不接纳门店开盒、试戴、抛光、除银变色、改圈、刻字、电池操作、加袋或新增礼品包装。入货运输外包装拆除不属本增量柜台，但补全时必须纳入。每次移动记录完整状态和包装修订；破损/已打开配置必须先增补具体状态卡并完成双语同步，才能声明完整。排除顾客出行、使用和寿命终结；不声明到家配送服务输出。 | tiffany-ring-spec |
| b_acceptance | retail_service | cp_custody 分别保留毛物理移动和验收状态历史。Q 为截至声明观察截止日、具有一次最终有效合格柜台交付的不同原包装ID数量。拒收/未验收交付、无实物返还的验收撤销、内部转移、遗失包件和未结库存不进入Q。验收仍有效的财务退款/折扣不减少Q。实物返还本身不证明验收撤销。截止前反复销售/返还/重售沿用同一原ID，最终有效服务至多一次。迟发撤销须按真实事件日期及版本关联替换原池分母及其全部分配分子/去向；不能从已按最终状态计数的Q中再次扣除撤销。 | ghg-product-2011 |
| b_ownership | failed_original_packet | 在同一门店收货门界，每个原包绑定一个完整供应商向量U_i，包含戒指、有证据的完整原包装及最初供应商至门店运输，且仅一次。原ID划分为互斥S（最终有效验收）、F（不可恢复零售失败、废弃、确实丢失或外部保留但无验收）、O（未结库存）及T（接续承担原背景的具名供应商/内部接收方）。在声明收货队列（包括期初库存来源ID）中 N_received = N_S + N_F + N_O + N_T。failed_original_packet 是实际表征的 Product 输入，其数量为完整收货门界包件 N_F/Q，每个F原始来源仅链接一次；它不是保管卫星行。S/O/T的原制造在本增量服务之外，随具名商品/接续方台账继续承担。退供应商不消除U_i；重售沿用同一U_i。须明确F接收方、实物状态及处理/持续责任；丢失是调查状态，不是大气排放或自动废物外运。 | ghg-product-2011 |
| b_physical | counter | 采用总保管数量（商品加暂存废物）：期初 + 新收货 + 顾客实物返还 = 期末 + 全部毛顾客交付 + 供应商移交 + 内部接续方移交 + 确认缺失原件 + 实际废物外运。全部毛交付同时包含已验收及从未验收事件，每次仅一次；后来无移动的撤销只是重分类既有事件，不能新增一次流出。判废是商品转暂存废物的内部状态变化，不退出总保管；废物稍后外运才退出。期初/期末暂存废物及实测原包质量独立核对外运单。具名物理卫星卡仅作不表征的保管转移，不能再挂一套制造数据集或运输。F背景和处理投入仍需表征。 |  |
| b_core | counter | 本记录是部分增量安全柜台服务：核心包括独立计量柜台电力、特定完整柜台型号制造/安装的寿命分摊、柜台退役载体、F原包背景及实际完整报废包件外运。核心不含共用店面运行、清洁、支付/收据基础设施、共用建筑/固定设施、共用安防、维护/更换及收货后货运。这些仍是 b_completion 至 a_transport 规定的强制补全模块，不能置零或假定已含。柜台电力覆盖全部有线LED/锁负荷及空闲/闭店/失败期间；电表拓扑须区分父表所含子表和不相交电表。电力流不指定供应方/电压；供电地域、电压、线损及合同来源须有独立实际证据。 | jrc-retail-2013 |
| b_asset | cabinet_manufacture; cabinet_retirement | 本池仅接纳一个实际完整有线钢/玻璃带锁展示柜 asset_id（installed_count=1），具有完整硬件/LED/锁/布线物料清单、无电池，并有制造加安装供应方的签署边界。该供应方排除建筑、房间照明、支付终端、外部网络、运行电力、清洁、修理/更换及寿命终结。cp_asset 固定完整安装单位数、实测整柜退役载体kg及实际拆件。整柜直接净称重已排除已移除部件；BOM重建是互斥替代方法，按实测组件质量求和，不得再重复扣拆件。除非有证据原完整包已含，否则维修/LED/锁更换为独立强制补全来源；不得隐藏在柜台kg中或再次收取一整柜制造。 |  |
| b_completion | counter | 数据生产者须在提出完整店面零售服务声明前承担补全责任。对每个实际模块交换，先在双语中建立具名原子行/协议，绑定身份/供应方并同步，再声明完整。必需来源模块为：M_shop 店面剩余电力及房东电力；M_clean 实际清洁投入和载体；M_pay 实际支付/收据/网络运行；M_build 完整建筑及房间照明/风机/固定货架/安防基础设施的制造、维护和终端载体；M_repair 实际柜台及支持设备修理/更换事件；M_freight 全部收货后店面搬运/返退/废物物流，排除已嵌入最初入货运输；M_treat 实际报废原包及柜台处理。每个模块均须有不存在的证据；未知不等于不存在。在全部必需模块量化并通过 v_completion 之前，本PCR保持部分边界；仅列出缺失模块不能成为完整经营结果。 | jrc-retail-2013 |
| b_support_gate | counter | 唯一允许补全的配置为全电店面/房东支持，并有证据表明服务本项活动的系统中不存在任何现场/房东燃料燃烧、外购热/冷及含制冷剂系统，包括备用、安防与消防系统。核验设备登记、房东签署范围、铭牌、维护/制冷剂记录、燃料/热账单及研究期每次变化。热泵或未知制冷剂记录不能通过此门槛；不得默认制冷剂/燃料为零或将估算方法留待日后选择。不同实际配置须先单独编写各物种/燃料/排放卡及完整可执行方法，经审查同步后才能产出完整结果。 |  |
| b_clean | counter | M_clean 须分别按原配方kg计量每种实际供应清洁配方：期初 + 收入 = 期末未用 + 最终留存已用来源量 + 外运液体来源量 + 外运擦布来源量 + 外运容器残液来源量 + 实测溢洒/空气物种来源量。已用转清洗等中间状态只替换状态，不新增去向。完整原溶液中的水仅计一次。来源组件投入为原配方kg仅乘一次经核验组件质量分数；这是原组件kg，不是外界分子物种排放。原配方kg、原组件kg、外界分子物种kg及完整湿载体kg分别保留。实际完整湿冲洗液/擦布/容器外运直接净称重，不再乘原配方比例。留存容器残液须与实际外运容器残液分开。进水表已排除内部回用，不再扣回用。计量废水 = 实际排放体积乘同状态实测密度，不扣蒸发/存储。本补全路线不允许体积平衡重建。缺表/密度或来源/载体平衡不清阻断补全；来源分数/分析空白各用一次。对每个原组件c，仅一次取得 input_component_c_kg=formulation_kg*source_fraction_c，并保留互斥原组件来源去向kg。化学反应增减原子时，物种分子kg不等于原组件kg：须有实际反应/示踪来源系数 origin_ratio_c_s，记录分子量/化学计量；component_origin_c_kg=species_corrected_s_kg*origin_ratio_c_s。仅求和守恒来源组件kg，不加完整湿载体kg或物种分子kg。购入溶液中的水留在配方投入；单独计量自来水/冲洗水只额外计一次。 | jrc-retail-2013 |
| b_clean_species | counter | 对每个实际外界端口/物种s及匹配时段t采集kg/h和实际 interval_h_t。通量模式互斥：绝对模式 J_net_st=J_out_st-J_in_st-J_blank_st；原始差分模式 J_net_st=J_diff_st-J_blank_st；已扣空白差分模式 J_net_st=J_corr_st，不再扣背景/空白。明确已含哪些进口/背景及仪器空白，不得重复。来源归属仅选一个互斥模式：直接用实际来源分辨 J_source_st，或实测净端口通量仅乘一次有证据 source_origin_fraction_st；绝不以组件组成比例推断外界通量。外界归属分子物种kg=sum J_attributed_st*interval_h_t，按匹配端口/时段积分。实际空气/捕集库存变化、内部生成/吸收、进口、捕集/冷凝/外运及出口组成独立完整控制体核验；不能从已实测外界通量再次扣库存/捕集。内部捕集/冷凝不是外排；完整湿冷凝液为互斥实际液体载体。原组件来源核算排除外部反应加入的原子：用实际 origin_ratio_c_s 及分子量/化学计量把实测分子物种映射为守恒原组件来源kg；绝不能将每个物种除来源浓度倒算整配方。负通量保留不确定性并调查，不截零、不作负输出或自动吸收信用。端口、库存、来源归属或来源系数未知均阻断补全。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| counter | 安全柜台保管与柜台验收 | required | 每个允许池 | 增量服务 | Q个最终有效原ID |
| retirement | 柜台实际退役 | conditional | 实际退役；否则保留有证据在役资产 | 终端载体 | 同一Q |

### 过程：安全柜台保管与柜台验收（`counter`）

#### 输入

##### 产品流

###### 失败原件背景 （`failed_original_packet`）

表征上游责任投入，不是第二次实物收货。供应方为准确戒指加完整原包装制造及最初入货运输U_i，不含门店运行或废物处理。

- 选定流：门店收货门界完整原盒装 声明实际圈号的标准银素圈戒指
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F / Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_source`
- 来源：`tiffany-ring-spec`

###### 柜台运行电力 （`cabinet_electricity`）

使用点输入，覆盖有线柜台LED/锁及闭店/空闲/失败。此电表不暗含房间照明或支付设备。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6 * E_counter_kWh / Q MJ
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`jrc-retail-2013`

###### 完整柜台制造及安装 （`cabinet_manufacture`）

按完整安装单位数及寿命暴露计量的一种实际型号完整包。供应方排除项和完整BOM见 b_asset。

- 选定流：一台完整有线钢玻璃带锁展示柜的制造及安装
- 流属性/单位：物品数量 / Item(s)
- 数量规则：f_ap / Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_asset`
- 来源：

###### 原件实物收货保管 （`packet_receipt`）

仅为来自供应商的实物保管卫星行；原背景由 b_ownership 归属，不在此挂接。期初库存为台账余额，不能新增收货。

- 选定流：完好闭合原盒装 声明实际圈号的标准银素圈戒指
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_new_receipt / Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：

###### 顾客实物返还保管 （`packet_customer_return`）

既有原ID实物返还卫星行，含验收仍有效的返还。不再次计原制造，也不自动产生第二次服务。

- 选定流：顾客实物返还的完好闭合原盒装 声明实际圈号的标准银素圈戒指
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_customer_return / Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：

#### 输出

##### 产品流

###### 最终有效服务输出 （`retail_service`）

计数对象是服务；原戒指是被服务商品，不是本服务身份。

- 选定流：原盒装 声明实际圈号的标准银素圈戒指的增量安全柜台零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：`ghg-product-2011`

###### 毛顾客实物交付 （`packet_customer_handover`）

不表征实物卫星行，包含全部已验收及从未验收毛交付，每次仅一次。最终未验收外部保留须记录具名接收方/状态及F背景，不自动作废物。

- 选定流：已交顾客的完好闭合原盒装 声明实际圈号的标准银素圈戒指
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_customer_handover / Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：

###### 实物退供应商移交 （`packet_supplier_return`）

不表征实物卫星行；具名供应商在T下接续原U_i。实际退回物流属M_freight，不是重复最初入货。

- 选定流：退供应商的完好闭合原盒装 声明实际圈号的标准银素圈戒指
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_supplier_handoff / Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：

###### 实物内部接续方移交 （`packet_successor`）

至具名接续方的不表征实物卫星行，不是零售输出。T保留同一U_i；改作展示样品超出范围，须明确资产来源转移，不能F再加新制造。

- 选定流：转内部接续方的完好闭合原盒装 声明实际圈号的标准银素圈戒指
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_successor_handoff / Q Item(s)
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`
- 来源：

##### 废物流

###### 实际完整废包件外运 （`packet_waste`）

一个实际完整戒指加盒/袋混合废物载体，送具名允许接收方，须有完整包件分选/处理合同。使用实际外运净kg，不能拆银/盒kg后又计此完整载体。处理属M_treat，不含本转移。任何组件移除均改变状态，此卡不能覆盖。

- 选定流：废弃完整干态闭合原盒装 声明实际圈号的标准银素圈戒指
- 流属性/单位：质量 / kg
- 数量规则：m_packet_dispatch_kg / Q kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_dispatch`
- 来源：

### 过程：柜台实际退役（`retirement`）

#### 输出

##### 废物流

###### 柜台实际退役载体 （`cabinet_retirement`）

实际干态完整柜台净载体，含保留LED/锁/布线、无电池；单独实测拆件互斥。一次终端外运，供应方处理在M_treat。在役年度保留未退役证据，不虚构退役率。

- 选定流：废弃完整有线钢玻璃带锁展示柜
- 流属性/单位：质量 / kg
- 数量规则：m_cabinet_terminal_kg * f_ap / Q kg
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_terminal`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| a_pool | all inventory rows | 预先声明一个同配置场址池及观察/返退政策；所有拒收、失败、空闲、闭店及零销售时段均留在该池。Q=0时保留实测毛分子和原责任，不能归一化；不得删除或借用成功SKU分母。迟发证据须替换全部受影响池旧版本；历史负担不能仍计在旧池又计入新池。不采用收入或银价分配。 | ghg-product-2011 |
| a_electric | cabinet_electricity | 优先直接细分柜台电路。柜台服务多配置时，每个实测柜台时段kWh按所有受益方预留可用架面m2乘实际预留h分配。包括空预留槽、闭店/空闲期以及作为运营方受益者的未用柜面积；运营方剩余量再按同一时段店面预留面积m2*h分给全部店面服务池。全部权重单位一致且和为一。不得把任务数和面积时间相加。只有拓扑证明柜台子表包含在店面父表时才扣除；不相交独立电表直接相加，不扣。 | ghg-product-2011 |
| a_asset | cabinet_manufacture; cabinet_retirement | 对全部历史期间/受益方维护一个持久柜台资产台账。e_ap 为按 a_electric 分配的预留架面m2*h（含再分配运营方面积时间）；L_a 为由实测面积、日历寿命及预留计划所得预期全寿命可用架面m2*h。制造份额 f_ap=e_ap/L_a，累计份额<=1。寿命/BOM变化时，替换全部既往受益方份额，对同一来源版本登记差值，绝不重新起算制造。实际退役时以实际全寿命暴露作L_a，并使全部受益方份额和为一，最终未用时间仍用运营方规则分配。退役数量为实测完整载体kg乘最终责任f_ap，仅一次，不再乘另一个制造份额。终端载体仅出现一次；供应方已含处理不得再计。 | ghg-product-2011 |
| a_support | counter | M_shop 使用实测全部受益方时段剩余电力，按预留店面面积m2*h分配，含库存、拒收和闭店预留；未用运营方面积按全部实际服务池同一时段正值预留面积时间再分配。M_clean 先细分实测清洁批次，再按全部受益区清洁面积m2分配；公共区域用同一店面面积时间权重。M_pay 先拆分实测活动运行、空闲和网络来源分子池：活动能量按实测设备活动秒，空闲能量按预留终端h，网络能量按实际传输字节；各池有同单位全部受益方分母，含失败。分配前各分子池须与父表核对。M_build 对每个完整资产用实际预留面积时间e/L，并沿用 a_asset 全历史替换/最终剩余规则；设备资产用预留h/寿命h，不能m2*h除以h。M_repair 用实际事件材料/服务数量按维修原因归属，再用同一受益方暴露份额，不假定年发生率。M_treat 按每个实际载体kg链接只覆盖有证据运输/处理边界的供应方一次。 | ghg-product-2011; jrc-retail-2013 |
| a_transport | counter | 对每个收货后物流实际区段s，取得实际消耗燃料/能量及供应方完整区段生命周期运输服务，含空驶/空闲。其核验来源边界须包含实际车辆制造/安装、实际维护/更换、车辆寿命终结及运行燃料/能量和其上游供应，各来源仅一次；只有燃料的供应方不完整。供应方已含实际燃料时，实测燃料仅作QA，不再另作表征投入。只有先准确移除来源边界重叠，才可装配互斥生命周期来源并应用区段权重。按 w_js = 受益方j预留载荷kg_js乘实际预留h_js，除以同一区段全部受益方b预留载荷kg_bs乘实际预留h_bs之和，将毛区段分子X_s分给j。空余未用载荷预留作为运营方受益者，按同区段全部实际服务池正值预留kg*h再分配；全空区段保留运营方毛责任，直至关联有证据的致因服务池，不得因t*km为零而消失。距离和空闲h分别用于QA。供应方已分配给本货件的数量直接使用；区段分配仅为QA，不能再乘一次。对S/F/O/T，U_i已含最初供应商至店入货，故此处排除。返退/退供应商/废物各腿为新实际区段，仅计一次；核验供应方包含空驶路线，否则补充实测vehicle-km活动并去重。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | counter | 保管与服务状态 | 事件台账 | original_id; SKU; size; packaging_revision; pool_id; event_id; actual_date; supplier; recipient; physical_state; opening_goods; opening_held_waste; N_new_receipt; N_customer_return; N_customer_handover; acceptance_state; acceptance_qualification; revocation_id; financial_only; N_supplier_handoff; N_successor_handoff; N_confirmed_missing; N_dispatch_originals; closing_goods; closing_held_waste; observation_cutoff; prior_version; S; F; O; T; Q | 逐一给完整原包条码/标识；在收货、柜台、交付及实际接收方记录签署实物事件。每日数量独立于支付核对POS/返退/调查记录。核验SKU/尺寸/包装及非专卖渠道证据；没有实物/验收证据不能只用扫码事件。保留零销售/闭店期并调查缺失原件。实际拆封/打开阻断完好卡路线。 每参考流；按 calc_custody、calc_service 分别取得互斥毛保管数量及最终状态不同原ID的Q；不再扣撤销 | Item(s); date | 每次事件并每日核对 | 完整预先声明池及关联迟发事件 | 同一场址/柜台/配置 | 每参考流 | 签署事件；实物盘点；返退/接收方记录；版本核对 |
| cp_source | counter | 完整原件背景 | 供应商来源台账 | original_id; U_i_source_id; U_i_version; supplier_lot; ring_alloy_certificate; actual_mass_kg; plating; solder; package_revision; complete_component_BOM; origin_gate; original_inbound_segment_id; original_inbound_included; N_received; N_S; N_F; N_O; N_T; background_owner; fate; recipient; original_denominator; source_boundary | 取得供应商签署完整原包清单及最初入货区段服务；按实际批次/包装核验质量/BOM。网页仅为规格。关联每个原ID并划分S/F/O/T；核对来源清单、单位和原收货门界。完整量化背景或接收方缺失属于未解决，不能置零。 每参考流；calc_ownership；N_F/Q仅承接一次完整U_i；S/O/T在本增量服务外继续原来源责任 | Item(s); kg | 每批及每次去向变化 | 全部原件含期初来源及迟发修订 | 供应商至同一门店门界 | 每参考流 | 供应商签署BOM/清单；包装照片；合金证据；货运边界；身份绑定 |
| cp_energy | counter | 柜台电力 | 时段电表 | meter_id; topology; parent_includes_submeter; interval_start; interval_end; opening_kWh; closing_kWh; E_counter_kWh; shelf_area_m2; reserved_h; all_beneficiaries; operator_unused_m2h; store_reserved_m2h; closed_idle_failure; provider; geography; voltage; line_loss_boundary; calibration; uncertainty | 逐时段读经校准电路表；审计布线并核对实测父/子边界；积分全部闭店/空闲/失败时段。实测架面几何并取得全部受益方实际预留历史。a_electric仅用一次；独立电表和另存。完整使用前解决供应方/电压供电。 每参考流；calc_electricity 将已归属 E_counter_kWh 转MJ后仅除Q一次 | kWh; m2*h | 每时段且覆盖整期 | 全部实测研究时段 | 实际柜台及全部受益方 | 每参考流 | 校准；原读数；拓扑；预留及完整核对 |
| cp_asset | counter | 柜台寿命制造 | 持久资产台账 | asset_id; model; complete_BOM; installed_count; provider_source_id; provider_boundary; install_date; shelf_area_m2; reservation_calendar; e_ap; L_a; f_ap; all_prior_beneficiaries; original_source_version; lifetime_revision; replacement_allocation_version; operator_residual; repair_event_ids; retirement_date | 核验实际完整有线柜台及供应方签署制造/安装边界；实测可用架面并保留每个受益方预留期。用证据建立预期寿命日历，不用默认值。按 a_asset 在修订及实际退役后重算全部历史版本。采购/库存台账仅核验安装数量。 每参考流；calc_asset；当前e_ap/L_a为制造单位份额；历史更新替换旧分配 | Item(s); m2*h | 每个预留期、修订及退役 | 完整资产寿命及全部既往期间 | 实际完整柜台；全部受益方 | 每参考流 | 供应方签署BOM/边界；尺寸测量；日历；全历史修正 |
| cp_terminal | retirement | 柜台终端载体 | 实际退役外运 | asset_id; retirement_event_id; carrier_state; direct_or_BOM_mode; gross_kg; tare_kg; measured_removed_component_kg; m_cabinet_terminal_kg; moisture_state; final_L_a; final_e_ap; f_ap; dispatch_date; receiver; treatment_source_id; transport_included; provider_overlap; calibration | 实际退役时用经校准秤称完整剩余干态柜台净质量，或用实际称量留存组件重建；保留互斥模式。直接净重不得再扣已拆件。记录接收方/供应方运输和处理；在役则保留设备登记及未退役证据。cp_asset最终全历史责任只用一次。 每参考流；calc_asset_terminal；实际完整载体kg仅乘最终f_ap一次再除Q | kg; m2*h | 每次真实退役 | 完整实际寿命及终端事件 | 同一柜台资产 | 每参考流 | 校准；称量；拆件划分；接收单；完整供应方范围 |
| cp_dispatch | counter | 废弃完整戒指原包 | 实际废物外运 | original_id; source_id; condemnation_date; opening_held_waste; closing_held_waste; dispatch_id; actual_date; complete_packet_state; gross_kg; tare_kg; m_packet_dispatch_kg; N_dispatch_originals; dry_state; receiver; whole_package_sorting_contract; treatment_boundary; transport_boundary; calibration | 实际外运时以经校准秤净称完整干态原包批次；核对逐个原ID及完整包接收合同。暂存废物期初加判废减期末独立核对外运数量/质量，不得再扣期末去修改实测外运。外加容器/皮重单列。缺失包件应调查，不作虚拟外运。 每参考流；calc_dispatch；实际净外运kg/Q；来源数量仅关联F一次 | kg; Item(s) | 每批外运并每期盘点 | 全部外运及暂存库存 | 同一柜台及具名接收方 | 每参考流 | 校准；外运称重；接收记录；库存/来源核对 |
| cp_completion | counter | 全部强制支持模块 | 来源与分配台账 | module_id; atomic_row_id; flow_identity; property; unit; state; direction; source_id; source_version; event_id; original_boundary; y_mr; D_m; X_mr; original_pool; current_pool; compatible_version; overlap_portion; raw_numerator; active_energy; idle_energy; network_energy; active_seconds; reserved_h; bytes; cleaned_m2; store_m2h; e_asset; L_asset; repairs; water_volume; water_density; formulation_kg; source_fraction_s; source_fraction_c; input_component_c_kg; species_raw_s_kg; blank_s_kg; species_corrected_s_kg; origin_ratio_c_s; component_origin_c_kg; molecular_weight_s; stoichiometry; exterior_port_id; interval_t; interval_h_t; flux_mode; J_out_st; J_in_st; J_blank_st; J_diff_st; J_corr_st; J_net_st; source_attribution_mode; J_source_st; source_origin_fraction_st; J_attributed_st; exterior_species_kg; internal_generation_kg; internal_uptake_kg; condensate_kg; exterior_inlet_kg; exterior_outlet_kg; air_stock_change_kg; capture_stock_change_kg; capture_export_kg; blank_mode; retained_origin_kg; dispatched_origin_kg; wet_carrier_kg; residue_closing_kg; residue_dispatched_kg; absence_evidence; fuel_refrigerant_gate; Q | 以实际电表/BOM/事件/接收方边界核验每个具名 M_shop/M_clean/M_pay/M_build/M_repair/M_freight/M_treat 来源。保留原始毛分母及来源版本/事件重叠图；严格使用 b_clean/a_support/a_transport。清洁须核对原配方来源质量去向与实际完整湿载体、密度及空白模式；未知质量/物种/库存保持未解决。用完整房东/设备记录核验全电/无燃料/无制冷剂门槛。实际新增模块交换须先建双语原子卡/协议，才能完整使用。 每参考流；calc_completion；恢复毛分子、移除准确重叠、按固定驱动归属、仅合并兼容量、只除Q一次 | original row unit; m2*h; m2; h; seconds; bytes; kg | 每个来源、时段及修订 | 完整池及全部受影响历史版本 | 全部店面/房东/供应方受益方 | 每参考流 | 来源原件；实际父表核对；零/不存在证据；签署补全审计 |
| cp_freight | counter | 实际收货后物流 | 区段供应方台账 | segment_s; trip_id; beneficiary_j; actual_fuel_energy_X_s; provider_boundary; vehicle_model; vehicle_manufacture_install_source; vehicle_maintenance_source; vehicle_terminal_source; operation_upstream_source; lifecycle_source_overlap; provider_already_attributed; consignment_source_id; reserved_payload_kg_js; actual_reserved_h_js; all_beneficiary_kg_h; operator_unused_kg_h; empty_distance_km; idle_h; actual_vehicle_km; positive_causative_pool; original_inbound_source_id; overlap_removed; attributed_quantity; Q | 读取同一区段及全部受益方实际路线/时间/载荷预留、燃料/能量及供应方签署服务；仅对仍为毛共用分子的数量用kg*h容量分配。供应方已归属数量保留原归属，区段字段只作QA。核验空驶路线覆盖及实际空闲时长，移除与最初入货及处理运输重叠。全空/零驱动路线保留毛未解决责任，直至有致因分配证据。 每参考流；calc_transport；已归属实际原服务分子仅除Q一次；供应方已归属时不再乘因子 | provider original unit; kg*h; km; h | 每区段及每次修订 | 全部实际收货后物流 | 同一区段/全部受益方 | 每参考流 | 路线日志；预留证据；燃料记录；供应方/空驶/空闲范围；来源去重 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_service | retail_service | Q = 最终有效验收状态的不同原ID数量；仅Q>0时参考输出 = Q/Q = 1 Item(s)。使用 b_acceptance 并替换迟发版本。 | Q; cp_custody | 1 Item(s) | ghg-product-2011 |
| calc_custody | packet_receipt; packet_customer_return; packet_customer_handover; packet_supplier_return; packet_successor | 每个具名实物卫星行的归一化数量 = 其互斥毛实物事件数量 / Q。用 b_physical 总保管方程独立QA，不得以修正Q作毛保管流出。 | N_new_receipt; N_customer_return; N_customer_handover; N_supplier_handoff; N_successor_handoff; Q; cp_custody | 每参考流卫星Item(s) |  |
| calc_ownership | failed_original_packet | N_F = 不同F原ID数量；失败原件数量 = N_F/Q Item(s)。每个准确U_i只挂一次；保持 N_received=N_S+N_F+N_O+N_T。 | N_received; N_S; N_F; N_O; N_T; U_i_source_id; U_i_version; Q; cp_source | 每参考流失败完整原包 |  |
| calc_electricity | cabinet_electricity | E_counter_kWh = 按 a_electric 归属的实测时段kWh之和；最终电力 = 3.6*E_counter_kWh/Q MJ。3.6是kWh转MJ，不是排放因子。 | E_counter_kWh; shelf_area_m2; reserved_h; operator_unused_m2h; store_reserved_m2h; Q; cp_energy | 每参考流MJ |  |
| calc_asset | cabinet_manufacture | 按 a_asset 得 f_ap=e_ap/L_a；制造数量=f_ap/Q Item(s)。预期寿命修订替换每个历史旧份额；终端L_a为实际全寿命暴露。 | e_ap; L_a; f_ap; original_source_version; replacement_allocation_version; Q; cp_asset | 每参考流完整安装柜台单位 |  |
| calc_asset_terminal | cabinet_retirement | 最终载体数量 = m_cabinet_terminal_kg*f_ap/Q kg；f_ap为 a_asset 最终全历史寿命责任，只用一次。整柜直接净称重与组件重建互斥。 | m_cabinet_terminal_kg; f_ap; final_L_a; final_e_ap; Q; cp_terminal | 每参考流kg |  |
| calc_dispatch | packet_waste | 最终废原包载体 = m_packet_dispatch_kg/Q kg；实际净外运为毛重减实际皮重。期初/判废/期末库存仅独立核验，不再修正外运。 | m_packet_dispatch_kg; N_dispatch_originals; Q; cp_dispatch | 每参考流kg |  |
| calc_completion | counter | 对每个模块行r恢复 X_mr=y_mr*D_m（或保留有证据毛X_mr），仅移除一次准确来源/版本/事件/边界重叠，按 a_support/a_transport 归属，再得最终兼容交换 =（核心毛分子 + 已归属兼容X_mr之和）/Q。保留各行单位/方向/状态/供应方边界，不合并不兼容交换。M_clean 使用 b_clean 及 b_clean_species：input_component_c_kg=formulation_kg*source_fraction_c；exterior_species_kg=sum J_attributed_st*interval_h_t，仅用一个绝对/原始差分/已修正模式及一个来源分辨/来源分数模式；按实际分子量/化学计量 component_origin_c_kg=exterior_species_kg*origin_ratio_c_s 排除外部加入原子。独立完整空气/捕集控制体核验绝不从实测外界通量再扣库存或捕集；直接完整湿载体kg单列。 | X_mr; y_mr; D_m; overlap_portion; raw_numerator; active_energy; idle_energy; network_energy; active_seconds; reserved_h; bytes; cleaned_m2; store_m2h; e_asset; L_asset; water_volume; water_density; formulation_kg; source_fraction_s; source_fraction_c; input_component_c_kg; species_raw_s_kg; blank_s_kg; species_corrected_s_kg; origin_ratio_c_s; component_origin_c_kg; molecular_weight_s; stoichiometry; exterior_port_id; interval_t; interval_h_t; flux_mode; J_out_st; J_in_st; J_blank_st; J_diff_st; J_corr_st; J_net_st; source_attribution_mode; J_source_st; source_origin_fraction_st; J_attributed_st; exterior_species_kg; internal_generation_kg; internal_uptake_kg; condensate_kg; exterior_inlet_kg; exterior_outlet_kg; air_stock_change_kg; capture_stock_change_kg; capture_export_kg; retained_origin_kg; dispatched_origin_kg; wet_carrier_kg; residue_closing_kg; residue_dispatched_kg; Q; cp_completion | 补全后逐行归一化数量 |  |
| calc_transport | counter | 毛共用区段模式：w_js=reserved_payload_kg_js*actual_reserved_h_js/同区段全部受益方预留kg*h之和；已归属X_js=X_s*w_js，运营方空驶/未用按 a_transport 处理。供应方已分配模式：保留实际供应方货件数量；w_js仅QA。已归属原服务数量仅除Q一次。模式互斥。 | actual_fuel_energy_X_s; vehicle_manufacture_install_source; vehicle_maintenance_source; vehicle_terminal_source; operation_upstream_source; lifecycle_source_overlap; reserved_payload_kg_js; actual_reserved_h_js; all_beneficiary_kg_h; operator_unused_kg_h; provider_already_attributed; positive_causative_pool; actual_vehicle_km; idle_h; Q; cp_freight | 每参考流供应方原单位 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_trace | all inventory rows | 保留原证据、校准/不确定性、实际日期/场址/批次、准确来源版本和每项来源ID/重叠决策；来源哈希不证明科学适用性。 | 原件及审计台账 |
| dq_service | retail_service | 最终服务数量须独立于商品质量、价格、实物库存和毛交易数；不能仅凭支付推断实际合格验收。 | 原ID实物及最终状态台账 |
| dq_partial | counter | 披露未量化模块及全部身份缺口；部分增量结果不能声称完整零售经营、整分类覆盖、完整LCA或符合完整GHG产品标准。 | 签署范围/补全与门槛审计 |
| dq_background | failed_original_packet | 实际批次及完整包装U_i须量化；规格文字、银价、假定纯度、目录皮重或无关银/kg数据集不能替代。 | 供应商清单/BOM及最初入货服务 |
| dq_support | counter | 每个条件模块均采集全池及全部房东受益方存在/不存在证据。零驱动及未知燃料/制冷剂、含水率/密度、来源分数或接收方阻断完整性；不得虚构数值容差或无不确定性默认。 | 登记；测量；核对；具名供应方记录 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| v_scope | counter | 要求实际渠道门槛 b_scope、同一SKU/尺寸/状态/包装修订及来源门槛。不替换为整分类、品牌专卖店、宝石、钟表、零件、其他尺寸或改变包装。 | un-cpc-62154; tiffany-ring-spec |
| v_ledgers | counter | 分别核对每个原ID历史、总保管方程、最终有效Q、S/F/O/T划分及实际事件日期修订。生产台账必须分别有拒收、无返还验收撤销、实物返还、仅财务退款、重售、退供应商、遗失包件及判废明确案例。最终接收方/状态缺失属于未解决，不能自动作废物。 |  |
| v_source | failed_original_packet | 每个原ID均须有量化U_i，含准确供应商型号/批次/包装BOM和最初入货边界。failed_original_packet 必须每个N_F原件各承载一次。一个完整原包转移一个完整原始向量，不能用任意银质量或盒数比例分割其环境向量。F后代不能各自继承U_i。S/O/T向量须继续随具名下游责任方。 |  |
| v_complete_package | cabinet_manufacture; cabinet_retirement; packet_waste | 核验完整包/供应方边界、实际干态净完整载体kg、互斥拆出组件、供应方运输/处理重叠及无重复制造。直接外运称重不能再用期初/期末库存修正。 |  |
| v_lifetime | cabinet_manufacture; cabinet_retirement | 按实际尺寸/时间重算全部历史受益方e/L，份额和<=1，实际终端核对时恰为一。寿命修订替换每个受影响既往版本。终端f只出现一次；购置库存仅QA，不是另一完整单位投入。 |  |
| v_measurement | all inventory rows | 每个最终行 basis.kind 均为 reference_flow，实际分子只除同一Q一次；中间毛总量留在协议。必需属性/单位规则仅适用具名行。区分MJ、Item(s)、kg、m2*h、h及kg*h，不默认货币转银或数量转kg。Q=0时不能输出归一化结果，但保留毛证据。 |  |
| v_completion | counter | 完整结果须有 b_completion 全部具名模块、通过 b_support_gate，并在同步前具备原子具名行/协议和身份/供应方绑定。cp_completion 将每个外部归一化结果y_mr按有证据原分母D_m恢复为原分子 X_mr=y_mr*D_m，只移除来源ID/版本/事件/边界部分完全相同的重复，再按固定 a_support/a_transport 归属，仅把流身份/属性/单位/状态/方向/来源边界一致的量与核心毛分子相加，最后除共同Q一次。D_m未知、池/版本不兼容、燃料/制冷剂不存在证据缺失、共用驱动为零或模块未量化均阻断完整性。否则保留部分状态；不得把外部归一化行直接加毛行或kg加MJ。 |  |
| v_identity | all inventory rows | 未绑定行保持具体候选。完整前景数据集之前，须绑定原始直读流/属性/单位记录及匹配完整性回执，核验观测公开状态、官方双语名、类型、限定及供应方/处理边界。历史身份观测不证明当前可用或供应方性能。不得虚构UUID、范围或数值默认。 |  |
| v_additional | counter | 实际新增交换、改变商品/包装状态、清洁化合物、维修材料或直接排放，须在双语中先增加具名原子卡、正确方向/类型/状态/属性/单位、采集及计算字段，并重新同步后才能声明完整。存在性未知不能标 not_applicable。保留不确定性/校准，调查负值/残差，不得截零。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 指定部分增量服务，仅按本固定协议补全 |
| allowed_use | 同配置且有证据非专卖渠道；同边界增量比较；仅v_completion后完整结果 |
| excluded_use | 全部珠宝/钟表零售、原戒指单独足迹、品牌专卖店声明、顾客阶段或完整标准符合性 |
| required_metadata | 全部限定、来源ID/版本/门界、Q及毛总量、S/F/O/T责任方、供应方边界、剩余模块及寿命修正历史 |
| required_quality_disclosure | 部分/完整状态、实测覆盖、未核验身份、缺失/零驱动、不确定性及零销售毛池 |
| update_trigger | 实际SKU/包装/渠道/路线/供应方变化、迟发验收撤销、来源修订、资产寿命/退役、新支持活动 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62154 | official_guidance | UNSD CPC Version 3.0 code62154, explanatory note: https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62154 | 分类包含组382及484；不等同整叶 |
| tiffany-ring-spec | standard | Tiffany 1837 Ring in Silver, Narrow; SKU22993771; selected size6, no gemstone: https://www.tiffany.com/jewelry/rings/tiffany-1837-sterling-silver-rings-1152144421.html | 仅制造商产品规格；不提供量化制造/包装BOM或零售渠道证据 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), PDF pp29–31,65 (printed27–29,63): https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅服务/参考流区分及分配层级；PCR台账方程是明确前景设计，不冒称标准强制条文或完整符合性 |
| jrc-retail-2013 | official_guidance | JRC Best Environmental Management Practice in the Retail Trade Sector, EUR25998EN (2013), PDF pp18,149–150: https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售能量、效果/一般照明及支持方面完整性；不把任何数值基准作清单默认 |
