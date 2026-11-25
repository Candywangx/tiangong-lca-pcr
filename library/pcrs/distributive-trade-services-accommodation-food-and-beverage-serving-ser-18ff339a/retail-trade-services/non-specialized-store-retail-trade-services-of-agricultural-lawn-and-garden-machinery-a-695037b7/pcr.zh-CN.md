---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-agricultural-lawn-and-garden-machinery-a-695037b7
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未开封含电池与充电器的完整电池割草机套装柜台自提零售服务

## 1. 范围与适用性

按配置限定的候选方法，涵盖增量零售服务及关联实物保管核算。执行b_scope至b_residual；a_pool固定最终接受和责任。使用前仍须取得实际批次、门店分类及完整前景数据。支持范围不完整必须明示。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.retail-trade-services.non-specialized-store-retail-trade-services-of-agricultural-lawn-and-garden-machinery-a-695037b7 |
| classification_refs | CPC 3.0 62186; narrower |
| covered_products | 有证据的非专门实体店内全新未开封、原厂随附电池及充电器的完整电池割草机套装柜台自提服务。 |
| excluded_products | 裸机、独售组件、二手商品、消费者割草及零售商装配/充电/测试/加油/维修/配送。 |
| representative_product | 未开封含电池与充电器的完整电池割草机套装柜台自提零售服务；按同质分层分别核验实际供应商、SKU/配置、批次及原始完整BOM。 |
| production_route | 供应商发货背景；零售接收、未开封保管、柜台交付、退货及残余历史；无零售商运行准备 |
| market_state | 全新原厂未开封完整套装，固定单一地区及批次配置；原厂装配、内含电芯和预充状态独立核实 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一套未开封电池割草机完整割草机套装的柜台自提零售服务 |
| How much | 一个不同原完整套装的一份最终有效接受服务 |
| How well | 以供应商批次/封闭证据支持正确声明配置及未开封完整状态，接收方确认接受；无现场准备 |
| How long or cycle | 一个预先固定零售池期间，含至声明截止日全部原历史及版本化迟到事件更正 |
| reference_flow_link | service_output |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 一套未开封电池割草机完整割草机套装的柜台自提零售服务 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 地区套装/SKU及签字完整批次BOM; 原厂装配/电芯/预充状态; 非专门店证据; 未开封封闭; 柜台路线及零售商无准备操作; 池期间/截止日及最终接受政策; 原ID/实物及接受历史; S/F/T/O及原来源版本; 供应方/模块范围及未知项 |

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| service_count | service_output | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | Q按c_acceptance为最终有效不同原ID数；一参考服务为1个，非kg或割草小时。Q=0不得归一化。 |
| custody_count | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit; failed_original_kit | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 实物原完整套装总事件计数用c_goods；failed_original_kit独立按c_background采用不同F来源数。包内集草袋、备用刀片、电芯或充电器不再计另一套装。 |
| electric_energy | retail_ac | 净热值, 低位热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 校准原kWh按c_electricity乘3.6一次；不得用铭牌功率或Ah转活动能耗默认值。 |
| carrier_mass | whole_kit_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按c_waste为完整载体实际净发出kg；计数与kg独立，以真实包ID关联。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 零售接收门实际未开封完整原套装，有批次/配置文件；保留供应商发货W_j及独立进货I_j |
| starting_condition_role | 增量零售起始门，独立原商品保管/背景连续性 |
| product_classification_scope | CPC62186商品组441的窄子集；草坪割草机44121，不是一般手工具或运输车 |
| recursive_input_rule | 客户退货/重售不得递归需求另一零售服务或制造向量；按b_background保留唯一原来源 |
| upstream_dataset_requirement | 实际地区完整套装发货门制造/原包装及不重叠进货；不得以裸机、容量缩放或泛材料替代 |
| disclosure | 区分实物卫星、增量服务、S/F/T/O、部分支持模块、供应方边界及未知状态 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| b_product_family | all inventory rows | 本PCR跨制造商及品牌适用于已声明产品类别。品牌、型号、目录货号、SKU及商品名用于识别实际研究数据，不是排他性准入条件。下述材质/功能、产品状态、明确规定的固定规格、工艺/渠道及门口条件仍须满足。不同供应商、配置、版次或包装BOM须分别建立同质分层及其匹配的原始背景向量，不得将混合SKU个数乘以一个标本向量。使用实际测量数量及有依据的换算。厂家案例中的质量、尺寸、额定参数、配方及包装声明仅作示例，绝不是全类别默认值或完整BOM/LCI。实际存在不同部件、支持清洁剂、包装或载体时，须在声明完整前提供具体原子卡、匹配属性/单位、采集方法及不重叠来源边界；超出已声明类别的实际状态或路线须另行审查扩展。适用性、身份或证据未知仍为未解决。本候选类别扩展不构成独立科学或翻译审核批准。 |  |
| b_scope | custody; retail; residual | 本窄范围仅覆盖有证据的非专门实体门店及单一所声明地区电池割草机套装配置的柜台自提，商品全新且零售商未开包。不含随附电池/充电器的裸机套装、旧机、独售电芯、配送、装配、充电、试割、加油和修理均不属此路线。官方产品页标明含7.5Ah电池、Rapid充电器和刀片系统的割草机套装；其链接的LM2130SP工具说明书列出集草袋、框架、预装碎草插块、侧排槽和刀片。这些资料确定产品范围，不证明现货、批次BOM或门店操作。Coming Soon不构成库存证据。须有批次签字装箱/BOM、原厂封闭、确切地区整机/电芯/充电器/附件身份及原厂装配和预充电状态；资料缺失为未知。零售商不得为证明原封路线而开包。此窄选核心还要求有文件证明声明门店区域无现场及房东供应的空间供暖/制冷、燃烧燃料和制冷剂设备。须查完整设施/租赁/设备记录及后场，不得因不准备割草机就推定不存在。HVAC、燃料、外购热或制冷剂存在或未知时，完整前必须具体扩展路线，以确切载体/物种/介质卡和实测活动/泄漏/库存数据核算；不得推定燃烧或制冷剂排放为零。 | `un-cpc62186`; `un-cpc44121`; `ego-lm2135sp`; `ego-mower-manual` |
| b_gates | custody; retail; residual | 增量服务始于零售商实际接收此原始完整包，止于柜台最终有效接受，并将残余和迟到退货历史保留至声明截止日。供应商制造及原包装止于供应商发货门；至零售接收门的进货运输为独立强制来源。消费者割草、接受后充电及消费者报废留在下游。实物保管卫星流supplier_receipt、returned_kit、handover_kit、supplier_return_kit和internal_asset_kit构成独立商品台账：不得把其流入总次数再次连接成增量服务的制造需求。b_background对原始内含来源只归属一次。failed_original_kit输入表示供应商发货门的原F制造；零售运行用电和实际废物发出也纳入增量服务，所有遗漏支持来源均须按b_completion补全后方可声称完整服务。 | `ghg-product-2011` |
| b_background | custody; retail; residual | 对每个原包ID j保留W_j：严格在供应商发货门的完整制造/原包装清单向量，含实际内装电池、充电器、已装和备用刀片、附件及实际完整包装BOM。另加经核验的至零售接收门进货向量I_j。供应方若将进货捆绑，必须有分阶段证据并只计一次该运输段；拆分未知阻止完整。不得用裸机质量或按Ah线性缩放的电池影响替代，也不得再加W_j已含的组件来源。每个截止日给同一原来源仅一个当前责任：S（最终有效销售；商品向量留给下游）、F（失败/丢失/报废或外部持有而无有效接受；计入原零售池）、T（供应商或具名内部资产保管者持续承担背景）、O（仍在未结库存/历史）。S/F/T/O为互斥背景归属状态，不是实物计数。退货/重售替换旧状态，不再制造套装；转演示须将同一W_j和I_j移至T，不得完整计F后再造一台。即使无实际废物发出，F背景仍保留；废物载体不再领取重复W_j。failed_original_kit即同一原发货制造需求，仅以W_F/N_F展开一次，并另加实际F进货I_F；不得在该输入之外再次加入展开W_F。 | `ego-lm2135sp`; `ego-mower-manual`; `ghg-product-2011` |
| b_completion | custody; retail; residual | 本核心明确为部分增量清单。声称完整零售服务前，须附上互不重叠的实测模块：接收/搬运及储存；建筑结构、货架、搬运推车以及收银/ICT/照明/HVAC资产；其实际运行和维修；零售商实际新增清洁/水/废水及包装；支付、通信、管理和安防后台；供应商进货、实际退供/内部/废物运输及完整废物处理。应用a_shared、a_assets、a_transport、a_digital、a_cleaning及c_aggregate。完整供应方包仅在有真实型号/合同、参考分母、原来源范围及确切已含制造、安装、燃料/电力、维修、运输和报废排除项时可保留整包。否则须为实际遗漏交换采集具名原子卡、适用协议和数量并同步双语后才能完整。只有模块名字而无这些数据并非完整数据集；数量/供应方缺失为未知，不得为零。仅当父表实际包含子表时才能扣除。不得重复计入公用工程、运输段、内含组件或供应方已含终端载体。 | `ghg-product-2011` |
| b_residual | whole_kit_waste; supplier_return_kit; handover_kit | 报废判定是商品转在库废物的内部状态变化：从商品仅扣一次N_K，废物发出时不再次扣商品。直接W_dispatch为实际托运净kg，扣除实测外加运输外包装皮重后不再扣在库/再用量。完整包称量包括原包装及内含电芯，不得再添加同一电芯或刀片输出。W_open + W_generated + W_waste_in = W_close + W_dispatch + W_waste_transfer + known_missing_waste_kg + signed_r_waste是独立kg对账，靠真实包ID和实测报废kg连接计数台账，不假定计数等于kg。已知丢失在库废物kg与未解带符号残差分别保留。须有处理接收方对电芯、整机、充电器、附件和原包装的完整处理及运输和实际排放/残渣范围证据，并排除供应方重叠。未知或已开包/损坏/拆解状态须具体扩展且阻止完整。无有效接受的外部持有保留真实接收人/状态及F背景，不自动成为零售商废物。 | `ego-mower-manual`; `ghg-product-2011` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| custody | 原完整套装保管卫星 | required | 每个原套装实物事件 | 独立实物/背景台账；非额外服务制造需求 | Q |
| retail | 未开封柜台零售服务 | required | 全部固定池运行及最终接受 | 部分增量服务核心 | Q |
| residual | 完整未开封套装废物发出 | conditional | 仅实际完整原套装废物发出；不存在须证据；未知阻止完整 | 完整载体及最终处理责任 | Q |

