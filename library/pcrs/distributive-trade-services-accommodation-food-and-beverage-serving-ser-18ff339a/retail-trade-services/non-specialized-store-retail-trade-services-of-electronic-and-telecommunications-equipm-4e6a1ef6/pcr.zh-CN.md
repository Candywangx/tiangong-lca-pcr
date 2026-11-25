---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-electronic-and-telecommunications-equipm-4e6a1ef6
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 原厂封装 TL-SG105 以太网交换机整包的非专门店零售服务

## 1. 范围与适用性

本候选仅限实际非专门店中未开封完整以太网交换机整包零售，提供部分增量服务核心及固定补全方法，不声称覆盖完整业务。适用性由 b_route 和 b_absence 控制，不由宽分类标题决定。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-electronic-and-telecommunications-equipm-4e6a1ef6 |
| classification_refs | CPC 3.0 62185; narrower |
| covered_products | 一种实际同质未开封 TL-SG105 完整零售整包配置的柜台零售 |
| excluded_products | 专门设备商店; 其他消费电子; 裸板/零件; 已录制介质; 开封/激活/演示/安装/二手整包; 网购发运/配送; 以设备制造代替服务输出 |
| representative_product | TP-Link TL-SG105 五口 10/100/1000 Mbps 以太网交换机零售整包; V2 官方功能证据，须核验实际批次/版本 |
| production_route | 完好到货→常温保存→柜台交付→最终验收/后到更正; 不通电 |
| market_state | 新的原厂密封完整原整包; 真实适配器/指南/包装范围; 不假定无电芯 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一包原厂封装 TL-SG105 交换机整包最终有效验收的零售服务 |
| How much | 1 个零售服务，不是 1 千克或额定网络容量 |
| How well | 实际版本/适配器/零售包装完好且接收人最终有效验收; 不推定安全/合规认证 |
| How long or cycle | 一个预先固定的门店/配置/批次观察窗口，并持续更正原池后到退货 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一包原厂封装 TL-SG105 交换机整包最终有效验收的零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 硬件版本; 适配器型号及市场插头; 供应商批次及完整包装 BOM; 原厂电芯状态; 非专门店证据; 收货门与柜台交付门; 分池日期及验收窗口; 最终有效 Q 与后到退货版本; 部分核心及补全状态 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `m_reference` | service_output | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 每个不同最终有效原整包计一个服务。本体/适配器/包装质量及额定 Mbps 为独立事实，不设个数到千克默认值。 |
| `m_power` | ac_retail | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 仅将实测归属千瓦时乘 3.6 换算兆焦，保留原电表及驱动量字段。 |
| `m_waste` | intact_kit_waste | 质量 | kg | 采用完整载体直接净称发运千克，独立于报废个数及最终验收 Q。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 原厂零售整包完好进入零售商保管; 上游制造另按供应商发货范围 |
| starting_condition_role | 零售保管交接点; F 原发货制造为明确的例外背景输入 |
| product_classification_scope | CPC62185 的 narrower 子集: 仅 4722 有线网络通信设备; 本子集不含 471/475/479 |
| recursive_input_rule | 不递归建模本服务本身的零售。failed_original_kit 明确关联 F 原制造; 仅具名保管卫星输出不表征。 |
| upstream_dataset_requirement | 实际同质整包供应商发货向量及独立 F 入场来源; 实际供电; 完整废物处理; b_partial 补全模块 |
| disclosure | 部分核心; 原来源责任/实物账独立; 全部未知来源及未绑定身份; 不声称完整业务或完整标准符合性 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `b_route` | retail; residual | 仅适用实体混合商品非专门店内的到店零售：常温室内保存、柜台交付新的未开封 TL-SG105 五口 10/100/1000 Mbps 以太网交换机整包。每个池固定一种实际硬件版本、市场插头/适配器型号、供应商批次包装 BOM 和验收规格。代表性官方 V2 数据表证明有线网络功能；制造商包装清单列有交换机、电源适配器及安装指南，但不证明实际库存、原厂无电芯、完整 BOM 或 LCI。须核验到货标签和供应商批次声明。本路线不打开整包、不通电、不接网线、不配置、不录制、不安装、不维修、不充电、不激活、不演示。实际发生任一操作时，在新增状态特定卡片和对齐协议前，本路线不可适用。品牌加盟或非独家授权不能证明非专门店。 | `un-cpc62185`; `un-cpc4722`; `tplink-v2`; `tplink-package` |
| `b_gates` | retail; residual | 前景起点为零售商记录完好的整包到货并取得保管责任；终点为柜台实物交付，并在声明的观察窗口后最终有效验收，后续退货仍须更正。共同 Q 是预先固定的配置/门店/批次池内，最终有效验收的不同原始整包 ID 数。无合格验收的外部持有不产生 Q；即使没有实物移动，撤销验收也仅移除该 ID 一次；仍有效验收的纯财务退款或折扣不改变 Q。重复尝试及转售沿用原始 ID，不另增最终有效原件数。拒收、从未验收的交付、退回、撤销、冲销、内部转移、确认失踪分别记录。结果发生前锁定分池；失败及零销售量期间仍保留。整个池 Q 为零时保留原始负担和去向并标明无法归一化，不能删除或虚构 Q。 | `ghg-product-2011` |
| `b_original` | failed_original_kit; supplier_return_kit; external_failed_kit; internal_transfer_kit; intact_kit_waste | 每个原始整包制造向量严格止于供应商发货：包含完整本体、实际内含的原厂适配器/附件/电芯、指南和完整原零售包装的主体/封口/衬层/标签/胶黏剂；须有供应商 BOM/批次证据和背景范围。门店不通电不代表原厂未测试或未内含电芯；原制造向量保留实际原厂测试阶段。按原始来源向量，将源等价整包数量分为 S 最终有效销售、F 零售商负责的不可逆损失/报废或验收失败仍由其负责的商品、T 具名且已签署接收的供应商/其他方/内部资产转移责任、O 已知开放库存或未决责任；O 分开已知开放与未知，未知阻断完整性。S+F+T+O 等于结转来源账与本期真正首次取得新来源中的不同源等价原整包数，original_kit_id/original_source_id 集合互斥。实物退回、重试或转售不重新取得原来源，也不再次加到结转/新来源总量；所有状态修订替换原行。failed_original_kit 产品输入仅承接一次 F，包括确认失踪的原始整包，不是第二次实物到货。增量零售服务排除成功 S 的制造；另行标明的下游 GOODS 系统可加一次 S。内部资产型 T 沿用同一原来源进入具名资产账，不得同时新增全整包及 F；T 须有背景责任接收签认并保留具名后继/来源；仅实物退供应商不证明 T。O 保留原开放/未决责任直至有证最终去向。不得按组件质量/数量比例拆异质环境向量。若适配器/电芯/包装有不同最终责任，完成前须取得经核验的供应商组件向量、实际组件数量/属性/单位及独立原子卡，严格守恒原来源向量；整包输入同时排除已拆出的组件。入场运输是单独强制补全项，不得臆定包含在发货制造向量。 | `ghg-product-2011`; `tplink-package` |
| `b_physical` | supplier_return_kit; external_failed_kit; internal_transfer_kit; intact_kit_waste | 三个具名产品卫星不新增制造背景或抵扣。supplier_return_kit 和 internal_transfer_kit 记录完好密封整包实际保管移动；external_failed_kit 仅是截止实际状态 QA 卫星：计当前在零售保管外、没有最终有效验收且仍完好密封的不同原整包 ID，并关联原交接。没有实物移动的撤销仅更新此状态，不新增交付，也绝不在商品库存式扣 N_ext；它不是第二次实物输出或废物发运。接收人/状态/日期和原责任独立于 S/F/T/O。实物库存采用仅商品账：closing_goods_count = opening_goods_count + receipts_count + customer_returns_to_goods_count + supplier_in_count - gross_customer_handover_count - supplier_return_count - internal_transfer_count - condemnation_count - confirmed_missing_goods_count + signed_goods_residual_count。所有客户移出均仅纳入一次 gross_customer_handover_count，包含从未验收的交付；没有移动的验收撤销只重分类原事件。报废是商品向暂存废物的内部状态转换。另记 closing_held_waste_kg = opening_held_waste_kg + condemned_kg + returned_direct_to_waste_kg - dispatched_kg - other_waste_transfer_kg - confirmed_missing_waste_kg + signed_waste_residual_kg。不能把个数等同千克，也不能重复扣报废和废物发运。逐次称量报废/退回载体并关联事件 ID；确认失踪与未解决有符号差额分别保留，未知差额阻断完整性。外部持有的验收失败整包不是零售商废物。已打开/破损/不完整设备须在完成前新增状态特定实物卡，intact_kit_waste 不覆盖这些状态。 | `ghg-product-2011` |
| `b_partial` | retail; residual | 本规则明确是部分增量服务核心：计数服务、零售商实测交流电、F 发货制造输入、保管卫星流和直接称量的完好整包废物发运。完整服务还须逐项补全适用缺源：F 入场及全部零售商控制运输；建筑/货架/灯具及收银/信息通信/安防资本；网络/支付/行政/安防服务；地面清洁及其物料/水/废物；额外搬运材料、供应商大箱/运输包装和完整废物处理。这些不能视为零，也不能借服务名称省略。须按 b_transport、b_support、b_digital、b_cleaning、b_materials、c_complete 和 cp_completion 执行；在声称完整前，双语增加有具体过程范围的原子卡/协议并再生成投影。此处已纳入的运行交流电须从重叠模块移除，不能重复。成功售出商品的客户使用及报废处于本零售服务之外。本路线不提供零售商配送/安装；客户运输位于柜台终点之外并单列披露。实际未匹配操作使核心不完整，不能自动判不存在。 | `ghg-product-2011` |
| `b_transport` | retail; residual | 逐一采集实际入场/退回/废物/资产/维修运输段的行程、车辆、停靠、各托运实载质量和体积、距离、原地怠速时长、载重限制及实际约束运力证据。先将实测行程来源数量拆为互斥实载分段、空驶分段及原地怠速来源，同单位总和须与完整行程对账。在行程来源层，只有实载质量约束时按各托运实测质量×分段距离占全部受益方总量分配；体积约束时按实占体积×分段距离分配。逐实际空驶段保留真实正值 empty_vehicle_km 和 empty_reserved_h；原地怠速独立记录 stationary_idle_h 及实测燃料/供应来源。空驶段来源按空驶车辆预约占用小时份额分配；怠速来源另按原地车辆预约占用小时份额分配，均纳入全部实际受服务托运和失败/空置预约。来源分母为匹配小时驱动量的已知正值全受益方和；同单位组件来源须与行程总量对账，保留非零空驶/怠速燃料或活动。未知或其他约束运力须经审查的匹配方法，否则不完整。供应方已分到托运层的数量仅跳过行程再分配，仍须原始 F/首次使用/资产历史责任份额；唯有已精确分到最终责任人/池/版本的数量才跳过两层。F 入场先将托运来源关联实际原整包 ID，再在该精确同质原来源内仅分一次 F 责任，绝不能以混合托运整包个数比例代替实测托运来源份额；S 到货运输为独立 GOODS 边界披露，不加核心。零售运行退货运输仍归属实际服务受益方。独立资产/维修/退役运输属于该资产，遵循 b_support 对全部历史份额的替换，不能全部压给当前 Q。核对精确段/阶段及供应范围；完整运输服务已含燃料时不另加。须新增实际运输产品服务卡及经核验的距离/质量距离/时间属性和单位，不用未定义个数。 | `ghg-product-2011` |
| `b_support` | retail; residual | 每项实际必要资产须落入有签证的同质型号/BOM/生命周期完整向量，或新增独立模块：建筑结构与货架以实测服务面积×时间（m2*h）为驱动；固定灯具/风扇及收银/信息通信/安防设备以实测预约占用设备时间（h）为驱动，含关店/闲置/失败预约占用；清洁抹布/拖把以实测清洁面积（m2）为驱动。向量排除商品、ac_retail 已含运行、另计维修及其他包。制造/安装、实际事件维修、终端载体/报废阶段互斥；完整生命周期包须证明已含运输/维修/处理并排除重复。对每个同质资产向量 V 和原受益期间 h，采集 e_recorded_h 与同单位预期全寿命 L，f_old_h=e_recorded_h/L；持续保留全部受益方及版本，累计份额不得超过 1。预期寿命改动时，以同单位 f_new_h=e_recorded_h/L_new 计算。寿命/BOM 改动时，对每个历史归属以 f_new_h*V_new 替换旧量，并将 delta_h=f_new_h*V_new-f_old_h*V_old 回记原池。退役时 f_final_h=e_actual_h/sum_all_h(e_actual_h)，重算全部历史，不能以当前剩余量捷径代替。总驱动量须已知且为正；未使用资产保留未决责任，不作除零。终端整载体直接净称千克已排除拆走部件，不能再扣或再乘制造份额。购入/退役数量仅用于库存核验，不在寿命分配外又作耗用品输入。门店整包转为演示设备时，同一 T 原来源及包装进入本账；通电/部件/电芯须先扩展。 | `ghg-product-2011` |
| `b_digital` | retail; residual | 网络、支付授权、行政与安防属于不同服务，除非实际签署的同一合同完整包证明具有一个计量分母及完整纳入范围。网络接入保留唯一连接区间和供应方来源小时，按全部受益方实测预约占用端点连接秒分配一次，含闲置/失败/空置预约；sum_all_endpoint_seconds 须已知且为正。共享支付/行政批次保留唯一事件 ID 和实际逐事件处理秒，各行份额含失败行合计为 1，sum_all_line_seconds 须已知且为正，不能给每个 SKU 各算一次全购物篮授权。摄像采集期采用冻结的带时间戳视野内受益面积×覆盖时长，区域/时段不重叠且包含全部受益方/空置预约；sum_all_capture_area_time 须已知且为正；字节时间保留沿用原始采集映射，不改按日后销量。适用时明确供应方 GB=10^9 字节、GiB=2^30 字节换算。已分至最终责任人的数量须保留精确原责任人/池/版本，否则仅乘一次实测责任份额。端点/设备电量如已覆盖则留在 ac_retail，资本按 b_support；不能重复连接小时电量或供应服务包。须按实际供应服务数量及原分母新增独立原子服务卡；网络接入本身不能覆盖支付/行政/安防后台。 | `ghg-product-2011` |
| `b_cleaning` | retail; residual | 按实际清洁制剂批次与事件补全地面/货架清洁：称量原完整制剂收货/领用并核实供应商配方/包装来源，使用校准入口供水表，废液直接净称或按声明温度下 V_discharge*rho_measured 计量；直接废液不得再扣蒸发/库存。自收货持续追踪原来源千克至累计互斥最终输出及当前互斥存量：未用密封库存、开封容器残留、已用/暂留的现场溶液或清洁工具残留、来源制剂进入的实际排液、发运抹布中的来源残留、发运容器残留、确认损失、未决差额。状态转换替换旧状态；新加冲洗水/污物不是原制剂千克。完整湿抹布/容器/液体载体分别称量；配方组成不等于完整载体质量。原制造/入场按首次使用领用加互斥使用前损失/报废仅归属一次，逐来源保留最终责任及来源千克守恒。优先采用原任务/来源直接归属。实际共享清洁事件逐受益方采用互斥实测 cleaning_driver_area_m2 = actual_cleaned_area_m2 + exclusive_reserved_failed_area_m2，保留唯一事件/区域预约，全受益方总和须已知且为正，同一面积不能重复。保留失败/空任务预约；零/未知总量不完整。重复工具资本使用自身实际清洁 m2 寿命，不采用失败预约驱动量。新增实际制剂、水、包装及每种签认接收废物载体原子卡，具有完整处理范围；不得重复稀释液中的水或工具包。直接发运载体千克不得再扣暂留库存。若实际仅干式清洁，保留签署方法与不存在湿清洁证据；不能由商品密封推定无湿清洁。 | `ghg-product-2011` |
| `b_absence` | retail; residual | 本路线要求有证据证明其实际服务区域不存在现场燃料燃烧、制冷/制冷剂设备、主动供暖/制冷、商品通电测试、气雾/重新包装操作。检查含共享设备与关店时段的设备/回路台账、维修日志和签署现场走查；未知不等于不存在。若实际存在，则在经审查的路线扩展明确实际燃料/物种/属性/单位、设备库存/内含转移及最终室外与非空气路径前，本候选仍部分/不适用；不能将内部设备泄漏直接当室外基本流。本适用门槛是路线限制，不是由标签证明。废物发运须有实际整包（含适配器、指南及包装）的签认接收和匹配完整处理；接收许可证/照片本身不证明适配性。未核实前明确保留处理不完整，不给处置抵扣。 | `ghg-product-2011` |
| `b_materials` | retail; residual | 实际打印小票时，逐原热敏纸卷称净纸，排除纸芯和另置包膜/纸箱，保留纸张涂层；追踪纸卷/打印任务 ID、已打印交付、未用卷、已打印中间库存、暂留纸、直接称量签认接收废纸及确认失踪来源千克。打印回路若已被 ac_retail 电表覆盖则留在其内，否则新增互斥来源。已打印中间库存同时跨期携带原纸及实际打印电源责任，以原来源/池/版本替换，不能旧池和随后领用各计一次。额外袋/大箱/运输包装须核验完整真实材料/包装型号和来源单位，记录首次使用及互斥使用前损失，再记录累计最终输出/当前互斥库存；重复使用不重计制造/入场。退供应商的未用来源保留未分配原责任。首次使用与使用前损失仅分配一次原制造/入场来源千克或完整来源个数；真实整包装不是纯聚合物质量。逐实际输入/输出载体、供应边界及直接发运废物处理新增具名原子卡。仅数字小票和无额外搬运材料须有签署交易/路线证据，不能假定。 | `ghg-product-2011` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| retail | 完好保存与柜台服务 | required | 全部适格池 | 部分增量零售核心 | service_output |
| residual | 失败来源责任与完好保管剩余 | conditional | 逐实际 F/退回/外部/内部/废物事件; 无事件时签证不存在 | 独立来源及实物去向 | service_output |

