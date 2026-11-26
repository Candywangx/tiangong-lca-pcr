---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-books-newspapers-magazines-and-stationery
language: zh-CN
status: candidate
content_maturity: authored_methodology
sync_with: pcr.en-US.md
---

# 同版次全新大众平装书柜台零售服务

## 1. 范围与适用性

本窄方法面向实体非专门店中同版次全新大众平装书的增量柜台零售服务，固定验收与实物副本责任，并将商品制造与零售运行分开。直接卡片集为部分边界，完整服务声明必须完成下游补全。不规定数值环境因子或通用书重。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-books-newspapers-magazines-and-stationery |
| classification_refs | CPC 3.0 62151; narrower |
| covered_products | 同版次全新大众平装书的柜台零售服务 |
| excluded_products | 同池其他书籍规格/版次；所有非图书商品；线上送货；印刷制造；拆分组件退回 |
| representative_product | 同版次全新大众平装书柜台零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 首次接收 → 书架/柜台搬运 → 顾客验收；明确退回/残余历史 |
| market_state | 完整全新无单独包膜的装订印刷书；唯一跟踪每本实物，不是每笔 ISBN 交易 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一本最终有效验收的全新大众平装书柜台零售服务 |
| How much | 一本最终有效验收的原始实物副本 |
| How well | 柜台交接完整、全新、正确同质版次及约定状态，声明关闭时验收有效 |
| How long or cycle | 预先定义同配置池，截至关闭的全部尝试/闲置/退回历史；迟到事件修订原池 |
| reference_flow_link | accepted_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一本最终有效验收的全新大众平装书柜台零售服务 |
| 参考流属性 | 物品数量 (`01846770-4cfe-4a25-8ad9-919d8d378345`) |
| 参考单位组 | 数量 (`5beb6eed-33a9-47b8-9ede-1dfe8f679159`) |
| 参考单位 | Item(s) |
| 必需限定信息 | ISBN-13; 出版品牌; 版次与印次; 装订与页数; 接收完整书本状态; 场址与非专门店渠道; 池期间与关闭日; 最终验收规则; 原始副本 ID 谱系; S/F/O/T 背景责任; 部分边界与补全状态 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | accepted_service | 物品数量 | Item(s) | Q 是最终有效的不同原始副本；每参考流输出一次服务，不是书籍制造或毛实物交接。 |
| custody_count | original_receipt; customer_return; customer_handover; supplier_return; internal_transfer | 物品数量 | Item(s) | 实际完整书本过界本数及状态；不假定每本 kg 或制造因子。 |
| energy_unit | counter_ac | 净热值, 低位热值 | MJ | 实测 kWh；1 kWh=3.6 MJ；另保留上游供电身份。 |
| waste_mass | whole_book_waste | 质量 | kg | 观察含水/污染状态下实际完整装订废物载体净外运质量；kg 和书本数独立测量，不按页数转换。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 完整印刷书位于首次零售接收门；上游制造/入店背景仍有责任归属 |
| starting_condition_role | foreground_start |
| product_classification_scope | 非专门店服务中印刷图书零售的窄子集 |
| recursive_input_rule | 退回副本保留相同原始 G/H 来源，绝不递归为新制造 |
| upstream_dataset_requirement | 实际整书或组件 G、首次入店 H、供电及全部部分边界强制补全来源 |
| disclosure | 原始 ID；同质配置；门；毛保管；最终 Q；S/F/O/T；排除项和未知补全 |