### 过程：原完整套装保管卫星（`custody`）

#### 输入

##### 产品流

###### 未开封电池割草机完整原厂套装（`supplier_receipt`）

零售商接收门的新供应商收货。实际完整原厂套装及原包装按一个保管对象计数；套装既不是裸机质量，也不是另购电池。

- 选定流：未开封电池割草机完整原厂套装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_R/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_custody`
- 来源：`ego-lm2135sp`; `ego-mower-manual`

###### 未开封电池割草机完整原厂套装（`returned_kit`）

仅当同一原套装仍未开封、完整且配置相同时记录客户实物退货。只检查外部封闭和供应商记录，不开包。已开封、损坏或缺件退货必须先补充具体状态扩展，才能完整。

- 选定流：未开封电池割草机完整原厂套装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_C/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_custody`
- 来源：`ego-lm2135sp`; `ego-mower-manual`

#### 输出

##### 产品流

###### 未开封电池割草机完整原厂套装（`handover_kit`）

柜台实际交付总数包括成功交付以及后来接受失效或拒绝接受但仍被外部保留的套装。逐次识别接收人及实际封闭状态；此实物移动独立于参考服务。

- 选定流：未开封电池割草机完整原厂套装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_H/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_custody`
- 来源：`ego-lm2135sp`; `ego-mower-manual`

###### 未开封电池割草机完整原厂套装（`supplier_return_kit`）

向具名供应商实际发出的未开封完整套装，保留原始来源历史。单独的财务贷记或背景责任转移不构成实物发出。

- 选定流：未开封电池割草机完整原厂套装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_T/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_custody`
- 来源：`ego-lm2135sp`; `ego-mower-manual`

