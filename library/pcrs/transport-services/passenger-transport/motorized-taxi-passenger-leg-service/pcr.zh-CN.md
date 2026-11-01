---
pcr_id: pcr.motorized-taxi-passenger-leg-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 机动出租旅客运输区段服务

## 1. 范围与适用性

本PCR适用于城市与郊区内或其相互之间真实机动出租旅客运输，包含真实非定班机场接驳及关联预约责任。须判断真实服务功能、地域、运营责任及班期模式；品牌、牌照、车辆案例或预约接客时刻本身不能证明分类资格。特定目的地与按距离计费是一般特点，不是绝对条件：即使实际计价不同，仍须声明真实起讫、服务程度、时长、质量与履约。

参考功能为一名真实乘客完成一次合格机动出租服务的登乘至下车运输区段，不是预约、同一乘客群体、司机、空车调度、可用座位或整段带司机租赁委托。逐人记录包括有据免费乘客的所有真实服务对象。多人共乘多站停靠时，留在车上的乘客不因每个中途站增产出；真实换车及独立登乘至下车区段须分别记录。N仅由相同声明队列内兼容已完成人次运输区段组成，保留真实起讫距离时间分布与完成质量。取消或失败区段不是完成产出，但须保留因果负荷；N=0无有限每人强度。

本方法不限乘用车。真实合格机动两轮、三轮及较大型共享或专享机场接送车辆保留自身底盘、驱动、控制、座位无障碍与安全接口。下列汽油乘用车、纯电乘用车、汽油摩托车、压缩天然气三轮车和柴油客运厢式车条件卡仅表示真实存在的相应确定总成，不是全部车型的选择器。真实其他配置，包括电动两三轮、液化石油气柴油汽油三轮、混合动力、其他驱动或确实合格的自动出租运营，须在完成前独立扩展原生资产能源运营支持质量与全寿命。某国技术案例不自动属于本码；缺身份或数量属于数据未完成而非产品排除。

通过闭合车辆运营方平台期间活动台账，纳入真实预约调度数字支持、接客空驶、候客排队、巡游调位、失败未到取消活动、空载返程及真实机场站点车库充电接口。重叠平台与全部其他私人使用者须归属一次，不能相加登录时长或仅用付费距离。纳入原生完整制造维护电池轮胎零件道路候客点站点充电支持资产及真实退役处理。同一物理责任的完整对象与组分、整种混合燃料与替代组分、采购库存燃烧去向、内部回收和包含式供应覆盖须互斥。

排除定班机场接驳履约、不同的带司机汽车租赁可用性或整段租赁功能、人畜牵引出租、水上出租、空中出租及救护医疗服务，另判断观光和混合方式联程产品。独立预约中介不等于已完成物理产出，而本服务相关预约负荷仍在边界内。不能仅按预约接客时刻认定定班、按接驳字样认定非定班资格，或按有司机认定带司机整段租赁功能。须证实披露实际当地运营安全要求与已交付条件，不能将一地或一家运营规则推广全球。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.motorized-taxi-passenger-leg-service |
| classification_refs | CPC3.0 64115 Taxi services; dedicated full functional scope, exact |
| covered_products | 真实合格城市郊区内或其相互之间的机动出租旅客运输，以及真实非定班机场接驳旅客运输及相关预约责任 |
| excluded_products | 定班机场接驳、不同的带司机整车租赁可用性功能、人畜牵引水上或空中出租、救护医疗、独立纯预约产出、其他不同观光混合方式产品 |
| representative_product | 一名真实乘客完成一次声明起讫程度质量时间的合格机动出租运输区段 |
| production_route | 实际关联预约调度、接客机动运输下车，以及完整因果空载等待失败支持与资产全寿命覆盖 |
| market_state | 有真实机动车辆运营方及完成证据的已履约旅客运输 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已完成的机动出租旅客运输区段 |
| How much | 1个真实已完成人次运输区段 |
| How well | 声明合格实际服务地域非定班机场属性、起讫距离时间、乘客群共乘、无障碍安全及交付质量 |
| How long or cycle | 真实登乘至下车运输时段及完整因果归属活动资产全寿命，披露实际服务期间与跨期 |
| reference_flow_link | completed_taxi_leg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的机动出租旅客运输区段 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | actual_64115_function_and_urban_suburban_geography; actual_non_scheduled_airport_shuttle_if_present; accountable_operator_and_connected_reservation; actual_OD_and_distance_distribution; actual_boarding_alighting_completion_quality; actual_service_duration_and_period; actual_customer_persons_party_segment_pooling; actual_vehicle_chassis_drive_configuration; safety_accessibility_and_quality; supply_gate_stock_and_fates; all_platform_other_private_user_duty_closure; provider_native_unit_and_exclusive_coverage; complete_life_all_user_asset_duty; uncertainty_and_missingness |

