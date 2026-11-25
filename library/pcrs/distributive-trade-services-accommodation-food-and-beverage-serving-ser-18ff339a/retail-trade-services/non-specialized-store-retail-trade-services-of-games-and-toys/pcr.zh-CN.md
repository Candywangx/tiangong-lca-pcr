---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-games-and-toys
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 原封 LILLABO 三件玩具火车套装的店内零售：保管与结账模块

## 1. 范围与适用性

本 PCR 规定非专卖实体店对宜家 LILLABO 货号603.200.94 磁性连接三件玩具火车套装的一种同质原厂配置进行保管与结账的部分增量模块。商品必须是完整未开封原零售包件。边界从门店实际收货开始，到有据可查的顾客实物交付、供应商/内部转交或废物出运，并追溯后续验收修正。参考对象是零售服务，不是玩具制造或游玩时间。其他货号、散件、混装套件、电池火车、线上配送、维修、装配、功能展示及重新包装均为排除路线。必须检查实际配置并签署活动不存在记录；不得从网页推断活动不存在。未执行 boundary_completion 与 completion_sum，本部分模块不得代表完整零售。

厂家湿布保养说明不能证明门店实际清洁。场所路线固定为自然通风，支持本池的任何门店或房东服务均无燃烧、含制冷剂设备、暖通系统或外购冷热。须有完整门店/房东设备与公用工程登记、合同及检查证据。排除设备未知或存在即不适用本路线; 不允许默认零或延后决定燃料/制冷剂方法。 不规定数值质量、组成、效率或排放因子，须从实际池采集。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-games-and-toys |
| classification_refs | CPC3.0 62153; 非专卖店游戏和玩具零售服务; 第385组商品的较窄子集 |
| covered_products | 仅限本规则所定义的完整原封货号603.200.94 零售服务 |
| excluded_products | 玩具生产; 不属于本原套装的轨道及配件; 其他玩具; 旧货/开封商品销售; 展示及配送路线 |
| representative_product | 一套原厂商品：现代机车、蒸汽机车及货车，含可拆上部和实际磁性连接件; 厂家资料列有山毛榉木、带印刷丙烯酸漆的ABS、聚乙烯车轮及镀锌钢轴/钉; 该资料不构成完整质量BOM |
| production_route | 门店收货; 常温原封存放; 包装/标签目视检查; 数字结账; 顾客自提; 退回及失败事件核对 |
| market_state | 完整原封套装，实际国家/批次/年龄标签; 未经实物证据及路线修订，不允许含运行电池、电机或电动展示 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一套完整原封原厂玩具套装的零售保管/结账 |
| How much | 一个最终有效验收originalID; 三车完整套装为一个服务，绝不是三个服务 |
| How well | 实际完整原封配置、可追溯originalID及合格验收判据; 仅财务结算不足 |
| How long or cycle | 一个预先固定且有验收截止及迟到修正版本的池; 不假设玩具使用寿命 |
| reference_flow_link | accepted_service |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一套最终验收原封LILLABO60320094套装的店内保管与结账零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际货号与批次; 完整供应商BOM版本和包装组件质量; 磁性连接件组成; 无电池及电机检查; originalID登记; 国家及实际年龄/警示标签; 收货门及原sourceID; 池期间和修正截止日; 最终验收证据; 渠道与场址; 电表层级; 部分模块排除项和补全版本 |

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | accepted_service | 物品数量 | Item(s) | 一套完整原封原套装对应1 Item(s)验收服务。Q为不同最终有效originalID数，实物毛件数独立。所有最终卡均按每1 Item(s)参考流。 |
| mass_carrier | toy_waste | 质量 | kg | 测实际完整出运载体净kg，排除外加容器; 件数转质量核对采用匹配originalID实测kg，绝不用目录包裹运输重量。 |
| electricity_energy | checkout_ac | 净热值, 低位热值 | MJ | 1 kWh=3.6 MJ; 保留原始kWh、归属及一次最终/Q，不用玩具额定功率。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际首次门店收货门的完整原封商品; 部分服务另通过failed_supply纳入G_F |
| starting_condition_role | 增量服务，含卫星实物商品与另行耦合失败供给 |
| product_classification_scope | 窄于CPC3.0 62153; 第385组玩具火车子集 |
| recursive_input_rule | 不得将本零售服务递归作自身输入; 原物转售保留一次来源; 供应方向量不得重叠 |
| upstream_dataset_requirement | 逐originalID实际G_i玩具/包件/到门来源; F仅绑定一次; S/O/T延续责任明确 |
| disclosure | 部分保管/结账与失败供给模块; boundary_completion固定缺少模块; 未核实身份及数据缺口 |

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| route_gate | all inventory rows | 必须确认包含三辆车、可拆件、磁铁、涂层/胶黏剂/紧固件及原包装本体、封口、内托、标签和印刷的真实完整套装。供应商记录与检查/称重必须解决每种材料、状态和净质量; 网页所列包裹运输重量不等于玩具净重或包装皮重。不得以纯山毛榉木kg表示完整玩具。厂家3岁以上及CE说法仅为描述性声明：保留实物标签及适用辖区证据，不得声称已经核实合规，也不设安全限值。任何开封、缺件、电池、装配、测试、展示或新增袋/纸票/托盘，均须先在两语中增加具体状态的原子卡与协议，才可宣布数据集完整。 | ikea-lillabo-spec |
| custody_boundary | receipt; customer_return; customer_handover; supplier_transfer; internal_transfer; external_retention; toy_waste | 货品库存G与暂存废物W分账。实物毛事件平衡：G_open+N_receipt+N_return=G_close+N_handover+N_supplier+N_internal+N_external+C_condemned+L_missing。N_handover为交付时初始合格的顾客交付，N_external为交付时从未验收的外部交付; 两者eventID集合互斥，每次实物离店仅记一次。后来无退回验收撤销不改变实物件数。同一originalID的每次实物退回/交付均记录。报废仅将货品转入暂存废物一次; W_open+kg_condemned+kg_other_admitted=W_close+kg_dispatch。实际出运采用称得的完整载体净kg，不得再从货品扣一次。L_missing是待调查差异，不是环境排放或废物交换; 接收人/状态未解决则阻止完整性。外部留存但无合格验收仍是失败事件，按真实接收人/状态转交处理，不是零售商废物。 |  |
| source_responsibility | all inventory rows | 首次门店收货时，将每个originalID绑定到以原完整套装为单位的完整供应商来源向量G_i，分别定位玩具、原包装及供应商至门店运输，且每项只计一次。原来源责任分为互斥S（最终验收）、F（零售商失败/丢失责任）、O（未结库存）、T（具名供应商/内部/外部后续责任人）; 按组件有G_total=G_S+G_F+G_O+G_T。这是环境来源所有权台账，不是新增实物交换。部分服务通过failed_supply仅纳入G_F一次，排除G_S、G_O及G_T。每个originalID仅有一个完整最终责任; 组件分责须先以供应商清单向量扩展，才可完整。下游售出商品另耦合G_S/Q; O及T凭签收责任延续来源。退供不能删除负荷。失败外部留存、盗失及无实物退回的验收撤销保留同一原来源; 除非有证据由T后续责任人承接，否则归F。转售不新增生产; 转作展示品须将同一来源转至资产T，且不在本路线内。 |  |
| boundary_completion | all inventory rows | 本规则明确为部分保管/结账模块，包含货品毛流动、服务、专用本地结账交流电、真实完整玩具废物出运及failed_supply所耦合G_F背景。完整零售必须有互斥模块：(1)场所运行，包括存储/照明/自然通风风机与清洁用水/配方/抹布/废液载体，并满足有据无燃烧/无制冷剂/无暖通/无外购冷热路线; (2)ICT/网络及数字收据服务，剔除已计本地交流电; (3)完整资本，包括含固定灯具/风机的建筑、货架、结账硬件及搬运设备，以及安装、实际维护与终端载体; (4)全部门后退供/内部/废物运输及真实空返/闲置行程; (5)本出运门之后的废物处理。G_F已经纳入，不得再加入。供应商到门店运输仅在G_i中，排除于模块4。虽售出G_S制造在增量服务外，G_i仍须完整BOM和包件身份。使用同一池/版本与Q执行completion_collect、lifetime_share、transport_complete及completion_sum。不得将本模块单独声称为完整经营、整件产品LCA或完整标准符合性。 | ghg-product2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| retail | 原封玩具套装保管与结账 | required | 实际同质原封原路线; 条件流须存在/不存在证据 | foreground | 1 Item(s)最终accepted_service; Q最终有效originalID |

