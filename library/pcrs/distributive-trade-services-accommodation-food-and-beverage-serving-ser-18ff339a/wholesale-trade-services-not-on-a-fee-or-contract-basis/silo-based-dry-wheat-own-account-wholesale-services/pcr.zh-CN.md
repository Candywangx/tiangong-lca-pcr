---
pcr_id: pcr.silo-based-dry-wheat-own-account-wholesale-services
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 筒仓干小麦自营批发服务

## 1. 范围与适用性

本 PCR 定义自营商人的服务附加过程：购入已干燥、已清理的非播种用小麦，取得所有权并承担转售风险，开展商业筒仓装卸、储存状态监测和环境空气通风，再将有记录的货批转售给企业买方。终点为实际约定的商业交接，具有身份、数量、品质及验收记录；仅有物理发运或一张未结算发票，均不能单独证明该交接。参考对象为一个已完成货批，并以实际谷物质量和停留时长加以限定。

范围排除种植、收获、专门干燥或初级清理、种子生产、制粉及饲料制造、零售、收费或佣金代理和独立出售的纯仓储服务。另行必需的修复或加工必须声明自身边界及全部实际上游服务输入，不能隐含为无损储存。FAO 仓储指南支持接收、装卸及状态监测职责，但不确定所有权、通用安全阈值或清单配方。实际数据包必须提供适用的地方要求与合同标准。

本数据集是批发作业服务，不是交付小麦数据集或企业清单。全部转售小麦（包括其后损失的小麦）的上游生产均不进入本服务的交换。完整链条声明之前，关联商品系统必须量化上游损失调整，并与成功售出商品一起仅计入一次。本服务按声明的覆盖范围纳入物理废物处理及其处置；关联商品调整不得重复计入这些活动。

## 2. 产品类别身份

| Field | Value |
| --- | --- |
| canonical_pcr_id | `pcr.silo-based-dry-wheat-own-account-wholesale-services` |
| classification_refs | CPC 3.0 `61011`；较窄语义子集 |
| covered_products | 已干燥、已清理非播种小麦的筒仓自营批发服务 |
| excluded_products | 全部谷物生产及专门加工；种子；其他谷物、油籽及饲料；代理；零售；独立仓储服务 |
| representative_product | 向企业买方完成交接的筒仓干小麦批发货批服务 |
| production_route | 取得所有权并核验接收品质；筒仓储存、装卸与环境空气通风；按合同转售交接 |
| market_state | 商业批发服务，配有独立的谷物备查库存和所有权台账 |


## 3. 参考流

| Field | Value |
| --- | --- |
| What | 已完成的筒仓干小麦自营批发货批服务 |
| How much | 1 个已完成批发货批服务 |
| How well | 实际非播种小麦身份、状态与品质验收、取得所有权后的转售及企业买方交接；披露实际质量、水分与储存时长 |
| How long or cycle | 实际接收到商业交接期间；跨报表期库存和资产寿命另行处理 |
| reference_flow_link | `accepted_service` |

| Field | Value |
| --- | --- |
| reference_amount | 1 |
| reference_product_flow | 已完成的筒仓干小麦自营批发货批服务 |
| reference_flow_property | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| reference_unit_group | 数量单位组 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| reference_unit | Item(s) |
| required_qualifiers | consignment_id; ownership_and_resale_risk; buyer_business_role; contract_handover_gate; actual_net_mass; mass_unit; moisture_wet_basis; grain_class_grade; accepted_quality_criteria; silo_route; storage_start_end; geography; period; transport_coverage; linked_commodity_loss_adjustment |

全部作业数量采用同一声明的服务参考基准。N 是相同归属批次或作业期内扣除实际撤销后的唯一已验收批发货批数，且 N 必须大于零。共享场址负担按有证据的物理驱动归属，包括失败或拒收尝试；这些尝试不增加已验收输出数量。 货批采用实际合同批次与交接单位，拆分发票或车辆移动不得增加 N。即使都计为一个，质量、品质和储存条件不同的货批也不具有自动可比性。实际数据包字段必须声明必需限定信息。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | 参考产品 | 物品数量 | Item(s) | 采用实际已验收货批标识，核对所有权、交接及撤销，记录 N > 0 和全部可比性限定信息。数量不等于吨数、车次或货币营业额。 |
| grain_stock_basis | 谷物备查库存及废谷物 | 质量 | kg | 记录每个货批及状态的原样质量和湿基水分分数；干质量等于原样质量乘以 (1 - 水分分数)。对齐实际单位与采样期间后再核账；水分变化不等于干物质损失。 |
| native_units | 所有清单行 | 兼容的原生属性 | 实际原生单位 | 对实际燃料、包装、资产和服务商保留实测原生单位。换算必须提供来源状态、必要的密度或组成、因子、单位及不确定性；不可相加的质量视图仅供审计。 |


## 5. 系统边界

### 边界抽象