###### 未开封电池割草机完整原厂套装（`internal_asset_kit`）

从此商品池实际转出未开封完整套装，进入具名内部演示资产账户。后续开包、装配、充电和演示属于独立资产过程，继承同一原制造来源。

- 选定流：未开封电池割草机完整原厂套装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_I/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_custody`
- 来源：`ego-lm2135sp`; `ego-mower-manual`

### 过程：未开封柜台零售服务（`retail`）

#### 输入

##### 产品流

###### 供应商发货门电池割草机完整原厂套装（`failed_original_kit`）

由不同F责任套装ID承担的原制造/原包装责任，不是另一次实物收货。绑定实际完整发货配置，含内装电芯、充电器、刀片、附件及原包装；不得用当前失败载体状态替代。按来源加权上游向量W_F/N_F仅展开本输入一次；F进货I_F仍为独立补全来源。N_F=0时保留已观察不存在证据及原来源台账，不除以N_F。

- 选定流：供应商发货门电池割草机完整原厂套装
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：N_F/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_retail`
- 来源：`ego-lm2135sp`; `ego-mower-manual`

###### 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`（`retail_ac`）

计量所声明增量零售电路使用点的交流电。固定池保留失败及闲置运行时段。电网组合、电压和供应方单独声明；不得根据电池容量、充电器功率或广告运行时间推算充电耗电。

- 选定流：电力，交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：3.6*E_p/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_retail`
- 来源：`ghg-product-2011`

#### 输出

##### 产品流

###### 一套未开封电池割草机完整割草机套装的柜台自提零售服务（`service_output`）

柜台门一份最终有效接受、对应一个唯一原始完整套装的服务。此为零售服务，不是割草、割草机制造或一次电池充电循环。

- 选定流：一套未开封电池割草机完整割草机套装的柜台自提零售服务
- 流属性/单位：物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_retail`
- 来源：`ghg-product-2011`

### 过程：完整未开封套装废物发出（`residual`）

#### 输出

##### 废物流

###### 含内装电池及原包装的报废未开封电池割草机完整原厂套装（`whole_kit_waste`）

作为一件废物托运实物发往具名合格处理接收方的完整未开封原套装。整机、电池、充电器、附件及原包装一并称量；单独运输外包装排除并须独立扩展。本行不涵盖破损、已开封、拆解、泄漏或电芯分离废物。