### 过程：原封玩具套装保管与结账（`retail`）

#### 输入

##### 产品流

###### 完整原封LILLABO60320094原零售包件 (`receipt`)

按originalID计数首次收货的完整原包件; 实际玩具/包装质量与来源责任另账保留。

- 选定流：完整原封LILLABO60320094原零售包件
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_receipt / Q; 仅实物通过量; 本模块不附加G_i背景
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`

###### 顾客实物退回的完整原封LILLABO60320094包件 (`customer_return`)

同一包件退回不新增制造。开封/缺件退回须先另建状态卡才可完整。

- 选定流：顾客实物退回的完整原封LILLABO60320094包件
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_return / Q; 每次真实完整原封退回事件
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`

###### 交流电 (`checkout_ac`)

实测专用线路内的本地结账、扫描及本地收据处理交流电; 不假设运行功率，不含玩具充电/展示。供电背景仍须绑定。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值, 低位热值 / MJ
- 数量规则：3.6 * E_checkout_attributed_kWh / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_power`

###### 一套完整原封LILLABO60320094原包件的摇篮至门店供给 (`failed_supply`)

零售商负责的失败originalID背景耦合输入，以原完整包件等价量表示。逐一绑定包含完整玩具、原包装及供应商至门店运输的实际供应方清单G_i。与卫星毛收货分开，不得同时给receipt附加生产。不得按任意质量/件数份额拆G_i。

- 选定流：一套完整原封LILLABO60320094原包件的摇篮至门店供给
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_F / Q; 每个原来源G_i一次
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_supply`