| Field | Value |
| --- | --- |
| declared_starting_condition | 在声明供方交接点接受已干燥、已清理小麦并取得商人所有权；声明实际库存、品质、水分及已有运输覆盖 |
| starting_condition_role | 服务附加过程的声明输入状态事实，不代表小麦本身没有负担 |
| product_classification_scope | CPC 61011 中面向企业买方的干小麦自营批发子集 |
| recursive_input_rule | 上游小麦库存保留备查，不把批发服务营业额递归为自身输入。外包辅助采用不同的服务商成果并明确不重叠。 |
| upstream_dataset_requirement | 适当且已验证的用品、服务商和资产全寿命上游数据；完整链条声明前，在本服务以外解决关联商品生产与可归属损失需求 |
| disclosure | 实际期初和期末谷物库存；收货、退货、发运及损失；约定商业交接点；运输、废物处理与资产范围；排除项及全部未知覆盖 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| boundary_service | wholesale | 批发作业、实际消耗用品、能源、可归属资产、实际辅助及承担的运输和废物处理仅计一次。成功转售小麦及其损失部分均不在本服务内形成生产交换；保留单独物理谷物台账，并强制关联上游商品调整。 |  |
| boundary_gate | wholesale | 声明实际接收状态和商业交接；拒收或撤销发运不计已验收服务输出。分别保留所有权、实物保管及报表期间。收费代理与商品加工在范围外。 | unsd-cpc3-wholesale-2025 |
| boundary_grain | wholesale | 追踪初始干燥可用小麦、实际筒仓停留、装卸、监测与环境空气通风；不设置默认干燥、熏蒸或清理配方来维持品质。实际纠偏外包范围须明确记录，避免隐含加工。 | fao-bulk-storage; fao-grain-aeration |


## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| wholesale | 取得所有权后的干小麦综合批发作业 | required | 实际自营干小麦接收、筒仓储存及向企业买方转售交接 | 综合服务责任，含失败装卸及拒收路线；没有商品生产输出 | `accepted_service` |

每笔库存转移、监测、清洁事件和发运均归属于货批及作业期间标识。环境空气通风和常规检查属于本责任内活动，不是独立出售的保鲜或分级输出。实际拒收货物应记录暂存、退回、另行加工或废弃去向及接收方，并计入实际能源和废物；仅已验收交接计入 N。筒仓之间移动属于内部库存转移，不构成新购入或新的已验收批发货批。

全部作业数量采用同一声明的服务参考基准。N 是相同归属批次或作业期内扣除实际撤销后的唯一已验收批发货批数，且 N 必须大于零。共享场址负担按有证据的物理驱动归属，包括失败或拒收尝试；这些尝试不增加已验收输出数量。

### 过程：取得所有权后的干小麦综合批发作业 (`wholesale`)

#### 输入

##### 产品流

###### 实际使用点交流电 (`electricity_ac`)

仅适用于实际跨越本节点边界、且未由完整供应商数据覆盖的交流电。该身份未特指供应方、电压、发电组合或交付线损归属，仍须按要求采集。经核实的电力流以1 MJ电能为基准，其ILCD属性名称为净热值；原生kWh按精确的3.6 MJ/kWh换算，不能套用燃料热值系数。直流电或其他不匹配电力状态保留在余项要求中。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / kWh
- 数量规则：每参考流的实际可归属批发作业购入电力；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需计量各作业区间 kWh、实际通风或装卸时数、货批停留及全部使用方归属。经验电耗校验需独立且筒仓气候、载荷与品质可比的证据；通用能源属性和供方身份缺口单独保留。

###### 实际独立确认的供应柴油 (`fuel_supply_diesel_supply`)

仅适用于本运行燃料要求内实际独立确认的柴油。通用身份为Mass/kg；记录实际配方、供应方、供给门及原生库存范围。原生数量为升时，最终换算kg须有实际相容密度、温度状态、质量体积比单位及来源，不使用目录默认密度或热值。供应库存与燃烧量是不同记录；其他燃料保留余项，购买燃料或未解释库存差不证明燃烧及排放。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Volume / L
- 数量规则：每参考流的实际可归属实际装卸与场内车辆燃料供应；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：采用实际牌号和原生体积或质量、期初与收货及期末库存、对应可用外退；密度或温度换算需可追溯基准。供油到燃烧的关系需实测燃烧或完整互斥去向，不预设燃烧比例。

###### 实际液态处理自来水供给 (`water_supplied_liquid_tap`)

仅在实际来源确为处理后的自来水且用于所声明用途时适用。保留实际供应方、水质、温度状态和供应边界，不假定所有供水都是自来水。冰、瓶装矿泉水、再生水、未经处理的水及环境直接取水保留各自实际身份。沿用原卡原生质量或体积基准；最终换算为质量参考量时须有实际相容密度和状态证据，不能把目录中的次要体积关系作为默认现场密度。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属有记录的场址辅助活动购入水；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：保留实际计量购入体积、清洁或卫生用途、服务期间及供方覆盖。每货批用水校验须采用相同实际清洁范围与分配，不验证谷物水分，也不暗示直接取水。

###### 实际独立记录的合成洗涤剂投入 (`operating_supplies_synthetic_detergent`)

仅适用于产品配方、供应状态及用途记录确认的实际合成表面活性洗涤剂。记录扣除包装皮重的材料净量，区分浓缩液与稀释水，整体配方与组分不得相加重复计入。肥皂、消毒剂、抹布、滤材等仍按各自实际身份记录，不预设清洁配方、剂量或发生。

- 选定流：洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际清洁、虫害防控与维护用品；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：采集实际品项、配方浓度、原生单位、库存调整后消耗、可用外退及单独测得废物或释放去向。制剂使用和维护校验需当前实际路线及产品证据；不提供通用熏蒸剂用量或直接释放比例。

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的筒仓干小麦自营批发货批服务 (`accepted_service`)

一个实际唯一货批，以取得所有权后向企业买方转售为前提，具有发运、品质与状态、约定商业交接和验收净谷物量记录。本输出是批发服务，不是小麦商品。

