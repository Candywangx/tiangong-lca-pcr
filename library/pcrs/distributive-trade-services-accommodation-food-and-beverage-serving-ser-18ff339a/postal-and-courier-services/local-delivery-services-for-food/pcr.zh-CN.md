---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.local-delivery-services-for-food
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 电助力自行车熟制热餐本地配送

## 1. 范围与适用性

本PCR定义对已购买熟制热餐单独收费本地配送的一项有限服务方法。产品、合格判定、排除及完整性要求均列于下列规范表格。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.postal-and-courier-services.local-delivery-services-for-food |
| classification_refs | CPC 3.0 68031；narrower：单独收费、购后即时或短时预约、电助力自行车及被动保温的熟制热餐本地配送。 |
| covered_products | 一份单独收费的配送合同，将一笔已购买熟制热餐订单从一家商家送至本地一名收件人；仅适用电助力自行车配可复用发泡聚丙烯（EPP）被动保温箱。 |
| excluded_products | 食品制作、堂食、零售、平台食品销售撮合、顾客自提、长途货运、冷藏或冷冻生鲜、原料食品、独立饮品订单、燃油车辆及主动加热或制冷。即使合并开票，仍须有配送部分单独定价的证据。 |
| representative_product | 一次合格本地热餐订单配送；餐盒数量及质量为描述信息，不是额外配送产出。 |
| production_route | 调度和骑手定位；商家取餐及等待；含拼单线路的自行车运输；收件交付和结果结案；归属的返程或空驶、充电、资产、维修、清洁及废物处理。 |
| market_state | 已购买、由商家密封、即食的熟制热餐；承运途中不开封或再加热；适用的本地食品安全方案及配送承诺决定验收。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 对一笔单独收费的已购买熟制热餐订单进行本地配送。 |
| How much | 向合同收件人完整交付一笔独立且验收合格的订单；多个餐盒仍计一单。 |
| How well | 身份和保管链连续、商家封签完好、订单完整、满足承诺交付时间窗及有记录的食品安全验收；由cp_orders判定合格。 |
| How long or cycle | 一个从调度至结案的服务周期；保留关联的失败尝试、退回及归属的交付后重新定位。 |
| reference_flow_link | delivery_complete |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格本地熟制热餐订单配送 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 地域及期间; 配送单独定价合同及运营角色; 订单和包裹/餐盒数、实测食品质量/尺寸及有依据箱容/载荷能力; 熟食状态和被动保温配置; 取餐及交付gate; 卫生和时间温度验收方案; 线路和收件人类型; 车辆及保温箱配置; 拼单分配; 失败尝试和退回责任; 充电及上游边界 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| m_count | delivery_complete | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 计一笔独立合格订单，而非餐盒、餐品、尝试、公里或技工小时。执行c_n和a_events。 |
| m_units | 全部流 | 各行具体物理流属性 | 依各卡声明 | 原始总量采用声明的物理单位及c_routes，随后仅除一次N。无实测且有依据的定义时，禁止质量转订单、周期转小时或货币转活动。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 商家已有已购买且密封的热餐；服务从订单调度开始，含实际取餐前可归属的骑手行驶和商家等待。终点为完成交付或失败结案，并保留服务导致的退回、废物和重新定位。 |
| starting_condition_role | 配送服务，纳入投入的从摇篮至gate上游负担，以及服务资产和服务产生废物的责任处理。 |
| product_classification_scope | CPC 3.0 68031；narrower：单独收费、购后即时或短时预约、电助力自行车及被动保温的熟制热餐本地配送。 |
| recursive_input_rule | 执行 boundary_atomic_support：外部活动通过明确的单单位服务接口进入，不递归展开供应方内部。前景实物过程保留原卡及规则。保管货物不是制造投入。 |
| upstream_dataset_requirement | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |
| disclosure | 声明各主体所有权及纳入矩阵、实际保温方案、封签状态、配送收费证据、全部条件活动判定、资产寿命及废物终点。本类别较窄，不代表全部食品配送。 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| b_scope | 仅适用声明的热餐自行车/被动保温箱路线。商家食品及其既有食品接触包装是委托载物，不是配送新制造投入；登记数量、质量及损失，不得虚构食品生产流。配送方新增采购的纸质外提袋须另计。 | `un-cpc3-68031` |
| b_complete | 纳入调度IT、取餐等待、载货/空驶/返程/重新定位、含实测充电损失的充电、自行车和保温箱制造/维修/报废、清洁消毒、道路基础设施及非尾气磨耗。核查实际场所、充电设备及骑手装备所有权；cp_services须通过指定充电位、调度或其他实际适用服务范围计其归属制造/使用/维护/报废，或证明已纳入具体上游；额外未覆盖专用装备须在完成前按cp_assets新增各自原子行。骑手头盔及其他专用装备不默示纳入自行车制造或数字调度：须识别实际具体装备，并在完成前按cp_assets/cp_materials新增各自原子制造/寿命/维护/废物行，除非某项具名服务清单明确证明已计该装备且仅计一次。场所直接用电属于delivery_ac；充电器及专用充电棚属于activity_delivery_charge_bay；服务器/网络/终端的场所及资本属于activity_delivery_dispatch。其他实际场所须有各自明确范围服务或原子清单。未知活动不得计零。 |  |
| b_food | 记录适用法域及已签署的卫生/时间温度验收方案、培训责任及取餐/交付证据。判为qualified_full必须同时满足：订单身份与保管链连续、交付时商家封签完好、合同全部内容物完整交付合同收件人、在声明的承诺时间窗内交付，以及通过该有记录食品安全方案的检查。任何一项不满足时均为rejected_or_incomplete，不是合格产出，即使收件人已经接收实物；其服务及废物责任负担仍保留，不能增加产出。在cp_orders逐项记录判据及通过/失败证据；缺证据阻止合格判定。被动保温本身不能证明合规。冷藏/冷冻/原料食品、主动冷热控制及其他车型路线须另行论证方法，不得默默合并。 | `fsa-food-delivery`; `fsanz-food-transport` |
| b_waste | 服务导致的废弃熟食作为delivery_food_waste废物载体，不得作为负产品或重复计其组分排放。商家重做食品的生产不在本配送服务参考范围内，较广的食品订单研究须披露。顾客/商家食品生产负担在本服务外，但保留失败行程及配送方负责的废物运输/处理。不得计避免食品生产、回收或替代抵扣。 |  |

### 支持活动原子边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| boundary_atomic_support | 支持活动 | 每条启用交换表示一个明确的材料、设备或服务对象，只使用一个主属性和单位。不得仅因服务包含上游过程而禁止服务流。计量前按供应方、合同、场址、事件、接口和范围组成确定责任。运营方运行的过程及由运营方承担清单责任的独立委托现场任务采用前景实物行；责任范围外的独立供应活动采用其明确的服务接口行，供应方制造、公用工程、维护和废物保留在匹配的背景服务中，不另作前景交换。合同本身不使供应方内部过程成为前景。不得改变产品、路线、保管接口或原参考分母。执行 foreground_interface_method 和 foreground_interface_coverage；边界变化须经PCR审查，不得根据数据是否易得任意选择。 此处责任归属指清单责任，不仅指法律所有权：租赁设备的提供可以是外部服务，而运营方运行所用的独立计量电力仍属于前景。 |  |
| foreground_interface_coverage | 所有支持过程及重叠范围 | 每个服务合同及背景数据集均须保留经签署的范围责任矩阵：确切接口、路线/配置、地点/期间、原生参考单位、质量、供应/运行/空驶/失败/维护/资本/寿终覆盖、全用户分配和前景重叠。背景覆盖须保留原生命周期义务及候选分配政策；可用兼容数据集及供应方范围声明证明，无需取得全部内部交换。外购数量在接口处计量；捆绑的独立服务或不兼容单位须拆成具体行。部分覆盖先按有证据的事件/组成划分。运营方自有资产、独立供应能源/材料、客户自备部件及运营方保留废物仅留在各自实物行，并从供应方清单排除。只停用与服务确切重复的供应方组成；实际未覆盖组成须由其明确接口/实物行承接。不得同时加上已被服务覆盖的明细，不得因供应方明细缺失而抹除负担。服务单位换算、身份、覆盖或必要补充组成缺失时保持未完成，不得填零。原较窄产品适用范围、实物库存平衡、原队列更正及receipt证据仍对实际责任方强制适用。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| delivery | 自行车熟制热餐配送 | required | 声明的单独收费热餐路线 | foreground | delivery_complete |
| support_delivery_maintenance | 支持接口／前景活动：配置明确的电助力配送自行车维护作业服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立实际自行车维修执行：更换实物产品、车间运行资本及拆除件处理；排除牵引能源及直接道路磨耗。 | support | 归属至delivery_complete |
| support_delivery_cleaning | 支持接口／前景活动：指定EPP配送箱一次完整清洗周期服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立实际EPP配送箱清洗消毒及干燥，含实际水、每种明确清洗产品、能源、设备及处理；不预设标准配方。 | support | 归属至delivery_complete |
| support_delivery_dispatch | 支持接口／前景活动：一次配置明确的配送订单生命周期调度事务服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立调度IT执行，从排程到定位、重试及结案，含实际终端网络服务器及所在设施生命周期；排除食品销售中介。 | support | 归属至delivery_complete |
| support_delivery_road | 支持接口／前景活动：电助力配送自行车使用指定道路路段的服务 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：铺装自行车路线实物基础设施支持，排除自行车牵引及直接路面磨耗。 | support | 归属至delivery_complete |
| support_delivery_charge_bay | 支持接口／前景活动：配置明确的自行车充电位可用服务，不含电力 | conditional | 按实际责任执行 foreground_interface_method 及 foreground_interface_coverage。以下原实物明细条件仅适用于其前景组成：独立充电基础设施资本维护终端残余过程；充电器插座及专用遮棚为真实实物设备。充电含待机电仍由delivery_ac唯一归属。 | support | 归属至delivery_complete |

### 过程：自行车熟制热餐配送 (`delivery`)

#### 输入

##### 产品流

###### 交流电 (`delivery_ac`)

在充电及配送直接场所/设备电表计量交流电，并进行互斥活动归属。包含实际充电损失，不得再加。此UUID不确定发电组合或电压。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值, 低位热值 / MJ
- 数量规则：依第8节电力规则，归属剩余车辆/路线交流电加直接归属已验证零事件交流电及独立归属设备/场所交流电kWh*3.6/N，仅归一化一次；分配前从剩余池剔除直接事件交流电。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_power`

###### 制造gate的完整电助力载货自行车 (`delivery_bike`)

每份供应记录仅含一种声明车型/配置；初装部件按已核实物料清单纳入，并排除仅归delivery_charge_bay的充电器。资产份额不是虚构自行车质量。

- 选定流: 制造gate的完整电助力载货自行车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum_b(km_assigned_b / L_km_b) / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`

###### 可复用发泡聚丙烯保温食品配送箱 (`delivery_box`)

一种声明的完整EPP箱，不含主动温控设备；分批装卸订单按calc_box_cycles共同归属同一未卸空箱周期。

- 选定流: 可复用发泡聚丙烯保温食品配送箱
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum_b(U_assigned_b / L_use_b) / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`

###### 无涂层牛皮纸食品订单外提袋 (`delivery_bag`)

仅含配送方新增牛皮纸袋。排除商家既有包装。计量袋质量及库存平衡；随餐交付的袋在交付后属于包装载物，另披露下游去向。实际其他包装须在完成前有各自原子身份。

- 选定流: 无涂层牛皮纸食品订单外提袋
- 流属性/单位: 质量 / kg
- 数量规则： M_added_bag_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`

#### 输出

##### 产品流

###### 合格本地熟制热餐订单配送 (`delivery_complete`)

在声明的食品安全及时间承诺下完整验收的一笔独立订单。先计量N，再将本参考归一为一；餐盒、重试及部分签收不是额外产品。

- 选定流: 合格本地熟制热餐订单配送
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： 1 Item(s)
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_orders`

##### 废物流

###### 含最终装机电池的报废完整电助力载货自行车 (`delivery_bike_waste`)

终端自行车废物质量，须有明确获准接收方；维修拆出电池/部件属于维修服务，不再重复计。仅在处理数据集未含时另计组分排放。

- 选定流: 含最终装机电池的报废完整电助力载货自行车
- 流属性/单位: 质量 / kg
- 数量规则： sum_b(m_terminal_b * km_assigned_b / L_km_b) / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`

###### 废弃发泡聚丙烯食品配送箱 (`delivery_box_waste`)

预期终端EPP箱质量，衔接其实际回收或处置路线，不计替代抵扣。

- 选定流: 废弃发泡聚丙烯食品配送箱
- 流属性/单位: 质量 / kg
- 数量规则： sum_b(m_terminal_b * U_assigned_b / L_use_b) / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`

###### 源头分离的废弃熟食残余物 (`delivery_food_waste`)

仅含已识别收集点由服务负责的废弃熟食，采用含组成及包装分离信息的湿质量。不得加入原食品制造或重复乘内含排放。

- 选定流: 源头分离的废弃熟食残余物
- 流属性/单位: 质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/N；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`

###### 废弃无涂层牛皮纸外提袋 (`delivery_bag_waste`)

仅含交付前或失败/退回服务中由配送方负责的纸袋废物；与已交付收件人的袋分开。

- 选定流: 废弃无涂层牛皮纸外提袋
- 流属性/单位: 质量 / kg
- 数量规则：按第8节废物来源方法，以本卡声明材料及干湿基准的原队列/分层归属产生质量/N；包含留存废物及有依据的最终处理。保管外运核验原事件，不再作为新产生或后来队列负担。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_materials`

##### 基本流

###### 轮胎磨耗颗粒，排入空气 (`delivery_tyre_air`)

仅在证实直接排入空气时适用，采用有记录的材料特定磨耗及去向模型。捕集残余及存量不是本排放。 按第8节 `inv_particle_identity` 执行。

- 选定流: 轮胎磨耗颗粒，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： M_tyre_air_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wear`

###### 轮胎磨耗颗粒，排入淡水 (`delivery_tyre_water`)

仅在证实直接排入淡水时适用，采用有记录的材料特定磨耗及去向模型。捕集残余及存量不是本排放。 按第8节 `inv_particle_identity` 执行。

- 选定流: 轮胎磨耗颗粒，排入淡水
- 流属性/单位: 质量 / kg
- 数量规则： M_tyre_water_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wear`

###### 轮胎磨耗颗粒，排入土壤 (`delivery_tyre_soil`)

仅在证实直接排入土壤时适用，采用有记录的材料特定磨耗及去向模型。捕集残余及存量不是本排放。 按第8节 `inv_particle_identity` 执行。

- 选定流: 轮胎磨耗颗粒，排入土壤
- 流属性/单位: 质量 / kg
- 数量规则： M_tyre_soil_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wear`

