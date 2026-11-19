---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.coastal-and-transoceanic-water-transport-services-of-freight-by-refrigerator-vessels
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷藏沿海远洋货运周转服务

## 1. 范围与适用性

本专属PCR覆盖在专门冷藏舱室内以沿海远洋水运运输冷冻冷藏货物的完整真实冷藏船服务。纳入真实传统冷藏货舱及合格冷藏单元安排，不把产品限于集装箱某商品或某制冷推进技术。产品为真实承运端口之间合格冷链海运。参考为1 tkm交付验收货物净吨质量乘逐段真实载货海运公里，具冷链数量质量保管资格。船舶设备可复用包装皮重及服务新增冷却介质独立，运力TEU或销售商品不是本运输输出。

官方叶类排除65212沿海远洋液态气体货物运输，即使货物被冷藏。真实消耗作船用燃料的液化天然气其他气体为能源投入，不是被排除的液态气体货物服务。排除内河承运其他成品模式纯船舶设备出租独立冷库及原始货物生产。真实合同港口装卸冷链接口按真实责任纳入，独立供应方仅一次按声明端口接入。按真实功能设备合同解决冷藏舱室与联运集装箱等服务分类重叠，不重复完成周转；有集装箱本身既不定义也不排除范围。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.freight-transport-services.coastal-and-transoceanic-water-transport-services-of-freight-by-refrigerator-vessels |
| classification_refs | CPC 3.0 65211; exact |
| covered_products | 专门冷藏舱室内沿海远洋冷冻冷藏货物承运完整功能 |
| excluded_products | 65212液态气体货物、内河其他模式、独立仓储纯出租、原始商品生产 |
| representative_product | 合格沿海远洋冷藏货物运输周转服务 |
| production_route | 真实载货航行冷链保持承运交接港口责任及完整应分配船舶冷藏支持生命期 |
| market_state | 具真实端口货物状态路线的合格交付冷链海运周转 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| 什么（What） | 合格沿海远洋冷藏货物运输周转服务 |
| 多少（How much） | 1 tkm真实验收交付净货物周转，逐真实载货区段吨质量乘海运公里 |
| 质量（How well） | 真实冷冻冷藏商品舱室单元验收质量温度状态合同保管时间及承运至接收方冷链交接 |
| 时长或周期（How long or cycle） | 真实航次货物保管期间加归属预冷港口锚泊等候压载失败返程责任及完整资产生命期 |
| reference_flow_link | qualified_cold_sea_work |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格沿海远洋冷藏货物运输周转服务 |
| 参考流属性 | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` |
| 参考单位组 | 质量*距离 `3620148f-c5db-48ce-9065-a10092089aca` |
| 参考单位 | tkm |
| 必需限定信息 | coastal_transoceanic_water_mode; frozen_refrigerated_compartment_state; carrier_custody_gates; actual_net_cargo_mass_tare; accepted_cold_quality_temperature_time; loaded_segment_distance_and_port_pickup_drop; actual_vessel_compartment_unit; main_aux_boiler_shore_energy_ownership; preconditioning_wait_empty_ballast_failed_duties; actual_refrigerant_phase_compartment; cold_provider_interfaces; all_user_vessel_cold_port_life; native_provider_coverage; period_T; uncertainty |

## 4. 计量与单位规则

| rule_id | 适用于 | required_property | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| reference_cold_sea_work | reference product | 质量*距离 | tkm | 逐真实载货海运区段使用真实验收交付净商品质量，按保管谱系更新取送损失拒收份额，不重复区段或完成。净商品排除船舶设备可复用包装皮重及新增服务冷却介质。冰其他物质本身为声明货物时另明确货物身份，不自动排除。真实航迹航海日志距离采用有据航海单位换算为km，不用直线路线计费TEU运力或船舶总吨载重吨代理。 |
| tkm_alias | reference product | 质量*距离 `118f2a40-50ec-457c-aa60-9bc6b6af9931` | tkm | 声明tkm严格为已核实原生t*km拼写别名：1 tkm = 1 t*km = 1000 kg*km。原生单位组仍为质量*距离，UUID3620148f-c5db-48ce-9065-a10092089aca；最终TIDAS交换用原生t*km及真实系数，不改功能量纲尺度。 |
| native_state_units | 全部清单行 | 真实原生兼容属性 | 真实原生单位 | 保留真实燃料制冷剂冷却介质资产供应方身份状态端口原生属性单位。燃料体积质量能量换算用真实观测密度温度组成低位热值及相关气体压力压缩性，不设统一船燃系数。核实kWh换算为3.6 MJ/kWh；通用柴油不自动等于船用轻柴油重柴油残余燃油液化天然气。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 真实承运端口冷冻冷藏货物状态船舶舱室路线供应责任 |
| starting_condition_role | 承运接收状态不消除负责预冷先前资产生命或供应燃料制冷剂 |
| product_classification_scope | 65211沿海远洋专门冷藏舱室完整范围，排除65212液态气体货物 |
| recursive_input_rule | 真实原生供应方覆盖运输冷藏港口生命范围仅一次替代匹配自营范围 |
| upstream_dataset_requirement | 真实原生功能属性单位状态端口技术地域年份生命周期覆盖 |
| disclosure | 合格质量路线冷链端口全部载货空驶港口责任燃料制冷剂环境去向完整全用户资产供应方范围及未知 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| full_cold_vessel_function | 全部节点 | 覆盖专门冷藏舱室真实沿海远洋冷冻冷藏货物承运。传统专用冷藏货舱真实冷藏单元混货安排及真实制冷推进装卸替代按证据真实分类端口判断，不以某船队示例或仅集装箱为默认。液态气体货物液化天然气仍属65212，真实液化天然气燃料属不同能源角色。技术差异投入数量质量须明确，仅启用真实分支。 | unsd-cpc3-65211; seatrade-fleet |
| cold_before_after_handoff | cargo_cooling; vessel_operation | 声明保持前真实货物可用冷冻冷藏状态合同温度状态时间验收及向接收方下家承运真实冷链交接。纳入接收前真实服务负责准备测试预冷及责任移交前全部载货空载港口锚泊等候除霜清洗冷藏责任。货主产品预冷接收方仓储独立，除非真实本服务负责；供应方端口不能默默遗漏重复冷链。设定温度本身不证明货温或验收，运输不自动等于把温货冻结。 | unsd-cpc3-65211; ghg-product-2011 |
| whole_maritime_duty | vessel_operation; support_lifecycle | 纳入归属载货航行操纵进出港锚泊漂航等候靠泊压载空船调位设备返还启停怠速停留天气路线改道救援失败取消拒收及真实重交。港口码头装卸理货吊机拖轮引航转移冷插电按真实合同责任供应方范围归属。港费账单不证明某原生物理服务或内含资产生命。静止装卸等候及空船压载增加负荷而无货物周转输出。 | ghg-product-2011; epa-shore-power |
| ship_energy_cold_separation | vessel_operation; cargo_cooling | 按模式燃料记录真实主辅机锅炉发电机轴带取力余热电池岸供路径。按责任纳入制冷压机风机泵除霜控制气调及真实安全酒店船员支持负荷。船上发电转移供冷不再当另一外购交流电，共享发电真实分配一次。岸供纳真实上游电网接入转换损失及仍在船运行接断锅炉责任，不假定全生命周期为零。真实替代燃料逸出引燃油独立，不用统一发动机因子。 | epa-shore-power; imo-ghg3 |
| actual_refrigerant_cold_material | cargo_cooling | 识别真实制冷剂物质配方混合组分充注状态设备，含天然等其他制冷剂，不默认R134a。初始总成内含充注与另加补充回充回收复用泄漏退役互斥，回收留存或外运一次，不把全部充注当排放。相关时追踪真实冰干冰盐水二次冷媒气调物料及水融化废水放散废物原生介质碳源。冷藏气体货物排除不决定设备制冷剂，气调或冷量共产品仅按真实，不是必做货物干预。 | imo-ods; imo-ghg3 |
| cargo_custody_not_material_input | vessel_operation; cargo_cooling | 被运商品是保管对象而非制造运输消耗物料。不含原始商品生产，追踪接收验收交付损失损坏返还库存状态真实接收方。真实额外服务包装冰耗材及承运负责回收处理仍纳入，货物补货上游影响向下游商品模型一次披露。拒货不消除推进冷藏装卸负荷，也不自动把全部货物当排放废物。 | ghg-product-2011 |
| whole_vessel_cold_port_life | support_lifecycle | 本PCR生命周期选择纳入真实船舶船体推进、制冷绝热舱室冷藏单元、电池控制装卸设备及相关港口泊位岸电维修资产制造施工安装改装投产修理维护坞修更新更换退役循环。完整总成与内含初始部件充注互斥，制造不等于完整运行生命期。共享租赁租船既有资产保留真实原生供应方范围全用户使用量，不假定船龄寿命或资本负荷为零。 | ghg-product-2011 |
| actual_species_environment | 全部节点 | 每项尚未表示真实能源物料资产供应方废物直接物质须扩为一个真实节点方向类型具体row_id原生身份属性单位状态端口数量同节点协议来源真实接收方介质及不确定性。燃烧燃料甲烷逸出泄漏制冷剂及真实压载冷却污水舱底洗涤磨耗防污路径仅按实际考虑。逐化合物粒径碳源空气水土子介质区别总NOx/SOx/CO2当量收集废物回收库存，缺失为不完整而非零。 | ghg-product-2011; imo-ghg3 |

## 6. 过程清单结构

每张清单流卡仅代表一个可独立识别的产品、物料配方、废物流、物质或供应服务，具有兼容的端口、属性和单位。完整供应总成或实际收集的混合物流可有一个身份，其已含组分不得另列重复交换。第8节cp_expand_协议是必须落实的身份识别要求，不得当作选定流或交换数量。逐项记录真实适用性，以独立行标识列出全部具体交换；完整保留适用范围，未发生须有证据。尚未展开或未知的要求属于不完整，不得当作零。改为采集协议不等于解决缺失身份，也不免除生命周期、分配、计量或边界义务。

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| vessel_operation | 船舶航行能源及最终冷链交付 | required | 真实沿海远洋冷藏货运 | foreground | qualified_cold_sea_work |
| cargo_cooling | 货物冷链保持及保管接口 | required | 真实冷冻冷藏舱室责任 | foreground | qualified_cold_sea_work |
| support_lifecycle | 船舶冷藏设备港口及完整支持生命周期 | required | 真实应分配资产装卸供应方 | foreground | qualified_cold_sea_work |

全部节点关联唯一最终合格冷链运输周转分母。船舶推进内部发电供冷转移港口装卸保持为本服务组成，不另作最终货运输出。

### 过程：船舶航行能源及最终冷链交付 (`vessel_operation`)

#### 输入

##### 产品流

###### 柴油 (`actual_diesel_supply`)

仅条件真实配方兼容无供应方通用柴油身份。不能因名称或假定等价套用于船用轻重柴油残余燃油生物燃料，真实其他燃料另扩。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：质量 / kg
- 数量规则：真实兼容柴油供应分配 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65211`; `ghg-product-2011`