| rule_id | Rule | source_ids |
| --- | --- | --- |
| b_product_family | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| boundary_scope | 仅适用于实体非专门店销售完整全新大众平装书：每个同质池只能包含同一 ISBN-13、出版品牌、版次/印次、装订、页数规格及接收状态。Signet 352 页 ISBN 所声明大众平装书版次 是有证据的代表产品，不证明其他版次适用；同 ISBN 下的实际版次变化仍须记录。排除二手书、精装书、报纸、杂志、地图、文具、电子书、订阅、印刷、撕封面及拆页。 | un-cpc-paperback-retail; prh-paperback-specification |
| boundary_service | 起点为完整书本首次进入零售商接收门，终点为顾客在柜台有效验收；纳入检查、上架、浏览相关搬运、结账、拒收、返工、持有库存以及截至声明关闭日的逆向处理。实际完整书本必须无单独包膜/腰封。本路线不含送货、礼品包装、零售袋或打印小票；使用电子凭证，但不得假定其网络负荷为零。核对实际操作；出现此类活动须先增加明确双语原子交换扩展，才可宣称路线完整。 |  |
| boundary_partial | 本记录是部分增量柜台服务清单：卡片包括卫星实物保管记账、实测柜台交流电和实际完整书本废物外运。全部保管产品卡是卫星观察，不是连接上游制造的技术系统投入或新增服务产品，须标记并排除影响连接。本部分边界同时排除 S 与 F 的原始制造和首次入店运输；补全增量服务时必须加入原始 F 背景、共享店铺运行、入店/退回/内部转运、建筑及收银/书架资本、交流电上游供应、电子凭证/支付服务、进货包装和废物处理。这些是必须补全的责任，不是零负荷。应用 complete_modules 及 allocate_support、allocate_transport、allocate_asset、validate_completion 的固定方法；仅凭卡片不得宣称完整店铺、摇篮到大门或摇篮到坟墓结果。 |  |
| boundary_background | 每个原始首次接收 ID 保留实际完整书本的供应方制造清单向量 G_i 和首次入店运输向量 H_i，以及原始数量、分母、边界、来源 ID 和版本。匹配实际纸张、印刷油墨、装订胶和封面/涂饰清单，或经核验的整书供应方包；页数或售价不是制造数量。供应方整包和组件构建互斥。顾客退回或再次销售的保管卡不得重新取得 G_i 或 H_i。 |  |
| boundary_fates | 每本原始书只能分到当前 S（最终有效验收）、F（零售商负责的永久失败/损失）、O（未结零售库存或终态未明）或 T（由具名接收系统继续承担原始背景责任）之一。实物接收人和状态独立跟踪，包括完整可售书退供应方、内部转移、丢失及外部保留但验收失效。T 须有签署的接收责任及原始来源 ID 交接；供应方退款本身不能证明 T。接收人/责任未知保留 O 并阻止补全；外部保留不得自动记为零售商废物。 |  |
| boundary_failure | 本部分卡片集同时排除 F 与 S 的 G_i+H_i。增量服务补全组合必须经 original_background 和 complete_modules 加入 F 的原始 G_i+H_i 一次；S 背景作为排除的商品向量保留，用于下游商品加服务组合。O 结转，T 交给其具名系统。F/O 书本后来再售时，替换旧终态及原服务分子/分母版本：先冲销旧 F 背景分配再分到 S，不得保留 F 费用并新增一次制造。完整商品加服务组合加入 S 原始背景一次、F 原始背景一次，O/T 待结责任不计入本次。 |  |
| boundary_ambient | 本路线要求干燥常温店铺，在服务边界及相关共享房东范围均无现场燃烧、无外购冷热、无含制冷剂设备。开始及每次变更时取得签署的全场址/房东设备、燃料购入及公用设施边界证据，含将共享来源池的其他部门。存在性未知或确认存在时，本路线不适用，直到独立审查的路线固定实际燃料/制冷剂外界释放方法；不得记为零或默默排除。水性人工表面清洁按 allocate_cleaning 补全。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| counter | 平装书接收、存储及销售 | required | 每个池含失败和闲置时段 | foreground_service | 每参考流 1 Item(s) |
| residual | 实物逆向及残余处理 | conditional | 实际退供应方、转移或废物外运时存在；不存在须有签署无事件记录，未知属未解决 | reverse_handling | 相同最终 Q，不以废物或退回作为服务输出 |

### 过程：柜台处理（`counter`）

#### 输入

##### 产品流

###### 原始完整书本接收（`original_receipt`）

原始完整书本接收：按 custody_normalize 以首次实物接收本数 / Q；经 cp_background 单独保留原始 G/H。 其中实物保管卡只作卫星记账，不连接新制造背景。

计算规则：custody_normalize; stock_balance; original_background。

- 选定流：零售商首次接收门处的完整全新大众平装书
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`; 单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则：按 第8节对应规则 以首次实物接收本数 / Q；经 cp_background 单独保留原始 G/H。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_events`
- 来源：

###### 顾客实物退回（`customer_return`）

顾客实物退回：按 custody_normalize 以完整副本毛实物退回本数 / Q；不新加制造背景，检查实际可售状态。 其中实物保管卡只作卫星记账，不连接新制造背景。

计算规则：custody_normalize; stock_balance。

- 选定流：顾客实物退回的完整大众平装书
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`; 单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则：按 第8节对应规则 以完整副本毛实物退回本数 / Q；不新加制造背景，检查实际可售状态。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_events`
- 来源：

###### 柜台电力（`counter_ac`）

柜台电力：按 allocate_counter 后应用 energy_normalize；不绑定供应方的使用点交流电，须提供实际供应方/电压/期间。 该电力投入属于进行影响表征的部分服务清单，不是卫星保管观察。

