---
pcr_id: pcr.other-land-passenger-transport-service
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他陆路旅客运输服务

## 1. 范围与适用性

本PCR覆盖完整真实城市或郊区其他未分类陆路旅客运输功能：定班缆索运营的缆索铁路、架空索道、滑雪升降及类似服务；其他未分类机械化陆地车辆提供的定班旅客运输；以及真实附驾驶人员非定班车辆提供的其他未分类陆路旅客运输。所有实际符合功能的机制均在范围内，即使没有示例卡或数值数据集。声明真实城市或郊区服务范围及地理责任，不借用其他子类的单城、相邻城市或任意距离条件。前两类要求定班，第三类是真实非定班附驾驶人员运输，不虚构班期。

其他未分类资格须有实际相邻功能审查记录：城市或郊区铁路、定班公共道路或有轨无轨电车、定班混合方式、特定使用者定班道路、出租车或非定班机场接驳、附驾驶人员乘用车出租、附操作人员人力畜力工具、本地客车包车、观光、水运及城际服务各有真实边界。尤其排除观光巴士。新技术、自动控制、缆索、车轮、休闲场所、预约方式或特殊车辆本身不证明剩余分类资格。真实资格未知会阻断数据完成，不能以此把完整PCR缩成仅缆索。

一个参考项是一名实际旅客完成一次独立定义且符合资格的运送，具有真实功能、起讫、内部停靠及返程边界、机制、质量、范围及时长或窗口。不强制实际服务具有相同距离、高差或时长。同一声明运送内的驱动、车辆及换乘节点、接合或中途登乘不新增最终产出。独立返程若是不同声明服务，须另有完成证据；已在一个输出内包含的返程不得再计。驾驶、运行及安全人员、车辆移动、提供座位、门票通票、可用时长及人距离是不同数量。空驶调位、等待、启动、待机、测试救援、失败或部分服务及必要支持保留因果负荷，N=0不能给出有限每项结果。

免费随行行李、动物和其他物品，以及运输已含且未另收费的导览、食品饮料和其他附带支持，均保留在实际运输内。逐项确定实际原生产品或供应服务、配方内容、质量和去向，不默认餐食或导游数量。休闲动机本身不使普通运输变成观光；以观光娱乐、度假区准入或待命为主的产品不得暗中换成完成人次运输。纯货运设施、无驾驶人员裸租或整车可用待命出租功能须另作产品判断。独立另售产出按实际细分分配。

纳入全部实际供应、来源牵引储能及辅助机制、站点路径场址工程、满空载回程、操作及支持责任、必要装备、维修磨耗释放、完整资产更新和退役，且仅一次。非缆索、驾驶人员及附带服务分支须用下文原生方法，不套用缆索因子。电力、可再生、下坡或自动化均不证明生命周期或非尾气负荷为零。不提供通用载客率、能源强度、寿命、载荷比例、mgh推算电需求、额定功率乘时间估计或避免替代方式收益。来源仅支持所声明背景；完整边界和真实采集方程是明确PCR选择。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-land-passenger-transport-service |
| classification_refs | CPC3.0 64119；实际功能资格审查后exact专属完整剩余范围 |
| covered_products | 真实城市或郊区定班缆索客运、其他定班机械化陆运n.e.c.、非定班附驾驶人员陆地客运n.e.c.，以及实际免费随行载荷和已含附带服务 |
| excluded_products | 属于相邻运输观光出租类别的真实功能，尤其观光巴士64132；纯货运、无驾驶人员裸租、以准入娱乐或待命为主及其他非运输功能 |
| representative_product | 已完成的城市或郊区其他陆路旅客运送 |
| production_route | 真实合格旅客完成；完整耦合缆索或其他实际机械附驾驶运动；原生能源储能辅助；场址附带人员支持；全部资产维修及去向 |
| market_state | 有真实完成及声明方式范围质量时间证据的实际合格旅客运输 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 符合资格的实际城市或郊区其他陆路客运，即定班缆索、其他定班机械化n.e.c.或非定班附驾驶人员n.e.c. |
| How much | 一名实际旅客完成一次独立声明且符合资格的运送 |
| How well | 真实剩余分类资格、操作驾驶责任、方式机制、起讫停靠返程、安全可达性、随行载荷及已含附带服务质量均有据 |
| How long or cycle | 真实声明运输范围及完成时长或窗口；运营支持期间及资产完整寿命另列 |
| reference_flow_link | completed_ride |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 已完成的城市或郊区其他陆路旅客运送 |
| 参考流属性 | 物品数量 `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | 物品数量单位 `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 实际城市或郊区范围及地理责任；剩余资格及相邻功能审查；定班缆索或其他定班机械化或非定班附驾驶；真实操作驾驶旅客角色；方式架构；起讫停靠内部变化返程边界；水平竖向距离；方向；实际范围质量可达性时长；完成及正实际旅客组N；期间季节；主要辅助待机救援能源储能；完整耦合驱动及车辆机制；载具必要装备；路径场址导向道路责任；免费随行载荷及真实附带服务；原生供应需求及准确覆盖单元；资产原装更换维修退役阶段；完整全用户寿命兼容活动；实际物种接收介质子区室及不确定性 |

N为同一独立定义服务范围及队列期间内实际合格完成人数。部分、失败及跨期活动先核对，再仅归一一次；车次、小时、载具数量或人公里不能直接换成该服务输出。必需限定进入实际数据，未知不代表零。

## 4. 计量与单位规则