- 选定流：含内装电池及原包装的报废未开封电池割草机完整原厂套装
- 流属性/单位：质量 / kg
- 数量规则：W_dispatch/Q
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_residual`
- 来源：`ghg-product-2011`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| a_pool | custody; retail; residual | 在观察销售前，预先固定一个同质地区套装配置、门店/渠道、观察期间、截止日、退货政策及池ID。纳入所有同配置成功、拒收、接受撤销、重复尝试、内部转移、丢失、闲置和零销售批次。Q为截至截止日最新接受仍有效的不同原始ID数；接受无效不计，只有财务调整而接受仍有效时Q不变，撤销不得再次相减。实际交付/退回总次数独立保留。迟到实物退货或接受撤销须以实际日期替换原池分子、分母、去向和背景版本，不得将旧负荷移入方便的后续销售池或重售重复计量。Q=0明确为不能归一化，保留完整原分子；不得删除批次或虚构分母。 | `ghg-product-2011` |
| a_shared | retail; custody; residual | 先按实际来源/电表细分。剩余原始共享来源X_e按X_ep=X_e*d_ep/sum_b(d_eb)仅分配一次，涵盖全部实际受益方，包括空置预留、失败和闭店时段。采集完整且正值/已知的驱动量，对账sum_p X_ep=X_e。搬运活动用实测搬运设备预留秒数；动力设备、收银设备、灯和风扇用含闲置的实测设备预留时间；物理设施固定池和货架另用实测服务面积×时间；此核心路线在b_scope具体扩展前不纳入任何门店/房东供暖制冷、燃料或制冷剂来源；不存在未定义热负荷分配方法。上述为独立来源范围。完整驱动总和为零或未知时为未解决，不能删除来源或均分。冻结原事件/受益方/池/版本链接，后续库存或销售不得重新分配旧间接负荷。这些实测因果驱动由本PCR规定；GHG标准支持细分/物理关系，不支持虚构数字默认值。 | `ghg-product-2011` |
| a_assets | retail; custody; residual | 对每个实际建筑、货架、推车、收银、ICT、灯及可重复使用清洁工具资产（HVAC仅在b_scope扩展后），保留确切型号/BOM或已核验完整包向量A_a（制造/安装门），并分别界定进货、运行、事件维修及报废。包内已含范围排除于另列模块。当前原池责任f_apv=e_recorded_ap/L_expected_av，e_recorded_ap为实测累计受益方暴露量，L_expected_av为涵盖全部受益方且有证据的预期全寿命总暴露量；建筑/货架用服务面积×时间，动力或搬运设备用预留设备时间，不得用面积分配动力灯。每件可重复清洁工具采用e_recorded_ap=sum逐次实际清洁表面实测m2，保留重复遍次，L_expected_av为全部寿命使用者同单位的累计清洁m2；须测遍次边界/面积，不等于默认平面面积。比例非负且历史累计<=1。寿命修订须替换所有以往受益方比例及已记向量，而非再次计完整A_a或只修当前池。报废时L_final=sum全部实测寿命暴露，以e_recorded_ap/L_final替换全部分配并补齐完整残余。未开封库存套装转演示经T继承同一原W_j/I_j。实际维修、资产交付/迁移/报废运输及最终处理事件，先将原事件向量归属确切资产ID：单资产事件直接归属；共享维修/处理事件按每件被服务资产实测处理秒数除以正值且已知的全部资产处理秒数总和，运输执行a_transport。再应用该资产同一完整历史受益方比例f_apv，寿命修订/退役后替换全部历史分配。不得把完整事件仅归当前销售池。保留来源/资产/事件/受益方/版本ID，排除完整供应方包已含事件。真实维修材料或完整对象修理服务仍为其实际交换，维修材料kg不得冒充完整资产。报废完整设备直接净称已排除拆下件：直接称重或BOM重建二选一。实际终端载体kg仅乘一次最终寿命责任比例，不再乘制造比例。资产取得/报废计数仅验证台账，不构成第二份物品消耗输入。 | `ghg-product-2011` |
| a_transport | custody; residual; retail | 供应商进货、实际退货、内部转移及废物/资产/材料路线须保留车次/路段/来源ID、日期、载货与空驶距离、实测燃料或供应方活动、真实托运质量/体积及容量约束证据。优先使用确切实际托运的供应方清单，证明燃料、基础设施及空返覆盖。否则先分配原车次向量：仅质量有证据为限制时用实测吨×km，体积限制用占用体积×km；未知或其他限制须审核匹配计量方法。保留实际空驶段vehicle_km>0及根据时间戳/运行状态测得的静止idle_hours及其实测燃料/供应方来源；吨公里或行驶距离为零不得删除任一来源。仅有范围证据时供应方可包含这些确切已观察空驶/闲置期间，排除重叠单列燃料/活动。否则每个空驶段原向量X_empty按关联原路线预约r_empty_p=sum reserved_capacity_p*empty_km_p分配，X_empty_p=X_empty*r_empty_p/sum_b r_empty_b。每个静止闲置原向量X_idle采用r_idle_p=sum reserved_capacity_p*idle_hours_p，X_idle_p=X_idle*r_idle_p/sum_b r_idle_b。预约运力在质量限制时为实测预约kg，体积限制时为预约m3，全部受益方必须同单位且有实际适用性证据。保留全部实际受益方及空置/失败预约、正且已知驱动总和、实测空驶距离及静止时长、来源/托运/所有者版本及燃料；总和/运力覆盖未知阻止完整。这些来源向量与载货移动及彼此互不重叠。再按b_background/a_assets/a_shared将托运来源归入原商品/资产/材料责任及受益池/版本。供应方已归属托运只省略重复车辆分配，不省略原来源/所有者归属。仅有确切最终所有者/池证据的数量可省该步。保留attribution_level、original_owner及总和为实际载体的来源份额。已知份额不得重归一化来隐藏未知部分。 | `ghg-product-2011` |
| a_digital | retail | 对支付授权、管理、通信及安防后台分别采集实际不重叠供应方范围；仅互联网接入包不涵盖其他服务。每个共享购物篮授权/管理事件e采用X_event_ep=X_event_e*processing_seconds_ep/sum_b processing_seconds_eb，按实测逐行处理秒数涵盖全部受益方及失败尝试/空置预约，仅一个来源ID且完整总和正且已知；份额合计1，不得对每池全额计多SKU事件。对每个唯一原网络区间i，H_ip=source_hours_i*endpoint_seconds_ip/sum_b endpoint_seconds_ib，采用涵盖全部受益方的实测端点预留连接秒数，含空置/失败预留，完整总和须正且已知。将H_ip连接确切供应方来源向量/分母，不虚构SKU专属连接。相同供应方来源小时不得再作为重叠固定/活跃/闲置小时计入。每次摄像采集c按涵盖全部受益方及空置预约的互斥区域/时段，a_cp=sum area_cpzt*duration_czt，单位m2*s；alpha_cp=a_cp/sum_b a_cb，完整总和须正且已知；X_capture_cp=X_capture_c*alpha_cp。冻结该原采集/片段受益方映射。存储活动B_cp=sum互斥留存片段区间bytes_ci*retention_seconds_ci*alpha_cp，单位byte*s，采用每区间实际字节及同一冻结原映射，不按后续销售。1 GB=10^9 bytes，1 GiB=2^30 bytes；影像份额或来源范围未知阻止完整。保留source_hours、endpoint_seconds、capture_map、original_owner/pool/version及完整供应方分母。按c_aggregate恢复归一包为原向量，仅作一次所有者归属。 | `ghg-product-2011` |
| a_cleaning | retail; custody; residual | 零售商实际清洁须记录接收时每个确切原制剂来源及完整原容器/BOM，活性物和浓度仅依供应商证据。采用持久原来源方程m0_j=sum历史最终source_origin_export_jk+sealed_unused_kg_j+opened_residue_kg_j+retained_other_kg_j，所有当前状态及历史最终外排互斥且仅覆盖原制剂。retained_other包含清洁表面实际留存的原来源薄膜，直到其真实外排；薄膜未知不为零。每次状态变化替换旧状态，保留历史所有者/池版本。新加水/污物或外部抹布/容器不是原制剂kg。使用/领出为内部事件，不构成第二次最终输出。溢洒/冲洗仅指最终来源原有输出：仍在现场的溢洒物为当前留存库存，收进冲洗液时替换旧状态，不能两者均计。直接实测完整冲洗液/废物kg是另一个载体，不再次乘来源组分。对原来源j的实测原制剂m0_j，记录首次使用领出u_jp及不重叠的使用前丢失/报废l_jp，最终所有者比例h_jp=(u_jp+l_jp)/m0_j。按h_jp仅一次将实际完整原制剂/容器制造及独立进货向量归入原受益池/版本；冲洗水及新污物不进入h_jp。跨期保留每个原来源部分份额、载体/事件ID、首次使用或使用前F所有者、原池及替换版本，包括后续载体处理；不得在后来清洁事件重新归属旧来源份额。保留全部以往分配及未领库存；更正时替换历史分配，并对账累计比例<=1及最终残余责任。终端原容器按实际载体kg仅乘一次最终来源所有者比例，不另作制造输入。输入水表已不含内部回用，不再扣回用。直接废水为实测条件下的V_discharge*rho，供水/蒸发/存储平衡独立，不作推测重建。每个实际制剂、水、载体、抹布、原和新增容器及最终处理须作为具名独立交换，或有确切范围的已验证真实服务包；未测或存在状态未知阻止完整。不得在完整载体之外重复计溶液水或废物组分。 | `ghg-product-2011` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_custody | custody | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit | 序列化保管及原背景台账 | original_id; physical_event_id; acceptance_event_id; event_date; recipient; package_state; regional_model; factory_BOM; closure_evidence; factory_assembly; factory_precharge; site_hvac_presence; landlord_hvac_presence; fuel_presence; refrigerant_presence; facility_scope_evidence; N_open; N_R; N_C; N_close; N_H; N_T; N_I; N_K; N_missing; signed_r_goods; W_j; I_j; stage_separation; s_j; f_j; t_j; o_j; original_owner; pool_id; version | 每次收货、柜台移动、退货和转移扫描原箱/序列ID；不打开包装，用签字供应商完整套装包装/封闭证据。两个截止点盘点实物商品，独立提取接受历史、供应商发货W_j和独立进货I_j。按实际ID将报废计数连接cp_residual实测kg。以独立复盘及发票审核验证扫描/计数控制，调查缺失ID及带符号残差。 | 个；按各原单位的原清单向量 | 每次移动、两个截止盘点及每次迟到事件修订 | 完整固定池期间及更早原来源历史；保留迟到事件修订 | 实际非专门店接收、柜台及具名转移接收方 | 每参考流 | 签字批次/BOM、封闭照片、发票、接收签名和对账扫描 |
| cp_retail | retail | failed_original_kit; retail_ac; service_output | 接受事件及电路计量记录 | original_id; acceptance_event_id; event_date; latest_valid_acceptance; cut_off; pool_id; version; N_F; W_F; I_F; W_j; I_j; f_j; original_id_background; stage_separation; meter_id; circuit_scope; meter_start; meter_end; multiplier; E_raw; d_ep; d_eb; parent_contains_child; original_owner; operator_action; route_absence_evidence; site_hvac_presence; landlord_hvac_presence; fuel_presence; refrigerant_presence; facility_scope_evidence | 期间起止和每次电路变更读取已校准电表；保留实际父子电路图、倍率及至少月度账单对账。每次接受、拒绝和撤销连接实物ID，不把退款当退货。逐次搬运观察开包/装配/充电/测试不存在证据，并核对视频/工单；检查完整期间现场/房东HVAC、燃料及制冷剂不存在的设施/租赁/设备记录；路线状态未知保持未解决。期初/期末及维修后以可追溯标准独立校表，记录精度/不确定性、读数失败及保留闲置时间。 | 原kWh；乘3.6后MJ；接受服务个 | 每次接受事件；期间表端点；每月发票核对 | 完整固定池期间含零销售及闲置；所有后续接受修订 | 具名柜台及实际声明电路 | 每参考流 | 电表证书、可追溯核查读数、事件日志及路线证据 |
| cp_residual | residual | whole_kit_waste | 完整套装废物托运及在库台账 | consignment_id; original_id; condemnation_package_id; measured_condemnation_kg; N_K; gross_kg; tare_external_overpack_kg; package_state; W_open; W_generated; W_waste_in; W_close; W_waste_transfer; signed_r_waste; known_missing_waste_kg; recipient; treatment_scope; source_id; original_owner; pool_id; version | 以校准秤逐件称完整原套装或完整托运；外加运输包装皮重单独称，保留原套装包装。每日零点/核查砝码检查，期初/期末及维修后可追溯校准，记录分辨率/不确定性。将ID与报废计数、两次在库废物盘点及签字处理联单核对。直接发出净量为最终载体量；不打开包装检查原封闭；未知/受损状态须扩展。 | 完整载体kg；独立个数链接 | 每次报废判定、移动及托运；两个截止点 | 完整固定池及在库废物历史含迟到修订 | 具名废物库及接收方；实际处理链 | 每参考流 | 秤核查、封闭影像、处理接收及范围证据 |
| cp_support_retail | retail | failed_original_kit; retail_ac; service_output | 外部补全来源及分配记录 | source_id; source_scope; raw_X_mk; z_mk; D_m_original; provider_scope; direction; flow_type; property; unit; attribution_level; source_share; owner_fraction; original_owner; pool_id; version; X_e; d_ep; d_eb; A_a; e_recorded_ap; L_expected_av; L_final; lifetime_version; asset_id; asset_event_id; asset_processing_seconds_p; asset_processing_seconds_all; cleaned_surface_m2; pass_id; trip_id; leg_id; consignment_id; loaded_km; empty_km; idle_hours; vehicle_km; fuel; reserved_capacity_p; reserved_capacity_unit; capacity_eligibility; r_empty_p; r_empty_b; r_idle_p; r_idle_b; X_empty; X_idle; mass_kg; volume_m3; capacity_constraint; source_hours; source_hours_i; endpoint_seconds; endpoint_seconds_ip; endpoint_seconds_ib; H_ip; X_event_e; processing_seconds_ep; processing_seconds_eb; within_event_share; capture_map; capture_id; clip_id; area_cpzt; duration_czt; a_cp; a_cb; alpha_cp; X_capture_c; bytes; bytes_ci; retention_seconds; retention_seconds_ci; B_cp; formulation_source_kg; m0_j; u_jp; l_jp; h_jp; original_formulation_container_vector; separate_inbound_vector; source_origin_exports; source_origin_export_jk; original_source_portion_kg; carrier_id; first_use_event_id; preuse_loss_event_id; sealed_unused_kg; opened_residue_kg; retained_other_kg; V_discharge; rho; parent_contains_child; Q | 针对实际retail过程，使用前采集b_completion供应方原件及来源范围矩阵；读取校准活动表、车次日志、实测暴露/面积/设备时间、事件份额、原摄像映射、端点秒数以及清洁库存/废水计量。保留来源原字段及原单位、实际日期与所有受益方。使用计量设备时每日检查表/秤零点及已知标准，期初/期末/维修后取得可追溯校准并保留证书不确定性。核验签字型号/BOM/合同范围及寿命证据，冻结原所有者历史；查重来源ID及供应方已含范围。各过程协议是同一来源台账的视图，不是另一次计量或分配。存在/数量未知须具名扩展并阻止完整服务。 | 交换原单位及驱动SI单位；明确供应方分母 | 每个来源事件及期间；至少月度及每次寿命/迟到事件修订对账 | 完整池及全部以往资产/来源受益方和最终残余 | 实际retail来源；完整供应方门及共享受益方 | 先c_support后c_aggregate；外部分母仅恢复一次；确切来源ID去重；不得汇总不同单位 | 供应方原向量、原始活动、校准、历史比例及来源/所有者对账 |
| cp_support_custody | custody | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit | 外部补全来源及分配记录 | source_id; source_scope; raw_X_mk; z_mk; D_m_original; provider_scope; direction; flow_type; property; unit; attribution_level; source_share; owner_fraction; original_owner; pool_id; version; X_e; d_ep; d_eb; A_a; e_recorded_ap; L_expected_av; L_final; lifetime_version; asset_id; asset_event_id; asset_processing_seconds_p; asset_processing_seconds_all; cleaned_surface_m2; pass_id; trip_id; leg_id; consignment_id; loaded_km; empty_km; idle_hours; vehicle_km; fuel; reserved_capacity_p; reserved_capacity_unit; capacity_eligibility; r_empty_p; r_empty_b; r_idle_p; r_idle_b; X_empty; X_idle; mass_kg; volume_m3; capacity_constraint; source_hours; source_hours_i; endpoint_seconds; endpoint_seconds_ip; endpoint_seconds_ib; H_ip; X_event_e; processing_seconds_ep; processing_seconds_eb; within_event_share; capture_map; capture_id; clip_id; area_cpzt; duration_czt; a_cp; a_cb; alpha_cp; X_capture_c; bytes; bytes_ci; retention_seconds; retention_seconds_ci; B_cp; formulation_source_kg; m0_j; u_jp; l_jp; h_jp; original_formulation_container_vector; separate_inbound_vector; source_origin_exports; source_origin_export_jk; original_source_portion_kg; carrier_id; first_use_event_id; preuse_loss_event_id; sealed_unused_kg; opened_residue_kg; retained_other_kg; V_discharge; rho; parent_contains_child; Q | 针对实际custody过程，使用前采集b_completion供应方原件及来源范围矩阵；读取校准活动表、车次日志、实测暴露/面积/设备时间、事件份额、原摄像映射、端点秒数以及清洁库存/废水计量。保留来源原字段及原单位、实际日期与所有受益方。使用计量设备时每日检查表/秤零点及已知标准，期初/期末/维修后取得可追溯校准并保留证书不确定性。核验签字型号/BOM/合同范围及寿命证据，冻结原所有者历史；查重来源ID及供应方已含范围。各过程协议是同一来源台账的视图，不是另一次计量或分配。存在/数量未知须具名扩展并阻止完整服务。 | 交换原单位及驱动SI单位；明确供应方分母 | 每个来源事件及期间；至少月度及每次寿命/迟到事件修订对账 | 完整池及全部以往资产/来源受益方和最终残余 | 实际custody来源；完整供应方门及共享受益方 | 先c_support后c_aggregate；外部分母仅恢复一次；确切来源ID去重；不得汇总不同单位 | 供应方原向量、原始活动、校准、历史比例及来源/所有者对账 |
| cp_support_residual | residual | whole_kit_waste | 外部补全来源及分配记录 | source_id; source_scope; raw_X_mk; z_mk; D_m_original; provider_scope; direction; flow_type; property; unit; attribution_level; source_share; owner_fraction; original_owner; pool_id; version; X_e; d_ep; d_eb; A_a; e_recorded_ap; L_expected_av; L_final; lifetime_version; asset_id; asset_event_id; asset_processing_seconds_p; asset_processing_seconds_all; cleaned_surface_m2; pass_id; trip_id; leg_id; consignment_id; loaded_km; empty_km; idle_hours; vehicle_km; fuel; reserved_capacity_p; reserved_capacity_unit; capacity_eligibility; r_empty_p; r_empty_b; r_idle_p; r_idle_b; X_empty; X_idle; mass_kg; volume_m3; capacity_constraint; source_hours; source_hours_i; endpoint_seconds; endpoint_seconds_ip; endpoint_seconds_ib; H_ip; X_event_e; processing_seconds_ep; processing_seconds_eb; within_event_share; capture_map; capture_id; clip_id; area_cpzt; duration_czt; a_cp; a_cb; alpha_cp; X_capture_c; bytes; bytes_ci; retention_seconds; retention_seconds_ci; B_cp; formulation_source_kg; m0_j; u_jp; l_jp; h_jp; original_formulation_container_vector; separate_inbound_vector; source_origin_exports; source_origin_export_jk; original_source_portion_kg; carrier_id; first_use_event_id; preuse_loss_event_id; sealed_unused_kg; opened_residue_kg; retained_other_kg; V_discharge; rho; parent_contains_child; Q | 针对实际residual过程，使用前采集b_completion供应方原件及来源范围矩阵；读取校准活动表、车次日志、实测暴露/面积/设备时间、事件份额、原摄像映射、端点秒数以及清洁库存/废水计量。保留来源原字段及原单位、实际日期与所有受益方。使用计量设备时每日检查表/秤零点及已知标准，期初/期末/维修后取得可追溯校准并保留证书不确定性。核验签字型号/BOM/合同范围及寿命证据，冻结原所有者历史；查重来源ID及供应方已含范围。各过程协议是同一来源台账的视图，不是另一次计量或分配。存在/数量未知须具名扩展并阻止完整服务。 | 交换原单位及驱动SI单位；明确供应方分母 | 每个来源事件及期间；至少月度及每次寿命/迟到事件修订对账 | 完整池及全部以往资产/来源受益方和最终残余 | 实际residual来源；完整供应方门及共享受益方 | 先c_support后c_aggregate；外部分母仅恢复一次；确切来源ID去重；不得汇总不同单位 | 供应方原向量、原始活动、校准、历史比例及来源/所有者对账 |

### 计算规则

| rule_id | 适用对象 | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| c_acceptance | service_output | Q=count_distinct(截止日latest_valid_acceptance=true的original_id); 仅Q>0时service_output=Q/Q=1个。纯财务事件保留接受。真实撤销只改变一次最新状态，不依赖实物退回。 | original_id; acceptance_event_id; event_date; latest_valid_acceptance; cut_off; pool_id; version | Q; service_output | `ghg-product-2011` |
| c_goods | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit | 仅商品计数平衡：N_open+N_R+N_C=N_close+N_H+N_T+N_I+N_K+N_missing+signed_r_goods。N_K为内部报废转态，N_missing为确认丢失，signed_r_goods保留调查及不确定性。废物发出不进入此商品方程。各卡采用独立实际总事件数仅除一次Q，不得用最终有效Q代替实物N_H。 | N_open; N_R; N_C; N_close; N_H; N_T; N_I; N_K; N_missing; signed_r_goods; original_id; physical_event_id; recipient; package_state; Q; cp_custody | 实物保管卡；商品库存对账 | `ego-lm2135sp` |
| c_background | supplier_receipt; returned_kit; handover_kit; supplier_return_kit; internal_asset_kit; failed_original_kit | 每个j须s_j+f_j+t_j+o_j=1，并仅一个当前0/1归属状态。原责任向量B_S=sum_j s_j*(W_j+I_j)，B_F=sum_j f_j*(W_j+I_j)，B_T=sum_j t_j*(W_j+I_j)，B_O=sum_j o_j*(W_j+I_j)；合计等于唯一原来源向量。N_F=sum_j f_j，W_F=sum_j f_j*W_j，I_F=sum_j f_j*I_j；failed_original_kit=N_F/Q，N_F>0时上游用按来源加权的制造向量W_F/N_F。这是仅计一次的同一W_F，不是原B_F之外的额外负荷；I_F为独立进货来源，B_F=W_F+I_F。下游商品采用有证据的B_S/Q，不假定每服务均为一份新套装。保留T接收责任连续性及O库存，退货/重售替换全部历史版本。 | original_id; W_j; I_j; N_F; W_F; I_F; s_j; f_j; t_j; o_j; original_owner; pool_id; version; stage_separation; cp_custody; cp_retail | B_S; B_F; B_T; B_O; N_F; W_F; I_F | `ghg-product-2011`; `ego-lm2135sp` |
| c_electricity | retail_ac | 实际不重叠电路E_raw=(meter_end-meter_start)*multiplier，单位kWh；E_p=sum_e E_raw_e*d_ep/sum_b d_eb，仅未归属此确切原池的来源按a_shared分配。retail_ac=3.6*E_p/Q MJ。3.6换算只用一次。保留parent_contains_child及来源范围；不得扣独立子表。 | meter_start; meter_end; multiplier; E_raw; d_ep; d_eb; parent_contains_child; original_owner; pool_id; version; Q; cp_retail | 每参考流retail_ac MJ | `ghg-product-2011` |
| c_waste | whole_kit_waste | W_dispatch=sum完整原套装托运实际发出gross_kg-tare_external_overpack_kg；whole_kit_waste=W_dispatch/Q kg。直接发出实测值不得再扣留存。独立对账W_open+W_generated+W_waste_in=W_close+W_dispatch+W_waste_transfer+known_missing_waste_kg+signed_r_waste，并关联N_K实测kg。实际发出处理覆盖完整内含套装，不另加电芯或包装处理。 | gross_kg; tare_external_overpack_kg; consignment_id; W_open; W_generated; W_waste_in; W_close; W_waste_transfer; signed_r_waste; known_missing_waste_kg; condemnation_package_id; measured_condemnation_kg; N_K; Q; cp_residual | W_dispatch; 每参考流whole_kit_waste kg | `ghg-product-2011` |
| c_support | retail; custody; residual | 采用cp_support_retail、cp_support_custody及cp_support_residual的实际实测原字段，执行a_shared/a_assets/a_transport/a_digital/a_cleaning。保留source_id、纳入边界、attribution_level、original_owner/pool/version及原模块分母。此处仅算分子向量，不将任何来源归一到Q。未知计量或来源重叠仍为不完整。 | X_e; d_ep; d_eb; A_a; e_recorded_ap; L_expected_av; L_final; lifetime_version; asset_id; asset_event_id; asset_processing_seconds_p; asset_processing_seconds_all; cleaned_surface_m2; pass_id; trip_id; leg_id; consignment_id; loaded_km; empty_km; idle_hours; vehicle_km; fuel; reserved_capacity_p; reserved_capacity_unit; capacity_eligibility; r_empty_p; r_empty_b; r_idle_p; r_idle_b; X_empty; X_idle; mass_kg; volume_m3; capacity_constraint; attribution_level; original_owner; pool_id; version; source_hours; source_hours_i; endpoint_seconds; endpoint_seconds_ip; endpoint_seconds_ib; H_ip; X_event_e; processing_seconds_ep; processing_seconds_eb; within_event_share; capture_map; capture_id; clip_id; area_cpzt; duration_czt; a_cp; a_cb; alpha_cp; X_capture_c; bytes; bytes_ci; retention_seconds; retention_seconds_ci; B_cp; formulation_source_kg; m0_j; u_jp; l_jp; h_jp; original_formulation_container_vector; separate_inbound_vector; source_origin_exports; source_origin_export_jk; original_source_portion_kg; carrier_id; first_use_event_id; preuse_loss_event_id; sealed_unused_kg; opened_residue_kg; retained_other_kg; V_discharge; rho; cp_support_retail; cp_support_custody; cp_support_residual | 原支持分子向量；未解决范围/数量登记 | `ghg-product-2011` |
| c_aggregate | retail; custody; residual | 对每个确切模块m的归一清单z_mk，以有证据的原分母、池和版本恢复原向量X_mk=z_mk*D_m_original；已有实际原X_mk则直接使用，不再乘D。来源→托运→最终所有者的必要比例仅用一次，除非有确切最终所有者/池归属证据。逐个相同交换k、属性、单位、方向及类型，在确切来源ID去重后，将兼容原核心用电/处理分子、由同一failed_original_kit制造展开W_F及独立I_F表示的原B_F和不重叠原支持X_mk相加，再仅除一次Q得x_final_k=N_final_k/Q。实物保管卫星总次数及S/T/O商品背景不进入此服务负荷和。商品卫星保留为独立关联实物台账，不构成重复需求。不得kg与MJ相加、归一值与原值相加或合并不兼容供应方边界。完整数据集不得有未知遗漏模块；否则仅报告已披露部分增量结果及Q=0不能归一化池的原值。 | z_mk; D_m_original; X_mk; source_id; provider_scope; direction; flow_type; property; unit; attribution_level; source_share; owner_fraction; original_owner; pool_id; version; B_F; core_raw_numerator; Q; cp_support_retail; cp_support_custody; cp_support_residual | x_final_k; 完整性披露 | `ghg-product-2011` |

### 数据质量要求

| requirement_id | 适用对象 | Requirement | Evidence |
| --- | --- | --- | --- |
| q_lot | custody | 一个实际地区套装/批次，具有签字原厂包装/BOM及封闭记录；目录完整套装规格与真实本地库存及原厂装配/预充电分开。电池/充电器/刀片/背景不重复。 | 供应商记录；序列化接收影像；来源阶段清单审核 |
| q_coverage | retail; custody; residual | 固定池保留全部事件、闭店/闲置日及零销售批次；迟到事件替换旧版本。计量有SI换算、校准不确定性及完整期间。缺失为未知。 | 电表/秤校准证书及检查日志；异常台账 |
| q_completion | retail; custody; residual | b_completion所有模块、确切外部边界、原所有者历史及载体处理均有证且去重前，不得完整。新增真实交换进入具名双语卡和支持字段。 | 来源ID范围矩阵；供应方原件；版本化补全及行绑定登记 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| v_identity | all inventory rows | 数据集完整前，对每个当前未绑定行须以Tiangong直读身份核对包/服务/废物状态、方向/类型、官方双语名、属性/单位和适当区室，并保留官方原response及精确哈希receipt。电力绑定仅确认使用点交流电产品能量，不证明电网性能。不得用泛化机械替代完整套装或以商品流替代服务。核实所有必需限定信息和供应商批次BOM。 | `ego-lm2135sp`; `ego-mower-manual` |
| v_reconcile | custody; retail; residual | 以真实完整期间、校准证据和原ID执行c_acceptance/c_goods/c_background/c_electricity/c_waste/c_support/c_aggregate。分别检验实际总次数库存、在库废物kg、最终有效Q及S/F/T/O。保留带符号差额、不确定性和未知量，不钳为零，不造负基本排放或自动抵扣。完整驱动未知/为零、迟到退货未修订、供应方阶段拆分缺失及废物未表征均阻止完整。 | `ghg-product-2011` |
| v_extension | custody; retail; residual | 对零售商开包、装配、插电池或充电、接市电测试、换刀、损坏/不完整包装、加包装、清洁及配送保留正面的存在/不存在证据。任何发生均改变此核心路线：保留事件来源及原负荷，加入真实状态的原子卡/过程和采集/计算字段，双语对齐再重新生成后才能完整。发生情况未知不得视作不存在。消费者使用说明不授权零售商操作。本PCR不产生无依据数值默认值、符合标准声明或方法批准。 | `ego-mower-manual`; `ghg-product-2011` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | unit_process |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 匹配未开封地区套装柜台自提服务，按b_completion/c_aggregate补全并区分实物卫星/背景；明示部分增量研究仅用于其声明范围 |
| excluded_use | 割草机制造或使用；其他电池/地区套装；配送/装配/充电/测试；仅此部分核心即声称完整服务；符合GHG标准或科学批准 |
| required_metadata | 全部参考限定信息；原来源/池/版本ID；最终接受/截止日；SI换算；完整模块门；独立商品卫星 |
| required_quality_disclosure | 未绑定行；批次/BOM缺口；部分核心及缺模块；带符号残差；零Q原池；校准/不确定性；S/F/T/O；历史身份观察日期 |
| update_trigger | 任何配置/批次/路线/供应方变化；新增交换；校准失败；寿命、接受或迟到实物事件修订；来源范围变化 |

## 11. 数据源

保留的厂家及零售商来源说明本产品类别的案例和明确引用的技术区别，不将适用性限定于所列品牌/型号，也不为其他配置提供数值清单默认值。实际产品与供应商证据仍须按b_product_family取得。

| Source id | Type | Reference | Use |
| --- | --- | --- | --- |
| un-cpc62186 | official_guidance | United Nations Statistics Division, CPC3.0 subclass62186 explanatory note, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/62186 | 仅限组441商品贸易服务；窄门店/渠道边界须实际证据 |
| un-cpc44121 | official_guidance | United Nations Statistics Division, CPC3.0 subclass44121 Mowers for lawns, parks or sportsgrounds, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/44121 | 441内草坪割草机商品身份；非一般手工具 |
| ego-lm2135sp | handbook | EGO, POWER+21-inch Select Cut self-propelled mower kit LM2135SP manufacturer product page, https://egopowerplus.com/21-inch-self-propelled-mower-select-cut-lm2135sp/ (retrieved2026-10-30) | 确切目录套装、已装/可互换刀片及不同电池/充电器配置；非批次BOM、现货或耗能因子 |
| ego-mower-manual | handbook | EGO, 56-Volt Lithium-Ion Cordless Lawn Mower operator manual LM2130SP/LM2130/LM2150SP and FC variants, PDF pp15 and20-24, https://egopowerplus.com/mpattachment/file/download/id/544/ (retrieved2026-10-30) | 实际工具包装及下游开包/装配/换刀区别；套装电芯/充电器仍须确切批次证据 |
| ghg-product-2011 | standard | WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard (2011), Chapter9 pp63-64, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 支持细分、物理关系及一致性；本PCR实测驱动、寿命/来源历史设计为明确方法选择，不声称完整标准符合性 |
