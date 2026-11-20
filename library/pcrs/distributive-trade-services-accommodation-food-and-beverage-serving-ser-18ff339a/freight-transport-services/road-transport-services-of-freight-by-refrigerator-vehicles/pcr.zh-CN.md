---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-freight-by-refrigerator-vehicles
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷藏道路货运托运区段服务

## 1. 范围与适用性

本PCR覆盖专用冷藏卡车和道路冷藏车辆运送冷冻或冷藏货物的完整功能。每个数据集声明货物身份、数量、路线、距离和温度表现；动力、制冷技术、货物种类及车辆尺寸依据实际条件确定。完成托运区段这一参考对象保留真实合同交接功能；比较必须匹配数量、路线和冷链质量，不能仅凭一票托运标签。

排除铁路、水运、航空、仅常温道路运输、散装罐车服务、按联运集装箱功能分类的服务、独立仓储、邮政快递末端配送、货物制造及不提供实际运输的纯车辆出租。货运合同内的装卸、等候、清洗和场站工作仍应纳入；外部供应方通过声明的上游范围仅接入一次。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.road-transport-services-of-freight-by-refrigerator-vehicles |
| classification_refs | CPC 3.0 65111; exact |
| covered_products | 以专用道路冷藏卡车和道路冷藏车辆承运的冷冻或冷藏货物运输服务 |
| excluded_products | 其他运输模式；仅常温货运；罐车及联运集装箱功能；独立仓储及快递；将货物或车辆制造当作最终服务 |
| representative_product | 完成的冷藏道路货运托运区段 |
| production_route | 道路运输加有界保冷及应分配的完整支持与资产生命周期 |
| market_state | 在声明冷藏交付端口验收完成的托运区段 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 完成的冷藏道路货运托运区段 |
| 多少（How much） | 1个合格完成的托运区段，必须声明货物质量体积及实际起讫距离 |
| 质量要求（How well） | 声明货物特定温度时间、交付验收及状态 |
| 时长或周期（How long or cycle） | 实际接收到交付期间，加因果分配的失败空驶支持责任及生命周期期间 |
| reference_flow_link | completed_refrigerated_road_leg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完成的冷藏道路货运托运区段 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 数量 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | cargo_identity; cargo_mass_volume; acceptance_delivery_gates; actual_route_distance; period; N; refrigerated_or_frozen_state; actual_temperature_trace; accepted_quality; vehicle_refrigeration_technology; propulsion_supply; multi_stop_compartments; empty_failed_return_duties; allocation_method; supplier_coverage; same_asset_all_user_life; cargo_loss_receiver; species_medium; uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_count | reference product | 物品数量 | Item(s) | 实际完成服务数量须区别于吨公里、车辆公里、货物吨数、包裹数及计划运力；N>0并必须具备真实起讫距离货物和冷链质量。 |
| native_unit | 全部清单行 | 实际兼容原生属性 | 实际原生单位 | 保留供应方原生属性单位；核实后的kWh至MJ换算采用3.6 MJ/kWh。体积质量换算须有实际密度状态；货物吨数按声明基准排除车辆或集装箱皮重。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际接货状态、车队制冷拓扑及上游供应、供应方和资产端口 |
| starting_condition_role | 前景起始事实不消除早期资产及供应负荷 |
| product_classification_scope | 65111完整冷藏道路货运功能 |
| recursive_input_rule | 对应外包阶段以原生单位端口替代覆盖的前景范围一次 |
| upstream_dataset_requirement | 兼容的真实技术、质量、地域、期间、端口及生命周期范围 |
| disclosure | 全部载货空驶失败制冷场址资产责任、货物保管、分配、缺失及不确定性 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_road_refrigeration | 全部节点 | 涵盖专门冷藏卡车和道路冷藏车辆运送的冷冻和冷藏货物，不限于柴油、食品、单温区或某一车型。应按实际合同和功能区分联运集装箱65113、罐车65112、铁路65121、仓储及快递零售配送，不因货物低温就自动归入本类。 | unsd-cpc3-65111 |
| full_duties | 全部节点 | 纳入应分配的装载、接货检查、预冷、载货行驶、多站开门、等候、除霜、空返、调位、失败、拒收、救援和清洗责任；牵引与制冷共用的实际投入在节点间应只有一个归属。没有正的完成数量N时不得形成有限的单位完成服务结果。 | ghg-product-2011 |
| cold_state | 全部节点 | 保鲜干预以实际接货温度和状态为起点，以交付温度、经过时间、偏温情况和验收决定为终点。父活动为道路货运；柴油机械制冷、主机或电力驱动压缩、蓄冷冰及低温介质等路线须保留真实拓扑、能源或介质供应、排气、泄漏、回收和资产责任。有证据时才允许路线并存，不预设全部替代物均存在。ATP仅在其实际法律和货物适用范围内使用，本规则不据此设定统一温度。 | unece-atp-current |
| cargo_boundary | 全部节点 | 货物是承运对象，不是被消耗的运输投入，也不是货运服务输出。各交接点和接收方应保持保管数量、质量和状态收支闭合。服务中不加入原始货物生产；实际损失引发的生产或补货影响须单独披露给下游货物LCA。包装和集装箱所有权及重复使用责任须明确。 | ghg-product-2011 |
| asset_provider | 全部节点 | 本PCR的生命周期选择纳入实际车辆、货厢、制冷机、充电、电池、轮胎、道路、车场和场站的制造、安装、维护、更换和退役。原生供应方结果仅替代其明确覆盖范围；完整总成与其中已含初始部件不得同时重复计入。使用寿命只是分配分母，不能证明已包含运行或报废处理。 | ghg-product-2011 |
| atomic_expansion | 全部节点 | 每个实际存在但尚未表示的物料、供应、资产、供应方结果、直接污染物、废物或去向，必须在一个真实节点下增加独立row_id，明确单一身份、状态、类型、方向、原生属性单位数量、来源和同节点协议。物种、碳来源、颗粒粒径、空气、水体、土壤或收集去向以及接收方分别处理。宽泛剩余类别仅代表补行责任，不能成为未核实的最终交换。缺证表示不完整，绝非零。 | ghg-product-2011 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| road_movement | 道路行驶与最终货运交接 | required | 按实际发生及有据归属，不推定责任缺失 | foreground | completed_refrigerated_road_leg |
| cold_control | 制冷与保冷干预 | required | 按实际发生及有据归属，不推定责任缺失 | foreground | completed_refrigerated_road_leg |
| support_lifecycle | 装卸清洗及运输资产生命周期 | required | 按实际发生及有据归属，不推定责任缺失 | foreground | completed_refrigerated_road_leg |