- 选定流：已完成的筒仓干小麦自营批发货批服务
- 流属性/单位：Count / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_consignment`

范围证据要求：固定数量仅定义归一化基准。必须取得实际货批质量、水分、品质、储存时长和所有权及交接证据；不存在通用吨数换算或默认货批大小。

##### 废物流

###### 废弃干小麦籽粒 (`waste_grain_atomic_case`)

仅在实际独立记录确认“废弃干小麦籽粒”时适用。本卡只覆盖该命名实物状态及自身实际净量、保留组成和接收门。其他部件、碎片、游离液、独立包装及清理载体仍属于`waste_grain`中的强制完成记录；不得移动边界、预设事件、将库存差当废弃，或把仍保留在整体流内的组分另算出口。实际混收流须匹配自身准确身份。原有原生单位数量协议只用于本独占具体情形，其他实际去向分别协调。

- 选定流：废弃干小麦籽粒
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属收集容装的废弃小麦及谷物残余；cp_grain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grain`

范围证据要求：计量实际容装废物净质量及代表性水分、货批和接收路线，将干物质与实际谷物库存及关联损失商品需求核对。不套用 FAO 历史损失百分比，不由失水推断变质，不把收集粉尘当作空气释放量。

##### 基本流

###### 实际有独立证据的向空气排放化石二氧化碳 (`species_releases_co2_fossil_air`)

仅在实际证据确认化石来源、二氧化碳物种和向空气直接释放时适用。保留报告的碳或CO2基准，碳转CO2须独立有证据的化学计量，不预设系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属向声明受纳介质的实际已识别物质释放；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：每个实际已识别物质或粒径组分及介质保留实测释放，或兼容实测活动量及物种因子，必要时附组成与去向基准及来源。干物质账目差额、作为废物收集的粉尘、安全限值或制剂总供应量不能确立物种释放；完整因子仅应用一次。


###### 实际有独立证据的向空气排放化石甲烷 (`species_releases_methane_fossil_air`)

仅在实际证据确认化石来源、甲烷物种和向空气直接释放时适用。生物源或来源未知甲烷仍在余项要求中，不得改标化石源；不预设泄漏发生、气体比例、数量或排放系数。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属向声明受纳介质的实际已识别物质释放；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：每个实际已识别物质或粒径组分及介质保留实测释放，或兼容实测活动量及物种因子，必要时附组成与去向基准及来源。干物质账目差额、作为废物收集的粉尘、安全限值或制剂总供应量不能确立物种释放；完整因子仅应用一次。


###### 实际有独立证据的向空气排放氧化亚氮 (`species_releases_nitrous_oxide_air`)

仅在实际证据确认氧化亚氮物种及向空气直接释放时适用。原生数量为N2O质量，不是氮质量或氮气质量，不预设排放系数或发生。 本卡仅记录本节点实际直接释放，不重复计入外购电力上游或供应商已覆盖排放。UUID表示未细分子介质的空气排放，其他实际子介质或来源仍须在余项中匹配，不能改标；缺失数据不等于零。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属向声明受纳介质的实际已识别物质释放；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：每个实际已识别物质或粒径组分及介质保留实测释放，或兼容实测活动量及物种因子，必要时附组成与去向基准及来源。干物质账目差额、作为废物收集的粉尘、安全限值或制剂总供应量不能确立物种释放；完整因子仅应用一次。

## 7. 分配与联产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| alloc_meter | wholesale | 优先采用实际分表和事件归属。其余有记录的共同作业负担按有证据且兼容的物理驱动分配给全部实际使用方，例如输送采用装卸质量，空间占用相关储存采用谷物体积与时间。驱动按因果使用选择，保留全部使用方分母与失败或拒收尝试，并解释闲置能力处理；发票金额与平均货批数不是默认驱动。可归属总量仅除以 N 一次。 |  |
| alloc_assets | shared_assets | 识别资产及每个使用货批、场址和期间。以已用驱动量 / 全寿命驱动量归属完整制造、实际维护、更换和寿命终结负担。全寿命驱动量来自观察使用量，或观察历史加有证据的剩余使用、更换与退役假设，并保留不确定性和敏感性。二选一：资产当量份额 / N，或完整寿命覆盖的服务商原生数量 / N；不得并用或归一化两次。 |  |
| alloc_supplies | 作业用品 | 对一个实际原生单位品项及状态，S = 可归属期初库存 + 外部收货 - 期末库存。选择保留外退输出的总量口径 S / N，或净消耗口径 (S - 可用外退量) / N 并取消对应退回的抵扣交换。期末库存包括回收后留存的可用期末库存；废弃和未收集损失不是可用退回，保留供应上游负担。内部领用和退库不构成外部购入。 |  |
| alloc_commodity_loss | 谷物备查台账 | 全部小麦生产负担均在本服务外。向关联商品系统传递可归属不可恢复谷物干物质损失 L、验收外发谷物干物质 G 及商品数据集已有损失覆盖。如果 G > 0 且商品基线未包含该损失，上游干小麦需求 = G + L，因子为 (G + L) / G。按实际上游参考水分换算；服务关联另提供 L / N。如果已有相同损失覆盖，应核对而不是再乘因子。本服务已含废物处理不得在那里重复。损失或归属未知时阻止完整链条声明，不能默认为零。 |  |
| alloc_outlets | wholesale | 不可用谷物、可用用品外退或未售商品均不自动获得替代抵扣。降级但仍可利用并售出的谷物保留实际状态与接收交易，属于有记录的商品实物出口，不是自动无负担的联产品。如果出现真正独立的预期联产品或加工，最终数据使用前须声明并审核新的分配边界。 |  |

