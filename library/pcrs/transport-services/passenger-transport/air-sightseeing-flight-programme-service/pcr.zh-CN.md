---
pcr_id: pcr.air-sightseeing-flight-programme-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 空中观光飞行项目服务

## 1. 范围与适用性

本PCR覆盖一位真实参与者完成运营方履行的空中观景飞行项目。项目时长景观解说质量、真实航迹高度、组成飞行、运营方地域期间全部已含内容限定服务。不强制环形飞行或固定到达机场，受天气影响的气球降落回收仍在真实履行项目内。

真实固定翼旋翼滑翔机热气或气体气球飞艇共享已完成观景功能，同时保留不同物理接口。不推定任何分支必然存在。其他履行相同乘客空中观景功能的机制须先满足真实技术数量身份义务，无通用因子UUID不是产品排除理由。

普通A至B航空运输即使乘客欣赏风景也不属本对象。客户控制运营的带员飞机待命、单纯预约未履行券、以驾驶教学或主动跳跃冒险竞赛为主的功能属于不同服务对象。不能仅凭航空器活动名称判断功能，须真实合同运营方责任及完成证据。

纳入真实合同已含接送追踪回收、起飞拖曳、解说食品及其他附带内容，以及飞行地面场址资本维修退役责任。独立履行多活动度假不能未经真实明确细分便剥成该输出。既有客运结果仅提供已证兼容接口，不自动等于观光项目。

不规定默认载客率航程时长燃料配方寿命排放因子范围气候优势。ICAO ICEC实际13.1版2024年8月是定期航班运行CO2计算器，不是完整生命周期非CO2证据或通用观光旋翼滑翔气球飞艇模型。下述完整生命周期分配公式为本PCR明确设计选择，来源案例提供物理问题而非通用数值。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.air-sightseeing-flight-programme-service |
| classification_refs | CPC3.0 64134；功能精确对应 |
| covered_products | 运营方履行的完成参与者空中观景飞行项目，真实固定翼旋翼滑翔热气气体气球飞艇及其他适用机制须完整真实接口 |
| excluded_products | 普通A至B航空运输；客户控制飞机待命；单纯预约；以驾驶主动跳跃冒险竞赛为主；独立履行多活动度假 |
| representative_product | 一位真实参与者完成声明空中观景项目 |
| production_route | 真实飞行升力起飞机制及已含地面回收解说与完整归属生命周期 |
| market_state | 按时长观景解说质量及已含内容限定的真实履行项目 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 完成的参与者空中观光飞行项目 |
| How much | 1位真实参与者完成声明完整项目 |
| How well | 真实观景解说质量机制等级航迹高度及已含内容 |
| How long or cycle | 真实约定项目开始至履行结束，包括真实已含地面回收内容 |
| reference_flow_link | completed_programme |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 完成的参与者空中观光飞行项目 |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | sightseeing_function; whole_programme_content; actual_participant_completion_N; operator_and_responsibilities; aircraft_lift_launch_propulsion_mechanism; actual_trajectory_altitude_geography; duration_quality_class; constituent_flights_and_included_ground_support; period_all_user_duty; fuel_gas_ballast_state_and_fates; provider_coverage; same_asset_all_user_life; actual_species_medium; uncertainty_and_LCIA_gaps |