必需限定信息须在数据包元数据过程说明参考流备注或等效处声明，缺失即定义不完整。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| service_count | reference product | Number of items | Item(s) | N为声明服务队列真实完成合格机动出租人次运输区段的正数。保留每真实乘客登乘下车起讫，司机乘客群预约调度座位付款均不是人次运输区段。仍在车上的乘客中途停靠不增区段。核对失败未完成跨期活动与真实换车。 |
| distance_basis | all inventory rows | Native service records | Actual native unit | 保留实际车辆公里、人公里、上车次数和完成乘段的区别。乘客距离按实际分段乘客数乘实际段长求和；如另报每人公里结果，须具备其自身经支持的参考基准及披露，不能给本计数流改单位。 |
| native_conversion | all inventory rows | Native compatible property | Actual native unit | 保留实测单位。计量电量可按 3.6 MJ/kWh 换算；这是能量单位换算，不是燃料热值系数。燃料或水从体积转质量须有实际兼容密度及状态；N2O-N、按 NO2 表示的 NOx 和制冷剂 CO2 当量须明确物质换算。 |
| fuel_stock_and_fate | gasoline_supply;diesel_supply;cng_supply;lpg_supply | Mass | kg | 燃料净取用 = 期初库存 + 实际接收 - 期末库存 - 退回。独立核对真实燃烧、泄漏、蒸发、回收及其他转移，不能用无法解释的残差推定去向。燃料供应负荷按归属净取用量计，直接燃烧计算则仅采用兼容的真实燃烧量及有依据的碳氧化基准。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 识别供应边界车辆活动记录及关联预约责任的真实机动出租队列，更早供应生命周期阶段仍为必需。 |
| starting_condition_role | 确定前景采集的实测服务队列及供应端口事实，不是上游切断信用。 |
| product_classification_scope | 64115专属完整真实城市郊区内或之间机动出租功能，含实际非定班机场接驳，一般距离目的地说明非绝对条件 |
| recursive_input_rule | 不得将自营物理区段再作为自身外购。真实已完成分包出租供应结果仅按验证原生单位及实际匹配需求替换其有据覆盖单元，补齐未覆盖集成方及其他全寿命负荷。 |
| upstream_dataset_requirement | 要求兼容且完整的供应、车辆、电池、基础设施及处理数据集，明确实际原生单位、技术、地域、寿命和覆盖范围。 |
| disclosure | 披露全部实际任务、完成和失败服务、能质平衡、空驶、供应方覆盖、共用使用者、生命周期分配、未解决数据及线路可比性。 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_coverage | taxi_service | 采用一个声明的服务队列，准备、实际载客与空驶、待班、失败或零乘客但实际运行的班次及相关支持均须只归属一次；无法解释的余量或未知适用性不能按零排除。 | nyc-tlc-utilization-2025;ghg-product-standard |
| upstream_and_assets | taxi_service | 纳入兼容能源供应及车辆、电池、道路、场站和充电设施全寿命负荷，按实际服务及寿命分摊。添加单列运行、制造、维修或处理前先记录供应方覆盖范围，避免同一生命周期阶段重复计入。 | eea-electric-vehicles;ghg-product-standard |
| conditional_technology | taxi_service | 仅对实际动力及控制配置形成清单，同时保留对其他实际能源载体、氢气供应、混合动力子系统、试剂、制冷剂及材料的强制识别和展开要求。电网电驱动不能证明上游或非尾气排放为零。 | eea-electric-vehicles;ipcc-mobile-combustion |
| fate_interfaces | taxi_service | 分别核对收集的液体和固体、回收产品及直接物质和介质排放；收集废水不属于空气排放，蒸发水不属于待处理废物，交付废物不等于处理已经完成。 | ghg-product-standard |
| duty_and_personal_ownership | taxi_service | 要求完整车辆作业台账，区分真实客户区间、派单接客、巡游空驶、候客、失败包用及实际私人驾驶员出行。即使无乘客，具有因果归属的营运作业仍须保留。跨用途及共用移动须有证据且只归属一次；平台费或驾驶员工资不是物理负荷。 | nyc-tlc-utilization-2025;ghg-product-standard |
| fuel_blend_ownership | gasoline_supply; diesel_supply | 声明实际供油采用一股经核实兼容的完整混合燃料供应，还是物理组分供应。整股燃料的组分及碳源台账不构成额外组分投入。若采用组分交换，须替代对应整股数量及已覆盖上游负荷，并核对质量、原生单位及供应方边界闭合。不得同时加入全部混合燃料及其内含生物或化石组分供应；两种表达均不得遗漏真实组分及其上游负荷。 | ipcc-mobile-combustion;ghg-product-standard |
| taxi_function_gate | taxi_service | 核实真实城市郊区内或之间机动出租，或真实非定班机场接驳，纳入实际关联预约。一般目的地距离计价非绝对条件，接客预约不等于公开班期；真实较大型接驳共乘车型不排除合格功能。不同带司机可用性整段租赁不强制转为完成人次运输区段。 | cpc3-structure |
| native_provider_coverage | purchased_taxi_leg | 按真实车辆活动期间供应方生命周期阶段单元建责任台账，每单元唯一负责者：自营物理流或兼容供应方完成结果加仅未覆盖负荷。原生每u结果q_u乘真实兼容需求A_u及有据队列全使用者份额再除一次N；须证明真实原生换算供应完整，不能替换为货运车辆预约结果。 |  |
| asset_supply_native_gate | all inventory rows | 每完整资产或独立更换件保留真实原生制造数量及准确初始组件供应覆盖。同一资产供应按兼容归属活动/有据正数全使用者有效寿命活动再/N；分母含其他出租平台私人使用者，不能用融资期限。完整总成与内含初始零件不能同时供应，更换电池罐轮胎维护实际退役及缺交付另有负责人；厂商质保不等于实际有效寿命。 |  |
| all_fuel_blends_and_supply_gates | gasoline_supply;diesel_supply;cng_supply;lpg_supply | 每真实燃料采用匹配完整混合配方加组分碳源台账，或替代组分供应并闭合原生质量库存供应覆盖。压缩天然气汽油或液化石油气汽油双燃料为两种实际供应，除非真实混合不得视为一混合罐。不得漏启动怠速燃料、双加内含组分、提取等于燃烧或将燃料产品当基本甲烷丙烷排放。补齐工厂点至使用交付调节储存及去向。 | bajaj-re-config |
| service_safety_and_all_users | taxi_service | 证实实际车型车体驱动及交付无障碍安全质量，含相关真实头盔儿童约束轮椅升降约束控制或远程支持。不能普遍假设存在或一国一家运营限制。运营方司机乘客所有权改变分配覆盖，不改变真实必要服务接口；须证明不适用或补齐每实际对象原生量。 | uber-motorbike;uber-auto |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| taxi_service | 机动出租旅客运输区段及归属全寿命 | required | 真实交付合格机动出租功能，保留因果零产出活动 | 最终客运服务及完整支持范围 | completed_taxi_leg |