计算规则：energy_normalize。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66`; 单位组 `93a60a57-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：按 allocate_counter 后应用 第8节对应规则；不绑定供应方的使用点交流电，须提供实际供应方/电压/期间。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_energy`
- 来源：

#### 输出

##### 产品流

###### 毛实物书本交接（`customer_handover`）

毛实物书本交接：按 custody_normalize 以毛实物交接本数 / Q，含重复和后来验收失效；不得自动把该本数等同 Q。 其中实物保管卡只作卫星记账，不连接新制造背景。

计算规则：custody_normalize; stock_balance。

- 选定流：实物交给顾客的完整大众平装书
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`; 单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则：按 第8节对应规则 以毛实物交接本数 / Q，含重复和后来验收失效；不得自动把该本数等同 Q。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_events`
- 来源：

###### 有效验收零售服务（`accepted_service`）

有效验收零售服务：每参考流 1 Item(s)；service_count 用 Q 本有效验收不同原始副本定义同质服务池。 本行定义定量参考服务输出，不是卫星保管观察。

计算规则：service_count; original_background; complete_modules。

- 选定流：一本最终有效验收的全新大众平装书柜台零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`; 单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_events`
- 来源：

### 过程：逆向及残余处理（`residual`）

#### 输出

##### 产品流

###### 供应方实物退回（`supplier_return`）

供应方实物退回：按 custody_normalize 以实际完整可售书毛交接本数 / Q；财务退款或单独 T 责任不等于实物退回。 其中实物保管卡只作卫星记账，不连接新制造背景。

计算规则：custody_normalize; stock_balance。

- 选定流：退给供应方的完整未售可售大众平装书
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`; 单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则：按 第8节对应规则 以实际完整可售书毛交接本数 / Q；财务退款或单独 T 责任不等于实物退回。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

###### 内部实物转移（`internal_transfer`）

内部实物转移：按 custody_normalize 以实际完整可售副本交接本数 / Q；保留具名接收地点及原始制造责任。 其中实物保管卡只作卫星记账，不连接新制造背景。

计算规则：custody_normalize; stock_balance。

- 选定流：转给另一零售地点的完整可售大众平装书
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345`; 单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` / Item(s)
- 数量规则：按 第8节对应规则 以实际完整可售副本交接本数 / Q；保留具名接收地点及原始制造责任。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

##### 废物流

###### 实际完整书本废物外运（`whole_book_waste`）

实际完整书本废物外运：按 waste_normalize 直接净外运载体 kg / Q；保留含水/污染观察和本数。不得以纯纸替代或整书与组件重复。 该实际废物输出属于部分服务清单，其终末处理仍为独立补全模块，不是卫星保管观察。

计算规则：waste_normalize; stock_balance。

- 选定流：废弃完整装订大众平装书，油墨纸张胶封面混合物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66`; 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` / kg
- 数量规则：按 第8节对应规则 直接净外运载体 kg / Q；保留含水/污染观察和本数。不得以纯纸替代或整书与组件重复。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：

## 7. 分配与共产品处理

