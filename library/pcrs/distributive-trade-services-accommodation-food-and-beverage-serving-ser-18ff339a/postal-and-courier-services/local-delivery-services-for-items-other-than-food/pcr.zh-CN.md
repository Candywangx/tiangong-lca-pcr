---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.local-delivery-services-for-items-other-than-food
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 电动厢式车本地配送常温非食品零售包件

## 1. 范围与适用性

仅适用于从一个零售商备货点发出的普通常温、非危险非食品零售包件，由运营方控制的纯电动厢式车本地配送，不设置货厢制冷。以邮政编码列表或地理围栏声明实际服务区及承诺交接时间窗；本规则不设通用距离阈值或默认服务强度。同一路线可以承运多个客户及不同尺寸包件，但在分配前必须先分开交付承诺或车辆配置存在实质差异的服务。 备货点必须有证据证明不存在现场燃料燃烧、热力公用工程及含冷媒设备；全部运营能源均纳入备货交流电或另有边界的信息／清洁服务。实际出现额外资源或排放时，在原子化修订覆盖之前不得声明完整。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.local-delivery-services-for-items-other-than-food |
| classification_refs | CPC 3.0 68039; narrower |
| covered_products | 电动厢式车本地配送常温非食品零售包件 |
| excluded_products | 排除食品配送（68031）、家庭及办公搬家（65115、65119）、自行车快递／信使（68021）、普遍服务邮政及国内／国际快递网络。还排除危险货物、温控货物、大宗家具搬迁、燃油或混合动力车辆及外包运输执行。运营方控制运营的租赁车辆仍属自营；如果承包商执行了任一物理运输段，当前配置不适用。不得删除其活动或同时计入外包服务与自营清单。本 PCR 的范围窄于 CPC 68039，不覆盖整个残余叶类。 |
| representative_product | 一个常温非食品零售物理包件的合格本地配送服务 |
| production_route | 运营方控制的纯电动厢式车；本地零售备货及配送；驾驶舱有空调时仅限 R1234yf；无货厢制冷 |
| market_state | 商品已制造且客户已原包装；本地受理配送，不制造商品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一个常温非食品零售物理包件的合格本地配送服务 |
| How much | 1 个已验收物理包件，不是一订单、任务、尝试、行程或 kg |
| How well | 有证据从保管接收到收件人在约定可达地面交接点按约定物理状态验收；报告实际时效与承诺时间窗、准时率及失败率。晚到但物理验收的包件仍计入 D；本单位不声称时间履约合规 |
| How long or cycle | 一次合格配送周期；连续 12 个月受理窗口的 cohort 追踪至全部结案 |
| reference_flow_link | delivery_accepted |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一个常温非食品零售物理包件的合格本地配送服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 服务区;零售交接点;收件交接点;时间窗;含包装质量及尺寸;包件／订单／任务谱系;车辆／电池／充电设备配置;R1234yf 或驾驶舱系统不存在的证据;期间及结案;D 及所有终态计数;失败／准时率;全客户分配;上游服务范围;身份及不确定性缺口 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `service_count` | delivery_accepted | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 使用闭合物理包件 cohort 的 D/D = 1。全部清单量采用 每参考流，恰除以 D 一次。包件含包装 kg 是分配观测值，不是产出单位。 |
| `electricity_conversion` | van_motion_ac;van_stop_ac;staging_ac | 净热值 | MJ | 交流 kWh * 3.6 = MJ；不得重复应用燃料热值、电网排放或充电效率。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 零售原包装物理包件进入本地运营方保管 |
| starting_condition_role | foreground_start |
| product_classification_scope | CPC 3.0 68039; narrower |
| recursive_input_rule | 执行 boundary_atomic_support：外部活动通过明确的单单位服务接口进入，不递归展开供应方内部。前景实物过程保留原卡及规则。保管货物不是制造投入。 |
| upstream_dataset_requirement | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |
| disclosure | 服务 gate、配置、cohort 结案、全部失败负担、供应范围、所有未知身份及不确定性 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `boundary_scope` | 服务配置 | 仅适用于从一个零售商备货点发出的普通常温、非危险非食品零售包件，由运营方控制的纯电动厢式车本地配送，不设置货厢制冷。以邮政编码列表或地理围栏声明实际服务区及承诺交接时间窗；本规则不设通用距离阈值或默认服务强度。同一路线可以承运多个客户及不同尺寸包件，但在分配前必须先分开交付承诺或车辆配置存在实质差异的服务。 备货点必须有证据证明不存在现场燃料燃烧、热力公用工程及含冷媒设备；全部运营能源均纳入备货交流电或另有边界的信息／清洁服务。实际出现额外资源或排放时，在原子化修订覆盖之前不得声明完整。 |  |
| `boundary_gates` | 受理与结案 | 起点为已制造并由客户完成原包装的、具有物理身份的零售包件在零售备货交接点扫描进入本地配送运营方保管。纳入备货、派单、装车、所有尝试、等候、空驶、空返、路线引起的调位及最终结案。终点为收件人在约定可达地面交接点有证据验收，或未成功包件有证据返还零售商／损坏或遗失完成处置结案。不含安装、组装、上楼搬运、拆包、客户使用或此后独立的逆向物流服务。排除受理前零售库存及商品上游供给；纳入配送新增的备货与运营支持。 |  |
| `boundary_exclude` | 分类边界 | 排除食品配送（68031）、家庭及办公搬家（65115、65119）、自行车快递／信使（68021）、普遍服务邮政及国内／国际快递网络。还排除危险货物、温控货物、大宗家具搬迁、燃油或混合动力车辆及外包运输执行。运营方控制运营的租赁车辆仍属自营；如果承包商执行了任一物理运输段，当前配置不适用。不得删除其活动或同时计入外包服务与自营清单。本 PCR 的范围窄于 CPC 68039，不覆盖整个残余叶类。 | `un-cpc3-68039` |
| `boundary_goods` | 保管商品与新增材料 | 商品及客户原包装是保管对象，不是配送服务制造的产品输入。记录其含包装质量、尺寸及状态，用于物理分配和保管对账。仅纳入配送新增包装的生产及实际去向：已交付包装随包件越过服务终点；实测已移除/收集包装作为前景废物流输出并核对接收方。损坏须记录质量及事故。证实包件遗失未回收时，按calc_packaging保留原队列包装耗用及事故证据，另登记未知去向，只有真实找回并移交时记录接收方。不得虚构商品制造负担或负的服务产出。出现新增包装或其他未表达的材料、冷媒、能源、路线时，数据集完整之前必须增加有名称的原子卡并同步修订方法；UUID 缺失绝不是删卡理由。 |  |
| `boundary_assets` | 上游与完整服务边界 | 执行 foreground_interface_coverage：前景之外采用具体服务接口；以下详细实物要求仅适用于前景责任组成。保留明确实物整车及充电设备产品及其已审组件/生命周期边界。车间维修、备货设施、清洁、道路及派单IT展开为各自支持实物过程。整车原装组件含原电池、轮胎及在机冷媒，不是充电设备。供应范围须区分产品制造、实际替换、车间能源、拆出件、运行电力及直接磨耗/泄漏。仅用实际物理单位清单；活动小时和供应包不是交换。重叠模块须有证据精确剔除，不可分重叠或实际交换未识别阻断完成。不计避免生产回收抵扣。 | `eea-electric-vehicles` |

### 支持活动原子边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | 支持活动 | 每条启用交换表示一个明确的材料、设备或服务对象，只使用一个主属性和单位。不得仅因服务包含上游过程而禁止服务流。计量前按供应方、合同、场址、事件、接口和范围组成确定责任。运营方运行的过程及由运营方承担清单责任的独立委托现场任务采用前景实物行；责任范围外的独立供应活动采用其明确的服务接口行，供应方制造、公用工程、维护和废物保留在匹配的背景服务中，不另作前景交换。合同本身不使供应方内部过程成为前景。不得改变产品、路线、保管接口或原参考分母。执行 foreground_interface_method 和 foreground_interface_coverage；边界变化须经PCR审查，不得根据数据是否易得任意选择。 此处责任归属指清单责任，不仅指法律所有权：租赁设备的提供可以是外部服务，而运营方运行所用的独立计量电力仍属于前景。 |  |
| foreground_interface_coverage | 所有支持过程及重叠范围 | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| delivery | 厢式车本地配送及结案 | required | 全部已受理 cohort 包件及其引起的尝试 | foreground | delivery_accepted |
| staging | 配送新增包装 | conditional | 实际使用或拆除配送新增包装 | foreground | 净消耗材料 kg 按 每参考流 分配 |
| support | 本地新增备货及派单支持 | required | 实际场地及共享配送支持 | foreground | 实测支持量按 每参考流 分配 |
| support_road_infrastructure | 支持接口／前景活动：声明车型使用指定道路路段的服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：自营厢式货车区段实际道路类别基础设施支持；保留既定工程损坏及固定道路空间时间分配，排除直接道路磨耗。 | support | 归属至delivery_accepted |
| support_van_maintenance | 支持接口／前景活动：配置明确的电动配送厢式车维护作业服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立实际纯电厢式货车车间维修执行，含逐项明确更换物、车间公用工程资本及拆除残余。排除原整车及充电器资本；新R1234yf投入及空气泄漏保留既有独立卡。 | support | 归属至delivery_accepted |
| support_staging_infrastructure | 支持接口／前景活动：配送暂存场所建筑空间占用服务，不含公用工程 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立实物暂存建筑及固定设施生命周期，排除已有单独归属的全部运行电、地板清洁、充电器及调度终端资源。 | support | 归属至delivery_accepted |
| support_floor_cleaning | 支持接口／前景活动：指定暂存场所一次完成的地面清洁通过服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立实际暂存地板清洁执行：水、每种明确清洗产品、清洁设备运行资本、废水及残余处理。 | support | 归属至delivery_accepted |
| support_dispatch_terminal | 支持接口／前景活动：终端接口处配置明确的配送调度信息服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立完整信息执行，实物覆盖实际终端、通信网络及后端：制造设备产品采用制造门，建成设施采用竣工交付；运行、部件维护及同cohort终端残余独立。 | support | 归属至delivery_accepted |

### 过程： 厢式车配送及结案 (`delivery`)

#### 输入

##### 产品流

###### 交流电 (`van_motion_ac`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：已分配运动交流 kWh 乘 3.6 后除以 D；按 cp_energy 包含归属充电损失及荷电状态调整，恰计一次。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 交流电 (`van_stop_ac`)

已分配静止／停靠交流 kWh 乘 3.6 后除以 D；归属充电损失恰计一次，与 van_motion_ac 互斥。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：依第8节电力规则，归属剩余停站交流电加直接归属已验证零事件交流电kWh*3.6/D，仅归一化一次；分配前从剩余池剔除直接事件交流电。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

###### 完整纯电动配送厢式车 (`van_capital`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：完整纯电动配送厢式车
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：完整车辆含原装电池、轮胎、已装 R1234yf 冷媒充注及寿命终止，数量为 sum(cohort 已归属车辆 km/有证据的有效寿命车辆 km)/D；充电设备另列。替换或使用模块不得与维修／能源／排放卡重叠。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：`eea-electric-vehicles`

###### 完整厢式车交流充电设备 (`charger_capital`)

完整设备制造、维护及寿终按实际运行设备小时分配。实测实际运行电损失事件可为零总储能入账，采用固定零事件分支；未运行等待不新增实际运行小时。外购运行交流电独立核算。

- 选定流：完整厢式车交流充电设备
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：sum([正来源归属实际运行H_k+已验证零事件归属实际运行H_k]/有证据设备寿命实际运行并集h)/D；采用第8节资本规则，保留零入账但实际运行电损失事件，排除未运行等待。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_assets`
- 来源：

###### 外购验收的新R1234yf（自营厢车驾驶舱） (`r1234yf_topup`)

仅限有证由外部获得货权并实际交付的新料R1234yf，供自营厢车驾驶舱空调；外购再生料走独立产品卡，初装属完整车辆，原库存回用和受托返还不作新供应。用第8节带来源库存和受益事件归属的化学品kg；留存未用采购不直接进入本队列。

- 选定流：外购验收的新R1234yf（自营厢车驾驶舱）
- 流属性/单位：质量 / kg
- 数量规则：A_supply/D
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

###### 外购验收的再生R1234yf（自营厢车驾驶舱） (`r1234yf_reclaimed_external`)

仅限有证取得货权、实际交付且符合自营厢车驾驶舱空调充注验收的外部再生R1234yf产品。保留同批供方再生清单、交接证据及来源库存；按第8节首次为本服务消耗的已归属化学品kg，原有冷媒受托返还或内转不计本输入。

- 选定流：外购验收的再生R1234yf（自营厢车驾驶舱）
- 流属性/单位：质量 / kg
- 数量规则：A_reclaimed/D
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

#### 输出

##### 产品流

###### 一个常温非食品零售物理包件的合格本地配送服务 (`delivery_accepted`)

仅在约定 gate 由收件人实际验收物理完好包件后，按 cp_outcomes 计 D/D。晚到已验收件仍属 D，但须另披露时效；失败／返库／处置件没有服务产出，其负担仍在 cohort 分子中。

- 选定流：一个常温非食品零售物理包件的合格本地配送服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_outcomes`
- 来源：

###### 按产品状态对外交付的回收R1234yf (`r1234yf_recovered_product`)

仅限本运营商边界外实际交接、可确认接收方与产品状态的R1234yf。按唯一移动ID记录实测净质量；内部暂存及回用不产生此输出，同一交接不得同时记为另一状态。 适用计算见calc_refrigerant；结果已按原参考流归一。 证据须表明交接对象就是本卡具名冷媒及所列产品或废物状态。逐批记录带容器称重、皮重、净批量、匹配批次的组成及校准或分析证据；物料平衡只用该化学品的kg。若交接的是不同规格混合料或混合废物，按实际交接载体独立登记一次，组分kg只用于平衡。 产品/废物的负担边界按allocation_refrigerant_recovery执行。

- 选定流: 按产品状态对外交付的回收R1234yf
- 流属性/单位: 质量 / kg
- 数量规则： A_product/D
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`

##### 废物流

###### R1234yf在产生点的废物 (`r1234yf_recovered_waste`)

仅对本行具名冷媒已有有证不可逆判废、并退出可用/可充注状态时启用。废物交换gate在产生点，含原队列负责的留存废物及有据完整处理。回收但仍可用的库存不触发本行；混合载体必须采用其实际身份和整股量另行登记，组分只作守恒。后续实物交接核验原事件，不将责任转给外运期间。

- 选定流： R1234yf在产生点的废物
- 流属性/单位: 质量 / kg
- 数量规则： A_waste/D
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`

##### 基本流

###### 2,3,3,3-四氟丙-1-烯，R1234yf，排入空气 (`r1234yf_air`)

只计有证据向空气释放的驾驶舱R1234yf质量。禁用GWP作为物质量或与维保重复。 适用计算见calc_refrigerant；结果已按原参考流归一。

- 选定流：2,3,3,3-四氟丙-1-烯，R1234yf，排入空气
- 流属性/单位：质量 / kg
- 数量规则：A_air/D
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：