其中 G 为扣除实际撤销及买方退货冲回后的净已完成验收外送谷物，不是全部实物发运。物理库存平衡单独保留总实物发运与实际退回收货。仍作为商人库存留存的买方退回谷物不属于不可恢复损失 L。储存水分变化须按实测状态核对，并保留水分采样不确定性。

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_consignment | wholesale | accepted_service | 所有权与交接台账 | site_id; campaign_id; period_id; consignment_id; seller_id; buyer_id; buyer_business_role; contract_id; ownership_start; resale_risk; dispatch_id; handover_gate; handover_date; time_zone; storage_start; storage_end; residence_duration; residence_duration_unit; accepted_net_mass; mass_unit; moisture_fraction_wet_basis; grain_grade; quality_criteria; acceptance_record; cancellation_id; N | 将唯一实际商业货批与发运、验收、撤销和所有权记录核对；排除重复发票或拆分车次。 | Item(s) | 每个货批与撤销 | 实际接收到交接及相关报表期间 | 商人筒仓及关联企业买方交接点 | per reference flow | 所有权及验收记录和经校准称重证据 |
| cp_grain | wholesale | 谷物库存与 waste_grain | 货批关联物理库存与损失台账 | site_id; silo_id; campaign_id; period_id; lot_id; consignment_id; transfer_id; state; event_date; time_zone; storage_start; storage_end; residence_duration; residence_duration_unit; moisture_basis; moisture_source; gross_mass; tare_mass; mass_unit; moisture_fraction_wet_basis; moisture_method; temperature; temperature_unit; opening_mass; receipts_mass; buyer_returns_mass; supplier_returns_mass; physical_dispatch_mass; net_accepted_dispatch_mass; useful_other_exit_mass; closing_mass; contained_waste_mass; measured_direct_loss_mass; loss_method; residual; loss_receiver; commodity_dataset_id; commodity_loss_coverage; linked_loss_adjustment_owner; linked_loss_adjustment_status; flow_row_id; actual_identity_case; actual_substance_or_material; actual_state_and_gate; case_activation_evidence; quantity_exclusion_links; whole_total_reconciliation | 各实际状态采用经校准净称重和代表性水分采样；配对内部转移，核对干物质，调查未知差额并保留实际废物接收证据。 只归属独立确认的实物情形，其他实际去向按来源分别保留；每个原生记录只属于一个交换，任何总量仅作不可相加审计。 | kg | 每次接收、转移、退回、盘点及发运 | 全部库存期间及实际筒仓停留 | 实际筒仓货批及其外部实物交接 | per reference flow | 经校准秤与水分方法、谷物库存核对及关联商品损失接口 |
| cp_energy | wholesale | 电力与实际燃料燃烧 | 分表与燃烧台账 | site_id; campaign_id; period_id; consignment_id; asset_id; event_id; event_date; time_zone; duration; duration_unit; energy_type; meter_id; opening_reading; closing_reading; reading_unit; attribution_driver; all_consumer_driver; actual_burn; burn_unit; burn_method; nonburned_return; nonburned_waste; unrecovered_loss; carried_closing; provider_coverage; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 计量实际能源与实测燃烧量；采用重建燃烧量时，必须具备原生单位下互斥且完整的去向台账、不确定性及未知损失调查。交付燃料不等于燃烧量。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 原生能源或燃料单位 | 计量间隔及每次燃烧或装卸事件 | 整个归属作业期及相关期间 | 直接筒仓、装卸和辅助资产 | per reference flow | 仪表校准、燃烧证据及完整覆盖核对 |
| cp_supplies | wholesale | 燃料、水、用品、包装及退回 | 原生单位库存与消耗台账 | site_id; campaign_id; period_id; consignment_id; event_id; event_date; time_zone; SKU; composition; concentration; state; native_unit; opening_quantity; external_receipts; receipt_gross_quantity; receipt_tare_quantity; receipt_net_quantity; receipt_quantity_unit; closing_quantity; recovered_closing; usable_external_return; contained_waste; uncontained_loss; gross_or_consumed_convention; conversion_factor; factor_unit; factor_source; density; density_unit; temperature; temperature_unit; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 发票结合物理库存、领用及退回记录；区分产品、废物、环境输入及直接释放，保留实际状态特定的换算证据。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 柴油升转kg须有实际相容密度、温度状态、质量体积比单位及来源，不预设换算。 | 实际品项原生单位 | 每次外部事件及期末盘点 | 完整归属报表期间 | 一个品项及状态和实际筒仓活动 | per reference flow | 对应退回、库存核对及换算来源 |
| cp_providers | wholesale | provider_services | 已完成服务与覆盖台账 | site_id; campaign_id; period_id; consignment_id; provider_id; service_id; event_date; duration; duration_unit; actual_result; quantity; native_unit; completion_record; upstream_dataset_id; included_energy; included_material; included_asset_lifecycle; included_freight; included_waste_treatment; coverage_gap; attribution_driver; all_consumer_driver | 验证服务商实际交付成果与上游数据覆盖；和直接台账核对，每项负担仅计一次。缺少物理数量或必要覆盖仍属于数据缺口。 | 实际服务商原生单位 | 每个实际服务商成果 | 实际服务期间 | 全部已纳入服务商职责 | per reference flow | 成果完成证据和明确负担覆盖矩阵 |
| cp_assets | wholesale | shared_assets | 寿命与使用驱动台账 | site_id; campaign_id; period_id; consignment_id; asset_id; asset_configuration; event_date; phase_id; acquisition_record; manufacture_dataset; maintenance_record; replacement_id; end_of_life_record; consumer_id; driver_unit; driver_used; driver_lifetime; observed_driver; evidenced_remaining_driver; lifetime_source; termination_assumption; attribution_view; uncertainty; sensitivity; update_trigger | 识别全部使用方和期间，将驱动使用量与完整寿命负担核对，并为剩余使用、更换及退役提供证据；只保留一种分配视图。 | Item(s) 或实际寿命服务原生单位 | 每个资产事件及期间复核 | 全部实际及有证据的剩余资产寿命 | 实际资产的全部使用方、作业及期间 | per reference flow | 完整寿命覆盖、已观察服务记录及有证据的剩余使用情景 |
| cp_freight | wholesale | freight | 路段与载荷台账 | site_id; campaign_id; period_id; consignment_id; leg_id; event_date; provider_id; route; transport_mode; net_load; load_unit; load_conversion_factor; load_conversion_factor_unit; load_conversion_source; distance; distance_unit; distance_conversion_factor; distance_conversion_factor_unit; distance_conversion_source; native_service_unit; attribution_driver; attribution_driver_unit; all_consumer_driver; attribution_share; empty_return_method; upstream_coverage; duplicate_leg_check; uncertainty | 记录实际路段载荷及距离，采用明确换算得到兼容 kg*km；归属前保留方式、载荷、空返和上游覆盖。 | kg*km | 每个运输路段 | 全部纳入路段及退回 | 声明的运输责任边界 | per reference flow | 运输单据、载荷与距离来源及覆盖检查 |
| cp_environment | wholesale | environmental_water, other_wastes, contained_wastewater, water_outfalls, species_releases | 实测去向与接收方台账 | site_id; campaign_id; period_id; consignment_id; event_id; event_date; time_zone; source_id; material_state; collected_wastewater_volume; received_wastewater_volume; wastewater_volume_unit; concentration; concentration_unit; concentration_basis; concentration_source; species; particle_fraction; receiving_medium; temperature; temperature_unit; measured_quantity; native_unit; measurement_method; waste_receiver; treatment_dataset_id; treatment_coverage; water_source; outfall_id; combustion_activity; activity_unit; species_factor; factor_unit; factor_basis; factor_source; composition_fraction; composition_basis; composition_source; release_fraction; fate_basis; fate_source; uncertainty; flow_row_id; actual_identity_case; actual_substance_or_material; actual_origin_and_medium; actual_state_and_gate; case_activation_evidence; typed_or_residual_quantity; quantity_exclusion_links; whole_total_reconciliation; unresolved_occurrence_not_zero | 展开实际材料、物质或粒径组分和接收方；采用直接测量或兼容实际活动量乘物种因子。整流体释放量乘实测组成及去向仅为替代方式，不得重复完整物种因子。载体水、容装废物与物质视图在适用时不可相加。 按flow_row_id与actual_identity_case划分实际原生记录，仅有证据的分支适用。具体分支与余项在节点内数量互斥，每个实物出入只归属一次，并与相容同范围不可相加总量协调。发生或数量未知仍待采集，不能填零。 | 实际原生单位 | 每次释放、废物转移及相关测量区间 | 整个归属作业及事件 | 实际直接边界及合同处理接收方 | per reference flow | 实际接收方证据、测量及因子来源与不重叠检查 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| count_and_attribution | 所有清单行 | 用实际货批、作业批次及期间标识采集作业总量。共享负担按有记录的全部使用方物理驱动归属，再将可归属数量除以 N 一次。拒收或撤销尝试保留可归属负担，但不增加 N。 | cp_consignment; cp_energy; cp_supplies; cp_providers; cp_assets; cp_freight; cp_environment | 每参考流的作业交换数量 |  |
| grain_dry_balance | 谷物备查台账与 waste_grain; waste_grain_atomic_case | 每个实际状态 D = 原样净质量乘以 (1 - 湿基水分分数)。干期初 + 干外部收货 + 干买方退回 - 干期末 - 干实际发运 - 干供方退回 - 干其他可用外送 - 干容装废物 - 单独实测干直接损失 = 未解释差额。内部转移抵消。结合不确定性调查差额，不自动标为排放或损失。水分得失单独追踪，不等同于干物质变化。 | cp_grain | 库存核对和每个关联商品货批已识别的干物质损失 L |  |
| commodity_link | 谷物备查台账 | 对实际可归属不可恢复干谷物损失 L 和验收外送干谷物 G，向商品模型传递 L / N。当 G > 0 且上游未纳入相同损失时，商品干谷物需求为 G + L，或乘数 (G + L) / G。按实际上游参考水分换算，并保留责任及覆盖。本服务已有处理仍排除在该生产调整之外。损失、接收方或覆盖未知时，阻止完整链条定稿。 | cp_grain; cp_consignment | 本服务交换以外的关联上游商品损失调整 |  |
| fuel_and_species | fuel_supply 与 species_releases; fuel_supply_diesel_supply; species_releases_co2_fossil_air; species_releases_methane_fossil_air; species_releases_nitrous_oxide_air | 上游供应采用库存调整后的投入口径。实际燃烧量为实测，或由完整互斥去向台账重建：期末留存、可用外退、容装未燃废物、未回收且未燃损失和实际燃烧。溢洒总记录在其回收及剩余去向已被记录时仅供审计。物种释放等于兼容实际活动量乘以物种及介质特定因子，或实际整流体释放量乘以有证据的组成及去向。完整物种因子不得再乘组成或去向。 | cp_energy; cp_supplies; cp_environment | 覆盖仅计一次的实际供应、燃烧与已识别物种释放视图 |  |
| freight_service | freight | 每个实际路段采用 kg 净载质量乘 km 距离；相乘前换算实际质量与长度单位。纳入的空返和服务商覆盖仅归属一次，可归属 kg*km 总量按每参考流表达。 | cp_freight; cp_consignment | 每参考流的实际 kg*km |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| quality_identity | 所有清单行 | 最终交换绑定前核实实际材料、服务或物质身份、属性与单位。候选语义标签和已验证数量属性不等于流 UUID。 | 具体身份详情和支持证据 |
| quality_grain | 谷物台账 | 保留代表性水分采样、秤校准及实际库存状态；解决未解释干物质差额、隔离与货批关联。不设置通用损失、水分、停留或通风因子。 | cp_grain；不确定性及调查记录 |
| quality_coverage | wholesale | 核对直接活动、服务商、运输、资产、废物处理与关联商品损失边界，未知项显式保留。定量校验需独立可比证据，不采用待验证批次自身最大值。 | 覆盖矩阵和缺失数据清单 |
| quality_period | wholesale | 将库存、能源、资产、服务交接和实际退回、更换与退役关联到全部相关期间，避免期初期末及其他报表期重复。 | 期间、资产与货批追踪台账 |

