---
pcr_id: pcr.interurban-scheduled-road-passenger-leg-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 公共城际定期道路客运区段服务

## 1. 范围与适用性

本专属PCR覆盖非相邻城市间、预定线路班期、面向所有用户的真实公共城际定班道路客运。真实公交电车无轨类似机制按真实物理原生接口保留。不能用任意公里阈值车辆大小国境、市区相邻城条件或机构资格替代真实非相邻城服务功能。

声明真实城际服务范围及各乘客上客最终下客站点OD距离分布等级质量期间。真实中间站上下客不要求虚构城市中心端点，但仅本地乘坐不因车辆另跑长线就自动城际。按所售所履行范围明确服务队列适用，本地城际队列独立，不平均抹掉区别。

一个参考是一真实完成公共城际定班乘客区段。票通票预约发班座位无完成证明上车数人距离整个衔接行程为不同对象。技术休息站临时重上不本身增产出，真实独立履行衔接有自身区段；保持同一运输责任的运营换车不自动新产出。明确中断折返改道跨期换承运时真实完成责任。

随行行李动物其他免费项纳入但不增加乘客产出。独立出售货物邮件餐宿其他产品须真实区分有据细分共同物理分配。在岗司机作业随员为支持不是乘客，真实受运换班人员须角色证据不重复。儿童婴儿免费乘客按真实人，不假定成人座位质量等价。

按实际履约责任保留完整长路线准备空载进出场调位等待边境延误司机换班休息及真实所需住宿卫生餐食无障碍空调站场支持，含失败零客作业。不默认每车厕卧每线餐宿，或每人员活动都是购入劳动材料交换。不能删除真实已含必要支持，也不无声加入独立履行产品。完整因果作业全用户闭合后N为真实等价完成正区段数，N=0无有限强度。

不因国家统计燃料核算边界截断整个声明运输区段及支持生命周期。真实每国区段电网燃料供应方交接点、上游供应路轨线车辆场址资产维修更换退役保留真实归属原生覆盖。不规定碳载客司机休息小时餐食酒店夜寿命回生份额数值范围。真实功能复核后区分市区相邻城公众64112、专门64114/64222或城际接驳功能、包车租用出租按需观光综合多模式最终输出，不仅凭乘客目的地标签。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.interurban-scheduled-road-passenger-leg-service |
| classification_refs | 仅CPC3.0 64221；专属完整官方范围精确对应 |
| covered_products | 真实非相邻城市间公共定班公交电车无轨类似道路乘客区段，真实服务范围OD质量作业生命周期 |
| excluded_products | 市区相邻城公众64112；真实专门用途64114/64222或城际接驳；包车租用出租按需观光；综合多模式最终输出 |
| representative_product | 完成的公共城际定期道路客运区段 |
| production_route | 真实公共城际定班区段、完整真实中间长线跨境支持作业及车辆路轨线网场址生命周期 |
| market_state | 真实完成限定城际公共运输区段，不是通票预约运力通用距离产出 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完成的公共城际定期道路客运区段 |
| How much | 1真实乘客完成一个适用公共城际定班道路区段 |
| How well | 真实非相邻城服务范围站点OD距离中间阶段、路线班期等级质量机制已含支持 |
| How long or cycle | 真实上下客区段及归属完整期间生命周期作业 |
| reference_flow_link | completed_public_interurban_leg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完成的公共城际定期道路客运区段 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | actual_noncontiguous_city_service_extent; public_all_user_route_and_timetable; actual_boarding_final_alighting_stopOD; actual_intermediate_segments_passenger_distance_distribution; through_reststop_reboarding_connections_substitution_and_completion; actual_class_quality_period_N; actual_motorbus_tram_trolley_similar_mechanism; actual_driver_change_rest_support_roles; actual_included_free_luggage_animals_items; actual_sanitary_meal_stay_accessibility_support; full_route_crossborder_carrier_provider_responsibility; empty_failed_zerooutput_preparation_duty; actual_supply_country_grid_fuel_gates; traction_AC_DC_recovery_losses_storage_export; sameasset_alluser_life; actual_other_products_native_allocation_and_fates_uncertainty |