所有真实物理和分包活动共享最终合格机动出租人次运输区段参考。条件卡仅适用真实匹配对象及互斥未覆盖单元，其他每实际对象须强制原子扩展。

### 过程：机动出租旅客运输区段及归属全寿命 (`taxi_service`)

#### 输入

##### 产品流

###### 汽油 (`gasoline_supply`)

仅适用于有证据牌号及混合组成的实际汽油供应。通过库存闭合记录消耗质量；原生体积须具备兼容实测密度和状态。识别真实混合组分及碳源，生物碳不得默认为化石碳。采用兼容的整股混合燃料供应及其组分台账，或以组分供应替代对应整股供应；不得把完整混合燃料与其所含组分供应同时加入。 仅在实际身份配方供应边界相符时使用。将实际工厂点或其他供应点桥接接收使用点，独立负责缺交付调节储存损失，本卡不默含这些阶段或其他配方。

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

仅适用于实际柴油或另经核实兼容的柴油供应；其他燃料须有各自兼容记录。对于混合燃料，在台账中识别组分及来源，并选择兼容整股供应或替代组分供应，核对质量和边界闭合，不得同时计入两者。按体积采集时，转为质量前须有实际兼容的密度、状态和来源。 仅在实际身份配方供应边界相符时使用。将实际工厂点或其他供应点桥接接收使用点，独立负责缺交付调节储存损失，本卡不默含这些阶段或其他配方。

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

仅在实际电网充电时纳入。计量声明的交流电交付端口；该端口以内的变压、充电损失须保留。电池放电属于内部转移，不再列为另一次购电。 适用任意合格车辆真实兼容外部交付交流电，不限乘用车。记录电压交付点，另补未含上游交付调节损失阶段。外供直流或换电供应为不同真实身份，内部整流电池放电再生为内部转移，不能作为第二次外购。

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

仅适用于声明供水端口实际交付的液态自来水。原始体积须保留，直至具有兼容密度或独立核实的体积关系；本 PCR 不设通用密度。 仅在实际身份配方供应边界相符时使用。将实际工厂点或其他供应点桥接接收使用点，独立负责缺交付调节储存损失，本卡不默含这些阶段或其他配方。

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

仅在实物为兼容合成表面活性剂洗涤产品时使用；肥皂、消毒剂、溶剂及其他配方分别建行，不能合并为洗涤剂。 仅适用于文件证明与选定身份及实际制剂交付端口兼容的洗涤剂产品。其他消毒剂、溶剂或清洁剂必须分别形成交换，不能仅因名称相近归入此流。 仅在实际身份配方供应边界相符时使用。将实际工厂点或其他供应点桥接接收使用点，独立负责缺交付调节储存损失，本卡不默含这些阶段或其他配方。

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

此通用化学产品身份只在实际供应证明为相符的单一 R134a 制冷剂时使用；其他异构体、混合制冷剂及供应配方须另行识别。它不指定车辆、泄漏量、补充量或供应方生命周期覆盖。 仅在实际设备使用 R134a 且发生补充时纳入。初始充注由车辆生命周期或单列供应之一承担。补充量不自动等于泄漏量；回收量和剩余充注量须闭合。 仅在实际身份配方供应边界相符时使用。将实际工厂点或其他供应点桥接接收使用点，独立负责缺交付调节储存损失，本卡不默含这些阶段或其他配方。

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

###### 车用燃料压缩天然气供应 (`cng_supply`)

仅适用有实测混合物组分压力温度来源质量及供应边界的真实车用压缩天然气，不得默认纯甲烷或基本排放。压缩天然气与点火启动汽油分开，含真实切换及残余罐存。选择兼容完整燃料混合物供应加组分台账或替代组分，两者不并计。独立保留压缩交付储存损失及每真实泄漏排空物种介质，不设标准密度热值因子。

- 选定流: 车用燃料压缩天然气供应
- 流属性/单位: 质量 / kg
- 数量规则: attributed_net_actual_CNG_withdrawal_kg / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `bajaj-re-config`, `ipcc-mobile-combustion`

###### 车用燃料液化石油气供应 (`lpg_supply`)

仅适用有据丙烷丁烷等真实配方相态牌号边界的车用液化石油气，不得改名纯丙烷或气态甲烷。双燃料运营保留独立汽油启动及其他实际燃料、罐体质量库存、提取与燃烧排空溢漏差异及供应压缩液化交付覆盖。完整混合物或替代物理组分须质量供应闭合，不得另加其内含组分供应。

