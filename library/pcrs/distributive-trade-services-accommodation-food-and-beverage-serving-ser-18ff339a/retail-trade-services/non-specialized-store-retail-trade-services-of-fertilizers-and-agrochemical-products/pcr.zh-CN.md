---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fertilizers-and-agrochemical-products
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 原袋粒状12-11-18 NPK肥料零售服务

## 1. 范围与适用性

CPC 3.0 62172涵盖组346商品的贸易服务。本候选已编写方法有意仅覆盖原袋粒状肥料零售核心，而非全部肥料和杀虫剂。与既有干混生产方法不同，本方法处理零售暂存、验收失败时的来源责任、整袋去向与最终服务验收。代表性硝酸磷肥工艺/硫酸钾基颗粒产品不得继承尿素/MAP/KCl干混配方或农业施用排放。本方法不声称已有实际门店计量或安全批准。分类映射及持久接受ADR是外部权威记录，本作者不写入这些记录。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-fertilizers-and-agrochemical-products |
| classification_refs | CPC 3.0 62172；建议narrower；外部映射/接受ADR为权威 |
| covered_products | 非专门店完整25千克原袋粒状12-11-18氮磷钾肥零售核心服务 |
| excluded_products | 其他配方/状态、杀虫剂零售、散装/600千克/液体、开包/再包装、送货和农业使用；未补全的完整业务 |
| representative_product | 原袋粒状12-11-18 NPK肥料零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 实际混合商品门店常温人工暂存及最终当面自提 |
| market_state | 完整原封袋；实际内容物和整包质量独立记录 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供指定原袋的部分增量零售暂存与验收核心服务 |
| How much | 每个不同且最终验收有效原袋的一次服务 |
| How well | 实际完整SKU/批次/BOM；原封及颗粒完整；最终验收证据、失败及责任已核对 |
| How long or cycle | 一个预先固定池及声明退货时限，并修订原始历史 |
| reference_flow_link | retail_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 非专门店一袋最终验收有效的粒状12-11-18氮磷钾肥完整标称25千克原袋零售核心服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际SKU/批次/配方; 颗粒和原封状态; 标称25千克及实际内容物/整包质量; 完整袋BOM; 实际混合商品门店; 常温人工路线及设备不存在证据; 场址/期间/退货时限; 原始ID和最终验收; S/F/T/O原始向量责任; 供电和处理边界; 部分核心及补全模块状态 |