| rule_id | Applies to | Required property | Required unit | Rule |
| --- | --- | --- | --- | --- |
| count_and_distance | all inventory rows | Native compatible property | Actual native unit | 真实计数乘客载具班次座位门票时长人距离保持区别；水平竖向几何不能改变计数参考。 |
| native_energy_mass | all inventory rows | Native compatible property | Actual native unit | 保留真实原生单位属性状态，兼容kWh可按3.6MJ/kWh换算，不是燃料热值。体质量碳氮化合物基准换算须有真实兼容证据。 |
| mode_and_composition | all inventory rows | Native compatible property | Actual native unit | 采用真实分支能源状态物质混合及交接点。燃料供应库存取用真实燃烧其他去向不同；整股混合加组分台账或替代组分投入须核对质量覆盖且互斥。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际合格运输功能、设施车辆、必要驾驶人员、服务完成、活动来源及供应记录和独立交接点 |
| starting_condition_role | 真实前景接口，不代表历史资产零负荷，也不允许遗漏上游 |
| product_classification_scope | 完整实际64119三类其他未分类陆地旅客功能，限6411城市或郊区情境，并作相邻功能审查；不限缆索，也不靠技术关键词划分 |
| recursive_input_rule | 完整同功能子服务仅替代有文件覆盖格，不递归新增完成乘段输出 |
| upstream_dataset_requirement | 供应资产供应方处理须有真实原生身份技术地域期间质量及阶段覆盖 |
| disclosure | 真实分支完成耦合能源全用户寿命期间附带内容边界及强制缺口 |

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| complete_service | other_land_service | 纳入全部实际合格缆索、其他定班机械化及非定班附驾驶活动，因果必要的上游供应、场址道路导向、真实载荷附带服务、人员支持、维修资本退役仅计一次。运行驾驶救援人员属于服务支持，不自动作为旅客产出。范围不完整不能称完整生命周期。 | unsd-cpc3-64119; cableway-lifecycle-2025 |
| aerial_branch | other_land_service | 实际架空吊厢吊椅分支须采集悬挂承载牵引张紧绳抱索载具空回塔架站内输送控制制动状态。吊厢和吊椅是不同供货组件。 | cableway-subsystems-2016 |
| funicular_branch | other_land_service | 实际缆索铁路及导向绳牵引分支须保留轨道导向车轮支承绳连接轨道制动及真实磨耗去向。耦合车辆配重属于真实共同驱动边界，不默认下行独立零或负负荷。 | cableway-subsystems-2016 |
| surface_tow_branch | other_land_service | 实际地面滑雪拖牵须证明准备轨道拖具及装备适合乘客的接合完成；真实必要整备造雪水添加剂土地支持须归属采集，不能加入全部度假区滑雪，也不能假设这些作业不存在。必要滑雪板连接装备须明确服务供应或个人责任，并论证物理必要装备生命周期边界，所有权不能单独成为零负荷规则。真实辅助人力动物任务或机制须评估自身物理来源及护理责任；以人力畜力运送为主的功能须审查实际相邻分类。 | cableway-subsystems-2016 |
| energy_recovery | other_land_service | 采用真实计量完整耦合驱动能量及模式记录，区分总输入输出储能损失制动耗散及内部回收。重力配重贡献不是未计量电产品；外送仅按兼容原生质量表达一次，不重复冲减抵扣。 | ghg-product-2011 |
| provider_and_asset_gate | other_land_service | 制造供应安装使用维修更新退役每格仅指定一个兼容供应结果或前景责任。原生供应强度q_u先乘真实兼容需求A_u和有据旅客组或全用户份额，再仅除正N一次。供应小时、车公里、人公里或车次不是完成人次；只有已准确等效一个完整声明参考的供应结果才不再归一。准确覆盖单元仅替代相应前景单元。整套设施车辆与原装更换组件不能重叠。实际制造交付原生数量按同一物理资产同群、兼容正完整全用户有效活动份额分摊后/N；制造身份不能转为全寿命运输结果，未覆盖阶段分别补齐。 | ghg-product-2011 |
| incidental_inclusions | other_land_service | 真实运输服务附带且不另收费的随行行李动物物品及导览食品仍属于交付服务。度假区准入娱乐观光体验和待命是不同履约对象，不暗中换算为完成乘段。 | unsd-cpc3-64119 |
| other_mechanized_branch | other_land_service | 每项实际合格非缆索定班机械服务记录设施车辆配置、路径控制、导向道路支承接触、主辅驱动和真实运行状态。自走车辆与中央耦合驱动分开，完整系统总输入、内部转移储能、空返待机启动测试救援、外送质量及全部用户仅计一次。轮胎车轮轨道齿轨接触、直线电机初级线圈反应板、悬浮导向控制及其他真实机制保留自身原生资产、来源能源、维修磨耗及接收去向。直线电机不等于悬浮或零接触磨耗。技术个案仅提供物理接口问题，不证明实际服务属于该类别。缺实际数量身份阻断数据完成，不排除实际机制。 | land-native-mechanisms |
| nonscheduled_driver_branch | other_land_service | 真实非定班附驾驶人员n.e.c.旅客交付采集接受的起讫范围时间质量与旅客完成、实际调度车辆驾驶、满空调位、等待怠速交通、中断返程回收及专用驾驶支持。保留全部因果资源和所有使用者，包括无产出活动；付费时长、车辆出租、调度次数和额定座位不证明完成人次。实际滚动导向接触驱动辅助装备及能源燃料、充电加油、调温可达性、维修和处置按原生交接点识别，不默认缆索能源或把固定源因子用于道路移动。驾驶人员普通维生代谢按明确边界惯例及敏感性处理，不是物理零，也不虚构劳务燃料；实际工作专用食物安全及业务支持仍须评估。 | unsd-cpc3-64119; ipcc-mobile-2006 |
| actual_source_storage_cooling | other_land_service | 每项实际燃烧、电力电池、燃料电池、磁力机械或其他来源保留交付状态技术、变流充放电储能损失及辅助调温责任。内部牵引电和回收能不能再作购入投入。真实燃料氧化剂电池制冷剂低温介质供应、化合物及来源特定空气水土磨耗事件各自需要原生行和证据；燃料电池水蒸气不自动成为收集废物。若整机制造未含而独立建模初始电池设备或低温介质初装，则按真实长期资产库存交付点及兼容完整全用户寿命归属，保留存量回收去向。当期补充更换按实际期间库存使用去向及因果份额，不把全部初装当维修消耗；内部循环再冷凝转移留存不是新增消耗。mgh、额定功率或载荷比例不能替代真实源计量或有独立证据和不确定性的实际运行模型。 | ghg-product-2011 |

