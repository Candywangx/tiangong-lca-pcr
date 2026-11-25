---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-transport-equipment-except-bicycles
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 非专门店原封GOR4PS手拉运输车套件柜台交付

## 1. 范围与适用性

本方法针对实际混合品类非专门店中一个指定完整手拉载货运输车套件的柜台自提。GOR4PS是非机动不可牵引运输车辆，园艺用途不能使其成为动力农业机械。UN62182纳入商品493/495/496/499但排除49921；本商品49930窄路线亦排除休闲船494和自行车。仅实际场址批次证据允许接纳数据。核心在执行补齐义务前明确为部分，不得作为零售商完整足迹宣传。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-other-transport-equipment-except-bicycles |
| classification_refs | CPC3.0 62182；通过商品组499及子类49930建议narrower适用关系。外部已接受映射及其决策引用决定选择。 |
| covered_products | 一个同质的实际GOR4PS原厂完整盒装套件版本及批次：非机动、不可牵引、直拉手柄四轮载货车，含聚合物车斗、涂层钢架和充气轮；门店交付时原封且未组装。 |
| excluded_products | 自行车49921；休闲运动船494；玩具；载客车辆；机动或可牵引车；其他型号；已组装、演示、维修、缺件或开封套件；门店或售前轮胎充气或改变有证据的原厂轮胎状态；配送、安装、顾客出行和后续使用维护。 |
| representative_product | Gorilla GOR4PS，实际供应版本与手册182228A匹配；保留批次特定车轮、紧固件版本及完整零售包清单。网页规格和备件列表不能证明完整定量BOM。 |
| production_route | 实际混合品类非专门实体店：接收原封原厂纸箱，干燥常温储存与人工搬运，电子结算，顾客柜台自提。核实品类组合、场址与渠道，不能仅凭品牌授权。 |
| market_state | 未用原厂完整未组装套件，含全部原厂车斗车架、车轴转向、翻斗锁扣、手柄、四个匹配车轮组件、紧固件、说明书和完整包装。不销售散件，也不采用标称载荷作单位。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供指定完整盒装载货运输车套件的零售可得性、保管和柜台交付。 |
| How much | 一个最终有效验收的原始套件服务，按原始套件ID仅计一次；Q为池总量。 |
| How well | 买方验收正确原封完整供应配置和纸箱状态，须有实际交付验收证据；不声称已经测试载荷能力、道路合法性、适用性或安全使用。 |
| How long or cycle | 一个事先定义的场址配置日历年度池，包含零销售尝试及对原池的后续退货更正；实际保管时长须计量。 |
| reference_flow_link | service_pickup |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一套原封完整GOR4PS运输车套件的零售自提服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际门店及混合品类; GOR4PS区域版及原批次ID; 完整套件与全部包装BOM; 原四轮BOM版本及原箱装箱声明; 原封未组装未用状态; 接收与自提门槛; 池期间及验收审计截止日版本; 原始ID最终验收账; 无门店组装或售前轮胎充气; 全部设备燃料及制冷剂缺席证据; 部分核心状态及已补齐模块登记; 背景源门槛归属版本; 实测分母Q |