具体数据集必须声明全部必需限定信息。参考服务UUID尚未验证且保持未绑定；数量属性与单位组UUID仅标识支持行。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | retail_service | 物品数量 | Item(s) | 每个最终有效原包提供1 Item(s)服务；所有最终清单行每参考流；不能把参考件数当质量。 |
| physical_counts | failed_original_pack; customer_pack_handover; supplier_pack_handover | 物品数量 | Item(s) | 原始整包计数，保留原始ID、事件和完整同质来源向量；不把标称净重作件数换算。 |
| whole_mass | whole_pack_waste | 质量 | kg | 直接称得整载体净kg，完整产品加袋，排除实际外加皮重；不以25千克乘件数。 |
| energy_unit | electricity | 净热值, 低位热值 | MJ | 实际电表kWh乘3.6得到MJ；只乘一次；供电来源独立核实。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际完整原封标称25千克粒状SKU在门店接收 |
| starting_condition_role | upstream_product_interface |
| product_classification_scope | CPC3.0 62172内较窄的原袋肥料零售核心 |
| recursive_input_rule | failed_original_pack连接实际上游整来源制造与入场运输，不递归投入零售服务。保管附属输出不带第二背景。 |
| upstream_dataset_requirement | 完整实际F来源的内容物/包装/入场运输清单、匹配电力和整载体处理；补全模块需匹配互斥原始来源 |
| disclosure | 部分增量核心；披露全部未解决身份及模块、原始来源责任、库存/验收分离及明确补全声明 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope_gate | all inventory rows | 每池仅用一种实际同质的粒状12-11-18 NPK肥料标称25千克原袋SKU：硝酸磷肥工艺、硫酸钾基粒状12-11-18配方，含镁、硫及微量元素，固定实际包装型号/BOM及供应商接收边界。实际混合商品步入式门店须记录其他商品类别；品牌非独家协议不能证明非专门店。代表性厂商规格不证明任何实际场址或库存。 | un-cpc3-62172; yara-complex |
| route_gate | all inventory rows | 本方法是部分增量核心：分配后的全部现场交流电、失败原包上游责任和完整原袋去向。涵盖接收至最终有效当面验收，包括暂存、失败/拒收尝试、退回和闭店。排除混配、再包装、开包分售、杀虫剂/液体肥、600千克袋、送货到顾客及农业施用。核心不代表完整零售业务；宣称完整前必须执行completion_gate和complete_aggregation。 | ghg-product-2011; jrc-retail-2013 |
| fertilizer_state | all inventory rows | 记录实际封口、袋体完整性、颗粒状态、受潮、温度历史、批号标签及当前适用SDS；厂商“无尘”表述或封口完整不等于已测零释放。逐日巡检并记录每次事故。破袋/开袋、粉尘逸散、湿化/溶解、分解、火灾或质量损失不明均阻断路线完整性；保留实测数量、物种/状态、内外路径和接收者，纳入前须审查并在双语中增加匹配原子卡及协议。不得把农业N2O/NH3因子、标签养分百分比或法定限值当成零售实测排放。不默认合规，也不默认零。 | yara-complex; yara-storage |
| goods_ownership | failed_original_pack | 在同一接收门，对每一原始整包来源向量V_c，以原包数守恒S_c+F_c+T_c+O_c=N_c：S为唯一最终有效顾客持有原包；F为零售商承担背景责任的已确认失败/损失（包括暂存废物及失败后外部保留）；T为供应商或具名继承方接收并有证据延续的责任；O为仍开放/未解决责任。成功S的制造、原包装及上游入场运输在本增量核心之外，下游GOODS可仅加一次S。failed_original_pack是真实产品投入F_c/Q，连接完整V_c，包括实际内容物、袋体/封口/内衬/标签/胶黏剂以及入场运输。T向接收者保留同一原始来源ID及义务；O不能视为零或删除。供应商退货的物理移交本身不能证明T。后续再售转移同一原始来源，不重新制造。 | ghg-product-2011 |
| whole_source | failed_original_pack; whole_pack_waste | 只有实际供应商清单及签署的边界/型号证据覆盖精确内容物和完整包装，才可采用整来源包。网页规格仅证明产品/形态可存在，不是定量LCI，也不证明袋体聚合物纯度、实际灌装、袋重、法定合规或供应商完整性。不得以标称25千克替代实际接收或整包质量；对可追溯同批内容物净量与整包分别称量，记录毛重/皮重及水分基准。整来源V_c与经核实的独立组件供应向量二选一，不得并用。组件责任不同须增加具体独立卡和保持来源守恒的向量拆分，不得用质量比例拆异质环境向量。 | yara-complex; ghg-product-2011 |
| physical_satellites | customer_pack_handover; supplier_pack_handover | 仅customer_pack_handover和supplier_pack_handover为不表征的保管权附属输出；记录完整原包实际毛移交次数，不生成第二次制造背景。failed_original_pack明确不是附属流。所有接收/退回原始事件均在cp_goods中保留以核对实物。顾客毛移交已含未验收事件，不得再次扣减从未验收的子集。失败后外部保留须具名接收者/状态及F或有证据的T责任，不自动成为零售商废物。无移动的验收撤销重新分类原始验收，不是另一实物出库。 | ghg-product-2011 |
| waste_boundary | whole_pack_waste | 终端载体是一个实际未开封完整原袋，内含状态未改变的粒状产品，因具记录原因被判不可售。接收者须签收实际内容物、袋组件及状态，并匹配完整处理边界。直接测量的托运净千克包括产品与其原袋，排除可重复运输托盘和外加容器；不得另列袋/组件/内容物重复废物流。判废是商品向暂存废物转移，不是外运。外运千克直接计量，不再按库存修正扣减。内容物/状态改变或接收者在边界外拆分载体时，完成前须记录供应方延续或扩展方法。不默认回收抵扣。 | yara-storage; jrc-retail-2013 |
| completion_gate | all inventory rows | 完整零售服务数据集必须增加互不重叠的实际来源模块：建筑壳体/装修/固定灯具和风机资本、货架/手推车/收银及ICT/安全资本、远程互联网/计算/支付/安全/行政运行、清洁/水/材料及终端载体、维护以及独立来源/资产/材料/废物运输。全部现场电力已属核心electricity，模块排除此项。每个具名模块使用cp_completion、allocation_shared、asset_history、transport_ownership及complete_aggregation；保留实际范围清单、原始分母、完整组件/事件/时间/资产/阶段来源ID、版本及不存在证据。证据缺失时保持部分核心，不得宣称完整业务。导出额外交换前，必须具备具体原子流卡、协议、双语翻译及正常structured同步。 | jrc-retail-2013; ghg-product-2011 |
| route_equipment | all inventory rows | 所选常温人工搬运路线须用证据确认无现场燃烧、制冷剂设备、动力车辆搬运、农业使用及新增销售包装/纸质小票。记录实际设备普查、接入电路、清洁方式、电子收据及顾客门店自提。自然通风不证明肥料零损失。若实际存在被排除路线，不得遗漏其气体/制冷剂/燃料/纸/材料负担；在获得计量、状态匹配且经审查的扩展前暂停完整性。不得用无关通用气体卡代表未知。 | yara-storage; jrc-retail-2013 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 原袋零售暂存、验收及来源/去向闭合 | required | scope_gate及route_gate | foreground | retail_service |