cp_supplies 的 external_receipts 指按实际皮重扣除后、同一原生单位的净产品数量，保留的收货毛量、皮重与净量必须核对。cp_freight 的共享路段采用兼容的实际物理驱动及全部使用方分母；归属份额之和须等于声明路段覆盖，不得对已经为货批净载的质量重复分配。
废水记录独立于购入水，保留实际收集和接收水相体积、组成与接收处理范围。实际物理水量核对还应按实际情况记录消耗、留存水分、直接取水及排口；不得自动把剩余体积归为废水或环境释放。

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| electricity | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_energy`识别`electricity`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_energy`; 实际来源关联原生记录 |
| fuel_supply | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`fuel_supply`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| water_supplied | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`water_supplied`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| operating_supplies | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`operating_supplies`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| packaging | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`packaging`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| provider_services | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_providers`识别`provider_services`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_providers`; 实际来源关联原生记录 |
| shared_assets | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_assets`识别`shared_assets`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_assets`; 实际来源关联原生记录 |
| freight | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_freight`识别`freight`内每项实际inputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_freight`; 实际来源关联原生记录 |
| environmental_water | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`environmental_water`内每项实际inputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |
| usable_returns | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_supplies`识别`usable_returns`内每项实际outputs/product物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_supplies`; 实际来源关联原生记录 |
| waste_grain | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_grain`识别`waste_grain`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。`waste_grain_atomic_case`只覆盖自身独占实物状态，其他实际去向仍须完成。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_grain`; 实际来源关联原生记录 |
| other_wastes | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`other_wastes`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |
| contained_wastewater | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`contained_wastewater`内每项实际outputs/waste物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |
| water_outfalls | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`water_outfalls`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |
| species_releases | wholesale | 本条是强制完成记录，不是虚构清单交换。须按`cp_environment`识别`species_releases`内每项实际outputs/elementary物料、服务、资产全寿命职责、废物流或物种来源介质，并在最终数据集使用前分别展开为实物或化学身份明确、具原生数量和覆盖责任方的单独卡片。发生、身份或数量缺失仍待采集并阻断完成，不能填零或删项。原有全部范围、证据、数量范围、库存去向、换算及供应接收职责均保留在下方完整采集定义。 | `cp_environment`; 实际来源关联原生记录 |


