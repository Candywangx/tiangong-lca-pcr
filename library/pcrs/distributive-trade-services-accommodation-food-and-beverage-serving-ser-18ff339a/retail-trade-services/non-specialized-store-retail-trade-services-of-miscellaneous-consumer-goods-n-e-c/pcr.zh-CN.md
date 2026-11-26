---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-miscellaneous-consumer-goods-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 原封纸板四节装LR6碱性电池零售服务

## 1. 范围与适用性

本PCR定义实际混合商品门店交付一原装纸板四节LR6碱性电池包并最终有效验收的增量零售服务。覆盖完整已声明门店路线，明确区分原商品责任、服务活动与旧电池回收。此较窄方法不覆盖整个分类叶。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-miscellaneous-consumer-goods-n-e-c |
| classification_refs | CPC3.0:62159; narrower |
| covered_products | 同规格完整未用四节LR6碱性原纸板包的零售 |
| excluded_products | 轮胎/内胎; 乐器; 其他电池化学/尺寸; 散装电芯; 充电; 配送; 完整产品生命周期 |
| representative_product | 原封纸板四节装LR6碱性电池零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 供应商交付收货; 人工常温储存陈列; 电收银; 顾客到店交接; 退回/受控残余处理 |
| market_state | 未用原封纸板包; 电芯/触点完整; 实际日期批次和验收规格 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 向到店顾客提供并交付一指定原包且获有效验收 |
| How much | 一整四节包的最终有效验收零售服务 |
| How well | 同实际SKU、未拆原包、未用电芯、已核验验收及批次日期规格 |
| How long or cycle | 声明池内一次收货至最终去向周期，并修订后续退回/撤销 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一包原封四节LR6碱性电池的零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | SKU及实际GTIN; 电芯型号和LR6碱性化学体系; 恰好四节未用电芯; 原纸板包装完整BOM; 批次日期及实际质量记录; 实际混合商品组合证据; 到店常温仅用电路线调查; 收货口及原供应向量; 池/结账及退回追踪期; Q与全受益分配驱动量; S/F/O/T来源责任; 旧电池计划及互斥载体状态; 供应/处理/来源版本 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| reference_count | service_output; failed_pack; external_pack | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 计实际完整包；四节为一包和一次服务。Q最终有效性与实物总数分开。 |
| energy_conversion | ac | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 实际归属kWh按1kWh=3.6MJ换算；电芯额定电压/容量不是门店用电。 |
| mass_state | water; cleaner; wipe; glove; absorbent; effluent; wet_wipe; used_glove; used_absorbent; cleaner_container; receipt; new_cells; pack_board; transport_board; receipt_waste; old_received; old_dispatched | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实际状态专属净载体质量；体积换算用实测密度/温度。来源质量与载体质量独立。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 供应商交付收货口原包，具完整生产/消费包装/入库向量 |
| starting_condition_role | upstream_boundary |
| product_classification_scope | 62159内较窄LR6包零售，须实际混合商品组合 |
| recursive_input_rule | 不把本零售服务递归当商品；原包生产为另一产品投入，此处仅含F |
| upstream_dataset_requirement | 原供应整包向量或核实互斥组分/装配/入库模式；具名S/F/O/T |
| disclosure | 增量服务；S商品背景在下游；F纳入；O/T守恒；回收分开；披露路线及未绑定身份 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope | store_sale | 仅适用有证据证明实际经营混合商品组合的非专门店、同一未使用LR6一次碱性四节消费品SKU及原封纸板包装和顾客到店交接。保留厂家/订单号、实际GTIN、电芯型号、四节数量、批次/日期、完整包装BOM和验收规格。VARTA4906订单04906 121414（目录GTIN4008496559435）仅为代表规格，不是LCI或默认质量。品牌非独占本身不能证明非专门店。排除轮胎、内胎、乐器、充电/锂/其他尺寸电池、散装、重包装、安装、测试/放电和配送服务。 | un-cpc-62159; varta-catalogue-2025 |
| route | all processes | 采用常温自然通风、人工搬运的门店路线，照明、风扇、辐射采暖及收银使用电力；必须由实际场址调查证明没有制冷剂回路、燃烧燃料、外购热、现场充电或动力搬运。这些是适用条件，绝不是零值假设。实际共用建筑回路通过电量分配纳入。出现其他必要来源时，须在完整性成立前增加具名原子卡、协议、计算和对齐译文；否则报告路线不适用。 | jrc-retail-2013 |
| gates | store_sale; residual | 从供应商交付门店的收货口起算，原商品生产、入库运输、原消费包装及分配的运输包装均在该口之前。终点为最终有效顾客验收或有证据的实际最终去向；纳入储存、陈列、收银、退货、失败处理、卫生、资本及废物移交/处理。顾客出行、使用和正常售后处置属于下游。不假定没有购物袋/加包：须有实际不额外包装的政策与发放记录，否则增加其计量材料及去向。 | jrc-retail-2013 |
| ownership | failed_pack; service_output | 对每个原包来源s在同一收货口固定S/F/O/T责任。S为最终有效验收的原包，商品背景仍由购买方承担；F为生产加入库责任仍由本服务承担的失败/遗失原包；O为期末开放库存；T把同一原来源责任转给具名供应商、外部接收方或内部资产并有证据。每个原包责任份额之和为1。真实failed_pack产品投入按sum_s whole_mode_s*original_pack_count_s*F_s/Q仅一次关联整包模式原供应向量；组件模式按source_integrity及真实组件卡执行，whole_mode_s=0。供应商退款不消除生产；退供应商须具名延续责任和实际运输记录。下游整包模式商品补全为sum_s (whole_mode_s*original_pack_count_s*S_s/Q)*同收货口核实原供应向量_s，仅一次加本增量服务；O/T留具名责任方，绝不加入全部收货。接收方或责任未知即不完整，不能置零。 |  |
| source_integrity | failed_pack; residual | 完整原装四节纸板包整体只有一个S/F/O/T责任方时，保持整包模式：failed_pack=N_F/Q，仅一次关联真实供应商收货口完整向量。仅有核实供应商组件清单向量及原数量单位、且能准确重构该原包、装配和入库边界时才允许组件模式。component_cell以Item(s)记原LR6电芯；component_board以Item(s)记完整原印刷/涂层/胶黏纸板消费包装对象；component_assembly以Item(s)记实际一包装配服务；component_inbound以Item(s)记实际原包收货口货运供给，须准确托运/路线/装载/空返覆盖。各自是一实际核实供应对象/服务，不能按猜测质量份额拆环境向量。逐原来源s和组件c记录原量n_s_c及互斥S_s_c/F_s_c/O_s_c/T_s_c，份额之和1；前景投入为sum_s n_s_c*F_s_c/Q，下游S/T/O保留同一来源向量及数量。每个组件模式原来源明确whole_mode_s=0，排除其整包F投入；整包N_F=sum_s whole_mode_s*original_pack_count_s*F_s。供应装配/入库自身责任也须分配守恒，不能在电芯/包装责任不同时遗漏。实际组件型号/向量不同时须有不同型号专属行。正常完整原包不机械拆组件，不用目录质量、不按质量拆LCI、不重复后代背景。 | varta-catalogue-2025 |
| custody | residual | 建立仅商品数量账：期初商品+收货+顾客实际退回+内部调入=期末商品+全部顾客实物交出+实际退供应商+内部调出+报废转移+不明损失。全部实物交出已含验收和从未验收的外出，事件只计一次。报废是商品转入待废物的内部状态变化；其后废物发运仅减少待废物，不再减商品。拆包后电芯数量和包装千克分别计账；无移动的迟延撤销只改变验收。外部持有的失败完整包使用external_pack；external_partial/external_spent覆盖有证据的外部持有部分使用/耗尽电芯；外部持有已拆未用电芯须先增状态专属卡。不能自动视为零售商废物。 |  |
| takeback_boundary | takeback | 真实回收商接纳的旧便携电池混合载体及其计划/化学/状态合同与新货/退回分开。回收不产生新包输出、原生投入或避免生产信用。PCR固定分配为：直接分开的事件/来源按证据归其受益方；真正共用回收计划使用d_p=sum_intervals reserved_admitted_capacity_kg_p*reservation_hours_p，alpha_p=d_p/sum_all_b d_b，覆盖全部实际零售批次/计划资助方/独立回收受益方。容量是实际预留且回收商接纳的kg，不是接收kg、销量、收入或留待下游自选规则。保留闲置/闭店/零销量预留；全受益方分母须已知正值。独立回收受益方保留其自身分子，不转嫁新包零售。先隔离真实计划运行来源总量，再仅一次将alpha用于共享运行、旧载体接收/发运kg及收运/处理合同分子；原始实物库存账仍为完整量，不重复分配。不能再乘处理时间或一般门店分配。回收箱直接用其自身在全时期/受益方预留kg*h上的寿命e/L或最终e/E，不再乘alpha。新货退回留residual，不进takeback。计划、容量、受益方或处理未知均阻止完整性。 |  |
| asset_coverage | support | 场所是一个真实完整建筑型号/BOM，包含围护、地面、固定照明、风扇、电暖器和布线、制造/安装、实际维修及终端处理。货架、手推车、手动托盘车、收银站、网络网关、安防系统和管理工作站各有自身物理有界型号卡。货架排除一切手推车/托盘车，不能预设货架搬运套包。仅在有真实单一完整合同/模型及可测整体对象、且所有组件/运行排除明确时才保留多对象包；否则将实际对象分为不同行及完整向量。收银含实际柜台、终端、扫描器、打印机、钱箱、电源/线缆；网关含实际路由器/调制解调器/交换机/布线；安防含实际摄像头/报警器/控制器；管理站含实际桌/电脑/显示器。每卡实例绑定一实际型号和完整向量，不能用未定义物品代数。资本向量排除运行电力、电信/支付/监控/记账服务、纸、清洁和商品。完整寿命仅覆盖该同一对象制造/安装、型号特定维修/更换及终端处理/运输。未覆盖必要设备须先补具体型号卡，方能完整。 | jrc-retail-2013 |
| leak_response | hygiene; residual | 新货泄漏响应仅在真实安全程序允许时使用实际确认的海泡石颗粒和丁腈手套。捕集电解液进入完整污染吸附物/擦拭载体，与废电芯剩余物分开；称量含残留污染物的最终载体净重。不得冲入排水口、套蒸发因子或自动产生基本排放。记录已观察逸液、库存、捕集和最终去向。未控制释放须计量物种/环境介质并补原子卡；未解决释放不能置零。第三方事故响应未被已定义投入覆盖时须另列有边界的服务卡。 |  |
| return_transport | supplier_return_transport | 原始路段供应商退货货运的运力选择由实际合同约束固定：仅在载荷质量为有证据的预留约束且体积/装载位非约束时用kg；仅在体积/装载位为有证据的约束且载荷质量非约束时用可用m3。逐路段记录证明。双约束、约束未知或异质服务无法物理分割成独立计量单约束路段时，不能原始分配；须取得供应方已归属且核实物理分配/空返/怠速的实际托运向量，否则不完整。每合格路段采用实际km乘固定单位的reserved capacity_p/sum_all_b reserved capacity_b。专用/空载预留腿保留实际车辆km及预订运力责任，不能因吨公里零置零。在匹配完整行程服务向量中定量核实实际静止怠速燃料；覆盖未知阻止完整性。供应已归属量直接采用，不再乘第二驱动量。其他边界已含的原入库/废物/回收运输按物理路线/阶段/装载及向量证据排除，不能凭来源ID不同认定互斥。 |  |
| support_services | support | 通过下列具名卡纳入实际ICT/宽带接入、支付尝试授权、远程安防监控、记账服务及实际场内网关/安防/管理资本卡。每项仅在签字场址拓扑、合同/发票及活动账证明完整池/闲置时段实际存在或不存在时条件适用；必要供应或资本缺失即不完整，不假定零。cp_support_services固定活动/固定分配。供应方完整向量须含实际远程网络/数据中心/办公室电力和资本，并排除已建模场内AC及网关/收银/安防/管理硬件。按对象序号/型号、电表回路、路线/阶段、时段、服务功能和供应向量组分建立物理覆盖矩阵。即使来源ID不同也匹配交集；仅用核实原供应子向量/数量移除重叠，不能任意按百分比扣。重叠未知或完整供应包无法分开时阻止补全。每项真实新增对象须先补具名卡/协议/计算；一般扩展语句不能豁免。 |  |
| transport_source_ownership | support; store_sale; hygiene; residual; takeback | 完整资产向量V_a_v纳入该同一资产实际交付/安装、维修更换货运及终端移除/处理运输。独立采购时先计量核实原运输向量并绑定该资产来源/版本，再构造V_a_v；对全部历史受益方沿用相同当前e/L或最终e/E及DeltaV。独立资产运输绝不能全记本期Q。纸、清洁配方和完整包装交付向量跟随原材料来源及首次消耗/库存责任份额（paper_responsibility_l_pool或实测配方消耗/原填充），含在制品结转；原商品入库遵守整包/组件S/F/O/T。实际废物接收向量须明确覆盖每次发运收运车辆/空返、处理和必要容器寿命；缺失运输/容器须先补具体实测卡方能完整。记录路线/阶段/托运/时段/对象及物理向量重叠。ID或发票不同不使重复货运互斥。完成这些责任及版本替换后才归一化各原始兼容分子。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| store_sale | 收货、陈列与收银 | required | 已声明路线 | 前景服务路线 | 每参考流 |
| hygiene | 清洁和受控事故响应 | required | 实际路线卫生；PPE/吸附物按事件条件 | 前景服务路线 | 每参考流 |
| support | 完整资产供给 | required | 实际已定义完整包 | 前景服务路线 | 每参考流 |
| residual | 新货监管和残余发运 | required | 实际实物监管及废弃事件 | 前景服务路线 | 每参考流 |
| takeback | 消费后回收 | conditional | 实际接纳回收计划/义务；不存在有证据 | 前景服务路线 | 每参考流 |

