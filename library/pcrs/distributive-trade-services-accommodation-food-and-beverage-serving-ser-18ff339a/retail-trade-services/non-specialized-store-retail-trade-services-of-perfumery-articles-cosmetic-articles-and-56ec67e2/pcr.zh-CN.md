---
status: candidate
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-perfumery-articles-cosmetic-articles-and-56ec67e2
language: zh-CN
sync_with: pcr.en-US.md
---

# 原纸包装无香皂条店内零售服务

## 1. 范围与适用性

本候选固定一个真实原厂固体皂条配置及非专营实体店路线。只建立可审核的部分零售增量方法；现场不存在任何预设活动量、LCI、科学审批或安全批准。配套补全是强制责任，不可把核心清单当完整经营。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-perfumery-articles-cosmetic-articles-and-56ec67e2 |
| classification_refs | CPC 3.0 62175；香水、化妆品及盥洗皂的非专营商店零售服务；UN解释注释指向货物类3532；建议narrower适用关系，另行经过映射接受程序。 |
| covered_products | 混合品类非专门实体店完整原纸包装无香皂条的有人收银及库存操作增量服务；每个同质池固定实际供应商配方、皂净重及纸包BOM。 |
| excluded_products | 排除液体皂、补充灌装洗涤剂、香水、气雾剂、试用品、分装、已开封或破损皂条、顾客使用、网上履约、送货到家和专营渠道；不声称覆盖全部3532货物。 |
| representative_product | 原纸包装无香皂条店内零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 门店收货门槛→常温原包货架库存→有人电子收银→实物交付顾客→确认最终验收；追踪原事件的退货及拒收。 |
| market_state | 固体皂化配方加完整印刷纸包；原包不等于气密密封或水分/挥发物损失为零；准入路线不进行开封、试用或洗涤。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 指定原纸包皂条的收货、货架保管及有人电子收银增量服务。 |
| How much | 一个最终有效验收的原皂条服务，按不同原皂条ID计数，不按皂质量或交易笔数。 |
| How well | 批次/配置正确，原纸包及皂条完好，实物已交付并验收，且不存在未解决的身份/状态争议；不代表科学或安全批准。 |
| How long or cycle | 事前冻结的同店同配置批次池；纳入全部营业、闭店、闲置及失败时段，直至结局关闭；迟发变化替换原池版本。 |
| reference_flow_link | accepted_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 原纸包无香5盎司皂条实体店零售增量服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | store_id; 实体非专营渠道; 原纸包装无香皂条; 实际UPC; 原厂批次; 配方版本; 纸包BOM版本; 收货门槛; pool_id; pool_version; 观察期间; 验收关闭; 配套模块完成状态 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | accepted_service | 物品数量 | Item(s) | 参考数量为1Item(s)，不是5oz或kg；service_denominator定义唯一Q。 |
| electricity_conversion | checkout_ac | 能量 | MJ | 实测kWh乘3.6为MJ；只转换一次，不改变公共分母。 |
| carrier_mass | condemned_pack | 质量 | kg | 实测同状态托运净kg，不以标称140g或数量替代，也不再扣库存。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 完整原皂条在实测收货门槛进入门店保管；识别供应商制造及入场运输源向量；数量账与背景责任账分开。 |
| starting_condition_role | 零售增量服务；成功货物的制造/入场负担不属于本服务，随货物进入下游货物系统。 |
| product_classification_scope | 仅限识别表所列原纸包固体皂条路线；非专营指混合品类经营，不是品牌授权状态。 |
| recursive_input_rule | 不递归增加成功货物生产或保管卫星输出；本排除不适用于failed_original_bar：其F源背景作为产品输入表征且仅计一次。 |
| upstream_dataset_requirement | 每个原完整皂条源V包含实际完整成品配方及原纸包制造，并在同一收货门槛计入不重叠的入场运输；成分表和标称净重不能量化V。 |
| disclosure | 核心清单是部分增量前景，不是完整门店经营；任何完整零售服务声明前必须完成下列配套补全；未绑定身份及缺失供应商/现场证据须明确披露。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| scope_gate | all inventory rows | 仅准入实体核实的原纸包装无香皂条、原纸包且完好的皂条及指定非专营路线。记录批号标签、实际皂净重和整包质量、纸包组成/印刷/胶及供应商完整成品配方/BOM。现行网页列的是投料成分并说明氢氧化钠反应消耗，不得把成品皂条建模为纯油或氢氧化钠。历史标签与当前网页属于不同版本；使用背景前核对实际批次，包括霍霍巴油/蜡命名。不得从成分排序、标称5oz/140g或网上运输重量推算成分质量分数或包材皮重。 | bronner-product; bronner-label; un-cpc62175 |
| state_gate | failed_original_bar; customer_pack; supplier_return; condemned_pack | cp_stock逐门槛记录实际完整性、水分变化、污染、缺失及事故历史。原纸包不能作为零排放假设。发生开封、纸包破损、断裂、洒漏、可测损失、疑似泄漏/挥发、试用或接水即暂停本路线完整性。纳入前须双语新增真实状态的原子载体及物种卡、单过程协议、质量/状态对账、最终接收方及完整处理/背景责任；物种、外排路径或状态未解决即阻断完整结果。进入店内空气不自动等于向室外环境的基本流排放。不得把开封皂强填为完好载体，也不能从无事故记录推断零。 | bronner-product |
| goods_responsibility | failed_original_bar; customer_pack; supplier_return; condemned_pack | cp_stock保留从收货到全部转售/退货事件的原源ID。将每个原整件源向量划分为最终S（验收货物）、F（服务失败/损失）、T（具名内部资产或供应商/其他接收方责任）、O（未结责任），份额和为1且互斥。本完好同质路线每个原皂条只有一个最终所有者，不按质量拆环境向量。failed_original_bar仅计实际N_F源等价完整皂条，供应商V及入场源仅一次。S只在另行声明的下游GOODS系统中增加一次。T保留具名接收责任方/源/版本；移交不产生新制造。O保持未解决并阻断完整表征。真实供应商退回实物流动与T责任互相独立。若组件有不同所有者，必须取得供应商已验证组件清单向量，新增真实组件输入卡并守恒原边界/源ID；这些部分从整包F排除。 |  |
| carrier_boundary | customer_pack; supplier_return; condemned_pack | 仅customer_pack和supplier_return是非表征实物保管卫星，并保留实际完好状态/接收方。condemned_pack是真实废物输出：直接计量完好皂条与原印刷纸包的托运净kg；仅在接收方签署接受精确皂/包材组成及状态、且处理数据集已验证覆盖完整载体时使用。许可证/照片本身不足。不得把已接受完整载体再次拆成皂及纸，也不得重复增加处理服务已含公用工程/运输。缺处理或拒收须实际去向并阻断完成；财务退款或在外保留的未验收皂条从不自动成为零售商废物。 |  |
| support_gate | all inventory rows | 完整服务报告前，cp_support必须盘点全部实际场所、货架、收银、ICT、网络、支付、安防、行政、清洁、资本及独立运输源。核心收银电力只覆盖其计量回路。对每个实际对象及组成生命周期阶段记录存在/不存在/未知、供应商边界和源ID。不存在须有覆盖全池的签署现场核查及设备/合同证据。未知阻断完成。真实建筑、照明、风扇/HVAC、货架、扫描/终端、路由器、摄像/存储、支付/行政后台及清洁不能因没有核心卡而消失。应用固定方法support_operating、support_assets、support_transport、support_cleaning及completion_join；数据包完整前新增具名真实原子卡和单过程协议。完整供应商套餐只有在实际签署范围、原分母及组成/阶段重叠检查齐备时才可保留为一个真实可测服务；互联网接入不暗含支付/行政/安防后台。本PCR不把边界/分配驱动量/分母的选择留给建模者。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| checkout | 验收及专用收银 | required | 全池 | foreground | Q |
| stock | 完整皂条库存及处置 | required | 全池 | foreground | Q |
| support | 配套源完成台账 | conditional | 完整性声明前必须盘点；实际交换新增原子卡。 | support_completion | Q |

