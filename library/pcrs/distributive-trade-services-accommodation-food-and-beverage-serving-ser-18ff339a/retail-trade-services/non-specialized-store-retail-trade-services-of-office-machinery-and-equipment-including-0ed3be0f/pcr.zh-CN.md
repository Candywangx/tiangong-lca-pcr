---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-office-machinery-and-equipment-including-0ed3be0f
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 混合实体店原厂成柜 HON H314.P.P 办公文件柜自提零售服务

## 1. 范围与适用性

本候选方法规定一种增量零售服务，仅适用于同一原厂 HON H314.P.P 配置：310 系列、四抽屉、Letter 纸型钢制立式办公文件柜，锁具选项 P、黑色涂装 P，标称宽15英寸、深26.5英寸、高52英寸。入场对象为工厂已组装焊接柜体及完整原厂运输包装，交接时仍为同一未开封原包装。抽屉、悬挂滑轨、随柜压纸块、拉手、标签框、原厂可拆锁芯及随附钥匙均属于同一产品，不能分别计为文件柜销售。必须由供应商核实实际批次、完整内容物/物料清单、锁和钥匙数量、材料牌号、涂层、包装组分及已组装状态；图示或运输重量不能提供这些事实。标称尺寸仅界定配置，不能替代实测千克或占用体积。价目表属于规格证据，不是生命周期清单数据或安全合规批准。

渠道限定为有真实混合品类的非专门化实体店，包括其收货、店内储存和自提活动以及顾客在该店的最终验收。已亲读资料均未证明任何实际分店库存或可售状态。必须以签署的分店品类、库存所有权、带日期收货、自提及验收证据满足适用门槛后才可使用。网站类目、平台配送商品页或非独家品牌许可不能证明此渠道。专门办公家具商、工厂直发、配送/安装、组装/开箱服务、换锁、维修、展示、租赁及文件柜使用/储存功能均不属于此窄服务。顾客取得已开封、破损或未组装对象时，须先制定经审查的具体状态扩展、原子卡和双语投影，才可宣称完整；不得套用未开封原包装交接卡。