###### 制动磨耗颗粒，排入空气 (`delivery_brake_air`)

仅在证实直接排入空气时适用，采用有记录的材料特定磨耗及去向模型。捕集残余及存量不是本排放。 按第8节 `inv_particle_identity` 执行。

- 选定流: 制动磨耗颗粒，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： M_brake_air_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wear`

###### 制动磨耗颗粒，排入淡水 (`delivery_brake_water`)

仅在证实直接排入淡水时适用，采用有记录的材料特定磨耗及去向模型。捕集残余及存量不是本排放。 按第8节 `inv_particle_identity` 执行。

- 选定流: 制动磨耗颗粒，排入淡水
- 流属性/单位: 质量 / kg
- 数量规则： M_brake_water_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wear`

###### 制动磨耗颗粒，排入土壤 (`delivery_brake_soil`)

仅在证实直接排入土壤时适用，采用有记录的材料特定磨耗及去向模型。捕集残余及存量不是本排放。 按第8节 `inv_particle_identity` 执行。

- 选定流: 制动磨耗颗粒，排入土壤
- 流属性/单位: 质量 / kg
- 数量规则： M_brake_soil_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wear`

###### 沥青路面磨耗颗粒，排入空气 (`delivery_road_air`)

仅在证实直接排入空气时适用，采用有记录的材料特定磨耗及去向模型。捕集残余及存量不是本排放。 按第8节 `inv_particle_identity` 执行。

- 选定流: 沥青路面磨耗颗粒，排入空气
- 流属性/单位: 质量 / kg
- 数量规则： M_road_air_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wear`

###### 沥青路面磨耗颗粒，排入淡水 (`delivery_road_water`)

仅在证实直接排入淡水时适用，采用有记录的材料特定磨耗及去向模型。捕集残余及存量不是本排放。 按第8节 `inv_particle_identity` 执行。

- 选定流: 沥青路面磨耗颗粒，排入淡水
- 流属性/单位: 质量 / kg
- 数量规则： M_road_water_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wear`

###### 沥青路面磨耗颗粒，排入土壤 (`delivery_road_soil`)

仅在证实直接排入土壤时适用，采用有记录的材料特定磨耗及去向模型。捕集残余及存量不是本排放。 按第8节 `inv_particle_identity` 执行。

- 选定流: 沥青路面磨耗颗粒，排入土壤
- 流属性/单位: 质量 / kg
- 数量规则： M_road_soil_assigned / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_wear`

### 过程：支持接口及前景活动（配置明确的电助力配送自行车维护作业服务）(`support_delivery_maintenance`)

#### 输入

##### 产品流

###### 配置明确的电助力配送自行车维护作业服务 (`svc_delivery_maintenance`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的配置明确的电助力配送自行车维护作业服务。计量：每个独立工单的实际技师作业小时，划分同时任务并保留原例行期间/因果事故归属。按 cp_interface_delivery_maintenance 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_delivery_maintenance 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_delivery_maintenance。

- 选定流: 配置明确的电助力配送自行车维护作业服务
- 流属性/单位: 时间 / h
- 数量规则： sum(A_s,e * alpha_s,e) / N；原生服务单位 h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_delivery_maintenance`

###### 交流电 (`u_delivery_maintenance_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_maintenance_scope`、`inv_occurrence`、`inv_physical_basis`、`inv_ac_basis` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 供应本过程的自来水 (`u_delivery_maintenance_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_maintenance_scope`、`inv_occurrence`、`inv_physical_basis` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 明确维修车间建筑，竣工交付完整产品 (`u_delivery_maintenance_workshop_building_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_maintenance_scope`、`inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver` 执行。

- 选定流: 明确维修车间建筑，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 明确车辆维修举升设备，制造门完整产品 (`u_delivery_maintenance_workshop_lift_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_maintenance_scope`、`inv_asset_cohorts`、`inv_replacement_attribution` 执行。

- 选定流: 明确车辆维修举升设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 更换牵引电池，制造门完整产品 (`u_delivery_maintenance_replacement_battery`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_maintenance_scope`、`inv_occurrence`、`inv_physical_basis` 执行。