必需限定信息须进入真实前景包。N为完整期间等价声明质量内容队列中真实完成参与者项目，N>0。票座位架次团体订单飞行小时人公里不是本产出。先保留失败空作业及库存全用户闭合，再归一化一次。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| native_units | air_sightseeing_service | 真实兼容原生属性 | 真实原生单位 | 保持项目飞机数小时循环燃气材料质量电能等真实原生量独立。兼容kWh仅核实3.6MJ/kWh转换，体质量须真实密度状态，气体PVT须真实纯度压力温度压缩性方法证据，不能编造机重把Mass UUID绑定Count。 |
| chemical_and_medium | air_sightseeing_service | 真实兼容原生属性 | 真实原生单位 | 保留化合物kg与C/N/Skg、化石生物源及真实阶段高度受纳介质；单物种不能代表NOx/VOC铅颗粒混合物，噪声尾迹LCIA量不是基本物质质量。 |
| stock_and_flow | air_sightseeing_service | 真实兼容原生属性 | 真实原生单位 | 供应库存取用燃烧截留气压舱释放捕集回收转移不同，电力总购入内部储存回收输出不同，不暗用完全氧化放空或自动再生信用。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实观光合同完整项目机制飞机起飞场址供应方资产责任 |
| starting_condition_role | 真实接口，不代表既有资产免费气起飞回收零负荷 |
| product_classification_scope | 64134观光乘客航空运输功能，技术义务按真实机制条件，不按数据就绪缩窄 |
| recursive_input_rule | 购入飞行起飞地面结果按原生活动缩放后替代兼容精确格，不新增自递归完成项目 |
| upstream_dataset_requirement | 真实身份原生量牌号物理交接点技术地域期间及供应方阶段，未含阶段逐项补齐 |
| disclosure | 真实内容完成机制高度、全部作业去向、供应方资产全用户寿命及物理与LCIA缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_duty | air_sightseeing_service | 保留真实滑行启动暖机起飞悬停爬升巡航下降降落、拖曳返程风扇充气、起飞尝试失败天气中止零乘客待命调位回收等因果归属服务池的作业，即使该次无参与者完成。真实购入供应方仅替代精确已含格。 | ipcc-aviation-2006; faa-glider-2024; faa-balloon-2024 |
| glider_launch | air_sightseeing_service | 真实空拖包括拖机起飞返程及未含飞机发动机燃料维修资本；绞盘汽车起飞包括真实动力绳缆回收地勤，自发起动包括真实发动机电池接口。滑翔机无发动机不代表生命周期零，购入已含拖曳结果与其中相同燃料资产互斥。 | faa-glider-2024 |
| lift_branches | air_sightseeing_service | 热气分支真实燃烧器钢瓶风扇地面回收；气体气球真实升力气储存压缩充填补气放空泄漏回收及压舱抛投接收方；飞艇真实推进升力气副气囊系留塔绞盘车辆泊地机库地勤均为条件强制接口。升力气不自动是燃料，也不每次全部释放。 | faa-balloon-2024; zeppelin-case-2026 |
| complete_lifecycle | air_sightseeing_service | 按声明责任覆盖真实飞机包囊吊篮燃烧器钢瓶发动机旋翼电池绳缆绞盘场址跑道航站机库泊地地面车辆制造安装维修更换退役，细分其他全部使用者。完整总成与已含初始组件互斥。 | ghg-product-2011 |
| physical_releases | air_sightseeing_service | 保留真实物种碳源化学基准阶段高度受纳介质。捕集液体颗粒仅在真实收集交接点作废物，不能同时作释放。噪声凝结尾迹等非CO2机制须真实物理活动及明确LCIA方法不确定性，不凭空生成质量流或CO2乘数。缺少表征不能使真实物理释放归零。 | ipcc-aviation-2006; icao-icec-2024 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| air_sightseeing_service | 参与者空中观景项目及归属生命周期 | required | 真实适用完整观光项目 | foreground | completed_programme |

### 过程：参与者空中观景项目及归属生命周期 (`air_sightseeing_service`)

#### 输入

##### 产品流

###### 实际Jet A-1涡轮燃料 (`jet_a1`)

仅表示声明交接点真实合格兼容Jet A-1供应，明确牌号组成供应方。不是道路柴油通用煤油航空汽油或全部飞机燃料。供应取用不自动等于燃烧。

- 选定流：Jet A-1航空涡轮燃料
- 流属性/单位：Mass / kg
- 数量规则：attributed_Jet_A1_net_withdrawal_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_flight`
- 来源：ipcc-aviation-2006

###### 实际100LL航空汽油 (`avgas_100ll`)

仅适用于真实兼容活塞飞行拖曳自发起动发动机的100LL供应。保留含铅添加剂组成及全部真实铅物种去向。其他航空汽油牌号无铅产品道路汽油须各有身份，不假定铅因子。

- 选定流：100LL牌号航空汽油
- 流属性/单位：Mass / kg
- 数量规则：attributed_avgas_100LL_net_withdrawal_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_flight`
- 来源：ipcc-aviation-2006

###### 实际丙烷燃烧器供应 (`propane`)

仅适用于真实丙烷热气燃烧器，明确真实纯度钢瓶状态供应交接点。液化石油气混合物丁烷其他燃烧器燃料不是纯丙烷。液气转移长明火充气飞行再热燃烧及瓶余库存放空泄漏须分别记录。