必需限定信息须进入真实前景包。N为等价声明队列期间真实完成适用乘客区段且正。完成部分失败折返结果、真实区段其他用户距离库存跨期作业须先闭合再归一化一次。服务司机人员不增乘客产出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_distance | interurban_scheduled_road_service | 真实原生兼容属性 | 真实原生单位 | 不互换乘客段票上车联程座位班次公里人公里。真实乘客站点距离分布强制，每人公里结果须自身有据基准不能改Count名。 |
| native_conversion | interurban_scheduled_road_service | 真实原生兼容属性 | 真实原生单位 | 保留真实原生属性状态，兼容kWh仅核实3.6MJ/kWh。体质量须真实密度状态，总成Count与kg须实测范围关系。交流直流不同身份交接点，转换不使UUID可替代。 |
| species_fates | interurban_scheduled_road_service | 真实原生兼容属性 | 真实原生单位 | 保持化合物与元素C/N/Skg、化石生物、胎钢接触来源、颗粒粒径真实空气水土沉积收集去向独立。制冷补加非泄漏、水蒸发非废物、捕集磨耗非直接空气。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实64221公众非相邻城路线队列、站点OD阶段及承运整路线供应电网场址供应方资产责任 |
| starting_condition_role | 真实前景交接点事实，不代表既有资产电力零负荷 |
| product_classification_scope | 仅完整64221公共定班城际道路功能，真实公交电车无轨类似机制及非相邻城范围，不固定公里阈值国家截断 |
| recursive_input_rule | 精确适用分包服务仅替代已含原生阶段格一次，不增自递归乘客输出 |
| upstream_dataset_requirement | 供应资产处理须真实类型原生单位质量技术交接点地域期间全用户寿命供应方覆盖 |
| disclosure | 真实全用户作业完成、交流直流回生库存去向供应方资产路线可比性未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| interurban_scope | interurban_scheduled_road_service | 核实真实非相邻城公共定班服务及乘客服务范围站点OD，不任意距离阈值或市区专门用户条件。完整路线跨境作业原生供应方生命周期归属不按国家清单边界截断。专门机场接驳包车待命产品须自身真实限定。 | unsd-cpc3-64221; ghg-product-2011 |
| whole_service | interurban_scheduled_road_service | 纳入因果归属本服务的真实定期有客零客空载进出场调位停站启动怠速失败折返救援准备作业、乘客无障碍空调控制及车库站点终端支持，其他用户分包方仅一次归属。 | ghg-product-2011 |
| tram_physical | interurban_scheduled_road_service | 真实电车保留轮轨转向架轴牵引制动钢轨道岔嵌入独立轨道回流、滑板受电弓接触线变电保护接口。真实钢磨耗打磨润滑撒砂制动受电维护及空气沉积水废物去向须独立证据，不推定全部材料必用或用道路轮胎因子代电车钢磨耗。 | ghg-product-2011 |
| trolley_physical | interurban_scheduled_road_service | 真实无轨电车保留橡胶轮道路、双杆接触线受电回流供应及真实离线电池发电辅助状态。电池直流燃料变流须独立真实身份及完整架线车辆场址生命周期，不把无轨电车默认普通电池车。 | ghg-product-2011 |
| energy_recovery | interurban_scheduled_road_service | 画真实上游交流供应方至整流接触网充电储能车辆外送交接图，损失仅一次。制动回生至车载网络路旁储能其他车在全网络边界属内部，真实外部转移独立计量。制动电阻热耗散或网络不能接纳不自动作外送避免电力。总净表全用户归属明确，不同时净节省及重复信用。 | ghg-product-2011 |
| capital_provider | interurban_scheduled_road_service | 完整覆盖真实公交电车无轨电车电池道路轨道架线变电充电车库站点终端制造安装更新运行维修退役责任。交付资产流仅核实制造交接点，有效寿命仅分配分母。总成与同一已含初始组件及供应方已含覆盖互斥。 | ghg-product-2011 |
| long_route_support | interurban_scheduled_road_service | 按承运供应方责任计入真实所需准备司机换班休息边境等待终端接入安全空调无障碍及真实提供卫生客舱餐宿支持。真实物理量覆盖而非通用设施小时或虚构人力流决定交换。独立供应支持仅精确替代已含配料能源资产废物阶段一次。 | ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| interurban_scheduled_road_service | 公共城际定期道路客运区段履行及生命周期 | required | 真实完整适用64221功能 | foreground | completed_public_interurban_leg |