## 6. 过程清单结构

### 过程图

| process_id | process_name | inclusion | inclusion_condition | role | quantitative_reference |
| --- | --- | --- | --- | --- | --- |
| other_land_service | 合格其他陆路旅客交付及归属完整生命周期 | required | 每项实际声明合格64119服务类别 | reference_process | completed_ride |

### 过程：合格其他陆路旅客交付及归属完整生命周期 (`other_land_service`)

#### 输入

##### 产品流

###### 真实兼容驱动供电交接点的交流电 (`drive_ac`)

实际适用缆索或其他合格机制中，跨越声明来源驱动变压变流交接点的交流电。记录同边界变流充电及储能损失；电机侧直流和内部回用储存再生能不是另一笔购入供应。完整耦合来源数量仅向实际用户分配一次，不能按每载具驱动节点重复。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / MJ
- 数量规则：attributed_drive_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：cableway-lifecycle-2025

###### 实际非驱动站房交流电 (`terminal_ac`)

真实站房照明、控制、乘客处理、调温或必要维修用电，先排除驱动交接点及供应方覆盖。真正共用设施须向全部实际使用者分配。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / MJ
- 数量规则：attributed_uncovered_terminal_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：cableway-subsystems-2016

###### 实际兼容来源的柴油 (`diesel_supply`)

仅适用于真实兼容的固定原动机、备用救援发电或实际兼容移动活动柴油。固定与移动来源活动模型保持独立。交付牌号混合物、净供应或库存调整领用、实际燃烧洒漏回收及供应责任不同；带来源台账的整股混合与替代同一覆盖的组分供应互斥。不默认发生、热值或碳及非CO2因子。

- 选定流：柴油 `9d258d75-6792-4f1c-9856-81602ed8f816`
- 流属性/单位：Mass / kg
- 数量规则：attributed_diesel_net_withdrawal_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ipcc-stationary-2006; ipcc-mobile-2006

###### 实际矿物润滑油供应 (`mineral_lube_oil`)

仅适用于有文件齿轮箱轴承或润滑作业使用的兼容矿物油。润滑脂、合成油、其他配方化学品须分别识别，领用量不能自动等于泄漏或废油量。

- 选定流：矿物润滑油
- 流属性/单位：Mass / kg
- 数量规则：attributed_supplied_mineral_oil_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_maintenance`
- 来源：cableway-subsystems-2016

###### 实际供应自来水 (`tap_water`)

仅表示质量状态匹配的自来水，不是直接环境取水、回用水或默认造雪供应。体积换算前须核实兼容属性状态，独立识别真实废水、蒸发及留存水。

- 选定流：自来水 `d1e0e36c-07f0-4a75-bdcb-efb5d9e2ac36`
- 流属性/单位：Mass / kg
- 数量规则：attributed_tap_water_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_support`
- 来源：ghg-product-2011

###### 实际钢丝绳制造需求 (`steel_wire_rope`)

仅适用于明确结构镀层润滑及牵引承载张紧角色的真实成品钢丝绳。钢丝或原钢不是成品组件。初始更换绳索与完整设施供应不得重叠；仅制造数量不含使用或处置。

- 选定流：交付的索道成品钢丝绳
- 流属性/单位：Mass / kg
- 数量规则：attributed_delivered_steel_wire_rope_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：cableway-subsystems-2016

###### 实际完整电驱动电机供货 (`electric_motor`)

仅适用于真实完整电机配置及制造交接点。记录额定控制技术及整机设施覆盖；通用功率电量、电机部件或全寿命运输结果不能充当完整电机供货。其他驱动须独立记录。

- 选定流：交付的完整索道驱动电机
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_complete_motor_supply_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：cableway-subsystems-2016

###### 实际完整架空乘客吊厢供货 (`aerial_cabin`)

仅适用于架空吊厢分支，明确真实吊厢悬挂抱索覆盖及制造交接点。本行不是完整索道；吊椅缆索车及拖牵装置是不同组件，不是本行别名。

- 选定流：交付的完整架空索道乘客吊厢
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_complete_aerial_cabin_supply_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：cableway-subsystems-2016

###### 实际完整缆索铁路客车供货 (`funicular_car`)

仅适用于绳索牵引导向轨道分支，明确车轮轨道制动及绳索连接覆盖。不得沿用动力铁路车或架空吊厢 UUID。轨道土建若未明确包含，仍须独立承担。

- 选定流：交付的完整缆索铁路客车
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_complete_funicular_car_supply_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：cableway-subsystems-2016

###### 实际完整架空吊椅供货 (`chair_carrier`)

仅适用于实际吊椅分支，明确座椅组件吊架抱索及防护覆盖。吊椅数或提供座位数不能证明已完成人数，固定与脱挂配置须保留真实组件和维修。

- 选定流：交付的完整架空索道吊椅载具
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_complete_chair_supply_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：cableway-subsystems-2016

###### 实际完整盘式拖牵吊具供货 (`platter_tow_device`)