过程图quantitative_reference将全部节点关联至唯一最终服务分母；cold_control与support_lifecycle不额外产生最终服务输出。

### 过程：道路行驶与最终货运交接 (`road_movement`)

#### 输入

##### 产品流

###### 柴油 (`traction_diesel`)

仅用于实际柴油动力及有记录的供应端口。分别记录配方、库存、供应、转移、回收、泄漏和实际燃烧量。购买混合燃料与其中已经包含的组分不得重复计入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_traction_diesel_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

###### 交流电 (`traction_ac`)

仅记录充电器入口实际外购交流电；端口以内的充电、电池和网络损失应纳入。外购直流电或包含上游的牵引服务替代完全对应的范围，不重复叠加交流电。电力驱动按实际条件采用，不预设全部车辆使用柴油。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_external_traction_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 完成的冷藏道路货运托运区段 (`completed_refrigerated_road_leg`)

以专用冷藏卡车或道路冷藏车辆，将实际冷冻或冷藏托运货物从声明的接收端口运至交付端口。N 为同质服务组内实际完成的合格托运区段数；分批交付应关联原始运单，避免重复计数。失败或被拒收运输保留因果负荷，但不计入合格输出。

- 选定流：完成的冷藏道路货运托运区段
- 流属性/单位：物品数量 / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`traction_fossil_co2`)