###### 交流电 (`shore_ac`)

仅兼容端口真实外部岸电冷藏港口服务交流电供应，具真实上游覆盖负荷。内部发电轴带输出不当外购交流电，已知独立直流保持独立。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：低位热值 / MJ
- 数量规则：真实声明端口外购交流电 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65211`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格沿海远洋冷藏货物运输周转服务 (`qualified_cold_sea_work`)

真实完整合格冷链海运周转，具商品温度端口载货区段功能，精确参考流UUID未解决，不能用通用船舶制造或被运商品代理。

- 选定流：合格沿海远洋冷藏货物运输周转服务
- 流属性/单位：质量*距离 / tkm
- 数量规则：1 tkm
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`method_formula`
- 采集协议：`cp_voyage`
- 来源：`unsd-cpc3-65211`; `ghg-product-2011`

##### 废物流

##### 基本流

###### 二氧化碳（化石源） (`fossil_co2_air`)

真实主辅机锅炉等负责来源氧化化石碳，不是生物碳或全部未燃燃料碳。已核实身份为空气未指明子介质，仅实际匹配时绑定；已知不同空气子介质须自身核实身份，不强改真实介质。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：真实化石CO2向空气排放 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65211`; `ghg-product-2011`

###### 甲烷 (化石源) (`fossil_methane_air`)