### 过程：验收及专用收银 (`checkout`)

#### 输入

##### 产品流

###### 实测交流收银电力 (`checkout_ac`)

直接表计MJ跨越收银回路边界；保留原区间/源，按support_operating归属后计算E_core/Q。历史使用点交流电身份不提供供应商/电网/电压绩效。

- 选定流: 电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则: E_core/Q
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 从采集计算 (`calculated_from_collection`)
- 采集协议: `cp_electricity`
- 来源:

#### 输出

##### 产品流

###### 最终验收零售增量服务 (`accepted_service`)

一个最终有效验收原皂条ID的服务；service_denominator定义Q且只撤销一次原有效性。

- 选定流: 原纸包无香5盎司皂条实体店零售增量服务
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 从采集计算 (`calculated_from_collection`)
- 采集协议: `cp_service`
- 来源:

### 过程：完整皂条库存及处置 (`stock`)

#### 输入

##### 产品流

###### 失败原完整皂条源责任 (`failed_original_bar`)

收货门槛完整配方及原纸包源向量最终分配给F，按N_F/Q作为服务输入一次；本行不是保管卫星。

- 选定流: 收货门槛无香完整皂条及原印刷纸包
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: N_F/Q
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 从采集计算 (`calculated_from_collection`)
- 采集协议: `cp_stock`
- 来源: bronner-product; bronner-label