#### 输出

##### 产品流

###### 一套最终验收原封LILLABO60320094套装的店内保管与结账零售服务 (`accepted_service`)

截止修正后一个最终有效不同originalID的服务，与商品实物毛交付分开。

- 选定流：一套最终验收原封LILLABO60320094套装的店内保管与结账零售服务
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_acceptance`

###### 交给顾客的完整原封LILLABO60320094包件 (`customer_handover`)

每次初始合格顾客实物毛交付均计数，含后来撤销的销售; eventID与初始未验收external_retention互斥; 最终服务由验收账确定。

- 选定流：交给顾客的完整原封LILLABO60320094包件
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_handover / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`

###### 实物退供的完整原封LILLABO60320094包件 (`supplier_transfer`)

退供签收是实物商品转交; 另行保留具名T或F的原背景责任。

- 选定流：实物退供的完整原封LILLABO60320094包件
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_supplier / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`

###### 转交其他门店的完整原封LILLABO60320094包件 (`internal_transfer`)

转交具名门店保留同一originalID及T来源责任; 不是零售服务或新生产。

- 选定流：转交其他门店的完整原封LILLABO60320094包件
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_internal / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`

###### 外部接收人无验收留存的完整原封LILLABO60320094包件 (`external_retention`)

仅记录区别于customer_handover的真实有据实物毛外部转交。无退回撤销是责任/验收修正，绝不产生第二次实物转交。失败留存包件须有实际接收人/状态及F或有据延续T责任。

- 选定流：外部接收人无验收留存的完整原封LILLABO60320094包件
- 流属性/单位：物品数量 / Item(s)
- 数量规则：N_external / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_custody`

##### 废物流

###### 受损完整LILLABO60320094玩具及原包装废物载体 (`toy_waste`)

实际出运的完整原套装及其自身受损零售包装的干态复合物，不含电池或新增处置容器。按实际载体组成及接收方接纳证明称量整批净kg。已拆组件、开封/缺件套装、湿污染及外加容器须独立具体卡; 不得再报本载体相同组成部分。废物处理位于本出运门外，须另补全。

- 选定流：受损完整LILLABO60320094玩具及原包装废物载体
- 流属性/单位：质量 / kg
- 数量规则：kg_dispatch / Q
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_waste`