### 强制清单完成记录

以下为强制采集和展开定义，不是交换，也不是填零占位符。正文引用的集合或余项编号对应这些完成要求。最终前景数据集完成前，每个实际情形都须成为具自身证据的原子交换；第6节条件卡不预设发生。独立投入、资产全寿命、互斥供应运输结果、实际废物接收流及每个实际基本流物种介质均须保留，不能因未分配通用UUID而静默漏掉。独占实际情形须与原生总量协调，组分视图不可重复相加。

#### electricity

记录装卸、环境空气通风、照明、检验与办公的可归属计量电力，包括未成功处理和清洁事件；排除与服务商计量范围重叠的电量。

本卡为独立身份分支`electricity_ac`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：批发作业购入电力
- 流属性/单位：Energy / kWh
- 数量规则：每参考流的实际可归属批发作业购入电力；cp_energy。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_energy`

范围证据要求：需计量各作业区间 kWh、实际通风或装卸时数、货批停留及全部使用方归属。经验电耗校验需独立且筒仓气候、载荷与品质可比的证据；通用能源属性和供方身份缺口单独保留。

#### fuel_supply

按实际燃料牌号和供应原生单位展开；上游供应采用库存调整后的实际供应量，直接燃烧采用单独计量的实际燃烧量，不将整箱燃料自动视为已燃烧。

本卡为独立身份分支`fuel_supply_diesel_supply`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际装卸与场内车辆燃料供应
- 流属性/单位：Volume / L
- 数量规则：每参考流的实际可归属实际装卸与场内车辆燃料供应；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：采用实际牌号和原生体积或质量、期初与收货及期末库存、对应可用外退；密度或温度换算需可追溯基准。供油到燃烧的关系需实测燃烧或完整互斥去向，不预设燃烧比例。

#### water_supplied

包括可归属的实际购入清洁和卫生用水；它不等于谷物水分、环境取水或水足迹指标。

本卡为独立身份分支`water_supplied_liquid_tap`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：有记录的场址辅助活动购入水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属有记录的场址辅助活动购入水；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：保留实际计量购入体积、清洁或卫生用途、服务期间及供方覆盖。每货批用水校验须采用相同实际清洁范围与分配，不验证谷物水分，也不暗示直接取水。

#### operating_supplies

仅按实际、分别识别的配方制剂、润滑剂、过滤材料和检验耗材及原生单位展开，并记录浓度和废物去向；不规定熏蒸剂或施用配方。

本卡为独立身份分支`operating_supplies_synthetic_detergent`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：实际清洁、虫害防控与维护用品
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际清洁、虫害防控与维护用品；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：采集实际品项、配方浓度、原生单位、库存调整后消耗、可用外退及单独测得废物或释放去向。制剂使用和维护校验需当前实际路线及产品证据；不提供通用熏蒸剂用量或直接释放比例。

#### packaging

通常采用散装发运；仅在实际使用时纳入袋、封签等一次性用品。周转箱和托盘进入资产或服务商台账。

- 身份采集要求：实际发运包装与一次性容装用品
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际发运包装与一次性容装用品；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需实际一次性品项数量或质量，以及匹配商品净量、包装状态与可用退回证据。散装常态不能证明包装为零；周转用品需独立全寿命服务证据，不能每次发运计全新制造。

#### provider_services

按实际检验、卫生、虫害防控、雇用装卸及行政辅助成果展开，保留服务商原生数量与完整上游范围。Item(s) 仅用于实际可数的已完成成果，不把小时或价格换成数量。

- 身份采集要求：实际外部批发辅助服务
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流的实际可归属实际外部批发辅助服务；cp_providers。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_providers`

