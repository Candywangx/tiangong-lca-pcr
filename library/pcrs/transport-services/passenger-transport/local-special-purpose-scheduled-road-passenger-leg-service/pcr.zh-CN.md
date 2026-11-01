---
pcr_id: pcr.local-special-purpose-scheduled-road-passenger-leg-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 地方专门用途定期道路客运区段服务

## 1. 范围与适用性

本专属PCR覆盖真实完成且满足64114纳入条款的地方专门用途定期道路客运区段：单城相邻城市群内面向院校企业等特定用户组预定路线班期；市区市郊定班接驳含机场接驳；学生校车家校校际运送且包括农村。不能把一般市区地域句套全部子型删去农村校车。

机场接驳是明确纳入的定班服务功能。向任一机场旅客售票本身不排除它，普通全公众市区公交仅在机场设站也不自动是机场接驳。须真实接驳目的地域班期用户及组织者承运履约。非定班机场接送出租64115、带司机车租用64116、普通公共班线64112、观光64132须区分，不能仅车辆所属乘客归属机构标记重复时刻表选用。

学校院校职工服务须保留真实委托及持续运送责任、资格、日历班次、与完成关联的到乘记录、站点交接无障碍安全作业。登记学生员工人数出勤发票许可座位合同车小时待命可用性不是完成客运产出。学校班次机场变化、未到未接成空载失败取消调位支持作业按因果归属，先闭合再按真实正N归一化，N=0无有限每段强度。

真实公共汽车电车无轨电车类似道路机制可履行该具体服务功能，纳入取决于真实产品技术证据，不默认每校线用汽车或每车同设备。保留完整牵引电网接触轮轨胎道路场址资本维修退役责任及全部真实未列身份。不规定通用陪护升降约束加热器燃料寿命载客日历比例回生份额数量范围。

真实提供且属运送产品的随行行李物品动物、无障碍辅助作业陪护须纳入，但不能由其他分类说明推定普遍提供。在岗司机陪护随员是支持不是额外乘客。教育雇主生产航班运营及独立履行照护教学为其他产品，不假定出勤生产健康或避免家长车信用。无完成区段的整车带司机租用或容量待命是不同履约功能，不能转换虚构乘客数。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.local-special-purpose-scheduled-road-passenger-leg-service |
| classification_refs | 仅CPC3.0 64114；专属完整官方范围精确对应 |
| covered_products | 真实完成地方专门用途定班道路区段，特定用户、定班市区市郊接驳含机场、学生家校校际含农村，真实机制支持 |
| excluded_products | 普通公共64112；非定班出租机场接送64115；带司机租用64116；观光64132；整车待命；无真实适用功能机构车辆重复包车 |
| representative_product | 完成的地方专门用途定期道路客运区段 |
| production_route | 真实适用专门用途定班上下客区段、委托内部运送作业日历支持及完整真实车辆牵引电网场址生命周期 |
| market_state | 真实完成限定专门用途定班运送，不是资格出勤未用合同运力 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完成的地方专门用途定期道路客运区段 |
| How much | 1真实乘客完成一个适用地方专门用途定班道路区段 |
| How well | 真实纳入条款目的资格路线OD距离日历班期质量交接无障碍支持 |
| How long or cycle | 真实上下客区段及归属完整期间生命周期作业 |
| reference_flow_link | completed_special_local_leg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完成的地方专门用途定期道路客运区段 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | actual_64114_inclusion_clause; local_specific_user_route_or_scheduled_urban_shuttle_or_pupil_rural_clause; actual_school_enterprise_airport_purpose_and_eligibility; organiser_carrier_subcontractor_responsibility; school_calendar_shift_airport_schedule; actual_stop_OD_and_passenger_distance_distribution; actual_completed_leg_N_and_period; actual_vehicle_tram_trolley_similar_mechanism; actual_quality_handover_accessibility_support; passenger_driver_escort_roles; empty_failed_no_show_waiting_duty; actual_included_transport_items; traction_AC_DC_regeneration_and_losses; sameasset_alluser_life; native_provider_coverage_fates_uncertainty |