仅适用于地面拖牵分支实际完整盘式拖牵组件。T形杆及其他装置须各自识别。吊具数不是人数，准备轨道及必要兼容滑行装备须明确真实责任及生命周期边界。

- 选定流：交付的完整地面拖牵索道盘式吊具
- 流属性/单位：Number of items / Item(s)
- 数量规则：attributed_complete_platter_hanger_supply_items / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_assets`
- 来源：cableway-subsystems-2016

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已完成的城市或郊区其他陆路旅客运送 (`completed_ride`)

一名实际旅客完成独立声明且合格的城市或郊区其他陆路运送。确立真实定班缆索、其他定班机械n.e.c.或非定班附驾驶n.e.c.功能、起讫停靠返程边界、方式范围质量时间及真实附带服务。同一声明输出内车辆区段驱动及换乘节点不新增最终完成。提供座位、门票、准入待命及人距离保持区别；仅独立定义且实际完成的返程才是另一服务。

- 选定流：已完成的城市或郊区其他陆路旅客运送
- 流属性/单位：Number of items / Item(s)
- 数量规则：1 Item(s)
- 数值来源模式：`fixed_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_rides`
- 来源：unsd-cpc3-64119

###### 实际向边界外输出的再生交流电 (`export_ac`)

仅适用于总输入独立输出核算中，单独计量跨越声明边界的兼容交流电。重力配重辅助、内部回用、直流储能或避免购电不自动成为本产品。同一回收不得既减少净购电又重复取得外送信用。

- 选定流：交流电 `455f0ef5-6118-4f2b-a3f5-1f75e0afe3ca`
- 流属性/单位：Energy / MJ
- 数量规则：attributed_external_regenerated_AC_MJ / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_energy`
- 来源：ghg-product-2011

##### 废物流

###### 实际独立收集的废矿物润滑油 (`spent_mineral_oil`)

仅表示处理前产生端实际独立收集的废矿物润滑油，记录污染物水皮重及接收方；不能替代含油水吸附物回收燃料或处理结果，实质不同合收混合物须另有身份。

- 选定流：废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位：Mass / kg
- 数量规则：attributed_collected_spent_mineral_oil_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fates`
- 来源：ghg-product-2011

###### 实际收集的维修清洗废水 (`wash_wastewater`)

仅表示组分及接收交接点有证据的实际独立收集水流。直接排放须按真实物质介质表达，不是本废物；进水量不能直接确定废水及溶质质量，处理和收集运输须独立界定。

- 选定流：收集的索道维修清洗废水
- 流属性/单位：Mass / kg
- 数量规则：attributed_collected_wash_wastewater_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fates`
- 来源：ghg-product-2011

###### 实际收集的退役钢丝绳 (`retired_steel_rope`)

真实整条退役绳索在产生移交端的物料，须计量金属镀层润滑及污染状态，不是洁净原钢废料、处理或磨耗颗粒。区分回收产品废物状态及接收方，不默认再生信用。

- 选定流：收集的含留存润滑剂报废钢丝绳
- 流属性/单位：Mass / kg
- 数量规则：attributed_collected_retired_steel_rope_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_fates`
- 来源：cableway-subsystems-2016

##### 基本流

###### 实际向空气释放的化石CO2 (`fossil_co2_air`)

仅表示有独立燃烧来源活动及兼容空气子区室支持的真实直接化石CO2质量。电网发电排放由其供应方承担，不是本地尾气；生物碳及其他来源独立识别，不能由CO2当量结果直接生成物种质量。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得删去已知城市/非城市或近地面信息以套用；状态已知时须另建经核实兼容身份的独立行，且不重复计入。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_fossil_CO2_air_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-stationary-2006; ipcc-mobile-2006

###### 实际向空气释放的化石CH4 (`fossil_ch4_air`)

仅表示此真实物质来源及空气状态，必须有兼容监测或另有依据的技术活动模型；其他烃类、生物甲烷或油损不得默认归入本身份，也不得默认零。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得删去已知城市/非城市或近地面信息以套用；状态已知时须另建经核实兼容身份的独立行，且不重复计入。

- 选定流：甲烷 (化石源) `08a91e70-3ddc-11dd-9610-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_fossil_CH4_air_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-stationary-2006; ipcc-mobile-2006

###### 实际向空气释放的N2O (`n2o_air`)

表示兼容空气子区室中真实kgN2O，不是kgN、通用NOx或CO2当量。必须证明实际来源技术适用，此处不提供因子，也不暗中沿用换算。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得删去已知城市/非城市或近地面信息以套用；状态已知时须另建经核实兼容身份的独立行，且不重复计入。

- 选定流：一氧化二氮 `08a91e70-3ddc-11dd-94c3-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_N2O_air_kg / N
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每声明的参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_emissions`
- 来源：ipcc-stationary-2006; ipcc-mobile-2006

###### 实际向空气释放的PM2.5 (`pm25_air`)

仅表示实际独立计量的粒径来源及空气状态，包括适用驱动支持燃烧或机械磨耗。PM10及总颗粒物重叠部分不能重复计入，截留粉尘绳轨轮碎屑沉积及径流须有真实独立去向。

本UUID仅在真实记录明确且有理由保留“排向空气，未特指”子区室时适用。不得删去已知城市/非城市或近地面信息以套用；状态已知时须另建经核实兼容身份的独立行，且不重复计入。