### 过程：公共城际定期道路客运区段履行及生命周期 (`interurban_scheduled_road_service`)

#### 输入

##### 产品流

###### 柴油 (`diesel`)

仅真实兼容柴油发动机辅助作业，明确牌号混合物交接点。整股交付混合物加组成碳源台账与替代对应覆盖的实体组分供应互斥。供应净取用不等于燃烧，库存溢洒回收再用转移独立保留。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：attributed_diesel_net_withdrawal_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fuel`
- 来源：ipcc-road-rail-2006

###### 交流电 (`external_ac`)

真实车库充电牵引变电场址交接点总交流供应，点内自有整流网络充电储存损失保留。若表示自有上游供应，同一内部直流充电不再购入上游；供应方直流已含上游电力时替代对应交流覆盖。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / MJ
- 数量规则：attributed_external_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_electric`
- 来源：skoda-trolleybus-case; siemens-regeneration-case

###### 牵引接触交接点交付的直流电 (`purchased_traction_dc`)

仅表示车辆接触网交接点真实独立购入兼容直流，明确极性电压质量供应方损失生命周期覆盖，不是交流UUID。自有变电交流转直流为内部转移不重复供应，公交充电电车受电弓无轨电车集电杆的真实状态供应方不同须独立行。

- 选定流：牵引接触交接点交付的直流电
- 流属性/单位：Energy / MJ
- 数量规则：attributed_externally_purchased_traction_DC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_electric`
- 来源：skoda-trolleybus-case; siemens-regeneration-case

###### 自来水 (`wash_water`)

仅真实市政饮用自来水清洗供应，不是原取水回用除盐水。保留供应截留蒸发收集直接释放去向，体质量转换须真实密度状态。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：attributed_cleaning_tap_water_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_depot`
- 来源：ghg-product-2011

###### 制冷剂，R134a (`r134a_supply`)

仅真实独立供应兼容单一R134a配方纯度状态，不代理混合制冷回收混合物。资产已含初充不得重复，补加库存回收真实泄漏不同。

- 选定流：制冷剂，R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- 流属性/单位：Mass / kg
- 数量规则：attributed_R134a_recharge_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ghg-product-2011

###### 交付的完整柴油定期客运公共汽车 (`diesel_bus`)

仅真实完整柴油公共汽车，不是电车无轨电车或全寿命客运。仅交付制造供应，同资产全用户有效作业分配该覆盖，不代表全寿命运行寿终。未含安装改装维修更换退役独立补齐，完整总成与同一已含初始组件互斥。

- 选定流：交付的完整柴油定期客运公共汽车
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_diesel_bus_manufacture_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 交付的完整纯电动定期客运公共汽车 (`battery_bus`)

真实完整纯电动公共汽车，明确初始电池覆盖。仅交付制造供应，同资产全用户有效作业分配该覆盖，不代表全寿命运行寿终。未含安装改装维修更换退役独立补齐，完整总成与同一已含初始组件互斥。

- 选定流：交付的完整纯电动定期客运公共汽车
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_battery_bus_manufacture_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 交付的完整钢轮电力客运电车 (`tram_car`)

真实完整钢轮电力电车总成，明确转向架牵引受电制动客舱覆盖，不默认所有电车此配置。仅交付制造供应，同资产全用户有效作业分配该覆盖，不代表全寿命运行寿终。未含安装改装维修更换退役独立补齐，完整总成与同一已含初始组件互斥。

- 选定流：交付的完整钢轮电力客运电车
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_tram_car_manufacture_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 交付的完整架线电动无轨电车 (`trolleybus`)

真实完整橡胶轮胎无轨电车，明确集电杆牵引及可有的离线电池发电机覆盖。仅交付制造供应，同资产全用户有效作业分配该覆盖，不代表全寿命运行寿终。未含安装改装维修更换退役独立补齐，完整总成与同一已含初始组件互斥。

