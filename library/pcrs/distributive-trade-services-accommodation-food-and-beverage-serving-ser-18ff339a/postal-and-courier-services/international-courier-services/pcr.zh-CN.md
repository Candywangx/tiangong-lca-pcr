---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.international-courier-services
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 国际快递服务——常温空运及公路网络

## 1. 范围与适用性

本PCR为已编写候选方法。仅覆盖下列较窄服务及路线，不声称覆盖全部CPC68022。数量、时效承诺、供应商清单及未解决数据库身份按本PCR明确的采集及符合性规则处理。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.international-courier-services |
| classification_refs | CPC 3.0 68022; narrower |
| covered_products | 在一份全程责任合同下，采用外包公路取派件、空运干线及实物处理的非普遍服务义务跨国常温非危险文件或包裹快递交付。 |
| excluded_products | 普遍服务义务函件/包裹（68011/68012）、国内快递68021、独立货运区段、报关、撮合及仅柜台服务、仅海运/铁路路线、自营运输/枢纽、温控或危险货物、超限货物及客户货物的制造和使用。 |
| representative_product | 在A国起运地受理、在B国收件地址凭有效证明完成交付的一个具名包裹；A国与B国不同。 |
| production_route | 签约快递商控制受理、路由、跟踪及交付义务，分别采购边界明确的公路货运、空运、场站处理、报关和仓储服务；自营管理为全电力办公室，其设备、场所、公共设施投入及废物均入清单。 |
| market_state | 合格完成的快递交付；无默认时效、质量、尺寸、国家组合或退件率。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 由同一责任服务商承担收取、跨境运输及最终交付的完整国际快递服务。 |
| How much | 1个合格交付托运件；一个托运件为一张受理运单及其固定件数清单，不等于一个包装件或一个运输区段。 |
| How well | 须声明起讫国家、地址gate、件数、实际毛重和尺寸、常温条件、内装物类别、合同服务承诺及交付/状态证据；仅完整满足合同的交付为合格。 |
| How long or cycle | 以受理批次为核算队列，跟踪全部运单至交付、退回、遗失或处置终态；最终分母不含仍未闭合的运单。分别报告合同时长与实际历时。 |
| reference_flow_link | delivered_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格国际常温快递交付 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 国家组合; 起运受理和目的地交付地址; 责任服务商及分包商; 运单/包装件定义; 毛重和尺寸级别; 内装物及常温状态; 空运和公路区段; 日期和服务承诺; 交付证明/状态标准; 队列闭合及各结局数; 供应商清单边界; 分配及电力供应背景 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_count | delivered_service | 物品数量 | Item(s) | Q为合格运单数，不是包装件扫描数、质量、发票数或运输任务数。参考输出Q/Q = 1；所有负荷按队列总量除以正数Q一次。 |
| m_transport | activity_origin_road; activity_air_linehaul; activity_destination_road | Goods transport (mass*distance) | t*km | 每个实际区段用含包装的托运货物实测毛重kg除以1000，乘实际区段km；累加载货区段，并明确分配上游空驶。不得将计费/体积重量当作物理质量或假设最短路线。 |
| m_storage | activity_bonded_storage | 质量×时间 | kg*d | 按每段实际停留天数积分在库货物kg；入出库时间与变动库存确定kg*d。托运件数或仓储费用均不能代表停留活动。 |
| m_energy | office_electricity | 净热值 | MJ | 电表kWh按精确3.6 MJ/kWh换算MJ；本已确认身份使用能量属性，不得改成质量流。 |
| m_office | activity_office_occupancy | 面积×时间 | m2*a | 实测占用建筑面积乘占用日数、除以该日历年实际日数，再分配一次。不得使用默认面积或寿命。 |
| m_mass | label_paper; protective_carton; office_water; office_wastewater; paper_waste; carton_waste; residual_waste; computer_hardware; computer_waste | 质量 | kg | 每种实际材料或废物流单独计量。水体积以有温度依据的密度换算质量，不得使用无依据体积质量系数。硬件为实测笔记本净重按有证据的服务摊销，不是每次交付耗一台。 |
| m_handling | activity_origin_handling; activity_destination_handling | 质量 | kg | 处理kg须与供应商强度参考单位精确匹配：每次实际托运件通过场站按一个完整处理周期计货物kg，包含该周期声明的全部子任务。周期内重复扫描、安检、分拣、装载、卸载不得再加一次kg。真正独立的单阶段服务须在完成前增加自身边界明确的原子卡及匹配阶段强度；多次完整通过可大于去重货物质量，但不增加参考交付数。 |
| m_customs | activity_customs_brokerage | 时间 | h | 用实际申报、改单及检查协调的报关人员记录工时；3600秒=1h；货币、税费或申报次数不能代替实测小时。 |

## 5. 系统边界

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| b_end_to_end | 全部运单 | 从起运地址记录接管受理起，纳入取件、全部空运和公路连接、起讫及中转枢纽、安检、适用出口/过境/进口清关、边境仓储、派送尝试及最终合同交付证据。仅跨境运输区段不满足参考功能。 | `un-cpc3-68022`; `dhl-carriage-2024` |
| b_failure | 队列 | 受理后拒收、海关扣留、损坏、退回、遗失和处置的实际托运件及重派/退回区段均纳入同队列分子；最终不合格者不进入Q。接管前拒绝受理者在队列外，其办公室受理工作作为管理负荷分配；实际接管或运输即触发已受理。未闭合事项阻止最终合格判定。 | `dhl-carriage-2024` |
| b_services | 全部采购服务 | 公路及空运服务包括各自燃料/能源供应、燃烧各物质、车辆/飞机制造维护、装载分配及空载调位分配。处理服务含安检、装卸、场站能源/设备及废物；仓储含其自有空间、公用设施、设备及废物。供应商合同和清单须列明各纳入项；不得再作为快递商直接燃料、机场活动、资产或排放重复加入。缺供应商覆盖为数据不完整，不是零。 | `ghg-transport-2013` |
| b_partition | 区段及分包商 | 以运单、区段/事件、国家/场址、服务商和时间建立唯一服务台账；每个实物活动只能有一个清单责任归属。机场处理、报关、仓储支持实物过程仅计运输/处理服务尚未含的作业。全程空运服务若已含公路接驳或场站作业，使用前须去除重叠；完整国际快递服务不能同时作为区段投入。 | `ghg-product-2011` |
| b_goods | 内装物及包装 | 客户货物及原包装作为受托保管货物跟踪，不是快递商采购，其制造和使用排除，但实际毛重影响运输。快递商新增瓦楞箱和纸标签分别入清单。退回客户货物仍为客户库存，不是共产品；处置须按实测材质废物及下游处理建模，不得虚构替代货物抵扣。 | `dhl-carriage-2024` |
| b_digital | activity_hosted_tracking | 通过实测托管应用活动纳入订舱、关务文件交换、跟踪、调度及交付证明/理赔数据运行；不得混淆服务器实例h、人员h和托运件Item(s)。供应商网络/接入覆盖须终止于明确分界，未覆盖的快递商网络设备或电信活动须在完成前增加独立原子交换。 | `ghg-product-2011` |
| b_office | 自营管理 | 纳入办公室用电、用水、污水、纸、分配笔记本硬件、建筑占用、维护及寿命终点。建筑占用服务含建筑建造、结构维护、暖通设备及其制冷剂生命周期，以及直接办公室卡未覆盖的中央暖通、公共照明、清洁及其他建筑运行。仅排除与直接办公室仪表/卡数量、期间和物理范围完全相同的公共设施量，以及另计笔记本和直接办公室废物。按账期获取全建筑/分区公用设施及清洁/维护记录，扣除全部受益租户/分区（而非仅本快递商）对账后的直接归属量，将剩余公共运行池按全部受益租户/分区的占用面积*时间分配，并将所得公用设施/材料/废物保留于上游占用清单一次。缺中央/共享运行记录阻止完整性。本路线无自营运输/枢纽、现场燃料、专用制冷或发电机；实际发生时，本路线不适用，除非正式扩展方法并增加独立原子卡及协议。 | `ghg-product-2011` |
| b_unlisted | 完整性 | 以下具体行要求适用于实际前景组成；外部服务及兼容背景证据可按 foreground_interface_coverage 覆盖供应方内部组成，无须新增前景行。各场址/供应商实际采购、废物移交、维护及服务须与清单对账。未列出的实际材料（含标签胶黏剂/底纸/油墨）、资产、清洁化学品或被处置客户内装物废物，完成前须增加物理对象明确的独立卡、质量/能量/时间/活动单位、关联协议及相同Q分母；不得按名称将其混入纸或残余废物。服务覆盖证据可将其唯一归于上游，但不得免计。 | `ghg-product-2011` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 客户包装托运件在起运地址由快递商受理接管；前景不含客户货物制造。 |
| starting_condition_role | service_acceptance_gate |
| product_classification_scope | CPC3.0 68022的narrower范围：非普遍服务义务国际常温空运/公路快递。 |
| recursive_input_rule | 执行 boundary_atomic_support：外部活动通过明确的单单位服务接口进入，不递归展开供应方内部。前景实物过程保留原卡及规则。保管货物不是制造投入。 |
| upstream_dataset_requirement | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |
| disclosure | 国家组合；起运受理和目的地交付地址；责任服务商及分包商；运单/包装件定义；毛重和尺寸级别；内装物及常温状态；空运和公路区段；日期和服务承诺；交付证明/状态标准；队列闭合及各结局数；供应商清单边界；分配及电力供应背景 |

### 支持活动原子边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | 支持活动 | 每条启用交换表示一个明确的材料、设备或服务对象，只使用一个主属性和单位。不得仅因服务包含上游过程而禁止服务流。计量前按供应方、合同、场址、事件、接口和范围组成确定责任。运营方运行的过程及由运营方承担清单责任的独立委托现场任务采用前景实物行；责任范围外的独立供应活动采用其明确的服务接口行，供应方制造、公用工程、维护和废物保留在匹配的背景服务中，不另作前景交换。合同本身不使供应方内部过程成为前景。不得改变产品、路线、保管接口或原参考分母。执行 foreground_interface_method 和 foreground_interface_coverage；边界变化须经PCR审查，不得根据数据是否易得任意选择。 此处责任归属指清单责任，不仅指法律所有权：租赁设备的提供可以是外部服务，而运营方运行所用的独立计量电力仍属于前景。 |  |
| foreground_interface_coverage | 所有支持过程及重叠范围 | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| transport | 外包公路及空运运输 | required | 已声明路线适用 | foreground | 每1个合格交付托运件；共用Q分母 |
| handling | 外包场站处理 | required | 已声明路线适用 | foreground | 每1个合格交付托运件；共用Q分母 |
| customs | 报关服务 | conditional | 记录实际法规/运行发生性 | foreground | 每1个合格交付托运件；共用Q分母 |
| storage | 保税扣留仓储 | conditional | 记录实际法规/运行发生性 | foreground | 每1个合格交付托运件；共用Q分母 |
| office | 快递管理及新增包装 | required | 已声明路线适用 | foreground | 每1个合格交付托运件；共用Q分母 |
| digital | 外包快递跟踪应用运行 | required | 已声明网络采用托管跟踪/订舱 | foreground | 每声明的参考流 |
| completion | 队列闭合与合格交付 | required | 已声明路线适用 | foreground | 每1个合格交付托运件；共用Q分母 |
| support_origin_road | 支持接口／前景活动：始发国外包常温快递公路运输 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立的始发道路区段运行；实际合同车辆、能源、直接排放、资本、维护、空驶调位及寿终，排除已归其他过程的航空或场站模块。 | support | 归属至delivered_service |
| support_destination_road | 支持接口／前景活动：目的国外包常温快递公路运输 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立的目的地道路区段运行；实际合同车辆、能源、直接排放、资本、维护、空驶调位及寿终，排除已归其他过程的航空或场站模块。 | support | 归属至delivered_service |
| support_air_linehaul | 支持接口／前景活动：指定航段外包常温快递航空运输 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立货运飞行运行，含匹配飞机及发动机制造、飞行滑行及APU能源、维护、机场支持、空载移动及寿终；保留实际全程服务排除。 | support | 归属至delivered_service |
| support_origin_handling | 支持接口／前景活动：快递货物一次完整始发站处理通过服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立始发场站完整通行执行，含实际安检、卸载、分拣及装载运行和对应实物设备废物；扫描及周期内停留不重复计量。 | support | 归属至delivered_service |
| support_destination_handling | 支持接口／前景活动：快递货物一次完整目的站处理通过服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立目的地或中转场站完整通行执行，含实际安检、卸载、分拣及装载运行和对应实物设备废物；扫描及周期内停留不重复计量。 | support | 归属至delivered_service |
| support_customs_brokerage | 支持接口／前景活动：快递货运配置明确的报关代理作业服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立报关及查验协调办公执行，排除税费罚款及已由场站处理覆盖的任务。 | support | 归属至delivered_service |
| support_bonded_storage | 支持接口／前景活动：常温快递货物保税存储服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立常温保税库存滞留运行，排除已含场站停留；覆盖实际仓库资本、公用工程、搬运清洁及残余处理。 | support | 归属至delivered_service |
| support_office_occupancy | 支持接口／前景活动：快递办公建筑空间占用服务，不含独立计量公用工程 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立快递办公建筑支持，将竣工交付建筑壳体固定设施和制造门固定设备与中央运行资源、部件维护、同cohort终端残余分开，排除快递独立计量卡。 | support | 归属至delivered_service |
| support_hosted_tracking | 支持接口／前景活动：一套配置明确的托管快递追踪应用实例运行服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立配置化跟踪应用执行，按声明供应商至办公接入分界覆盖计算、存储、网络及托管场地实物范围。 | support | 归属至delivered_service |

### 过程：外包公路及空运运输（`transport`）

#### 输入

##### 产品流

### 过程：外包场站处理（`handling`）

#### 输入

##### 产品流

### 过程：报关服务（`customs`）

#### 输入

##### 产品流

### 过程：保税扣留仓储（`storage`）

#### 输入

##### 产品流

### 过程：快递管理及新增包装（`office`）

#### 输入

##### 产品流

###### 交流电（`office_electricity`）

按第8节 `inv_cohort_scope` 执行。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：归属队列管理的实测kWh乘3.6再除以Q；关联供应数据集须指明实际电压、地区、供应组合和线损。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_office`
- 来源：`ghg-product-2011`

###### 运单标签纸基材（`label_paper`）

仅在确认实际发生时使用；有证据未发生可标not_applicable。 按第8节 `inv_cohort_scope` 执行。

- 选定流：运单标签纸基材
- 流属性/单位：质量 / kg
- 数量规则：实际纸基材消耗 = 期初可用库存 + 入库 - 期末可用库存 - 有证据的未用外调；将该实物消耗归属队列后除以Q。重印已包含于库存消耗，不得再次相加；内部未用退库已进入期末库存，不得重复扣减。实际存在的胶黏剂、底纸和油墨仍须独立补充。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_office`
- 来源：`ghg-product-2011`

###### 瓦楞纸板保护箱（`protective_carton`）

仅在确认实际发生时使用；有证据未发生可标not_applicable。 按第8节 `inv_cohort_scope` 执行。

- 选定流：瓦楞纸板保护箱
- 流属性/单位：质量 / kg
- 数量规则：实际快递商新增纸箱净消耗质量，含失败/退回托运件更换箱，除以Q；客户原包装作为受托货物跟踪。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_office`
- 来源：`ghg-product-2011`

###### 快递管理办公室自来水供应（`office_water`）

仅在确认实际发生时使用；有证据未发生可标not_applicable。 按第8节 `inv_cohort_scope` 执行。

- 选定流：快递管理办公室自来水供应
- 流属性/单位：质量 / kg
- 数量规则：办公室计量水质量按a_office分配再除以Q；任何m3换算均采用实测/有依据密度和温度。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_office`
- 来源：`ghg-product-2011`

###### 笔记本计算机硬件（`computer_hardware`）

仅在确认实际发生时使用；有证据未发生可标not_applicable。 按第8节 `inv_cohort_scope` 执行。

- 选定流：笔记本计算机硬件
- 流属性/单位：质量 / kg
- 数量规则：实测笔记本硬件净重乘队列使用h、除以有证据的全寿命使用h，再除以Q；维修部件若上游未含须单列。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`ghg-product-2011`

#### 输出

##### 废物流

###### 办公室生活污水排入市政污水管网（`office_wastewater`）

仅在确认实际发生时使用；有证据未发生可标not_applicable。 按第8节 `inv_cohort_scope` 执行。

- 选定流：办公室生活污水排入市政污水管网
- 流属性/单位：质量 / kg
- 数量规则：实际外排污水质量按a_office分配再除以Q；核对非排水用途，指向一个污水处理接收方，不得未经对账即令出水等于进水。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

###### 废弃运单标签纸基材（`paper_waste`）

仅在确认实际发生时使用；有证据未发生可标not_applicable。 按第8节 `inv_cohort_scope` 执行。

- 选定流：废弃运单标签纸基材
- 流属性/单位：质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/Q；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

###### 废弃瓦楞纸板箱（`carton_waste`）

仅在确认实际发生时使用；有证据未发生可标not_applicable。 按第8节 `inv_cohort_scope` 执行。

- 选定流：废弃瓦楞纸板箱
- 流属性/单位：质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/Q；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

###### 办公室非危险混合生活残余废物（`residual_waste`）

仅在确认实际发生时使用；有证据未发生可标not_applicable。 按第8节 `inv_cohort_scope` 执行。

