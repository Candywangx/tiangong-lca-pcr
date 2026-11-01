---
pcr_id: pcr.chauffeured-passenger-car-hire-engagement-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 带司机乘用车完整租用服务

## 1. 范围与适用性

本PCR适用于不论交付地点的真实带司机乘用车租用，出租车服务除外。依据真实约定履约证据判断汽车租用功能及运营司机责任，不能仅凭品牌国家牌照票价名称或有司机。按时提供、有限乘客群和多个目的地是一般常见特点，不是必然门槛。真正合格的单目的地或其他计费汽车租用不因这些特点被排除，须声明真实约定功能程度时长车型地域服务质量。

参考为一项已履行的单车完整租用约定，须含真实约定时长、可用性运输范围、司机责任及接受质量，不是一个乘客运输区段、预约订单、司机班次、停站、可用座位、车辆移动或车队预约。同一订单并行或独立租用多辆车须独立有据单车租用记录，按可比时长车型范围分层，不能将车队当一车。计划实际司机更替或保持同一单车服务责任的车辆替代本身不增租用项，记录真实连续性替代时段及接受质量。乘客区段人数距离是次级物理活动而非产出分母。

真实约定车辆司机可用性或待命即使没有完成乘客运输区段、车上无人或行驶距离为零也可能完全交付。仅在实际必需车辆司机可用时段地域响应运输能力质量已交付且按有据规则接受履约时计数。预约付款最低收费不退款取消费或车辆仅停在某处均不能证明交付。保留有时间的真实修订延长、要求与交付程度、中断提前释放终止及质量。不得为计数事后将未履行承诺范围改称完整租用。区分真正接受的修订完整约定、未完成失败交付及独立部分产出，保留全部物理负荷原始证据。

N为相同声明可比队列内真实已履行单车完整租用项的正数，不是人数或已完成乘客运输区段数；最终产出归一为一项。N=0则无有限每租用项结果，仍保留失败取消支持活动及其与相应服务池有据关系。仅乘客为零不使N=0。声明真实时长车型可用性距离路线质量分布，不同约定须分层或披露异质及有据汇总，不能无独立支持参考真实换算而改名车辆小时天人公里或乘客服务。

通过闭合车辆运营平台期间全使用者台账，纳入真实预约调度司机运营支持准备接客载客行驶多目的地绕行约定静止可用等待调位空返取消失败及实际场地道路站点充电接口。实际服务所需支持休息住宿接送安全无障碍设施须具体物理供应清单，不能将工资或日常人类食物变成虚构劳务燃料交换。整车初始零件更换电池制造使用维护退役真实燃料库存燃烧泄漏回收及供应已含单元须互斥负责。

排除出租车履约、无运营者裸车出租、没有统一负责供车租用功能的纯司机劳务及独立预约经纪。按真实履行功能责任判断真正观光医疗等套餐：租车到景点或搭载病人本身不使产出成为观光医疗包。租用范围内真实导游饮品通信无障碍等附带责任仍在边界，独立销售不同产品须真实细分分配。真实非乘用车载具客车或独立水空运输为不同功能，不能默改名乘用车。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.chauffeured-passenger-car-hire-engagement-service |
| classification_refs | CPC3.0 64116 Rental services of passenger cars with operator; dedicated full actual function, exact |
| covered_products | 除出租车外不论交付地点的真实带司机乘用车租用，含真正履行约定可用性待命、完整多站租用及其他合格租用合同 |
| excluded_products | 出租车、无运营者裸车租赁、独立司机劳务经纪预约、不同非乘用车运输或真实独立观光医疗包 |
| representative_product | 一辆真实乘用车及司机服务履行一项确定完整租用约定，声明时长范围接受质量 |
| production_route | 统一负责供车司机租用约定、真实可用性或行驶活动与接受履约、全部因果支持供应及车辆场地全寿命 |
| market_state | 具有约定实际交付证据的已履行单车带司机完整租用 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已履行的单车带司机乘用车完整租用约定 |
| How much | 1项真实已履行单车完整租用约定 |
| How well | 声明真实车型配置司机责任可用性运输程度中断替代质量与接受履约 |
| How long or cycle | 真实约定交付租用时段时长修订时间覆盖，含真正待命及因果支持全寿命 |
| reference_flow_link | fulfilled_car_hire |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已履行的单车带司机乘用车完整租用约定 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | actual_64116_carhire_function_except_taxi; actual_single_car_engagement_identity; accountable_operator_and_chauffeur_responsibility; agreed_and_delivered_duration_interval_scope; availability_transport_response_and_accepted_quality; fulfilment_rule_and_timestamped_amendments; actual_vehicle_class_configuration_substitutions; actual_geography_itinerary_distance_or_evidenced_stationary_duty; actual_passenger_activity_secondary_not_denominator; other_platform_private_user_duty_closure; native_provider_unit_demand_and_coverage; same_asset_all_user_complete_useful_duty; actual_energy_material_species_fates_and_uncertainty |