- 选定流：供应气球燃烧器的液化丙烷
- 流属性/单位：Mass / kg
- 数量规则：attributed_liquid_propane_net_withdrawal_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_lift`
- 来源：faa-balloon-2024

###### 实际氦升力气体供应 (`helium_supply`)

仅表示纯度储存交付状态有据的真实氦气。首次充填补气存量回收泄漏放空分别记录，接收不等于释放质量。氢等其他升力气体须独立建卡，氦不意味着燃烧器或推进燃料。

- 选定流：作为升力气体供应的氦
- 流属性/单位：Mass / kg
- 数量规则：attributed_helium_receipts_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_lift`
- 来源：faa-balloon-2024; zeppelin-case-2026

###### 实际飞行地面支持购入交流电 (`site_ac`)

逐个充电绞盘风扇压缩机机库场址交接点的真实兼容外部交流电。分别记录电池输入充电变流储存损失及内部放电，机载发电不是另一笔购电。真实直流须独立身份。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / MJ
- 数量规则：attributed_external_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ground`
- 来源：ghg-product-2011

###### 实际道路风扇汽油供应 (`ground_gasoline`)

仅适用于有牌号配方证据的地面追踪充气风扇非航空级兼容汽油，不能用未特指汽油替代100LL等特定航空燃料。整股混合物组分互斥及库存燃烧规则同样适用。

- 选定流：汽油 `e6677cd5-b574-4e00-a3bd-c373ac796135`
- 流属性/单位：Mass / kg
- 数量规则：attributed_ground_gasoline_net_withdrawal_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ground`
- 来源：faa-balloon-2024

###### 实际地面柴油供应 (`ground_diesel`)

仅适用于真实兼容地面牵引回收追踪发电作业，须明确牌号混合物供应方。不是飞机Jet A-1等航空燃料，不规定支持距离载客率柴油份额。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：attributed_ground_diesel_net_withdrawal_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_ground`
- 来源：ghg-product-2011

###### 实际压舱市政水供应 (`ballast_tap_water`)

仅表示真实用作压舱且质量状态库存明确的市政饮用自来水，不是取河水砂压舱清洗水或释放水。回收及真实抛投受纳介质独立记录，不自动供水等于排水或按假定密度换算。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：attributed_ballast_tap_water_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_lift`
- 来源：faa-balloon-2024; zeppelin-case-2026

###### 实际完整涡桨飞机供应 (`turboprop_aircraft`)

真实特定完整单发涡桨总成及已含客舱发动机初始组件，不是旋翼机通用飞机质量或全寿命观光服务。仅承担核实交付制造供应覆盖，全寿命全用户作业是分配基准，不意味着运行维修退役覆盖。未含阶段独立补齐，供应方确已含阶段须精确替代相同前景交换。

- 选定流：交付的完整单发涡桨客机
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_turboprop_aircraft_manufacture_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 实际完整涡轮直升机供应 (`turbine_helicopter`)

真实完整单涡轮直升机总成，明确旋翼发动机客舱覆盖，不是涡桨或其他旋翼结构。仅承担核实交付制造供应覆盖，全寿命全用户作业是分配基准，不意味着运行维修退役覆盖。未含阶段独立补齐，供应方确已含阶段须精确替代相同前景交换。

- 选定流：交付的完整单涡轮客运直升机
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_turbine_helicopter_manufacture_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：ghg-product-2011

###### 实际完整无动力滑翔机供应 (`unpowered_glider`)

仅表示真实完整双座无动力滑翔机总成，不代表零负荷或隐含拖曳飞机绞盘，自发起动发动机电池及实质不同完整总成须独立身份。仅承担核实交付制造供应覆盖，全寿命全用户作业是分配基准，不意味着运行维修退役覆盖。未含阶段独立补齐，供应方确已含阶段须精确替代相同前景交换。

- 选定流：交付的完整双座无动力滑翔机
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_unpowered_glider_manufacture_items / N
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

###### 完成的参与者空中观光项目 (`completed_programme`)

一位真实参与者完成声明完整空中观景项目，明确真实质量时长组成飞行已含支持。同一项目内返航多次起飞接送不另增项目。飞行员机组支持人员不是观光参与者，真实免费参与者计入。