- 选定流：办公室非危险混合生活残余废物
- 流属性/单位：质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/Q；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

###### 废弃笔记本计算机硬件（`computer_waste`）

仅在确认实际发生时使用；有证据未发生可标not_applicable。 按第8节 `inv_cohort_scope` 执行。

- 选定流：废弃笔记本计算机硬件
- 流属性/单位：质量 / kg
- 数量规则：M_EOL乘队列使用h、除以有证据寿命使用h及Q。M_EOL（kg）为实测报废笔记本残余质量，或依据当前实测净重、有文件再用/保留/拆除计划、有资质接收路线及不确定性形成的明确前瞻残余寿命终点质量。仍在役保留硬件不构成当前实际废物移交，其前瞻生命周期贡献须独立披露并于报废时更新。不得仅因尚未报废即将M_EOL赋零；不得再将实际移交质量重复加入该归一化生命周期贡献。
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_waste`
- 来源：`ghg-product-2011`

### 过程：外包快递跟踪应用运行（`digital`）

#### 输入

##### 产品流

### 过程：队列闭合与合格交付（`completion`）

#### 输出

##### 产品流

###### 合格国际常温快递交付（`delivered_service`）

按第8节 `inv_cohort_scope` 执行。

- 选定流：合格国际常温快递交付
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：前景计算（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每声明的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集后计算（`calculated_from_collection`）
- 采集协议：`cp_cohort`
- 来源：`dhl-carriage-2024`; `ghg-transport-2013`

### 过程：支持接口及前景活动（始发国外包常温快递公路运输）(`support_origin_road`)

#### 输入

##### 产品流

###### 始发国外包常温快递公路运输 (`svc_origin_road`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的始发国外包常温快递公路运输。计量：实际毛载荷吨数乘始发公路实际载货路段公里数后求和，保留原空驶段和失败覆盖。按 cp_interface_origin_road 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_origin_road 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_origin_road。

- 选定流: 始发国外包常温快递公路运输
- 流属性/单位: 运输活动量 / t*km
- 数量规则： sum(A_s,e * alpha_s,e) / Q；原生服务单位 t*km；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_origin_road`

###### 供应明确道路车辆的柴油 (`u_origin_road_diesel`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅当实际燃料身份及车辆日志证实柴油运行时启用，不预设默认燃料。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis` 执行。