必需限定信息须在数据包元数据过程说明参考流备注或等效处声明，缺失即定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| hire_count | reference product | Number of items | Item(s) | N计有实际约定程度时长质量接受记录的兼容真实已履行单车完整租用项。零乘客区段零距离可与已履行可用性租用并存。预约车队司机班次乘客区段收费取消不是履行产出。有限每租用项归一须N>0，不用载客分母。 |
| duration_extent_comparability | all inventory rows | Actual service extent and native activity | Item(s); h; day; km | 声明每约定实际承诺交付时段时长车型活动范围质量。实质不同租用须分层或披露有据权重异质，数量本身不使不同时长可比。小时天原生供应活动另测，仅在验证匹配功能边界换算，费用最低计费时长不等于交付时长。 |
| native_conversion | all inventory rows | Native compatible property | Actual native unit | 保留实测单位。计量电量可按 3.6 MJ/kWh 换算；这是能量单位换算，不是燃料热值系数。燃料或水从体积转质量须有实际兼容密度及状态；N2O-N、按 NO2 表示的 NOx 和制冷剂 CO2 当量须明确物质换算。 |
| fuel_stock_and_fate | gasoline_supply; diesel_supply | Mass | kg | 燃料净取用 = 期初库存 + 实际接收 - 期末库存 - 退回。独立核对真实燃烧、泄漏、蒸发、回收及其他转移，不能用无法解释的残差推定去向。燃料供应负荷按归属净取用量计，直接燃烧计算则仅采用兼容的真实燃烧量及有依据的碳氧化基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 具有约定交付时段质量车辆司机及供应边界事实的真实确定单车带司机租用队列，更早供应及以后全寿命责任保留。 |
| starting_condition_role | 确定前景采集的实测服务队列及供应端口事实，不是上游切断信用。 |
| product_classification_scope | 除出租车外不论地点的真实带司机乘用车租用，一般计费有限乘客常见多目的地不是普遍门槛 |
| recursive_input_rule | 自营行驶区段司机班次已交付待命是同一租用内部活动，不是另一外购租用或最终乘客产出。真实完成外部租用供应结果仅按实际原生需求替换准确兼容已含单元，未覆盖责任补齐一次。 |
| upstream_dataset_requirement | 要求兼容且完整的供应、车辆、电池、基础设施及处理数据集，明确实际原生单位、技术、地域、寿命和覆盖范围。 |
| disclosure | 约定实际履约质量时长、含零乘客可用性的完整车辆司机活动全使用者台账、供应原生范围资产寿命库存去向闭合不确定性异质 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_coverage | hire_service | 采用一个声明的服务队列，准备、实际载客与空驶、待班、失败或零乘客但实际运行的班次及相关支持均须只归属一次；无法解释的余量或未知适用性不能按零排除。 | nyc-tlc-utilization-2025;ghg-product-standard |
| upstream_and_assets | hire_service | 纳入兼容能源供应及车辆、电池、道路、场站和充电设施全寿命负荷，按实际服务及寿命分摊。添加单列运行、制造、维修或处理前先记录供应方覆盖范围，避免同一生命周期阶段重复计入。 | eea-electric-vehicles;ghg-product-standard |
| conditional_technology | hire_service | 仅对实际动力及控制配置形成清单，同时保留对其他实际能源载体、氢气供应、混合动力子系统、试剂、制冷剂及材料的强制识别和展开要求。电网电驱动不能证明上游或非尾气排放为零。 | eea-electric-vehicles;ipcc-mobile-combustion |
| fate_interfaces | hire_service | 分别核对收集的液体和固体、回收产品及直接物质和介质排放；收集废水不属于空气排放，蒸发水不属于待处理废物，交付废物不等于处理已经完成。 | ghg-product-standard |
| duty_and_personal_ownership | hire_service | 要求完整车辆作业台账，区分真实客户区间、派单接客、巡游空驶、候客、失败包用及实际私人驾驶员出行。即使无乘客，具有因果归属的营运作业仍须保留。跨用途及共用移动须有证据且只归属一次；平台费或驾驶员工资不是物理负荷。 | nyc-tlc-utilization-2025;ghg-product-standard |
| fuel_blend_ownership | gasoline_supply; diesel_supply | 声明实际供油采用一股经核实兼容的完整混合燃料供应，还是物理组分供应。整股燃料的组分及碳源台账不构成额外组分投入。若采用组分交换，须替代对应整股数量及已覆盖上游负荷，并核对质量、原生单位及供应方边界闭合。不得同时加入全部混合燃料及其内含生物或化石组分供应；两种表达均不得遗漏真实组分及其上游负荷。 | ipcc-mobile-combustion;ghg-product-standard |
| hire_fulfilment_and_standby | hire_service | 每计数产出须有除出租车外不论交付地点的实际约定车辆司机功能及完整接受履约。真实已交付可用性待命即使无人也是服务，仅预约收费取消可用性不是。保留按时序修订真实质量中断替代，不能事后改名短租用将失败承诺变完成；真实独立接受修订部分功能须不同证据及披露可比。 | cpc3-structure;blacklane-hourly;uber-hourly |
| native_provider_and_life_coverage | purchased_car_hire | 建立一个真实车辆活动时段供应方生命周期覆盖台账，各单元由自营物理量或兼容已完成供应结果负责一次，并补未含责任。验证原生u每单位q_u贡献=q_u*真实兼容需求A_u*有据队列全使用者份额/N一次。完整租用车辆小时天乘客距离汽车制造司机劳务不可互换，不按人数分配租用产出或重复供应内部行驶区段。 |  |
| whole_asset_and_fuel_interfaces | all inventory rows | 每真实资产供应保留原生交付量制造边界初始组件范围及同资产兼容归属活动/正数全部使用者有效活动/N，仍为制造供应而非全寿命服务，补缺交付使用维护改造更换退役。整总成初始组件互斥，完整混合燃料加组分来源台账或准确替代组分须质量供应闭合；供应库存燃烧泄漏排空溢漏回收内部转换须区分。 |  |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| hire_service | 带司机单车完整租用及归属全寿命 | required | 真实汽车租用约定责任，含已交付可用性及因果失败支持活动 | 最终已履行汽车租用产出与完整支持范围 | fulfilled_car_hire |