已编写核心涵盖最终服务核算、失败商品原始供应背景耦合、实物保管附属输出、运行交流电和完整原包装废物发运。在边界规则 b_completion 补齐全部实际支持模块前，它明确属于部分边界，不能单独宣称完整零售经营足迹。其分类适用范围窄于 CPC3.0 62183，官方注释还涵盖金属框架座椅（38111）、办公家具（3812）及办公/会计机器及部件（451）。外部已接受映射和对应 ADR 仍为权威；本 PCR 不接受映射，也不作永久拒绝映射的断言。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-office-machinery-and-equipment-including-0ed3be0f |
| classification_refs | CPC 3.0 62183; narrower |
| covered_products | 仅限原厂已组装H314.P.P整柜未开封完整原包装自提服务 |
| excluded_products | 其他办公家具、座椅、机器、零件、组装和配送 |
| representative_product | HON 310 H314.P.P |
| production_route | 门店收货→储存→顾客自提→最终验收；未开封原包装保管失败 |
| market_state | 工厂已组装焊接柜体的新办公文件柜，未开封原厂运输包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 指定原厂文件柜包装的自提零售服务 |
| How much | 一项不同原始包装的最终有效服务 |
| How well | 同一真实H314.P.P配置及完整原厂内容物/包装验收；不声明安装 |
| How long or cycle | 一个事先声明池期间；晚事件更正原始池/版本 |
| reference_flow_link | service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一套原厂包装 HON H314.P.P 办公文件柜的自提零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 分店混合品类及真实库存; 原始型号/配置/批次/物料清单; 工厂成柜及完整包装; 收货/自提门; 最终验收截止; Q及S/F/T/O来源台账; 部分支持范围及补全版本 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_count | service; failed_pack; goods_handover; supplier_return; transfer_out; external_failure | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 按定义计量真实整套原始包装或不同最终服务；千克和抽屉容量不能替代数量。 |
| m_energy | operating_ac | 净热值, 低位热值 | MJ | 1千瓦时=3.6兆焦；采用a_energy；最终AC_MJ/Q。 |
| m_waste | packaged_waste | 质量 | kg | 按cp_waste直接计量完整已接受托运物净千克；不得默认目录运输重量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原厂完整包装整柜实际门店收货 |
| starting_condition_role | foreground_receiving_gate |
| product_classification_scope | CPC3.0 62183的较窄办公家具子集 |
| recursive_input_rule | 服务不得递归替代文件柜制造；failed_pack按b_source承载原始供应商品F一次。 |
| upstream_dataset_requirement | B_o为供应商签署的发货端完整柜/原厂包装制造向量，排除全部发货至收货运输。F入场运输须按a_transport和b_completion另行补齐；不得纯钢代理或使用收货门制造向量。 |
| disclosure | 部分核心加b_completion强制补全；真实新增卡完成前不得宣称全经营完整 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| b_gate | all inventory rows | 从完整原厂包装实际进入具名分店并签收开始；B_o和failed_pack仅含发货端供应商制造及原厂包装，排除入场运输。该发货门至实际收货门运输为a_transport和b_completion规定的强制独立补全来源，完整声明前须有实际原子运输交换卡和协议。若供应商提供的数据集已打包包含完全相同区段，须取得经核实按阶段分离的发货端B_o及匹配区段来源向量，并在入场补全中仅计该区段一次；不得将其留在failed_pack或再次追加同一区段。服务包范围不能分离或未知时保持不完整。终点为最终有效的门店自提验收或实际接收方/状态出口。排除顾客出行及后续文件柜安装/使用。失败和零销售期间的门店运行仍纳入。cp_goods 确认边界和配置。 | un-cpc-62183; hon-pricer; hon-storage |
| b_source | failed_pack; service; goods_handover; supplier_return; transfer_out; external_failure; packaged_waste | 按每套原始包装ID保留持续来源台账。对供应商发货端每一同质完整制造/原厂包装向量 B_o（不含入场运输），仅分配一次来源当量 S_o/F_o/T_o/O_o：S为最终有效顾客原始对象；F为本零售池承担的失败背景，包括确认遗失、报废及外部留存但未验收原始对象，除非签署的持续责任将其归为T；T为转给供应商/另一池/资产的已签署持续责任；O为保留开放的未决或未售库存。S+F+T+O等于唯一原始取得的来源当量，并以版本更正；实物退回和转售绝不再次取得B_o。商品平衡receipt_count仅为外部实物库存收货，不含另计的physical_customer_return_count。原始所有权始终按b_source，与反复实物收货分开。最终有效S的制造不属于增量服务，只能在另行声明的商品系统中纳入一次；failed_pack 是真实 Product 输入 N_F/Q，仅承担一次发货端制造/原厂包装sum(F_o*B_o)/Q。该卡及核心排除F份额的发货至收货运输，须按b_gate和a_transport另加真实独立补全来源；S入场运输归商品系统，T/O原始运输责任随同一原始来源台账持续。supplier_return、transfer_out、external_failure、goods_handover 明确仅为不表征背景的保管附属实物输出，不是追加制造输入；packaged_waste 为须有完整处理边界的 Waste 输出。责任转移不是新的实物移动。实物已核实的O库存将未分配原始来源带入下期，不重新取得背景；O身份/数量/去向未知时不得宣称完整；顾客留存不得自动当作零售商废物。 |  |
| b_package | failed_pack; packaged_waste | B_o 必须匹配实际 H314.P.P 整柜和原厂包装：钢制柜体/抽屉/加强件和滑轨、铝拉手/标签框、锁/钥匙、压纸块、涂层及全部实际原厂包装组分。要求供应商签署型号/批次清单及排除入场运输的精确发货端制造/原厂包装边界；唯一采用完整包装产品向量。不得将整柜按纯钢千克建模，也不得用质量份额推导部件环境向量。若实际部件责任不同，本完整包方法不可用，须先扩展经核实部件原始向量、数量/属性/单位卡，并从整包向量排除这些部件以守恒来源。完整包装废物只有在接收方签署接受其实际组分/状态并提供匹配的完整处理边界时才可整体保留；否则须先补充互斥的实际状态/材料卡后才完整。 | hon-pricer; hon-storage |
| b_absence | all inventory rows | 本路线核心不包含现场燃料燃烧、外购热/蒸汽、制冷剂设备、产品加工、开箱、顾客附加包装、打印或湿式清洁。cp_support 要求带日期的全设备/全期间审计，覆盖房东/共用机组、搬运及待机设备、电路和清洁承包边界。实际存在或不能证明不存在时，此窄路线不能宣称完整：必须先扩展真实原子物种/载体卡、可执行计量及适用时的外环境传递方法、双语规则和正常投影。设备名称或电表不能证明不存在。电力供应及服务商背景设施影响仍保留在匹配数据集中。 |  |
| b_completion | all inventory rows | 核心为部分边界，未含F入场运输。任何完整零售服务声明前，强制补全须按b_gate/a_transport提供该运输的实际区段来源、原子交换卡和协议；供应商已含完全相同区段按b_gate分离后只计一次。完整零售服务使用前，cp_support 必须逐一列出全部实际设施、灯/风机、货架、搬运工具、收银/ICT/网络终端、支付/行政/安防后台、清洁系统和资本来源，记载真实对象/型号/物料清单、场址/期间、来源/池/版本、纳入阶段和重叠核验。须在本 PCR 双语中增加真实原子交换卡/协议并正常同步，列模块名称不够。所有运行交流电采用 a_energy；每一同质资本包及其互斥维护/退役/资产运输采用 a_asset；网络/支付/行政/摄像采用 a_digital；入场/退回/废物/支持运输采用 a_transport。清洁使用经核实的完整承包生命周期服务，以每次事件实测清洁面积 m2，用本池清洁面积/该事件全部受益面积分配来源向量；必须覆盖真实组分/运行/资本/处理，将已含来源从其他模块排除，禁止虚构通用清洁包。上述方法未覆盖的其他必要交换须具体扩展后才完整。c_complete 将原始核心分子与互斥补充分子合并一次；原始S商品始终排除。 | ghg-product |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 原厂包装文件柜收货、储存和自提 | required | 声明的窄路线 | foreground_service | service |
| residual | 完整包装文件柜送处理 | conditional | 真实整套包装柜报废且接收方签署完整范围 | waste_dispatch | service |