必需限定信息须进入真实前景包。N为等价声明队列期间真实完成适用乘客区段且正。完成部分失败折返结果、真实区段其他用户距离库存跨期作业须先闭合再归一化一次。服务司机人员不增乘客产出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| count_distance | local_special_scheduled_road_service | 真实原生兼容属性 | 真实原生单位 | 不互换乘客段票上车联程座位班次公里人公里。真实乘客站点距离分布强制，每人公里结果须自身有据基准不能改Count名。 |
| native_conversion | local_special_scheduled_road_service | 真实原生兼容属性 | 真实原生单位 | 保留真实原生属性状态，兼容kWh仅核实3.6MJ/kWh。体质量须真实密度状态，总成Count与kg须实测范围关系。交流直流不同身份交接点，转换不使UUID可替代。 |
| species_fates | local_special_scheduled_road_service | 真实原生兼容属性 | 真实原生单位 | 保持化合物与元素C/N/Skg、化石生物、胎钢接触来源、颗粒粒径真实空气水土沉积收集去向独立。制冷补加非泄漏、水蒸发非废物、捕集磨耗非直接空气。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实64114特定用户接驳学生农村条款队列及组织承运责任、机制供应电网场址供应方资产交接点 |
| starting_condition_role | 真实前景交接点事实，不代表既有资产电力零负荷 |
| product_classification_scope | 仅完整64114地方专门用途定班道路功能，保留明确机场定班农村学生条款、真实公交电车无轨类似物理义务 |
| recursive_input_rule | 精确适用分包服务仅替代已含原生阶段格一次，不增自递归乘客输出 |
| upstream_dataset_requirement | 供应资产处理须真实类型原生单位质量技术交接点地域期间全用户寿命供应方覆盖 |
| disclosure | 真实全用户作业完成、交流直流回生库存去向供应方资产路线可比性未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| special_function_scope | local_special_scheduled_road_service | 按真实64114纳入条款及委托承运接驳学生功能，不套通用排他用户测试。保留机场旅客可购票的定班市区市郊机场接驳、明确条款农村家校校际服务。普通公共市区、非定班出租机场接送、带司机租用、观光、重复包车待命合同须独立真实功能判断。 | unsd-cpc3-64114 |
| whole_service | local_special_scheduled_road_service | 纳入因果归属本服务的真实定期有客零客空载进出场调位停站启动怠速失败折返救援准备作业、乘客无障碍空调控制及车库站点终端支持，其他用户分包方仅一次归属。 | ghg-product-2011 |
| tram_physical | local_special_scheduled_road_service | 真实电车保留轮轨转向架轴牵引制动钢轨道岔嵌入独立轨道回流、滑板受电弓接触线变电保护接口。真实钢磨耗打磨润滑撒砂制动受电维护及空气沉积水废物去向须独立证据，不推定全部材料必用或用道路轮胎因子代电车钢磨耗。 | ghg-product-2011 |
| trolley_physical | local_special_scheduled_road_service | 真实无轨电车保留橡胶轮道路、双杆接触线受电回流供应及真实离线电池发电辅助状态。电池直流燃料变流须独立真实身份及完整架线车辆场址生命周期，不把无轨电车默认普通电池车。 | ghg-product-2011 |
| energy_recovery | local_special_scheduled_road_service | 画真实上游交流供应方至整流接触网充电储能车辆外送交接图，损失仅一次。制动回生至车载网络路旁储能其他车在全网络边界属内部，真实外部转移独立计量。制动电阻热耗散或网络不能接纳不自动作外送避免电力。总净表全用户归属明确，不同时净节省及重复信用。 | ghg-product-2011 |
| capital_provider | local_special_scheduled_road_service | 完整覆盖真实公交电车无轨电车电池道路轨道架线变电充电车库站点终端制造安装更新运行维修退役责任。交付资产流仅核实制造交接点，有效寿命仅分配分母。总成与同一已含初始组件及供应方已含覆盖互斥。 | ghg-product-2011 |
| commissioned_support | local_special_scheduled_road_service | 明确真实组织者承运分包责任矩阵及实际运送交接陪护无障碍固定空调加热站场等待作业。逐项采集真实供应服务材料设备或内部运营活动，不自动造人数人力流或全设备配方。不仅受益者上学工作乘机就加入教育雇主航班产品。 | ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| local_special_scheduled_road_service | 地方专门用途定期道路客运区段履行及生命周期 | required | 真实完整适用64114功能 | foreground | completed_special_local_leg |

### 过程：地方专门用途定期道路客运区段履行及生命周期 (`local_special_scheduled_road_service`)

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