全部真实物理活动内部乘客区段停站司机更替共享最终完整已履行租用参考，不是额外最终产出或自身外购。条件卡仅适用真实兼容身份覆盖，其他每真实交换须强制原子扩展。

### 过程：带司机单车完整租用及归属全寿命 (`hire_service`)

#### 输入

##### 产品流

###### 汽油 (`gasoline_supply`)

仅适用于有证据牌号及混合组成的实际汽油供应。通过库存闭合记录消耗质量；原生体积须具备兼容实测密度和状态。识别真实混合组分及碳源，生物碳不得默认为化石碳。采用兼容的整股混合燃料供应及其组分台账，或以组分供应替代对应整股供应；不得把完整混合燃料与其所含组分供应同时加入。 须实际配方牌号及原生供应边界匹配，将工厂点或其他供应边界桥接真实接收使用并独立补缺交付调节储存损失，供应行不自动含缺阶段。

- 选定流: 汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的汽油净取用质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `ipcc-mobile-combustion`

###### 柴油 (`diesel_supply`)

仅适用于实际柴油或另经核实兼容的柴油供应；其他燃料须有各自兼容记录。对于混合燃料，在台账中识别组分及来源，并选择兼容整股供应或替代组分供应，核对质量和边界闭合，不得同时计入两者。按体积采集时，转为质量前须有实际兼容的密度、状态和来源。 须实际配方牌号及原生供应边界匹配，将工厂点或其他供应边界桥接真实接收使用并独立补缺交付调节储存损失，供应行不自动含缺阶段。

- 选定流: 柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的柴油净取用质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `ipcc-mobile-combustion`

###### 交流电 (`charging_ac`)

仅在实际电网充电时纳入。计量声明的交流电交付端口；该端口以内的变压、充电损失须保留。电池放电属于内部转移，不再列为另一次购电。 保留真实外部交流交付点电压充电损失，外供直流换电须自身验证原生身份需求，内部整流电池放电再生不是额外外购能源。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 能量 / MJ
- 数量规则: 归属的充电输入电能 MJ / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `eea-electric-vehicles`

###### 交流电 (`support_ac`)

实际照明、维修及场站作业电耗；排除已计入 charging_ac 或完整供应商结果的数量。优先分表，共用部分再采用有证据的全体使用者物理驱动分配。

- 选定流: 交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位: 能量 / MJ
- 数量规则: 归属的非充电场站电能 MJ / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_depot`
- 来源: `ghg-product-standard`

###### 自来水 (`wash_water`)

仅适用于声明供水端口实际交付的液态自来水。原始体积须保留，直至具有兼容密度或独立核实的体积关系；本 PCR 不设通用密度。 须实际配方牌号及原生供应边界匹配，将工厂点或其他供应边界桥接真实接收使用并独立补缺交付调节储存损失，供应行不自动含缺阶段。

- 选定流: 自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的自来水质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_depot`
- 来源: `ghg-product-standard`

###### 洗涤剂 (`cleaning_detergent`)

仅在实物为兼容合成表面活性剂洗涤产品时使用；肥皂、消毒剂、溶剂及其他配方分别建行，不能合并为洗涤剂。 仅适用于文件证明与选定身份及实际制剂交付端口兼容的洗涤剂产品。其他消毒剂、溶剂或清洁剂必须分别形成交换，不能仅因名称相近归入此流。 须实际配方牌号及原生供应边界匹配，将工厂点或其他供应边界桥接真实接收使用并独立补缺交付调节储存损失，供应行不自动含缺阶段。

- 选定流: 洗涤剂 `1c57d123-df57-49ab-b9d4-957403beb8a5`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的兼容洗涤剂质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_depot`
- 来源: `ghg-product-standard`

###### 制冷剂，R134a (`refrigerant_r134a_supply`)

此通用化学产品身份只在实际供应证明为相符的单一 R134a 制冷剂时使用；其他异构体、混合制冷剂及供应配方须另行识别。它不指定车辆、泄漏量、补充量或供应方生命周期覆盖。 仅在实际设备使用 R134a 且发生补充时纳入。初始充注由车辆生命周期或单列供应之一承担。补充量不自动等于泄漏量；回收量和剩余充注量须闭合。 须实际配方牌号及原生供应边界匹配，将工厂点或其他供应边界桥接真实接收使用并独立补缺交付调节储存损失，供应行不自动含缺阶段。

- 选定流: 制冷剂，R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的 R134a 补充质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`
- 来源: `ghg-product-standard`

###### 交付的汽油乘用车 (`gasoline_car_supply`)

仅适用于实际汽油乘用车供应及其经核实的制造供货交接点。完整寿命作业仅是分摊分母，不证明覆盖全寿命运输。未覆盖的运行、维修及退役处理须独立采集；完整供应方仅替代确切覆盖的交换。租金和财务折旧不能代替车辆计数。

- 选定流: 交付的汽油乘用车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 归属的汽油乘用车供货当量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `ghg-product-standard`

###### 交付的纯电乘用车 (`bev_car_supply`)

仅适用于已核实制造交接点的实际完整纯电乘用车供应。声明实际车辆及初始电池覆盖，不得把同一初始电池包再加一次。寿命只分配供货负荷；未覆盖的使用、更换、维修及退役须独立加入。其他实际车辆及电池配置须独立展开。

- 选定流: 交付的纯电乘用车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 归属的纯电乘用车供货当量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `eea-electric-vehicles`

###### 已履行的单车带司机乘用车完整租用约定 (`purchased_car_hire`)