必需限定信息须随实际数据元数据及源记录提供。未绑定服务身份是候选身份缺口，不允许替换为商品制造。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| measure_count | service_pickup; failed_kit; customer_return; customer_handover; supplier_handover | 物品数量 | Item(s) | 按count_service及stock_goods计完整原套件或事件；服务数量与实物总保管数量不同。所有清单行每参考流。 |
| measure_ac | retail_ac | 净热值, 低位热值 | MJ | 按cp_power记录kWh；1kWh=3.6MJ；source_drivers得到每参考流最终E_AC/Q。 |
| measure_waste | waste_kit | 质量 | kg | 按cp_waste实际称量同状态完整载体净量；Item(s)报废通过实际ID独立关联，禁止默认kg/item。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 零售商实际接收完整原封原厂盒装GOR4PS套件；源制造另定在供应商发运门槛。 |
| starting_condition_role | 具有互斥原始源责任的零售保管门槛。 |
| product_classification_scope | CPC3.0 62182中商品49930窄部分；自动分类选择要求外部已接受映射。 |
| recursive_input_rule | 从零售服务排除成功S制造。F须纳入实际failed_kit产品输入；仅保管附属行无新增制造。 |
| upstream_dataset_requirement | 经核实实际完整供应商发运套件向量BOM、独立入场源及最终归属历史；原厂商品网页不是LCI数据集。 |
| disclosure | 部分增量核心；完整服务使用要求boundary_completion、completion_restore、Q审计版本及全部未解决身份范围披露。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_scope | all inventory rows | 起点为零售商实际接收完整原封套件。核心清单包含接收、储存、结算及残余物搬运分配后的使用点交流电、失败原套件在供应商发运门槛的制造，以及实际整套废物外运。满足boundary_completion前，这是部分增量零售服务核心。成功商品S制造不属于本服务，可在另行声明的下游GOODS系统中仅纳入一次。 | ghgp-product-2011; jrc-retail-2013 |
| boundary_model | all inventory rows | 分别冻结实际GOR4PS区域版：GOR4PS、-C及AU不可互换；批次<335623的TW0345-3与TW0377车轮必须按实际批次和全部四个车轮组件核实，不得视为一个源向量。实际原箱装箱记录及供应商签署声明须确立未组装套件内容，网页组装图不能确立原封箱内物。仅接纳具有供应商签署清单的实际GOR4PS批次，覆盖全部车件、涂层、轮辋轮胎内胎气门版本、紧固件、说明书以及纸箱内衬扎带标签胶黏剂。每原套件选择一个完整供应商发运制造向量，或经核实的互斥原始组件向量重建，两者不得并用。原厂规格证明对象和手拉载货车辆用途，不能证明现场数量、完整BOM或LCI、合规或审批。载荷、网页重量和组装尺寸不能代替实收套件数量、净载体质量或纸箱体积。 | gorilla-gor4ps; gorilla-gor4ps-manual; un-cpc49930 |
| boundary_state | all inventory rows | 接纳须有批次装箱确认，并在接收及每次顾客或供应商交付时原封完整。外观受损但仍原封完整的拒收套件，仅当全部原配置仍在一起时可使用waste_kit。开封、缺件、已组装、演示、换胎、门店或售前轮胎充气、维修或湿污商品，在完整性成立前须增加状态特定原子卡、守恒原始向量并双语同步；不能消失或改称原封。原厂轮胎可能已有气体：须采集实际批次原厂轮胎状态及压力封闭证据，不能推断原厂无气或排除原厂充气状态。本PCR不声称任何交易实际发生。 | gorilla-gor4ps; gorilla-gor4ps-manual |
| boundary_route | all inventory rows | 该窄路线采用人工搬运、电子凭证、电网交流电和非制冷常温储存。场址负责人须覆盖全期间全部实际设施、自有、租赁和服务商控制设备：照明、风机、供暖空调、搬运、结算、ICT、安防、清洁、备用电源和消防设备。完整带日期设备与服务日志须证明范围内无现场燃烧、燃料、含制冷剂运行或释放、门店组装或售前轮胎充气以及纸袋发放。存在或未知时不得认定该路线完整；须经审查双语修订增加实际物种、状态、介质方法和卡片，或使用适用PCR。上游合同运输中的燃料排放仅可包含于已核实完整供应商边界。 | jrc-retail-2013 |
| boundary_satellites | customer_return; customer_handover; supplier_handover; failed_kit; waste_kit | 仅customer_return、customer_handover和supplier_handover是无额外制造表征的实物保管产品附属行。原始收货保留为QA。failed_kit是真实表征的产品输入，承接原始F制造，绝不能因附属行排除。waste_kit是须完整匹配处理的表征废物输出。背景归属T不能凭空形成实物流转；无论验收是否有效，均使用实际接收方、状态和事件。 | ghgp-product-2011 |
| boundary_completion | all inventory rows | 完整服务使用前，采用cp_completion及completion_restore、source_drivers、asset_history、transport_chain逐一清查必要遗漏源。必须补齐的对象为入场、退回、废物和资产运输；建筑及含照明风机的固定设施；货架托盘人工搬运器具；结算、ICT、路由器、网络、摄像及存储；支付与行政后台；清洁供水、实际洗剂及可重复清洁工具生命周期；辅助包装及实际相关废物。每个实际同质对象分别建立具名原子卡（building_model_life、lamp_model_life、fan_model_life、rack_model_life、handling_model_life、checkout_model_life、ict_model_life、router_model_life、camera_model_life、storage_service、network_access、payment_processing、admin_processing、water_in、detergent_formula、cloth_model_life、cleaning_effluent，另加实际源特定包装废物运输）。这些是补齐角色名，不是本核心已提供的虚构交换。记录实际型号组成状态、流类型方向属性单位、原始分子、供应商边界、相关协议和冻结归属。拆分异质型号、配方及去向；真实有文件的完整生命周期或服务包可在明确组成与排除后保持完整。保留签署的存在、缺席、未知矩阵；缺席须证据，未知阻断完整性。在同步和检查前，双语编写必要实际卡、绑定身份、核实处理及背景范围。不能只追加无定量模块清单。 | jrc-retail-2013; ghgp-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 原封套件零售保管自提 | required | 实际接纳混合门店路线及事先定义池 | 增量零售核心 | service_pickup |
| residual | 整套拒收套件残余外运 | conditional | 实际原封完整套件报废并获完整载体处理接受；缺席须cp_waste零事件证据，未知阻断完整性 | 废物保管及外运 | service_pickup |

### 过程：零售保管自提 (`retail`)

#### 输入

##### 产品流

###### 失败原始完整原厂盒装GOR4PS套件 (`failed_kit`)

最终归属F的原套件供应商发运制造在此进入增量服务边界。原整车、车轮组件、紧固件及包装保持一个匹配完整向量；失败实物保管与废物载体kg另外记录。

- 选定流：供应商发运的完整原厂盒装未组装GOR4PS运输车套件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 单位组：数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：N_F/Q
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_original`
- 来源：`gorilla-gor4ps`; `gorilla-gor4ps-manual`

###### 顾客实际退回的原封完整套件 (`customer_return`)

实际完整原封套件返回门店保管门槛。实物退回事件独立于金额及最终验收计数；制造由原始源承接，此处不再增加。

- 选定流：顾客退回的原封完整GOR4PS运输车套件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 单位组：数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：U_customer/Q
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_events`
- 来源：`gorilla-gor4ps`

###### 零售商使用点交流电 (`retail_ac`)

计量交流电供应有文件门店线路边界内的人工保管支持、照明风机、结算ICT及残余物搬运。allocation_utilities固定互斥实际源归属；供应商包须证明其用电范围以免重叠。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组：能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则：E_AC/Q
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_power`
- 来源：`jrc-retail-2013`

#### 输出

##### 产品流

###### 最终有效验收零售自提服务 (`service_pickup`)

输出是一个原套件的有界零售服务，不是运输车制造流、载荷或出行服务。在声明审计截止时计数最终有效原套件不同ID；后期撤销验收即使无实物退回也须撤销原服务。

- 选定流：一套原封完整GOR4PS运输车套件的零售自提服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 单位组：数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：1 Item(s)
- 数值来源模式：固定值 (`fixed_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：方法公式 (`method_formula`)
- 采集协议：`cp_events`
- 来源：`ghgp-product-2011`

###### 原封完整套件顾客总交付 (`customer_handover`)