- 选定流: 车用燃料液化石油气供应
- 流属性/单位: 质量 / kg
- 数量规则: attributed_net_actual_LPG_withdrawal_kg / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_energy`
- 来源: `bajaj-re-config`, `ipcc-mobile-combustion`

###### 交付的汽油摩托车 (`gasoline_motorcycle_supply`)

仅适用记录制造供应边界、配置驱动的真实匹配完整总成。本条件卡不声称某运营案例使用该燃料或全部出租均用此总成。记录真实原生交付数量、初始零件电池罐体控制覆盖，另补缺交付使用维护更换退役。同一资产按归属兼容活动量/有据正数全部使用者有效寿命活动量分配供应，这一份额不会将制造变成全寿命服务。其他驱动底盘总成须独立具体行。

- 选定流: 交付的汽油摩托车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: attributed_gasoline_motorcycle_supply_manufacture_equivalents / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `uber-motorbike`, `ipcc-mobile-combustion`

###### 交付的压缩天然气客运三轮车 (`cng_three_wheeler_supply`)

仅适用记录制造供应边界、配置驱动的真实匹配完整总成。本条件卡不声称某运营案例使用该燃料或全部出租均用此总成。记录真实原生交付数量、初始零件电池罐体控制覆盖，另补缺交付使用维护更换退役。同一资产按归属兼容活动量/有据正数全部使用者有效寿命活动量分配供应，这一份额不会将制造变成全寿命服务。其他驱动底盘总成须独立具体行。

- 选定流: 交付的压缩天然气客运三轮车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: attributed_cng_three_wheeler_supply_manufacture_equivalents / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `bajaj-re-config`, `uber-auto`

###### 交付的柴油客运厢式车 (`diesel_passenger_van_supply`)

仅适用记录制造供应边界、配置驱动的真实匹配完整总成。本条件卡不声称某运营案例使用该燃料或全部出租均用此总成。记录真实原生交付数量、初始零件电池罐体控制覆盖，另补缺交付使用维护更换退役。同一资产按归属兼容活动量/有据正数全部使用者有效寿命活动量分配供应，这一份额不会将制造变成全寿命服务。其他驱动底盘总成须独立具体行。

- 选定流: 交付的柴油客运厢式车
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: attributed_diesel_passenger_van_supply_manufacture_equivalents / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `supershuttle-service`, `ipcc-mobile-combustion`

###### 交付的摩托车防护头盔总成 (`motorcycle_helmet_supply`)

仅适用制造供应边界真实兼容完整摩托车防护头盔，不默认每运营方供应或计为乘客。记录运营方司机乘客或供应方提供、真实服务使用、清洁更换、正数全使用者有效活动与处理。即使所有权不同仍保留必要服务使用责任，披露边界且不重复供应方用户供应。每真实其他安全无障碍总成或清洁配方须独立具体行。

- 选定流: 交付的摩托车防护头盔总成
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: attributed_actual_helmet_manufacture_equivalents / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_assets`
- 来源: `uber-motorbike`

###### 已完成的机动出租旅客运输区段 (`purchased_taxi_leg`)

仅适用供应边界一个真实已完成且统一负责的机动出租人次运输区段，须与本准确功能地域质量起讫交付范围相符。采用实际人员区段链接及供应方原生数量活动；每区段供应结果乘真实匹配需求，不再除载客率。已含制造使用支持处理单元只替换准确前景单元，自营物理运营不向自身购买。车辆公里小时人公里整段委托等原生结果须自身验证身份及实测兼容活动换算，不能将本数量改名。

- 选定流: 已完成的机动出租旅客运输区段
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: actual_matched_completed_provider_person_legs_attributed_to_cohort / N
- 数值来源模式: `calculated_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `process_output`
- 证据类型: `calculated_from_collection`
- 采集协议: `cp_provider`
- 来源: `cpc3-structure`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的机动出租旅客运输区段 (`completed_taxi_leg`)

一名真实乘客完成声明合格机动出租登乘至下车运输区段，具有真实起讫程度时长服务质量与运营责任。一次预约乘客群司机票价调度车辆座位或整段可用性租赁委托均不是一个已完成人次。核对共享错位接送与真实换车，持续乘客不中途站重复计数。最终参考产出归一为一，原始N来自cp_service。

- 选定流: 已完成的机动出租旅客运输区段
- 流属性/单位: 物品数量 / Item(s)
- 数量规则: 1 Item(s)
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每声明的参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_service`
- 来源: `cpc3-structure`, `nyc-tlc-yellow-2025`

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
| causal_partition | taxi_service | 先按车辆、线路及服务任务细分并优先直接计量。共用负荷 Q 采用实际归属驱动 d_c 和覆盖全体使用者的分母 sum(d_j)，记录物理关系、排除项及敏感性。运力、收入比例及均分不能自动成为分配系数。 | ghg-product-standard |
| passengers_and_other_users | taxi_service | 声明服务附带的乘客行李属于该功能。单独销售的货运或其他实际输出须按兼容基准进行可测的因果分配；乘客人数、行李千克、广告和票价不能直接相加为等价产出。 | ghg-product-standard |
| empty_and_lifetime | taxi_service | 必要调位、空载服务和待班支持须按已证明的线路或期间因果关系分配到完整相关服务队列，不得采用假设载客率。资产分摊覆盖完整有效服务及实际更换；当年采购额、租金或折旧额不是制造资产的数量。 | nyc-tlc-utilization-2025;ghg-product-standard |
| no_automatic_credit | taxi_service | 回收材料、再生制动能量及寿命末期再生材料须有实际去向、质量和覆盖范围。已减少净购电的内部再生能量不得再次获得避免购电信用；不规定默认替代比例或负废物信用。 | ghg-product-standard |
| on_demand_duty_pool | taxi_service | 优先细分真实专属及拼车服务区间。剩余空驶候客及失败作业须通过有证据的完整运营方车辆期间服务池及兼容乘客暴露分配；保留全部已完成客户、其他使用者及零产出作业。不得假设出租车总是一人、满座或采用工资规则中的利用率。私人通勤出行纳入或排除前须明确因果性及责任。 | nyc-tlc-utilization-2025;ghg-product-standard |
| shared_person_segment_exposure | taxi_service | 先细分真实实测车辆线路活动区间量。共享载客区间s记录全部真实服务乘客与其他独立履约使用者、真实距离时间原生驱动及每人起讫成员。兼容纯旅客区间可按有据人员暴露d_is/正数sum_j d_js分配Q_s，只有实测等效暴露支持时方可均分。汇总每完成人次区段暴露，再将有据残余空驶等待失败返程池归属完整因果队列；不得丢弃部分失败其他使用活动或重复归一已分配区间。容量预约群票价份额承诺群体人数都不是实际载客或物理分配。 |  |
| airport_and_connected_reservations | taxi_service | 按真实负责者纳入因果必需预约调度基础设施、接客排队等待绕行错位乘客办理机场通行站点候客支持空载返程。共同机场目的地或一个预约不是一个完成乘客，同车可服务多个起讫区段。平台运营机场供应覆盖及全使用者分母互斥，含付费未付取消未到期间。不得将独立经纪产出再购为真实已完成运输区段。 | supershuttle-service |