| rule_id | Rule | source_ids |
| --- | --- | --- |
| allocate_events | 预先声明同一配置池及关闭规则，纳入全部失败和零销售时段。Q 为关闭时顾客最终验收仍有效的不同原始 ID 数，每个仅计一次；不是交易数、扫码数、毛交接减去第二次撤销、销售额或实物库存。即使无实物退回，验收撤销也删除该 ID；有效验收下纯退款/折扣不删除。真实后续验收至多恢复同一 ID 一次。迟到事件按实际日期替换原池分子、Q 和终态；不得在新期间再次分配该修正。整个 Q=0 池保留未归一化全部分子，按预先允许规则并入后续同配置池，或明确保持不可归一化。 |  |
| allocate_counter | 先细分专用柜台电表。共享柜台将实测母表电能拆成互斥的活动、待机和闭店闲置子池，均用 kWh，合计核对母表。活动子池按所有实际商品含失败事件的搬运/结账秒数分配；待机/闭店闲置按所有受益者预留柜台秒数分配。每个子池仅用秒/秒分配驱动量。保留失败和闲置预留；总分配驱动量未知或为零阻止分配。相加归属 kWh 后仅转换一次 MJ、除一次 Q。只有母表包含子表时才能扣除；独立互斥电表不得重复扣除。 | wri-product-allocation |
| allocate_support | 补全店铺运行来源时使用实测互斥来源池：照明/共享暖通按预留面积时间（m2*h/m2*h），专用存储按占用书架体积时间（m3*h/m3*h），电子凭证/支付按直接计量任务活动或已归属且声明边界的供应方任务清单。每个来源 j、物理子池 k，N_jb=sum_k X_jk*d_bjk/sum_all_b d_bjk。不得把秒、m2*h、m3*h 或任务数加成同一分配驱动量。保留闭店/闲置/失败时段和其他所有部门受益者。建立来源拓扑，仅从真实包含柜台用电的店铺母表中扣除此电量。运行或清洁存在性未知均阻止完整补全。无燃烧/无外购冷热/无制冷剂全场址路线须有 boundary_ambient 不存在证据；确认存在则不适用，不留作下游方法选择。完整前每个实际清洁来源均应用 allocate_cleaning。 | wri-product-allocation |
| allocate_transport | 运输补全固定实际路线 R、行程/路段 s、完整实测来源清单 X_s 及每位受益者 b。供应方已归属货件清单保留原分配；此时路段记录只核实覆盖。否则固定分配驱动量为实际预留载荷 kg 乘实际预留路段 h：d_sb=r_sb_kg*t_sb_h；X_sb=X_s*d_sb/sum_all_b d_sb。记录实际容量 kg 和已用 kg 核对；不得按未利用运力份额缩小 X_s，保留全部非生产来源活动。空返和静止闲置路段按各路线受益者实际合同预留载荷 kg 乘完整实际空返/闲置路段 h，以同一比值分配；即使载货 t*km 为零也保留实际空返 km 和静止闲置 h。完整实测 X_s 仍分配给真实全部路线受益者，含失败/零销售预留；总预留未知或为零须审查，不得删除。供应方须覆盖观察的空返/闲置来源分子，否则补入分别实测的车辆距离/时间来源行并去重，不得从 t*km=0 虚构零活动。仅相加兼容交换分子。原始 H 的首次入店来源不得再次进入这些模块；H 外实际逆向/内部运输保留来源 ID 和接收门。 |  |
| allocate_asset | 资本补全将实际建筑主体/安装及固定照明/暖通设施置于一个经核验完整设施包或互斥明确资产；书架、柜台、扫描器、终端及路由器须单列，除非签署完整包确实包含其具体型号。制造/安装、运行、按事件的维修/更换及终末处置边界互斥。每项资产 a 用 e_ab/L_a，分子和预计全寿命分母必须同单位：设施用预留面积时间，书架用体积时间，结账设备用预留设备 h，并含闲置/失败及全部历史受益者。寿命台账分配 N_ab=X_a*e_ab/L_a，不得每期新加 X_a。每次寿命修订替换所有历史分配，累计 <=1；报废时按实际全历史受益者分配最终残差并核对总量为 X_a。终末完整设备/包净质量只乘此最终寿命责任份额一次，不再乘制造份额，不得从已扣除拆件的净重再扣拆件。不得猜测寿命、设备质量或把维修材料质量藏入完整设备。 |  |
| allocate_waste | 废物行采用直接称量外运完整书本载体 kg，扣除运输外包装皮重；完整书本是实际油墨/纸张/胶/封面混合物，不是纯纸。不得把其组件重复新增为废物。另保留废书本数和留存待运废物 kg。报废认定是商品转为待运废物的内部状态变化，不是外运。可售库存退供应方属于产品保管，不是废物或回收抵扣。废物处理和实际运输仍为独立核验补全模块，不自动给避免制造收益。 |  |
| allocate_cleaning | 补全时识别每种实际水性清洁配方 j，记录供应方原始完整组成及购入配方 kg P_j；不得用活性成分 kg 代替完整溶液。进口自来水/漂洗水按入水体积和实测密度另计；入水不得扣内部回用，配方内水不得重复加入。保留原始配方来源 kg 台账 P_j+opening_source_j=unused_return_j+held_source_j+final_liquid_source_j+final_wipe_source_j+spill_source_j+other_final_source_j，各终态互斥且排除后加漂洗水/污物。已用到漂洗的转移替换中间状态，不是新增最终去向。对于原始清洁配方容器，other_final_source_j 包括 container_dispatch_residue_source_j，即实际随原容器作为终末废物外运残液中的原始配方来源 kg，不包括已分到 unused_return_j 的未用产品退回；不包括关闭时仍留在容器内的 container_held_residue_source_j，后者仍属于 held_source_j。按原容器 ID 和外运/关闭日期分别记录这两个量。实际完整原容器及其残液作为一个载体称量：original_container_with_residue_net_kg = original_container_gross_dispatch_kg - original_container_external_tare_kg；只扣外部运输皮重，不扣原容器本体、封口或残液。此直接称量载体与单独外运的自由水性液体及湿擦布载体互斥，不得另将同一原容器记为无残液容器废物输出。按直接载体 kg 只应用一次经核验终末处理/运输，不再乘配方来源份额。原容器制造采用其实际完整包或互斥组件 BOM 来源清单；残液来源 kg 是独立责任/核对数量，不是第二个载体量。实际整股水性液体外运用毛重减实测容器皮重，只以 kg 直接称量：不得从直接外运扣蒸发/回用水，不用水量平衡重建。采集溶解配方/商品/污物来源份额用于核对，不再给载体 kg 乘第二次份额。保留实际完整湿棉擦布外运载体 kg，其来源份额与液体互斥；干可重复用棉布制造、实际漂洗运行及其终末湿载体分开，棉布采用自身实测清洁面积 m2 / 预计全寿命清洁面积 m2 台账。可重复用完整清洁桶制造用预留使用 h / 全寿命预留使用 h；终末完整桶净 kg 只乘最终相同寿命责任一次。一次性容器和实际额外化学品身份在补全前须有原子卡/协议，原始整包制造与组件 BOM 模式互斥。共享清洁来源分子按每位实际受益者实测清洁面积 m2 分配，保留零销售/闲置期清洁；整载体处理/运输供应方范围须排除重复投入和公用设施。配方、来源终态、载体数量、寿命或处理覆盖未知均阻止补全。 |  |
| allocate_incoming_carton | 进货包装补全采用实际一次性完整瓦楞运输纸箱及其封口，作为一个有界实物包：须核验供应方型号及完整箱体/瓦楞芯/面纸/胶/油墨/封口 BOM，并取得实际完整包数量及不含书的净质量。选择每实际整包的供应方制造清单，或组件 BOM 重建，二者不得并用；本数转 kg 只用此实测完整包。每个实际运件包装来源分子按预留载荷 kg*预留运件 h 分配给所有所装物，保留空/失败预留活动并核对全部物品。实际废纸箱/封口净外运 kg 是一个完整载体，不含留存书本质量及未纳入运输载体；不得把内含组件再加为前景废物。完整前增加具名包装制造及终末载体卡，保留原始来源 ID。本路线排除托盘/薄膜包裹及可重复用运输包，除非明确审查过的状态扩展提供互斥来源/资产/退回责任；包范围不确定阻止补全。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_events | counter | original_receipt; customer_return; customer_handover; accepted_service | foreground_records | 池 ID; 配置; ISBN; 出版品牌; 版次; 印次; 装订; 页数; 状态; original_id; event_id; crossing_id; 事件日期; 首次接收门; 方向; 接收人; 状态; crossing_count; 验收状态; 撤销原因; 纯财务标志; opening_saleable; opening_held_count; first_receipts; returns_count; closing_saleable; closing_held_count; handovers_count; loss_count; closure; final_acceptance_state | 每次接收/售出/退回过界扫描原始实物副本 ID；每日柜台记录与签署验收及盘点核对，ISBN 本身不是副本 ID。检查实际版次/状态，跟踪拒收/重复和零销售事件；保留实际时序和迟到版本替换。 各行毛过界数 / Q；最终验收不同本数给出 Q，再令每参考流 accepted_service=1。 | Item(s) | 每次事件/时段；每日核对；配置/寿命变更时 | 全池及全部关联原始/历史版本，不删除失败/闭店/零销售时段 | 具名店铺、供应方边界及实际全部受益者范围 | 每参考流 | 签署接收/验收记录；每日库存核对；不可覆盖的事件版本台账 |
| cp_energy | counter | counter_ac | foreground_records | 电表 ID; 电路拓扑; 起止时间戳; parent_kWh; active_kWh; standby_kWh; idle_kWh; 全部受益者 ID; active_seconds; reserved_seconds; E_attributed_kWh; 供应方; 电压; 地域; 期间; 校准; Q | 逐时段及每日开闭店读取经校准的实际电能表，匹配带时戳结账及预留记录；测量包括扫描器/终端待机的完整柜台供电；扣子表前核实电路包含关系。 按 allocate_counter 分配完整互斥来源池；每参考流 3.6 * E_attributed_kWh / Q MJ。 | kWh | 每次事件/时段；每日核对；配置/寿命变更时 | 全池及全部关联原始/历史版本，不删除失败/闭店/零销售时段 | 具名店铺、供应方边界及实际全部受益者范围 | 每参考流 | 电表校准及电路审核；子池合计等于母表；全部受益者秒数台账 |
| cp_residual | residual | supplier_return; internal_transfer; whole_book_waste | foreground_records | original_id; crossing_id; 事件日期; 接收人; 状态; crossing_count; supplier_count; transfer_count; consignment_id; gross_kg; outer_tare_kg; waste_count; opening_held_kg; generation_kg; closing_held_kg; 报废认定本数; 关闭日; 终态; Q | 每次实际供应方/内部交接清点签署完整副本。废物实际外运时用校准秤称载体毛重和实测外包装皮重，含真实装订书本组分；检查并剔除非书污染物。每日保留待运废物本数及 kg；核对报废认定及外运，不重复扣除。撕封面/拆页路线在完整前必须有新卡。 whole_book_waste 用直接外运 kg / Q；supplier_return、internal_transfer 用实际毛交接本数 / Q；仅责任变化不产生实物交换。 | kg; Item(s) | 每次事件/时段；每日核对；配置/寿命变更时 | 全池及全部关联原始/历史版本，不删除失败/闭店/零销售时段 | 具名店铺、供应方边界及实际全部受益者范围 | 每参考流 | 校准秤检查；皮重证据；签署运单及去向/状态记录；不存在时的实物无事件证据 |
| cp_background | counter | accepted_service | foreground_records | original_id; source_id; version; 首次门; supplier_original_quantity; supplier_original_denominator; G_i; H_i; 完整书本 BOM; 整包排除项; 原始来源数量; S; F; O; T; 接收方签署; 迟到事件替换; Q | 连接背景前采集实际供应方整书制造和首次入店清单；独立核验版次、实物副本、完整组件覆盖及原始分母。每个原始来源核对到一个当前终态及签署持续责任。每次关闭及迟到事件复查；数量/身份未明保持明确。 按原始 ID 保留 G/H 原始兼容向量；只应用一次 original_background，部分卡片同时排除 S 和 F；增量服务补全纳入 F 一次。 | source-native units | 每次事件/时段；每日核对；配置/寿命变更时 | 全池及全部关联原始/历史版本，不删除失败/闭店/零销售时段 | 具名店铺、供应方边界及实际全部受益者范围 | 每参考流 | 供应方原始清单及完整型号/BOM 证据；原始路线记录；签署责任台账 |
| cp_support | counter | accepted_service | foreground_records | module_id; source_id; version; boundary; 运行/存在性调查; 供应方覆盖范围; normalized_value_jm; original_denominator_m; raw_numerator; X_jk; d_bjk; 全部受益者 ID; 分配驱动量单位; 行程/路段 s; X_s; r_sb_kg; t_sb_h; capacity_kg; utilized_kg; route_reservation_kg; 载货 km; 空返 km; idle_h; P_j; opening_source_j; unused_return_j; held_source_j; final_liquid_source_j; final_wipe_source_j; spill_source_j; other_final_source_j; container_dispatch_residue_source_j; container_held_residue_source_j; original_container_id; original_container_dispatch_date; original_container_closure_date; original_container_gross_dispatch_kg; original_container_external_tare_kg; original_container_with_residue_net_kg; mains_volume; water_density; liquid_gross_kg; liquid_container_tare_kg; wet_wipe_kg; cloth_cleaned_m2; cloth_lifetime_m2; bucket_reserved_h; bucket_lifetime_h; carton_model; carton_BOM; carton_count; carton_net_kg; carton_carrier_dispatch_kg; shipment_reserved_kg; shipment_reserved_h; Q | 开始/变更时调查实际店铺、包装、电子服务方及路线；采集完整声明周期电表及逐时段全受益者物理分配驱动量、每次行程/闲置事件及供应方原始清单。记录存在/不存在证据及整包排除项；方法未知阻止完整补全。每次原容器实际外运时，用校准秤测完整容器加残液载体毛 kg 和外部运输皮重 kg，保留原容器 ID 及外运日期，并由可追溯配方/质量记录独立确定残液中的原配方来源 kg。关闭时另记留存容器残液来源 kg；这些互斥来源数量分别核对到 other_final_source_j 和 held_source_j，不给直接载体 kg 乘份额。按 boundary_ambient 取得签署全场址及房东无燃料/无外购冷热/无制冷剂证据；存在或未知则不适用。应用 allocate_cleaning 的来源 kg、直接整载体 kg 及全寿命布/桶方法，以及 allocate_incoming_carton 的完整包/BOM 和实测载体方法；实际清洁身份/载体在集成前须有具名原子卡/协议。 依 allocate_support、allocate_transport、allocate_cleaning、allocate_incoming_carton 还原并分配未分配来源分子，去重后 complete_modules，最终 Q 只除一次。 | source-native units; same-unit drivers | 每次事件/时段；每日核对；配置/寿命变更时 | 全池及全部关联原始/历史版本，不删除失败/闭店/零销售时段 | 具名店铺、供应方边界及实际全部受益者范围 | 每参考流 | 电表/路线核对；供应方空返/闲置证据；全部部门分母；原始来源 ID 重叠矩阵 |
| cp_assets | counter | accepted_service | foreground_records | asset_id; 实际型号; 整包范围; source_id; version; X_a; 制造/安装数量; 购置日期; 所有历史受益者; e_ab; exposure_unit; L_a; life_version; 旧分配; 维修/更换事件 ID; 退役日期; terminal_net_kg; 拆件模式; 最终残差; Q | 读取签署供应方整资产清单/BOM 及实际安装记录；全寿命逐时段记录所有受益者含闲置的预留暴露量。实际事件发生时重估寿命、替换全部历史版本，用校准秤将终末完整资产与按事件拆出的零件分别称量。 按每个同单位资产台账独立应用 allocate_asset，再用 complete_modules 还原兼容分子，除 Q 一次。 | m2*h; m3*h; h; kg; source-native units | 每次事件/时段；每日核对；配置/寿命变更时 | 全池及全部关联原始/历史版本，不删除失败/闭店/零销售时段 | 具名店铺、供应方边界及实际全部受益者范围 | 每参考流 | 全寿命来源分配校验和；寿命版本替换审核；实际终末净重；签署完整包排除项 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_count | accepted_service | Q = 最终有效验收的不同原始 ID 数；Q>0 时 accepted_service 输出为每参考流 1 Item(s)。遵循 allocate_events，不得再次减撤销数。 | original_id; final_acceptance_state; closure; cp_events | Q; accepted_service |  |
| custody_normalize | original_receipt; customer_return; customer_handover; supplier_return; internal_transfer | 每个保管行数量 = 该行毛实物过界本数 / Q；实际重复过界均计数，但不得由此推定 Q 或新增制造投入。 | crossing_id; original_id; direction; recipient; state; crossing_count; Q; cp_events; cp_residual | custody_Item(s)_per_reference |  |
| energy_normalize | counter_ac | E_MJ = 3.6 * E_attributed_kWh；按 allocate_counter 分配后，行数量 = E_MJ / Q，并按实际供应方/地域/期间只连接一次上游供电。 | parent_kWh; active_kWh; standby_kWh; idle_kWh; active_seconds; reserved_seconds; E_attributed_kWh; Q; cp_energy | MJ_per_reference |  |
| waste_normalize | whole_book_waste | W_kg = 各实际货运批次 gross_kg - actual outer_tare_kg 之和；行数量 = W_kg / Q。废物产生 + 期初待运废物 - 期末待运废物为独立核对，不再次修正 W_kg。 | consignment_id; gross_kg; outer_tare_kg; waste_count; opening_held_kg; generation_kg; closing_held_kg; Q; cp_residual | kg_per_reference |  |
| stock_balance | original_receipt; customer_return; customer_handover; supplier_return; internal_transfer; whole_book_waste | 采用总保管本数台账：期初可售+待运废物本数 + 首次接收 + 顾客实物退回 = 期末可售+待运废物本数 + 毛顾客交接 + 实际供应方交接 + 内部转出 + 废物外运书本数 + 有证据的实物丢失。报废认定仍在保管内部，不得另扣一次；F/S/O/T 责任和 Q 独立。 | opening_saleable; opening_held_count; first_receipts; returns_count; closing_saleable; closing_held_count; handovers_count; supplier_count; transfer_count; waste_count; loss_count; cp_events; cp_residual | count_reconciliation |  |
| original_background | accepted_service | 每个原始接收 ID i 只选 S/F/O/T 之一。F_vector=sum_F(G_i+H_i)；excluded_S_vector=sum_S(G_i+H_i)。原始向量的 S+F+O+T 核对全部原始来源，不乘毛保管次数或第二次组成/终态份额。部分卡片集排除 F_vector 及 excluded_S_vector。增量服务补全只加 F_vector/Q 一次；商品加服务在此基础上另加 excluded_S_vector/Q 一次。 | original_id; G_i; H_i; supplier_original_quantity; supplier_original_denominator; source_id; version; final_fate; Q; cp_background | F_vector; excluded_S_vector; O_vector; T_vector |  |
| complete_modules | accepted_service | 每个兼容交换 j 将外部模块 m 按有证据的原始来源池还原：N_jm = normalized_value_jm * original_denominator_m（已为原始分子则直接保留）。只对未分配部分应用 allocate_support/allocate_transport/allocate_asset/allocate_cleaning/allocate_incoming_carton 的因果份额。依据确切原始来源 ID/边界/版本与 G/H、柜台电力、供应方内含运行和废物去重，并替换旧版本。对相同方向/类型/身份/属性/单位的兼容分子逐行与 F_vector 相加，再统一除一次最终 Q。不得 kg 加 MJ、原始值加归一值，或给供应方已归属数据再乘一次份额。新增实际交换须有具名原子卡、协议及双语同步，才可成为完整数据集。 | module_id; source_id; version; boundary; normalized_value_jm; original_denominator_m; raw_numerator; X_jk; d_bjk; X_s; r_sb_kg; t_sb_h; capacity_kg; utilized_kg; route_reservation_kg; empty_km; idle_h; P_j; opening_source_j; unused_return_j; held_source_j; final_liquid_source_j; final_wipe_source_j; spill_source_j; other_final_source_j; container_dispatch_residue_source_j; container_held_residue_source_j; original_container_id; original_container_dispatch_date; original_container_closure_date; original_container_gross_dispatch_kg; original_container_external_tare_kg; original_container_with_residue_net_kg; mains_volume; water_density; liquid_gross_kg; liquid_container_tare_kg; wet_wipe_kg; cloth_cleaned_m2; cloth_lifetime_m2; bucket_reserved_h; bucket_lifetime_h; carton_model; carton_BOM; carton_count; carton_net_kg; carton_carrier_dispatch_kg; shipment_reserved_kg; shipment_reserved_h; e_ab; L_a; X_a; F_vector; Q; cp_support; cp_assets; cp_background | completed_incremental_numerators_per_Q |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| quality_scope | 所有实际路线运行 | 保留预先固定池、确切版次及条件；活动/身份/数量未知不是零。 | 店铺调查；原始文件；明确未解决登记 |
| quality_measurement | 所有采集记录 | 校准电表/秤、签署本数及实际事件时间覆盖每一天含闭店、闲置和失败时段。带不确定性调查差异，不得自动以零平衡。 | 校准证书；每日核对；缺失数据和不确定性记录 |
| quality_completion | accepted_service | 原始 G/H 及全部强制补全来源须绑定实际原始分母及确切来源重叠核查；任何缺口存在则保持部分状态。 | 供应方清单；全寿命资产台账；全受益者分配驱动量；来源 ID 矩阵 |