仅指实际向空气排放的化石源二氧化碳，依据实测或实际燃烧燃料的化石碳比例、氧化及残留情况和有据可查的化合物换算计算。供应柴油不等于实际燃烧量；生物源碳单独记录。最终交换选择前须声明空气子介质。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_traction_fossil_CO2_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_movement`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

### 过程：制冷与保冷干预 (`cold_control`)

#### 输入

##### 产品流

###### 柴油 (`refrigeration_diesel`)

仅记录独立计量并适用于制冷机组的实际柴油投入。若主发动机驱动制冷，应以计量或经验证的实际运行证据划分同一燃料池，不得另加假定燃料投入。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：attributed_refrigeration_diesel_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

###### 交流电 (`refrigeration_ac`)

在声明端口记录岸电、车场或插电制冷实际交流电，包括预冷、等候、除霜以及滞留和拒收货物的制冷责任。车辆共用能源划分必须与总表闭合。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：净热值 / MJ
- 数量规则：attributed_external_refrigeration_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

###### 制冷剂，R134a (`r134a_makeup`)

仅在确实使用单一 R134a 配方和纯度的补充制冷剂时采用，不适用于其他制冷剂或混合物。整机已含初始充注时不得再次计入。其他实际制冷剂、低温介质或冰须独立建行并保留原生数量、库存和去向记录。

- 选定流：制冷剂，R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- 流属性/单位：质量 / kg
- 数量规则：attributed_R134a_supply_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### HFC-134a (`r134a_air`)

仅指实际 R134a 向空气的泄漏，依据实测充注、回收及同一设备库存闭合计算；补充量不等于泄漏量。回收制冷剂、库存变化和空气排放分别记录，其他化合物独立建行。

- 选定流：HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_actual_R134a_air_release_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

###### 二氧化碳（化石源） (`refrigeration_fossil_co2`)

按实际条件记录制冷发动机向空气排放的化石源二氧化碳；燃料应有唯一归属并按同一设备闭合碳收支。主机制冷分配不得重复计入已分至道路行驶的尾气。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：attributed_refrigeration_fossil_CO2_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

### 过程：装卸清洗及运输资产生命周期 (`support_lifecycle`)

#### 输入

##### 产品流

###### 完整公路冷藏货车制造投入 (`refrigerated_vehicle_assembly_manufacture`)

制造交付关口的一件真实完整物理总成；每个实例行只对应一个有记录的型号配置，不同配置分别实例化并计量。仅在该总成为所述节点服务且未被完整供应方覆盖时启用。初始部件包含清单是身份的一部分，已含初始部件不得再次投入；实际未覆盖的维护、更换及寿终另计。 应声明实际完整卡车或道路车辆总成、规格、初始制冷设备、电池、轮胎和货厢是否包含以及制造端口。此项是制造供应，不是全生命周期运输服务。实际加装、更换、维护和退役须单列，避免重复计入初始已含部件。

- 选定流：完整公路冷藏货车制造投入
- 流属性/单位：Count / Item(s)
- 数量规则：对每个同型号总成队列：制造件数 * 目标应承担工作量 / 全用户全寿命工作量 / N。两个工作量采用相容同一基准及队列，分母须有证据且为正；目标份额与最终参考归一各一次，已含初始部件不可再相加。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：unsd-cpc3-65111; ghg-product-2011


###### 自来水 (`wash_tap_water`)

按实际条件记录车辆和货厢清洗所用自来水，并声明市政生产供应端口。该端口至使用点的配送若未包含须单独覆盖。不得替代原水、循环水或去离子水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：attributed_tap_water_supply_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

仅记录分配至本服务的维护活动实际产生并收集的废润滑油，端口为产生点。接收方、成分、储存和处理服务须单独明确；废物质量不自动代表回收抵扣，也不是直接土壤排放。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：attributed_used_lubricating_oil_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65111`; `ghg-product-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| allocation_precedence | 全部节点 | 优先以直接计量及过程或舱室细分避免分配。不可避免的共同区段，应依据全部托运货物和用户的实际物理载荷、距离及容量约束等因果证据分配共享牵引和场站负荷；质量距离仅在符合真实服务因果关系时采用，不是统一默认。相同事件的份额总和应为一。制冷按实际热负荷或舱室时间证据单独归属；采用价格分配须证明物理关系无法建立并披露敏感性。 | ghg-product-2011 |
| failed_stock_period | 全部节点 | 先将应分配的失败、空驶、退回责任保留在因果服务池，再仅按正的合格完成数N归一化一次。退回或重投货物只在声明的合格完成点计数，并关联原始及退回区段ID。跨期保留库存、燃料、电量、制冷剂、货物转移及年末未完成责任，不将负荷或完成数移至便利年份。 | ghg-product-2011 |
| asset_lifetime | 全部节点 | 按同一资产组实际消耗的运行量除以有据可查且为正的同组全用户总使用量，分配原生资产制造及各独立生命周期事件，再除以N。记录安装、翻新、更换和退役日期及全部用户和期间；不得采用统一车辆里程、道路寿命、制冷剂泄漏率或空驶比例。共用车场、充电器和道路的各使用方只登记一次。 | ghg-product-2011 |
| provider_no_recursion | 全部节点 | 外包合格货运区段作为供应方投入，保留实际原生服务单位和明确端口，替代匹配的自营阶段范围。不得递归消耗相同成品参考输出，不重复供应方能源、排放和资产；货物所有权不决定实际负荷归属。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_movement | road_movement | 货运输出、牵引、直接尾气及完整运行 | 运单、计量和调度记录 | consignment_id；货物身份；质量；体积；起讫点；区段距离；载货空驶失败里程；燃料期初收入期末转移；实际燃烧；交流电表；完成N；期间；质量验收；分配份额；原生单位；供应端口；不确定性 | 关联车联网、校准计量、燃料及签收记录至同一路线组；保留全部共同用户及空驶失败责任；主机制冷仅对总池划分一次，再计算归属分子并仅除以完成N一次。 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。本协议下其他清单行保留各自实物单位。 | Item(s)；kg；MJ；km；h | 逐事件并每期间核对 | 声明报告期间及关联生命周期年份 | 实际车辆舱室场址供应方 | 每声明的参考流 | 校准；签署记录；闭合分配；覆盖及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_cold | cold_control | 保冷、能源、制冷剂和泄漏 | 温度记录仪、制冷计量和制冷剂维修台账 | equipment_id；舱室；接货温度；设定点；实际温度轨迹；开门事件；小时；环境；除霜；制冷燃料交流电；充注期初补充回收期末；泄漏物种介质；拒收货批接收方；分配份额；期间；N；原生单位；不确定性 | 校准记录仪和计量装置，闭合同设备充注库存及回收，区分全部实际制冷剂或低温介质的物种与去向，按真实热负荷或舱室时间因果关系分配制冷，再将各原生数量仅除以N一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg；MJ；h；温度单位 | 逐事件并每期间核对 | 声明报告期间及关联生命周期年份 | 实际车辆舱室场址供应方 | 每声明的参考流 | 校准；签署记录；闭合分配；覆盖及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | support_lifecycle | 装卸、清洗、保管损失及收集废物 | 供应方单据、公用计量、保管及废物交接记录 | 场址；event_id；供应方；已含范围；用水；装卸原生活动量；货物入出库存损失退回；废物身份接收方质量；去向；期间；N；分配份额；不确定性 | 依据签署交接单闭合端口和保管台账；区分损失、退回、蒸发、收集废水及直接排放；明确供应方已含范围，汇总归属原生数量后仅除以N一次。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | kg；供应方原生单位 | 逐事件并每期间核对 | 声明报告期间及关联生命周期年份 | 实际车辆舱室场址供应方 | 每声明的参考流 | 校准；签署记录；闭合分配；覆盖及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | support_lifecycle | 车辆、制冷及共用基础设施生命周期 | 资产物料清单、供应方生命周期范围及维护登记 | 资产组；配置；初始部件包含范围；原生交付数量；制造安装维护更换退役日期；全用户总使用量；归属运行量；供应方场址期间；原生单位；N；不确定性 | 核实总成与部件范围、各生命周期事件及全用户同组分母；原生数量乘以实际归属运行量除以为正的同组总使用量，再仅除以N一次，仅替代供应方已覆盖范围。 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | Item(s)；kg；原生运行及服务单位 | 逐事件并每期间核对 | 声明报告期间及关联生命周期年份 | 实际车辆舱室场址供应方 | 每声明的参考流 | 校准；签署记录；闭合分配；覆盖及不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_refrigerated_vehicle_assembly | support_lifecycle | 必须展开身份 refrigerated_vehicle_assembly (inputs/product)：交付端口的完整道路冷藏货运车辆总成 | collected_record | requirement_id=refrigerated_vehicle_assembly; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 应声明实际完整卡车或道路车辆总成、规格、初始制冷设备、电池、轮胎和货厢是否包含以及制造端口。此项是制造供应，不是全生命周期运输服务。实际加装、更换、维护和退役须单列，避免重复计入初始已含部件。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 已明确分支（仅按实际适用记录启用）：refrigerated_vehicle_assembly_manufacture. 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 若实体资产按 物品数量 / Item(s) 计量，保留实测供应量，寿命作业量另记单位。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_vehicle_manufacture_items / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65111; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_road_infrastructure_service | support_lifecycle | 必须展开身份 road_infrastructure_service (inputs/product)：应分配的道路基础设施生命周期服务 | collected_record | requirement_id=road_infrastructure_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 在明确供应方原生单位、车辆类别、载荷及运行基准后记录实际道路建设、维护和退役服务。供应方已覆盖的生命周期范围仅替代对应前景范围一次，不得假定统一道路寿命或轴载系数。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（应分配的道路基础设施生命周期服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_road_service / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65111; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_terminal_handling_service | support_lifecycle | 必须展开身份 terminal_handling_service (inputs/product)：外包装卸服务 | collected_record | requirement_id=terminal_handling_service; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 按运输合同内实际发生的装卸和转运供应方服务记录。声明端口、能源、资产和货物覆盖范围；独立第三方场站责任作为上游只接入一次，或明确说明边界排除原因。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（外包装卸服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_native_handling_service / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65111; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_wash_wastewater | support_lifecycle | 必须展开身份 wash_wastewater (outputs/waste)：收集的冷藏货厢清洗废水 | collected_record | requirement_id=wash_wastewater; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 实际收集的清洗废水应明确货物残留、清洗剂成分及接收处理设施。成分或接收方不兼容的废水分别建行，并区分蒸发、携带水和直接排放。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（收集的冷藏货厢清洗废水）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_collected_wash_wastewater / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65111; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_spoiled_cargo_waste | support_lifecycle | 必须展开身份 spoiled_cargo_waste (outputs/waste)：废物交接端口的腐损冷藏货物 | collected_record | requirement_id=spoiled_cargo_waste; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 仅记录承运方负责且实际跨越服务边界的废物，须明确货物种类和接收方；食品、药品及其他物料不是可互换的废物身份。退回且可恢复的货物保留在货物保管台账中，不虚构废物。运输服务不重复计入原始货物生产，但腐损和处理责任须披露给货物产品模型，避免货物制造重复。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（废物交接端口的腐损冷藏货物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对规定采用 质量 / kg 的行，核实实测口径或向该口径的换算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：attributed_spoiled_cargo_waste_kg / N 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65111; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_service | 除参考输出外的全部清单行 | x_ref = sum(x_native_attributed) / N；N为同组同期间实际合格完成托运区段数且为正；参考输出为1 Item(s)。 | x_native_attributed; N; cp_movement; cp_cold; cp_support; cp_assets | x_ref | ghg-product-2011 |
| cargo_transport_activity | 补充报告吨距离 | T = sum(m_i_t * d_i_km)，按实际载货区段和实际承运质量求和；空驶距离与制冷小时另记并保留负荷。T不能替代完成数N。 | m_i_t; d_i_km; cp_movement | T | ghg-product-2011 |
| stock_reconciliation | 实际燃料制冷剂和货物台账 | opening + receipts + inward_transfers = closing + useful_use_or_delivery + outward_transfers + measured_loss；各项为相互排他的边界台账去向。内部回收物保留在期末库存，或在后续实际使用或外送端口只记一次，不额外叠加回收项。各项按实际物料设备期间拆分，不得因缺失某项就推定损失。 | 实际原生库存; 接收; 转移; 使用; 回收; 损失; cp_movement; cp_cold; cp_support | 已对账的原生计量台账 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| traceability | 全部节点 | 每项交换保留原始记录、校准、原生单位、端口、实际状态、期间场址、分配决定及不确定性，明确供应方模型可比性。 | 签署记录及计量维修日志 |
| temperature_quality | cold_control及参考输出 | 必须提供实际货物特定温度时间及验收要求、传感器位置和偏温记录，不设默认温度、保质期或零腐损。 | 合同；温度记录；验收及处置 |
| missing_range | 数量与系数 | 不提供统一燃料强度、载荷率、空返比例、制冷剂泄漏率、资产寿命或排放因子。实际证据缺失仍是不完整；经验校验范围须来自独立兼容参考样本，不得用本批最大值验证本批。 | 数据完整性登记；独立样本来源 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_gate | 全部节点 | 必须提供实际道路冷藏模式、货物、质量、温度、起讫点、距离、时间及合格完成记录，N须为正。偏温货物在处置明确前不计入合格输出，失败责任仍应保留。托运内容或距离不同时，相同Item(s)不表示性能等价。 | ghg-product-2011 |
| native_fates | 全部节点 | 按设备和期间闭合燃料库存、燃烧、泄漏及制冷剂初充、补充、回收、库存和排放台账；直接排放须明确物种和去向。匹配属性、单位、端口和接收介质；不得将充注等于泄漏、供应等于燃烧、废物等于直接排放或交流电等于直流电。 | ghg-product-2011 |
| coverage_allocation | 全部节点 | 核对每种实际模式、运行责任、共用节点、供应方、资产和场站范围，全用户份额闭合，兼容且为正的寿命以及仅一次归一化。实际技术、接收方、数量、供应方生命周期范围或寿命未知均为不完整。列出全部贡献场址和期间，将其合格输出和负荷纳入后再汇总归一化，不得无依据地平均场址强度。 | ghg-product-2011 |
| exchange_expansion | 全部节点 | 每项最终实施交换须具备一个已核实具体UUID及兼容原生支撑；待核语义流卡和数量属性支撑本身不是最终服务身份。对照中英文有序ID、公式、限定条件、协议、来源和规范投影，记录全部跳过和不确定检查。 | ghg-product-2011 |
| atomic_road_movement | road_movement | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_cold_control | cold_control | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 附接至实际货物供应链的合格冷藏道路货运服务 |
| allowed_use | 货物数量起讫距离冷链质量技术和供应范围兼容，并披露不确定性 |
| excluded_use | 货物制造；其他模式；无依据的等数量比较；全失败服务池强度；待核最终交换 |
| required_metadata | 参考限定条件；实际记录；供应端口；节点和覆盖；分配；全用户寿命；来源及单位 |
| required_quality_disclosure | 缺失身份数量、时空代表性、拒收货物与失败责任、泄漏去向、不确定性及跳过检查 |
| update_trigger | 货物路线质量技术资产供应方变化，或新增核实数量身份 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65111 | official_guidance | UNSD CPC 3.0, 65111; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 官方完整服务范围，不规定数值活动量或数量单位 |
| ghg-product-2011 | standard | WRI/WBCSD Product Life Cycle Accounting and Reporting Standard (2011), chapters 6–10; https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据分配原则；具体扩展资产和记录算法为本PCR选择，并非标准统一系数 |
| unece-atp-current | official_guidance | UNECE ATP text and status, version applicable from 25 August 2026; https://unece.org/transport/road-transport/text-and-status-agreement | 适用易腐食品运输的设备及温控问题，不预设适用全部货物或国内区段 |