### 过程：完好保存与柜台服务（`retail`）

#### 输入

##### 产品流

###### 零售保存与柜台交流电（`ac_retail`）

实际零售商回路用电实测，商品交换机保持未打开/未通电；归属前保留供应方/电压并拆分来源池。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：E_MJ/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_power`
- 来源：`ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终有效柜台零售服务（`service_output`）

这是一个不同原整包最终验收的服务输出，不是一台制造交换机或一个网络连接。

- 选定流：一包原厂封装 TL-SG105 交换机整包最终有效验收的零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_events`
- 来源：`ghg-product-2011`

##### 废物流

##### 基本流

### 过程：失败来源责任与完好保管剩余（`residual`）

#### 输入

##### 产品流

###### F 归属原发货制造（`failed_original_kit`）

一个源等价同质完整整包：本体、实际内含适配器/附件/电芯、指南和原零售包装。将零售商负责的失败/丢失商品仅关联一次原制造，不是第二次到货，也不含入场运输。

- 选定流：供应商发货时原厂封装 TL-SG105 交换机零售整包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`tplink-package`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完好密封供应商退回（`supplier_return_kit`）

按供应商接收签认计实际交还实物；责任持续/转移须有证，不能由退款推定。不产生制造抵扣或新输入。

- 选定流：交还供应商的完好原厂封装 TL-SG105 零售整包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_ret/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

###### 截止时外部持有完好密封验收失败整包（`external_failed_kit`）

计截止时实际处于无有效验收且外部密封持有状态的不同原整包 ID，含从未验收与后来撤销的原件；关联原交接、实际接收人及背景责任。此 QA 状态不新增实物移动、Q 或自动废物。

- 选定流：截止时外部无有效验收持有的完好原厂封装 TL-SG105 零售整包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_ext/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

###### 完好密封整包移交内部责任（`internal_transfer_kit`）

同一原来源实物移至 T，转移交接点 仍密封；随后打开/使用须资产路线扩展并保留原制造来源。

- 选定流：移交具名内部资产保管的完好原厂封装 TL-SG105 零售整包
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_transfer/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

##### 废物流

###### 报废完好完整整包直接发运（`intact_kit_waste`）

实际完整密封废物载体含本体、适配器、指南与原零售包装；直接托运净质量只排除称量皮重。处理须接收全部实际组成及状态；打开/不完整商品需另一卡。

- 选定流：签认接收整包废物处理的报废完好密封 TL-SG105 完整零售整包
- 流属性/单位：质量 / kg
- 数量规则：W_dispatch_kg/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `a_electricity` | ac_retail | 优先采用互不重叠的独立回路表和专属事件区间。分配前将每个实测母表千瓦时分为不重叠的活跃/闲置设备/设施固定来源池，同单位小计须等于母表；只有母表确实包含时才扣子表。共享活跃收银/搬运电量按唯一事件内全部行的实测处理秒分配；闲置/固定设备电量按实测预约占用设备秒；设施照明/公共区域按实测服务 m2*h。纳入关店、失败、零销售量预约占用及全部受益方。各分母须已知且为正；零驱动来源未解决时仍不完整。不能将秒与 m2*h 相加为同一驱动量。只汇总可归属千瓦时，然后以 3.6 MJ/kWh 换算并除一次 Q。制造商额定功率、数据吞吐量及宣称节能率不是用电记录。 | `ghg-product-2011`; `tplink-v2`; `tplink-package` |
| `a_history` | retail; residual | 每个分子保留实际事件日期及来源/池/版本。后到的验收撤销/退货/转售替换原 Q、F/T/O 责任和原电力/支持分子归属，再更正发布原池，不得又压给新批次。运输、数字保留、清洁和资产历史沿用 b_transport/b_digital/b_cleaning/b_support 的原分配映射。背景责任改动不创造实物交换。不得重归一已知份额掩盖未知部分。不得自动给避免生产、回收或转售抵扣。 | `ghg-product-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_events` | retail | service_output | 唯一验收及保管事件账 | original_kit_id; hardware_version; adapter_model; plug_market; supplier_lot; packaging_BOM; factory_cell_state; receiving_gate; custody_event_id; physical_handover_time; acceptance_event_id; final_valid_acceptance; revocation_time; physical_return_time; financial_adjustment; repeat_attempt_id; refusal_reason; original_pool; cutoff; Q | 到货时扫描原序列/整包 ID 和实际批次标签，不打开零售包；取得签署供应商 BOM、适配器/电芯/包装声明及封口照片。逐柜台事件记录唯一保管与验收、接收人和时间戳；截止及每次后续通知时将退回核对至原件。缺标签/验收条件保持未决。 归属汇总方法：按 c_q 计最终有效原 ID; 原实物事件独立; Q 固定后才按每参考流 | 个; 时间戳; 版本 | 逐到货/事件; 每日对账; 截止及每次后到更正 | 原池全部营业/关店/失败/零销售量时段及后到退货 | 单个混合商店实际收货位/货架/柜台 | 每参考流 | 销售/序列追溯、供应商批次声明、封口照片、签署验收/撤销审核与时钟核查 |
| `cp_power` | retail | ac_retail | 电表与共享驱动量账 | parent_meter_id; submeter_id; parent_includes_submeter; meter_serial; calibration_date; timestamp_start; timestamp_end; source_kWh; source_class; event_id; beneficiary_id; active_line_seconds; reserved_device_seconds; served_area_m2; served_duration_h; all_beneficiary_driver; owner_share; provider_id; voltage; source_version; E_attr_kWh; E_MJ | 逐区间首尾读取经校准互斥回路表，分别采集收银事件处理秒、设备预约占用区间和实际服务面积图；采集前及换表后采用可追溯检查/负载并检验零点/时钟漂移；每日将含闲置/关店来源的电量核对母表账单，排除交换机额定瓦数。 归属汇总方法：先 a_electricity 再 c_ac; 保留原千瓦时及独立驱动量; 归属后按每参考流 | 千瓦时; 秒; 平方米; 小时 | 逐表区间/事件; 每日及截止对账 | 同一原池，含失败与关店预约占用 | 实际零售保存/收银/照明/信息通信回路及母表包含图 | 每参考流 | 校准证书、区间导出、回路图、事件计时抽核与母表对账 |
| `cp_residual` | residual | failed_original_kit; supplier_return_kit; external_failed_kit; internal_transfer_kit; intact_kit_waste | 来源责任与实物状态账 | original_kit_id; original_source_id; source_vector_version; supplier_dispatch_scope; S; F; T; O; N_F; custody_event_id; recipient_id; kit_state; N_ret; N_ext; N_transfer; opening_goods_count; receipts_count; customer_returns_to_goods_count; supplier_in_count; gross_customer_handover_count; supplier_return_count; internal_transfer_count; condemnation_count; confirmed_missing_goods_count; signed_goods_residual_count; closing_goods_count; gross_consignment_kg; tare_kg; W_dispatch_kg; accepted_constituents; treatment_scope; opening_held_waste_kg; condemned_kg; returned_direct_to_waste_kg; dispatched_kg; other_waste_transfer_kg; confirmed_missing_waste_kg; signed_waste_residual_kg; closing_held_waste_kg; scale_id; calibration_date; event_time; original_pool; Q; carried_in_original_source_ids; genuinely_new_original_source_ids; external_custody_at_cutoff; final_valid_acceptance | 逐转移检查完整密封状态；序列关联商品计数独立于废物称量。于实际保管交接点 用经校准且查皮重的秤称报废、废物退回、暂存与逐发运载体，保留接收方/全组成处理签认。供应商仅制造至发货的整包来源及全部 S/F/T/O 状态独立于库存对账。未知接收人/状态/差额须调查，不能置零或虚构废物。 归属汇总方法：先 b_original/b_physical; c_f/c_custody/c_waste 各仅除一次 Q; 原库存对账不归一 | 个; 千克; 时间戳 | 逐状态变更/托运; 每日库存及截止; 每次后到更正 | 全部原整包来源，含失踪、未决及失败批次 | 零售保管位和实际具名接收交接点 | 每参考流 | 供应商向量/BOM 范围、秤校准/皮重检查、接收签认、独立盘点和签署差额调查 |
| `cp_completion` | retail | service_output; ac_retail | 支持来源补全登记 | module_id; included_constituents; included_stages; original_source_id; event_id; asset_id; original_pool; source_version; attribution_level; owner_fraction; raw_numerator; core_raw_i; external_raw_i; z_i_m; D_original_m; Q; trip_id; segment_distance_km; loaded_mass_kg; occupied_volume_m3; binding_capacity; stationary_idle_h; empty_reserved_h; provider_scope; asset_model_BOM; e_recorded_h; expected_L; e_actual_h; all_h_exposure; f_old_h; f_new_h; V_old; V_new; delta_h; endpoint_connection_seconds; source_hours; payment_line_seconds; admin_line_seconds; capture_zone_m2; capture_duration_h; frozen_capture_map; retention_bytes_hours; GB_or_GiB; formulation_source_kg; first_use_kg; pre_use_loss_kg; sealed_unused_kg; opened_container_residue_kg; used_retained_kg; source_liquid_export_kg; wipe_residue_kg; dispatched_container_residue_kg; confirmed_loss_kg; signed_formulation_residual_kg; inlet_water_m3; effluent_net_kg; V_discharge; rho_measured; temperature_C; carrier_net_kg; cleaned_area_m2; absence_observation; overlap_resolution; source_raw_j; source_unit; driver_j_c; sum_all_c_driver_j_c; missing_owner_fraction_c; L_new; measured_terminal_net_kg; asset_transport_raw; repair_event_raw; sum_all_endpoint_seconds; event_source_quantity; line_processing_seconds; sum_all_line_seconds; sum_all_capture_area_time; formulation_receipt_kg; cumulative_source_final_exports_kg; sum_all_cleaned_area_m2; material_receipt_net; material_source_unit; cumulative_final_source_exports; exclusive_current_source_stocks; first_use_quantity; disjoint_pre_use_loss_quantity; confirmed_missing_material; signed_material_residual; receipt_roll_id; print_job_id; printed_WIP_source; print_meter_raw; carried_in_original_source_ids; genuinely_new_original_source_ids; external_custody_at_cutoff; final_valid_acceptance; empty_vehicle_km; reserved_stationary_h; disjoint_pre_use_F_kg; w_m_h; G_m; D_m; G_clean_h; D_clean_h; actual_cleaned_area_m2; exclusive_reserved_failed_area_m2; cleaning_driver_area_m2; sum_all_cleaning_driver_area_m2; capture_id; beneficiary_id; area_i_h; duration_i_h; sum_all_capture_area_time_i; w_i_h; actual_capture_source_i; actual_retained_bytes_i; actual_retention_h_i; actual_capture_bytehours_i; sum_all_capture_bytehours; actual_storage_provider_total_raw; actual_storage_provider_denominator; actual_storage_provider_vector; capture_raw_i_h; storage_bytehours_i_h; storage_provider_raw_i_h; camera_source_mode; exact_owner_pool_version; capture_source_id; actual_capture_denominator; actual_capture_vector; storage_provider_source_id | 完成前取得实际合同/供应活动导出、资产 BOM/寿命历史、行程/托运单、地面清洁/来源状态测量和签署路线不存在检查；记录每个原来源/责任、仪器/校准、分母及时间戳。逐具名来源记适用/不存在/未知，跨供应方核对实际组成。为实际纳入模块新增独立原子卡和单过程协议；cp_completion 仅是共享原账视图，不是合并交换或虚构服务包。 归属汇总方法：先 b_transport/b_support/b_digital/b_cleaning 再 c_complete; 保留原量或恢复 z*D，再同质逐行相加并仅除一次最终 Q | 实际来源单位; 千克; 立方米; 千米; 小时; 秒; 平方米; 字节*小时 | 逐来源/事件/版本; 每日活动; 采集首尾及最终退役 | 完整原批次及全部资产历史受益方和来源状态历史 | 具名实际运输/供应方/资产/清洁区域，关联原零售池 | 每参考流 | 签署范围排除、来源/版本账、校准记录、全受益方对账、账单与阶段重复审核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `c_q` | service_output | Q = 截止时 final_valid_acceptance=true 的不同 original_kit_id 数；仅 Q>0 时 service_output=Q/Q=1 个。撤销采用替换集合成员，不再额外减撤销数。 | original_kit_id; final_valid_acceptance; cutoff; Q; cp_events | 一项最终有效服务 | `ghg-product-2011` |
| `c_f` | failed_original_kit | N_F=按 b_original 从互斥结转/真正新原来源 ID 归为 F 的原完整整包源等价数量之和；failed_original_kit=N_F/Q。保留 S/F/T/O 来源向量守恒及供应商仅制造至发货范围，不能重复乘 F。 | N_F; S; F; T; O; original_source_id; source_vector_version; supplier_dispatch_scope; Q; cp_residual; carried_in_original_source_ids; genuinely_new_original_source_ids | 每参考流原整包当量 | `ghg-product-2011` |
| `c_ac` | ac_retail | E_attr_kWh=按 a_electricity 归属的互斥 source_kWh*owner_share 之和；E_MJ=3.6*E_attr_kWh；ac_retail=E_MJ/Q。独立计量来源不重复扣减；完成前上游电力组合须匹配实际供应方/时段/电压。 | source_kWh; owner_share; source_class; parent_meter_id; submeter_id; parent_includes_submeter; active_line_seconds; reserved_device_seconds; served_area_m2; served_duration_h; all_beneficiary_driver; E_attr_kWh; E_MJ; Q; cp_power | 每参考流归属兆焦 | `ghg-product-2011` |
| `c_custody` | supplier_return_kit; external_failed_kit; internal_transfer_kit | N_ret、N_transfer 是互斥唯一保管事件集中的实际完好密封移动总量。N_ext=计 external_custody_at_cutoff=true、final_valid_acceptance=false 且 kit_state=intact_sealed 的不同 original_kit_id。各自分子仅除一次 Q。N_ext 仅为截止状态 QA，不是另一移出或商品库存扣减；无移动撤销仅替换状态。S/F/T/O 不产生实物移动。b_physical 中独立个数与千克式仅供核验。 | N_ret; N_ext; N_transfer; custody_event_id; recipient_id; kit_state; opening_goods_count; receipts_count; customer_returns_to_goods_count; supplier_in_count; gross_customer_handover_count; supplier_return_count; internal_transfer_count; condemnation_count; confirmed_missing_goods_count; signed_goods_residual_count; closing_goods_count; Q; cp_residual; external_custody_at_cutoff; final_valid_acceptance; original_kit_id | 每参考流保管移动个数及独立截止状态个数 | `ghg-product-2011` |
| `c_waste` | intact_kit_waste | W_dispatch_kg=签认接收的完好完整整包废物托运实测 gross_consignment_kg-tare_kg 之和；intact_kit_waste=W_dispatch_kg/Q。直接称量已包含实际剩余载体，不再乘库存/去向/组成份额。b_physical 的暂存废物千克式仅检验完整性。 | gross_consignment_kg; tare_kg; W_dispatch_kg; accepted_constituents; treatment_scope; opening_held_waste_kg; condemned_kg; returned_direct_to_waste_kg; dispatched_kg; other_waste_transfer_kg; confirmed_missing_waste_kg; signed_waste_residual_kg; closing_held_waste_kg; Q; cp_residual | 每参考流直接发运废物千克 | `ghg-product-2011` |
| `c_complete` | retail; residual | 逐交换 i/属性/单位单独形成 final_i=(core_raw_i+互斥兼容 external_raw_i 之和)/Q。各行核心原分子分别是 N_F、E_MJ、N_ret、N_ext、N_transfer、W_dispatch_kg 及 Q，不能跨不同清单行相加。若模块给归一化 z_i_m，则按其实际原分母/池/版本恢复 external_raw_i=z_i_m*D_original_m，再仅施加尚未分配的来源/责任份额及版本替换；外部原分子直接保留原量。按组成/事件/时间/资产/生命周期阶段和原来源 ID 去重，不能只看供应方 ID。不得从另一模块再加 N_F。模块须具有完全相同 Q/批次/路线和原日期，否则先依据保留原记录再归属。只能加同一已核验交换/属性/单位，拒绝千克加兆焦、原量加归一量或未解决重叠。来源/分母/范围缺失或身份未绑定时不得声称完整服务。 | core_raw_i; external_raw_i; z_i_m; D_original_m; original_source_id; owner_fraction; attribution_level; original_pool; source_version; included_constituents; included_stages; Q; cp_completion | 扩展后才有完整兼容归一化清单 | `ghg-product-2011` |
| `c_transport` | retail; residual | 逐实测来源段 j 执行 b_transport：attributed_raw_c=sum source_raw_j*(driver_j_c/sum_all_c_driver_j_c)*missing_owner_fraction_c。来源已属最终责任人时跳过两层，已属托运层时仅跳过第一层。实载驱动量为实际约束 kg*km 或 m3*km，空驶为空驶车辆预约占用小时，怠速另为原地车辆预约占用小时，保持独立；保留实际正值 empty_vehicle_km 和 stationary_idle_h 来源活动；此前将供应方归一量恢复 z*D。F 入场责任关联原来源向量 ID；资产运输沿用 c_asset 历史。 | source_raw_j; source_unit; driver_j_c; sum_all_c_driver_j_c; missing_owner_fraction_c; attribution_level; original_source_id; original_pool; source_version; trip_id; segment_distance_km; loaded_mass_kg; occupied_volume_m3; binding_capacity; stationary_idle_h; empty_reserved_h; provider_scope; z_i_m; D_original_m; cp_completion; empty_vehicle_km; reserved_stationary_h | 按精确责任归属的运输原分子 | `ghg-product-2011` |
| `c_asset` | retail; residual | 按 b_support 执行当前 f_h=e_recorded_h/expected_L、修订 f_new_h=e_recorded_h/L_new、最终 f_final_h=e_actual_h/all_h_exposure。每个原历史受益方以 f_new_h*V_new 替换分子并保留 delta_h=f_new_h*V_new-f_old_h*V_old；最终退役使用 f_final_h。另测资产运输/维修/终端载体仅施加一次同一历史份额，已到最终责任人的数量不重复乘。 | asset_id; asset_model_BOM; original_source_id; original_pool; source_version; e_recorded_h; expected_L; L_new; e_actual_h; all_h_exposure; f_old_h; f_new_h; V_old; V_new; delta_h; attribution_level; measured_terminal_net_kg; asset_transport_raw; repair_event_raw; cp_completion | 已替换历史资产原分子 | `ghg-product-2011` |
| `c_digital` | retail; residual | 逐服务来源执行 b_digital：网络 attributed_raw=source_hours*endpoint_connection_seconds/sum_all_endpoint_seconds；支付/行政 attributed_raw=event_source_quantity*line_processing_seconds/sum_all_line_seconds。对每个原采集期 i 和受益方 h，冻结 w_i_h=area_i_h*duration_i_h/sum_all_capture_area_time_i，采用全部受益方（含失败/空置预约）互斥实际视野面积与覆盖时长，sum_all_capture_area_time_i 须已知且为正。直接采集期模式：capture_raw_i_h=actual_capture_source_i*w_i_h；storage_bytehours_i_h=actual_retained_bytes_i*actual_retention_h_i*w_i_h。采集与存储须分别匹配实际供应方数量、原分母及所含向量；字节*小时不是电量或采集次数。只有实际存储供应总量跨多个采集期时才可使用 storage_total_bytehours 模式：先将任何归一化存储量恢复 z*D，再按 storage_provider_raw_i_h=actual_storage_provider_total_raw*(actual_capture_bytehours_i/sum_all_capture_bytehours)*w_i_h 归属，其中 actual_capture_bytehours_i=actual_retained_bytes_i*actual_retention_h_i，已知正值总和覆盖全部受存储服务的采集期并含失败/空置预约。本分配仅分配存储，未来留存时长不得重分原采集生产或其向量。采集生产固定为 original_capture_direct 模式，capture_raw_i_h=actual_capture_source_i*w_i_h，并具备经核验的原 capture_source_id、actual_capture_denominator、actual_capture_vector。若只有未分解的采集生产总量，则在取得可核实 actual_capture_source_i 数量前，本窄方法不完整，不能临时选择其他驱动量。存储采用独立 storage_provider_source_id、actual_storage_provider_denominator、actual_storage_provider_vector。同一存储来源的 storage_per_capture_direct 与 storage_total_bytehours 模式互斥。唯有存储数量已精确归至责任人/池/版本时，才跳过其对应已完成的存储采集期/责任层；仅已分到采集期不能跳过尚缺的冻结受益映射。保留原 frozen_capture_map 和来源/版本历史。各来源分子单位不同，不能合成一个驱动量；每个尚缺归属层只施加一次。 | source_hours; endpoint_connection_seconds; sum_all_endpoint_seconds; event_source_quantity; source_unit; payment_line_seconds; admin_line_seconds; line_processing_seconds; sum_all_line_seconds; capture_zone_m2; capture_duration_h; sum_all_capture_area_time; frozen_capture_map; retention_bytes_hours; GB_or_GiB; missing_owner_fraction_c; attribution_level; z_i_m; D_original_m; cp_completion; capture_id; beneficiary_id; area_i_h; duration_i_h; sum_all_capture_area_time_i; w_i_h; actual_capture_source_i; actual_retained_bytes_i; actual_retention_h_i; actual_capture_bytehours_i; sum_all_capture_bytehours; actual_storage_provider_total_raw; actual_storage_provider_denominator; actual_storage_provider_vector; capture_raw_i_h; storage_bytehours_i_h; storage_provider_raw_i_h; camera_source_mode; exact_owner_pool_version; capture_source_id; actual_capture_denominator; actual_capture_vector; storage_provider_source_id | 独立数字服务原分子 | `ghg-product-2011` |
| `c_cleaning` | retail; residual | 逐原制剂批次按 b_cleaning 执行：状态替换后 formulation_receipt_kg = cumulative_source_final_exports_kg + sealed_unused_kg + opened_container_residue_kg + used_retained_kg + confirmed_loss_kg + signed_formulation_residual_kg。最终输出含 source_liquid_export_kg、实际发运抹布的 wipe_residue_kg、dispatched_container_residue_kg，三者互斥；留在现场溶液/工具中的来源残留仅在 used_retained_kg。disjoint_pre_use_F_kg = pre_use_loss_kg，二者是同一实测原来源/事件的使用前不可逆损失，不是两个独立加项。first_use_kg+pre_use_loss_kg 仅确定新增原来源责任，不再作为第二组最终输出相加。对原制剂来源 m 及最终责任 h，w_m_h 为直接归属的 first_use_kg 加 disjoint_pre_use_F_kg，或共享事件的该数量乘实测 cleaning_driver_area_m2/sum_all_cleaning_driver_area_m2 一次。G_m 是经核实的每原制剂来源千克供应商发货制造向量；D_m 是先完成托运至来源分配后，单独核实的每该来源千克入场向量。G_clean_h=sum_m(G_m*w_m_h)、D_clean_h=sum_m(D_m*w_m_h)，各向量组件保留实际单位，仅在 c_complete 除一次 Q。完整制剂包装向量排除另计包装制造/入场；阶段不能核验分离时不完整。实际事件原载体/水/电量直接归属任务，或按 cleaning_driver_area_m2/sum_all_cleaning_driver_area_m2 仅分一次；直接废液模式为实测 effluent_net_kg 或 V_discharge*rho_measured，二选一。 | formulation_receipt_kg; cumulative_source_final_exports_kg; first_use_kg; pre_use_loss_kg; sealed_unused_kg; opened_container_residue_kg; used_retained_kg; source_liquid_export_kg; wipe_residue_kg; dispatched_container_residue_kg; confirmed_loss_kg; signed_formulation_residual_kg; inlet_water_m3; effluent_net_kg; V_discharge; rho_measured; temperature_C; carrier_net_kg; cleaned_area_m2; sum_all_cleaned_area_m2; original_source_id; original_pool; source_version; cp_completion; disjoint_pre_use_F_kg; w_m_h; G_m; D_m; G_clean_h; D_clean_h; actual_cleaned_area_m2; exclusive_reserved_failed_area_m2; cleaning_driver_area_m2; sum_all_cleaning_driver_area_m2 | 来源守恒的清洁原分子 | `ghg-product-2011` |
| `c_materials` | retail; residual | 逐来源与原池按 b_materials 执行：material_receipt_net = cumulative_final_source_exports + exclusive_current_source_stocks + confirmed_missing_material + signed_material_residual。制造/入场按匹配实际来源单位的 first_use_quantity+disjoint_pre_use_loss_quantity 仅归属一次。Printed_WIP_source 与 print_meter_raw 采用责任/版本替换转移，不得新旧双计。直接废物 carrier_net_kg 独立于原来源千克，不再重复扣库存。 | material_receipt_net; material_source_unit; cumulative_final_source_exports; exclusive_current_source_stocks; first_use_quantity; disjoint_pre_use_loss_quantity; confirmed_missing_material; signed_material_residual; receipt_roll_id; print_job_id; printed_WIP_source; print_meter_raw; carrier_net_kg; original_source_id; original_pool; source_version; cp_completion | 材料及打印原分子 | `ghg-product-2011` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `q_identity` | all inventory rows | 数据包完整前，每个未绑定行须匹配一个官方直读流及其精确状态/类型/属性/单位和中文名，并在数据包证据保留原响应/哈希/回执。service_output 必须是真实零售服务而非硬件；failed_original_kit 必须是有证的原完整整包。ac_retail 仅是使用点交流电身份，仍需实际上游供电。历史身份观察不是当前批准。 | 直读原件/回执及逐行绑定表; 供应商批次 BOM |
| `q_complete` | retail; residual | 在 b_partial 全部来源补全或有路线兼容的不存在证据前保留部分核心披露。未知数量、接收人、组件向量、处理、共享驱动量或分母阻断完整性；不能用标称质量/功率、隐式零或经济默认。汇总前每个额外实际交换须有具体双语卡/协议及再生成指导。 | 纳入/不存在/未知补全登记、来源阶段比对及双语投影审核 |
| `q_history` | retail; residual | 完整保留事件/资产/来源版本，迟到退货或寿命修订时替换全部受影响原池。个数、千克、同单位千瓦时及原来源向量独立对账。披露不确定性/覆盖，不得隐藏有符号差额或重归一已知份额。 | 版本/差量链、原始平衡和最终责任对账 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `v_reference` | service_output | 须有实际同质密封整包配置、非专门渠道证据、收货门和交付门 和最终有效 Q 集合；归一化须 Q>0 且限定信息齐备。保留零 Q 原批次，并同步修订原分子/分母/去向。 | `ghg-product-2011` |
| `v_inventory` | all inventory rows | 核对逐卡方向/类型/状态及唯一属性/单位；各最终量使用 reference_flow 和 calculated_value/calculated_from_collection，精确服务公式例外。核验原协议成员、单过程范围及 c_f/c_ac/c_custody/c_waste Inputs 和完整规则。未绑定身份明确保留。只有三个具名保管卫星流不表征；failed_original_kit 及真实废物处理绝不能被此规则排除。 | `ghg-product-2011` |
| `v_completion` | retail; residual | 须独立闭合商品个数和暂存废物千克、原来源 S/F/T/O 守恒、完整载体接收签认、全受益方来源分配、供应商发货/入场分离及 c_complete 同单位原量汇总。部分核心不得宣传完整零售生命周期清单或作完整服务比较。解析/检查成功不赋予科学或映射批准。 | `ghg-product-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 部分增量零售服务前景核心 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 透明部分核心研究; 仅经核验 b_partial 扩展和 c_complete 汇总后才有完整服务; 独立 GOODS 系统仅加一次成功原制造 |
| excluded_use | 完整业务/全部电子产品覆盖; 代替商品制造; 未协调边界便与完整服务数据集比较 |
| required_metadata | 硬件版本; 适配器型号及市场插头; 供应商批次及完整包装 BOM; 原厂电芯状态; 非专门店证据; 收货门与柜台交付门; 分池日期及验收窗口; 最终有效 Q 与后到退货版本; 部分核心及补全状态 |
| required_quality_disclosure | 原始与归属分子、Q 集合/版本、实际来源与实物平衡、S/F/T/O、未绑定身份、缺源、签证不存在与不确定性 |
| update_trigger | 后到验收/退货/状态变更; 供应商 BOM/版本; 门店/路线变更; 来源、寿命或供应方修订 |

## 11. 数据源

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un-cpc62185 | official_guidance | United Nations CPC 3.0 subclass 62185 explanatory note. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62185 | 真实商品组 471、4722、475、479; 仅非专门渠道分类语境 |
| un-cpc4722 | official_guidance | United Nations CPC 3.0 class 4722. https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/4722 | 有线/局域网络设备范围; 较窄子集，不赋予映射批准 |
| tplink-v2 | standard | TP-LINK TL-SG105 / TL-SG108 Datasheet, 2015 V2 official original. https://static.tp-link.com/resources/document/TL-SG105_V2_Datasheet.pdf | TL-SG105 五口有线交换及外置适配器功能; 版本特定历史规格，不是 LCI/实际电量 |
| tplink-package | standard | TP-Link Nordic TL-SG105 official specifications, Package Content. https://www.tp-link.com/nordic/business-networking/unmanaged-switch/tl-sg105/ | 交换机/适配器/安装指南整包描述; 实际批次/完整包装/电芯/LCI 仍须供应商证据 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters 6, 7 and 9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅服务单位/参考及细分/实物分配概念。路线、S/F/T/O、资产/运输/数字/清洁公式是须实际记录的本 PCR 方法; 不提供数值因子，也不声称完整标准符合性 |