- 选定流：交付的完整架线电动无轨电车
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_trolleybus_manufacture_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 交付的成品钢制电车钢轨 (`steel_rail`)

仅真实有断面牌号长度供应交接点的成品钢制走行轨，不是原钢道砟完整轨道。轨道板枕扣件道岔回流接线打磨更换去向须独立覆盖，完整轨道供应与同一初始轨互斥。

- 选定流：交付的成品钢制电车钢轨
- 流属性/单位：Mass / kg
- 数量规则：attributed_finished_steel_rail_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 交付的成品铜制牵引接触线 (`copper_contact_wire`)

仅真实铜接触线，明确组成断面张力位置制造交接点。铜合金接触线承力索绝缘供电线受电滑板须各有真实身份。安装架线网络支柱开关回流导体维修退役仍独立覆盖。

- 选定流：交付的成品铜制牵引接触线
- 流属性/单位：Mass / kg
- 数量规则：attributed_finished_copper_contact_wire_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 交流电 (`external_export_ac`)

仅表示声明系统外真实独立计量兼容交流输出，披露网络供应方信用分配方法。内部车间网络固定储能回生不是外送产品或第二笔原生供应。不能同一回生既减净输入又第二次信用，储能网络损失制动电阻耗散分开。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / MJ
- 数量规则：attributed_external_export_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_electric`
- 来源：siemens-regeneration-case

###### 完成的公共城际定期道路客运区段 (`completed_public_interurban_leg`)

一真实乘客完成非相邻城市间真实公共定班道路服务的声明城际区段，实际公交电车无轨类似机制。限定真实服务范围上客最终下客站点距离分布班期期间质量等级及已含随行行李动物物品。中间休息站临时上下车运营换车不自动另增区段，独立接入衔接服务须各有真实区段证据。通票本身不证明一个完成区段或其距离。

- 选定流：完成的公共城际定期道路客运区段
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_completion`
- 来源：unsd-cpc3-64221

##### 废物流

###### 废润滑油 (`used_oil`)

产生端真实独立收集废石油基润滑油，明确组成接收方，不是液压液含油清洗水抹布泄漏化学排放。新油配方截留消耗回收收集去向独立计量。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：attributed_collected_petroleum_used_oil_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ghg-product-2011

###### 收集的客运车辆维修清洗废水 (`wash_wastewater`)

处理前一真实独立收集含水洗车流，明确真实组成接收方交接点，不是直接环境排水厕所污水处理结果。废物运输处理及溶解释放物质保持区别。

- 选定流：收集的客运车辆维修清洗废水
- 流属性/单位：Mass / kg
- 数量规则：attributed_collected_vehicle_wash_wastewater_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_depot`
- 来源：ghg-product-2011

###### 产生端收集的磨损橡胶客运公共汽车轮胎 (`spent_tyres`)

仅真实橡胶轮公交无轨电车轮胎退役收集，明确组成污染接收方，不是电车钢轮空气轮胎颗粒厂内轮胎生产混合或假定处理再生产品。翻新胎体再用、收集与释放磨耗须独立真实去向。

- 选定流：产生端收集的磨损橡胶客运公共汽车轮胎
- 流属性/单位：Mass / kg
- 数量规则：attributed_collected_worn_bus_tyres_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ghg-product-2011

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2_air`)

真实燃烧来源活动的化石CO2kg，适用时含独立有据试剂碳，不是燃料质量生物CO2上游电力尾气。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用删去已知城市、非城市或近地面状态；每真实已知受纳状态须独立经核实兼容身份的行且不重复。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_fossil_co2_air_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-road-rail-2006

###### 甲烷 (化石源) (`fossil_ch4_air`)

真实化石CH4来源空气状态，不是总VOC天然气混合物CO2e，须真实适用发动机辅助逸散方法，不默认因子未知作零。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用删去已知城市、非城市或近地面状态；每真实已知受纳状态须独立经核实兼容身份的行且不重复。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_fossil_ch4_air_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-road-rail-2006

###### 一氧化二氮 (`n2o_air`)

真实kgN2O及来源控制活动证据，不是kgN、NOx、CO2e。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用删去已知城市、非城市或近地面状态；每真实已知受纳状态须独立经核实兼容身份的行且不重复。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_n2o_air_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-road-rail-2006