条件真实燃料罐管放散泄漏发动机逸出等化石甲烷，按来源实测或有据模型，不是液化天然气燃料质量或统一逸出比例。仅真实匹配时用已核实空气未指明身份，已知不同空气子介质须另核实身份。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：真实化石甲烷向空气排放 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：`unsd-cpc3-65211`; `ghg-product-2011`

### 过程：货物冷链保持及保管接口 (`cargo_cooling`)

#### 输入

##### 产品流

###### 制冷剂，R134a (`r134a_makeup`)

仅条件真实R134a配方，总成已含初始充注不再重复供应。其他制冷剂混合物须真实独立身份。

- 选定流：制冷剂，R134a `b33b6abf-6a88-4ec1-ab79-6aa5aac69e8a`
- 流属性/单位：质量 / kg
- 数量规则：真实独立供应兼容R134a / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65211`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

###### HFC-134a (`r134a_air`)

条件真实R134a泄漏维修退役释放，不是全部充注或回收物。已核实身份为空气未指明子介质，仅真实记录匹配时绑定；已知不同空气子介质须另核实身份，不强改介质。

- 选定流：HFC-134a `fe0acd60-3ddc-11dd-a6d2-0050c2490048`
- 流属性/单位：质量 / kg
- 数量规则：真实HFC-134a向空气释放 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_cold`
- 来源：`unsd-cpc3-65211`; `ghg-product-2011`

### 过程：船舶冷藏设备港口及完整支持生命周期 (`support_lifecycle`)

#### 输入

##### 产品流

###### 自来水 (`tap_water`)