- 选定流：完成的参与者空中观光飞行项目
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_completion`
- 来源：unsd-cpc3-air-sightseeing; papillon-case-2026; hotair-case-2026; zeppelin-case-2026

##### 废物流

###### 实际独立收集废石油基润滑油 (`spent_oil`)

产生端真实独立收集废石油基润滑油，明确污染及接收方。不是含油水液压液煤油排液吸附物新油。真实新油配方消耗截留回收收集去向须独立记录，不把投入减产出默认排放。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：attributed_collected_used_petroleum_oil_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ghg-product-2011

###### 实际收集飞机清洗废水 (`wash_wastewater`)

产生端一股真实独立收集飞机清洗水，明确组成接收方。不是生活污水捕集除冰液直接水排放或处理服务。真实除冰清洗化学品及独立去向仍强制采集，不能仅由供水确定本流量组成。

- 选定流：收集的观光飞机清洗废水
- 流属性/单位：Mass / kg
- 数量规则：attributed_collected_aircraft_wash_wastewater_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：ghg-product-2011

##### 基本流

###### 真实直接化石CO2排向空气 (`fossil_co2_air`)

真实来源飞行阶段高度中的化石CO2物质质量，由真实燃烧或兼容监测模型支持，不是燃料质量上游尾气CO2当量。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用而删除已知高度、上对流层下平流层、城市、非城市或近地面状态；真实已知状态须另建经核实兼容身份的独立行且不重复。本行不默认覆盖全部飞行阶段。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_direct_fossil_CO2_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-aviation-2006

###### 真实直接化石CH4排向空气 (`fossil_ch4_air`)

仅表示真实化石甲烷及空气受纳状态，不是总烃生物甲烷未特指天然气。须有来源发动机燃烧器阶段特定证据，不默认零或把通用喷气因子用于全部分支。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用而删除已知高度、上对流层下平流层、城市、非城市或近地面状态；真实已知状态须另建经核实兼容身份的独立行且不重复。本行不默认覆盖全部飞行阶段。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_direct_fossil_CH4_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-aviation-2006

###### 真实直接N2O排向空气 (`n2o_air`)

真实kgN2O，不是kgN、NOx或CO2当量，强制来源技术阶段介质证据。现代发动机定性表述不是全部发动机燃烧器支持的通用零。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用而删除已知高度、上对流层下平流层、城市、非城市或近地面状态；真实已知状态须另建经核实兼容身份的独立行且不重复。本行不默认覆盖全部飞行阶段。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_direct_N2O_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-aviation-2006

###### 真实直接SO2排向空气 (`so2_air`)

真实SO2物质，不是元素S硫酸盐或全部供入硫。真实燃料硫氧化去向释放状态须兼容证据，不默认全部硫变SO2。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用而删除已知高度、上对流层下平流层、城市、非城市或近地面状态；真实已知状态须另建经核实兼容身份的独立行且不重复。本行不默认覆盖全部飞行阶段。

- 选定流：二氧化硫 `fe0acd60-3ddc-11dd-ac48-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_direct_SO2_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-aviation-2006

###### 真实直接水蒸气释放 (`water_vapour_air`)

真实来源高度的水蒸气物质，不是液态压舱水收集废水或凝结尾迹影响质量。须核对燃料生成水入口水分及回收边界，不把蒸气当废物或全部供水当释放。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用而删除已知高度、上对流层下平流层、城市、非城市或近地面状态；真实已知状态须另建经核实兼容身份的独立行且不重复。本行不默认覆盖全部飞行阶段。

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_direct_water_vapour_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-aviation-2006

###### 实际氦释放到空气 (`helium_air`)

逐次气球飞艇测风气球作业实际独立有据的氦放空泄漏质量及空气状态。供应或未解释库存差不是释放证据，截留回收气不算排放，氢等其他气体须独立身份。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得为套用而删除已知高度、上对流层下平流层、城市、非城市或近地面状态；真实已知状态须另建经核实兼容身份的独立行且不重复。本行不默认覆盖全部飞行阶段。