范围证据要求：核实每个实际完成物理成果、服务商原生数量和完整上游能源、材料、资产、运输及处理覆盖；经验校验需相同服务范围和物理驱动。价格、人员时数或作业次数不能单独填补缺失服务商负担。

#### shared_assets

记录实际筒仓结构、输送设备、风机、秤、车辆、仪器与信息设备的可归属份额，覆盖制造、维护、更换及寿命终结；不把转售商品列为基础设施。

- 身份采集要求：按全寿命归属的筒仓、装卸及业务辅助资产
- 流属性/单位：Count / Item(s)
- 数量规则：每参考流的实际可归属按全寿命归属的筒仓、装卸及业务辅助资产；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`

范围证据要求：需实际资产配置、完整制造维护更换及寿命终结覆盖，以及全部使用方的观察和有证据剩余寿命驱动。仅在利用率与储存条件兼容时比较每货批资产份额；不适用通用筒仓寿命或分配份额。

#### freight

展开声明服务范围承担的实际进场、出场、退回与废物运输各路段；采用净载质量和距离，并纳入空返处理或说明服务商覆盖范围；不重复计入上游到货价格已覆盖的运输路段。

- 身份采集要求：归属于批发且不重叠的实际货运服务
- 流属性/单位：Mass*distance / kg*km
- 数量规则：每参考流的实际可归属归属于批发且不重叠的实际货运服务；cp_freight。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freight`

范围证据要求：每个不重叠实际路段保留车型或方式、净载质量、质量及距离单位、实际路线、空返基准和上游范围。kg*km 校验须保持相同的实际进出场及废物责任、货批质量和路线。

#### environmental_water

仅在直接取用时按实际水源、地点与取水角色展开；购入水属于不同的产品输入，干式路线不默认存在直接取水。

- 身份采集要求：实际直接环境取水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际直接环境取水；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：若发生直接取水，需实际水源、地点、取水体积计量、用途和时间。缺计量或水源未知属于覆盖未决；干小麦或购入水指标不能代替实际直接取水。

#### usable_returns

按与对应输入相同的品项、原生单位及状态展开未用且可用的用品外退；期末库存不属于外退。商品的供方或买方退货保留在单独谷物台账。

- 身份采集要求：跨越边界的可用作业用品退回
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属跨越边界的可用作业用品退回；cp_supplies。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_supplies`

范围证据要求：需与供应台账相同的实际品项、状态和原生单位，以及外部接收方和实物交接。质量视图需实测单件质量或实际状态换算且不可相加；期末库存和废弃物不属于可用外退。

#### waste_grain

记录实际无法利用的洒漏、作为废物收集的粉尘和变质谷物及其接收方，保留湿质量、水分和干物质视图。收集粉尘不是空气排放；货批被拒收不代表全部谷物成为废物。

- 身份采集要求：收集容装的废弃小麦及谷物残余
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属收集容装的废弃小麦及谷物残余；cp_grain。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_grain`

范围证据要求：计量实际容装废物净质量及代表性水分、货批和接收路线，将干物质与实际谷物库存及关联损失商品需求核对。不套用 FAO 历史损失百分比，不由失水推断变质，不把收集粉尘当作空气释放量。

#### other_wastes

按组成、原生单位与接收路线分别展开实际包装废物、废过滤材料、废油、检验及清洁废物；处理负担必须只有一个归属方并明确覆盖范围。

- 身份采集要求：实际非谷物容装废物与废耗材
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属实际非谷物容装废物与废耗材；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：每个实际废物组分需组成状态、原生实测数量、接收方和处理覆盖。每货批校验须采用实际一次性用品及维护范围；容器质量、处理发票或安全分类不能单独替代废物组成或处理负荷。

#### contained_wastewater

记录实际收集并交付给有记录接收处理系统的清洁、卫生或其他水相废水。计量实际接收原生体积和实际组成；它不是环境直接排口，数量不得由购入水体积推断。明确处理服务由本卡还是另一个上游服务覆盖，并保持唯一负担归属。

- 身份采集要求：实际容装送往处理的废水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属容装废水；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：取得实际收集或接收废水体积、收集区间、水相状态、污染物组成及浓度基准、接收方和处理覆盖。不得将废水设为购入水量，也不得为同一转移另计环境直接排口。定量校验需独立可比的实际清洁或卫生范围和单位基准。

#### water_outfalls

仅按实际受纳介质与水质展开直接排口。容装送往处理的废水属于 Waste，不是环境直接排口；单独量化污染物时不得与载体水重复计算。