- 选定流: 更换牵引电池，制造门完整产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 更换轮胎，制造门产品 (`u_delivery_maintenance_replacement_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_maintenance_scope`、`inv_occurrence`、`inv_physical_basis` 执行。

- 选定流: 更换轮胎，制造门产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 更换制动片，制造门产品 (`u_delivery_maintenance_replacement_brake_pad`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_maintenance_scope`、`inv_occurrence`、`inv_physical_basis` 执行。

- 选定流: 更换制动片，制造门产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_delivery_maintenance_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_maintenance_scope`、`inv_occurrence` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 寿终残余明确维修车间建筑 (`u_delivery_maintenance_workshop_building_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_maintenance_workshop_building_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_maintenance_scope`、`inv_terminal_cohorts` 执行。

- 选定流: 寿终残余明确维修车间建筑
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 寿终残余明确车辆维修举升设备 (`u_delivery_maintenance_workshop_lift_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_maintenance_workshop_lift_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_maintenance_scope`、`inv_terminal_cohorts` 执行。

- 选定流: 寿终残余明确车辆维修举升设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 拆除牵引电池 (`u_delivery_maintenance_removed_battery`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_maintenance_scope`、`inv_occurrence`、`inv_physical_basis` 执行。

- 选定流: 拆除牵引电池
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 拆除轮胎 (`u_delivery_maintenance_removed_tyre`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_maintenance_scope`、`inv_occurrence`、`inv_physical_basis` 执行。

- 选定流: 拆除轮胎
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`

###### 拆除制动片 (`u_delivery_maintenance_removed_brake_pad`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 这是具体候选项，并非声称实际发生。 按第8节 `inv_maintenance_scope`、`inv_occurrence`、`inv_physical_basis` 执行。

- 选定流: 拆除制动片
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_maintenance`


### 过程：支持接口及前景活动（指定EPP配送箱一次完整清洗周期服务）(`support_delivery_cleaning`)

#### 输入

##### 产品流

###### 指定EPP配送箱一次完整清洗周期服务 (`svc_delivery_cleaning`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的指定EPP配送箱一次完整清洗周期服务。计量：按箱体/事件ID计数实际完成的清洗周期；按 c_services、calc_box_cycles 和 calc_first_cleaning_window 保留首次、例行和因果空箱窗口；一项是一次箱体清洗，不是一次配送。按 cp_interface_delivery_cleaning 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_delivery_cleaning 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_delivery_cleaning。

- 选定流: 指定EPP配送箱一次完整清洗周期服务
- 流属性/单位: 件数 / Item(s)
- 数量规则： sum(A_s,e * alpha_s,e) / N；原生服务单位 Item(s)；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_delivery_cleaning`

###### 供应本过程的自来水 (`u_delivery_cleaning_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_cleaning_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_cleaning`

###### 交流电 (`u_delivery_cleaning_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_ac_basis`、`inv_cleaning_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_cleaning`

###### 明确清洗设备，制造门完整产品 (`u_delivery_cleaning_cleaning_machine_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_cleaning_scope` 执行。

- 选定流: 明确清洗设备，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_cleaning`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_delivery_cleaning_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_cleaning_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_cleaning`

###### 寿终残余明确清洗设备 (`u_delivery_cleaning_cleaning_machine_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_cleaning_cleaning_machine_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_cleaning_scope` 执行。

- 选定流: 寿终残余明确清洗设备
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_cleaning`


### 过程：支持接口及前景活动（一次配置明确的配送订单生命周期调度事务服务）(`support_delivery_dispatch`)

#### 输入

##### 产品流

###### 一次配置明确的配送订单生命周期调度事务服务 (`svc_delivery_dispatch`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的一次配置明确的配送订单生命周期调度事务服务。计量：计数唯一已执行订单生命周期事务，包含失败订单；同一合同生命周期内重试不另计事务；保留原共享资源归属。按 cp_interface_delivery_dispatch 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_delivery_dispatch 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_delivery_dispatch。

- 选定流: 一次配置明确的配送订单生命周期调度事务服务
- 流属性/单位: 件数 / Item(s)
- 数量规则： sum(A_s,e * alpha_s,e) / N；原生服务单位 Item(s)；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_delivery_dispatch`

###### 交流电 (`u_delivery_dispatch_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_ac_basis`、`inv_dispatch_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

###### 供应本过程的自来水 (`u_delivery_dispatch_water`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_dispatch_scope` 执行。

- 选定流: 供应本过程的自来水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

###### 明确配送调度终端，制造门完整产品 (`u_delivery_dispatch_dispatch_terminal_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_dispatch_scope`、`inv_it_driver` 执行。

- 选定流: 明确配送调度终端，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

###### 明确调度服务器，制造门完整产品 (`u_delivery_dispatch_dispatch_server_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_dispatch_scope`、`inv_it_driver` 执行。

- 选定流: 明确调度服务器，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

###### 明确调度网络交换机，制造门完整产品 (`u_delivery_dispatch_dispatch_network_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 按第8节 `inv_asset_cohorts`、`inv_replacement_attribution`、`inv_dispatch_scope`、`inv_it_driver` 执行。

- 选定流: 明确调度网络交换机，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

###### 明确调度IT设施，竣工交付完整产品 (`u_delivery_dispatch_dispatch_premises_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver`、`inv_dispatch_scope` 执行。

- 选定流: 明确调度IT设施，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

#### 输出

##### 废物流

###### 排入污水管网的过程废水 (`u_delivery_dispatch_wastewater`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 一个实物废水载体，按明确的湿质量基准计量并连接实际管网及处理终点；溶解组分不得再作为额外载体质量相加。完成前须将处理能源、材料及排放展开到各自处理清单。 按第8节 `inv_occurrence`、`inv_dispatch_scope` 执行。

- 选定流: 排入污水管网的过程废水
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

###### 寿终残余明确配送调度终端 (`u_delivery_dispatch_dispatch_terminal_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_dispatch_dispatch_terminal_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_dispatch_scope` 执行。

- 选定流: 寿终残余明确配送调度终端
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

###### 寿终残余明确调度服务器 (`u_delivery_dispatch_dispatch_server_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_dispatch_dispatch_server_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_dispatch_scope` 执行。

- 选定流: 寿终残余明确调度服务器
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

###### 寿终残余明确调度网络交换机 (`u_delivery_dispatch_dispatch_network_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_dispatch_dispatch_network_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_dispatch_scope` 执行。

- 选定流: 寿终残余明确调度网络交换机
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`

###### 寿终残余明确调度IT设施 (`u_delivery_dispatch_dispatch_premises_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_dispatch_dispatch_premises_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_dispatch_scope` 执行。

- 选定流: 寿终残余明确调度IT设施
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_dispatch`


### 过程：支持接口及前景活动（电助力配送自行车使用指定道路路段的服务）(`support_delivery_road`)

#### 输入

##### 产品流

###### 电助力配送自行车使用指定道路路段的服务 (`svc_delivery_road`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的电助力配送自行车使用指定道路路段的服务。计量：指定路段实际自行车公里，含空驶/失败出行；保留原车型特定道路归属。按 cp_interface_delivery_road 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_delivery_road 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_delivery_road。

- 选定流: 电助力配送自行车使用指定道路路段的服务
- 流属性/单位: 车辆行驶距离 / bicycle*km
- 数量规则： sum(A_s,e * alpha_s,e) / N；原生服务单位 bicycle*km；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_delivery_road`

###### 交流电 (`u_delivery_road_electricity`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：运行。 这是具体候选项，并非声称实际发生。 按第8节 `inv_occurrence`、`inv_physical_basis`、`inv_ac_basis`、`inv_road_scope` 执行。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 净热值 / MJ
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位MJ；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_road`

###### 明确已建道路区段基础设施，竣工交付完整产品 (`u_delivery_road_road_section_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 初建道路资本f为同一路段可归属队列道路空间时间/全部道路受益方有证据的全寿命道路空间时间；空置未用能力保留在全寿命负担，维度一致。初建道路资本不得用年度工程损坏份额。原道路终端残余用完全相同f。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_road_scope` 执行。

- 选定流: 明确已建道路区段基础设施，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_road`

###### 明确更换用沥青混合料，制造门产品 (`u_delivery_road_replacement_asphalt`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 实际同年工程维护实物量按既定有证据的全部道路使用方工程损坏份额分配，再除最终参考流分母一次。这些年度路面更换拆除量不得使用初建资本道路空间时间f。须明确实际供应产品牌号及实测拆除质量，不猜密度配方。 按第8节 `inv_occurrence`、`inv_road_scope` 执行。

- 选定流: 明确更换用沥青混合料，制造门产品
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_road`

#### 输出

##### 废物流

###### 寿终残余明确已建道路区段基础设施 (`u_delivery_road_road_section_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_road_road_section_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_road_scope` 执行。

- 选定流: 寿终残余明确已建道路区段基础设施
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_road`

###### 拆除沥青路面 (`u_delivery_road_removed_asphalt`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：真实部件维修/维护。 实际同年工程维护实物量按既定有证据的全部道路使用方工程损坏份额分配，再除最终参考流分母一次。这些年度路面更换拆除量不得使用初建资本道路空间时间f。须明确实际供应产品牌号及实测拆除质量，不猜密度配方。 按第8节 `inv_occurrence`、`inv_road_scope` 执行。

- 选定流: 拆除沥青路面
- 流属性/单位: 质量 / kg
- 数量规则： sum(Q_physical_x,j * s_c,x,j) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_road`


### 过程：支持接口及前景活动（配置明确的自行车充电位可用服务，不含电力）(`support_delivery_charge_bay`)

#### 输入

##### 产品流

###### 配置明确的自行车充电位可用服务 (`svc_delivery_charge_bay`)

仅限 boundary_atomic_support 下的外部接口；一个合同定义的配置明确的自行车充电位可用服务，不含电力。计量：按 c_charge_hours 及 allocation_charge_sources/zero 归属的实际充电位占用并集小时，包含同时端口份额和已核实零补能事件。按 cp_interface_delivery_charge_bay 固定供应方、技术/配置、接口、质量及包含组成；依 foreground_interface_coverage 排除运营方自有或独立供应组成。供应方内部交换不得另作前景投入。原生活动归属沿用 activity_delivery_charge_bay 的分配要求并执行 foreground_interface_method，不因此要求实物清单分支。UUID及属性/单位组支持为未核实候选。计算规则：calc_interface_delivery_charge_bay。

- 选定流: 配置明确的自行车充电位可用服务
- 流属性/单位: 时间 / h
- 数量规则： sum(A_s,e * alpha_s,e) / N；原生服务单位 h；每参考流仅归一一次。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_interface_delivery_charge_bay`

###### 明确电动自行车充电器，制造门完整产品 (`u_delivery_charge_bay_charger_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 采用旧充电位规则相同、有证据的全寿命占位小时容量；共享装置占用小时取并集，向实际充电位端口分配一次。队列份额按正源入库结转或核实零入库因果固定日分支，含失败占用；实际占用承担空置。原充电器插座遮棚终端残余用相同f；带电电池导入不造新小时。 按第8节 `inv_asset_cohorts`、`inv_charging_scope` 执行。

- 选定流: 明确电动自行车充电器，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_charge_bay`

###### 明确充电插座，制造门完整产品 (`u_delivery_charge_bay_socket_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 采用旧充电位规则相同、有证据的全寿命占位小时容量；共享装置占用小时取并集，向实际充电位端口分配一次。队列份额按正源入库结转或核实零入库因果固定日分支，含失败占用；实际占用承担空置。原充电器插座遮棚终端残余用相同f；带电电池导入不造新小时。 按第8节 `inv_asset_cohorts`、`inv_charging_scope` 执行。

- 选定流: 明确充电插座，制造门完整产品
- 流属性/单位: 物品数量 / Item(s)
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位Item(s)；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_charge_bay`

###### 明确专用充电遮棚，竣工交付完整产品 (`u_delivery_charge_bay_shelter_manufacture`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：制造/建造及独立安装。 按本PCR规定的产品边界保留完整实物产品。原装组件归对应cohort。不猜材料配方，不保留运行维护寿终组合包。 产品量为匹配实际建筑或区段的实物面积。 按第8节 `inv_asset_cohorts`、`inv_construction_gate`、`inv_occupancy_driver`、`inv_charging_scope` 执行。

- 选定流: 明确专用充电遮棚，竣工交付完整产品
- 流属性/单位: 面积 / m2
- 数量规则： sum(Q_product_a * f_c,a) / N；原生数量单位m2；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_charge_bay`

#### 输出

##### 废物流

###### 寿终残余明确电动自行车充电器 (`u_delivery_charge_bay_charger_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_charge_bay_charger_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_charging_scope` 执行。

- 选定流: 寿终残余明确电动自行车充电器
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_charge_bay`

###### 寿终残余明确充电插座 (`u_delivery_charge_bay_socket_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_charge_bay_socket_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_charging_scope` 执行。

- 选定流: 寿终残余明确充电插座
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_charge_bay`

###### 寿终残余明确专用充电遮棚 (`u_delivery_charge_bay_shelter_terminal`)

仅限前景实物组成：本卡先执行 foreground_interface_method 和 foreground_interface_coverage；外部服务已覆盖本组成时改用其 svc_ 接口。实物阶段：配对资产寿终。用于实际退役，或有文件支持的预期残余质量及接收路径清单；未退役不等于零。 后继资产不得并入前资产终端质量。实际处理投入排放须有各自已明确实物清单。 配对制造行u_delivery_charge_bay_shelter_manufacture：使用该资产序列号/批次及完全相同寿命份额，不以当期移交量追加负担。 按第8节 `inv_terminal_cohorts`、`inv_charging_scope` 执行。

- 选定流: 寿终残余明确专用充电遮棚
- 流属性/单位: 质量 / kg
- 数量规则： sum(R_terminal_a * f_c,a) / N；原生数量单位kg；按第8节固定实物归属规则，不以服务活动量作为本交换量。
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_support_delivery_charge_bay`



## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| a_events | 采用含全部已调度订单及失败单的已结案订单群组。N仅为独立且完整合格交付的订单数。每项清单负担先按c_routes归入群组及线路，再仅除一次N；失败事件保留负担，不得扩大N。不得乘餐品件数或再次归一化。 |  |
| allocation_waste_origin | 每笔普通固体废物在产生时固定原服务队列及分层责任，不按后来外运时点归属。优先追溯直接产生任务；共享产生量采用现有场站/处理作业分配驱动，覆盖已记录产生区间内全部客户及非队列工作量。产生事件ID、产生日期、原份额和原参考流分母随暂存及内部转移保留。接入旧废物不是新产生。留存废物仍承担原处理责任，外运期服务不继承该负担。 订单造成的食物/包装废物归原订单/队列；废弃食物仅在既定运营方废物责任gate内纳入。未绑定订单的仓储纸袋报废，固定按产生所在当地日历月库存区间的全使用者纸袋净领用质量分配；选范围前拆月，保留全部使用者及原份额。正报废而无有依据净领用受益方时保持不完整。 期间归属前记录场站时区。 |  |
| a_shared | 将运动、停站服务及可用性负担池设为互斥。每段运动在引致该段的所有订单间等分；将重新定位或空驶关联到有记录的前后任务，否则归于整班受益群组。同一停站工作量在该站所有服务订单间等分，不得每单复制。牵引充电按运动分配；实测空闲功耗及IT/可用性按归属服务历时分配。每个共享分母须纳入研究外受益业务，份额总和核对为一。 |  |
| a_asset | 自行车制造按实测归属公里数/有证据的预期寿命公里数分配；保温箱制造按实际装载订单等效使用次数/有证据的预期寿命使用次数分配，按calc_box_cycles在每个互斥箱周期的全部使用者间只分一次。维修另计。终端资产处理采用同一寿命分配基础；实际报废记录用于修订模型，不另追加第二次处理。披露不确定性及敏感性；不得虚构寿命或质量。 |  |
| a_overlap | 完整自行车仅在供应范围明确时含初装电池及车轮。充电位服务是充电器制造/维护/报废的唯一责任项：自行车制造及终端废物数据集须明确排除充电器硬件。若整车供应捆绑充电器，须精确且有依据地拆分；无法拆解时阻断完成。不得双计这些部件。维修仅含实际更换件/修理及其处置。维修服务不含使用中直接道路磨耗。完整采购服务清单须列明能源、材料、运输、废物及排放边界；仅凭精确范围/活动对账删除重复，不得估猜折扣。 |  |
| a_comparability | 运动/停站等分是本PCR声明的方法选择，不是不同订单实测等价。保留食品/餐盒质量、尺寸、箱容量/载荷限制及服务/温控等级。直接比较须匹配订单大小/质量/服务分层并采用同一分配方法；否则须分层报告并检验按载物质量或容量分配的敏感性。不得超出有依据的安全载荷容量或默默等同路线/产品状态。 |  |
| allocation_charge_sources | 仅适用于经验证来源总入账I_k>0；零入账占用事件执行allocation_charge_zero。每块实物电池的交流等效能量库存固定采用按时间排序的加权平均来源核算。按原充电会话/来源k保留S_bk，每次经验证的储能增加仅记入其来源一次。每次提取e前，从各来源移除e*S_bk/sum_k(S_bk)，再按规定路线/队列份额归属该次提取。电池转移保留来源向量，等量转出转入，不产生新电力。期初库存须有来源证据；来源不明保持阻断缺口。剩余来源份额跨期结转，并逐来源对账：供应=已归属提取/损失+输出库存+期末库存。充电会话资本/服务小时按该来源实际或有证据预测的寿命期提取/损失中归属各受益者的量，除以其支持的全部提取/损失分配；期末未耗用的资本/服务份额随来源库存保留，更新估计并在耗尽时对账。预测须有证据、不确定性和情景披露，不得临时改用先进先出或全队列里程。废弃或实物损失的储能是服务损失，按该资产相同区间全使用者活动份额归属，不作为转出抵扣；正负担而零受益者保持未解决。交流等效曲线与来源台账不得重复加计损失。 |  |
| allocation_charge_zero | 按经验证的新增储能来源总入账I_k对每次占用充电事件分类，不用净SOC变化：正入账后发生提取/损失仍属I_k>0。表计/BMS证据缺失或未解决不等于I_k=0。I_k>0采用allocation_charge_sources。经验证I_k=0时不建立虚假能量来源：调度/预约证据指向单一因果订单/队列时，将设备小时及实测失败尝试用电直接归该责任对象；失败/取消单保留负担而不增加合格产出。仅能确定因果车辆/任务集合时，在该有记录因果集合内，按归属实际服务历时分配，包含失败尝试及充电等候，采用既定互斥路线/时间池并覆盖全部客户。确属共享故障且无法分离因果任务时，固定采用设备/站点当地日历日共享失败池；跨午夜先拆区间，再按当天全部有证据受益业务的服务历时分配，包含失败尝试/等候及研究外业务。固定时区及受益证据，不得任意扩大窗口或用里程/收入替代。共享时长仅拆分一次，不得每单复制。正负担缺受益证据或历时分母为零时保持不完整。直接、因果集合及共享日归属互斥，选研究范围前份额和为一。这些零入账小时仍保留在相同完整寿命占用小时分母内，不得再经来源向量分配。实测交流输入未进入储能的部分，按相同份额作为直接事件损失/运行负担仅计一次，并从任何剩余路线能耗池剔除。有证据的正总充入而电池净变化为零，不是零入账失败。 I_k仅为本次充电事件的总新增储能；带电电池转入保留原来源向量及资本结转，不构成新充电来源或另一笔会话小时。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| allocation_atomic_physical | 支持过程的实物清单 | 逐供应方、场站、配置、事件及核算区间，先将每项实测实物总量划入互斥清单责任，再选研究队列。使用该支持过程固定的活动驱动，分母包含全部使用者及失败作业。直接因果归属优先于共享分配。数量已归属时不得再次乘队列份额。服务层分配量仅作原始驱动，不作交换量，也不再次除最终参考流件数。表计/库存、安装/替换资产、内部转移、产生废物及去向须在同一物理/时间边界闭合。完整产品gate可保留其制造背景，但不得换名重引入一张汇总服务卡。 |  |
| allocation_atomic_capital | 制造；安装；寿终资产 | 逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 |  |
| allocation_capital_restatement | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 本PCR采用全历史重算，不冻结历史份额，也不把余额集中补入退役当期。全部直接和支持资本、可重复使用容器、产品gate外安装及配对终态来源均执行calc_capital_restatement。各具体活动规则确定驱动和受益份额，仅应用一次。已含交付/寿终的完整资产背景采用相同重算，不另加重复终态交换。例行部件维修仍按其因果/期间方法处理。 |  |
| allocation_atomic_waste | 运行和维护产生的废物 | 运行及维护产生废物的原产生事件、供应方/活动队列、份额及原参考流分母须随暂存和转移保留。共享废物区间固定为声明时区的当地日历月，采用同区间因果活动及全部使用者；既有更具体维修年或柜台期间方法优先适用。在一致材料/水分基准核对：期末=期初+产生+内部转入-内部转出-外运-有证据物理损失。留存废物仍须有实际证据或明确有证据相容前瞻路线及不确定性的最终暂存/运输/处理，去向未知保持不完整。后来回执替换原事件模型，不新增外运期负担。资产寿终废物改用配对资本份额。废物载体及内含组分、储存损失/释放及残余处理不得重复；同一实测场站/暂存作业只归一个清单责任方。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| allocation_provider_maintenance_period | u_delivery_maintenance_replacement_battery; u_delivery_maintenance_replacement_tyre; u_delivery_maintenance_replacement_brake_pad; u_delivery_maintenance_removed_battery; u_delivery_maintenance_removed_tyre; u_delivery_maintenance_removed_brake_pad; u_delivery_road_replacement_asphalt; u_delivery_road_removed_asphalt | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_orders | delivery | delivery_complete | order_acceptance_ledger | order_id; delivery_contract_id; fee_component; 调度/取餐/交付/结案时间; 商家和收件人; attempt_id; 餐盒ID/数量; 食品湿质量; 封签; 承诺时间窗; 食品安全方案ID; 验收检查; terminal_status; 原单/替换单关联; 责任; 退回/废物终点 | 在商家及收件人处采集事件扫描和验收/拒收签认；执行有记录的本地卫生及时间温度方案，不得虚构通用限值。每单仅有一个终态：qualified_full、rejected_or_incomplete、cancelled、lost_or_discarded或open。重试沿用原订单ID。替换单仅在有独立真实新合同证据时才可计数；纠错重送不得计两次。未结案群组暂不纳入已结案群组并保留其累积负担。 | Item(s) | 每次事件及每次结案 | 代表性声明期间的完整已结案调度群组；记录期初/期末待结案余额 | 群组全部骑手、商家、收件人及平台/分包主体 | 每参考流 | 合同及收费行; 事件日志; 合规授权的封签/照片; 验收签认; 温控方案验证和校准检查; 结果对账 |
| cp_interface_delivery_maintenance | support_delivery_maintenance | svc_delivery_maintenance | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集每个独立工单的实际技师作业小时，划分同时任务并保留原例行期间/因果事故归属。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_delivery_cleaning | support_delivery_cleaning | svc_delivery_cleaning | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按箱体/事件ID计数实际完成的清洗周期；按 c_services、calc_box_cycles 和 calc_first_cleaning_window 保留首次、例行和因果空箱窗口；一项是一次箱体清洗，不是一次配送。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | Item(s) | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_delivery_dispatch | support_delivery_dispatch | svc_delivery_dispatch | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集计数唯一已执行订单生命周期事务，包含失败订单；同一合同生命周期内重试不另计事务；保留原共享资源归属。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | Item(s) | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_delivery_road | support_delivery_road | svc_delivery_road | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集指定路段实际自行车公里，含空驶/失败出行；保留原车型特定道路归属。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | bicycle*km | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_interface_delivery_charge_bay | support_delivery_charge_bay | svc_delivery_charge_bay | service_interface_register | 供应方；合同/版本；事件ID；场址/路线/配置；责任方；范围组成；原生A_s,e及单位；alpha_s,e及全用户驱动；原队列/产出分母；纳入排除矩阵；表计/时间/计数来源；校准；背景引用/单位/期间/分配；更正及重叠关联 | 在实际服务验收/使用接口采集按 c_charge_hours 及 allocation_charge_sources/zero 归属的实际充电位占用并集小时，包含同时端口份额和已核实零补能事件。记录每次实际执行事件，包含原方法要求的失败/返工。按适用情形以校准质量/距离/面积/时间记录或去重执行日志核验单位；与发票对账但不得以金额代替活动量。合同开始/变更时由服务数据责任人签署边界责任及背景兼容矩阵；每月及原队列闭合时对账。仅凭完整事件登记证明未发生。活动、单位换算、背景覆盖或身份缺失时保持未完成；保留不确定性及证据。外部接口不要求供应方内部计量。 | h | 每事件；每月；合同变更；队列闭合 | 相同完整原参考队列及实际服务事件期间 | 声明的外部服务验收/使用接口 | 每参考流 | 签署的合同/范围矩阵；原始活动记录；校准；分配及发票对账；核实的背景身份及缺口记录 |
| cp_capital_restatement | delivery; support_delivery_maintenance; support_delivery_cleaning; support_delivery_dispatch; support_delivery_road; support_delivery_charge_bay | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | versioned_asset_cohort_ledger | 资产/来源ID；来源阶段及本征单位；原队列/分层与因果父队列；原参考分母及修订；按原期间记录的全用户实际驱动；固定受益份额；完整寿命驱动预测/版本及证据；制造/安装量；终态净残余/路线及版本；此前已记归属原始量B及归一结果；重算f/A/q与有正负号更正；零使用投运责任；重叠排除 | 逐序列/来源对照资产登记、活动表计、供方产品gate与原始结果台账；每次变化执行calc_capital_restatement。用原计量驱动及全用户证据复算，不改实物库存。按来源和原队列核对旧值、新值、差额及原分母；由原记录责任人保存版本与校准证据。 | 来源本征单位；原驱动单位；Item(s) | 每次采购/投运、活动、寿命或来源修订及退役；逐原报告期对账 | 完整资产寿命与全部受影响原队列 | 同资产配置全部用户；原产品gate及独立安装/终态 | 每参考流 | 序列/来源登记、表计校准、寿命证据、接收记录、原队列结果及修订链 |
| cp_routes | delivery | 全部线路归属流 | segment_stop_shift_ledger | shift_id; route_id; segment_id; stop_id; 骑手/车辆; 时间戳; distance_km; moving/stopped/available标志; 当前受益order_ids; 取餐等待; 交付等待; 空驶/定位/返程原因; 研究外受益业务 | 用里程表/GPS及调度时间记录建立互不重叠的运动、停站及可用时间段。每运动段在全部n_s个因果受益订单间各分1/n_s。每停站在该次停站全部服务订单间各分1/n_stop。剩余班次可用性按订单归属服务历时分配；空驶/定位/返程关联前后任务，无唯一关联时在整班全部任务间分配。先核对整班公里及时间，再选研究群组；不明缺口不得通过。 | km; h | 每运动段、停站及班次 | 同一已结案群组及全部因果关联班次和返程段 | 所有受益业务含研究外活动 | 每参考流 | GPS/里程表校准; 调度导出; 份额总和; 时间/公里对账 |
| cp_power | delivery | delivery_ac | meter_and_charging_session | 电表/充电会话ID; 电表位置; 期初/期末kWh; 充电损失边界; 车及电池ID; 直接设备/场所用电; 共享池; 供应商; 地域; 电压; 期初/期末电量状态; 实测可用电池容量capacity_kWh; 校准储能测定; 实测SOC至kWh及交流电等效储能曲线; 电池配置/温度/老化; 并行用户 电池转移ID；起讫责任方及时间；方向；实测转移交流等效kWh；原充电会话来源 来源向量S_bk；按时序充电/提取/转移事件；逐来源期初末kWh；实际/预测受益提取量及不确定性；资本小时结转台账; 事件/会话ID及占用开始/释放时间；站点时区和日历日；经验证来源总入账I_k及表计/BMS证据；正/零/未知分类；失败/取消原因；因果订单/队列或车辆/任务集合ID；全使用者归属服务历时，含失败尝试/等候；共享日受益证据；直接事件交流kWh；互斥分支/份额台账；电力/来源/资本重叠交叉表 | 在充电器入口计交流电。用校准直流能量表/BMS，并经同电池配置、温度及老化状态的实际充放电试验验证，测定可用容量及储能；仅有SOC百分比不足。将实测入口交流电与储能/SOC读数配对，建立覆盖观察范围的实测SOC至kWh及交流电等效储能曲线，充电损失仅含一次。对全部电池及转移，按c_power核对充电会话及期初/期末交流电等效储能；无依据换算或库存调整时阻断完成，不采用名义效率。牵引会话按相关运动公里份额分配；直接空闲/设备/场所用电按全部受益方的实测时间或分表份额分配。电池平衡或供应覆盖缺失时明确列为不确定/不完整，不得计零。直接电力仅计一次；完整上游服务排除同一电力。 全部电池转入转出及来源到队列归属须遵守allocation_charge_sources；在同一储能边界计量转移方向，不对废弃储能给转出抵扣。 保留每次实际占用尝试，包含失败/取消及经验证零入账事件。分开测量总入账、净库存变化及并行提取，证据缺失保持未知。正I_k才采用allocation_charge_sources，经验证零I_k采用allocation_charge_zero。关联因果调度/预约及全使用者服务时间记录；固定当地时区，共享事件跨午夜拆分。将分支小时与设备/充电位占用对账，直接事件用电在同一表计台账仅计一次，不虚构库存来源或重复路线能源。 本协议前述牵引/运动/停站分配仅作用于按第8节电力规则扣除独立实测E_zero后的E_route；E_zero按其事件份额仅计一次。 | kWh | 每充电/电表区间；按班次及期间核对 | 同一活动期间并调整能量库存 | 责任范围全部充电点及配送设备/场所 | 每参考流 | 校准电表; 账单; 会话及SOC日志; 供应范围 |
| cp_assets | delivery | delivery_bike; delivery_box | asset_lifetime_register | 资产序号/型号; 制造范围; 物料清单; 电池/充电器纳入情况; 实测质量; 路线公里; 箱装载周期; 同时承载订单数; 寿命公里/周期; 存续/维修证据; 寿命不确定性; 箱ID、订单ID、逐次装卸时间、实际留箱/卸空标记、所有受益方（含失败及非研究业务） | 读取资产台账、供应制造清单和维修史，测量完整配置资产质量及里程/使用计数。按本地观察的退役/存续或有保证的使用证据确定预期寿命并做敏感性分析；不得虚构寿命、质量或数值默认值。 箱周期按calc_box_cycles归属。 分开资产制造分配、维修及退役处理。其他实际专用装备须在完成前新增原子行及身份。 箱周期只用calc_box_cycles的装卸/占用记录，cp_routes的路段均分不可代替箱周期归属。 | Item(s); kg; km | 每资产购入/变更/使用；退役时复核 | 完整资产使用史及声明群组 | 仅配置明确的自行车及被动EPP箱 | 每参考流 | 序号台账; 衡器校准; 供应范围; 寿命及敏感性记录 |
| cp_services | delivery | activity_delivery_maintenance; activity_delivery_cleaning; activity_delivery_dispatch; activity_delivery_road; activity_delivery_charge_bay | complete_supplier_service_inventory | service ID; 供应方/作业/型号; 实际技工小时及并行人员; 箱型及完整清洁周期; 完整订单生命周期事务; 道路等级/公里; 充电位占用小时; 全寿命占用服务小时及预测证据; 空置/待机小时及功率; 清洁首次投入及后续周期关联; 受益集合; 底层清单行ID/单位/数量; 供应能源/材料/废物/排放范围; 纳入/排除矩阵; 事件/会话ID及占用开始/释放时间；站点时区和日历日；经验证来源总入账I_k及表计/BMS证据；正/零/未知分类；失败/取消原因；因果订单/队列或车辆/任务集合ID；全使用者归属服务历时，含失败尝试/等候；共享日受益证据；直接事件交流kWh；互斥分支/份额台账；电力/来源/资本重叠交叉表; 首用清洗放行及首次装入时间；首个常规清洗ID/时间或永久退役时间/签署证据；最后卸空及箱ID连续使用/移交谱系；窗口开放/闭合状态；全用户和队列完整周期等效B_e/B_c,e；原始清洗事件量及未归属负担结转; 实物装置ID与实际端口连接/配置；占用开始释放及连接变化时刻；delta_h_i、n_a,i、H_a,k及装置并集小时；同资产全寿命全用户并集H_life_a；正源结转与核实零支路对账 | 先按 foreground_interface_coverage 确定责任。接口活动、供应方接口/质量及兼容证据仍须采集；以下供应方内部实物/资本/物种字段仅对前景责任组成采集。外部组成使用对应 cp_interface_ 协议及兼容背景证据，不重复展开供应方内部。获取实际工单及按固定物理服务单位的供应清单：同车型/作业类别实际技工小时、声明箱的一次完整清洁消毒、一次完整订单调度生命周期、按道路等级的一自行车公里、或一实际占用充电位小时。不得等同不同作业类别或箱体大小。逐项检查能源、材料、更换件、废水、废物运输/处理及排放；要求校准、化学组成/剂量及接收终点。资本包括对应车间/清洁设备、服务器/网络/终端、道路或充电位部件。仅使用身份完整的实物交换；供应活动单位仅为来源数据分母，不作完整服务投入。明确直接交流电、资产制造、替换件处置及直接磨耗纳入/排除；边界或数量缺失时阻断完成。 保留每次实际占用尝试，包含失败/取消及经验证零入账事件。分开测量总入账、净库存变化及并行提取，证据缺失保持未知。正I_k才采用allocation_charge_sources，经验证零I_k采用allocation_charge_zero。关联因果调度/预约及全使用者服务时间记录；固定当地时区，共享事件跨午夜拆分。将分支小时与设备/充电位占用对账，直接事件用电在同一表计台账仅计一次，不虚构库存来源或重复路线能源。 首用清洗的闭窗、永久退役支路及开放窗结转必须执行calc_first_cleaning_window；按同一原事件对账，不能用期末替代终点。 充电器/插座的并发分割必须执行calc_shared_charge_apparatus，逐区间核对端口份额之和等于一次装置并集；遮棚仍用其独立面积时间规则。 | h; Item(s); km | 每次实际服务/事件；按配置/版本审计供应范围 | 同一群组及因果归属的维修/资本期间 | 全部实际服务供应方；共享分母内全部受益方 | 每参考流 | 工单; 技工日志; 清洁放行记录; 调度事务; 道路寿命/交通清单; 充电位占用; 供应LCI及重叠矩阵 |
| cp_materials | delivery | delivery_bag; delivery_bike_waste; delivery_box_waste; delivery_food_waste; delivery_bag_waste | material_and_waste_balance | 材料/资产ID; 期初库存; 采购; 期末库存; 外部未使用库存转出/供应商退货; 库存边界; 单袋质量/数量; 损失; 食品湿质量/组成; 包装分离; 责任; 实际接收方和处理路线; 废物载体内含物; 匹配历史终端残余质量或当前净质量; 加入/拆出/保留/再用部件; 后续再用寿命计划; 预期终端质量; 监管保管/转移记录; 产生事件generation_event_id；产生时间/场站；来源任务/队列/分层；原分配份额及参考流分母；产生质量及干湿/组成基准；按原来源期初末库存；内部转移ID及两端；外运；有证据物理损失/释放；接收方及去向份额；实际/前瞻路线及模型版本；证据/不确定性；回执替换状态及修订链 | 逐具体材料称重，按期初加采购减期末与已交付/未用/损失/废物数量对账；内部转移及退回是台账状态，不是新产品。对责任废弃食品称湿质量并分离包装。资产终端废物的m_terminal_b为匹配配置历史终端残余实测质量，或由当前实测净质量加有记录的部件加入/拆出及保留/再用计划形成的前瞻估计，并披露不确定性。自行车质量排除充电器。L_km_b及L_use_b涵盖经后续再用直至最终废物的有依据完整寿命，不仅是本运营方持有期间。尚未退役不等于终端废物为零。采用c_assets相同寿命份额分配该质量；实际退役在监管保管台账登记并用于更新模型，不再追加同一质量。将每项废物衔接实际运输及处理，记录各路段责任；关联废物接收数据集已含处理时不得另加处理采购。不属配送方废物责任的食品只披露保管转移，不虚构处理。 在产生点计量分流产生质量，暂存前记录责任任务/区间；若由完整库存平衡反推产生量，须记录全部转移、损失及测量不确定性，并保留原事件来源。执行allocation_waste_origin及calc_waste_origin。每次转移及期末，用校准及接收证据核对带来源库存。留存量必须有受支持的暂存/运输/处理覆盖；后续回执替换原事件模型，不新增外运期第二笔负担。 | kg | 每收货/使用/废物转移；期间起止盘点；逐次普通废物产生及每月来源库存对账 | 同一群组及对应资产预期终端处理；原产生责任保留至最终处理证据 | 运营方仓库、处理点及已识别接收方 | 每参考流 | 校准质量记录; 库存平衡; 转移签认; 处理清单及包装/食品分离 |
| cp_wear | delivery | 按接收介质区分的轮胎、制动及沥青磨耗流 | wear_generation_fate_balance | 材料; 车型/轮胎/制动/道路等级; 归属公里; 磨耗测量/因子来源; 粒径份额; 路面积存期初/期末库存; 空气/淡水/土壤份额; 收集/径流路线; 接收子介质; 捕集残余处理; 因子覆盖 | 计量磨耗损失或取得与车辆/材料/道路匹配且可追溯因子；记录适用性及不确定性。逐材料将产生质量核对为互斥直接空气、淡水、土壤、捕集残余及路面积存变化；去向份额和为一，不预设接收介质。直接流仅将产生质量乘接收份额一次；已按介质给出的因子不得再乘该份额。积存不是土壤，径流不自动等于淡水，捕集残余是废物载体，须在完成前有单独原子行及处理。不得因电驱动声称非尾气磨耗为零。 | kg; km | 按配置匹配测量活动/因子；每期间对账 | 同一路线、工况及群组 | 实际自行车路线及接收终点 | 每参考流 | 称量/因子原文; 材料匹配; 粒径及去向台账; 径流/接收证据; 不确定性 |

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_support_delivery_maintenance | support_delivery_maintenance | u_delivery_maintenance_electricity; u_delivery_maintenance_water; u_delivery_maintenance_wastewater; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_lift_terminal; u_delivery_maintenance_replacement_battery; u_delivery_maintenance_replacement_tyre; u_delivery_maintenance_replacement_brake_pad; u_delivery_maintenance_removed_battery; u_delivery_maintenance_removed_tyre; u_delivery_maintenance_removed_brake_pad | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立实际自行车维修执行：更换实物产品、车间运行资本及拆除件处理；排除牵引能源及直接道路磨耗。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。技师小时、任务、型号、同时工人数仅用于归属。常规维修采用匹配维修期间队列km/全部使用方km，事故维修直接按因果归属，再除N一次。排除既有原装自行车、配送箱和充电位资产。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 | 各卡原生单位；原始technician h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_delivery_cleaning | support_delivery_cleaning | u_delivery_cleaning_water; u_delivery_cleaning_electricity; u_delivery_cleaning_wastewater; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 箱及清洗事件ID；前次/本次清洗时间；实际装卸区间；全用户用箱份额；首次清洗后续窗；空箱因果记录; 首用前/常规/因果空箱清洗事件类别、已卸空证据、同箱相邻常规清洗ID; 首用清洗放行及首次装入时间；首个常规清洗ID/时间或永久退役时间/签署证据；最后卸空及箱ID连续使用/移交谱系；窗口开放/闭合状态；全用户和队列完整周期等效B_e/B_c,e；原始清洗事件量及未归属负担结转 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立实际EPP配送箱清洗消毒及干燥，含实际水、每种明确清洗产品、能源、设备及处理；不预设标准配方。 按c_services将已卸空箱的清洗分为首用前、常规及因果空箱清洗；常规窗只由常规清洗界定，因果空箱清洗不重置。按N归一化一次，不假定每成功单一次清洗。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 按calc_box_cycles及c_services固定清洗分配窗；只归属一次，不累加路段份额。 首用清洗的闭窗、永久退役支路及开放窗结转必须执行calc_first_cleaning_window；按同一原事件对账，不能用期末替代终点。 | 各卡原生单位；原始complete EPP-box cleaning cycle | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_delivery_dispatch | support_delivery_dispatch | u_delivery_dispatch_electricity; u_delivery_dispatch_water; u_delivery_dispatch_wastewater; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_premises_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立调度IT执行，从排程到定位、重试及结案，含实际终端网络服务器及所在设施生命周期；排除食品销售中介。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。含失败订单的完整事务及资源时间日志用于向全部受益方分配实物总量。一次事务不等于一台服务器或名义设备小时；保留N及直接共享归属。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 | 各卡原生单位；原始one order-lifecycle transaction | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_delivery_road | support_delivery_road | u_delivery_road_electricity; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_road_replacement_asphalt; u_delivery_road_removed_asphalt | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 维护日历年；时区；资产ID；安装/消耗M_x,y；产生残余kg；同年全用户驱动；同年队列归属驱动；因果事件/任务；未用库存/退回/转移 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。铺装自行车路线实物基础设施支持，排除自行车牵引及直接路面磨耗。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。原距离车辆活动仅用于分配；匹配路段类别期间及全部道路使用方寿命交通量，固定和可变池各一次；68031最终分母N，68039为D。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 本供应方实际常规/因果维护执行allocation_provider_maintenance_period及calc_provider_maintenance_period，不在每年使用全队列公里。 | 各卡原生单位；原始bicycle km | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |
| cp_support_delivery_charge_bay | support_delivery_charge_bay | u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_shelter_terminal | physical_exchange_and_asset_register | 事件/资产/场站/供应方/配置；确切产品/物种；阶段；Q_x,j及原单位；来源强度及活动基准；寿命活动及f；终态资产链接及残余单位；库存转移ID；原废物事件/队列；表计校准；全用户驱动；重叠责任；前瞻路线版本；发生证据；物种身份/CAS、T及NO2等效定义、匹配来源摩尔a、分子质量来源、单物种质量/因子及校准; 实物装置ID与实际端口连接/配置；占用开始释放及连接变化时刻；delta_h_i、n_a,i、H_a,k及装置并集小时；同资产全寿命全用户并集H_life_a；正源结转与核实零支路对账 | 按 foreground_interface_method 仅采集启用的前景实物组成；外部服务使用 cp_interface_ 协议。独立充电基础设施资本维护终端残余过程；充电器插座及专用遮棚为真实实物设备。充电含待机电仍由delivery_ac唯一归属。 服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。保留c_charge_hours及allocation_charge_sources/zero：占位小时并集、实际同时使用装置份额、正源入库跨期结转、核实零入库直接因果集合固定当地日池，未知非零。全寿命分母由实际占用承担空置负担。带电电池导入不造新源或充电小时。所得归属仅作资本残余f，不以h作交换量。 逐供应方/来源gate采集事件/资产/场站/路线/配置及确切实物身份、发生/未发生条件、方向/类型/接收介质、原始数量与单位、表计/皮重/校准、时间戳与时区、完整核算区间、来源单位清单基准、全使用者活动与队列关联、制造/安装/运行/维修/寿终阶段、资产原/剩余份额、配对终态残余来源、库存/转移、接收/去向及前瞻模型修订。保留供应方签署范围及与既有直接卡的精确重叠交叉表。缺失具体卡须先由化学/BOM/分析身份确定后建立；UUID未绑定候选可待官方核验，但不得为复数集合卡。逐事件测量，按规定当地月/维修年对账，每年及配置/退役变化时复审完整资产/供应清单。正活动未量化、未来处理无依据或实际交换未列卡均阻断完整性。 充电器/插座的并发分割必须执行calc_shared_charge_apparatus，逐区间核对端口份额之和等于一次装置并集；遮棚仍用其独立面积时间规则。 | 各卡原生单位；原始nonoverlapping occupied bay h | 逐事件；当地月/维修年对账；每年及资产变化复审 | 完整原受理队列及失败/退回尾期、相容资产寿命及最终废物证据 | 同一供应方/场站/配置范围；全部共享使用者 | 每参考流 | 校准原件；签署范围/重叠表；资产/回执谱系；不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_n | delivery_complete | N = 依cp_orders完整验收且terminal_status=qualified_full的独立order_id数；N > 0。终态计数加未结案余额等于调度订单数；重试绝不产生新产出。 | cp_orders | N笔合格订单；输出归一为1 Item(s) |  |
| foreground_interface_method | svc_delivery_maintenance; svc_delivery_cleaning; svc_delivery_dispatch; svc_delivery_road; svc_delivery_charge_bay | 计量前按 boundary_atomic_support 将每个事件/范围组成划为互不重叠的前景实物或外部服务。现有实物卡公式、组成规则及 cp_support 协议仅适用于前者，不得为启用服务接口而要求外部供应方BOM或内部表计账本。对服务行s采集固定原生单位的原始 A_s,e，并按原具名活动分配确定 alpha_s,e：直接属于队列的事件取1；确需共享的事件保留原全用户驱动、失败/空驶/待机处理及事件窗口。已归属服务量 T_s=sum(A_s,e*alpha_s,e)；原生活动账本已含队列归属时，不得再次乘份额。q_s=T_s/N_ref，N_ref为原队列正参考产出。零产出时保留原始总量并将单位结果标为未完成。时间、面积、计数和运输活动量不得无证据换成能量或设备质量。服务清单已包含资本分配时不得再乘实物资产寿命份额。背景连接仅以q_s乘每一相同服务单位的清单一次；排放因子不是服务交换数量。原实物专用指令及服务禁用措辞仅适用于前景实物分支；服务分支执行本规则及其明确接口协议。 未完成或中止的服务事件仍保留有证据的归属负担。不得因接口以完整单位计数就将其丢弃：须以合同及执行记录证明等效原生服务量，或在声明完整前增设身份明确的部分服务行；不得假定一整单位或零。 已按最终参考流表示的供应方数值不是原始A_s,e：重新计算前须恢复原总量和分母，或证明归一结果完全等价且不再除最终分母。供应方已包含的分配仅应用一次。 | cp_interface_delivery_maintenance; cp_interface_delivery_cleaning; cp_interface_delivery_dispatch; cp_interface_delivery_road; cp_interface_delivery_charge_bay | 每原参考流的原生服务单位 |  |
| calc_interface_delivery_maintenance | svc_delivery_maintenance | 执行 foreground_interface_method。原生活动 A_s,e（h）：每个独立工单的实际技师作业小时，划分同时任务并保留原例行期间/因果事故归属。仅将原 activity_delivery_maintenance 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/N，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_delivery_maintenance; activity_delivery_maintenance | h/N |  |
| calc_interface_delivery_cleaning | svc_delivery_cleaning | 执行 foreground_interface_method。原生活动 A_s,e（Item(s)）：按箱体/事件ID计数实际完成的清洗周期；按 c_services、calc_box_cycles 和 calc_first_cleaning_window 保留首次、例行和因果空箱窗口；一项是一次箱体清洗，不是一次配送。仅将原 activity_delivery_cleaning 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/N，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_delivery_cleaning; activity_delivery_cleaning | Item(s)/N |  |
| calc_interface_delivery_dispatch | svc_delivery_dispatch | 执行 foreground_interface_method。原生活动 A_s,e（Item(s)）：计数唯一已执行订单生命周期事务，包含失败订单；同一合同生命周期内重试不另计事务；保留原共享资源归属。仅将原 activity_delivery_dispatch 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/N，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_delivery_dispatch; activity_delivery_dispatch | Item(s)/N |  |
| calc_interface_delivery_road | svc_delivery_road | 执行 foreground_interface_method。原生活动 A_s,e（bicycle*km）：指定路段实际自行车公里，含空驶/失败出行；保留原车型特定道路归属。仅将原 activity_delivery_road 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/N，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_delivery_road; activity_delivery_road | bicycle*km/N |  |
| calc_interface_delivery_charge_bay | svc_delivery_charge_bay | 执行 foreground_interface_method。原生活动 A_s,e（h）：按 c_charge_hours 及 allocation_charge_sources/zero 归属的实际充电位占用并集小时，包含同时端口份额和已核实零补能事件。仅将原 activity_delivery_charge_bay 受益方及事件窗口规则用于服务活动归属，不要求实物分支。q_s=sum(A_s,e*alpha_s,e)/N，仅一次。兼容供应方强度须采用完全相同的单位、范围及原分配政策；不假设每最终产出具有固定活动量。 | cp_interface_delivery_charge_bay; activity_delivery_charge_bay | h/N |  |
| c_routes | 全部共享线路负担 | 每运动段s：因果受益单share(i,s)=1/n_s，其余为0。每停站t：服务订单share(i,t)=1/n_t。每可用性池p：share(i,p)=elapsed_assigned_i/sum_all_beneficiaries(elapsed_assigned)。每项原始总量Q仅归入一个适当池；Q_assigned = sum_p(Q_p * sum_study_orders share(i,p))。选群组前份额和=1；互斥时间池核对整班时间。 | cp_routes; cp_orders | 已归入群组的公里、时间及活动总量，尚未按参考流归一 |  |
| c_power | delivery_ac | 表计加库存能量E_total=实测输入交流+期初交流等效储能kWh+可追溯储能转入-期末交流等效储能kWh-可追溯储能转出。所有项覆盖相同物理边界及完整区间；按采集协议验证匹配配置/温度/老化的实测交流等效曲线，转移保留来源向量，充电损失仅含一次。未知库存/换算保持不完整，不计零。任何路线分配前，先从E_total分离实测零入账直接事件交流电E_zero：E_route=E_total-E_zero。未解释负余量阻断完成。E_route按既定互斥路线/运动/停站池归属；E_zero仅按allocation_charge_zero归属，覆盖全使用者，不虚构储能来源。直接非充电设备/场所电力继续独立计量并仅分配一次。将归属剩余路线、直接零事件及独立非充电用电相加，随后乘3.6并仅除一次原队列分母。不得再上调充电损失或叠加已含相同电力的上游服务。 此处原分母为N。 | cp_power; cp_routes; cp_orders | delivery_ac每参考流MJ |  |
| c_assets | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste | f_bike_b = km_assigned_b / L_km_b；f_box_b = U_assigned_b / L_use_b。正的实测/估计寿命分母须有证据及敏感性分析。制造件数 = sum(f_b)/N；终端kg = sum(m_terminal_b * f_b)/N。U_assigned_b与L_use_b由calc_box_cycles给出。不得每配送加一整件资产。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_assets; cp_materials; cp_routes; calc_box_cycles | 每参考流资产制造份额件数及终端废物kg |  |
| calc_box_cycles | delivery_box; delivery_box_waste; activity_delivery_cleaning | 按箱ID建不重叠装载周期：从首次装入服务订单至该箱最后一件物理卸空，包括停靠与服务责任内退回；仍有货时新装或部分卸载不另开周期。以每次实际装卸时间分段，令h_i为订单i在该周期实际有货占用秒数之和，所有订单含失败、退回与非研究受益人，份额w_i=h_i/sum_all(h_i)；队列归属周期数U_c=sum_cycles(sum_cohort(w_i))。同一周期所有用户合计一，禁止累加每路段的1/n。无法核实正分母或装卸/周期边界时不完整。空箱返程/定位不造装载周期，按有据因果任务保留运输及相关清洁；终态及制造的L_use以相同周期边界的全寿命全部用户周期计。 | cp_assets; cp_orders; cp_support_delivery_cleaning | 原队列归属箱周期份额与全寿命同定义周期，未除N |  |
| c_services | 原始支持活动诊断 | 在本入口声明的适用范围内，按顺序完整执行规则组：c_services_activity_drivers; c_services_diagnostic_only; c_services_routine_cleaning_window; c_services_first_cleaning_and_exceptions。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_services; cp_routes; cp_orders; c_services_activity_drivers; c_services_diagnostic_only; c_services_routine_cleaning_window; c_services_first_cleaning_and_exceptions | 每项指定服务的每参考流数量 |  |
| calc_first_cleaning_window | 首次使用清洁; u_delivery_cleaning_water; u_delivery_cleaning_electricity; u_delivery_cleaning_wastewater | 逐箱及独立首次用前清洗事件e，记录清洗放行、首次装入、完整装卸周期、所有受益方及每次常规/因果清洗。窗口从有证首次装入起，止于首次常规清洗开始；若箱在任何常规清洗前已永久退役，则改以已签署并有资产/移交记录的实际永久退役时刻为终点。需证明最后一次卸空及全部使用已结束；期末、暂时停用、出售或保管转移不等于永久退役，须沿同一箱ID继续追踪，不能截断其受益窗口。以calc_box_cycles在该窗内已完成且卸空的全用户周期等效总和B_e为分母，队列周期等效B_c,e为分子，alpha_c,e=B_c,e/B_e。对该清洗事件实测原始实物量X_j,e，q_j=sum_e(X_j,e*alpha_c,e)/N一次。因果空箱清洗独立直归任务，不进入此事件量且不关闭/重置该窗；资产终止也不虚构一次最终常规清洗。窗口开放则保留原清洗事件、全部原始量及未归属负担，直到有证闭窗；不把未决当零或宣称队列数据已完成。B_e非正时仅可依据已有直接因果任务证据归属；无此证据保持正负担未决。清洗设备资本和终态继续使用其专属全寿命f，不把此事件份额当作整机份额。 | cp_services; cp_support_delivery_cleaning; calc_box_cycles | 首用清洗事件窗口、alpha_c,e及实物量/N |  |
| c_charge_hours | activity_delivery_charge_bay | 每次实际且同位不重叠的占用h_k仅选一支：来源总入账I_k>0时，按allocation_charge_sources取得来源加权队列份额a_c,k；经验证I_k=0时，按allocation_charge_zero取得因果/直接或固定日共享份额z_c,k。归属充电位小时=sum_positive(h_k*a_c,k)+sum_zero(h_k*z_c,k)，随后仅除一次N。选研究范围前全使用者份额和为一；正来源期末份额结转，不为零入账事件创造来源。共享设备资本在充电位间仅分配一次，不得每位计整台设备。失败尝试直接交流用电按相同z_c,k仅计一次，并从剩余路线电力剔除。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 上述h_k是原始逐位活动小时。充电器/插座资本先按calc_shared_charge_apparatus计算装置到端口H_a,k，再应用同一来源到队列份额；不得将并发bay h_k总和作为共享装置占用时间。 | cp_services; cp_power; cp_routes; cp_orders | 原始活动诊断：每参考流占用充电位h |  |
| calc_shared_charge_apparatus | u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_socket_terminal | 逐充电器或插座实物资产a，先由资产到端口的实际连接表确定其服务端口；每次占用状态或连接改变时切分时间区间i。只在同一已证服务配置内，对实际同时占用的n_a,i个端口等分该装置并集时长delta_h_i：端口会话k获得H_a,k=sum_i(delta_h_i/n_a,i)，仅累计k实际占用且由a服务的区间。单端口专属插座n=1。H_a,k之和必须等于该资产有占用的并集小时，不用并发位h_k之和或kWh比例代替。把H_a,k按已有正I_k来源份额a_c,k或经验证零I_k份额z_c,k归属，H_a,c=sum_positive(H_a,k*a_c,k)+sum_zero(H_a,k*z_c,k)。f_a=H_a,c/H_life_a，其中H_life_a是同一实物资产有证据的全寿命、全用户占用并集小时；正源期末未用份额与其H_a,k来源负担一起结转。制造和同资产终态用同一f_a，不再乘一次端口或订单份额。失败/取消实际占用仍计入，空置负担由此已规定的占用寿命分母承担。保留原始bay h_k作活动诊断，不作共享装置的资本分母。端口配置不同则本等分规则不适用，数量及分配保持未决，直到另经审核的配置方法对同一资产全部类别闭合；不得各层各计整台资产。遮棚保持其单独占用面积时间资本规则。 | cp_services; cp_support_delivery_charge_bay; allocation_charge_sources; allocation_charge_zero | 每实物装置的端口分割H_a,k、队列H_a,c及全寿命份额f_a |  |
| c_materials | delivery_bag; delivery_food_waste; delivery_bag_waste | M_used = M_open + M_purchased - M_close - M_transferred_unused。M_transferred_unused仅为同期跨出核算库存边界、转给外部库存责任方或退给供应商的未使用材料。内部转移及内部未用退回仍在核算库存内且已计入M_close，绝不得再减一次。对账已交付及损失/废物。每项非资产材料/废物行 = 归入群组的实测kg/N。食品保留含组成的湿质量；无实测水分不得干湿换算，不得通用地把kg换为订单。 delivery_food_waste及delivery_bag_waste采用calc_waste_origin，不用移交期质量，其输出已仅除一次原N。纸袋生产净耗用及资产寿终废物保留各自库存/寿命方法。 | cp_materials; cp_orders | 每参考流具体材料/废物kg |  |
| calc_waste_origin | delivery_food_waste; delivery_bag_waste | 对每种指定普通固废r及产生事件j，A_c,r = sum_j(G_j,r*s_c,j)，随后q_c,r=A_c,r/原参考流件数，仅归一化一次。G为实测产生质量，不是外运质量。逐材料及原事件对账：期末=期初+产生+内部转入-内部转出-外部外运-有证据物理损失。记录实际水分/组成变化及互斥损失/释放；不得虚构差额，也不得完整残余质量与其已释放组分重复计量。内部转移保留来源，不产生另一笔交换。即使尚在实物暂存，也应建模原队列废物输出及必要暂存/运输/最终处理；使用实际相容接收证据，或有明确证据、匹配材料/组成/地域的前瞻处理路线并披露不确定性。去向份额和为一且仅乘一次，不默认回收或将留存质量处理计零。去向无依据则保持不完整。实际保管库存及外运另作控制台账，不再追加清单。后续接收证据须替换同一事件的前瞻模型，并用原分母重算原队列，不得将相同质量/处理新增给后来队列。用范围交叉表将必要生命周期各环节仅计一次，排除已含于场站/服务清单的暂存能源和搬运。资本寿终废物寿命份额及污水平衡继续使用各自独立规则。 原参考流件数为原队列/分层N。 废物交换gate在产生点。其链接的完整废物管理清单以同一产生质量基准的1kg为输入，覆盖暂存及后续全部去向；最终处理输入仅为扣除储存损失并换算水分基准后的相容实测/有证据预测残余量，不得完整原kg处理再加独立损失。显式储存释放须替换链接清单内相同释放；已含于场站/服务池的暂存/搬运作业须按有记录范围交叉表从废物链接剔除，不得重复。 | cp_materials; allocation_waste_origin | 每原参考流kg；原来源库存/模型台账 |  |
| c_wear | 全部接收介质特定磨耗输出 | 对材料m：G_m = 实测产生kg或匹配factor_kg_per_km * actual_km。G_m = M_air + M_freshwater + M_soil + M_captured + delta_M_road_stock。接收介质输出 = 按c_routes归属的M_receiver/N。仅在输入因子尚未包含时乘组成、粒径或去向份额；保持互斥及分母。未知去向/因子阻断完整量化，不得计零。 | cp_wear; cp_routes; cp_orders | 每参考流一种具体材料/接收介质kg |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| activity_delivery_maintenance | u_delivery_maintenance_electricity; u_delivery_maintenance_water; u_delivery_maintenance_wastewater; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_lift_terminal; u_delivery_maintenance_replacement_battery; u_delivery_maintenance_replacement_tyre; u_delivery_maintenance_replacement_brake_pad; u_delivery_maintenance_removed_battery; u_delivery_maintenance_removed_tyre; u_delivery_maintenance_removed_brake_pad | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。技师小时、任务、型号、同时工人数仅用于归属。常规维修采用匹配维修期间队列km/全部使用方km，事故维修直接按因果归属，再除N一次。排除既有原装自行车、配送箱和充电位资产。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_delivery_maintenance | 原始technician h及唯一归属实物总量，不是服务产品 |  |
| activity_delivery_cleaning | u_delivery_cleaning_water; u_delivery_cleaning_electricity; u_delivery_cleaning_wastewater; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。原始活动台账不作交换。逐供应方、匹配期间p及实物行j，以c_services和calc_box_cycles固定的清洗事件窗或直接因果空箱事件确定队列份额alpha_cohort,p；纳入全部受益者、实际损失、失败、空驶及待机容量。q_j=sum(X_j,p*alpha_cohort,p)/N，其中X_j,p是未经参考流归一的卡片原单位实物量。若来源已归一，先恢复原总量与分母，再用匹配逐活动实物强度，归属并除原N一次。完整设备制造和终态采用同一寿命f；不设默认质量、寿命或强度。首次用前清洗、常规清洗和因果空箱清洗按c_services互斥登记；后者不重置常规窗。不得用路段份额代替、每成功单假定一次或把活动台账作为清单卡。 首次用前清洗的事件窗、终止证据及未归属负担结转采用calc_first_cleaning_window。 | cp_support_delivery_cleaning | 原始EPP箱完整清洗周期及唯一归属实物量 |  |
| activity_delivery_dispatch | u_delivery_dispatch_electricity; u_delivery_dispatch_water; u_delivery_dispatch_wastewater; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_premises_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。含失败订单的完整事务及资源时间日志用于向全部受益方分配实物总量。一次事务不等于一台服务器或名义设备小时；保留N及直接共享归属。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_delivery_dispatch | 原始one order-lifecycle transaction及唯一归属实物总量，不是服务产品 |  |
| activity_delivery_road | u_delivery_road_electricity; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_road_replacement_asphalt; u_delivery_road_removed_asphalt | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。原距离车辆活动仅用于分配；匹配路段类别期间及全部道路使用方寿命交通量，固定和可变池各一次；68031最终分母N，68039为D。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_delivery_road | 原始bicycle km及唯一归属实物总量，不是服务产品 |  |
| activity_delivery_charge_bay | u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_shelter_terminal | 原生活动定义、分配驱动及事件窗口也适用于对应 calc_interface_ 服务规则；以下实物数量计算及内部计量仅适用于 foreground_interface_method 下的前景实物分支。仅为原始活动台账，不是交换。服务活动仅保留为原始记录及分配依据，不生成替代活动交换。供应商实物行j及匹配期间p采用q_j=sum(X_j,p*alpha_cohort,p)/最终分母，alpha须有校准证据并纳入全部受益方；来源活动若已按参考流归一化，须先恢复其原始总量和分母；再用相容逐活动实物强度、归属及原最终分母各一次。实际损失、失败、空驶和闲置能力均保留在既定负担池。资本与终端残余使用同一f，不设默认设备质量、寿命或强度。保留c_charge_hours及allocation_charge_sources/zero：占位小时并集、实际同时使用装置份额、正源入库跨期结转、核实零入库直接因果集合固定当地日池，未知非零。全寿命分母由实际占用承担空置负担。带电电池导入不造新源或充电小时。所得归属仅作资本残余f，不以h作交换量。 既有每参考流活动诊断量须先还原原始活动才能实物拆分；不得作交换或二次归一化。 | cp_support_delivery_charge_bay | 原始nonoverlapping occupied bay h及唯一归属实物总量，不是服务产品 |  |
| calc_atomic_physical | u_delivery_maintenance_electricity; u_delivery_maintenance_water; u_delivery_maintenance_wastewater; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_lift_terminal; u_delivery_maintenance_replacement_battery; u_delivery_maintenance_replacement_tyre; u_delivery_maintenance_replacement_brake_pad; u_delivery_maintenance_removed_battery; u_delivery_maintenance_removed_tyre; u_delivery_maintenance_removed_brake_pad; u_delivery_cleaning_water; u_delivery_cleaning_electricity; u_delivery_cleaning_wastewater; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_electricity; u_delivery_dispatch_water; u_delivery_dispatch_wastewater; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_electricity; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_road_replacement_asphalt; u_delivery_road_removed_asphalt; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_shelter_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。对供应方相容区间j的运行实物流x，由计量、库存平衡、工单或相容的单物种/单材料单位清单取得本卡物理单位Q_x,j。若来源按活动单位提供强度，先算Q_x,j=强度_x,j*实际全使用者活动_j；不得用金额、通用服务排放篮子或未还原原分母的每参考流数值。再按固定过程驱动及全使用者份额，q_x=sum_j(Q_x,j*s_c,x,j)/N_ref，仅归一一次。卡用MJ时，电力kWh仅乘一次3.6；其他计数/质量/体积换算须有适用的实测配置单重、密度、浓度及水分。覆盖相同数量/期间/范围的共享表计或上游产品/服务须按实测重叠交叉表剔除，不能假定比例。 | cp_support_delivery_maintenance; cp_support_delivery_cleaning; cp_support_delivery_dispatch; cp_support_delivery_road; cp_support_delivery_charge_bay | 每原参考流的卡原生物理单位 |  |
| calc_atomic_capital | u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_shelter_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。逐实物资产序列号/批次a，以本卡单位确定实际制造/建造gate产品量Q_a。按过程/资产固定驱动及相同配置/容量单位，f_c,a=队列归属实物寿命活动_c,a/有证据完整寿命全使用者活动_a。制造q=sum(Q_a*f_c,a)/N_ref；每次初装及整机替换都建立独立资产批次，只计一次，不再作为当期维修整机投入。产品gate外的安装实物量采用同一被安装资产份额。按相容退役实测或有证据前瞻残余/再用/保留计划确定的寿终残余量，采用其自身单位、完全相同f_c,a及原参考流分母；实际保管转移仅核验/更新模型。较早拆出部件须从终态残余剔除。寿命和原受益队列按calc_capital_restatement全历史重算；寿命须证据和敏感性，不设数值默认。真实部件维修/替换按实际因果事件或固定供应方维修年份额分配，不再乘完整寿命份额。完整部件若作为独立投运资本资产再用，应另建自身序列号/寿命台账，不得两种处理同时采用。 | cp_support_delivery_maintenance; cp_support_delivery_cleaning; cp_support_delivery_dispatch; cp_support_delivery_road; cp_support_delivery_charge_bay | 制造产品及配对终态残余，相同寿命份额 |  |
| calc_capital_restatement | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 在本入口声明的适用范围内，按顺序完整执行规则组：calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version。采用本入口的输入、参考分母及输出；整组定义、条件、排除项和完成要求共同适用。各部分构成同一方法，不增加交换或重复分配。仅读取某个子规则不足以判定完成。同一事件出现在多个入口时，依既有归属及去重规则处理。 | cp_capital_restatement; calc_capital_restatement_driver_revision; calc_capital_restatement_source_correction; calc_capital_restatement_normalization; calc_capital_restatement_retirement; calc_capital_restatement_zero_activity; calc_capital_restatement_shared_driver_controls; calc_capital_restatement_background_version | 按各来源本征单位/原队列N_c；实物监管账独立 |  |
| capital_delivery_maintenance_workshop_building_manufacture | u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_building_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_maintenance_workshop_building_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/N。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_maintenance_workshop_building_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_maintenance | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_maintenance_workshop_lift_manufacture | u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_lift_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_maintenance_workshop_lift_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/N。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_maintenance_workshop_lift_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_maintenance | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_cleaning_cleaning_machine_manufacture | u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_cleaning_cleaning_machine_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/N。f=sum(实际实物设备活跃占用小时并集*唯一关联实际服务任务的队列份额)/该同一实物设备配置全部受益方有证据的全寿命活跃占用小时并集。任务关联采用关联服务任务的固定因果及全部受益归属，不因扫描、同时人员或任务增复制。闲置未用能力制造负担保留在由受益使用小时承担的完整设备量中，不造生产小时。保留设备数量乘f，不以小时代数量。缺少实际设备任务寿命映射阻断完成。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_cleaning_cleaning_machine_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_cleaning | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_dispatch_dispatch_terminal_manufacture | u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_terminal_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_dispatch_dispatch_terminal_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/N。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_dispatch_dispatch_terminal_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_dispatch | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_dispatch_dispatch_server_manufacture | u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_server_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_dispatch_dispatch_server_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/N。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_dispatch_dispatch_server_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_dispatch | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_dispatch_dispatch_network_manufacture | u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_network_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_dispatch_dispatch_network_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/N。f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_dispatch_dispatch_network_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_dispatch | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_dispatch_dispatch_premises_manufacture | u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_premises_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_dispatch_dispatch_premises_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/N。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_dispatch_dispatch_premises_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_dispatch | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_road_road_section_manufacture | u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_road_road_section_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/N。初建道路资本f为同一路段可归属队列道路空间时间/全部道路受益方有证据的全寿命道路空间时间；空置未用能力保留在全寿命负担，维度一致。初建道路资本不得用年度工程损坏份额。原道路终端残余用完全相同f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_road_road_section_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_road | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_charge_bay_charger_manufacture | u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_charger_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_charge_bay_charger_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/N。按calc_shared_charge_apparatus先在同配置实际占用端口间等分该资产并集小时，再按正来源或核实零分支归属；采用其同资产全用户并集寿命分母得到f_a，本行f_c,a=f_a。同资产终态沿用相同f；带电电池导入不造新小时。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_charge_bay_charger_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_charge_bay | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_charge_bay_socket_manufacture | u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_socket_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_charge_bay_socket_manufacture：Q_a为声明产品gate的实际未摊销Item(s)；q=sum(Q_a*f_c,a)/N。按calc_shared_charge_apparatus先在同配置实际占用端口间等分该资产并集小时，再按正来源或核实零分支归属；采用其同资产全用户并集寿命分母得到f_a，本行f_c,a=f_a。同资产终态沿用相同f；带电电池导入不造新小时。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_charge_bay_socket_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_charge_bay | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| capital_delivery_charge_bay_shelter_manufacture | u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_shelter_terminal | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。制造/建造行u_delivery_charge_bay_shelter_manufacture：Q_a为声明产品gate的实际未摊销m2；q=sum(Q_a*f_c,a)/N。产品量为匹配实际建筑或区段的实物面积。f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 终态行u_delivery_charge_bay_shelter_terminal：原生kg，q=sum(R_a*f_c,a)/N；关联同一序列号/批次及f_c,a，R_a是已不含先前拆件的终态净残余；仅在原始总量/BOM推导R_a时扣历史拆件一次，不从终态实测净残余再次扣减。 整机替换建立自身资产批次，不新增维修整机流；产品gate外独立安装采用同一份额。 静态寿命比值仅表示当前版本；寿命/来源变化与最终退役必须执行calc_capital_restatement并更正原队列，不能仅更新后续分母。 | cp_support_delivery_charge_bay | 每N的资产原生物理单位；终态自身原生单位，同f |  |
| calc_atomic_species | 所有基本实物流清单行 | 仅适用于 foreground_interface_method 的前景实物分支；服务数量执行接口规则。每张基本流卡对应一种物质或物理明确的颗粒载体，以及一个接收介质/子介质。采集实际物种/CAS或已验证化学身份、因子单位及质量/摩尔/碳表达、来源技术/燃料/负载、地点和接收介质。单物种实测排放或相容因子仅用一次。完整产品gate已含的工厂排放不得再列为供应方直接运行排放。颗粒粒径及去向份额互斥；物理颗粒不是虚构纯元素。NOx及NMVOC总量仅作QA观测，不替代基本交换。任何实际额外物种/材料必须在建模完成前拥有具体双语源卡、协议、单位、固定计算及正常投影，不使用选择器或族名占位卡。 | cp_support_delivery_maintenance; cp_support_delivery_cleaning; cp_support_delivery_dispatch; cp_support_delivery_road; cp_support_delivery_charge_bay | 逐接收介质的单物质或明确实物载体 |  |

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| calc_provider_maintenance_period | u_delivery_maintenance_replacement_battery; u_delivery_maintenance_replacement_tyre; u_delivery_maintenance_replacement_brake_pad; u_delivery_maintenance_removed_battery; u_delivery_maintenance_removed_tyre; u_delivery_maintenance_removed_brake_pad; u_delivery_road_replacement_asphalt; u_delivery_road_removed_asphalt | 逐共享常规供应方维护池，将区间y固定为站点当地日历年，记录时区及确切资产/场站/配置。跨年队列须拆为各年内活动。实际安装/消耗材料M_x,y及分别实测的产生废物采用同年s_c,y=队列归属受益驱动_y/全受益驱动_y，再q=sum_y(M_x,y*s_c,y)/N_ref，仅一次。驱动采用activity_*已固定的支持过程实物活动；车辆维护用实际车公里，空驶/失败先归属一次；变动道路养护用同年有证据逐车型工程损坏需求；建筑结构用保留楼面面积日历小时。其他共享支持设备用其既定实际全受益任务/周期/并集小时驱动，保留确切配置分层，不重复并发。签署维护工单须在计算前固定因果资产及任务池，不留给后续建模选择。特定事故/故障维修仅归证实因果订单/任务集合，不再进入年度常规池。真实组件消耗排除未用期初末库存、未安装退回及内部转移；拆出件产生保留原事件/年份/份额随以后保管转移。不假定投入与拆出件质量相同。真实组件维修只乘一次年度份额，不乘整寿命f；整机替换另建资本批次。正维护池无证据或全用户分母为零/未知均阻断完整性。此前引用的保留供应维护卡同样执行；各自产生/去向平衡及精确重叠排除仍强制。 | cp_support_delivery_maintenance; cp_support_delivery_road | 每原参考流原生物理单位 |  |
| c_services_activity_drivers | 原始支持活动诊断 | 本条属于 c_services。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。对每种固定供应方/作业/配置服务，q_j = 已归属的实际物理服务单位/N。在声明的代表性维修统计期间，逐资产：归属技工小时 = 实际维修技工小时总数 * 群组归属资产公里 / 同期全部受益资产公里；须纳入全部所有者/使用者，记录并行人数及作业类别；特定事故修理仅归属其因果订单，不再进入共享池。调度事务对应含失败单的所有独立已调度订单。道路公里采用c_routes。充电位小时采用c_charge_hours，包含经验证零入账的失败/取消事件。其他服务分母仍须为正并包含全使用者支持活动，证据缺失保持不完整。维修用实际技工小时、清洁用声明箱完整周期、调度用含失败单的订单生命周期事务、道路用自行车公里、充电位用占用小时。周期不是小时；不得按金额换算或假设每合格单一次。 | cp_services; cp_routes; cp_orders | 方法组成部分；清单结果归原入口 |  |
| c_services_diagnostic_only | 原始支持活动诊断 | 本条属于 c_services。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。q_j仅作活动诊断；须还原其原始分母，将匹配的供应方逐流清单对各独立实物行应用一次。 c_charge_hours的正来源与零入账分支互斥。每个充电位ID占用区间不得重叠；共享设备资本在全部充电位提供方间仅分配一次，不得每位各计整台设备。 这些仅为供应方原始活动诊断，不是清单交换。对应支持过程只使用分别具名实物行，采用原始活动及一次最终参考流归一化。 | cp_services; cp_routes; cp_orders | 方法组成部分；清单结果归原入口 |  |
| c_services_routine_cleaning_window | 原始支持活动诊断 | 本条属于 c_services。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐箱记录卸空与各清洗事件ID和时刻。常规窗只由同箱相邻两次常规清洗界定；窗内完成且已卸空的装载周期按calc_box_cycles累计全受益者用箱等效作分母，队列等效作分子。无此前常规清洗的首个常规窗从已记录首次装入开始。 | cp_services; cp_routes; cp_orders | 方法组成部分；清单结果归原入口 |  |
| c_services_first_cleaning_and_exceptions | 原始支持活动诊断 | 本条属于 c_services。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。首次用前清洗是独立实测事件，按calc_first_cleaning_window使用其后的受益窗口：以首次常规清洗关闭，若此前箱已永久退役则以有证永久退役关闭；未闭窗不得自行采用本期截断。实际因果空箱清洗直接归因果任务；其数量不进常规池，也不关闭或重置常规使用窗。每个装载周期只进入一次常规清洗前窗；同周期可作为独立首次用前清洗的分配驱动。清洗必须在已卸空时；须证卸空；应有正的适用分母，或在规则允许时有直接因果归属证据；不满足对应分支时保持未完成。 | cp_services; cp_routes; cp_orders | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_driver_revision | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐资产a保存有版本的全用户活动与每个原受益队列/分层c，按既有固定责任规则保留失败和空驶工作。u_c,a为截至当时归属该队列的实际驱动；U_a为相同配置和单位的有证完整寿命全用户驱动（已发生实际量加有依据的剩余预测）。U_a必须为正且不小于已发生全用户总量。f_c,a=u_c,a/U_a，不得把剩余活动当作U_a。每次寿命、活动、受益者、来源数量或终态路线变化，都重算全部受影响原队列，包括已报告队列；不得保留旧历史份额而仅对后续队列使用新寿命分母。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_source_correction | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。逐独立来源s按自身单位求A_s,c,new=Q_s,new*f_c,a。Q_s,new是当前有证、寿命分配前的完整制造/安装来源实物总量，不是扣除历史份额后的未摊余额，或匹配的净终态残余/完整生命周期来源量，不是已分配量。保留此前已记的归属原始量B_s,c及其原归一结果/版本；delta_A_s,c=A_s,c,new-B_s,c。新取得证据的终态来源B=0；已有来源的更正替换同一来源ID。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_normalization | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。使用该原队列当前已核实的参考分母N_c重算q_s,c=A_s,c,new/N_c；若N_c本身被更正，应替换旧结果，不得把delta_A/new_N直接加到以old_N形成的旧结果。剔除有记录重叠后才汇总各来源贡献。正负差额仅更正结果，不能形成负实物转移、替代抵扣或新增当期整机采购。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_retirement | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。最终退役时以完整实测全用户驱动替换U_a，重算全部f和来源量；寿命总活动为正时，所有受益者含非研究业务的份额和为一。实测终态净残余不得再次扣除历史拆出量。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_zero_activity | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。零产出事件保留其既有因果父队列及原分母，不能寻找无关的正产出期间。若原父队列没有正N_c，保留归属原始总量，归一结果保持未决。全寿命活动为零时，仅可凭证归属唯一投运委托责任，并使用同一原队列规则；否则保留未分配来源并阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_shared_driver_controls | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。资产制造、安装和终态负担采用相同更新f；毛库存、实物转移和退役另作实物监管账。对日历时间资产，u为已发生服务容量时间，按既有共享/类别规则向各原类别/期间仅归属一次，包含规则要求的空置/失败责任；U覆盖相同全用户日历容量。q不得再乘一次类别份额。历史不明、寿命/去向无依据或缺原分母时阻断完成。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |
| calc_capital_restatement_background_version | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 本条属于 calc_capital_restatement。执行前须读取对应入口列出的完整规则组：其定义、条件和排除项约束每个部分。仅采用该入口的实际事件范围及原分母；本条不是独立交换，也不是可单独累加的结果。若供应背景或处理模型版本改变但实物数量未变，也必须替换全部受影响原队列的相应链接清单和结果；不能因为实物delta_A=0而保留旧模型。 | cp_capital_restatement | 方法组成部分；清单结果归原入口 |  |


### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_completeness | 全部过程及清单行 | 使用已签署的实际活动纳入矩阵。条件不发生须有观察、设备及合同证据；缺数据/身份/去向为未解决，绝不计零。宣布前景包完整前，失败/未结案期间、实际其他包装、捕集磨耗及专用装备须通过明确原子扩展计入。 | 矩阵; 事件/资产检查; 未解决清单; 签署完整性审查 |
| quality_waste_origin | delivery_food_waste; delivery_bag_waste | 逐种普通固废核验产生责任、原队列/分层/分母、带来源库存平衡、有证据的实际或前瞻完整处理及后来回执替换。来源/去向/物理损失未知保持明确缺口；后来外运本身不能闭合或改归责任。污水及按寿命摊销资产寿终处理采用各自独立方法。 | 产生/库存/转移台账；有证据路线模型；原队列回执替换 |
| q_units | cp_orders; cp_power; cp_assets; cp_services; cp_materials; cp_wear | 保留原始单位、仪器、校准、时间戳、采样频次及覆盖。仅在需要时使用有基准的实测密度/组成/水分。不得把示例、估计或供应规格当作实测数据或合规限值。期间、地域、路线配置及餐食状态须匹配证据。 | 校准; 原文; 代表性及不确定性台账 |
| q_services | cp_services | 每个实际支持过程执行 foreground_interface_coverage。前景责任组成须具备具体实物清单；外部组成须具备具体服务接口、实测原生活动、记录的配置/接口/单位及兼容背景范围。不得将供应方内部化学品/资产/废物行作为额外前景采集要求。发票本身不能证明活动量或完整范围。接口身份/数量未知或存在未覆盖组成时仍阻断完整性；服务与已覆盖的对应实物明细互斥。 | 底层清单及组分映射; 重叠对账 |
| q_charge_events | activity_delivery_charge_bay; delivery_ac | 逐次占用充电事件核验来源总入账为正、已验证为零或未解决，不能仅凭净SOC分类。核对互斥来源/直接/因果集合/共享日份额、全部受益者、小时及实测损失。失败/取消的零入账小时仍计负担，不获合格产出抵扣；未知证据不等于零。核验从剩余路线能源池剔除直接事件用电，并保留完整寿命占用小时分母。 | 会话/来源/分支记录；表计占用对账；全使用者因果时间证据 |
| q_translation | 全部双语规则及机器投影 | 逐项核对双语及生成guidance的行身份、方向/类型、单位、UUID、协议、数量、公式、分母、条件、例外及禁止。结构marker不能证明科学批准或食品安全。 | 双语语义比较; 投影字段及可达性审查 |
| q_food_plan | cp_orders | 保留获准的本地食品安全验收及时间/温度监测方案，含责任、培训检查及检查失败处置；FSA/FSANZ指导仅支持卫生/温控证据，不提供全球数值默认值或认证本路线。 | 本地方案; 校准检查; 保管及处置证据 |

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_atomic_completeness | 所有已拆分的支持过程和物种 | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | 范围到实物行对账；供应/BOM/物种原件；签署缺口表 |
| quality_service_interfaces | svc_delivery_maintenance; svc_delivery_cleaning; svc_delivery_dispatch; svc_delivery_road; svc_delivery_charge_bay | 完整性按 foreground_interface_method 和 foreground_interface_coverage 分支判定。前景实物交换保留确切身份、原始计量、物种和库存对账要求。外部接口须具备一个明确服务/属性/单位、实测活动、确切供应方接口及兼容背景覆盖，不要求穷尽供应方内部BOM或资本账本。未知发生不等于未发生；真实未覆盖范围须列为缺口。未绑定的接口UUID/属性/单位组身份保留为具体行候选，直至官方直接证据及receipt解决。不得以接口名义使用未定义的多服务包，也不得用Item(s)代替小时、质量或运输活动量。 | cp_interface协议；签署的覆盖责任矩阵；原生单位对账；身份receipt |
| scope_interface_delivery_maintenance | u_delivery_maintenance_electricity; u_delivery_maintenance_water; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_replacement_battery; u_delivery_maintenance_replacement_tyre; u_delivery_maintenance_replacement_brake_pad; u_delivery_maintenance_wastewater; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_maintenance_removed_battery; u_delivery_maintenance_removed_tyre; u_delivery_maintenance_removed_brake_pad; svc_delivery_maintenance | 对 support_delivery_maintenance，svc_delivery_maintenance 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_delivery_cleaning | u_delivery_cleaning_water; u_delivery_cleaning_electricity; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_wastewater; u_delivery_cleaning_cleaning_machine_terminal; svc_delivery_cleaning | 对 support_delivery_cleaning，svc_delivery_cleaning 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_delivery_dispatch | u_delivery_dispatch_electricity; u_delivery_dispatch_water; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_wastewater; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; svc_delivery_dispatch | 对 support_delivery_dispatch，svc_delivery_dispatch 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_delivery_road | u_delivery_road_electricity; u_delivery_road_road_section_manufacture; u_delivery_road_replacement_asphalt; u_delivery_road_road_section_terminal; u_delivery_road_removed_asphalt; svc_delivery_road | 对 support_delivery_road，svc_delivery_road 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| scope_interface_delivery_charge_bay | u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal; svc_delivery_charge_bay | 对 support_delivery_charge_bay，svc_delivery_charge_bay 是 boundary_atomic_support 下的外部服务投入。所列对应实物行仅适用于运营方承担责任的前景组成，不是强制采集的供应方内部清单。每个事件/组成仅记录一个责任方和表达方式。保留合同服务排除的实物组成，仅排除有证据的重叠；部分合同不得停用整个过程。范围变化须更新覆盖矩阵及双语投影。 | 签署的前景/接口矩阵；合同排除项；实际组成记录 |
| inv_particle_identity | delivery_tyre_air; delivery_tyre_water; delivery_tyre_soil; delivery_brake_air; delivery_brake_water; delivery_brake_soil; delivery_road_air; delivery_road_water; delivery_road_soil | 粒径和接收子介质须匹配绑定流；采用互斥粒径，不得并计PM10及其PM2.5子集。 | 所列各清单行既有的采集协议和证据。 |
| inv_maintenance_scope | u_delivery_maintenance_electricity; u_delivery_maintenance_water; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_replacement_battery; u_delivery_maintenance_replacement_tyre; u_delivery_maintenance_replacement_brake_pad; u_delivery_maintenance_wastewater; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_maintenance_removed_battery; u_delivery_maintenance_removed_tyre; u_delivery_maintenance_removed_brake_pad | 独立实际自行车维修执行：更换实物产品、车间运行资本及拆除件处理；排除牵引能源及直接道路磨耗。 | 所列各清单行既有的采集协议和证据。 |
| inv_occurrence | u_delivery_maintenance_electricity; u_delivery_maintenance_water; u_delivery_maintenance_replacement_battery; u_delivery_maintenance_replacement_tyre; u_delivery_maintenance_replacement_brake_pad; u_delivery_maintenance_wastewater; u_delivery_maintenance_removed_battery; u_delivery_maintenance_removed_tyre; u_delivery_maintenance_removed_brake_pad; u_delivery_cleaning_water; u_delivery_cleaning_electricity; u_delivery_cleaning_wastewater; u_delivery_dispatch_electricity; u_delivery_dispatch_water; u_delivery_dispatch_wastewater; u_delivery_road_electricity; u_delivery_road_replacement_asphalt; u_delivery_road_removed_asphalt | 仅当匹配的实际供应商清单及实物记录证实该具体交换时启用；未发生须有肯定证据，未知不等于零。 | 所列各清单行既有的采集协议和证据。 |
| inv_physical_basis | u_delivery_maintenance_electricity; u_delivery_maintenance_water; u_delivery_maintenance_replacement_battery; u_delivery_maintenance_replacement_tyre; u_delivery_maintenance_replacement_brake_pad; u_delivery_maintenance_removed_battery; u_delivery_maintenance_removed_tyre; u_delivery_maintenance_removed_brake_pad; u_delivery_cleaning_water; u_delivery_cleaning_electricity; u_delivery_dispatch_electricity; u_delivery_dispatch_water; u_delivery_road_electricity | 规范编写前须确定实际牌号或型号、状态、实物单位及唯一归属；按规定活动依据分配实测实物量一次，不得以服务小时代替实物数量。 | 所列各清单行既有的采集协议和证据。 |
| inv_ac_basis | u_delivery_maintenance_electricity; u_delivery_cleaning_electricity; u_delivery_dispatch_electricity; u_delivery_road_electricity | 仅适用于独立证实的使用点交流电；此通用UUID不确定供应商、电网、电压或发电技术。表计kWh仅乘一次3.6转MJ；安装/维修与运行交流电的表计/阶段责任互斥。 | 所列各清单行既有的采集协议和证据。 |
| inv_asset_cohorts | u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_road_road_section_manufacture; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture | 仅当该实际且唯一识别的实物资产配置服务已声明服务范围时启用。每个初装资产及每个整机替换资产均须作为独立序列号或cohort，分别记录取得投用、寿命容量及退役。每个实物资产仅计一次，使用各自f；整机替换不是维护耗材。排除的仅为其他处显式核算的使用、实际部件维护及寿终模块。对每个独立识别的初装或整机替换资产cohort a，q_a=实际实物资产量_a*f_a/最终合格参考流分母，仅一次。每个cohort均有独立全寿命容量及原终端残余；汇总不同cohort，不再加一张整机更换材料卡。仅当实际更换部件与整机是不同实物且未在其他处包含时才作维护流。对每个实际初装或整机替换资产序列号或cohort分别应用该分母；不得将后继资产并入已退役资产，或按当期维护份额分配其整机全量。 | 所列各清单行既有的采集协议和证据。 |
| inv_construction_gate | u_delivery_maintenance_workshop_building_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_road_road_section_manufacture; u_delivery_charge_bay_shelter_manufacture | 该建筑、道路、跑道或遮棚实物产品以竣工交付为gate；上游建筑产品及现场施工运行须纳入该gate之前，不得因制造门标签而遗漏。 | 所列各清单行既有的采集协议和证据。 |
| inv_occupancy_driver | u_delivery_maintenance_workshop_building_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_charge_bay_shelter_manufacture | f=队列可归属占用面积时间/相同实际配置全部受益方有证据的全寿命占用面积时间。全寿命实际占用承担空置；预期寿命须有记录及不确定性，不设默认。修理为实际维修期间实物事件，不得每年重复资本f。 | 所列各清单行既有的采集协议和证据。 |
| inv_replacement_attribution | u_delivery_maintenance_workshop_lift_manufacture; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture | 原终端残余用完全相同f；实际部件更换按匹配维护期间因果归属；整机替换则建立独立分配的新资产cohort。 | 所列各清单行既有的采集协议和证据。 |
| inv_terminal_cohorts | u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 每个独立初装或整机替换资产序列号或cohort a的终端残余kg_a，采用其原生产或竣工交付产品完全相同的该资产cohort f_a，再除最终合格参考流分母一次。对账部件维护拆除物及保留复用库存；不得按转移日期再加废物。 | 所列各清单行既有的采集协议和证据。 |
| inv_cleaning_scope | u_delivery_cleaning_water; u_delivery_cleaning_electricity; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_wastewater; u_delivery_cleaning_cleaning_machine_terminal | 独立实际EPP配送箱清洗消毒及干燥，含实际水、每种明确清洗产品、能源、设备及处理；不预设标准配方。 | 所列各清单行既有的采集协议和证据。 |
| inv_dispatch_scope | u_delivery_dispatch_electricity; u_delivery_dispatch_water; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_wastewater; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal | 独立调度IT执行，从排程到定位、重试及结案，含实际终端网络服务器及所在设施生命周期；排除食品销售中介。 | 所列各清单行既有的采集协议和证据。 |
| inv_it_driver | u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture | f=sum(实际实物设备运行小时*匹配实测受益资源时间的队列份额)/该配置全部受益方有证据的全寿命实物设备运行小时。沿用原IT服务已固定的逐配置资源时间归属及全部使用方待机份额；保留实物设备数量乘f，不得以小时代数量。缺少供应商设备资源映射阻断完成，不虚构PUE容量权重或寿命。 | 所列各清单行既有的采集协议和证据。 |
| inv_road_scope | u_delivery_road_electricity; u_delivery_road_road_section_manufacture; u_delivery_road_replacement_asphalt; u_delivery_road_road_section_terminal; u_delivery_road_removed_asphalt | 铺装自行车路线实物基础设施支持，排除自行车牵引及直接路面磨耗。 | 所列各清单行既有的采集协议和证据。 |
| inv_charging_scope | u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 独立充电基础设施资本维护终端残余过程；充电器插座及专用遮棚为真实实物设备。充电含待机电仍由delivery_ac唯一归属。 | 所列各清单行既有的采集协议和证据。 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_reference | foreground_dataset_conformance | 要求全部限定信息元数据、收费证据、唯一订单/尝试台账、验收证据且N大于零。N排除部分签收、拒收、取消、食品损失及未结案；cp_orders须对账全部互斥终态。 |  |
| validate_service_interfaces | svc_delivery_maintenance; svc_delivery_cleaning; svc_delivery_dispatch; svc_delivery_road; svc_delivery_charge_bay | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |
| v_identity | foreground_dataset_conformance | 带UUID行须与官方记录状态、名称、流属性/单位、流类型及接收介质匹配。未绑定候选不是已验证身份。完整数据包须使每项适用流和上游服务绑定适当身份及证据；未知身份或未量化的实际活动仍为不完整，绝不得计零。 |  |
| v_projection | foreground_dataset_conformance | 验证行/协议/计算/来源可达性、互斥分配池、一次归一化、资产/服务重叠及废物载体/组分平衡。逐项比较双语及机器guidance的条件、禁止、公式和分母。实际存在但未建模的材料或排放须在完成前明确新增原子清单，不得隐含在集合卡或遗漏。 核验充电正来源/已验证零入账分支互斥且电力不重复分配。 检验A期产生留存废物、B期外运：原A责任及分母保留，实际证据替换同一事件模型，不再给B追加负担。 |  |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| validate_atomic_support | 所有支持过程和排放清单行 | 读取行数量前核对事件/组成责任矩阵。外部服务组成仅启用其接口；已覆盖的对应实物明细处于不适用状态，不是实测零。核对单一属性/单位、原生活动原始量、原全用户分配及仅一次最终归一；失败/返工/空驶事件遵循原队列规则。检验部分合同、自有能源/资产/保留废物、已分配供应方清单、零产出队列及补充覆盖缺失。拒绝重复计入、虚构身份/数量、强制采集供应方内部数据或无记录改变分支。核对双语及生成guidance中全部服务行ID和协议/规则引用。 |  |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| validate_capital_restatement | delivery_bike; delivery_box; delivery_bike_waste; delivery_box_waste; u_delivery_maintenance_workshop_building_manufacture; u_delivery_maintenance_workshop_lift_manufacture; u_delivery_maintenance_workshop_building_terminal; u_delivery_maintenance_workshop_lift_terminal; u_delivery_cleaning_cleaning_machine_manufacture; u_delivery_cleaning_cleaning_machine_terminal; u_delivery_dispatch_dispatch_terminal_manufacture; u_delivery_dispatch_dispatch_server_manufacture; u_delivery_dispatch_dispatch_network_manufacture; u_delivery_dispatch_dispatch_premises_manufacture; u_delivery_dispatch_dispatch_terminal_terminal; u_delivery_dispatch_dispatch_server_terminal; u_delivery_dispatch_dispatch_network_terminal; u_delivery_dispatch_dispatch_premises_terminal; u_delivery_road_road_section_manufacture; u_delivery_road_road_section_terminal; u_delivery_charge_bay_charger_manufacture; u_delivery_charge_bay_socket_manufacture; u_delivery_charge_bay_shelter_manufacture; u_delivery_charge_bay_charger_terminal; u_delivery_charge_bay_socket_terminal; u_delivery_charge_bay_shelter_terminal | 必须核对calc_capital_restatement的原队列/原分母、全用户驱动、来源版本、已记量及重算差额；禁止冻结旧历史再只改后续分母，禁止将退役余额转给无关当期产品，禁止负实物交换。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景本地热餐配送服务清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 具有完整采集、身份绑定及不确定性披露的声明自行车/被动箱热餐服务。 |
| excluded_use | 整餐足迹、整个CPC68031覆盖、冷藏/冷冻等价、主动温控/燃油路线、食品安全证书或未限定公开比较。 |
| required_metadata | 全部参考限定信息、主体/供应范围、群组/结果、GPS/停站台账、物理服务定义、资产寿命、食品验收、废物责任及上游清单边界。；充电分支及失败事件责任/时区记录；普通废物产生来源、原份额/分母、留存库存及处理修订链；签署的前景/接口责任矩阵、原生服务活动及背景覆盖；仅对前景责任组成保留原实物活动、制造/终态配对及物种基准 |
| required_quality_disclosure | 身份缺口、供应清单缺口、估计寿命/磨耗/去向、实测与估计字段、采样限制、不确定性/敏感性及采集完整性。 |
| update_trigger | 餐食状态、车/箱、温控方案、供应清单、收费/边界、分配、路线、磨耗因子、资产寿命或验收失败变化时须审查并重新生成。；充电事件证据/分支更正；后来普通废物回执/去向或产生量更正须更新原事件/队列模型；前景实物身份/物种变化或外部接口配置/单位/覆盖变化须复审适用具体卡并更新投影 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-68031 | official_guidance | UNSD, CPC Version 3.0, 68031 Local delivery services for food. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/68031 | 单独收费、购后即时/短时预约的本地食品配送；仅支持分类范围。 |
| fsa-food-delivery | official_guidance | Food Standards Agency, Food safety for food delivery (2020-03-26). https://www.gov.uk/government/publications/food-safety-for-food-delivery/food-safety-for-food-delivery | 卫生、密封容纳、运输责任及有记录的食品安全方案；区域指导，非全球数值限值。 |
| fsanz-food-transport | official_guidance | Food Standards Australia New Zealand, Transporting food (updated 2025-10-01). https://www.foodstandards.gov.au/business/charities/transporting | 被动保温容器、防污染及路线/时间/温度检查；法域条件不是通用默认值。 |