## 9. 校验规则

| rule_id | Rule | source_ids |
| --- | --- | --- |
| validate_identity | 每个 UUID 须核验留存正式原始响应、公开状态、双语名、类型、属性/单位链和实际边界。参考服务及完整书本保管/废物身份仍是未绑定候选，不得用通用书本或制造流替代。绑定前须提供原始供应方/BOM 和路线证据、数量记录及最终责任；未知不等于零。 |  |
| validate_ledgers | 要求原始 ID 和毛事件 ID 唯一、总实物保管核对、外运完整书本质量/本数交叉核对、按最终验收建立 Q 及原始 G/H 来源划分。丢失或外部保留但验收无效的书保留 F/O/T 责任，不虚构实物废物。核实迟到版本替换，且无重复背景、撤销扣减或归一化。 |  |
| validate_completion | 只有每个必要来源已计量/绑定、每个条件过程已确认存在或有不存在证据、全部 S/F/O/T 接收人和背景已解决、Q>0 且 complete_modules 通过后，部分候选才可补全。采集完整年度/声明周期全部受益者支持数据、确切资产寿命修订及路线空返/闲置覆盖。现有卡片本身不能认证完整 LCA、GHG 产品标准符合性、科学批准或定量绩效。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | partial_incremental_service_inventory |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 透明部分柜台服务数据；完成增量服务组合前须 complete_modules |
| excluded_use | 仅凭卡片宣称全店、全分类叶或完整产品足迹；批准或标准符合性声明 |
| required_metadata | 全部参考限定信息；原始来源/分母/版本；保管及最终验收；S/F/O/T；实际模块及遗漏 |
| required_quality_disclosure | 身份/数量/背景缺口；不虚构零；不确定性；Q=0 及未结责任；部分边界 |
| update_trigger | 实际版次/路线/供应方变更、迟到验收/退回、电表/来源数据修正、资产寿命或终态变化 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc-paperback-retail | official_guidance | 联合国统计司，CPC 3.0，62151 说明：https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62151 | 仅分类背景；印刷图书 322 组是子集，不代表子类全部产品 |
| prh-paperback-specification | official_guidance | Penguin Random House Secondary Education，《1984》，ISBN 9780451524935，主产品块：https://penguinrandomhousesecondaryeducation.com/book/?isbn=9780451524935 | 代表全新大众平装书规格；不提供制造质量、BOM、环境因子或通用版次身份 |
| wri-product-allocation | standard | WRI/WBCSD，《产品生命周期核算与报告标准》（2011），第9章印刷页63：https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 因果物理分配前先细分；本 PCR 的柜台、池、分配驱动量及补全方法为自定要求，不声称是标准强制条文或完整标准符合性 |