###### 轮胎磨耗颗粒排入环境空气 (`tyre_air`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：轮胎磨耗颗粒排入环境空气
- 流属性/单位：质量 / kg
- 数量规则：按 cp_emissions，将已分配 轮胎磨耗颗粒新磨耗 kg 乘其互斥环境空气份额，再除以 D。仅一个来源和接收介质；表示材料混合物总量，不是纯组分；排除已捕集废物及上游服务已计来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`eea-electric-vehicles`

###### 轮胎磨耗颗粒排入道路邻近土壤 (`tyre_soil`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：轮胎磨耗颗粒排入道路邻近土壤
- 流属性/单位：质量 / kg
- 数量规则：按 cp_emissions，将已分配 轮胎磨耗颗粒新磨耗 kg 乘其互斥道路邻近土壤份额，再除以 D。仅一个来源和接收介质；表示材料混合物总量，不是纯组分；排除已捕集废物及上游服务已计来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`eea-electric-vehicles`

###### 制动器磨耗颗粒排入环境空气 (`brake_air`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：制动器磨耗颗粒排入环境空气
- 流属性/单位：质量 / kg
- 数量规则：按 cp_emissions，将已分配 制动器磨耗颗粒新磨耗 kg 乘其互斥环境空气份额，再除以 D。仅一个来源和接收介质；表示材料混合物总量，不是纯组分；排除已捕集废物及上游服务已计来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`eea-electric-vehicles`

###### 制动器磨耗颗粒排入道路邻近土壤 (`brake_soil`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：制动器磨耗颗粒排入道路邻近土壤
- 流属性/单位：质量 / kg
- 数量规则：按 cp_emissions，将已分配 制动器磨耗颗粒新磨耗 kg 乘其互斥道路邻近土壤份额，再除以 D。仅一个来源和接收介质；表示材料混合物总量，不是纯组分；排除已捕集废物及上游服务已计来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`eea-electric-vehicles`

###### 路面磨耗颗粒排入环境空气 (`road_air`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：路面磨耗颗粒排入环境空气
- 流属性/单位：质量 / kg
- 数量规则：按 cp_emissions，将已分配 路面磨耗颗粒新磨耗 kg 乘其互斥环境空气份额，再除以 D。仅一个来源和接收介质；表示材料混合物总量，不是纯组分；排除已捕集废物及上游服务已计来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`eea-electric-vehicles`

###### 路面磨耗颗粒排入道路邻近土壤 (`road_soil`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：路面磨耗颗粒排入道路邻近土壤
- 流属性/单位：质量 / kg
- 数量规则：按 cp_emissions，将已分配 路面磨耗颗粒新磨耗 kg 乘其互斥道路邻近土壤份额，再除以 D。仅一个来源和接收介质；表示材料混合物总量，不是纯组分；排除已捕集废物及上游服务已计来源。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`eea-electric-vehicles`

###### 原有道路尘再悬浮至环境空气 (`dust_resuspension_air`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：原有道路尘再悬浮至环境空气
- 流属性/单位：质量 / kg
- 数量规则：按 cp_emissions 源库存台账，已分配的实测／模型原有道路尘再悬浮 kg/D；不得第二次加上新生成磨耗。颗粒份额不得重叠。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_emissions`
- 来源：`eea-electric-vehicles`

### 过程： 配送新增包装 (`staging`)

#### 输入

##### 产品流

###### 配送新增瓦楞纸板 (`cardboard_added`)

按 cp_pack 净消耗瓦楞纸板 kg/D；排除客户原纸箱及未使用退库。

- 选定流：配送新增瓦楞纸板
- 流属性/单位：质量 / kg
- 数量规则：按 cp_pack 净消耗瓦楞纸板 kg/D；排除客户原纸箱及未使用退库。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

###### 配送新增无增强筋纸质胶带 (`paper_tape_added`)

净消耗完整纸质胶带 kg/D，包含所购材料中的胶黏剂；同一胶带不得另记胶黏剂输入。

- 选定流：配送新增无增强筋纸质胶带
- 流属性/单位：质量 / kg
- 数量规则：净消耗完整纸质胶带 kg/D，包含所购材料中的胶黏剂；同一胶带不得另记胶黏剂输入。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

#### 输出

##### 废物流

###### 送处理的拆除配送新增瓦楞纸板 (`cardboard_waste`)

在原始丢弃产生gate已为独立实物的配送新增瓦楞纸板废物，不含仍附着的纸胶带。存在附着胶带的组件仅进入cardboard_tape_assembly_waste；只有实物已分离才分别使用纸板与胶带卡。 按calc_packaging_carrier核对实际接收规格、状态和单一去向；不得假定实施了拆解。 三卡均采用原事件产生量及calc_packaging_carrier的原归属，包含尚未外运的留存量；接收称重仅用于原事件后续路径/残余核对，不能以本期外运量替代产生量。

- 选定流：送处理的拆除配送新增瓦楞纸板
- 流属性/单位：质量 / kg
- 数量规则：M_separate_board_kg / D
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

###### 送处理的拆除配送新增纸质胶带 (`paper_tape_waste`)

在原始丢弃产生gate已为独立实物的配送新增纸胶带废物，包含胶黏剂；仅当胶带本身已物理独立时使用。仍附着纸板时整件只进入cardboard_tape_assembly_waste，胶带组成kg只用于台账，不作另一交换。 按calc_packaging_carrier核对实际接收规格、状态和单一去向；不得假定实施了拆解。 三卡均采用原事件产生量及calc_packaging_carrier的原归属，包含尚未外运的留存量；接收称重仅用于原事件后续路径/残余核对，不能以本期外运量替代产生量。

- 选定流：送处理的拆除配送新增纸质胶带
- 流属性/单位：质量 / kg
- 数量规则：M_separate_tape_kg / D
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

###### 附着无增强纸胶带的配送新增瓦楞纸板组件废物 (`cardboard_tape_assembly_waste`)

一件实际未分离的瓦楞纸板及附着无增强纸胶带组件，以原丢弃产生gate为交换起点，按适用接收规格保留有依据的后续处理。按calc_packaging_carrier以经校准去皮称重的原事件组件产生净kg计量，包含留存量，含实际胶黏剂；纸板和胶带组成质量仅供原物料平衡及处理适配，不再进入独立废物卡。仅纳入本运营方配送新增的已声明材料；其他实际载体规格须另审并补具体卡。

- 选定流：附着无增强纸胶带的瓦楞纸板组件废物
- 流属性/单位：质量 / kg
- 数量规则：M_attached_assembly_kg / D
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_pack`
- 来源：

### 过程： 备货及派单支持 (`support`)

#### 输入

##### 产品流

###### 交流电 (`staging_ac`)

本交换完整适用下列数量规则，包括其中的范围与排除条件。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：cp_site 已分配非充电备货／派单 kWh 乘 3.6 后除以 D。通过实测电路对账排除车辆充电及完整终端服务电力，不得固定扣除。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_site`
- 来源：

#### 输出

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

###### 交流电 (`u_road_infrastructure_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_road_scope`、`inv_occurrence`、`inv_physical_basis`、`inv_ac_basis` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 明确已建道路区段基础设施，竣工交付完整产品 (`u_road_infrastructure_road_section_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 初建道路资本f为同一路段可归属队列道路空间时间/全部道路受益方有证据的全寿命道路空间时间；空置未用能力保留在全寿命负担，维度一致。初建道路资本不得用年度工程损坏份额。原道路终端残余用完全相同f。 按第8节 `inv_road_scope`、`inv_asset_cohorts`、`inv_construction_gate` 执行。