### 过程：原袋零售（`retail`）

#### 输入

##### 产品流

###### 失败原包责任（`failed_original_pack`）

由cp_goods按source_partition得q_failed_c；各原始来源匹配一个完整V_c，不是材料质量或保管附属流。

- 选定流：粒状12-11-18 NPK肥料，完整标称25千克原袋实际完整型号
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：F_c / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_goods
- 来源：yara-complex; ghg-product-2011

###### 现场电力（`electricity`）

由cp_energy按electricity_quantity得electricity_MJ；须独立匹配实际电网/供应方/电压/交付线损边界。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：electricity_MJ
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_energy
- 来源：jrc-retail-2013

#### 输出

##### 产品流

###### 参考零售核心服务（`retail_service`）

1 Item(s)；cp_goods按final_q定义不同最终有效原包数Q；件数不替代实际肥料或袋质量。

- 选定流：非专门店一袋最终验收有效的粒状12-11-18氮磷钾肥完整标称25千克原袋零售核心服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：fixed_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：method_formula
- 采集协议：cp_goods
- 来源：un-cpc3-62172; yara-complex

###### 顾客毛保管权移交（`customer_pack_handover`）

cp_goods按custody_quantities得q_customer；仅毛实物附属输出，含未验收/重复移交。

- 选定流：顾客保管权移交时的粒状12-11-18 NPK肥料完整标称25千克原袋
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：H_customer / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_goods
- 来源：ghg-product-2011

###### 供应商毛保管权退货（`supplier_pack_handover`）

cp_goods按custody_quantities得q_supplier；仅实物附属输出，延续T须另有责任证据。

- 选定流：供应商退回时的粒状12-11-18 NPK肥料完整标称25千克原袋
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：H_supplier / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_goods
- 来源：ghg-product-2011

##### 废物流

###### 未开封整袋不可售载体（`whole_pack_waste`）

cp_waste按terminal_quantity得q_waste；实际外运整包净千克及接收方签署范围，绝不是标称25乘件数。