- 选定流：氦 `08a91e70-3ddc-11dd-9465-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_actual_helium_air_release_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：faa-balloon-2024; zeppelin-case-2026

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| actual_roles | air_sightseeing_service | 按真实参与者项目队列N，在归一化前把共用飞行起飞场址作业分给真实全部服务使用者。真实免费怀抱参与者计入；飞行员机组导览追踪人员是支持，不增乘客输出。包机团体座位运力不是N。 | ghg-product-2011 |
| hierarchy | air_sightseeing_service | 先细分真实可分观光其他飞行运输培训货物场址产品。不可分共用作业须说明因果物理驱动及敏感性，保留分配闭合，不兼容单位独立，不把乘客数与吨公里相加。无法支持物理关系时才有据披露经济分配及真实价格期间。 | ghg-product-2011 |
| asset_allocation | air_sightseeing_service | 每同资产用真实交付原生数量乘队列兼容作业除正的全寿命全用户作业，再/N。真实小时循环日历腐蚀包囊发动机限制须服务特定因果证据，不假定寿命折旧每机质量运力。仅分配核实制造，真实运行维修退役独立补齐。 | ghg-product-2011 |
| provider_normalization | air_sightseeing_service | 购入每飞行每小时每公里起飞接送结果须先乘真实兼容归属原生活动，再/N。已按等价完成项目归一化结果按真实项目缩放，不重复除。逐格声明已含燃料飞行地面资产去向，仅删相同前景格。货运设备结果不能替代本Count项目。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_completion | air_sightseeing_service | completed_programme | operational_record | contract; function; programme_id; participants; staff_roles; completed_partial_cancelled; class; itinerary; duration; quality; contents; period; N | 按参与者逐项核对完整项目及组成飞行接送履行，不按票起飞数。固定等价内容质量队列。分子先纳入因果归属失败空作业，再除真实正N一次，N=0不产生有限服务强度。 | Item(s) | 每次作业事件及完整期间寿命 | 完整项目队列及必要全用户寿命 | 全部真实飞行起飞地面场址维修供应方及使用者 | 每声明的参考流 | 真实记录校准覆盖平衡适用性不确定性 |
| cp_flight | air_sightseeing_service | jet_a1; avgas_100ll | operational_record | aircraft; engine; flight_phase; actual_trajectory_altitude; fuel_grade_composition; density_basis; open_receipts_close_returns; burn_spill_recovery_transfer; all_users; provider_cells | 采集真实飞机发动机分阶段原生活动及兼容燃料库存燃烧。整股交付混合物加组成碳源台账，与替代其对应覆盖的实体组分供应互斥。明确真实损失未燃捕集放空气去向，按兼容全用户作业分配后/N。 | kg; actual native flight activity | 每次作业事件及完整期间寿命 | 完整项目队列及必要全用户寿命 | 全部真实飞行起飞地面场址维修供应方及使用者 | 每声明的参考流 | 真实记录校准覆盖平衡适用性不确定性 |
| cp_lift | air_sightseeing_service | propane; helium_supply; ballast_tap_water | operational_record | branch; burner; fan; gas_species_purity_pressure; opening_fill_topup_closing; recovery_vent_leak; ballast_material_stock_release_receiver; airship_propulsion_mooring; launch_recovery | 在兼容交接点核对真实燃料升力气压舱原生库存及全部去向，不把余差当排放。区分氦氢燃烧器燃料推进能，须真实压缩低温状态及实测质量或有据PVT关系。纳入地面充气中止作业及全用户，归属量/N。 | kg; actual native gas/material quantity | 每次作业事件及完整期间寿命 | 完整项目队列及必要全用户寿命 | 全部真实飞行起飞地面场址维修供应方及使用者 | 每声明的参考流 | 真实记录校准覆盖平衡适用性不确定性 |
| cp_ground | air_sightseeing_service | site_ac; ground_gasoline; ground_diesel | operational_record | towplane_return; winch_auto; rope_retrieve; fan_chase_transfer; mast_truck; meter_gate; energy_stocks; charged_delivered; battery_losses; provider_cells; all_users | 记录真实滑翔机起飞返程回收及气球飞艇支持、已含接送场址作业。真实动力燃料供应方交接点独立，已含拖曳结果不能重复拖机燃料。计量总供应真实电池充电损失内部转移，同样遵守混合物库存燃烧规则，完整作业归属后/N。 | MJ; kg; native support activity | 每次作业事件及完整期间寿命 | 完整项目队列及必要全用户寿命 | 全部真实飞行起飞地面场址维修供应方及使用者 | 每声明的参考流 | 真实记录校准覆盖平衡适用性不确定性 |
| cp_bundle | air_sightseeing_service | completed_programme | service_record | included_content; interpretation; transfers; meals_actual_recipe; wrappers; staff_duty; providers; served_participants; failed_duty; other_site_users | 核对真实合同已履行附带内容及供应方阶段覆盖。逐项展开真实配料包装耗材服务及去向。供应方原生结果乘真实兼容活动后/N，等价每项目结果不重复除，核对全部受益者及人员支持作业。 | actual native quantities | 每次作业事件及完整期间寿命 | 完整项目队列及必要全用户寿命 | 全部真实飞行起飞地面场址维修供应方及使用者 | 每声明的参考流 | 真实记录校准覆盖平衡适用性不确定性 |
| cp_maintenance | air_sightseeing_service | spent_oil; wash_wastewater | maintenance_record | actual_assembly_component; fluid_chemical_formulation; issue_stock_retained_consumed_collected; wash_deice; replacement; retirement; receiver; treatment_scope; all_users | 记录真实检查维修发动机电池包囊绳缆更新退役原生材料去向。新投入与收集废物身份组成交接点、直接释放接收方运输处理各自保留，不默认处理再生信用。真实共用事件作业分配后/N，不再加已含初始组件。 | kg; Item(s); actual native quantities | 每次作业事件及完整期间寿命 | 完整项目队列及必要全用户寿命 | 全部真实飞行起飞地面场址维修供应方及使用者 | 每声明的参考流 | 真实记录校准覆盖平衡适用性不确定性 |
| cp_assets | air_sightseeing_service | turboprop_aircraft; turbine_helicopter; unpowered_glider | asset_record | asset_id; delivered_native_count_mass; gate; initial_components; install_refit; actual_life_hours_cycles_calendar; all_users; cohort_duty; replacements; retirement; provider_cells | 每同一真实资产记录交付数量核实制造交接点，乘兼容队列作业/正的全寿命全用户作业再/N。无真实实测换算不能用仅质量UUID表达Item(s)。寿命基准仅用于分配，未含安装改装运行维修退役独立补齐，供应方已含格精确替代重复格。 | Item(s); measured compatible native quantities | 每次作业事件及完整期间寿命 | 完整项目队列及必要全用户寿命 | 全部真实飞行起飞地面场址维修供应方及使用者 | 每声明的参考流 | 真实记录校准覆盖平衡适用性不确定性 |
| cp_emissions | air_sightseeing_service | fossil_co2_air; fossil_ch4_air; n2o_air; so2_air; water_vapour_air; helium_air | monitoring_record | source; engine_burner_gas; burn_or_release_activity; species_CAS; carbon_origin; chemical_basis; method_factor_applicability; abatement; phase_trajectory_altitude; medium_subcompartment; stock_fates; uncertainty | 逐项按真实监测或有文件兼容来源特定方法量化真实物种阶段高度受纳状态。不套通用3.16全喷气因子供应即释放捷径，也不编造甲烷N2O零。已知高空地面状态须独立，物理清单与LCIA表征缺口分开。真实全用户释放归属/N。 | kg specific substance; actual native physical activity | 每次作业事件及完整期间寿命 | 完整项目队列及必要全用户寿命 | 全部真实飞行起飞地面场址维修供应方及使用者 | 每声明的参考流 | 真实记录校准覆盖平衡适用性不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalization | air_sightseeing_service | 汇总完整项目起飞地面附带失败作业全部受益者的兼容归属原生量，再除正N一次。已等价每项目结果不重复除，每飞行小时公里结果先乘真实活动。 | cp_completion; cp_flight; cp_ground; cp_bundle | 每参考归属原生量 | ghg-product-2011 |
| fuel_gas_ballast_balance | air_sightseeing_service | 逐兼容交接点把期初加接收减期末退回核对到分别有据燃烧截留转移溢洒放空泄漏回收，不由余差造排放。整股混合物加组成台账与替代对应覆盖的真实组分供应互斥。气入口夹带空气副气囊不全是氦，须真实纯度原生质量平衡。 | cp_flight; cp_lift; cp_ground; cp_emissions | 每参考归属原生量 | ghg-product-2011 |
| same_asset_supply | air_sightseeing_service | 真实交付原生量乘兼容队列作业/正的同资产全寿命全用户作业再/N，仅分配核实制造供应交接点。未含安装改装运行维修更换退役独立补齐，完整总成已含初始组件不重复。 | cp_assets; cp_maintenance | 每参考归属原生量 | ghg-product-2011 |
| species_state | air_sightseeing_service | 真实兼容监测或来源特定因子乘真实燃烧释放原生活动，保留物种化学基准碳源高度介质控制，不把通用喷气因子用于气球，也不用任意生命周期CO2非CO2乘数。物理缺口与LCIA限制分开。 | cp_emissions | 每参考归属原生量 | ghg-product-2011 |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| function_completion | air_sightseeing_service | 核实真实观光功能完整内容质量时长航迹及参与者完成，不凭发票票券或飞机待命。部分中止空载天气失败作业全部受益者在完整期间核对，N须正。 | cp_completion; cp_bundle |
| actual_branch_inputs | air_sightseeing_service | 每真实发动机燃烧器电力混合机制逐项展开特定燃料牌号及选择替代时的混合组分、润滑液压液制冷剂药剂电池充电除冰清洗供水。逐行明确过程方向类型身份原生量协议来源交接点，不能道路汽柴油代理航空汽油Jet A-1，也不以无尾气等于生命周期零。 | cp_flight; cp_ground; cp_maintenance |
| glider_actual_interfaces | air_sightseeing_service | 判定真实空拖绞盘汽车自发或其他机制，拖机完整返程绳缆回收地面全用户作业、绳缆燃料动力制造更换维修退役。真实购入供应方覆盖与其已含量互斥，须真实路线技术证据，不在此编造厂家默认。 | cp_ground; cp_assets |
| lift_and_propulsion_states | air_sightseeing_service | 真实气体气球飞艇热气混合分支按身份纯度储存状态展开氦氢其他真实气、压缩机钢瓶补气回收放空泄漏、气囊副气囊包囊吊篮燃烧器风扇推进泊地系留塔绞盘地面车辆。真实水砂其他压舱投入回收释放按接收方原生量独立展开，来源章节范围限制不能删除真实超压混合接口。 | cp_lift; cp_ground; cp_assets |
| all_assets_and_fates | air_sightseeing_service | 逐项展开真实完整总成或未含初始组件、跑道航站机库泊地场址土地接口及真实制造原生量全用户寿命作业。发动机旋翼电池气囊包囊绳缆更换维修材料每项退役处理状态须明确。完整总成与其中相同初始组件互斥，历史租赁共用资产不能自动零。 | cp_assets; cp_maintenance |
| actual_releases_and_wastes | air_sightseeing_service | 展开真实全部物种介质高度：碳源CO独立氮氧化物烃醛、不重叠粒径化学组成、真实含铅燃料铅化合物硫物种制冷剂气体泄漏、实际受纳方液体压舱溢洒径流；捕集残余过滤器除冰液污水食品包装按真实独立收集身份接收方建行。未知不等于零，质量平衡用于核对而非编造物种。 | cp_emissions; cp_maintenance; cp_bundle |
| altitude_and_climate | air_sightseeing_service | 保留真实地面飞行阶段高度兼容子区室，不为UUID表征把已知高空换成未特指近地空气。以声明方法不确定性量化真实噪声非CO2凝结尾迹相关活动。缺少LCIA支持须披露，不删除清单或由CO2e造质量交换。 | cp_emissions |
| provider_and_evidence_closure | air_sightseeing_service | 强制逐行真实量方法适用校准供应方精确生命周期格、已含内容及独立来源适用性。兼容购入飞行拖曳接送餐食结果按真实原生量缩放后仅替代已含物理格。缺少数据采集状态范围证据阻断完整应用，不能通用因子猜值修补。 | cp_completion; cp_flight; cp_lift; cp_ground; cp_bundle; cp_maintenance; cp_assets; cp_emissions |

上述是强制逐行采集展开义务，不是清单选择器。先证明真实存在或有据未用，每新增真实交换须有独立过程方向类型具体身份原生量协议来源物理供应方接收方交接点。真实必要数据缺失阻断完整应用，示例不意味着其他状态不存在。

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| service_closure | air_sightseeing_service | 拒绝完成质量内容不匹配、漏零产出因果作业、N=0有限强度、票运力替代参与者或重复归一化。 | ghg-product-2011 |
| identity_native_state | air_sightseeing_service | 拒绝总括选择交换、UUID原生Count/Mass介质高度不匹配、编造因子未知作零。完整使用前须每真实分支展开及库存去向证据。 | ghg-product-2011 |
| coverage_asset_provider | air_sightseeing_service | 拒绝漏起飞回收附带维修资本退役、无据分配、供应方重复或把交付资产UUID当全寿命观光。每协议须恰归一个现有过程及其行。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | 仅在真实身份数量完整限定覆盖后用于secondary_dataset/background_dataset |
| allowed_use | 明确机制内容质量航迹作业生命周期的真实等价完整参与者空中观景项目 |
| excluded_use | 通用航空运输飞机因子；单纯票座位架次小时飞机待命教学跳跃冒险或未审完整度假包 |
| required_metadata | sightseeing_function; whole_programme_content; actual_participant_completion_N; operator_and_responsibilities; aircraft_lift_launch_propulsion_mechanism; actual_trajectory_altitude_geography; duration_quality_class; constituent_flights_and_included_ground_support; period_all_user_duty; fuel_gas_ballast_state_and_fates; provider_coverage; same_asset_all_user_life; actual_species_medium; uncertainty_and_LCIA_gaps |
| required_quality_disclosure | 全部真实身份数量供应方资产全用户寿命库存去向缺口，飞行地面高度介质、真实分支技术适用及物理与LCIA不确定性 |
| update_trigger | 真实项目功能质量内容、机制飞机发动机气燃料起飞、供应方资产寿命分配或物理释放LCIA方法改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-air-sightseeing | official_guidance | UNSD CPC3.0 printed p361 subclass64134; https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅用于观光客运航空分类，不提供航空器配方或完成单位规定。 |
| ipcc-aviation-2006 | official_guidance | IPCC2006 Guidelines Vol2Ch3 §3.6 pp3.56–3.59; https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 真实发动机燃料阶段高度来源问题，国家温室气体方法不是生命周期或通用分支因子，不采用数值默认。 |
| faa-balloon-2024 | handbook | FAA Balloon Flying Handbook FAA-H-8083-11B actual2024, ch2 systems, ch6 layout/launch, ch8 recovery, ch11 gas balloons; https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/Balloon_Flying_Handbook | 条件真实燃烧器风扇气压舱地勤接口，11章主要零压气球，不在此规定通用纯度数量法律安全要求。 |
| faa-glider-2024 | handbook | FAA Glider Flying Handbook FAA-H-8083-13B actual2024 ch7 pp7-17–7-18 and7-30–7-31; https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/glider_handbook | 真实空拖返程绞盘汽车自发起动物理接口，真实设备仍须飞行手册证据，不证明全部滑翔飞行是观光。 |
| papillon-case-2026 | handbook | Papillon 运营方FAQ案例，不是独立科学因子；公开快照2026-10-21; https://www.papillon.com/guest-services/frequently-asked-questions/ | 真实直升机固定翼项目与飞行时间及已含接送内容问题，不是通用时长载客率。 |
| hotair-case-2026 | handbook | Hot Air Australia 运营方FAQ案例，不是独立科学因子；公开快照2026-10-21; https://www.hotair.com.au/frequently-asked-questions-faq | 真实气球航迹天气降落完整服务问题，不是固定OD默认早餐或数值配方。 |
| zeppelin-case-2026 | handbook | Deutsche Zeppelin-Reederei 运营方FAQ案例，不是独立科学因子；公开快照2026-10-21; https://zeppelinflug.de/en/faqs | 真实空中观景产品及推进氦副气囊泊地地勤接口，不泛化NT特定数量。 |
| icao-icec-2024 | official_guidance | ICAO ICEC methodology actual v13.1 August2024 §§1–3 pp3–4; https://icec.icao.int/Documents/Methodology%20ICAO%20Carbon%20Emissions%20Calculator_v13_Final.pdf | 仅用于定期航班运行CO2计算器范围反证，不是生命周期非CO2通用观光因子，不采用因子。 |
| ghg-product-2011 | standard | GHG Protocol Product Life Cycle Accounting and Reporting Standard2011 chapters7–9; https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据细分分配原则，完整资本起飞回收支持边界Count项目及公式为本PCR明确设计，不是所引标准因子。 |