- 选定流: 明确已建道路区段基础设施，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 明确更换用沥青混合料，制造门产品 (`u_road_infrastructure_replacement_asphalt`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 实际同年工程维护实物量按既定有证据的全部道路使用方工程损坏份额分配，再除最终参考流分母一次。这些年度路面更换拆除量不得使用初建资本道路空间时间f。须明确实际供应产品牌号及实测拆除质量，不猜密度配方。 按第8节 `inv_road_scope`、`inv_occurrence` 执行。

- 选定流: 明确更换用沥青混合料，制造门产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

#### 输出

##### 废物流

###### 寿终残余明确已建道路区段基础设施 (`u_road_infrastructure_road_section_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_road_infrastructure_road_section_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_road_scope`、`inv_terminal_cohorts` 执行。

- 选定流: 寿终残余明确已建道路区段基础设施
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`

###### 拆除沥青路面 (`u_road_infrastructure_removed_asphalt`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 实际同年工程维护实物量按既定有证据的全部道路使用方工程损坏份额分配，再除最终参考流分母一次。这些年度路面更换拆除量不得使用初建资本道路空间时间f。须明确实际供应产品牌号及实测拆除质量，不猜密度配方。 按第8节 `inv_road_scope`、`inv_occurrence` 执行。

- 选定流: 拆除沥青路面
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_road_infrastructure`


### 过程：支持接口及前景活动（配置明确的电动配送厢式车维护作业服务）(`support_van_maintenance`)

#### 输入

##### 产品流

###### 配置明确的电动配送厢式车维护作业服务 (`svc_van_maintenance`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的配置明确的电动配送厢式车维护作业服务。计量：按独立任务记录实际技师作业小时，划分同时任务并保留原期间公里/因果事故归属。按 cp_interface_van_maintenance 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_van_maintenance 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_van_maintenance。

- 选定流: 配置明确的电动配送厢式车维护作业服务
- 流属性/单位: 时间 / h
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_van_maintenance`

###### 交流电 (`u_van_maintenance_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_ac_basis`、`inv_maintenance_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 供应本过程的自来水 (`u_van_maintenance_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_maintenance_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 明确维修车间建筑，竣工交付完整产品 (`u_van_maintenance_workshop_building_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_maintenance_scope`、`inv_occupancy_driver` 执行。

- 选定流: 明确维修车间建筑，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 明确车辆维修举升设备，制造门完整产品 (`u_van_maintenance_workshop_lift_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_maintenance_scope`、`inv_replacement_attribution` 执行。

- 选定流: 明确车辆维修举升设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 更换牵引电池，制造门完整产品 (`u_van_maintenance_replacement_battery`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_maintenance_scope` 执行。

- 选定流: 更换牵引电池，制造门完整产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 更换轮胎，制造门产品 (`u_van_maintenance_replacement_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_maintenance_scope` 执行。

- 选定流: 更换轮胎，制造门产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 更换制动片，制造门产品 (`u_van_maintenance_replacement_brake_pad`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_maintenance_scope` 执行。

- 选定流: 更换制动片，制造门产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 明确纯电车间润滑油产品 (`u_van_maintenance_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_maintenance_scope` 执行。

- 选定流: 明确纯电车间润滑油产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_van_maintenance_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_maintenance_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 寿终残余明确维修车间建筑 (`u_van_maintenance_workshop_building_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_van_maintenance_workshop_building_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_maintenance_scope` 执行。

- 选定流: 寿终残余明确维修车间建筑
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 寿终残余明确车辆维修举升设备 (`u_van_maintenance_workshop_lift_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_van_maintenance_workshop_lift_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_maintenance_scope` 执行。

- 选定流: 寿终残余明确车辆维修举升设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 拆除牵引电池 (`u_van_maintenance_removed_battery`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_maintenance_scope` 执行。

- 选定流: 拆除牵引电池
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 拆除轮胎 (`u_van_maintenance_removed_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_maintenance_scope` 执行。

- 选定流: 拆除轮胎
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 拆除制动片 (`u_van_maintenance_removed_brake_pad`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_maintenance_scope` 执行。

- 选定流: 拆除制动片
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`

###### 明确纯电车间废润滑油 (`u_van_maintenance_used_lubricant`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_maintenance_scope` 执行。

- 选定流: 明确纯电车间废润滑油
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_van_maintenance`


### 过程：支持接口及前景活动（配送暂存场所建筑空间占用服务，不含公用工程）(`support_staging_infrastructure`)

#### 输入

##### 产品流

###### 配送暂存场所建筑空间占用服务 (`svc_staging_infrastructure`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的配送暂存场所建筑空间占用服务，不含公用工程。计量：按原全受益方面积时间分配的实际占用平方米乘占用小时。按 cp_interface_staging_infrastructure 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_staging_infrastructure 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_staging_infrastructure。

- 选定流: 配送暂存场所建筑空间占用服务
- 流属性/单位: 面积时间 / m2*h
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 m2*h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_staging_infrastructure`

###### 明确暂存建筑壳体及固定设施，竣工交付完整产品 (`u_staging_infrastructure_staging_building_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。独立实物暂存建筑及固定设施生命周期，排除已有单独归属的全部运行电、地板清洁、充电器及调度终端资源。 实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver` 执行。

- 选定流: 明确暂存建筑壳体及固定设施，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_staging_infrastructure`

#### 输出

##### 废物流

###### 寿终残余明确暂存建筑壳体及固定设施 (`u_staging_infrastructure_staging_building_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。独立实物暂存建筑及固定设施生命周期，排除已有单独归属的全部运行电、地板清洁、充电器及调度终端资源。 实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_staging_infrastructure_staging_building_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts` 执行。

- 选定流: 寿终残余明确暂存建筑壳体及固定设施
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_staging_infrastructure`


### 过程：支持接口及前景活动（指定暂存场所一次完成的地面清洁通过服务）(`support_floor_cleaning`)

#### 输入

##### 产品流

###### 指定暂存场所一次完成的地面清洁通过服务 (`svc_floor_cleaning`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的指定暂存场所一次完成的地面清洁通过服务。计量：按实际完成事件累计清洁地面平方米；实际重复清洁是独立事件，不是新增建筑面积；保留原共享地面归属。按 cp_interface_floor_cleaning 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_floor_cleaning 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_floor_cleaning。

- 选定流: 指定暂存场所一次完成的地面清洁通过服务
- 流属性/单位: 面积 / m2
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 m2；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_floor_cleaning`

###### 供应本过程的自来水 (`u_floor_cleaning_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_cleaning_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_floor_cleaning`

###### 交流电 (`u_floor_cleaning_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_ac_basis`、`inv_cleaning_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_floor_cleaning`

###### 明确清洗设备，制造门完整产品 (`u_floor_cleaning_cleaning_machine_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_cleaning_scope` 执行。

- 选定流: 明确清洗设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_floor_cleaning`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_floor_cleaning_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_cleaning_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_floor_cleaning`

###### 寿终残余明确清洗设备 (`u_floor_cleaning_cleaning_machine_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_floor_cleaning_cleaning_machine_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_cleaning_scope` 执行。

- 选定流: 寿终残余明确清洗设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_floor_cleaning`


### 过程：支持接口及前景活动（终端接口处配置明确的配送调度信息服务）(`support_dispatch_terminal`)

#### 输入

##### 产品流

###### 终端接口处配置明确的配送调度信息服务 (`svc_dispatch_terminal`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的终端接口处配置明确的配送调度信息服务。计量：按原会话/全用户规则归属的配置终端实际活跃会话小时；供应方范围排除运营方自有终端硬件及独立计量现场电力。按 cp_interface_dispatch_terminal 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_dispatch_terminal 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_dispatch_terminal。

- 选定流: 终端接口处配置明确的配送调度信息服务
- 流属性/单位: 时间 / h
- 数量规则： sum(A_s,e * alpha_s,e) / D；原生服务单位 h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_dispatch_terminal`

###### 交流电 (`u_dispatch_terminal_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_ac_basis`、`inv_dispatch_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 供应本过程的自来水 (`u_dispatch_terminal_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_dispatch_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 明确配送调度终端，制造门完整产品 (`u_dispatch_terminal_terminal_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_dispatch_scope`、`inv_it_driver` 执行。

- 选定流: 明确配送调度终端，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 明确调度后端服务器，制造门完整产品 (`u_dispatch_terminal_server_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_dispatch_scope`、`inv_it_driver` 执行。

- 选定流: 明确调度后端服务器，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 明确调度网络交换机，制造门完整产品 (`u_dispatch_terminal_network_switch_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_dispatch_scope`、`inv_it_driver` 执行。

- 选定流: 明确调度网络交换机，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 明确调度IT设施，竣工交付完整产品 (`u_dispatch_terminal_it_premises_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver`、`inv_dispatch_scope` 执行。

- 选定流: 明确调度IT设施，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 明确调度IT冷却设备，制造门完整产品 (`u_dispatch_terminal_cooling_plant_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_dispatch_scope`、`inv_it_driver` 执行。

- 选定流: 明确调度IT冷却设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / D；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_dispatch_terminal_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_dispatch_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 寿终残余明确配送调度终端 (`u_dispatch_terminal_terminal_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_dispatch_terminal_terminal_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_dispatch_scope` 执行。

- 选定流: 寿终残余明确配送调度终端
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 寿终残余明确调度后端服务器 (`u_dispatch_terminal_server_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_dispatch_terminal_server_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_dispatch_scope` 执行。

- 选定流: 寿终残余明确调度后端服务器
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 寿终残余明确调度网络交换机 (`u_dispatch_terminal_network_switch_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_dispatch_terminal_network_switch_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_dispatch_scope` 执行。

- 选定流: 寿终残余明确调度网络交换机
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 寿终残余明确调度IT设施 (`u_dispatch_terminal_it_premises_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_dispatch_terminal_it_premises_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_dispatch_scope` 执行。

- 选定流: 寿终残余明确调度IT设施
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`

###### 寿终残余明确调度IT冷却设备 (`u_dispatch_terminal_cooling_plant_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_dispatch_terminal_cooling_plant_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_dispatch_scope` 执行。

- 选定流: 寿终残余明确调度IT冷却设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / D；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_dispatch_terminal`



## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | 全部共享活动 | 先直接归属实测的包件专属材料、事件及设备时间。用带时间戳的牵引／辅助能耗遥测将车辆记录分为运动池和静止／停靠池；不得把未分池的能源按无解释的件数分配。两池必须与交流电表对账，包含充电损失和电池期初／期末荷电状态。无法支持分池时完整性不成立；不得假定怠速占比。 |  |
| `allocation_motion` | 运动电力、车辆及磨耗 | 对载货段 s，按 w_cs = 该段 cohort c 包件含包装质量之和 / 该段全部包件含包装质量之和 分配运动负担。采用实际含包装 kg，包含所有客户及失败包件；不使用计费重或订单数。空返／调位段归属引起该段的行程，再按该行程总包件质量距离分配，包括失败尝试；没有可归属载货活动的行程是未解决记录，不得置零。每个完整负担池的份额必须合计为一。 | `ghg-scope3-transport-2013` |
| `allocation_stops` | 静止电力与共享支持 | 直接归属可对应包件的停靠／等候活动；同一停靠点服务多个包件时，将该点实测静止负担在该点尝试交付的物理包件间等分，包含所有客户和失败尝试。公共派单／备货／清洁／终端活动按所有处理包件的实测处理分钟分配；储存面积时间按包件实际占地面积乘备货小时分配。上述分配份额不得使用仅成功件数的分母。汇总后只将 cohort 已分配总量除以 D 一次。 |  |
| `allocation_no_credit` | 返库与废物 | 本服务没有共产品。拒收、损坏、遗失及返库包件不是负产出，也不是额外参考服务。在已受理 cohort 内，失败尝试及最终失败的负担仍保留在成功配送的分子中。另行报告其发生率及总负担；不得转给其他 cohort 或声称不同成功率的服务等价。回收按实际接收处理建模，不计替代抵扣。 |  |
| allocation_refrigerant_recovery | R1234yf产品或废物的对外移交 | 供应方回收物实际符合产品验收且对外交接时，kg作为独立产品输出，无替代信用，不改变配送参考件数。采用明确切断点：服务承担为车辆维保、合规回收和安全交付所必需的作业至出界交接；接收方承担交接后运送、再生、升级及使用。为制得可销售产品而额外实施的分离、提纯、专用包装等作业及其投入由该产品承担、先作实物细分，不分给配送；若实际共用负担无法细分且不能证实此边界，则阻断完成，须先审核独立的多功能分配方法。废物分支沿实际兼容去向计入服务处理；同一批次/交接ID不得兼记产品与废物。内部回用只是转移。 |  |
| allocation_charge_sources | 充电及电池储能库存 | 仅适用于经验证来源总入账I_k>0；实际运行但零入账事件执行allocation_charge_zero。每块实物电池的交流等效能量库存固定采用按时间排序的加权平均来源核算。按原充电会话/来源k保留S_bk，每次经验证的储能增加仅记入其来源一次。每次提取e前，从各来源移除e*S_bk/sum_k(S_bk)，再按规定路线/队列份额归属该次提取。电池转移保留来源向量，等量转出转入，不产生新电力。期初库存须有来源证据；来源不明保持阻断缺口。剩余来源份额跨期结转，并逐来源对账：供应=已归属提取/损失+输出库存+期末库存。充电会话资本/服务小时按该来源实际或有证据预测的寿命期提取/损失中归属各受益者的量，除以其支持的全部提取/损失分配；期末未耗用的资本/服务份额随来源库存保留，更新估计并在耗尽时对账。预测须有证据、不确定性和情景披露，不得临时改用先进先出或全队列里程。废弃或实物损失的储能是服务损失，按该资产相同区间全使用者活动份额归属，不作为转出抵扣；正负担而零受益者保持未解决。交流等效曲线与来源台账不得重复加计损失。 |  |
| allocation_charge_zero | 实际运行充电小时及直接零入账用电 | 按经验证的新增储能来源总入账I_k对每次实测实际运行充电事件分类，不用净SOC变化：正入账后发生提取/损失仍属I_k>0。表计/BMS证据缺失或未解决不等于I_k=0。I_k>0采用allocation_charge_sources。经验证I_k=0时不建立虚假能量来源：调度/预约证据指向单一因果订单/队列时，将设备小时及实测失败尝试用电直接归该责任对象；失败/取消单保留负担而不增加合格产出。仅能确定因果车辆/任务集合时，在该有记录因果集合内，按归属实际服务历时分配，包含失败尝试及充电等候，采用既定互斥路线/时间池并覆盖全部客户。确属共享故障且无法分离因果任务时，固定采用设备/站点当地日历日共享失败池；跨午夜先拆区间，再按当天全部有证据受益业务的服务历时分配，包含失败尝试/等候及研究外业务。固定时区及受益证据，不得任意扩大窗口或用里程/收入替代。共享时长仅拆分一次，不得每单复制。正负担缺受益证据或历时分母为零时保持不完整。直接、因果集合及共享日归属互斥，选研究范围前份额和为一。这些零入账小时仍保留在相同完整寿命实际运行小时分母内，不得再经来源向量分配。实测交流输入未进入储能的部分，按相同份额作为直接事件损失/运行负担仅计一次，并从任何剩余路线能耗池剔除。有证据的正总充入而电池净变化为零，不是零入账失败。 本规则不将未运行的等待变为设备实际运行资本小时。独立于总储能入账核验运行状态日志；I_k=0时实际运行的电损失仍可为正。 I_k仅为本次充电事件的总新增储能；带电电池转入保留原来源向量及资本结转，不构成新充电来源或另一笔会话小时。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | 支持过程的实物清单 | 逐供应方、场站、配置、事件及核算区间，先将每项实测实物总量划入互斥清单责任，再选研究队列。使用该支持过程固定的活动驱动，分母包含全部使用者及失败作业。直接因果归属优先于共享分配。数量已归属时不得再次乘队列份额。服务层分配量仅作原始驱动，不作交换量，也不再次除最终参考流件数。表计/库存、安装/替换资产、内部转移、产生废物及去向须在同一物理/时间边界闭合。完整产品gate可保留其制造背景，但不得换名重引入一张汇总服务卡。 |  |
| allocation_atomic_capital | 制造；安装；寿终资产 | 逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 |  |
| allocation_capital_restatement | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 本PCR采用全历史重算，不冻结历史份额，也不把余额集中补入退役当期。全部直接和支持资本、可重复使用容器、产品gate外安装及配对终态来源均执行calc_capital_restatement。各具体活动规则确定驱动和受益份额，仅应用一次。已含交付/寿终的完整资产背景采用相同重算，不另加重复终态交换。例行部件维修仍按其因果/期间方法处理。 |  |
| allocation_atomic_waste | 运行和维护产生的废物 | 运行及维护产生废物的原产生事件、供应方/活动队列、份额及原参考流分母须随暂存和转移保留。共享废物区间固定为声明时区的当地日历月，采用同区间因果活动及全部使用者；既有更具体维修年或柜台期间方法优先适用。在一致材料/水分基准核对：期末=期初+产生+内部转入-内部转出-外运-有证据物理损失。留存废物仍须有实际证据或明确有证据相容前瞻路线及不确定性的最终暂存/运输/处理，去向未知保持不完整。后来回执替换原事件模型，不新增外运期负担。资产寿终废物改用配对资本份额。废物载体及内含组分、储存损失/释放及残余处理不得重复；同一实测场站/暂存作业只归一个清单责任方。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_provider_maintenance_period | u_road_infrastructure_replacement_asphalt; u_road_infrastructure_removed_asphalt; u_van_maintenance_replacement_battery; u_van_maintenance_replacement_tyre; u_van_maintenance_replacement_brake_pad; u_van_maintenance_removed_battery; u_van_maintenance_removed_tyre; u_van_maintenance_removed_brake_pad; u_van_maintenance_lubricant; u_van_maintenance_used_lubricant | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_outcomes | delivery | 保管与合格产出 | 扫描及签收记录 | parcel_id;order_id;task_id;parent_split_id;accepted_at;attempt_id;attempt_at;gate;final_state;final_at;return_receipt;incident_id;gross_kg;dimensions_m;promised_window;zone;physical_condition;recipient_acceptance_evidence;on_time_flag;failure_reason; 遗失未回收时新增包装材料及净领用来源ID | 在零售保管接收点以及每次装车、尝试、返库及收件交接点扫描。受理时用校准秤测含包装质量；量尺寸但不得以尺寸换质量。保留不可变事件直至每个已受理物理包件恰有一个终态：accepted_delivery、refused_returned、damaged_settled 或 lost_settled；重送是尝试，不是终态；pending 须显式记录并阻止结案。先拒收后交付者以 accepted_delivery 结案。一订单可有多个 parcel_id，一预约任务可有多次尝试；二者都不是参考计数。保留拆合件谱系，同一物理单位不得重复计数。受理前拒绝的包件不进入 cohort。 终态优先顺序固定：收件人在约定 gate 验收物理完好包件为 D；否则正式结案遗失为 L；否则已结案损坏为 X，即使已经返库；否则有零售商返收凭证的完好拒收／无法投递件为 R。晚到但完好验收者仍为 D，另行披露晚到子集和实际时效，不声称准时合规。同一物理包件的多个运单标签是别名，不新增产出。受理后的物理拆件／合件在明确修订参考基准前使当前配置不适用；追踪标签不得制造两个参考单位。 归一化及对账：每参考流；结案时 A = D + R + X + L 且 pending = 0；D 为 accepted_delivery 的唯一物理件数；D > 0；服务数量 D/D = 1 Item(s) 确认遗失结案且未回收时将同包件实际新增包装转入calc_packaging未回收去向台账；不把此状态变为已收集废物。 包装去向按该材料的实际保管及交接证据判定，与包件终态代码独立。损坏结案X中仍随包件实际退回零售商的包装，进入随件返还分支；仅实测已拆除/收集量进入废物分支。同一原事件及材料不得兼计。 | Item(s);kg;m;时间戳 | 每个物理事件及包件 | 声明的连续 12 个月受理窗口所形成 cohort，追踪至全部结案 | 共享本地零售站点及车辆的所有客户 | 每参考流 | 扫描谱系；收件证据；零售返库／处置文件；秤校准；事故及保管对账 |
| cp_interface_road_infrastructure | support_road_infrastructure | svc_road_infrastructure | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集指定路段和车型的实际车辆公里，含空驶和失败公里；服务包含道路建设、维护和寿终责任，保留原固定负担及损伤分配方法。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | vehicle*km | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_van_maintenance | support_van_maintenance | svc_van_maintenance | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按独立任务记录实际技师作业小时，划分同时任务并保留原期间公里/因果事故归属。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_staging_infrastructure | support_staging_infrastructure | svc_staging_infrastructure | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按原全受益方面积时间分配的实际占用平方米乘占用小时。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | m2*h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_floor_cleaning | support_floor_cleaning | svc_floor_cleaning | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按实际完成事件累计清洁地面平方米；实际重复清洁是独立事件，不是新增建筑面积；保留原共享地面归属。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | m2 | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_dispatch_terminal | support_dispatch_terminal | svc_dispatch_terminal | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按原会话/全用户规则归属的配置终端实际活跃会话小时；供应方范围排除运营方自有终端硬件及独立计量现场电力。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_capital_restatement | delivery; support_road_infrastructure; support_van_maintenance; support_staging_infrastructure; support_floor_cleaning; support_dispatch_terminal | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | versioned_asset_cohort_ledger | 资产/来源ID；来源阶段及本征单位；原队列/分层与因果父队列；原参考分母及修订；按原期间记录的全用户实际驱动；固定受益份额；完整寿命驱动预测/版本及证据；制造/安装量；终态净残余/路线及版本；此前已记归属原始量B及归一结果；重算f/A/q与有正负号更正；零使用投运责任；重叠排除 | 逐序列/来源对照资产登记、活动表计、供方产品gate与原始结果台账；每次变化执行calc_capital_restatement。用原计量驱动及全用户证据复算，不改实物库存。按来源和原队列核对旧值、新值、差额及原分母；由原记录责任人保存版本与校准证据。 | 来源本征单位；原驱动单位；Item(s) | 每次采购/投运、活动、寿命或来源修订及退役；逐原报告期对账 | 完整资产寿命与全部受影响原队列 | 同资产配置全部用户；原产品gate及独立安装/终态 | 每参考流 | 序列/来源登记、表计校准、寿命证据、接收记录、原队列结果及修订链 |
| cp_energy | delivery | 充电与运动／停靠池 | 电表及车辆遥测 | charger_id;van_id;session_id;AC_kWh;start_SOC;end_SOC;usable_capacity_kWh;traction_kWh;stationary_kWh;charge_loss_kWh;segment_id;start_end;route_km;parcel_ids;gross_kg;stop_id;attempt_ids;idle_minutes;empty_cause;AC_equivalent_opening_stored_kWh;AC_equivalent_closing_stored_kWh;capacity_test_configuration;capacity_test_temperature;capacity_test_age;paired_AC_storage_curve;meter_clock_calibration；电池ID；转移ID；转移时间；起讫责任方；交流等效储能转入kWh；交流等效储能转出kWh；原充电会话 来源向量S_bk；按时序充电/提取/转移事件；逐来源期初末kWh；实际/预测受益提取量及不确定性；资本小时结转台账; 事件/会话ID及占用开始/释放时间；站点时区和日历日；经验证来源总入账I_k及表计/BMS证据；正/零/未知分类；失败/取消原因；因果订单/队列或车辆/任务集合ID；全使用者归属服务历时，含失败尝试/等候；共享日受益证据；直接事件交流kWh；互斥分支/份额台账；电力/来源/资本重叠交叉表；实际运行状态起止及实际运行并集H_k | 每次充电读取专用交流输入电表；包含公共充电发票，且对应会话不得再记在站点电表。按运动／停靠段记录牵引和辅助能耗，结合实测可用电池容量及诊断核对荷电状态。充电损失先按实测运动／静止能源比例分池，再使用运动及停靠分配份额。区分空返、调位及失败交付。cohort 结案范围须包含其消耗的完整能源，不仅是受理窗口内采购；用对账后的荷电状态归属前后充电会话。kWh 转 MJ 只乘精确的 3.6 一次。纯电动车不存在油箱到车轮尾气 CO2 卡，但上游电力负担仍必须纳入。 opening_stored_energy_kWh 与 closing_stored_energy_kWh 表示实测交流等效储能，须由入口交流电／储能配对试验及与实际电池配置、温度和老化相匹配的可用容量曲线确定。不得用 SOC 百分比乘名义容量，也不得假定效率。交流等效曲线与充电损失台账必须有唯一对账归属，不得既经换算又以额外负担池重复计损失；曲线不匹配会阻止完整性声明。须校准电表并同步全部事件／遥测时钟。 归一化及对账：每参考流；q_motion = sum(MJ_s*w_cs)/D；q_stop = sum(MJ_stop*u_cs)/D；已分配充电损失恰计一次 逐项追踪带电电池装入、拆出及跨车/责任方转移的ID、时间、方向及校准交流等效kWh。按calc_energy使用+储能转入-储能转出；责任方变化不重新产生原用电投入。 全部电池转入转出及来源到队列归属须遵守allocation_charge_sources；在同一储能边界计量转移方向，不对废弃储能给转出抵扣。 本协议前述牵引/运动/停站分配仅作用于按第8节电力规则扣除独立实测E_zero后的E_route；E_zero按其事件份额仅计一次。 保留每次实际占用尝试，包含失败/取消及经验证零入账事件。分开测量总入账、净库存变化及并行提取，证据缺失保持未知。正I_k才采用allocation_charge_sources，经验证零I_k采用allocation_charge_zero。关联因果调度/预约及全使用者服务时间记录；固定当地时区，共享事件跨午夜拆分。将分支小时与设备/充电位占用对账，直接事件用电在同一表计台账仅计一次，不虚构库存来源或重复路线能源。 充电设备资本仅使用实测实际运行并集H_k，未运行占位/等待不是新增资本小时。 | kWh;MJ;km;kg;min | 每次充电、路段及停靠 | 服务该 cohort 的所有行程，包括受理窗口后的结案活动 | 所有车辆／充电点及共享行程的全部客户 | 每参考流 | 交流电表校准；荷电状态／能源平衡；遥测时间戳；发票；全客户装载清单；负担池份额对账 |
| cp_site | support | 备货电力与完整场地服务 | 分表及面积时间服务台账 | site_id;meter_id;noncharging_kWh;period;occupied_m2;staging_h;handling_min;all_client_handling_min;infrastructure_m2h;cleaned_m2;service_id;terminal_h;provider_inventory;included_processes;excluded_processes;lifetime_all_beneficiary_occupied_m2h;vacant_h;network_backend_inventory;all_terminal_active_h;unused_capacity_allocation | 先按 foreground_interface_coverage 确定责任。接口活动、供应方接口/质量及兼容证据仍须采集；以下供应方内部实物/资本/物种字段仅对前景责任组成采集。外部组成使用对应 cp_interface_ 协议及兼容背景证据，不重复展开供应方内部。每天读取非充电的备货／派单用电分表，保留电路图；仅扣除另有计量的充电会话及实测终端用电，不假定百分比。逐事件观察包件处理及占地备货时间，关联房间布置、服务发票及终端会话记录。设施服务单位为提供 1 m2 常温备货地面 1 h，完整上游清单包括建造、固定设施及拆除；强度分母为有证据的全寿命、全部受益者实际占用 m2*h 之和。空置不是未归属受益者，空置资本负担通过更高单位强度由实际占用小时承载。记录寿命估计、退役、全受益者占用小时、空置区间及不确定性；零受益者资产不得置零负担。设施排除运营电力、清洁、充电设备及信息终端。清洁服务单位为实际清洁 1 m2 地面，包含指定水、每种洗剂、设备、能源及完整废水／残渣处理，不重复记材料卡。完整派单信息服务单位为 1 个活跃终端小时，包含终端、通信／网络及后端的资本、维修、能源、运营及寿命终止；网络及后端闲置／未用容量开销须在匹配区间全部受服务用户的实际终端活跃小时之间分配。包件承担实测专属会话时间加按处理分钟份额分配的公共时间。终端电力位于备货分表外，或以设备实测单独扣除。供应方完整清单及分母是必须证据；网络／后端范围不完整时不得作为完整信息服务。必须有证据证明现场无燃烧／热力及冷媒设备；指定完整清洁之外实际出现的额外水／材料须原子化修订后才能完整。 归一化及对账：每参考流；直接归属量加公共总量乘实测处理时间份额；设施按包件占地面积小时份额分配；每项已分配总量只除以 D 一次 | kWh;m2*h;m2;h;min | 每日电表及每次处理／服务事件 | 同一 cohort 及其结案支持；年度服务清单匹配实际使用期间 | 仅零售新增配送备货范围，包含共享的所有客户 | 每参考流 | 分表校准；设备实测；平面图；时间日志；服务说明及供应方清单对账 |
| cp_assets | delivery | 车辆／充电设备资本及维修 | 资产登记及车间工单 | asset_id;van_model;charger_model;original_parts;initial_refrigerant_kg;life_km;life_h;actual_km;active_h;replacement_ids;work_order_id;maintenance_h;parts_mass;waste_receiver;provider_inventory;service_scope;maintenance_period_start;maintenance_period_end;cohort_km_in_period;all_user_km_in_period;cohort_allocated_operating_h_in_period;all_user_operating_h_in_period ；设备/端口/会话ID；主动起止；并发主动端口数；来源支持活动；整机寿命主动并集h; 事件/会话ID及占用开始/释放时间；站点时区和日历日；经验证来源总入账I_k及表计/BMS证据；正/零/未知分类；失败/取消原因；因果订单/队列或车辆/任务集合ID；全使用者归属服务历时，含失败尝试/等候；共享日受益证据；直接事件交流kWh；互斥分支/份额台账；电力/来源/资本重叠交叉表；实际运行状态起止及实际运行并集H_k | 先按 foreground_interface_coverage 确定责任。接口活动、供应方接口/质量及兼容证据仍须采集；以下供应方内部实物/资本/物种字段仅对前景责任组成采集。外部组成使用对应 cp_interface_ 协议及兼容背景证据，不重复展开供应方内部。投运及每次维修时读取资产物料清单、里程／小时表及车间记录。一个整车单位包括原装电池、轮胎、初始 R1234yf 充注、制造和最终处理，不含使用及替换清单。资本份额等于已归属车辆公里除以有证据的完整服务寿命公里；充电设备单位份额按已归属活跃充电小时除以有证据的服务寿命活跃小时计算。寿命取自车队存活／退役及制造商数据并报告不确定性；不得使用默认寿命、质量或强度。维修服务单位为该车型 1 技师小时，包括实际替换部件／轮胎／电池、车间公用工程及拆出部件处理，排除单独计入的冷媒、使用能源及运营直接磨耗／泄漏。每次物理维修只计一次，年度维修小时先按资产实际车队公里分配，再归属 cohort 公里。供应方清单必须列明部件、能源、废物接收者及范围，以防遗漏／重复。 每项资产记录必须按实际维修核算区间 y 划分；仅用同一 y 内里程计算并汇总 maintenance_h_y * cohort_attributed_km_y / all_user_km_y，分母包含资产全部客户／使用者。跨年 cohort 使用各年分段里程，不得在每年重复使用全 cohort 里程。整车资本中的原装充注是已装冷媒；充电设备资本另列。有效寿命公里／小时证据必须覆盖日历退役及利用不足，不得只用技术最大里程。 完整充电设备单位包含自身全寿命替换部件、维修能源及拆出部件处理，恰计一次；这些不属于整车维修服务或使用交流电。车间维修能源须与备货／充电电表边界分开；若供应服务已含，则以实测扣除。 归一化及对账：每参考流；q_van=sum(cohort_attributed_km/life_km)/D；q_charger=sum(cohort_active_h/life_h)/D；q_maintenance=sum_y(maintenance_h_y*cohort_attributed_km_y/all_user_km_y)/D 充电器cohort_active_h以整台设备主动小时区间并集为基准，在并发主动端口间仅分配一次，再按calc_capital规定的正来源或已验证零入账份额归属。全部受益者与同一设备寿命主动小时分母闭合，不逐端口重复设备时钟。  对整台设备每个主动区间，先在同一有证据配置内的实际主动端口间等分小时，再按规定分支归属队列；端口归属小时之和与整机并集小时对账。不同端口等级须分别分层并作容量敏感性。 保留每次实际占用尝试，包含失败/取消及经验证零入账事件。分开测量总入账、净库存变化及并行提取，证据缺失保持未知。正I_k才采用allocation_charge_sources，经验证零I_k采用allocation_charge_zero。关联因果调度/预约及全使用者服务时间记录；固定当地时区，共享事件跨午夜拆分。将分支小时与设备/充电位占用对账，直接事件用电在同一表计台账仅计一次，不虚构库存来源或重复路线能源。 充电设备资本仅使用实测实际运行并集H_k，未运行占位/等待不是新增资本小时。 | Item(s);km;h;kg | 投运、每次维修及退役；每行程／会话读表 | 资产寿命及匹配年度维修期，加 cohort 结案 | 特定纯电厢式车及充电设备配置，包含所有实际使用者 | 每参考流 | 制造商配置；资产日志；寿命假设；工单；全部使用者分母；部件／废物边界矩阵 |
| cp_pack | staging | 新增包装与残余废物 | 库存及逐件发放台账 | material_id;composition;opening_unused_kg;purchased_kg;external_unused_transfer_in_kg;closing_unused_kg;external_unused_transfer_out_kg;external_unused_supplier_return_kg;issued_to_parcel_kg;internal_unused_return_kg;parcel_id;successful_delivery_kg;retailer_returned_with_parcel_kg;removed_waste_kg;store_scrap_kg;treatment_route;receiver;weighbridge_ticket;tape_length_m;measured_tape_kg_per_m;assembly_gross_kg; 随遗失/未回收包件离开控制的新增包装kg；原包件及材料ID；结案证据；后续找回与原事件修订; 实际载体/组件事件ID；附着/已分离状态及分离时间地点/操作者证据；接收gate及单一接收规格；组件毛重/皮重/净重和校准；纸板/胶带组成台账与一致含水基准；实际分离投入及输出链接；原事件存量/内转/外运/损失；处理范围重叠表  原始丢弃产生时间、产生gate实物状态和G_j；直接/门店损耗原份额s_j及原D；后续接收/分离与同一原事件链接； | 先按 foreground_interface_coverage 确定责任。接口活动、供应方接口/质量及兼容证据仍须采集；以下供应方内部实物/资本/物种字段仅对前景责任组成采集。外部组成使用对应 cp_interface_ 协议及兼容背景证据，不重复展开供应方内部。每次发放用校准秤分别称量配送新增瓦楞纸板及无增强筋纸胶带；按供应商文件确认组成并排除客户原包装。库存责任边界为本运营方备货库。closing_unused 包含全部内部未用退库；内部退库减少包件净发放量，但绝不能在库存等式中再次扣除。仅越过本责任边界的未用转出／退货计外部出流。每种材料：store_consumed = opening_unused + purchased + external_unused_transfer_in - closing_unused - external_unused_transfer_out - external_unused_supplier_return。将其与 sum(全客户包件净发放) + 实测库内报废 核对。库内实测报废按匹配库存区间中该材料各包件 cohort 的净发放质量在全客户间分配；未知损失保持未决，不得假定为报废。每项实际拆除废物在场内称量并记录已识别接收处理。胶带包含胶黏剂。仍附着纸板时，以cardboard_tape_assembly_waste登记实测组件净量一次；组分质量仅入物料账，不产生两个独立废物交换。条件未使用的零值证据仍须库存及发放记录。 对附着胶带，测量实际长度及该批次经称量的含胶黏剂胶带 kg/m；tape_kg=length_m*measured_kg_per_m，board_kg=measured_assembly_kg-tape_kg。保留批次身份、样品称量及胶带施加／拆除谱系；不得假定材料份额。 归一化及对账：每参考流；每项消耗／废物总量只除以D一次。 闭合队列新增物料已消耗kg=成功交付kg+随包件实际退回零售商kg+实测移除/收集废物kg+确认未回收且随包件离开控制的kg（去向未证）；仍待结或无法对账的使用库存另列，不能填零。四项按材料与原包件/报废事件互斥，已收集废物含已分配库存报废。遗失后未回收的包装保留原队列物料消耗与单列去向缺口，不进入处理/释放交换；后续找回与有据处置须重分类原事件及原分母，不追加后期第二次消耗或废物。 包装去向按该材料的实际保管及交接证据判定，与包件终态代码独立。损坏结案X中仍随包件实际退回零售商的包装，进入随件返还分支；仅实测已拆除/收集量进入废物分支。同一原事件及材料不得兼计。 按calc_packaging_carrier在附着组件、实际独立纸板和实际独立胶带三分支间逐事件互斥登记，核对原始物料份额与实际接收规格。任何现场真实分离的能源材料、损失及去向须记录并在既有场所/支持清单中唯一归属；未发生分离不得虚构分离过程。  以原产生gate实测量为三卡起点，包括留存量；实际接收量核对残余和后续处理，不代替产生量。按calc_packaging_carrier连接实际后续分离，不把同一组件及其组分同时记作本阶段输出。 | kg | 每次发放、退回及废物转移；每月库存对账；每次遗失结案及后续找回 | cohort 发放／结案事件及匹配库存期 | 仅配送新增材料及已识别接收处理 | 每参考流 | 校准；供应商组成；发放／退回日志；废物票据；库存及保管平衡 |
| cp_emissions | delivery | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air; tyre_air; tyre_soil; brake_air; brake_soil; road_air; road_soil; dust_resuspension_air | 化学品平衡及分源排放测量／模型 | van_id;R1234yf_opening_kg;topup_kg;recovered_kg;closing_kg;transfer_kg;leak_kg;source;size_fraction;medium;wear_mass_kg;captured_kg;air_fraction;soil_fraction;road_km;measurement_method;factor_version;conditions;uncertainty;accounting_interval;reused_topup_kg;cohort_allocated_operating_h;all_user_operating_h; 化学品/车辆/储罐ID；互斥移动ID及两端；装机与回收仓分别期初末kg；外购交接kg与装机量；回用；装机/储罐内外转入转出；回收入仓；对外产品或废物交接kg、接收方与状态；分介质逸散；终态残量；归属期间与全用户驱动; 交接时刻与门槛、净批量与皮重、批次组成检验/不确定性、化学品kg、采购新/再生或本方委托返还、货权与责任/接收方、原去回移动ID、批次期初末/领用/已归属份额/退回、上游生产或再生及运输范围、校准编号; 判废证据/时点；原产生事件/批次；I/F/S状态标记及位置；实测产生毛重/皮重/净量/组成及单位；原场所/资产及时区/区间；原因果任务或全用户分配字段/份额；原N及结果版本；留存标记库存；移动ID/两端；实际外运/接收方；暂存损失/介质；前瞻处理版本及残余基准；原模型替换/排重证据 | 仅支持车辆驾驶舱 R1234yf，不含货厢制冷。每次保养用校准维修秤称量新料与再生库存领用、回用补充及回收冷媒；装机及回收库存分别执行calc_refrigerant的唯一移动ID分支。初始充注属于车辆资本，不再次采购；维修服务排除单独补充冷媒及直接泄漏。轮胎、制动器及路面磨耗分别用配置特定试验／已验证模型，确定实际磨出／释放源质量及互斥空气／道路邻近土壤份额；区分新磨耗与原有道路尘再悬浮。废轮胎、刹车片及移除路面残留材料不是新磨耗排放；仅实际磨出／释放质量进入颗粒去向平衡。保留源、车辆／道路／制动条件、粒径、介质、捕集份额及不确定性，不设通用因子或固定分流。空气卡记源总颗粒一次，不得叠加内含 PM10／PM2.5；沉降再悬浮须用源库存台账避免与原磨耗重复。每辆车逐当地日历月y，经批次首次归属的新料/再生供给和实测排放质量均按 cohort_allocated_operating_h_y / all_user_operating_h_y 分配；cohort 分子为运动小时乘 w_cs 加静止／停靠小时乘 u_cs，包含全部客户及失败尝试。区间泄漏也包含非工作／停放泄漏，由该区间实际使用者承载；有正泄漏而没有使用者的区间保持资产支持分配未决。新增补充、回收内部转移与回用补充必须分开；跨期回收库存流出／流入须相配，回用不计新材料生产。回收冷媒处理按实际对外产品/废物状态和明确责任门槛记录，拆出零件及捕集磨耗处理仅归维保或清洁。介质不明或逃逸／磨耗未定会阻止完整性声明，不得置零。 归一化及对账：每参考流；q_particle_source_medium=sum(source_released_kg*f_medium*w_cs)/D；回用不属新材料输入；再悬浮源库存转移只计一次。按calc_refrigerant计算并以同一移动ID验证装机/回收仓、外部接收与空气去向。回收后内部留存不作对外流；产品或废物处理只在对应责任边界计一次。 按calc_refrigerant逐收料、充注、回用、回收、对外交接、退回或逸散事件在物料或工作发生地点记录经校准量；月结并对账对应资产归属期间的批次及保管库存，核对所有接收、来源状态和责任。实际有无分支须有台账，未知不作零。 采购实物在交接登记一次，供应负担按同批首次领用并实际安装或有证不可逆服务损失归属；未充装可用库存与未归属负担结转。 已判废冷媒的原产生量、份额及原分母执行cp_refrigerant_waste_origin和calc_refrigerant_waste_origin；实际外运量只关闭同一来源的保管记录，不覆盖原责任。 | kg;km | 每次冷媒事件；每行程／配置的磨耗及尘；冷媒逐移动、月结及归属期间对账 | 匹配资产运行期间及 cohort 完整行程 | 每辆车及经过道路配置，全部实际路线客户 | 每参考流 | 化学品身份及维修凭证；秤校准；分源模型／试验适用性；质量／介质平衡；捕集／处置证据；不确定性台账；收发/保管及货权凭证、批次检验、储罐与维修秤校准、上游范围排重表 |
| cp_refrigerant_waste_origin | delivery | r1234yf_recovered_waste | origin_tagged_refrigerant_waste_ledger | 判废证据/时点；原产生事件/批次；I/F/S状态标记及位置；实测产生毛重/皮重/净量/组成及单位；原场所/资产及时区/区间；原因果任务或全用户分配字段/份额；原N及结果版本；留存标记库存；移动ID/两端；实际外运/接收方；暂存损失/介质；前瞻处理版本及残余基准；原模型替换/排重证据 | 在有证判废点用校准称量及批次组成记录计量；与既有I/F/S逐笔配对、在物理仓内标记，不再另建可加总库存。按calc_refrigerant_waste_origin固定原队列及分母；每次状态、转移、外运、损失和接收证据变化时核对原状态库存、完整处理模型和原结果修订。 | kg; fraction; Item(s) | 每次判废/转移/损失/外运；每当地月对账 | 原产生区间至完整后续处理证据 | 原场所/资产全部受益者及物理接收链 | 每参考流 | 判废批准和退出可用库存证据、校准、批次分析、原份额/分母、处理与替换链 |
| cp_transport_capital | delivery | activity_road_infrastructure | 物理资本服务登记 | 路段及道路等级；车型；全使用者交通量及寿命分配；实际自营装载空驶车公里；供应方建设更新养护寿终清单；显式直接磨耗剔除 | 先按 foreground_interface_coverage 确定责任。接口活动、供应方接口/质量及兼容证据仍须采集；以下供应方内部实物/资本/物种字段仅对前景责任组成采集。外部组成使用对应 cp_interface_ 协议及兼容背景证据，不重复展开供应方内部。用GPS里程表逐段追溯自营路线及实际道路车型。取得道路生命周期原始清单和各车型完整寿命交通量；先细分专属设施，变动路面更新养护按有工程证据的各车型损坏需求分配，固定容量安全土建按有记录的各车型道路空间*时间需求分配。全部道路使用者份额须闭合；交通、工程分配或清单缺失阻断完整性，不默认不同车型等效。核验基础设施背景已剔除显式直接磨耗释放。应用calc_transport_capital，不以价格换算活动。 | vehicle*km | 逐路段；期间对账；年度资本供应方复核 | 完整队列含空驶失败退回尾期及有证据的基础设施寿命 | 全部自营路线；外购运输保留其自身已含道路资本 | 每参考流 | GPS里程表校准；道路等级交通工程清单及分配证据；无重复复核 |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_road_infrastructure | support_road_infrastructure | u_road_infrastructure_electricity; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_road_infrastructure_replacement_asphalt; u_road_infrastructure_removed_asphalt | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。自营厢式货车区段实际道路类别基础设施支持；保留既定工程损坏及固定道路空间时间分配，排除直接道路磨耗。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。原距离车辆活动仅用于分配；匹配路段类别期间及全部道路使用方寿命交通量，固定和可变池各一次；68031最终分母N，68039为D。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 | 各卡原生单位；原始vehicle*km | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_van_maintenance | support_van_maintenance | u_van_maintenance_electricity; u_van_maintenance_water; u_van_maintenance_wastewater; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_lift_terminal; u_van_maintenance_replacement_battery; u_van_maintenance_replacement_tyre; u_van_maintenance_replacement_brake_pad; u_van_maintenance_removed_battery; u_van_maintenance_removed_tyre; u_van_maintenance_removed_brake_pad; u_van_maintenance_lubricant; u_van_maintenance_used_lubricant | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移; 实际冷媒交接ID、状态、接收及原车辆寿终/维保排重 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立实际纯电厢式货车车间维修执行，含逐项明确更换物、车间公用工程资本及拆除残余。排除原整车及充电器资本；新R1234yf投入及空气泄漏保留既有独立卡。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。实际匹配车辆任务及同时技师时间仅作分配。常规维护用匹配期间队列/全部使用方资产km，事故直接因果归属；不得每维护年重复整队列km，再除D一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 冷媒供应、泄漏及对外产品/废物数量只由cp_emissions与calc_refrigerant记账；此协议验证实际维修处理是否已包括同一去向，不得并计。 | 各卡原生单位；原始technician h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_staging_infrastructure | support_staging_infrastructure | u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立实物暂存建筑及固定设施生命周期，排除已有单独归属的全部运行电、地板清洁、充电器及调度终端资源。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。实测占用m2*h仅用以对有证据的全部受益方全寿命占用m2*h确定f；使用占用承担空置负担。将f作用于实际建筑量及终端残余，再除D一次。不得以m2*h作为制造门面积。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始m2*h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_floor_cleaning | support_floor_cleaning | u_floor_cleaning_water; u_floor_cleaning_electricity; u_floor_cleaning_wastewater; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立实际暂存地板清洁执行：水、每种明确清洗产品、清洁设备运行资本、废水及残余处理。 实际每事件清洁面积用于分配匹配实物总量，不设固定水化学配方；原始分配总量除D一次。固定唯一电表归属：可直接追溯清洁电先从同范围staging_ac剩余量扣出，本过程仅加一次；没有可辩护拆分量时，整实测AC池仍在staging_ac，本处明确排除相同AC并保留分配证据，不加估计重复量。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始m2 actually cleaned | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_dispatch_terminal | support_dispatch_terminal | u_dispatch_terminal_electricity; u_dispatch_terminal_water; u_dispatch_terminal_wastewater; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_cooling_plant_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立完整信息执行，实物覆盖实际终端、通信网络及后端：制造设备产品采用制造门，建成设施采用竣工交付；运行、部件维护及同cohort终端残余独立。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。活跃终端小时仅作分配：先直接会话及处理时间，上游闲置未用能力按全部受益活跃小时分配一次。实物总量不是终端小时。既有staging_ac排除实测终端用电，保留同一分界，上游分配前扣相同直接场地电，再除D一次。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始actual active terminal h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_outcomes` | delivery_accepted | A = D + R + X + L 且 pending = 0；D = count(终态 accepted_delivery 的唯一 parcel_id)；产出 = D/D = 1 Item(s)。R、X、L 分别为互斥的拒收返库、损坏结案、遗失结案包件。失败后验收的尝试仅归入 D。要求 D > 0。 | cp_outcomes;final_states;parcel_id | D 及单位服务产出 |  |
| foreground_interface_method | svc_road_infrastructure; svc_van_maintenance; svc_staging_infrastructure; svc_floor_cleaning; svc_dispatch_terminal | 计量前按 boundary_atomic_support 将每个事件/范围组成划为互不重叠的前景实物或外部服务。现有实物卡公式、组成规则及 cp_support 协议仅适用于前者，不得为启用服务接口而要求外部供应方BOM或内部表计账本。对服务行s采集固定原生单位的原始 A_s,e，并按原具名活动分配确定 alpha_s,e：直接属于队列的事件取1；确需共享的事件保留原全用户驱动、失败/空驶/待机处理及事件窗口。已归属服务量 T_s=sum(A_s,e*alpha_s,e)；原生活动账本已含队列归属时，不得再次乘份额。q_s=T_s/N_ref，N_ref为原队列正参考产出。零产出时保留原始总量并将单位结果标为未完成。时间、面积、计数和运输活动量不得无证据换成能量或设备质量。服务清单已包含资本分配时不得再乘实物资产寿命份额。背景连接仅以q_s乘每一相同服务单位的清单一次；排放因子不是服务交换数量。原实物专用指令及服务禁用措辞仅适用于前景实物分支；服务分支执行本规则及其明确接口协议。 未完成或中止的服务事件仍保留有证据的归属负担。不得因接口以完整单位计数就将其丢弃：须以合同及执行记录证明等效原生服务量，或在声明完整前增设身份明确的部分服务行；不得假定一整单位或零。 已按最终参考流表示的供应方数值不是原始A_s,e：重新计算前须恢复原总量和分母，或证明归一结果完全等价且不再除最终分母。供应方已包含的分配仅应用一次。 | cp_interface_road_infrastructure; cp_interface_van_maintenance; cp_interface_staging_infrastructure; cp_interface_floor_cleaning; cp_interface_dispatch_terminal | 每原参考流的原生服务单位 |  |
| calc_interface_road_infrastructure | svc_road_infrastructure | 执行 foreground_interface_method。原生活动 A_s,e（vehicle*km）：指定路段和车型的实际车辆公里，含空驶和失败公里；服务包含道路建设、维护和寿终责任，保留原固定负担及损伤分配方法。仅将原 activity_road_infrastructure 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_road_infrastructure; activity_road_infrastructure | vehicle*km/D |  |
| calc_interface_van_maintenance | svc_van_maintenance | 执行 foreground_interface_method。原生活动 A_s,e（h）：按独立任务记录实际技师作业小时，划分同时任务并保留原期间公里/因果事故归属。仅将原 activity_van_maintenance 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_van_maintenance; activity_van_maintenance | h/D |  |
| calc_interface_staging_infrastructure | svc_staging_infrastructure | 执行 foreground_interface_method。原生活动 A_s,e（m2*h）：按原全受益方面积时间分配的实际占用平方米乘占用小时。仅将原 activity_staging_infrastructure 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_staging_infrastructure; activity_staging_infrastructure | m2*h/D |  |
| calc_interface_floor_cleaning | svc_floor_cleaning | 执行 foreground_interface_method。原生活动 A_s,e（m2）：按实际完成事件累计清洁地面平方米；实际重复清洁是独立事件，不是新增建筑面积；保留原共享地面归属。仅将原 activity_floor_cleaning 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_floor_cleaning; activity_floor_cleaning | m2/D |  |
| calc_interface_dispatch_terminal | svc_dispatch_terminal | 执行 foreground_interface_method。原生活动 A_s,e（h）：按原会话/全用户规则归属的配置终端实际活跃会话小时；供应方范围排除运营方自有终端硬件及独立计量现场电力。仅将原 activity_dispatch_terminal 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/D，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_dispatch_terminal; activity_dispatch_terminal | h/D |  |
| `calc_energy` | van_motion_ac;van_stop_ac | 表计加库存能量E_total=实测输入交流+期初交流等效储能kWh+可追溯储能转入-期末交流等效储能kWh-可追溯储能转出。所有项覆盖相同物理边界及完整区间；按采集协议验证匹配配置/温度/老化的实测交流等效曲线，转移保留来源向量，充电损失仅含一次。未知库存/换算保持不完整，不计零。任何路线分配前，先从E_total分离实测零入账直接事件交流电E_zero：E_route=E_total-E_zero。未解释负余量阻断完成。E_route按既定互斥路线/运动/停站池归属；E_zero仅按allocation_charge_zero归属，覆盖全使用者，不虚构储能来源。场站/非充电电力仅保留于其独立场站/支持卡。将归属剩余路线及直接零事件用电相加，随后乘3.6并仅除一次原队列分母。不得再上调充电损失或叠加已含相同电力的上游服务。 对既有两卡，直接零事件用电仅进入van_stop_ac；van_motion_ac只接收其剩余运动池。 | cp_energy;cp_outcomes;w_cs;u_cs | 每个独立负担池的每参考流 MJ | `ghg-scope3-transport-2013` |
| `calc_capital` | van_capital;charger_capital;activity_van_maintenance | q_van=sum(cohort_attributed_km/life_km)/D Item(s)；q_charger=sum(cohort_active_h/life_h)/D Item(s)；q_maintenance=sum_y(maintenance_h_y*cohort_attributed_km_y/all_user_km_y)/D h。每个 y 是同一资产的匹配维修区间；跨年 cohort 里程恰分段一次。包含所有使用者、空驶及失败行程。寿命证据覆盖日历退役／利用不足及不确定性。 charger_active_h先按cp_assets将设备实际运行并集时间在同时实际运行端口间拆分。随后归属实际运行h=sum_positive(H_k*a_c,k)+sum_verified_zero(H_k*z_c,k)：a_c,k采用allocation_charge_sources，z_c,k采用allocation_charge_zero。正来源未耗用份额随库存结转，已验证零入账实际运行小时仍含于相同寿命实际运行分母。I_k=0不除以能量，不将未运行等待计入实际运行h。 仅明确具名activity_*项为原始支持活动诊断，不是产品交换；保留的实物产品/废物项维持原数量、单位及交换作用。仅对已删除服务项应用独立实物拆分规则。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_assets;cp_energy;cp_outcomes | 分别为每参考流 Item(s)、Item(s)、h | `eea-electric-vehicles` |
| `calc_site` | staging_ac;activity_staging_infrastructure;activity_floor_cleaning;activity_dispatch_terminal | q_siteAC=3.6*已分配非充电非终端_kWh/D MJ；q_infrastructure=已分配_m2h/D；q_cleaning=已分配实际清洁_m2/D；q_terminal=已分配活跃_h/D。公共支持使用实测处理时间份额，设施使用全部包件的占地面积小时份额。供应方已按物理服务单位归一化的活动量应乘已分配服务量，不得再次除以 D。 仅明确具名activity_*项为原始支持活动诊断，不是产品交换；保留的实物产品/废物项维持原数量、单位及交换作用。仅对已删除服务项应用独立实物拆分规则。 | cp_site;cp_outcomes | 分别为每参考流 MJ、m2*h、m2、h |  |
| `calc_packaging` | cardboard_added;paper_tape_added;cardboard_waste;paper_tape_waste;cardboard_tape_assembly_waste | 每库存区间 store_consumed = opening_unused + purchased + external_unused_transfer_in - closing_unused - external_unused_transfer_out - external_unused_supplier_return = sum(全客户包件净发放) + 实测库内报废。内部未用退回已含 closing_unused，绝不再次扣除。实测报废按全部客户该材料净发放质量分配。附着胶带与纸板的组分kg仅用于原物料账；同一实际未分离组件的交换只按calc_packaging_carrier记一次完整载体。物料耗用及各去向的组分账采用一致有证的湿干/组成基准，含水或其他实证状态变化另列换算；不得把组件接收湿重直接当作原包装干物料耗用。 闭合队列新增物料已消耗kg=成功交付kg+随包件实际退回零售商kg+实测移除/收集废物kg+确认未回收且随包件离开控制的kg（去向未证）；仍待结或无法对账的使用库存另列，不能填零。四项按材料与原包件/报废事件互斥，已收集废物含已分配库存报废。遗失后未回收的包装保留原队列物料消耗与单列去向缺口，不进入处理/释放交换；后续找回与有据处置须重分类原事件及原分母，不追加后期第二次消耗或废物。 仅实测已移除/收集废物进入q_waste=removed_waste_kg/D；包含未回收量的实际耗用为q_material=consumed_kg/D，各一次；有未证去向时披露不完整，不得宣称废物后续链闭合。 包装去向按该材料的实际保管及交接证据判定，与包件终态代码独立。损坏结案X中仍随包件实际退回零售商的包装，进入随件返还分支；仅实测已拆除/收集量进入废物分支。同一原事件及材料不得兼计。 上述removed_waste_kg对实物交换使用calc_packaging_carrier的对应独立载体量；其分材料组分账不得作为另一次输出。 | cp_pack;cp_outcomes | 每种材料及废物独立的每参考流 kg |  |
| calc_packaging_carrier | cardboard_waste; paper_tape_waste; cardboard_tape_assembly_waste | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_packaging_carrier_carrier_branches; calc_packaging_carrier_beneficiary_attribution; calc_packaging_carrier_generation_and_custody; calc_packaging_carrier_separation_boundary。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_pack; cp_site; calc_packaging; calc_packaging_carrier_carrier_branches; calc_packaging_carrier_beneficiary_attribution; calc_packaging_carrier_generation_and_custody; calc_packaging_carrier_separation_boundary | 三个互斥真实载体kg/D；独立组分控制账 |  |
| `calc_refrigerant` | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_refrigerant_identity; calc_refrigerant_stocks; calc_refrigerant_initial_scope; calc_refrigerant_custody; calc_refrigerant_supply_origin; calc_refrigerant_allocation; calc_refrigerant_outputs; calc_refrigerant_shared_store; calc_refrigerant_waste_priority。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin; calc_refrigerant_identity; calc_refrigerant_stocks; calc_refrigerant_initial_scope; calc_refrigerant_custody; calc_refrigerant_supply_origin; calc_refrigerant_allocation; calc_refrigerant_outputs; calc_refrigerant_shared_store; calc_refrigerant_waste_priority | 外购新料、外购再生、具名回收产品/废物及空气释放分别按原D计kg | `ghg-scope3-transport-2013` |
| calc_refrigerant_waste_origin | r1234yf_recovered_waste | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_refrigerant_waste_origin_generation; calc_refrigerant_waste_origin_quantities; calc_refrigerant_waste_origin_state_ledger; calc_refrigerant_waste_origin_fate_updates。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_emissions; cp_refrigerant_waste_origin; calc_refrigerant_waste_origin_generation; calc_refrigerant_waste_origin_quantities; calc_refrigerant_waste_origin_state_ledger; calc_refrigerant_waste_origin_fate_updates | 原产生事件质量/原D；实物外运独立 |  |
| `calc_particles` | tyre_air;tyre_soil;brake_air;brake_soil;road_air;road_soil;dust_resuspension_air | 每种新磨耗源 released_kg=air_kg+soil_kg+captured_wear_kg+other_documented_fate_kg；仅实际磨出／释放的源质量合格，不得用废轮胎／刹车片／路面块内剩余质量。互斥去向份额仅对该释放源质量合计为一。q_source_medium=sum(released_kg*f_medium*w_cs)/D；模型已分介质时不得再次乘 f_medium。捕集磨耗仅在维修／清洁中处理。实际其他介质须加原子卡。原有库存向空气再悬浮须对账并去除与已计生成磨耗的重叠。 | cp_emissions;cp_energy;cp_outcomes;source_medium_balance | 每参考流分源、分介质 kg | `eea-electric-vehicles` |
| calc_transport_capital | activity_road_infrastructure | 道路活动=sum(实际自营路段车公里*该段队列份额)/D，含空驶及失败路段；采用规定运动及空驶行程份额，不把包裹t*km替代车公里。各道路车型按cp_transport_capital匹配一次基础设施强度。核验从车辆、建筑及外购运输边界剔除的精确组件/模块；相容证据缺失阻断完整性。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_transport_capital; 路线及队列台账 | 原始活动诊断：每参考流vehicle*km |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_road_infrastructure | u_road_infrastructure_electricity; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_road_infrastructure_replacement_asphalt; u_road_infrastructure_removed_asphalt | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。原距离车辆活动仅用于分配；匹配路段类别期间及全部道路使用方寿命交通量，固定和可变池各一次；68031最终分母N，68039为D。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_road_infrastructure | 原始vehicle*km及唯一归属实物总量，不是服务产品 |  |
| activity_van_maintenance | u_van_maintenance_electricity; u_van_maintenance_water; u_van_maintenance_wastewater; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_lift_terminal; u_van_maintenance_replacement_battery; u_van_maintenance_replacement_tyre; u_van_maintenance_replacement_brake_pad; u_van_maintenance_removed_battery; u_van_maintenance_removed_tyre; u_van_maintenance_removed_brake_pad; u_van_maintenance_lubricant; u_van_maintenance_used_lubricant | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。实际匹配车辆任务及同时技师时间仅作分配。常规维护用匹配期间队列/全部使用方资产km，事故直接因果归属；不得每维护年重复整队列km，再除D一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_van_maintenance | 原始technician h及唯一归属实物总量，不是服务产品 |  |
| activity_staging_infrastructure | u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。实测占用m2*h仅用以对有证据的全部受益方全寿命占用m2*h确定f；使用占用承担空置负担。将f作用于实际建筑量及终端残余，再除D一次。不得以m2*h作为制造门面积。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_staging_infrastructure | 原始m2*h及唯一归属实物总量，不是服务产品 |  |
| activity_floor_cleaning | u_floor_cleaning_water; u_floor_cleaning_electricity; u_floor_cleaning_wastewater; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。实际每事件清洁面积用于分配匹配实物总量，不设固定水化学配方；原始分配总量除D一次。固定唯一电表归属：可直接追溯清洁电先从同范围staging_ac剩余量扣出，本过程仅加一次；没有可辩护拆分量时，整实测AC池仍在staging_ac，本处明确排除相同AC并保留分配证据，不加估计重复量。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_floor_cleaning | 原始m2 actually cleaned及唯一归属实物总量，不是服务产品 |  |
| activity_dispatch_terminal | u_dispatch_terminal_electricity; u_dispatch_terminal_water; u_dispatch_terminal_wastewater; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_cooling_plant_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。活跃终端小时仅作分配：先直接会话及处理时间，上游闲置未用能力按全部受益活跃小时分配一次。实物总量不是终端小时。既有staging_ac排除实测终端用电，保留同一分界，上游分配前扣相同直接场地电，再除D一次。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_dispatch_terminal | 原始actual active terminal h及唯一归属实物总量，不是服务产品 |  |
| calc_atomic_physical | u_road_infrastructure_electricity; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_road_infrastructure_replacement_asphalt; u_road_infrastructure_removed_asphalt; u_van_maintenance_electricity; u_van_maintenance_water; u_van_maintenance_wastewater; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_lift_terminal; u_van_maintenance_replacement_battery; u_van_maintenance_replacement_tyre; u_van_maintenance_replacement_brake_pad; u_van_maintenance_removed_battery; u_van_maintenance_removed_tyre; u_van_maintenance_removed_brake_pad; u_van_maintenance_lubricant; u_van_maintenance_used_lubricant; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_water; u_floor_cleaning_electricity; u_floor_cleaning_wastewater; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_electricity; u_dispatch_terminal_water; u_dispatch_terminal_wastewater; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_cooling_plant_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。对供应方相容区间j的运行实物流x，由计量、库存平衡、工单或相容的单物种/单材料单位清单取得本卡物理单位Q_x,j。若来源按活动单位提供强度，先算Q_x,j=强度_x,j*实际全使用者活动_j；不得用金额、通用服务排放篮子或未还原原分母的每参考流数值。再按固定过程驱动及全使用者份额，q_x=sum_j(Q_x,j*s_c,x,j)/N_ref，仅归一一次。卡用MJ时，电力kWh仅乘一次3.6；其他计数/质量/体积换算须有适用的实测配置单重、密度、浓度及水分。覆盖相同数量/期间/范围的共享表计或上游产品/服务须按实测重叠交叉表剔除，不能假定比例。 | cp_support_road_infrastructure; cp_support_van_maintenance; cp_support_staging_infrastructure; cp_support_floor_cleaning; cp_support_dispatch_terminal | 每原参考流的卡原生物理单位 |  |
| calc_atomic_capital | u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_cooling_plant_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 | cp_support_road_infrastructure; cp_support_van_maintenance; cp_support_staging_infrastructure; cp_support_floor_cleaning; cp_support_dispatch_terminal | 制造产品及配对终态残余，相同寿命份额 |  |
| calc_capital_restatement | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | 按各来源本征单位/原队列N_c；实物监管账独立 |  |
| capital_road_infrastructure_road_section_manufacture | u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_road_infrastructure_road_section_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/D。初建道路资本f为同一路段可归属队列道路空间时间/全部道路受益方有证据的全寿命道路空间时间；空置未用能力保留在全寿命负担，维度一致。初建道路资本不得用年度工程损坏份额。原道路终端残余用完全相同f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_road_infrastructure_road_section_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_road_infrastructure | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_van_maintenance_workshop_building_manufacture | u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_building_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_van_maintenance_workshop_building_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/D。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_van_maintenance_workshop_building_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_van_maintenance | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_van_maintenance_workshop_lift_manufacture | u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_lift_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_van_maintenance_workshop_lift_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_van_maintenance_workshop_lift_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_van_maintenance | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_staging_infrastructure_staging_building_manufacture | u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_staging_infrastructure_staging_building_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/D。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_staging_infrastructure_staging_building_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_staging_infrastructure | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_floor_cleaning_cleaning_machine_manufacture | u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_floor_cleaning_cleaning_machine_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_floor_cleaning_cleaning_machine_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_floor_cleaning | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_dispatch_terminal_terminal_manufacture | u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_terminal_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_dispatch_terminal_terminal_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_dispatch_terminal_terminal_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_dispatch_terminal | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_dispatch_terminal_server_manufacture | u_dispatch_terminal_server_manufacture; u_dispatch_terminal_server_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_dispatch_terminal_server_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_dispatch_terminal_server_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_dispatch_terminal | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_dispatch_terminal_network_switch_manufacture | u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_network_switch_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_dispatch_terminal_network_switch_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_dispatch_terminal_network_switch_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_dispatch_terminal | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_dispatch_terminal_it_premises_manufacture | u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_it_premises_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_dispatch_terminal_it_premises_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/D。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_dispatch_terminal_it_premises_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_dispatch_terminal | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| capital_dispatch_terminal_cooling_plant_manufacture | u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_cooling_plant_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_dispatch_terminal_cooling_plant_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/D。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_dispatch_terminal_cooling_plant_terminal：原生kg，q=sum(R_a*f_c,a)/D；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_dispatch_terminal | 每D的资产原生物理单位；终态自身原生单位，同f |  |
| calc_atomic_species | 所有基本实物流清单行 | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。每张基本流卡对应一种物质或物理明确的颗粒载体，以及一个接收介质/子介质。采集实际物种/CAS或已验证化学身份、因子单位及质量/摩尔/碳表达、来源技术/燃料/负载、地点和接收介质。单物种实测排放或相容因子仅用一次。完整产品gate已含的工厂排放不得再列为供应方直接运行排放。颗粒粒径及去向份额互斥；物理颗粒不是虚构纯元素。NOx及NMVOC总量仅作QA观测，不替代基本交换。任何实际额外物种/材料必须在建模完成前拥有具体双语源卡、协议、单位、固定计算及正常投影，不使用选择器或族名占位卡。 | cp_support_road_infrastructure; cp_support_van_maintenance; cp_support_staging_infrastructure; cp_support_floor_cleaning; cp_support_dispatch_terminal | 逐接收介质的单物质或明确实物载体 |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_maintenance_period | u_road_infrastructure_replacement_asphalt; u_road_infrastructure_removed_asphalt; u_van_maintenance_replacement_battery; u_van_maintenance_replacement_tyre; u_van_maintenance_replacement_brake_pad; u_van_maintenance_removed_battery; u_van_maintenance_removed_tyre; u_van_maintenance_removed_brake_pad; u_van_maintenance_lubricant; u_van_maintenance_used_lubricant | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 | cp_support_road_infrastructure; cp_support_van_maintenance | 每原参考流原生物理单位 |  |
| calc_packaging_carrier_carrier_branches | cardboard_waste; paper_tape_waste; cardboard_tape_assembly_waste | 本条属于 calc_packaging_carrier。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐原包装丢弃事件，以首次废物产生gate的实际状态定义载体及G_j净kg，而非以外运或接收日期定义产生量。A支为仍附着无增强纸胶带的瓦楞纸板组件，仅用cardboard_tape_assembly_waste；B/C支仅用于在该产生gate已经独立的纸板/纸胶带，分别用cardboard_waste/paper_tape_waste。同一实物事件互斥，组分kg仅用于calc_packaging物料账。 | cp_pack; cp_site; calc_packaging | 方法组成部分；清单结果归原入口 |  |
| calc_packaging_carrier_beneficiary_attribution | cardboard_waste; paper_tape_waste; cardboard_tape_assembly_waste | 本条属于 calc_packaging_carrier。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。优先按有据原包件/任务直接归属。若同一共享门店报废组件无法直接归属，按calc_packaging对各组成材料m确定同存量期间全用户净领用质量份额s_c,m；用实测/批次支持且同湿干基准的组件各组成质量g_j,m定义s_j=sum_m(g_j,m*s_c,m)/sum_m(g_j,m)。组成必须完整覆盖组件（胶黏剂计入胶带），不得任择纸板或胶带份额；各用户份额合计为1。该权重仅分配原组件产生量和处理负担，不制造组分实物交换，原实物G_j仍在总账守恒。未知组成、无正适用分母且无有据直接归属时保持不完整。独立纸板/胶带沿用本材料既定份额。 | cp_pack; cp_site; calc_packaging | 方法组成部分；清单结果归原入口 |  |
| calc_packaging_carrier_generation_and_custody | cardboard_waste; paper_tape_waste; cardboard_tape_assembly_waste | 本条属于 calc_packaging_carrier。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。M_carrier=sum_j(G_j*s_j)；q=M_carrier/原D一次，包含尚留存的产生量。以同一湿干/组成基准核对期末=期初+产生+内转入-内转出-外运-实证物理损失，未知损失不造平衡项，内转不造新产生量。原事件废物链接覆盖有证储存运输和实际/前瞻最终处理，实际接收gate称重只核对扣除实证损失/状态变化后的残余；晚到接收证据替换原模型，不在外运期重计。留存载体不能置零。纸板/胶带质量及含水必须有实测或批次依据；胶带长度乘实测kg/m只证明相容状态组分，不能证明发生分离。 | cp_pack; cp_site; calc_packaging | 方法组成部分；清单结果归原入口 |  |
| calc_packaging_carrier_separation_boundary | cardboard_waste; paper_tape_waste; cardboard_tape_assembly_waste | 本条属于 calc_packaging_carrier。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。若在原产生gate前真实拆包装形成独立载体，记录现场事件、能源材料及实证损失，在既有场所清单唯一计入；若在已产生组件之后分离，则属于该原组件链接内的后续处理，原事件组件输出不再另加同一阶段的组件组分输出。显式下游分离过程须连到原组件作为内部输入，并替代该链接相同处理范围，不得将其残余当作新的本阶段产生量。未知组成/状态/接收适配或未能建立该连接时保持不完整。客户原包装、其他复合载体或不同接收规格须另按真实对象审核。 | cp_pack; cp_site; calc_packaging | 方法组成部分；清单结果归原入口 |  |
| calc_refrigerant_identity | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 本条属于 calc_refrigerant。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐移动ID和批次记录货权、保管、处理责任、实物交接门槛与两端。所有平衡项为具名化学品kg。以校准秤取得净批量B=毛重-皮重；用批次匹配的供应/接收检验或校准分析证明化学品质量份额x，以B*x计算。已独立计得的化学品kg直接用一次。只有证据支持与本卡物料规格相符，才按该具名交换计量；不预设100%或默认纯度。实际跨界物为其他规格混合产品或含油/水等混合废物时，单列真实载体的毛湿净批量及接收状态，冷媒组分kg只入守恒，禁止再作为同一载体的独立出界流；真实载体无卡时须补具名双语卡、协议及直接官方身份核验。组成、实际对象或责任未知时阻断完成。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 | ghg-scope3-transport-2013 |
| calc_refrigerant_stocks | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 本条属于 calc_refrigerant。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。装机账L_inst=I_open+X_install+U+I_other_in-I_close-R-I_other_out；R是同ID装机出/仓入，U是仓出/装机入，X_install仅指从未充注新料仓安装的kg。回收/再生仓L_store=S_open+R+S_external_in+S_internal_in-S_close-U-P_ext-W_ext-S_internal_out-S_other_out。P_ext/W_ext是该仓实际对外产品/废物交接中具名化学品组分kg，含混合载体组分供对账。装机直接对外交接只在I_other_out及同事件真实输出记一次，不经过R/P_ext/W_ext；其他转出逐项证明。未充注新料账F_open+F_purchase+F_transfer_in-F_close-X_install-F_transfer_out-F_return=F_other_out；F_other_out逐项证实含实际损失及其他去向。配对内转在总边界抵消。各正残差须以证据定位介质和事件，仅已证空气释放进空气行，必要时含已证未充仓空气逸散；未知、负残差、未证介质或无法对账阻断完成。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 | ghg-scope3-transport-2013 |
| calc_refrigerant_initial_scope | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 本条属于 calc_refrigerant。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。原装充注属整车；维保、外部处理和寿终路径按同一移动ID及责任只计一次。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 | ghg-scope3-transport-2013 |
| calc_refrigerant_custody | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 本条属于 calc_refrigerant。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。S_external_in=S_purchased+S_custody。S_purchased只纳入证实已再生并符合本设备充注验收的外部产品；由同一责任方送外处理再收回的本方冷媒进S_custody，凭原批次、发出/返回ID及保管/货权证据配对，原料生产不得再购入，实际外部再生、损失、运输和处理按边界各记一次并排重。其他受托料在与可充注库存隔离的保管账逐批对账，返还责任方且不得用U充注；若实际承担外部废物接收、再生或转用责任，须先审该处理边界及具名输入与处理链，缺证或超范围不得宣称完成。自有边界内同批移动只记配对内转。U只取有证验收、可充注且属该服务责任的实物量。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 | ghg-scope3-transport-2013 |
| calc_refrigerant_supply_origin | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 本条属于 calc_refrigerant。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。采购或以购买等价方式取得货权时，在实物交付门槛以收料ID登记一次，分别为新料F_purchase与外购已再生、已验收可充注的产品S_purchased。保留每批经核实的同状态供应方上游清单：新料生产或再生处理及相容运输各计一次，剔除已被承运/维修覆盖的重叠。用同批来源向量贯穿未充注和回收仓期初末、调拨、退供应商、装机、处置及释放；同仓同状态实物混合且无法辨认批次时，按移动前已核各来源kg比例扣减。保留毛收料用于实物对账；原供应负担随该来源首次进入本服务的实际新装或经证不可逆服务损失而归属，先记已分配标记，之后的回收、再装或处置只记实际新增作业，不再次分配采购负担。未充装且仍可用的期末存量连同未分配供应负担结转，未使用退货或纯内转不计本服务耗用；跨期分摊各批负担的合计不得超过原可归属量。直接因果、相容年度或期间全用户驱动只应用一次。按购买批次和受益事件链接，不能用收料期总量或同一已入账批次再次补记。服务核算只把与该原队列相联系的已归属供应kg写入输入卡。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 | ghg-scope3-transport-2013 |
| calc_refrigerant_allocation | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 本条属于 calc_refrigerant。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。每辆车固定当地日历月y并记录时区，跨月分段。按同资产月a_y=队列运动小时乘w_cs与停靠小时乘u_cs之和/同月全使用者实际运行小时，归属非废物库存释放、可用产品交接及该月首次使用或不可逆损失的采购份额；停放时非废物库存泄漏仍归其月。分母含所有客户及失败任务；正量而无正分母未决。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 | ghg-scope3-transport-2013 |
| calc_refrigerant_outputs | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 本条属于 calc_refrigerant。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。A_supply和A_reclaimed分别为归属的外购新料和再生料化学品kg。A_product为满足具名产品卡身份的实际产品交接kg；A_waste仅由calc_refrigerant_waste_origin按原产生事件计算，不能用当期外运量替代。混合载体使用其自身行，不进入这两张具名化学品卡；A_air只取实证空气释放。各用原D除一次。回收产品/废物责任执行allocation_refrigerant_recovery，无替代抵扣。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 | ghg-scope3-transport-2013 |
| calc_refrigerant_shared_store | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 本条属于 calc_refrigerant。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。共享仓的直接来源领用、交接、处置或释放须追至责任车辆；对无法直追车辆的共享仓实物量，先按同仓同化学品当月各受益车辆的有据化学品领用kg占比分派，再按上述各车月运行小时份额；无正领用分母则保持未决。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 | ghg-scope3-transport-2013 |
| calc_refrigerant_waste_priority | r1234yf_topup; r1234yf_reclaimed_external; r1234yf_recovered_product; r1234yf_recovered_waste; r1234yf_air | 本条属于 calc_refrigerant。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。本规则的当前资产期间份额仅用于新供应首次耗用/损失、可用产品交接与非废物库存的当期释放；已判废库存的A_waste及其处理/释放必须保留calc_refrigerant_waste_origin规定的原产生责任。本规则不覆盖该原责任。 | cp_emissions; cp_assets; cp_outcomes; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 | ghg-scope3-transport-2013 |
| calc_refrigerant_waste_origin_generation | r1234yf_recovered_waste | 本条属于 calc_refrigerant_waste_origin。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。冷媒仅在有证不可逆决定将其退出可用/可充注库存并用于丢弃、且实物身份、货权与负责服务明确时成为废物。单纯回收不使可用料成为废物，后续外运或商业退款不决定产生日期。记录产生事件j、实物批次/位置、实测毛重/皮重/净量、组成/状态、原资产/场所、产生区间、原受益份额alpha_c,j及原服务分母N_c。直接因果废物归原有证任务；其他废物使用产生时既有场所期间或资产维护年/车辆月驱动及该期间全用户分母。共享仓无法直追的部分，按产生区间既有同化学品领用质量先分资产，再用该原资产受益份额；正量缺有据正分母仍不完整。 | cp_emissions; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 |  |
| calc_refrigerant_waste_origin_quantities | r1234yf_recovered_waste | 本条属于 calc_refrigerant_waste_origin。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐具名废物行r，A_waste_c,r=sum_j(G_j,r*alpha_c,j)，q=A_waste_c,r/N_c，仅归一一次。G为符合该行物料/单位基准的实际产生量，包括已产生但留存的废物。只有匹配的具名化学品废物使用具名化学品卡；含油/水/化学品的其他混合载体另用其真实载体卡及相容整股载体质量，组分kg只用于守恒，不另加废物交换。 | cp_emissions; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 |  |
| calc_refrigerant_waste_origin_state_ledger | r1234yf_recovered_waste | 本条属于 calc_refrigerant_waste_origin。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。废物状态登记是既有I/F/S实物库存的标记视图，不是可加总的第四个实物仓。在同一位置判废仅改变状态标记，不同时扣R、W_ext或其他实物转移；原库存式中可用量与废物标记量之和只计一次。废物标记量不得进入U或其他充注。逐废物来源批次对账：期末=期初+产生+内转入-内转出-实际外运-有证实物损失，转移中保留原份额和N_c。原实物平衡中的W_ext仍只为实际外运，不等于A_waste，也不产生第二笔废物产生量。 | cp_emissions; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 |  |
| calc_refrigerant_waste_origin_fate_updates | r1234yf_recovered_waste | 本条属于 calc_refrigerant_waste_origin。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。已产生留存废物须按allocation_atomic_waste在产生gate基准覆盖有据暂存/运输/最终处理，使用相容实际证据或明确前瞻路线并披露不确定性。后续接收证据替换同一原模型并重算原队列，包括物料、残余量或去向变化，不向外运期服务再加相同质量/处理。显式暂存释放与处理残余必须替换链接处理清单的对应项而非重复；已在其他服务行的共享场所/暂存作业按范围交叉表剔除。废物标记库存的实物释放若已单列，仍保留原废物来源责任并从链接清单剔除相同释放。可用产品交接继续使用既有产品截断规则，不采用废物分支。来源、组成或处理无依据时原结果保持不完整，后来的出售本身不能将已产生废物改标成产品。 对当前废物行和原队列，A_waste是A_waste_c,r的简写；卡上的D/N就是该原队列N_c，不是外运期产出。 | cp_emissions; cp_refrigerant_waste_origin | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_driver_revision | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐资产a保存有版本的全用户活动与每个原受益队列/分层c，按既有固定责任规则保留失败和空驶工作。u_c,a为截至当时归属该队列的实际驱动；U_a为相同配置和单位的有证完整寿命全用户驱动（已发生实际量加有依据的剩余预测）。U_a必须为正且不小于已发生全用户总量。f_c,a=u_c,a/U_a，不得把剩余活动当作U_a。每次寿命、活动、受益者、来源数量或终态路线变化，都重算全部受影响原队列，包括已报告队列；不得保留旧历史份额而仅对后续队列使用新寿命分母。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_source_correction | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐独立来源s按自身单位求A_s,c,new=Q_s,new*f_c,a。Q_s,new是当前有证、寿命分配前的完整制造/安装来源实物总量，不是扣除历史份额后的未摊余额，或匹配的净终态残余/完整生命周期来源量，不是已分配量。保留此前已记的归属原始量B_s,c及其原归一结果/版本；delta_A_s,c=A_s,c,new-B_s,c。新取得证据的终态来源B=0；已有来源的更正替换同一来源ID。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_normalization | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。使用该原队列当前已核实的参考分母N_c重算q_s,c=A_s,c,new/N_c；若N_c本身被更正，应替换旧结果，不得把delta_A/new_N直接加到以old_N形成的旧结果。剔除有记录重叠后才汇总各来源贡献。正负差额仅更正结果，不能形成负实物转移、替代抵扣或新增当期整机采购。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_retirement | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。最终退役时以完整实测全用户驱动替换U_a，重算全部f和来源量；寿命总活动为正时，所有受益者含非研究业务的份额和为一。实测终态净残余不得再次扣除历史拆出量。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_zero_activity | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。零产出事件保留其既有因果父队列及原分母，不能寻找无关的正产出期间。若原父队列没有正N_c，保留归属原始总量，归一结果保持未决。全寿命活动为零时，仅可凭证归属唯一投运委托责任，并使用同一原队列规则；否则保留未分配来源并阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_shared_driver_controls | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。资产制造、安装和终态负担采用相同更新f；毛库存、实物转移和退役另作实物监管账。对日历时间资产，u为已发生服务容量时间，按既有共享/类别规则向各原类别/期间仅归属一次，包含规则要求的空置/失败责任；U覆盖相同全用户日历容量。q不得再乘一次类别份额。历史不明、寿命/去向无依据或缺原分母时阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_background_version | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。若供应背景或处理模型版本改变但实物数量未变，也必须替换全部受影响原队列的相应链接清单和结果；不能因为实物delta_A=0而保留旧模型。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `quality_identity` | 全部流卡及上游服务 | 每张卡必须对应一个流身份、方向、类型、状态、参考属性／单位及接收介质。未绑定的语义候选可保留为候选卡，但最终数据集完整须有官方直读身份及兼容上游数据集证据。电力表示使用点交流电，供应方／电压／供电技术未指明；另行采集供电地域、电压及生产组合，不得将其归给该 UUID。名称近似、搜索命中或其他 agent 意见均不充分。 | 官方载荷及绑定证据哈希；状态／属性／单位／介质比对；供应范围台账 |
| quality_charge_events | charger_capital; van_stop_ac | 逐次实际运行充电事件核验来源总入账为正、已验证为零或未解决，不能仅凭净SOC分类。核对互斥来源/直接/因果集合/共享日份额、全部受益者、小时及实测损失。失败/取消的零入账小时仍计负担，不获合格产出抵扣；未知证据不等于零。核验从剩余路线能源池剔除直接事件用电，并保留完整寿命实际运行小时分母。 | 总来源及实际运行状态证据；来源/事件份额；电力/资本对账 |
| `quality_missing` | 全部协议及条件卡 | 每个条件行必须由日志、检查及责任人证明 occurred／not_occurred。缺失是未知，绝非零。身份、接收者、介质未知，库存失衡、终态未决、能源未分池或分母缺失必须保留未解决并阻止完整性声明。低于检出限的实测值保留检出限及上界敏感性。估计须采用有理由的源特定方法、不确定区间及影响敏感性；禁止无来源默认因子、寿命、限值或示例强度。 | 签署适用清单；缺失登记；检出限；不确定性及敏感性台账 |
| `quality_coverage` | cohort 及供应方数据集 | 保留连续 12 个月受理 cohort、实际观测及结案期间、季节性、场址、全部共享客户及行程覆盖。较短试点是无年度代表性的候选观测，不是年度合规数据集。供应方期间／技术／地域须匹配实际运营；说明替代及敏感性。分子分母必须对应同一 cohort；每个归一化值由原始记录及分配计算一次，供应方已经每件化的值不得再次除以 D。 | 期间／场址登记；cohort 结案报告；全客户对账；单位及分配审计 |
| `quality_semantic_projection` | 双语正文及 guidance | 每个边界、卡、协议、计算、条件义务、排除及防重复规则都必须进入由规范 Markdown 生成的结构化字段。检查实际机器 guidance 和有序规则／卡／协议关联，不仅检查指纹。中英文的全部条件、否定、介质、gate、单位及公式必须一致。结构／名称本地化检查不代表独立科学审查或发布批准。 | 规范正文与投影语义比对及双语审查 |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | 所有已拆分的支持过程和物种 | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | 范围到实物行对账；供应/BOM/物种原件；签署缺口表 |
| quality_service_interfaces | svc_road_infrastructure; svc_van_maintenance; svc_staging_infrastructure; svc_floor_cleaning; svc_dispatch_terminal | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | cp_interface协议；签署的覆盖责任矩阵；原生单位对账；身份receipt |
| scope_interface_road_infrastructure | u_road_infrastructure_electricity; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_replacement_asphalt; u_road_infrastructure_road_section_terminal; u_road_infrastructure_removed_asphalt; svc_road_infrastructure | 对 support_road_infrastructure，svc_road_infrastructure 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_van_maintenance | u_van_maintenance_electricity; u_van_maintenance_water; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_replacement_battery; u_van_maintenance_replacement_tyre; u_van_maintenance_replacement_brake_pad; u_van_maintenance_lubricant; u_van_maintenance_wastewater; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_van_maintenance_removed_battery; u_van_maintenance_removed_tyre; u_van_maintenance_removed_brake_pad; u_van_maintenance_used_lubricant; svc_van_maintenance | 对 support_van_maintenance，svc_van_maintenance 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_staging_infrastructure | u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; svc_staging_infrastructure | 对 support_staging_infrastructure，svc_staging_infrastructure 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_floor_cleaning | u_floor_cleaning_water; u_floor_cleaning_electricity; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_wastewater; u_floor_cleaning_cleaning_machine_terminal; svc_floor_cleaning | 对 support_floor_cleaning，svc_floor_cleaning 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_dispatch_terminal | u_dispatch_terminal_electricity; u_dispatch_terminal_water; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_wastewater; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal; svc_dispatch_terminal | 对 support_dispatch_terminal，svc_dispatch_terminal 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| inv_road_scope | u_road_infrastructure_electricity; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_replacement_asphalt; u_road_infrastructure_road_section_terminal; u_road_infrastructure_removed_asphalt | 自营厢式货车区段实际道路类别基础设施支持；保留既定工程损坏及固定道路空间时间分配，排除直接道路磨耗。 | 所列各清单行既有的采集协议和证据。 |
| inv_occurrence | u_road_infrastructure_electricity; u_road_infrastructure_replacement_asphalt; u_road_infrastructure_removed_asphalt; u_van_maintenance_electricity; u_van_maintenance_water; u_van_maintenance_replacement_battery; u_van_maintenance_replacement_tyre; u_van_maintenance_replacement_brake_pad; u_van_maintenance_lubricant; u_van_maintenance_wastewater; u_van_maintenance_removed_battery; u_van_maintenance_removed_tyre; u_van_maintenance_removed_brake_pad; u_van_maintenance_used_lubricant; u_floor_cleaning_water; u_floor_cleaning_electricity; u_floor_cleaning_wastewater; u_dispatch_terminal_electricity; u_dispatch_terminal_water; u_dispatch_terminal_wastewater | 仅当匹配的实际供应商清单及实物记录证实该具体交换时启用；未发生须有肯定证据，未知不等于零。 | 所列各清单行既有的采集协议和证据。 |
| inv_physical_basis | u_road_infrastructure_electricity; u_van_maintenance_electricity; u_van_maintenance_water; u_van_maintenance_replacement_battery; u_van_maintenance_replacement_tyre; u_van_maintenance_replacement_brake_pad; u_van_maintenance_lubricant; u_van_maintenance_removed_battery; u_van_maintenance_removed_tyre; u_van_maintenance_removed_brake_pad; u_van_maintenance_used_lubricant; u_floor_cleaning_water; u_floor_cleaning_electricity; u_dispatch_terminal_electricity; u_dispatch_terminal_water | 规范编写前须确定实际牌号或型号、状态、实物单位及唯一归属；按规定活动依据分配实测实物量一次，不得以服务小时代替实物数量。 | 所列各清单行既有的采集协议和证据。 |
| inv_ac_basis | u_road_infrastructure_electricity; u_van_maintenance_electricity; u_floor_cleaning_electricity; u_dispatch_terminal_electricity | 仅适用于独立证实的使用点交流电；此通用UUID不确定供应商、电网、电压或发电技术。表计kWh仅乘一次3.6转MJ；安装/维修与运行交流电的表计/阶段责任互斥。 | 所列各清单行既有的采集协议和证据。 |
| inv_asset_cohorts | u_road_infrastructure_road_section_manufacture; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_staging_infrastructure_staging_building_manufacture; u_floor_cleaning_cleaning_machine_manufacture; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture | 仅当该实际且唯一识别的实物资产配置服务已声明服务范围时启用。每个初装资产及每个整机替换资产均须作为独立序列号或cohort，分别记录取得投用、寿命容量及退役。每个实物资产仅计一次，使用各自f；整机替换不是维护耗材。排除的仅为其他处显式核算的使用、实际部件维护及寿终模块。对每个独立识别的初装或整机替换资产cohort a，q_a=实际实物资产量_a*f_a/最终合格参考流分母，仅一次。每个cohort均有独立全寿命容量及原终端残余；汇总不同cohort，不再加一张整机更换材料卡。仅当实际更换部件与整机是不同实物且未在其他处包含时才作维护流。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 | 所列各清单行既有的采集协议和证据。 |
| inv_construction_gate | u_road_infrastructure_road_section_manufacture; u_van_maintenance_workshop_building_manufacture; u_staging_infrastructure_staging_building_manufacture; u_dispatch_terminal_it_premises_manufacture | 该建筑、道路、跑道或遮棚实物产品以竣工交付为gate；上游建筑产品及现场施工运行须纳入该gate之前，不得因制造门标签而遗漏。 | 所列各清单行既有的采集协议和证据。 |
| inv_terminal_cohorts | u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 每个独立初装或整机替换资产序列号或cohort a的终端残余kg_a，采用其原生产或竣工交付产品完全相同的该资产cohort f_a，再除最终合格参考流分母一次。对账部件维护拆除物及保留复用库存；不得按转移日期再加废物。 | 所列各清单行既有的采集协议和证据。 |
| inv_maintenance_scope | u_van_maintenance_electricity; u_van_maintenance_water; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_replacement_battery; u_van_maintenance_replacement_tyre; u_van_maintenance_replacement_brake_pad; u_van_maintenance_lubricant; u_van_maintenance_wastewater; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_van_maintenance_removed_battery; u_van_maintenance_removed_tyre; u_van_maintenance_removed_brake_pad; u_van_maintenance_used_lubricant | 独立实际纯电厢式货车车间维修执行，含逐项明确更换物、车间公用工程资本及拆除残余。排除原整车及充电器资本；新R1234yf投入及空气泄漏保留既有独立卡。 | 所列各清单行既有的采集协议和证据。 |
| inv_occupancy_driver | u_van_maintenance_workshop_building_manufacture; u_staging_infrastructure_staging_building_manufacture; u_dispatch_terminal_it_premises_manufacture | f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。 | 所列各清单行既有的采集协议和证据。 |
| inv_replacement_attribution | u_van_maintenance_workshop_lift_manufacture; u_floor_cleaning_cleaning_machine_manufacture; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_cooling_plant_manufacture | 原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。 | 所列各清单行既有的采集协议和证据。 |
| inv_cleaning_scope | u_floor_cleaning_water; u_floor_cleaning_electricity; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_wastewater; u_floor_cleaning_cleaning_machine_terminal | 独立实际暂存地板清洁执行：水、每种明确清洗产品、清洁设备运行资本、废水及残余处理。 | 所列各清单行既有的采集协议和证据。 |
| inv_dispatch_scope | u_dispatch_terminal_electricity; u_dispatch_terminal_water; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_wastewater; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 独立完整信息执行，实物覆盖实际终端、通信网络及后端：制造设备产品采用制造门，建成设施采用竣工交付；运行、部件维护及同cohort终端残余独立。 | 所列各清单行既有的采集协议和证据。 |
| inv_it_driver | u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_cooling_plant_manufacture | f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_applicability` | 范围及 gate | 核实声明的零售服务区、常温非危险非食品内容物、纯电自营及地面交接。检查明确的 CPC 排除项及不适用的外包／燃料／冷媒配置。不能用本较窄范围支持整个叶类的 exact mapping。 | `un-cpc3-68039` |
| validate_service_interfaces | svc_road_infrastructure; svc_van_maintenance; svc_staging_infrastructure; svc_floor_cleaning; svc_dispatch_terminal | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |
| `validate_balances` | 全部记录及归一化卡 | 必须有闭合终态等式、D > 0、全客户完整运动／停靠份额、荷电状态／交流电对账、每项资产寿命分母、包装平衡、冷媒平衡及颗粒源／介质平衡。一个服务参考恰为一个已验收物理包件；所有最终失败保留负担而无额外产出。禁止重复归一化或上游负担重复。 核验每项冷媒收料、批次来源、库存、首次用量归属、移动和对外交接货权/状态；核对毛重、皮重、净量与组分证据，不得重复实物载体和组分、上游处理或寿终覆盖。 |  |
| `validate_completion` | 候选与完整数据集 | 本已起草候选不代表科学批准或发布。完整数据集必须解决全部启用身份、接收者、计量、不确定性及供应范围缺口；未启用卡保留未发生证据。实际出现但未表达的流／过程必须先双语修订源文并重新生成 structured 投影，再声明完整。须执行语义投影及双语审查以及计量检查；marker 本身不能证明正确性。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | 所有支持过程和排放清单行 | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | van_capital; charger_capital; u_road_infrastructure_road_section_manufacture; u_road_infrastructure_road_section_terminal; u_van_maintenance_workshop_building_manufacture; u_van_maintenance_workshop_lift_manufacture; u_van_maintenance_workshop_building_terminal; u_van_maintenance_workshop_lift_terminal; u_staging_infrastructure_staging_building_manufacture; u_staging_infrastructure_staging_building_terminal; u_floor_cleaning_cleaning_machine_manufacture; u_floor_cleaning_cleaning_machine_terminal; u_dispatch_terminal_terminal_manufacture; u_dispatch_terminal_server_manufacture; u_dispatch_terminal_network_switch_manufacture; u_dispatch_terminal_it_premises_manufacture; u_dispatch_terminal_cooling_plant_manufacture; u_dispatch_terminal_terminal_terminal; u_dispatch_terminal_server_terminal; u_dispatch_terminal_network_switch_terminal; u_dispatch_terminal_it_premises_terminal; u_dispatch_terminal_cooling_plant_terminal | 必须核对calc_capital_restatement的原队列/原分母、全用户驱动、来源版本、已记量及重算差额；禁止冻结旧历史再只改后续分母，禁止将退役余额转给无关当期产品，禁止负实物交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset;background_dataset |
| allowed_use | 在准确披露的配送配置、gate 及发生率内进行清单编制与有条件比较 |
| excluded_use | 整个 CPC 叶类覆盖；商品制造 LCA；食品／邮政／快递／搬家／安装；未披露失败率的比较；据本候选声称获批 |
| required_metadata | 全部参考限定信息；cohort 计数及结案；配置；全部服务清单；原始数据到归一化值的关联；总来源/零/未知充电分支、实际运行状态、因果/固定日份额及电力交叉表；签署的前景/接口责任矩阵、原生服务活动及背景覆盖；仅对前景责任组成保留原实物活动、制造/终态配对及物种基准 |
| required_quality_disclosure | 身份核实状态；未解决清单／服务范围；数据缺口；全客户分配；不确定性及敏感性；未经独立审查 |
| update_trigger | 产品边界、服务 gate、车队化学品／路线、供应范围、库存平衡变化或证据失效；充电事件总来源/实际运行状态/受益证据更正；前景实物身份/物种变化或外部接口配置/单位/覆盖变化须复审适用具体卡并更新投影 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-68039 | official_guidance | UNSD CPC Version 3.0, 68039 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68039 | 仅分类纳入／排除；CPC 不规定本较窄服务方法 |
| ghg-scope3-transport-2013 | official_guidance | WRI/WBCSD, Technical Guidance for Calculating Scope 3 Emissions (2013), category 4 pp. 52–55, formula 4.4. https://ghgprotocol.org/sites/default/files/standards/Scope3_Calculation_Guidance_0.pdf | 仅物理运输分配及辅助／逃逸能源覆盖思路；企业 GHG 指南不规定本 PCR 的 cohort、强制空返、分池或多影响方法 |
| eea-electric-vehicles | official_guidance | European Environment Agency, Electric vehicles, web snapshot 2026-10-26. https://www.eea.europa.eu/en/topics/in-depth/electric-vehicles | 仅车辆／电池生产及持续道路／轮胎／制动器污染的相关性；不采用任何排放因子、介质份额、寿命或法规限值 |