全部实际完整原封套件顾客出口仅记录一次，含从未验收的交付及后期外部保留失败。该实物附属行不能缩减为最终有效服务Q，也不增加成功商品制造背景。

- 选定流：向顾客交付的原封完整GOR4PS运输车套件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 单位组：数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：H_all/Q
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_events`
- 来源：`gorilla-gor4ps`

###### 向供应商实际退回原封完整套件 (`supplier_handover`)

计数实际向具名供应商流转的完整原封套件。保留接收方状态及保管证据；仅另有签署原向量承责协议时源责任转T，不能仅因实物退回或退款而转移。

- 选定流：退回供应商的原封完整GOR4PS运输车套件
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 单位组：数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159`
- 数量规则：R_supplier/Q
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_events`
- 来源：`gorilla-gor4ps`

### 过程：整套拒收套件残余外运 (`residual`)

#### 输入

#### 输出

##### 废物流

###### 整套拒收原封套件及原包装载体 (`waste_kit`)

实际未改变的完整拒收运输车套件及原纸箱内衬紧固件，仅在接收方签署实际组成状态接受且匹配完整处理后，作为一个完整混合载体外运。直接联单净kg确立数量，不用目录套件重量、组件之和或库存扣减。

- 选定流：含原包装的废弃原封完整GOR4PS运输车套件
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组：质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则：W_dispatch/Q
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：由采集计算 (`calculated_from_collection`)
- 采集协议：`cp_waste`
- 来源：`jrc-retail-2013`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| ownership_original | failed_kit; customer_return; customer_handover; supplier_handover; waste_kit | 对供应商发运门槛的每个原始同质套件源s，在互斥S/F/T/O归属间守恒原始制造向量V_s及源ID版本，各份额和为1。S为最终有效顾客商品，F为销毁、确认失踪或无服务失败且由零售商承责的原始背景，T为供应商、内部或其他系统明确确认承担的责任，O为待定库存或未解决责任并结转。完整原套件为0或1归属。不得按组件质量或数量拆分V_s。真实拆分须供应商原始组件数量及环境向量、逐组件S/F/T/O、F的独立实际产品输入卡，并从failed_kit排除这些向量。F含原始失踪或外部保留的失败商品，不仅是零售商废物；不得重复计入最终转售制造。入场运输在接收门槛具有独立源，跟随同一最终原始归属；发运制造排除入场运输。供应商退货改变保管，但仅签署承责后背景才转T；否则按证据保留O或F。 | ghgp-product-2011 |
| allocation_pools | all inventory rows | 事先冻结一个实际场址、GOR4PS版本、年度池、受益者映射和更新版本。包含收货失败、拒收尝试、重复搬运、停业闲置及零销售期间，不能只保留成功交易。Q为零的池保留全部原始负担且不可归一化，不得静默删除。重启和后期撤销验收须替换原Q、源去向及每个原归属分子；不能再向新批次重复收费。优先直接计量划分；每个完整源池的份额须在含失败空置预约的全部实际受益者间和为1。禁止默认价格或销量分配驱动量。 | ghgp-product-2011 |
| allocation_utilities | retail_ac | 对互斥实测交流电源池采用source_drivers，不混合分配驱动量维度。运输车搬运或结算活动线路使用该源中实测运输车任务设备秒数占全部实际任务设备秒数；结算和ICT设备闲置固定部分使用实测预约设备秒数占包括失败空置预约的全部实际预约设备秒数。设施照明风机使用受益者受服务占地m2乘覆盖时长h，占全部受益者及明确预约空置区域总量。分配前拆分设备与设施池。逐kWh池及全部归属电量须与实际父表对账；仅父表确实包含子表时扣除，独立互斥表不得再扣。外部包中的电力仅在组成、期间、线路边界有文件时从retail_ac排除。 | jrc-retail-2013; ghgp-product-2011 |
| allocation_asset | all inventory rows | 对遗漏资本及完整生命周期包采用asset_history。各实际同质型号、BOM和范围向量独立。原池实测暴露量e_recorded除有证据的预期全寿命暴露L_expected得到暂定f；累计f不得超过1，L未知或不足须审查。建筑主体结构包采用受服务m2*h（排除另建模灯具风机及其他设备），货架托盘采用占用m2*h，搬运设备采用实测使用设备秒，灯具风机结算ICT路由摄像设备采用实测预约设备秒，可重复清洁布采用实测清洁m2。制造、安装、运行、维护及寿终范围须互斥。退役时最终E为全部历史受益者实际暴露之和，f_final_h=e_actual_h/E。对每个历史归属池版本替换f_old_h*V_old为f_new_h*V_new并记录差额；1-sum_old_f残余仅作QA。资产运输维修寿终首先归属该资产，再跟随相同历史份额和版本替换，除非已经归属到精确最终归属池版本。禁止全向当前退役Q收费、重复完整包内寿终载体、在寿命份额外另加采购输入，或将无关维修质量之和冒充整设备。 | ghgp-product-2011 |
| allocation_services | all inventory rows | 场外网络、支付、行政及安防源使用service_ownership。互联网接入不能证明包含支付行政存储后台。网络源小时必须有一个真实区间和供应商分母，按各受益者实测预约端点连接秒占包括失败空置预约在内全部受益端点秒分配；保留原始sourceh和唯一区间。一个共享篮子支付尝试或行政批次为一个事件，按实测事件内部行处理秒分配且份额和为1；仅源标签不能将整个事件全部归属。摄像采集须冻结实际带时间戳视场内受益者占地乘覆盖时长、互斥区域时间和全部受益者空置预约；存储byte*h跟随原始冻结采集映射，不随日后销售变化。1GB=10^9字节，1GiB=2^30字节。活动闲置固定源子池分别保持一种因果同单位驱动量。仅证明精确最终归属池版本已分配时才免重复归属份额。 | ghgp-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_events | retail | service_pickup; customer_return; customer_handover; supplier_handover | 原套件保管验收账 | original_kit_id; GOR4PS_variant; regional_variant; lot_id; four_wheel_BOM; carton_packing_declaration; wheel_revision; full_supplier_BOM; original_closure_state; factory_tyre_state; factory_tyre_pressure_evidence; no_presale_inflation_log; site_assortment; pool_dates; original_pool_id; audit_cutoff; acceptance_event_id; final_valid_acceptance; revocation_event_id; physical_event_id; recipient_id; physical_state; financial_only; G_open; R_new; U_customer; I_in; G_close; H_all; R_supplier; I_out; C_condemn; M_goods; epsilon_goods | 保管人在接收、每次实物交付退回及期初期末扫描唯一纸箱批次ID并盘点；买方记录实际验收原因；财务另标纯财务变动。核对封口与供应商装箱声明，不能声称未开封检查已证明每个内部零件。 | Item(s) | 每事件及每日对账；审计截止及每次后期退回更新 | 事先完整池及关联前后期更正 | 实际混合品类店接收储存自提柜台 | 每参考流 | 保管验收签署、带日期盘点、缺失ID调查、计量负责人核查数量完整性 |
| cp_original | retail | failed_kit | 原始源责任登记 | original_kit_id; source_id; source_version; source_gate; original_owner; original_pool_id; n_original_s; V_s; full_supplier_BOM; f_S_s; f_F_s; f_T_s; f_O_s; signed_T_receipt; physical_event_id; physical_state; recipient_id | 供应商标识发运门槛完整原套件制造向量及含包装完整批次BOM；分析员跟踪每原ID的验收、失踪、报废和签署转移。核对全部组件及包装范围，禁止网页重量背景。 | Item(s) | 每源收货去向变动及池对账 | 原始源跨全部池更正的完整历史 | 供应商发运证据关联零售门槛及最终接收方 | 每参考流 | 供应商签署向量BOM、S/F/T/O和为1、承责及历史替换审计 |
| cp_power | retail | retail_ac | 实际电力源线路记录 | meter_id; parent_meter_id; child_contains; source_subpool_id; source_mode; start_time; end_time; kWh_j; task_device_seconds; reserved_device_seconds; served_m2_h; d_pool_j; sum_all_d_j; empty_reservation; beneficiary_id; included_external_scope; E_AC | 能源负责人全期含停业读取经校准结算或子表。活动设备任务计时、固定闲置设备预约时间与设施测绘服务面积时间分开记录。线路图证明包含关系，不能以运输车载荷或设备标称功率代替实测耗电。 | kWh; s; m2*h | 每计量间隔及任务预约；每月账单对账 | 池全部运行闲置停业失败间隔 | 零售商实际电网入场及具名互斥线路 | 每参考流 | 校准证书、零点时间检查、账单线路对账、全部份额和1；缺间隔阻断完整性 |
| cp_waste | residual | waste_kit | 原封完整拒收套件载体联单 | waste_event_id; original_kit_id; physical_state; actual_constituents; original_pack_present; dispatch_consignment_net_kg; tare_kg; W_open; W_condemned; W_other_in; W_close; W_transfer; M_waste; epsilon_waste; C_condemn; carrier_net_kg_same_ID; receiver_id; signed_acceptance; treatment_scope; transport_scope | 废物负责人在外运时用经校准秤称量每个实际完整原封套件及原包装载体，采用实际皮重及可得接收方称量。独立计量同ID报废净kg及暂存库存。接收方须签署实际钢材聚合物橡胶包装组成状态并匹配完整处理边界；仅照片许可不足。 | kg; Item(s) | 每报废外运及期间边界盘点 | 全部产生暂存转移外运载体，即使Q为零 | 实际零售商废物暂存点至签署接收门槛 | 每参考流 | 称量单校准、保管链、接收方接受处理合同、失踪废物调查 |
| cp_completion | retail | all inventory rows | 实际遗漏源范围矩阵 | object_id; actual_model; composition_state; object_presence; absence_evidence; site; event_time; period; provider_id; actual_constituents; lifecycle_stage; exchange_identity; flow_type; direction; property; unit; raw_numerator; module_mode; z; D; source_id; original_owner; original_pool_id; source_version; attribution_level; included_electricity; included_transport; included_maintenance; included_treatment; unknown_scope | 场址负责人结合供应商发票合同及公用工程图逐设施设备服务现场清查；分析员逐boundary_completion对象登记实际原子交换或有证据缺席，并在数据完整性前映射到各自精确过程卡。检查供应商组成事件期间生命周期排除，不能只信供应商标签。 | 逐实际交换分别采用其单位 | 采集前、每变更、期末审计 | 完整源期间及追溯版本 | 全部实际必要场址和合同支持范围 | 每参考流 | 签署存在缺席未知矩阵、重叠映射、合格身份、实际卡协议及单位对账 |
| cp_assets | retail | all inventory rows | 实际寿命暴露及修订历史 | asset_id; actual_model; full_BOM; scope; lifecycle_stage; V_new_a; V_old_a; e_recorded_a_h; exposure_unit; L_expected_a; expected_life_evidence; e_actual_a_h; E_a; f_new_a_h; f_old_a_h; original_owner; original_pool_id; source_version; installation_event; maintenance_event; terminal_carrier_kg; acquisition_stock; retirement_stock; attribution_level | 资产保管人按allocation_asset逐原期间用几何时间任务日志计量服务占用m2*h、设备使用预约秒或清洁m2。保留完整型号特定供应商向量排除、预期寿命证据和全部既往分配；实际退役重开每个历史记录。灯具风机资本采用实测预约设备秒，与设施运行电力m2*h池独立。校准面积时间秤并保留替换审批。 | m2*h; s; m2; kg；每向量单位分别保留 | 每暴露期间、采购维修、寿命修订及退役 | 全部历史受益者至实际最终寿命 | 建筑固定照明风机、货架搬运、结算ICT路由摄像及清洁工具 | 每参考流 | 资产账、实测暴露、同单位寿命支持、全历史替换及源范围审计 |
| cp_services | retail | all inventory rows | 网络、篮子行政及原始摄像记录 | provider_id; actual_constituents; unique_interval_id; interval_start; interval_end; sourceh_interval; endpoint_id; endpoint_seconds_pool; sum_all_endpoint_seconds; empty_reservation; event_id; raw_event_quantity; line_processing_seconds_pool; sum_event_line_seconds; footprint_duration_pool; sum_all_footprint_duration; capture_timestamp; disjoint_zone_time; capture_map_version; captured_source_bytes; retention_h; byte_unit; original_owner; original_pool_id; source_version; attribution_level | IT支付安防负责人导出实际端点连接预约及每个唯一支付尝试行政批次处理日志。测绘带时间戳摄像视场和互斥受益者占地含空置预约，冻结原采集映射及留存字节时间。与完整供应商分母计费源区间对账；标称带宽或后期销量不能确立份额。 | h; s; byte*h；实际事件单位分别保留 | 每唯一区间事件采集及留存更新 | 完整供应商期间含失败空置间隔 | 网络、场外支付行政处理和摄像存储供应商 | 每参考流 | 时间同步、保留原始映射、事件份额和1、完整分母核实 |
| cp_transport | retail | all inventory rows | 实际运输源及分层归属 | trip_id; segment_id; raw_trip_source_j; actual_load_kg_c_j; sum_all_load_kg_j; actual_occupied_m3_c_j; sum_all_occupied_m3_j; capacity_evidence; binding_constraint; vehicle_km; vehicle_h; reserved_capacity_distance; reserved_capacity_h; all_beneficiary_driver; provider_coverage; actual_fuel; owner_fraction_c_h; attribution_level; original_owner; original_pool_id; source_version; loaded_empty_idle_scope | 物流负责人取得路段货单、实际托运尺寸称量、容量约束、空驶GPS距离和静止怠速计时及完整燃料供应商范围。先追踪行程至实际商品材料资产，再至最终原始F、首次使用或历史资产归属；供应商证据须明确已应用哪一层。 | kg; m3; vehicle-km; vehicle-h；实际供应商单位分别保留 | 每载货空驶怠速路段及源发票 | 未在原发运向量或现有包中包含的全部运输阶段 | 供应商至门店、退回、清洁包装补给、资产事件及废物接收运输 | 每参考流 | 实际容量适用证据、货单、质量体积计时校准、完整驱动量及重叠对账 |
| cp_materials | retail | all inventory rows | 实际清洁及辅助材料账 | source_original_kg; source_original_count; source_quantity_unit; D_c; u_first_c_h; f_preuse_c_h; a_use_c_h; a_preuse_c_h; V_manufacture_c; V_inbound_c; first_use_event; unused_sealed_kg; unused_opened_kg; unused_damaged_retained_kg; first_used_cumulative_kg; preuse_dispatched_source_kg; preuse_confirmed_missing_source_kg; neverused_transfer_source_kg; signed_unused_residual_kg; consumed_no_recoverable_source_kg; used_retained_working_source_kg; used_retained_container_source_kg; used_damaged_retained_source_kg; dispatched_container_residue_source_kg; rinsate_origin_source_kg; used_transfer_source_kg; postuse_confirmed_loss_source_kg; signed_used_residual_kg; V_discharge; rho_measured; supply_meter_m3; cleaned_m2; source_id; source_version; original_owner; original_pool_id; attribution_level; Q; actual_formula; actual_package_BOM; actual_carrier_state; receiver_treatment_scope; historical_state_version; original_record_replaced | 清洁材料负责人用校准秤逐实际配方包装计量接收、首次使用及最终去向，将未开封、已开封、受损未用库存及全部已用最终源去向保持互斥；每次使用状态变化更新完整原历史及旧源归属池版本。读供排水表并同期测量同载体密度，采集实际湿载体及接收方接受。将可重复工具实测清洁面积关联cp_assets。 | kg; Item(s); m3; kg/m3; m2 | 每源使用外运、每计量间隔及库存边界 | 完整实际材料源历史至最终去向 | 门店清洁辅助包装及实际接收方 | 每参考流 | 校准密度状态记录、源与实物载体独立对账、签署接收范围 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| count_service | service_pickup | Q为原池在审计截止时final_valid_acceptance=true的不同original_kit_id数量。后续撤销即使无实物流动也重分类原ID。验收仍有效的退款折扣不改变Q。退回再售的一个原ID最多贡献一次最终有效数量；不得从已最终有效计数再扣撤销。Q>0时service_pickup=Q/Q。 | original_kit_id; final_valid_acceptance; audit_cutoff; original_pool_id; acceptance_event_id; revocation_event_id; physical_event_id; financial_only; Q | service_pickup | ghgp-product-2011 |
| stock_goods | customer_return; customer_handover; supplier_handover; failed_kit | 仅商品数量平衡：G_open+R_new+U_customer+I_in=G_close+H_all+R_supplier+I_out+C_condemn+M_goods+epsilon_goods。H_all包含全部顾客实物总交付（初验收及从未验收）且事件ID互斥；不得另加失败交付出口。U_customer记录实际完整退回入口。无移动撤销不是另一出口。C_condemn为商品内部转为暂存废物；实际废物外运不得再次扣商品。M_goods为确认失踪数量，epsilon_goods为带符号未解决数量残差，两者明确保留；内部转移不产生服务。 | G_open; R_new; U_customer; I_in; G_close; H_all; R_supplier; I_out; C_condemn; M_goods; epsilon_goods; physical_event_id; original_kit_id | goods_balance | ghgp-product-2011 |
| background_f | failed_kit | 对原套件源s，N_F=sum_s n_original_s*f_F_s；failed_kit=N_F/Q。n_original_s为实际完整原套件数量，f_F_s依ownership_original。供应商发运V_s仅连接一次；不同源向量保持独立型号批次队列。原始源等效数量不是废物kg或新实物收货。S/F/T/O及F修订替换旧源记录。 | n_original_s; f_F_s; f_S_s; f_T_s; f_O_s; V_s; source_id; source_gate; original_owner; original_pool_id; source_version; Q | failed_kit | ghgp-product-2011 |
| custody_amounts | customer_return; customer_handover; supplier_handover | customer_return=U_customer/Q；customer_handover=H_all/Q；supplier_handover=R_supplier/Q。采用stock_goods实际完整原封套件实物事件总量，并逐事件记录接收方与状态。失败外部保留仍属于H_all，只改变验收背景，不成为另一实物出口或零售商废物。 | U_customer; H_all; R_supplier; physical_event_id; recipient_id; physical_state; Q | custody_quantities | ghgp-product-2011 |
| source_drivers | retail_ac | 对每个互斥计量源子池j，A_j=kWh_j*d_pool_j/sum_all_d_j；仅有实测范围证据时直接归属源可为份额1。d按allocation_utilities固定：活动设备实际任务设备秒、闲置固定设备预约设备秒或设施受服务m2*h。sum_all_d_j须已知且为正，涵盖全部失败空置受益者。E_AC=3.6*sum_j A_j；retail_ac=E_AC/Q。原始kWh_j与归属A_j分别保留，不混合维度驱动量。 | kWh_j; d_pool_j; sum_all_d_j; source_subpool_id; source_mode; parent_meter_id; child_contains; task_device_seconds; reserved_device_seconds; served_m2_h; E_AC; Q | retail_ac | ghgp-product-2011 |
| waste_dispatch | waste_kit | W_dispatch为未改变的完整原封套件加原包装载体实际外运联单净kg之和；waste_kit=W_dispatch/Q。直接称量外运kg不得再扣期末库存、回用库存或源组成。独立暂存废物kg校验：W_open+W_condemned+W_other_in=W_close+W_dispatch+W_transfer+M_waste+epsilon_waste。通过同ID实际载体净称量，将C_condemn的Item(s)与W_condemned的kg关联，禁止标称车重。M_waste是确认失踪的暂存废物kg，epsilon_waste为另一个带符号未解决残差，二者都不能虚构处理。 | dispatch_consignment_net_kg; W_open; W_condemned; W_other_in; W_close; W_dispatch; W_transfer; M_waste; epsilon_waste; C_condemn; original_kit_id; waste_event_id; Q | waste_kit | jrc-retail-2013 |
| asset_history | all inventory rows | 对资产源向量a及原历史受益者h，暂定f_a_h=e_recorded_a_h/L_expected_a。按allocation_asset记录实际实测暴露单位及预期寿命支持证据。退役时E_a=sum_h e_actual_a_h，覆盖全历史；f_final_a_h=e_actual_a_h/E_a。重算每个历史分子为f_new_a_h*V_new_a，记录delta_a_h=f_new_a_h*V_new_a-f_old_a_h*V_old_a。另列资产运输维修退役源采用相同归属份额一次；实际终端载体kg独立称量，再乘其生命周期责任份额一次。完整包已含寿终不得再输出。各受影响原池按本池修订Q仅归一化一次。 | asset_id; V_new_a; V_old_a; e_recorded_a_h; L_expected_a; exposure_unit; e_actual_a_h; E_a; f_new_a_h; f_old_a_h; original_owner; original_pool_id; source_version; terminal_carrier_kg; attribution_level; Q | historical_asset_numerators | ghgp-product-2011 |
| service_ownership | all inventory rows | 网络A_network=sourceh_interval*endpoint_seconds_pool/sum_all_endpoint_seconds，逐唯一区间保留原区间和全部受益预约。供应商区间小时不等于每个SKU小时。共享事件A_event=raw_event_quantity*line_processing_seconds_pool/sum_event_line_seconds，逐唯一支付尝试或行政批次计算。摄像f_capture=footprint_duration_pool/sum_all_footprint_duration，使用冻结互斥区域时间映射；A_storage=sum captured_source_bytes*retention_h*f_capture。保留字节换算、采集映射版本和全部空置预约。每个供应商源数量属性单位分开；仅有真实共同分母、组成生命周期用电后台排除及归属时包才可完整保留。仅精确最终归属池版本已分配时允许不重复已应用归属份额。 | sourceh_interval; unique_interval_id; endpoint_seconds_pool; sum_all_endpoint_seconds; raw_event_quantity; event_id; line_processing_seconds_pool; sum_event_line_seconds; footprint_duration_pool; sum_all_footprint_duration; capture_map_version; captured_source_bytes; retention_h; byte_unit; attribution_level; original_owner; original_pool_id; source_version | service_raw_numerators | ghgp-product-2011 |
| transport_chain | all inventory rows | 采用行程路段j→实际托运或资产c→最终原归属池h。具有证据的质量受限载货服务，w_c_j=actual_load_kg_c_j/sum_all_load_kg_j；有证据的体积受限载货服务，w_c_j=actual_occupied_m3_c_j/sum_all_occupied_m3_j。保留实际容量适用证据、路段货单和约束证明；未知或其他约束阻断该选择。空驶具有正vehicle-km，按实测预约容量乘距离份额分配；静止怠速为另一个正源，以vehicle-h计量，采用预约容量乘h份额，包含全部空置失败预约和实际燃料或供应商覆盖。t*km为0不能覆盖空驶怠速。A_c_j=raw_trip_source_j*w_c_j；最终A_c_j_h=A_c_j*owner_fraction_c_h。供应商已分配到托运仅免w，不免仍缺失的F、首次使用或资产历史归属份额。仅精确原始最终归属池版本免该份额。供应商边界须排除其他地方已纳入的载货空驶怠速燃料、车队资本及退货资产维修废物运输重复。 | trip_id; segment_id; raw_trip_source_j; actual_load_kg_c_j; sum_all_load_kg_j; actual_occupied_m3_c_j; sum_all_occupied_m3_j; capacity_evidence; binding_constraint; vehicle_km; vehicle_h; reserved_capacity_distance; reserved_capacity_h; all_beneficiary_driver; owner_fraction_c_h; attribution_level; original_owner; original_pool_id; source_version; provider_coverage | transport_raw_numerators | ghgp-product-2011 |
| completion_materials | all inventory rows | 对每个实际同质原配方源c，D_c=source_original_kg为实测原配方kg，排除另建模容器。每审计截止时守恒完整源历史：D_c=unused_sealed_kg+unused_opened_kg+unused_damaged_retained_kg+first_used_cumulative_kg+preuse_dispatched_source_kg+preuse_confirmed_missing_source_kg+neverused_transfer_source_kg+signed_unused_residual_kg。未开封未用完好库存、已开封从未使用可用库存、受损从未使用留存库存是互斥真实状态，绝不能默认零。自首次实际使用起保留累计原来源账：first_used_cumulative_kg=consumed_no_recoverable_source_kg+used_retained_working_source_kg+used_retained_container_source_kg+used_damaged_retained_source_kg+dispatched_container_residue_source_kg+rinsate_origin_source_kg+used_transfer_source_kg+postuse_confirmed_loss_source_kg+signed_used_residual_kg。consumed_no_recoverable排除全部其他可回收或外运去向。每次使用溢出漂洗留存外运及更正均贯穿全历史替换该源既往状态去向记录，不能在漂洗时再次追加同一已用数量或遗忘前期。新增水污物容器质量排除于配方源kg；直接称量整湿载体kg是另一实物数量。制造及入场责任中，u_first_c_h为归属原所有人池h且实际通过首次使用门槛的原数量；f_preuse_c_h为首次使用前最终归F的互斥实际原数量，含有证据报废留存数量、确认失踪或外运，不含责任未定受损库存。要求sum_h u_first_c_h=first_used_cumulative_kg；f_preuse归属记录是实际使用前失败部分的互斥责任分类，不是另一个实物去向。全部历史归属的sum_h(a_use_c_h+a_preuse_c_h)<=1，明确未归属或获确认转移的余量。a_use_c_h=u_first_c_h/D_c，a_preuse_c_h=f_preuse_c_h/D_c；制造分子=(a_use_c_h+a_preuse_c_h)*V_manufacture_c，入场分子=(a_use_c_h+a_preuse_c_h)*V_inbound_c，各仅一次，除非已经归属精确最终归属池版本。V_manufacture_c是发运门槛纯配方源，V_inbound_c是互斥原接收源。未归属未用库存转移退回源继续结转。回用不新增制造入场；证据改变须更正原历史a*V记录及原池。真实同质辅助包装源采用相同首次使用失败公式，但以实测原包装数量D_c=source_original_count（Item(s)）、source_quantity_unit及匹配整包装向量计算，与配方kg分开；不得按质量切分完整异质瓶车套件环境向量。原GOR4PS套件包装已在V_s中，排除于辅助输入。实际整排液载体直接采用V_discharge*rho_measured，不再乘组成或扣蒸发库存；供水表m3已排除内部回用。须有匹配水化学品包装工具卡及处理，不用仅水重建整液。可重复清洁布采用实测清洁m2和asset_history。 | source_original_kg; source_original_count; source_quantity_unit; D_c; u_first_c_h; f_preuse_c_h; a_use_c_h; a_preuse_c_h; V_manufacture_c; V_inbound_c; first_use_event; unused_sealed_kg; unused_opened_kg; unused_damaged_retained_kg; first_used_cumulative_kg; preuse_dispatched_source_kg; preuse_confirmed_missing_source_kg; neverused_transfer_source_kg; signed_unused_residual_kg; consumed_no_recoverable_source_kg; used_retained_working_source_kg; used_retained_container_source_kg; used_damaged_retained_source_kg; dispatched_container_residue_source_kg; rinsate_origin_source_kg; used_transfer_source_kg; postuse_confirmed_loss_source_kg; signed_used_residual_kg; V_discharge; rho_measured; supply_meter_m3; cleaned_m2; source_id; source_version; original_owner; original_pool_id; attribution_level; Q | material_raw_numerators | jrc-retail-2013 |
| completion_restore | all inventory rows | 对相同交换身份属性单位及原始源归属池版本，外模块提供原始分子X时直接保留；仅当模块提供按其有证据原分母D归一化的z时先恢复X=z*D。按attribution_level仅补缺失行程、归属、资产分配层，不重复已应用层。即使供应商ID不同，也须核对实际事件期间组成生命周期范围重叠。冻结显示/Q前相容原始核心分子N_core（N_F、E_AC、W_dispatch和保管总量）。相容最终amount_i=(N_core_i+sum互斥正确归属X_external_i)/Q，仅一次。禁止归一化卡加原始模块、不同属性单位相加、丢失原始F或AC、重复F、或将实物附属行作新制造。boundary_completion全部对象具有实际原子卡、协议、身份及已核实原始分子对账前，仍为部分。 | N_core_i; N_F; E_AC; W_dispatch; U_customer; H_all; R_supplier; X_external_i; z; D; module_mode; exchange_identity; property; unit; source_id; original_owner; original_pool_id; source_version; attribution_level; Q | completed_inventory | ghgp-product-2011 |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_identity | all inventory rows | 每个未绑定行均保持未验证，直至官方直读身份、公开状态、准确双语名称类型属性单位及限定或环境区室与实际状态一致。service_pickup绑定本零售服务，failed_kit绑定完整原始制造产品，保管附属行绑定实际盒装商品，waste_kit绑定获接收的完整混合载体及匹配处理。交流电身份不能确立供应商电网组合电压或生命周期绩效，须采集实际供应。 | 官方原始响应及完整性凭证、实际供应处理门槛记录 |
| quality_methods | all inventory rows | 每个实际字段须有采集人、仪器、场址、时间戳时区、原始ID单位频次期间、校准及不确定度。责任源所有人和独立审核人对账：原始量→固定因果归属→相容分子→一次/Q。未知值或驱动分母、未解决带符号残差、源遗漏及处理缺口阻断完整状态；不得虚构默认或夹零。 | 签署源账、校准、对账及未解决事项登记 |
| quality_boundary | all inventory rows | 在boundary_completion每对象均有证据缺席或有实际方法完整原子卡、范围互斥供应商向量、必需属性单位身份前，声明部分核心。整混合废物须接收方签署实际组成状态接受及完整处理。制冷剂燃料门店组装售前轮胎充气或商品状态改变未知时窄路线失败。不得从该部分核心作总体环境比较或完整业务主张。 | 签署完整性矩阵及全期设备服务清查、完整双语清单 |
| quality_history | all inventory rows | 保留Q、S/F/T/O、全部原始源ID和全部历史fV分配的原版及替换版，含零输出池。资产最终实际E替换每个历史分配；后期验收改变须替换原始源责任和分子。不能只追加更正却不取消已替代数量。 | 版本图、全部受益者历史、对账替换差额及原池重发 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validation_scope | all inventory rows | 混合门店渠道、原批次配置BOM、原封证据、Q资格或全期路线缺席证明缺失时拒绝。原厂载荷速度胎压仅是产品信息，不是PCR法律安全验收限值或参考分母。 | un-cpc62182; un-cpc49930; gorilla-gor4ps-manual |
| validation_balance | all inventory rows | 要求Item(s)仅商品账、kg暂存废物账及最终有效服务账分开；对账原始事件分区及实际同ID数量质量关联。带符号残差独立于确认失踪。直接外运不能再作库存扣减；背景T不能创造实物转移。 | ghgp-product-2011 |
| validation_normalize | all inventory rows | 归一化要求Q>0。全部显示清单数量采用reference_flow并仅一次共同/Q；计算分子采用calculated_value及calculated_from_collection，service_pickup在count_service确立Q>0后为固定1 Item(s)，证据为method_formula。核验原始核心恢复、源驱动单位、全部受益者份额和1、源去重及每个原池替换。零输出与未知保持明确。 | ghgp-product-2011 |
| validation_complete | all inventory rows | 任何实际必要补齐对象、交换绑定、已接受废物处理或数量背景范围未核实时，不得标记数据完整。每新增卡必须进入其实际单过程采集视图、计算Inputs及行范围，并同步对齐双语合同。分类映射决策在外部；有限检查通过不代表方法或安全运行获批。 | ghgp-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 必要实际补齐核实前为部分增量零售服务核心 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 仅在明确部分边界下用于指定原套件状态场址渠道池；经核实补齐后作增量零售服务输入，成功商品制造另列。 |
| excluded_use | 完整业务足迹、商品制造、载荷出行服务、组装充气使用维护、一般运输设备比较或其他套件版本。 |
| required_metadata | 实际门店及混合品类；GOR4PS区域版及原批次ID；完整套件与全部包装BOM；原四轮BOM版本及原箱装箱声明；原封未组装未用状态；接收与自提门槛；池期间及验收审计截止日版本；原始ID最终验收账；无门店组装或售前轮胎充气；全部设备燃料及制冷剂缺席证据；部分核心状态及已补齐模块登记；背景源门槛归属版本；实测分母Q |
| required_quality_disclosure | 原始归一化账、原始源向量S/F/T/O、实测源归属、Q审计重发、全部历史资产修订、遗漏源矩阵、身份处理背景缺口及不确定度。 |
| update_trigger | 任何后期验收退回、源归属或预期寿命退役修订、实际套件BOM车轮变更、路线品类设备源范围变更或计量库存记录更正。 |

## 11. 数据源

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un-cpc62182 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62182 | 官方纳入493/495/496/499及自行车排除，仅窄路线分类语境 |
| un-cpc49930 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/49930 | 非机械驱动车辆商品身份，结合真实直拉不可牵引原厂规格 |
| gorilla-gor4ps | handbook | https://gorillamade.com/product/gor4ps-gor4ps-c/ | 真实型号、聚合物车斗、涂层钢架、充气轮、直拉手柄、不可牵引规格及版本注意；不是完整BOM、LCI或现场交易证据 |
| gorilla-gor4ps-manual | handbook | https://gorillamade.com/wp-content/uploads/2024/10/GOR4PS-Manual_GORILLA.pdf ; modelGOR4PS manual182228A | 完整运输车组装紧固件语境及载货而非载客玩具公路功能；组装使用仍在自提范围外，不代表合规审批 |
| ghgp-product-2011 | standard | https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf ; chapters6,7,9 | 服务单位、透明边界完整性及物理划分分配原则。具体归属驱动历史公式为本PCR基于实际采集的设计，不是原文规定系数，也不声称完整符合标准。 |
| jrc-retail-2013 | official_guidance | https://susproc.jrc.ec.europa.eu/activities/emas/documents/RetailTradeSector.pdf ; EUR25998EN, 2013, executive summary and sections2.1,2.4,2.5 | 实际零售能源照明、材料供水清洁及废物物流源筛查语境；不采用零售均值、法律阈值或数值清单默认。 |