- 身份采集要求：实际排入环境的水
- 流属性/单位：Volume / m3
- 数量规则：每参考流的实际可归属实际排入环境的水；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：需实际直接排口体积、受纳介质、采样期间、实测组成和处理责任。不由购入水推断污染物质量，不把载体体积和污染物质量相加为一个流，不把容装废水当作直接排放。

#### species_releases

仅按已识别物质或粒径组分及介质展开实际燃烧、未收集谷物粉尘、制冷剂或虫害防控释放。采用实际测量或兼容的物种因子及活动量，不把总供应量、账目差额或安全限值当作排放量。

本卡为独立身份分支`species_releases_co2_fossil_air`; `species_releases_methane_fossil_air`; `species_releases_nitrous_oxide_air`之外的余项清单要求。已计入分支的实际数量不再计入本未解析完成要求，原类目总量仅作不可相加的协调审计。其他实际材料、状态、来源或介质仍须保留自身经核实的身份、原生数量及供应接收责任；记录缺失时，不推定条件分支发生、不发生或数量为零。

- 身份采集要求：向声明受纳介质的实际已识别物质释放
- 流属性/单位：Mass / kg
- 数量规则：每参考流的实际可归属向声明受纳介质的实际已识别物质释放；cp_environment。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_environment`

范围证据要求：每个实际已识别物质或粒径组分及介质保留实测释放，或兼容实测活动量及物种因子，必要时附组成与去向基准及来源。干物质账目差额、作为废物收集的粉尘、安全限值或制剂总供应量不能确立物种释放；完整因子仅应用一次。

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_reference | accepted_service | 核实实际自营企业间转售、唯一已验收货批、N > 0、实际质量、水分、品质、储存时长和约定交接点。排除拒收及撤销输出，拆分发票不得增加数量。 |  |
| validate_grain | 谷物备查台账 | 核对全部谷物干物质和水分状态、实际可用退回、降级、废物和单独识别损失，不把未解释差额转成基本流排放。完整链条声明前，记录关联商品仅生产部分的损失调整及其仅一次覆盖。 |  |
| validate_coverage | 所有清单行 | 每个实际交换均具原生单位、本节点协议及数量或去向证据。展开实际服务商、用品、废物和物种条件卡；覆盖缺失不得假定未发生。直接活动与服务商、商品与服务边界不得重叠。 |  |
| validate_assets_periods | shared_assets | 检查全部资产使用方与寿命阶段、观察及有证据的剩余驱动、维护、更换及寿命终结、期间关联、闲置处理、不确定性和唯一分配视图。缺乏证据的寿命属于数据缺口。 |  |
| validate_species | species_releases; species_releases_co2_fossil_air; species_releases_methane_fossil_air; species_releases_nitrous_oxide_air | 核实实际物质或粒径组分、受纳介质、兼容活动量及因子、组成和去向来源。收集粉尘或容装内容物不是直接排放，计量供应燃料不等于燃烧；载体水与物质视图不得重复。 |  |
| validate_reject_mode | wholesale | 将每个货批、作业期、失败尝试、清洁或换批、拒收退回及处置关联到原始货批和唯一归属方。内部转移及谷物退货须核对库存和撤销，不产生新生产或多个已验收服务数量。 |  |


## 10. 发布数据集画像

| Field | Value |
| --- | --- |
| dataset_role | 完成具体身份与前景完整性审查后作为 secondary_dataset；background_dataset |
| downstream_use | 与单独匹配的商品生产及商品损失调整组合使用的批发服务附加过程 |
| allowed_use | 与物理和商业交接点、实际质量及储存限定条件匹配的声明自营干小麦批发货批路线 |
| excluded_use | 独立的交付小麦足迹；小麦种植或加工；全部谷物平均；收费代理；零售；货币因子；未关联上游商品损失的完整链条声明 |
| required_metadata | 实际货批、商人和场址、期间、小麦类别及等级、质量、水分及状态、所有权、买方角色、交接点、停留时长、运输和处理覆盖、关联商品调整归属方及状态 |
| required_quality_disclosure | 具体身份与未决缺口；采样测量和库存不确定性；共享驱动及完整资产寿命假设；遗漏覆盖；独立范围证据与关联损失核算 |
| update_trigger | 供应方、路线、交接点或谷物品质变化；增加干燥或加工；资产、服务商范围、损失覆盖、监测方法、期间或质量证据变化 |


## 11. 数据来源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-wholesale-2025 | official_guidance | United Nations Statistics Division, CPC Version 3.0 explanatory notes (30 June 2025), division 61 and subclass 61011. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅支持分类：区分自营批发、代理与商品生产；本小麦服务属于较窄子集。 |
| fao-bulk-storage | official_guidance | FAO, Agricultural engineering in development: Bulk storage. https://www.fao.org/4/t0522e/t0522e0d.htm | 支持商业散装接收、装卸、筒仓状态监测与发运职责；仅为定性路线证据，不是数值配方或强制处理。 |
| fao-grain-aeration | official_guidance | FAO, Grain storage techniques: Bulk storage, Aeration. https://www.fao.org/4/t1838e/T1838E1b.htm | 支持环境空气通风及水分温度监测；冷却和水分变化不同。不将风量、时长、温度或损失因子作为默认值。 |
| fao-wheat-storage | official_guidance | T. S. Payne, Harvest and storage management of wheat, FAO Bread wheat improvement and production. https://www.fao.org/4/y4011e/y4011e0u.htm | 说明小麦储存变质受物理、生物与技术条件影响；历史损失率不是通用校验范围。 |