- 选定流: 供应明确道路车辆的柴油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 供应明确道路车辆的汽油 (`u_origin_road_petrol`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅当实际燃料身份及车辆日志证实汽油运行时启用，与柴油分开识别牌号及实物量。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis` 执行。

- 选定流: 供应明确道路车辆的汽油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 交流电 (`u_origin_road_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 适用计算见calc_contracted_road_ac；结果已按原参考流归一。 使用第8节两支分账后电卡最终q_card；不同实际供给的非牵引电独立登记。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence`、`inv_ac_basis` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： 3.6*(K_route_assigned+K_zero_assigned+K_nontraction_matched_assigned)/Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 明确型号的道路货运车辆，制造门完整产品 (`u_origin_road_road_vehicle_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 f=匹配道路车辆队列可归属实际车辆km/全部受益方有证据的全寿命车辆km，含因果空驶调位km一次。选队列前应用实际共享载荷及容量约束分配。原整车与终端残余用完全相同f；实际更换部件按匹配期间维护事件计；整机替换则建立独立分配的新资产cohort。 按第8节 `inv_origin_road_scope`、`inv_asset_cohorts` 执行。

- 选定流: 明确型号的道路货运车辆，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 明确路段基础设施，竣工交付完整产品 (`u_origin_road_road_section_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 初建道路资本f为同一路段可归属队列道路空间时间/全部道路受益方有证据的全寿命道路空间时间；空置未用能力保留在全寿命负担，维度一致。初建道路资本不得用年度工程损坏份额。原道路终端残余用完全相同f。 按第8节 `inv_origin_road_scope`、`inv_asset_cohorts`、`inv_construction_gate` 执行。

- 选定流: 明确路段基础设施，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 道路车辆更换轮胎，制造门产品 (`u_origin_road_replacement_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence` 执行。

- 选定流: 道路车辆更换轮胎，制造门产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 已识别润滑油产品 (`u_origin_road_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence` 执行。

- 选定流: 已识别润滑油产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

#### 输出

##### 废物流

###### 寿终残余明确型号的道路货运车辆 (`u_origin_road_road_vehicle_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_origin_road_road_vehicle_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_origin_road_scope`、`inv_terminal_cohorts` 执行。

- 选定流: 寿终残余明确型号的道路货运车辆
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 寿终残余明确路段基础设施 (`u_origin_road_road_section_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_origin_road_road_section_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_origin_road_scope`、`inv_terminal_cohorts` 执行。

- 选定流: 寿终残余明确路段基础设施
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 拆除的道路车辆轮胎 (`u_origin_road_removed_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence` 执行。

- 选定流: 拆除的道路车辆轮胎
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 已识别废润滑油 (`u_origin_road_used_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence` 执行。

- 选定流: 已识别废润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

##### 基本流

###### 化石二氧化碳，排入空气 (`u_origin_road_co2_fossil_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence` 执行。

- 选定流: 化石二氧化碳，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 一氧化碳，排入空气 (`u_origin_road_co_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence` 执行。

- 选定流: 一氧化碳，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 一氧化氮，排入空气 (`u_origin_road_no_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence` 执行。

- 选定流: 一氧化氮，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 二氧化氮，排入空气 (`u_origin_road_no2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence` 执行。

- 选定流: 二氧化氮，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`

###### 二氧化硫，排入空气 (`u_origin_road_so2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_origin_road_scope`、`inv_physical_basis`、`inv_occurrence` 执行。

- 选定流: 二氧化硫，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_road`


### 过程：支持接口及前景活动（目的国外包常温快递公路运输）(`support_destination_road`)

#### 输入

##### 产品流

###### 目的国外包常温快递公路运输 (`svc_destination_road`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的目的国外包常温快递公路运输。计量：实际毛载荷吨数乘目的地公路实际载货路段公里数后求和，保留原空驶段和失败覆盖。按 cp_interface_destination_road 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_destination_road 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_destination_road。

- 选定流: 目的国外包常温快递公路运输
- 流属性/单位: 运输活动量 / t*km
- 数量规则： sum(A_s,e * alpha_s,e) / Q；原生服务单位 t*km；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_destination_road`

###### 供应明确道路车辆的柴油 (`u_destination_road_diesel`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅当实际燃料身份及车辆日志证实柴油运行时启用，不预设默认燃料。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_destination_road_scope` 执行。

- 选定流: 供应明确道路车辆的柴油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 供应明确道路车辆的汽油 (`u_destination_road_petrol`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅当实际燃料身份及车辆日志证实汽油运行时启用，与柴油分开识别牌号及实物量。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_destination_road_scope` 执行。

- 选定流: 供应明确道路车辆的汽油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 交流电 (`u_destination_road_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 适用计算见calc_contracted_road_ac；结果已按原参考流归一。 使用第8节两支分账后电卡最终q_card；不同实际供给的非牵引电独立登记。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_ac_basis`、`inv_destination_road_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： 3.6*(K_route_assigned+K_zero_assigned+K_nontraction_matched_assigned)/Q
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 明确型号的道路货运车辆，制造门完整产品 (`u_destination_road_road_vehicle_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 f=匹配道路车辆队列可归属实际车辆km/全部受益方有证据的全寿命车辆km，含因果空驶调位km一次。选队列前应用实际共享载荷及容量约束分配。原整车与终端残余用完全相同f；实际更换部件按匹配期间维护事件计；整机替换则建立独立分配的新资产cohort。 按第8节 `inv_asset_cohorts`、`inv_destination_road_scope` 执行。

- 选定流: 明确型号的道路货运车辆，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 明确路段基础设施，竣工交付完整产品 (`u_destination_road_road_section_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 初建道路资本f为同一路段可归属队列道路空间时间/全部道路受益方有证据的全寿命道路空间时间；空置未用能力保留在全寿命负担，维度一致。初建道路资本不得用年度工程损坏份额。原道路终端残余用完全相同f。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_destination_road_scope` 执行。

- 选定流: 明确路段基础设施，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 道路车辆更换轮胎，制造门产品 (`u_destination_road_replacement_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_road_scope` 执行。

- 选定流: 道路车辆更换轮胎，制造门产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 已识别润滑油产品 (`u_destination_road_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_road_scope` 执行。

- 选定流: 已识别润滑油产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

#### 输出

##### 废物流

###### 寿终残余明确型号的道路货运车辆 (`u_destination_road_road_vehicle_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_destination_road_road_vehicle_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_destination_road_scope` 执行。

- 选定流: 寿终残余明确型号的道路货运车辆
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 寿终残余明确路段基础设施 (`u_destination_road_road_section_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_destination_road_road_section_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_destination_road_scope` 执行。

- 选定流: 寿终残余明确路段基础设施
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 拆除的道路车辆轮胎 (`u_destination_road_removed_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_road_scope` 执行。

- 选定流: 拆除的道路车辆轮胎
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 已识别废润滑油 (`u_destination_road_used_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_road_scope` 执行。

- 选定流: 已识别废润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

##### 基本流

###### 化石二氧化碳，排入空气 (`u_destination_road_co2_fossil_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_road_scope` 执行。

- 选定流: 化石二氧化碳，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 一氧化碳，排入空气 (`u_destination_road_co_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_road_scope` 执行。

- 选定流: 一氧化碳，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 一氧化氮，排入空气 (`u_destination_road_no_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_road_scope` 执行。

- 选定流: 一氧化氮，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 二氧化氮，排入空气 (`u_destination_road_no2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_road_scope` 执行。

- 选定流: 二氧化氮，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`

###### 二氧化硫，排入空气 (`u_destination_road_so2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_road_scope` 执行。

- 选定流: 二氧化硫，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_road`


### 过程：支持接口及前景活动（指定航段外包常温快递航空运输）(`support_air_linehaul`)

#### 输入

##### 产品流

###### 指定航段外包常温快递航空运输 (`svc_air_linehaul`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的指定航段外包常温快递航空运输。计量：实际货物毛吨数乘实际飞行载货航段公里数后求和；背景服务必须符合 calc_air_payload_allocation，含因果空航段；不得对外购吨公里再次乘客货份额。按 cp_interface_air_linehaul 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_air_linehaul 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_air_linehaul。

- 选定流: 指定航段外包常温快递航空运输
- 流属性/单位: 运输活动量 / t*km
- 数量规则： sum(A_s,e * alpha_s,e) / Q；原生服务单位 t*km；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_air_linehaul`

###### 明确牌号的航空煤油 (`u_air_linehaul_aviation_kerosene`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。仅在航班燃料记录明确该燃料时启用；可持续或调和燃料须按实际供应产品另行识别并留证，不猜调和比例。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_flight_scope` 执行。

- 选定流: 明确牌号的航空煤油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 交流电 (`u_air_linehaul_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_ac_basis`、`inv_flight_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 明确配置并进行货运归属的飞机，制造门完整产品 (`u_air_linehaul_aircraft_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 f采用经有证据客货及货物受益分配后队列可归属实际飞机运行小时/同一飞机配置全部受益方有证据的全寿命运行小时。空载滑行APU使用按实际匹配记录归属一次。不假设飞机质量寿命或客货份额。 按第8节 `inv_asset_cohorts`、`inv_flight_scope` 执行。

- 选定流: 明确配置并进行货运归属的飞机，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 明确机场跑道基础设施，竣工交付完整产品 (`u_air_linehaul_runway_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_flight_scope`、`inv_occupancy_driver` 执行。

- 选定流: 明确机场跑道基础设施，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 已识别航空发动机润滑油 (`u_air_linehaul_engine_oil`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_flight_scope` 执行。

- 选定流: 已识别航空发动机润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

#### 输出

##### 废物流

###### 寿终残余明确配置并进行货运归属的飞机 (`u_air_linehaul_aircraft_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_air_linehaul_aircraft_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_flight_scope` 执行。

- 选定流: 寿终残余明确配置并进行货运归属的飞机
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 寿终残余明确机场跑道基础设施 (`u_air_linehaul_runway_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_air_linehaul_runway_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_flight_scope` 执行。

- 选定流: 寿终残余明确机场跑道基础设施
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 航空发动机废润滑油 (`u_air_linehaul_used_engine_oil`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_flight_scope` 执行。

- 选定流: 航空发动机废润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

##### 基本流

###### 化石二氧化碳，排入空气 (`u_air_linehaul_co2_fossil_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_flight_scope` 执行。

- 选定流: 化石二氧化碳，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 一氧化碳，排入空气 (`u_air_linehaul_co_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_flight_scope` 执行。

- 选定流: 一氧化碳，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 一氧化氮，排入空气 (`u_air_linehaul_no_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_flight_scope` 执行。

- 选定流: 一氧化氮，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 二氧化氮，排入空气 (`u_air_linehaul_no2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_flight_scope` 执行。

- 选定流: 二氧化氮，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`

###### 二氧化硫，排入空气 (`u_air_linehaul_so2_air`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_flight_scope` 执行。

- 选定流: 二氧化硫，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_air_linehaul`


### 过程：支持接口及前景活动（快递货物一次完整始发站处理通过服务）(`support_origin_handling`)

#### 输入

##### 产品流

###### 快递货物一次完整始发站处理通过服务 (`svc_origin_handling`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的快递货物一次完整始发站处理通过服务。计量：按每次独立完整站点通过累计实际货物毛千克；实际重复通过保留独立ID，不设通用每件千克数。按 cp_interface_origin_handling 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_origin_handling 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_origin_handling。

- 选定流: 快递货物一次完整始发站处理通过服务
- 流属性/单位: 质量 / kg
- 数量规则： sum(A_s,e * alpha_s,e) / Q；原生服务单位 kg；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_origin_handling`

###### 交流电 (`u_origin_handling_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_ac_basis`、`inv_origin_terminal_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

###### 供应本过程的自来水 (`u_origin_handling_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_origin_terminal_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

###### 明确场站建筑，竣工交付完整产品 (`u_origin_handling_terminal_building_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver`、`inv_origin_terminal_scope` 执行。

- 选定流: 明确场站建筑，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

###### 明确包件输送机，制造门完整产品 (`u_origin_handling_conveyor_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_origin_terminal_scope`、`inv_active_hours`、`inv_replacement_attribution` 执行。

- 选定流: 明确包件输送机，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

###### 明确货物安检设备，制造门完整产品 (`u_origin_handling_screening_unit_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_origin_terminal_scope`、`inv_active_hours`、`inv_replacement_attribution` 执行。

- 选定流: 明确货物安检设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

###### 明确货运叉车，制造门完整产品 (`u_origin_handling_forklift_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_origin_terminal_scope`、`inv_active_hours`、`inv_replacement_attribution` 执行。

- 选定流: 明确货运叉车，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_origin_handling_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_origin_terminal_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

###### 寿终残余明确场站建筑 (`u_origin_handling_terminal_building_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_origin_handling_terminal_building_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_origin_terminal_scope` 执行。

- 选定流: 寿终残余明确场站建筑
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

###### 寿终残余明确包件输送机 (`u_origin_handling_conveyor_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_origin_handling_conveyor_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_origin_terminal_scope` 执行。

- 选定流: 寿终残余明确包件输送机
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

###### 寿终残余明确货物安检设备 (`u_origin_handling_screening_unit_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_origin_handling_screening_unit_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_origin_terminal_scope` 执行。

- 选定流: 寿终残余明确货物安检设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`

###### 寿终残余明确货运叉车 (`u_origin_handling_forklift_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_origin_handling_forklift_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_origin_terminal_scope` 执行。

- 选定流: 寿终残余明确货运叉车
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_origin_handling`


### 过程：支持接口及前景活动（快递货物一次完整目的站处理通过服务）(`support_destination_handling`)

#### 输入

##### 产品流

###### 快递货物一次完整目的站处理通过服务 (`svc_destination_handling`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的快递货物一次完整目的站处理通过服务。计量：按每次独立完整站点通过累计实际货物毛千克；实际重复通过保留独立ID，不设通用每件千克数。按 cp_interface_destination_handling 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_destination_handling 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_destination_handling。

- 选定流: 快递货物一次完整目的站处理通过服务
- 流属性/单位: 质量 / kg
- 数量规则： sum(A_s,e * alpha_s,e) / Q；原生服务单位 kg；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_destination_handling`

###### 交流电 (`u_destination_handling_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_ac_basis`、`inv_destination_terminal_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

###### 供应本过程的自来水 (`u_destination_handling_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_destination_terminal_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

###### 明确场站建筑，竣工交付完整产品 (`u_destination_handling_terminal_building_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver`、`inv_destination_terminal_scope` 执行。

- 选定流: 明确场站建筑，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

###### 明确包件输送机，制造门完整产品 (`u_destination_handling_conveyor_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_active_hours`、`inv_replacement_attribution`、`inv_destination_terminal_scope` 执行。

- 选定流: 明确包件输送机，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

###### 明确货物安检设备，制造门完整产品 (`u_destination_handling_screening_unit_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_active_hours`、`inv_replacement_attribution`、`inv_destination_terminal_scope` 执行。

- 选定流: 明确货物安检设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

###### 明确货运叉车，制造门完整产品 (`u_destination_handling_forklift_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_active_hours`、`inv_replacement_attribution`、`inv_destination_terminal_scope` 执行。

- 选定流: 明确货运叉车，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_destination_handling_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_destination_terminal_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

###### 寿终残余明确场站建筑 (`u_destination_handling_terminal_building_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_destination_handling_terminal_building_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_destination_terminal_scope` 执行。

- 选定流: 寿终残余明确场站建筑
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

###### 寿终残余明确包件输送机 (`u_destination_handling_conveyor_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_destination_handling_conveyor_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_destination_terminal_scope` 执行。

- 选定流: 寿终残余明确包件输送机
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

###### 寿终残余明确货物安检设备 (`u_destination_handling_screening_unit_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_destination_handling_screening_unit_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_destination_terminal_scope` 执行。

- 选定流: 寿终残余明确货物安检设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`

###### 寿终残余明确货运叉车 (`u_destination_handling_forklift_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_destination_handling_forklift_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_destination_terminal_scope` 执行。

- 选定流: 寿终残余明确货运叉车
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_destination_handling`


### 过程：支持接口及前景活动（快递货运配置明确的报关代理作业服务）(`support_customs_brokerage`)

#### 输入

##### 产品流

###### 快递货运配置明确的报关代理作业服务 (`svc_customs_brokerage`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的快递货运配置明确的报关代理作业服务。计量：按案件关联的实际代理作业小时，含失败及返工作业；同时作业按原全客户规则划分。按 cp_interface_customs_brokerage 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_customs_brokerage 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_customs_brokerage。

- 选定流: 快递货运配置明确的报关代理作业服务
- 流属性/单位: 时间 / h
- 数量规则： sum(A_s,e * alpha_s,e) / Q；原生服务单位 h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_customs_brokerage`

###### 交流电 (`u_customs_brokerage_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_ac_basis`、`inv_customs_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

###### 供应本过程的自来水 (`u_customs_brokerage_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_customs_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

###### 无涂布办公打印纸 (`u_customs_brokerage_paper`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_customs_scope` 执行。

- 选定流: 无涂布办公打印纸
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

###### 明确报关办公计算机，制造门完整产品 (`u_customs_brokerage_broker_computer_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_active_hours`、`inv_replacement_attribution`、`inv_customs_scope` 执行。

- 选定流: 明确报关办公计算机，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

###### 明确报关办公网络交换机，制造门完整产品 (`u_customs_brokerage_broker_network_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_active_hours`、`inv_replacement_attribution`、`inv_customs_scope` 执行。

- 选定流: 明确报关办公网络交换机，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

###### 明确报关办公建筑，竣工交付完整产品 (`u_customs_brokerage_broker_office_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver`、`inv_customs_scope` 执行。

- 选定流: 明确报关办公建筑，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_customs_brokerage_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_customs_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

###### 废弃无涂布办公打印纸 (`u_customs_brokerage_paper_waste`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_customs_scope` 执行。

- 选定流: 废弃无涂布办公打印纸
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

###### 寿终残余明确报关办公计算机 (`u_customs_brokerage_broker_computer_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_customs_brokerage_broker_computer_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_customs_scope` 执行。

- 选定流: 寿终残余明确报关办公计算机
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

###### 寿终残余明确报关办公网络交换机 (`u_customs_brokerage_broker_network_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_customs_brokerage_broker_network_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_customs_scope` 执行。

- 选定流: 寿终残余明确报关办公网络交换机
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`

###### 寿终残余明确报关办公建筑 (`u_customs_brokerage_broker_office_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_customs_brokerage_broker_office_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_customs_scope` 执行。

- 选定流: 寿终残余明确报关办公建筑
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_customs_brokerage`


### 过程：支持接口及前景活动（常温快递货物保税存储服务）(`support_bonded_storage`)

#### 输入

##### 产品流

###### 常温快递货物保税存储服务 (`svc_bonded_storage`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的常温快递货物保税存储服务。计量：按入库/出库事件积分实际货物毛千克乘存储日数；1日为24小时；不得未经对账以发票取整天数替代。按 cp_interface_bonded_storage 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_bonded_storage 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_bonded_storage。

- 选定流: 常温快递货物保税存储服务
- 流属性/单位: 质量时间 / kg*d
- 数量规则： sum(A_s,e * alpha_s,e) / Q；原生服务单位 kg*d；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_bonded_storage`

###### 交流电 (`u_bonded_storage_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_ac_basis`、`inv_bonded_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_bonded_storage`

###### 供应本过程的自来水 (`u_bonded_storage_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_bonded_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_bonded_storage`

###### 明确保税仓库建筑，竣工交付完整产品 (`u_bonded_storage_warehouse_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver`、`inv_bonded_scope` 执行。

- 选定流: 明确保税仓库建筑，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_bonded_storage`

###### 明确保税仓储货架，制造门完整产品 (`u_bonded_storage_storage_rack_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_active_hours`、`inv_replacement_attribution`、`inv_bonded_scope` 执行。

- 选定流: 明确保税仓储货架，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_bonded_storage`

###### 明确保税仓储叉车，制造门完整产品 (`u_bonded_storage_storage_forklift_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_active_hours`、`inv_replacement_attribution`、`inv_bonded_scope` 执行。

- 选定流: 明确保税仓储叉车，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_bonded_storage`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_bonded_storage_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_bonded_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_bonded_storage`

###### 寿终残余明确保税仓库建筑 (`u_bonded_storage_warehouse_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_bonded_storage_warehouse_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_bonded_scope` 执行。

- 选定流: 寿终残余明确保税仓库建筑
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_bonded_storage`

###### 寿终残余明确保税仓储货架 (`u_bonded_storage_storage_rack_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_bonded_storage_storage_rack_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_bonded_scope` 执行。

- 选定流: 寿终残余明确保税仓储货架
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_bonded_storage`

###### 寿终残余明确保税仓储叉车 (`u_bonded_storage_storage_forklift_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_bonded_storage_storage_forklift_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_bonded_scope` 执行。

- 选定流: 寿终残余明确保税仓储叉车
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_bonded_storage`


### 过程：支持接口及前景活动（快递办公建筑空间占用服务，不含独立计量公用工程）(`support_office_occupancy`)

#### 输入

##### 产品流

###### 快递办公建筑空间占用服务 (`svc_office_occupancy`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的快递办公建筑空间占用服务，不含独立计量公用工程。计量：实际占用面积平方米乘按记录日历基准计算的占用年数，保留原全受益方归属。按 cp_interface_office_occupancy 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_office_occupancy 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_office_occupancy。

- 选定流: 快递办公建筑空间占用服务
- 流属性/单位: 面积时间 / m2*a
- 数量规则： sum(A_s,e * alpha_s,e) / Q；原生服务单位 m2*a；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_office_occupancy`

###### 交流电 (`u_office_occupancy_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_ac_basis`、`inv_building_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_office_occupancy`

###### 供应本过程的自来水 (`u_office_occupancy_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_building_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_office_occupancy`

###### 明确办公建筑壳体及固定设施，竣工交付完整产品 (`u_office_occupancy_office_building_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver`、`inv_building_scope` 执行。

- 选定流: 明确办公建筑壳体及固定设施，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_office_occupancy`

###### 明确中央暖通空调设备，制造门完整产品 (`u_office_occupancy_hvac_plant_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_active_hours`、`inv_replacement_attribution`、`inv_building_scope` 执行。

- 选定流: 明确中央暖通空调设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_office_occupancy`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_office_occupancy_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_building_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_office_occupancy`

###### 寿终残余明确办公建筑壳体及固定设施 (`u_office_occupancy_office_building_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_office_occupancy_office_building_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_building_scope` 执行。

- 选定流: 寿终残余明确办公建筑壳体及固定设施
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_office_occupancy`

###### 寿终残余明确中央暖通空调设备 (`u_office_occupancy_hvac_plant_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_office_occupancy_hvac_plant_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_building_scope` 执行。

- 选定流: 寿终残余明确中央暖通空调设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_office_occupancy`


### 过程：支持接口及前景活动（一套配置明确的托管快递追踪应用实例运行服务）(`support_hosted_tracking`)

#### 输入

##### 产品流

###### 一套配置明确的托管快递追踪应用实例运行服务 (`svc_hosted_tracking`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的一套配置明确的托管快递追踪应用实例运行服务。计量：配置明确的实例实际运行小时；保留原事务/资源时间分配、失败事务及归属待机。按 cp_interface_hosted_tracking 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_hosted_tracking 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_hosted_tracking。

- 选定流: 一套配置明确的托管快递追踪应用实例运行服务
- 流属性/单位: 时间 / h
- 数量规则： sum(A_s,e * alpha_s,e) / Q；原生服务单位 h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_hosted_tracking`

###### 交流电 (`u_hosted_tracking_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_ac_basis`、`inv_tracking_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 供应本过程的自来水 (`u_hosted_tracking_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_physical_basis`、`inv_occurrence`、`inv_tracking_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 明确跟踪服务器，制造门完整产品 (`u_hosted_tracking_server_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_tracking_scope`、`inv_it_driver` 执行。

- 选定流: 明确跟踪服务器，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 明确跟踪数据存储设备，制造门完整产品 (`u_hosted_tracking_storage_unit_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_tracking_scope`、`inv_it_driver` 执行。

- 选定流: 明确跟踪数据存储设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 明确跟踪网络交换机，制造门完整产品 (`u_hosted_tracking_network_switch_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_tracking_scope`、`inv_it_driver` 执行。

- 选定流: 明确跟踪网络交换机，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 明确托管数据中心建筑，竣工交付完整产品 (`u_hosted_tracking_datacentre_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver`、`inv_tracking_scope` 执行。

- 选定流: 明确托管数据中心建筑，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 明确数据中心冷却设备，制造门完整产品 (`u_hosted_tracking_cooling_plant_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_tracking_scope`、`inv_it_driver` 执行。

- 选定流: 明确数据中心冷却设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / Q；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_hosted_tracking_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_tracking_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 寿终残余明确跟踪服务器 (`u_hosted_tracking_server_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_hosted_tracking_server_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_tracking_scope` 执行。

- 选定流: 寿终残余明确跟踪服务器
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 寿终残余明确跟踪数据存储设备 (`u_hosted_tracking_storage_unit_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_hosted_tracking_storage_unit_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_tracking_scope` 执行。

- 选定流: 寿终残余明确跟踪数据存储设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 寿终残余明确跟踪网络交换机 (`u_hosted_tracking_network_switch_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_hosted_tracking_network_switch_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_tracking_scope` 执行。

- 选定流: 寿终残余明确跟踪网络交换机
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 寿终残余明确托管数据中心建筑 (`u_hosted_tracking_datacentre_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_hosted_tracking_datacentre_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_tracking_scope` 执行。

- 选定流: 寿终残余明确托管数据中心建筑
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`

###### 寿终残余明确数据中心冷却设备 (`u_hosted_tracking_cooling_plant_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_hosted_tracking_cooling_plant_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_tracking_scope` 执行。

- 选定流: 寿终残余明确数据中心冷却设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / Q；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_hosted_tracking`



## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| a_direct | 全部活动 | 先按实际服务商、国家组合、服务等级和路线细分；文件/包裹和质量/体积等级作为独立层，各有Q及对应失败活动。功能、承诺或gate不同的层不得宣称等价。 | `ghg-product-2011` |
| a_transport | 公路及空运服务 | 采用实际货物t*km活动，并匹配运输方式、车/机型、燃料、区域、利用率、装载约束及空载覆盖的供应商数据集。共享多站公路路线按逐段货物质量距离分配行程负荷；若体积为约束，采用实测占用体积距离份额，记录全车载货并作质量/体积分配敏感性。空载/调位归于受服务行程，不得归为零货物距离。腹舱及全货机均采用calc_air_payload_allocation的主质量方法、原始量/预分配数据接受条件及敏感性，不能用披露供应方方法代替本PCR算法，也不得悄用全货机替代。 | `ghg-transport-2013`; `ghg-product-2011` |
| a_hubs | 处理仓储关务 | 完整处理周期直接追踪至托运件；共享处理仅在验证设备需求及供应商参考单位范围后按每完整周期实际毛重分配，不得将全周期强度拆成重复子任务kg。仓储按实测kg*d并验证容量约束、相关时作体积时间敏感性，报关按记录人员h。常规分拣、额外检查及保税扣留须可区分。各共享池包含全部受益活动，包括失败和非研究业务。 | `ghg-product-2011` |
| a_office | 办公室共享池和资产 | 专属记录直接归属；共享办公室能源/水/占用/耗材采用完整受理队列实测人员任务时间占全部受益任务时间的比例，含接管前筛查及失败事项。硬件质量贡献等于笔记本实测净重乘队列使用h、除以有证据的预期总寿命使用h；披露更换/维修及剩余寿命敏感性。笔记本供应清单终止于另计的寿命终点之前；剔除供应商中已在此计入的寿命终点负荷。笔记本净重、lifetime_useh及M_EOL须一致采用至最终报废的完整实物资产服务寿命，包含有证据计划后续再用；保留/再用部件不是当前废物，也无替代抵扣。不得使用默认寿命、容量或系数。 普通纸/纸箱/残余废物改按allocation_waste_origin及同一产生区间任务份额，保留原队列责任。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | `ghg-product-2011` |
| allocation_waste_origin | paper_waste; carton_waste; residual_waste | 每笔普通固体废物在产生时固定原服务队列及分层责任，不按后来外运时点归属。优先追溯直接产生任务；共享产生量采用现有场站/处理作业分配驱动，覆盖已记录产生区间内全部客户及非队列工作量。产生事件ID、产生日期、原份额和原参考流分母随暂存及内部转移保留。接入旧废物不是新产生。留存废物仍承担原处理责任，外运期服务不继承该负担。 对共享产生量，固定按当地日历月边界拆记录（68013仍采用已声明柜台核算期间）；在同一产生区间内采用既定场站任务/处理作业驱动，不用后来外运或完整队列窗口的份额。直接事件归属优先。 期间归属前记录场站时区。 |  |
| a_waste | 废物与退回 | 不得把服务负荷转给损坏/退回货物、废物或内部交接，不假设替代抵扣。废物输出向一个具名接收路线转移物理载体；下游处理只链接一次，不得再次把所含物质作为废物质量相加，也不得将CO2当量作为基本流排放。 | `ghg-product-2011` |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | 支持过程的实物清单 | 逐供应方、场站、配置、事件及核算区间，先将每项实测实物总量划入互斥清单责任，再选研究队列。使用该支持过程固定的活动驱动，分母包含全部使用者及失败作业。直接因果归属优先于共享分配。数量已归属时不得再次乘队列份额。服务层分配量仅作原始驱动，不作交换量，也不再次除最终参考流件数。表计/库存、安装/替换资产、内部转移、产生废物及去向须在同一物理/时间边界闭合。完整产品gate可保留其制造背景，但不得换名重引入一张汇总服务卡。 |  |
| allocation_atomic_capital | 制造；安装；寿终资产 | 逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 |  |
| allocation_capital_restatement | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 本PCR采用全历史重算，不冻结历史份额，也不把余额集中补入退役当期。全部直接和支持资本、可重复使用容器、产品gate外安装及配对终态来源均执行calc_capital_restatement。各具体活动规则确定驱动和受益份额，仅应用一次。已含交付/寿终的完整资产背景采用相同重算，不另加重复终态交换。例行部件维修仍按其因果/期间方法处理。 |  |
| allocation_atomic_waste | 运行和维护产生的废物 | 运行及维护产生废物的原产生事件、供应方/活动队列、份额及原参考流分母须随暂存和转移保留。共享废物区间固定为声明时区的当地日历月，采用同区间因果活动及全部使用者；既有更具体维修年或柜台期间方法优先适用。在一致材料/水分基准核对：期末=期初+产生+内部转入-内部转出-外运-有证据物理损失。留存废物仍须有实际证据或明确有证据相容前瞻路线及不确定性的最终暂存/运输/处理，去向未知保持不完整。后来回执替换原事件模型，不新增外运期负担。资产寿终废物改用配对资本份额。废物载体及内含组分、储存损失/释放及残余处理不得重复；同一实测场站/暂存作业只归一个清单责任方。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_provider_maintenance_period | u_origin_road_removed_tyre; u_origin_road_lubricant; u_origin_road_used_lubricant; u_destination_road_removed_tyre; u_destination_road_lubricant; u_destination_road_used_lubricant; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_origin_road_replacement_tyre; u_destination_road_replacement_tyre | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_digital | digital | activity_hosted_tracking | application_resource_log | 服务商；应用/配置；实例起止；计算/内存/存储/网络；队列/全部请求资源时间；冗余；供应商能源/冷却/水/资产/废物边界；接入分界 | 在每个托管区间及配置变化时采集配置实例和资源日志；将原运单关联资源时间，含不成功调用；每月核实供应商原始活动、网络覆盖及分配。完整应用h乘队列资源时间份额；可追踪专属记录直接归属，待机按全部受益资源时间份额分配。缺使用量或供应商覆盖阻止完成。 | h; s | 逐托管区间；每月对账 | 全队列订舱至最终证明、理赔及终态处理 | 托管服务商、网络/接入商和签约快递商 | 每声明的参考流 | 供应商日志；配置合同；资源时间对账；完整清单及网络分界 |
| cp_interface_origin_road | support_origin_road | svc_origin_road | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集实际毛载荷吨数乘始发公路实际载货路段公里数后求和，保留原空驶段和失败覆盖。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | t*km | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_destination_road | support_destination_road | svc_destination_road | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集实际毛载荷吨数乘目的地公路实际载货路段公里数后求和，保留原空驶段和失败覆盖。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | t*km | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_air_linehaul | support_air_linehaul | svc_air_linehaul | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集实际货物毛吨数乘实际飞行载货航段公里数后求和；背景服务必须符合 calc_air_payload_allocation，含因果空航段；不得对外购吨公里再次乘客货份额。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | t*km | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_origin_handling | support_origin_handling | svc_origin_handling | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按每次独立完整站点通过累计实际货物毛千克；实际重复通过保留独立ID，不设通用每件千克数。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | kg | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_destination_handling | support_destination_handling | svc_destination_handling | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按每次独立完整站点通过累计实际货物毛千克；实际重复通过保留独立ID，不设通用每件千克数。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | kg | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_customs_brokerage | support_customs_brokerage | svc_customs_brokerage | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按案件关联的实际代理作业小时，含失败及返工作业；同时作业按原全客户规则划分。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_bonded_storage | support_bonded_storage | svc_bonded_storage | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按入库/出库事件积分实际货物毛千克乘存储日数；1日为24小时；不得未经对账以发票取整天数替代。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | kg*d | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_office_occupancy | support_office_occupancy | svc_office_occupancy | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集实际占用面积平方米乘按记录日历基准计算的占用年数，保留原全受益方归属。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | m2*a | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_hosted_tracking | support_hosted_tracking | svc_hosted_tracking | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集配置明确的实例实际运行小时；保留原事务/资源时间分配、失败事务及归属待机。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_capital_restatement | office; support_origin_road; support_destination_road; support_air_linehaul; support_origin_handling; support_destination_handling; support_customs_brokerage; support_bonded_storage; support_office_occupancy; support_hosted_tracking | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | versioned_asset_cohort_ledger | 资产/来源ID；来源阶段及本征单位；原队列/分层与因果父队列；原参考分母及修订；按原期间记录的全用户实际驱动；固定受益份额；完整寿命驱动预测/版本及证据；制造/安装量；终态净残余/路线及版本；此前已记归属原始量B及归一结果；重算f/A/q与有正负号更正；零使用投运责任；重叠排除 | 逐序列/来源对照资产登记、活动表计、供方产品gate与原始结果台账；每次变化执行calc_capital_restatement。用原计量驱动及全用户证据复算，不改实物库存。按来源和原队列核对旧值、新值、差额及原分母；由原记录责任人保存版本与校准证据。 | 来源本征单位；原驱动单位；Item(s) | 每次采购/投运、活动、寿命或来源修订及退役；逐原报告期对账 | 完整资产寿命与全部受影响原队列 | 同资产配置全部用户；原产品gate及独立安装/终态 | 每参考流 | 序列/来源登记、表计校准、寿命证据、接收记录、原队列结果及修订链 |
| cp_cohort | completion | delivered_service | event_register | 运单ID；包装件ID；受理扫描/时刻/地址/国家；接管前拒绝；服务级别；状态；承诺；每次交接/尝试；最终证明；损坏；退回/遗失/处置；待处理；闭合日；合格标记 | 在起运接管及每次承运/海关/交付事件记录；以原运单关联独立交付/理赔/库存证据；冻结包装件清单并将受理队列跟踪至终态。 汇总明细：唯一已受理A = Q + F_returned + F_lost + F_disposed + F_damaged_or_nonconforming + pending；终态按遗失、处置、退回发件人、已交付但损坏/不符合、合格交付的优先序归类；损坏且退回者只进入退回；重试最终可一次进入Q；要求pending = 0。初始拒绝R0独立于A，受理入口对账A+R0。 | Item(s); kg; timestamps | 逐事件；每日对账；队列闭合 | 队列受理日起至最后终态；报告实际时长 | 全部起运地、中转、目的地及分包商 | 每声明的参考流 | 接管/交付扫描；合同；授权状态验收；理赔闭合；签字结局对账 |
| cp_transport | transport | activity_origin_road; activity_air_linehaul; activity_destination_road | segment_activity | 运单；区段ID；服务商；起讫；国家；公路/航班；车/机型；出发/到达；毛重kg；距离证据；总载货kg/m3；货物体积；空载km；燃料/资产/服务覆盖；飞机客货分配；唯一航段/因果清册；全部货物含包装kg C；旅客及全部行李kg P；原队列货物M_c；载重单/称量校准；旅客质量调查人群/日期/适用性/不确定性；机组/ULD/机体/燃料排除；每因果航段轮挡H_t；供应清单原未分配总量、功能分母、已嵌份额和方法/范围 | 逐段获取实际装载清单/航班及GPS路由记录；受理及包装改变后用校准秤称重测尺寸；合同开始及更新时核实供应商原始活动与清单。 汇总明细：按唯一区段用calc_transport；各卡总量除以Q一次；供应商利用率及空载分配只计一次。 对每航段执行calc_air_payload_allocation；验同航段质量、因果表和原供应清单，采用唯一主方法且不二次乘p_freight。 | kg; m3; km; t*km | 逐区段；每月供应商对账 | 完整队列，含退回航班、改航及分配空驶 | 全部公路/空运服务商，含中转连接 | 每声明的参考流 | 校准；运单重量审核；供应商边界矩阵；原始燃料/载重及客货分配证据；距离来源 |
| cp_handling | handling | activity_origin_handling; activity_destination_handling | handling_event | 运单；周期ID；通过ID；场址/服务商；周期起止gate；供应商参考活动/单位；已含子任务ID；扫描/事件ID；kg；安检/装卸/分拣覆盖；能源/设备/废物范围；已含停留h；重叠标记 | 逐完整通过周期读取校准货物质量及场站入出扫描；将子任务事件关联唯一周期ID。供应商接入及每次服务变化时记录强度精确参考活动、gate及已含安检/卸载/分拣/装载；核实其清单及独立边界的异常检查。 汇总明细：各供应商服务强度须匹配自身完整周期定义，每个周期ID和实际通过仅计货物kg一次，按起运或目的地/中转分组后除以Q。不得将已含子任务/扫描事件作为额外周期。单阶段强度仅能用于自身边界明确的补充原子卡；已含停留不得再进cp_storage。 | kg | 逐完整通过周期并关联子任务扫描；每月总量审核 | 全部已受理队列至终态 | 起运、中转和目的地场站 | 每声明的参考流 | 场站扫描；地磅校准；供应商边界及需求分配检验 |
| cp_customs | customs | activity_customs_brokerage | time_record | 运单；报关单ID；国家；服务商；人员/起止；任务；检查发生性；扣留/放行；服务覆盖；独立税费 | 在各相关国家获取有日期报关任务工时及官方放行/检查事件；返工关联原运单并区分货币支付。 汇总明细：任务秒数/3600求和，剔除处理清单已含任务，共享任务按观测时间分配，再除以Q；未发生须有签字豁免/放行证据。 | h | 逐任务；以海关放行对账 | 全队列所有出口/过境/进口事件 | 实际报关商及海关接口 | 每声明的参考流 | 报关工时；海关事件ID；重叠矩阵；独立放行证明 |
| cp_storage | storage | activity_bonded_storage | stock_time_register | 运单；场址/服务商；入出；kg；占用m3；库存变化；处理已含停留；扣留原因；能源/资产/废物范围 | 在入库、出库及库存变化读取保税库存和放行日志；检查供应商精确边界及公共设施/空间分配证据。 汇总明细：对处理服务范围之外的不重叠区间，kg乘历时秒/86400求和，一致分配物理容量，再除以Q；零值须有无扣留/入出证据。 | kg; d; kg*d; m3 | 逐库存区间；每日库存对账 | 完整停留期，含受理期结束后 | 实际保税及异常扣留场址 | 每声明的参考流 | 库存账；海关放行；时间戳审核；供应商清单及容量证据 |
| cp_office | office | office_electricity; label_paper; protective_carton; office_water | meter_and_stock_records | 办公室；电/水表起止读数及单位；密度/温度；发票；纸/纸箱领用质量；可用期初期末库存；重印/更换；队列/全部任务时间；校准；采购完整性 | 在账期边界及变化时读取办公室仪表；以校准秤称各材料批次并保留有日期领用库存账；每日采任务时间，每月核供应商证据。 汇总明细：实物使用 = 期初库存 + 入库 - 期末可用库存 - 有证据的未使用外调；按a_office分配后除以Q一次。分别进行电3.6换算和水密度换算；不得强令材料投入等于Q。 | kWh; MJ; kg; m3; h | 每日领用/时间；每月表计/库存闭合 | 全部受理队列发生的所有贡献期 | 仅责任快递商管理办公室 | 每声明的参考流 | 仪表/秤校准；发票和库存平衡；每日任务时间；实际电力供应元数据；未发生签字检查 |
| cp_assets | office | computer_hardware; activity_office_occupancy | asset_register | 资产ID；笔记本净kg；采购/维修；实际/预期寿命使用h依据；队列使用h；报废状态；实测报废残余净kg或前瞻M_EOL依据；再用/保留/接收计划；占用m2；日期；全建筑/分区公共设施/清洁/维护总量；全部受益租户/分区直接仪表数量/期间/范围重叠；受益面积*时间；占用/暖通范围；任务份额 | 以校准秤测笔记本净配置并按实测平面图取面积；初次及每次变化核查资产历史、利用日志、占用合同；依据使用及更换记录更新寿命估计。 汇总明细：硬件 = 净kg*队列使用h/寿命使用h/Q；占用 = m2*实际年度占用比例*队列任务份额/Q。占用上游运行 = 实测全建筑/分区公用设施、清洁及维护总量减去完全相同期间/范围内已归属直接办公室卡的量；先按本办公室占用面积*时间占全部受益占用面积*时间的比例分配剩余池，再作办公室队列分配。保留未直接计量的中央运行，不得赋零。建筑服务内不得重复硬件；维修须有实际独立部件身份或已含覆盖证据。资产寿命终点定义M_EOL（kg）为实测报废残余质量，或以当前实测净重、有文件预期再用/保留/拆除、接收路线及不确定性形成的明确前瞻残余质量；尚未报废不得使M_EOL为零。 | kg; h; m2; d; m2*a | 每次资产/空间变化；每月使用闭合 | 队列贡献服务期及有证据资产寿命 | 快递商办公室资产；服务商管理的建筑设备 | 每声明的参考流 | 资产称重/校准；平面图；报废/维修记录；寿命估计和敏感性；供应商建筑服务边界 |
| cp_waste | office | office_wastewater; paper_waste; carton_waste; residual_waste; computer_waste | waste_transfer | 废物ID；材质；净kg；水分基准；污水计量/估算依据；产生/移交日；库存；来源资产；实际报废/保留/再用；实测报废残余或前瞻M_EOL kg及推导/依据；接收计划/路线；组成；已含处理；任务/寿命份额；实际移交或前瞻贡献标记; 产生事件generation_event_id；产生时间/场站；来源任务/队列/分层；原分配份额及参考流分母；产生质量及干湿/组成基准；按原来源期初末库存；内部转移ID及两端；外运；有证据物理损失/释放；接收方及去向份额；实际/前瞻路线及模型版本；证据/不确定性；回执替换状态及修订链 | 每次分类移交按皮重称量并获取接收凭证；抽查残余组成；污水计量或用计量进水扣独立测得非管网用途对账；读取资产报废账。普通固废采用以下来源方法。笔记本生命周期寿命终点用M_EOL*队列使用h/寿命使用h/Q，M_EOL为实测报废残余kg或以实测资产质量、有文件再用/保留/拆除及接收计划为依据的明确前瞻残余kg。监管实际移交台账与该归一化/前瞻生命周期贡献分开；报废时对账，不得再加一次相同移交量。非危险混合残余作为一条实测接收方废物流，而非不同流清单。 普通纸/纸箱/残余废物分支采用calc_waste_origin，以原产生区间任务份额归属，不用后来队列/外运任务份额。在产生点计量分流产生质量，暂存前记录责任任务/区间；若由完整库存平衡反推产生量，须记录全部转移、损失及测量不确定性，并保留原事件来源。执行allocation_waste_origin及calc_waste_origin。每次转移及期末，用校准及接收证据核对带来源库存。留存量必须有受支持的暂存/运输/处理覆盖；后续回执替换原事件模型，不新增外运期第二笔负担。 | kg; h | 逐移交；每月库存/污水对账；逐次普通废物产生及每月来源库存对账 | 队列贡献期及分配资产寿命终点；原产生责任保留至最终处理证据 | 仅办公室；供应商枢纽废物保留在其采购服务中 | 每声明的参考流 | 签字废物凭证；皮重/秤校准；接收许可及去向；组成样本；污水平衡；寿命终点覆盖 |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_origin_road | support_origin_road | u_origin_road_diesel; u_origin_road_petrol; u_origin_road_electricity; u_origin_road_road_vehicle_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_manufacture; u_origin_road_road_section_terminal; u_origin_road_replacement_tyre; u_origin_road_removed_tyre; u_origin_road_lubricant; u_origin_road_used_lubricant; u_origin_road_co2_fossil_air; u_origin_road_co_air; u_origin_road_no_air; u_origin_road_no2_air; u_origin_road_so2_air | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移; 道路牵引/非牵引分表；电池及电表ID；交流入口kWh；同配置温度老化的校准曲线；期初末交流等效存能；带电转入转出来源；每会话总入账及有证零入账直接电；各路段/停靠全用户份额；队列归属及剩余受益人; 非牵引分表ID及范围、实际供给/电压、直归工单、同期间全受益服务/处理分钟、排重表 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立的始发道路区段运行；实际合同车辆、能源、直接排放、资本、维护、空驶调位及寿终，排除已归其他过程的航空或场站模块。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。保留区段和运单ID、货物毛质量距离及既定有证据的容量约束和空驶规则；分配前移除全程运输重叠，按Q归一化。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 牵引用电必须执行calc_contracted_road_ac；场站用电不套电池公式，只由独立实测台账按适用物理驱动归属。 非牵引按calc_contracted_road_ac另账取数，按其q_card合计或分行。 | 各卡原生单位；原始t*km | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_destination_road | support_destination_road | u_destination_road_diesel; u_destination_road_petrol; u_destination_road_electricity; u_destination_road_road_vehicle_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_manufacture; u_destination_road_road_section_terminal; u_destination_road_replacement_tyre; u_destination_road_removed_tyre; u_destination_road_lubricant; u_destination_road_used_lubricant; u_destination_road_co2_fossil_air; u_destination_road_co_air; u_destination_road_no_air; u_destination_road_no2_air; u_destination_road_so2_air | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移; 道路牵引/非牵引分表；电池及电表ID；交流入口kWh；同配置温度老化的校准曲线；期初末交流等效存能；带电转入转出来源；每会话总入账及有证零入账直接电；各路段/停靠全用户份额；队列归属及剩余受益人; 非牵引分表ID及范围、实际供给/电压、直归工单、同期间全受益服务/处理分钟、排重表 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立的目的地道路区段运行；实际合同车辆、能源、直接排放、资本、维护、空驶调位及寿终，排除已归其他过程的航空或场站模块。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。保留区段和运单ID、货物毛质量距离及既定有证据的容量约束和空驶规则；分配前移除全程运输重叠，按Q归一化。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 牵引用电必须执行calc_contracted_road_ac；场站用电不套电池公式，只由独立实测台账按适用物理驱动归属。 非牵引按calc_contracted_road_ac另账取数，按其q_card合计或分行。 | 各卡原生单位；原始t*km | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_air_linehaul | support_air_linehaul | u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移; 跑道/段资产ID；实际移动ID、有效使用面积及占用时段；完整寿命全使用者交通记录或有证预测；各航段客/货、全货及队列份额；空载/调位受益；建设、维护及终态供应排重; 空载/调位调度原因；全部唯一因果航段ID、轮挡到轮挡小时和客货/队列份额；唯一航段/因果清册；全部货物含包装kg C；旅客及全部行李kg P；原队列货物M_c；载重单/称量校准；旅客质量调查人群/日期/适用性/不确定性；机组/ULD/机体/燃料排除；每因果航段轮挡H_t；供应清单原未分配总量、功能分母、已嵌份额和方法/范围 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立货运飞行运行，含匹配飞机及发动机制造、飞行滑行及APU能源、维护、机场支持、空载移动及寿终；保留实际全程服务排除。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。使用实际航班区段和有证据的客货分配、实际载荷容量约束及空载航班；不假设耗油或默认航空增益系数，最终分母为Q。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 按capital_air_linehaul_runway_manufacture将运单航段连接到唯一跑道移动，重叠占用按同段实证区间拆分；保留测量、归属与全寿命分母各自原始数据。 按跑道规则连接并核对每个空载移动的全因果航段和权重。 对每航段执行calc_air_payload_allocation；验同航段质量、因果表和原供应清单，采用唯一主方法且不二次乘p_freight。 | 各卡原生单位；原始t*km | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_origin_handling | support_origin_handling | u_origin_handling_electricity; u_origin_handling_water; u_origin_handling_wastewater; u_origin_handling_terminal_building_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_manufacture; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_manufacture; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_manufacture; u_origin_handling_forklift_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立始发场站完整通行执行，含实际安检、卸载、分拣及装载运行和对应实物设备废物；扫描及周期内停留不重复计量。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。kg每周期及子任务扫描关联仅作分配证据。不得将一次完整通行强度为每个子任务重复使用；独立计量阶段采用其实物总量及互斥gate，按Q归一化一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始kg per distinct complete passage | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_destination_handling | support_destination_handling | u_destination_handling_electricity; u_destination_handling_water; u_destination_handling_wastewater; u_destination_handling_terminal_building_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_manufacture; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_manufacture; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_manufacture; u_destination_handling_forklift_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立目的地或中转场站完整通行执行，含实际安检、卸载、分拣及装载运行和对应实物设备废物；扫描及周期内停留不重复计量。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。kg每周期及子任务扫描关联仅作分配证据。不得将一次完整通行强度为每个子任务重复使用；独立计量阶段采用其实物总量及互斥gate，按Q归一化一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始kg per distinct complete passage | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_customs_brokerage | support_customs_brokerage | u_customs_brokerage_electricity; u_customs_brokerage_water; u_customs_brokerage_wastewater; u_customs_brokerage_paper; u_customs_brokerage_paper_waste; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_office_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立报关及查验协调办公执行，排除税费罚款及已由场站处理覆盖的任务。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。实际任务员工小时及观测共享任务时间仅为分配依据，失败返工关联原运单，不将费用换算实物，分母Q。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_bonded_storage | support_bonded_storage | u_bonded_storage_electricity; u_bonded_storage_water; u_bonded_storage_wastewater; u_bonded_storage_warehouse_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_storage_forklift_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立常温保税库存滞留运行，排除已含场站停留；覆盖实际仓库资本、公用工程、搬运清洁及残余处理。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。保留库存时间积分及有证据的实物容量分配，不能重复场站停留；实际kg*d不是产品交换，使用既定质量容量检验及Q分母。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始kg*d | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_office_occupancy | support_office_occupancy | u_office_occupancy_electricity; u_office_occupancy_water; u_office_occupancy_wastewater; u_office_occupancy_office_building_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_hvac_plant_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立快递办公建筑支持，将竣工交付建筑壳体固定设施和制造门固定设备与中央运行资源、部件维护、同cohort终端残余分开，排除快递独立计量卡。 原始m2*a仅作驱动。以实测整栋或分区总量减全部受益租户在相同期间范围的直接计量量，剩余按全部受益占用面积时间分配，再按队列任务份额及Q归一化。资本采用实际全寿命占用面积时间；闲置空置仍归全寿命负担。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始m2*a | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_hosted_tracking | support_hosted_tracking | u_hosted_tracking_electricity; u_hosted_tracking_water; u_hosted_tracking_wastewater; u_hosted_tracking_server_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_cooling_plant_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立配置化跟踪应用执行，按声明供应商至办公接入分界覆盖计算、存储、网络及托管场地实物范围。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。配置实例及资源时间记录用于分配实物总量；优先专属可追溯量，待机按全部受益资源时间分配一次。不得将实例小时等同服务器kg或kWh；逐配置匹配并用Q。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始configured application-instance h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_digital | activity_hosted_tracking | q_hosted = sum(实例历时秒/3600 * 实测队列资源时间/全部受益资源时间)/Q；各配置匹配供应商清单，并只一次纳入分配待机。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_digital; cp_cohort | 原始活动诊断：每参考托运件已配置应用h | `ghg-product-2011` |
| foreground_interface_method | svc_origin_road; svc_destination_road; svc_air_linehaul; svc_origin_handling; svc_destination_handling; svc_customs_brokerage; svc_bonded_storage; svc_office_occupancy; svc_hosted_tracking | 计量前按 boundary_atomic_support 将每个事件/范围组成划为互不重叠的前景实物或外部服务。现有实物卡公式、组成规则及 cp_support 协议仅适用于前者，不得为启用服务接口而要求外部供应方BOM或内部表计账本。对服务行s采集固定原生单位的原始 A_s,e，并按原具名活动分配确定 alpha_s,e：直接属于队列的事件取1；确需共享的事件保留原全用户驱动、失败/空驶/待机处理及事件窗口。已归属服务量 T_s=sum(A_s,e*alpha_s,e)；原生活动账本已含队列归属时，不得再次乘份额。q_s=T_s/N_ref，N_ref为原队列正参考产出。零产出时保留原始总量并将单位结果标为未完成。时间、面积、计数和运输活动量不得无证据换成能量或设备质量。服务清单已包含资本分配时不得再乘实物资产寿命份额。背景连接仅以q_s乘每一相同服务单位的清单一次；排放因子不是服务交换数量。原实物专用指令及服务禁用措辞仅适用于前景实物分支；服务分支执行本规则及其明确接口协议。 未完成或中止的服务事件仍保留有证据的归属负担。不得因接口以完整单位计数就将其丢弃：须以合同及执行记录证明等效原生服务量，或在声明完整前增设身份明确的部分服务行；不得假定一整单位或零。 已按最终参考流表示的供应方数值不是原始A_s,e：重新计算前须恢复原总量和分母，或证明归一结果完全等价且不再除最终分母。供应方已包含的分配仅应用一次。 | cp_interface_origin_road; cp_interface_destination_road; cp_interface_air_linehaul; cp_interface_origin_handling; cp_interface_destination_handling; cp_interface_customs_brokerage; cp_interface_bonded_storage; cp_interface_office_occupancy; cp_interface_hosted_tracking | 每原参考流的原生服务单位 |  |
| calc_interface_origin_road | svc_origin_road | 执行 foreground_interface_method。原生活动 A_s,e（t*km）：实际毛载荷吨数乘始发公路实际载货路段公里数后求和，保留原空驶段和失败覆盖。仅将原 activity_origin_road 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/Q，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_origin_road; activity_origin_road | t*km/Q |  |
| calc_interface_destination_road | svc_destination_road | 执行 foreground_interface_method。原生活动 A_s,e（t*km）：实际毛载荷吨数乘目的地公路实际载货路段公里数后求和，保留原空驶段和失败覆盖。仅将原 activity_destination_road 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/Q，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_destination_road; activity_destination_road | t*km/Q |  |
| calc_interface_air_linehaul | svc_air_linehaul | 执行 foreground_interface_method。原生活动 A_s,e（t*km）：实际货物毛吨数乘实际飞行载货航段公里数后求和；背景服务必须符合 calc_air_payload_allocation，含因果空航段；不得对外购吨公里再次乘客货份额。仅将原 activity_air_linehaul 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/Q，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_air_linehaul; activity_air_linehaul | t*km/Q |  |
| calc_interface_origin_handling | svc_origin_handling | 执行 foreground_interface_method。原生活动 A_s,e（kg）：按每次独立完整站点通过累计实际货物毛千克；实际重复通过保留独立ID，不设通用每件千克数。仅将原 activity_origin_handling 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/Q，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_origin_handling; activity_origin_handling | kg/Q |  |
| calc_interface_destination_handling | svc_destination_handling | 执行 foreground_interface_method。原生活动 A_s,e（kg）：按每次独立完整站点通过累计实际货物毛千克；实际重复通过保留独立ID，不设通用每件千克数。仅将原 activity_destination_handling 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/Q，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_destination_handling; activity_destination_handling | kg/Q |  |
| calc_interface_customs_brokerage | svc_customs_brokerage | 执行 foreground_interface_method。原生活动 A_s,e（h）：按案件关联的实际代理作业小时，含失败及返工作业；同时作业按原全客户规则划分。仅将原 activity_customs_brokerage 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/Q，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_customs_brokerage; activity_customs_brokerage | h/Q |  |
| calc_interface_bonded_storage | svc_bonded_storage | 执行 foreground_interface_method。原生活动 A_s,e（kg*d）：按入库/出库事件积分实际货物毛千克乘存储日数；1日为24小时；不得未经对账以发票取整天数替代。仅将原 activity_bonded_storage 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/Q，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_bonded_storage; activity_bonded_storage | kg*d/Q |  |
| calc_interface_office_occupancy | svc_office_occupancy | 执行 foreground_interface_method。原生活动 A_s,e（m2*a）：实际占用面积平方米乘按记录日历基准计算的占用年数，保留原全受益方归属。仅将原 activity_office_occupancy 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/Q，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_office_occupancy; activity_office_occupancy | m2*a/Q |  |
| calc_interface_hosted_tracking | svc_hosted_tracking | 执行 foreground_interface_method。原生活动 A_s,e（h）：配置明确的实例实际运行小时；保留原事务/资源时间分配、失败事务及归属待机。仅将原 activity_hosted_tracking 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/Q，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_hosted_tracking; activity_hosted_tracking | h/Q |  |
| calc_cohort | delivered_service | Q = 完整符合合同交付的唯一运单数；pending = 0时，已受理A = Q + 各互斥最终失败类别；入口 = A + R0。A、Q及结局平衡采用同一冻结队列。 | cp_cohort | Q，单位Item(s)，及结局账 | `dhl-carriage-2024` |
| calc_transport | activity_origin_road; activity_air_linehaul; activity_destination_road | 各卡r：q_r = sum_s(grosskg_s/1000 * actualkm_s)/Q。grosskg为实际托运货物而非整机质量；供应商强度只一次覆盖共享载重及分配空驶。活动量不是CO2e清单交换。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_transport; cp_cohort | 原始活动诊断：每参考托运件t*km | `ghg-transport-2013` |
| calc_contracted_road_ac | u_origin_road_electricity; u_destination_road_electricity | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_contracted_road_ac_energy_balance; calc_contracted_road_ac_traction_attribution; calc_contracted_road_ac_nontraction_attribution; calc_contracted_road_ac_card_consolidation; calc_contracted_road_ac_fuel_only_branch。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_support_origin_road; cp_support_destination_road; a_transport; cp_cohort; calc_contracted_road_ac_energy_balance; calc_contracted_road_ac_traction_attribution; calc_contracted_road_ac_nontraction_attribution; calc_contracted_road_ac_card_consolidation; calc_contracted_road_ac_fuel_only_branch | 逐道路承运方牵引与匹配非牵引MJ/Q及该电卡最终合计 |  |
| calc_handling | activity_origin_handling; activity_destination_handling | q_r = 各唯一适用完整场站周期货物kg之和/Q。各供应商强度须匹配相同周期gate及已含子任务；周期内重复扫描/安检/卸载/装载观察不增加活动量。独立边界阶段须有独立卡及阶段特定强度。完整通过次数与交付运单数为不同维度。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_handling; cp_cohort | 原始活动诊断：每参考托运件处理kg | `ghg-product-2011` |
| calc_time | activity_customs_brokerage; activity_bonded_storage | q_customs = 分配任务秒之和/3600/Q；q_storage = sum 区间(货物kg * 历时秒/86400)/Q，排除已含场站停留。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_customs; cp_storage; cp_cohort | 原始活动诊断：每参考托运件h及kg*d | `dhl-carriage-2024` |
| calc_office | office_electricity; label_paper; protective_carton; office_water; office_wastewater | q_r = 实际实物总量_r * 分配队列份额/Q；能源MJ = kWh*3.6；水kg = m3*有依据密度kg/m3。专属记录份额=1；共享份额=队列任务h/全部受益任务h。换算、分配、归一化各只执行一次。 | cp_office; cp_waste; cp_cohort | 每参考托运件MJ或各材质kg | `ghg-product-2011` |
| calc_waste_origin | paper_waste; carton_waste; residual_waste | 对每种指定普通固废r及产生事件j，A_c,r = sum_j(G_j,r*s_c,j)，随后q_c,r=A_c,r/原参考流件数，仅归一化一次。G为实测产生质量，不是外运质量。逐材料及原事件对账：期末=期初+产生+内部转入-内部转出-外部外运-有证据物理损失。记录实际水分/组成变化及互斥损失/释放；不得虚构差额，也不得完整残余质量与其已释放组分重复计量。内部转移保留来源，不产生另一笔交换。即使尚在实物暂存，也应建模原队列废物输出及必要暂存/运输/最终处理；使用实际相容接收证据，或有明确证据、匹配材料/组成/地域的前瞻处理路线并披露不确定性。去向份额和为一且仅乘一次，不默认回收或将留存质量处理计零。去向无依据则保持不完整。实际保管库存及外运另作控制台账，不再追加清单。后续接收证据须替换同一事件的前瞻模型，并用原分母重算原队列，不得将相同质量/处理新增给后来队列。用范围交叉表将必要生命周期各环节仅计一次，排除已含于场站/服务清单的暂存能源和搬运。资本寿终废物寿命份额及污水平衡继续使用各自独立规则。 原参考流件数为原队列/分层Q。 废物交换gate在产生点。其链接的完整废物管理清单以同一产生质量基准的1kg为输入，覆盖暂存及后续全部去向；最终处理输入仅为扣除储存损失并换算水分基准后的相容实测/有证据预测残余量，不得完整原kg处理再加独立损失。显式储存释放须替换链接清单内相同释放；已含于场站/服务池的暂存/搬运作业须按有记录范围交叉表从废物链接剔除，不得重复。 | cp_waste; allocation_waste_origin | 每原参考流kg；原来源库存/模型台账 |  |
| calc_assets | computer_hardware; computer_waste; activity_office_occupancy | q_hardware = 笔记本净kg*队列使用h/寿命使用h/Q；q_eol = M_EOL*队列使用h/寿命使用h/Q。M_EOL为实测报废残余kg或以当前实测资产净重、有文件再用/保留/拆除及接收计划与不确定性为依据的明确前瞻残余kg；尚未报废不等于零。监管实际废物移交单独记录并与M_EOL对账，不得重复加入相同质量。q_occupancy = 占用m2*占用日/年日数*队列任务份额/Q；必要时拆日历年。其上游公共运行池以实测全建筑/分区总量扣同范围/期间直接卡量后，按受益占用面积*时间分配，再作队列分配。 仅明确具名activity_*项为原始支持活动诊断，不是产品交换；保留的实物产品/废物项维持原数量、单位及交换作用。仅对已删除服务项应用独立实物拆分规则。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_assets; cp_waste; cp_cohort | 每参考托运件硬件kg、废物kg及m2*a | `ghg-product-2011` |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_origin_road | u_origin_road_diesel; u_origin_road_petrol; u_origin_road_electricity; u_origin_road_road_vehicle_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_manufacture; u_origin_road_road_section_terminal; u_origin_road_replacement_tyre; u_origin_road_removed_tyre; u_origin_road_lubricant; u_origin_road_used_lubricant; u_origin_road_co2_fossil_air; u_origin_road_co_air; u_origin_road_no_air; u_origin_road_no2_air; u_origin_road_so2_air | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。在本入口声明的适用范围内，按顺序完整执行规则组：common_activity_origin_road。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_support_origin_road; common_activity_origin_road | 原始t*km及唯一归属实物总量，不是服务产品 |  |
| activity_destination_road | u_destination_road_diesel; u_destination_road_petrol; u_destination_road_electricity; u_destination_road_road_vehicle_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_manufacture; u_destination_road_road_section_terminal; u_destination_road_replacement_tyre; u_destination_road_removed_tyre; u_destination_road_lubricant; u_destination_road_used_lubricant; u_destination_road_co2_fossil_air; u_destination_road_co_air; u_destination_road_no_air; u_destination_road_no2_air; u_destination_road_so2_air | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。在本入口声明的适用范围内，按顺序完整执行规则组：common_activity_origin_road。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_support_destination_road; common_activity_origin_road | 原始t*km及唯一归属实物总量，不是服务产品 |  |
| activity_air_linehaul | u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。使用实际航班区段和有证据的客货分配、实际载荷容量约束及空载航班；不假设耗油或默认航空增益系数，最终分母为Q。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 客货与同航段货运内份额必须由calc_air_payload_allocation求得；其主质量方法、零货/空载分支和预分配数据接受规则适用于本行，不另外选择分配方法。 | cp_support_air_linehaul | 原始t*km及唯一归属实物总量，不是服务产品 |  |
| calc_air_payload_allocation | u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_air_payload_allocation_payload_basis; calc_air_payload_allocation_loaded_leg; calc_air_payload_allocation_empty_leg; calc_air_payload_allocation_supplier_acceptance。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_transport; cp_support_air_linehaul; cp_cohort; calc_air_payload_allocation_payload_basis; calc_air_payload_allocation_loaded_leg; calc_air_payload_allocation_empty_leg; calc_air_payload_allocation_supplier_acceptance | 同航段kg和无量纲份额；归属实物量/Q一次 | ghg-product-2011; ghg-transport-2013 |
| activity_origin_handling | u_origin_handling_electricity; u_origin_handling_water; u_origin_handling_wastewater; u_origin_handling_terminal_building_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_manufacture; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_manufacture; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_manufacture; u_origin_handling_forklift_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。在本入口声明的适用范围内，按顺序完整执行规则组：common_activity_origin_handling。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_support_origin_handling; common_activity_origin_handling | 原始kg per distinct complete passage及唯一归属实物总量，不是服务产品 |  |
| activity_destination_handling | u_destination_handling_electricity; u_destination_handling_water; u_destination_handling_wastewater; u_destination_handling_terminal_building_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_manufacture; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_manufacture; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_manufacture; u_destination_handling_forklift_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。在本入口声明的适用范围内，按顺序完整执行规则组：common_activity_origin_handling。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_support_destination_handling; common_activity_origin_handling | 原始kg per distinct complete passage及唯一归属实物总量，不是服务产品 |  |
| activity_customs_brokerage | u_customs_brokerage_electricity; u_customs_brokerage_water; u_customs_brokerage_wastewater; u_customs_brokerage_paper; u_customs_brokerage_paper_waste; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_office_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。实际任务员工小时及观测共享任务时间仅为分配依据，失败返工关联原运单，不将费用换算实物，分母Q。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_customs_brokerage | 原始h及唯一归属实物总量，不是服务产品 |  |
| activity_bonded_storage | u_bonded_storage_electricity; u_bonded_storage_water; u_bonded_storage_wastewater; u_bonded_storage_warehouse_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_storage_forklift_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。保留库存时间积分及有证据的实物容量分配，不能重复场站停留；实际kg*d不是产品交换，使用既定质量容量检验及Q分母。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_bonded_storage | 原始kg*d及唯一归属实物总量，不是服务产品 |  |
| activity_office_occupancy | u_office_occupancy_electricity; u_office_occupancy_water; u_office_occupancy_wastewater; u_office_occupancy_office_building_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_hvac_plant_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。原始m2*a仅作驱动。以实测整栋或分区总量减全部受益租户在相同期间范围的直接计量量，剩余按全部受益占用面积时间分配，再按队列任务份额及Q归一化。资本采用实际全寿命占用面积时间；闲置空置仍归全寿命负担。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_office_occupancy | 原始m2*a及唯一归属实物总量，不是服务产品 |  |
| activity_hosted_tracking | u_hosted_tracking_electricity; u_hosted_tracking_water; u_hosted_tracking_wastewater; u_hosted_tracking_server_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_cooling_plant_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。配置实例及资源时间记录用于分配实物总量；优先专属可追溯量，待机按全部受益资源时间分配一次。不得将实例小时等同服务器kg或kWh；逐配置匹配并用Q。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_hosted_tracking | 原始configured application-instance h及唯一归属实物总量，不是服务产品 |  |
| calc_atomic_physical | u_origin_road_diesel; u_origin_road_petrol; u_origin_road_electricity; u_origin_road_road_vehicle_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_manufacture; u_origin_road_road_section_terminal; u_origin_road_replacement_tyre; u_origin_road_removed_tyre; u_origin_road_lubricant; u_origin_road_used_lubricant; u_origin_road_co2_fossil_air; u_origin_road_co_air; u_origin_road_no_air; u_origin_road_no2_air; u_origin_road_so2_air; u_destination_road_diesel; u_destination_road_petrol; u_destination_road_electricity; u_destination_road_road_vehicle_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_manufacture; u_destination_road_road_section_terminal; u_destination_road_replacement_tyre; u_destination_road_removed_tyre; u_destination_road_lubricant; u_destination_road_used_lubricant; u_destination_road_co2_fossil_air; u_destination_road_co_air; u_destination_road_no_air; u_destination_road_no2_air; u_destination_road_so2_air; u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air; u_origin_handling_electricity; u_origin_handling_water; u_origin_handling_wastewater; u_origin_handling_terminal_building_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_manufacture; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_manufacture; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_manufacture; u_origin_handling_forklift_terminal; u_destination_handling_electricity; u_destination_handling_water; u_destination_handling_wastewater; u_destination_handling_terminal_building_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_manufacture; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_manufacture; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_manufacture; u_destination_handling_forklift_terminal; u_customs_brokerage_electricity; u_customs_brokerage_water; u_customs_brokerage_wastewater; u_customs_brokerage_paper; u_customs_brokerage_paper_waste; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_office_terminal; u_bonded_storage_electricity; u_bonded_storage_water; u_bonded_storage_wastewater; u_bonded_storage_warehouse_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_electricity; u_office_occupancy_water; u_office_occupancy_wastewater; u_office_occupancy_office_building_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_electricity; u_hosted_tracking_water; u_hosted_tracking_wastewater; u_hosted_tracking_server_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_cooling_plant_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。对供应方相容区间j的运行实物流x，由计量、库存平衡、工单或相容的单物种/单材料单位清单取得本卡物理单位Q_x,j。若来源按活动单位提供强度，先算Q_x,j=强度_x,j*实际全使用者活动_j；不得用金额、通用服务排放篮子或未还原原分母的每参考流数值。再按固定过程驱动及全使用者份额，q_x=sum_j(Q_x,j*s_c,x,j)/N_ref，仅归一一次。卡用MJ时，电力kWh仅乘一次3.6；其他计数/质量/体积换算须有适用的实测配置单重、密度、浓度及水分。覆盖相同数量/期间/范围的共享表计或上游产品/服务须按实测重叠交叉表剔除，不能假定比例。 两端承运道路电卡直接取calc_contracted_road_ac的最终q_card，不重复套用本行；同一电卡仅可合并同一实际电力身份、来源及电压的互斥分表量，实际身份或供给不相符时按实物分别采集和登记。 | cp_support_origin_road; cp_support_destination_road; cp_support_air_linehaul; cp_support_origin_handling; cp_support_destination_handling; cp_support_customs_brokerage; cp_support_bonded_storage; cp_support_office_occupancy; cp_support_hosted_tracking | 每原参考流的卡原生物理单位 |  |
| calc_atomic_capital | u_origin_road_road_vehicle_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_manufacture; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_manufacture; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_manufacture; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_manufacture; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_manufacture; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_manufacture; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_manufacture; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_manufacture; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_cooling_plant_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 | cp_support_origin_road; cp_support_destination_road; cp_support_air_linehaul; cp_support_origin_handling; cp_support_destination_handling; cp_support_customs_brokerage; cp_support_bonded_storage; cp_support_office_occupancy; cp_support_hosted_tracking | 制造产品及配对终态残余，相同寿命份额 |  |
| calc_capital_restatement | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | 按各来源本征单位/原队列N_c；实物监管账独立 |  |
| capital_origin_road_road_vehicle_manufacture | u_origin_road_road_vehicle_manufacture; u_origin_road_road_vehicle_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_origin_road_road_vehicle_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=匹配道路车辆队列可归属实际车辆km/全部受益方有证据的全寿命车辆km，含因果空驶调位km一次。选队列前应用实际共享载荷及容量约束分配。原整车与终端残余用完全相同f；实际更换部件按匹配期间维护事件计；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_origin_road_road_vehicle_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_origin_road | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_origin_road_road_section_manufacture | u_origin_road_road_section_manufacture; u_origin_road_road_section_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_origin_road_road_section_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/Q。初建道路资本f为同一路段可归属队列道路空间时间/全部道路受益方有证据的全寿命道路空间时间；空置未用能力保留在全寿命负担，维度一致。初建道路资本不得用年度工程损坏份额。原道路终端残余用完全相同f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_origin_road_road_section_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_origin_road | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_destination_road_road_vehicle_manufacture | u_destination_road_road_vehicle_manufacture; u_destination_road_road_vehicle_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_destination_road_road_vehicle_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=匹配道路车辆队列可归属实际车辆km/全部受益方有证据的全寿命车辆km，含因果空驶调位km一次。选队列前应用实际共享载荷及容量约束分配。原整车与终端残余用完全相同f；实际更换部件按匹配期间维护事件计；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_destination_road_road_vehicle_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_destination_road | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_destination_road_road_section_manufacture | u_destination_road_road_section_manufacture; u_destination_road_road_section_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_destination_road_road_section_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/Q。初建道路资本f为同一路段可归属队列道路空间时间/全部道路受益方有证据的全寿命道路空间时间；空置未用能力保留在全寿命负担，维度一致。初建道路资本不得用年度工程损坏份额。原道路终端残余用完全相同f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_destination_road_road_section_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_destination_road | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_air_linehaul_aircraft_manufacture | u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_air_linehaul_aircraft_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f采用经有证据客货及货物受益分配后队列可归属实际飞机运行小时/同一飞机配置全部受益方有证据的全寿命运行小时。空载滑行APU使用按实际匹配记录归属一次。不假设飞机质量寿命或客货份额。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_air_linehaul_aircraft_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 客货与同航段货运内份额必须由calc_air_payload_allocation求得；其主质量方法、零货/空载分支和预分配数据接受规则适用于本行，不另外选择分配方法。 | cp_support_air_linehaul | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_air_linehaul_runway_manufacture | u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。在本入口声明的适用范围内，按顺序完整执行规则组：capital_air_linehaul_runway_manufacture_occupancy_basis; capital_air_linehaul_runway_manufacture_movement_attribution; capital_air_linehaul_runway_manufacture_lifetime_quantities; capital_air_linehaul_runway_manufacture_linked_method_controls。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_support_air_linehaul; cp_transport; a_transport; cp_cohort; capital_air_linehaul_runway_manufacture_occupancy_basis; capital_air_linehaul_runway_manufacture_movement_attribution; capital_air_linehaul_runway_manufacture_lifetime_quantities; capital_air_linehaul_runway_manufacture_linked_method_controls | 每Q竣工跑道m2及同f终态净kg |  |
| capital_origin_handling_terminal_building_manufacture | u_origin_handling_terminal_building_manufacture; u_origin_handling_terminal_building_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_origin_handling_terminal_building_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/Q。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_origin_handling_terminal_building_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_origin_handling | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_origin_handling_conveyor_manufacture | u_origin_handling_conveyor_manufacture; u_origin_handling_conveyor_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_origin_handling_conveyor_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_origin_handling_conveyor_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_origin_handling | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_origin_handling_screening_unit_manufacture | u_origin_handling_screening_unit_manufacture; u_origin_handling_screening_unit_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_origin_handling_screening_unit_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_origin_handling_screening_unit_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_origin_handling | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_origin_handling_forklift_manufacture | u_origin_handling_forklift_manufacture; u_origin_handling_forklift_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_origin_handling_forklift_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_origin_handling_forklift_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_origin_handling | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_destination_handling_terminal_building_manufacture | u_destination_handling_terminal_building_manufacture; u_destination_handling_terminal_building_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_destination_handling_terminal_building_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/Q。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_destination_handling_terminal_building_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_destination_handling | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_destination_handling_conveyor_manufacture | u_destination_handling_conveyor_manufacture; u_destination_handling_conveyor_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_destination_handling_conveyor_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_destination_handling_conveyor_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_destination_handling | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_destination_handling_screening_unit_manufacture | u_destination_handling_screening_unit_manufacture; u_destination_handling_screening_unit_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_destination_handling_screening_unit_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_destination_handling_screening_unit_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_destination_handling | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_destination_handling_forklift_manufacture | u_destination_handling_forklift_manufacture; u_destination_handling_forklift_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_destination_handling_forklift_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_destination_handling_forklift_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_destination_handling | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_customs_brokerage_broker_computer_manufacture | u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_computer_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_customs_brokerage_broker_computer_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_customs_brokerage_broker_computer_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_customs_brokerage | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_customs_brokerage_broker_network_manufacture | u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_network_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_customs_brokerage_broker_network_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_customs_brokerage_broker_network_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_customs_brokerage | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_customs_brokerage_broker_office_manufacture | u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_office_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_customs_brokerage_broker_office_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/Q。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_customs_brokerage_broker_office_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_customs_brokerage | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_bonded_storage_warehouse_manufacture | u_bonded_storage_warehouse_manufacture; u_bonded_storage_warehouse_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_bonded_storage_warehouse_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/Q。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_bonded_storage_warehouse_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_bonded_storage | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_bonded_storage_storage_rack_manufacture | u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_rack_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_bonded_storage_storage_rack_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_bonded_storage_storage_rack_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_bonded_storage | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_bonded_storage_storage_forklift_manufacture | u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_storage_forklift_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_bonded_storage_storage_forklift_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_bonded_storage_storage_forklift_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_bonded_storage | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_office_occupancy_office_building_manufacture | u_office_occupancy_office_building_manufacture; u_office_occupancy_office_building_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_office_occupancy_office_building_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/Q。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_office_occupancy_office_building_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_office_occupancy | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_office_occupancy_hvac_plant_manufacture | u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_hvac_plant_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_office_occupancy_hvac_plant_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_office_occupancy_hvac_plant_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_office_occupancy | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_hosted_tracking_server_manufacture | u_hosted_tracking_server_manufacture; u_hosted_tracking_server_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_hosted_tracking_server_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_hosted_tracking_server_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_hosted_tracking | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_hosted_tracking_storage_unit_manufacture | u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_storage_unit_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_hosted_tracking_storage_unit_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_hosted_tracking_storage_unit_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_hosted_tracking | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_hosted_tracking_network_switch_manufacture | u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_network_switch_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_hosted_tracking_network_switch_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_hosted_tracking_network_switch_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_hosted_tracking | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_hosted_tracking_datacentre_manufacture | u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_datacentre_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_hosted_tracking_datacentre_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/Q。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_hosted_tracking_datacentre_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_hosted_tracking | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| capital_hosted_tracking_cooling_plant_manufacture | u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_cooling_plant_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_hosted_tracking_cooling_plant_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/Q。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_hosted_tracking_cooling_plant_terminal：原生kg，q=sum(R_a*f_c,a)/Q；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_hosted_tracking | 每Q的资产原生物理单位；终态自身原生单位，同f |  |
| calc_atomic_species | 所有基本实物流清单行 | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。每张基本流卡对应一种物质或物理明确的颗粒载体，以及一个接收介质/子介质。采集实际物种/CAS或已验证化学身份、因子单位及质量/摩尔/碳表达、来源技术/燃料/负载、地点和接收介质。单物种实测排放或相容因子仅用一次。完整产品gate已含的工厂排放不得再列为供应方直接运行排放。颗粒粒径及去向份额互斥；物理颗粒不是虚构纯元素。NOx及NMVOC总量仅作QA观测，不替代基本交换。任何实际额外物种/材料必须在建模完成前拥有具体双语源卡、协议、单位、固定计算及正常投影，不使用选择器或族名占位卡。 | cp_support_origin_road; cp_support_destination_road; cp_support_air_linehaul; cp_support_origin_handling; cp_support_destination_handling; cp_support_customs_brokerage; cp_support_bonded_storage; cp_support_office_occupancy; cp_support_hosted_tracking | 逐接收介质的单物质或明确实物载体 |  |
| calc_nox_speciation | u_origin_road_no_air; u_origin_road_no2_air; u_destination_road_no_air; u_destination_road_no2_air; u_air_linehaul_no_air; u_air_linehaul_no2_air | 仅对有明确证据定义为NOx=NO+NO2且按NO2等效表达的总量，记录T、单位/基准及匹配来源实测摩尔份额a=n_NO/(n_NO+n_NO2)。使用独立有据、单位一致的分子质量，m_NO=a*T*M_NO/M_NO2，m_NO2=(1-a)*T。优先采用直接单物种质量实测/因子，不再追加QA总量。T不是普通NO/NO2混合质量，不得直接把质量份额乘T或将全部T灌给NO2。若定义包含其他氮物种、缺组分或换算证据，不得二组分拆算：保留原QA观测，并阻断完成直至实际单物种行及数量确定。PCR不默认任何数值份额或分子质量。 | cp_support_origin_road; cp_support_destination_road; cp_support_air_linehaul | NO及NO2各自kg，不以NO2等效作交换 |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_maintenance_period | u_origin_road_removed_tyre; u_origin_road_lubricant; u_origin_road_used_lubricant; u_destination_road_removed_tyre; u_destination_road_lubricant; u_destination_road_used_lubricant; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_origin_road_replacement_tyre; u_destination_road_replacement_tyre | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 | cp_support_origin_road; cp_support_destination_road; cp_support_air_linehaul | 每原参考流原生物理单位 |  |
| calc_contracted_road_ac_energy_balance | u_origin_road_electricity; u_destination_road_electricity | 本条属于 calc_contracted_road_ac。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐承运方、车辆电池与同边界完整期间，以交流等效kWh计K_total=K_inlet+K_open+K_import-K_close-K_export。基于同配置、温度及老化的校准存能曲线；来源向量逐时记录充入、损耗、提取、转移和期末量，不能以未校准SOC百分比或默认效率代替。分开实际有证总入账为零的直接电K_zero，K_route=K_total-K_zero；未知不作零，负或无证库存阻断。 | cp_support_origin_road; cp_support_destination_road; a_transport; cp_cohort | 方法组成部分；清单结果归原入口 |  |
| calc_contracted_road_ac_traction_attribution | u_origin_road_electricity; u_destination_road_electricity | 本条属于 calc_contracted_road_ac。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。正来源及剩余电按同承运路段已声明全用户物理驱动和实际提取归属；零入账直接电先归证实因果任务，其次归有据任务集合的实际服务历时，无唯一因果的共享故障按站点当地日历日全用户实际服务历时且含失败/等候分摊，跨午夜拆分。K_route与K_zero各归属一次；q_traction=3.6*(K_route_assigned+K_zero_assigned)/Q。停放/场站非牵引电独立归属，电池内部转移及充电损耗不另加。只有能证明相同计量门槛、期初末和转移、损耗、来源受益人、路段及已归属分母闭合的供应强度可替代原表账；保留原始活动及分母，不能再除已按参考量归一的结果。 | cp_support_origin_road; cp_support_destination_road; a_transport; cp_cohort | 方法组成部分；清单结果归原入口 |  |
| calc_contracted_road_ac_nontraction_attribution | u_origin_road_electricity; u_destination_road_electricity | 本条属于 calc_contracted_road_ac。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。K_nontraction_matched_assigned是该卡同一流身份、供应及电压且与牵引无重叠的已归属表计非牵引kWh；不相符的电源独立登记，只有有证未发生才取零。 非牵引单列已归属分表kWh：对同承运方及同期间，先直归有计量证据的任务用电；场站剩余按同期间全受益道路作业/处理的实际服务分钟分配，含失败等待并按表计范围排除其他工序。不与牵引、场站或维修既有卡重复。q_nontraction_matched=3.6*K_nontraction_matched_assigned/Q； | cp_support_origin_road; cp_support_destination_road; a_transport; cp_cohort | 方法组成部分；清单结果归原入口 |  |
| calc_contracted_road_ac_card_consolidation | u_origin_road_electricity; u_destination_road_electricity | 本条属于 calc_contracted_road_ac。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。同一实际供给、身份、电压及归属边界的原道路电卡最终q_card=q_traction+q_nontraction_matched。实际供给/身份不同则另列独立电卡，原卡只计其匹配项。未启用牵引或非牵引须有未发生证据；任一实际正量缺原始计量或归属分母则不完整。 | cp_support_origin_road; cp_support_destination_road; a_transport; cp_cohort | 方法组成部分；清单结果归原入口 |  |
| calc_contracted_road_ac_fuel_only_branch | u_origin_road_electricity; u_destination_road_electricity | 本条属于 calc_contracted_road_ac。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。若实际为纯燃油道路区段且有证无牵引交流电，则牵引分支不适用，原道路电卡仅计其有据的同边界非牵引电。另列电卡的最终量=3.6*该供给独立归属kWh/Q一次。 | cp_support_origin_road; cp_support_destination_road; a_transport; cp_cohort | 方法组成部分；清单结果归原入口 |  |
| common_activity_origin_road | u_origin_road_diesel; u_origin_road_petrol; u_origin_road_electricity; u_origin_road_road_vehicle_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_manufacture; u_origin_road_road_section_terminal; u_origin_road_replacement_tyre; u_origin_road_removed_tyre; u_origin_road_lubricant; u_origin_road_used_lubricant; u_origin_road_co2_fossil_air; u_origin_road_co_air; u_origin_road_no_air; u_origin_road_no2_air; u_origin_road_so2_air; u_destination_road_diesel; u_destination_road_petrol; u_destination_road_electricity; u_destination_road_road_vehicle_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_manufacture; u_destination_road_road_section_terminal; u_destination_road_replacement_tyre; u_destination_road_removed_tyre; u_destination_road_lubricant; u_destination_road_used_lubricant; u_destination_road_co2_fossil_air; u_destination_road_co_air; u_destination_road_no_air; u_destination_road_no2_air; u_destination_road_so2_air | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。本条属于 activity_origin_road; activity_destination_road。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。保留区段和运单ID、货物毛质量距离及既定有证据的容量约束和空驶规则；分配前移除全程运输重叠，按Q归一化。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_origin_road; cp_support_destination_road | 方法组成部分；清单结果归原入口 |  |
| calc_air_payload_allocation_payload_basis | u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air | 本条属于 calc_air_payload_allocation。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本PCR选择逐唯一航段的实际运载载荷质量作为主物理分配方法；这是所撰候选方法，不声称质量精确决定全部燃料因果关系，也不声称所引一般指南规定此旅客公式。C为该航段全部受益者货物/邮件的托运毛重，含货物包装；P为全部实际运载旅客（含非收费旅客）及其全部随身/托运行李，两者是互不重叠的同航段kg。不把执勤机组、飞机/燃料及机方重复使用ULD/推车列为载荷，其负担仍留在航班清单。C来自校准舱单/装载记录；P来自匹配的汇总称量，或基于已验证且适用的旅客/行李质量调查、实际人数和行李记录的有文件承运方载重单估计。保留调查人群、日期、人体/行李各自覆盖、误差及适用性；不虚构通用每旅客kg，也不以票价收益、座位或计费体积替代主质量基准。 | cp_transport; cp_support_air_linehaul; cp_cohort | 方法组成部分；清单结果归原入口 | ghg-product-2011; ghg-transport-2013 |
| calc_air_payload_allocation_loaded_leg | u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air | 本条属于 calc_air_payload_allocation。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。C>0时，p_freight=C/(C+P)，s_c=M_c/C，w_c=p_freight*s_c=M_c/(C+P)，M_c为同航段该原队列实际货物毛重。对尚未分配的整航班实物总量及匹配飞机/跑道受益活动仅乘一次w_c；失败和非研究货物仍在C中。C=0且P>0时直接w_c=0，不计算M_c/C；全货运C>0且P=0时p_freight=1。 | cp_transport; cp_support_air_linehaul; cp_cohort | 方法组成部分；清单结果归原入口 | ghg-product-2011; ghg-transport-2013 |
| calc_air_payload_allocation_empty_leg | u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air | 本条属于 calc_air_payload_allocation。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。C=P=0是空载移动，不以质量比补成0或1：关联完整发运因果载荷航段t，按有证唯一因果航段轮挡小时H_t计算w_empty=sum(H_t*w_c,t)/sum(H_t)，仅客运/无研究队列但属于因果集的航段以w=0保留。单一因果航段直接用其w。缺有据正分母或完整因果清册时分配未决，已知航班和跑道活动仍保留在全用户寿命分母。机场其他非飞行专属作业使用既有直接责任规则。 | cp_transport; cp_support_air_linehaul; cp_cohort | 方法组成部分；清单结果归原入口 | ghg-product-2011; ghg-transport-2013 |
| calc_air_payload_allocation_supplier_acceptance | u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air | 本条属于 calc_air_payload_allocation。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。货物来源质量、旅客质量、占用活动和最终参考Q为不同测量量。供应方货运强度仅在可审计其原未分配总量、原功能分母、同航段分配基准及精确范围，并能复现本政策时接受；重做原始分配前先去除已嵌入份额，或证明已分配量数学等价且不再乘p_freight。不同经济/座位/计费质量方法不能作为本PCR主结果，须取得原始数据重算，否则该部分保持未决。其他方法仅作为标明输入/方法的敏感性，不替代主结果。一般GHG来源支持物理分配及范围披露，不提供默认系数，也不强制采用本项具体政策。 | cp_transport; cp_support_air_linehaul; cp_cohort | 方法组成部分；清单结果归原入口 | ghg-product-2011; ghg-transport-2013 |
| common_activity_origin_handling | u_origin_handling_electricity; u_origin_handling_water; u_origin_handling_wastewater; u_origin_handling_terminal_building_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_manufacture; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_manufacture; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_manufacture; u_origin_handling_forklift_terminal; u_destination_handling_electricity; u_destination_handling_water; u_destination_handling_wastewater; u_destination_handling_terminal_building_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_manufacture; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_manufacture; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_manufacture; u_destination_handling_forklift_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。本条属于 activity_origin_handling; activity_destination_handling。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。kg每周期及子任务扫描关联仅作分配证据。不得将一次完整通行强度为每个子任务重复使用；独立计量阶段采用其实物总量及互斥gate，按Q归一化一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_origin_handling; cp_support_destination_handling | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_driver_revision | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐资产a保存有版本的全用户活动与每个原受益队列/分层c，按既有固定责任规则保留失败和空驶工作。u_c,a为截至当时归属该队列的实际驱动；U_a为相同配置和单位的有证完整寿命全用户驱动（已发生实际量加有依据的剩余预测）。U_a必须为正且不小于已发生全用户总量。f_c,a=u_c,a/U_a，不得把剩余活动当作U_a。每次寿命、活动、受益者、来源数量或终态路线变化，都重算全部受影响原队列，包括已报告队列；不得保留旧历史份额而仅对后续队列使用新寿命分母。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_source_correction | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐独立来源s按自身单位求A_s,c,new=Q_s,new*f_c,a。Q_s,new是当前有证、寿命分配前的完整制造/安装来源实物总量，不是扣除历史份额后的未摊余额，或匹配的净终态残余/完整生命周期来源量，不是已分配量。保留此前已记的归属原始量B_s,c及其原归一结果/版本；delta_A_s,c=A_s,c,new-B_s,c。新取得证据的终态来源B=0；已有来源的更正替换同一来源ID。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_normalization | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。使用该原队列当前已核实的参考分母N_c重算q_s,c=A_s,c,new/N_c；若N_c本身被更正，应替换旧结果，不得把delta_A/new_N直接加到以old_N形成的旧结果。剔除有记录重叠后才汇总各来源贡献。正负差额仅更正结果，不能形成负实物转移、替代抵扣或新增当期整机采购。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_retirement | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。最终退役时以完整实测全用户驱动替换U_a，重算全部f和来源量；寿命总活动为正时，所有受益者含非研究业务的份额和为一。实测终态净残余不得再次扣除历史拆出量。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_zero_activity | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。零产出事件保留其既有因果父队列及原分母，不能寻找无关的正产出期间。若原父队列没有正N_c，保留归属原始总量，归一结果保持未决。全寿命活动为零时，仅可凭证归属唯一投运委托责任，并使用同一原队列规则；否则保留未分配来源并阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_shared_driver_controls | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。资产制造、安装和终态负担采用相同更新f；毛库存、实物转移和退役另作实物监管账。对日历时间资产，u为已发生服务容量时间，按既有共享/类别规则向各原类别/期间仅归属一次，包含规则要求的空置/失败责任；U覆盖相同全用户日历容量。q不得再乘一次类别份额。历史不明、寿命/去向无依据或缺原分母时阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_background_version | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。若供应背景或处理模型版本改变但实物数量未变，也必须替换全部受影响原队列的相应链接清单和结果；不能因为实物delta_A=0而保留旧模型。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| capital_air_linehaul_runway_manufacture_occupancy_basis | u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。本条属于 capital_air_linehaul_runway_manufacture。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐唯一跑道资产a及配置期间登记交付的物理面积Q_a（m2）与全寿命所有受益的实际跑道移动记录或经证实同边界的历史/预测交通。按移动事件e，以机场实证该事件所占的跑道/跑道段有效面积A_e乘实际占用时间t_e得到V_e=A_e*t_e；同段并发以实测非重叠占用区间划分，不复制整段；不用航程小时、货物kg或航班总数代替跑道占用。 | cp_support_air_linehaul; cp_transport; a_transport; cp_cohort | 方法组成部分；清单结果归原入口 |  |
| capital_air_linehaul_runway_manufacture_movement_attribution | u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。本条属于 capital_air_linehaul_runway_manufacture。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。有载营运移动令w_e=p_freight,e*s_cohort,e，分别按a_transport有据客货分配及本队列占同航段全部货运受益者的份额取值。全货p_freight,e=1；有证无本队列份额则w_e=0；全货、客运、训练/空载调位均入总使用者分母，逐空载/调位移动以调度证据连接全部有因果的航段运营任务t。仅一个任务时令w_e=w_t；多个时w_e=sum_t(H_t*w_t)/sum_all_causal(H_t)，H_t为每项唯一因果有载航段的实证轮挡到轮挡运行小时，同一航段不得按运单复制。每个有载任务w_t采用上述客货份额和该队列占全部货运受益者份额。纯客运或有证无队列关系的任务保留于分母且w_t=0。按同样规则覆盖同段全使用者；无完整因果表、匹配运行小时或正分母则未决，仍在全寿命面积时分母保留其已知占用。独立非货运训练有证无队列关系时w_e=0。 | cp_support_air_linehaul; cp_transport; a_transport; cp_cohort | 方法组成部分；清单结果归原入口 |  |
| capital_air_linehaul_runway_manufacture_lifetime_quantities | u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。本条属于 capital_air_linehaul_runway_manufacture。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。f_c,a=sum(V_e*w_e)/sum_all_life(V_e)。分母包括全部用户、同范围寿命及同单位；未用容量由实证使用承担，不删除其建设负担。不再叠乘独立客货份额。q_build=sum(Q_a*f_c,a)/Q；q_EOL=sum(R_net,a*f_c,a)/Q，净终态kg不重复扣历史拆出。保留相同资产、证据寿命和配置；若只有同范围已分配强度须能还原该闭合方法，缺跑道或权重证据则不完整。机场处理/飞行供应商已含该段建设、维修或报废须逐模块排重；维修独立事件归属，不重复整寿命f。 | cp_support_air_linehaul; cp_transport; a_transport; cp_cohort | 方法组成部分；清单结果归原入口 |  |
| capital_air_linehaul_runway_manufacture_linked_method_controls | u_air_linehaul_runway_manufacture; u_air_linehaul_runway_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。本条属于 capital_air_linehaul_runway_manufacture。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 客货与同航段货运内份额必须由calc_air_payload_allocation求得；其主质量方法、零货/空载分支和预分配数据接受规则适用于本行，不另外选择分配方法。 | cp_support_air_linehaul; cp_transport; a_transport; cp_cohort | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| dq_occurrence | 所有条件性卡片 | 在各场址以有日期采购/运行/移交及无事件记录确认发生性。仅实际缺席有证据并签字时标not_applicable；缺UUID、发票或仪表不证明零。发生性或数量未知保留不完整并阻止最终符合。 | 签字适用性及记录覆盖矩阵 |
| quality_waste_origin | paper_waste; carton_waste; residual_waste | 逐种普通固废核验产生责任、原队列/分层/分母、带来源库存平衡、有证据的实际或前瞻完整处理及后来回执替换。来源/去向/物理损失未知保持明确缺口；后来外运本身不能闭合或改归责任。污水及按寿命摊销资产寿终处理采用各自独立方法。 | 产生/库存/转移台账；有证据路线模型；原队列回执替换 |
| dq_identity | 所有清单项及参考流的身份 | 空UUID为明确语义候选，不是已验证绑定。数据库就绪使用前，须从直接官方响应及哈希绑定receipt核对实际官方流、类型、状态、属性/单位及废物接收路线，并比对官方中文名。历史电力身份观察不证明当前供应技术、当前数据库状态或方法批准。 | 直读身份receipt；支持记录链；未解决清单 |
| dq_supplier | 全部上游服务 | 获取物理服务单位及原始清单覆盖，不接受仅支出或CO2e数。各运输方式/区段、处理、仓储及建筑服务须匹配记录供应商边界并明确缺项。完整LCA须有上游各相关基本物质及接收介质；仅温室气体运输指南不足以证明。 | 供应商清单/边界矩阵；实际活动；缺口账 |
| dq_uncertainty | 计量及换算 | 保留原始数、单位、时间、校准、来源文件及采集责任人；与发票、仪表、任务时间及移交对账。分别报告实测/估算/缺失、方法和不确定性；检验主要装载、客货分配、体积约束及寿命假设。不得虚构默认因子、填零、通用区间或合规限值。 | 校准/估算记录；对账；敏感性结果 |
| dq_air_nonco2 | activity_air_linehaul | 报告气候表征方法及航空非CO2效应（含凝结尾迹及高空效应）是否覆盖、排除或不确定；此限制与物理燃料/排放清单分开披露。不得用默认放大倍数乘CO2或CO2e，也不得由货运活动量或仅温室气体因子声称全面航空气候覆盖。 | 方法版本；航空范围披露；有依据时的敏感性 |
| dq_bilingual | 两种语言正文及投影 | 逐一审查两种语言各卡身份/方向/类型/单位/公式/条件、限定信息及规范要求；保留同一规则ID、row ID、协议归属和来源引用。由英文重新生成structured并比较实际投影语义；仅指纹不足。 | 双语语义审查；投影读回 |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | 所有已拆分的支持过程和物种 | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | 范围到实物行对账；供应/BOM/物种原件；签署缺口表 |
| quality_service_interfaces | svc_origin_road; svc_destination_road; svc_air_linehaul; svc_origin_handling; svc_destination_handling; svc_customs_brokerage; svc_bonded_storage; svc_office_occupancy; svc_hosted_tracking | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | cp_interface协议；签署的覆盖责任矩阵；原生单位对账；身份receipt |
| scope_interface_origin_road | u_origin_road_diesel; u_origin_road_petrol; u_origin_road_electricity; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_replacement_tyre; u_origin_road_lubricant; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_origin_road_removed_tyre; u_origin_road_used_lubricant; u_origin_road_co2_fossil_air; u_origin_road_co_air; u_origin_road_no_air; u_origin_road_no2_air; u_origin_road_so2_air; svc_origin_road | 对 support_origin_road，svc_origin_road 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_destination_road | u_destination_road_diesel; u_destination_road_petrol; u_destination_road_electricity; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_replacement_tyre; u_destination_road_lubricant; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_destination_road_removed_tyre; u_destination_road_used_lubricant; u_destination_road_co2_fossil_air; u_destination_road_co_air; u_destination_road_no_air; u_destination_road_no2_air; u_destination_road_so2_air; svc_destination_road | 对 support_destination_road，svc_destination_road 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_air_linehaul | u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_engine_oil; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air; svc_air_linehaul | 对 support_air_linehaul，svc_air_linehaul 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_origin_handling | u_origin_handling_electricity; u_origin_handling_water; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_wastewater; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; svc_origin_handling | 对 support_origin_handling，svc_origin_handling 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_destination_handling | u_destination_handling_electricity; u_destination_handling_water; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_wastewater; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; svc_destination_handling | 对 support_destination_handling，svc_destination_handling 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_customs_brokerage | u_customs_brokerage_electricity; u_customs_brokerage_water; u_customs_brokerage_paper; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_wastewater; u_customs_brokerage_paper_waste; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; svc_customs_brokerage | 对 support_customs_brokerage，svc_customs_brokerage 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_bonded_storage | u_bonded_storage_electricity; u_bonded_storage_water; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_wastewater; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; svc_bonded_storage | 对 support_bonded_storage，svc_bonded_storage 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_office_occupancy | u_office_occupancy_electricity; u_office_occupancy_water; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_wastewater; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; svc_office_occupancy | 对 support_office_occupancy，svc_office_occupancy 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_hosted_tracking | u_hosted_tracking_electricity; u_hosted_tracking_water; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_wastewater; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal; svc_hosted_tracking | 对 support_hosted_tracking，svc_hosted_tracking 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| inv_cohort_scope | office_electricity; label_paper; protective_carton; office_water; computer_hardware; office_wastewater; paper_waste; carton_waste; residual_waste; computer_waste; delivered_service | 本卡记录具有独立活动边界的一项实物服务或交换。数量规则及关联协议适用于含失败作业的完整队列。 | 所列各清单行既有的采集协议和证据。 |
| inv_origin_road_scope | u_origin_road_diesel; u_origin_road_petrol; u_origin_road_electricity; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_replacement_tyre; u_origin_road_lubricant; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_origin_road_removed_tyre; u_origin_road_used_lubricant; u_origin_road_co2_fossil_air; u_origin_road_co_air; u_origin_road_no_air; u_origin_road_no2_air; u_origin_road_so2_air | 独立的始发道路区段运行；实际合同车辆、能源、直接排放、资本、维护、空驶调位及寿终，排除已归其他过程的航空或场站模块。 | 所列各清单行既有的采集协议和证据。 |
| inv_physical_basis | u_origin_road_diesel; u_origin_road_petrol; u_origin_road_electricity; u_origin_road_replacement_tyre; u_origin_road_lubricant; u_origin_road_removed_tyre; u_origin_road_used_lubricant; u_origin_road_co2_fossil_air; u_origin_road_co_air; u_origin_road_no_air; u_origin_road_no2_air; u_origin_road_so2_air; u_destination_road_diesel; u_destination_road_petrol; u_destination_road_electricity; u_destination_road_replacement_tyre; u_destination_road_lubricant; u_destination_road_removed_tyre; u_destination_road_used_lubricant; u_destination_road_co2_fossil_air; u_destination_road_co_air; u_destination_road_no_air; u_destination_road_no2_air; u_destination_road_so2_air; u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air; u_origin_handling_electricity; u_origin_handling_water; u_destination_handling_electricity; u_destination_handling_water; u_customs_brokerage_electricity; u_customs_brokerage_water; u_customs_brokerage_paper; u_customs_brokerage_paper_waste; u_bonded_storage_electricity; u_bonded_storage_water; u_office_occupancy_electricity; u_office_occupancy_water; u_hosted_tracking_electricity; u_hosted_tracking_water | 规范编写前须确定实际牌号或型号、状态、实物单位及唯一归属；按规定活动依据分配实测实物量一次，不得以服务小时代替实物数量。 | 所列各清单行既有的采集协议和证据。 |
| inv_occurrence | u_origin_road_electricity; u_origin_road_replacement_tyre; u_origin_road_lubricant; u_origin_road_removed_tyre; u_origin_road_used_lubricant; u_origin_road_co2_fossil_air; u_origin_road_co_air; u_origin_road_no_air; u_origin_road_no2_air; u_origin_road_so2_air; u_destination_road_electricity; u_destination_road_replacement_tyre; u_destination_road_lubricant; u_destination_road_removed_tyre; u_destination_road_used_lubricant; u_destination_road_co2_fossil_air; u_destination_road_co_air; u_destination_road_no_air; u_destination_road_no2_air; u_destination_road_so2_air; u_air_linehaul_electricity; u_air_linehaul_engine_oil; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air; u_origin_handling_electricity; u_origin_handling_water; u_origin_handling_wastewater; u_destination_handling_electricity; u_destination_handling_water; u_destination_handling_wastewater; u_customs_brokerage_electricity; u_customs_brokerage_water; u_customs_brokerage_paper; u_customs_brokerage_wastewater; u_customs_brokerage_paper_waste; u_bonded_storage_electricity; u_bonded_storage_water; u_bonded_storage_wastewater; u_office_occupancy_electricity; u_office_occupancy_water; u_office_occupancy_wastewater; u_hosted_tracking_electricity; u_hosted_tracking_water; u_hosted_tracking_wastewater | 仅当匹配的实际供应商清单及实物记录证实该具体交换时启用；未发生须有肯定证据，未知不等于零。 | 所列各清单行既有的采集协议和证据。 |
| inv_ac_basis | u_origin_road_electricity; u_destination_road_electricity; u_air_linehaul_electricity; u_origin_handling_electricity; u_destination_handling_electricity; u_customs_brokerage_electricity; u_bonded_storage_electricity; u_office_occupancy_electricity; u_hosted_tracking_electricity | 仅适用于独立证实的使用点交流电；此通用UUID不确定供应商、电网、电压或发电技术。表计kWh仅乘一次3.6转MJ；安装/维修与运行交流电的表计/阶段责任互斥。 | 所列各清单行既有的采集协议和证据。 |
| inv_asset_cohorts | u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture | 仅当该实际且唯一识别的实物资产配置服务已声明服务范围时启用。每个初装资产及每个整机替换资产均须作为独立序列号或cohort，分别记录取得投用、寿命容量及退役。每个实物资产仅计一次，使用各自f；整机替换不是维护耗材。排除的仅为其他处显式核算的使用、实际部件维护及寿终模块。对每个独立识别的初装或整机替换资产cohort a，q_a=实际实物资产量_a*f_a/最终合格参考流分母，仅一次。每个cohort均有独立全寿命容量及原终端残余；汇总不同cohort，不再加一张整机更换材料卡。仅当实际更换部件与整机是不同实物且未在其他处包含时才作维护流。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 | 所列各清单行既有的采集协议和证据。 |
| inv_construction_gate | u_origin_road_road_section_manufacture; u_destination_road_road_section_manufacture; u_air_linehaul_runway_manufacture; u_origin_handling_terminal_building_manufacture; u_destination_handling_terminal_building_manufacture; u_customs_brokerage_broker_office_manufacture; u_bonded_storage_warehouse_manufacture; u_office_occupancy_office_building_manufacture; u_hosted_tracking_datacentre_manufacture | 该建筑、道路、跑道或遮棚实物产品以竣工交付为gate；上游建筑产品及现场施工运行须纳入该gate之前，不得因制造门标签而遗漏。 | 所列各清单行既有的采集协议和证据。 |
| inv_terminal_cohorts | u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 每个独立初装或整机替换资产序列号或cohort a的终端残余kg_a，采用其原生产或竣工交付产品完全相同的该资产cohort f_a，再除最终合格参考流分母一次。对账部件维护拆除物及保留复用库存；不得按转移日期再加废物。 | 所列各清单行既有的采集协议和证据。 |
| inv_destination_road_scope | u_destination_road_diesel; u_destination_road_petrol; u_destination_road_electricity; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_replacement_tyre; u_destination_road_lubricant; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_destination_road_removed_tyre; u_destination_road_used_lubricant; u_destination_road_co2_fossil_air; u_destination_road_co_air; u_destination_road_no_air; u_destination_road_no2_air; u_destination_road_so2_air | 独立的目的地道路区段运行；实际合同车辆、能源、直接排放、资本、维护、空驶调位及寿终，排除已归其他过程的航空或场站模块。 | 所列各清单行既有的采集协议和证据。 |
| inv_flight_scope | u_air_linehaul_aviation_kerosene; u_air_linehaul_electricity; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_engine_oil; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_air_linehaul_used_engine_oil; u_air_linehaul_co2_fossil_air; u_air_linehaul_co_air; u_air_linehaul_no_air; u_air_linehaul_no2_air; u_air_linehaul_so2_air | 独立货运飞行运行，含匹配飞机及发动机制造、飞行滑行及APU能源、维护、机场支持、空载移动及寿终；保留实际全程服务排除。 | 所列各清单行既有的采集协议和证据。 |
| inv_occupancy_driver | u_air_linehaul_runway_manufacture; u_origin_handling_terminal_building_manufacture; u_destination_handling_terminal_building_manufacture; u_customs_brokerage_broker_office_manufacture; u_bonded_storage_warehouse_manufacture; u_office_occupancy_office_building_manufacture; u_hosted_tracking_datacentre_manufacture | f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。 | 所列各清单行既有的采集协议和证据。 |
| inv_origin_terminal_scope | u_origin_handling_electricity; u_origin_handling_water; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_wastewater; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal | 独立始发场站完整通行执行，含实际安检、卸载、分拣及装载运行和对应实物设备废物；扫描及周期内停留不重复计量。 | 所列各清单行既有的采集协议和证据。 |
| inv_active_hours | u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_office_occupancy_hvac_plant_manufacture | f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。 | 所列各清单行既有的采集协议和证据。 |
| inv_replacement_attribution | u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_office_occupancy_hvac_plant_manufacture; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_cooling_plant_manufacture | 原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。 | 所列各清单行既有的采集协议和证据。 |
| inv_destination_terminal_scope | u_destination_handling_electricity; u_destination_handling_water; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_wastewater; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal | 独立目的地或中转场站完整通行执行，含实际安检、卸载、分拣及装载运行和对应实物设备废物；扫描及周期内停留不重复计量。 | 所列各清单行既有的采集协议和证据。 |
| inv_customs_scope | u_customs_brokerage_electricity; u_customs_brokerage_water; u_customs_brokerage_paper; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_wastewater; u_customs_brokerage_paper_waste; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal | 独立报关及查验协调办公执行，排除税费罚款及已由场站处理覆盖的任务。 | 所列各清单行既有的采集协议和证据。 |
| inv_bonded_scope | u_bonded_storage_electricity; u_bonded_storage_water; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_wastewater; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal | 独立常温保税库存滞留运行，排除已含场站停留；覆盖实际仓库资本、公用工程、搬运清洁及残余处理。 | 所列各清单行既有的采集协议和证据。 |
| inv_building_scope | u_office_occupancy_electricity; u_office_occupancy_water; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_wastewater; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal | 独立快递办公建筑支持，将竣工交付建筑壳体固定设施和制造门固定设备与中央运行资源、部件维护、同cohort终端残余分开，排除快递独立计量卡。 | 所列各清单行既有的采集协议和证据。 |
| inv_tracking_scope | u_hosted_tracking_electricity; u_hosted_tracking_water; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_wastewater; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 独立配置化跟踪应用执行，按声明供应商至办公接入分界覆盖计算、存储、网络及托管场地实物范围。 | 所列各清单行既有的采集协议和证据。 |
| inv_it_driver | u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_cooling_plant_manufacture | f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_scope | 数据集 | 核对非普遍服务义务的起运接管及不同国家最终交付由一个签约服务商承担；全部实际路线符合声明的常温外包空运/公路/办公室范围。仅国内、普遍服务义务和仅区段数据不符合本PCR。 | `un-cpc3-68022` |
| validate_service_interfaces | svc_origin_road; svc_destination_road; svc_air_linehaul; svc_origin_handling; svc_destination_handling; svc_customs_brokerage; svc_bonded_storage; svc_office_occupancy; svc_hosted_tracking | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |
| v_cohort | delivered_service | 要求Q > 0、互斥最终结局闭合、pending = 0、固定件数清单一致、全部失败/退回/重试进入分子；Q只计一次。未闭合海关扣留不得删除或填零。 | `dhl-carriage-2024` |
| v_inventory | 清单 | 要求唯一活动归属及供应商覆盖、完整物理单位/计算、匹配采集记录、有依据分配及全部实际原子交换。拒绝重复运输能源/资产/场站作业、无归属废物处理、未解决数值换算或无说明数量缺失。 检验A期产生留存废物、B期外运：原A责任及分母保留，实际证据替换同一事件模型，不再给B追加负担。 | `ghg-product-2011` |
| v_identity | 数据库就绪实施 | 存在未解决身份的已编写候选不具发布就绪。以官方证据解决各适用流/属性/单位身份，保留排除/不适用决定，并报告剩余缺口，不得声称已验证数据库完整性或科学批准。 |  |
| v_language | 源与guidance | 要求双语参考基准、边界、全部适用清单卡、全部采集/计算/质量规则、row/协议引用及来源覆盖在实际生成guidance中对齐；独立审查前保留候选生命周期。 |  |
| validate_air_payload_allocation | 全部混合/全货/空载航段 | 核验calc_air_payload_allocation的C/P/M_c、同航段基准、全部受益者、载重估计证据、零货和空载因果分支；按主方法复算w并核对预分配数据去重。无依据旅客质量、另选主算法或重复乘p_freight阻断完成。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | 所有支持过程和排放清单行 | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | computer_hardware; computer_waste; u_origin_road_road_vehicle_manufacture; u_origin_road_road_section_manufacture; u_origin_road_road_vehicle_terminal; u_origin_road_road_section_terminal; u_destination_road_road_vehicle_manufacture; u_destination_road_road_section_manufacture; u_destination_road_road_vehicle_terminal; u_destination_road_road_section_terminal; u_air_linehaul_aircraft_manufacture; u_air_linehaul_runway_manufacture; u_air_linehaul_aircraft_terminal; u_air_linehaul_runway_terminal; u_origin_handling_terminal_building_manufacture; u_origin_handling_conveyor_manufacture; u_origin_handling_screening_unit_manufacture; u_origin_handling_forklift_manufacture; u_origin_handling_terminal_building_terminal; u_origin_handling_conveyor_terminal; u_origin_handling_screening_unit_terminal; u_origin_handling_forklift_terminal; u_destination_handling_terminal_building_manufacture; u_destination_handling_conveyor_manufacture; u_destination_handling_screening_unit_manufacture; u_destination_handling_forklift_manufacture; u_destination_handling_terminal_building_terminal; u_destination_handling_conveyor_terminal; u_destination_handling_screening_unit_terminal; u_destination_handling_forklift_terminal; u_customs_brokerage_broker_computer_manufacture; u_customs_brokerage_broker_network_manufacture; u_customs_brokerage_broker_office_manufacture; u_customs_brokerage_broker_computer_terminal; u_customs_brokerage_broker_network_terminal; u_customs_brokerage_broker_office_terminal; u_bonded_storage_warehouse_manufacture; u_bonded_storage_storage_rack_manufacture; u_bonded_storage_storage_forklift_manufacture; u_bonded_storage_warehouse_terminal; u_bonded_storage_storage_rack_terminal; u_bonded_storage_storage_forklift_terminal; u_office_occupancy_office_building_manufacture; u_office_occupancy_hvac_plant_manufacture; u_office_occupancy_office_building_terminal; u_office_occupancy_hvac_plant_terminal; u_hosted_tracking_server_manufacture; u_hosted_tracking_storage_unit_manufacture; u_hosted_tracking_network_switch_manufacture; u_hosted_tracking_datacentre_manufacture; u_hosted_tracking_cooling_plant_manufacture; u_hosted_tracking_server_terminal; u_hosted_tracking_storage_unit_terminal; u_hosted_tracking_network_switch_terminal; u_hosted_tracking_datacentre_terminal; u_hosted_tracking_cooling_plant_terminal | 必须核对calc_capital_restatement的原队列/原分母、全用户驱动、来源版本、已记量及重算差额；禁止冻结旧历史再只改后续分母，禁止将退役余额转给无关当期产品，禁止负实物交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 在全部适用性及数据门槛通过后，用于已声明外包空运/公路网络、国家组合及服务层的量化国际常温快递交付。 |
| excluded_use | 不是通用运输排放因子；不得替代普遍服务义务/国内/柜台/独立货运；缺口存在时不是完整产品生命周期影响或已验证当前天工数据集。 |
| required_metadata | 国家组合；起运受理和目的地交付地址；责任服务商及分包商；运单/包装件定义；毛重和尺寸级别；内装物及常温状态；空运和公路区段；日期和服务承诺；交付证明/状态标准；队列闭合及各结局数；供应商清单边界；分配及电力供应背景；普通废物产生来源、原份额/分母、留存库存及处理修订链；签署的前景/接口责任矩阵、原生服务活动及背景覆盖；仅对前景责任组成保留原实物活动、制造/终态配对及物种基准 |
| required_quality_disclosure | Q、A、R0及失败数；待处理数；队列期间及闭合历时；供应商活动覆盖；待核身份；估算/校准；全部分配基准及敏感性；排除及未解决实际交换。 |
| update_trigger | 服务商、方式、国家组合、承诺、包装类别、办公室技术、供应商清单、数量基准、分配、法定关务过程或身份依据变化。；后来普通废物回执/去向或产生量更正须更新原事件/队列模型；前景实物身份/物种变化或外部接口配置/单位/覆盖变化须复审适用具体卡并更新投影 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-68022 | official_guidance | UNSD, CPC Version 3.0, 68022 International courier services; https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68022 | 非普遍服务义务的跨国收取、运输和投递；原分类覆盖多种运输方式，比本PCR更宽。 |
| dhl-carriage-2024 | standard | DHL Express, Terms and Conditions of Carriage (2024), sections 1–5 and 11; https://mydhlplus.dhl.com/content/dam/downloads/global/en/t-c/terms_conditions_of_carriage_en-2024.pdf.coredownload.pdf | 关务、检查、交付、拒收退回、运单识别以及实际重量与计费重量差异的运营实例；不作通用法律规定或LCA数值因子。 |
| ghg-product-2011 | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard (2011), chapter 9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 先细分再作物理分配；通用温室气体核算原则供本PCR采用，不证明多影响类别合规。 |
| ghg-transport-2013 | official_guidance | GHG Protocol, Technical Guidance for Calculating Scope 3 Emissions, version 1.0 (2013), category 4, pp. 53–55; https://ghgprotocol.org/sites/default/files/standards/Scope3_Calculation_Guidance_0.pdf | 运输物理活动及质量/体积分配；不采用默认装载率、空返率、空运因子或体积重量换算系数。 |