仅适用真实已履行且时长车型司机责任地域可用性运输范围接受质量匹配的单车带司机租用供应结果及其真实供应边界。本数量卡仅适用验证原生完整约定结果，链接真实合同车辆时段及已含全寿命单元。按小时天车辆公里等其他原生结果须自身具体身份实测真实需求兼容换算，不能改名一项完整租用。供应已含制造使用支持去向只替换准确前景单元，不得将自营物理区段再外购或再次除载客率。

- 选定流: 已履行的单车带司机乘用车完整租用约定
- 流属性/单位: Number of items / Item(s)
- 数量规则: actual_matched_fulfilled_provider_engagements_attributed_to_cohort / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_provider`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已履行的单车带司机乘用车完整租用约定 (`fulfilled_car_hire`)

按有据接受规则履行声明完整约定时长范围可用性质量的一项真实单车带司机租用，含没有乘客运输却真正交付的待命。不是预约付款乘客区段人数司机更替内部停站或车辆移动。原始N为兼容真实已履行单车完整租用项数，最终产出归一为一。未完成失败部分交付须另保留，不能改称完整履行。

- 选定流: 已履行的单车带司机乘用车完整租用约定
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_service`
- 来源: `cpc3-structure`, `blacklane-hourly`

##### 废物流

###### 乘用车清洗产生并收集的液态废水 (`wash_wastewater`)

仅表示独立收集、具有实际组成及接收端口的液体出口。污泥、废油和直接环境排放须另列。蒸发水不属于废水，也不能假设所有供水均进入该出口。

- 选定流: 乘用车清洗产生并收集的液态废水
- 流属性/单位: 质量 / kg
- 数量规则: 归属的收集洗车废水质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fates`
- 来源: `ghg-product-standard`

###### 废润滑油 (`spent_engine_oil`)

仅在实际油品类型符合且独立收集时纳入。其他液压液、溶剂、滤芯及隔油装置残余物不得合并到此流。新油、留存油、损失和回收废油须核对。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的废矿物发动机油质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fates`
- 来源: `ghg-product-standard`

###### 报废的乘用车复合充气轮胎 (`spent_car_tyres`)

接收端口一股实际收集的复合轮胎物流，不是基本排放，也不代表全部维修废物。翻新、再用及磨耗损失须分别核算；更换一条轮胎不能证明排入空气的数量。

- 选定流: 报废的乘用车复合充气轮胎
- 流属性/单位: 质量 / kg
- 数量规则: 归属的收集报废乘用车轮胎质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_fates`
- 来源: `eea-electric-vehicles`

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2_air`)

该 UUID 为排向空气、未特指子区室的身份。只有实际记录明确采用兼容的未特指空气子介质且说明原因时可用；不得抹去已知城市、非城市、近地或其他子区室信息。已知更具体子介质须另建对应行并核实身份，不得同时重复计入本行。 仅在化石来源、物质和空气介质均已确定时计入实际直接排放。燃料、润滑油及尿素各来源须先分别计算，再进行兼容汇总。生物燃料碳不得默认为化石碳。

- 选定流: 二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的排向空气化石源 CO2 质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-mobile-combustion`

###### 甲烷 (化石源) (`fossil_ch4_air`)

该 UUID 为排向空气、未特指子区室的身份。只有实际记录明确采用兼容的未特指空气子介质且说明原因时可用；不得抹去已知城市、非城市、近地或其他子区室信息。已知更具体子介质须另建对应行并核实身份，不得同时重复计入本行。 实际排向空气、已确认化石来源且与车辆、燃料和控制条件兼容的甲烷。这既不是天然气燃料供应，也不是二氧化碳当量；其他来源须分别建账。

- 选定流: 甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的排向空气化石源 CH4 质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-mobile-combustion`

###### 一氧化二氮 (`n2o_air`)

该 UUID 为排向空气、未特指子区室的身份。只有实际记录明确采用兼容的未特指空气子介质且说明原因时可用；不得抹去已知城市、非城市、近地或其他子区室信息。已知更具体子介质须另建对应行并核实身份，不得同时重复计入本行。 仅录入来自兼容测量或模型的实际 N2O 物质质量。kg N、按 NO2 报告的 NOx 及 kg CO2 当量不能在没有明确独立换算及物种证据时填入。

- 选定流: 一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的排向空气 N2O 质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `ipcc-mobile-combustion`

###### HFC-134a (`r134a_air`)

该 UUID 为排向空气、未特指子区室的身份。只有实际记录明确采用兼容的未特指空气子介质且说明原因时可用；不得抹去已知城市、非城市、近地或其他子区室信息。已知更具体子介质须另建对应行并核实身份，不得同时重复计入本行。 天工直接读取无官方中文 baseName，选定流保留原名 HFC-134a；本行实际物质为 1,1,1,2-四氟乙烷，CAS811-97-2。 仅适用于实际 R134a 已确定的大气泄漏。记录期初期末充注、添加、移出、回收及存量差异；未知泄漏不等于零，整体回收的制冷剂仍属于产品或废物去向。