### 过程：文件柜自提（`retail`）

#### 输入

##### 产品流

###### 原厂完整包装 HON H314.P.P 文件柜 （`failed_pack`）

供应商发货端已制造的原始整柜及全部原厂包装，其F责任由本池承担；B_o和本输入排除全部入场运输。N_F按b_source合计同质整来源当量，不是废物千克。绑定前须有真实完整发货端制造/包装向量及cp_goods对账；F发货至收货运输须按b_gate以真实原子卡独立强制补全，绝非本核心卡数量。

- 选定流: 原厂完整包装 HON H314.P.P 文件柜
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_F/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_goods

###### 交流电 （`operating_ac`）

进入真实收货/储存/搬运/收银和支持电路的交流电。电表层级、纳入电路图及同单位活动/空闲/设施分池采用a_energy；流名不指定电压、供应商或发电组合。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: AC_MJ/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_energy

#### 输出

##### 产品流

###### 一套原厂包装 HON H314.P.P 办公文件柜的自提零售服务 （`service`）

按a_goods和c_goods关联最终有效验收的一套不同原始完整包装的最终自提服务；抽屉数、储物容量和标称尺寸均不计量零售服务。

- 选定流: 一套原厂包装 HON H314.P.P 办公文件柜的自提零售服务
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: fixed_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: method_formula
- 采集协议: cp_goods
- 来源: ghg-product

###### 向顾客交接的未开封原厂包装 HON H314.P.P 文件柜 （`goods_handover`）

原始未开封包装状态的实际实物总交接，仅含初次交接时已验收事件；初次未验收的实物交接仅归external_failure。每次移动只计一次。该保管附属输出不承载S制造或另一次服务输出。

- 选定流: 向顾客交接的未开封原厂包装 HON H314.P.P 文件柜
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_customer/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_goods

###### 退回供应商的未开封原厂包装 HON H314.P.P 文件柜 （`supplier_return`）

实际完整未开封原包装向供应商交接，须签署接收状态及B_o责任持续归属；仅财务贷记不是该实物移动。开封退回须具体状态扩展。

- 选定流: 退回供应商的未开封原厂包装 HON H314.P.P 文件柜
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_supplier/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_goods

###### 转交另一库存持有方的未开封原厂包装 HON H314.P.P 文件柜 （`transfer_out`）

以原始ID和已签署T持续责任实际交给另一库存持有方的未开封包装；没有移动的内部台账重分类不计输出。

- 选定流: 转交另一库存持有方的未开封原厂包装 HON H314.P.P 文件柜
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_transfer/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_goods

###### 初次未验收而实际交出的未开封原厂包装 HON H314.P.P 文件柜 （`external_failure`）

初次未验收时实际发生的交接，与初次已验收goods_handover事件互斥。后续无移动撤销验收只变更原始责任/状态，不在本卡新增输出。当前外部留存未验收原件另行跟踪F/T，绝不自动作为零售商废物。

- 选定流: 初次未验收而实际交出的未开封原厂包装 HON H314.P.P 文件柜
- 流属性/单位: 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则: N_external/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_goods

### 过程：废物发运（`residual`）

#### 输出

##### 废物流

###### 送处理的原厂包装完整报废 HON H314.P.P 文件柜 （`packaged_waste`）

真实完整报废柜及实际原厂包装发运的直接实测托运净质量；接收方须按b_package明确接受该完整状态和组分。柜数量/报废量单独核验，不能再次乘系数或从发运千克扣库存。

