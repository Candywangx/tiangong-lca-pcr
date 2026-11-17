---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-parcels
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 包裹邮政服务

## 1. 范围与适用性

适用于普遍服务义务下国内、常温、道路运输包裹邮政服务的候选方法。自营柴油汽油纯电道路车辆与外包承运可按不同路段并存。功能产出是妥投服务，不是包裹内件生产或所有权转移。国际关务及非公路路线须另审范围；此明确较窄覆盖不得称为整个CPC子类。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.postal-services-related-to-parcels |
| classification_refs | CPC 3.0 68012; narrower |
| covered_products | 普遍服务义务下国内常温邮政包裹，公路收寄至接收链 |
| excluded_products | 非普遍服务快递、信件、独立柜台交易、国际关务、航空海运铁路或冷链、货物制造 |
| representative_product | 一件已声明质量尺寸路线时效等级的国内普通邮政妥投包裹 |
| production_route | 收寄、分拣暂存、公路干线、本地投递、有记录接收，含归属失败重复及退回活动 |
| market_state | 已完成包裹妥投服务；保管期间包裹仍属客户财产 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 有普遍服务义务证据的邮政包裹妥投 |
| How much | 1件唯一ID包裹妥投；清单分母为闭合收寄队列妥投件数D |
| How well | 声明普通优先及时效承诺；授权收件人或约定自提点有效接收；保留实际延误质量，不把迟到改称准时 |
| How long or cycle | 实物收寄至最终接收；记录实际时长及暂存，不假定固定周期 |
| reference_flow_link | delivered_parcel |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 普遍服务义务下邮政包裹妥投服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 普遍服务法律合同依据; 经营者及责任拆分; 国内起讫; 参考期间; 服务时效等级; 毛质量及尺寸分布; 路线距离; 车型燃料; 场站能源制冷剂; 收寄接收gate; 到户自提方式; 失败退回丢失率; 供应边界 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | 参考产品 | 物品数量 | Item(s) | 一件是一项唯一ID的包裹妥投服务；D仅计最终接收一次。无观测件数及毛质量不得由kg换算件数。 |
| normalize_once | 全部清单 | 逐卡规定 | 逐卡规定 | 原始队列总量、归属因子与D分开保留；逐卡归属总量仅除D一次。已按妥投件表达的量不再除。 |
| energy_conversion | site_electricity; traction_electricity | 净热值 | MJ | 1 kWh = 3.6 MJ为精确换算；记录交流输入电及供应结构；无实际低位热值及匹配组成不得换燃料能量。 |
| freight_activity | activity_contract_road | Goods transport (mass*distance) | t*km | 1 t = 1000 kg；用含寄件包装的实测毛质量及声明装载段km；体积可支持分配但不静默转质量。 |
| physical_assets | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck | 物品数量 | Item(s) | 一件为一种完整有记录物理资产配置，不是一小时。活动/寿命活动是无量纲资产份额。未来寿命假定须有来源及敏感性。 |
| floor_time | activity_building_asset | 面积×时间 | m2*a | m2*a = 实测占用平方米×天数/365；建筑壳体资产服务与土地占用基本流有别，不以件替代。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 已包装客户包裹实物交寄并被邮政收寄保管 |
| starting_condition_role | 服务起始状态；货物及已有寄件包装是承运对象，不是生产投入 |
| product_classification_scope | 普遍服务义务下国内常温公路邮政包裹服务，窄于CPC68012 |
| recursive_input_rule | 执行 boundary_atomic_support：外部活动通过明确的单单位服务接口进入，不递归展开供应方内部。前景实物过程保留原卡及规则。保管货物不是制造投入。 |
| upstream_dataset_requirement | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |
| disclosure | 收寄接收gate、闭合队列、责任路段覆盖、路线技术、共享装载空间分配、维护资本范围、剔除及未解决缺口 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_uso` | 产品身份 | 仅适用于有普遍服务义务证据的包裹收寄、公路运输与投递。即使由邮政经营者承运，不具有该义务的商业快递合同也不适用。 | un-cpc3-68012 |
| `boundary_gates` | 完整服务链 | 起点为包裹实物进入邮政保管并收寄验收，包含验收处理；终点为授权收件人或自提点有记录的接收。纳入能源材料上游、自收寄后自营及外包揽运、分拣、暂存、干线、末端、重投、归属退回、信息系统、设施、维护、资本资产及运行废物处理。单节点记录仅为中间贡献。 | un-cpc3-68012; upu-parcel-service; ghg-scope3-2013 |
| `boundary_exclusions` | 服务边界 | 剔除货物制造及使用、收寄时已有寄件包装生产、收寄前及自提后客户出行、邮政金融、独立柜台销售、信件、国际及关务、航空水运铁路和温控承运。经营者新加包装含其上游直至交付；收件人处置位于服务gate之后，须另披露，不默加至服务参考流。 | un-cpc3-68012 |
| `boundary_segment_owner` | 每个运输段 | 每个实物运输段设唯一标识，并且仅一种责任模型：自营燃料电力、排放及非运行资产，或已含这些负担的购买承运。不得重复加承运商燃料、排放、车辆资本、维护、上游能源或已含空驶。供应商仓储与已含场站作业按覆盖登记分界。 | ghg-scope3-2013 |
| `boundary_nonzero_gaps` | 全部必需交换 | 卡片是原子候选，不是可用零填满的穷尽模板。以路线、发票、资产、维护和废物登记确认发生性；新增实际燃料、材料、云服务、制冷剂、车辆配置或排放介质，须按相同方法单列具体物理身份卡及协议。缺身份、数量或因子保留未解决并阻断完整性声明；仅有未发生证据时可not_applicable。 |  |
| `boundary_asset_coverage` | 基础设施与维护 | 逐个资产链接核查制造、维护和寿终处置完整覆盖及声明的寿命分母。运行能源、前景燃烧、已显式建模的轮胎制动磨耗PM及已显式建模的制冷剂逸散在该链接外。资产数据集必须剔除这些使用阶段交换；若不能拆出，则不能再加重叠前景交换，且须证明匹配完整覆盖。替换轮胎制动部件供应及残余寿终处理仍在资产链接内，但残余废弃质量须扣除已作为磨耗颗粒排出的材料。仅资产供应边界明确未含替换材料及废物时另列具体身份，不重复完整车辆或分拣设备原装部件。缺适配资产数据属于组件不完整，不能假定可忽略。 |  |
| `boundary_counter_substitution` | 收寄柜台服务 | 执行 foreground_interface_coverage：前景之外采用具体服务接口；以下详细实物要求仅适用于前景责任组成。仅当实际受理程序、邮件类别、起止交接点与服务责任均相符时，才以供应方逐项实物清单精确替换对应收寄段。以会话ID关联每个独立受理邮件ID、实际办理记录及回执/交接；同一会话可有多件，不能把会话当作68013的逐件输出，也不能假定普通USO包裹适用挂号/证明交寄方法。供应方台账须包括实际失败与纠错，采用全部使用者分配；只剔除证实重叠的能源、物料与资产份额。完整68013服务产品不作投入；接口或实物数据不符时不得替换。 |  |

### 支持活动原子边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | 支持活动 | 每条启用交换表示一个明确的材料、设备或服务对象，只使用一个主属性和单位。不得仅因服务包含上游过程而禁止服务流。计量前按供应方、合同、场址、事件、接口和范围组成确定责任。运营方运行的过程及由运营方承担清单责任的独立委托现场任务采用前景实物行；责任范围外的独立供应活动采用其明确的服务接口行，供应方制造、公用工程、维护和废物保留在匹配的背景服务中，不另作前景交换。合同本身不使供应方内部过程成为前景。不得改变产品、路线、保管接口或原参考分母。执行 foreground_interface_method 和 foreground_interface_coverage；边界变化须经PCR审查，不得根据数据是否易得任意选择。 此处责任归属指清单责任，不仅指法律所有权：租赁设备的提供可以是外部服务，而运营方运行所用的独立计量电力仍属于前景。 |  |
| foreground_interface_coverage | 所有支持过程及重叠范围 | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| postal_sites | 收寄分拣暂存及服务支持 | required | 队列所用各实体场站 | 前景 | 归属队列活动 / D |
| road_operations | 揽运干线及末端公路运输 | required | 自营及外包不重叠路段 | 前景及关联供应 | 归属队列运输 / D |
| direct_emissions | 自营燃烧磨损及制冷剂排放 | conditional | 实际自营源发生且接收介质明确 | 前景 | 物种质量 / D |
| service_completion | 最终接收及结果核对 | required | 收寄队列闭合且D>0 | 参考产出 | 1 Item(s) |
| support_contract_road | 支持接口／前景活动：外包路段常温公路包裹运输 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：在原有互斥承运区段或投递尝试边界内，以承运商实物清单替换完整生命周期服务。保留责任gate、所有客户、失败重试、空返、怠速及最终损失，不与运营商自营区段或其他承运服务重叠。 | support | 归属至delivered_parcel |
| support_road_infrastructure | 支持接口／前景活动：声明车型使用指定道路路段的服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：以建造完成通车gate的真实完整指定道路区段替换道路生命周期服务；后续维护翻新及报废分别列实物交换。 | support | 归属至delivered_parcel |
| support_charging_asset_service | 支持接口／前景活动：配置明确的充电装置可用服务，不含电力 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：以真实出厂gate完整充电产品及实际外部安装维修替换报废交换替换生命周期可用小时。H_k保留为归属驱动，不是实物流且不等价一件。 | support | 归属至delivered_parcel |
| support_building_asset | 支持接口／前景活动：邮政建筑空间占用服务，不含运行公用工程 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：以实物平方米的真实建造完成gate建筑产品替换非运行占用生命周期服务，实际维修拆除另列交换，场站公用工程仍独立核算。 | support | 归属至delivered_parcel |

### 过程： postal_sites (`postal_sites`)

#### 输入

##### 产品流

###### 交流电 (`site_electricity`)

用于收寄、分拣、照明、电采暖及服务信息系统的计量用电；此表计台账剔除车辆充电。声明供电电压、地域和供应方；此使用点通用流不代表已批准供电数据集。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 / MJ
- 数量规则： 3.6 × 归属场站用电量(kWh) / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_energy`

###### 管道天然气，场站供暖用 (`site_gas`)

场站使用燃气锅炉时纳入；燃料供应不含前景燃烧，不得选用已包含该燃烧的供热服务数据集。

- 选定流： 管道天然气，场站供暖用
- 流属性/单位： Mass / kg
- 数量规则： 归属天然气质量 / D；标准体积按供应商相同干湿、温度和压力基准的密度换算
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_energy`

###### 邮政场站供应自来水 (`site_water`)

服务相关场站用水，含归属的卫生及清洁用水；不是环境淡水开采基本流。

- 选定流： 邮政场站供应自来水
- 流属性/单位： Volume / m3
- 数量规则： 归属实测购水体积 / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 包裹修复用瓦楞纸箱 (`repair_box`)

仅纳入收寄后邮政提供的替换纸箱，不重建寄件包装或内件生产。随包裹交付纸箱属于客户侧包装，下游处置另行披露。

- 选定流： 包裹修复用瓦楞纸箱
- 流属性/单位： Mass / kg
- 数量规则： 向队列净领用瓦楞纸箱质量 / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 含胶及纸质离型底纸的邮政路由标签 (`paper_label`)

一个标签成品包含面纸、胶及纸基离型底纸。为对账单独测定底纸和离型涂层的质量组成，但不重复增加已含投入组件；剥离底纸成为场站独立底纸废物，交给收件人的面纸及胶不是场站废物。

- 选定流： 含胶及纸质离型底纸的邮政路由标签
- 流属性/单位： Mass / kg
- 数量规则： 含胶及纸质离型底纸的完整标签净领用质量 / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 带胶聚丙烯包裹封箱胶带 (`pp_tape`)

边界内修复使用时纳入聚丙烯基带胶成品，胶粘剂质量在产品内计入一次。

- 选定流： 带胶聚丙烯包裹封箱胶带
- 流属性/单位： Mass / kg
- 数量规则： 净领用完整胶带质量 / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_material`

###### 现场空调用外购原生R134a (`refrigerant_r134a`)

仅实际接受的原生R134a供应；按calc_r134a的批次来源及首次服务耗用/不可逆损失归属。仍可用的未充注库存连同未分配供应负担结转。原装设备已含充注不重复；内部回用不新购，外购合格再生料在独立行。

- 选定流： 现场空调用外购原生R134a
- 流属性/单位：质量 / kg
- 数量规则： A_supply/D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant`

###### 现场空调用外购合格再生R134a (`site_r134a_reclaimed_supply`)

仅外购并已验收可充注的再生R134a；须批次组成、规格、货权及上游再生/运输范围证据。本方送外处理后按原货权收回不计为新购。与已负担内部回收料混合时保留各来源kg和未分配供应份额。

- 选定流： 现场空调用外购合格再生R134a
- 流属性/单位：质量 / kg
- 数量规则： A_reclaimed/D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant`

###### 邮政包裹带式输送机完整设备 (`sorter_asset`)

有实体输送机时纳入；一件为一种有配置记录的完整设备。关联非运行资产生命周期含制造、维护替换及寿终处置，剔除已计量电力。

- 选定流： 邮政包裹带式输送机完整设备
- 流属性/单位： 物品数量 / Item(s)
- 数量规则： sum(归属队列使用小时 / 有证据的全寿命服务小时) / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_site_asset`

###### 邮政工作站台式计算机完整设备 (`it_asset`)

一件为含已声明外设的完整计算机配置，已包含部件不再重复。实际发生前景责任外的独立远程/云处理时，须确定单一配置处理服务、合同接口及一个可计量属性/单位，并按 foreground_interface_method 增加具体服务接口卡及可执行采集/计算规则。不得要求把供应方服务器、冷却、电力或内部废物另列为前景行。运营方运行的本地设备及电力独立保留，并精确排除重叠。未定义云服务组合、原生单位未定义或背景覆盖不匹配时仍保持不完整；由前景承担责任的处理组成则使用其具体实物交换。

- 选定流： 邮政工作站台式计算机完整设备
- 流属性/单位： 物品数量 / Item(s)
- 数量规则： sum(归属设备使用小时 / 有证据的设备全寿命小时) / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_site_asset`

#### 输出

##### 产品流

###### 现场回收R134a对外交付产品 (`site_r134a_recovered_product`)

仅满足实际产品验收、货权和接收用途证据的R134a交接；无替代抵扣，不增加包裹参考产出。与同批废物分支互斥。

- 选定流： 现场回收R134a对外交付产品
- 流属性/单位：质量 / kg
- 数量规则： A_product/D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant`

##### 废物流

###### 现场R134a在产生点的废物 (`site_r134a_generated_waste`)

仅有证不可逆判废并退出可用库存；含原队列负责的留存废物与完整有据处理。可用回收库存不触发；其他混合载体用其真实整股身份另行登记，组分只作守恒。实际外运仅核验原事件。

- 选定流： R134a在产生点的废物
- 流属性/单位：质量 / kg
- 数量规则： A_waste/D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant`

###### 包裹处理产生的纸板包装废物 (`waste_cardboard`)

仅纳入边界内废弃纸板；客户内件及整件无法投递包裹不是该废物。数据包按不同处理去向分别记录，不重复质量。

- 选定流： 包裹处理产生的纸板包装废物
- 流属性/单位： Mass / kg
- 数量规则：按第8节废物来源规则归属原队列的纸板废物产生kg/D，包含留存质量及有依据的最终处理；组成与实际/前瞻接收路线须匹配本单一流，不在外运期重计。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_waste`

###### 含离型涂层的纸基标签底纸废物 (`waste_paper`)

完整标签投入产生的实际纸基底纸及其离型涂层；按实测底纸比例及标签净领用核对底纸产生量。处理须匹配带涂层底纸组成，不默认纯纸回收。不把随包裹交付的标签面纸算作场站废物。

- 选定流： 含离型涂层的纸基标签底纸废物
- 流属性/单位： Mass / kg
- 数量规则：按第8节废物来源规则归属原队列的纸基离型底纸及其离型涂层产生kg/D，包含留存质量及有依据的最终处理。不得纳入标签面纸或作废完整标签；额外实际废物须有匹配其实物载体的独立卡。组成与实际/前瞻接收路线须匹配本流，不在外运期重计。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_waste`

###### 聚丙烯带胶胶带废物 (`waste_pp`)

邮政产生的胶带边角与拆除胶带，含胶，剔除随包裹交付收件人的胶带。

- 选定流： 聚丙烯带胶胶带废物
- 流属性/单位： Mass / kg
- 数量规则：按第8节废物来源规则归属原队列的聚丙烯带胶胶带废物产生kg/D，包含留存质量及有依据的最终处理；组成与实际/前瞻接收路线须匹配本单一流，不在外运期重计。
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_waste`

###### 邮政场站未处理生活污水 (`site_wastewater`)

按排放计量，或依据有证据的蒸发及其他用水水平衡确定；衔接一次排水处理，不作为环境排水基本流，也不重复购买已覆盖的处理服务。

- 选定流： 邮政场站未处理生活污水
- 流属性/单位： Volume / m3
- 数量规则： 归属排入污水管网的污水体积 / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_waste`

### 过程： road_operations (`road_operations`)

#### 输入

##### 产品流

###### 公路车辆用石油柴油 (`diesel_fuel`)