- 选定流: HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 归属且经核实的排向空气 R134a 质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_maintenance`
- 来源: `ghg-product-standard`

###### 颗粒物 (PM2.5) (`pm25_air`)

该 UUID 为排向空气、未特指子区室的身份。只有实际记录明确采用兼容的未特指空气子介质且说明原因时可用；不得抹去已知城市、非城市、近地或其他子区室信息。已知更具体子介质须另建对应行并核实身份，不得同时重复计入本行。 仅表示此明确粒径等级及空气介质，并分别估算尾气、制动和轮胎来源。不得把重叠的总颗粒物或 PM10 当作独立排放重复相加；截留碎屑、道路沉积和径流须按实际去向另列。

- 选定流: 颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位: 质量 / kg
- 数量规则: 归属的排向空气 PM2.5 质量 / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_emissions`
- 来源: `eea-electric-vehicles`

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| causal_partition | hire_service | 先按车辆、线路及服务任务细分并优先直接计量。共用负荷 Q 采用实际归属驱动 d_c 和覆盖全体使用者的分母 sum(d_j)，记录物理关系、排除项及敏感性。运力、收入比例及均分不能自动成为分配系数。 | ghg-product-standard |
| empty_and_lifetime | hire_service | 必要调位、空载服务和待班支持须按已证明的线路或期间因果关系分配到完整相关服务队列，不得采用假设载客率。资产分摊覆盖完整有效服务及实际更换；当年采购额、租金或折旧额不是制造资产的数量。 | nyc-tlc-utilization-2025;ghg-product-standard |
| no_automatic_credit | hire_service | 回收材料、再生制动能量及寿命末期再生材料须有实际去向、质量和覆盖范围。已减少净购电的内部再生能量不得再次获得避免购电信用；不规定默认替代比例或负废物信用。 | ghg-product-standard |
| engagement_and_other_users | hire_service | 先将实测车辆活动时段量直接归属真实租用，含实际约定静止可用及全部内部乘客移动停站，不能按人数乘客区段拆除整车租用。先细分私人其他租用出租平台活动及独立销售不同产出，再用有据兼容物理驱动完整全使用者分母分配共用残余。乘客行李真实附带项仍在声明租用功能内，人数货物质量费用车辆小时不是可相加等效产出。 |  |
| failed_pool_and_zero_passengers | hire_service | 保留完整因果准备调度等待调位空返失败取消未完成活动及必要司机支持场地负荷。区分未履行产出与真正交付零乘客可用性。将有据残余失败支持池归属完整相关可比已履行租用队列，N=0披露池且无有限每项强度。不得删除失败负荷或用费用利用率座位容量载客率作为物理分配。 |  |

## 8. 前景数据采集、计算与质量规则