### 过程：收货、陈列与收银（`store_sale`）

#### 输入

##### 产品流

###### 纸板包装原装未使用四节LR6碱性电池包（`failed_pack`）

这是失败原包的来源当量背景投入，不是总收货或第二份电芯投入。

- 选定流：纸板包装原装未使用四节LR6碱性电池包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_F / Q；N_F=sum_s whole_mode_s*original_pack_count_s*F_s；组件模式原来源whole_mode_s=0，绝不进入本整包投入。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sale`
- 来源：`varta-catalogue-2025`

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`（`ac`）

使用点交流电，不推断供应方或电压；总量仅一次纳入互斥的销售、清洁及回收回路。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6 * E_pool / Q；E_pool为含闲置/失败的实际归属kWh。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`
- 来源：`jrc-retail-2013`

###### 含涂层热敏小票纸（`receipt`）

实际纸不含纸芯及独立箱/包材；直接热敏打印不推定耗墨盒。

- 选定流：含涂层热敏小票纸
- 流属性/单位：质量 / kg
- 数量规则：P_pool / Q；P_pool = sum_l paper_source_kg_l*paper_responsibility_l_pool；使用原来源版本并守恒空白/打印库存。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_paper`
- 来源：

###### 实际供应型号原装未用LR6碱性电芯（`component_cell`）

仅核实组件模式时条件纳入；同一原来源whole_mode_s=0。每实际组件/服务型号绑定自身原量和来源向量，S/F/O/T守恒。

- 选定流：实际供应型号原装未用LR6碱性电芯
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：sum_s n_s_cell*F_s_cell / Q；仅组件模式原来源；核实真实供应向量/数量边界，不能按整包向量份额拆分。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：

###### 完整原装印刷纸板四节消费包装（`component_board`）

仅核实组件模式时条件纳入；同一原来源whole_mode_s=0。每实际组件/服务型号绑定自身原量和来源向量，S/F/O/T守恒。

- 选定流：完整原装印刷纸板四节消费包装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：sum_s n_s_board*F_s_board / Q；仅组件模式原来源；核实真实供应向量/数量边界，不能按整包向量份额拆分。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：

###### 一实际原装四节LR6包装配服务（`component_assembly`）

仅核实组件模式时条件纳入；同一原来源whole_mode_s=0。每实际组件/服务型号绑定自身原量和来源向量，S/F/O/T守恒。

- 选定流：一实际原装四节LR6包装配服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：sum_s n_s_assembly*F_s_assembly / Q；仅组件模式原来源；核实真实供应向量/数量边界，不能按整包向量份额拆分。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：

###### 一实际原装四节LR6包的收货口交付供给服务（`component_inbound`）

仅核实组件模式时条件纳入；同一原来源whole_mode_s=0。每实际组件/服务型号绑定自身原量和来源向量，S/F/O/T守恒。

- 选定流：一实际原装四节LR6包的收货口交付供给服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：sum_s n_s_inbound*F_s_inbound / Q；仅组件模式原来源；核实真实供应向量/数量边界，不能按整包向量份额拆分。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_components`
- 来源：

#### 输出

##### 产品流

###### 一包原封四节LR6碱性电池的零售服务（`service_output`）

一完整原包的一次最终有效交付，绝非四次电芯服务。

- 选定流：一包原封四节LR6碱性电池的零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_sale`
- 来源：

### 过程：清洁和受控事故响应（`hygiene`）

#### 输入

##### 产品流

###### 门店入口自来水（`water`）