###### 颗粒物 (PM2.5) (`pm25_air`)

控制后真实独立量化燃烧或特定胎制动轮轨受电来源空气PM2.5，保留来源组成不重叠粒径及捕集沉积径流独立去向，不是总尘余差。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用删去已知城市、非城市或近地面状态；每真实已知受纳状态须独立经核实兼容身份的行且不重复。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_pm25_air_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ghg-product-2011

###### HFC-134a (`r134a_air`)

真实单一HFC134a质量释放至真实空气状态，不是补加或CO2e。初充补加储存回收退役与泄漏分别闭合；本已核实释放身份无正式中文baseName，保留标准原名。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用删去已知城市、非城市或近地面状态；每真实已知受纳状态须独立经核实兼容身份的行且不重复。

- 选定流：HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_r134a_air_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ghg-product-2011

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| all_users | interurban_scheduled_road_service | 先细分真实服务队列及可分货物其他产品。司机作业随员为支持不增乘客产出，婴儿免费乘客按人。不可分真实区段路线车库架线轨道道路资产作业按有据因果兼容物理驱动敏感性在全部用户分配，不人吨公里相加固定载客任意比例。 | ghg-product-2011 |
| asset_native | interurban_scheduled_road_service | 同资产真实交付原生量乘队列兼容作业/正的全寿命全用户有效作业再/N。真实小时公里循环日历轨载线网使用须已证因果选取，不凭财务折旧编转换。制造分配不供应运行维修退役，未含阶段独立补齐。 | ghg-product-2011 |
| provider_scaling | interurban_scheduled_road_service | 购入每车公里小时人公里车辆维修处理结果先乘真实兼容归属活动再/N。人公里须真实乘客距离成员不凭运力，已等价完成公共城际区段不重复除。供应方精确阶段流格仅替代同一前景交换，不货运制造UUID代Count客运。 | ghg-product-2011 |
| stage_cohort_support | interurban_scheduled_road_service | 按每实际运行区段的真实乘客成员距离服务质量及货物支持用户分配后汇总完成区段队列N。直达乘客跨真实中间阶段仍一段，真实衔接换车结果独立有据。共用司机休息住宿终端维护作业保留真实全用户驱动供应方原生量，不定每乘客份额或漏零产出作业。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | interurban_scheduled_road_service | completed_public_interurban_leg | operational_record | noncontiguous_cities; actual_public_route_schedule; actual_served_extent_stopOD; distance_distribution; quality_class; segment_memberships; through_rest_stop_reboarding; genuine_connections_operational_substitution; intended_actual_completion; children_free_staff_roles; period; N | 核实真实非相邻城公共班期功能及乘客上客最终下客范围OD、中间区段成员距离质量队列。核对技术休息重上、换车后真实持续责任、独立接入衔接及部分失败结果。票运力起降非N，先保留失败空载支持全用户作业再正N一次，N0无有限强度。 | Item(s) | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_fuel | interurban_scheduled_road_service | diesel | operational_record | actual_engine_aux; grade_blend_origin; stock_open_receipts_close_returns; netwithdrawal_burn_spill_recovery; allusers_providercells | 实测真实牌号状态原生供应库存及独立有据燃烧，整股混合物加组成台账与替代组分投入互斥。按真实用户归属有客空载怠速辅助兼容作业再/N，其他燃料独立展开。 | kg | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_electric | interurban_scheduled_road_service | external_ac; purchased_traction_dc; external_export_ac | operational_record | gate_graph; AC_DC_voltage_polarity; meter_gross_net; rectifier_line_charger_storage_losses; pantograph_poles; regeneration_acceptance; resistor_heat; internal_external_transfer; allusers_providercells | 建真实物理归属交接能源平衡，输入真实外购直流内部变流储能回生真实外送耗散分开。交流供应与同一已含上游直流互斥，电网网络制动能不能两笔原生供应。实测各兼容原生量按真实全网络全用户分配后/N，不假定回生比例。 | MJ | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_depot | interurban_scheduled_road_service | wash_water; wash_wastewater | operational_record | site_wash_cleaner; input_stock_fates; actual_stream_composition_receiver; losses; alluser_driver; provider_cells | 真实清洗场址活动及水库存使用蒸发收集直接去向与接收处理交接点独立，逐项采集真实清洗材料公用工程废物，不仅进水推废水。按真实全部用户归属再/N。 | kg; actual native quantities | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_maintenance | interurban_scheduled_road_service | r134a_supply; used_oil; spent_tyres | operational_record | actual_vehicle_track_wire_parts; formulation; service_renewal; input_stock_consumed_retained; tyre_steelwear_collected_release; refrigerant_stock_recovery_leak; receiver_transport_treatment | 记录真实公交电车无轨及轨道架线维护更换退役、每材料原生去向。分开初充补加库存回收制冷泄漏、新油废油、胎钢磨耗收集退役物。真实运输处理覆盖全用户事件分配再/N，不假定余差排放再生信用。 | kg; Item(s); actual native quantities | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_assets | interurban_scheduled_road_service | diesel_bus; battery_bus; tram_car; trolleybus; steel_rail; copper_contact_wire | operational_record | asset_id; actual_delivered_native_quantity; manufacturinggate; whole_components; initial_replacement; sameasset_cohort_duty; positive_complete_life_allusers; road_track_wire_substation_sites; retired_providercells | 逐同资产原生交付制造量乘有据队列/正的全用户全寿命作业再/N，仅制造交接点。完整车辆Item(s)与钢轨接触线kg须真实支持不编机重。未含安装改装运行维护更新寿终独立补齐，供应方格精确替代重复，总成与初始组件互斥。 | Item(s); kg | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_emissions | interurban_scheduled_road_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air; r134a_air | operational_record | actual_source_substance_CAS; chemistry_C_N_S; size_composition; fuelburn_or_leak_wear_activity; medium_subcompartment; abatement_capture; deposit_runoff_waste; methodfactor_applicability; uncertainty; allusers | 每真实来源物种粒径介质独立监测建模，须有文件兼容物理活动方法，保留化学碳源控制。燃烧轮轨制动胎接触磨耗制冷去向分别有据，不供应即排放或CO2e转物质。量化真实空气沉积水收集分流，不编比例，全用户量/N，未知不作零。 | kg specific substance | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_long_route | interurban_scheduled_road_service | completed_public_interurban_leg | operational_record | carrier_subcontractor_segment_country; actual_grid_fuel_supplygate; full_route_and_preparation; driver_duty_relief_rest_role; actual_borderwait_delay; actual_sanitary_accessibility_HVAC_cabin; actual_meal_accommodation_native_units; actual_covered_stagecells; other_users; empty_failed_zerooutput_support | 采集真实整路线跨期各供应方责任、司机换班休息物理支持记录、国家区段供应原生交接点全用户。每设施餐宿耗材服务先证真实存在或有据未用及真实生命周期阶段，不套休息小时酒店厕所餐食人员配方。真实购入每公里小时人夜餐等结果乘兼容真实归属活动再N，精确已含格替代重复；内部机组作业不同受运人员购入服务。整段不按国境统计截断，真实失败空载待命准备休息支持保留。 | actual native activity/service quantities | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| native_normalization | interurban_scheduled_road_service | 真实兼容原始量乘有据队列全用户份额，闭合失败空载有客支持库存作业再除正N一次。兼容每公里小时人公里供应方先乘真实原生活动，已等价每段不第二次除。 | cp_completion; cp_fuel; cp_electric; cp_depot; cp_maintenance; cp_emissions | 每参考真实归属原生量 | ghg-product-2011 |
| asset_manufacture | interurban_scheduled_road_service | 同资产真实交付原生量乘兼容队列/正的全寿命全用户有效作业再/N，仅制造交接点。未含安装运行改装更换维修退役独立，总成初始件供应方覆盖互斥。 | cp_assets | 每参考真实归属原生量 | ghg-product-2011 |
| energy_stock_fates | interurban_scheduled_road_service | 分别核对燃料库存供应净取用燃烧溢洒回收及电力总输入供应方直流内部变流储能回生外送损失耗散。混合物与替代组分互斥。真实兼容物种来源活动介质不由余差表差编造。 | cp_fuel; cp_electric; cp_emissions | 每参考真实归属原生量 | ghg-product-2011 |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| interurban_reference_extent | interurban_scheduled_road_service | 强制真实非相邻城市面向公众线路班期、乘客服务范围站点OD距离等级期间完成。不任意公里阈值或继承市区特定组条件。中停休息重上不重复段，真实独立衔接运营换车须完成责任映射。本地乘坐不从整车路线自动城际，真实中间站不虚构城市中心端点。 | cp_completion; cp_long_route |
| tram_wheelrail | interurban_scheduled_road_service | 真实电车从技术记录明确转向架轮轴钢轨道岔枕板扣件回流制动撒砂润滑打磨噪声接口。每真实独供更换材料排放物种粒径介质、捕集打磨残余沉积径流废物接收方须独立身份原生量，不用通用轮胎颗粒因子或默认钢磨耗分流。 | cp_maintenance; cp_assets; cp_emissions |
| trolley_contact_power | interurban_scheduled_road_service | 真实无轨电车电车类似机制记录实际集电杆受电弓滑板接触线合金支撑馈回线变电保护及原生电流电压能源交接点。离线电池发电架线充电真实混合状态独立，每材料状态交接点须协议关联行，不默认车辆同构。 | cp_electric; cp_assets; cp_maintenance |
| network_energy | interurban_scheduled_road_service | 用真实计量平衡全用户明确每电网交流供应方直流接触网充电车辆路旁储能其他车边界损失、回生转移接纳电阻耗散外送。总净数据供应方覆盖互斥，不任意回生信用或假定交流直流身份转换。 | cp_electric |
| other_inputs | interurban_scheduled_road_service | 识别每真实其他燃料氢热蒸汽、电解液电池化学、润滑液压清洗消毒SCR试剂制冷剂、组件胎受电合金钢轨涂层砂水状态及独立服务公用工程。每交换须唯一行ID一个现有过程方向类型单身份状态UUID或未解析原生属性单位量原始来源同父协议计算供应方交接点接收方不确定性。 | cp_fuel; cp_electric; cp_depot; cp_maintenance |
| all_asset_life | interurban_scheduled_road_service | 独立覆盖每真实车辆电池道路轨道板架线支柱变电储能充电车库站点终端土地制造安装改装更新维修退役，同资产全用户寿命有据。数质量关系实测，不默认运力寿命，总成同已含初始件互斥，旧租赁资产不自动零。 | cp_assets |
| all_fates | interurban_scheduled_road_service | 逐真实磨损轨轮受电胎制动电池组件、洗水污泥过滤含油物包装及处理再用处置状态按真实单收集流组成交接点接收方运输处理展开。直接水土空气物质释放独立，蒸发未知损失不是废物。 | cp_depot; cp_maintenance; cp_emissions |
| all_species_media | interurban_scheduled_road_service | 独立量化真实CO特定氮氧化物烃氨、生物试剂碳制冷剂、不重叠颗粒真实化学来源受纳空气水土沉积、制动轨轮受电磨耗真实噪声。不NOx/VOC尘总括或捕集释放重复，未特指空气UUID不能删已知城市非城市近地。缺LCIA表征不使物理释放零。 | cp_emissions |
| provider_full_closure | interurban_scheduled_road_service | 每分包能源运行资产维护处理结果须真实供应方服务原生活动生命周期格映射。兼容每公里小时人公里原生量乘真实活动，并补齐失败零产出支持作业再N，已等价每段不重复除。未含阶段强制，缺数据阻断完整应用不作零。 | cp_completion; cp_assets; cp_electric; cp_maintenance |
| whole_route_support_providers | interurban_scheduled_road_service | 保留真实城际整段跨国家运营区段、来源特定能源地域原生供应方边界、长线准备休息换班等待延误回收空载失败零客责任。每真实客舱卫生食品饮水住宿无障碍司机支持及全用户资产事件服务须独立行ID单父过程方向类型单身份UUID或未解析、原生属性单位量原始来源同父协议方法已含阶段交接点接收方不确定性。不通用设施餐夜休息小时人力数假设，缺真实已含必要支持阻断完整，独立出售产品细分不重复。 | cp_long_route; cp_completion; cp_assets; cp_fuel; cp_electric; cp_depot; cp_maintenance |