自营柴油道路段使用时纳入，含怠速和归属空驶。供应商规格须证明组成；生物燃料混配须分别核算生物碳，不能默认全为化石。

- 选定流： 公路车辆用石油柴油
- 流属性/单位： Mass / kg
- 数量规则： sum(归属消耗石油柴油质量) / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_transport`
- 来源： `ghg-scope3-2013`

###### 公路车辆用石油汽油 (`petrol_fuel`)

自营汽油道路段使用时纳入，供应数据集终止于前景燃烧之前。

- 选定流： 公路车辆用石油汽油
- 流属性/单位： Mass / kg
- 数量规则： sum(归属消耗石油汽油质量) / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_transport`
- 来源： `ghg-scope3-2013`

###### 交流电 (`traction_electricity`)

自营纯电车辆时纳入；交流输入包含充电损失。该量从场站电量剔除，不重复添加电池输出电量。 适用计算见calc_electric_stock；结果已按原参考流归一。

- 选定流： 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位： 净热值 / MJ
- 数量规则：3.6*K_traction/D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_transport`
- 来源： `ghg-scope3-2013`

###### 柴油包裹投递厢式车完整资产 (`diesel_van`)

对应技术和配置的自营车辆使用时纳入。一件为含原装电池及轮胎的完整资产；关联资产数据集含维护、更换轮胎、润滑油、更换电池及寿终处置，但剔除运行燃料、电力及其直接排放。实际配置必须分别实例化。

- 选定流： 柴油包裹投递厢式车完整资产
- 流属性/单位： 物品数量 / Item(s)
- 数量规则： sum(归属车辆km / 有证据的车辆全寿命km) / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_vehicle_asset`

###### 汽油包裹投递厢式车完整资产 (`petrol_van`)

对应技术和配置的自营车辆使用时纳入。一件为含原装电池及轮胎的完整资产；关联资产数据集含维护、更换轮胎、润滑油、更换电池及寿终处置，但剔除运行燃料、电力及其直接排放。实际配置必须分别实例化。

- 选定流： 汽油包裹投递厢式车完整资产
- 流属性/单位： 物品数量 / Item(s)
- 数量规则： sum(归属车辆km / 有证据的车辆全寿命km) / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_vehicle_asset`

###### 纯电包裹投递厢式车完整资产 (`electric_van`)

对应技术和配置的自营车辆使用时纳入。一件为含原装电池及轮胎的完整资产；关联资产数据集含维护、更换轮胎、润滑油、更换电池及寿终处置，但剔除运行燃料、电力及其直接排放。实际配置必须分别实例化。

- 选定流： 纯电包裹投递厢式车完整资产
- 流属性/单位： 物品数量 / Item(s)
- 数量规则： sum(归属车辆km / 有证据的车辆全寿命km) / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_vehicle_asset`

###### 柴油包裹干线货车完整资产 (`diesel_truck`)

对应技术和配置的自营车辆使用时纳入。一件为含原装电池及轮胎的完整资产；关联资产数据集含维护、更换轮胎、润滑油、更换电池及寿终处置，但剔除运行燃料、电力及其直接排放。实际配置必须分别实例化。

- 选定流： 柴油包裹干线货车完整资产
- 流属性/单位： 物品数量 / Item(s)
- 数量规则： sum(归属车辆km / 有证据的车辆全寿命km) / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_vehicle_asset`

### 过程： direct_emissions (`direct_emissions`)

#### 输出

##### 基本流

###### 化石二氧化碳，排入城市空气 (`co2_fossil`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_urban_air` 执行。