实际设施边界输入水；实际入场供水计量表不再扣内部回用水。

- 选定流：自来水 `c6fb2442-d527-4e3d-bf01-4c94ea2b71ec`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：W_pool / Q；W_pool = 已归属sum_i V_in_i*rho_in_i。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：`jrc-retail-2013`

###### 水性中性非离子地面清洁配方（`cleaner`）

须有真实供应配方/SDS和批次密度；不假设通用浓度。

- 选定流：水性中性非离子地面清洁配方
- 流属性/单位：质量 / kg
- 数量规则：C_pool / Q；实际消耗配方来源kg，不含留存复用配方。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

###### 干燥非织造纤维素擦拭片（`wipe`）

单一已识别材料及结构；按实际事件记使用和处置。

- 选定流：干燥非织造纤维素擦拭片
- 流属性/单位：质量 / kg
- 数量规则：D_pool / Q；实际领用干擦拭片kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

###### 一次性丁腈防护手套（`glove`）

实际使用时纳入，包括泄漏响应；仅签字程序及发放账证明未用才缺省。

- 选定流：一次性丁腈防护手套
- 流属性/单位：质量 / kg
- 数量规则：G_pool / Q；纳入处理实际领用手套净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

###### 干燥海泡石吸附颗粒（`absorbent`）

仅实际获准泄漏响应时纳入；未观察损失不能推为已吸附。

- 选定流：干燥海泡石吸附颗粒
- 流属性/单位：质量 / kg
- 数量规则：A_pool / Q；实际使用干颗粒净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

###### 完整HDPE清洁剂瓶及瓶盖包（`cleaner_bottle`）

供应商完整瓶体/盖/内衬/标签/胶BOM或核实整包向量；清洁剂供应已含时在此按准确向量去重。

- 选定流：完整HDPE清洁剂瓶及瓶盖包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：B_pool / Q；B_pool = sum_s bottle_count_s*formulation_consumed_s_pool/original_fill_kg_s；实测原填充量及持久来源份额，不用名义瓶容量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

#### 输出

##### 废物流

###### 收集的废水性地面清洁液（`effluent`）

在发运/排水处量实际全液体；溶解污垢和清洁剂留载体内。不从计量排水再扣供水平衡项。

- 选定流：收集的废水性地面清洁液
- 流属性/单位：质量 / kg
- 数量规则：J_pool / Q；直接模式J_pool = 已归属sum_i V_out_i*rho_out_i。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

###### 含残留污染物的废湿纤维素擦拭片（`wet_wipe`）

只按实测含水/配方/电解液/污垢；不再乘配方份额。

- 选定流：含残留污染物的废湿纤维素擦拭片
- 流属性/单位：质量 / kg
- 数量规则：H_pool / Q；实际整批湿载体净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

###### 废污染丁腈防护手套（`used_glove`）

与混合吸附载体互斥；按实际污染确定处理适用性。

- 选定流：废污染丁腈防护手套
- 流属性/单位：质量 / kg
- 数量规则：K_pool / Q；实际整批手套载体净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

###### 含碱性电芯电解液的废海泡石吸附物（`used_absorbent`）

此处捕集电解液从电芯剩余物及其他最终载体中排除。

- 选定流：含碱性电芯电解液的废海泡石吸附物
- 流属性/单位：质量 / kg
- 数量规则：U_pool / Q；实际整批污染颗粒载体净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

###### 含清洁残液的空HDPE清洁剂瓶（`cleaner_container`）

仅实际有证据、处理接纳的完整HDPE瓶/盖包；制造另记cp_hygiene供应包装投入，不能当作清洁剂活性质量。

- 选定流：含清洁残液的空HDPE清洁剂瓶
- 流属性/单位：质量 / kg
- 数量规则：Z_pool / Q；实际完整空瓶、瓶盖和残液净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_hygiene`
- 来源：

### 过程：完整资产供给（`support`）

#### 输入

##### 产品流

###### 实际门店场所的完整寿命供给包（`premises`）

按asset_coverage定义的一个实际识别全寿命包，不是未定义物品代数。

- 选定流：实际门店场所的完整寿命供给包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：f_a_pool_v / Q；未终结时f_a_pool_v=e_a_pool_v/L_a_v，实际退役时为e_a_pool_final/E_a；仅一个同构实际资产/型号/BOM/向量；应用寿命版本替换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 一个实际货架型号的完整寿命供给包（`shelving`）

仅一个实际完整货架对象/BOM；排除所有手推车及托盘车；驱动量为预留可用仓储m3*h。

- 选定流：一个实际货架型号的完整寿命供给包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：f_a_pool_v / Q；未终结时f_a_pool_v=e_a_pool_v/L_a_v，实际退役时为e_a_pool_final/E_a；仅一个同构实际资产/型号/BOM/向量；应用寿命版本替换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 实际收银工作站的完整寿命供给包（`checkout`）

按asset_coverage定义的一个实际识别全寿命包，不是未定义物品代数。

- 选定流：实际收银工作站的完整寿命供给包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：f_a_pool_v / Q；未终结时f_a_pool_v=e_a_pool_v/L_a_v，实际退役时为e_a_pool_final/E_a；仅一个同构实际资产/型号/BOM/向量；应用寿命版本替换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 一个实际手推车型号的完整寿命供给包（`manual_trolley`）

仅实际对象条件纳入；签字拓扑/BOM/发票须证明存在或不存在。不混异型号；仅制造/维护/终端/运输，场内AC另计。

- 选定流：一个实际手推车型号的完整寿命供给包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：f_a_pool_v / Q；f=e_a_pool_v/L_a_v或最终e_a_pool_final/E_a；一个准确实际型号/BOM/完整向量；按lifetime规定同单位驱动量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 一个实际手动托盘车型号的完整寿命供给包（`manual_pallet_jack`）

仅实际对象条件纳入；签字拓扑/BOM/发票须证明存在或不存在。不混异型号；仅制造/维护/终端/运输，场内AC另计。

- 选定流：一个实际手动托盘车型号的完整寿命供给包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：f_a_pool_v / Q；f=e_a_pool_v/L_a_v或最终e_a_pool_final/E_a；一个准确实际型号/BOM/完整向量；按lifetime规定同单位驱动量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 一个实际门店网络网关型号的完整寿命供给包（`gateway_asset`）

仅实际对象条件纳入；签字拓扑/BOM/发票须证明存在或不存在。不混异型号；仅制造/维护/终端/运输，场内AC另计。

- 选定流：一个实际门店网络网关型号的完整寿命供给包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：f_a_pool_v / Q；f=e_a_pool_v/L_a_v或最终e_a_pool_final/E_a；一个准确实际型号/BOM/完整向量；按lifetime规定同单位驱动量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 一个实际门店安防系统型号的完整寿命供给包（`security_asset`）

仅实际对象条件纳入；签字拓扑/BOM/发票须证明存在或不存在。不混异型号；仅制造/维护/终端/运输，场内AC另计。

- 选定流：一个实际门店安防系统型号的完整寿命供给包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：f_a_pool_v / Q；f=e_a_pool_v/L_a_v或最终e_a_pool_final/E_a；一个准确实际型号/BOM/完整向量；按lifetime规定同单位驱动量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 一个实际管理工作站型号的完整寿命供给包（`admin_asset`）

仅实际对象条件纳入；签字拓扑/BOM/发票须证明存在或不存在。不混异型号；仅制造/维护/终端/运输，场内AC另计。

- 选定流：一个实际管理工作站型号的完整寿命供给包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：f_a_pool_v / Q；f=e_a_pool_v/L_a_v或最终e_a_pool_final/E_a；一个准确实际型号/BOM/完整向量；按lifetime规定同单位驱动量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

###### 实际门店用户端口固定宽带接入服务（`broadband`）

一个实际供应服务，核实完整远程电力/资本边界；按物理覆盖矩阵排除每个已建模场内回路/设备及交叉供应组分。

- 选定流：实际门店用户端口固定宽带接入服务
- 流属性/单位：用户接入时间 / h
- 数量规则：H_net_pool / Q；实际用户小时按固定时段陈列体积预留责任分配；仅供应方远程边界。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_support_services`
- 来源：

###### 一次零售支付尝试的授权处理服务（`payment`）

一个实际供应服务，核实完整远程电力/资本边界；按物理覆盖矩阵排除每个已建模场内回路/设备及交叉供应组分。