上述强制真实逐行展开任务不是清单选择交换。每实际材料资产供应供应方废物物种状态须唯一行ID一个现有父过程方向类型单具体身份UUID或未解析、原生属性单位量原始来源同父协议方法交接点接收方不确定性。证明实际发生或有据未用，未知阻断完整，绝不作零或语义排除。

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_scope_count | interurban_scheduled_road_service | 拒绝市区相邻城专门包车误选、任意公里阈值国家截断、缺真实城际服务范围站点OD完成正N、重复休息直达阶段产出、票上车运力捷径或漏真实失败空载司机支持。 | ghg-product-2011 |
| native_identity_closure | interurban_scheduled_road_service | 拒绝总括选择、不兼容交直流数质量化学介质UUID、编造因子范围未知作零漏必要展开，每协议恰一现有过程及同父关联行。 | ghg-product-2011 |
| lifecycle_energy_provider | interurban_scheduled_road_service | 拒绝制造资产当全寿命、漏车轨线路场址寿终、无据全用户分配、总净回生重复信用或供应方重复，核双语方法来源必需限定一致。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | 真实完整原生身份数量生命周期证据后才用于secondary_dataset/background_dataset |
| allowed_use | 仅真实适用64221完成公共城际定班道路区段，明确服务范围OD距离质量机制及完整支持供应方生命周期 |
| excluded_use | 市区专门包车租用出租观光多模式最终产品；通用人公里固定公里分类电动零生命周期声称 |
| required_metadata | actual_noncontiguous_city_service_extent; public_all_user_route_and_timetable; actual_boarding_final_alighting_stopOD; actual_intermediate_segments_passenger_distance_distribution; through_reststop_reboarding_connections_substitution_and_completion; actual_class_quality_period_N; actual_motorbus_tram_trolley_similar_mechanism; actual_driver_change_rest_support_roles; actual_included_free_luggage_animals_items; actual_sanitary_meal_stay_accessibility_support; full_route_crossborder_carrier_provider_responsibility; empty_failed_zerooutput_preparation_duty; actual_supply_country_grid_fuel_gates; traction_AC_DC_recovery_losses_storage_export; sameasset_alluser_life; actual_other_products_native_allocation_and_fates_uncertainty |
| required_quality_disclosure | 全部未知真实身份数量供应方资产寿命能源平衡磨耗去向LCIA缺口及可比限制 |
| update_trigger | 真实城市范围公众路线班期站点OD阶段衔接质量司机支持跨境供应方原生能源资产寿命去向证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-64221 | official_guidance | UNSD CPC3.0ExplanatoryNotes30June2025,printed362,64221 with adjacent64222; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 真实非相邻城公众预定线路班期、公交电车无轨类似机制及免费随行负载。不提供距离阈值国家截断车辆配方Count作业生命周期公式。 |
| ipcc-road-rail-2006 | official_guidance | IPCC2006Guidelines Vol2Ch3 §3.2pp3.10–3.16 and§3.4pp3.39–3.40; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 真实燃料发动机控制尿素碳源电力上游问题，国家清单范围售油全碳假设不作完整生命周期真实释放因子。 |
| skoda-trolleybus-case | handbook | Škoda26Tr manufacturer technical case,publicsnapshot2026-10-21; https://www.skodagroup.com/reference/en-pokus-trolejbus-26tr | 仅条件真实直流架线离线电池或发电回生空调无障碍接口，不采用通用电压功率运力尺寸寿命因子。 |
| siemens-regeneration-case | handbook | Siemens PortlandTriMet light-rail regenerative storage technical case,publicsnapshot2026-10-21; https://www.mobility.siemens.com/us/en/portfolio/references/portland-trimet-light-rail-case-study.html | 真实制动至变电储能至其他车辆能源问题，技术案例不是64112分类或通用电车节能材料因子，不采用数值预测优势声称。 |
| ghg-product-2011 | standard | GHGProtocol ProductLifeCycleAccountingReportingStandard2011,chapters7–9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据细分分配原则。完整轨道架线磨耗场址退役范围、具体采集Count区段同资产公式为本PCR明确设计且须真实记录，不是来源通用因子。 |