###### 完成的地方专门用途定期道路客运区段 (`completed_special_local_leg`)

一真实适用乘客完成声明64114地方专门用途定期道路区段，明确目的纳入条款学校企业或接驳背景、路线站点OD距离、日历班期质量无障碍及已含运输支持。定班市区市郊机场接驳可向机场旅客售票而不强加排他资格，保留真实农村学生家校校际运送。儿童婴儿免费乘客按真实人不作成人座位等价，司机作业陪护不增乘客产出。

- 选定流：完成的地方专门用途定期道路客运区段
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_completion`
- 来源：unsd-cpc3-64114

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
| all_users | local_special_scheduled_road_service | 先细分真实服务队列及可分货物其他产品。司机作业随员为支持不增乘客产出，婴儿免费乘客按人。不可分真实区段路线车库架线轨道道路资产作业按有据因果兼容物理驱动敏感性在全部用户分配，不人吨公里相加固定载客任意比例。 | ghg-product-2011 |
| asset_native | local_special_scheduled_road_service | 同资产真实交付原生量乘队列兼容作业/正的全寿命全用户有效作业再/N。真实小时公里循环日历轨载线网使用须已证因果选取，不凭财务折旧编转换。制造分配不供应运行维修退役，未含阶段独立补齐。 | ghg-product-2011 |
| provider_scaling | local_special_scheduled_road_service | 购入每车公里小时人公里车辆维修处理结果先乘真实兼容归属活动再/N。人公里须真实乘客距离成员不凭运力，已等价完成地方专门用途定班区段不重复除。供应方精确阶段流格仅替代同一前景交换，不货运制造UUID代Count客运。 | ghg-product-2011 |
| service_roles_calendar | local_special_scheduled_road_service | 按路线质量日历完成匹配真实学校职工接驳队列。归属服务的司机陪护支持作业不是完成乘客，真实受运职工陪护须独立角色不重复。委托付款登记用户预计出勤不能定N寿命份额。共用车队站点车库供应方保留实际全部用户队列及非服务作业，有据因果分配。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | local_special_scheduled_road_service | completed_special_local_leg | operational_record | inclusion_clause; purpose; actual_school_or_enterprise_segment; airport_shuttle_function; rural_school_home_school_school_school; route_schedule; actual_stop_OD_distance; actual_eligible_passengers; completed_partial_failed_no_show; passenger_driver_escort_roles; period; N | 核实适用真实纳入条款、持续定班运送功能、真实乘客及等价质量日历队列完成上下客站点OD区段。机场定班资格不必普遍排他，农村学生条款不被一般市区限制覆盖。登记出勤票合同运力不是N。未成空载失败支持作业按因果入分子再除真实正N一次，N=0无有限强度。 | Item(s) | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_fuel | local_special_scheduled_road_service | diesel | operational_record | actual_engine_aux; grade_blend_origin; stock_open_receipts_close_returns; netwithdrawal_burn_spill_recovery; allusers_providercells | 实测真实牌号状态原生供应库存及独立有据燃烧，整股混合物加组成台账与替代组分投入互斥。按真实用户归属有客空载怠速辅助兼容作业再/N，其他燃料独立展开。 | kg | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_electric | local_special_scheduled_road_service | external_ac; purchased_traction_dc; external_export_ac | operational_record | gate_graph; AC_DC_voltage_polarity; meter_gross_net; rectifier_line_charger_storage_losses; pantograph_poles; regeneration_acceptance; resistor_heat; internal_external_transfer; allusers_providercells | 建真实物理归属交接能源平衡，输入真实外购直流内部变流储能回生真实外送耗散分开。交流供应与同一已含上游直流互斥，电网网络制动能不能两笔原生供应。实测各兼容原生量按真实全网络全用户分配后/N，不假定回生比例。 | MJ | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_depot | local_special_scheduled_road_service | wash_water; wash_wastewater | operational_record | site_wash_cleaner; input_stock_fates; actual_stream_composition_receiver; losses; alluser_driver; provider_cells | 真实清洗场址活动及水库存使用蒸发收集直接去向与接收处理交接点独立，逐项采集真实清洗材料公用工程废物，不仅进水推废水。按真实全部用户归属再/N。 | kg; actual native quantities | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_maintenance | local_special_scheduled_road_service | r134a_supply; used_oil; spent_tyres | operational_record | actual_vehicle_track_wire_parts; formulation; service_renewal; input_stock_consumed_retained; tyre_steelwear_collected_release; refrigerant_stock_recovery_leak; receiver_transport_treatment | 记录真实公交电车无轨及轨道架线维护更换退役、每材料原生去向。分开初充补加库存回收制冷泄漏、新油废油、胎钢磨耗收集退役物。真实运输处理覆盖全用户事件分配再/N，不假定余差排放再生信用。 | kg; Item(s); actual native quantities | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_assets | local_special_scheduled_road_service | diesel_bus; battery_bus; tram_car; trolleybus; steel_rail; copper_contact_wire | operational_record | asset_id; actual_delivered_native_quantity; manufacturinggate; whole_components; initial_replacement; sameasset_cohort_duty; positive_complete_life_allusers; road_track_wire_substation_sites; retired_providercells | 逐同资产原生交付制造量乘有据队列/正的全用户全寿命作业再/N，仅制造交接点。完整车辆Item(s)与钢轨接触线kg须真实支持不编机重。未含安装改装运行维护更新寿终独立补齐，供应方格精确替代重复，总成与初始组件互斥。 | Item(s); kg | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_emissions | local_special_scheduled_road_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air; r134a_air | operational_record | actual_source_substance_CAS; chemistry_C_N_S; size_composition; fuelburn_or_leak_wear_activity; medium_subcompartment; abatement_capture; deposit_runoff_waste; methodfactor_applicability; uncertainty; allusers | 每真实来源物种粒径介质独立监测建模，须有文件兼容物理活动方法，保留化学碳源控制。燃烧轮轨制动胎接触磨耗制冷去向分别有据，不供应即排放或CO2e转物质。量化真实空气沉积水收集分流，不编比例，全用户量/N，未知不作零。 | kg specific substance | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |
| cp_service_context | local_special_scheduled_road_service | completed_special_local_leg | operational_record | commissioner; organiser_carrier_subcontractor_matrix; actual_eligibility_and_users; schoolterm_days_shift_airportchanges; stop_handover; actual_escort_securements_accessibility_lift; HVAC_heater_idle_wait; actual_provider_nativeunit_quantity; other_users; failed_no_show_duties | 采集真实服务合同内部责任及日历资格交接所需真实支持作业记录。每设备人员支持活动先证明存在或有据未用，购入服务材料资产去向须同父行协议原生真实量独立展开。不自动陪护升降加热人力交换，内部人员作业不同购入服务。匹配真实供应方原生活动覆盖，全部真实用户及因果空载失败待命作业先分配再N，教育工作航班成果在外。 | actual native service/activity quantities | 每真实作业事件及期间寿命 | 完整队列期间必要全用户寿命 | 全部真实道路轨道接触电网场址车辆供应方用户 | 每声明的参考流 | 真实日志校准合同平衡供应方适用不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| native_normalization | local_special_scheduled_road_service | 真实兼容原始量乘有据队列全用户份额，闭合失败空载有客支持库存作业再除正N一次。兼容每公里小时人公里供应方先乘真实原生活动，已等价每段不第二次除。 | cp_completion; cp_fuel; cp_electric; cp_depot; cp_maintenance; cp_emissions | 每参考真实归属原生量 | ghg-product-2011 |
| asset_manufacture | local_special_scheduled_road_service | 同资产真实交付原生量乘兼容队列/正的全寿命全用户有效作业再/N，仅制造交接点。未含安装运行改装更换维修退役独立，总成初始件供应方覆盖互斥。 | cp_assets | 每参考真实归属原生量 | ghg-product-2011 |
| energy_stock_fates | local_special_scheduled_road_service | 分别核对燃料库存供应净取用燃烧溢洒回收及电力总输入供应方直流内部变流储能回生外送损失耗散。混合物与替代组分互斥。真实兼容物种来源活动介质不由余差表差编造。 | cp_fuel; cp_electric; cp_emissions | 每参考真实归属原生量 | ghg-product-2011 |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| special_purpose_clause | local_special_scheduled_road_service | 强制真实64114地方特定用户路线班期、定班市区市郊接驳或学生家校校际含农村条款，实际功能组织承运资格站点OD质量日历完成。机场旅客可购不自动64112，公众线机场站不自动接驳。拒绝非定班机场出租64115带司机租用64116观光64132及仅机构所属重复时刻表分类。 | cp_completion; cp_service_context |
| tram_wheelrail | local_special_scheduled_road_service | 真实电车从技术记录明确转向架轮轴钢轨道岔枕板扣件回流制动撒砂润滑打磨噪声接口。每真实独供更换材料排放物种粒径介质、捕集打磨残余沉积径流废物接收方须独立身份原生量，不用通用轮胎颗粒因子或默认钢磨耗分流。 | cp_maintenance; cp_assets; cp_emissions |
| trolley_contact_power | local_special_scheduled_road_service | 真实无轨电车电车类似机制记录实际集电杆受电弓滑板接触线合金支撑馈回线变电保护及原生电流电压能源交接点。离线电池发电架线充电真实混合状态独立，每材料状态交接点须协议关联行，不默认车辆同构。 | cp_electric; cp_assets; cp_maintenance |
| network_energy | local_special_scheduled_road_service | 用真实计量平衡全用户明确每电网交流供应方直流接触网充电车辆路旁储能其他车边界损失、回生转移接纳电阻耗散外送。总净数据供应方覆盖互斥，不任意回生信用或假定交流直流身份转换。 | cp_electric |
| other_inputs | local_special_scheduled_road_service | 识别每真实其他燃料氢热蒸汽、电解液电池化学、润滑液压清洗消毒SCR试剂制冷剂、组件胎受电合金钢轨涂层砂水状态及独立服务公用工程。每交换须唯一行ID一个现有过程方向类型单身份状态UUID或未解析原生属性单位量原始来源同父协议计算供应方交接点接收方不确定性。 | cp_fuel; cp_electric; cp_depot; cp_maintenance |
| all_asset_life | local_special_scheduled_road_service | 独立覆盖每真实车辆电池道路轨道板架线支柱变电储能充电车库站点终端土地制造安装改装更新维修退役，同资产全用户寿命有据。数质量关系实测，不默认运力寿命，总成同已含初始件互斥，旧租赁资产不自动零。 | cp_assets |
| all_fates | local_special_scheduled_road_service | 逐真实磨损轨轮受电胎制动电池组件、洗水污泥过滤含油物包装及处理再用处置状态按真实单收集流组成交接点接收方运输处理展开。直接水土空气物质释放独立，蒸发未知损失不是废物。 | cp_depot; cp_maintenance; cp_emissions |
| all_species_media | local_special_scheduled_road_service | 独立量化真实CO特定氮氧化物烃氨、生物试剂碳制冷剂、不重叠颗粒真实化学来源受纳空气水土沉积、制动轨轮受电磨耗真实噪声。不NOx/VOC尘总括或捕集释放重复，未特指空气UUID不能删已知城市非城市近地。缺LCIA表征不使物理释放零。 | cp_emissions |
| provider_full_closure | local_special_scheduled_road_service | 每分包能源运行资产维护处理结果须真实供应方服务原生活动生命周期格映射。兼容每公里小时人公里原生量乘真实活动，并补齐失败零产出支持作业再N，已等价每段不重复除。未含阶段强制，缺数据阻断完整应用不作零。 | cp_completion; cp_assets; cp_electric; cp_maintenance |
| actual_support_and_responsibility | local_special_scheduled_road_service | 逐实际运输委托运营记录受益资格、日历班次机场变化、交接及真实所需陪护无障碍约束升降空调辅助加热等待怠速支持。儿童婴儿按人，司机作业陪护不增产出。真实受运职工与作业、组织承运分包原生已含格及车队场址全用户分开。每真实支持材料供应方资产废物排放须同父协议独立行来源原生量交接点接收方，缺则阻断，不自动人员设备配方人力数。 | cp_service_context; cp_completion; cp_fuel; cp_electric; cp_assets; cp_maintenance |

上述强制真实逐行展开任务不是清单选择交换。每实际材料资产供应供应方废物物种状态须唯一行ID一个现有父过程方向类型单具体身份UUID或未解析、原生属性单位量原始来源同父协议方法交接点接收方不确定性。证明实际发生或有据未用，未知阻断完整，绝不作零或语义排除。

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_scope_count | local_special_scheduled_road_service | 拒绝64114目的资格日历接驳学生条款错误、普通公共出租租用观光待命替代、一般市区限制删农村学生、仅因可购票排机场接驳、缺真实OD完成正N、票出勤运力替代或漏失败空载支持。 | ghg-product-2011 |
| native_identity_closure | local_special_scheduled_road_service | 拒绝总括选择、不兼容交直流数质量化学介质UUID、编造因子范围未知作零漏必要展开，每协议恰一现有过程及同父关联行。 | ghg-product-2011 |
| lifecycle_energy_provider | local_special_scheduled_road_service | 拒绝制造资产当全寿命、漏车轨线路场址寿终、无据全用户分配、总净回生重复信用或供应方重复，核双语方法来源必需限定一致。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | 真实完整原生身份数量生命周期证据后才用于secondary_dataset/background_dataset |
| allowed_use | 仅真实适用64114完成地方专门用途定班区段，明确真实条款责任资格日历OD质量支持机制 |
| excluded_use | 普通公众出租非定班机场租用观光整车待命；教育工作航班产出或通用人公里电动零生命周期声称 |
| required_metadata | actual_64114_inclusion_clause; local_specific_user_route_or_scheduled_urban_shuttle_or_pupil_rural_clause; actual_school_enterprise_airport_purpose_and_eligibility; organiser_carrier_subcontractor_responsibility; school_calendar_shift_airport_schedule; actual_stop_OD_and_passenger_distance_distribution; actual_completed_leg_N_and_period; actual_vehicle_tram_trolley_similar_mechanism; actual_quality_handover_accessibility_support; passenger_driver_escort_roles; empty_failed_no_show_waiting_duty; actual_included_transport_items; traction_AC_DC_regeneration_and_losses; sameasset_alluser_life; native_provider_coverage_fates_uncertainty |
| required_quality_disclosure | 全部未知真实身份数量供应方资产寿命能源平衡磨耗去向LCIA缺口及可比限制 |
| update_trigger | 纳入条款目的资格委托承运日历路线OD质量支持机制电网供应方资产寿命去向证据变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-64114 | official_guidance | UNSD CPC3.0 ExplanatoryNotes30June2025,printed359,64114 with adjacent64112/64115/64116/64132; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 真实特定用户地方定班、市区市郊定班接驳、学生家校校际含农村条款排除。不提供通用机场排他资格设备陪护数值清单Count方法，说明不枚举电车无轨。 |
| ipcc-road-rail-2006 | official_guidance | IPCC2006Guidelines Vol2Ch3 §3.2pp3.10–3.16 and§3.4pp3.39–3.40; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 真实燃料发动机控制尿素碳源电力上游问题，国家清单范围售油全碳假设不作完整生命周期真实释放因子。 |
| skoda-trolleybus-case | handbook | Škoda26Tr manufacturer technical case,publicsnapshot2026-10-21; https://www.skodagroup.com/reference/en-pokus-trolejbus-26tr | 仅条件真实直流架线离线电池或发电回生空调无障碍接口，不采用通用电压功率运力尺寸寿命因子。 |
| siemens-regeneration-case | handbook | Siemens PortlandTriMet light-rail regenerative storage technical case,publicsnapshot2026-10-21; https://www.mobility.siemens.com/us/en/portfolio/references/portland-trimet-light-rail-case-study.html | 真实制动至变电储能至其他车辆能源问题，技术案例不是64112分类或通用电车节能材料因子，不采用数值预测优势声称。 |
| ghg-product-2011 | standard | GHGProtocol ProductLifeCycleAccountingReportingStandard2011,chapters7–9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据细分分配原则。完整轨道架线磨耗场址退役范围、具体采集Count区段同资产公式为本PCR明确设计且须真实记录，不是来源通用因子。 |
| eu-special-regular-2009 | official_guidance | Regulation(EC)1073/2009 asadopted21October2009 Articles2/5, officialhistorical reproduction; https://www.legislation.gov.uk/eur/2009/1073/article/2/adopted?view=plain and https://www.legislation.gov.uk/eur/2009/1073/article/5/adopted?view=plain | 有日期地域限定定班专门偶发比较，组织承运及重复合同本身不足。不作当前法律许可义务或通用机场排他要求。 |
| epa-school-idle-2026 | official_guidance | US EPA SchoolBusIdleReduction, actualretainedpage updated28August2026; https://www.epa.gov/dera/school-bus-idle-reduction | 仅真实学校等待怠速及独立燃料电力辅助加热问题，不采用怠速分钟燃料率磨损倍数健康避免排放因子，也不要求每校车加热器。 |