## 7. 分配与共产品处理

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| pool_acceptance | accepted_service | 预先固定场址/渠道/货号/BOM/运行配置一致的池及起止日、修正截止日，保留全部失败、拒收、闲置及零销量子群。Q是截止时仍具完整原封套装合格最终验收的不同originalID数; 不得再扣一次撤销ID。验收仍有效的财务退款/折扣不改Q。无实物退回的撤销也移除验收。同一ID反复交付或转售至多形成一个最终服务，所有尝试均保留。迟到事件按实际日期替换原池分子、Q、库存/去向及S/F/O/T版本，不再计入新期。Q=0不能归一化，应明确结转到预先规定的同配置池，不得删除。 |  |
| shared_subdivision | checkout_ac; all completion modules | 优先专表/细分。共享电力母表须拆分实测活跃、闲置和固定来源分子池E_j，其kWh合计核对母表。各j内采用同单位因果驱动，对所有实际受益者按E_j*d_pj/sum_b(d_bj)分配：活跃设备为实测忙碌h，闲置设备为预留h，场所固定运行为空间占用/预留m2*h。闭店/零销量预留不得删除。不得将h与m2*h或不兼容件数相加。所有受益者分母必须已知且为正，否则保留未解决。仅在分表线路确实包含于母表时扣一次; 独立不交叠表无需扣除。分配后kWh乘3.6转MJ，且仅除Q一次。 | ghg-product2011 |
| lifetime_share | all capital completion modules | 每项真实资产保留完整制造/安装来源向量A_a、完整物体BOM及明确运行/维护/寿命终点排除项。e_ap为受益者暴露，L_a为同单位预计总寿命暴露：货架/建筑用预留m2*h; 结账/搬运设备用预留设备*h，含闲置/闭店预留和全部受益者/历史。f_ap=e_ap/L_a; A_ap=A_a*f_ap。每次寿命修订须以新L_a替换所有历史受益者分配，不得重启全额A_a。累计份额不得超过1; 实际退役时用实际总寿命暴露替换全部既往分配，使最终份额和为1。真实维护事件按有据暴露分配，与制造分开。完整终端载体净kg仅乘最终寿命份额一次，不再乘制造份额; 直接净称与按BOM重建并剔除已移走部件为互斥方式。供应方生命周期包件须有签署模型范围与sourceID; 不再新增其已含退役。 | ghg-product2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | retail | receipt; customer_return; customer_handover; supplier_transfer; internal_transfer; external_retention | 货品专用事件登记 | originalID; eventID; 货号; 批次; BOM版本; 包件封口/状态; 三车/部件存在; 电池/电机检查; 事件时刻; 期初/期末货品; 收货/退回/交付毛件数; 初始合格与初始从未验收的互斥离店eventID; 报废件数与实测kg; 丢失件数; 具名接收人; 实物签收; S/F/O/T责任人; sourceID | 各实物门扫描originalID，检查封口/部件及标签; 核对盘点、校准净称及签收。财务/验收变化另账，不虚构实物事件。 汇总细则：按事件类型保留原始毛总量; 应用custody_boundary; 归属事件分子仅除Q一次 | Item(s); kg | 逐事件与期末 | 全池，含期初库存及迟到修正 | 门店收货至最终保管门 | 每参考流 | 唯一eventID; 照片; 接收人签收/库存账; 秤校准; 修正版本 |
| cp_acceptance | retail | accepted_service | 最终验收台账 | originalID; poolID; 毛交付链接; 完整原封验收判据与证据; 验收/撤销时刻; 是否实物退回; 纯财务调整标志; 截止日; 最终有效状态; 旧版本; Q | 按originalID连接验收与保管，不能以付款替代验收。修正后对不同最终有效ID应用acceptance_count。 汇总细则：Q=不同有效ID数; 输出1 Item(s); Q=0不可归一化 | Item(s) | 每次验收/修正及截止时 | 全池及重开原版本 | 同货号/BOM/场址/渠道 | 每参考流 | 可追溯/签署验收判据; 修正历史; 毛事件账核对 |
| cp_power | retail | checkout_ac | 电表与因果分配登记 | meterID; 电路图; 时刻; 起止kWh; 校准; 母表/分表交叠; 活跃/闲置/固定E_j kWh; 全受益者驱动d_bj及单位; 结账归属kWh; 闭店/失败/零销售h; 来源/供应方国家/期间; 不确定性 | 采用校准分表测明确结账线路; 共享母表仅以实测分池及每池一个共同因果驱动细分; 核对完整母表。 汇总细则：electricity_allocate先得归属原始kWh，再MJ/Q一次 | kWh; h; m2*h | 间隔读数及每次配置变化 | 全池含闲置/闭店 | 专用实测结账边界 | 每参考流 | 表校准与电路图; 全受益者核对; 供应方边界 |
| cp_waste | retail | toy_waste | 完整载体出运与暂存废物账 | consignmentID; originalID; 报废时刻与件数/kg; W_open/W_close kg; 实际完整玩具/包装材料BOM; 干态; 无电池; 整体毛/皮/净kg; 载体/容器排除; 已拆件; 接收人; 运输/处理范围; sourceID | 出运时校准称整批净重，排除外加容器。暂存废物库存另行核对; 不以生成平衡重建已直接测得出运kg。 汇总细则：waste_dispatch; 不重复真实净出运kg求和/Q | kg; Item(s) | 逐报废/出运及期末盘点 | 全池含期初/期末暂存废物 | 门店暂存至签收出运门 | 每参考流 | 秤/皮重记录; 照片; 联单; 接收方接纳; 电池/部件审计 |
| cp_supply | retail | failed_supply | 原供给与最终责任账 | originalID; 完整货号/BOM/包件; 供应商sourceID及版本; G_i原边界/单位; 生产/原包装/到门段来源定位; 实际供给单位; S/F/O/T签收责任人; N_F; 无退回撤销; 丢失接收人/状态调查; 库存转交链接 | 取得完整供应商清单，或由已核实供应商组件清单及实测BOM重建，含磁铁/涂层/包装与真实到门运输; 保持组件来源守恒。应用N_F/Q前确定最终完整originalID责任。缺失保持未解决。 汇总细则：不同最终F ID的G_F仅求和一次; receipt及其他保管行不链接背景; 仅除Q一次 | Item(s); kg; source-vector units | 逐收货/责任变更/修正 | 全部原来源及当前/历史池 | 摇篮至首次门店收货 | 每参考流 | 原供应方清单; 完整BOM/称重; 货运范围; 责任签收; 版本守恒 |
| cp_completion | retail | boundary_completion | 互斥外部补全模块账 | moduleID; sourceID/版本; 实际原子流身份/类型/状态/介质/属性/单位; 供应方边界; 原分母D_m; 原始分子或归一量z_m; 池日期/场址/配置; 全受益者表计/驱动; 资本A_a/e_ap/L_a/历史/终端载体; 完整门店/房东无燃烧/无制冷剂/无暖通/无外购冷热证据; 实际清洁配方最终来源去向kg及容器留存/出运互斥/湿载体; 制剂批次及完整来源组成; 不重叠组分/元素基准与单位; 外界分子物种q_out_s kg; 分子组成w_c_s; 直接实测来源已分辨c kg; source_fraction_c_s及来源份额基准; source_attribution_mode; correction_mode; 来源归属/组成/空白证据; 用水/废液表计; 物种身份/介质及外边界间隔起止、进/出口F kg/h、dt h、修正模式、积分净kg/捕集/储存; 实际行程/段全受益者预留载荷kg/预留h/运营方未用/空返/闲置及签署完整批次清单; 去重链接; Q | 对boundary_completion固定清单采集签署完整清单。依据实验室/来源记录核实实测物种分子组成及原制剂批次来源归属; 保留组分/元素单位与独立source_attribution_mode/correction_mode，排除外界反应原子，并避免重复乘份额或扣空白。应用指定completion_collect/lifetime_share/transport_complete; 保留实际不存在证据。声称补全数据集前，对每个存在交换增加真实具名原子卡及两语协议。 汇总细则：恢复兼容原始模块分子、归属后应用completion_sum; 不作混单位标量 | original module units | 逐来源事件/版本、表计间隔及池结算 | 同一全池及完整资产历史 | 每个明确排除模块且各门不重叠 | 每参考流 | 签署供应方清单/范围; 来源哈希; 表计/校准; 完整驱动分母; 资产修正账; 接收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| acceptance_count | accepted_service | Q = 截止时最终合格有效验收的不同originalID数; 输出=Q/Q=1 Item(s)。撤销ID已不在最终集合，不再扣减。迟到变化同时替换原分子与分母。 | originalID; 最终有效状态; 验收/撤销时刻; 截止日; cp_acceptance | Q; 1 Item(s) accepted_service |  |
| custody_normalize | receipt; customer_return; customer_handover; supplier_transfer; internal_transfer; external_retention | 各事件类型r以实物毛事件数仅算q_r=N_r/Q。先校验custody_boundary; 来源责任或无退回撤销不得新增实物N_r。 | N_receipt; N_return; N_handover; N_supplier; N_internal; N_external; 互斥离店eventID集合; 初始验收状态; G_open; G_close; C_condemned; L_missing; Q; cp_custody | 六个分别件数/Q交换 |  |
| electricity_allocate | checkout_ac | E_checkout_attributed_kWh=sum_j(E_j*d_pj/sum_b d_bj); 专用直接模式保持实测E_checkout不变。两模式互斥。q_AC=3.6*E_checkout_attributed_kWh/Q MJ。仅按shared_subdivision一次移除表计重叠。 | E_j; d_pj; 全部d_bj及同单位; 表计模式/重叠; 直接E_checkout; Q; cp_power | checkout_ac MJ/Q | ghg-product2011 |
| waste_dispatch | toy_waste | kg_dispatch=不同实际出运批次(gross_kg-tare_kg)之和; q_waste=kg_dispatch/Q。暂存废物平衡为独立校验，不再作数量修正。已纳完整载体旁不重复组成kg。 | 唯一consignmentID; gross_kg; tare_kg; W_open; W_close; kg_condemned; kg_other_admitted; Q; cp_waste | toy_waste kg/Q |  |
| source_responsibility | failed_supply | N_F=不同最终完整F originalID数; q_F=N_F/Q原完整包件等价量。每ID实际G_i仅耦合一次，供应方不同时不能用通用平均; 按原sourceID/版本保持G_total=G_S+G_F+G_O+G_T。G_S/Q仅属于另行售出商品下游耦合。 | 全部originalID; G_i供应方/组件/包装/到门向量; S/F/O/T最终完整责任; N_F; sourceID/版本; Q; cp_supply | failed_supply Item(s)/Q及实际来源链接 |  |
| completion_collect | boundary_completion | 仅当z_m已归一化且D_m为有据原分母时，以R_m=z_m*D_m恢复供应方模块原池逐交换分子; 原始清单不变。按shared_subdivision细分来源池并归属本池。场所清洁保留每个实际购入配方kg及互斥最终配方来源去向：未用期末库存、使用后溶液/抹布/容器残液期末库存、出运液体/抹布/容器、真实商品带出及实测转至外界的原制剂组分/元素质量。真实外界分子物种kg与原制剂组分/元素kg分开保留。来源质量排除外界反应物、新增水或污物带入的原子。各去向采用一个有据且不重叠的组分或元素核算基准; 不得将组分总量加至其所含元素总量，也不得用部分元素kg替代整制剂kg。对物种s及来源组分/元素c，保留真实分子组成w_c_s（每kg分子物种中c的kg）、source_attribution_mode及证据。source_resolved模式保持直接实测原来源c kg不变。source_fraction模式仅对实测c质量应用一个有证据的source_fraction_c_s一次：g_origin_c_s=q_out_s*w_c_s*source_fraction_c_s，其中q_out_s为外界分子物种s的kg，g_origin_c_s为该物种所含制剂来源组分/元素c的kg; source_fraction指该实测c质量中来自已识别制剂批次的份额，不是制剂浓度。不得再对来源已分辨数据乘该份额。严禁逐物种将kg除以制剂浓度倒推整配方kg，再将这些倒推量跨物种相加。只有完整来源组成及守恒成立后才可重建任何整制剂来源质量总量，否则保留未解决组分/元素向量。correction_mode与source_attribution_mode为独立记录状态：已空白修正数据不再扣背景，来源已分辨数据不再乘来源份额。使用只是中间状态，须由最终去向替换，绝不新增一个去向; 同一容器留存与出运部分互斥; 新增漂洗水/污物不属于配方来源kg。真实完整湿液/抹布/容器kg另计，不再乘配方比例。进口计量水已排除内部回用，不再减回用。直接废液为整液实测V_discharge*rho，不扣蒸发/储存; 供水/库存平衡独立。必须测完整液体组成，含溶解配方/污物; 不得用无关密度将仅水体积转完整载体。本路线禁止现场燃料/制冷剂/暖通及外购冷热; 须核实完整门店/房东设备和公用工程证据，否则停止适用。运输燃料/物种仍在完整运输供应方清单内。物种排放必须按真实穿越外界空气/水/土壤边界的进出口质量通量kg及空气/捕集/储存变化核对; 室内产生不等于外排。仅选原绝对进/出口通量扣一次背景，或已差分/空白修正数据保持不变; 不得双扣空白。捕集/冷凝在真实完整载体计一次; 发现任何制冷剂设备即不适用本路线。对各物种及实测外边界间隔t，以q_out_raw=sum_t((F_out,t-F_in,t)*dt)积分得kg，其中实测F单位kg/h，dt单位h。原绝对模式仅扣一次匹配实测背景/空白; 差分模式直接用观测净速率; 已空白修正模式不再扣任何量。直接外界通量不再扣捕集或储存; 实测室内空气/捕集/储存为独立质量守恒核对，每个实际捕集出口另为互斥载体。负值/未知外界通量须调查，不截零/抵扣。 | moduleID; z_m; D_m; 原始R_m; sourceID/版本; 来源池驱动; 实际配方来源kg的互斥最终去向; 制剂批次及完整来源组成; 不重叠组分/元素质量基准; 外界分子物种q_out_s kg; 分子组成w_c_s; 实测来源已分辨c kg; source_fraction_c_s及实测c质量基准; source_attribution_mode; 独立correction_mode; 来源归属/组成/空白证据; 容器留存/出运拆分; 整湿载体kg; 进水/出液表计; 整液rho/组成; 供给/储存核对; 完整门店/房东不存在证据; 物种身份/介质; 间隔起止; 实测进/出口F kg/h; dt h; 积分净kg; 修正模式; 背景/空白; 空气/捕集/储存/带出; cp_completion | 兼容归属原始原子交换分子; 补全缺口 | ghg-product2011 |
| lifetime_share | boundary_completion | 各实际资产及受益者p按分配规则lifetime_share，用同单位寿命暴露f_ap=e_ap/L_a及向量A_ap=A_a*f_ap，并替换所有历史旧版本。实际终端净kg*f_ap仅一次且用最终退役分母; 维护来源向量另作事件。 | assetID; 完整A_a来源向量与BOM; e_ap; 全受益者历史; L_a预计/修订/实际单位; 旧/新版本; 实际终端净kg及方式; 维护事件; cp_completion | 归属原始资本/维护/终端向量 | ghg-product2011 |
| transport_complete | boundary_completion | 各门后行程仅采用一个已签署、完整、实际且已归属批次的供应方生命周期清单，包含全部实测载货、空返及静止闲置段、实际燃料/物种与车辆制造/维护/退役。供应方分配证据须逐段保留每个实际受益者的预留载荷kg及预留h，包括运营方未用容量和空返/闲置预留; 完整行程来源总量与所有为正同单位kg*h驱动总和必须核对。已归属批次向量保持不变，不再乘驱动。排除实际空返/闲置段、生命周期范围不完整或分配未知的清单不可用; 本路线无替代距离或未测燃料后备方式。供应商至首次门店段仅在G_i内。 | trip/segmentID; 签署批次来源清单及完整生命周期/空返/闲置范围; 原供应方分母与分配证据; 全受益者预留载荷kg; 预留h; 运营方未用/空返/闲置预留; 为正kg*h驱动总量; 全行程来源; 燃料/物种/车辆sourceID; 到门重叠; cp_completion | 归属原始门后运输交换向量 | ghg-product2011 |
| completion_sum | all inventory rows | 对身份/类型/状态/介质/属性/单位相同的每个r，q_complete,r=(X_core,r+sum_m X_attributed,mr)/Q。先按completion_collect恢复已归一供应向量，再仅合计兼容原始分子，并按精确sourceID/版本及互斥门去重。不得件数加kg、kg加MJ、原始加归一量，也不得把卫星货品移动加至表征环境来源输入。G_F已在failed_supply中; G_S/Q仍为明确分开的下游商品耦合。各模块须同池/配置/版本与Q; 固定模块及新增真实原子卡全完成前保持部分状态。 | X_core,r; 全部X_attributed,mr; 恢复z_m/D_m; 流/属性/单位匹配; sourceID/版本去重账; Q; cp_completion | 仅覆盖验收后形成完整每参考流原子清单 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| q_configuration | all inventory rows | 须取得真实完整供应商BOM与实测收货玩具/包件/组件质量; 检查无电池/电机及完整磁铁/漆/标签组件; 须实物年龄标签及签署无展示/装配/重包路线证据，不得假定。 | 供应商版本; 检查照片; 校准秤; 标签; 门/事件记录 |
| q_coverage | all inventory rows | 覆盖预定全池，含拒收/失败/闭店/闲置事件、期初期末库存、无退回撤销及后来修正。保留抽样/不确定性/校准及原始件; 未解释漏事件或来源责任保持缺口。 | 事件完整性与库存/来源核对; 版本账 |
| q_partial | all inventory rows | 核心receipt、customer_return、customer_handover、supplier_transfer、internal_transfer、external_retention明确为不链接生产的卫星实物流。仅failed_supply表征G_F。逐项披露排除补全模块、真实存在/不存在证据、未绑定身份及固定补全结果; 部分核心不得代替完整零售。 | 模块覆盖矩阵; 供应方合同; sourceID去重; 实际原子扩展 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | 流身份未绑定会阻止数据库绑定及发布，不得据此伪造UUID。完整数据集使用前，直读每个选定流的类型、状态、介质及属性/单位链，保留原始精确字节哈希及匹配回执。交流电UUID仅表示使用点身份，不能选择电网/供应方/电压/线损。须提供实际上游电力来源及国家/期间。 |  |
| v_balances | all inventory rows | 分别核对实物毛事件平衡、按originalID与实测质量从货品转废物的件数/质量换算、暂存废物平衡、最终验收账及G_i来源责任。玩具、包装及混合完整废物载体分别称重; 不得采用网页标称质量、未知填零或以质量份额拆分环境向量。S/F/O/T责任可在无实物移动时变化。检查各卡均为reference_flow且仅有一次最终/Q; 不得重复乘来源/去向或寿命份额。 |  |
| v_completeness | all inventory rows | 每个条件卡/模块须保留覆盖全池的场址检查、供应方合同及事件/计量存在或有据不存在证据。未知保持未解决。BOM/磁铁/包装/电池检查、G_i来源、资产历史、空气/液体去向、失败外部接收人或供应方空返覆盖缺失均阻止完整性。新增真实交换必须先命名原子卡、原始协议、计算并同步两语，才可声明完整; 不得暗中省略。即使已有数值总量，也须披露部分范围及跳过模块。 |  |
| v_versions | all inventory rows | 原始总量、归属分子、Q及全部补全模块必须共用来源版本台账。保留原始计量; 修正应替换每个受影响池/受益者的旧版本。逐行相加前校验单位、sourceID去重、供应方边界与最终验收时序。本候选是方法指导，不是经核实的安全或环境批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | partial_incremental_retail_module |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 本精确原封路线的保管/结账及G_F贡献; 仅固定模块补全验收后用于完整零售 |
| excluded_use | 整件玩具环境声明; 安全/法规符合性; 全分类叶或其他SKU; 线上配送; 未补全总零售 |
| required_metadata | 全部参考限定信息; 来源及供应方边界; 原分母; 池/Q版本; S/F/O/T; 完整模块覆盖 |
| required_quality_disclosure | 部分覆盖; 未绑定身份; BOM/数量/供应方缺口; 测量不确定性; 来源年代及历史身份观察; 所有跳过工作 |
| update_trigger | BOM/包件/标签/渠道/门变化; 新真实交换; 验收修订; 资产寿命/供应方/来源变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| un-cpc3-62153 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62153 | 官方原注：第385组商品相关贸易; 仅分类背景 |
| ikea-lillabo-spec | handbook | https://www.ikea.com/us/en/p/lillabo-3-piece-train-set-60320094/ | 实际厂家套装身份、具名部件/材料、磁性连接及标签声明; 非完整质量BOM、无电池证明、零售活动证据或独立合规 |
| ghg-product2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard (2011), chapter9, printed page63; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 仅支持一般细分/物理关系分配。具体分池、驱动、寿命账及补全公式为本PCR明确设计及采集规则，不声称来源强制此玩具零售方法或授予符合性。 |