#### 输出

##### 产品流

###### 原纸包顾客总交付保管卫星 (`customer_pack`)

向顾客总实物交付的完好原纸包皂条，包括后来拒收或冲销事件，作为非表征保管卫星计数；它们不定义Q。

- 选定流: 向顾客交付的完好原纸包装无香皂条
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: H_customer/Q
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 从采集计算 (`calculated_from_collection`)
- 采集协议: `cp_stock`
- 来源: bronner-product

###### 实际完好供应商交付保管卫星 (`supplier_return`)

向具名供应商实际实物交付的完好原纸包皂条是非表征保管卫星；数量不自动指定T责任。

- 选定流: 向供应商退回的完好原纸包装无香皂条
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: H_supplier/Q
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 从采集计算 (`calculated_from_collection`)
- 采集协议: `cp_stock`
- 来源: bronner-product

##### 废物流

###### 运出的完好皂及原纸包废物载体 (`condemned_pack`)

运出的完好整皂及原印刷纸包直接净kg，排除托运外包装；carrier_boundary要求签署接收接受及匹配完整处理，不再次扣库存。

- 选定流: 接收方接受完整处理的判废完好原纸包装无香皂条皂条及原印刷纸包
- 流属性/单位: 质量 / kg
- 数量规则: W_dispatch/Q
- 数值来源模式: 计算值 (`calculated_value`)
- 适用范围: 场址特定 (`site_specific`)
- 归一化基准: 每参考流
- 基准类型: 参考流 (`reference_flow`)
- 证据类型: 从采集计算 (`calculated_from_collection`)
- 采集协议: `cp_stock`
- 来源:

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| support_operating | all inventory rows | cp_support按交换/属性/单位保留源分子池。优先对实际活跃工作分表计量；仅当父表确实包含子表时扣除子表。将活跃、闲置和固定部分拆成互斥、可测、同单位分子池，合计等于父池。活跃设备池按实测任务预约设备秒分配；闲置/固定收银、ICT及网络设备池按所有受益方实际预约设备秒分配，包括空置/闭店预约。场所照明/HVAC/固定运行池按实测服务面积m2乘时间h形成m2*h，分区/时段足迹互斥并明确空置预约。每池采用e_h/sum_all(e_h)，e在本池具有同一分配驱动量单位，总量须已知且为正，保留失败和零产出批次。绝不把秒与m2*h相加，也不把kWh当作分配驱动量相加。对网络连接小时服务，每个唯一实际连接区间k具有实测供应商network_source_hours_k，单位h；受益方h具有实测endpoint_reserved_connection_seconds_k_h，单位s。分配network_attributed_source_hours_k_h=network_source_hours_k*endpoint_reserved_connection_seconds_k_h/all_beneficiary_reserved_connection_seconds_k；分母为区间k内所有受益方实际预约端点连接秒的已知正和，包括空置和失败预约；份额和为1。先将这些实际源小时归属原SKU/池/版本；只有供应商证据已绑定精确最终所有者/池/版本时才跳过此归属，不能仅凭端点或托运归属跳过。唯一源连接服务只计一次；排除同一供应商范围已含设备电力或其他运行，不把连接服务h当作重叠的活跃/闲置/固定设备电力小时。支付授权尝试及行政批次为唯一共享事件：按事件内实际行级处理秒分配，各份额和为1且包括失败行；不得对每个SKU整笔计一次购物篮事件。安防拍摄按实际带时间戳的摄像视场受益方足迹m2乘覆盖h，分区/时段互斥并保留空置预约；冻结原源/池/版本映射，全部留存期间按原映射分配存储byte*h。实测GB=10^9bytes与GiB=2^30bytes有区别。缺因果证据应拒绝，不能回退为收入或销量分配。 | ghg-allocation |
| support_assets | all inventory rows | cp_support分别识别每个同质实际型号/BOM/范围资产向量V：完整建筑排除另行建模的货架、灯具/风扇/HVAC及电子设备，除非已验证包含；每个独立货架/固定设施/终端/路由器/摄像模块排除运行及已独立建模的维护/报废/运输。根据签署供应商范围声明完整套餐或互斥阶段模式，不得并用。每个资产及历史受益方期间h，电子设备e_h为实际任务预约设备h，建筑/固定设施/货架为实际占用服务m2*h，可复用清洁工具为实际清洁m2。预期L必须使用完全相同单位，覆盖所有受益方及全寿命。暂定f_h=e_h/L；保存全部历史分配，累计份额<=1，超1前修订L而不能删除服务区间。实际退役时将每条历史分配替换为f_final_h=e_actual_h/sum_all_h(e_actual_h)。对每个原池/版本记录delta_h=f_new_h*V_new-f_old_h*V_old，包括以前期间；包材、独立资产/维修/报废运输和整设备终端废物使用相同替换。剩余1-sum_old_f仅用于QA，绝非全压当前期的捷径。不得在更换/寿命修订后重启全制造，不得把不同型号合成一个Item(s)，也不得同时计制造和同一个完整生命周期套餐。实测完整终端载体已排除拆出部件；BOM重建是另行举证的互斥模式。套餐已包含的处理载体及供应商内部组件没有第二项前景废物。 | ghg-allocation |
| support_transport | all inventory rows | cp_support运输分配分三级：实测行程/路段源→实际托运/资产/材料源→最终S/F/T/O或首次使用/资产受益方期间所有者。保留attribution_level、精确源、所有者、池及版本。行程源使用实际车公里，包括实测空驶距离及闲置预约车辆h和非零燃料；不得以零载荷t*km将行程归零。装载容量分配仅在签署证据表明实际容积容量约束生效且实测质量未超限时，固定按该路段实占m3作为分配驱动量；若质量约束生效，完整性前须另行审核匹配质量容量路线，不能沿用此容积路线。全部受益方占用/预约m3份额和为1，空容量分配给有证据的预约受益方。供应商托运分配只消除重复行程份额；只有精确最终所有者/池/版本已分配量才跳过所有者份额。原货物运输随F份额，未用配套材料随首次使用所有者，资产运输随全部历史资产份额。使用供应商范围支持的实际距离及背景运输单位换算；实测燃料升或车公里不自动等于t*km。通过组成/时间/事件/阶段判断重叠，不能凭供应商ID不同排重。容量或空驶/闲置覆盖未知阻断完成。 |  |
| support_cleaning | all inventory rows | 实际清洁模块须按产品新增一个具体真实配方输入、独立入场供水、每种实际完整终端湿擦布/容器/液体废物载体，并具备接收/处理证据。cp_support将配方来源kg分到未用留存、用后留存、已运出擦布、已运出容器残留、冲洗液及确认损失，最终去向互斥；中间用后→冲洗为替换而非另一个去向。新增冲洗水/污物不计配方kg；完整湿载体kg独立实测，不能再次乘配方份额。未用输入库存保留原制造/入场源至首次使用；复用工具不重复制造/入场。入场水表已排除内部回用。直接污水模式仅为实际V_discharge*rho，密度须同状态实测，不是供水减回用/储存。本路线仅准入直接测量，不准用仅水量平衡重建完整液体载体。排水、喷雾/物种或载体组成未知，须在完整性前真实原子扩展。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | checkout | accepted_service | 验收账 | original_bar_id; acceptance_event_id; final_valid_acceptance; revocation_event_id; physical_return_event_id; event_time; pool_id; pool_version; financial_adjustment; failure_reason | 逐收银/退货扫描批次/源ID；保留员工及顾客验收记录；审核全部尝试和最终状态。 | Item(s) | 逐事件及每池关闭 | 完整原批次及迟发结局 | 收银及验收账 | 每参考流 | 收银责任人与独立库存负责人签署版本；源ID重复审计 |
| cp_stock | stock | failed_original_bar; customer_pack; supplier_return; condemned_pack | 源/状态及保管账 | original_source_id; lot; formulation_version; wrapper_BOM_version; actual_soap_net_kg; actual_whole_pack_kg; original_bar_id; event_id; event_time; intactness; moisture_change_kg; incident_status; final_recipient; S; F; T; O; V; ownership_version; G_open; G_close; received_count; physical_customer_return_count; physical_supplier_return_in_count; gross_customer_handover_count; supplier_handover_out_count; internal_transfer_out_count; condemnation_count; confirmed_missing_count; signed_unresolved_goods_residual; W_open; W_close; measured_condemnation_kg; other_measured_waste_receipts_kg; dispatched_net_kg; confirmed_missing_waste_kg; signed_unresolved_waste_residual_kg; consignment_id; receiver_signature; treatment_scope | 扫描/条码记录保管事件；检查实际纸包/皂体、供应商配方/BOM和收货重量；校准秤称实际完整废物净载体，排除托运外包装；保留秤校准/检重记录及接收接受证据。库存负责人调查数量/kg差异。 | Item(s); kg | 逐流动及事故；期初/期末及运出 | 全部收货、失败/退回/留存皂条及迟发更正 | 收货、货架、顾客及供应商门槛；待运废物位置 | 每参考流 | 库存责任人；校准秤；供应商签署范围/BOM；接收收据；不得推定零 |
| cp_electricity | checkout | checkout_ac | 直接表计账 | meter_id; circuit_boundary; parent_meter_id; included_submeter_ids; opening_MJ; closing_MJ; kWh; E_core; task_reserved_equipment_seconds; idle_reserved_equipment_seconds; fixed_reserved_equipment_seconds; all_beneficiary_ids; interval; calibration_id; uncertainty; pool_id; source_version | 每区间前后读取专用收银表；实测kWh乘3.6换MJ；技术人员核实回路覆盖及表计校准，收银员记录实际任务预约时间。应用support_operating并将所有份额与实际源MJ对账。 | MJ; kWh; s | 逐计量区间，包括闭店/闲置 | 完整池期间及失败区间 | 仅实际计量收银回路 | 每参考流 | 技术责任人；校准/序号；父子表对账及不确定性 |
| cp_support | support | all inventory rows | 配套补全登记 | object_id; model; BOM; lifecycle_stage; presence_status; absence_evidence; source_id; provider_scope; original_denominator; raw_or_normalized; raw_core_j_h; verified_raw_external_j_h; z_normalized_j_k; D_original_k; owner_fraction_k_h; Q_h; original_source_id; original_pool_id; original_version; attribution_level; overlap_key; exchange_identity; property; unit; active_source_numerator; idle_source_numerator; fixed_source_numerator; task_reserved_equipment_seconds; idle_reserved_equipment_seconds; fixed_reserved_equipment_seconds; facility_served_m2; duration_h; all_beneficiary_ids; empty_reservations; unique_connection_intervals; network_interval_id; network_interval_start; network_interval_end; endpoint_id; network_source_hours_k; endpoint_reserved_connection_seconds_k_h; all_beneficiary_reserved_connection_seconds_k; network_attributed_source_hours_k_h; payment_event_id; administrative_batch_id; line_processing_seconds; within_event_shares; camera_capture_source; capture_timestamp; field_of_view_m2; beneficiary_footprint_m2; coverage_h; frozen_capture_map_version; retained_bytes; retention_h; GB_or_GiB; V_old; V_new; e_h; L; e_actual_h; all_h; f_old_h; f_new_h; delta_h; retirement_event; terminal_whole_carrier_kg; trip_id; segment_id; vehicle_km; empty_km; idle_reserved_vehicle_h; measured_fuel; actual_binding_capacity; capacity_eligibility_evidence; occupied_m3; reserved_m3; mass_limit; actual_mass; actual_distance; final_owner; formulation_origin_kg; unused_retained_kg; used_retained_kg; dispatched_wipe_origin_kg; dispatched_container_residue_origin_kg; rinsate_origin_kg; confirmed_loss_origin_kg; wet_carrier_kg; V_discharge; rho; first_use_source_id; calibration_id; uncertainty; responsible_person | 现场工程师盘点全部源/对象，并比对签署合同/供应商原数据集；取得直接分表、实际预约/面积时间、实际网络区间/源小时（h）及全部受益方预约端点连接秒（s）、事件处理日志、视场映射、原存储留存及资产寿命历史。逐行程调查实际占用m3及载重；实称真实清洁输入/载体，并直接计量污水及同状态密度。部署前和每期末记录仪器单位/序号、可追溯校准及检查读数；历史负责人保留每次替换。不得使用无依据默认因子或不存在结论。 | 各来源原单位; s; h; m2*h; byte*h; m3; kg; vehicle-km | 逐事件、计量区间、唯一网络连接区间、拍摄区间、留存区间、资产修订及退役 | 完整池及全部受影响历史受益方期间 | 全部实际场所/供应商受益方及阶段 | support_operating；support_assets；support_transport；support_cleaning；completion_join；保留原量或先还原原D，再仅除一次最终Q | 现场工程责任人及独立审核人；全源对账、签署边界及具名双语原子扩展 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_denominator | accepted_service | Q=count(原池/版本中final_valid_acceptance=true的不同original_bar_id)。撤销即使没有实物退回，也仅取消一次最终有效性；保留验收的财务退款不取消。拒收、冲销、重试、实物退回、返工、缺失及内部移交为不同事件，关联同一原皂条。转售最多恢复一个最终服务。按门店/配置事前固定池，纳入全部失败/零销售期间，不能转移到成功月份；Q=0保持不可归一化并保留。迟发退货/撤销同时修订原分子、Q、S/F/T/O及源版本，绝不在新池重复计费。 | original_bar_id; pool_id; pool_version; final_valid_acceptance; acceptance_event_id; revocation_event_id; physical_return_event_id; financial_adjustment; event_time; failure_reason | Q；原版本替换 |  |
| stock_balance | customer_pack; supplier_return; condemned_pack; failed_original_bar | 仅货物数量平衡：G_close=G_open+received_count+physical_customer_return_count+physical_supplier_return_in_count-gross_customer_handover_count-supplier_handover_out_count-internal_transfer_out_count-condemnation_count-confirmed_missing_count+signed_unresolved_goods_residual。顾客总实物交付已含从未验收交付，不能再扣一次。无实物流动的撤销不是新出库。判废是货物→待运废物内部变化，不是实物运出。独立待运废物kg平衡：W_close=W_open+measured_condemnation_kg+other_measured_waste_receipts_kg-dispatched_net_kg-confirmed_missing_waste_kg+signed_unresolved_waste_residual_kg。通过事件ID及实秤关联condemnation_count与measured_condemnation_kg，绝不等同。直接dispatched_net_kg不能再扣期初/期末库存。数量和质量残差保留正负号并调查；未解决残差或未知背景所有者阻断完整结果。 | G_open; G_close; received_count; physical_customer_return_count; physical_supplier_return_in_count; gross_customer_handover_count; supplier_handover_out_count; internal_transfer_out_count; condemnation_count; confirmed_missing_count; signed_unresolved_goods_residual; W_open; W_close; measured_condemnation_kg; other_measured_waste_receipts_kg; dispatched_net_kg; confirmed_missing_waste_kg; signed_unresolved_waste_residual_kg; event_id | 独立goodsCount及held-wastekg对账 |  |
| core_amounts | checkout_ac; failed_original_bar; customer_pack; supplier_return; condemned_pack | 原核心分子保持原量：E_core=按support_operating归属的直接收银表计MJ之和；N_F=最终分配给F的原完整皂条，逐源仅一次；H_customer=完好皂条顾客实物总交付；H_supplier=完好皂条供应商实物交付；W_dispatch=同状态托运直接净kg。最终显示量分别为E_core/Q、N_F/Q、H_customer/Q、H_supplier/Q、W_dispatch/Q。当Q>0时accepted_service=Q/Q=1Item(s)。卫星交付绝不定义Q。F产品输入N_F/Q逐一关联供应商整源向量，不能用废物kg替代。V已含的入场运输从外部运输排除。 | E_core; N_F; H_customer; H_supplier; W_dispatch; Q; original_source_id; V; ownership_version | 核心每参考流数量 |  |
| completion_join | all inventory rows | 对最终原池h中精确相同且属性/单位兼容的交换j：R_j_h=raw_core_j_h+sum verified_raw_external_j_h+sum(z_normalized_j_k*D_original_k*owner_fraction_k_h)；final_j_h=R_j_h/Q_h。外部原始分子直接保留真实源归属；归一化模块先按有证据的原D、单位、源/池/版本还原。只有最终所有者/池/版本尚未分配才按support_operating/support_assets/support_transport乘owner_fraction；否则须精确证据方可取1。核心卡即使显示/Q仍保留raw_core_j_h，不能把归一化显示量当原量。求和前按真实源组成/事件/时间/资产/阶段排重；不同供应商ID本身不能证明互斥。逐行只相加相同兼容单位，绝不kg+MJ。历史池h的分子替换先完成，再仅除一次公共Q。必须新增真实卡/协议、验证绑定及供应商边界；禁止通用外模块卡。单独GOODS系统在服务责任守恒后只增加一次已验证S向量。 | raw_core_j_h; verified_raw_external_j_h; z_normalized_j_k; D_original_k; owner_fraction_k_h; Q_h; network_interval_id; network_source_hours_k; endpoint_reserved_connection_seconds_k_h; all_beneficiary_reserved_connection_seconds_k; network_attributed_source_hours_k_h; original_source_id; original_pool_id; original_version; attribution_level; overlap_key | 完整兼容交换的每参考流数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| source_quality | all inventory rows | 原厂网页/标签不建立量化LCI、包材皮重或现场数量。要求签署实际批次配方及包材向量/BOM、阶段覆盖、地理/时间、不确定性及保管照片/称重；披露原始证据版本冲突。 | 供应商原数据及实际批次记录 |
| calibration_quality | all inventory rows | 每项实测量保留仪器ID/单位、方法、校准有效性、检重/读数、采样覆盖、不确定性、原事件日期和责任操作人；完整结果前关闭全部缺口。不默认为零或采用无说明默认估计。 | cp_stock；cp_electricity；cp_support；签署对账 |
| translation_quality | all inventory rows | 逐行比对双语及实际生成投影的方向/类型、所选身份、单位、表达式、基准类型、条件、否定、协议原字段及公式输入。 | 双语解析比对加实质阅读 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| admissibility | all inventory rows | 要求scope_gate/state_gate、源/BOM证据和实际不开封路线观察；事故或供应商证据缺失为未知，不能当零。燃料/燃烧及制冷剂不属于准入常温核心；完整服务配套须有签署实际设备/建筑供应商记录，证明不存在未覆盖燃烧/制冷剂阶段，或有已验证覆盖的完整供应商套餐。存在未覆盖燃料/制冷剂须在完整性前新增真实物种/载体方法和双语原子扩展，不能使用默认排放因子。 |  |
| identity_gate | all inventory rows | 每条未绑定行分别保持未验证。表征前须绑定一份真实公开Tiangong原响应/收据，重算hash并核对观察UUID、官方双语名、流类型、方向、限定信息、介质/属性/单位链及背景阶段；身份绑定本身不证明数量、适用性或安全。服务输出须保持candidate未绑定，直至其实际输出行身份验证。外部标签即使形如UUID也不是Tiangong身份。 |  |
| closure | all inventory rows | 完整数据包要求Q>0、独立数量/kg平衡、闭合S/F/T/O源责任、直接表计及废物收据、完整配套盘点及源排重。保留全部失败及零产出池；有符号残差不能自动成为缺失数量、抵扣或零值。缺处理、状态载体、所有者、容量、测量、校准或寿命历史须拒绝完整性。报告部分范围及未解证据，不得声称完整经营。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分零售增量前景 |
| downstream_use | secondary_dataset；全部补全及身份门槛满足后方可作background_dataset |
| allowed_use | 同一实体店原纸包原纸包装无香皂条配置及门槛，披露池/版本特定补全。 |
| excluded_use | 本候选不支持完整经营、全3532、香水/分装/试用、安全/合规、供应商LCI或顾客使用声明。 |
| required_metadata | 全部必需限定信息、Q、原供应商/源版本、S/F/T/O、实际场所/渠道、完整配套范围、校准及责任更正。 |
| required_quality_disclosure | 候选未验证行身份；缺失前景/BOM/供应商/处理证据；部分范围、不确定性、零产出池及历史替换。 |
| update_trigger | 批次/配方/纸包、路线/状态、门店/供应商、源责任、验收结果、资产寿命/退役或新增实际交换变化。 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc62175 | official_guidance | UNSD CPC3.0 explanatory note62175 https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62175 | 官方宽统计边界指向货物3532，不要求方法覆盖整叶。 |
| bronner-product | handbook | Dr. Bronner OBBA05 Baby Unscented Pure-Castile Magic Bar Soap manufacturer specification https://www.drbronner.com/products/baby-unscented-pure-castile-bar-soap | 真实SKU/UPC、标称包装及所列投料成分；不提供量化LCI、实际批次验证或安全使用批准。 |
| bronner-label | handbook | Dr. Bronner historical label BSBA05US7-02 https://info.drbronner.com/wp-content/uploads/2016/11/bronner-US-bar-5oz-babyunscented-BSBA05US7-02.pdf | 历史5oz/140g固体皂标签、成分表及印刷纸包；必须与当前实际供应商批次/BOM对账。 |
| ghg-allocation | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011 chapter9 printed p63 https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅支持通用细分及基础物理关系优先序；精确分配驱动量及账簿方法为本PCR设计要求，不是来源原文强制或完整标准符合性声明。 |