- 选定流： 化石二氧化碳，排入城市空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 生物源二氧化碳，排入城市空气 (`co2_biogenic`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_urban_air` 执行。

- 选定流： 生物源二氧化碳，排入城市空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 甲烷，排入城市空气 (`methane`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_urban_air` 执行。

- 选定流： 甲烷，排入城市空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 氧化亚氮，排入城市空气 (`nitrous_oxide`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_urban_air` 执行。

- 选定流： 氧化亚氮，排入城市空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 一氧化氮，排向城市地表空气 (`nitrogen_monoxide_urban`)

按第8节 `inv_nitrogen_species` 执行。

- 选定流: 一氧化氮，排向城市地表空气
- 流属性/单位: 质量 / kg
- 数量规则： m_NO_assigned / D; 仅计本物种质量，只归一化一次
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`

###### 二氧化氮，排向城市地表空气 (`nitrogen_dioxide_urban`)

按第8节 `inv_nitrogen_species` 执行。

- 选定流: 二氧化氮，排向城市地表空气
- 流属性/单位: 质量 / kg
- 数量规则： m_NO2_assigned / D; 仅计本物种质量，只归一化一次
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`

###### 一氧化碳，排入城市空气 (`co`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_urban_air` 执行。

- 选定流： 一氧化碳，排入城市空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 二氧化硫，排入城市空气 (`so2`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_urban_air` 执行。

- 选定流： 二氧化硫，排入城市空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 小于2.5微米颗粒物，排入城市空气 (`pm25`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_urban_air` 执行。

- 选定流： 小于2.5微米颗粒物，排入城市空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 2.5至10微米颗粒物，排入城市空气 (`pm_coarse`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_urban_air` 执行。

- 选定流： 2.5至10微米颗粒物，排入城市空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### HFC-134a，排入城市空气 (`r134a_air`)

已识别场站空调向城市地面空气泄漏时纳入；乡村源用乡村卡，介质不明保留未解决。基本流质量数量不乘GWP。

- 选定流： HFC-134a，排入城市空气
- 流属性/单位： Mass / kg
- 数量规则： 归属R134a质量平衡泄漏量 / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant`

###### 化石二氧化碳，排入乡村空气 (`co2_fossil_rural`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_rural_air` 执行。

- 选定流： 化石二氧化碳，排入乡村空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 生物源二氧化碳，排入乡村空气 (`co2_biogenic_rural`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_rural_air` 执行。

- 选定流： 生物源二氧化碳，排入乡村空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 甲烷，排入乡村空气 (`methane_rural`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_rural_air` 执行。

- 选定流： 甲烷，排入乡村空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 氧化亚氮，排入乡村空气 (`nitrous_oxide_rural`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_rural_air` 执行。

- 选定流： 氧化亚氮，排入乡村空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 一氧化氮，排向乡村地表空气 (`nitrogen_monoxide_rural`)

按第8节 `inv_nitrogen_species` 执行。

- 选定流: 一氧化氮，排向乡村地表空气
- 流属性/单位: 质量 / kg
- 数量规则： m_NO_assigned / D; 仅计本物种质量，只归一化一次
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`

###### 二氧化氮，排向乡村地表空气 (`nitrogen_dioxide_rural`)

按第8节 `inv_nitrogen_species` 执行。

- 选定流: 二氧化氮，排向乡村地表空气
- 流属性/单位: 质量 / kg
- 数量规则： m_NO2_assigned / D; 仅计本物种质量，只归一化一次
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`

###### 一氧化碳，排入乡村空气 (`co_rural`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_rural_air` 执行。

- 选定流： 一氧化碳，排入乡村空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 二氧化硫，排入乡村空气 (`so2_rural`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_rural_air` 执行。

- 选定流： 二氧化硫，排入乡村空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 小于2.5微米颗粒物，排入乡村空气 (`pm25_rural`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_rural_air` 执行。

- 选定流： 小于2.5微米颗粒物，排入乡村空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### 2.5至10微米颗粒物，排入乡村空气 (`pm_coarse_rural`)

按发生条件纳入前景自营运输、场站燃烧或车辆非尾气磨损的明确物质或特定聚合对象，不能以CO2e合计替代。接收介质不明保留未解决。 按第8节 `inv_rural_air` 执行。

- 选定流： 2.5至10微米颗粒物，排入乡村空气
- 流属性/单位： Mass / kg
- 数量规则： sum(归属活动_j × 匹配物种因子_gj) / D；因子单位须抵消活动单位
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_emissions`
- 来源： `ghg-scope3-2013`

###### HFC-134a，排入乡村空气 (`r134a_air_rural`)

已识别场站空调向乡村地面空气泄漏时纳入；城市源用城市卡，介质不明保留未解决。基本流质量数量不乘GWP。

- 选定流： HFC-134a，排入乡村空气
- 流属性/单位： Mass / kg
- 数量规则： 归属R134a质量平衡泄漏量 / D
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_refrigerant`

### 过程： service_completion (`service_completion`)

#### 输出

##### 产品流

###### 普遍服务义务下邮政包裹妥投服务 (`delivered_parcel`)

一件已收寄且具有有效接收证据的独立包裹，交至授权收件人或约定自提点。内部扫描、失败尝试及退回寄件人均不产生额外妥投服务。

- 选定流： 普遍服务义务下邮政包裹妥投服务
- 流属性/单位： 物品数量 / Item(s)
- 数量规则： 1 Item(s)
- 数值来源模式：计算值 (`calculated_value`)
- 适用范围：场址特定 (`site_specific`)
- 归一化基准：每声明的参考流
- 基准类型：参考流 (`reference_flow`)
- 证据类型：基于采集计算 (`calculated_from_collection`)
- 采集协议： `cp_cohort`

### 过程：支持接口及前景活动（外包路段常温公路包裹运输）(`support_contract_road`)

#### 输入

##### 产品流

###### 外包路段常温公路包裹运输 (`svc_contract_road`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的外包路段常温公路包裹运输。计量：实际毛载荷吨数乘实际载货路段公里数后求和；匹配服务范围保留原闭合空驶/怠速周期和失败运输。按 cp_interface_contract_road 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_contract_road 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_contract_road。

- 选定流: 外包路段常温公路包裹运输
- 流属性/单位: 运输活动量 / t*km
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 t*km；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_contract_road`

###### 供应柴油 (`u_contract_road_diesel`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 实际牌号调和组成及油箱库存平衡；体积换算须测密度温度。燃料生产在上游，燃烧另列。 按第8节 `inv_carrier_scope`、`inv_occurrence` 执行。

- 选定流: 供应柴油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 供应汽油 (`u_contract_road_petrol`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 实际牌号调和组成及油箱库存平衡；体积换算须测密度温度。燃料生产在上游，燃烧另列。 按第8节 `inv_carrier_scope`、`inv_occurrence` 执行。

- 选定流: 供应汽油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 交流电 (`u_contract_road_electricity_ac`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 沿用既有交流电等效库存、时序来源向量、E_total/E_zero/E_route及正零充入事件，3.6 MJ/kWh仅换算一次；不得再次加损耗或与承运场站电量重叠。 适用计算见calc_provider_electric_stock；结果已按原参考流归一。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_ac_basis` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： 3.6*(sum(E_route_j*s_provider_c,j)+sum(E_zero_k*z_c,k))/D
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 制造出厂gate的完整柴油配送厢式车 (`u_contract_road_diesel_van`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 原装出厂组件同用f，维护及最终剩余废物另列。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_vehicle_basis` 执行。

- 选定流: 制造出厂gate的完整柴油配送厢式车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 制造出厂gate的完整汽油配送厢式车 (`u_contract_road_petrol_van`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 原装出厂组件同用f，维护及最终剩余废物另列。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_vehicle_basis` 执行。

- 选定流: 制造出厂gate的完整汽油配送厢式车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 制造出厂gate的完整纯电配送厢式车 (`u_contract_road_electric_van`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 原装出厂组件同用f，维护及最终剩余废物另列。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_vehicle_basis` 执行。

- 选定流: 制造出厂gate的完整纯电配送厢式车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 制造出厂gate的完整柴油干线卡车 (`u_contract_road_diesel_truck`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 原装出厂组件同用f，维护及最终剩余废物另列。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_vehicle_basis` 执行。

- 选定流: 制造出厂gate的完整柴油干线卡车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 完整替换轮胎 (`u_contract_road_replacement_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 外部供应质量，排除原装部件。磷酸铁锂R134a仅适用于实际组成匹配；其他真实身份须另建卡。内部冷媒回用为转移而非新供应。 按第8节 `inv_carrier_scope`、`inv_occurrence` 执行。

- 选定流: 完整替换轮胎
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 补充车辆润滑油 (`u_contract_road_lubricating_oil`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 外部供应质量，排除原装部件。磷酸铁锂R134a仅适用于实际组成匹配；其他真实身份须另建卡。内部冷媒回用为转移而非新供应。 按第8节 `inv_carrier_scope`、`inv_occurrence` 执行。

- 选定流: 补充车辆润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 完整替换磷酸铁锂动力电池 (`u_contract_road_replacement_lfp_battery`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 外部供应质量，排除原装部件。磷酸铁锂R134a仅适用于实际组成匹配；其他真实身份须另建卡。内部冷媒回用为转移而非新供应。 按第8节 `inv_carrier_scope`、`inv_occurrence` 执行。

- 选定流: 完整替换磷酸铁锂动力电池
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 外购验收的新R134a（承运道路车辆） (`u_contract_road_r134a_supply`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。仅限有证由外部获得货权并实际交付的新料R134a，供承运道路车辆空调；外购再生料走独立产品卡，初装属完整车辆，原库存回用和受托返还不作新供应。用第8节带来源库存和受益事件归属的化学品kg；留存未用采购不直接进入本队列。

- 选定流: 外购验收的新R134a（承运道路车辆）
- 流属性/单位: 质量 / kg
- 数量规则： A_supply/D
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 外购验收的再生R134a（承运道路车辆） (`u_contract_road_r134a_reclaimed_supply`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。仅限有证取得货权、实际交付且符合承运道路车辆空调充注验收的外部再生R134a产品。保留同批供方再生清单、交接证据及来源库存；按第8节首次为本服务消耗的已归属化学品kg，原有冷媒受托返还或内转不计本输入。

- 选定流: 外购验收的再生R134a（承运道路车辆）
- 流属性/单位: 质量 / kg
- 数量规则： A_reclaimed/D
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

#### 输出

##### 产品流

###### 按产品转出的回收R134a (`u_contract_road_r134a_recovered_product`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。仅在实际外部交付时有产品身份依据；与废物行互斥。 一种真实已识别回收冷媒产品，不自动给予避免生产抵扣；内部回用仅为转移。 适用计算见calc_carrier_r134a；结果已按原参考流归一。 证据须表明交接对象就是本卡具名冷媒及所列产品或废物状态。逐批记录带容器称重、皮重、净批量、匹配批次的组成及校准或分析证据；物料平衡只用该化学品的kg。若交接的是不同规格混合料或混合废物，按实际交接载体独立登记一次，组分kg只用于平衡。 产品/废物的负担边界按allocation_carrier_recovery执行。 按第8节 `inv_carrier_scope` 执行。

- 选定流: 按产品转出的回收R134a
- 流属性/单位: 质量 / kg
- 数量规则： A_product/D
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

##### 废物流

###### 剩余完整废轮胎 (`u_contract_road_spent_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_residual_carrier` 执行。

- 选定流: 剩余完整废轮胎
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 废润滑油 (`u_contract_road_spent_oil`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_residual_carrier` 执行。

- 选定流: 废润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 废磷酸铁锂动力电池 (`u_contract_road_spent_lfp_battery`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_residual_carrier` 执行。

- 选定流: 废磷酸铁锂动力电池
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 交付拆解的完整报废柴油配送厢式车 (`u_contract_road_eol_diesel_van`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。仅适用于序列号明确且链接匹配制造行的实际柴油配送厢式车报废，排除另列已拆部件。 配对制造行u_contract_road_diesel_van：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_carrier_scope`、`inv_residual_carrier` 执行。

- 选定流: 交付拆解的完整报废柴油配送厢式车
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 交付拆解的完整报废汽油配送厢式车 (`u_contract_road_eol_petrol_van`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。仅适用于序列号明确且链接匹配制造行的实际汽油配送厢式车报废，排除另列已拆部件。 配对制造行u_contract_road_petrol_van：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_carrier_scope`、`inv_residual_carrier` 执行。

- 选定流: 交付拆解的完整报废汽油配送厢式车
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 交付拆解的完整报废纯电配送厢式车 (`u_contract_road_eol_electric_van`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。仅适用于序列号明确且链接匹配制造行的实际纯电配送厢式车报废，排除另列已拆部件。 配对制造行u_contract_road_electric_van：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_carrier_scope`、`inv_residual_carrier` 执行。

- 选定流: 交付拆解的完整报废纯电配送厢式车
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 交付拆解的完整报废柴油干线卡车 (`u_contract_road_eol_diesel_truck`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。仅适用于序列号明确且链接匹配制造行的实际柴油干线卡车报废，排除另列已拆部件。 配对制造行u_contract_road_diesel_truck：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_carrier_scope`、`inv_residual_carrier` 执行。

- 选定流: 交付拆解的完整报废柴油干线卡车
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### R134a在产生点的废物 (`u_contract_road_r134a_recovered_waste`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。仅对本行具名冷媒已有有证不可逆判废、并退出可用/可充注状态时启用。废物交换gate在产生点，含原队列负责的留存废物及有据完整处理。回收但仍可用的库存不触发本行；混合载体必须采用其实际身份和整股量另行登记，组分只作守恒。后续实物交接核验原事件，不将责任转给外运期间。

- 选定流： R134a在产生点的废物
- 流属性/单位: 质量 / kg
- 数量规则： A_waste/D
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

##### 基本流

###### 化石二氧化碳 (`u_contract_road_co2_fossil`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 化石二氧化碳
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 生物源二氧化碳 (`u_contract_road_co2_biogenic`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 生物源二氧化碳
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 甲烷 (`u_contract_road_methane`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 甲烷
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 一氧化二氮 (`u_contract_road_nitrous_oxide`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 一氧化二氮
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 一氧化碳 (`u_contract_road_carbon_monoxide`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 一氧化碳
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 一氧化氮（NO） (`u_contract_road_nitric_oxide`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 一氧化氮（NO）
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 二氧化氮（NO2） (`u_contract_road_nitrogen_dioxide`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 二氧化氮（NO2）
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 二氧化硫 (`u_contract_road_sulfur_dioxide`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 二氧化硫
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 粒径小于2.5微米的尾气颗粒物 (`u_contract_road_pm25`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 粒径小于2.5微米的尾气颗粒物
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 粒径2.5至10微米的尾气颗粒物 (`u_contract_road_pm_coarse`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 粒径2.5至10微米的尾气颗粒物
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 粒径小于2.5微米的空气轮胎磨耗颗粒物 (`u_contract_road_tyre_pm25`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 粒径小于2.5微米的空气轮胎磨耗颗粒物
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`

###### 排至空气的R134a (`u_contract_road_r134a_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 采用来源匹配实测因子。 适用计算见calc_carrier_r134a；结果已按原参考流归一。 按第8节 `inv_carrier_scope`、`inv_occurrence`、`inv_carrier_emissions` 执行。

- 选定流: 排至空气的R134a
- 流属性/单位: 质量 / kg
- 数量规则： A_air/D
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_contract_road`


### 过程：支持接口及前景活动（声明车型使用指定道路路段的服务）(`support_road_infrastructure`)

#### 输入

##### 产品流

###### 声明车型使用指定道路路段的服务 (`svc_road_infrastructure`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的声明车型使用指定道路路段的服务。计量：指定路段和车型的实际车辆公里，含空驶和失败公里；服务包含道路建设、维护和寿终责任，保留原固定负担及损伤分配方法。按 cp_interface_road_infrastructure 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_road_infrastructure 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_road_infrastructure。

- 选定流: 声明车型使用指定道路路段的服务
- 流属性/单位: 车辆行驶距离 / vehicle*km
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 vehicle*km；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_road_infrastructure`

###### 通车gate的完整指定建造道路区段 (`u_road_infrastructure_constructed_section`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 一个有确切竣工长宽、路面路基、土建安全组件及位置的实物区段，截止完成交付；排除后续维护翻新报废及显式直接磨耗。该完整产品已含底层建造过程，不再重复添加。 对该确切已建成区段，先细分独占部分，f_fixed=归属分车型道路空间时间需求/有证据全实物寿命内所有用户道路空间时间需求。q=一完整建造区段×f_fixed/D，不得再乘车公里。后续可变维护不包含于该制造产品。 按第8节 `inv_occurrence`、`inv_road_scope` 执行。

- 选定流: 通车gate的完整指定建造道路区段
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 交付用于道路维护的沥青混合料 (`u_road_infrastructure_asphalt_maintenance`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 仅在实际事件有证据时使用该具体完整材料产品；按单据固定等级组成交付gate。施工能耗排放及移除废物另列，不作通用材料选择器。 按第8节 `inv_occurrence`、`inv_road_scope` 执行。

- 选定流: 交付用于道路维护的沥青混合料
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 交付用于道路维护的混凝土 (`u_road_infrastructure_concrete_maintenance`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 仅在实际事件有证据时使用该具体完整材料产品；按单据固定等级组成交付gate。施工能耗排放及移除废物另列，不作通用材料选择器。 按第8节 `inv_occurrence`、`inv_road_scope` 执行。

- 选定流: 交付用于道路维护的混凝土
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 道路维护机械柴油 (`u_road_infrastructure_maintenance_diesel`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 实测实际牌号；直接燃烧物种须依据匹配证据另列。 按第8节 `inv_occurrence`、`inv_road_scope` 执行。

- 选定流: 道路维护机械柴油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 交流电 (`u_road_infrastructure_maintenance_ac`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 实测维护用电，排除上游材料制造已含电及无关场站公用电。 按第8节 `inv_occurrence`、`inv_ac_basis`、`inv_road_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

#### 输出

##### 废物流

###### 移除沥青路面 (`u_road_infrastructure_maintenance_asphalt`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 按第8节 `inv_occurrence`、`inv_road_scope`、`inv_terminal_carrier` 执行。

- 选定流: 移除沥青路面
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 移除道路混凝土 (`u_road_infrastructure_maintenance_concrete`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 按第8节 `inv_occurrence`、`inv_road_scope`、`inv_terminal_carrier` 执行。

- 选定流: 移除道路混凝土
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 最终剩余沥青路面 (`u_road_infrastructure_eol_asphalt`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。 配对制造行u_road_infrastructure_constructed_section：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_occurrence`、`inv_road_scope`、`inv_terminal_carrier` 执行。

- 选定流: 最终剩余沥青路面
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 最终剩余道路混凝土 (`u_road_infrastructure_eol_concrete`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。 配对制造行u_road_infrastructure_constructed_section：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_occurrence`、`inv_road_scope`、`inv_terminal_carrier` 执行。

- 选定流: 最终剩余道路混凝土
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`


### 过程：支持接口及前景活动（配置明确的充电装置可用服务，不含电力）(`support_charging_asset_service`)

#### 输入

##### 产品流

###### 配置明确的充电装置可用服务 (`svc_charging_asset_service`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的配置明确的充电装置可用服务，不含电力。计量：按原正来源/已核实零补能事件规则归属的装置占用并集小时，包含同时使用端口份额；不含电力。按 cp_interface_charging_asset_service 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_charging_asset_service 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_charging_asset_service。

- 选定流: 配置明确的充电装置可用服务
- 流属性/单位: 时间 / h
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_charging_asset_service`

###### 制造出厂gate的完整指定充电设备 (`u_charging_asset_service_charger_manufactured`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 一完整实际设备，固定型号序列号端口额定配置及所含原装机柜功率电子电缆控制组件。制造截止出厂交付，排除现场安装、运行交流电、维修替换及报废；原装组件不得另列重复。 将该实物资产安装链接实际充电设备序列号。f_j,c=[Σ正充入(H_k×a_c,k)+Σ已核实零充入(H_k×z_c,k)]/H_j,life。H采用无重叠完整设备占用并集小时及既有端口分配，H_j,life含至有证据日历报废的全部用户正零事件。正来源结转与零事件直接因果固定日规则不变。q_charger=一完整设备×f_j,c/D，安装实物量按同一f归属。小时仅作归属驱动，不换算件或能量。 按第8节 `inv_occurrence`、`inv_charger_scope` 执行。

- 选定流: 制造出厂gate的完整指定充电设备
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_charging_asset_service`

###### 供应充电设备基础混凝土 (`u_charging_asset_service_installation_concrete`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 实际独立供给并进入唯一登记充电基础的混凝土，须从道路/建筑产品gate排除。本行是混凝土供应，不是完整基础产品；单独采集实际基础施工材料/能源及终态混凝土残余，不与充电机重复。不默认每台充电机一个基础或默认寿命。 使用独立基础资产/批次ID。f_foundation=队列归属且由该基础支持的整设备占用并集小时/有证据的基础完整寿命内全部受支持充电机及使用者占用并集小时，跨充电机代际保留。匹配容量/配置分层，并先将并发占用端口小时等分，再按来源/零事件归属队列。原混凝土量及基础混凝土终态采用相同f_foundation及原最终分母。充电机退役后保留的基础沿其自身寿命登记；实际重浇为新基础批次，不是当期维修量。基础寿命或全受益使用证据缺失阻断完成。 按第8节 `inv_occurrence`、`inv_charger_scope` 执行。

- 选定流: 供应充电设备基础混凝土
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_charging_asset_service`

###### 交流电 (`u_charging_asset_service_installation_ac`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 完整产品制造外单独计量安装能耗，不含运行电量且不与场站电表重叠。 将该实物资产安装链接实际充电设备序列号。f_j,c=[Σ正充入(H_k×a_c,k)+Σ已核实零充入(H_k×z_c,k)]/H_j,life。H采用无重叠完整设备占用并集小时及既有端口分配，H_j,life含至有证据日历报废的全部用户正零事件。正来源结转与零事件直接因果固定日规则不变。q_charger=一完整设备×f_j,c/D，安装实物量按同一f归属。小时仅作归属驱动，不换算件或能量。 按第8节 `inv_occurrence`、`inv_ac_basis`、`inv_charger_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_charging_asset_service`

###### 完整充电设备替换电缆组件 (`u_charging_asset_service_replacement_cable`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 仅适用实际独立采购且连接器额定规格明确的完整电缆组件。排除新设备原装电缆；其他替换部件须按确认身份另列。 按第8节 `inv_occurrence`、`inv_charger_scope` 执行。

- 选定流: 完整充电设备替换电缆组件
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_charging_asset_service`

###### 交流电 (`u_charging_asset_service_maintenance_ac`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 仅为单独归属维护电量，排除已计量充电待机交流电，后者保留在既有电卡。 按第8节 `inv_occurrence`、`inv_ac_basis`、`inv_charger_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_charging_asset_service`

#### 输出

##### 废物流

###### 废弃充电设备电缆组件 (`u_charging_asset_service_removed_cable`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 交付gate实测真实剩余组件流，保留来源归属暂存处理；留在完整报废设备中时不得另计。 按第8节 `inv_occurrence`、`inv_charger_scope` 执行。

- 选定流: 废弃充电设备电缆组件
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_charging_asset_service`

###### 完整报废充电设备 (`u_charging_asset_service_charger_eol`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。 拆解交付gate的一完整剩余实物设备，实测质量排除另行拆除回收组件。须按全寿命受益份额和实际或未来完整暂存处理链归属，不使用通用生命周期服务背景。 配对制造行u_charging_asset_service_charger_manufactured：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_occurrence`、`inv_charger_scope` 执行。

- 选定流: 完整报废充电设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_charging_asset_service`

###### 独立登记充电基础的终态混凝土残余 (`u_charging_asset_service_foundation_concrete_eol`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。仅在道路/建筑gate外独立混凝土基础实际存在时适用；使用同基础实际或有证据前瞻残余和去向，不假定处置日期或质量。 交给明确处理接收方的混凝土载体；终态净残余已不含先前拆出/再用混凝土及损失；仅从原始总量/BOM推导净残余时扣一次，不从实测净残余再扣。跨充电机代际保留独立基础寿命，采用制造时相同归属份额。必须包含有据拆除、暂存、运输及处理；实际保管转移替换原基础模型，不追加外运期负担。 配对制造行u_charging_asset_service_installation_concrete：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_charger_scope` 执行。

- 选定流: 独立登记充电基础的终态混凝土残余
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_charging_asset_service`


### 过程：支持接口及前景活动（邮政建筑空间占用服务，不含运行公用工程）(`support_building_asset`)

#### 输入

##### 产品流

###### 邮政建筑空间占用服务 (`svc_building_asset`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的邮政建筑空间占用服务，不含运行公用工程。计量：实际占用面积平方米乘按记录日历基准计算的占用年数，按分区和原全用户份额归属。按 cp_interface_building_asset 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_building_asset 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_building_asset。

- 选定流: 邮政建筑空间占用服务
- 流属性/单位: 面积时间 / m2*a
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 m2*a；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_building_asset`

###### 建造交付gate的完整指定场站建筑主体 (`u_building_asset_building_constructed`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。以实物平方米的真实建造完成gate建筑产品替换非运行占用生命周期服务，实际维修拆除另列交换，场站公用工程仍独立核算。 实物阶段：制造/建造及独立安装。 已建成指定主体的一实物平方米，不是平方米年占用。明确建筑总内面积基准、几何结构围护原装固定组件及地点。排除后续占用公用工程维护拆除及另计分拣IT充电设备。每行仅一种实际建筑配置，不同配置须分列。 对该确切已建成主体使用归属实测占用面积时间A_c及含日历报废的有证据完整实物寿命L年，q_m2=A_c/L/D。等效整栋份额f=A_c/(同面积基准总受支持楼面面积×L)。全部用户采用相同容量分母，m2*a不作实物产出单位。最终剩余废物同用整栋f。 按第8节 `inv_occurrence` 执行。

- 选定流: 建造交付gate的完整指定场站建筑主体
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_building_asset`

###### 建筑维修混凝土 (`u_building_asset_repair_concrete`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。以实物平方米的真实建造完成gate建筑产品替换非运行占用生命周期服务，实际维修拆除另列交换，场站公用工程仍独立核算。 实物阶段：真实部件维修/维护。 仅计特定等级实际外供维修质量，不与初建重叠。 按第8节 `inv_occurrence` 执行。

- 选定流: 建筑维修混凝土
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_building_asset`

###### 完整替换窗组件 (`u_building_asset_replacement_window`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。以实物平方米的真实建造完成gate建筑产品替换非运行占用生命周期服务，实际维修拆除另列交换，场站公用工程仍独立核算。 实物阶段：真实部件维修/维护。 仅适用实际采购且框玻璃尺寸质量明确的完整窗组件。原窗保留在初始主体内；其他维修产品须按确认身份另列。 按第8节 `inv_occurrence` 执行。

- 选定流: 完整替换窗组件
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_building_asset`

###### 交流电 (`u_building_asset_repair_ac`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。以实物平方米的真实建造完成gate建筑产品替换非运行占用生命周期服务，实际维修拆除另列交换，场站公用工程仍独立核算。 实物阶段：真实部件维修/维护。 独立计量仅维修用电，排除正常场站运行及上游产品已含电。 按第8节 `inv_occurrence`、`inv_ac_basis` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_building_asset`

#### 输出

##### 废物流

###### 废弃完整窗组件 (`u_building_asset_removed_window`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。以实物平方米的真实建造完成gate建筑产品替换非运行占用生命周期服务，实际维修拆除另列交换，场站公用工程仍独立核算。 实物阶段：真实部件维修/维护。 真实单独收集的剩余组件；如保留于拆除废物中不得再独立重复。追溯来源责任暂存处理。 按第8节 `inv_occurrence` 执行。

- 选定流: 废弃完整窗组件
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_building_asset`

###### 剩余拆除混凝土 (`u_building_asset_demolition_concrete`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。以实物平方米的真实建造完成gate建筑产品替换非运行占用生命周期服务，实际维修拆除另列交换，场站公用工程仍独立核算。 实物阶段：配对资产寿终。 拆除交付gate实际混凝土实物流，排除前期维修移除、回收产品及质量损失。采用同一实物建筑寿命受益基准和处理链，不同独立计量物料分列。 配对制造行u_building_asset_building_constructed：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_occurrence` 执行。

- 选定流: 剩余拆除混凝土
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_building_asset`



## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_cohort` | 全部负担与产出 | 按服务等级、重量尺寸组、路线及时效承诺建立闭合收寄队列。唯一收寄ID核对A = D + R + L + X：妥投D、最终退回R、丢失损毁L及其他有证据的最终失败X。未结案阻断队列闭合及完整队列发布。全部已收寄队列负担含失败尝试与退回，且仅除以一次D > 0。再寄仅在独立合同时构成有关联的新收寄，不重复原产出。 | ; upu-parcel-service |
| `allocation_transport` | 自营共享车辆 | 先按实际路线及技术细分。每个装载段j按队列在车包裹毛质量/全部货物毛质量分配观测能耗及排放，活动量整合实际段距。空驶怠速能耗按同一闭合出勤循环的装载质量距离份额归属。分母含全部客户及产品。证实容积限容时，全部货物一致采用实测包裹外体积，并报告质量结果及敏感性；没有物理证据不使用计费体积重。零装载活动或缺全部货物分母均为未解决。 | ghg-scope3-2013 |
| `allocation_sites` | 共享场站与支持 | 优先直接分表或领用归属。分拣能耗设备按队列实测运行秒/全部服务运行秒分配；其他场站公用工程、信息系统和共同支持按实测已收寄队列处理工时秒/全部职能工时秒分配。全部职能分母明确包含观测的收寄前拒收reject_work_seconds、独立柜台及其他服务工时。其份额归在已收寄包裹队列之外；不能仅从A剔除拒收ID却将其场站负担留在队列内。建筑占用面积时间按功能区使用图归属，共享区按上述工时秒份额分配。同期间空闲基础负荷须纳入。各场站及峰谷条件采代表任务，按实际任务数量加权外推并与完整场站总量对账。不按收入分配。 |  |
| `allocation_returns` | 拒收件、库存与回收废物 | 收寄前拒收咨询归独立柜台服务池，妥投服务自身收寄验收活动仍须归属。内部转移、重复分拣与在途库存只是台账事件，不是妥投参考产出。退回包裹仍属客户财产，不是废物；只有邮政实际丢弃材料进入废物卡。运行回收计入一次处理负担，不自动抵扣替代生产。 |  |
| `allocation_damage_loss` | 遗失及受损客户包裹 | 仅在声明服务质量等级下接收获认可时，受损已投包裹才计D，并保留受损标记及质量披露。拒收受损投递保持失败直至最终退回或丢失结案。保留归属闭合队列的修复暂存重运及实际废物处理服务。客户货物保留承运物质量台账，不把货物制造、替换品或货币赔偿列为包裹服务材料。实际销毁货物须记录保管、质量和合法授权处置，作为责任边界明确的独立客户货物处理贡献，不能把整件改称邮政包装废物。 |  |
| allocation_charge_sources | 充电及电池储能库存 | 仅适用于经验证来源总入账I_k>0；零入账占用事件执行allocation_charge_zero。每块实物电池的交流等效能量库存固定采用按时间排序的加权平均来源核算。按原充电会话/来源k保留S_bk，每次经验证的储能增加仅记入其来源一次。每次提取e前，从各来源移除e*S_bk/sum_k(S_bk)，再按规定路线/队列份额归属该次提取。电池转移保留来源向量，等量转出转入，不产生新电力。期初库存须有来源证据；来源不明保持阻断缺口。剩余来源份额跨期结转，并逐来源对账：供应=已归属提取/损失+输出库存+期末库存。充电会话资本/服务小时按该来源实际或有证据预测的寿命期提取/损失中归属各受益者的量，除以其支持的全部提取/损失分配；期末未耗用的资本/服务份额随来源库存保留，更新估计并在耗尽时对账。预测须有证据、不确定性和情景披露，不得临时改用先进先出或全队列里程。废弃或实物损失的储能是服务损失，按该资产相同区间全使用者活动份额归属，不作为转出抵扣；正负担而零受益者保持未解决。交流等效曲线与来源台账不得重复加计损失。 |  |
| allocation_charge_zero | 充电小时及直接失败尝试用电 | 按经验证的新增储能来源总入账I_k对每次占用充电事件分类，不用净SOC变化：正入账后发生提取/损失仍属I_k>0。表计/BMS证据缺失或未解决不等于I_k=0。I_k>0采用allocation_charge_sources。经验证I_k=0时不建立虚假能量来源：调度/预约证据指向单一因果订单/队列时，将设备小时及实测失败尝试用电直接归该责任对象；失败/取消单保留负担而不增加合格产出。仅能确定因果车辆/任务集合时，在该有记录因果集合内，按归属实际服务历时分配，包含失败尝试及充电等候，采用既定互斥路线/时间池并覆盖全部客户。确属共享故障且无法分离因果任务时，固定采用设备/站点当地日历日共享失败池；跨午夜先拆区间，再按当天全部有证据受益业务的服务历时分配，包含失败尝试/等候及研究外业务。固定时区及受益证据，不得任意扩大窗口或用里程/收入替代。共享时长仅拆分一次，不得每单复制。正负担缺受益证据或历时分母为零时保持不完整。直接、因果集合及共享日归属互斥，选研究范围前份额和为一。这些零入账小时仍保留在相同完整寿命占用小时分母内，不得再经来源向量分配。实测交流输入未进入储能的部分，按相同份额作为直接事件损失/运行负担仅计一次，并从任何剩余路线能耗池剔除。有证据的正总充入而电池净变化为零，不是零入账失败。 I_k仅为本次充电事件的总新增储能；带电电池转入保留原来源向量及资本结转，不构成新充电来源或另一笔会话小时。 |  |
| allocation_waste_origin | waste_cardboard; waste_paper; waste_pp | 每笔普通固体废物在产生时固定原服务队列及分层责任，不按后来外运时点归属。优先追溯直接产生任务；共享产生量采用现有场站/处理作业分配驱动，覆盖已记录产生区间内全部客户及非队列工作量。产生事件ID、产生日期、原份额和原参考流分母随暂存及内部转移保留。接入旧废物不是新产生。留存废物仍承担原处理责任，外运期服务不继承该负担。 期间归属前记录场站时区。 共享产生区间固定为当地日历月：先拆月，再使用同月全使用者场站/处理作业驱动，不用后来外运期间或重复完整队列总量。 |  |
| allocation_carrier_recovery | 外包 R134a 回收 | 供应方回收物实际符合产品验收且对外交接时，kg作为独立产品输出，无替代信用，不改变配送参考件数。采用明确切断点：服务承担为车辆维保、合规回收和安全交付所必需的作业至出界交接；接收方承担交接后运送、再生、升级及使用。为制得可销售产品而额外实施的分离、提纯、专用包装等作业及其投入由该产品承担、先作实物细分，不分给配送；若实际共用负担无法细分且不能证实此边界，则阻断完成，须先审核独立的多功能分配方法。废物分支沿实际兼容去向计入服务处理；同一批次/交接ID不得兼记产品与废物。内部回用只是转移。 |  |
| allocation_site_refrigerant_recovery | site_r134a_recovered_product; site_r134a_generated_waste | 供应方回收物实际符合产品验收且对外交接时，kg作为独立产品输出，无替代信用，不改变配送参考件数。采用明确切断点：服务承担为HVAC设备维保、合规回收和安全交付所必需的作业至出界交接；接收方承担交接后运送、再生、升级及使用。为制得可销售产品而额外实施的分离、提纯、专用包装等作业及其投入由该产品承担、先作实物细分，不分给配送；若实际共用负担无法细分且不能证实此边界，则阻断完成，须先审核独立的多功能分配方法。废物分支沿实际兼容去向计入服务处理；同一批次/交接ID不得兼记产品与废物。内部回用只是转移。 已判废库存的原产生责任和完整处理优先执行calc_refrigerant_waste_origin，外运时间不重置责任。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | 支持过程的实物清单 | 逐供应方、场站、配置、事件及核算区间，先将每项实测实物总量划入互斥清单责任，再选研究队列。使用该支持过程固定的活动驱动，分母包含全部使用者及失败作业。直接因果归属优先于共享分配。数量已归属时不得再次乘队列份额。服务层分配量仅作原始驱动，不作交换量，也不再次除最终参考流件数。表计/库存、安装/替换资产、内部转移、产生废物及去向须在同一物理/时间边界闭合。完整产品gate可保留其制造背景，但不得换名重引入一张汇总服务卡。 |  |
| allocation_atomic_capital | 制造；安装；寿终资产 | 逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 |  |
| allocation_capital_restatement | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 本PCR采用全历史重算，不冻结历史份额，也不把余额集中补入退役当期。全部直接和支持资本、可重复使用容器、产品gate外安装及配对终态来源均执行calc_capital_restatement。各具体活动规则确定驱动和受益份额，仅应用一次。已含交付/寿终的完整资产背景采用相同重算，不另加重复终态交换。例行部件维修仍按其因果/期间方法处理。 |  |
| allocation_atomic_waste | 运行和维护产生的废物 | 运行及维护产生废物的原产生事件、供应方/活动队列、份额及原参考流分母须随暂存和转移保留。共享废物区间固定为声明时区的当地日历月，采用同区间因果活动及全部使用者；既有更具体维修年或柜台期间方法优先适用。在一致材料/水分基准核对：期末=期初+产生+内部转入-内部转出-外运-有证据物理损失。留存废物仍须有实际证据或明确有证据相容前瞻路线及不确定性的最终暂存/运输/处理，去向未知保持不完整。后来回执替换原事件模型，不新增外运期负担。资产寿终废物改用配对资本份额。废物载体及内含组分、储存损失/释放及残余处理不得重复；同一实测场站/暂存作业只归一个清单责任方。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_provider_maintenance_period | u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_cohort | service_completion | delivered_parcel | 独立件事件台账 | 收寄ID；服务合同及普遍服务依据；起讫；收寄和接收时间；质量kg；长宽高m；承诺时效；最终状态；退回ID；拒收原因; 柜台会话ID；原受理邮件ID；适用办理程序；回执/交接；失败或纠错；实物范围重叠表 | 保管收寄、每次转移和有效最终接收时扫描；按ID及终态去重，以丢失退回记录结案 汇总方法：A=D+R+L+X；内部扫描不加D；按等级、重量尺寸、路线及时效分组 外部柜台接口只执行boundary_counter_substitution的实物替换；不能用交易会话数推算原包裹数。 | Item(s); kg; m; timestamp | 逐事件 | 连续12个月收寄队列，跟踪每件到最终结案 | 全部收寄、场站及投递点和外包交接 | 每声明的参考流 | 签收或电子接收、收寄登记、平衡、秤和尺寸计校准 |
| cp_interface_contract_road | support_contract_road | svc_contract_road | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集实际毛载荷吨数乘实际载货路段公里数后求和；匹配服务范围保留原闭合空驶/怠速周期和失败运输。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | t*km | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_road_infrastructure | support_road_infrastructure | svc_road_infrastructure | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集指定路段和车型的实际车辆公里，含空驶和失败公里；服务包含道路建设、维护和寿终责任，保留原固定负担及损伤分配方法。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | vehicle*km | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_charging_asset_service | support_charging_asset_service | svc_charging_asset_service | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按原正来源/已核实零补能事件规则归属的装置占用并集小时，包含同时使用端口份额；不含电力。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_building_asset | support_building_asset | svc_building_asset | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集实际占用面积平方米乘按记录日历基准计算的占用年数，按分区和原全用户份额归属。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | m2*a | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_capital_restatement | postal_sites; road_operations; support_contract_road; support_road_infrastructure; support_charging_asset_service; support_building_asset | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | versioned_asset_cohort_ledger | 资产/来源ID；来源阶段及本征单位；原队列/分层与因果父队列；原参考分母及修订；按原期间记录的全用户实际驱动；固定受益份额；完整寿命驱动预测/版本及证据；制造/安装量；终态净残余/路线及版本；此前已记归属原始量B及归一结果；重算f/A/q与有正负号更正；零使用投运责任；重叠排除 | 逐序列/来源对照资产登记、活动表计、供方产品gate与原始结果台账；每次变化执行calc_capital_restatement。用原计量驱动及全用户证据复算，不改实物库存。按来源和原队列核对旧值、新值、差额及原分母；由原记录责任人保存版本与校准证据。 | 来源本征单位；原驱动单位；Item(s) | 每次采购/投运、活动、寿命或来源修订及退役；逐原报告期对账 | 完整资产寿命与全部受影响原队列 | 同资产配置全部用户；原产品gate及独立安装/终态 | 每参考流 | 序列/来源登记、表计校准、寿命证据、接收记录、原队列结果及修订链 |
| cp_energy | postal_sites | site_electricity; site_gas | 表计与燃料库存台账 | 表计ID；场站；期初期末读数；账期；交流充电分表；燃气库存采购退回；温压；干湿；供应密度；已收寄队列工时秒；拒收工时秒；独立柜台工时秒；其他职能工时秒；外部供应商退回；内部退库；系统外转移 | 逐场站抄表对票；气体仅在相同声明条件换算；先直接分表后分配 汇总方法：消耗=期初+外部收入-期末-向外部供应商退回-系统外转移；所选聚合边界内转移抵消；未用料内部退库已含期末库存时不再扣除；按allocation_sites分配；充电剔除一次 | kWh; kg; m3; s | 每月抄表；逐燃料流转 | 闭合队列活动同期间，含后续退回 | 所有邮政自营场站及支持信息系统 | 每声明的参考流 | 校准证明、账单、盘点、服务工时研究 |
| cp_material | postal_sites | site_water; repair_box; paper_label; pp_tape | 供应领用台账 | 具体产品规格；组件边界；完整标签质量；面纸质量；胶质量；底纸质量；离型涂层身份组成；期初末库存；外部收入；外部供应商退回；内部退库；系统外转移；任务领用；质量；体积；场站；日期；任务归属 | 按批称量完整标签纸箱胶带并记录领用件数；抄购水表；记实际配置及发生性 汇总方法：净领用=期初+外部收入-期末-外部供应商退货-非服务使用-系统外转移；未用料内部退库计入期末而非再次扣除；核对标签面纸胶底纸质量及涂层组成；先直接任务后共享工时秒分配；仅除D一次 | kg; m3; Item(s) | 逐批逐领用；每月水量 | 队列活动至最终结案 | 全部纳入场站 | 每声明的参考流 | 采购领用凭证、校准秤表、库存废物对账 |
| cp_transport | road_operations | diesel_fuel; petrol_fuel; traction_electricity; activity_contract_road | 路段车辆能源登记 | 路段ID；外包或自营；起止；路线km；全部货物ID质量体积；车型燃料技术；油库存及密度；充电交流kWh；怠速空驶km；合同包含过程；供应生命周期范围 电池及充电会话ID；期初末校准储能kWh及SOC；可追溯电池转移；配对输入交流/储能曲线；实测可用容量；配置、温度、老化；同步时间 来源向量S_bk；按时序充电/提取/转移事件；逐来源期初末kWh；实际/预测受益提取量及不确定性；资本小时结转台账; 事件/会话ID及占用开始/释放时间；站点时区和日历日；经验证来源总入账I_k及表计/BMS证据；正/零/未知分类；失败/取消原因；因果订单/队列或车辆/任务集合ID；全使用者归属服务历时，含失败尝试/等候；共享日受益证据；直接事件交流kWh；互斥分支/份额台账；电力/来源/资本重叠交叉表 | 逐装载空驶段和保管交接记录；称含寄件包装的毛质量，测外尺寸；燃料充电匹配出勤循环及发票；核查承运边界 汇总方法：自营按allocation_transport分配装载空驶怠速能耗；外包sum实测毛质量kg×段km/1000；无能源重复 纯电车辆须计量输入交流，并用相同配置充放电测试验证直流/BMS储能；建立匹配电池配置、温度与老化的经验交流等效储能曲线。SOC百分比乘名义容量或名义效率不充分。分配前按calc_electric_stock关联电池、会话库存和路线区间；库存或曲线证据缺失阻断完整性。 全部电池转入转出及来源到队列归属须遵守allocation_charge_sources；在同一储能边界计量转移方向，不对废弃储能给转出抵扣。 保留每次实际占用尝试，包含失败/取消及经验证零入账事件。分开测量总入账、净库存变化及并行提取，证据缺失保持未知。正I_k才采用allocation_charge_sources，经验证零I_k采用allocation_charge_zero。关联因果调度/预约及全使用者服务时间记录；固定当地时区，共享事件跨午夜拆分。将分支小时与设备/充电位占用对账，直接事件用电在同一表计台账仅计一次，不虚构库存来源或重复路线能源。 本协议前述牵引/运动/停站分配仅作用于按第8节电力规则扣除独立实测E_zero后的E_route；E_zero按其事件份额仅计一次。 | kg; km; m3; kWh; t*km | 逐段逐出勤循环；每月对账 | 队列至闭合所有旅程及相同全客户出勤循环 | 全部自营外包段，含失败投递及退回 | 每声明的参考流 | GPS路线日志、校准秤尺寸及交流电表、油票、全载货单、签署供应边界 |
| cp_site_asset | postal_sites | sorter_asset; it_asset; activity_building_asset | 物理资产寿命登记 | 资产ID配置；原装组件；全寿命服务小时；归属活动小时；建筑面积m2；占用天数；维护及残余寿终范围；安装退役；替换计划 | 核实资产及服务记录；使用物理寿命活动而非账面折旧；功能区实测面积；逐项核查供应商含维护替换路径 汇总方法：设备份额=归属活动/寿命活动；建筑=归属m2×天数/365；仅除D一次；原装组件不重复 | Item(s); h; km; m2; day | 资产变化及月度活动 | 队列期间及有记录代表性完整寿命 | 各自有场站输送机计算机配置及建筑功能区；供应商资产仍在供应服务内 | 每声明的参考流 | 规格、保修服务史、面积测量、有依据寿命情景及敏感性、供应边界 |
| cp_vehicle_asset | road_operations | diesel_van; petrol_van; electric_van; diesel_truck | 物理资产寿命登记 | 车辆ID配置；原装完整组件；有证据的寿命车辆km；归属使用km；里程表期初末；维护替换计划；残余寿终范围；剔除的显式磨耗制冷剂排放 | 核查自营车辆精确配置、里程表及维护记录；按有证据物理寿命km而非账面折旧。验证原装替换组件供应及残余寿终范围，按boundary_asset_coverage剔除显式前景磨耗与制冷剂逸散。 汇总方法：车辆份额=归属使用车辆km/有证据寿命车辆km；仅除D一次；原装组件已含在完整资产内 | Item(s); km | 资产变化及月度活动 | 队列期间及有记录代表性完整寿命 | 各自营柴油汽油纯电投递厢式车及柴油干线货车配置；不重复承运商资产 | 每声明的参考流 | 规格、保修服务史、面积测量、有依据寿命情景及敏感性、供应边界 |
| cp_waste | postal_sites | waste_cardboard; waste_paper; waste_pp; site_wastewater | 废物转移水平衡 | 具体废物；质量或体积；日期场站；承运接收方；处理；去向比例；表计；存量；标签底纸；蒸发; 产生事件generation_event_id；产生时间/场站；来源任务/队列/分层；原分配份额及参考流分母；产生质量及干湿/组成基准；按原来源期初末库存；内部转移ID及两端；外运；有证据物理损失/释放；接收方及去向份额；实际/前瞻路线及模型版本；证据/不确定性；回执替换状态及修订链 | 包装固体废物：在产生点计量分流产生质量，暂存前记录责任任务/区间；若由完整库存平衡反推产生量，须记录全部转移、损失及测量不确定性，并保留原事件来源。执行allocation_waste_origin及calc_waste_origin。每次转移及期末，用校准及接收证据核对带来源库存。留存量必须有受支持的暂存/运输/处理覆盖；后续回执替换原事件模型，不新增外运期第二笔负担。 污水采用独立体积平衡：计量排水，或以供水减有证据蒸发/其他用途测定；按实际体积衔接一次排水/处理，不套固废kg库存公式，不重复组分。 | kg; m3 | 逐次产生及转移；每月核对原来源库存 | 完整队列活动期间；从原产生追踪留存库存至最终接收证据 | 所有场站及废物接收方 | 每声明的参考流 | 秤校准、联单接收证据、排水账单、水平衡、未发生证据 |
| cp_emissions | direct_emissions | co2_fossil; co2_biogenic; methane; nitrous_oxide; nitrogen_monoxide_urban; nitrogen_dioxide_urban; co; so2; pm25; pm_coarse; co2_fossil_rural; co2_biogenic_rural; methane_rural; nitrous_oxide_rural; nitrogen_monoxide_rural; nitrogen_dioxide_rural; co_rural; so2_rural; pm25_rural; pm_coarse_rural | 物种及技术因子记录 | 实物排放源；物种；燃料发动机治理；化石生物比例；活动值单位；因子值单位版本引文；介质；实测源质量；城乡；尾气非尾气范围；物种身份/CAS；直接质量或摩尔份额；NO2等效QA基准；分子数据来源；化合物/碳基准；校准物种分析及不确定性; 按原基准记录的NMVOC总量，仅质控，非清单行 | 优先源实测；否则引用源特定适配因子并匹配燃料能量或km活动；区分尾气锅炉及轮胎制动 汇总方法：E_g=sum(活动_j×EF_gj×归属_j)/D；因子为物种质量而非CO2e；已含碳含量的因子不再乘含量；粗颗粒仅同源同基准PM10-PM2.5 仅对有明确证据定义为NOx=NO+NO2且按NO2等效表达的总量，记录T、单位/基准及匹配来源实测摩尔份额a=n_NO/(n_NO+n_NO2)。使用独立有据、单位一致的分子质量，m_NO=a*T*M_NO/M_NO2，m_NO2=(1-a)*T。优先采用直接单物种质量实测/因子，不再追加QA总量。T不是普通NO/NO2混合质量，不得直接把质量份额乘T或将全部T灌给NO2。若定义包含其他氮物种、缺组分或换算证据，不得二组分拆算：保留原QA观测，并阻断完成直至实际单物种行及数量确定。PCR不默认任何数值份额或分子质量。 逐实际燃烧/蒸发来源，采用匹配来源且校准的物种分辨采样分析，或可追溯、匹配燃料、发动机/过程、控制、负载、冷/热工况及期间的逐物种因子清单。保留采样回收率、校准/响应因子、检出及不确定性、化学身份、碳基准与化合物基准，以及由分子式/分子数据明确推导的换算。按原声明基准将已识别物种与实测/因子总量对账并调查不闭合；未识别部分不是零，也不是一项通用NMVOC交换。建模完成前，每个实际有依据物种须成为具名双语基本流卡，匹配介质、数量规则和协议，再生成structured。不得猜固定苯/甲苯等名谱、将NMVOC总量当单物质，或在证据不存在时声称物种清单完整。 | kg of each species; kg fuel; MJ; vehicle km | 因子或技术变更时；月度活动 | 匹配地域发动机燃料及治理的队列期间 | 仅前景自营车及燃气锅炉 | 每声明的参考流 | 因子原文及不确定性、烟囱发动机记录、燃料组成、介质证据、含非尾气、缺因子不作零 |
| cp_refrigerant | postal_sites | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | 设备制冷剂质量平衡 | 场所/设备/化学品及批次ID；当地月及时区；I/F/S独立期初末kg；每笔移动ID、两端、货权/保管；毛重/皮重/净量/组成及校准；原生/外购再生/本方受托返回/内部回收来源；外部采购、首次充装、内部回用、供应商未用退货、内转、损失及实际介质；批次原供应量、已分配与未分配份额、混合前各来源kg；上游生产/再生/运输范围；设备原装和独立初装gate及寿命份额；原队列及D；同月场所全用户驱动/直接任务；共享仓各场所同化学品领用kg；判废原事件/份额/处理版本；产品接收及实际外运；原模型更正链；initial/routine来源标记及独立asset/source ID | 在收料、装机、回收、退货、转移及判废点按批次校准称量，扣一次皮重并按同批组成换算化学品kg；保留真实混合载体整股量。对照采购/货权、设备维保、仓账、表计及接收凭证，按calc_r134a逐移动配对I/F/S和来源向量。每月由原场所记录责任人核对全部用户与原队列、首次供应归属及未分配结转；未知量/组成/介质不得归零。判废与后续处理采用cp_refrigerant_waste_origin；初装资本采用cp_capital_restatement。直接排放过程消费同一场所释放账，城市/乡村介质仅分一次。 | kg | 每笔移动/状态变化；每当地月及原队列关闭时对账 | 原供应批次至最终耗用/损失/退回及废物后续处理 | 全部已识别R134a空调；车辆空调若不在资产数据内须另立明确卡 | 每声明的参考流 | 技师记录、校准充注秤、采购回收receipt、充注平衡 |
| cp_transport_capital | road_operations | activity_road_infrastructure; activity_charging_asset_service | 物理资本服务登记 | 路段及道路等级；车型；全使用者交通量及寿命分配；实际自营装载空驶车公里；供应方建设更新养护寿终清单；显式直接磨耗剔除；充电设备序列号；占用会话起止；支持的电池活动区间；队列及全使用者活动kWh；完整寿命占用h；空闲待机kWh；组件重叠交叉表 设备ID；端口ID；占用起止；同端口不重叠区间；并发占用端口数；实测带来源标签会话提取量; 事件/会话ID及占用开始/释放时间；站点时区和日历日；经验证来源总入账I_k及表计/BMS证据；正/零/未知分类；失败/取消原因；因果订单/队列或车辆/任务集合ID；全使用者归属服务历时，含失败尝试/等候；共享日受益证据；直接事件交流kWh；互斥分支/份额台账；电力/来源/资本重叠交叉表 | 先按 foreground_interface_coverage 确定责任。接口活动、供应方接口/质量及兼容证据仍须采集；以下供应方内部实物/资本/物种字段仅对前景责任组成采集。外部组成使用对应 cp_interface_ 协议及兼容背景证据，不重复展开供应方内部。用GPS里程表逐段追溯自营路线及实际道路车型。取得道路生命周期原始清单和各车型完整寿命交通量；先细分专属设施，变动路面更新养护按有工程证据的各车型损坏需求分配，固定容量安全土建按有记录的各车型道路空间*时间需求分配。全部道路使用者份额须闭合；交通、工程分配或清单缺失阻断完整性，不默认不同车型等效。核验基础设施背景已剔除显式直接磨耗释放。充电设备读取校准会话时钟及配对能量库存记录；按calc_electric_stock将每次占用会话关联其支持活动，包含全使用者。正来源小时按allocation_charge_sources分配，经验证零入账小时按allocation_charge_zero分配；跨期追踪电池余能，未知正负担保持缺口。核查完整设备清单、寿命占用小时、空闲电力及车辆建筑资本中的剔除。应用calc_transport_capital，不以价格换算活动。 设备占用时长是任一端口被占用区间的并集，不是并发会话时钟之和。逐端口状态变化拆区间，在同一有证据端口/服务配置内，将该区间小时在实际被占端口间等分；这是本PCR声明的可用性分配选择。H_k为会话k取得的上述设备小时之和，sum_k(H_k)等于整台设备占用并集小时。不同端口等级/配置须分别分层并作容量敏感性。资本计算使用H_k，不用重叠会话原始小时；完整寿命分母同样使用整台设备占用并集小时。 保留每次实际占用尝试，包含失败/取消及经验证零入账事件。分开测量总入账、净库存变化及并行提取，证据缺失保持未知。正I_k才采用allocation_charge_sources，经验证零I_k采用allocation_charge_zero。关联因果调度/预约及全使用者服务时间记录；固定当地时区，共享事件跨午夜拆分。将分支小时与设备/充电位占用对账，直接事件用电在同一表计台账仅计一次，不虚构库存来源或重复路线能源。 | vehicle*km; h; kWh | 逐路段及充电会话；期间对账；年度资本供应方复核 | 完整队列含空驶失败退回尾期及有证据的基础设施和充电设备寿命 | 全部自营路线及充电设备全部使用者；外购运输保留其自身已含道路资本 | 每参考流 | GPS里程表校准；道路等级交通工程清单及分配证据；会话时钟能量校准；设备寿命范围交叉表；无重复复核 |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_contract_road | support_contract_road | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 供应方/车辆/电池/会话ID；同步时钟/时区；入口交流表计/校准；实际容量及与提取分开的DC/BMS总入账I_k；期初末校准存能；配置/温度/老化匹配的交流等效曲线；来源向量S_bk及转移ID；逐源提取/损耗/期末及资本结转；正/零/未知证据；直接E_zero；因果任务及当地日历日全用户服务历时分母；表计及范围重叠责任; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移; 化学品/车辆/储罐ID；互斥移动ID及两端；装机与回收仓分别期初末kg；外购交接kg与装机量；回用；装机/储罐内外转入转出；回收入仓；对外产品或废物交接kg、接收方与状态；分介质逸散；终态残量；归属期间与全用户驱动; 交接时刻与门槛、净批量与皮重、批次组成检验/不确定性、化学品kg、采购新/再生或本方委托返还、货权与责任/接收方、原去回移动ID、批次期初末/领用/已归属份额/退回、上游生产或再生及运输范围、校准编号; 判废证据/时点；原产生事件/批次；I/F/S状态标记及位置；实测产生毛重/皮重/净量/组成及单位；原场所/资产及时区/区间；原因果任务或全用户分配字段/份额；原N及结果版本；留存标记库存；移动ID/两端；实际外运/接收方；暂存损失/介质；前瞻处理版本及残余基准；原模型替换/排重证据 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。在原有互斥承运区段或投递尝试边界内，以承运商实物清单替换完整生命周期服务。保留责任gate、所有客户、失败重试、空返、怠速及最终损失，不与运营商自营区段或其他承运服务重叠。 按实际承运勤务周期的区段技术细分，保留既有载货总质量距离归属，仅在限载证据支持时用实测体积；保留闭合空返怠速周期及互斥末端服务时间池。q_x=Σ(实际实物交换x×适用的所有用户队列份额)/D，仅归一一次。车辆制造量=一完整车辆×归属活动量/有证据的全寿命活动量/D。维护按实际因果事件或既有固定当地日历资产年池计一次，报废采用同一寿命受益份额及剩余质量。承运范围内道路充电建筑产品及各自维护报废亦须纳入。吨公里或包裹尝试计数只对账承运商，不等价于燃料或小时。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 在供应方自身车辆/电池边界执行calc_provider_electric_stock；必须取得校准容量/交流等效实测充放电曲线、按时序带来源标签转移及闭合库存。已有allocation_charge_sources及allocation_charge_zero适用于充电来源/资本小时结转时，采用本供应方原活动责任，不再追加自营车队副本。本车辆规则不用于单独计量车间/场站/安装交流电。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 同一承运资产与回收仓执行calc_carrier_r134a，按批次对账采购、未充注、回收库存与受益事件；单独记录必需维保与为销售产品额外进行的作业。原始资产充注及已覆盖的终态去向不得再计。 按calc_carrier_r134a逐收料、充注、回用、回收、对外交接、退回或逸散事件在物料或工作发生地点记录经校准量；月结并对账对应资产归属期间的批次及保管库存，核对所有接收、来源状态和责任。实际有无分支须有台账，未知不作零。 已判废冷媒的原产生量、份额及原分母执行cp_refrigerant_waste_origin和calc_refrigerant_waste_origin；实际外运量只关闭同一来源的保管记录，不覆盖原责任。 | 各卡原生单位；原始t*km | 逐事件；当地月/维修年对账；每年及资产变化复审；冷媒逐移动、月结及归属期间对账 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性；收发/保管及货权凭证、批次检验、储罐与维修秤校准、上游范围排重表 |
| cp_refrigerant_waste_origin | support_contract_road; postal_sites | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | origin_tagged_refrigerant_waste_ledger | 判废证据/时点；原产生事件/批次；I/F/S状态标记及位置；实测产生毛重/皮重/净量/组成及单位；原场所/资产及时区/区间；原因果任务或全用户分配字段/份额；原N及结果版本；留存标记库存；移动ID/两端；实际外运/接收方；暂存损失/介质；前瞻处理版本及残余基准；原模型替换/排重证据 | 在有证判废点用校准称量及批次组成记录计量；与既有I/F/S逐笔配对、在物理仓内标记，不再另建可加总库存。按calc_refrigerant_waste_origin固定原队列及分母；每次状态、转移、外运、损失和接收证据变化时核对原状态库存、完整处理模型和原结果修订。 | kg; fraction; Item(s) | 每次判废/转移/损失/外运；每当地月对账 | 原产生区间至完整后续处理证据 | 原场所/资产全部受益者及物理接收链 | 每参考流 | 判废批准和退出可用库存证据、校准、批次分析、原份额/分母、处理与替换链 |
| cp_support_road_infrastructure | support_road_infrastructure | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。以建造完成通车gate的真实完整指定道路区段替换道路生命周期服务；后续维护翻新及报废分别列实物交换。 逐区段j记录几何及一完整区段Item(s)，q_section=1×f_fixed,j,c/D。固定建造按有证据的分车型道路空间时间份额，覆盖有记录寿命全部用户，先细分独占部分。可变维护采用事件发生的固定当地日历年y内既有工程损伤份额f_damage,j,y,c，以同年全部用户分车型实际工程损伤需求为分母，时区固定，不得换受益年份或使用全寿命资本份额。q_event,x=实际供应质量能量×f_damage,j,y,c或有记录的因果份额/D；最终剩余载体按适用全寿命受益份额计一次。不得假定车型等价或将车公里等同件；实际载货空返失败公里仅作归属输入。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 | 各卡原生单位；原始vehicle*km | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_charging_asset_service | support_charging_asset_service | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。以真实出厂gate完整充电产品及实际外部安装维修替换报废交换替换生命周期可用小时。H_k保留为归属驱动，不是实物流且不等价一件。 逐实际设备j令B_j,c=Σ正充入(H_k×a_c,k)+Σ已核实零充入(H_k×z_c,k)。H_k沿用实际占用端口间分配后的无重叠设备并集小时；来源向量及结转仅适用毛正充入，零充入沿用直接因果集合固定日份额。q_new_charger=1完整设备×B_j,c/H_j,life/D；H_j,life采用相同全寿命占用并集基准，含零事件及日历报废。安装及最终剩余流按同一实物资产受益份额，维护优先实际因果事件，无法分离时按有证据设备期间全部用户占用小时份额。实测运行交流电保留于E_total/E_zero/E_route及独立待机场站道路账并只计一次；无实际寿命不得把小时转成件或kWh。原分母D仅归一一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 | 各卡原生单位；原始h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_building_asset | support_building_asset | u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。以实物平方米的真实建造完成gate建筑产品替换非运行占用生命周期服务，实际维修拆除另列交换，场站公用工程仍独立核算。 实物主体j采用按既有所有用户场站规则分区归属的实测面积时间A_j,c（m2*年），并有证据支持实物寿命L_j（年）。q_constructed_m2=A_j,c/L_j/D，实物产品单位不保留m2*a。若改用一整栋Item(s)，则q=1×A_j,c/(同基准总楼面面积×L_j)/D，仅选一种表达。实际因果维修直接归属；真正共享的固定日历建筑年维修按当年全部用户占用面积时间份额，并仅除D一次。最终剩余流按对应全寿命占用面积时间受益份额，前期已移除质量不得再计完整原质量。建造制造截止交付，不得包含未来维修拆除。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 | 各卡原生单位；原始m2*a | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_denominator | delivered_parcel | A = D + R + L + X; D>0; q_output = D/D = 1 | cp_cohort | Item(s) |  |
| foreground_interface_method | svc_contract_road; svc_road_infrastructure; svc_charging_asset_service; svc_building_asset | 计量前按 boundary_atomic_support 将每个事件/范围组成划为互不重叠的前景实物或外部服务。现有实物卡公式、组成规则及 cp_support 协议仅适用于前者，不得为启用服务接口而要求外部供应方BOM或内部表计账本。对服务行s采集固定原生单位的原始 A_s,e，并按原具名活动分配确定 alpha_s,e：直接属于队列的事件取1；确需共享的事件保留原全用户驱动、失败/空驶/待机处理及事件窗口。已归属服务量 T_s=sum(A_s,e*alpha_s,e)；原生活动账本已含队列归属时，不得再次乘份额。q_s=T_s/N_ref，N_ref为原队列正参考产出。零产出时保留原始总量并将单位结果标为未完成。时间、面积、计数和运输活动量不得无证据换成能量或设备质量。服务清单已包含资本分配时不得再乘实物资产寿命份额。背景连接仅以q_s乘每一相同服务单位的清单一次；排放因子不是服务交换数量。原实物专用指令及服务禁用措辞仅适用于前景实物分支；服务分支执行本规则及其明确接口协议。 未完成或中止的服务事件仍保留有证据的归属负担。不得因接口以完整单位计数就将其丢弃：须以合同及执行记录证明等效原生服务量，或在声明完整前增设身份明确的部分服务行；不得假定一整单位或零。 已按最终参考流表示的供应方数值不是原始A_s,e：重新计算前须恢复原总量和分母，或证明归一结果完全等价且不再除最终分母。供应方已包含的分配仅应用一次。 | cp_interface_contract_road; cp_interface_road_infrastructure; cp_interface_charging_asset_service; cp_interface_building_asset | 每原参考流的原生服务单位 |  |
| calc_interface_contract_road | svc_contract_road | 执行 foreground_interface_method。原生活动 A_s,e（t*km）：实际毛载荷吨数乘实际载货路段公里数后求和；匹配服务范围保留原闭合空驶/怠速周期和失败运输。仅将原 activity_contract_road 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_contract_road; activity_contract_road | t*km/D |  |
| calc_interface_road_infrastructure | svc_road_infrastructure | 执行 foreground_interface_method。原生活动 A_s,e（vehicle*km）：指定路段和车型的实际车辆公里，含空驶和失败公里；服务包含道路建设、维护和寿终责任，保留原固定负担及损伤分配方法。仅将原 activity_road_infrastructure 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_road_infrastructure; activity_road_infrastructure | vehicle*km/D |  |
| calc_interface_charging_asset_service | svc_charging_asset_service | 执行 foreground_interface_method。原生活动 A_s,e（h）：按原正来源/已核实零补能事件规则归属的装置占用并集小时，包含同时使用端口份额；不含电力。仅将原 activity_charging_asset_service 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_charging_asset_service; activity_charging_asset_service | h/D |  |
| calc_interface_building_asset | svc_building_asset | 执行 foreground_interface_method。原生活动 A_s,e（m2*a）：实际占用面积平方米乘按记录日历基准计算的占用年数，按分区和原全用户份额归属。仅将原 activity_building_asset 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_building_asset; activity_building_asset | m2*a/D |  |
| calc_rows | 全部清单 | q_r = sum(原始总量_rj × 队列归属_rj) / D；已归属不再乘份额；保留原始总量单位 calc_electric_stock及calc_provider_electric_stock已输出按D归一的最终MJ；相关牵引行直接采用该结果，不再乘份额、3.6或除D。 | cp_energy; cp_material; cp_waste; cp_transport | 逐卡单位/妥投件 |  |
| calc_electric | site_electricity | q_site_MJ=3.6*site_kWh_assigned/D，场站台账剔除充电入口电量。牵引用电由calc_electric_stock直接输出MJ/D；不得再次转换或归一化。 | cp_energy | 场站MJ/Item(s) |  |
| calc_freight | activity_contract_road | q_tkm = sum(gross parcel kg × loaded segment km / 1000) / D; 不纳入自营段承运服务 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_transport | 原始活动诊断：t*km / Item(s) | ghg-scope3-2013 |
| calc_site_assets | sorter_asset; it_asset | q_asset = sum(归属活动小时 / 有证据寿命服务小时) / D | cp_site_asset | Item(s)资产 / Item(s)服务 |  |
| calc_vehicle_assets | diesel_van; petrol_van; electric_van; diesel_truck | q_asset = sum(归属使用车辆km / 有证据寿命车辆km) / D | cp_vehicle_asset | Item(s)资产 / Item(s)服务 |  |
| calc_building | activity_building_asset | q_building = sum(归属占用m2 × 天数 / 365) / D 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_site_asset | 原始活动诊断：m2*a / Item(s) |  |
| calc_emissions | 全部燃烧磨损基本流卡 | q_g = sum(活动_j × 物种质量EF_gj × 归属_j)/D；仅因子未包含时按燃料组成分化石生物；不得同时乘燃料碳含量及完整CO2因子；PM2.5与粗PM互斥 | cp_emissions | kg物种 / Item(s) | ghg-scope3-2013 |
| calc_r134a | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | 在本入口声明的适用范围内，按顺序完整执行规则组：common_calc_r134a_identity; common_calc_r134a_stocks; calc_r134a_initial_scope; common_calc_r134a_custody; common_calc_r134a_supply_origin; calc_r134a_allocation; calc_r134a_outputs; calc_r134a_waste_priority; calc_r134a_site_media; calc_r134a_initial_supply。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; common_calc_r134a_identity; common_calc_r134a_stocks; calc_r134a_initial_scope; common_calc_r134a_custody; common_calc_r134a_supply_origin; calc_r134a_allocation; calc_r134a_outputs; calc_r134a_waste_priority; calc_r134a_site_media; calc_r134a_initial_supply | 原生、外购再生、产品、产生废物和空气分别按原D计kg | ghg-scope3-2013 |
| calc_carrier_r134a | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | 在本入口声明的适用范围内，按顺序完整执行规则组：common_calc_r134a_identity; common_calc_r134a_stocks; calc_carrier_r134a_initial_scope; common_calc_r134a_custody; common_calc_r134a_supply_origin; calc_carrier_r134a_allocation; calc_carrier_r134a_outputs; calc_carrier_r134a_waste_priority。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin; common_calc_r134a_identity; common_calc_r134a_stocks; calc_carrier_r134a_initial_scope; common_calc_r134a_custody; common_calc_r134a_supply_origin; calc_carrier_r134a_allocation; calc_carrier_r134a_outputs; calc_carrier_r134a_waste_priority | 外购新料、外购再生、具名回收产品/废物及空气释放分别按原D计kg |  |
| calc_refrigerant_waste_origin | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_refrigerant_waste_origin_generation; calc_refrigerant_waste_origin_quantities; calc_refrigerant_waste_origin_state_ledger; calc_refrigerant_waste_origin_fate_updates。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant; calc_refrigerant_waste_origin_generation; calc_refrigerant_waste_origin_quantities; calc_refrigerant_waste_origin_state_ledger; calc_refrigerant_waste_origin_fate_updates | 原产生事件质量/原D；实物外运独立 |  |
| calc_stock | repair_box; paper_label; pp_tape | 净领用=期初+外部收入-期末-外部供应商退货-其他使用-系统外转移；未用料内部退库已含期末时不再扣除；完整标签质量与底纸废物及交付组件对账；普通固废采用calc_waste_origin；site_wastewater保留独立实测体积平衡 | cp_material; cp_waste | kg or m3 / Item(s) |  |
| calc_waste_origin | waste_cardboard; waste_paper; waste_pp | 对每种指定普通固废r及产生事件j，A_c,r = sum_j(G_j,r*s_c,j)，随后q_c,r=A_c,r/原参考流件数，仅归一化一次。G为实测产生质量，不是外运质量。逐材料及原事件对账：期末=期初+产生+内部转入-内部转出-外部外运-有证据物理损失。记录实际水分/组成变化及互斥损失/释放；不得虚构差额，也不得完整残余质量与其已释放组分重复计量。内部转移保留来源，不产生另一笔交换。即使尚在实物暂存，也应建模原队列废物输出及必要暂存/运输/最终处理；使用实际相容接收证据，或有明确证据、匹配材料/组成/地域的前瞻处理路线并披露不确定性。去向份额和为一且仅乘一次，不默认回收或将留存质量处理计零。去向无依据则保持不完整。实际保管库存及外运另作控制台账，不再追加清单。后续接收证据须替换同一事件的前瞻模型，并用原分母重算原队列，不得将相同质量/处理新增给后来队列。用范围交叉表将必要生命周期各环节仅计一次，排除已含于场站/服务清单的暂存能源和搬运。资本寿终废物寿命份额及污水平衡继续使用各自独立规则。 此处原参考流件数为原队列D。 废物交换gate在产生点。其链接的完整废物管理清单以同一产生质量基准的1kg为输入，覆盖暂存及后续全部去向；最终处理输入仅为扣除储存损失并换算水分基准后的相容实测/有证据预测残余量，不得完整原kg处理再加独立损失。显式储存释放须替换链接清单内相同释放；已含于场站/服务池的暂存/搬运作业须按有记录范围交叉表从废物链接剔除，不得重复。 | cp_waste; cp_cohort | 每原参考流废物产生kg；原来源库存及处理修订台账 |  |
| calc_electric_stock | traction_electricity | 表计加库存能量E_total=实测输入交流+期初交流等效储能kWh+可追溯储能转入-期末交流等效储能kWh-可追溯储能转出。所有项覆盖相同物理边界及完整区间；按采集协议验证匹配配置/温度/老化的实测交流等效曲线，转移保留来源向量，充电损失仅含一次。未知库存/换算保持不完整，不计零。任何路线分配前，先从E_total分离实测零入账直接事件交流电E_zero：E_route=E_total-E_zero。未解释负余量阻断完成。E_route按既定互斥路线/运动/停站池归属；E_zero仅按allocation_charge_zero归属，覆盖全使用者，不虚构储能来源。场站/非充电电力仅保留于其独立场站/支持卡。 令K_traction为原队列已归属剩余路线与直接零事件用电之和（未归一kWh）；traction_electricity=3.6*K_traction/D。充电损失不得再上调，已含同一电量的上游服务不得重复计入。该结果直接写牵引卡；分包车辆由calc_provider_electric_stock在其独立边界求最终量。 | cp_transport; cp_cohort | 每参考流MJ |  |
| calc_transport_capital | activity_road_infrastructure; activity_charging_asset_service | 道路活动=sum(实际自营路段车公里*该段队列份额)/D，含空驶及失败路段；采用规定运动及空驶行程份额，不把包裹t*km替代车公里。各道路车型按cp_transport_capital匹配一次基础设施强度。充电设备活动=[sum_positive(H_k*a_c,k)+sum_zero(H_k*z_c,k)]/D。H_k为cp_transport_capital规定的不重叠归属设备小时。经验证来源总入账I_k>0时，a_c,k为allocation_charge_sources的受益份额，并保留来源库存结转。经验证I_k=0时，z_c,k为allocation_charge_zero中互斥的直接/因果集合/固定日份额。不得将零入账事件除以能量或删除其占用小时。来源按总入账判断，不按净SOC变化。全使用者份额和为一，不得每次会话独立重复全队列里程。完整设备强度=全生命周期清单/寿命占用设备小时，并反映空闲、低利用及日历退役。待机电力须计量占用与空闲区间，按支持活动归属全部受益者，在场站或道路电力中仅计一次，不得两处重复。核验从车辆、建筑及外购运输边界剔除的精确组件/模块；相容证据缺失阻断完整性。 用cp_transport_capital的H_k替代会话原始占用h；正入账采用allocation_charge_sources，已验证零入账采用allocation_charge_zero。 失败尝试直接事件交流用电按相同零事件份额仅计一次，并从剩余路线能耗分配剔除；非事件空闲待机另行对账，不得重复。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_transport_capital; 路线及队列台账; calc_electric_stock | 原始活动诊断：每参考流vehicle*km及占用充电h |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_contract_road | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。按实际承运勤务周期的区段技术细分，保留既有载货总质量距离归属，仅在限载证据支持时用实测体积；保留闭合空返怠速周期及互斥末端服务时间池。q_x=Σ(实际实物交换x×适用的所有用户队列份额)/D，仅归一一次。车辆制造量=一完整车辆×归属活动量/有证据的全寿命活动量/D。维护按实际因果事件或既有固定当地日历资产年池计一次，报废采用同一寿命受益份额及剩余质量。承运范围内道路充电建筑产品及各自维护报废亦须纳入。吨公里或包裹尝试计数只对账承运商，不等价于燃料或小时。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 本行只提供冷媒活动归属证据；外购新料、外购再生、回收与空气释放按calc_carrier_r134a专门终算。 | cp_support_contract_road | 原始t*km及唯一归属实物总量，不是服务产品 |  |
| activity_road_infrastructure | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。逐区段j记录几何及一完整区段Item(s)，q_section=1×f_fixed,j,c/D。固定建造按有证据的分车型道路空间时间份额，覆盖有记录寿命全部用户，先细分独占部分。可变维护采用事件发生的固定当地日历年y内既有工程损伤份额f_damage,j,y,c，以同年全部用户分车型实际工程损伤需求为分母，时区固定，不得换受益年份或使用全寿命资本份额。q_event,x=实际供应质量能量×f_damage,j,y,c或有记录的因果份额/D；最终剩余载体按适用全寿命受益份额计一次。不得假定车型等价或将车公里等同件；实际载货空返失败公里仅作归属输入。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_road_infrastructure | 原始vehicle*km及唯一归属实物总量，不是服务产品 |  |
| activity_charging_asset_service | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。逐实际设备j令B_j,c=Σ正充入(H_k×a_c,k)+Σ已核实零充入(H_k×z_c,k)。H_k沿用实际占用端口间分配后的无重叠设备并集小时；来源向量及结转仅适用毛正充入，零充入沿用直接因果集合固定日份额。q_new_charger=1完整设备×B_j,c/H_j,life/D；H_j,life采用相同全寿命占用并集基准，含零事件及日历报废。安装及最终剩余流按同一实物资产受益份额，维护优先实际因果事件，无法分离时按有证据设备期间全部用户占用小时份额。实测运行交流电保留于E_total/E_zero/E_route及独立待机场站道路账并只计一次；无实际寿命不得把小时转成件或kWh。原分母D仅归一一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_charging_asset_service | 原始h及唯一归属实物总量，不是服务产品 |  |
| activity_building_asset | u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。实物主体j采用按既有所有用户场站规则分区归属的实测面积时间A_j,c（m2*年），并有证据支持实物寿命L_j（年）。q_constructed_m2=A_j,c/L_j/D，实物产品单位不保留m2*a。若改用一整栋Item(s)，则q=1×A_j,c/(同基准总楼面面积×L_j)/D，仅选一种表达。实际因果维修直接归属；真正共享的固定日历建筑年维修按当年全部用户占用面积时间份额，并仅除D一次。最终剩余流按对应全寿命占用面积时间受益份额，前期已移除质量不得再计完整原质量。建造制造截止交付，不得包含未来维修拆除。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_building_asset | 原始m2*a及唯一归属实物总量，不是服务产品 |  |
| calc_atomic_physical | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product; u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。对供应方相容区间j的运行实物流x，由计量、库存平衡、工单或相容的单物种/单材料单位清单取得本卡物理单位Q_x,j。若来源按活动单位提供强度，先算Q_x,j=强度_x,j*实际全使用者活动_j；不得用金额、通用服务排放篮子或未还原原分母的每参考流数值。再按固定过程驱动及全使用者份额，q_x=sum_j(Q_x,j*s_c,x,j)/N_ref，仅归一一次。卡用MJ时，电力kWh仅乘一次3.6；其他计数/质量/体积换算须有适用的实测配置单重、密度、浓度及水分。覆盖相同数量/期间/范围的共享表计或上游产品/服务须按实测重叠交叉表剔除，不能假定比例。 牵引交流电及承运R134a行优先直接采用各自专门计算规则的最终结果，不重复套用本行。 | cp_support_contract_road; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_building_asset | 每原参考流的卡原生物理单位 |  |
| calc_atomic_capital | u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 | cp_support_contract_road; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_building_asset | 制造产品及配对终态残余，相同寿命份额 |  |
| calc_capital_restatement | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | 按各来源本征单位/原队列N_c；实物监管账独立 |  |
| capital_contract_road_diesel_van | u_contract_road_diesel_van; u_contract_road_eol_diesel_van | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_contract_road_diesel_van：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。对该实际车辆序列号配置，采用归属队列车公里除以有证据全部用户全寿命车公里，与原车辆资本规则相同；含载货空返失败移动及日历报废。q=一完整车辆×f/D，仅归一一次，不再乘吨公里或包裹尝试数。原装出厂组件同用f，维护及最终剩余废物另列。 终态行u_contract_road_eol_diesel_van：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_contract_road | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_contract_road_petrol_van | u_contract_road_petrol_van; u_contract_road_eol_petrol_van | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_contract_road_petrol_van：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。对该实际车辆序列号配置，采用归属队列车公里除以有证据全部用户全寿命车公里，与原车辆资本规则相同；含载货空返失败移动及日历报废。q=一完整车辆×f/D，仅归一一次，不再乘吨公里或包裹尝试数。原装出厂组件同用f，维护及最终剩余废物另列。 终态行u_contract_road_eol_petrol_van：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_contract_road | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_contract_road_electric_van | u_contract_road_electric_van; u_contract_road_eol_electric_van | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_contract_road_electric_van：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。对该实际车辆序列号配置，采用归属队列车公里除以有证据全部用户全寿命车公里，与原车辆资本规则相同；含载货空返失败移动及日历报废。q=一完整车辆×f/D，仅归一一次，不再乘吨公里或包裹尝试数。原装出厂组件同用f，维护及最终剩余废物另列。 终态行u_contract_road_eol_electric_van：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_contract_road | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_contract_road_diesel_truck | u_contract_road_diesel_truck; u_contract_road_eol_diesel_truck | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_contract_road_diesel_truck：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。对该实际车辆序列号配置，采用归属队列车公里除以有证据全部用户全寿命车公里，与原车辆资本规则相同；含载货空返失败移动及日历报废。q=一完整车辆×f/D，仅归一一次，不再乘吨公里或包裹尝试数。原装出厂组件同用f，维护及最终剩余废物另列。 终态行u_contract_road_eol_diesel_truck：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_contract_road | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_road_infrastructure_constructed_section | u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_road_infrastructure_constructed_section：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。对该确切已建成区段，先细分独占部分，f_fixed=归属分车型道路空间时间需求/有证据全实物寿命内所有用户道路空间时间需求。q=一完整建造区段×f_fixed/D，不得再乘车公里。后续可变维护不包含于该制造产品。 终态行u_road_infrastructure_eol_asphalt：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 终态行u_road_infrastructure_eol_concrete：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_road_infrastructure | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_charging_asset_service_charger_manufactured | u_charging_asset_service_charger_manufactured; u_charging_asset_service_charger_eol | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_charging_asset_service_charger_manufactured：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。将该实物资产安装链接实际充电设备序列号。f_j,c=[Σ正充入(H_k×a_c,k)+Σ已核实零充入(H_k×z_c,k)]/H_j,life。H采用无重叠完整设备占用并集小时及既有端口分配，H_j,life含至有证据日历报废的全部用户正零事件。正来源结转与零事件直接因果固定日规则不变。q_charger=一完整设备×f_j,c/D，安装实物量按同一f归属。小时仅作归属驱动，不换算件或能量。 终态行u_charging_asset_service_charger_eol：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_charging_asset_service | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_charging_asset_service_installation_concrete | u_charging_asset_service_installation_concrete; u_charging_asset_service_foundation_concrete_eol | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_charging_asset_service_installation_concrete：Q_a为声明产品gate的实际未摊销kg；q=sum(Q_a*f_c,a)/D。使用独立基础资产/批次ID。f_foundation=队列归属且由该基础支持的整设备占用并集小时/有证据的基础完整寿命内全部受支持充电机及使用者占用并集小时，跨充电机代际保留。匹配容量/配置分层，并先将并发占用端口小时等分，再按来源/零事件归属队列。原混凝土量及基础混凝土终态采用相同f_foundation及原最终分母。充电机退役后保留的基础沿其自身寿命登记；实际重浇为新基础批次，不是当期维修量。基础寿命或全受益使用证据缺失阻断完成。 终态行u_charging_asset_service_foundation_concrete_eol：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_charging_asset_service | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_charging_asset_service_installation_ac | u_charging_asset_service_installation_ac | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_charging_asset_service_installation_ac：Q_a为声明产品gate的实际未摊销MJ；q=sum(Q_a*f_c,a)/D。将该实物资产安装链接实际充电设备序列号。f_j,c=[Σ正充入(H_k×a_c,k)+Σ已核实零充入(H_k×z_c,k)]/H_j,life。H采用无重叠完整设备占用并集小时及既有端口分配，H_j,life含至有证据日历报废的全部用户正零事件。正来源结转与零事件直接因果固定日规则不变。q_charger=一完整设备×f_j,c/D，安装实物量按同一f归属。小时仅作归属驱动，不换算件或能量。  整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_charging_asset_service | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_building_asset_building_constructed | u_building_asset_building_constructed; u_building_asset_demolition_concrete | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_building_asset_building_constructed：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/D。对该确切已建成主体使用归属实测占用面积时间A_c及含日历报废的有证据完整实物寿命L年，q_m2=A_c/L/D。等效整栋份额f=A_c/(同面积基准总受支持楼面面积×L)。全部用户采用相同容量分母，m2*a不作实物产出单位。最终剩余废物同用整栋f。 终态行u_building_asset_demolition_concrete：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_building_asset | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| calc_atomic_species | 所有基本实物流清单行 | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。每张基本流卡对应一种物质或物理明确的颗粒载体，以及一个接收介质/子介质。采集实际物种/CAS或已验证化学身份、因子单位及质量/摩尔/碳表达、来源技术/燃料/负载、地点和接收介质。单物种实测排放或相容因子仅用一次。完整产品gate已含的工厂排放不得再列为供应方直接运行排放。颗粒粒径及去向份额互斥；物理颗粒不是虚构纯元素。NOx及NMVOC总量仅作QA观测，不替代基本交换。任何实际额外物种/材料必须在建模完成前拥有具体双语源卡、协议、单位、固定计算及正常投影，不使用选择器或族名占位卡。 | cp_support_contract_road; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_building_asset | 逐接收介质的单物质或明确实物载体 |  |
| calc_nox_speciation | nitrogen_monoxide_urban; nitrogen_dioxide_urban; nitrogen_monoxide_rural; nitrogen_dioxide_rural; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide | 仅对有明确证据定义为NOx=NO+NO2且按NO2等效表达的总量，记录T、单位/基准及匹配来源实测摩尔份额a=n_NO/(n_NO+n_NO2)。使用独立有据、单位一致的分子质量，m_NO=a*T*M_NO/M_NO2，m_NO2=(1-a)*T。优先采用直接单物种质量实测/因子，不再追加QA总量。T不是普通NO/NO2混合质量，不得直接把质量份额乘T或将全部T灌给NO2。若定义包含其他氮物种、缺组分或换算证据，不得二组分拆算：保留原QA观测，并阻断完成直至实际单物种行及数量确定。PCR不默认任何数值份额或分子质量。 | cp_emissions; cp_support_contract_road | NO及NO2各自kg，不以NO2等效作交换 |  |
| calc_nmvoc_species | 实际挥发性有机物物种，完成前须具备具体的源清单行 | 逐实际燃烧/蒸发来源，采用匹配来源且校准的物种分辨采样分析，或可追溯、匹配燃料、发动机/过程、控制、负载、冷/热工况及期间的逐物种因子清单。保留采样回收率、校准/响应因子、检出及不确定性、化学身份、碳基准与化合物基准，以及由分子式/分子数据明确推导的换算。按原声明基准将已识别物种与实测/因子总量对账并调查不闭合；未识别部分不是零，也不是一项通用NMVOC交换。建模完成前，每个实际有依据物种须成为具名双语基本流卡，匹配介质、数量规则和协议，再生成structured。不得猜固定苯/甲苯等名谱、将NMVOC总量当单物质，或在证据不存在时声称物种清单完整。 | cp_emissions | 逐有依据化合物kg；物种未解决阻断完成 |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_electric_stock | u_contract_road_electricity_ac | 逐独立计量供应方车辆/电池边界及完整区间j，E_total=入口交流+期初交流等效储能+可追溯转入-期末交流等效储能-可追溯转出（kWh）。校准同配置、温度及老化的可用容量和入口交流/存能实测曲线；SOC百分比或默认效率不足。每项电池转移和充电/提取/损耗/期末平衡须按时序保留来源向量，含未来受益方及资本小时结转；无依据换算或未知库存阻断完成。路线分配前先剔除独立实测且经验证总入账为零的事件交流电E_zero：E_route=E_total-E_zero；未解释负余量阻断完成。E_route按相同路线/任务区间的既定供应活动activity_*驱动及全部使用者分配，包含空驶/失败。E_zero优先归证实因果订单，其次按实际服务历时归有记录因果任务集合；真实共享且无直接因果的故障采用固定站点当地日历日全用户实际服务历时池，含失败/等候并先跨午夜拆分。总入账未知不得当零，不再对E_zero乘路线份额。q_AC=(sum(E_route_j*s_provider_c,j)+sum(E_zero_k*z_c,k))*3.6/D，仅一次。已归属实物总量不再乘供应份额，不另加充电损失，车间/场站/安装电力不进入车辆池。相容供应强度须证明同样库存/责任闭合，否则采集原始记录。实物资本f沿独立固定寿命驱动，不再乘一项年度能源份额。 | cp_support_contract_road | 每原参考流MJ |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_maintenance_period | u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_recovered_product; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 车辆R134a的供应、回收与释放只按calc_carrier_r134a计算；本规则只提供同资产年驱动和因果归属，不重算其数量。 同一冷媒采购/首次耗用/回收/释放只执行专门冷媒规则；本行不构成另一份采购或拆出件清单。 | cp_support_contract_road; cp_support_road_infrastructure; cp_support_charging_asset_service; cp_support_building_asset | 每原参考流原生物理单位 |  |
| common_calc_r134a_identity | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | 本条属于 calc_r134a; calc_carrier_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐移动ID和批次记录货权、保管、处理责任、实物交接门槛与两端。所有平衡项为具名化学品kg。以校准秤取得净批量B=毛重-皮重；用批次匹配的供应/接收检验或校准分析证明化学品质量份额x，以B*x计算。已独立计得的化学品kg直接用一次。只有证据支持与本卡物料规格相符，才按该具名交换计量；不预设100%或默认纯度。实际跨界物为其他规格混合产品或含油/水等混合废物时，单列真实载体的毛湿净批量及接收状态，冷媒组分kg只入守恒，禁止再作为同一载体的独立出界流；真实载体无卡时须补具名双语卡、协议及直接官方身份核验。组成、实际对象或责任未知时阻断完成。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; allocation_provider_maintenance_period; cp_support_contract_road | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| common_calc_r134a_stocks | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | 本条属于 calc_r134a; calc_carrier_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。装机账L_inst=I_open+X_install+U+I_other_in-I_close-R-I_other_out；R是同ID装机出/仓入，U是仓出/装机入，X_install仅指从未充注新料仓安装的kg。回收/再生仓L_store=S_open+R+S_external_in+S_internal_in-S_close-U-P_ext-W_ext-S_internal_out-S_other_out。P_ext/W_ext是该仓实际对外产品/废物交接中具名化学品组分kg，含混合载体组分供对账。装机直接对外交接只在I_other_out及同事件真实输出记一次，不经过R/P_ext/W_ext；其他转出逐项证明。未充注新料账F_open+F_purchase+F_transfer_in-F_close-X_install-F_transfer_out-F_return=F_other_out；F_other_out逐项证实含实际损失及其他去向。配对内转在总边界抵消。各正残差须以证据定位介质和事件，仅已证空气释放进空气行，必要时含已证未充仓空气逸散；未知、负残差、未证介质或无法对账阻断完成。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; allocation_provider_maintenance_period; cp_support_contract_road | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| calc_r134a_initial_scope | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | 本条属于 calc_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。原装充注若已含于完整HVAC设备则不重复采购；若不在设备产品gate内，按独立初装来源仅归属一次，并用calc_capital_restatement对应设备寿命份额，不能作为当期例行补充料。现场维保、外部处理和设备寿终路径按同一移动ID及责任仅计一次。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| common_calc_r134a_custody | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | 本条属于 calc_r134a; calc_carrier_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。S_external_in=S_purchased+S_custody。S_purchased只纳入证实已再生并符合本设备充注验收的外部产品；由同一责任方送外处理再收回的本方冷媒进S_custody，凭原批次、发出/返回ID及保管/货权证据配对，原料生产不得再购入，实际外部再生、损失、运输和处理按边界各记一次并排重。其他受托料在与可充注库存隔离的保管账逐批对账，返还责任方且不得用U充注；若实际承担外部废物接收、再生或转用责任，须先审该处理边界及具名输入与处理链，缺证或超范围不得宣称完成。自有边界内同批移动只记配对内转。U只取有证验收、可充注且属该服务责任的实物量。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; allocation_provider_maintenance_period; cp_support_contract_road | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| common_calc_r134a_supply_origin | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | 本条属于 calc_r134a; calc_carrier_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。采购或以购买等价方式取得货权时，在实物交付门槛以收料ID登记一次，分别为新料F_purchase与外购已再生、已验收可充注的产品S_purchased。保留每批经核实的同状态供应方上游清单：新料生产或再生处理及相容运输各计一次，剔除已被承运/维修覆盖的重叠。用同批来源向量贯穿未充注和回收仓期初末、调拨、退供应商、装机、处置及释放；同仓同状态实物混合且无法辨认批次时，按移动前已核各来源kg比例扣减。保留毛收料用于实物对账；原供应负担随该来源首次进入本服务的实际新装或经证不可逆服务损失而归属，先记已分配标记，之后的回收、再装或处置只记实际新增作业，不再次分配采购负担。未充装且仍可用的期末存量连同未分配供应负担结转，未使用退货或纯内转不计本服务耗用；跨期分摊各批负担的合计不得超过原可归属量。直接因果、相容年度或期间全用户驱动只应用一次。按购买批次和受益事件链接，不能用收料期总量或同一已入账批次再次补记。服务核算只把与该原队列相联系的已归属供应kg写入输入卡。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement; allocation_provider_maintenance_period; cp_support_contract_road | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| calc_r134a_allocation | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | 本条属于 calc_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对现场HVAC每个当地日历月，先直接归属有证专属任务；其余首次服务耗用/不可逆损失供应、可用产品交接及非废物库存释放采用同月allocation_sites场所资源驱动及全部受益者。逐场所保留跨月来源批次，不以完整队列跨月活动替代逐月分母。无法直追的共享仓余量先按同仓同化学品该月有证各场所领用kg分到场所，再按同月场所份额；缺正领用/全用户分母时保持未决。资产原装/初装量采用前述寿命规则，不再乘当月运行份额。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| calc_r134a_outputs | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | 本条属于 calc_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。A_supply和A_reclaimed分别为归属的外购新料和再生料化学品kg。A_product为满足具名产品卡身份的实际产品交接kg；A_waste仅由calc_refrigerant_waste_origin按原产生事件计算，不能用当期外运量替代。混合载体使用其自身行，不进入这两张具名化学品卡；A_air只取实证空气释放。各用原D除一次。回收产品/废物责任执行allocation_site_refrigerant_recovery，无替代抵扣。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| calc_r134a_waste_priority | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | 本条属于 calc_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本规则的当前场所期间份额仅用于新供应首次耗用/损失、可用产品交接与非废物库存的当期释放；已判废库存的A_waste及其处理/释放必须保留calc_refrigerant_waste_origin规定的原产生责任。本规则不覆盖该原责任。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| calc_r134a_site_media | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | 本条属于 calc_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。此处I/F/S均属于现场HVAC，不与承运车辆库存合并。A_air按实际释放地点在r134a_air与r134a_air_rural间互斥划分，份额和为一，不把两行各写同一总量。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| calc_r134a_initial_supply | refrigerant_r134a; site_r134a_reclaimed_supply; site_r134a_recovered_product; site_r134a_generated_waste; r134a_air; r134a_air_rural | 本条属于 calc_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。归属供应量计算前，将设备gate外初装来源与运行补充来源互斥分开。A_supply/A_reclaimed分别为该原队列原生/再生运行首次耗用或不可逆损失kg，加对应初装来源kg乘calc_capital_restatement资产份额；初装来源不再进入当月运行分配池。设备gate已含原装来源不重复计入这两项。 两张供应行中的例行运行来源绝不乘寿命f；只有按独立asset/source ID和initial/routine标记分离、且不在设备产品gate内的初装来源引用calc_capital_restatement。两互斥分量在各自归属后合并，使用原D仅归一一次。 | cp_refrigerant; cp_refrigerant_waste_origin; cp_capital_restatement | 方法组成部分；清单结果归原入口 | ghg-scope3-2013 |
| calc_carrier_r134a_initial_scope | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | 本条属于 calc_carrier_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。原装充注属整车；维保、外部处理和寿终路径按同一移动ID及责任只计一次。 | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 |  |
| calc_carrier_r134a_allocation | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | 本条属于 calc_carrier_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐确切资产和当地日历维护年，先将有证专属因果事件直归，剩余按该年归属队列的公里/全部受益公里分配，纳入已归属空驶和失败。共享仓能归至资产的领用/损失保留来源；无法追溯的仓损按同仓同化学品同年有记录的各受益资产领用化学品kg分派，再按各资产公里归属。跨年拆分；正量缺全用户公里或有据领用正分母时不完整。 | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 |  |
| calc_carrier_r134a_outputs | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | 本条属于 calc_carrier_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。A_supply和A_reclaimed分别为归属的外购新料和再生料化学品kg。A_product为满足具名产品卡身份的实际产品交接kg；A_waste仅由calc_refrigerant_waste_origin按原产生事件计算，不能用当期外运量替代。混合载体使用其自身行，不进入这两张具名化学品卡；A_air只取实证空气释放。各用原D除一次。回收产品/废物责任执行allocation_carrier_recovery，无替代抵扣。 | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 |  |
| calc_carrier_r134a_waste_priority | u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_r134a_recovered_waste; u_contract_road_r134a_air | 本条属于 calc_carrier_r134a。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本规则的当前资产期间份额仅用于新供应首次耗用/损失、可用产品交接与非废物库存的当期释放；已判废库存的A_waste及其处理/释放必须保留calc_refrigerant_waste_origin规定的原产生责任。本规则不覆盖该原责任。 | allocation_provider_maintenance_period; cp_support_contract_road; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 |  |
| calc_refrigerant_waste_origin_generation | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | 本条属于 calc_refrigerant_waste_origin。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。冷媒仅在有证不可逆决定将其退出可用/可充注库存并用于丢弃、且实物身份、货权与负责服务明确时成为废物。单纯回收不使可用料成为废物，后续外运或商业退款不决定产生日期。记录产生事件j、实物批次/位置、实测毛重/皮重/净量、组成/状态、原资产/场所、产生区间、原受益份额alpha_c,j及原服务分母N_c。直接因果废物归原有证任务；其他废物使用产生时既有场所期间或资产维护年/车辆月驱动及该期间全用户分母。共享仓无法直追的部分，按产生区间既有同化学品领用质量先分资产，再用该原资产受益份额；正量缺有据正分母仍不完整。 | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant | 方法组成部分；清单结果归原入口 |  |
| calc_refrigerant_waste_origin_quantities | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | 本条属于 calc_refrigerant_waste_origin。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐具名废物行r，A_waste_c,r=sum_j(G_j,r*alpha_c,j)，q=A_waste_c,r/N_c，仅归一一次。G为符合该行物料/单位基准的实际产生量，包括已产生但留存的废物。只有匹配的具名化学品废物使用具名化学品卡；含油/水/化学品的其他混合载体另用其真实载体卡及相容整股载体质量，组分kg只用于守恒，不另加废物交换。 | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant | 方法组成部分；清单结果归原入口 |  |
| calc_refrigerant_waste_origin_state_ledger | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | 本条属于 calc_refrigerant_waste_origin。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。废物状态登记是既有I/F/S实物库存的标记视图，不是可加总的第四个实物仓。在同一位置判废仅改变状态标记，不同时扣R、W_ext或其他实物转移；原库存式中可用量与废物标记量之和只计一次。废物标记量不得进入U或其他充注。逐废物来源批次对账：期末=期初+产生+内转入-内转出-实际外运-有证实物损失，转移中保留原份额和N_c。原实物平衡中的W_ext仍只为实际外运，不等于A_waste，也不产生第二笔废物产生量。 | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant | 方法组成部分；清单结果归原入口 |  |
| calc_refrigerant_waste_origin_fate_updates | u_contract_road_r134a_recovered_waste; site_r134a_generated_waste | 本条属于 calc_refrigerant_waste_origin。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。已产生留存废物须按allocation_atomic_waste在产生gate基准覆盖有据暂存/运输/最终处理，使用相容实际证据或明确前瞻路线并披露不确定性。后续接收证据替换同一原模型并重算原队列，包括物料、残余量或去向变化，不向外运期服务再加相同质量/处理。显式暂存释放与处理残余必须替换链接处理清单的对应项而非重复；已在其他服务行的共享场所/暂存作业按范围交叉表剔除。废物标记库存的实物释放若已单列，仍保留原废物来源责任并从链接清单剔除相同释放。可用产品交接继续使用既有产品截断规则，不采用废物分支。来源、组成或处理无依据时原结果保持不完整，后来的出售本身不能将已产生废物改标成产品。 对当前废物行和原队列，A_waste是A_waste_c,r的简写；卡上的D/N就是该原队列N_c，不是外运期产出。 | cp_support_contract_road; cp_refrigerant_waste_origin; cp_refrigerant | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_driver_revision | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐资产a保存有版本的全用户活动与每个原受益队列/分层c，按既有固定责任规则保留失败和空驶工作。u_c,a为截至当时归属该队列的实际驱动；U_a为相同配置和单位的有证完整寿命全用户驱动（已发生实际量加有依据的剩余预测）。U_a必须为正且不小于已发生全用户总量。f_c,a=u_c,a/U_a，不得把剩余活动当作U_a。每次寿命、活动、受益者、来源数量或终态路线变化，都重算全部受影响原队列，包括已报告队列；不得保留旧历史份额而仅对后续队列使用新寿命分母。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_source_correction | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐独立来源s按自身单位求A_s,c,new=Q_s,new*f_c,a。Q_s,new是当前有证、寿命分配前的完整制造/安装来源实物总量，不是扣除历史份额后的未摊余额，或匹配的净终态残余/完整生命周期来源量，不是已分配量。保留此前已记的归属原始量B_s,c及其原归一结果/版本；delta_A_s,c=A_s,c,new-B_s,c。新取得证据的终态来源B=0；已有来源的更正替换同一来源ID。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_normalization | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。使用该原队列当前已核实的参考分母N_c重算q_s,c=A_s,c,new/N_c；若N_c本身被更正，应替换旧结果，不得把delta_A/new_N直接加到以old_N形成的旧结果。剔除有记录重叠后才汇总各来源贡献。正负差额仅更正结果，不能形成负实物转移、替代抵扣或新增当期整机采购。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_retirement | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。最终退役时以完整实测全用户驱动替换U_a，重算全部f和来源量；寿命总活动为正时，所有受益者含非研究业务的份额和为一。实测终态净残余不得再次扣除历史拆出量。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_zero_activity | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。零产出事件保留其既有因果父队列及原分母，不能寻找无关的正产出期间。若原父队列没有正N_c，保留归属原始总量，归一结果保持未决。全寿命活动为零时，仅可凭证归属唯一投运委托责任，并使用同一原队列规则；否则保留未分配来源并阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_shared_driver_controls | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。资产制造、安装和终态负担采用相同更新f；毛库存、实物转移和退役另作实物监管账。对日历时间资产，u为已发生服务容量时间，按既有共享/类别规则向各原类别/期间仅归属一次，包含规则要求的空置/失败责任；U覆盖相同全用户日历容量。q不得再乘一次类别份额。历史不明、寿命/去向无依据或缺原分母时阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_background_version | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。若供应背景或处理模型版本改变但实物数量未变，也必须替换全部受影响原队列的相应链接清单和结果；不能因为实物delta_A=0而保留旧模型。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_complete | 全部卡 | 原始字段协议是强制项；供应商数量可待采，但物理归属、公式分母和去重必须遵守本规则。筛查其他实际材料排放；缺交换阻断完整性。 | 完整发生性与覆盖登记 |
| dq_represent | 队列与分配 | 采用连续12个月收寄并跟踪到闭合，覆盖高峰、全部场站路线；按承诺、质量尺寸、技术地域分层，披露抽样权重不确定性。 | 队列台账、校准、峰谷工作量研究 |
| dq_identity | 每个选定流 | 绑定前核查精确身份；未绑定保留候选且缺失时阻断模型完成。官方名不取消材料路线状态介质限定。 | 官方响应及hash绑定receipt |
| dq_factors | 排放及寿命 | 不设默认因子寿命。记录原文来源版本技术单位边界、不确定性敏感性。代理须基准适配并明确披露；未知不为零。 | 原文、供应或维护证据 |
| dq_condition | 条件卡 | 以燃料资产修复废物记录证明发生未发生，不能只因无发票断言未发生；调查闲置资产、库存变化及外包任务，未确认即未解决。 | 签署场站路线发生矩阵 |
| quality_waste_origin | waste_cardboard; waste_paper; waste_pp | 逐种普通固废核验产生责任、原队列/分层/分母、带来源库存平衡、有证据的实际或前瞻完整处理及后来回执替换。来源/去向/物理损失未知保持明确缺口；后来外运本身不能闭合或改归责任。污水及按寿命摊销资产寿终处理采用各自独立方法。 | 产生/库存/转移台账；有证据处理情景；同事件回执替换 |
| quality_charge_events | activity_charging_asset_service; traction_electricity | 逐次占用充电事件核验来源总入账为正、已验证为零或未解决，不能仅凭净SOC分类。核对互斥来源/直接/因果集合/共享日份额、全部受益者、小时及实测损失。失败/取消的零入账小时仍计负担，不获合格产出抵扣；未知证据不等于零。核验从剩余路线能源池剔除直接事件用电，并保留完整寿命占用小时分母。 | 会话/来源/分支记录；表计占用对账；全使用者因果时间证据 |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | 所有已拆分的支持过程和物种 | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | 范围到实物行对账；供应/BOM/物种原件；签署缺口表 |
| quality_service_interfaces | svc_contract_road; svc_road_infrastructure; svc_charging_asset_service; svc_building_asset | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | cp_interface协议；签署的覆盖责任矩阵；原生单位对账；身份receipt |
| scope_interface_contract_road | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_supply; u_contract_road_r134a_reclaimed_supply; u_contract_road_r134a_recovered_product; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_r134a_recovered_waste; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; svc_contract_road | 对 support_contract_road，svc_contract_road 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_road_infrastructure | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; svc_road_infrastructure | 对 support_road_infrastructure，svc_road_infrastructure 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_charging_asset_service | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; svc_charging_asset_service | 对 support_charging_asset_service，svc_charging_asset_service 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_building_asset | u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete; svc_building_asset | 对 support_building_asset，svc_building_asset 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| inv_urban_air | co2_fossil; co2_biogenic; methane; nitrous_oxide; co; so2; pm25; pm_coarse | 本卡仅适用于城市地面空气；记录源地域，乡村源使用独立乡村卡。 | 所列各清单行既有的采集协议和证据。 |
| inv_nitrogen_species | nitrogen_monoxide_urban; nitrogen_dioxide_urban; nitrogen_monoxide_rural; nitrogen_dioxide_rural | 单一明确化学物种排放，不是NOx或NO2等效总量。使用单物种实测质量/因子，或第8节由证据约束的摩尔物种分解规则；组成未知或汇总定义不相容阻断完整量化。 | 所列各清单行既有的采集协议和证据。 |
| inv_rural_air | co2_fossil_rural; co2_biogenic_rural; methane_rural; nitrous_oxide_rural; co_rural; so2_rural; pm25_rural; pm_coarse_rural | 本卡仅适用于乡村地面空气；记录源地域，城市源使用独立城市卡。 | 所列各清单行既有的采集协议和证据。 |
| inv_carrier_scope | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_r134a_recovered_product; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air | 在原有互斥承运区段或投递尝试边界内，以承运商实物清单替换完整生命周期服务。保留责任gate、所有客户、失败重试、空返、怠速及最终损失，不与运营商自营区段或其他承运服务重叠。 | 所列各清单行既有的采集协议和证据。 |
| inv_occurrence | u_contract_road_diesel; u_contract_road_petrol; u_contract_road_electricity_ac; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_replacement_tyre; u_contract_road_lubricating_oil; u_contract_road_replacement_lfp_battery; u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air; u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_building_asset_building_constructed; u_building_asset_repair_concrete; u_building_asset_replacement_window; u_building_asset_repair_ac; u_building_asset_removed_window; u_building_asset_demolition_concrete | 仅在有证据表明该确切实物交换在被替换范围内发生时；发生未知不得记零。 | 所列各清单行既有的采集协议和证据。 |
| inv_ac_basis | u_contract_road_electricity_ac; u_road_infrastructure_maintenance_ac; u_charging_asset_service_installation_ac; u_charging_asset_service_maintenance_ac; u_building_asset_repair_ac | 仅适用于独立证实的使用点交流电；此通用UUID不确定供应商、电网、电压或发电技术。表计kWh仅乘一次3.6转MJ；安装/维修与运行交流电的表计/阶段责任互斥。 | 所列各清单行既有的采集协议和证据。 |
| inv_vehicle_basis | u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck | 一台确切规格实物车辆及原装部件，截止出厂交付；排除运行、维修替换、报废、道路及充电设施。车型型号须在原服务边界实际发生，不增加新路线。对该实际车辆序列号配置，采用归属队列车公里除以有证据全部用户全寿命车公里，与原车辆资本规则相同；含载货空返失败移动及日历报废。q=一完整车辆×f/D，仅归一一次，不再乘吨公里或包裹尝试数。 | 所列各清单行既有的采集协议和证据。 |
| inv_residual_carrier | u_contract_road_spent_tyre; u_contract_road_spent_oil; u_contract_road_spent_lfp_battery; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck | 交付gate实测真实剩余载体流，排除已排放磨耗逸散及已拆部件。保留原受益责任、暂存和处理链；未知未来去向须明确情景。后来回执替换原来源处理模型，不另加其他队列负担。 | 所列各清单行既有的采集协议和证据。 |
| inv_carrier_emissions | u_contract_road_co2_fossil; u_contract_road_co2_biogenic; u_contract_road_methane; u_contract_road_nitrous_oxide; u_contract_road_carbon_monoxide; u_contract_road_nitric_oxide; u_contract_road_nitrogen_dioxide; u_contract_road_sulfur_dioxide; u_contract_road_pm25; u_contract_road_pm_coarse; u_contract_road_tyre_pm25; u_contract_road_r134a_air | 进入有证据空气介质的实测物种或实物颗粒粒级；原PCR区分城乡时保持分列。按NO2计的NOx不等于NO2实物质量，NO与NO2须经分型及分子质量对账。磨耗排放须剔除背景同释放及废物剩余量中的对应质量。 | 所列各清单行既有的采集协议和证据。 |
| inv_road_scope | u_road_infrastructure_constructed_section; u_road_infrastructure_asphalt_maintenance; u_road_infrastructure_concrete_maintenance; u_road_infrastructure_maintenance_diesel; u_road_infrastructure_maintenance_ac; u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | 以建造完成通车gate的真实完整指定道路区段替换道路生命周期服务；后续维护翻新及报废分别列实物交换。 | 所列各清单行既有的采集协议和证据。 |
| inv_terminal_carrier | u_road_infrastructure_maintenance_asphalt; u_road_infrastructure_maintenance_concrete; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete | 交付gate真实单独收集载体流；最终质量排除前期更换移除、另行回收产品及显式实物损失。保留来源受益归属及完整暂存处理链，不重复其中成分或磨耗释放。 | 所列各清单行既有的采集协议和证据。 |
| inv_charger_scope | u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_replacement_cable; u_charging_asset_service_maintenance_ac; u_charging_asset_service_removed_cable; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol | 以真实出厂gate完整充电产品及实际外部安装维修替换报废交换替换生命周期可用小时。H_k保留为归属驱动，不是实物流且不等价一件。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_scope` | 服务及限定 | 须有普遍服务合同或法律范围、国内起讫、收寄与接收gate、承诺时效、实际周期、重量尺寸分布、距离、方式、责任拆分及技术配置证据。国内与国际、公路与航空、普通与保证时效服务不得视为等价混并。 | un-cpc3-68012; upu-parcel-service |
| validate_service_interfaces | svc_contract_road; svc_road_infrastructure; svc_charging_asset_service; svc_building_asset | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |
| `validate_accounting` | 全部卡ID及协议 | 逐卡检查身份、过程方向类型、属性单位、协议、观测总量、归属及一次归一化。核对队列A=D+R+L+X、材料库存领用废物平衡、表计发票及全负载或处理分母。D<=0、未闭合队列、路线或资产组件重复覆盖均拒绝。 核验充电正来源/已验证零入账分支互斥且电力不重复分配。 检验队列A产生留存废物、队列B后来外运：处理仍归A，后来回执替换A模型，不给B新增相同废物/处理。 核验每项冷媒收料、批次来源、库存、首次用量归属、移动和对外交接货权/状态；核对毛重、皮重、净量与组分证据，不得重复实物载体和组分、上游处理或寿终覆盖。 |  |
| `validate_evidence` | 身份与缺失数据 | 空UUID是明确未绑定候选，不是假身份。数据集最终完成前，逐个绑定核查官方响应与receipt哈希、记录状态、双语名称、限定、流类型属性单位及排放介质；搜索相似性不足以证明。缺数量因子须采集或使用有引文适配代理并披露不确定性，不能作零。本PCR不提供默认消耗、重量、密度、因子或合规限值。 |  |
| `validate_projection` | 双语与机器规则 | 双语须保持规则ID有序序列、卡ID、协议引用、gate、公式、条件、禁止及单位一致。从规范英文同步并比较实际guidance单位及范围，不仅检查schema和hash。candidate/authored及translation aligned是结构编写状态，不代表科学批准或发布。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | 所有支持过程和排放清单行 | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | sorter_asset; it_asset; diesel_van; petrol_van; electric_van; diesel_truck; u_contract_road_diesel_van; u_contract_road_petrol_van; u_contract_road_electric_van; u_contract_road_diesel_truck; u_contract_road_eol_diesel_van; u_contract_road_eol_petrol_van; u_contract_road_eol_electric_van; u_contract_road_eol_diesel_truck; u_road_infrastructure_constructed_section; u_road_infrastructure_eol_asphalt; u_road_infrastructure_eol_concrete; u_charging_asset_service_charger_manufactured; u_charging_asset_service_installation_concrete; u_charging_asset_service_installation_ac; u_charging_asset_service_charger_eol; u_charging_asset_service_foundation_concrete_eol; u_building_asset_building_constructed; u_building_asset_demolition_concrete | 必须核对calc_capital_restatement的原队列/原分母、全用户驱动、来源版本、已记量及重算差额；禁止冻结旧历史再只改后续分母，禁止将退役余额转给无关当期产品，禁止负实物交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 包裹服务gate-to-gate前景并衔接上游能源材料资产及运行废物处理 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 相同限定国内道路普遍邮政服务；下游货物LCA可衔接本服务一次 |
| excluded_use | 整个CPC68012等价、快递、国际、航空海运铁路、冷链、货物生产及无限定跨服务比较 |
| required_metadata | 全部参考限定；D及A/R/L/X；队列路线分层；方法来源；责任供应覆盖；原始至归一化审计轨迹；充电分支及失败事件责任/时区记录；废物产生来源责任、留存库存及接收模型修订链；签署的前景/接口责任矩阵、原生服务活动及背景覆盖；仅对前景责任组成保留原实物活动、制造/终态配对及物种基准 |
| required_quality_disclosure | 未绑定身份、缺数量因子、代理、抽样分配不确定性、寿命敏感性、范围限制及不完整组件 |
| update_trigger | 普遍服务或路线gate服务变动；新燃料材料制冷剂资产；因子供应边界变动；证据纠正；年度队列更新；充电事件证据/分支更正；后来废物回执/去向或产生量更正须更新原队列模型；前景实物身份/物种变化或外部接口配置/单位/覆盖变化须复审适用具体卡并更新投影 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-68012 | official_guidance | UNSD CPC Version 3.0, subclass 68012, and Explanatory Notes p.379. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68012 | 普遍服务包裹收寄运输投递分类；区分非普遍快递 |
| upu-parcel-service | official_guidance | UPU, Parcel Post. https://www.upu.int/en/Postal-Solutions/Programmes-Services/Quality-of-service/Parcel-Post | 邮政过程、跟踪质量及经营者时效承诺；国际背景不建立国内法律义务 |
| ghg-scope3-2013 | official_guidance | WRI/WBCSD, Technical Guidance for Calculating Scope 3 Emissions, v1.0 (2013), category 4 pp.49–71, formulas 4.1–4.4; category 5 pp.72–80. https://ghgprotocol.org/sites/default/files/standards/Scope3_Calculation_Guidance_0.pdf | 燃料电力制冷剂活动、物理质量体积分配、承运边界及废物处理。用于方法支持，不代表完整LCA合规或默认因子 |