完成覆盖原生缩放分配记账公式是本PCR明确方法设计，外部来源仅支持已述真实定义物理背景，不声称UN、TLC、DfT、Blacklane、Uber、IPCC、EEA或GHGProtocol规定这些全寿命租用约定公式。缺通用范围不免除强制真实量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | hire_service | fulfilled_car_hire | hire_agreement_delivery_record | agreement_ID; single_car_engagement_ID; actual_car_ID; car_class_configuration; accountable_operator; chauffeur_responsibility; actual_geography; promised_interval_duration_extent; actual_availability_response_quality; delivered_interval_duty; actual_standby; passenger_legs_secondary; actual_OD_distance_or_stationary; fulfilment_acceptance_rule; acceptance_evidence; timestamped_amendments_extensions_release; driver_vehicle_substitution; interruptions; partial_failed_cancelled_no_show; platform_other_private_users; cross_period_carry; uncertainty | 核对真实单车约定时序修订与真实车辆司机可用响应运输活动时段车型质量日志接受履约。每真实单车责任一项完整履行，不按司机班次停站内部区段预约车队重复。独立于人数证实真正交付静止待命，付款最低费取消费不是交付。保留原承诺程度及真实提前释放终止部分失败，不能倒缩失败完整范围当成功。真实不同时长车型质量队列分层。N=兼容真实已履行单车完整记录之和，仅归一一次。 | Item(s); actual h; actual day; km; secondary persons/legs | per operation; declared representative period | 声明的完整队列及必要寿命接口 | 不论交付地点的真实约定交付车辆司机租用及完整相关运营平台全使用者活动池 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_energy | hire_service | gasoline_supply; diesel_supply; charging_ac | meter_stock_record | vehicle_id; fuel_identity; fossil_biogenic_fraction; actually_burned; spilled; evaporated; recovered; transferred; native_unit; opening_stock; deliveries; closing_stock; returns; charge_gate; charger_losses; actual_loaded_km; deadhead_km; idle_hours; zero_passenger_duty; on_duty_waiting; empty_cruising; dispatch_pickup; failed_jobs; platform_sessions; personal_driver_travel; complete_odometer_ledger; engagement_ID; actual_contracted_standby; actual_stationary_HVAC; driver_change_and_empty_return; other_hire_taxi_platform_duty; full_duty_interval | 分别核对燃料供应取用与实际燃烧、泄漏、蒸发、回收和转移；直接燃烧活动量不能自动等于全部取用量。对同一实际任务采用一致的燃料存量、计量及交流电输入记录；区分采购、消耗、其他使用者和转移；核对充电设施与车辆电池边界。 归属燃料和电量前，划分完整 GPS 里程表作业，包含空载服务及实际多平台重叠。仅登录时长或计价付费里程不代表完整车辆作业。 计算与汇总：归属燃料净取用及实际交流交付电量 / N；分别记录其燃烧去向活动，核对库存，只在证据兼容时换算 分母N为已履行完整单车租用项而非乘客，按真实归属含实际必要静止可用司机更替支持空载失败活动，闭合其他出租平台租用私人使用者及供应已含单元。 | kg; MJ; native volume; km; h | each vehicle/charge/fill; full cohort | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_depot | hire_service | support_ac; wash_water; cleaning_detergent | site_record | site_id; meter_id; covered_users; charge_meter_overlap; native_quantity; material_SKU; actual_formulation; delivered_gate; physical_driver_all_users | 采集场站表计、清洗领用记录及供应方范围；先分开充电、维修、其他车队和场站使用者，再分配实测共用余量。 计算与汇总：实际归属数量之和 / N；保留明确的共用归属 分母N为已履行完整单车租用项而非乘客，按真实归属含实际必要静止可用司机更替支持空载失败活动，闭合其他出租平台租用私人使用者及供应已含单元。 | MJ; kg; native material units | each issue/meter period; same cohort | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_maintenance | hire_service | refrigerant_r134a_supply; r134a_air | maintenance_record | vehicle_id; actual_refrigerant; opening_charge; additions; removals; recovered_charge; closing_charge; urea_solution_mass; concentration; reagent_carbon_origin; replaced_component; actual_fate | 使用工单、物质和制剂证明及平衡记录；分别识别添加、大气损失、回收产品和废物。未知泄漏或化学组成不等于零。仅在实际系统适用时采集尿素及 SCR 字段；每项真实试剂须有独立具体交换和覆盖，不使用则明确记录证据。 计算与汇总：经独立平衡核对的实际归属供应或排放数量 / N 分母N为已履行完整单车租用项而非乘客，按真实归属含实际必要静止可用司机更替支持空载失败活动，闭合其他出租平台租用私人使用者及供应已含单元。 | kg; actual component units | each maintenance event; cohort and lifetime interfaces | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_assets | hire_service | gasoline_car_supply; bev_car_supply | asset_lifetime_record | asset_ID; vehicle_configuration; initial_battery_coverage; actual_replacements; useful_life_duty; total_life_driver; attributed_driver; all_users; manufacturing_maintenance_retirement_scope; road_and_depot_service_inventory; uncertainty; native_delivered_asset_quantity; same_asset_all_hire_taxi_private_users; actual_positive_all_user_useful_duty; independent_components_and_retirement; driver_support_site_assets | 分别记录交付车辆电池包的制造供应端口、初始电池范围及实际数量，与其全寿命服务分母分开。制造、使用、维修及退役每一阶段只指定一个承担方。未覆盖的运行、部件供应、整车或部件处置处理须独立加入；完整供应方只替代确切覆盖的阶段。说明寿命及全使用者服务，不得以货币替代件数。 计算与汇总：对每项资产 a：交付的制造供货数量乘归属服务量 / 兼容有效服务总量 / N；仅分配已核实供应方范围，不包含未覆盖的使用或退役。寿命分母须明确且为正 实际营运、家庭私用及其他使用者均进入兼容物理寿命分母；贷款期限或残值金额不能代替物理有效寿命。 分母N为已履行完整单车租用项而非乘客，按真实归属含实际必要静止可用司机更替支持空载失败活动，闭合其他出租平台租用私人使用者及供应已含单元。 逐项独立记录真实车型底盘驱动电池更换及实际司机支持安全无障碍资产。车辆所有权租赁融资不决定物理制造有效寿命，同资产兼容全使用者有效活动在有据物理驱动时含实际静止服务，不虚构待命公里当量。 | Item(s); km; h; actual infrastructure service units | asset life; update on replacement or retirement | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_fates | hire_service | wash_wastewater; spent_engine_oil; spent_car_tyres | fate_record | stream_ID; material_state; native_quantity; composition; receiver_gate; waste_status; reuse_retread; transport; treatment_provider; treatment_coverage; direct_outlet; stock_change | 对每股实际物流使用独立称重、转移单及接收方证据。核对投入、库存、蒸发、磨耗及实际收集数量，不得构造综合余量废物。 计算与汇总：归属的独立去向数量 / N；处理只计一次 分母N为已履行完整单车租用项而非乘客，按真实归属含实际必要静止可用司机更替支持空载失败活动，闭合其他出租平台租用私人使用者及供应已含单元。 | kg; actual receiver-native units | each transfer/discharge; cohort | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_emissions | hire_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air | species_medium_record | source_ID; vehicle; fuel; duty; species; fossil_biogenic_origin; particle_size; receiving_medium; factor_native_basis; unit; measured_or_modelled; factor_source; scope; overlaps; uncertainty | 实测，或采用另有依据、与技术、燃料及工况相符的非默认模型。核对系数基准与实际活动、来源及介质。保留所有适用非尾气、燃烧、试剂和泄漏记录。 计算与汇总：不重叠的实际各来源物种数量之和 / N；不得以 CO2 当量替代物种质量 分母N为已履行完整单车租用项而非乘客，按真实归属含实际必要静止可用司机更替支持空载失败活动，闭合其他出租平台租用私人使用者及供应已含单元。 | kg species; particle-size-specific kg | actual duty or justified representative measurement | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_provider | hire_service | purchased_car_hire | provider_native_coverage_record | provider_ID; agreement_car_interval_link; matched_duration_class_quality_scope; native_unit_u; q_per_u; actual_demand_A_u; measured_compatible_conversion; provider_gate; covered_cells; remaining_owner; cohort_all_user_share; already_normalized; uncertainty | 读取真实完成供应服务原生功能单位及已含阶段单元，匹配实际车辆司机时长车型范围质量。q_u乘真实兼容A_u及有据队列全使用者份额/N一次，仅供应原生结果为一匹配已履行完整租用时用本数量卡。小时天车辆量须独立验证行实际需求，不按每人载客换算。仅替换准确已含单元，保留未含集成方车辆场地支持全寿命负荷。 | Item(s); actual verified provider-native units | per operation; declared representative period | 声明的完整队列及必要寿命接口 | 不论交付地点的真实约定交付车辆司机租用及完整相关运营平台全使用者活动池 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_actual | all inventory rows | 对每项真实交换，归属数量除以相同 N；已经归一化的供应方结果不得重复除以 N。 | actual attributed native quantity;N;cp_service | quantity per reference flow | ghg-product-standard |
| shared_allocation | all inventory rows | 归属共用数量 = 实测共用总量乘实际队列驱动 / 全体兼容使用者驱动总量。采用正分母，逐项给出物理依据及不确定性。 | measured shared total;cohort driver;complete all-user denominator | attributed native quantity | ghg-product-standard |
| asset_equivalence | gasoline_car_supply; bev_car_supply | 采用 cp_assets 记录的交付制造供货数量及实际全寿命服务比例；寿命只是分配基准。独立计入未覆盖的使用、维修及退役；初始与更换、车辆与电池包及完整供应方范围不得重复。 | cp_assets;actual complete-life quantities;positive compatible duty denominator | attributed delivered supply equivalents | ghg-product-standard |
| fuel_fate_partition | gasoline_supply; diesel_supply | 净取用 = 期初 + 接收 - 期末 - 退回；按兼容库存边界独立核对有记录的燃烧、泄漏、蒸发、回收及其他去向数量。任何未解释差额均阻断闭合。直接燃烧模型采用真实燃烧质量，不能采用全部取用或发票质量。 | cp_energy;cp_emissions;cp_fates | 归属燃料供应及独立兼容燃烧去向活动量 | ghg-product-standard |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| completion_and_comparability | hire_service | 缺真实约定单车责任时长程度质量接受履约证据阻断完成。N为已履行兼容租用项而非乘客区段，真正交付零乘客静止可用须保留，实际活动距离可有据为零而非假设缺失。保留未成功部分修订承诺交付差异及异质队列。 | cp_service;cpc3-structure;blacklane-hourly;uber-hourly |
| other_actual_energy | hire_service | 识别具体示例未列出的所有实际燃料、氢气供应、蒸汽、热力、混合动力路径或辅助能源载体。记录确切交付身份、原生单位、上游范围及实际数量；未知适用性阻断完成。 未知身份、数量或适用性均阻断完成。 | cp_energy |
| other_actual_materials | hire_service | 逐项识别实际润滑剂、化学品、消毒剂、清洗剂、试剂制剂、备件、轮胎或电池化学体系和配置。每项独立供应或维修物品须展开为经核实的原子交换，不得用通用材料集合替代。 未知身份、数量或适用性均阻断完成。 | cp_maintenance |
| roads_depots_and_charge_assets | hire_service | 获取实际归属的道路、站点、场站、充电设施及其他支持设施生命周期清单，具备兼容的全寿命全使用者分母。区分已被供应方覆盖与确实缺少的负荷；覆盖缺失阻断完整生命周期使用。 未知身份、数量或适用性均阻断完成。 | cp_assets |
| providers_and_subcontracting | hire_service | 识别每项实际外包运营、维修或处理结果及其原生功能单位、边界和物理驱动。完整供应方结果替代其覆盖的前景交换，不得再次添加，也不得随意借用货运或车辆制造 UUID。 未知身份、数量或适用性均阻断完成。 | cp_depot |
| other_fate_streams | hire_service | 逐项展开实际污泥、滤芯、包装、电池、退役整车或拆解部件、废水出口、再用产品及处置处理结果。同一材料的整车及留存部件视图互斥。确定物质、混合状态、接收端口及原生数量；不得把蒸发或无法解释的损失编为收集废物。 未知身份、数量或适用性均阻断完成。 | cp_fates |
| other_species_media | hire_service | 识别实际 CO、具有明确化学报告基准的氮氧化物、氨及 SCR 逃逸、其他每种制冷剂、生物源燃烧产物、非尾气粒径等级、道路土壤沉积及径流物质和出口。每项独立计量的物质、粒径、来源及介质须展开；不得使用通用 NOx、VOC 或粉尘余量 UUID，也不得缺失按零。 未知身份、数量或适用性均阻断完成。 | cp_emissions |
| duty_purpose_and_platforms | hire_service | 识别每实际租用待命司机支持私人出租其他平台活动时段重叠，补齐实际必需调度数字场地司机接送休息支持的确定物理供应服务。金钱工资不证明原生产出，日常人类维生不自动是运营燃料，真实已含服务供给边界须明确发生归属及独立原子量，未知为未完成。 | cp_service; cp_energy; cp_depot |
| atomic_actual_expansion | hire_service | 每真实未表示材料车辆零件场地资产供应结果附带产品废物物种颗粒介质处理必须唯一row_id、一个既有过程真实方向类型、单一确定身份状态配方、验证UUID或明确未解析、原生属性单位量基准原始来源、同父有效CP、物理计算供应边界已含单元、接收已知子介质及不确定性。须解决真实发生或有据不适用，未知不是零或范围排除，通用集合行不能代实际交换。 | all actual records;valid process/protocol foreign keys |
| full_actual_car_technology_and_provisions | hire_service | 必须识别每实际乘用车型底盘驱动、初始更换电池罐组件、压缩天然气液化石油气氢等燃料配方混动路径、外部交流直流换电、真实空调控制试剂制冷剂安全无障碍配置。两张整车交付卡仅适用真实匹配总成，非全部汽车技术。原生制造供应全使用者有效活动维护退役及每真实物种废物去向须各自补齐。真实已含司机支持通信饮品等供给保留具体上游去向责任，不设默认供给因子。 | cp_assets;cp_energy;cp_depot;cp_maintenance;cp_fates;cp_emissions |
| fulfilment_history_and_multicar | hire_service | 必须保留原约定时序真实修订、单辆实体车司机责任车辆司机替代、真实承诺交付时长可用响应质量及接受证据。多车按真实租用独立拆分，不按车队订单司机班次。真正履行零乘客可用性与未交付取消部分工作区分，不得事后缩范围造成功或收费当完成。独立接受部分修订功能须真实产出程度可比后方可汇总。 | cp_service;cp_provider;actual agreement and delivery history |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_basis | hire_service | 每计数核实除出租车外真实单车完整租用功能、约定交付时长车型范围质量及接受履约。N>0指已履行租用而非乘客，真正静止零乘客可用性可计数，预约车队司机班次内部区段付款取消本身不可。一般CPC说明不施加一律按时有限人数多目的地地域门槛。 | cpc3-structure;blacklane-hourly;uber-hourly |
| period_closure | hire_service | 闭合车辆司机时段供应活动库存、全部真实其他使用者、失败部分取消跨期。区分真正交付待命与未履行可用性，已履行租用N=0无有限每项强度但零乘客本身非N=0。真实支持失败负荷仍在有据因果池。 | ghg-product-standard |
| identity_and_expansion | hire_service | 每个清单行须对应一项实际材料、服务结果、废物流或物质介质；最终使用前核实确切 UUID、属性及单位兼容性。所有补充要求必须由实际独立行或不适用证据关闭；未知不等于零。 | ghg-product-standard |
| closure_and_overlap | hire_service | 核对充电、车辆及场站能源归属，初始和更换电池，直接与上游排放，重叠颗粒物粒径等级，回收制冷剂，废物处理及资产寿命分配。不允许默认密度、载客率、寿命、排放系数或再生信用。 | ipcc-mobile-combustion;eea-electric-vehicles;ghg-product-standard |
| native_provider_and_cp_gate | hire_service | 每CP process_id为一个既有清单过程，每卡链接有效同父CP。验证供应原生单位真实需求、完整租用与小时天人数距离区别及准确已含单元替换。验证同资产原生制造量正数完整全使用者有效活动、初始更换完整组分及燃料混合组分互斥、已知接收介质真实去向完成。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset，仅在真实约定履约原生身份数量覆盖寿命去向完成复核后 |
| allowed_use | 除出租车外真实已履行单车带司机乘用车租用，统一声明时长车型范围质量真实地域完整寿命，含真正交付零乘客可用性 |
| excluded_use | 替代乘客区段出租车队预约司机班次产出、裸车或纯司机劳务、收费当履约、失败范围改完整、通用每小时人公里载客因子、不完整数据当全寿命 |
| required_metadata | 原修订约定时序、单车司机车型地域时长范围质量接受交付静止失败活动、全使用者平台私人台账、原生供应资产阶段真实量去向不确定性 |
| required_quality_disclosure | 全部未核实身份、缺失实际数量、抽样模型不确定性、未解决的基础设施资产废物覆盖及不可比原因 |
| update_trigger | 线路、动力、车辆、电池或供应方实质变化；活动、寿命或来源证据更新；分类或服务完成定义变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| cpc3-structure | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,actual PDFp359,64116. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 除出租车外不论地点的带司机乘用车租用，一般按时有限人数常见多目的地说明，非普遍门槛或人次运输区段单位。 |
| nyc-tlc-utilization-2025 | official_guidance | NYC TLC Notice of Promulgation,adopted25June2025,PDFpp2,6–8. https://a856-cityrecord.nyc.gov/Search/GetFile?documentId=42301&requestId=20250625045&requestStatus=Archived&sectionId=4 | 仅用于实际作业中载客、候单及接客出行的定性区别。不采用货币费率、利用率、融资寿命或生命周期因子。 |
| dft-private-hire-2023 | official_guidance | DfT Private hire vehicle licensing guidance note,updated17November2023,section2Question2 and3.2. https://www.gov.uk/government/publications/taxi-and-private-hire-vehicle-licensing-best-practice-guidance/private-hire-vehicle-licensing-guidance-note | 仅英格兰典型A到B带司机私人租用许可背景服务责任，非全球法律完整租用完成规则或每委托等于乘客区段证明。 |
| ipcc-mobile-combustion | official_guidance | IPCC2006Guidelines,Vol2Ch3,section3.2,pp3.10–3.16. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 燃料活动、来源及技术特定物种核算的定性要求；不采用默认因子，国家温室气体清单也不等同完整服务生命周期。 |
| eea-electric-vehicles | official_guidance | EEA Electric vehicles,Overview. https://www.eea.europa.eu/en/topics/in-depth/electric-vehicles | 车辆电池制造及道路轮胎制动负荷仍存在；不移植平均收益、电池寿命或通用数值强度。 |
| ghg-product-standard | standard | WRI/WBCSD ProductLifeCycleAccountingAndReportingStandard2011,chapters7–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据质量及细分物理分配；完整车辆基础设施生命周期是本 PCR 明确边界选择，不是归于该温室气体标准的资本强制要求。 |
| blacklane-hourly | official_guidance | Blacklane by-the-hour chauffeur and full-day driver hire,official public page accessed22October2026. https://www.blacklane.com/en/hourly-car-service/ | 真实时长车型灵活路线司机待命延长提前缩短案例，不采用普遍最短最长时长内含距离城市限制价格抵消收益供应可得或默认实际履约。 |
| blacklane-quote | official_guidance | Blacklane quote FAQ,official public page accessed22October2026. https://help.blacklane.com/en/articles/8559919-how-do-i-get-a-quote | 真实按车辆与人数计价差异、多车独立安排及可能司机更替作为接口问题，不采用普遍群体人数工时法律或物理因子。 |
| uber-hourly | official_guidance | Uber Hourly FAQ,official public page accessed22October2026. https://help.uber.com/riders/article/hourly-faq?nodeId=b4eec5b3-8362-44c7-8d15-b76585ad4bdf | 真实时间停站司机接受路线修订与提前结束最低取消收费区别，收费不证明交付。不采用票价最短时长站点里程限制机场地域或载客规则。 |