- 选定流：一次零售支付尝试的授权处理服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_pay_pool / Q；sum_attempts payment_attempt_count*checkout_line_seconds_attempt_p/sum_all_b checkout_line_seconds_attempt_b，含拒绝/撤销及每个购物篮受益方；仅有证据单一受益方才直接归属。完整购物篮驱动量须已知正值。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_support_services`
- 来源：

###### 实际门店安防系统远程监控服务（`monitoring`）

一个实际供应服务，核实完整远程电力/资本边界；按物理覆盖矩阵排除每个已建模场内回路/设备及交叉供应组分。

- 选定流：实际门店安防系统远程监控服务
- 流属性/单位：监控时间 / h
- 数量规则：H_security_pool / Q；实际监控小时按全受益保护地面m2*h份额归属。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_support_services`
- 来源：

###### 实际零售事件外部记账处理服务（`bookkeeping`）

一个实际供应服务，核实完整远程电力/资本边界；按物理覆盖矩阵排除每个已建模场内回路/设备及交叉供应组分。

- 选定流：实际零售事件外部记账处理服务
- 流属性/单位：处理时间 / h
- 数量规则：H_admin_pool / Q；真实供应处理小时追溯事项，含失败/退回；共用固定服务小时按预留陈列m3*h责任。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_support_services`
- 来源：

### 过程：新货监管和残余发运（`residual`）

#### 输入

##### 产品流

###### 供应商退货的柴油轻型货车道路货运服务（`supplier_return_transport`）

实际完整货运合同含车辆/燃料/上游/维护及观察到的空返腿；排除原供应入库和接收合同已含的旧/废物收运。

- 选定流：供应商退货的柴油轻型货车道路货运服务
- 流属性/单位：车辆行驶距离 / vehicle*km
- 数量规则：R_return / Q；R_return = sum_t_s distance_t_s*reserved_capacity_t_s_pool/sum_b reserved_capacity_t_s_b；供应方已归属托运量直接采用而不再分配。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_return_transport`
- 来源：

#### 输出

##### 产品流

###### 外部持有的失败完整原装未使用四节LR6碱性电池包（`external_pack`）

不可表征的实物监管附属记录；须具名接收者、状态和同一S/F/O/T来源责任，责任与实物移动独立。

- 选定流：外部持有的失败完整原装未使用四节LR6碱性电池包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：X_pool / Q；实际外部持有完整原包数量。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：

###### 原包验收撤销后外部持有的部分使用LR6碱性电芯（`external_partial`）

不可表征监管附属记录，原接收者及同原来源S/F/O/T必需；原纸板去向另有证据。

- 选定流：原包验收撤销后外部持有的部分使用LR6碱性电芯
- 流属性/单位：质量 / kg
- 数量规则：X_partial / Q；实际有证据的外部持有电芯净kg；撤销不产生新实物外出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：

###### 原包验收撤销后外部持有的耗尽LR6碱性电芯（`external_spent`）

不可表征监管附属记录，原接收者及同原来源S/F/O/T必需；原纸板去向另有证据。

- 选定流：原包验收撤销后外部持有的耗尽LR6碱性电芯
- 流属性/单位：质量 / kg
- 数量规则：X_spent / Q；实际有证据的外部持有电芯净kg；撤销不产生新实物外出。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：

##### 废物流

###### 废弃未使用LR6碱性电芯及实测剩余内容物（`new_cells`）

仅实际废流，具来源/库存及接收处理证据；直接发运量不再用生成/库存平衡二次修正。

- 选定流：废弃未使用LR6碱性电芯及实测剩余内容物
- 流属性/单位：质量 / kg
- 数量规则：C_cell / Q；实际发运批次净kg仅一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`jrc-retail-2013`

###### 废印刷纸板电池消费包装（`pack_board`）

仅实际废流，具来源/库存及接收处理证据；直接发运量不再用生成/库存平衡二次修正。

- 选定流：废印刷纸板电池消费包装
- 流属性/单位：质量 / kg
- 数量规则：C_board / Q；实际发运批次净kg仅一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`jrc-retail-2013`

###### 废瓦楞运输箱（`transport_board`）

仅实际废流，具来源/库存及接收处理证据；直接发运量不再用生成/库存平衡二次修正。

- 选定流：废瓦楞运输箱
- 流属性/单位：质量 / kg
- 数量规则：C_carton / Q；实际发运批次净kg仅一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`jrc-retail-2013`

###### 废含涂层热敏小票纸（`receipt_waste`）

仅实际废流，具来源/库存及接收处理证据；直接发运量不再用生成/库存平衡二次修正。

- 选定流：废含涂层热敏小票纸
- 流属性/单位：质量 / kg
- 数量规则：C_receipt / Q；实际发运批次净kg仅一次。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：`jrc-retail-2013`

###### 废弃退回的部分使用LR6碱性电芯（`returned_partial`）

保留同一原包来源及撤销历史；实际剩余电芯kg排除另行捕集电解液。

- 选定流：废弃退回的部分使用LR6碱性电芯
- 流属性/单位：质量 / kg
- 数量规则：C_partial / Q；实际发运净kg，与未用new_cells及消费后回收互斥。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：

###### 废弃退回的耗尽LR6碱性电芯（`returned_spent`）

保留同一原包来源及撤销历史；实际剩余电芯kg排除另行捕集电解液。

- 选定流：废弃退回的耗尽LR6碱性电芯
- 流属性/单位：质量 / kg
- 数量规则：C_spent / Q；实际发运净kg，与未用new_cells及消费后回收互斥。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_residual`
- 来源：

### 过程：消费后回收（`takeback`）

#### 输入

##### 产品流

###### 实际废电池收集箱的完整寿命供给包（`takeback_bin`）

实际箱及相容内衬、制造/维护/终端包；排除所收电池、运行、收运与处理。

- 选定流：实际废电池收集箱的完整寿命供给包
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：f_a_pool_v / Q；未终结时f_a_pool_v=e_a_pool_v/L_a_v，实际退役时为e_a_pool_final/E_a；仅一个同构实际资产/型号/BOM/向量；应用寿命版本替换。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_takeback`
- 来源：

##### 废物流

###### 混合便携家用废电池批次（`old_received`）

实际回收商接纳的混合物，保留组成/状态证据；旧电池绝不变新货。