- 选定流: 送处理的原厂包装完整报废 HON H314.P.P 文件柜
- 流属性/单位: 质量 / kg
- 数量规则: dispatch_kg/Q
- 数值来源模式: calculated_value
- 适用范围: site_specific
- 归一化基准: 每参考流
- 基准类型: reference_flow
- 证据类型: calculated_from_collection
- 采集协议: cp_waste

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| a_goods | failed_pack; service; goods_handover; supplier_return; transfer_out; external_failure; packaged_waste | 采用 cp_goods、c_goods。按分店、路线和期间事先声明同配置池，保留全部尝试/失败和零销售队列。Q 是截止时自提验收最终有效的不同原始包装ID数量；同一原件反复提货、转售和重开单不得产生第二项最终服务。后续撤销验收即更改原件状态，即使没有实物退回；验收仍有效的纯财务退款不改变服务。重算原始池Q、F和所有分配分子/版本差额；不得把晚退回再次计入新池。Q=0不可归一化，须保留原始负担，不删除或移给有销售日。供应商退回须签署持续发货端制造/原厂包装责任及独立原始入场运输责任；实物退回不得合并这两个来源边界。 |  |
| a_energy | operating_ac | 先按真实交流电线路和来源时段直接细分。仅对经核实物理包含的父/子表，扣除一次子表电量；互斥电表不相减。将实测活动、空闲、固定来源分子分成同为kWh的源池，其和须与包含闭店/失败/待机的完整父源对账。活动搬运/收银/ICT池按设备实测活动任务秒数分配；空闲/固定设备池按实测预约占用设备秒数分配，含失败/空预约。物理设施灯/风机/固定池按实测服务面积m2×时长h分配，涵盖全部受益方和预约空置空间。各来源j采用 n_j=measured_kWh_j*driver_pool_j/sum_all_beneficiary_drivers_j。同一池的驱动量只有一种单位，不得把秒、m2*h或字节相加。正来源但总驱动量未知/为零时保持未分配且不完整，不默认零。AC_MJ=3.6*sum(n_j)；operating_ac=AC_MJ/Q。另行匹配供电技术/地域/电压交付边界和上游供应；服务商或资产包内运行交流电不得重复。 | ghg-product |
| a_asset | all inventory rows | 对每一真实同质资产/型号/物料清单及互斥生命周期阶段向量V，跨全部受益方h和期间保留永久台账。原始池实测暴露 actual_e_recorded_h：搬运、收银、ICT、灯/风机固定设备及其他动力工具采用实际预约运行/空闲秒数；物理建筑/货架采用实际服务面积m2*h。每项资产采用相同单位的有证据预计寿命L（未来设备秒数或m2*h），f_h=actual_e_recorded_h/L；预计未来暴露绝不能作为分子。保持sum(f_h)<=1。最终退役时 actual_E=sum_all_h(actual_e_recorded_h)，须将每个历史 f_h*V 采用同一原始池分子替换为 actual_e_recorded_h/actual_E*V_final。寿命/向量每次修订同样逐原始池/版本记录替换及 delta=f_new_h*V_new-f_old_h*V_old；1-sum(old f)仅为核验，不是差额捷径。实际制造/安装、维修事件部件/服务、退役处理及独立资产运输先归资产，再按相同历史份额一次分配；仅已精确分到最终责任方/池/版本的量可免重复所有权分配。须核实完整建筑包与独立灯/风机/货架资本范围；服务包已含维护/末端处理时排除重复终端载体。库存柜转展示须将同一原始B_o转为资产T，不得全计F再新计制造；展示路线扩展前不适用。 | ghg-product |
| a_digital | all inventory rows | 每个唯一原始网络时段j采集服务商实际连接来源小时source_H_j及全部受益方实测预约终端连接秒endpoint_s_hj，含失败/空预约；n_hj=source_H_j*endpoint_s_hj/sum_all_h(endpoint_s_hj)，总和必须已知为正。时段/来源身份和服务商范围唯一；仅精确最终责任方/池/版本归属可避免重复所有权分配。网络小时是服务活动，不是第二次电力时段；经核实服务商生命周期包已含的实际电力/资本须排除重复。支付授权和行政批次均为唯一原始事件，按处理秒数实测事件内来源行份额w_hj，sum_all_h(w_hj)=1，含失败尝试；多SKU购物篮不得给每个SKU各计完整事件。除非同合同的真实服务包有完整组分及分母证据，否则分别记录实际后台服务。摄像来源分配冻结原拍摄期映射：带时间戳的真实视场受益足迹m2×覆盖时长h、互斥区域/时段、全部受益方和预约空置。对每一个原始拍摄来源i冻结 w_i_h=(footprint_m2_i_h*coverage_h_i_h)/sum_all_h(footprint_m2_i_h*coverage_h_i_h)，分母须真实实测、已知为正，覆盖全部受益方，含空置/空预约，并保留互斥区域/时段和来源/版本。已归属拍摄分子为capture_source_numerator_i*w_i_h。该拍摄来源实际留存存储活动为storage_bytehours_i_h=stored_bytes_i*retention_h_i*w_i_h；跨后续留存期间保持同一冻结映射，绝不按后续销量重算。应用服务商向量前，须将字节小时活动匹配实际存储来源分母和完整边界；跨多个拍摄来源的原始服务商总量先按实测stored_bytes_i*retention_h_i/sum_all_i(stored_bytes_i*retention_h_i)分到各拍摄来源，再应用各自冻结w_i_h一次。仅精确最终责任方/池/版本归属可以省去对应已完成层级。明确1 GB=10^9字节、1 GiB=2^30字节。每个服务商来源分子和责任份额各应用一次；cp_support 保留source_H_j、endpoint_s_hj、事件秒、字节小时、映射、范围和版本。 |  |
| a_transport | all inventory rows | 依次采用行程/区段j→实际托运物或资产/材料o→最终原始责任方/池/版本h。对原始source_trip_numerator_j，attributed_raw_j_o_h=source_trip_numerator_j*driver_j_o/sum_all_o_driver_j_o*owner_fraction_o_h；各因子仅在已有证据的对应归属层级省去一次，不能重复。driver_j_o按下文定义，并在cp_support保留精确层级。计量来源分子（燃料、车辆公里或完整服务商行程向量）、真实路线/空驶/空闲区段、签署载荷限制和实际约束运力。已证实质量约束的载货区段按实际来源质量×区段距离/全部托运物质量×相同距离分配；已证实体积约束则用实际占用运输m3×距离，保持同单位。其他/未知约束须有经审查匹配扩展。空驶为独立的正车辆公里来源，按实测运力预约×实际空驶距离分配，不用零吨公里；静止空闲为独立正时长来源，按同单位预约运力×实测空闲秒数分配。保留全部受益方和已知正分母。服务商已分到托运物只免车辆分配，仍须应用来源F/首次使用/资产历史责任份额；只有精确最终责任方/池/版本范围才免该份额。核心failed_pack输入及其B_o排除入场运输。强制补全须新增实际F发货至收货运输来源，按同一原始F责任分配，并在完整声明前具备真实原子卡/协议；S入场运输留在商品系统，T/O随原始持续责任。供应商已含完全相同入场区段时须按b_gate匹配：从发货端B_o分离经核实区段向量，在补全中仅使用一次，不重复区段，也不得暗称其属于核心。资产生命周期运输另行匹配。实际退回/废物发运为独立实物事件，与背景转移分开；不得重复服务商区段或处理内运输。 | ghg-product |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_goods | retail | failed_pack; service; goods_handover; supplier_return; transfer_out; external_failure | 原始包装事件与责任台账 | branch_id; cohort_id; original_id; model; configuration; lot; BOM_version; original_pack_state; source_id; B_o; supplier_dispatch_vector_id; supplier_dispatch_scope; supplier_transport_included_segment_ids; verified_segment_vector_id; receiving_segment_id; N_F; Q; receipt_count; opening_goods_count; gross_customer_handover_count; initially_accepted_physical_handover_count; never_accepted_physical_handover_count; externally_retained_unaccepted_original_ids; physical_customer_return_count; supplier_handoff_count; transfer_handoff_count; condemnation_count; closing_goods_count; confirmed_missing_goods_count; signed_goods_residual; final_valid_original_ids; revoked_original_ids; never_accepted_handover_ids; financial_only_adjustment_ids; S_o; F_o; T_o; O_o; N_customer; N_supplier; N_transfer; N_external; recipient_id; acceptance_time; event_time; cutoff; source_version; original_pool; correction_version | 门店收货、存放、自提及退回逐套扫码逐事件记录，关联供应商签署包装/物料清单、带日期混合品类分店审计及最终验收/撤销。顾客总交接为initially_accepted_physical_handover_count与never_accepted_physical_handover_count的互斥之和；当前外部未验收留存为单独责任状态。不得再次扣同一交接类别。商品专用数量平衡采用真实移动和condemnation_count；持有废物另用cp_waste千克台账。库存负责人签署截止及晚期更正链。 | 件；事件ID；原始供应向量单位 | 逐事件及截止修订 | 事先声明的完整期间，含零销售及晚事件 | 具名混合实体店及同一原始批次/配置 | 每参考流 | 签署收货、物料清单、事件ID审计、配置照片和独立台账对账 |
| cp_energy | retail | operating_ac | 电表与设备预约台账 | meter_id; circuit_id; source_id; interval_start; interval_end; opening_kWh; closing_kWh; parent_includes_child; measured_kWh_j; pool_kind; driver_pool_j; sum_all_beneficiary_drivers_j; active_task_seconds; reserved_equipment_seconds; served_area_m2; served_duration_h; beneficiary_id; failure_reservation; empty_reservation; n_j; AC_MJ; Q; calibration_date; uncertainty; voltage; provider; location; overlap_source_ids | 在时段端点读取经校准真实线路电表，全程记录活动/预约，并测绘实际服务面积/时长。能源人员在扣表前核对接线和父表包含关系；不得用标称功率乘猜测时间。缺失时段保持未知。 | 千瓦时；秒；各池独立的平方米小时；兆焦 | 逐来源时段及电表复位 | 完整研究期，含闭店、空闲和失败 | 支持声明路线的全部实际现场电路 | 每参考流 | 校准、原读数、电路图、全受益方预约总量及签署来源对账 |
| cp_waste | residual | packaged_waste | 完整包装文件柜废物保管与发运 | consignment_id; original_id; receiver_id; treatment_scope; actual_constituents; carrier_state; gross_kg; tare_kg; dispatch_kg; opening_held_waste_kg; condemned_measured_kg; actual_waste_received_kg; actual_waste_returned_kg; closing_held_waste_kg; confirmed_missing_waste_kg; signed_waste_residual; scale_id; calibration_date; event_time; Q | 发运/接收时以经校准秤称实际整批毛重减实际车辆/容器皮重。每个报废原始ID进入持有废物时关联独立实测千克。接收方签署完整组分/状态及处理链，仅许可证或照片不够。 | 千克；关联原始ID | 逐报废、保管移动和发运 | 完整期间及期初/期末持有废物 | 门店废物暂存及签署接收边界 | 每参考流 | 秤校准、称重单、状态和接收组分接受、处理及运输重叠核验 |
| cp_support | retail | failed_pack; operating_ac; service; goods_handover; supplier_return; transfer_out; external_failure | 支持来源补全登记 | object_id; model; BOM; site_id; period; presence_absence; original_source_id; lifecycle_stage; provider_scope; attribution_level; final_owner; original_pool; source_version; raw_numerator; normalized_z; original_D; exchange_identity; property; unit; actual_e_recorded_h; expected_L; actual_E; f_old_h; f_new_h; V_old; V_new; delta; historical_beneficiary_id; source_H_j; endpoint_s_hj; event_id; processing_seconds_hj; processing_seconds_all_j; w_hj; capture_map_version; footprint_m2; coverage_h; footprint_m2_i_h; coverage_h_i_h; sum_all_h_footprint_coverage_m2h_i; w_i_h; capture_source_numerator_i; stored_bytes_i; retention_h_i; sum_all_i_storage_bytehours; storage_bytehours_i_h; capture_source_id; stored_bytes; retention_h; cleaned_area_pool_m2; cleaned_area_all_m2; trip_id; segment_id; segment_distance; source_mass; all_load_mass; source_volume; all_load_volume; binding_capacity_evidence; empty_distance; idle_seconds; reserved_capacity; all_reserved_capacity; source_trip_numerator_j; driver_j_o; sum_all_o_driver_j_o; owner_fraction_o_h; constituent_overlap_ids; supplier_dispatch_vector_id; supplier_dispatch_scope; supplier_transport_included_segment_ids; verified_segment_vector_id; receiving_segment_id; inbound_F_raw_row; inbound_S_raw_row; omission_reason | 建模前审计全部实际支持对象及服务合同，随后记录每时段/事件及全部历史资产暴露。场址人员和服务商核实范围、不存在及计量边界；以可追溯时钟/测绘测预约时长与面积，测真实运输运力和发运、字节计数及事件处理日志。拍摄时冻结摄像图；保留分母来源及版本更正。缺少真实字段或服务包边界无支持时保持不完整。 | 原交换单位；秒；平方米小时；字节小时；服务商小时；平方米；各自独立的千克公里或立方米公里 | 选边界前及逐时段/事件/寿命修订 | 全部当前及历史受益期间 | 全路线支持，含房东/共用及承包运行 | 每参考流 | 签署完整组分边界、校准/预约日志、全受益方分母及精确来源重叠审计 |
| cp_support_waste | residual | packaged_waste | 支持来源补全登记 | object_id; model; BOM; site_id; period; presence_absence; original_source_id; lifecycle_stage; provider_scope; attribution_level; final_owner; original_pool; source_version; raw_numerator; normalized_z; original_D; exchange_identity; property; unit; actual_e_recorded_h; expected_L; actual_E; f_old_h; f_new_h; V_old; V_new; delta; historical_beneficiary_id; source_H_j; endpoint_s_hj; event_id; processing_seconds_hj; processing_seconds_all_j; w_hj; capture_map_version; footprint_m2; coverage_h; footprint_m2_i_h; coverage_h_i_h; sum_all_h_footprint_coverage_m2h_i; w_i_h; capture_source_numerator_i; stored_bytes_i; retention_h_i; sum_all_i_storage_bytehours; storage_bytehours_i_h; capture_source_id; stored_bytes; retention_h; cleaned_area_pool_m2; cleaned_area_all_m2; trip_id; segment_id; segment_distance; source_mass; all_load_mass; source_volume; all_load_volume; binding_capacity_evidence; empty_distance; idle_seconds; reserved_capacity; all_reserved_capacity; source_trip_numerator_j; driver_j_o; sum_all_o_driver_j_o; owner_fraction_o_h; constituent_overlap_ids; supplier_dispatch_vector_id; supplier_dispatch_scope; supplier_transport_included_segment_ids; verified_segment_vector_id; receiving_segment_id; inbound_F_raw_row; inbound_S_raw_row; omission_reason | 建模前审计全部实际支持对象及服务合同，随后记录每时段/事件及全部历史资产暴露。场址人员和服务商核实范围、不存在及计量边界；以可追溯时钟/测绘测预约时长与面积，测真实运输运力和发运、字节计数及事件处理日志。拍摄时冻结摄像图；保留分母来源及版本更正。缺少真实字段或服务包边界无支持时保持不完整。  本视图共享相同原始台账及记录ID，仅供residual过程核验，不重复计量或归一化。| 原交换单位；秒；平方米小时；字节小时；服务商小时；平方米；各自独立的千克公里或立方米公里 | 选边界前及逐时段/事件/寿命修订 | 全部当前及历史受益期间 | 全路线支持，含房东/共用及承包运行 | 每参考流 | 签署完整组分边界、校准/预约日志、全受益方分母及精确来源重叠审计 |
| cp_identity | retail | failed_pack; operating_ac; service; goods_handover; supplier_return; transfer_out; external_failure | 身份与背景核实记录 | row_id; actual_object; actual_state; flow_type; UUID; official_name_en; official_name_zh; property_UUID; unitgroup_UUID; reference_unit; compartment; receipt_hash; original_hash; observed_state; source_boundary; quantity_method; unresolved_condition | 直读官方原件和对应回执，重算哈希，并逐实际行核验双语对象/类型/属性/单位/介质；确认匹配的数量和供应/处理背景。 | 身份字段及精确交换单位 | 绑定前及身份/来源修订时 | 数据集证据版本 | 实际供应商/接收方及选定行 | 每参考流 | 官方原始字节及独立重算匹配完整性回执 |
| cp_identity_waste | residual | packaged_waste | 身份与背景核实记录 | row_id; actual_object; actual_state; flow_type; UUID; official_name_en; official_name_zh; property_UUID; unitgroup_UUID; reference_unit; compartment; receipt_hash; original_hash; observed_state; source_boundary; quantity_method; unresolved_condition | 直读官方原件和对应回执，重算哈希，并逐实际行核验双语对象/类型/属性/单位/介质；确认匹配的数量和供应/处理背景。  本视图共享相同原始台账及记录ID，仅供residual过程核验，不重复计量或归一化。| 身份字段及精确交换单位 | 绑定前及身份/来源修订时 | 数据集证据版本 | 实际供应商/接收方及选定行 | 每参考流 | 官方原始字节及独立重算匹配完整性回执 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_goods | failed_pack; service; goods_handover; supplier_return; transfer_out; external_failure | Q=count(distinct final_valid_original_ids)；N_F=sum(F_o)；N_customer=initially_accepted_physical_handover_count；N_supplier=supplier_handoff_count；N_transfer=transfer_handoff_count；N_external=never_accepted_physical_handover_count；gross_customer_handover_count=initially_accepted_physical_handover_count+never_accepted_physical_handover_count，事件ID互斥。商品专用平衡：opening_goods_count+receipt_count+physical_customer_return_count-gross_customer_handover_count-supplier_handoff_count-transfer_handoff_count-condemnation_count-confirmed_missing_goods_count-closing_goods_count=signed_goods_residual。仅撤销状态不增加移动。b_source来源守恒独立；service=1 Item(s)，其余卡的原始N仅除Q一次。 | final_valid_original_ids; revoked_original_ids; never_accepted_handover_ids; financial_only_adjustment_ids; F_o; S_o; T_o; O_o; opening_goods_count; receipt_count; physical_customer_return_count; gross_customer_handover_count; initially_accepted_physical_handover_count; never_accepted_physical_handover_count; externally_retained_unaccepted_original_ids; supplier_handoff_count; transfer_handoff_count; condemnation_count; confirmed_missing_goods_count; closing_goods_count; signed_goods_residual; N_external; Q | 原始数量N_F、Q、N_customer、N_supplier、N_transfer、N_external及有符号商品差额signed_goods_residual |  |
| c_energy | operating_ac | 按a_energy，n_j=measured_kWh_j*driver_pool_j/sum_all_beneficiary_drivers_j；AC_MJ=3.6*sum(n_j)；最终量=AC_MJ/Q。 | measured_kWh_j; driver_pool_j; sum_all_beneficiary_drivers_j; n_j; AC_MJ; Q; cp_energy | AC_MJ/Q |  |
| c_waste | packaged_waste | dispatch_kg=sum(gross_kg-tare_kg)，仅合计真实已接受发运；最终量=dispatch_kg/Q。独立持有废物千克平衡：opening_held_waste_kg+condemned_measured_kg+actual_waste_received_kg-actual_waste_returned_kg-dispatch_kg-confirmed_missing_waste_kg-closing_held_waste_kg=signed_waste_residual。condemnation_count绝非千克；直接实测发运量不再扣库存。 | gross_kg; tare_kg; dispatch_kg; opening_held_waste_kg; condemned_measured_kg; actual_waste_received_kg; actual_waste_returned_kg; confirmed_missing_waste_kg; closing_held_waste_kg; signed_waste_residual; Q; cp_waste | 发运量dispatch_kg/Q及有符号废物差额signed_waste_residual |  |
| c_support | all inventory rows | 按a_asset采用actual_e_recorded_h/expected_L，最终退役改为actual_e_recorded_h/actual_E，替换每个历史fV。按a_digital采用source_H_j*endpoint_s_hj/sum_all(endpoint_s_hj)、processing_seconds_hj/processing_seconds_all_j及冻结拍摄图的字节小时。a_transport仅应用尚缺归属层级；b_completion清洁采用cleaned_area_pool_m2/cleaned_area_all_m2。c_complete前保留原始交换分子及精确来源/责任方/池/版本；不把分母选择交给后续人员。 | actual_e_recorded_h; expected_L; actual_E; f_old_h; f_new_h; V_old; V_new; source_H_j; endpoint_s_hj; processing_seconds_hj; processing_seconds_all_j; w_hj; capture_map_version; footprint_m2; coverage_h; footprint_m2_i_h; coverage_h_i_h; sum_all_h_footprint_coverage_m2h_i; w_i_h; capture_source_numerator_i; stored_bytes_i; retention_h_i; sum_all_i_storage_bytehours; storage_bytehours_i_h; stored_bytes; retention_h; cleaned_area_pool_m2; cleaned_area_all_m2; segment_distance; source_mass; all_load_mass; source_volume; all_load_volume; binding_capacity_evidence; empty_distance; idle_seconds; reserved_capacity; all_reserved_capacity; source_trip_numerator_j; driver_j_o; sum_all_o_driver_j_o; owner_fraction_o_h; attribution_level; final_owner; original_pool; source_version; cp_support | 各支持交换已归属原始分子；完整历史替换差额 |  |
| c_complete | all inventory rows | 按相同交换身份/方向/类型/属性/单位及精确原始池/版本逐行处理：已归一化外模块normalized_z乘其有证据原始original_D恢复；原始模块保持原始。先按a_transport/a_asset/a_digital补齐缺失的行程→来源→最终责任归属。核心原始分子N_F（仅发货端制造/原厂包装）、AC_MJ、实物N和dispatch_kg从原始台账恢复，不能再次使用已除量。核心没有F入场运输分子：必须取得按b_gate/a_transport由实际运输来源/卡片独立归属的inbound_F_raw_row，随后在互斥external_raw_row中仅纳入一次。供应商已含匹配区段在该补全中仅计一次，并从发货端B_o排除；分离未决时不得完整。final_row=(raw_core_row+sum(disjoint attributed external_raw_row))/Q。比较真实组分/事件/时间/资产/生命周期范围，按精确原始来源去重；不同服务商ID不证明独立。禁止千克加兆焦、原始加归一化、F重复或核心遗漏。S发货端制造/原厂包装sum(S_o*B_o)/Q及独立归属的inbound_S_raw_row/Q，仅另记于本服务之外的独立商品系统。 | raw_numerator; normalized_z; original_D; exchange_identity; property; unit; original_source_id; attribution_level; final_owner; original_pool; source_version; constituent_overlap_ids; supplier_dispatch_vector_id; supplier_dispatch_scope; supplier_transport_included_segment_ids; verified_segment_vector_id; receiving_segment_id; inbound_F_raw_row; inbound_S_raw_row; N_F; AC_MJ; N_customer; N_supplier; N_transfer; N_external; dispatch_kg; S_o; B_o; Q; cp_support | 相容完整行每参考流 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_scope | all inventory rows | 要求真实分店渠道、批次/配置/物料清单及全路线存在/不存在门槛；网站或本部分核心均不证明完整。 | 签署分店/库存/收货及cp_support范围审计。 |
| q_lineage | all inventory rows | 保留原始事件/来源身份、同单位分配总量、每次历史资产替换及服务商组分重叠证据。有符号差额须调查，不钳为零或自动给环境信用。 | cp_goods；cp_energy；cp_waste；cp_support签署版本台账。 |
| q_bind | all inventory rows | 表征使用前，未解决流身份须按v_identity逐行补齐数量与匹配供应/处理边界。科学审查和翻译审查为独立门槛。 | cp_identity直读原件/回执；独立方法和双语审查。 |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | 构建表征数据集前，每项未绑定行须官方新鲜直读，核实精确对象/状态、输入输出Product/Waste类型、官方双语名、属性/单位链、限定、处理边界和适用时的环境介质。cp_identity记录真实来源/回执哈希。历史交流电身份仅确认未指定供应的使用点交流电及已核能量链，不确认本地电网组合。营销/来源/标准UUID不得作流绑定。 |  |
| v_account | all inventory rows | 要求cp_goods来源守恒、不同最终有效Q、商品数量和持有废物千克平衡、真实状态接收证据及c_complete同类行合并。确认遗失商品/废物与有符号未解释差额分别保留，均不得虚构处理。未知、Q为零、质量/属性不匹配、服务商范围不完整或遗漏实际模块均禁止完整声明。 |  |
| v_qa | all inventory rows | 门店库存负责人逐队列签署，场址能源人员签署电表层级/校准和电路范围，供应商签署配置/物料清单/清单背景，接收/处理商签署实物状态/范围，交付前由审查者独立核对原始ID和全部版本。记录数据期间、抽样覆盖、电表不确定度/分辨率、缺失时段和实测对账差额，不虚构合格阈值。任何未满足的路线门槛保持不可用，不作零。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 候选增量零售服务数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅在真实绑定/计量后用于声明窄路线；b_completion完成后才可声明完整 |
| excluded_use | 整个CPC叶、文件柜制造/功能、配送/安装、以部分核心宣称全经营 |
| required_metadata | 配置/物料清单、分店证据、池/Q、原始来源/版本/更正台账、支持边界及全部未决字段 |
| required_quality_disclosure | 部分/不完整模块、身份观察、不确定度、缺失、零池及方法审查状态 |
| update_trigger | 任何配置/渠道/状态变化、晚验收事件、供应范围或寿命/模块修订 |

## 11. 数据源

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un-cpc-62183 | official_guidance | UNSD CPC3.0 62183, 分类说明; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62183 ; 取用日期2026-10-30 | 仅分类范围，不是方法批准 |
| hon-pricer | handbook | HON 2026 Workspaces Pricer, 印刷页699–700 / PDF页738–739; https://res.cloudinary.com/hni-corporation/image/upload/v1693390891/HON/Marketing%20Resources/hon.com/Files/HON-Workspaces-Pricer.pdf ; 取用日期2026-10-30 | 仅H314尺寸、锁/涂装选项和列出随附部件；不提供供应清单背景/实批物料清单或现场量 |
| hon-storage | handbook | HON Metal Storage Lookbook, PDF页5、9; https://res.cloudinary.com/hni-corporation/HON/Marketing%20Resources/hon.com/Files/hon-metal-storage-lookbook.pdf ; 取用日期2026-10-30 | 钢制焊接办公立柜身份及办公用途；不是实测排放、实物内容或安全批准 |
| ghg-product | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), 第6章印刷页28–31及第9章印刷页63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般服务分析单位、细分和物理分配原则；具体零售公式为本PCR采集方法，不声明完整标准符合性 |