仅兼容供应端口真实供应自来水，必要时补未含配送。海水压载原水取用其他工艺水须真实独立行，不用本产品流。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：质量 / kg
- 数量规则：真实自来水供应 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65211`; `ghg-product-2011`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 废润滑油 (`used_lubricating_oil`)

真实产生端口废润滑油，独立真实接收处理归属，不是全部燃油污泥含油舱底或泄漏货物。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：质量 / kg
- 数量规则：真实废润滑油产生 / T
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：`unsd-cpc3-65211`; `ghg-product-2011`

##### 基本流

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| causal_ship_cold_all_user | 全部节点 | 优先按船舶航段舱室单元货物制冷任务细分计量。共享推进辅机锅炉港口酒店冷藏负荷按全部冷藏其他用户有据质量阻力载荷空间热负荷时间容量驱动，须保留货温空间时序约束。吨公里参考不强制制冷推进同一分配键，经济替代须缺有据物理关系并做敏感性，同事件份额合一。 | ghg-product-2011 |
| empty_failed_and_output | 全部节点 | 先保留因果预冷空船压载调位等候港口救援拒收失败返程重交责任，再仅按正合格交付冷链周转T归一化一次。仅真实冷链验收交付货物份额一次贡献其载货物理区段，更新取送损失谱系，不沿全航次重复同质量。空设备皮重拒收缺失商品静态冷库预留运力无输出。真实独立合格返输须自身合同区段验收谱系，T=0无有限强度。 | ghg-product-2011 |
| life_period_site_ownership | 全部节点 | 逐真实原生资产生命事件数量按同组归属使用量 / 有据正全用户总使用量分配，再按T归一化。保留制造安装改装投产维护坞修更换退役及真实跨期库存事件，包括冷站初始充注可复用单元。兼容场址航次以归属原生数量和 / 兼容T和聚合，披露真实路线冷链设备差异，不对不同分母强度直接平均。既有租赁租船资产阶段须证据而非遗漏。 | ghg-product-2011 |
| provider_heat_recovery | 全部节点 | 外包船舶冷藏港口装卸支持生命服务保留原生功能单位端口及已含投入排放生命阶段，仅一次替代精确自营覆盖范围，明确保留未含份额。内部发电热冷再循环冷媒不是额外外部供应或最终产品。仅真实对外有用电热冷物料输出须记录接收方及细分或有据分配，不自动给冷量回收循环信用。收集外运废物制冷剂不同于环境释放。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_voyage | vessel_operation | 合格冷链海运周转保管 | 真实一手计量运单供应方记录 | 合同货物端口真实冷冻冷藏验收交接净质量皮重冷媒逐段取送损失船舶舱室单元航次航迹日志航海单位载货空载港口失败返程责任T不确定性 | 校准货物质量签署冷链保管记录关联真实载货区段距离，互斥验收份额失败负荷，不用船舶运力或集装箱数量 按参考计量口径汇总唯一且已验收的合格产出作为分母，单列不合格事件及其资源责任。参考量保持规定值，仅归属的清单总量除以正分母。 | 真实货物质量航海距离有据km换算；T用tkm | 逐事件及期间闭合 | 真实航次报告期间及关联冷藏资产生命阶段 | 真实船舶舱室港口锚地维修场及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_energy | vessel_operation | 真实船岸燃料能源直接物质 | 真实一手计量运单供应方记录 | 船舶发动机发电机锅炉轴带电池、燃料类型配方状态库存供应燃烧放散泄漏、真实主辅冷藏酒店港口模式小时计量、岸交流直流接入损失、燃料组成密度碳硫低位热值、真实直接化合物粒径来源介质不确定性 | 按真实路径模式闭合实测燃料能源，共享发电供冷及精确供应方覆盖仅一次；真实物种来源特定测量有据估计，不用统一船燃逸出系数 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 真实原生燃料能源物种单位；有据状态换算；关联清单行的报告单位：kg (actual_diesel_supply, fossil_co2_air, fossil_methane_air)；MJ (shore_ac) | 逐事件及期间闭合 | 真实航次报告期间及关联冷藏资产生命阶段 | 真实船舶舱室港口锚地维修场及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_cold | cargo_cooling | 真实制冷干预物料释放供应端口 | 真实一手计量运单供应方记录 | 货物前后温度状态时间、真实设温对传感器、预冷除霜等候交接、设备真实制冷剂配方组分充注、总成覆盖补充回收复用库存泄漏退役、冷媒冰气调状态去向、冷供应方原生范围数量 | 采用真实冷藏日志泄漏维修库存记录，共同互斥边界账逐真实物质介质，不重复共享船能源；检查端口质量供应方范围 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 真实温度时间原生物料物种供应方属性单位；关联清单行的报告单位：kg (r134a_makeup, r134a_air) | 逐事件及期间闭合 | 真实航次报告期间及关联冷藏资产生命阶段 | 真实船舶舱室港口锚地维修场及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_support | support_lifecycle | 真实供应资源废物环境去向 | 真实一手计量运单供应方记录 | 真实物料配方端口库存供应使用、水源取用循环排放状态、压载冷却酒店船员清洗维护事件、真实化合物原生数量、回收留存废物环境接收处理范围 | 真实投入匹配互斥去向原生状态介质，直接资源区别供应产品，处理区别环境越界，不虚构人体饮食代谢默认 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。各项独立实测交付、排放及移交按各自交接点记录，负担按其适用规则分配。 | 逐真实原生物料资源废物物种热单位；关联清单行的报告单位：kg (tap_water, used_lubricating_oil) | 逐事件及期间闭合 | 真实航次报告期间及关联冷藏资产生命阶段 | 真实船舶舱室港口锚地维修场及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_assets | support_lifecycle | 完整全用户船冷港口生命原生供应方 | 真实一手计量运单供应方记录 | 真实资产组次原生数量制造安装改装投产维护坞修更换退役事件、全用户使用量份额、内含初始部件充注、供应租船港口原生功能端口数量及覆盖投入排放生命范围 | 采用真实单据资产服务记录精确范围矩阵，同组有据生命分母全用户，不把制造等于生命或自动港费换算tkm 原始观测和对账总量保留其记录口径。负担行只分配仍共享的总量，已归属总量仅除以同队列、同交接点的正合格产出；已与该参考流等效的结果原值沿用。零产出时保留负担并记录去向。 | 逐真实原生总成事件服务单位兼容使用量 | 逐事件及期间闭合 | 真实航次报告期间及关联冷藏资产生命阶段 | 真实船舶舱室港口锚地维修场及供应方 | 每声明的参考流 | 签署记录；校准；原生来源；因果分配；不确定性保存各实测操作数的来源及原生口径，注明实际采用的换算或归属依据，以及所供结果是否已按该参考流计量。 |
| cp_expand_actual_marine_fuel | vessel_operation | 必须展开身份 actual_marine_fuel (inputs/product)：真实船用馏分或残余燃料配方 | collected_record | requirement_id=actual_marine_fuel; process_id=vessel_operation; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件逐真实船用轻柴油重柴油残余混合等级状态原生端口及实测密度硫碳低位热值扩展，不把全部船燃放一个UUID或用生产路线代理。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实船用馏分或残余燃料配方）。按该作业实际供应或提取的燃料启用。保留品级、收到状态、罐号或批次、接收、库存、内部移交、退回及实耗。客户所有或期初库存中的燃料提取保留供应责任，禁止重复记购入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 燃料按实测供应状态的属性与单位；能量当量使用相容热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核实燃料库存与实耗。仅以相容热值推算能量并记录热值来源和口径；仅凭收货不能确定燃烧量或排放量。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实燃料供应量 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_fuel_energy | vessel_operation | 必须展开身份 other_fuel_energy (inputs/product)：真实替代燃料外购直流热或其他能源 | collected_record | requirement_id=other_fuel_energy; process_id=vessel_operation; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; carrier_and_supply_state; meter_id; integrated_energy_or_power_time; fuel_as_received_quantity; heating_value_basis; supply_return_state; responsible_failure_and_readiness; complete_provider_exclusion; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实液化天然气甲醇氢氨生物等供应引燃油及直流热身份端口，不假定同时存在。液化天然气燃料蒸发气回收燃烧放散按互斥真实燃料库存物种账，不当液态气体货物输出。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实替代燃料外购直流热或其他能源）。存在未被完整供应方覆盖的实际计量电力、购入热冷或消耗燃料时启用。区分载能体、供应状态和独立仪表，燃料组成及收到基数量与有用热分别识别；积分能量不再乘时长，功率须有时间积分证据；燃料换能量须匹配实际热值基准，供热须有供回状态。纳入应分摊待机、空载、失败和返工职责；总表仅协调分项，不再次相加。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实测交付状态下的载能体量；能量采用有记录的仪表或热值口径 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 保留仪表期间、供应状态及交接点。积分能量已含时长；仅在对应路线由功率和实测时长，或相容燃料量与有据热值计算能量。区分燃料提取、有用热冷交付及已覆盖的上游阶段。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实外部能源燃料供应 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_vessel_species | vessel_operation | 必须展开身份 other_vessel_species (outputs/elementary)：真实其他船舶物质向声明介质排放 | collected_record | requirement_id=other_vessel_species; process_id=vessel_operation; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_energy; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 按真实化合物粒径相态碳源子介质扩真实燃烧放散颗粒及水土释放，收集洗涤舱底废物流不能全部当排放。不用CO2当量元素总硫或未定NOx代理已知化合物。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实其他船舶物质向声明介质排放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐互斥真实直接释放 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_energy；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_cold_materials | cargo_cooling | 必须展开身份 other_cold_materials (inputs/product)：真实其他制冷剂冷却介质或制冷气调物料 | collected_record | requirement_id=other_cold_materials; process_id=cargo_cooling; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_cold; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件按真实配方状态端口扩精确天然等制冷剂混合物盐水二次冷媒冰干冰气调气体。船舶供应已计制冷能源保留一次，不默认低温气体货物或替代项一个UUID。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实其他制冷剂冷却介质或制冷气调物料）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实独立供应物料 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_cold；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_external_cold_service | cargo_cooling | 必须展开身份 external_cold_service (inputs/product)：真实原生外部冷链保持服务 | collected_record | requirement_id=external_cold_service; process_id=cargo_cooling; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_cold; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 条件真实外部冷链接口具货况端口温度时间及覆盖能源制冷剂资产，仅一次替代精确已含自营范围，不假定货主产品预冷接收方独立冷库属此。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实原生外部冷链保持服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实冷链供应方数量 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_cold；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_cold_recovery_waste | cargo_cooling | 必须展开身份 cold_recovery_waste (outputs/waste)：真实回收废冷媒或制冷维护废物 | collected_record | requirement_id=cold_recovery_waste; process_id=cargo_cooling; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_cold; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件仅真实归为废物回收制冷剂盐水受污染融水部件，具产生端口组成接收方。可用回收冷媒期末库存复用产品外运区别废物处理环境。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（真实回收废冷媒或制冷维护废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥废物产生 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_cold；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_cold_species | cargo_cooling | 必须展开身份 other_cold_species (outputs/elementary)：真实其他制冷物质向声明介质释放 | collected_record | requirement_id=other_cold_species; process_id=cargo_cooling; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_cold; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实其他制冷剂组分冷媒组分气调干冰气体释放，具真实相态碳源空气水土子介质，不把全部冷媒库存当排放或重复混合组分。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实其他制冷物质向声明介质释放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实未回收释放 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_cold；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_ship_supplies | support_lifecycle | 必须展开身份 actual_ship_supplies (inputs/product)：真实船舶港口船员支持装卸供应 | collected_record | requirement_id=actual_ship_supplies; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; operation_record; material_sku; formulation_grade_state; independent_function; supplier; package_tare; opening_stock; net_receipts; unused_returns; closing_stock; failed_use; destination; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件逐真实润滑处理清洗防污化学品耗材新增包装垫材真实船员酒店供应，具身份配方端口。声明真实船员支持边界，不虚构人体代谢日常饮食因子或原始货物生产。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实船舶港口船员支持装卸供应）。仅对实际发生的所述作业及独立消耗SKU或实物启用。记录材料或配方、等级状态、功能、供应方、扣包装皮重后的净量、库存变动、未用退回和去向。独立供应的包装衬材按材料及一次性或复用状态区分；完整配方或物理总成保留一个身份，组成信息不相加，不同外购品不得共用汇总数量。纳入失败使用、维护及返工，记录真实消耗而非仅采购量。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实际品项、配方或物件在规定交接点及状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 逐批核对收货、期初期末、退回、耗用及互斥去向。件数或体积折质量须有单件质量或相容状态密度依据；产品身份以外的包装和衬材独立登记。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实归属供应物料 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_vessel_cold_port_assets | support_lifecycle | 必须展开身份 vessel_cold_port_assets (inputs/product)：真实船舶冷藏港口资产生命事件供应 | collected_record | requirement_id=vessel_cold_port_assets; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; asset_or_reusable_id; model_configuration; included_initial_components; lifecycle_phase; manufacture_native_quantity; target_duty; all_user_same_cohort_lifetime_duty; replacement_event; provider_coverage_cells; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; supply_or_service_gate; accepted_service_demand; provider_functional_unit; provider_intensity_basis; covered_lifecycle_stages | 逐真实完整总成及未含制造安装改装投产修理坞修更换退役事件具全用户使用量精确范围。船舶制造不是运输服务，初始内含部件充注互斥。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 对本项规定的实体资产或周转品，核实供应交接点、初始部件以及实际替换、维护、清洗、失败和退役记录。租赁或综合供应合同须核实覆盖范围；本项包含已交付服务时按实际验收的原生需求计量，仅另行追溯未覆盖的资产阶段。直接建模资产按同队列目标作业量与全用户有据正寿命作业量之比分配，禁止将整个设施归给一个服务。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 实体资产或周转品按已核实的制造或供应单位；同一队列的相容作业量；范围内的交付服务用其原生功能单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 实体资产按有记录的供应交接量乘目标作业量与同队列全用户正寿命作业量之比，保留配置、投运、更换及退役或剩余寿命记录。范围内如有已交付服务，按已核实原生强度乘相容交付需求，留存覆盖凭据，未覆盖阶段单列。 对该交接点相容的资产量或已独立核实的服务结果，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实全用户生命分配事件总成数量 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_native_provider | support_lifecycle | 必须展开身份 actual_native_provider (inputs/product)：真实原生船舶港口装卸支持服务 | collected_record | requirement_id=actual_native_provider; process_id=support_lifecycle; required_direction=inputs; required_flow_type=product; original_collection_protocol=cp_assets; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; provider_contract; independent_function; provider_gates; native_functional_unit; delivered_quantity; covered_process_phase_cells; uncovered_foreground_rows; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence; provider_functional_unit; accepted_service_demand; provider_intensity_basis; covered_service_stages | 条件真实外包承运租船港口拖轮引航码头维护废物处理功能及原生端口数量范围。不强制tkm或港费换算，已含自营能源直接生命范围仅替代一次。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/product 的身份与交接点（真实原生船舶港口装卸支持服务）。仅在本PCR范围内实际委托独立功能时启用。记录合同、交付服务功能、关口、原生功能单位、实际交付量及具体覆盖的过程和寿命阶段；逐项与自营活动比对，完整供应方或未覆盖前景活动仅计一次。不用金额、材料质量或假设件数替代真实功能；同一最终服务不通过外部最终产品供应方递归重复计入。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 已核实的合同交付功能单位；仅独立可计数且已验收的结果使用 Item(s) | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 按指定交接点实际验收量计量。仅在单位强度换算为总负担时，以供应方强度乘同一原生单位的需求量。保留合同范围、验收、原生单位及覆盖阶段记录。仅按时间交付的功能以时长计量。 对按合同口径已验收的服务，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：真实供应方原生数量 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_assets；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_water_resource | support_lifecycle | 必须展开身份 actual_water_resource (inputs/elementary)：真实直接取用水或其他资源 | collected_record | requirement_id=actual_water_resource; process_id=support_lifecycle; required_direction=inputs; required_flow_type=elementary; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; water_source_or_receiver; water_state; meter_period; treatment_owner; water_mass; mixture_volume; conversion_evidence; balance_residual; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实冷却压载处理海淡水取用或其他直接资源，具来源子介质。不用自来水产品UUID或把内部再循环水当新取用。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 inputs/elementary 的身份与交接点（真实直接取用水或其他资源）。仅对从规定来源实际取入系统的水启用，核实仪表或采样区间及处理责任方。购水和收集污水是不同交换；水组分质量与混合废水体积分别核对，仅在需要换算时使用有证据且状态相容的密度。平衡缺项保留为未解决残差，不假设蒸发或零值。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 按来源或接收介质及实测状态计量水质量或体积 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 核对环境交接点的取水或排放、相态与期间；质量体积换算须使用相容状态的实际密度。水组分与混合出水总量分别核算。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实直接资源取用 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_other_ship_port_waste | support_lifecycle | 必须展开身份 other_ship_port_waste (outputs/waste)：真实其他船舶港口维护废物 | collected_record | requirement_id=other_ship_port_waste; process_id=support_lifecycle; required_direction=outputs; required_flow_type=waste; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; waste_origin_event; material_or_true_mixture; moisture_basis; container_tare; opening_waste_stock; generated_waste; received_waste; handover_quantity; closing_waste_stock; onsite_treatment; receiver_id; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实舱底污泥洗涤残渣污水垃圾清洗坞修退役物按组成状态产生端口接收方。收集废物区别环境及回收可用库存，废物处理可能须独立供应方。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/waste 的身份与交接点（真实其他船舶港口维护废物）。本过程实际产生或接收所述废物时启用。记录材料或配方或真实共同收集混合物、干湿状态、容器皮重、来源事件、存量、交接关口及实际接收者；核对产生量+期初库存+接收量=交出量+期末库存+另列现场处理量。分收的不同废物分行，真实接收混合物可为一行，其组分仅作不可相加审计；有用回收、客户保留物与废物去向分开，不自动给替代抵扣。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 接收方验收的具体废物或实际混合收集物在实测状态下的原生数量 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 以接收记录核对产生、库存、场内处理和实测交付。混合物流量与组分测量分开；干湿基或质量体积换算须有相容组成或密度。接收转移和环境直排按不同交接点记录。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐真实互斥废物产生 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |
| cp_expand_actual_support_release | support_lifecycle | 必须展开身份 actual_support_release (outputs/elementary)：真实支持水土空气释放或相关热排放 | collected_record | requirement_id=actual_support_release; process_id=support_lifecycle; required_direction=outputs; required_flow_type=elementary; original_collection_protocol=cp_support; applicability_evidence; occurrence_event_id; concrete_row_id; physical_identity; formulation_or_species; phase; carbon_origin; particle_fraction; source_compartment; receiving_compartment; supply_or_handover_gate; provider_covered_cells; asset_component_event_and_lifecycle_phase; native_property; native_unit; measured_native_quantity; source_record_id; allocation_all_users; normalization_denominator; per_identity_amount_calculation; verification_evidence; unresolved_reason; occurrence_to_row_reconciliation; substance_identity; chemical_form; environmental_compartment; carbon_origin; particle_fraction_or_count_basis; measured_or_calculated_release; species_conversion_evidence; applicability_decision_record; covered_concrete_rows; excluded_occurrence_reason; completion_evidence; observed_quantity_state; conversion_or_allocation_evidence | 条件真实压载冷却热舱底污水清洗洗涤防污磨耗释放，具真实化合物介质状态原生数量，不把全部废物质量假定排放。相关时保留真实海水淡水子介质热基准，不假定零或统一排放系数。 本范围是必须落实的身份识别要求，不是交换流。使用原节点采集协议及其记录，先按真实身份、端口及独立功能拆分，再将保留的数量、基准及证据规则分别用于各兼容具体行。不得将异质身份合并数量或从总括名称推断原生属性单位。未发生须有证据，适用性或身份未知则阻止完成。 以下采集条件仅限本项 outputs/elementary 的身份与交接点（真实支持水土空气释放或相关热排放）。仅对进入已记录接收介质且有观测或适用计算依据的实际释放启用。记录具体物质及形态、来源或接收介质、适用的化石或生物碳来源、适用的粒径组分或粒子数粒径基础及采样期；保留元素与分子口径，换算须有化学计量和相容物种证据。收集物流中的污染物在实际环境排放边界前归接收物流，不用CO2、NOx、VOC、COD或泛颗粒物流代替缺失物种。 每项适用性判断须留证。经证实不发生仅关闭所述范围和时段，缺记录仍未解决。发生的要求须将全部事件映射到具体row ID及相容原生数量，或精确映射至已覆盖行和供应方责任，并逐项说明排除理由。证据须覆盖身份、支持单位、计算、原始记录及全部去向；既有与新增分支对同一事件互斥覆盖，协议本身不作为交换。完成须无未分配事件、无重复覆盖、无相关数量或身份未决项。按有证据的实际分支采集原始字段。不适用的操作数须关联分支判定，适用但缺乏实测或依据的数量登记待决。 | 本物质、资源或物理排放在实际环境介质的已核实原生属性与单位 | 每次真实事件及每项有证据的未发生判断 | 完整声明队列及归属资产寿命关联事件 | 仅本过程真实责任场所及供应方 | 先对账原生事件总量，仅汇总身份、状态、单位、交接点及期间均相容的量。按相应计算规则逐行核算一次：只分配仍共享的负担，目标总量仅除以同口径的正合格产出；等效每参考流数值原值沿用，零产出期间不作除法并保留处置记录。 | 采样或活动量及适用因子须对应物种、相态、来源和环境介质。按实际对象区分质量、粒子数、热量及元素当量；换算须有依据，重叠总量不可相加。 对上述具体身份及相容输入口径，仅在数量的归属和归一化状态与下式前提匹配时使用该规则：逐互斥真实环境释放 / T 保留原始凭据、实际采用的系数和结果单位。数值来源模式：calculated_value；适用范围：site_specific；归一化基准：每声明的参考流；基准类型：reference_flow；证据类型：calculated_from_collection；采集协议：cp_support；来源：unsd-cpc3-65211; ghg-product-2011。须有原始记录、精确原生支持及逐具体行核验；这些规则不提供缺失身份或数值。 完成判据：check_occurrence_completion。 |

### 计算规则

| rule_id | 适用于 | formula_or_rule | inputs | output | source_ids |
| --- | --- | --- | --- | --- | --- |
| delivered_cold_work | qualified_cold_sea_work | T = sum_i (逐i真实冷链验收交付质量t × 真实载货区段距离km)。逐合格份额物理区段仅计一次，更新真实取送损失，排除拒收留存皮重。真实航海记录用有据单位定义换算km。最终输出为1 tkm；有限强度须T > 0。 | 符合冷链验收要求的实际质量; 实载海运区段的实际距离; cp_voyage | T; qualified_cold_sea_work | unsd-cpc3-65211; ghg-product-2011 |
| exclusive_stock_refrigerant | 真实货物燃料冷媒物料账 | 逐守恒物质原生基准共同真实端口时间：期初 + 外部接收 = 期末 + 真实使用或验收交付 + 返还或回收外运 + 独立废物外运 + 直接环境损失 + 已记录残差。去向互斥。内部回收复用循环既非新外部接收也不另加外运使用，回收物只进真实期末、后续真实使用或一个外运去向。设备内充注与游离库存分开，总成已含初始充注不再作外部供应。燃料使用转入独立真实燃烧逸出放散碳账，不把全部燃料当CO2或CH4。按真实相态物种状态分损失回收废物环境，未知残差不强当空气或零。 | 期初、接收及期末; 互斥的实际使用、交付、退回、废物和环境去向; cp_energy; cp_cold; cp_support | 按互斥口径核对托管交接和物质库存 | ghg-product-2011 |
| energy_species_life_normalization | 全部真实清单行 | 逐真实原生事件数量q_j × 因果全用户份额s_j，同组资产份额为该阶段归属使用量 / 有据正全用户总使用量。保留真实载货空载港口预冷冷藏失败及未含完整生命供应方范围。主辅锅炉岸供能源归真实责任，不重复内部发电供冷为外购；真实直接物种采用来源特定测量或有据估计及碳去向闭合。q_row,ref = sum(q_row,attributable) / T，仅一次；兼容航次场址按数量和 / 兼容T和聚合。 | 实际事件的原生数量; 全用户因果或寿命份额; 供应方覆盖的具体环节; T | 每参考流的实际原生计量交换量 | ghg-product-2011 |

### 数据质量要求

| requirement_id | 适用于 | Requirement | evidence |
| --- | --- | --- | --- |
| cold_voyage_traceability | 参考保管保持 | 须真实合同接收交接校准净质量航迹区段证据及货温状态时间日志，不用设温TEU载重吨或假定成功交接。保留沿海远洋路线商品舱室因果失败空驶责任及逐负责冷链端口。 | 签署保管温度日志校准秤航迹单位真实责任图 |
| native_fate_quality | 真实投入直接废物供应方 | 须真实物料制冷剂燃料组成状态原生属性单位端口来源特定数量介质性能不确定性，各真实冷链港口水燃料资产供应方范围适配技术地域年份精确范围。不设统一货温船燃逸出泄漏充注生命或冷却水因子。 | 真实供应服务库存物种计量记录范围矩阵 |
| review_limits | 全部节点验证 | 保留真实全用户生命期间场址证据及独立兼容QA样本，同批最大值不能验证自身。缺数量精确身份为不完整，检查器通过后仍须科学审查及最终具体流绑定，候选未解身份不能声称发布准备。 | 证据登记独立比较明确未解清单不确定性 |

## 9. 验证规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| validate_scope_cold_output | 全部节点 | 验证冷冻冷藏专门舱室沿海远洋完整范围及65212液态气体货物排除、真实端口分类重叠独立合格净质量×载货区段功能。须全部5功能字段精确tkm原生t*km别名，不用仅集装箱通用商品船制造代理或皮重运力静止空载作输出。 | unsd-cpc3-65211; ghg-product-2011 |
| validate_preservation_and_energy | vessel_operation; cargo_cooling | 验证货物前后可用状态、负责时接收前真实预冷、冷链质量时间真实接收交接，纳入载货空载港口等候除霜失败冷藏。主辅锅炉岸供替代燃料及共享发电供冷归属仅闭合一次，不假定岸电零生命负荷或无剩余锅炉。须真实制冷剂配方状态子介质及服务冰气调去向。 | ghg-product-2011; epa-shore-power; imo-ods |
| validate_stock_life_provider | 全部节点 | 验证库存回收外运使用废物环境项互斥及总成已含初始充注部件，不把全部充注作排放或重复回收。须全部真实船冷港口维护坞修安装退役阶段、有据同组全用户生命使用量、精确原生供应方功能单位范围及保留未含负荷。制造租船费船龄本身不证明全生命周期服务。 | ghg-product-2011 |
| validate_quantities_and_identities | 全部节点 | 有限强度须正T，同事件因果份额合一、兼容原生分子T和及不重复归一化，保留失败零交付负荷。每最终具体流身份属性单位状态端口物种介质须核实，各真实条件交换扩展并有同节点协议。登记未解真实最终输出，缺失为不完整非零。中英结构化投影含全部规范规则协议计算。 | ghg-product-2011 |
| atomic_vessel_operation | vessel_operation | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_cargo_cooling | cargo_cooling | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| atomic_support_lifecycle | support_lifecycle | 拒绝将备选物料、独立供应资产服务、不同废物流、污染物种、碳源、相态、粒径或环境子介质合并成一个交换身份。本节点每项适用cp_expand_要求必须有发生或未发生记录及完整具体行清单，各行具有自身身份、端口、已核验UUID、原生属性单位、数量、原始记录、计算和唯一责任。供应方已含完整总成或真实收集混合物流仍按一个真实供应或收集身份，不虚构组分交换。不得将要求名称标识、NOx或VOC或PM总量、未明确的物理释放或异质清单绑定一个UUID。核对全部子行、原始事件、供应方已含单元及跨节点交接，不缺失当零、不重复计入。身份、适用性、数量或去向未知，均阻止完整前景包及最终TIDAS交换产出。PCR检查器不验证这些前景事实，须保留逐行证据供审查。 | ghg-product-2011 |
| check_occurrence_completion | 全部实际清单行和身份识别协议 | 保留适用性证据，将每个实际事件对应到具体清单行或已核实的供应方覆盖范围。判定未发生须有证据，未知项保留待决。按同一身份、状态、单位、期间和交接点核对期初、接收、期末及互斥去向。耗材领用账区分未用退回、内部领拨和合格、失败及返工作业的实际耗用。托管账或物料平衡采用期初库存＋外部接收＋配对内部接收＝期末库存＋配对内部发出＋对外交付且获接收的数量＋未用外退＋外送的已用物资或回收物＋外送废物＋直接排放＋本边界内消耗或转化量。身份在边界内生成时，将有证据的生成量或出生数计入该身份账的来源并关联原事件。在上层守恒物料或元素平衡中抵消内部转化和移交。每个事件只记一次，留存回收物计入期末，移交与耗用分别登记。按相容口径执行专用托管、相态、转化或元素规则；已作为转化量计入的物料，其后续产物不得再计入同一去向合计。独立计量各项，对未解释的差额追查并保留待决。实物总量与负担分配分别核算。共享原始负担采用 Q_raw × s / R，其中 s 为有证据的目标驱动量除以同池同期间全部适用用户的正驱动量总和。已归属的目标总量采用 Q_target / R，已与同一参考流等效的单位结果 q_ref 原值沿用。供应方单位强度先乘以按其原生单位实测的需求量。仅在另一个仍有共享负担的独立阶段另作分配。R 为同一队列、交接点和参考单位下的正值合格产出量。保留失败与部分完成作业的负担，禁止以此放大 R；零产出时保留负担及有证据的结转或最终处置。自有资产采用同队列全用户寿命作业量，并排除初始部件重复计算。外购服务仅替代有记录的覆盖阶段。适用的身份、数量、支持单位、去向或分配分母仍未决时，最终数据集仍不完整。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 具声明端口的真实沿海远洋冷藏运输投入，供商品供应链过程生命周期模型 |
| allowed_use | 兼容真实冷冻冷藏商品舱室端口路线冷链质量全用户船港供应方生命范围，兼容分子T加总并披露差异 |
| excluded_use | 液态气体货物内河模式、通用干货独立仓储资产制造或TEU运力代理、无据燃料冷链路线供应方平均 |
| required_metadata | 真实验收货物质量温度状态区段T船冷港端口主辅锅炉岸供燃料归属制冷剂库存去向全用户资产原生供应方及未知 |
| required_quality_disclosure | 来源计量温度航迹原生身份不确定性真实条件技术缺数量UUID及候选科学审查最终绑定限制 |
| update_trigger | 真实货物温度路线端口推进冷链燃料岸供港口技术资产生命供应方覆盖身份来源变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| unsd-cpc3-65211 | official_guidance | https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/65211 | 沿海远洋冷冻冷藏专门舱室完整范围及液态气体货物排除 |
| seatrade-fleet | official_guidance | https://www.seatrade.com/fleet/ ; https://www.seatrade.com/faq/which-vessel-types-does-seatrade-operate/ | 运营商示例专用冷藏与冷藏集装箱安排装卸设备并存，仅真实配置问题，不用船数规格规则 |
| epa-shore-power | official_guidance | https://www.epa.gov/ports-initiative/shore-power-technology-assessment-us-ports | 真实靠泊辅助制冷电网及仍用锅炉接断来源区分，不采用美国规则减排默认因子 |
| imo-ods | official_guidance | https://www.imo.org/en/ourwork/environment/pages/ozone-depleting-substances-%28ods%29-%E2%80%93-regulation-12.aspx | 真实制冷剂维修回充回收退役接收记录问题，不默认制冷剂或通用法律适用 |
| imo-ghg3 | official_guidance | https://www.imo.org/en/OurWork/Environment/Pages/Greenhouse-Gas-Studies-2014.aspx | 历史研究页面仅定性发动机燃料制冷剂物种活动分辨率背景，不用旧船队因子统计组成假定 |
| ghg-product-2011 | standard | https://ghgprotocol.org/sites/default/files/ghgp/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 一般边界分配质量原则，本PCR选择类别特定交付周转保管完整生命供应方方法 |