- 选定流：混合便携家用废电池批次
- 流属性/单位：质量 / kg
- 数量规则：T_in_pool / Q；实际归属接收整批废载体净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_takeback`
- 来源：

#### 输出

##### 废物流

###### 混合便携家用废电池批次（`old_dispatched`）

实际授权收运/处理只关联一次；不与新货电芯废物重复，也不给原生信用。

- 选定流：混合便携家用废电池批次
- 流属性/单位：质量 / kg
- 数量规则：T_out_pool / Q；实际归属发运整批废载体净kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_takeback`
- 来源：

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| denominator | service_output | 事先固定同SKU、同配置报告池，保留全部闲置/闭店/失败/零销量时段。Q为在披露结账时最终有效验收的不同原包ID数量，不是电芯数、交易数、收入或总交出。退回原包在撤销后再售最终只形成一次服务，所有尝试留原池。后续撤销即使无实物退回也将原ID从Q删除；验收仍有效的纯价格调整不影响Q。按实际事件日期替换原分子/去向/分母版本，不转记新批次。全Q为零的池保留原始总量并明确无法归一化；仅按事前同配置规则合并。 |  |
| shared | store_sale; hygiene; residual; takeback | 优先物理细分/计量。每实际来源j分为计量互斥的活动/闲置/固定分子池R_j_k，sum_k以同来源单位核对母量。每池在全部受益方之间用一个固定同单位驱动量：照明/场所=预留地面m2*h；安防活动/连续运行/待机=保护地面m2*h；卫生=实际清洁m2；储存=占用/预留货架m3*h；收银活动=含失败/撤销尝试的实际处理秒；收银闲置/固定/启动=预留收银工作位秒，其时段归属按每受益方实际预留陈列m3占全受益预留陈列m3份额确定。仅所得秒数是驱动量，不加秒与m3。网关/ICT活动功率=实际归属传输字节；网关固定/闲置功率=预留用户位*h，其归属用同一时段陈列体积份额。管理活动来源=含退回/失败的实际任务秒；管理设备固定/闲置来源=预留工作站位*h，其归属同样按陈列预留。电信、监控、支付/记账供应服务分子遵守cp_support_services各自驱动量，并排除已分配场内电力/资本。逐池仅一次R_j_k*d_j_k_p/sum_all_b d_j_k_b；保留闭店/失败/零销量时段。全驱动量须已知正值；驱动量零/未知不能丢失来源。已隔离回收计划池只用takeback的alpha，不再用此第二驱动量。只有物理回路确在母表内才扣子表；不同ID不证明互斥。 | ghg-product-2011 |
| lifetime | premises; shelving; manual_trolley; manual_pallet_jack; checkout; gateway_asset; security_asset; admin_asset; takeback_bin | 每张资产卡实例只绑定一个实际资产a及版本v中一个同构型号/BOM/完整包向量V_a_v。在寿命未终结时，f_a_p_v=e_a_p_v/L_a_v；e为池p实际暴露，L为覆盖所有实际受益方、严格同一驱动量单位且有证据的预期总寿命暴露。退役时E_a=sum_all_p e_a_p，对每个历史池统一改用f_a_p_final=e_a_p/E_a。E_a必须已知且为正；保留零暴露时段并调查无依据的未归属暴露。逐历史池把旧分配替换为f_new*V_new，按相同交换/属性/单位及物理来源边界逐行记录DeltaV_a_p=f_a_p_new*V_a_new-f_a_p_old*V_a_old；不能把差额当新一整份制造。修订所有原池及其Q版本。每版累计份额<=1，最终闭合之和=1。异型号/BOM/维修/完整向量不得在同一Item(s)卡累计；完整性之前须为实际不同型号对象新设卡/行及向量。场所驱动量=预留可用m2*h；货架=预留可用仓储m3*h；手推车/托盘车=预留额定载荷kg*h；收银/网络/管理终端=预留设备位*h；安防系统=受保护地面m2*h；回收箱=预留接纳废物容量kg*h。闲置/闭店预留仍由所有实际预留受益方承担。寿命、正的总驱动量或完整向量未知均阻止完整性。 | ghg-product-2011 |
| single_normalization | all inventory rows | 区分原始计量总量、已归属来源分子和最终清单。每个最终交换只将其归属分子除Q一次。将供应方已归一化模块还原到有证据的原始分母/池/版本，按准确来源ID与核心及其他模块去重，仅相加同流/属性/单位的原始分子，再统一除Q一次。核心分子保留failed_pack和AC。不加kg与MJ，不加原始与归一化量，不在全寿命包份额上再乘制造份额，不给废物回收替代信用。仅external_pack/external_partial/external_spent是不可表征的实物监管附属记录；failed_pack始终是真实背景关联投入。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_sale | store_sale | service_output; failed_pack | 原包事件及背景账 | pool_id; original_pack_id; SKU; actual GTIN; manufacturer; cell_model; cell_count4; paperboard_BOM; batch; receipt_event_id; event_date; gross_handover_id; acceptance_valid; revocation_date; physical_return_id; original_pool; S_s; F_s; O_s; T_s; original_pack_count_s; N_F; Q; supplier_vector_id; inbound_route; source_version; whole_mode_s; component_mode_original_ids; physical_overlap_matrix | 收货时检验实际四节原封包并核对供应商完整BOM/向量；用校准秤称实际收货包/电芯/包装样本，不能套目录值。逐事件记收货/交出/退回/撤销/拒绝/遗失，保留原ID及实际最终接收者/状态。至披露结账时核对库存和来源向量并追踪后续退回修订。 汇总计算：按来源ID得原始Q和N_F；最终按每参考流Q/Q与N_F/Q，撤销不重复扣 | Item(s); kg | 逐事件及结账核对 | 完整报告池、闭店/失败时段及迟延修订 | 同SKU/门店配置和全部原包来源 | 每参考流 | 供应发票/BOM/LCI边界、校准抽样、日期验收/退回账、签字来源责任移交 |
| cp_energy | store_sale | ac | 电表拓扑及分配账 | pool_id; meter_id; parent_id; submeter_id; included_in_parent; start_reading; end_reading; kWh; R_j_k; d_j_k_pool; d_j_k_b; beneficiary_id; active_idle_fixed; E_pool; geography; year; voltage; provider; mix; source_id; source_device_serial; source_active_idle_fixed; checkout_processing_seconds_p; checkout_position_seconds; reserved_display_m3_p; reserved_display_m3_b; transmitted_bytes_p; transmitted_bytes_b; subscriber_position_hours; administration_task_seconds; administration_reserved_position_hours; protected_floor_m2_h; physical_overlap_matrix; takeback_program_source_id; takeback_alpha_applied | 逐时段在使用点读取校准表，识别母子边界和销售/卫生/回收回路。分开同单位来源池，记录每个受益方的地面/货架几何与时间或收银秒数。保留闲置/闭店用电及账单；独立表互斥，不互减。 严格按shared：收银活动秒、闲置/固定/启动预留工作位秒并按时段陈列体积归属；ICT活动字节、闲置用户位*h；管理活动任务秒、闲置预留工作位*h。来源组分分开并核对母回路；物理重叠矩阵而非不同ID证明互斥。已隔离回收计划来源仅用alpha。 汇总计算：E_pool = sum_j_k R_j_k*d_j_k_pool/sum_b d_j_k_b；每参考流3.6*E_pool/Q | kWh; MJ | 时段计量及账单核对 | 报告池全部时段、闭店及零销量 | 相关门店及共享建筑回路/全部受益方 | 每参考流 | 校准、回路图、账单、分配驱动量账及供应边界 |
| cp_paper | store_sale | receipt | 纸库存和在制品来源账 | pool_id; source_id; roll_id; supplier_spec; net_paper_kg; core_kg; separate_wrap_kg; opening_blank; receipts; closing_blank; printed_WIP_open; printed_WIP_close; WIP_original_electricity; customer_handover_kg; discard_kg; P_pool; paper_source_kg_l; paper_responsibility_l_pool; unused_return; blank_transfer_in; blank_transfer_out; source_version; original_delivery_vector; first_consumption_source_fraction; stock_responsibility_version; physical_overlap_matrix | 用校准秤称实际直接热敏纸，排除实测纸芯和独立包/箱，保留涂层。记打印领用和顾客/取消/重复小票。未用卷纸与已打印在制品分账；跨期携带原纸及实际打印电量来源ID，后用时替换原池分配，不重复计。实际纸芯/包材须自有具名卡，或有供应商核实退回及延续责任。paper_source_kg_l为实际原净纸kg，paper_responsibility_l_pool为有证据的池份额，在交付/废弃/在制品接收方之间累计<=1。期初空白+收货+空白调入=期末空白+未用退回+空白调出+实际打印领用；打印领用+期初已打印在制品=顾客交付+废弃+期末已打印在制品，逐来源守恒。 独立开票材料/包装交付先并回原来源向量，再用实际首次消耗/库存份额；保留在制品/留存来源版本，即使来源ID不同也核对物理路线重叠。 汇总计算：P_pool为原始净纸消耗在互斥在制品来源移交后的归属量；每参考流P_pool/Q；纸及电来源责任守恒 | kg | 逐卷/事件及结账 | 报告池及跨期在制品历史 | 实际打印机及所有收银受益方 | 每参考流 | 秤校准、卷纸/BOM发票、打印账、在制品版本、顾客/废弃核对 |
| cp_hygiene | hygiene | water; cleaner; wipe; glove; absorbent; effluent; wet_wipe; used_glove; used_absorbent; cleaner_container; cleaner_bottle | 清洁和事故全载体/来源账 | reconstruction_full_liquid_inputs; dissolved_solids; opening_liquid_stock; closing_liquid_stock; source_pool_carrier_exports; evaporation; mode_selector; pool_id; event_id; source_id; batch; supplier_formulation; SDS; bottle_full_BOM; whole_package_vector; source_duplicate_ids; package_count; bottle_count_s; formulation_consumed_s_pool; original_fill_kg_s; bottle_source_fraction_s_pool; B_pool; V_in_i; rho_in_i; V_out_i; rho_out_i; temperature; concentration; opening_formulation; formulation_added; formulation_to_effluent; formulation_to_wipe; formulation_to_glove; formulation_to_absorbent; formulation_container_dispatch; formulation_retained; unused_return; rinse_water; dirt; captured_electrolyte; dry_sheet_kg; glove_net_kg; dry_granule_kg; carrier_net_kg; W_pool; C_pool; D_pool; G_pool; A_pool; J_pool; H_pool; K_pool; U_pool; Z_pool; cleaned_m2; all_beneficiary_cleaned_m2; receiver; waste_stock; actual_leak; escape_destination; original_delivery_vector; first_consumption_source_fraction; stock_responsibility_version; physical_overlap_matrix | 逐次清洁/事故，用校准秤称投入及分别完整湿最终载体，读实际进/排水表并测批次温度密度。识别真实中性非离子配方及完整瓶盖/BOM；仅有证据才拆供应包装来源向量。直接液体模式为V_out*rho_out，不扣供水平衡。未计排水时只能排他采用全液体kg平衡，计全部输入液、溶解固体、整液期初期末库存、捕集外出、蒸发及储存；不以仅水体积重构。配方来源去向kg与载体kg、外加冲洗水/污垢独立。实察泄漏/捕集及最终去向，不虚构基本通量。 独立开票材料/包装交付先并回原来源向量，再用实际首次消耗/库存份额；保留在制品/留存来源版本，即使来源ID不同也核对物理路线重叠。 汇总计算：原始同单位总量直接或按清洁面积归属；各具名池量每参考流除Q。期初配方+新增=互斥最终废液/擦片/手套/吸附物/容器发运/留存/未用退回的配方来源kg；复用中间状态替换，不再相加。完整载体独立称量。逐原瓶以实测配方消耗/原填充份额向全使用者/时段分配制造向量；累计<=1，最终余量/修订替换前版。实际瓶终端载体质量只一次按同来源使用者归属，发运质量与配方残留来源质量独立；不再乘制造份额。输入完整液体已含其溶解固体，重构的新增dissolved_solids仅指未重复计入的独立干物质来源。 | kg; m3; kg/m3; m2 | 逐事件及月/池核对 | 全部运行/闲置事故及跨池留存/复用库存 | 场址卫生和实际受益方；新/旧货泄漏身份分开 | 每参考流 | 校准、密度/温度、SDS、完整瓶BOM/LCI来源去重、清洁事故账、接收记录及来源/整载体平衡 |
| cp_assets | support | premises; shelving; manual_trolley; manual_pallet_jack; checkout; gateway_asset; security_asset; admin_asset | 持久完整资产暴露账 | asset_id; model; package_BOM; source_id; source_version; installation; maintenance_events; replacement_model; included_EOL; exclusions; e_a_pool; L_a; beneficiary_id; reserved_usable_m2; reserved_capacity_m3; operating_positions; reserved_hours; lifetime_exposure; cumulative_fraction; residual; previous_allocations; revised_allocations; retirement_date; asset_serial; homogeneous_vector_hash; e_a_pool_v; L_a_v; E_a; e_a_pool_final; f_a_pool_v; V_a_old; V_a_new; f_a_p_old; f_a_p_new; DeltaV_a_p; rated_payload_kg; device_positions; protected_floor_m2; independent_transport_vector; asset_transport_source_version; physical_overlap_matrix | 每卡实例核实一个真实序号/型号/BOM/完整向量；异型号/BOM/向量分行。货架排除另列各人工搬运对象。逐资产按规定实测暴露：场所可用m2*h，货架可用m3*h，手推车/托盘车额定载荷kg*h，收银/网关/管理预留设备位*h，安防保护m2*h。含全部闲置/闭店预留受益方。独立交付/维修/终端运输先计量绑定同资产来源/版本，再纳入V_a_v。未终结f=e/L；实际退役E=sum_all实际受益暴露，全部历史池f=e/E。把每旧池向量替换为f_new*V_new，按相同物理交换/属性/单位记录Delta=f_new*V_new-f_old*V_old；核对每原Q版本、累计<=1及最终和1。独立货运或型号修订不全记本期。 汇总计算：每实际资产/卡采用f_a_pool_v/Q，未终结e/L、退役e/E；全部历史f_new*V_new-f_old*V_old替换，最终和1。 | Item(s); m2*h; m3*h; kg*h; device-position*h | 每暴露时段、维护/修订及退役 | 完整寿命及本池，不重启账 | 实际独立有界场所、货架、手推车、手动托盘车、收银、网关、安防或管理型号；全部寿命受益方 | 每参考流 | 签字完整寿命模型/BOM边界、场察、容量小时账、发票、维护/终端及全历史版本分配账 |
| cp_residual | residual | external_pack; new_cells; returned_partial; returned_spent; pack_board; transport_board; receipt_waste; external_partial; external_spent | 新货监管及废物发运 | pool_id; original_pack_id; source_id; event_id; receipt_date; gross_handover; customer_return; supplier_return; internal_in; internal_out; condemnation; unexplained_loss; opening_goods; closing_goods; cell_count; pack_BOM; held_waste_open; held_waste_generated; held_waste_close; dispatch_id; net_kg; receiver; treatment; X_pool; C_cell; C_partial; C_spent; X_partial; X_spent; C_board; C_carton; C_receipt; captured_electrolyte; external_state; recipient; continuing_responsibility; inbound_packaging_source; receiver_transport_vector; empty_return_coverage; necessary_container_life_vector; physical_overlap_matrix | 每次实物事件只记一次，和验收分开。用校准秤称实际废批净重扣外部运输容器，识别剩余电芯内容物和互斥捕集电解液、包纸板及运输箱；保留实际处理/运输合同。若完整包整体丢弃，完整性之前须有匹配整包废物卡，或证明安全分离为实际计量电芯/纸板载体。退供应商须有实际监管/接收方/运输及同原背景移交，不能再添投入。未知材料或混合危险载体须其真实接纳具名卡。 接收向量明确含实际发运运输/空返、处理及必要容器寿命。匹配物理路线/阶段/对象/时间，即使ID不同；实际覆盖缺失须先补具名计量卡方能完整。 汇总计算：C_cell/C_partial/C_spent/C_board/C_carton/C_receipt与X_pool来自实际事件归属，每参考流各除Q一次；待废物期初+生成=发运+期末独立核实直接发运 | Item(s); kg | 每监管事件/发运及结账 | 原始历史及待废物直至实际发运 | 实际新货/小票废物及外部接收方 | 每参考流 | 校准净重磅单、新电芯状态、运输/处理联单、来源责任、库存事件互斥及外部签收 |
| cp_takeback | takeback | old_received; old_dispatched; takeback_bin | 旧电池回收和箱寿命账 | pool_id; consignment_id; program_id; mixture_chemistry; actual_state; collector_acceptance; opening_waste_kg; received_net_kg; dispatched_net_kg; closing_waste_kg; receiver; transport_treatment_contract; obligation_beneficiary; allocation_rule; T_in_pool; T_out_pool; bin_id; bin_full_BOM; liner_spec; bin_lifecycle_vector; source_id; e_bin_pool; L_bin; reserved_capacity_kg; reserved_hours; lifetime_exposure; previous_allocations; revised_allocations; residual; reserved_admitted_capacity_kg_p; reservation_hours_p; d_p; d_b; alpha_p; whole_received_kg; whole_dispatched_kg; program_operation_source_total; collector_contract_vector; actual_direct_beneficiary; E_a; e_a_pool_final; f_a_pool_v; V_a_old; V_a_new; f_a_p_old; f_a_p_new; DeltaV_a_p; homogeneous_vector_hash; bin_transport_vector; bin_source_version; physical_overlap_matrix; e_a_pool_v; L_a_v | 用校准秤分别称实际旧混合电池接收/发运；核查接纳该组成/状态的回收合同及捆绑运行签字责任。核对期初+接收=发运+期末，不合并新货。无回收时须完整计划/事件账证明不存在。取得型号完整箱/内衬制造维护终端包，排除所收内容物及收运处理。按lifetime规则跟踪全受益方预留kg*h、完整寿命修订/余量。合同未含的实际额外容器/处理须新增具名卡。 按PCR固定takeback_boundary层级：直接隔离事件/来源归证据受益方，否则d_p=sum预留接纳kg*预留h，alpha=d_p/sum_all_b d_b，覆盖每个零售/计划/独立受益方及闲置/无销量。已隔离计划运行、实际整载体接收/发运、完整收运处理分子仅乘alpha一次；原始库存仍为完整量。不再乘处理时间/一般共享驱动量。回收箱一个实际型号/完整向量直接按全预留kg*h寿命e/L或最终e/E，含独立箱交付/维修/终端运输；逐历史向量更新f_new*V_new-f_old*V_old，不再乘alpha，不将货运全记本期Q。 汇总计算：共用计划实物/服务分子仅乘alpha一次再除Q；直接受益模式互斥；一个型号箱f/Q用寿命e/L或最终e/E并逐历史向量替换，不再乘alpha。 | kg; Item(s); kg*h | 每接收/发运、时段和寿命修订 | 全部回收及库存时段，含零销量 | 实际计划/接收方及所有箱/操作受益方 | 每参考流 | 校准、回收商混合物准入、处理/运输联单、签字义务/分配、箱BOM/模型和寿命账 |
| cp_return_transport | residual | supplier_return_transport | 供应商退货路段记录 | pool_id; trip_id; segment_id; distance_t_s; reserved_capacity_t_s_pool; reserved_capacity_t_s_b; capacity_unit; actual_stationary_idle_hours; actual_idle_fuel_in_contract; empty_leg; idle_reservation; beneficiary_id; provider_attribution_mode; provider_quantity; R_return; Q; full_contract_boundary; original_pack_id; source_id; duplicate_transport_ids; binding_payload_mass_evidence; binding_cube_loading_position_evidence; nonbinding_other_constraint_evidence; raw_mode_eligibility; provider_physical_allocation; physical_overlap_matrix | 逐供应商退货路段读取实际里程表/GPS及签字托运/预留账。每路段运力用一种kg或m3基准，含全部受益方、空载腿和静止预留时长。核实合同含实际柴油车辆/燃料/上游/维护和空返；供应已归属模式与原始路段模式互斥，按来源ID去除重复原入库/废物/回收合同运输。全驱动量未知/为零时该行程分配未解决。 固定运力单位仅在质量约束/体积非约束证明时用kg，仅在体积约束/质量非约束证明时用可用m3。双/未知约束禁原始模式；须供应已归属实际托运向量和核实物理分配，否则不完整。记录实际完整行程怠速燃料及空返覆盖。不同来源ID不证明运输互斥。 汇总计算：每参考流 | vehicle*km; kg; m3; h | 逐实际行程/路段及结账 | 所有退货路段含失败/空载/闲置 | 实际供应商退货及全托运受益方 | 每参考流 | 里程/GPS、合同及来源边界核对、运力/预留账和接收监管 |
| cp_components | store_sale | component_cell; component_board; component_assembly; component_inbound | 核实原供应组件向量账 | original_pack_id; original_source_s; whole_mode_s; supplier_component_vector_id; component_model; component_BOM; component_unit; n_s_cell; F_s_cell; S_s_cell; O_s_cell; T_s_cell; n_s_board; F_s_board; S_s_board; O_s_board; T_s_board; n_s_assembly; F_s_assembly; S_s_assembly; O_s_assembly; T_s_assembly; n_s_inbound; F_s_inbound; S_s_inbound; O_s_inbound; T_s_inbound; original_route; consignment; actual_empty_idle_coverage; reconstructed_original_vector; whole_original_vector; physical_overlap_matrix; Q | 读取实际签字供应组件/装配/入库清单及原量单位；逐实际卡核实一个型号专属向量。电芯原量n_s_cell是实际四节来源数量；纸板是一实际完整印刷/涂层/胶消费包，不是纯本体质量。核对准确向量和重构完整原包及收货口边界，不漏装配/货运。每状态追踪组件原S/F/O/T及实际接收者；同原来源通过whole_mode_s=0排除整包F。不能按质量比拆完整环境向量。实际向量不同时完整性之前须不同已编卡。 汇总计算：每参考流 | Item(s) | 逐原来源/变更及结账 | 所有组件模式原来源和迟延修订 | 实际原来源、全部供应向量及物理边界 | 每参考流 | 签字供应向量/BOM/原量、相同交换/属性/单位重构、原口运输和来源状态守恒 |
| cp_support_services | support | broadband; payment; monitoring; bookkeeping | 实际ICT/支付/安防/管理供应边界账 | pool_id; interval_id; provider_id; contract; service_model; source_vector; physical_overlap_matrix; subscriber_hours; reserved_display_m3_p; reserved_display_m3_b; H_net_pool; payment_event_id; original_pack_id; payment_attempt_count; checkout_line_seconds_attempt_p; checkout_line_seconds_attempt_b; attempted_authorizations; N_pay_pool; protected_floor_m2_h_p; protected_floor_m2_h_b; monitoring_hours; H_security_pool; admin_case_id; processing_seconds_p; processing_seconds_b; common_fixed_hours; H_admin_pool; idle_closed_hours; presence_absence_evidence; all_beneficiaries; Q; reserved_display_m3_h_p; reserved_display_m3_h_b | 读取实际拓扑、供应合同/发票、活动账及完整远程电力/资本向量边界。按物理和时段分开活动事件与固定/闲置来源。实际宽带用户小时按各时段全受益预留陈列m3份额分配，含闲置/闭店预留。支付用关联原ID的实际授权尝试，含拒绝/撤销；共享购物篮每次尝试按本池实际计量收银逐行处理秒/全部购物篮受益方逐行处理秒归属一次，分母须已知正值。购物篮计时不可得即分配不完整；不能每原包各记一完整尝试。监控小时用保护地面m2*h份额。记账直接用实际事项秒，含退回/失败；共用固定供应小时用预留陈列m3*h份额，不能相加秒与m3*h。全分母须已知正值。已隔离回收计划供应来源改仅一次用takeback alpha。不同来源ID也须识别相同设备/回路/路线/功能交集，仅以核实原供应子向量移除重叠，否则不完整。签字不存在须全时期拓扑/合同/活动证据。 汇总计算：每参考流 | h; Item(s) | 逐事件/时段及账单核对 | 完整池含闲置/闭店/失败/零销量 | 全部实际供应服务及全部受益批次/功能 | 每参考流 | 合同/发票、事件/时间账、物理范围和实际资本/电力重叠矩阵、来源子向量及不存在调查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_count | service_output | Q = count(distinct original_pack_id where acceptance_valid at closure)；迟延变更重开原池并替换，不再重复减撤销。 | original_pack_id; acceptance_valid; revocation_date; original_pool; cp_sale | Q |  |
| failed_background | failed_pack | N_F=sum_s whole_mode_s*original_pack_count_s*F_s；清单=N_F/Q；每组件模式原来源whole_mode_s=0。 | whole_mode_s; original_pack_count_s; F_s; Q; supplier_vector_id; cp_sale; cp_components | N_F/Q |  |
| electricity | ac | E_pool = sum_j_k R_j_k*d_j_k_pool/sum_b d_j_k_b；清单=3.6*E_pool/Q；1kWh=3.6MJ。 | R_j_k; d_j_k_pool; d_j_k_b; Q; cp_energy | 每参考流MJ | ghg-product-2011 |
| asset_fraction | premises; shelving; manual_trolley; manual_pallet_jack; checkout; gateway_asset; security_asset; admin_asset | 一个真实同构资产/向量：未终结f_a_pool_v=e_a_pool_v/L_a_v；退役E_a=sum_all_p e_a_pool_final，f_a_pool_final=e_a_pool_final/E_a；清单=f_a_pool_v/Q。逐全部历史归属向量按相同交换/属性/单位和真实物理边界替换，差额DeltaV_a_p=f_a_p_new*V_a_new-f_a_p_old*V_a_old；独立资产运输先并V_a再乘份额。异型号/向量须异卡。 | e_a_pool_v; L_a_v; E_a; e_a_pool_final; f_a_pool_v; f_a_p_new; V_a_new; f_a_p_old; V_a_old; DeltaV_a_p; Q; independent_transport_vector; asset_transport_source_version; cp_assets | 每参考流Item(s) | ghg-product-2011 |
| water_direct | water | W_pool = 已归属sum_i V_in_i*rho_in_i；清单=W_pool/Q；密度取记录温度实测值。 | V_in_i; rho_in_i; temperature; Q; cp_hygiene | 每参考流kg |  |
| effluent_direct | effluent | 直接模式J_pool = 已归属sum_i V_out_i*rho_out_i；清单=J_pool/Q；蒸发/储存仅独立供给QA。重构模式排他使用实测全液体kg输入+溶解固体+期初液存-期末液存-其他整载体中来自源池的外出-蒸发；新增外部干擦片/容器质量不是源液外出。 | V_out_i; rho_out_i; temperature; Q; cp_hygiene; reconstruction_full_liquid_inputs; dissolved_solids; opening_liquid_stock; closing_liquid_stock; source_pool_carrier_exports; evaporation | 每参考流kg |  |
| material_totals | receipt; cleaner; wipe; glove; absorbent; cleaner_bottle | P_pool=sum_l paper_source_kg_l*paper_responsibility_l_pool；B_pool=sum_s bottle_count_s*formulation_consumed_s_pool/original_fill_kg_s；各清单分别取独立实测已归属P_pool/C_pool/D_pool/G_pool/A_pool/B_pool分子除Q一次；保持相应属性/单位和互斥供应包装去重。 | P_pool; C_pool; D_pool; G_pool; A_pool; B_pool; paper_source_kg_l; paper_responsibility_l_pool; bottle_count_s; formulation_consumed_s_pool; original_fill_kg_s; Q; source_duplicate_ids; cp_paper; cp_hygiene | 分别每参考流kg或Item(s) |  |
| terminal_carriers | wet_wipe; used_glove; used_absorbent; cleaner_container; new_cells; returned_partial; returned_spent; pack_board; transport_board; receipt_waste | 各实际发运清单=独立计量归属的完整净载体分子H_pool/K_pool/U_pool/Z_pool/C_cell/C_partial/C_spent/C_board/C_carton/C_receipt各除Q；不再做库存修正或乘组分份额。 | H_pool; K_pool; U_pool; Z_pool; C_cell; C_partial; C_spent; C_board; C_carton; C_receipt; Q; cp_hygiene; cp_residual | 分别每参考流kg |  |
| takeback_totals | old_received; old_dispatched; takeback_bin | d_p=sum_intervals reserved_admitted_capacity_kg_p*reservation_hours_p；alpha_p=d_p/sum_all_b d_b；共用计划T_in_pool=whole_received_kg*alpha_p，T_out_pool=whole_dispatched_kg*alpha_p，与有证据直接受益模式互斥。旧载体清单=T_in_pool/Q或T_out_pool/Q。箱一个型号向量直接用f=e/L或最终e/E及f/Q；每个历史向量替换Delta=f_new*V_new-f_old*V_old，不再乘alpha。计划运行/收运服务分子仅乘alpha一次，不再用处理/一般门店第二驱动量。 | reserved_admitted_capacity_kg_p; reservation_hours_p; d_p; d_b; alpha_p; whole_received_kg; whole_dispatched_kg; actual_direct_beneficiary; T_in_pool; T_out_pool; program_operation_source_total; collector_contract_vector; e_a_pool_v; L_a_v; E_a; e_a_pool_final; f_a_pool_v; f_a_p_new; V_a_new; f_a_p_old; V_a_old; DeltaV_a_p; Q; bin_transport_vector; cp_takeback | 分别每参考流kg与Item(s) |  |
| external_custody | external_pack | 清单=X_pool/Q，仅有证据的外部持有完整未用原包；来源责任独立保留S/F/O/T，不表征也不自动废弃。 | X_pool; Q; recipient; external_state; continuing_responsibility; cp_residual | 每参考流Item(s) |  |
| supplier_return | supplier_return_transport | 原始路段模式R_return=sum_t_s distance_t_s*reserved_capacity_t_s_pool/sum_b reserved_capacity_t_s_b；供应已归属模式R_return=provider_quantity，两者互斥；清单=R_return/Q。空载/闲置预留以实际距离及预留证据保留分配。 原始模式仅在PCR固定的质量约束/体积非约束kg或体积约束/质量非约束可用m3证据下合格；双/未知约束须核实供应已归属模式，否则不完整。 | distance_t_s; reserved_capacity_t_s_pool; reserved_capacity_t_s_b; provider_quantity; provider_attribution_mode; Q; cp_return_transport; binding_payload_mass_evidence; binding_cube_loading_position_evidence; nonbinding_other_constraint_evidence; raw_mode_eligibility; provider_physical_allocation; actual_stationary_idle_hours; actual_idle_fuel_in_contract | 每参考流vehicle*km |  |
| external_used | external_partial; external_spent | 外部各状态分别为X_partial/Q或X_spent/Q，仅实际有证据的电芯净kg；保留同原来源责任，撤销不新增实物外出。 | X_partial; X_spent; Q; recipient; external_state; continuing_responsibility; cp_residual | 分别每参考流kg |  |
| component_background | component_cell; component_board; component_assembly; component_inbound | 每组件c投入=sum_s n_s_c*F_s_c/Q，采用实际原Item(s)单位；逐原来源S/F/O/T和1。按相同交换/属性/单位合计核实组件原向量以重构原供应商收货口整向量；whole_mode_s=0排除同原整包F。下游组件S=sum_s n_s_c*S_s_c/Q乘同组件向量；O/T保留具名责任。禁止质量比例拆向量。 | whole_mode_s; n_s_cell; F_s_cell; S_s_cell; O_s_cell; T_s_cell; n_s_board; F_s_board; S_s_board; O_s_board; T_s_board; n_s_assembly; F_s_assembly; S_s_assembly; O_s_assembly; T_s_assembly; n_s_inbound; F_s_inbound; S_s_inbound; O_s_inbound; T_s_inbound; Q; supplier_component_vector_id; cp_components | 分别每参考流Item(s) |  |
| support_activity | broadband; payment; monitoring; bookkeeping | H_net_pool=sum_intervals subscriber_hours*reserved_display_m3_p/sum_all_b reserved_display_m3_b；N_pay_pool=sum_attempts payment_attempt_count*checkout_line_seconds_attempt_p/sum_all_b checkout_line_seconds_attempt_b；H_security_pool=monitoring_hours*protected_floor_m2_h_p/sum_all_b protected_floor_m2_h_b；H_admin_pool=实际直接事项processing_seconds_p/3600，加common_fixed_hours*reserved_display_m3_h_p/sum_all_b reserved_display_m3_h_b，直接/固定来源物理互斥。各具名服务分子仅除Q一次；已隔离回收计划改仅一次alpha。 | subscriber_hours; reserved_display_m3_p; reserved_display_m3_b; payment_event_id; original_pack_id; payment_attempt_count; checkout_line_seconds_attempt_p; checkout_line_seconds_attempt_b; attempted_authorizations; monitoring_hours; protected_floor_m2_h_p; protected_floor_m2_h_b; processing_seconds_p; common_fixed_hours; reserved_display_m3_h_p; reserved_display_m3_h_b; H_net_pool; N_pay_pool; H_security_pool; H_admin_pool; Q; cp_support_services | 分别每参考流h或Item(s) |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| specification | service_output; failed_pack | 确认四节实际未用LR6碱性电芯、原纸板包装完整BOM及SKU/GTIN；供应批次优先于代表目录。目录质量/容量不得用作实测流。 | 供应商签字规格/BOM、收货检验和校准计量 |
| reconstruction_inputs | effluent | 排他重构时，将reconstruction_full_liquid_inputs、dissolved_solids、opening_liquid_stock、closing_liquid_stock、source_pool_carrier_exports、evaporation逐项记实测kg、来源ID和不确定性。直接计量和重构不能混用。 | cp_hygiene全液体kg平衡和模式选择 |
| coverage | all processes | 签字调查路线能源、袋/包、纸芯、新增运输、真实事故和回收存在/不存在；不存在须证据，未知阻止完整性。未绑定行须直读身份和匹配供应/处理边界。 | 场址图、发票、计划/监管账、直读记录及逐行完成登记 |
| balances | all processes | 核对独立实物商品/待废物/旧电池/清洁来源平衡、S/F/O/T、原背景守恒、同单位母表及持久资产历史。对差异留解释和不确定性，不强制归零。 | 事件互斥、校准称重、全受益分配和原始版本账 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| identity_gate | all inventory rows | 完整数据集之前须将每条未核实行绑定到真实天工流和匹配属性/单位、类型、状态及供应/处理边界。保留历史身份观测局限。AC的供应地域/年份/电压/组合须另核实；通用UUID不提供电网模型。即使有通用UUID，准确产品规格、纸板全BOM及按包计数服务仍必需。 |  |
| closure_gate | all processes | 核对仅商品数量、新电芯数量、来源责任、全部废物库存/发运、小票纸、清洁配方来源质量及全受益方电表分配。数量、kg和服务Q不可互替。未知不为零；缺失不存在证据、未解决泄漏、供应缺口、无支持资产暴露或分母<=0均阻止完整归一化数据。记录实际不确定性和校准，不虚构数值验收限值。 |  |
| additional_gate | all processes | 声明完整性之前，每种实际新增材料、能源、包装、维修、运输或排放均须有具名状态特定原子卡、可执行原始协议和计算、责任及对齐中文。存在/不存在调查覆盖全部条件卡、零销量时段和第三方回收。候选方法不等于科学批准、法律合规、完整产品足迹或完整GHG标准符合性。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 指定实际包/路线的增量服务，并在下游明确加入S商品生产/入库；兼容同边界比较 |
| excluded_use | 缺少新增证据时的完整产品足迹、电池供电、整个62159或监管符合性 |
| required_metadata | SKU及实际GTIN; 电芯型号和LR6碱性化学体系; 恰好四节未用电芯; 原纸板包装完整BOM; 批次日期及实际质量记录; 实际混合商品组合证据; 到店常温仅用电路线调查; 收货口及原供应向量; 池/结账及退回追踪期; Q与全受益分配驱动量; S/F/O/T来源责任; 旧电池计划及互斥载体状态; 供应/处理/来源版本 |
| required_quality_disclosure | 未绑定行、原来源向量、完整资产/回收模型边界、不确定性及Q/迟延修订版本 |
| update_trigger | SKU/BOM/路线/供应方/资产寿命/回收/验收或来源边界变更 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-62159 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62159 | 仅CPC3.0范围361、383、464；较窄选择不等于全叶方法 |
| varta-catalogue-2025 | handbook | VARTA General Catalogue2025/26 pages19 and126–127; https://www.varta-ag.com/fileadmin/varta/consumer/downloads/general-catalogue/en/9018212241_EN_GC_AW2025-26_v01_SS-LQ_w-o-SHD.pdf | 代表4906 LR6四节消费订单04906 121414和纸板路线；仅规格，不是供应LCI/实际质量 |
| jrc-retail-2013 | official_guidance | JRC EUR25998EN2013 Best Environmental Management Practice in the Retail Trade Sector; PDF pages18–19,149–150,351,361–362; https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf | 仅零售能源、照明及废物覆盖语境；不采用基准数量 |
| ghg-product-2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011 chapter9 printed63/PDF65; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 先细分后因果分配；PCR公式是声明的前景设计，不宣称完整标准符合性 |