## 8. 前景数据采集、计算与质量规则

完成覆盖原生缩放分配记账公式是本PCR明确方法设计，外部来源仅支持已述真实定义物理背景，不声称UN、TLC、Uber、SuperShuttle、Bajaj、IPCC、EEA或GHGProtocol规定这些全寿命出租特定公式。缺通用范围不免除强制真实量。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | taxi_service | completed_taxi_leg | service_record | cohort_id; vehicle_id; accountable_operator; hire_model; actual_purpose; booking_id; actual_person_leg_id; boarding_alighting_OD; actual_duration; segment_distance; segment_passengers; party_id; actual_completion; no_show; cancellation; meter_record; uncertainty; actual_64115_function; urban_suburban_extent; scheduling_model; airport_shuttle_status; pickup_appointment_not_public_schedule; vehicle_chassis_drive; safety_accessibility_quality; person_segment_membership; completion_rule; actual_other_user_roles | 用派单、GPS 及计价记录核对真实乘客同行组上下车；独立于预订和付款证明已完成实际乘客数。保留拼车起讫点及区间暴露、免费乘客、失败爽约记录和缺失情况。不得默认一个同行组或预订就是一位实际乘客，也不得把驾驶员计入。 计算与汇总：N 个唯一完成乘段；保留起讫点距离分布；归一化后不得再次除以 N 独立于品牌牌照计价核实实际资格。逐人匹配真实登乘下车起讫、运输区段、班期模式机场属性及质量，共享中途站持续乘客仅记一次，真实不同车辆区段另记。闭合真实运营平台全使用者活动覆盖。 | Item(s); km; person-km | per operation; declared representative period | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_energy | taxi_service | gasoline_supply; diesel_supply; charging_ac; cng_supply; lpg_supply | meter_stock_record | vehicle_id; fuel_identity; fossil_biogenic_fraction; actually_burned; spilled; evaporated; recovered; transferred; native_unit; opening_stock; deliveries; closing_stock; returns; charge_gate; charger_losses; actual_loaded_km; deadhead_km; idle_hours; zero_passenger_duty; on_duty_waiting; empty_cruising; dispatch_pickup; failed_jobs; platform_sessions; personal_driver_travel; complete_odometer_ledger; each_tank_fuel_formulation; pressure_temperature; bi_fuel_switches; pilot_startup_fuel; fuel_carbon_origin; delivery_conditioning_compression_gate; external_DC; swap_boundary; internal_recovery | 分别核对燃料供应取用与实际燃烧、泄漏、蒸发、回收和转移；直接燃烧活动量不能自动等于全部取用量。对同一实际任务采用一致的燃料存量、计量及交流电输入记录；区分采购、消耗、其他使用者和转移；核对充电设施与车辆电池边界。 归属燃料和电量前，划分完整 GPS 里程表作业，包含空载服务及实际多平台重叠。仅登录时长或计价付费里程不代表完整车辆作业。 计算与汇总：归属燃料净取用及实际交流交付电量 / N；分别记录其燃烧去向活动，核对库存，只在证据兼容时换算 对压缩天然气液化石油气双燃料系统逐种燃料罐体启动切换状态独立测量平衡，不假设混合或通用压力密度热值换算。识别交流交付、外供直流换电及内部转换回收，逐种扩展其他真实原生供应。 | kg; MJ; native volume; km; h | each vehicle/charge/fill; full cohort | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_depot | taxi_service | support_ac; wash_water; cleaning_detergent | site_record | site_id; meter_id; covered_users; charge_meter_overlap; native_quantity; material_SKU; actual_formulation; delivered_gate; physical_driver_all_users | 采集场站表计、清洗领用记录及供应方范围；先分开充电、维修、其他车队和场站使用者，再分配实测共用余量。 计算与汇总：实际归属数量之和 / N；保留明确的共用归属 | MJ; kg; native material units | each issue/meter period; same cohort | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_maintenance | taxi_service | refrigerant_r134a_supply; r134a_air | maintenance_record | vehicle_id; actual_refrigerant; opening_charge; additions; removals; recovered_charge; closing_charge; urea_solution_mass; concentration; reagent_carbon_origin; replaced_component; actual_fate | 使用工单、物质和制剂证明及平衡记录；分别识别添加、大气损失、回收产品和废物。未知泄漏或化学组成不等于零。仅在实际系统适用时采集尿素及 SCR 字段；每项真实试剂须有独立具体交换和覆盖，不使用则明确记录证据。 计算与汇总：经独立平衡核对的实际归属供应或排放数量 / N | kg; actual component units | each maintenance event; cohort and lifetime interfaces | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_assets | taxi_service | gasoline_car_supply; bev_car_supply; gasoline_motorcycle_supply; cng_three_wheeler_supply; diesel_passenger_van_supply; motorcycle_helmet_supply | asset_lifetime_record | asset_ID; vehicle_configuration; initial_battery_coverage; actual_replacements; useful_life_duty; total_life_driver; attributed_driver; all_users; manufacturing_maintenance_retirement_scope; road_and_depot_service_inventory; uncertainty; chassis_body_drive; exact_initial_component_coverage; safety_assembly_owner; all_taxi_platform_private_users; actual_native_asset_delivery_quantity; native_supplier_gate; independent_replacement_and_retirement | 分别记录交付车辆电池包的制造供应端口、初始电池范围及实际数量，与其全寿命服务分母分开。制造、使用、维修及退役每一阶段只指定一个承担方。未覆盖的运行、部件供应、整车或部件处置处理须独立加入；完整供应方只替代确切覆盖的阶段。说明寿命及全使用者服务，不得以货币替代件数。 计算与汇总：对每项资产 a：交付的制造供货数量乘归属服务量 / 兼容有效服务总量 / N；仅分配已核实供应方范围，不包含未覆盖的使用或退役。寿命分母须明确且为正 实际营运、家庭私用及其他使用者均进入兼容物理寿命分母；贷款期限或残值金额不能代替物理有效寿命。 每真实摩托三轮厢式及其他底盘、防护头盔、电池罐体控制与实际安全无障碍总成须准确独立原生供应寿命覆盖记录，具体卡不能替代其他实际配置。共用司机乘客自有安全品按相同兼容全使用者服务寿命分配记录，无通用寿命或质保换算。 | Item(s); km; h; actual infrastructure service units | asset life; update on replacement or retirement | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_fates | taxi_service | wash_wastewater; spent_engine_oil; spent_car_tyres | fate_record | stream_ID; material_state; native_quantity; composition; receiver_gate; waste_status; reuse_retread; transport; treatment_provider; treatment_coverage; direct_outlet; stock_change | 对每股实际物流使用独立称重、转移单及接收方证据。核对投入、库存、蒸发、磨耗及实际收集数量，不得构造综合余量废物。 计算与汇总：归属的独立去向数量 / N；处理只计一次 | kg; actual receiver-native units | each transfer/discharge; cohort | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_emissions | taxi_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air | species_medium_record | source_ID; vehicle; fuel; duty; species; fossil_biogenic_origin; particle_size; receiving_medium; factor_native_basis; unit; measured_or_modelled; factor_source; scope; overlaps; uncertainty | 实测，或采用另有依据、与技术、燃料及工况相符的非默认模型。核对系数基准与实际活动、来源及介质。保留所有适用非尾气、燃烧、试剂和泄漏记录。 计算与汇总：不重叠的实际各来源物种数量之和 / N；不得以 CO2 当量替代物种质量 | kg species; particle-size-specific kg | actual duty or justified representative measurement | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |
| cp_provider | taxi_service | purchased_taxi_leg | provider_native_coverage_record | provider_ID; actual_recipient_leg_link; function_quality_OD; native_unit; activity_A_u; result_per_unit_q_u; measured_conversion; supplier_gate; lifecycle_cells; remaining_owner; cohort_all_user_share; already_normalized; uncertainty | 读取真实已完成供应结果原生单位、人员区段链接、真实匹配原生活动及每已含阶段单元。q_u乘A_u及有据队列全使用者份额再/N一次，本数量卡仅适用匹配已完成原生人次区段。其他原生单位建独立验证具体交换并提供真实换算。供应单元替换匹配物理单元，仅剩未覆盖责任，自营物理区段不得向自身购买。 | Item(s); actual verified provider-native units | per operation; declared representative period | 声明的完整队列及必要寿命接口 | 同一线路、车辆及相关全体使用者 | 每声明的参考流 | 原始记录、校准、抽样或模型、边界覆盖及闭合证据 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_actual | all inventory rows | 对每项真实交换，归属数量除以相同 N；已经归一化的供应方结果不得重复除以 N。 | actual attributed native quantity;N;cp_service | quantity per reference flow | ghg-product-standard |
| shared_allocation | all inventory rows | 归属共用数量 = 实测共用总量乘实际队列驱动 / 全体兼容使用者驱动总量。采用正分母，逐项给出物理依据及不确定性。 | measured shared total;cohort driver;complete all-user denominator | attributed native quantity | ghg-product-standard |
| asset_equivalence | gasoline_car_supply;bev_car_supply;gasoline_motorcycle_supply;cng_three_wheeler_supply;diesel_passenger_van_supply;motorcycle_helmet_supply | 采用 cp_assets 记录的交付制造供货数量及实际全寿命服务比例；寿命只是分配基准。独立计入未覆盖的使用、维修及退役；初始与更换、车辆与电池包及完整供应方范围不得重复。 | cp_assets;actual complete-life quantities;positive compatible duty denominator | attributed delivered supply equivalents | ghg-product-standard |
| fuel_fate_partition | gasoline_supply;diesel_supply;cng_supply;lpg_supply | 净取用 = 期初 + 接收 - 期末 - 退回；按兼容库存边界独立核对有记录的燃烧、泄漏、蒸发、回收及其他去向数量。任何未解释差额均阻断闭合。直接燃烧模型采用真实燃烧质量，不能采用全部取用或发票质量。 | cp_energy;cp_emissions;cp_fates | 归属燃料供应及独立兼容燃烧去向活动量 | ghg-product-standard |
| provider_native_scaling | purchased_taxi_leg | 真实供应每验证原生u结果q_u，贡献=q_u×实际匹配A_u×有据队列全使用者份额/N，仅一次。先验证维度已含单元，不得每人结果乘车辆趟次或再除载客率，仅替换准确已含前景单元。 | cp_provider;cp_service;actual native demand and covered cells | 每参考流互斥供应贡献 |  |
| pooled_segment_closure | taxi_service | 汇总按观测兼容人员暴露分配的互斥真实区间负荷及因果归属空驶等待失败返程支持池。闭合全部真实人员活动其他使用者与完整车辆运营平台期间总量，兼容归属队列量仅除N一次；不得统一载客率、一个预约等于一人或忽略零产出区间。 | cp_service;cp_energy;cp_depot;actual segment and duty ledger | 闭合真实人次运输区段队列清单 |  |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| completion_and_comparability | taxi_service | 缺少服务完成证据、正 N、实际距离分布或所需限定信息即阻断完成；相同乘次数不能证明服务可比。 | cp_service; nyc-tlc-yellow-2025 |
| other_actual_energy | taxi_service | 识别具体示例未列出的所有实际燃料、氢气供应、蒸汽、热力、混合动力路径或辅助能源载体。记录确切交付身份、原生单位、上游范围及实际数量；未知适用性阻断完成。 未知身份、数量或适用性均阻断完成。 | cp_energy |
| other_actual_materials | taxi_service | 逐项识别实际润滑剂、化学品、消毒剂、清洗剂、试剂制剂、备件、轮胎或电池化学体系和配置。每项独立供应或维修物品须展开为经核实的原子交换，不得用通用材料集合替代。 未知身份、数量或适用性均阻断完成。 | cp_maintenance |
| roads_depots_and_charge_assets | taxi_service | 获取实际归属的道路、站点、场站、充电设施及其他支持设施生命周期清单，具备兼容的全寿命全使用者分母。区分已被供应方覆盖与确实缺少的负荷；覆盖缺失阻断完整生命周期使用。 未知身份、数量或适用性均阻断完成。 | cp_assets |
| providers_and_subcontracting | taxi_service | 识别每项实际外包运营、维修或处理结果及其原生功能单位、边界和物理驱动。完整供应方结果替代其覆盖的前景交换，不得再次添加，也不得随意借用货运或车辆制造 UUID。 未知身份、数量或适用性均阻断完成。 | cp_depot |
| other_fate_streams | taxi_service | 逐项展开实际污泥、滤芯、包装、电池、退役整车或拆解部件、废水出口、再用产品及处置处理结果。同一材料的整车及留存部件视图互斥。确定物质、混合状态、接收端口及原生数量；不得把蒸发或无法解释的损失编为收集废物。 未知身份、数量或适用性均阻断完成。 | cp_fates |
| other_species_media | taxi_service | 识别实际 CO、具有明确化学报告基准的氮氧化物、氨及 SCR 逃逸、其他每种制冷剂、生物源燃烧产物、非尾气粒径等级、道路土壤沉积及径流物质和出口。每项独立计量的物质、粒径、来源及介质须展开；不得使用通用 NOx、VOC 或粉尘余量 UUID，也不得缺失按零。 未知身份、数量或适用性均阻断完成。 | cp_emissions |
| duty_purpose_and_platforms | taxi_service | 识别全部真实营运私人及驾驶员出行、拼车同行组暴露和多平台作业重叠，以及实际必要的预订派单数字支持。逐项补齐未表达的物理供应、能源或供应方结果；费用不能证明其原生输出或完整生命周期覆盖。 未知身份、数量或适用性均阻断完成。 | cp_service; cp_energy; cp_depot |
| full_taxivehicle_scope | taxi_service | 必须识别每实际合格机动车配置，不限五张条件总成卡。独立表示每实际汽油柴油液化石油气压缩天然气电动混动其他驱动两三四及较大型底盘车体驱动、初始更换零件能源控制维护终寿安全无障碍接口及有据原生量。实际适用性未知阻断完成而非产品范围。 | cp_assets;cp_energy;cp_maintenance;cp_fates;cp_emissions |
| atomic_actual_expansion | taxi_service | 每真实未表示材料资产供应结果投入产出废物物种颗粒介质处理必须建唯一row_id、一个既有过程、真实方向类型、确定单一身份状态配方、UUID或明确未解析、原生属性单位数量基准、原始来源、有效同父采集协议、物理计算供应边界已含单元、真实接收已知子介质及不确定性。须解决发生或有据不适用，未知为未完成绝非零，类别集合与通用废物排放不是交换。 | all actual records; valid process/protocol foreign keys |
| airport_pooling_and_role_evidence | taxi_service | 必须记录真实定班非定班功能及不同带司机租赁边界、真实机场情景起讫、错位乘客与区间活动、调度候客等待取消接客空载返程。真实司机运营支持角色不是客户产出，不得从乘客群预约容量推人数。按真实负责者全使用者驱动补齐所有平台机场站点候客原生支持资产。 | cp_service;cp_provider;cp_energy;cp_depot;cp_assets |
| bi_fuel_formulation_and_fates | taxi_service | 必须识别真实压缩天然气液化石油气配方、每启动引燃其他燃料切换、相态压力温度原生供应数量及独立燃烧泄漏排空溢漏回收库存。区分燃料产品混合物与独立量化基本物种及真实接收子介质。具体卡外任一真实润滑剂试剂制冷剂电池轮胎头盔清洁供应及相应每废物物种处理必须独立扩展；不得默认全罐燃烧或甲烷当量投入。 | cp_energy;cp_maintenance;cp_fates;cp_emissions |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_basis | taxi_service | 核对唯一完成乘客乘段、实际起讫点与距离分层、N > 0 及中英文同一参考链接。不得以客票、座位、联程行程或计划发车数替代。 | nyc-tlc-yellow-2025 |
| period_closure | taxi_service | 核对实际服务、投入产出库存、队列结转、失败服务及实际零乘客运行。N = 0 时不能形成有限每乘客结果；保留其负荷及与相关服务池的明确关系，不得删除。 | ghg-product-standard |
| identity_and_expansion | taxi_service | 每个清单行须对应一项实际材料、服务结果、废物流或物质介质；最终使用前核实确切 UUID、属性及单位兼容性。所有补充要求必须由实际独立行或不适用证据关闭；未知不等于零。 | ghg-product-standard |
| closure_and_overlap | taxi_service | 核对充电、车辆及场站能源归属，初始和更换电池，直接与上游排放，重叠颗粒物粒径等级，回收制冷剂，废物处理及资产寿命分配。不允许默认密度、载客率、寿命、排放系数或再生信用。 | ipcc-mobile-combustion;eea-electric-vehicles;ghg-product-standard |
| taxi_fullscope_function | taxi_service | 按观测服务记录核实真实64115功能地域非定班机场属性。一般计费说明非绝对；品牌预约时刻国家牌照不能单独决定范围。核实实际底盘驱动质量安全全部人员活动资产供应归属，缺真实分支或必需行则包不完整。 | cpc3-structure |
| provider_native_and_cp_ownership | taxi_service | 每CP process_id为一个既有清单过程，每卡引用同父有效CP。证明供应原生单位活动缩放、数量与人公里车辆小时区别及互斥阶段覆盖。检查制造原生数量同资产正数全使用者有效活动，不得完整组分混合初始更换供应去向责任重复。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | secondary_dataset; background_dataset，仅在全部必需真实前景身份数量完成原生供应寿命去向责任补齐复核后 |
| allowed_use | 真实合格城市郊区内或之间机动出租人次运输区段，或真实非定班机场接驳，须统一真实起讫程度时间共乘质量全寿命 |
| excluded_use | 带司机可用性整段租赁、定班机场接驳、人畜水上空中出租医疗产品、独立预约付款、通用人公里载客寿命因子、不完整真实数据冒充全寿命 |
| required_metadata | 真实合格功能地域机场班期、运营车辆平台期间、人员起讫区间完成质量、原生供应覆盖单元、全使用者有效寿命资产驱动及原始来源不确定性 |
| required_quality_disclosure | 全部未核实身份、缺失实际数量、抽样模型不确定性、未解决的基础设施资产废物覆盖及不可比原因 |
| update_trigger | 线路、动力、车辆、电池或供应方实质变化；活动、寿命或来源证据更新；分类或服务完成定义变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| cpc3-structure | official_guidance | UNSD CPC3.0 Explanatory Notes,30June2025,actual PDFp359,64115 and neighbouring exclusions. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 完整真实机动出租城市郊区及非定班机场接驳范围、关联预约排除，一般目的地距离计费非绝对条件。 |
| nyc-tlc-yellow-2025 | official_guidance | NYC TLC Yellow Taxi Trip Records Data Dictionary,18March2025,p1. https://www.nyc.gov/assets/tlc/downloads/pdf/data_dictionary_trip_records_yellow.pdf | 计价器时间戳、记录人数、距离、起讫点及支付作废字段不同。此区域字段结构不能直接证明真实乘客完成或通用载客率。 |
| nyc-tlc-utilization-2025 | official_guidance | NYC TLC Notice of Promulgation,adopted25June2025,PDFpp2,6–8. https://a856-cityrecord.nyc.gov/Search/GetFile?documentId=42301&requestId=20250625045&requestStatus=Archived&sectionId=4 | 仅用于实际作业中载客、候单及接客出行的定性区别。不采用货币费率、利用率、融资寿命或生命周期因子。 |
| ipcc-mobile-combustion | official_guidance | IPCC2006Guidelines,Vol2Ch3,section3.2,pp3.10–3.16. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 燃料活动、来源及技术特定物种核算的定性要求；不采用默认因子，国家温室气体清单也不等同完整服务生命周期。 |
| eea-electric-vehicles | official_guidance | EEA Electric vehicles,Overview. https://www.eea.europa.eu/en/topics/in-depth/electric-vehicles | 车辆电池制造及道路轮胎制动负荷仍存在；不移植平均收益、电池寿命或通用数值强度。 |
| ghg-product-standard | standard | WRI/WBCSD ProductLifeCycleAccountingAndReportingStandard2011,chapters7–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据质量及细分物理分配；完整车辆基础设施生命周期是本 PCR 明确边界选择，不是归于该温室气体标准的资本强制要求。 |
| uber-motorbike | official_guidance | Uber Bike motorbike ride service,official public page accessed22October2026. https://www.uber.com/in/en/ride/uber-moto/ | 真实城市摩托接客目的地及头盔责任的条件案例，不采用普遍运营方供应头盔、载客年龄法律燃料寿命价格LCA因子。 |
| uber-auto | official_guidance | Uber Auto autorickshaw ride service,official public page accessed22October2026. https://www.uber.com/in/en/ride/uber-auto/ | 通过官方网页阅读的真实机动三轮接客目的地车辆确认到达案例，不是全球法律分类实测完成燃料容量默认投入证据。 |
| supershuttle-service | official_guidance | SuperShuttle How it works,official public page accessed22October2026. https://www.supershuttle.com/how-it-works/ | 通过官方网页阅读的真实共享变动停站与直接机场接送及另列按时可用性案例，须另核实实际非定班功能。不假设供应可得性停站乘客数车队燃料环境收益因子。 |
| bajaj-re-config | official_guidance | Bajaj RE actual three-wheeler configurations,official public page accessed22October2026. https://www.bajajauto.com/three-wheelers/re | 厂商列柴油汽油压缩天然气液化石油气及双燃料配置，支持条件性独立罐燃料总成问题。不移用质保容量消耗节省融资期限或自动出租分类。 |