- 选定流：颗粒物 (PM2.5) `08a91e70-3ddc-11dd-9293-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：attributed_PM2_5_air_kg / N
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
| subdivide_first | other_land_service | 先细分专属作业供应方，再分配剩余共用量。无法避免共用时记录真实物理原因完整兼容全用户分母及敏感性，不默认座位运力票价比例。 | ghg-product-2011 |
| coupled_drive_users | other_land_service | 以有据工程活动驱动及全部真实使用者向方向服务队列分配实测共同驱动支持，保留非线性载荷配重空回行为。仅人公里竖向mgh额定流量不能证明电耗。N=0不形成有限人均结果，零产出作业仍留在其因果池。 | ghg-product-2011 |
| capital_life | other_land_service | 同一供货资产组件的实际制造数量按队列作业/兼容正全寿命作业分给全部使用者期间季节及迁移使用，再归一化一次。初建更新是不同事件，宣传年限或财务折旧不能代替物理寿命。 | ghg-product-2011 |
| other_outputs | other_land_service | 真正另行输出的货物餐食导览包或其他产品保留真实原生功能，先细分再论证剩余因果比例。不能把人次货物千克导游食品票款按等价产出相加，已包含附带物不构造共产品。 | ghg-product-2011 |
| recovery | other_land_service | 记录真实回收废物去向范围，不默认避免公交电网原生材料信用。内部回用电燃料材料不是另一笔原生输入或外送，采用单一披露循环分配方法并保留必要物理交换。 | ghg-product-2011 |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_rides | other_land_service | completed_ride | ride_completion_record | installation_id; actual_mode; cohort_id; origin_destination; horizontal_vertical_distance; direction; ride_id; boarding_engagement; alighting_disengagement; actual_persons; crew_role; completion; ticket_pass_reconciliation; season_period; sampling_uncertainty;actual_urban_suburban_extent;residual_function_neighbor_decision;scheduled_or_nonscheduled_withdriver;actual_driver_operator_roles;declared_extent_quality_time;internal_leg_return_output_scope | 用载具调度闸机记录及有依据抽样核对真实上车接合与完成证据，每名真实完成乘客仅计一次。通票提供位置、吊厢吊椅拖牵循环或度假区访问不能证明N。保留部分失败救援乘段及负荷，返程须独立证明完成。 剩余资格前先记录实际相邻功能排除。只记录真实城市或郊区范围责任，不借城市相邻门槛。计数前定义一致旅客运送；已含内部节点换车返程不新增最终产出。真实旅客完成与驾驶操作人员角色及仅可用待命功能分开。 | Item(s); actual m/km; time | 每次作业及期间寿命接口 | 同一队列完整期间及必要全寿命 | 真实合格设施车辆来源附带服务及全部相关用户，含缆索非缆索非定班实际责任 | 每声明的参考流 | 真实记录校准平衡范围及不确定性 |
| cp_energy | other_land_service | drive_ac; diesel_supply; export_ac | coupled_drive_meter_stock_record | installation_id; architecture; gross_AC_import; export_AC; voltage_gate; converter_losses; storage_change; internal_regeneration; brake_dissipation; counterweight; loads_both_directions; empty_carriers; startup; standby; weather_shutdown; test_retrieval; fuel_blend; supply_stock_withdrawal_burn_spill_recovery_transfer; shared_owner;actual_cable_or_other_mechanism;vehicle_id;source_gate;mobile_or_stationary;charging_discharge_loss;HVAC_auxiliary;alluser_coupled_pool;actual_model_evidence | 按作业模式计量完整耦合驱动及真实站房接口，保留满空载回程、启动、待机、天气停运、测试及应急回收。分配前记录双向及全部队列；下降载荷或重力辅助不能证明某个独立服务免费或负负荷。区分总输入输出、内部回收及损失。兼容边界内燃料净取用=期初+接收-期末-退回，分别核对真实燃烧溢洒回收转移。采用兼容整股混合燃料加组分碳源台账，或替代其覆盖的组分供应，不得两者并计。直接排放仅由有据燃烧驱动，不假设供应即燃烧。归属原生数量仅除以同一N一次。 非缆索自走或中央驱动实际运行须按来源及全用户计量或独立建模真实来源充放电储能辅助损失、行驶空驶怠速交通待机测试救援，再分配。保留真实电机导向控制冷却及燃料电池或其他调质供应；内部源电及回收不能再购入。不以mgh、额定功率或负荷比例替代有支持的实际运营证据。 | MJ; kWh; kg; actual fuel volume with supported state; time; actual load | 每次作业及期间寿命接口 | 同一队列完整期间及必要全寿命 | 真实合格设施车辆来源附带服务及全部相关用户，含缆索非缆索非定班实际责任 | 每声明的参考流 | 真实记录校准平衡范围及不确定性 |
| cp_support | other_land_service | terminal_ac; tap_water | support_site_boundary_record | site_id; complete_provider_cells; actual_meter_and_water; drive_gate_overlap; conditioning; control; terminal_handling; land_occupation_transformation; path_geometry; construction_transport; shared_users; actual_driver;vehicle_guideway_road_site;free_accompanying_loads;actual_driver_dedicated_support;provider_q_u;native_demand_A_u;cohort_alluser_share | 计量真实支持数量并逐项确定场址供应方交接点，识别土建基础塔架站房轨道拖牵走廊临时安装及维修救援支持。先细分专属服务，再按有证据兼容全使用者驱动分配实测共用余量。造雪整备装备及土地影响仅在真实分支适用并各自识别数量；不能加入全部度假区活动，也不能默认索道负荷零。归属原生数量/N。 除缆索路径外，记录真实非缆索道路导向接触站点场站及驾驶可达性调温支持责任，保留真实已含导览食品随行载荷。每项原生供应q_u乘真实兼容A_u及有据旅客组全用户份额再/N一次；仅一个完整参考等效结果不再归一。先匹配准确覆盖格再替代前景。 | MJ; kg; actual area/time; native provider units | 每次作业及期间寿命接口 | 同一队列完整期间及必要全寿命 | 真实合格设施车辆来源附带服务及全部相关用户，含缆索非缆索非定班实际责任 | 每声明的参考流 | 真实记录校准平衡范围及不确定性 |
| cp_maintenance | other_land_service | mineral_lube_oil | maintenance_component_balance | installation_component; task; actual_formulation; oil_stock_issues_recovery_losses; replaced_parts; rope_coating_lubrication; brake_rail_wheel_wear; coolant_refrigerant; provider_scope; actual_fate;actual_all_mechanisms;tyre_rail_wheel_rack_coil_reaction_guide_contactwear;source_storage_cooling_stock;initial_inventory_vs_period_topup | 使用真实工单配方证明及组件流体平衡，分别记录新供回用回收废物和直接物种；油领用不能证明泄漏或废油。逐项识别真实润滑脂化学品电池制冷剂制动抱索滚轮轨道组件及更新周期，形成真实原子记录。完整维修结果仅替代其覆盖供应排放一次。归属实际作业数量/N。 实际非缆索驱动轮胎车轮轨道齿轨线圈反应板悬浮接触控制储能冷却须读真实维修库存及实测来源接收磨耗，不因驱动标签推零磨耗。供应更换回收、污染沉积径流空气水土和废物独立区分。整套供应未含的初始长期低温介质电池设备存量按原生交付寿命点分配，保留回收；期间真实补充使用去向独立，循环再冷凝留存不是新增供应。 | kg; actual component quantities | 每次作业及期间寿命接口 | 同一队列完整期间及必要全寿命 | 真实合格设施车辆来源附带服务及全部相关用户，含缆索非缆索非定班实际责任 | 每声明的参考流 | 真实记录校准平衡范围及不确定性 |
| cp_assets | other_land_service | steel_wire_rope; electric_motor; aerial_cabin; funicular_car; chair_carrier; platter_tow_device | complete_installation_life_register | asset_id; actual_mode; native_delivered_quantity; manufacturing_gate; initial_component_inclusion; construction_installation; replacements; all_life_duty; cohort_duty; all_users_periods; relocation_reuse; retirement; uncertainty;whole_vehicle_or_installation;guideway_contact_drive_control_auxiliary;manufacture_only_gate;source_storage_cooling_initial_inventory;native_cohort_wholelife_duty | 补齐完整设施及所需分支装备台账，不限于示例卡。同一物理资产的真实制造供货数量乘队列作业/兼容且为正的全寿命全使用者作业，再/N。完整设施供应与其初始组件清单互斥，未覆盖更换运行维修安装迁移及退役处理独立加入。制造UUID仅表达真实供货范围，不是全寿命运输。财务折旧额定运力及宣传寿命不能代替物理有效作业。 每项实际非缆索车辆导向接触驱动控制来源储能辅助场址资产，须记录原生制造及独立覆盖安装更新维修退役阶段；同一物理同群的完整全用户有效活动和独立原生数量必需。缆索组件示例不能限制必要资产台账。 | kg; Item(s); actual duty units | 每次作业及期间寿命接口 | 同一队列完整期间及必要全寿命 | 真实合格设施车辆来源附带服务及全部相关用户，含缆索非缆索非定班实际责任 | 每声明的参考流 | 真实记录校准平衡范围及不确定性 |
| cp_fates | other_land_service | spent_mineral_oil; wash_wastewater; retired_steel_rope | individual_stream_receiver_record | stream_id; actual_mixture_state; native_weight; water_contaminants; stock_change; waste_product_status; source_medium; receiver_gate; collection_transport; treatment_scope | 独立称量表征每股真实流，保留接收及处理证据；核对供给库存回收物理残余和直接释放，不构造余量混合物。产品回收废物移交收集运输及处理是不同责任，整机组件废物不得重复。工厂混合UUID或洁净废料身份不能替代不匹配产生端的含污染绳索。独立去向原生数量/N。 | kg; actual receiver units | 每次作业及期间寿命接口 | 同一队列完整期间及必要全寿命 | 真实设施及全部相关使用者 | 每声明的参考流 | 真实记录校准平衡范围及不确定性 |
| cp_emissions | other_land_service | fossil_co2_air; fossil_ch4_air; n2o_air; pm25_air | source_species_medium_record | source_id; stationary_or_mobile; actual_technology; duty; actual_burned_fuel; measured_species_mass; model_source_version_unit; carbon_nitrogen_basis; size_class; medium_subcompartment; overlap; uncertainty;actual_mobile_or_stationary_technology;charge_cooling_fuelcell_or_other_source;actual_compound_size_origin_medium;uncaptured_wear_deposition_runoff | 使用兼容实测或来源技术活动均充分支持的模型，记录真实化学基准及受纳子区室。固定来源方法不能自动作为道路移动因子，反之亦然。保留其他真实燃料来源、燃烧机械磨耗制冷剂水土径流物种及未表征释放，不能由CO2当量或投入库存差额生成物种。不重叠归属物种数量之和/N。 真实移动固定、燃料电池、冷却储能接触及其他来源分别需要适用物种模型实测、实际活动化学来源基准和接收方。国家道路燃料售出或完全氧化惯例不等于现场燃烧或完整物种分解；不转移缆索固定移动默认因子，保留已知接收子区室。 | kg of each species; size/medium-specific native units | 每次作业及期间寿命接口 | 同一队列完整期间及必要全寿命 | 真实合格设施车辆来源附带服务及全部相关用户，含缆索非缆索非定班实际责任 | 每声明的参考流 | 真实记录校准平衡范围及不确定性 |
| cp_incidentals | other_land_service | completed_ride | actual_transport_bundle_record | actual_service_contract; included_guides_food_drink; actual_item_provider_formulation_quantity; guide_support; separately_charged_outputs; coverage_cells; completion_link;actual_free_luggage_animals_items;actual_native_provider_intensity;actual_compatible_demand;provider_coverage_matrix | 确定真实运输交付包；无另收费随行物动物导览食品饮料如属于服务须保留，逐项识别必要具体食品材料供应方及支持的原生数量范围。不默认餐食导游小时或配方。完整附带服务仅替代其覆盖组成，另收费产品按实际细分分配；已包含内容未知会阻断完整服务包使用。 实际免费随行行李动物物品影响兼容实测运输支持需求，不新增票价或旅客产出；随行动物不默认提供牵引。原生附带服务供应q_u按真实兼容A_u乘旅客组份额/N，并只替代准确已含配方材料支持去向单元。真实内容或原生需求未知阻断完成。 | actual item/material/provider native units | 每次作业及期间寿命接口 | 同一队列完整期间及必要全寿命 | 真实合格设施车辆来源附带服务及全部相关用户，含缆索非缆索非定班实际责任 | 每声明的参考流 | 真实记录校准平衡范围及不确定性 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| normalize_actual | other_land_service | 实际物理数量按兼容旅客组全用户份额归属，再仅除正N一次。原生供应强度q_u先乘真实兼容需求A_u和有据份额再/N；小时车次动物日人距离不能等同人次服务。仅已完全等效一个完整声明参考的供应结果不再归一，准确已含格仅替代前景一次。 | cp_rides; cp_energy; cp_support; cp_maintenance; cp_fates; cp_emissions; cp_incidentals | 归属原生数量每参考流 | ghg-product-2011 |
| asset_duty | other_land_service | 交付制造数量乘同资产队列作业/兼容正全寿命全用户作业，再/N，寿命仅分配真实供货范围。未覆盖安装运行维修退役及组件更换独立承担。 | cp_assets | 归属原生数量每参考流 | ghg-product-2011 |
| coupled_energy | other_land_service | 先采用完整共同驱动实测量及真实作业工程证据，再按因果划分队列。内部回收改变实测需求，不新增产品。外送按独立真实总量交接点计，不假设配重载客速度比例。 | cp_energy | 归属原生数量每参考流 | ghg-product-2011 |

### 数据质量要求

| requirement_id | applies_to | requirement | evidence |
| --- | --- | --- | --- |
| actual_mode_and_completion | other_land_service | 真实城市或郊区范围责任、相邻功能资格、各类定班或实际非定班附驾驶状态、架构、起讫停靠返程、范围质量时间、实际旅客完成及期间均须有据。不得把完整范围限缆索或假设技术本身证明n.e.c.内部节点不重复最终完成；真实资格或完成未知阻断数据完成。 | cp_rides |
| full_component_register | other_land_service | 补齐真实绳连接驱动制动载具塔架站房轨道控制通信救援土建资产及施工安装迁移更新退役。示例不能覆盖整套设施，逐项展开缺失真实组件原生供应或兼容完整供应方，不能重叠。 | cp_assets |
| branch_path_gear_land | other_land_service | 按真实分支解决路径轨道土地占用改造拖牵走廊整备必要装备造雪及其他场址支持的物理数量供应方责任与有据边界。每项真实水材料土地服务交换须独立，未知不等于零。 | cp_support; cp_assets |
| other_energy | other_land_service | 真实其他燃料热直流交付储能可再生发电备用回收动力须各有确切身份原生数量覆盖，未用须有证据。整股混合与替代组分互斥，供应库存净取用燃烧及其他去向分别记录。 | cp_energy |
| other_materials_and_maintenance | other_land_service | 逐项展开真实润滑脂油镀层化学品冷却液制冷剂电池磨损件及维修清洗作业，给出配方原生单位数量供应方范围，不能绑定别种物质或使用材料总括流。 | cp_maintenance |
| other_fates_and_species | other_land_service | 识别每项真实残余回收产品废水出口尾气非尾气物质粒径介质及未表征释放，逐项按来源展开原生数量。不能用通用NOx/VOC粉尘UUID，不能把蒸发当废物或库存差当排放。 | cp_fates; cp_emissions |
| incidentals_and_providers | other_land_service | 解决真实包含导览食品饮料随行服务及全部外包运行维修建设处理结果。每项真实具体产品供应方须有原生输出数量兼容性及覆盖格，费用票种不能证明范围。内容或供应方范围未知阻断完整使用。 | cp_incidentals; cp_support |
| identity_and_scope | other_land_service | 每项适用交换须核实兼容身份属性单位及真实数量证据。未解析卡和缺通用范围是诚实候选缺口，不代表最终完成零交换或默认数值。单独披露不确定性和LCIA表征缺口，不能与物理清单混淆。 | cp_rides; cp_emissions |
| noncable_native_obligations | other_land_service | 按真实原生方法补齐非缆索定班及非定班附驾驶的驱动车辆导向接触来源储能控制冷却场址支持，不仅挂分支名称。纳入充电输入内部回收能、怠速空驶待机救援驾驶支持、整机组件原装及更换交接点、来源特定排放磨耗沉积径流及独立去向。初始长期交付库存与期间补充循环分开；缺示例卡数量代表数据不全，不代表产品不存在。 | cp_rides; cp_energy; cp_support; cp_maintenance; cp_assets; cp_fates; cp_emissions |
| atomic_actual_expansion | other_land_service | 每项实际未示范能源材料部件资产供应结果配料随行支持废物化合物颗粒去向须有唯一原子row_id、该存在父过程、方向类型、一个具体实际身份状态交接点、已核UUID或明确未解、原生属性单位数量及原始来源、同父过程CP、有据计算、准确供应覆盖、接收子区室及不确定性，并关联触发DQ id。不使用总括选择流、虚构因子范围、缺失为零或抹去已知接收信息；全部实际已含功能保留直至证据闭合。 | cp_rides; cp_energy; cp_support; cp_maintenance; cp_assets; cp_fates; cp_emissions; cp_incidentals |

这些是强制真实采集和独立展开义务，不是总括交换。先证明真实发生或有据不适用，再逐项建立过程方向类型、身份原生数量、来源及交接点；未知阻断完成，不允许用示例列表删去必要交换。

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| reference_gate | other_land_service | 核实双语唯一真实完成乘客参考1Item(s)、相同正N队列期间模式端点及真实附带服务。工作人员载具数度假区通票及未完成服务不能替代。 | ghg-product-2011 |
| energy_and_fuel_gate | other_land_service | 核对耦合计量能量双向空回待机测试回收储能损失内外回收及全用户分配。燃料整股组分互斥，取用燃烧溢洒回收库存闭合，不允许未解释余量或供应自动等于燃烧。 | ghg-product-2011 |
| coverage_and_fate_gate | other_land_service | 检查仅制造与完整供应方范围、完整设施组件初供更新、必要分支路径装备支持、真实物质介质及独立废物处理责任。供应方库存回收资本及归一化数量不得重复。 | ghg-product-2011 |
| comparability | other_land_service | 仅比较真实合格其他陆路运输功能方式端点距离竖向几何方向乘客服务质量期间季节作业分配及完整生命周期附带服务均相当的结果。相同计数额定运力不能证明等价服务，不授权通用强度或优势。 | ghg-product-2011 |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | foreground_data_package |
| downstream_use | 真实前景证据及身份复核完整后方可用作secondary_dataset/background_dataset |
| allowed_use | 实际剩余资格合格的城市或郊区已完成客运，匹配定班缆索、其他定班机械化或非定班附驾驶功能，以及原生方式范围质量时间活动附带服务生命周期 |
| excluded_use | 跨不等方式范围的通用人公里强度；按技术自动归为剩余类别；相邻功能、以度假区准入观光待命为主、无驾驶人员裸租；因驱动标签宣称零生命周期或非尾气 |
| required_metadata | 真实功能及相邻资格判断；城市郊区范围责任；定班或非定班驾驶；操作及旅客角色；架构来源储能辅助；起讫停靠返程时间质量；完成N；免费随行载荷附带内容；完整活动场址装备驾驶供应原生需求及资产寿命格；接收去向不确定性 |
| required_quality_disclosure | 全部真实未解析身份数量、运行分支供应方资产去向覆盖、抽样模型寿命分配不确定性及LCIA缺口 |
| update_trigger | 模式线路几何作业用户附带内容载具驱动资产供应方回收配置证据及完成定义变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| unsd-cpc3-64119 | official_guidance | UNSD CPC3.0 ExplanatoryNotes,30June2025,p360,64119. https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类缆索缆索铁路架空滑雪及其他分支，随行物和真实免费导览食品纳入；不是数量因子，也不证明全部叶子线路共用本方法。 |
| cableway-subsystems-2016 | official_guidance | EU2016/424 asadopted9March2016,Article3,AnnexI/II,official reproduction. https://www.legislation.gov.uk/eur/2016/424/body/adopted?view=plain and https://www.legislation.gov.uk/eur/2016/424/annexes/adopted?view=plain | 历史技术整套设施、悬挂导向拖牵乘客机制及组件接口问题；不作为当前法律安全符合意见、通用实际配置或LCA因子。 |
| cableway-lifecycle-2025 | handbook | Doppelmayr,Our commitment to a better future:A contribution to greater sustainability,publisher2025URL,printedpp16,20. https://www.doppelmayr.com/wp-content/uploads/2025/04/Brochure_Our_commitment_to_a_better_future_A_contribution_to_greater_stustainability_2025_eng.pdf | 仅采用制造商设施材料生产运输运行维修退役及实测数据的定性问题，不移植比较碳结果、假设寿命利用率或通用费率，其PCF循环边界不强加给本PCR。 |
| ipcc-stationary-2006 | official_guidance | IPCC2006Guidelines,Vol2Ch2,sections2.1–2.3,pp2.6–2.11. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_2_Ch2_Stationary_Combustion.pdf | 仅采用真实固定来源燃料技术活动基准，不采用默认氧化排放值；移动作业须另有适用证据，国家温室气体报告范围不等于本完整多影响生命周期。 |
| ghg-product-2011 | standard | WRI/WBCSD ProductLifeCycleAccountingReportingStandard2011,chapters7–9. https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 边界数据透明及细分物理分配；扩展完整资本分支附带范围和真实采集公式是本PCR明确选择，不是通用因子或归于该标准的资本强制要求。 |
| ipcc-mobile-2006 | official_guidance | IPCC2006 Guidelines,Volume2,Chapter3,actual sections3.1–3.2 pp3.8–3.12. https://www.ipcc-nggip.iges.or.jp/public/2006gl/pdf/2_Volume2/V2_3_Ch3_Mobile_Combustion.pdf | 仅用于真实移动来源燃料技术活动兼容性问题。不采用默认因子、完全氧化、国家燃料售出等于现场燃烧或生物碳物理零惯例；实际来源物种及非燃烧尾气其他去向独立要求。 |
| land-native-mechanisms | official_guidance | Hitachi Review54(4),2005,actual Chongqing monorail bogie/tyre paragraph,p4. https://www.hitachi.com/ICSFiles/afieldfile/2005/12/26/r2005_04_107.pdf ; Japan Subway Association,actual wheel-supported linear-motor explanation. https://www.jametro.or.jp/tips/linear/how-linear-motor-works/ | 仅用于有条件的真实车轮轮胎充气控制及初级线圈反应板物理接口。不声明这些个案属于64119，不采用通用轮胎能源寿命数值，也不按技术归为剩余类别。其他真实原生配置须有独立适用记录。 |