- 选定流：接收整载体处理的未开封完整原袋及内装不可售粒状12-11-18 NPK肥料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：K_dispatch / Q
- 数值来源模式：calculated_value
- 适用范围：site_specific
- 归一化基准：每参考流
- 基准类型：reference_flow
- 证据类型：calculated_from_collection
- 采集协议：cp_waste
- 来源：yara-storage; jrc-retail-2013

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| pool_and_acceptance | retail | 观测前固定场址、精确SKU/包装/来源版本、路线、日历区间、库存来源ID和闭合/退货时限，形成同配置池。保留全部失败、闲置、闭店和零销售期间。Q计数在声明时限最终当面验收仍有效的不同原包ID；重复移交/再售同一原包最多计一次。验收撤销即使没有实物退回也移除该ID；验收仍有效的纯财务退款/折扣不移除。计数最终有效ID后不再扣一次撤销。迟到退货按真实日期替换原池Q、去向/背景和分配分子版本，不把同一事件再收费给后池。Q=0不可归一化，连同负担保留在声明池/扩展中，不能删除或相除。 | ghg-product-2011 |
| allocation_shared | all inventory rows | 优先使用互不重叠的实测来源电路/事件。每个实际电路先依记录状态分成以kWh计的E_direct、E_active、E_idle、E_fixed，合计与母表核对。只有子表确实位于母表边界内才扣减。直接记录归属实际原池。共享搬运/结账活动kWh按所有受益者实测设备占用分钟分配。收银/ICT/安全/手推车相关设备闲置/固定kWh按实际预留设备小时；场所照明/风机闲置/固定kWh按预留地面面积小时，包含闭店及零销售期间。各实际来源分子池互不重叠，须完整记录实测状态/来源范围，并以兼容kWh与母表核对。每个不重叠来源使用单一同单位驱动量d，a_h=d_h/sum_all(d)，分母必须已知且为正。来源数量分配一次，再合计兼容的已分配kWh。不得把分钟、设备h、m2*h或电量相加成一个驱动量；状态拆分未测或驱动量全零阻断分配，不能均分或默认零。 | ghg-product-2011; jrc-retail-2013 |
| digital_completion | all inventory rows | 互联网连接区间须为覆盖所有受益者、唯一的Mbps*h预留容量记录；以连接小时计的供应量仅应用该区间比例一次，不得作为重叠活动/闲置/固定电力小时重复。远程支付/行政活动计算采用按原始商品行计量的任务CPU毫秒；共享购物篮授权按实测行CPU毫秒拆分且合计等于事件总量，不是每SKU各计整次尝试。远程固定计算容量用预留核小时；远程安全留存用实际字节小时：记录字节及拍摄期间。按原实际视场内受益方保护/陈列面积乘覆盖时长固定a_capture_h=protected_display_m2_h*coverage_h/sum_all(protected_display_m2_h*coverage_h)；重叠视场拆为互斥区时单元，保留空置预约及全部受益方。冻结原拍摄单元/受益方ID和映射版本；后续留存byte*h沿该原图归属，不按后续销售重新分配。份额和为1；GB=10^9字节，GiB=2^30字节。每个维度和状态使用独立来源分子池。网络接入本身不包括支付/安全/行政后台。计数器或实际供应范围缺失时保留缺口，不虚构SKU专属连接或完整包。 | ghg-product-2011 |
| asset_history | all inventory rows | 对每一实际同型号/BOM/范围资产向量V_a，分别定义制造/安装、运行、维护与终端处理。含固定灯具/风机的建筑壳体/装修使用受益者预留m2*h/预期寿命m2*h；货架用预留货架m2*h/预期寿命货架m2*h；手推车/收银/ICT用实际预留运行h/预期全寿命预留运行h；保留静止闲置预留h，不能用距离0。e_a_h/L_a得出每个历史池的暂定f_old。退役时以f_new_h=e_actual_h/E_actual替换每一个历史份额，E_actual=sum_all_h(e_actual_h)；范围/寿命改变时同步替换向量：delta_h=f_new_h*V_new-f_old_h*V_old，不重新计全量制造。保留累计份额<=1、所有受益者及残余核验；暴露改变时不能以残余充当替代。修理按真实日期材料/服务事件计，除非签署完整包覆盖。终端载体及资产入场/维修/退役运输使用同一历史f一次，不乘两次f，也不全部计入当期退役Q。直接称量退役整机已排除移除部件；BOM重建与直接称量二选一。供应商已含的寿终/载体不得另列前景废物。 | ghg-product-2011 |
| transport_ownership | all inventory rows | 先把各运输来源行程/路段分配到实际托运，再归属原始来源责任方/池/版本。载货公路段活动为实测托运毛重t*km，共享时按d_consignment_segment=reserved_capacity_t*segment_km从来源分配到托运；保留容量吨数及全部托运。该驱动量须有该路段实际质量容量约束及预留吨数证据；未知或体积受限活动须在完整性前采用经审查匹配的容量方法，不得虚构预留吨数。预留空驶段使用实际车辆千米并按预留吨容量比例分配，静止闲置燃料/时间按预留吨小时比例分配，不以零t*km代替。匹配实际覆盖每种载货/空驶/闲置状态的供应方，仅在其未含时增加互不重复的车辆距离或静止服务。覆盖不明阻断完整性。供应量已分配到托运时只省略重复行程分配，仍须应用F/首次使用/资产历史责任，除非已归属精确最终责任/池。原商品入场运输按同门S/F/T/O归属；资产运输遵循asset_history；材料运输遵循首次使用归属。按实际事件/时间/资产/阶段核对，不因供应方ID不同即认为无重复。 | ghg-product-2011; jrc-retail-2013 |
| materials_completion | all inventory rows | 实际清洁/水/材料来源保留配方/型号/批次，区分从未使用库存和已用库存。采购及入场运输按实测首次使用来源量归属；未用转移/退回保留未归属原始来源，复用材料不重复制造/运输。现场入场供水表是入口体积，已排除内部循环，不再扣循环量。直接外排液为实际V_discharge*rho_discharge，密度实测且对应完整液体载体净质量，不再扣蒸发/贮存。清洁配方来源千克须互斥划分为未用/已用留存/顾客持有/固体外运/容器残留/液体外运；已用变冲洗是状态替换。新增冲洗水/污物不是原始配方。直接湿擦拭物/容器/废液千克是不同整载体测量，不再乘来源比例。采集来源组分/接收者同意，并区分外运与产生/库存。化学物/物种/状态未知须在完整性前增加具名原子扩展。 | jrc-retail-2013; ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | failed_original_pack; retail_service; customer_pack_handover; supplier_pack_handover | 原包/事件/来源台账 | original_id; event_id; event_date; pool_id; pool_version; original_pool; original_denominator; SKU; lot; formulation; prill_state; seal_condition; inspection_date; inspector; temperature_log; moisture_exposure; current_SDS_id; incident_id; incident_species; incident_state; incident_quantity; incident_unit; internal_external_path; route_gate_evidence; mixed_assortment_evidence; electronic_receipt_evidence; equipment_survey; absent_equipment_evidence; scale_id; calibration; uncertainty; bag_model; complete_BOM; actual_fill_kg; actual_whole_pack_kg; gross_kg; tare_kg; moisture_basis; supplier_id; V_c; source_version; receiving_gate; N_c; S_c; F_c; T_c; O_c; responsibility_evidence; acceptance_state; final_valid_original_ids; revocation_date; horizon; G_open; R_supplier; R_customer; H_customer; H_supplier; C_condemn; T_internal; M_missing; epsilon_G; G_close; external_recipient; external_state; failed_cause; original_background_transport_scope | 各接收/实物出库/退回/验收事件及最终时限扫描持久原包ID。记录实际保管权、原因及负责接收者；保留全部失败及原始来源历史。用校准秤核验有代表性的同批毛重/皮重/内容物/整袋称重；厂标仅作身份。获取供应商完整清单向量，否则背景保持未解决。每日库存巡检，闭合及每次迟到修订均核对来源；不虚构实测0。 | Item(s); kg; date | 每事件；每日巡检；闭合及迟到修订 | 完整声明池及原接收至退回历史 | 实际混合商品门店及精确SKU接收门 | 每参考流 | 扫码；签署验收/撤销；发票；来源/BOM向量；校准；照片及盘点 |
| cp_energy | retail | electricity | 电路/子表及状态台账 | meter_id; parent_id; circuit_scope; reading_start; reading_end; calibration; source_mode; d_source_h; source_version; timestamp; E_direct; E_active_c; E_idle_c; E_fixed_c; a_active_c; a_idle_c; a_fixed_c; active_minutes; reserved_equipment_h; reserved_m2h; all_beneficiaries; measured_state; provider; voltage; geography; loss_boundary; Q; pool_version | 在池边界及区间状态读取校准累计表。映射风机、照明、收银、ICT/安全等负荷；实测活动日志和面积预留覆盖所有受益者、闭店与零销售。互斥组件与母表核对，仅扣一次边界内子表。记录缺口及实际供电接口。 | kWh; min; m2*h | 区间读数；池闭合 | 全部池区间含闲置/闭店/失败 | 全部纳入现场交流负荷 | 每参考流 | 表证书；电路图；状态日志；全受益者驱动核对 |
| cp_waste | retail | whole_pack_waste | 判废/暂存废物/外运台账 | original_id; event_id; consignment_id; receiver_id; cause; unchanged_prill_state; sealed_bag; accepted_constituents; treatment_scope; W_open; K_condemn; K_dispatch; K_transfer; K_missing; epsilon_W; W_close; gross_dispatch_kg; outside_tare_kg; scale_id; calibration; timestamp; Q | 将判废原包ID关联至暂存废物中独立称得整袋。每批外运称量并记录实际外加皮重；保留接收者对完整内容物/袋组件/状态及处理延续的签署同意。分别记录失踪、暂存和实物转移废物；不得以重复扣库存推导外运。 | kg; date | 每次判废及外运；闭合盘点 | 全池及后续关联外运/退回修订 | 同店暂存废物区及具名接收者 | 每参考流 | 秤记录；原始ID；接收者签署组分/状态合同；盘点审查 |
| cp_completion | retail | failed_original_pack; electricity; retail_service; customer_pack_handover; supplier_pack_handover; whole_pack_waste | 补全来源/模块台账 | module_id; source_id; source_version; constituent_id; event_id; asset_id; stage; scope_manifest; provider_contract; actual_model; BOM; manufacturing_scope; installation_scope; operation_scope; maintenance_scope; terminal_scope; original_pool; original_denominator; attribution_level; quantity_mode; y_m_r; D_m; X_m_r; X_core_r; E_attr; electricity_MJ; F_c; K_dispatch; H_customer; H_supplier; Q; e_h; L_a; e_actual_h; E_actual; f_old_h; f_new_h; V_new; V_old; beneficiary_id; allocation_version; active_CPU_ms; basket_id; line_CPU_ms; core_hours; stored_bytes; retention_h; interval_start; interval_end; byte_hours; capture_period; capture_cell_id; capture_map_version; protected_display_m2_h; coverage_h; a_capture_h; capture_area_share; GB_or_GiB; connection_interval; reserved_Mbps_h; trip_id; segment_id; capacity_t; reserved_capacity_t; segment_km; mass_capacity_evidence; capacity_constraint; reserved_t; all_reserved_t; reserved_t_h; all_reserved_t_h; consignment_gross_t; distance_km; empty_vehicle_km; stationary_h; driver_unit; all_beneficiaries; material_origin_kg; unused_stock; used_stock; first_use; V_import; V_discharge; rho_discharge; rinse_water; outside_dirt; dispatched_container_residue; formulation_id; cleaner_lot; source_concentration; unused_origin_kg; used_retained_origin_kg; customer_origin_kg; solid_export_origin_kg; container_residue_origin_kg; liquid_export_origin_kg; discharge_density_temperature; wet_wipe_kg; wet_container_kg; effluent_kg; absence_evidence | 逐个必要具名模块取得实际原始日志/供应商来源清单、边界及原始分母。普查建筑/装修/风机/照明、货架/手推车/收银/ICT/安全资产，远程互联网/计算/支付/行政/安全及清洁/水/材料/废物/运输。按digital_completion、asset_history、transport_ownership和materials_completion测计数器/暴露量，采用校准秤/表及原始事件/来源ID。固定模块须有实际完整范围清单，不能靠营销包。未知不存在不等于0。保留全部历史受益者分配及最终退役替换。 | 来源各自计量：kg; MJ; h; m2*h; CPU-ms; byte*h; Mbps*h; t*km; vehicle-km | 每原始事件/区间；版本改变；最终退役 | 全部模块及寿命历史；同一原始服务池修订 | 实际门店、远程供应商和具名物流/废物接收者 | 每参考流 | 原始清单；签署范围/合同；校准；完整事件/资产/全受益者台账；原分母核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| final_q | retail | Q = count_distinct(final_valid_original_ids)；迟到变更先修订原池版本再归一化。不再次扣撤销；Q=0保留为不可归一化。 | final_valid_original_ids; original_id; acceptance_state; revocation_date; horizon; pool_version | Q | ghg-product-2011 |
| goods_count_balance | retail | 仅商品件数：G_close=G_open+R_supplier+R_customer-H_customer-H_supplier-C_condemn-T_internal-M_missing+epsilon_G。每个事件ID仅一次；毛H_customer已含未验收移交。C_condemn仅移除一次商品，后续废物外运不再次出商品库。已确认失踪M_missing与带符号未解决残差epsilon_G分开。 | G_open; R_supplier; R_customer; H_customer; H_supplier; C_condemn; T_internal; M_missing; epsilon_G; event_id | G_close | ghg-product-2011 |
| held_waste_balance | retail | 暂存废物千克：W_close=W_open+K_condemn-K_dispatch-K_transfer-K_missing+epsilon_W。K_condemn为关联判废原ID的实际整包千克，不是把件数当千克。K_dispatch为直接称得整载体净千克，库存方程仅作核验。不明残差阻断完整性；保留符号，不截成零。 | W_open; K_condemn; K_dispatch; K_transfer; K_missing; epsilon_W; original_id; event_id; scale_id | W_close | jrc-retail-2013 |
| source_partition | failed_original_pack | 各c须N_c=S_c+F_c+T_c+O_c；q_failed_c=F_c/Q。完整匹配V_c仅连接一次，排除S/T/O份额。实物运输和移交在无责任证据时不改变方程。仅合并相同整来源型号向量；异质来源版本保持独立。 | N_c; S_c; F_c; T_c; O_c; V_c; Q; original_id; source_version; responsibility_evidence | q_failed_c | ghg-product-2011 |
| electricity_quantity | electricity | E_attr=E_direct+sum_c(E_active_c*a_active_c+E_idle_c*a_idle_c+E_fixed_c*a_fixed_c)；electricity_MJ=3.6*E_attr/Q。采用allocation_shared的不重叠来源及驱动定义，仅换算一次MJ。 | E_direct; E_active_c; E_idle_c; E_fixed_c; a_active_c; a_idle_c; a_fixed_c; active_minutes; reserved_equipment_h; reserved_m2h; meter_id; parent_id; Q | electricity_MJ | jrc-retail-2013; ghg-product-2011 |
| terminal_quantity | whole_pack_waste | q_waste=K_dispatch/Q；各托运净质量为实测毛重减该托运实际可复用/外加皮重。不再按库存、内容物组成或寿命系数修正。处理范围须排除重复来源制造及已含实际外部运输。 | K_dispatch; gross_dispatch_kg; outside_tare_kg; consignment_id; receiver_id; treatment_scope; Q | q_waste | jrc-retail-2013 |
| custody_quantities | customer_pack_handover; supplier_pack_handover | q_customer=H_customer/Q；q_supplier=H_supplier/Q。它们是包含重复事件的毛实物附属移动，独立于最终服务Q和S/F/T/O责任；不得用毛移交次数代替Q。 | H_customer; H_supplier; event_id; original_id; Q | q_customer; q_supplier | ghg-product-2011 |
| module_asset_replacement | all inventory rows | f_old_h=e_h/L_a；f_new_h=e_actual_h/E_actual；E_actual=sum_all_h(e_actual_h)；delta_h=f_new_h*V_new-f_old_h*V_old。遵循asset_history，把每一历史delta应用于原始来源分子/池及分母版本，包括资本、终端载体及资产运输。 | e_h; L_a; e_actual_h; E_actual; f_old_h; f_new_h; V_new; V_old; asset_id; beneficiary_id; original_pool; original_denominator; allocation_version | delta_h | ghg-product-2011 |
| complete_aggregation | all inventory rows | 对各外部模块m声明quantity_mode且二选一：提供已归一化y_m_r时，以有证据的原分母D_m还原已分配兼容交换分子X_m_r=y_m_r*D_m；提供原始X_m_r时直接保留，不再乘D_m。两种模式都绑定实际池/来源/版本及attribution_level。按allocation_shared、digital_completion、asset_history、transport_ownership和materials_completion处理前序分配/责任一次。替换历史版本，不能累加旧版。对身份/类型/属性/单位/边界相同的r：q_complete_r=(X_core_r+sum_disjoint_m(X_m_r))/Q；X_core_r使用原始核心电力3.6*E_attr MJ、失败原包F_c Item(s)、整废物K_dispatch kg及各保管H件数。electricity_MJ已除Q，必须以其原Q还原，或互斥使用原始3.6*E_attr，不能再除一次。不遗漏F/AC，也不加两次。不得kg加MJ或原量加归一化量。按实际组件/事件/时间/资产/阶段ID去重，不以供应商不同为充分证据。完整范围须逐源匹配原子卡及全部必要模块，不能只给未核实包名称。 | quantity_mode; y_m_r; D_m; X_m_r; X_core_r; E_attr; electricity_MJ; F_c; K_dispatch; H_customer; H_supplier; Q; module_id; source_id; original_pool; original_denominator; attribution_level; source_version; constituent_id; event_id; asset_id; stage | q_complete_r | ghg-product-2011 |
| shared_source_fractions | electricity | 每个不重叠实测来源使用a_source_h=d_source_h/sum_all(d_source_h)。活动来源d为实际设备占用分钟；设备闲置/固定d为reserved_equipment_h；场所照明/风机闲置/固定d为reserved_m2h。保留全部受益者含闲置/闭店/零销售；份额和为1且必须同单位核对来源。无新证据/版本不得改来源模式。 | source_mode; d_source_h; active_minutes; reserved_equipment_h; reserved_m2h; all_beneficiaries; meter_id; source_version | a_source_h | ghg-product-2011 |
| digital_source_fractions | all inventory rows | 仅在completion_gate补全时：远程来源数量先拆分再分配。购物篮活动份额=line_CPU_ms/sum_basket(line_CPU_ms)；固定计算份额=core_hours/sum_all(core_hours)；链路份额=reserved_Mbps_h/sum_all(reserved_Mbps_h)，对应唯一connection_interval。留存份额a_capture_h=protected_display_m2_h*coverage_h/sum_all(protected_display_m2_h*coverage_h)；互斥区时拆分后，把实际stored_bytes*retention_h沿冻结原capture_cell_id/capture_map_version归属。各原始来源仅分配一次；GB与GiB换算为互斥明确模式。 | active_CPU_ms; basket_id; line_CPU_ms; core_hours; reserved_Mbps_h; connection_interval; stored_bytes; retention_h; protected_display_m2_h; coverage_h; capture_cell_id; capture_map_version; all_beneficiaries; GB_or_GiB; source_version | digital_source_share | ghg-product-2011 |
| transport_source_fractions | all inventory rows | 仅在completion_gate补全时：在有证据的质量容量约束下，载货d_consignment_segment=reserved_capacity_t*segment_km；行程来源份额=d_consignment_segment/sum_all(d_consignment_segment)。空驶距离份额=reserved_t/all_reserved_t；静止闲置份额=reserved_t_h/all_reserved_t_h。实际载货服务=consignment_gross_t*distance_km。供应量已在托运层时省略重复行程来源份额；仍应用原始F/首次使用/资产责任份额，除非已归精确最终责任/池。正驱动量/供应覆盖缺失阻断完整性。 | trip_id; segment_id; reserved_capacity_t; segment_km; mass_capacity_evidence; capacity_constraint; reserved_t; all_reserved_t; reserved_t_h; all_reserved_t_h; consignment_gross_t; distance_km; empty_vehicle_km; stationary_h; attribution_level; original_pool; source_version; all_beneficiaries | transport_source_share | ghg-product-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| identity_complete | all inventory rows | 未绑定行须直读正式Product/Waste流，核对精确身份、公开状态、双语名称、参考属性/单位链及实际状态/接口，并保留原件/receipt哈希。服务输出必须是服务，不能以肥料流或属性UUID代替。使用前逐行解决数量协议、供应边界及背景；检索命中不证明身份。 | 正式原始响应、匹配完整性receipt及逐行/供应范围评估 |
| metrology | all inventory rows | 使用校准秤/表和同步事件时钟；保留序列号、校准日期/范围/分辨率、不确定度、缺测区间和替代版本。实际kg/Item(s)/kWh分开记录；标签仅作规格核验。不得虚构灌装、袋重、配方测定、密度、排放因子或法定阈值。 | 校准证书、原始日志、标签/批次及质量平衡审查 |
| completeness | all inventory rows | 零须为范围内实测/有证据不存在，不能代表未知。明确保留开放来源责任、带符号实物残差、失败群组及不明接收/供应范围；在completion_gate满足前披露部分核心。中文必须逐字段、条件、否定、公式和义务完整翻译且稳定ID匹配。 | 范围普查、同来源闭合台账、双语审核及模块来源核对 |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope | all inventory rows | 混合商品门店身份、精确颗粒配方/包装BOM/批次、常温人工路线、原封/状态及设备/收据适用门缺证据时拒绝完整性；SKU、路线或来源向量改变须另建兼容池并审查。 | un-cpc3-62172; yara-complex; yara-storage |
| validate_ledgers | all inventory rows | 分别核查final_q、goods_count_balance、held_waste_balance及关联事件ID、同原始来源S/F/T/O，杜绝顾客重复出库。每个确认失踪原包归F或有证据的T；未解决残差/开放来源不能记零。迟到退货/撤销须共同替换原分母和分子历史。 | ghg-product-2011 |
| validate_projection | all inventory rows | 全部最终卡用reference_flow基准并除一次Q，唯服务输出固定1。检查实际解析协议指向本过程并含全部关联行，计算Inputs保留独立变量，双语对应数组一致且内容完整翻译。正常同步两次且第二次字节稳定。 | ghg-product-2011 |
| validate_completion | all inventory rows | 仅核心结果必须标明部分增量核心；禁止声称完整业务、肥料生产、养分等效、作物收益、安全使用/法定合规或完整标准符合。完整零售扩展须执行complete_aggregation、实际供应匹配、精确来源去重、历史资产修正及经审查的状态特定事故方法。未验证流或缺模块保留为明确局限。 | ghg-product-2011; jrc-retail-2013 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 部分增量核心零售服务；仅通过completion_gate及complete_aggregation才可扩展完整零售 |
| allowed_use | 同已验证SKU/路线且披露范围相同的核心比较；明确下游GOODS仅加一次成功S背景 |
| excluded_use | 整个CPC叶、肥料制造、农用施肥、养分等效、农艺收益、法定/安全批准或完整标准符合 |
| required_metadata | 精确SKU/批次/BOM；厂商规格及当前适用SDS；场址/时间/时限；原始ID；来源/池/分母版本；实际数量；边界及模块状态 |
| required_quality_disclosure | 候选；服务/商品/保管/废物流ID未验证；交流电身份为历史观测；完整供应匹配和来源/模块闭合待实测 |
| update_trigger | SKU/配方/包装/来源/路线改变、迟到验收/退回、事故、资产退役/寿命修订或来源供应边界修订 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62172 | official_guidance | UNSD CPC3.0 62172 https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62172 | 分类含组346贸易；不证明本子范围精确覆盖 |
| yara-complex | official_guidance | Yara UK YaraMila COMPLEX https://www.yara.co.uk/crop-nutrition/fertiliser/compound/yaramila-complex/ | 厂商原件仅支持粒状12-11-18配方及25/600千克包装存在；实际量、BOM、LCI和合规不由网页证明 |
| yara-storage | official_guidance | Yara UK Fertiliser storage https://www.yara.co.uk/crop-nutrition/fertiliser-handling-and-safety/fertiliser-storage/ | 天气/水分/包装完整、储存与事故路径定性依据；不转用文中其他肥料数值阈值 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard2011, chapters6-7 and9 https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 服务单位、边界及先细分后因果分配的方法背景；本PCR具体责任/补全/寿命方程是声明设计，不声称标准逐条强制或全符合 |
| jrc-retail-2013 | official_guidance | European Commission JRC EUR25998EN2013, Best Environmental Management Practice in the Retail Trade Sector, overview and sections2.1,2.3,2.4 https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 零售电力、设施、运输和废物范围背景；不采用标杆作默认活动数据或当前法规 |
